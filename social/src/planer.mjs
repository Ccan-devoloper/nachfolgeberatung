/* ==========================================================================
   Tagesplaner.

   Erstellt für ein Datum den Plan: ein Feed-Beitrag (Thema, Blickwinkel,
   CTA-Typ, Uhrzeit) und die Stories des Tages. Deterministisch (Seed =
   Datum), damit mehrere Läufe am selben Tag denselben Plan sehen.

   Das Ledger (state/ledger.json) sorgt dafür, dass
     - die sieben Inhaltsblöcke über ein rollendes 28-Tage-Fenster ihre
       Zielanteile halten (Familienstiftung DE 30 %, Liechtenstein 20 % …),
     - die Tiefen 40/40/20 ebenfalls,
     - ein Thema frühestens nach 12 Tagen und mit demselben Blickwinkel
       frühestens nach 240 Tagen wiederkommt,
     - Themen, die der Web-Gegencheck als überholt gemeldet hat, bis zur
       Pflege gesperrt bleiben,
     - die CTA-Typen rotieren und der Beratungs-CTA selten bleibt.
   ========================================================================== */

import fs from "node:fs";
import path from "node:path";
import { CONFIG } from "./config.mjs";
import { SCHWERPUNKTE, TIEFEN } from "./inhalte.mjs";
import { heuteIso, wochentag, minutenVon, hhmm, tageBis } from "./zeit.mjs";
import { zeitenWaehlen } from "./zeiten.mjs";

