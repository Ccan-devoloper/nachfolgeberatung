/* ==========================================================================
   Faktencheck I (Claude): ein unabhängiger Aufruf prüft jeden Beitrag und
   jede Story auf fachliche Fehler – Normen, Fristen, Freibeträge, Steuer-
   sätze, Zuständigkeiten, Rechtsstand, deutsches und liechtensteinisches
   Recht. Nur klare Fehler führen zur Nachbesserung; Stilfragen nicht.

   Der zweite, unabhängige Prüfer ist faktencheck-openai.mjs.
   ========================================================================== */

import Anthropic from "@anthropic-ai/sdk";
import { CONFIG } from "./config.mjs";
import { erfassen, budgetPruefen } from "./kosten.mjs";
import { folienTexte } from "./pruefung.mjs";

let clientCache = null;
const client = () => (clientCache ||= new Anthropic({ maxRetries: 3, timeout: 5 * 60 * 1000 }));

export const BEFUND_SCHEMA = {
  type: "object",
  additionalProperties: false,
  properties: {
    befunde: {
      type: "array",
      items: {
        type: "object",
        additionalProperties: false,
        properties: {
          schwere: { type: "string", enum: ["fehler", "unsicher", "hinweis", "sprache"] },
          stelle: { type: "string" },
          problem: { type: "string" },
          korrektur: { type: "string" },
          original: { type: "string" },
          ersatz: { type: "string" },
        },
        required: ["schwere", "stelle", "problem", "korrektur", "original", "ersatz"],
      },
    },
    unsicherheit: { type: "string", enum: ["niedrig", "mittel", "hoch"] },
  },
  required: ["befunde", "unsicherheit"],
};

export const PRUEF_SYSTEM = `Du bist Prüfer:in für Fachtexte zum Stiftungsrecht, Erbschaft- und Schenkungsteuerrecht, Außensteuerrecht und zur Unternehmensnachfolge (Deutschland und Liechtenstein, Rechtsstand ${new Date().getFullYear()}). Du bekommst Texte eines Instagram-Kanals, der vermögenden Privatpersonen und Unternehmerfamilien Gestaltungen erklärt, und prüfst ausschließlich die fachliche Richtigkeit:
- Normzitate (richtiges Gesetz, Paragraf/Artikel, Absatz, Satz, Nummer): BGB, ErbStG, BewG, AStG, KStG, EStG, AO, GrEStG, Landesstiftungsgesetze, liechtensteinisches PGR, EuErbVO, DBA
- Zahlen: Freibeträge, Steuerklassen und Steuersätze, Fristen (z. B. 30 Jahre Erbersatzsteuer, 10-Jahres-Frist, 5- und 7-Jahres-Behaltensfristen), Prozentsätze, Schwellenwerte
- Rechtsfolgen und Voraussetzungen: Anerkennung, Gemeinnützigkeit, Hinzurechnungsbesteuerung nach § 15 AStG, Wegzugsbesteuerung nach § 6 AStG, Pflichtteilsergänzung, Verschonung nach §§ 13a, 13b ErbStG
- Rechtsstand: Stiftungsrechtsreform 2023 (§§ 80 ff. BGB neu), Stiftungsregister ab 2026, AStG-Reform, aktuelle Rechtsprechung des BFH und BGH; veraltete Regelungen sind Fehler
- Jurisdiktion: Aussagen zu Liechtenstein dürfen nicht mit deutschem Recht vermischt werden und umgekehrt
- Innere Logik: Der Text muss aus sich heraus verständlich sein; ein Beispiel muss die Zahlen nennen, mit denen es rechnet
- Vereinfachungen sind erlaubt, wenn sie nicht falsch werden. Ein „hinweis“ genügt, wenn eine zulässige Vereinfachung eine Ausnahme weglässt.

Zusätzlich prüfst du die Sprache auf offensichtliche Versehen: doppelte Wörter, fehlende Wörter, falscher Kasus, abgebrochene Klammer. Melde solche Versehen als „sprache“ und gib in „original“ die fehlerhafte Wortfolge exakt so an, wie sie im Text steht (mindestens drei Wörter), in „ersatz“ die berichtigte Fassung. Stilfragen sind keine Sprachversehen. Bei allen anderen Befunden bleiben „original“ und „ersatz“ leer.

Melde als „fehler“ nur, was eindeutig falsch ist und einen Mandanten in die Irre führen würde. Als „unsicher“ alles, was du nicht sicher beurteilen kannst. Als „hinweis“ Unschärfen, die vertretbar sind. Keine Stil- oder Formatkritik. Gib zusätzlich deine Gesamteinschätzung der fachlichen Unsicherheit des Textes an (niedrig/mittel/hoch). Wenn alles korrekt ist: leere Liste, Unsicherheit niedrig.`;

/** Der geprüfte Text – Folien, Stories und Caption mit Kennung je Kachel. */
export function textAus(beitrag) {
  const teile = [];
  if (beitrag.sicherheit) teile.push(`[Angaben des Autors] Rechtsstand ${beitrag.sicherheit.rechtsstand || "?"} · Jurisdiktion ${beitrag.sicherheit.jurisdiktion || "?"} · Normen ${(beitrag.sicherheit.normen || []).join(", ") || "–"}`);
  (beitrag.folien || []).forEach((f, i) => teile.push(`[Folie ${i + 1} ${f.art}] ${folienTexte(f).join(" · ")}`));
  for (const s of beitrag.stories || []) {
    const t = [s.ueberzeile, s.titel, s.text, s.norm, ...(s.punkte || [])];
    if (s.schaubild) t.push(...folienTexte(s.schaubild));
    teile.push(`[Story ${s.slot} ${s.art}] ${t.filter(Boolean).join(" · ")}`);
  }
  if (beitrag.caption) teile.push(`[Caption] ${beitrag.caption}`);
  return teile.join("\n");
}

