/* ==========================================================================
   Themenpool für den Instagram-Bot – Adapter auf wissen/.

   Die Wissensbasis liefert Themenskelette (wissen/themen/*.mjs). Hier werden
   sie um das ergänzt, was Planer und Autor brauchen:

     schwerpunkt  einer der sieben Inhaltsblöcke aus dem Strategiepapier
                  (deutsche Familienstiftung 30 %, Liechtenstein 20 %, …)
     tiefe        einstieg | fortgeschritten | experte (40/40/20)
     kategorie    die Zeile, die auf jeder Kachel steht („Familienstiftung · Deutschland“)
     jurisdiktion DE | LI | DE/LI
     blickwinkel  welche Beitragsformen das Thema tragen kann (aus seinen Blöcken)

   Der Autor bekommt nur diese Skelette und formuliert alles neu; pruefung.mjs
   stellt sicher, dass kein Skelett-Text wörtlich übernommen wird.
   ========================================================================== */

import { ladeThemen } from "../../wissen/index.mjs";
import { formateFuer } from "../../wissen/schema.mjs";
import { BEREICHE, gewicht as themenGewicht } from "../../wissen/taxonomie.mjs";

/* Die sieben Inhaltsblöcke des Strategiepapiers mit Zielanteil. Zusammen 100. */
export const SCHWERPUNKTE = {
  de:        { label: "Familienstiftung · Deutschland",        kurz: "Familienstiftung DE",   anteil: 30 },
  fl:        { label: "Familienstiftung · Liechtenstein",      kurz: "Familienstiftung LI",   anteil: 20 },
  gemein:    { label: "Gemeinnützige Stiftung",                kurz: "Gemeinnützig",          anteil: 12 },
  kombi:     { label: "Doppelstiftung · Kombinationsmodelle",  kurz: "Kombinationsmodelle",   anteil: 8 },
  steuer:    { label: "Stiftung · Steuerrecht",                kurz: "Stiftung & Steuer",     anteil: 12 },
  nachfolge: { label: "Unternehmens- & Vermögensnachfolge",    kurz: "Nachfolge",             anteil: 10 },
  aktuell:   { label: "Aktuelles · Rechtsprechung",            kurz: "Aktuell",               anteil: 8 },
};

/* Drei Tiefenstufen (Strategiepapier Abschnitt 13). */
export const TIEFEN = { einstieg: 40, fortgeschritten: 40, experte: 20 };

const STIFTUNG = /stiftung|stifter|destinat|erbersatz|ersatzerbschaft/i;

/** Inhaltsblock eines Themas. Ein Thema kann ihn selbst setzen (`schwerpunkt`),
    sonst entscheidet der Bereich – und bei Steuer- und Nachfolgethemen, ob es
    um die Stiftung geht. */
export function schwerpunktFuer(t) {
  if (t.schwerpunkt && SCHWERPUNKTE[t.schwerpunkt]) return t.schwerpunkt;
  const text = `${t.id} ${t.titel} ${t.kurz}`;
  switch (t.bereich) {
    case "liechtenstein": return "fl";
    case "gemeinnuetzig": return "gemein";
    case "doppelstiftung": case "ersatzformen": return "kombi";
    case "familienstiftung": case "stiftungsrecht": case "vermoegensschutz": return "de";
    case "erbst": case "ertragsteuer": case "international": return STIFTUNG.test(text) ? "steuer" : "nachfolge";
    default: return STIFTUNG.test(text) ? "de" : "nachfolge";
  }
}

/** Tiefe: aus dem Reichweitenpotenzial der Wissensbasis (3 = jeder versteht
    die Frage sofort → Einstieg; 1 = Fachpublikum → Experte). Ein Thema kann
    `tiefe` auch selbst setzen. */
export function tiefeFuer(t) {
  if (t.tiefe && TIEFEN[t.tiefe]) return t.tiefe;
  const r = t.gewicht?.reichweite ?? 2;
  return r >= 3 ? "einstieg" : r === 2 ? "fortgeschritten" : "experte";
}

export function jurisdiktionFuer(t) {
  if (t.bereich === "liechtenstein") return "LI";
  if (t.bereich === "international" || /liechtenstein/i.test(`${t.titel} ${t.kurz}`)) return "DE/LI";
  return "DE";
}

/** Die Kategoriezeile auf der Kachel: bei Stiftungsblöcken deren Label, bei
    Nachfolgethemen „Nachfolge · <Bereich>“. */
export function kategorieFuer(t) {
  const s = schwerpunktFuer(t);
  if (s !== "nachfolge") return SCHWERPUNKTE[s].label;
  const b = BEREICHE[t.bereich];
  return `Nachfolge · ${b?.kurz || "Vermögen"}`;
}

/* Die Prüfschema-Formate „frage/norm/merksatz“ der Wissensbasis sind für
   Stories gedacht; als Blickwinkel eines Carousels zählen die inhaltlichen
   Blöcke. */
