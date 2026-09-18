#!/usr/bin/env node
/* ==========================================================================
   Vorschau ohne KI-Aufruf: rendert die Beispielinhalte (beispiele/inhalte.json)
   in einem oder beiden Stilen nach out/vorschau/<stil>/.

   node bin/vorschau.mjs [kontor|dossier|alle] [--nur=beitraege|stories]
   ========================================================================== */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { beitragRendern, storyRendern, browserBeenden } from "../src/render.mjs";
import { STILE } from "../src/stile.mjs";

const hier = path.dirname(fileURLToPath(import.meta.url));
const beispiele = JSON.parse(fs.readFileSync(path.resolve(hier, "../beispiele/inhalte.json"), "utf8"));
const wahl = process.argv[2] || "alle";
const nur = (process.argv.find((a) => a.startsWith("--nur=")) || "").split("=")[1] || "";
const stile = wahl === "alle" ? Object.keys(STILE) : [wahl];
const ziel = path.resolve(hier, "../out/vorschau");

for (const stil of stile) {
  let n = 0;
  if (nur !== "stories") for (const b of beispiele.beitraege) n += (await beitragRendern(b, path.join(ziel, stil), { stil })).length;
  if (nur !== "beitraege") for (const s of beispiele.stories) { await storyRendern(s, path.join(ziel, stil, `story-${s.slot}-${s.art}.jpg`), { stil }); n++; }
  console.log(`${stil}: ${n} Bilder → ${path.join(ziel, stil)}`);
}
await browserBeenden();
