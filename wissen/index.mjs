/* ==========================================================================
   Lädt alle Themen aus wissen/themen/.

   Bewusst dynamisch statt über einen Sammelindex: Der Themenbestand wächst
   auf mehrere hundert Dateien. Ein Index, den man bei jeder neuen Datei von
   Hand nachziehen muss, wird irgendwann vergessen — und ein vergessenes
   Thema fällt nicht auf, es fehlt einfach.
   ========================================================================== */

import { readdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { pruefeThema, formateFuer, standAlterTage } from "./schema.mjs";
import { gewicht, STAND_MAX_TAGE } from "./taxonomie.mjs";

const HIER = path.dirname(fileURLToPath(import.meta.url));
export const THEMEN_DIR = path.join(HIER, "themen");

/** Alle Themen, nach id sortiert. Wirft, wenn eine Datei kein Default-Export hat. */
export async function ladeThemen() {
  let dateien;
  try {
    dateien = (await readdir(THEMEN_DIR)).filter((d) => d.endsWith(".mjs")).sort();
  } catch (e) {
    if (e.code === "ENOENT") return [];
    throw e;
  }

  const themen = [];
  for (const datei of dateien) {
    const mod = await import(pathToFileURL(path.join(THEMEN_DIR, datei)).href);
    const t = mod.default;
    if (!t || typeof t !== "object") {
      throw new Error(`wissen/themen/${datei}: kein Default-Export (erwartet: export default { … }).`);
    }
    themen.push({ ...t, _datei: datei });
  }
  themen.sort((a, b) => String(a.id).localeCompare(String(b.id), "de"));
  return themen;
}

/**
 * Prüft den ganzen Bestand: Schema je Thema, doppelte IDs, tote Verweise in
 * `verwandt`, überalterter Rechtsstand. Gibt { fehler, warnungen, themen }.
 */
export async function pruefeBestand(heute = new Date()) {
  const themen = await ladeThemen();
  const fehler = [];
  const warnungen = [];

  const gesehen = new Map();
  for (const t of themen) {
    fehler.push(...pruefeThema(t, `wissen/themen/${t._datei}`));
    if (t.id != null) {
      if (gesehen.has(t.id)) fehler.push(`wissen/themen/${t._datei}: id „${t.id}" ist schon in ${gesehen.get(t.id)} vergeben.`);
      else gesehen.set(t.id, t._datei);
    }
  }

  for (const t of themen) {
    for (const v of t.verwandt ?? []) {
      if (!gesehen.has(v)) fehler.push(`wissen/themen/${t._datei}: \`verwandt\` zeigt auf „${v}" — dieses Thema gibt es nicht.`);
    }
    const alter = standAlterTage(t, heute);
    if (alter > STAND_MAX_TAGE) {
      warnungen.push(`wissen/themen/${t._datei}: Rechtsstand ist ${alter} Tage alt (Grenze ${STAND_MAX_TAGE}). Vor dem nächsten Beitrag durchsehen.`);
    }
  }

  return { fehler, warnungen, themen };
}

/** Kennzahlen des Bestands — was der Kanal überhaupt bespielen kann. */
export function bestandsUebersicht(themen) {
  const jeBereich = {};
  const jeFormat = {};
  let gewichtSumme = 0;
  for (const t of themen) {
    jeBereich[t.bereich] = (jeBereich[t.bereich] ?? 0) + 1;
    for (const f of formateFuer(t)) jeFormat[f] = (jeFormat[f] ?? 0) + 1;
    gewichtSumme += gewicht(t);
  }
  return { anzahl: themen.length, jeBereich, jeFormat, gewichtSumme };
}
