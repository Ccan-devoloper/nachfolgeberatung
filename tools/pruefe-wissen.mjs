#!/usr/bin/env node
/* Prüft den Themenbestand. Läuft in CI vor jedem Deploy und lokal mit
   `npm run pruefe`. Fehler brechen ab, Warnungen nicht. */

import { pruefeBestand, bestandsUebersicht } from "../wissen/index.mjs";
import { BEREICHE } from "../wissen/taxonomie.mjs";

const { fehler, warnungen, themen } = await pruefeBestand();
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
