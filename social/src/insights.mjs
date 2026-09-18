/* ==========================================================================
   Lernschleife aus den Instagram-Statistiken (Strategiepapier, Abschnitt 15).

   Je Beitrag werden nach 48 Stunden und nach 7 Tagen Reichweite, Saves,
   Shares, Kommentare, Likes, Profilbesuche und Follows gelesen. Daraus
   entsteht state/strategie.json mit Gewichten je
     Thema-Block × Format × Hook-Typ × Folienzahl × CTA × Uhrzeit
   sowie Tiefe und Blickwinkel. Planer, Autor und Hook-Wahl lesen diese
   Gewichte; ohne Daten bleibt alles beim Standard.
   Berechtigung: instagram_business_manage_insights.
   ========================================================================== */

import { CONFIG } from "./config.mjs";
import { hhmm } from "./zeit.mjs";

const METRIKEN_BILD = "reach,saved,shares,likes,comments,total_interactions";
const METRIKEN_REEL = "reach,saved,shares,likes,comments,total_interactions,views";
const METRIKEN_WACHSTUM = "follows,profile_visits";

function werte(r) {
  const o = {};
  for (const m of r.data || []) o[m.name] = m.values?.[0]?.value ?? m.total_value?.value ?? 0;
  return o;
}

/** Kennzahlen eines Mediums (Fehler → null, z. B. fehlende Berechtigung). */
export async function medienInsights(ig, medium) {
  const basis = medium.media_type === "VIDEO" || medium.media_product_type === "REELS" ? METRIKEN_REEL : METRIKEN_BILD;
  try {
    try { return werte(await ig.anfrage("GET", `${medium.id}/insights`, { metric: `${basis},${METRIKEN_WACHSTUM}` }, { versuche: 1 })); }
    catch { return werte(await ig.anfrage("GET", `${medium.id}/insights`, { metric: basis })); }
  } catch { return null; }
}

/** Konto: Follower, Reichweite der letzten 7 Tage, Online-Stunden, Profil. */
export async function kontoInsights(ig) {
  const out = { follower: null, reichweite7: null, onlineStunden: null, profil: null };
  try { out.follower = (await ig.anfrage("GET", ig.kontoId, { fields: "followers_count,media_count" })).followers_count; } catch { /* egal */ }
  try { const p = await ig.anfrage("GET", ig.kontoId, { fields: "biography,website,profile_picture_url,name" }, { versuche: 1 }); out.profil = { bio: p.biography || "", website: p.website || "", bild: !!p.profile_picture_url, name: p.name || "" }; } catch { /* egal */ }
  try {
    const r = await ig.anfrage("GET", `${ig.kontoId}/insights`, { metric: "reach", period: "day", metric_type: "total_value", since: Math.floor(Date.now() / 1000) - 7 * 86400, until: Math.floor(Date.now() / 1000) });
    out.reichweite7 = r.data?.[0]?.total_value?.value ?? r.data?.[0]?.values?.reduce((a, v) => a + (v.value || 0), 0) ?? null;
  } catch { /* egal */ }
  try {
    const r = await ig.anfrage("GET", `${ig.kontoId}/insights`, { metric: "online_followers", period: "lifetime" });
    const v = r.data?.[0]?.values?.[0]?.value;
    if (v && typeof v === "object") out.onlineStunden = v;
  } catch { /* egal */ }
  return out;
}

/** Bewertung eines Beitrags: Follows und Profilbesuche zählen am meisten, dann Saves und Shares. */
export function punkte(m) {
  if (!m) return null;
  return (m.follows || 0) * 10 + (m.profile_visits || 0) * 2 + (m.saved || 0) * 3 + (m.shares || 0) * 4 + (m.comments || 0) * 2 + (m.likes || 0) + (m.reach || 0) / 100 + (m.views || 0) / 300;
}

export function hashtagGewichte(eintraege) {
  const mitTags = eintraege.filter((e) => Array.isArray(e.hashtags) && e.hashtags.length);
  if (mitTags.length < 4) return { gewicht: {}, folgen: {} };
  const mittel = mitTags.reduce((a, e) => a + punkte(e.insights), 0) / mitTags.length || 1;
  const g = {}, f = {};
  for (const e of mitTags) for (const h of new Set(e.hashtags.map((x) => x.toLowerCase()))) { (g[h] ||= []).push(punkte(e.insights)); f[h] = (f[h] || 0) + (e.insights.follows || 0); }
  const gewicht = {};
  for (const [h, v] of Object.entries(g)) if (v.length >= 2) gewicht[h] = Math.max(0.5, Math.min(2, (v.reduce((a, b) => a + b, 0) / v.length) / mittel));
  return { gewicht, folgen: f };
}

/** Folienzahl als Gruppe („5“ … „9“). */
export const folienGruppe = (n) => (n ? String(Math.max(5, Math.min(9, n))) : null);

