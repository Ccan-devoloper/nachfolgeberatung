#!/usr/bin/env node
/* Prüft den Themenbestand. Läuft in CI vor jedem Deploy und lokal mit
   `npm run pruefe`. Fehler brechen ab, Warnungen nicht. */

import fs from "node:fs";
import path from "node:path";
import { pruefeBestand, bestandsUebersicht, THEMEN_DIR } from "../wissen/index.mjs";
import { BEREICHE } from "../wissen/taxonomie.mjs";

/* Doppelte Schlüssel im Objektliteral. JavaScript nimmt dabei stillschweigend
   den letzten — ein zweiter `beispiele:`-Block löscht den ersten, ohne dass
   irgendetwas auffällt. Das lässt sich nur am Quelltext prüfen: Wenn das
   Modul geladen ist, ist der Verlust längst eingetreten. */
function doppelteSchluessel() {
  const f = [];
  for (const datei of fs.readdirSync(THEMEN_DIR).filter((d) => d.endsWith(".mjs")).sort()) {
    const zeilen = fs.readFileSync(path.join(THEMEN_DIR, datei), "utf8").split("\n");
    const gesehen = new Map();
    for (const [i, z] of zeilen.entries()) {
      const m = z.match(/^  ([a-zA-ZäöüÄÖÜ]+):/);
      if (!m) continue;
      if (gesehen.has(m[1])) f.push(`wissen/themen/${datei}: \`${m[1]}\` steht zweimal (Zeile ${gesehen.get(m[1])} und ${i + 1}) — der erste Block geht verloren.`);
      else gesehen.set(m[1], i + 1);
    }
  }
  return f;
}

const { fehler, warnungen, themen } = await pruefeBestand();
fehler.push(...doppelteSchluessel());
const ue = bestandsUebersicht(themen);

console.log(`\nThemenbestand: ${ue.anzahl} Themen, Gewichtssumme ${ue.gewichtSumme}\n`);

if (ue.anzahl > 0) {
  console.log("  Bereiche");
  for (const [key, meta] of Object.entries(BEREICHE)) {
    const n = ue.jeBereich[key] ?? 0;
    console.log(`    ${n === 0 ? "—" : String(n).padStart(3)}  ${meta.label}`);
  }
  console.log("\n  Formate, die der Bestand tragen kann");
  for (const [f, n] of Object.entries(ue.jeFormat).sort((a, b) => b[1] - a[1])) {
    console.log(`    ${String(n).padStart(3)}  ${f}`);
  }
  console.log("");
}

for (const w of warnungen) console.log(`  ! ${w}`);
if (warnungen.length) console.log("");

if (fehler.length) {
  console.error(`${fehler.length} Fehler:\n`);
  for (const f of fehler) console.error(`  × ${f}`);
  console.error("");
  process.exit(1);
}

console.log("Bestand in Ordnung.\n");