/** Sprachkorrekturen direkt im Objekt ersetzen – ohne neuen Aufruf. */
export function korrekturenAnwenden(obj, korrekturen = []) {
  let n = 0;
  const ersetze = (text) => { let t = text; for (const k of korrekturen) if (k.original && t.includes(k.original)) { t = t.split(k.original).join(k.ersatz); n++; } return t; };
  const gehe = (o) => {
    if (Array.isArray(o)) { o.forEach((v, i) => { if (typeof v === "string") { const w = ersetze(v); if (w !== v) o[i] = w; } else gehe(v); }); return; }
    if (o && typeof o === "object") for (const k of Object.keys(o)) { const v = o[k]; if (typeof v === "string") { const w = ersetze(v); if (w !== v) o[k] = w; } else gehe(v); }
  };
  gehe(obj);
  return n;
}

/* Weiche Beanstandungen sind Hinweise, keine Fehler. */
const WEICH = /irreführend|präzisier|missverständlich|ungenau|unscharf|unschärfe|ausdrucksweise|formulierung|didaktisch|sollte (?:ergänzt|erwähnt|klargestellt)|könnte|empfehl|verkürzt|vereinfacht|ist (?:zwar |dann )?(?:sachlich )?korrekt/i;

/** Befunde in Fehler/Hinweise/Korrekturen sortieren – für beide Prüfer gleich. */
export function befundeAuswerten(daten) {
  const befunde = daten?.befunde || [];
  const ist = (b) => b.schwere === "fehler" && !WEICH.test(`${b.problem} ${b.korrektur}`);
  const sprache = (b) => b.schwere === "sprache";
  const korrekturen = befunde.filter((b) => sprache(b) && b.original && b.ersatz && b.original !== b.ersatz && b.original.trim().split(/\s+/).length >= 2).map((b) => ({ original: b.original, ersatz: b.ersatz }));
  const fehler = befunde.filter(ist).map((b) => `${b.stelle}: ${b.problem} → ${b.korrektur}`);
  const hinweise = befunde.filter((b) => !ist(b) && !sprache(b)).map((b) => `${b.stelle}: ${b.problem}`);
  const unsicher = befunde.filter((b) => b.schwere === "unsicher").length;
  const unsicherheit = ["niedrig", "mittel", "hoch"].includes(daten?.unsicherheit) ? daten.unsicherheit : unsicher >= 2 ? "hoch" : unsicher === 1 ? "mittel" : "niedrig";
  return { ok: fehler.length === 0, fehler, hinweise, korrekturen, unsicherheit };
}

/**
 * @returns {{ok:boolean, fehler:string[], hinweise:string[], korrekturen:{original:string, ersatz:string}[], unsicherheit:string}}
 */
export async function pruefeFakten(beitrag, zweck = "faktencheck", { hinweis = "" } = {}) {
  if (!CONFIG.faktencheck.aktiv) return { ok: true, fehler: [], hinweise: [], korrekturen: [], unsicherheit: "niedrig" };
  budgetPruefen(zweck === "story-faktencheck" ? "Story-Faktencheck" : "Faktencheck");
  const modell = CONFIG.ki.modellPruefung || CONFIG.ki.modellNeben;
  const haiku = /haiku/i.test(modell);
  const user = `Prüfe diesen Text:\n\n${textAus(beitrag)}${hinweis ? `\n\n${hinweis}` : ""}`;
  const basis = {
    model: modell,
    max_tokens: 6000,
    system: [{ type: "text", text: PRUEF_SYSTEM, cache_control: { type: "ephemeral" } }],
    messages: [{ role: "user", content: user }],
    ...(haiku ? {} : { thinking: { type: "adaptive" } }),
    output_config: { ...(haiku ? {} : { effort: "medium" }), format: { type: "json_schema", schema: BEFUND_SCHEMA } },
  };
  let response;
  try {
    response = await client().messages.create(basis);
  } catch (e) {
    if (!(e instanceof Anthropic.BadRequestError)) throw e;
    const { thinking, output_config, ...rest } = basis;
    response = await client().messages.create({ ...rest, messages: [{ role: "user", content: `${user}\n\nAntworte ausschließlich mit einem JSON-Objekt nach diesem Schema:\n${JSON.stringify(BEFUND_SCHEMA)}` }] });
  }
  erfassen(modell, response.usage, zweck);
  if (response.stop_reason === "refusal") return { ok: true, fehler: [], hinweise: ["Prüfer hat abgelehnt"], korrekturen: [], unsicherheit: "mittel" };
  const text = response.content.filter((b) => b.type === "text").map((b) => b.text).join("");
  let daten;
  try { daten = JSON.parse(text.slice(text.indexOf("{"), text.lastIndexOf("}") + 1)); } catch { return { ok: true, fehler: [], hinweise: ["Prüfantwort nicht lesbar"], korrekturen: [], unsicherheit: "mittel" }; }
  const ergebnis = befundeAuswerten(daten);
  if (ergebnis.korrekturen.length) console.log(`  Sprachkorrekturen: ${ergebnis.korrekturen.map((k) => `„${k.original}“ → „${k.ersatz}“`).join(" · ")}`);
  return ergebnis;
}
