/* ==========================================================================
   Autor: schreibt Carousels und Stories mit der Claude API.

   Eingabe: ein Themen-Skelett aus inhalte.mjs (Titel, Normen, Kerngedanken,
   Blöcke) plus Blickwinkel, CTA-Typ und ggf. Gegencheck-Notiz.
   Ausgabe: fertiger Beitrag (Folien, Caption, Hashtags, Hooks, Sicherheits-
   felder) bzw. Stories – als JSON, das render.mjs direkt versteht.

   Ablauf je Beitrag:  schreiben → Hooks bewerten → Eigenständigkeits- und
   Formprüfung → Faktencheck I (Claude) → Faktencheck II (OpenAI) → fertig.
   Jede Beanstandung geht als Feedback in den nächsten Entwurf.
   ========================================================================== */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import Anthropic from "@anthropic-ai/sdk";
import { CONFIG } from "./config.mjs";
import { SCHWERPUNKTE, themaText } from "./inhalte.mjs";
import { pruefeBeitrag, folieLeer, FOLIEN_ARTEN } from "./pruefung.mjs";
import { datumLesbar } from "./zeit.mjs";
import { erfassen, budgetPruefen } from "./kosten.mjs";
import { pruefeFakten, korrekturenAnwenden } from "./faktencheck.mjs";
import { pruefeFaktenOpenai, OpenaiFehler } from "./faktencheck-openai.mjs";
import { hooksBewerten, hookWaehlen, hookAnleitung, hookFormal, hookTypErkennen, HOOK_TYP_LISTE } from "./hooks.mjs";
import { normKurz, felderKuerzen, NORM_REGEL } from "./normen.mjs";

const hier = path.dirname(fileURLToPath(import.meta.url));
const beispiele = JSON.parse(fs.readFileSync(path.resolve(hier, "../beispiele/inhalte.json"), "utf8"));

let clientCache = null;
const client = () => (clientCache ||= new Anthropic({ maxRetries: 3, timeout: 10 * 60 * 1000 }));

/* Blickwinkel – aus welchem Block der Wissensbasis der Beitrag schöpft. */
export const BLICKWINKEL = {
  mythos:      { label: "Irrtum",              anleitung: "Ein verbreiteter Irrtum wird sachlich richtiggestellt. Folie 2 nennt die Erwartung, Folien 3–5 erklären, warum es anders ist, Folie 6 ordnet ein, wann die Erwartung doch stimmt." },
  einsatzfeld: { label: "Einsatzfeld",         anleitung: "In welcher Lage passt das Instrument? Folie 2 beschreibt die typische Situation, Folien 3–5 erklären, was das Instrument dort leistet, Folie 6 grenzt ab, wann es nicht passt." },
  vorteil:     { label: "Vorteil",             anleitung: "Ein konkreter Nutzen, ehrlich erklärt – mit seiner Voraussetzung und seiner Grenze. Nie werbend." },
  abwaegung:   { label: "Abwägung",            anleitung: "Vorteile und Nachteile nebeneinander (Folie „vergleich“ oder „einordnung“). Die Ehrlichkeit ist der Punkt." },
  alternative: { label: "Alternative",         anleitung: "Wann ist etwas anderes die bessere Wahl? Instrument und Alternative gegenüberstellen, Entscheidungskriterien nennen." },
  beispiel:    { label: "Beispiel",            anleitung: "Eine erfundene, anonyme Konstellation trägt den Beitrag: Ausgangslage (Folie 2), Gestaltung (Folien 3–4), Ergebnis mit Zahlen (Folie 5), Übertragbarkeit (Folie 6)." },
  ablauf:      { label: "Ablauf",              anleitung: "So läuft es, für Mandanten erzählt – als Zeitachse oder Schritte, kein Prüfschema. Was passiert wann, wer ist beteiligt, wo hakt es." },
  fehlerfalle: { label: "Fehlerfalle",         anleitung: "Was in der Praxis schiefgeht: Folie 2 der Fehler, Folien 3–5 warum und mit welcher Folge, Folie 6 wie es richtig geht." },
  vergleich:   { label: "Vergleich",           anleitung: "Zwei Instrumente oder zwei Rechtsordnungen in zwei Spalten (Folie „vergleich“), dann das entscheidende Kriterium." },
  zahl:        { label: "Zahl",                anleitung: "Eine belegbare Zahl (Frist, Freibetrag, Satz, Schwelle) trägt den Beitrag: Folie „zahl“ groß, dann Bedeutung, Beispiel, Einordnung." },
  frage:       { label: "Frage",               anleitung: "Eine Mandantenfrage und ihre Antwort in drei Schritten." },
};

const CTA_TYPEN = {
  save:         "Speichern – der Beitrag ist eine Referenz, zu der man zurückkehrt (z. B. „Speichern Sie diesen Beitrag, wenn …“).",
  share:        "Teilen – der Beitrag ist für jemanden im Umfeld gedacht (z. B. „Leiten Sie das weiter, wenn in Ihrer Familie …“).",
  follow:       "Folgen – für weitere Beiträge dieser Art (z. B. „Folgen Sie dem Kanal für sachliche Einordnungen zu Stiftung und Nachfolge.“).",
  conversation: "Gespräch – eine echte Frage an die Leserschaft, die zu einem Kommentar einlädt (keine Quizfrage, keine rhetorische Frage).",
  conversion:   "Kontakt – zurückhaltend: Wer eine konkrete Konstellation hat, kann sich beraten lassen. Ein Satz, kein Drängen, keine Versprechen.",
};

