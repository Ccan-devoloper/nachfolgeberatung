/* ==========================================================================
   Schreibweise der Normen.

   Auf Kacheln und in Captions steht die übliche Kurzform, wie sie in einem
   Mandantenschreiben stünde: § 15 Abs. 2 Satz 1 ErbStG → „§ 15 Abs. 2 S. 1
   ErbStG“. Ausgeschriebene Formen („Paragraf 15 Absatz 2“) werden zurück
   in die Kurzform gebracht. Für Reels gibt es die gesprochene Fassung.
   ========================================================================== */

const KURZ = [
  [/\bParagrafen\s*(?=\d)/g, "§§ "],
  [/\bParagraf\s*(?=\d)/g, "§ "],
  [/\bArtikel\s*(?=\d)/g, "Art. "],
  [/\bin Verbindung mit\b/g, "i. V. m."],
  [/\b(?:Absatz|absatz)\s*(\d+)\s*([a-z])?(?![A-Za-zÄÖÜäöüß.])/g, (_, n, b) => `Abs. ${n}${b || ""}`],
  [/\bSatz\s*(\d+)\b/gi, "S. $1"],
  [/\b(?:Nummer|nummer)\s*(\d+)\s*([a-z])?(?![A-Za-zÄÖÜäöüß.])/g, (_, n, b) => `Nr. ${n}${b || ""}`],
  [/\bHalbsatz\s*(\d+)\b/gi, "Hs. $1"],
  [/\b(?:Buchstabe|Buchst\.)\s*([a-z])\)?/gi, "lit. $1"],
];

/* Gesetze, die eine Stimme nicht buchstabieren kann – für die gesprochene
   Fassung (Reels) und die Rückumwandlung. */
const GESETZE = {
  ErbStG: "Erbschaftsteuergesetz", ErbStR: "Erbschaftsteuerrichtlinien", BewG: "Bewertungsgesetz",
  EStG: "Einkommensteuergesetz", KStG: "Körperschaftsteuergesetz", GewStG: "Gewerbesteuergesetz",
  UmwStG: "Umwandlungssteuergesetz", UmwG: "Umwandlungsgesetz", AStG: "Außensteuergesetz",
  GrEStG: "Grunderwerbsteuergesetz", InvStG: "Investmentsteuergesetz", GmbHG: "GmbH-Gesetz",
  AktG: "Aktiengesetz", InsO: "Insolvenzordnung", AnfG: "Anfechtungsgesetz", GwG: "Geldwäschegesetz",
  StiftRG: "Stiftungsregistergesetz", EuErbVO: "Europäische Erbrechtsverordnung", PGR: "Personen- und Gesellschaftsrecht",
};
const GESETZ_MUSTER = new RegExp(`\\b(${Object.keys(GESETZE).sort((a, b) => b.length - a.length).join("|")})\\b`, "g");
const GESETZE_KURZ = Object.fromEntries(Object.entries(GESETZE).map(([k, v]) => [v, k]).reverse());
const GESETZ_LANG_MUSTER = new RegExp(`\\b(${Object.keys(GESETZE_KURZ).sort((a, b) => b.length - a.length).map((n) => n.replace(/[.*+?^${}()|[\]\\-]/g, "\\$&")).join("|")})\\b`, "g");

/** Alle Gesetzeskürzel, die der Renderer als Norm hervorhebt. */
export const GESETZ_KUERZEL = ["BGB", "ErbStG", "ErbStR", "BewG", "EStG", "KStG", "GewStG", "UmwStG", "UmwG", "AStG", "AO", "GrEStG", "InvStG", "GmbHG", "AktG", "HGB", "InsO", "AnfG", "GwG", "ZPO", "FGO", "GG", "StiftRG", "EuErbVO", "PGR", "TrUG", "SteG", "DBA", "UStG"];

/** Kurzform für alles, was gelesen wird. Idempotent. */
export function normKurz(text) {
  if (typeof text !== "string" || !text) return text;
  let out = text;
  for (const [muster, ersatz] of KURZ) out = out.replace(muster, ersatz);
  out = out.replace(GESETZ_LANG_MUSTER, (n) => GESETZE_KURZ[n]);
  return out.replace(/§\s*(\d)/g, "§ $1").replace(/\s{2,}/g, " ").trim();
}

const GESPROCHEN = [
  [/§§/g, "Paragrafen"],
  [/§/g, "Paragraf"],
  [/\bAbs\.\s*(\d+)/g, "Absatz $1"],
  [/\bS\.\s*(\d+)/g, "Satz $1"],
  [/\bNr\.\s*(\d+)/g, "Nummer $1"],
  [/\bHs\.\s*(\d+)/g, "Halbsatz $1"],
  [/\blit\.\s*([a-z])\)?/gi, "Buchstabe $1"],
  [/\bi\.\s?V\.\s?m\./gi, "in Verbindung mit"],
  [/\bArt\.\s*(\d+)/g, "Artikel $1"],
];

/** Fassung für die Stimme (Reels). */
export function normGesprochen(text) {
  if (typeof text !== "string" || !text) return text;
  let out = text;
  for (const [muster, ersatz] of GESPROCHEN) out = out.replace(muster, ersatz);
  out = out.replace(GESETZ_MUSTER, (k) => GESETZE[k]);
  return out.replace(/\s{2,}/g, " ").replace(/\s+([,.;:])/g, "$1").trim();
}

export const NORM_REGEL = "Normen in der üblichen Kurzform: § 15 Abs. 2 S. 1 ErbStG, Art. 552 § 1 PGR, Art. 21 EuErbVO. Grundgesetz und europäische Verordnungen mit „Art.“, nie mit Paragraf. Auf einer Folie höchstens zwei Normzitate – die Norm belegt, sie erklärt nicht.";

/** Wendet die Kurzform auf alle sichtbaren Felder eines Objekts an. */
export function felderKuerzen(objekt, felder) {
  for (const f of felder) if (typeof objekt?.[f] === "string") objekt[f] = normKurz(objekt[f]);
  if (Array.isArray(objekt?.punkte)) objekt.punkte = objekt.punkte.map(normKurz);
  return objekt;
}
