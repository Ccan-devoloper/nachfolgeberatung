/* ==========================================================================
   Kommentare unter den eigenen Beiträgen beantworten – sachlich, in der
   Sie-Form, immer abstrakt, nie im Einzelfall (BERUFSRECHT.md).

   Läuft bei jedem Lauf. Nicht beantwortet werden: eigene Kommentare,
   bereits beantwortete, Spam, reine Emojis, Werbung. Bitten um Beratung im
   Einzelfall bekommen den Standardhinweis. Themen mit antwortfreigabe
   „keine“ bekommen nur den Standardhinweis. Alles über die offizielle API.
   ========================================================================== */

import Anthropic from "@anthropic-ai/sdk";
import { CONFIG } from "./config.mjs";
import { budgetPruefen, erfassen } from "./kosten.mjs";
import { pruefeSprache } from "./pruefung.mjs";

let clientCache = null;
const client = () => (clientCache ||= new Anthropic({ maxRetries: 3, timeout: 5 * 60 * 1000 }));

const ANTWORT_SCHEMA = {
  type: "object",
  additionalProperties: false,
  properties: {
    antworten: {
      type: "array",
      items: {
        type: "object",
        additionalProperties: false,
        properties: { id: { type: "string" }, antworten: { type: "boolean" }, grund: { type: ["string", "null"] }, text: { type: ["string", "null"] } },
        required: ["id", "antworten", "grund", "text"],
      },
    },
  },
  required: ["antworten"],
};

export const STANDARDHINWEIS = "Vielen Dank für Ihre Frage. Ob und wie das in einer konkreten Konstellation passt, lässt sich nur mit Blick auf alle Umstände beurteilen – das gehört in ein Beratungsgespräch, nicht in einen Kommentar. Allgemein gilt: {regel}";

const SYSTEM = `Du betreust die Kommentare des Instagram-Kanals „${CONFIG.marke.anzeigename}“ – eine Fachmarke eines promovierten Rechtsanwalts für Stiftungsrecht und Unternehmensnachfolge. Du antwortest sachlich, freundlich, in der Sie-Form, wie ein Anwalt einem interessierten Mandanten in einem kurzen Gespräch.

Regeln:
- Maximal 300 Zeichen je Antwort, meistens 1–3 Sätze. Keine Emojis.
- Fachfragen: abstrakt und korrekt beantworten, mit Norm, wenn sie hilft. Nie auf die konkrete Situation des Fragenden eingehen – keine Einschätzung „in Ihrem Fall“, keine Empfehlung, was jemand tun sollte.
- Bitten um Beratung im Einzelfall („Ich habe … – was soll ich tun?“): freundlich erklären, dass das ein Beratungsgespräch braucht, und die allgemeine Regel nennen. Kein Drängen, keine Kontaktaufforderung.
- Steht beim Kommentar „Antwortfreigabe: keine“, antworte nur mit einem freundlichen Hinweis, dass das Thema eine individuelle Prüfung braucht – ohne inhaltliche Aussage.
- Lob oder Zustimmung: kurz bedanken, ggf. eine sachliche Rückfrage, welche Frage als Nächstes interessiert.
- Kritik oder Fehlerhinweis: dankbar aufnehmen und sachlich prüfen; wenn berechtigt, das anerkennen.
- Nicht antworten (antworten=false) bei: Spam, Werbung, Links, reinen Emojis, Beleidigungen, Bots, Kommentaren ohne Bezug.
- Keine Namen, keine Kanzlei, keine Website, keine Produkte. Keine Du-Form. Keine Übertreibung.`;

/** Kommentare sammeln, die eine Antwort brauchen. */
export function offeneKommentare(medien, eigenerName, ledger, opt = {}) {
  const maxAlter = (opt.maxAlterTage ?? CONFIG.interaktion.maxAlterTage) * 86400000;
  const beantwortet = new Set(ledger.interaktionen?.map((i) => i.kommentarId) || []);
  const offen = [];
  const uebersprungen = [];
  const skip = (k, grund) => uebersprungen.push({ id: k.id, username: k.username, text: (k.text || "").slice(0, 60), grund });
  for (const m of medien) {
    for (const k of m.comments?.data || []) {
      if (!k.text || k.hidden) { skip(k, "leer oder verborgen"); continue; }
      if (k.username && eigenerName && k.username.toLowerCase() === eigenerName.toLowerCase()) { skip(k, "eigener Kommentar"); continue; }
      if (beantwortet.has(k.id)) { skip(k, "bereits behandelt"); continue; }
      if (Date.now() - new Date(k.timestamp).getTime() > maxAlter) { skip(k, "älter als Frist"); continue; }
      if ((k.replies?.data || []).some((r) => r.username && eigenerName && r.username.toLowerCase() === eigenerName.toLowerCase())) { skip(k, "schon beantwortet"); continue; }
      const text = k.text.trim();
      if (text.length < 2 || /^[\p{Extended_Pictographic}\s!.?]+$/u.test(text)) { skip(k, "nur Emoji"); continue; }
      offen.push({ id: k.id, text, username: k.username, timestamp: k.timestamp, beitrag: (m.caption || "").split("\n")[0].slice(0, 160), permalink: m.permalink, medienId: m.id });
    }
  }
  offen.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));
  offen.uebersprungen = uebersprungen;
  return offen;
}