const SYSTEM = `Du schreibst für den Instagram-Kanal „${CONFIG.marke.anzeigename}“ – eine faceless Fachmarke eines promovierten Rechtsanwalts für Stiftungsrecht und Unternehmens- und Vermögensnachfolge. Zielgruppe: vermögende Privatpersonen, Unternehmerfamilien, Stifter und deren Berater – intelligente Nichtjuristen, die eine Entscheidung vorbereiten. Kein Fachpublikum, keine Studierenden.

## Stimme
- Ein promovierter Rechtsanwalt erklärt einem klugen Mandanten – präzise, ruhig, verständlich, ohne Juristendeutsch und ohne Influencer-Sprache. Sie-Form, immer.
- Klare Hauptsätze. Jede Folie trägt genau eine zentrale Aussage. Auf einer Kachel wird gelesen, nicht studiert.
- Sachlich, nie marktschreierisch. Keine Dramatik, kein Versprechen, keine Emojis auf Kacheln (in der Caption keine).
- Keine individualisierte Beratung: nie „in Ihrem Fall“, nie „Sie sollten jetzt“. Immer abstrakt: „wer …, der …“, „in Konstellationen, in denen …“.
- Jede Aussage muss juristisch korrekt sein (Rechtsstand ${new Date().getFullYear()}, Deutschland und Liechtenstein sauber getrennt). ${NORM_REGEL} Bist du dir bei einem Detail nicht sicher, lass es weg.
- Normen in der Kurzform: § 15 Abs. 2 S. 1 ErbStG, Art. 552 § 1 PGR.

## Eigenständigkeit
- Du bekommst ein Themen-Skelett. Formuliere ALLES neu, in eigener Struktur und eigenen Worten. Übernimm keine Sätze und nicht die Kernaussage der Vorlage.
- Beispiele sind erfunden und anonym: „ein Unternehmer, 62, zwei Kinder“, „eine Familie mit Immobilienvermögen von 8 Mio. €“. Nie Namen (kein „Herr Müller“, keine „Familie Schmidt“), keine echten Firmen, keine Avatare.
- Keine Bezüge auf Aufsätze, Vorträge, Seiten, Dossiers, Autoren, Kanzleien.

## Aufbau des Carousels (Standard 7 Folien, mindestens 5, höchstens 9)
Folie 1  art „hook“ – die Kernaussage oder Kernfrage in 6–14 Wörtern; untertitel: ein Satz, der den Hook einordnet (optional).
Folie 2  Problem oder Ausgangslage – warum ist das relevant?
Folie 3  Erklärung I
Folie 4  Erklärung II
Folie 5  Erklärung III oder Beispiel
Folie 6  art „einordnung“ – wann ist das relevant, wann problematisch (relevant/problematisch, je 2–3 Punkte)
Folie 7  art „takeaway“ – text: die Kernaussage in ein bis zwei Sätzen; cta: die Aufforderung passend zum vorgegebenen CTA-Typ (ein Satz).
Kein Inhaltsverzeichnis, keine Begrüßung, keine Swipe-Aufforderung.

## Folienarten (Feld „art“) und ihre Felder – Grafik statt Stockfoto
- text: titel (Zwischenüberschrift, 3–8 Wörter) + text (20–45 Wörter) ODER punkte (höchstens 3, je ein Satz). Nicht beides.
- struktur: titel + knoten (2–4, je label und kurzes unter) – Beteiligungskette oder Struktur, gelesen von links nach rechts (Stifter → Stiftung → GmbH). Optional ein text-Satz darunter.
- vergleich: titel + links/rechts (je titel und höchstens 3 punkte) – DE/LI, Instrument A/B, vorher/nachher.
- zeitachse: titel + schritte (2–4, je zeit und text) – Fristen, Phasen, Zeitfallen. Optional ein text-Satz.
- zahl: titel + zahl (die Zahl oder Norm, kurz) + einheit (optional) + text (was sie bedeutet, 15–40 Wörter).
- beispiel: titel + text (die erfundene, anonyme Konstellation mit konkreten Zahlen, 30–55 Wörter).
- einordnung: titel + relevant (2–3 Punkte) + problematisch (2–3 Punkte).
- takeaway: titel „Take-away“ + text + cta.
Je Folie: Folientext 20–45 Wörter (absolut höchstens 60), höchstens 3 Punkte, höchstens zwei Normzitate.

## Caption (100–220 Wörter)
Zwei Sätze Einstieg (der erste ist Suchtext: nennt das Thema so, wie jemand es eintippen würde) · fachliche Einordnung in 4–8 Sätzen mit Normen · ein Satz zur Grenze der Aussage · dann exakt diese Zeile: „Allgemeine Information, keine Rechtsberatung im Einzelfall. Rechtsstand: <Monat Jahr>.“ · zuletzt die Aufforderung passend zum CTA-Typ. Keine Hashtags in der Caption, kein „Link in Bio“${CONFIG.marke.website ? `, außer dem Hinweis auf ${CONFIG.marke.website}` : ""}.

## Weitere Felder
- hashtags: 6–10 deutsche, kleingeschriebene Hashtags zum Thema (die Kernhashtags werden ergänzt).
- kurztitel: 3–6 Wörter für die Story-Ankündigung.
- storyHinweis: ein Satz (max. 25 Wörter), der in der Story sagt, was der Beitrag erklärt.
- sicherheit: rechtsstand („September 2026“), jurisdiktion (DE | LI | DE/LI), primaerquelle (das tragende Gesetz oder Urteil), normen (Liste), unsicherheit (niedrig | mittel | hoch – wie sicher ist die Aussage über Konstellationen hinweg).

## Beispiel eines fertigen Beitrags (Blickwinkel Irrtum, CTA Speichern)
${JSON.stringify({ folien: beispiele.beitraege[0].folien, caption: beispiele.beitraege[0].caption, hashtags: beispiele.beitraege[0].hashtags, kurztitel: beispiele.beitraege[0].kurztitel, storyHinweis: beispiele.beitraege[0].storyHinweis, sicherheit: beispiele.beitraege[0].sicherheit }, null, 1)}

## Beispiel eines fertigen Beitrags (Blickwinkel Vergleich, CTA Teilen)
${JSON.stringify({ folien: beispiele.beitraege[1].folien, caption: beispiele.beitraege[1].caption, hashtags: beispiele.beitraege[1].hashtags, kurztitel: beispiele.beitraege[1].kurztitel, storyHinweis: beispiele.beitraege[1].storyHinweis, sicherheit: beispiele.beitraege[1].sicherheit }, null, 1)}

## Beispiel-Stories (Ton und Länge)
${JSON.stringify(beispiele.stories.filter((s) => s.art !== "hinweis"), null, 1)}
`;