const CAROUSEL_BLICKWINKEL = ["mythos", "einsatzfeld", "vorteil", "abwaegung", "alternative", "beispiel", "ablauf", "fehlerfalle", "vergleich", "zahl", "frage"];

export function blickwinkelFuer(t) {
  const f = formateFuer(t).filter((x) => CAROUSEL_BLICKWINKEL.includes(x));
  return f.length ? f : ["frage"];
}

let poolCache = null;

/** Der Themenpool – einmal je Prozess geladen. */
export async function themenpool() {
  if (poolCache) return poolCache;
  const themen = await ladeThemen();
  poolCache = themen.map((t) => ({
    ...t,
    schwerpunkt: schwerpunktFuer(t),
    tiefe: tiefeFuer(t),
    jurisdiktion: jurisdiktionFuer(t),
    kategorie: kategorieFuer(t),
    bereichLabel: BEREICHE[t.bereich]?.label || t.bereich,
    blickwinkel: blickwinkelFuer(t),
    gewichtung: themenGewicht(t),
  }));
  return poolCache;
}

/** Skelett-Text für den Autor: alles, was das Thema hergibt, als Gedankenstütze.
    Reihenfolge und Wortlaut baut der Autor neu auf – so steht es im Auftrag. */
export function themaText(t) {
  const z = [
    `Thema: ${t.titel}`,
    `Kategorie: ${t.kategorie} · Tiefe: ${t.tiefe} · Jurisdiktion: ${t.jurisdiktion}`,
    `Worum es geht: ${t.kurz}`,
    t.normen?.length ? `Normen: ${t.normen.join(" · ")}` : "",
    `Rechtsstand der Vorlage: ${t.stand}`,
  ];
  if (t.kern?.length) z.push(`Kerngedanken (Reihenfolge und Wortlaut selbst neu aufbauen):\n${t.kern.map((k) => `  - ${k}`).join("\n")}`);
  if (t.mythos) z.push(`Verbreiteter Irrtum: „${t.mythos.behauptung}“ – richtig ist: ${t.mythos.richtigstellung}`);
  if (t.einsatzfelder?.length) z.push(`Einsatzfelder:\n${t.einsatzfelder.map((e) => `  - ${e.situation} → ${e.warum}`).join("\n")}`);
  if (t.vorteile?.length) z.push(`Vorteile:\n${t.vorteile.map((v) => `  - ${v.vorteil}: ${v.erklaerung}${v.norm ? ` (${v.norm})` : ""}`).join("\n")}`);
  if (t.nachteile?.length) z.push(`Nachteile:\n${t.nachteile.map((v) => `  - ${v.nachteil}: ${v.erklaerung}${v.norm ? ` (${v.norm})` : ""}`).join("\n")}`);
  if (t.alternativen?.length) z.push(`Alternativen:\n${t.alternativen.map((a) => `  - ${a.form}: besser, wenn ${a.wannBesser} – ${a.warum}`).join("\n")}`);
  if (t.beispiele?.length) z.push(`Fiktive Beispiele (nur als Muster – eigenes Beispiel mit anderen Zahlen bauen):\n${t.beispiele.map((b) => `  - ${b.konstellation} | ${b.gestaltung} | ${b.pointe}`).join("\n")}`);
  if (t.ablauf?.length) z.push(`Ablauf:\n${t.ablauf.map((a, i) => `  ${i + 1}. ${a.schritt}: ${a.hinweis}${a.norm ? ` (${a.norm})` : ""}`).join("\n")}`);
  if (t.fehler?.length) z.push(`Typische Fehler:\n${t.fehler.map((f) => `  - Falsch: ${f.fehler} → Richtig: ${f.richtig}${f.norm ? ` (${f.norm})` : ""}`).join("\n")}`);
  if (t.gegenueberstellung) {
    const g = t.gegenueberstellung;
    z.push(`Gegenüberstellung ${g.links.label} vs. ${g.rechts.label}:\n${g.links.punkte.map((p, i) => `  - ${p.krit}: ${p.wert} | ${g.rechts.punkte[i]?.wert || ""}`).join("\n")}`);
  }
  if (t.zahlen?.length) z.push(`Zahlen:\n${t.zahlen.map((n) => `  - ${n.wert}: ${n.bedeutung}${n.norm ? ` (${n.norm})` : ""}`).join("\n")}`);
  if (t.merksatz) z.push(`Kernaussage der Vorlage (NICHT übernehmen, eigenen Satz bauen): ${t.merksatz}`);
  return z.filter(Boolean).join("\n");
}

/* Statistik für README, Tests und den Planer. */
export function poolStatistik(pool) {
  const je = (key) => pool.reduce((acc, t) => { acc[t[key]] = (acc[t[key]] || 0) + 1; return acc; }, {});
  return { gesamt: pool.length, jeSchwerpunkt: je("schwerpunkt"), jeTiefe: je("tiefe"), jeBereich: je("bereich"), jeJurisdiktion: je("jurisdiktion") };
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const pool = await themenpool();
  console.log(JSON.stringify(poolStatistik(pool), null, 2));
}
