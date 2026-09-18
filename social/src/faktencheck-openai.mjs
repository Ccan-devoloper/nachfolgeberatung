/* ==========================================================================
   Faktencheck II (OpenAI): der zweite, unabhängige Prüfer.

   Ein anderes Modell eines anderen Anbieters liest denselben Text mit
   derselben Prüfanweisung. Zwei Prüfer mit verschiedenen Trainingsdaten
   übersehen seltener denselben Fehler. Streng (CONFIG.faktencheck.openaiStrikt):
   Fällt der Aufruf aus, wird der Beitrag nicht veröffentlicht – der nächste
   Stundenlauf versucht es mit dem gespeicherten Entwurf erneut.

   Kein SDK, nur fetch: Chat Completions mit response_format json_schema.
   ========================================================================== */

import { CONFIG } from "./config.mjs";
import { erfassenOpenai, budgetPruefen } from "./kosten.mjs";
import { PRUEF_SYSTEM, BEFUND_SCHEMA, textAus, befundeAuswerten } from "./faktencheck.mjs";

export class OpenaiFehler extends Error {}

/* Strict-Schemas bei OpenAI verlangen, dass jedes Objekt alle Eigenschaften
   als required führt – das Befundschema erfüllt das bereits. */
const RESPONSE_FORMAT = { type: "json_schema", json_schema: { name: "faktencheck", strict: true, schema: BEFUND_SCHEMA } };

export function openaiVerfuegbar() {
  return Boolean(CONFIG.faktencheck.openaiAktiv && CONFIG.openai.key);
}

async function anfrage(body, { versuche = 3 } = {}) {
  let letzter;
  for (let i = 1; i <= versuche; i++) {
    try {
      const r = await fetch(`${CONFIG.openai.basis}/chat/completions`, {
        method: "POST",
        headers: { "content-type": "application/json", authorization: `Bearer ${CONFIG.openai.key}` },
        body: JSON.stringify(body),
        signal: AbortSignal.timeout(180000),
      });
      const text = await r.text();
      let daten;
      try { daten = JSON.parse(text); } catch { daten = { error: { message: text.slice(0, 300) } }; }
      if (!r.ok) {
        const msg = daten?.error?.message || `HTTP ${r.status}`;
        /* Modellname oder Parameter unbekannt: sofort abbrechen, ein zweiter
           Versuch ändert nichts. */
        if (r.status === 400 || r.status === 401 || r.status === 404) throw new OpenaiFehler(`OpenAI: ${msg}`);
        throw new Error(`OpenAI: ${msg} (${r.status})`);
      }
      return daten;
    } catch (e) {
      if (e instanceof OpenaiFehler) throw e;
      letzter = e;
      if (i < versuche) await new Promise((res) => setTimeout(res, 2000 * i));
    }
  }
  throw new OpenaiFehler(letzter?.message || "OpenAI nicht erreichbar");
}

/**
 * Prüft einen Beitrag (Folien + Caption) oder Stories über die OpenAI-API.
 * @returns {Promise<{ok:boolean, fehler:string[], hinweise:string[], korrekturen:object[], unsicherheit:string, modell:string}>}
 */
export async function pruefeFaktenOpenai(beitrag, zweck = "openai", { hinweis = "" } = {}) {
  if (!CONFIG.faktencheck.openaiAktiv) return { ok: true, fehler: [], hinweise: [], korrekturen: [], unsicherheit: "niedrig", modell: null, uebersprungen: true };
  if (!CONFIG.openai.key) throw new OpenaiFehler("OPENAI_API_KEY fehlt – zweiter Faktencheck nicht möglich.");
  budgetPruefen(zweck);
  const modell = CONFIG.openai.modell;
  const user = `Prüfe diesen Text:\n\n${textAus(beitrag)}${hinweis ? `\n\n${hinweis}` : ""}`;
  const body = {
    model: modell,
    messages: [
      { role: "system", content: PRUEF_SYSTEM },
      { role: "user", content: user },
    ],
    response_format: RESPONSE_FORMAT,
    max_completion_tokens: 4000,
  };
  /* Die GPT-5-Familie kennt „reasoning_effort“; ältere Modelle lehnen den
     Parameter ab, deshalb nur dort setzen. */
  if (/^gpt-5|^o[1-9]/.test(modell)) body.reasoning_effort = "low";
  let daten = await anfrage(body);
  erfassenOpenai(modell, daten.usage, zweck);
  const wahl = daten.choices?.[0];
  if (wahl?.message?.refusal) return { ok: true, fehler: [], hinweise: [`OpenAI-Prüfer hat abgelehnt: ${wahl.message.refusal}`], korrekturen: [], unsicherheit: "mittel", modell };
  let inhalt = wahl?.message?.content || "";
  let befunde;
  try { befunde = JSON.parse(inhalt); } catch {
    try { befunde = JSON.parse(inhalt.slice(inhalt.indexOf("{"), inhalt.lastIndexOf("}") + 1)); } catch { throw new OpenaiFehler("OpenAI-Antwort nicht lesbar"); }
  }
  return { ...befundeAuswerten(befunde), modell };
}