/** Aus dem Ledger (Einträge mit insights) die Gewichte ableiten. */
export function strategieAbleiten(ledger, konto = {}) {
  const eintraege = (ledger.veroeffentlicht || []).filter((e) => e.art === "beitrag" && e.insights && punkte(e.insights) != null);
  const strategie = { stand: new Date().toISOString().slice(0, 10), beitraege: eintraege.length, schwerpunktGewicht: {}, formatGewicht: {}, hookGewicht: {}, folienGewicht: {}, ctaGewicht: {}, tiefeGewicht: {}, blickwinkelGewicht: {}, themaGewicht: {}, besteStunden: null, follower: konto.follower ?? null, reichweite7: konto.reichweite7 ?? null };
  if (eintraege.length >= 6) {
    const mittel = eintraege.reduce((a, e) => a + punkte(e.insights), 0) / eintraege.length || 1;
    const gruppe = (key, min = 2, f = (v) => v) => {
      const g = {};
      for (const e of eintraege) { const k = f(e[key]); if (!k) continue; (g[k] ||= []).push(punkte(e.insights)); }
      const out = {};
      for (const [k, v] of Object.entries(g)) if (v.length >= min) out[k] = Math.max(0.5, Math.min(2, (v.reduce((a, b) => a + b, 0) / v.length) / mittel));
      return out;
    };
    strategie.schwerpunktGewicht = gruppe("schwerpunkt");
    strategie.formatGewicht = gruppe("format");
    strategie.hookGewicht = gruppe("hookTyp");
    strategie.folienGewicht = gruppe("folien", 2, folienGruppe);
    strategie.ctaGewicht = gruppe("cta");
    strategie.tiefeGewicht = gruppe("tiefe");
    strategie.blickwinkelGewicht = gruppe("blickwinkel");
    /* Themen: ein einzelner Beitrag reicht, aber das Gewicht bleibt eng (0,7–1,5). */
    const tg = gruppe("thema", 1);
    for (const [k, v] of Object.entries(tg)) strategie.themaGewicht[k] = Math.max(0.7, Math.min(1.5, v));
    /* Kombination Block × Hook-Typ für den Bericht. */
    for (const e of eintraege) e.kombi = e.schwerpunkt && e.hookTyp ? `${e.schwerpunkt}×${e.hookTyp}` : null;
    strategie.kombinationen = gruppe("kombi", 2);
    for (const e of eintraege) delete e.kombi;
  }
  const ht = hashtagGewichte(eintraege);
  strategie.hashtagGewicht = ht.gewicht;
  strategie.hashtagFolgen = ht.folgen;
  strategie.folgenGesamt = eintraege.reduce((a, e) => a + (e.insights.follows || 0), 0);
  strategie.profil = konto.profil || null;
  if (konto.onlineStunden) {
    const offset = istSommerzeit() ? 2 : 1;
    const lokal = Object.entries(konto.onlineStunden).map(([h, n]) => [((Number(h) + offset) % 24), n]).filter(([h]) => h >= 6 && h <= 22).sort((a, b) => b[1] - a[1]);
    const gewaehlt = [];
    for (const [h] of lokal) { if (gewaehlt.every((g) => Math.abs(g - h) >= 3)) gewaehlt.push(h); if (gewaehlt.length === 3) break; }
    if (gewaehlt.length === 3) strategie.besteStunden = gewaehlt.sort((a, b) => a - b).map((h) => hhmm(h * 60 + 30));
  }
  return strategie;
}

function istSommerzeit(d = new Date()) {
  const f = new Intl.DateTimeFormat("de-DE", { timeZone: "Europe/Berlin", timeZoneName: "short" });
  return f.formatToParts(d).some((p) => p.type === "timeZoneName" && /MESZ|GMT\+2/.test(p.value));
}

/**
 * Tägliche Aktualisierung: Insights nach 48 h und nach 7 Tagen lesen,
 * Strategie neu berechnen. Rückgabe: Strategie + Kontozahlen.
 */
export async function lernschleife(ig, ledger, hosting, { log = console.log } = {}) {
  const grenze = new Date(Date.now() - 30 * 86400000).toISOString().slice(0, 10);
  const offen = (ledger.veroeffentlicht || []).filter((e) => e.art === "beitrag" && e.medienId && e.medienId !== "trocken" && e.datum >= grenze);
  let n = 0;
  const medienTypen = new Map();
  try {
    const liste = await ig.anfrage("GET", `${ig.kontoId}/media`, { fields: "id,media_type,media_product_type,timestamp", limit: 60 });
    for (const m of liste.data || []) medienTypen.set(m.id, m);
  } catch { /* egal */ }
  for (const e of offen) {
    const alterTage = (Date.now() - new Date(e.veroeffentlicht || `${e.datum}T12:00:00Z`).getTime()) / 86400000;
    const messen48 = alterTage >= 2 && !e.insights48;
    const messen7 = alterTage >= 7 && !e.insights7;
    if (!messen48 && !messen7) continue;
    const m = await medienInsights(ig, medienTypen.get(e.medienId) || { id: e.medienId, media_type: e.format === "reel" ? "VIDEO" : "CAROUSEL_ALBUM" });
    if (!m) continue;
    e.insights = m; e.insightsStand = new Date().toISOString();
    if (messen48) e.insights48 = m;
    if (messen7) e.insights7 = m;
    n++;
  }
  const konto = await kontoInsights(ig);
  const strategie = strategieAbleiten(ledger, konto);
  hosting.jsonSchreiben("strategie.json", strategie);
  const verlauf = hosting.jsonLesen("follower.json", []);
  if (konto.follower != null) { verlauf.push({ datum: new Date().toISOString().slice(0, 10), follower: konto.follower, reichweite7: konto.reichweite7 }); hosting.jsonSchreiben("follower.json", verlauf.slice(-400)); }
  log(`Lernschleife: ${n} Messungen · ${strategie.beitraege} bewertete Beiträge · Follower ${konto.follower ?? "?"} · beste Zeiten ${strategie.besteStunden?.join(", ") || "Standard"}`);
  return { strategie, konto };
}
