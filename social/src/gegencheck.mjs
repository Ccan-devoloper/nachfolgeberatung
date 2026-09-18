/* ==========================================================================
   Web-Gegencheck und Recherche (Claude mit Server-Websuche).

   Gegencheck: Bevor ein Thema geschrieben wird, fragt der Bot das Netz, ob
   sich seit dem Rechtsstand der Vorlage etwas geändert hat – Gesetz,
   Rechtsprechung, Verwaltungsanweisung. Ergebnis:
     bestaetigt  nichts Neues, Vorlage trägt
     unklar      etwas gefunden, aber nicht eindeutig – der Autor bekommt die Notiz
     widerlegt   die Vorlage ist überholt – das Thema wird heute nicht geschrieben
                 und im Ledger für die Pflege markiert

   Recherche: für den Block „Aktuelles · Rechtsprechung“ (Urteil, Gesetz,
   Verwaltungsanweisung der letzten Wochen).
   ========================================================================== */

import Anthropic from "@anthropic-ai/sdk";
import { CONFIG } from "./config.mjs";
import { erfassen, budgetPruefen } from "./kosten.mjs";
import { datumLesbar } from "./zeit.mjs";

let clientCache = null;
const client = () => (clientCache ||= new Anthropic({ maxRetries: 3, timeout: 6 * 60 * 1000 }));

const textAus = (r) => r.content.filter((b) => b.type === "text").map((b) => b.text).join("\n");
const suchenIn = (r) => r.content.filter((b) => b.type === "server_tool_use" && b.name === "web_search").length;

