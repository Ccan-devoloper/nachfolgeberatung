#!/usr/bin/env node
/* ==========================================================================
   Startklar? – prüft vor dem Livegang alles, was der Bot zum Veröffentlichen
   braucht, ohne einen einzigen Beitrag zu erzeugen.

   node bin/startklar.mjs

   Rückgabewert 1, wenn etwas fehlt, das das Veröffentlichen verhindert.
   ========================================================================== */

import path from "node:path";
import { Instagram } from "../src/instagram.mjs";
import { Hosting } from "../src/hosting.mjs";
import { CONFIG } from "../src/config.mjs";
import { themenpool, poolStatistik } from "../src/inhalte.mjs";
import { STILE } from "../src/stile.mjs";
import { tageBis } from "../src/zeit.mjs";

const zeilen = [];
let blocker = 0;
const gut = (t) => zeilen.push(`  ✓ ${t}`);
const warnung = (t) => zeilen.push(`  · ${t}`);
const fehler = (t) => { zeilen.push(`  ✗ ${t}`); blocker++; };
const abschnitt = (name) => { console.log(zeilen.splice(0).join("\n") + (name ? `\n\n${name}` : "")); };

console.log(`Startklar-Prüfung · ${CONFIG.marke.anzeigename} · ${new Date().toISOString().slice(0, 16).replace("T", " ")} UTC\n\nInstagram`);

/* 1. Instagram ----------------------------------------------------------- */
const hosting = new Hosting({ pushen: false }).vorbereiten();
const ig = new Instagram({ trockenlauf: false, tresorDatei: path.join(hosting.stateDir, "token.enc") });
const ausTresor = ig.tresorLaden();
if (!ig.token) fehler("Kein Zugangstoken: weder im Tresor noch als Secret IG_ACCESS_TOKEN.");
else {
  gut(`Token vorhanden (${ausTresor ? "aus dem Tresor" : "aus dem Secret"}${ig.tokenAblauf ? `, gültig bis ${ig.tokenAblauf.slice(0, 10)}` : ""})`);
  if (!CONFIG.instagram.kontoId) warnung("IG_ACCOUNT_ID ist leer – das Tageskontingent lässt sich nicht abfragen.");
  try {
    const { konto, limit } = await ig.pruefen();
    const name = konto.username || konto.name || "(ohne Namen)";
    gut(`Verbindung steht: @${name}`);
    gut(`Tageskontingent der API: ${limit.genutzt} von ${limit.maximum} genutzt${limit.hinweis ? ` (${limit.hinweis})` : ""}`);
    if (CONFIG.marke.handle && CONFIG.marke.handle.replace(/^@/, "") !== String(name)) warnung(`IG_HANDLE ist „${CONFIG.marke.handle}“, das Konto heißt @${name}.`);
  } catch (e) { fehler(`Instagram antwortet nicht: ${e.message.split("\n")[0].slice(0, 180)}`); }
}
if (!process.env.IG_TOKEN_KEY) warnung("IG_TOKEN_KEY fehlt – ein verlängerter Token kann nicht gespeichert werden und läuft nach 60 Tagen ab.");
else gut("IG_TOKEN_KEY gesetzt, verlängerte Token werden verschlüsselt abgelegt");