/* Mulberry32 – kleiner, reproduzierbarer Zufallsgenerator. */
export function rng(seedText) {
  let h = 1779033703 ^ seedText.length;
  for (let i = 0; i < seedText.length; i++) { h = Math.imul(h ^ seedText.charCodeAt(i), 3432918353); h = (h << 13) | (h >>> 19); }
  let a = h >>> 0;
  return () => { a |= 0; a = (a + 0x6d2b79f5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
}

export function ledgerLaden(pfad) {
  if (pfad && fs.existsSync(pfad)) return JSON.parse(fs.readFileSync(pfad, "utf8"));
  return { veroeffentlicht: [], gesperrt: {} };
}

export function ledgerSpeichern(pfad, ledger) {
  fs.mkdirSync(path.dirname(pfad), { recursive: true });
  fs.writeFileSync(pfad, JSON.stringify(ledger, null, 2));
}

const tagVon = (iso) => new Date(`${iso}T12:00:00Z`);
const tageZwischen = (a, b) => Math.round((tagVon(b) - tagVon(a)) / 86400000);

/** Beiträge im rollenden Fenster vor dem Datum. */
export function fenster(ledger, datum, tage = CONFIG.plan.quotenFensterTage) {
  return (ledger.veroeffentlicht || []).filter((e) => e.art === "beitrag" && e.datum < datum && tageZwischen(e.datum, datum) <= tage);
}

function schwerpunktWaehlen(eintraege, zufall, strategie) {
  /* Der allererste Beitrag des Kanals ist eine deutsche Familienstiftung –
     das ist die Positionierung. */
  if (!eintraege.length) return "de";
  const n = eintraege.length + 1;
  const g = (CONFIG.plan.lernen && strategie?.schwerpunktGewicht) || {};
  /* „Aktuelles“ braucht eine Web-Recherche und einen Kanal, der schon steht:
     die ersten Beiträge kommen aus der Wissensbasis. */
  const kandidaten = Object.entries(SCHWERPUNKTE).filter(([k]) => k !== "aktuell" || eintraege.length >= 6).map(([k, s]) => {
    const soll = (s.anteil / 100) * n;
    const ist = eintraege.filter((e) => e.schwerpunkt === k).length;
    /* Rückstand plus kleiner Grundwert, damit auch erfüllte Blöcke eine
       Chance behalten; gelernte Gewichte verschieben, sie sperren nicht. */
    const w = Math.max(0.05, soll - ist + 0.3) * (g[k] ?? 1);
    return [k, w];
  });
  const summe = kandidaten.reduce((a, [, w]) => a + w, 0);
  let r = zufall() * summe;
  for (const [k, w] of kandidaten) { r -= w; if (r <= 0) return k; }
  return kandidaten.at(-1)[0];
}

function tiefeWaehlen(eintraege, zufall) {
  const n = eintraege.length + 1;
  const kandidaten = Object.entries(TIEFEN).map(([k, anteil]) => [k, Math.max(0.05, (anteil / 100) * n - eintraege.filter((e) => e.tiefe === k).length + 0.3)]);
  const summe = kandidaten.reduce((a, [, w]) => a + w, 0);
  let r = zufall() * summe;
  for (const [k, w] of kandidaten) { r -= w; if (r <= 0) return k; }
  return kandidaten.at(-1)[0];
}

/** Ist ein Thema (mit Blickwinkel) heute verfügbar? */
export function verfuegbar(t, ledger, datum, { blickwinkel = null, benutzt = new Set(), storySperre = false } = {}) {
  if (benutzt.has(t.id)) return false;
  const sperre = ledger.gesperrt?.[t.id];
  if (sperre && (!t.stand || t.stand <= sperre.stand)) return false;
  const eintraege = (ledger.veroeffentlicht || []).filter((e) => e.thema === t.id && e.datum <= datum);
  for (const e of eintraege) {
    const tage = tageZwischen(e.datum, datum);
    if (e.art === "beitrag") {
      if (tage < CONFIG.plan.themaSperreTage) return false;
      if (blickwinkel && e.blickwinkel === blickwinkel && tage < CONFIG.plan.sperreTage) return false;
    } else if (storySperre && tage < 30) return false;
  }
  return true;
}

/** Welche Blickwinkel eines Themas heute nicht gesperrt sind. */
export function freieBlickwinkel(t, ledger, datum) {
  return (t.blickwinkel || ["frage"]).filter((b) => verfuegbar(t, ledger, datum, { blickwinkel: b }));
}

function gewichteteWahl(kandidaten, zufall, gewichtVon = (t) => t.gewichtung || 1) {
  const gewichte = kandidaten.map(gewichtVon);
  const summe = gewichte.reduce((a, b) => a + b, 0);
  let r = zufall() * summe;
  for (let i = 0; i < kandidaten.length; i++) { r -= gewichte[i]; if (r <= 0) return kandidaten[i]; }
  return kandidaten.at(-1);
}

/**
 * Thema für den Beitrag: Block und Tiefe nach Quote, dann gewichtete Wahl
 * unter den freien Themen. Verwandte Themen der letzten Woche werden gemieden.
 */
export function themaWaehlen(pool, ledger, datum, zufall, { schwerpunkt, tiefe, benutzt = new Set(), strategie = null }) {
  const woche = (ledger.veroeffentlicht || []).filter((e) => e.art === "beitrag" && tageZwischen(e.datum, datum) <= 7).map((e) => e.thema);
  const verwandtGemieden = new Set(pool.filter((t) => woche.includes(t.id)).flatMap((t) => t.verwandt || []));
  let kandidaten = pool.filter((t) => t.schwerpunkt === schwerpunkt && verfuegbar(t, ledger, datum, { benutzt }) && freieBlickwinkel(t, ledger, datum).length);
  if (!kandidaten.length) kandidaten = pool.filter((t) => verfuegbar(t, ledger, datum, { benutzt }) && freieBlickwinkel(t, ledger, datum).length);
  if (!kandidaten.length) return null;
  const ohneVerwandte = kandidaten.filter((t) => !verwandtGemieden.has(t.id));
  if (ohneVerwandte.length >= 2) kandidaten = ohneVerwandte;
  const passendeTiefe = kandidaten.filter((t) => t.tiefe === tiefe);
  if (passendeTiefe.length >= 2) kandidaten = passendeTiefe;
  const tg = (CONFIG.plan.lernen && strategie?.themaGewicht) || {};
  return gewichteteWahl(kandidaten, zufall, (t) => (t.gewichtung || 1) * (tg[t.id] ?? 1));
}

/** Blickwinkel: der am längsten nicht gebrauchte unter den freien. */
export function blickwinkelWaehlen(t, ledger, datum, zufall, strategie = null) {
  const frei = freieBlickwinkel(t, ledger, datum);
  if (!frei.length) return "frage";
  const letzte = fenster(ledger, datum, 60);
  const g = (CONFIG.plan.lernen && strategie?.blickwinkelGewicht) || {};
  const gewicht = (b) => (1 / (1 + letzte.filter((e) => e.blickwinkel === b).length)) * (g[b] ?? 1);
  return gewichteteWahl(frei, zufall, gewicht);
}

/**
 * CTA-Typ: Speichern, Teilen, Folgen, Gespräch rotieren; der Beratungs-CTA
 * kommt erst nach den ersten Wochen und bleibt bei rund 12 %.
 */
export function ctaWaehlen(ledger, datum, zufall, strategie = null) {
  const alle = (ledger.veroeffentlicht || []).filter((e) => e.art === "beitrag" && e.medienId && e.medienId !== "trocken");
  const start = alle.length ? alle.map((e) => e.datum).sort()[0] : datum;
  const letzte = fenster(ledger, datum);
  const anteil = (k) => letzte.filter((e) => e.cta === k).length / Math.max(1, letzte.length);
  const conversionErlaubt = tageZwischen(start, datum) >= CONFIG.cta.conversionFruehestensNachTagen && anteil("conversion") < CONFIG.cta.conversionAnteil;
  if (conversionErlaubt && zufall() < CONFIG.cta.conversionAnteil) return "conversion";
  const g = (CONFIG.plan.lernen && strategie?.ctaGewicht) || {};
  const typen = ["save", "share", "follow", "conversation"];
  return gewichteteWahl(typen, zufall, (k) => (1 / (1 + letzte.filter((e) => e.cta === k).length)) * (g[k] ?? 1));
}

function zeitImFenster(von, bis, zufall) {
  const a = minutenVon(von), b = minutenVon(bis);
  return hhmm(Math.round(a + zufall() * Math.max(0, b - a)));
}

/**
 * Baut den Tagesplan.
 * @returns {{datum, wochentag, beitraege:[{slot, zeit, format, thema, blickwinkel, cta}], stories:[{slot, zeit, art, thema?, beitragSlot?}]}}
 */
export function tagesplan(datum = heuteIso(), ledger = ledgerLaden(), pool = [], strategie = null) {
  const zufall = rng(`plan:${datum}`);
  const wt = wochentag(tagVon(datum));
  let format = CONFIG.plan.formatJeWochentag[wt] || "carousel";
  if (format === "reel" && !CONFIG.reel.aktiv) format = "carousel";
  const letzte = fenster(ledger, datum);
  const benutzt = new Set();

  /* Beitrag */
  const schwerpunkt = schwerpunktWaehlen(letzte, zufall, strategie);
  const tiefe = tiefeWaehlen(letzte, zufall);
  let thema = null, blickwinkel = null;
  if (schwerpunkt !== "aktuell") {
    thema = themaWaehlen(pool, ledger, datum, zufall, { schwerpunkt, tiefe, benutzt, strategie });
    if (thema) { benutzt.add(thema.id); blickwinkel = blickwinkelWaehlen(thema, ledger, datum, zufall, strategie); }
  }
  const cta = ctaWaehlen(ledger, datum, zufall, strategie);
  const [zeit] = zeitenWaehlen({ formate: [format], datum, ledger, strategie, zufall });
  const beitraege = [{ slot: "b1", zeit, format, thema, schwerpunkt: thema ? thema.schwerpunkt : schwerpunkt, tiefe: thema?.tiefe || tiefe, blickwinkel, cta }];

  /* Stories: Hook (eigenes Thema), Zusatzwissen (verwandtes Thema),
     Hinweis auf den Beitrag; an einigen Tagen eine vierte zu Aktuellem. */
  const stories = [];
  const storyThema = (bevorzugt) => {
    let k = pool.filter((t) => verfuegbar(t, ledger, datum, { benutzt, storySperre: true }));
    const b = k.filter(bevorzugt);
    if (b.length) k = b;
    if (!k.length) return null;
    const t = gewichteteWahl(k, zufall);
    benutzt.add(t.id);
    return t;
  };
  const hookThema = storyThema((t) => t.schwerpunkt === schwerpunkt && t.tiefe === "einstieg");
  stories.push({ art: "hook", thema: hookThema, zeit: zeitImFenster(CONFIG.plan.storyFenster[0], "10:30", zufall) });
  const verwandt = new Set(thema?.verwandt || []);
  const wissenThema = storyThema((t) => verwandt.has(t.id)) || storyThema((t) => t.schwerpunkt === schwerpunkt);
  stories.push({ art: "wissen", thema: wissenThema, zeit: zeitImFenster("12:00", "15:00", zufall) });
  stories.push({ art: "hinweis", beitragSlot: "b1", zeit: hhmm(Math.min(minutenVon(CONFIG.plan.storyFenster[1]), minutenVon(zeit) + 20)) });
  const vierte = CONFIG.plan.storiesProTag >= 4 || zufall() < CONFIG.plan.vierteStoryJeWoche / 7;
  if (vierte) stories.push({ art: "aktuell", thema: null, zeit: zeitImFenster("17:30", CONFIG.plan.storyFenster[1], zufall) });
  stories.sort((a, b) => minutenVon(a.zeit) - minutenVon(b.zeit));
  stories.forEach((s, i) => { s.slot = `s${i + 1}`; });

  return { datum, wochentag: wt, beitraege, stories };
}

/** Ersatzthema, wenn ein Beitrag nicht freigegeben wurde – gleicher Block, anderes Thema. */
export function ersatzThema(eintrag, pool, ledger, datum, ausgeschlossen = []) {
  const zufall = rng(`ersatz:${datum}:${ausgeschlossen.length}`);
  const benutzt = new Set(ausgeschlossen);
  const thema = themaWaehlen(pool, ledger, datum, zufall, { schwerpunkt: eintrag.schwerpunkt, tiefe: eintrag.tiefe, benutzt });
  if (!thema) return null;
  return { thema, blickwinkel: blickwinkelWaehlen(thema, ledger, datum, zufall) };
}

/** Thema sperren (Gegencheck „widerlegt“) – bis der Rechtsstand des Themas neuer ist. */
export function themaSperren(ledger, thema, grund) {
  ledger.gesperrt = ledger.gesperrt || {};
  ledger.gesperrt[thema.id] = { datum: heuteIso(), stand: thema.stand || "0000-00-00", grund: String(grund).slice(0, 500) };
  return ledger;
}

/** Nach einer Veröffentlichung im Ledger vermerken. */
export function vermerken(ledger, eintrag) {
  ledger.veroeffentlicht = ledger.veroeffentlicht || [];
  ledger.veroeffentlicht.push(eintrag);
  const grenze = new Date(Date.now() - 400 * 86400000).toISOString().slice(0, 10);
  ledger.veroeffentlicht = ledger.veroeffentlicht.filter((e) => e.datum >= grenze);
  return ledger;
}

/** Quotenstand für Bericht und Tests. */
export function quotenStand(ledger, datum = heuteIso()) {
  const letzte = fenster(ledger, datum);
  const je = (key, ziele) => Object.fromEntries(Object.keys(ziele).map((k) => [k, { ist: letzte.filter((e) => e[key] === k).length, soll: Math.round((ziele[k].anteil ?? ziele[k]) / 100 * letzte.length * 10) / 10 }]));
  return { beitraege: letzte.length, schwerpunkt: je("schwerpunkt", SCHWERPUNKTE), tiefe: je("tiefe", TIEFEN), cta: ["save", "share", "follow", "conversation", "conversion"].map((k) => [k, letzte.filter((e) => e.cta === k).length]) };
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const { themenpool } = await import("./inhalte.mjs");
  const datum = process.argv[2] || heuteIso();
  const plan = tagesplan(datum, ledgerLaden(), await themenpool());
  console.log(`Plan für ${datum} (Wochentag ${plan.wochentag})`);
  for (const b of plan.beitraege) console.log(`  ${b.zeit}  Beitrag ${b.slot} ${b.format} · ${b.schwerpunkt} · ${b.tiefe} · ${b.blickwinkel || "recherche"} · CTA ${b.cta} · ${b.thema?.titel || "(Aktuelles – Web)"}`);
  for (const s of plan.stories) console.log(`  ${s.zeit}  Story   ${s.slot} ${s.art.padEnd(8)} ${s.thema?.titel || (s.beitragSlot ? `→ ${s.beitragSlot}` : "(Web)")}`);
}
