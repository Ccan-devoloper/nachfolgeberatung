#!/usr/bin/env node
/* ==========================================================================
   Einen bereits geschriebenen Tag neu rendern – ohne KI-Aufruf.

   node bin/nachrendern.mjs [datum] [stil]

   Liest die Texte aus state/inhalte/<datum>-*.json des Asset-Zweigs und baut
   die Kacheln neu nach out/nach-<datum>/. Mit IG_ABLEGEN=1 landen sie unter
   vorschau/<datum>/ im Asset-Zweig, damit man sie vom Runner aus ansehen kann.
   ========================================================================== */

import fs from "node:fs";
import path from "node:path";
import { Hosting } from "../src/hosting.mjs";
import { beitragRendern, storyRendern, browserBeenden } from "../src/render.mjs";
import { heuteIso } from "../src/zeit.mjs";
import { CONFIG } from "../src/config.mjs";

const datum = process.argv[2] || heuteIso();
const stil = process.argv[3] || CONFIG.marke.stil;
const ziel = path.resolve("out", `nach-${datum}`);
const ablegen = process.env.IG_ABLEGEN === "1";
const hosting = new Hosting({ pushen: ablegen }).vorbereiten();
const dir = path.join(hosting.stateDir, "inhalte");
const dateien = fs.existsSync(dir) ? fs.readdirSync(dir).filter((f) => f.startsWith(`${datum}-`) && f.endsWith(".json") && !f.endsWith("-recherche.json")).sort() : [];
if (!dateien.length) { console.error(`Nichts gespeichert für ${datum}`); process.exit(1); }

console.log(`${dateien.length} Dateien für ${datum} · Stil ${stil}`);
const bilder = [];
for (const datei of dateien) {
  const inhalt = JSON.parse(fs.readFileSync(path.join(dir, datei), "utf8"));
  const slot = datei.replace(`${datum}-`, "").replace(".json", "");
  try {
    if (inhalt.folien) { const p = await beitragRendern(inhalt, path.join(ziel, slot), { stil }); bilder.push(...p); console.log(`  ${slot}: ${p.length} Folien`); }
    else if (inhalt.art) { bilder.push(await storyRendern(inhalt, path.join(ziel, `${slot}-${inhalt.art}.jpg`), { stil })); console.log(`  ${slot}: Story ${inhalt.art}`); }
  } catch (e) { console.error(`  ${slot}: ${e.message}`); }
}
await browserBeenden();
console.log(`${bilder.length} Bilder → ${ziel}`);
if (ablegen) {
  const kennung = Date.now().toString(36);
  for (const b of bilder) hosting.ablegen(b, path.join("vorschau", datum, `${path.basename(b, ".jpg")}-${kennung}.jpg`));
  hosting.commit(`Vorschau ${datum} (${bilder.length} Bilder)`);
  await hosting.push();
  console.log(`Im Asset-Zweig unter vorschau/${datum}/`);
}