/** Antworten in einem Aufruf formulieren. `freigabe(medienId)` liefert „abstrakt“ oder „keine“. */
export async function antwortenFormulieren(kommentare, freigabe = () => "abstrakt") {
  if (!kommentare.length) return [];
  const user = `Beantworte die folgenden Kommentare. Zu jedem steht die erste Zeile des Beitrags, unter dem er steht, und die Antwortfreigabe des Themas.

${kommentare.map((k) => `- id ${k.id} · Beitrag: „${k.beitrag}“ · Antwortfreigabe: ${freigabe(k.medienId)} · @${k.username}: „${k.text}“`).join("\n")}

Gib für jede id an, ob geantwortet werden soll (antworten), den Grund bei Nein (grund) und den Antworttext (text, null bei Nein).`;
  budgetPruefen("Kommentare beantworten");
  const response = await client().messages.create({
    model: CONFIG.ki.modellNeben,
    max_tokens: 6000,
    system: [{ type: "text", text: SYSTEM, cache_control: { type: "ephemeral" } }],
    messages: [{ role: "user", content: user }],
    thinking: { type: "adaptive" },
    output_config: { effort: "medium", format: { type: "json_schema", schema: ANTWORT_SCHEMA } },
  });
  erfassen(CONFIG.ki.modellNeben, response.usage, "kommentare");
  if (response.stop_reason === "refusal") return [];
  const text = response.content.filter((b) => b.type === "text").map((b) => b.text).join("");
  const daten = JSON.parse(text.slice(text.indexOf("{"), text.lastIndexOf("}") + 1));
  return daten.antworten.map((a) => {
    let t = a.antworten && a.text && a.text.trim().length > 0 ? a.text.trim().slice(0, 320) : null;
    /* Sicherheitsnetz: Du-Form oder Einzelfallberatung geht nicht raus. */
    if (t && pruefeSprache(t, "Antwort").length) t = null;
    return { id: a.id, text: t, grund: a.grund || (t ? null : "Sprachprüfung") };
  });
}

/**
 * Kompletter Interaktionslauf.
 * @returns {{geprueft:number, beantwortet:number}}
 */
export async function kommentareBeantworten(ig, ledger, { log = console.log, freigabe = () => "abstrakt" } = {}) {
  const eigener = await ig.eigenerName();
  const medien = await ig.neuesteMedien(CONFIG.interaktion.beitraegeZurueck);
  const alle = offeneKommentare(medien, eigener, ledger);
  const gesamtKommentare = medien.reduce((n, m) => n + (m.comments?.data?.length || 0), 0);
  for (const u of alle.uebersprungen || []) if (u.grund !== "bereits behandelt") log(`  · Kommentar von @${u.username || "?"} „${u.text}“ → übersprungen (${u.grund})`);
  const offen = alle.slice(0, CONFIG.interaktion.maxAntwortenJeLauf);
  if (!offen.length) return { geprueft: medien.length, kommentare: gesamtKommentare, beantwortet: 0 };
  log(`Interaktion: ${offen.length} neue Kommentare unter ${medien.length} Beiträgen (${gesamtKommentare} gesamt)`);
  const antworten = await antwortenFormulieren(offen, freigabe);
  const nachId = new Map(antworten.map((a) => [a.id, a.text]));
  const gruende = new Map(antworten.map((a) => [a.id, a.grund]));
  let n = 0;
  ledger.interaktionen = ledger.interaktionen || [];
  for (const k of offen) {
    const text = nachId.get(k.id);
    const eintrag = { kommentarId: k.id, medienId: k.medienId, datum: new Date().toISOString().slice(0, 10), von: k.username };
    if (!text) { ledger.interaktionen.push({ ...eintrag, uebersprungen: true }); log(`  · @${k.username} „${k.text.slice(0, 60)}“ → keine Antwort (${gruende.get(k.id) || "vom Modell übersprungen"})`); continue; }
    try {
      const antwortId = await ig.kommentarBeantworten(k.id, text);
      ledger.interaktionen.push({ ...eintrag, antwortId, text });
      n++;
      log(`  ↳ @${k.username}: „${k.text.slice(0, 60)}“ → „${text.slice(0, 80)}“`);
    } catch (e) { console.error(`  ✗ Antwort auf ${k.id}: ${e.message}`); }
  }
  const grenze = new Date(Date.now() - 60 * 86400000).toISOString().slice(0, 10);
  ledger.interaktionen = ledger.interaktionen.filter((i) => i.datum >= grenze);
  return { geprueft: medien.length, kommentare: gesamtKommentare, beantwortet: n };
}