const KNOTEN_SCHEMA = { type: "object", additionalProperties: false, properties: { label: { type: "string" }, unter: { type: ["string", "null"] } }, required: ["label", "unter"] };
const SCHRITT_SCHEMA = { type: "object", additionalProperties: false, properties: { zeit: { type: "string" }, text: { type: "string" } }, required: ["zeit", "text"] };
const SEITE_SCHEMA = { type: ["object", "null"], additionalProperties: false, properties: { titel: { type: "string" }, punkte: { type: "array", items: { type: "string" } } }, required: ["titel", "punkte"] };

const FOLIE_SCHEMA = {
  type: "object",
  additionalProperties: false,
  properties: {
    art: { type: "string", enum: FOLIEN_ARTEN },
    titel: { type: ["string", "null"] },
    untertitel: { type: ["string", "null"] },
    text: { type: ["string", "null"] },
    punkte: { type: ["array", "null"], items: { type: "string" } },
    knoten: { type: ["array", "null"], items: KNOTEN_SCHEMA },
    schritte: { type: ["array", "null"], items: SCHRITT_SCHEMA },
    links: SEITE_SCHEMA,
    rechts: SEITE_SCHEMA,
    zahl: { type: ["string", "null"] },
    einheit: { type: ["string", "null"] },
    relevant: { type: ["array", "null"], items: { type: "string" } },
    problematisch: { type: ["array", "null"], items: { type: "string" } },
    cta: { type: ["string", "null"] },
  },
  required: ["art", "titel", "untertitel", "text", "punkte", "knoten", "schritte", "links", "rechts", "zahl", "einheit", "relevant", "problematisch", "cta"],
};

const SICHERHEIT_SCHEMA = {
  type: "object",
  additionalProperties: false,
  properties: {
    rechtsstand: { type: "string" },
    jurisdiktion: { type: "string", enum: ["DE", "LI", "DE/LI"] },
    primaerquelle: { type: "string" },
    normen: { type: "array", items: { type: "string" } },
    unsicherheit: { type: "string", enum: ["niedrig", "mittel", "hoch"] },
  },
  required: ["rechtsstand", "jurisdiktion", "primaerquelle", "normen", "unsicherheit"],
};

const BEITRAG_SCHEMA = {
  type: "object",
  additionalProperties: false,
  properties: {
    hooks: { type: "array", items: { type: "object", additionalProperties: false, properties: { typ: { type: "string", enum: HOOK_TYP_LISTE }, text: { type: "string" } }, required: ["typ", "text"] } },
    folien: { type: "array", items: FOLIE_SCHEMA },
    caption: { type: "string" },
    hashtags: { type: "array", items: { type: "string" } },
    kurztitel: { type: "string" },
    storyHinweis: { type: "string" },
    sicherheit: SICHERHEIT_SCHEMA,
  },
  required: ["hooks", "folien", "caption", "hashtags", "kurztitel", "storyHinweis", "sicherheit"],
};

