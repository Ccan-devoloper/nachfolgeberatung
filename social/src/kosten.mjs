/* ==========================================================================
   Verbrauch der KI-Aufrufe mitschreiben und den Tagesdeckel durchsetzen.

   Zwei Anbieter: Claude (Schreiben, Prüfen, Recherche) und OpenAI (zweiter
   Faktencheck). Beide zählen auf denselben Deckel – 0,35 € am Tag für alles.
   ========================================================================== */

import { CONFIG } from "./config.mjs";

/* USD je Million Tokens. */
const PREISE = {
  "claude-opus-5": { ein: 5, aus: 25, cacheLesen: 0.5, cacheSchreiben: 6.25 },
  "claude-sonnet-5": { ein: 2, aus: 10, cacheLesen: 0.2, cacheSchreiben: 2.5 },
  "claude-opus-4-8": { ein: 5, aus: 25, cacheLesen: 0.5, cacheSchreiben: 6.25 },
  "claude-haiku-4-5": { ein: 1, aus: 5, cacheLesen: 0.1, cacheSchreiben: 1.25 },
  "claude-haiku-4-5-20251001": { ein: 1, aus: 5, cacheLesen: 0.1, cacheSchreiben: 1.25 },
  /* OpenAI – Richtwerte; die Konfiguration überschreibt sie für das gewählte Modell. */
  "gpt-5": { ein: 1.25, aus: 10, cacheLesen: 0.125, cacheSchreiben: 0 },
  "gpt-5-mini": { ein: 0.25, aus: 2, cacheLesen: 0.025, cacheSchreiben: 0 },
  "gpt-5-nano": { ein: 0.05, aus: 0.4, cacheLesen: 0.005, cacheSchreiben: 0 },
  "gpt-4.1-mini": { ein: 0.4, aus: 1.6, cacheLesen: 0.1, cacheSchreiben: 0 },
  "gpt-4o-mini": { ein: 0.15, aus: 0.6, cacheLesen: 0.075, cacheSchreiben: 0 },
};
/* Websuche (Claude Server-Tool): je Suche, zusätzlich zu den Tokens. */
export const PREIS_WEBSUCHE_USD = 0.01;

const posten = [];

let limitUsd = Infinity, vorbelastung = 0, speichern = null;
let reserviert = 0, reserviertFuer = "";

export class BudgetFehler extends Error {}

export function budgetSetzen(opt = {}) {
  posten.length = 0;
  for (const k of Object.keys(GEMESSEN)) delete GEMESSEN[k];
  Object.assign(GEMESSEN, opt.gemessen || {});
  limitUsd = opt.limitUsd ?? Infinity;
  vorbelastung = opt.bisher ?? 0;
  speichern = opt.speichern ?? null;
  reserviert = opt.reserviert ?? 0;
  reserviertFuer = (opt.reserviertFuer ?? "").toLowerCase();
}

/* Rücklage für einen Zweck (z. B. „gegencheck“ oder „openai“): andere Aufrufe
   hören entsprechend früher auf, damit der zurückgelegte Zweck noch bezahlbar ist. */
export function reservieren(betrag, fuer) { reserviert = Math.max(0, Number(betrag) || 0); reserviertFuer = String(fuer || "").toLowerCase(); }
export function reservierungAufheben() { reserviert = 0; reserviertFuer = ""; }
export const reservierung = () => reserviert;
export const messungen = () => ({ ...GEMESSEN });

export const tagesStand = () => vorbelastung + summe();
export const tagesLimit = () => limitUsd;

/* Was ein Aufruf erfahrungsgemäß kostet – Startwerte, bis gemessen wurde. */
const ERWARTET = {
  "story-faktencheck": 0.01,
  faktencheck: 0.01,
  openai: 0.01,
  hooks: 0.005,
  gegencheck: 0.04,
  recherche: 0.05,
  stories: 0.03,
  beitrag: 0.06,
  autor: 0.06,
  kommentare: 0.02,
};
const STANDARD = 0.05;
const schluessel = (zweck) => Object.keys(ERWARTET).sort((a, b) => b.length - a.length).find((n) => String(zweck).toLowerCase().includes(n)) || null;
const GEMESSEN = {};
const erwartetFuer = (zweck) => { const k = schluessel(zweck); if (!k) return STANDARD; return GEMESSEN[k] ?? ERWARTET[k]; };

