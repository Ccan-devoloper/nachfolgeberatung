/* ==========================================================================
   Hook-Engine (Strategiepapier, Abschnitt 4 und 5).

   Kein Beitrag verwendet sofort einen Hook. Der Autor liefert fünf Hooks in
   zugelassenen Kategorien; ein zweites, unabhängiges Modell bewertet jeden
   in fünf Dimensionen mit 1–10 Punkten. Veröffentlicht wird nur ein Hook
   mit mindestens 40 von 50 Punkten – und keiner, der marktschreierisch ist.
   ========================================================================== */

import Anthropic from "@anthropic-ai/sdk";
import { CONFIG } from "./config.mjs";
import { erfassen, budgetPruefen } from "./kosten.mjs";

let clientCache = null;
const client = () => (clientCache ||= new Anthropic({ maxRetries: 3, timeout: 3 * 60 * 1000 }));

/** Die zugelassenen Hook-Kategorien mit je einem Beispiel. */
export const HOOK_TYPEN = {
  irrtum:            { name: "Irrtum",               beispiel: "Eine Familienstiftung spart nicht automatisch Steuern." },
  kontraindikation:  { name: "Kontraindikation",     beispiel: "Wann Sie besser keine Familienstiftung gründen sollten." },
  folge:             { name: "Unterschätzte Folge",  beispiel: "Was viele Stifter erst nach der Gründung merken." },
  vergleich:         { name: "Vergleich",            beispiel: "Familienstiftung oder Holding – was ist eigentlich der Unterschied?" },
  zeitfalle:         { name: "Zeitfalle",            beispiel: "Die Steuer, die erst 30 Jahre später relevant wird." },
  kontrollfrage:     { name: "Kontrollfrage",        beispiel: "Wie viel Kontrolle darf der Stifter behalten?" },
  entscheidung:      { name: "Entscheidungsfrage",   beispiel: "Deutschland oder Liechtenstein – wann macht der Unterschied wirklich etwas aus?" },
  konsequenz:        { name: "Konkrete Konsequenz",  beispiel: "Was passiert mit GmbH-Anteilen, sobald sie der Stiftung gehören?" },
};
export const HOOK_TYP_LISTE = Object.keys(HOOK_TYPEN);

export const DIMENSIONEN = ["verstaendlichkeit", "neugier", "praezision", "share", "serioesitaet"];

/* Was Claude ausdrücklich nicht schreiben darf (Abschnitt 5). Trifft ein
   Muster, fällt der Hook – und der ganze Beitrag, wenn es im Text steht. */
export const VERBOTEN = [
  /mit diesem trick/i,
  /so umgehen sie/i,
  /umgehen sie die/i,
  /finanzamt (möchte|will|soll) nicht,? dass/i,
  /geheime[rsn]? (stiftungs)?trick/i,
  /\btrick\b/i,
  /schlupfl[oö]ch/i,
  /so schützen reiche/i,
  /\bmillionäre?\b/i,
  /kostet (sie|dich) millionen/i,
  /das wissen (nur )?die wenigsten/i,
  /was (dir|ihnen) (niemand|keiner) sagt/i,
  /\bgeheimnis\b/i,
  /\bhack\b/i,
  /jetzt (sofort )?handeln/i,
  /bevor es zu spät ist/i,
  /steuerfrei vererben/i,
];

export function verboteneFormulierung(text) {
  const t = String(text || "");
  return VERBOTEN.find((m) => m.test(t)) || null;
}

/** Wortzahl eines Hooks. */
export const woerter = (s) => String(s || "").trim().split(/\s+/).filter(Boolean).length;

/* Formale Vorprüfung: Länge und Sperrliste, bevor ein Modell bewertet. */
export function hookFormal(hook) {
  const fehler = [];
  const n = woerter(hook.text);
  if (n < CONFIG.carousel.hookWoerterMin) fehler.push(`zu kurz (${n} Wörter)`);
  if (n > CONFIG.carousel.hookWoerterMax) fehler.push(`zu lang (${n} Wörter, höchstens ${CONFIG.carousel.hookWoerterMax})`);
  const v = verboteneFormulierung(hook.text);
  if (v) fehler.push(`marktschreierisch (${v})`);
  if (!HOOK_TYPEN[hook.typ]) fehler.push(`unbekannte Kategorie „${hook.typ}“`);
  if (/\b(du|dich|dir|dein\w*)\b/i.test(hook.text)) fehler.push("Du-Form – der Kanal siezt");
  return fehler;
}