const SCHAUBILD_SCHEMA = {
  type: ["object", "null"],
  additionalProperties: false,
  properties: {
    art: { type: "string", enum: ["struktur", "zeitachse", "vergleich"] },
    knoten: { type: ["array", "null"], items: KNOTEN_SCHEMA },
    schritte: { type: ["array", "null"], items: SCHRITT_SCHEMA },
    links: SEITE_SCHEMA,
    rechts: SEITE_SCHEMA,
  },
  required: ["art", "knoten", "schritte", "links", "rechts"],
};

const STORY_SCHEMA = {
  type: "object",
  additionalProperties: false,
  properties: {
    stories: {
      type: "array",
      items: {
        type: "object",
        additionalProperties: false,
        properties: {
          slot: { type: "string" },
          art: { type: "string", enum: ["hook", "wissen", "aktuell"] },
          ueberzeile: { type: ["string", "null"] },
          titel: { type: "string" },
          text: { type: ["string", "null"] },
          norm: { type: ["string", "null"] },
          schaubild: SCHAUBILD_SCHEMA,
        },
        required: ["slot", "art", "ueberzeile", "titel", "text", "norm", "schaubild"],
      },
    },
  },
  required: ["stories"],
};

const textAus = (r) => r.content.filter((b) => b.type === "text").map((b) => b.text).join("\n");
function jsonAus(text) {
  const a = text.indexOf("{"), e = text.lastIndexOf("}");
  if (a < 0 || e < 0) throw new Error("Keine JSON-Antwort erhalten");
  return JSON.parse(text.slice(a, e + 1));
}

/* Ein strukturierter Aufruf mit Rückfall bei Ablehnung oder Schema-Problemen. */
async function strukturiert({ system, user, schema, modell = CONFIG.ki.modell, effort = CONFIG.ki.effort, zweck = "autor", maxTokens = 12000 }) {
  const basis = {
    model: modell,
    max_tokens: maxTokens,
    system: [{ type: "text", text: system, cache_control: { type: "ephemeral" } }],
    messages: [{ role: "user", content: user }],
    thinking: { type: "adaptive" },
    output_config: { effort, format: { type: "json_schema", schema } },
  };
  budgetPruefen(zweck === "stories" ? "Stories schreiben" : "Beitrag schreiben");
  let response;
  try {
    response = await client().messages.create(basis);
  } catch (e) {
    if (e instanceof Anthropic.BadRequestError && /output_config|schema|format/i.test(e.message)) {
      const { output_config, ...ohne } = basis;
      response = await client().messages.create({ ...ohne, output_config: { effort }, messages: [{ role: "user", content: `${user}\n\nAntworte ausschließlich mit einem JSON-Objekt nach diesem Schema:\n${JSON.stringify(schema)}` }] });
    } else throw e;
  }
  erfassen(modell, response.usage, zweck);
  if (response.stop_reason === "refusal") {
    if (modell !== "claude-opus-4-8") return strukturiert({ system, user, schema, modell: "claude-opus-4-8", effort, zweck, maxTokens });
    throw new Error(`Modell hat abgelehnt: ${response.stop_details?.explanation || "ohne Begründung"}`);
  }
  if (response.stop_reason === "max_tokens") throw new Error("Antwort abgeschnitten (max_tokens)");
  return { daten: jsonAus(textAus(response)), usage: response.usage };
}

/* Hashtags: Kern + Vorschläge des Modells, nach gelerntem Gewicht sortiert,
   dazu zwei täglich rotierende Entdecker-Tags. */
export function hashtagsWaehlen(vorschlaege, kern = CONFIG.hashtags.kern, strategie = null, tag = Math.floor(Date.now() / 86400000)) {
  const norm = (h) => (h.startsWith("#") ? h : `#${h}`).toLowerCase().replace(/\s+/g, "");
  const g = strategie?.hashtagGewicht || {};
  const eigene = [...new Set((vorschlaege || []).map(norm))].filter((h) => !kern.includes(h)).sort((a, b) => (g[b] ?? 1) - (g[a] ?? 1));
  const entdecker = CONFIG.hashtags.entdecker || [];
  const neu = entdecker.length ? [entdecker[tag % entdecker.length], entdecker[(tag * 7 + 3) % entdecker.length]] : [];
  const liste = [...kern, ...neu];
  for (const h of eigene) if (liste.length < CONFIG.hashtags.maxJeBeitrag && !liste.includes(h)) liste.push(h);
  return [...new Set(liste)].slice(0, CONFIG.hashtags.maxJeBeitrag);
}

export function rechtsstandText(datum) {
  const [j, m] = datum.split("-").map(Number);
  return `${["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"][m - 1]} ${j}`;
}

/* Faktencheck I, der einen fertigen Entwurf nie verwirft: Fällt der Prüfaufruf
   selbst aus, gilt der Entwurf mit Hinweis als geprüft – Faktencheck II ist
   streng und fängt das auf. */
async function faktenSicher(inhalt, zweck = "faktencheck", opt = {}) {
  try { return await pruefeFakten(inhalt, zweck, opt); }
  catch (e) {
    console.warn(`  ! Faktencheck I nicht möglich (${e.message.split("\n")[0].slice(0, 160)}).`);
    return { ok: true, fehler: [], hinweise: [`Faktencheck I ausgefallen: ${e.message.slice(0, 120)}`], korrekturen: [], unsicherheit: "mittel" };
  }
}