async function webAufruf(frage, { zweck, maxSuchen, modell = CONFIG.ki.modellNeben }) {
  const params = {
    model: modell,
    max_tokens: 6000,
    thinking: { type: "adaptive" },
    output_config: { effort: CONFIG.ki.effort },
    tools: [{ type: "web_search_20260209", name: "web_search", max_uses: maxSuchen, user_location: { type: "approximate", country: "DE", timezone: "Europe/Berlin" } }],
    messages: [{ role: "user", content: frage }],
  };
  budgetPruefen(zweck);
  let response = await client().messages.create(params);
  let suchen = suchenIn(response);
  erfassen(modell, response.usage, zweck, { suchen });
  let runden = 0;
  while (response.stop_reason === "pause_turn" && runden++ < 4) {
    params.messages.push({ role: "assistant", content: response.content });
    response = await client().messages.create(params);
    const s = suchenIn(response);
    suchen += s;
    erfassen(modell, response.usage, zweck, { suchen: s });
  }
  const text = textAus(response);
  const quellen = [...new Set((text.match(/https?:\/\/[^\s)>\]"]+/g) || []))].slice(0, 5);
  return { text, quellen, suchen };
}

/**
 * Gegencheck eines Themas vor dem Schreiben.
 * @returns {Promise<{ergebnis:"bestaetigt"|"unklar"|"widerlegt", notiz:string, quellen:string[], suchen:number}>}
 */
export async function gegencheck(thema, datum) {
  if (!CONFIG.faktencheck.gegencheckAktiv) return { ergebnis: "bestaetigt", notiz: "Gegencheck abgeschaltet", quellen: [], suchen: 0 };
  const frage = `Heute ist der ${datumLesbar(datum)}. Ich bereite einen Fachbeitrag für Mandanten vor (Jurisdiktion ${thema.jurisdiktion || "DE"}):
Thema: ${thema.titel}
Kern: ${thema.kurz}
Tragende Normen: ${(thema.normen || []).join(", ")}
Kernaussagen der Vorlage (Rechtsstand ${thema.stand}):
${(thema.kern || []).slice(0, 5).map((k) => `- ${k}`).join("\n")}

Prüfe mit höchstens ${CONFIG.faktencheck.gegencheckSuchen} Websuchen, ob sich seit dem ${datumLesbar(thema.stand)} etwas geändert hat, das eine dieser Kernaussagen überholt: Gesetzesänderung (BGBl., Landesstiftungsgesetze, liechtensteinisches LGBl.), Urteil (BFH, BGH, FG, OGH/StGH Liechtenstein), BMF-Schreiben oder gleichlautende Ländererlasse, ErbStR/ErbStH. Bevorzuge offizielle Quellen und Fachverlage.

Antworte knapp in genau diesem Format:
ERGEBNIS: bestaetigt | unklar | widerlegt
NOTIZ: 2–5 Sätze – was du geprüft hast und was ggf. neu ist (mit Datum, Aktenzeichen, Fundstelle). Bei „unklar“: was der Autor beachten soll.
QUELLEN: URLs, eine je Zeile`;
  const r = await webAufruf(frage, { zweck: "gegencheck", maxSuchen: CONFIG.faktencheck.gegencheckSuchen });
  const m = r.text.match(/ERGEBNIS\s*[:：]\s*(bestaetigt|bestätigt|unklar|widerlegt)/i);
  const ergebnis = m ? m[1].toLowerCase().replace("bestätigt", "bestaetigt") : "unklar";
  const notiz = (r.text.match(/NOTIZ\s*[:：]\s*([\s\S]*?)(?:\n\s*QUELLEN|$)/i) || [])[1]?.trim() || r.text.slice(0, 600);
  return { ergebnis, notiz, quellen: r.quellen, suchen: r.suchen };
}

/**
 * Recherche für einen Beitrag aus dem Block „Aktuelles · Rechtsprechung“.
 * @returns {Promise<{titel:string, notizen:string, quellen:string[], normen:string[], jurisdiktion:string}>}
 */
export async function aktuellRecherchieren(datum, bereitsBehandelt = []) {
  const frage = `Heute ist der ${datumLesbar(datum)}. Recherchiere 3–5 aktuelle Entwicklungen der letzten 6 Wochen zum Stiftungsrecht, Erbschaft-/Schenkungsteuerrecht, Außensteuerrecht (Wegzug, § 15 AStG) und zur Unternehmensnachfolge in Deutschland und Liechtenstein: Urteile (BFH, BGH, FG, EuGH, liechtensteinischer OGH/StGH), Gesetzgebung (BGBl., Referenten- und Regierungsentwürfe, LGBl.), BMF-Schreiben, Ländererlasse, Stiftungsregister. Bevorzuge offizielle Quellen (bundesfinanzhof.de, bundesgerichtshof.de, bundesfinanzministerium.de, gesetze-im-internet.de, gesetze.li) und Fachverlage (Beck, NWB, Haufe, DStR, ZEV, ZStV). Bereits behandelt (nicht erneut): ${bereitsBehandelt.join("; ") || "–"}.

Wähle DIE eine Entwicklung mit der größten Bedeutung für vermögende Privatpersonen und Unternehmerfamilien. Antworte in genau diesem Format:
TITEL: kurzer Titel
DATUM: Datum der Entscheidung/Veröffentlichung
FUNDSTELLE: Aktenzeichen oder Dokument
JURISDIKTION: DE | LI | DE/LI
NORMEN: die betroffenen Normen, mit Komma getrennt
NOTIZEN: 150–250 Wörter in eigenen Worten – was ist passiert, was ist der Kern, was bedeutet es für Betroffene (abstrakt, keine Beratung)
QUELLEN: 2–3 URLs, eine je Zeile`;
  const r = await webAufruf(frage, { zweck: "recherche", maxSuchen: CONFIG.ki.rechercheSuchen });
  const feld = (name) => (r.text.match(new RegExp(`${name}\\s*[:：]\\s*(.+)`, "i")) || [])[1]?.trim() || "";
  const notizen = (r.text.match(/NOTIZEN\s*[:：]\s*([\s\S]*?)(?:\n\s*QUELLEN|$)/i) || [])[1]?.trim() || r.text;
  const j = feld("JURISDIKTION").toUpperCase();
  return {
    titel: feld("TITEL"), datum: feld("DATUM"), fundstelle: feld("FUNDSTELLE"),
    jurisdiktion: /LI/.test(j) && /DE/.test(j) ? "DE/LI" : /LI/.test(j) ? "LI" : "DE",
    normen: feld("NORMEN").split(/,\s*/).filter(Boolean).slice(0, 6),
    notizen, quellen: r.quellen, suchen: r.suchen,
  };
}