const SCHEMA = {
  type: "object",
  additionalProperties: false,
  properties: {
    bewertungen: {
      type: "array",
      items: {
        type: "object",
        additionalProperties: false,
        properties: {
          nr: { type: "integer" },
          verstaendlichkeit: { type: "integer" },
          neugier: { type: "integer" },
          praezision: { type: "integer" },
          share: { type: "integer" },
          serioesitaet: { type: "integer" },
          begruendung: { type: "string" },
        },
        required: ["nr", "verstaendlichkeit", "neugier", "praezision", "share", "serioesitaet", "begruendung"],
      },
    },
  },
  required: ["bewertungen"],
};

const SYSTEM = `Du bewertest Hooks (erste Folie eines Instagram-Carousels) eines juristischen Fachkanals für Stiftungsrecht und Unternehmensnachfolge. Zielgruppe: vermögende Privatpersonen und Unternehmerfamilien, keine Juristen. Der Kanal ist eine seriöse Fachmarke eines promovierten Rechtsanwalts – modern, aber nie marktschreierisch.

Bewerte jeden Hook mit 1–10 in fünf Dimensionen:
- verstaendlichkeit: versteht ein intelligenter Nichtjurist die Aussage beim ersten Lesen?
- neugier: will man weiterlesen, ohne dass etwas versprochen wird, das der Text nicht halten kann?
- praezision: ist die Aussage fachlich haltbar und nicht verkürzt bis zur Unwahrheit?
- share: würde man das jemandem schicken, der gerade eine Nachfolge oder Stiftung prüft?
- serioesitaet: passt der Ton zu einer Anwaltskanzlei? Übertreibung, Clickbait, „Trick“-Sprache oder künstliche Dramatik kosten hier Punkte.

Strenge Maßstäbe: 8–10 nur, wenn der Hook wirklich herausragt. Eine kurze Begründung je Hook (ein Satz).`;

/**
 * Bewertet Hooks mit einem unabhängigen Modell.
 * @param {Array<{typ:string, text:string}>} hooks
 * @param {string} thema  Titel des Themas als Kontext
 * @returns {Promise<Array<{typ, text, punkte, dimensionen, begruendung, formal:string[]}>>}
 */
export async function hooksBewerten(hooks, thema, { modell = CONFIG.ki.modellPruefung } = {}) {
  const liste = hooks.map((h, i) => ({ nr: i + 1, ...h, formal: hookFormal(h) }));
  const gueltig = liste.filter((h) => !h.formal.length);
  if (!gueltig.length) return liste.map((h) => ({ ...h, punkte: 0, dimensionen: {}, begruendung: "formal abgelehnt" }));
  budgetPruefen("Hooks bewerten");
  const user = `Thema des Beitrags: ${thema}\n\nHooks:\n${gueltig.map((h) => `${h.nr}. [${HOOK_TYPEN[h.typ]?.name || h.typ}] ${h.text}`).join("\n")}\n\nBewerte jeden Hook.`;
  const haiku = /haiku/i.test(modell);
  const basis = {
    model: modell,
    max_tokens: 3000,
    system: [{ type: "text", text: SYSTEM, cache_control: { type: "ephemeral" } }],
    messages: [{ role: "user", content: user }],
    ...(haiku ? {} : { thinking: { type: "adaptive" } }),
    output_config: { ...(haiku ? {} : { effort: "low" }), format: { type: "json_schema", schema: SCHEMA } },
  };
  let response;
  try {
    response = await client().messages.create(basis);
  } catch (e) {
    if (!(e instanceof Anthropic.BadRequestError)) throw e;
    const { thinking, output_config, ...rest } = basis;
    response = await client().messages.create({ ...rest, messages: [{ role: "user", content: `${user}\n\nAntworte ausschließlich mit einem JSON-Objekt nach diesem Schema:\n${JSON.stringify(SCHEMA)}` }] });
  }
  erfassen(modell, response.usage, "hooks");
  const text = response.content.filter((b) => b.type === "text").map((b) => b.text).join("");
  let daten;
  try { daten = JSON.parse(text.slice(text.indexOf("{"), text.lastIndexOf("}") + 1)); } catch { daten = { bewertungen: [] }; }
  const nachNr = new Map((daten.bewertungen || []).map((b) => [b.nr, b]));
  return liste.map((h) => {
    if (h.formal.length) return { ...h, punkte: 0, dimensionen: {}, begruendung: h.formal.join("; ") };
    const b = nachNr.get(h.nr);
    if (!b) return { ...h, punkte: 0, dimensionen: {}, begruendung: "nicht bewertet" };
    const dimensionen = Object.fromEntries(DIMENSIONEN.map((d) => [d, Math.max(1, Math.min(10, Number(b[d]) || 1))]));
    const punkte = DIMENSIONEN.reduce((a, d) => a + dimensionen[d], 0);
    return { ...h, punkte, dimensionen, begruendung: b.begruendung || "" };
  });
}