/* 2. Texte und Prüfung --------------------------------------------------- */
abschnitt("Texte und Prüfung");
if (!process.env.ANTHROPIC_API_KEY) fehler("ANTHROPIC_API_KEY fehlt – ohne ihn entsteht kein einziger Beitrag.");
else gut(`Claude-Schlüssel gesetzt (Autor ${CONFIG.ki.modell}, Prüfer ${CONFIG.ki.modellPruefung})`);
if (!CONFIG.faktencheck.aktiv) fehler("Faktencheck I ist abgeschaltet (IG_FAKTENCHECK=false).");
else gut("Faktencheck I (Claude) aktiv");
if (!CONFIG.faktencheck.openaiAktiv) fehler("Faktencheck II ist abgeschaltet (IG_OPENAI_FAKTENCHECK=false).");
else if (!CONFIG.openai.key) fehler("OPENAI_API_KEY fehlt – Faktencheck II kann nicht laufen; im strengen Modus erscheint kein Beitrag.");
else {
  try {
    const r = await fetch(`${CONFIG.openai.basis}/models/${CONFIG.openai.modell}`, { headers: { authorization: `Bearer ${CONFIG.openai.key}` }, signal: AbortSignal.timeout(20000) });
    if (r.ok) gut(`Faktencheck II (OpenAI ${CONFIG.openai.modell}) erreichbar${CONFIG.faktencheck.openaiStrikt ? ", streng" : ", nicht streng"}`);
    else fehler(`OpenAI antwortet mit ${r.status} für Modell „${CONFIG.openai.modell}“ – Schlüssel oder Modellname prüfen (OPENAI_MODEL).`);
  } catch (e) { fehler(`OpenAI nicht erreichbar: ${e.message.slice(0, 120)}`); }
}
gut(`Web-Gegencheck ${CONFIG.faktencheck.gegencheckAktiv ? `aktiv (bis ${CONFIG.faktencheck.gegencheckSuchen} Suchen je Thema)` : "aus"}`);
gut(`Tagesbudget: ${CONFIG.ki.tagesBudgetUsd.toFixed(2)} $ (≈ 0,35 €) für Claude und OpenAI zusammen`);

/* 3. Themen und Stil ------------------------------------------------------ */
abschnitt("Themen und Stil");
try {
  const pool = await themenpool();
  const st = poolStatistik(pool);
  gut(`${st.gesamt} Themen · Blöcke: ${Object.entries(st.jeSchwerpunkt).map(([k, v]) => `${k} ${v}`).join(", ")}`);
  const alt = pool.filter((t) => tageBis(t.stand) < -365).length;
  if (alt) warnung(`${alt} Themen mit Rechtsstand älter als ein Jahr – bitte durchsehen.`);
} catch (e) { fehler(`Themenpool lädt nicht: ${e.message}`); }
if (STILE[CONFIG.marke.stil]) gut(`Stil: ${STILE[CONFIG.marke.stil].name} (IG_STIL=${CONFIG.marke.stil})`);
else fehler(`Unbekannter Stil „${CONFIG.marke.stil}“ – möglich: ${Object.keys(STILE).join(", ")}`);
if (CONFIG.marke.handle) gut(`Handle in der Fußzeile: ${CONFIG.marke.handle}`); else warnung("IG_HANDLE ist leer – die Fußzeile zeigt rechts nichts.");
const trocken = hosting.jsonLesen("trockenlauf.json", null);
if (trocken?.start) { const tag = -tageBis(trocken.start); warnung(`Trockenlaufphase seit ${trocken.start}: Tag ${tag + 1} von ${trocken.tage ?? CONFIG.instagram.trockenTage}${tag >= (trocken.tage ?? CONFIG.instagram.trockenTage) ? " – beendet, der Bot veröffentlicht" : ""}`); }
else warnung(`Noch kein Lauf – der erste Lauf startet ${CONFIG.instagram.trockenTage} Tage Trockenlauf, danach live.`);

/* 4. Fazit ----------------------------------------------------------------- */
abschnitt("");
const pause = String(process.env.IG_PAUSE || "").toLowerCase() === "true";
console.log(`Zeitplan: ${pause ? "PAUSE (IG_PAUSE=true) – die stündlichen Läufe veröffentlichen nichts." : "aktiv – nach der Trockenlaufphase veröffentlicht der nächste stündliche Lauf, was fällig ist."}`);
if (blocker) { console.log(`\n${blocker} Punkt${blocker === 1 ? "" : "e"} verhindert das Veröffentlichen.`); process.exitCode = 1; }
else console.log("\nAlles bereit.");