const STUFE = { niedrig: 0, mittel: 1, hoch: 2 };
const hoechste = (...s) => Object.keys(STUFE).find((k) => STUFE[k] === Math.max(...s.map((x) => STUFE[x] ?? 0)));

/** Faktencheck II auf einem Beitrag oder einer Story-Liste; wirft OpenaiFehler bei Ausfall. */
export async function zweiterFaktencheck(inhalt, zweck = "openai") {
  const r = await pruefeFaktenOpenai(inhalt, zweck, zweck === "openai-stories" ? { hinweis: "Nenne zu jedem Befund den Slot in eckigen Klammern, genau wie im Kopf der Kachel (zum Beispiel [s2])." } : {});
  korrekturenAnwenden(inhalt, r.korrekturen);
  return r;
}

/* Nachbearbeitung: leere Felder entfernen, Normen kürzen, Caption absichern. */
function nachbereiten(daten, { thema, blickwinkel, cta, datum, strategie, recherche }) {
  const folien = (daten.folien || []).map((f) => {
    const o = {};
    for (const [k, v] of Object.entries(f)) if (v != null && !(Array.isArray(v) && v.length === 0) && v !== "") o[k] = v;
    return o;
  }).filter((f) => f.art && !folieLeer(f) || f.art === "hook" || f.art === "takeaway");
  if (folien[0] && folien[0].art !== "hook") folien[0].art = "hook";
  for (let i = 1; i < folien.length; i++) if (folien[i].art === "hook") folien[i].art = "text";
  if (folien.at(-1)?.art !== "takeaway") folien.push({ art: "takeaway", titel: "Take-away", text: folien.at(-1)?.text || daten.kurztitel || "", cta: "Speichern Sie diesen Beitrag." });
  for (const f of folien) {
    felderKuerzen(f, ["titel", "untertitel", "text", "zahl", "einheit", "cta"]);
    for (const seite of ["links", "rechts"]) if (f[seite]) { f[seite].titel = normKurz(f[seite].titel); f[seite].punkte = (f[seite].punkte || []).map(normKurz); }
    if (f.knoten) f.knoten = f.knoten.map((k) => ({ label: normKurz(k.label), ...(k.unter ? { unter: normKurz(k.unter) } : {}) }));
    if (f.schritte) f.schritte = f.schritte.map((s) => ({ zeit: normKurz(s.zeit), text: normKurz(s.text) }));
    if (f.relevant) f.relevant = f.relevant.map(normKurz);
    if (f.problematisch) f.problematisch = f.problematisch.map(normKurz);
  }
  const rechtsstand = rechtsstandText(datum);
  let caption = normKurz((daten.caption || "").trim());
  const verboten = /(link in bio|github\.io|github\.com)/i;
  if (!CONFIG.marke.website) caption = caption.split("\n").filter((z) => !verboten.test(z)).join("\n");
  if (!/keine rechtsberatung|ersetzt keine|allgemeine information/i.test(caption)) caption += `\n\nAllgemeine Information, keine Rechtsberatung im Einzelfall.`;
  if (!/rechtsstand/i.test(caption)) caption = caption.replace(/(Allgemeine Information, keine Rechtsberatung im Einzelfall\.)/, `$1 Rechtsstand: ${rechtsstand}.`);
  const s = daten.sicherheit || {};
  const sicherheit = {
    rechtsstand,
    jurisdiktion: thema?.jurisdiktion || s.jurisdiktion || "DE",
    primaerquelle: s.primaerquelle || (thema?.normen?.[0] || ""),
    normen: [...new Set([...(s.normen || []), ...(thema?.normen || [])].map(normKurz))].slice(0, 8),
    unsicherheit: s.unsicherheit || "mittel",
    vorlageStand: thema?.stand || null,
    quellen: recherche?.quellen || [],
  };
  return {
    format: "carousel",
    themaId: thema?.id || null,
    kategorie: thema?.kategorie || (recherche ? SCHWERPUNKTE.aktuell.label : "Nachfolge"),
    schwerpunkt: thema?.schwerpunkt || (recherche ? "aktuell" : "nachfolge"),
    tiefe: thema?.tiefe || "einstieg",
    jurisdiktion: sicherheit.jurisdiktion,
    blickwinkel,
    cta,
    folien,
    caption,
    hashtags: hashtagsWaehlen(daten.hashtags, CONFIG.hashtags.kern, strategie),
    kurztitel: daten.kurztitel || folien[0]?.titel || "",
    storyHinweis: daten.storyHinweis || "",
    sicherheit,
    hooks: daten.hooks || [],
  };
}

/**
 * Schreibt einen Beitrag. Hooks werden bewertet, der Beitrag geprüft und bei
 * Beanstandung bis zu CONFIG.ki.maxVersuche Mal nachgebessert.
 * @param {{thema:object|null, blickwinkel:string, cta:string, datum:string, gegencheck?:object, recherche?:object, strategie?:object}} auftrag
 */
