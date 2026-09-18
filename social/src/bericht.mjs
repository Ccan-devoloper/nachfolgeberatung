/* ==========================================================================
   Wochenbericht: Follower, Reichweite, beste Beiträge, Quoten, Kosten,
   Fehler – als E-Mail (SMTP) und immer auch als Datei im Asset-Zweig.
   ========================================================================== */

import nodemailer from "nodemailer";
import { CONFIG } from "./config.mjs";
import { punkte } from "./insights.mjs";
import { zeitBericht } from "./zeiten.mjs";
import { quotenStand } from "./planer.mjs";
import { SCHWERPUNKTE } from "./inhalte.mjs";
import { datumLesbar } from "./zeit.mjs";

export function berichtErstellen({ ledger, strategie, follower, kosten, datum, fehler = [], hinweise = [] }) {
  const woche = new Date(new Date(`${datum}T12:00:00Z`).getTime() - 7 * 86400000).toISOString().slice(0, 10);
  const alle = ledger.veroeffentlicht || [];
  const beitraege = alle.filter((e) => e.art === "beitrag" && e.datum >= woche);
  const stories = alle.filter((e) => e.art === "story" && e.datum >= woche);
  const antworten = (ledger.interaktionen || []).filter((i) => i.datum >= woche && !i.uebersprungen);
  const bewertet = alle.filter((e) => e.art === "beitrag" && e.insights).sort((a, b) => punkte(b.insights) - punkte(a.insights));
  const f = follower || [];
  const jetzt = f.at(-1)?.follower, vorWoche = f.filter((x) => x.datum <= woche).at(-1)?.follower;
  const z = [];
  z.push(`Wochenbericht · ${CONFIG.marke.anzeigename} · ${datumLesbar(woche)} bis ${datumLesbar(datum)}`, "");
  z.push(`Follower: ${jetzt ?? "unbekannt"}${jetzt != null && vorWoche != null ? ` (${jetzt - vorWoche >= 0 ? "+" : ""}${jetzt - vorWoche} in 7 Tagen)` : ""}`);
  if (strategie?.reichweite7 != null) z.push(`Reichweite letzte 7 Tage: ${strategie.reichweite7}`);
  z.push(`Veröffentlicht: ${beitraege.length} Beiträge, ${stories.length} Stories · Kommentare beantwortet: ${antworten.length}`);
  z.push(`Kosten (Claude + OpenAI) diese Woche: ≈ ${(kosten?.usd ?? 0).toFixed(2)} $ (${kosten?.aufrufe ?? 0} Aufrufe)`);
  const tage = Object.entries(kosten?.tage || {}).sort().slice(-7);
  if (tage.length) z.push(`Je Tag (Deckel ${(kosten?.limit ?? 0).toFixed(2)} $): ${tage.map(([t, v]) => `${t.slice(8)}.${t.slice(5, 7)}. ${(v.usd ?? 0).toFixed(2)} $`).join(" · ")}`);
  z.push("");
  const q = quotenStand(ledger, datum);
  z.push(`Themenmix der letzten 28 Tage (${q.beitraege} Beiträge): ${Object.entries(q.schwerpunkt).map(([k, v]) => `${SCHWERPUNKTE[k].kurz} ${v.ist}/${v.soll}`).join(" · ")}`);
  z.push(`Tiefe: ${Object.entries(q.tiefe).map(([k, v]) => `${k} ${v.ist}/${v.soll}`).join(" · ")} · CTA: ${q.cta.map(([k, n]) => `${k} ${n}`).join(" · ")}`);
  const gesperrt = Object.entries(ledger.gesperrt || {});
  if (gesperrt.length) z.push(`Gesperrte Themen (Gegencheck „widerlegt“ – bitte in wissen/themen prüfen und Stand aktualisieren): ${gesperrt.map(([id, s]) => `${id} (${datumLesbar(s.datum)}: ${s.grund.slice(0, 120)})`).join(" · ")}`);
  const zeiten = zeitBericht(ledger);
  if (zeiten.gesamt && zeiten.klassen.karussell) z.push(`Beste Uhrzeiten (Faktor zum Schnitt, Messungen): ${zeiten.klassen.karussell.map((x) => `${String(x.stunde).padStart(2, "0")}:30 ${x.mittel.toFixed(2)}× (${x.n})`).join(" · ")}${zeiten.belastbar ? "" : " – noch dünn, der Bot probiert weiter"}`);
  z.push("");
  if (bewertet.length) {
    z.push("Beste Beiträge (Follows ×10, Profilbesuche ×2, Saves ×3, Shares ×4, Kommentare ×2, Likes, Reichweite):");
    for (const t of bewertet.slice(0, 3)) z.push(`  · ${t.titel} — ${t.schwerpunkt}/${t.hookTyp}/${t.cta} · Reichweite ${t.insights.reach ?? "?"}, gespeichert ${t.insights.saved ?? "?"}, geteilt ${t.insights.shares ?? "?"}, Follows ${t.insights.follows ?? "?"}`);
    z.push("");
  }
  if (strategie && Object.keys(strategie.schwerpunktGewicht || {}).length) {
    const fmt = (o) => Object.entries(o || {}).sort((a, b) => b[1] - a[1]).map(([k, v]) => `${k} ${v.toFixed(2)}`).join(", ");
    z.push(`Gelernte Gewichte – Blöcke: ${fmt(strategie.schwerpunktGewicht)}`);
    if (Object.keys(strategie.hookGewicht || {}).length) z.push(`Hook-Typen: ${fmt(strategie.hookGewicht)}`);
    if (Object.keys(strategie.ctaGewicht || {}).length) z.push(`CTA: ${fmt(strategie.ctaGewicht)}`);
    if (Object.keys(strategie.folienGewicht || {}).length) z.push(`Folienzahl: ${fmt(strategie.folienGewicht)}`);
    if (strategie.besteStunden) z.push(`Online-Zeiten der Follower: ${strategie.besteStunden.join(", ")}`);
    z.push("");
  } else z.push("Lernschleife: noch zu wenige bewertete Beiträge (ab 6 beginnt die Anpassung).", "");
  if (hinweise.length) { z.push("Hinweise:"); for (const h of hinweise) z.push(`  · ${h}`); z.push(""); }
  if (fehler.length) { z.push("Fehler der Woche:"); for (const e of fehler.slice(-10)) z.push(`  · ${e}`); z.push(""); }
  z.push("Der Bot läuft weiter ohne Zutun. Pausieren: Variable IG_PAUSE=true.");
  return z.join("\n");
}

export async function berichtSenden(text, betreff) {
  const { an, smtp } = CONFIG.bericht;
  if (!an || !smtp.host || !smtp.user) return { gesendet: false, grund: "SMTP nicht konfiguriert" };
  const transport = nodemailer.createTransport({ host: smtp.host, port: smtp.port, secure: smtp.port === 465, auth: { user: smtp.user, pass: smtp.pass } });
  await transport.sendMail({ from: smtp.von || smtp.user, to: an, subject: betreff, text });
  return { gesendet: true };
}