/**
 * Wählt den besten Hook. Gelernte Gewichte je Kategorie (Lernschleife)
 * verschieben knappe Entscheidungen, nie die Mindestpunkte.
 * @returns {{gewaehlt: object|null, bewertet: object[]}}
 */
export function hookWaehlen(bewertet, { strategie = null, mindest = CONFIG.hooks.mindestPunkte } = {}) {
  const g = strategie?.hookGewicht || {};
  const sortiert = [...bewertet].sort((a, b) => (b.punkte * (g[b.typ] ?? 1)) - (a.punkte * (g[a.typ] ?? 1)));
  const gewaehlt = sortiert.find((h) => h.punkte >= mindest) || null;
  return { gewaehlt, bewertet: sortiert };
}

/** Der Abschnitt, der im Auftrag an den Autor steht. */
export function hookAnleitung() {
  return `## Hooks (Folie 1) – fünf Vorschläge, aus denen einer gewählt wird
Liefere im Feld "hooks" genau ${CONFIG.hooks.anzahl} Hooks in verschiedenen Kategorien. Jeder Hook ist ein Satz mit ${CONFIG.carousel.hookWoerterMin}–${CONFIG.carousel.hookWoerterMax} Wörtern, der das Scrollen stoppt, ohne zu übertreiben.
Zugelassene Kategorien (typ):
${HOOK_TYP_LISTE.map((k) => `  · ${k} – ${HOOK_TYPEN[k].name}: „${HOOK_TYPEN[k].beispiel}“`).join("\n")}
Verboten sind Formulierungen wie „Mit diesem Trick …“, „So umgehen Sie …“, „Das Finanzamt möchte nicht, dass …“, „Schlupflöcher“, „So schützen Reiche …“, „Dieser Fehler kostet Sie Millionen“ (wenn nicht belegt). Keine künstliche Dramatik. Interessant, nie marktschreierisch.
Folie 1 trägt zunächst deinen Favoriten; die endgültige Wahl trifft eine Bewertung nach Verständlichkeit, Neugier, Präzision, Share-Potenzial und Seriosität.`;
}

/** Kategorie eines Hooks erkennen (für gespeicherte Beiträge ohne Angabe). */
export function hookTypErkennen(text = "") {
  const t = String(text);
  if (/\b(oder|versus|vs\.?)\b/i.test(t) && /unterschied|wann/i.test(t)) return "vergleich";
  if (/nicht automatisch|kein pauschal|irrtum|stimmt (so )?nicht|glauben/i.test(t)) return "irrtum";
  if (/besser (keine|nicht)|wann .* nicht|ungeeignet/i.test(t)) return "kontraindikation";
  if (/erst (nach|später|in \d+ jahren)|jahre später|\b30 jahre\b|frist/i.test(t)) return "zeitfalle";
  if (/wie viel|wieviel|kontrolle|einfluss|behalten/i.test(t)) return "kontrollfrage";
  if (/deutschland oder liechtenstein|wann macht/i.test(t)) return "entscheidung";
  if (/was passiert|sobald|wem gehört|was wird aus/i.test(t)) return "konsequenz";
  if (/merken|übersehen|unterschätz|folge/i.test(t)) return "folge";
  return "konsequenz";
}