export async function beitragSchreiben({ thema, blickwinkel = "frage", cta = "save", datum, gegencheck = null, recherche = null, strategie = null }) {
  if (process.env.IG_AUTOR === "beispiele") return beispielBeitrag(thema, blickwinkel, cta, datum);
  const bw = BLICKWINKEL[blickwinkel] || BLICKWINKEL.frage;
  let feedback = "", letzter = null, bewertet = [];
  for (let versuch = 1; versuch <= CONFIG.ki.maxVersuche; versuch++) {
    const user = [
      `Datum: ${datumLesbar(datum)}. Rechtsstand: ${rechtsstandText(datum)}.`,
      thema ? `Kategorie-Label der Kachel: ${thema.kategorie}. Tiefe: ${thema.tiefe} (einstieg = jeder versteht es sofort · fortgeschritten = eine Vorfrage wird vorausgesetzt · experte = für Berater und Fortgeschrittene, trotzdem verständlich).` : `Kategorie-Label der Kachel: ${SCHWERPUNKTE.aktuell.label}. Tiefe: fortgeschritten.`,
      `Blickwinkel: ${bw.label} – ${bw.anleitung}`,
      `CTA-Typ für die Take-away-Folie und das Ende der Caption: ${CTA_TYPEN[cta] || CTA_TYPEN.save}`,
      hookAnleitung(),
      thema ? `\n## Themen-Skelett\n${themaText(thema)}` : "",
      recherche ? `\n## Rechercheergebnis (Web, ${datumLesbar(datum)})\nTitel: ${recherche.titel}\nDatum/Fundstelle: ${recherche.datum} · ${recherche.fundstelle}\nJurisdiktion: ${recherche.jurisdiktion}\nNormen: ${recherche.normen.join(", ")}\n${recherche.notizen}\n\nQuellen: ${recherche.quellen.join(" · ")}\n\nDer Beitrag erklärt diese Entwicklung für Betroffene: Was wurde entschieden oder geändert, was bedeutet es, für wen ist es relevant. Nenne Gericht/Behörde, Datum und Aktenzeichen auf Folie 2 und in der Caption.` : "",
      gegencheck?.ergebnis === "unklar" ? `\n## Hinweis aus dem Web-Gegencheck (${datumLesbar(datum)})\n${gegencheck.notiz}\nBerücksichtige das; wenn eine Aussage dadurch unsicher wird, formuliere sie vorsichtig oder lass sie weg.` : "",
      feedback ? `\n## Beanstandungen am vorherigen Entwurf – bitte beheben\n${feedback}\n\nVorheriger Entwurf:\n${JSON.stringify(letzter)}` : "",
      `\nErstelle jetzt den Beitrag als JSON.`,
    ].filter(Boolean).join("\n");
    const { daten } = await strukturiert({ system: SYSTEM, user, schema: BEITRAG_SCHEMA, zweck: "beitrag" });
    const beitrag = nachbereiten(daten, { thema, blickwinkel, cta, datum, strategie, recherche });

    /* Hooks: Kandidaten sind die fünf Vorschläge plus der Titel von Folie 1. */
    const kandidaten = [...beitrag.hooks];
    const erster = beitrag.folien[0]?.titel;
    if (erster && !kandidaten.some((h) => h.text === erster)) kandidaten.unshift({ typ: hookTypErkennen(erster), text: erster });
    const gueltig = kandidaten.filter((h) => !hookFormal(h).length);
    const fehler = [];
    let gewaehlt = null;
    if (gueltig.length) {
      try {
        bewertet = await hooksBewerten(gueltig, thema?.titel || recherche?.titel || "", {});
        ({ gewaehlt } = hookWaehlen(bewertet, { strategie }));
      } catch (e) {
        console.warn(`  ! Hook-Bewertung nicht möglich (${e.message.slice(0, 120)}) – formale Prüfung entscheidet.`);
        bewertet = gueltig.map((h) => ({ ...h, punkte: CONFIG.hooks.mindestPunkte, dimensionen: {}, begruendung: "ungeprüft" }));
        gewaehlt = bewertet[0];
      }
    }
    if (!gewaehlt) {
      const gruende = kandidaten.map((h) => { const f = hookFormal(h); const b = bewertet.find((x) => x.text === h.text); return `„${h.text}“ – ${f.length ? f.join("; ") : `${b?.punkte ?? "?"}/50: ${b?.begruendung || ""}`}`; });
      fehler.push(`Kein Hook erreicht ${CONFIG.hooks.mindestPunkte} von 50 Punkten. Schreibe fünf neue Hooks (6–14 Wörter, Sie-Form, präzise, ohne Übertreibung), andere Kategorien als bisher:\n${gruende.map((g) => `  - ${g}`).join("\n")}`);
    } else {
      beitrag.folien[0].titel = gewaehlt.text;
      beitrag.hookTyp = gewaehlt.typ;
      beitrag.hookPunkte = gewaehlt.punkte;
      beitrag.hooks = bewertet.map((h) => ({ typ: h.typ, text: h.text, punkte: h.punkte, dimensionen: h.dimensionen }));
    }

    const ergebnis = pruefeBeitrag(beitrag);
    fehler.push(...ergebnis.fehler);
    if (!fehler.length) {
      const fakten = await faktenSicher(beitrag);
      korrekturenAnwenden(beitrag, fakten.korrekturen);
      beitrag.faktenHinweise = fakten.hinweise;
      beitrag.sicherheit.unsicherheit = hoechste(beitrag.sicherheit.unsicherheit, fakten.unsicherheit);
      if (fakten.ok) {
        /* Faktencheck II (OpenAI). Fällt er aus, bleibt der Entwurf gespeichert
           und wird vor der Veröffentlichung nachgeprüft (lauf.mjs). */
        let zweiter;
        try { zweiter = await zweiterFaktencheck(beitrag, "openai"); }
        catch (e) {
          if (!(e instanceof OpenaiFehler)) throw e;
          console.warn(`  ! Faktencheck II ausgefallen: ${e.message.slice(0, 160)} – Entwurf wird gespeichert und vor der Veröffentlichung nachgeprüft.`);
          beitrag.openaiAusstehend = true;
          beitrag.sicherheit.pruefstatus = pruefstatus(beitrag, gegencheck, fakten, null);
          return beitrag;
        }
        beitrag.sicherheit.unsicherheit = hoechste(beitrag.sicherheit.unsicherheit, zweiter.unsicherheit);
        if (zweiter.ok) {
          beitrag.faktenHinweise = [...fakten.hinweise, ...zweiter.hinweise.map((h) => `[II] ${h}`)];
          beitrag.sicherheit.pruefstatus = pruefstatus(beitrag, gegencheck, fakten, zweiter);
          return beitrag;
        }
        fehler.push(...zweiter.fehler.map((f) => `Fachlicher Fehler (zweiter Prüfer): ${f}`));
      }
      fehler.push(...fakten.fehler.map((f) => `Fachlicher Fehler: ${f}`));
    }
    feedback = fehler.map((f) => `- ${f}`).join("\n");
    letzter = daten;
    console.warn(`  Entwurf ${versuch} beanstandet:\n${feedback}`);
  }
  throw new Error(`Beitrag „${thema?.titel || recherche?.titel || "?"}“ nach ${CONFIG.ki.maxVersuche} Versuchen nicht freigegeben:\n${feedback}`);
}