const darfReserve = (zweck) => Boolean(reserviertFuer) && String(zweck).toLowerCase().includes(reserviertFuer);
export const budgetFrei = (zweck = "") => tagesStand() + erwartetFuer(zweck) + (darfReserve(zweck) ? 0 : reserviert) < limitUsd;

export function budgetPruefen(zweck = "KI-Aufruf") {
  if (budgetFrei(zweck)) return;
  const rest = reserviert && !darfReserve(zweck) ? ` (davon ${reserviert.toFixed(2)} $ für ${reserviertFuer} zurückgelegt)` : "";
  throw new BudgetFehler(`Tagesbudget erreicht (${tagesStand().toFixed(3)} $ von ${limitUsd.toFixed(2)} $)${rest} – ${zweck} wartet bis morgen.`);
}

function buchen(modell, usd, zweck, usage, extra = {}) {
  posten.push({ modell, zweck, usd, ein: usage?.input_tokens || usage?.prompt_tokens || 0, aus: usage?.output_tokens || usage?.completion_tokens || 0, cache: usage?.cache_read_input_tokens || usage?.prompt_tokens_details?.cached_tokens || 0, ...extra });
  const k = schluessel(zweck);
  if (k) GEMESSEN[k] = Math.max(GEMESSEN[k] ?? 0, usd);
  const f = (n) => (n >= 1000 ? `${(n / 1000).toFixed(1)}k` : String(n));
  const p = posten.at(-1);
  console.log(`  $ ${usd.toFixed(4)} ${zweck || modell} · ${f(p.ein)} ein / ${f(p.aus)} aus / ${f(p.cache)} Cache`);
  if (speichern) { try { speichern(tagesStand(), posten.length, jeZweck(), messungen()); } catch (e) { console.warn(`  ! Kosten nicht gespeichert: ${e.message}`); } }
  return usd;
}

/** Claude-Aufruf verbuchen. `suchen` = Zahl der Websuchen im Aufruf. */
export function erfassen(modell, usage, zweck = "", { suchen = 0 } = {}) {
  if (!usage) return 0;
  const p = PREISE[modell] || PREISE["claude-sonnet-5"];
  const usd = ((usage.input_tokens || 0) * p.ein + (usage.output_tokens || 0) * p.aus + (usage.cache_read_input_tokens || 0) * p.cacheLesen + (usage.cache_creation_input_tokens || 0) * p.cacheSchreiben) / 1e6 + suchen * PREIS_WEBSUCHE_USD;
  return buchen(modell, usd, zweck, usage, { suchen });
}

/** OpenAI-Aufruf verbuchen (Chat Completions usage: prompt_tokens/completion_tokens). */
export function erfassenOpenai(modell, usage, zweck = "openai") {
  if (!usage) return 0;
  const cfg = CONFIG.openai;
  const p = modell === cfg.modell ? { ein: cfg.preisEin, aus: cfg.preisAus, cacheLesen: cfg.preisEin / 10 } : (PREISE[modell] || { ein: cfg.preisEin, aus: cfg.preisAus, cacheLesen: cfg.preisEin / 10 });
  const cached = usage.prompt_tokens_details?.cached_tokens || 0;
  const usd = (((usage.prompt_tokens || 0) - cached) * p.ein + cached * p.cacheLesen + (usage.completion_tokens || 0) * p.aus) / 1e6;
  return buchen(modell, usd, zweck, usage);
}

export function jeZweck() {
  const m = {};
  for (const p of posten) m[p.zweck || p.modell] = (m[p.zweck || p.modell] || 0) + p.usd;
  return m;
}

export function summe() {
  return posten.reduce((a, b) => a + b.usd, 0);
}

export function abschluss() {
  return { usd: summe(), aufrufe: posten.length, cacheAnteil: posten.length ? posten.reduce((a, b) => a + b.cache, 0) / Math.max(1, posten.reduce((a, b) => a + b.ein + b.cache, 0)) : 0, posten: [...posten] };
}