function pruefstatus(beitrag, gegencheck, fakten, zweiter) {
  return {
    formal: "bestanden",
    gegencheck: gegencheck?.ergebnis || "nicht geprüft",
    pruefer1: { modell: CONFIG.ki.modellPruefung, ok: fakten?.ok ?? null, hinweise: fakten?.hinweise?.length || 0 },
    pruefer2: zweiter ? { modell: zweiter.modell, ok: zweiter.ok, hinweise: zweiter.hinweise.length } : { modell: CONFIG.openai.modell, ok: null, ausstehend: true },
    hookPunkte: beitrag.hookPunkte ?? null,
    geprueft: new Date().toISOString(),
  };
}

/**
 * Schreibt die eigenständigen Stories eines Tages (hook, wissen, aktuell)
 * in einem Aufruf, prüft sie formal und fachlich.
 * @param {Array<{slot, art, thema?, recherche?}>} plan
 */
export async function storiesSchreiben(plan, datum, hinweis = "") {
  if (!plan.length) return [];
  if (process.env.IG_AUTOR === "beispiele") return beispielStories(plan);
  const auftraege = plan.map((s) => {
    const kopf = `- slot ${s.slot}: art=${s.art}${s.thema ? ` · Kategorie: ${s.thema.kategorie}` : ""}`;
    if (s.art === "aktuell" && s.recherche) return `${kopf}\n  Entwicklung: ${s.recherche.titel} (${s.recherche.datum}, ${s.recherche.fundstelle})\n  ${s.recherche.notizen.slice(0, 900)}`;
    return `${kopf}\n${s.thema ? themaText(s.thema).split("\n").map((z) => `  ${z}`).join("\n") : ""}`;
  }).join("\n");
  const user = `Datum: ${datumLesbar(datum)}. Schreibe die folgenden Instagram-Stories (Hochformat, je eine Kachel, sehr wenig Text, Sie-Form, sachlich):

Arten:
- hook: ein eigenständiger Gedanke, der für sich steht – titel = eine Frage oder These in 6–14 Wörtern, text = die Antwort oder Pointe in 1–2 Sätzen (max. 35 Wörter), norm = die tragende Norm (optional). ueberzeile = „Kurz gefragt“ oder „Kurz gesagt“.
- wissen: Zusatzwissen oder Mini-Erklärung mit Schaubild – titel = Zwischenüberschrift (3–8 Wörter), text = 1–2 Sätze (max. 35 Wörter), schaubild = struktur (2–3 knoten mit label und unter), zeitachse (2–3 schritte) oder vergleich (links/rechts mit je 2 punkten). ueberzeile = „Zusatzwissen“.
- aktuell: Urteil, Gesetz oder Verwaltungsanweisung – titel = die Neuigkeit in 6–14 Wörtern, text = was sie bedeutet (max. 40 Wörter, abstrakt), norm = Aktenzeichen oder Norm. ueberzeile = „Aktuell“.

Aufträge:
${auftraege}

Alles in eigenen Worten, juristisch korrekt, keine Namen, keine Dramatik. Nicht benötigte Felder null. Gib genau einen Eintrag je Slot zurück.${hinweis ? `\n\n${hinweis}` : ""}`;
  const { daten } = await strukturiert({ system: SYSTEM, user, schema: STORY_SCHEMA, modell: CONFIG.ki.modellNeben, zweck: "stories", maxTokens: 6000 });
  const nachSlot = new Map(daten.stories.map((s) => [s.slot, s]));
  const liste = plan.map((p) => {
    const s = nachSlot.get(p.slot) || {};
    const o = { slot: p.slot, art: p.art, themaId: p.thema?.id || null, kategorie: p.thema?.kategorie || (p.art === "aktuell" ? SCHWERPUNKTE.aktuell.label : "Nachfolge"), schwerpunkt: p.thema?.schwerpunkt || (p.art === "aktuell" ? "aktuell" : "nachfolge") };
    for (const [k, v] of Object.entries(s)) if (v != null && k !== "slot" && k !== "art") o[k] = v;
    if (o.schaubild) { const sb = {}; for (const [k, v] of Object.entries(o.schaubild)) if (v != null) sb[k] = v; o.schaubild = sb; }
    felderKuerzen(o, ["titel", "text", "norm", "ueberzeile"]);
    const ergebnis = pruefeBeitrag({ stories: [o] });
    if (!ergebnis.ok) o.beanstandet = ergebnis.fehler;
    return o;
  });
  const fakten = await faktenSicher({ stories: liste }, "story-faktencheck", { hinweis: "Jede Kachel steht für sich. Nenne zu jedem Befund den Slot in eckigen Klammern, genau so, wie er im Kopf der Kachel steht (zum Beispiel [s2])." });
  korrekturenAnwenden({ stories: liste }, fakten.korrekturen);
  for (const f of fakten.fehler || []) {
    const treffer = String(f).match(/\[?\b(s\d+)\b\]?/);
    for (const o of treffer ? liste.filter((x) => x.slot === treffer[1]) : liste) (o.beanstandet ||= []).push(String(f));
  }
  /* Faktencheck II über die Stories. Fällt er aus, werden sie gespeichert und
     vor der Veröffentlichung nachgeprüft. */
  try {
    const zweiter = await zweiterFaktencheck({ stories: liste }, "openai-stories");
    for (const f of zweiter.fehler || []) {
      const treffer = String(f).match(/\[?\b(s\d+)\b\]?/);
      for (const o of treffer ? liste.filter((x) => x.slot === treffer[1]) : liste) (o.beanstandet ||= []).push(`zweiter Prüfer: ${f}`);
    }
    for (const o of liste) o.geprueft = { pruefer1: fakten.ok, pruefer2: true, stand: new Date().toISOString() };
  } catch (e) {
    if (!(e instanceof OpenaiFehler)) throw e;
    console.warn(`  ! Faktencheck II (Stories) ausgefallen: ${e.message.slice(0, 160)} – wird vor der Veröffentlichung nachgeholt.`);
    for (const o of liste) o.openaiAusstehend = true;
  }
  return liste;
}

/** Hinweis-Story auf den Tagesbeitrag – ohne KI-Aufruf. */
export function hinweisAusBeitrag(beitrag, slot) {
  return {
    slot, art: "hinweis", themaId: beitrag.themaId, kategorie: beitrag.kategorie, schwerpunkt: beitrag.schwerpunkt,
    ueberzeile: "Heute im Feed",
    titel: beitrag.folien[0].titel,
    text: beitrag.storyHinweis || beitrag.folien.at(-1)?.text || "",
    pille: "Neuer Beitrag",
    folien: beitrag.folien.length,
  };
}

/* --- Beispielmodus (IG_AUTOR=beispiele): ohne API-Aufruf. --- */
function beispielBeitrag(thema, blickwinkel, cta, datum) {
  const b = beispiele.beitraege.find((x) => x.blickwinkel === blickwinkel) || beispiele.beitraege[0];
  const out = nachbereiten({ ...b, hooks: [{ typ: b.hookTyp, text: b.folien[0].titel }] }, { thema, blickwinkel, cta, datum, strategie: null, recherche: null });
  out.hookTyp = b.hookTyp; out.hookPunkte = 42;
  out.sicherheit.pruefstatus = { formal: "beispiel", gegencheck: "nicht geprüft", pruefer1: { ok: null }, pruefer2: { ok: null }, hookPunkte: 42 };
  return out;
}

function beispielStories(plan) {
  return plan.map((p) => {
    const s = beispiele.stories.find((x) => x.art === p.art) || beispiele.stories[0];
    return { ...s, slot: p.slot, art: p.art, themaId: p.thema?.id || null, kategorie: p.thema?.kategorie || s.kategorie, schwerpunkt: p.thema?.schwerpunkt || "de" };
  });
}
