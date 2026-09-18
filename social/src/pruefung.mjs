/* ==========================================================================
   Qualitäts- und Eigenständigkeitsprüfung – läuft vor jedem Faktencheck.

   1. Kein 1:1-Text aus der Wissensbasis (Shingle-Vergleich über wissen/themen).
   2. Keine Personennamen in Beispielen („Herr Müller“, „Familie Schmidt“) –
      Beispiele bleiben anonym: „ein Unternehmer, 62, zwei Kinder“.
   3. Keine Quellenbezüge (Aufsatz, Seite, Vortrag, Dossier, Q7).
   4. Keine marktschreierischen Formulierungen (hooks.mjs → VERBOTEN),
      keine Du-Form, keine individualisierte Beratung („In Ihrem Fall …“).
   5. Formale Grenzen des Strategiepapiers: Hook 6–14 Wörter, Zwischen-
      überschrift ≤ 8, Folientext ≤ 60 Wörter, ≤ 3 Punkte, 5–9 Folien,
      höchstens zwei Normzitate je Folie, Caption 100–220 Wörter.
   Rückgabe: { ok, fehler: [...] } – der Autor bekommt die Fehler als Feedback.
   ========================================================================== */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { CONFIG } from "./config.mjs";
import { verboteneFormulierung, woerter as wortzahl } from "./hooks.mjs";

const hier = path.dirname(fileURLToPath(import.meta.url));
const WISSEN = path.resolve(hier, "../../wissen/themen");
const SPERRLISTE_DATEI = path.resolve(hier, "../config/sperrliste.json");

export const SHINGLE_LAENGE = 8;
/* Ab so vielen Wörtern am Stück gilt eine Übereinstimmung als Übernahme.
   Fachsprache ist standardisiert – acht Wörter Gesetzeswortlaut sind Zufall,
   dreizehn am Stück sind Abschreiben. */
const UEBERNAHME_WOERTER = 13;

export const FOLIEN_ARTEN = ["hook", "text", "struktur", "vergleich", "zeitachse", "zahl", "beispiel", "einordnung", "takeaway"];
export const STORY_ARTEN = ["hook", "wissen", "hinweis", "aktuell"];

export function normalisieren(text) {
  return String(text).toLowerCase().replace(/[„“"'»«‚‘’]/g, " ").replace(/[^a-z0-9äöüß§%€.,\s-]/g, " ").replace(/\s+/g, " ").trim();
}
const woerter = (text) => normalisieren(text).split(" ").filter(Boolean);

function hash(s) {
  let h = 0x811c9dc5;
  for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 0x01000193); }
  return h >>> 0;
}

let korpusCache = null;

/** Shingle-Index über alle Themendateien der Wissensbasis plus Sperrliste. */
export function korpus() {
  if (korpusCache) return korpusCache;
  const index = new Set();
  const dateien = fs.existsSync(WISSEN) ? fs.readdirSync(WISSEN).filter((f) => f.endsWith(".mjs")).map((f) => path.join(WISSEN, f)) : [];
  for (const datei of dateien) {
    const w = woerter(fs.readFileSync(datei, "utf8"));
    for (let i = 0; i + SHINGLE_LAENGE <= w.length; i++) index.add(hash(w.slice(i, i + SHINGLE_LAENGE).join(" ")));
  }
  let sperrliste = [];
  try { if (fs.existsSync(SPERRLISTE_DATEI)) sperrliste = JSON.parse(fs.readFileSync(SPERRLISTE_DATEI, "utf8")).namen || []; } catch { sperrliste = []; }
  korpusCache = { index, namen: sperrliste, dateien: dateien.length };
  return korpusCache;
}

/** Zusammenhängende wörtliche Übernahmen aus der Wissensbasis. */
export function uebernahmeLaeufe(text, k = korpus()) {
  const w = woerter(text);
  const treffer = [];
  for (let i = 0; i + SHINGLE_LAENGE <= w.length; i++) if (k.index.has(hash(w.slice(i, i + SHINGLE_LAENGE).join(" ")))) treffer.push(i);
  const laeufe = [];
  let start = null, ende = null;
  for (const i of treffer) {
    if (start === null) { start = i; ende = i + SHINGLE_LAENGE; continue; }
    if (i <= ende) { ende = Math.max(ende, i + SHINGLE_LAENGE); continue; }
    laeufe.push({ text: w.slice(start, ende).join(" "), woerter: ende - start });
    start = i; ende = i + SHINGLE_LAENGE;
  }
  if (start !== null) laeufe.push({ text: w.slice(start, ende).join(" "), woerter: ende - start });
  return laeufe;
}

/* Normzitate sind Gesetzeswortlaut – sie zählen nicht als Übernahme. */
const NORM = /(?:§§?|Art\.|Artikel)\s*\d+[a-z]?(?:\s*(?:Abs\.|S\.|Nr\.|lit\.|Hs\.)\s*[\da-z]+)*(?:\s*(?:i\.\s?V\.\s?m\.)\s*(?:§§?\s*)?\d+[a-z]?(?:\s*(?:Abs\.|S\.|Nr\.)\s*[\da-z]+)*)?\s*[A-Za-zÄÖÜ]{2,8}\b/g;
export const ohneNormen = (text) => String(text).replace(NORM, " NORM ");

/* Personennamen in Beispielen: Anrede oder Familie plus Großwort. */
const PERSONENNAME = /\b(?:Herr|Herrn|Frau|Familie|Ehepaar|Eheleute|Geschwister)\s+(?:Dr\.\s+)?([A-ZÄÖÜ][a-zäöüß]{2,}(?:-[A-ZÄÖÜ][a-zäöüß]{2,})?)\b/g;
/* Typische Beispielnamen, die Sprachmodelle gern erfinden. */
const ERFUNDENE_NAMEN = /\b(Müller|Schmidt|Schneider|Meier|Meyer|Maier|Weber|Wagner|Becker|Hoffmann|Schulz|Koch|Bauer|Richter|Klein|Wolf|Schröder|Neumann|Schwarz|Braun|Zimmermann|Krüger|Hartmann|Lange|Werner|Krause|Lehmann|Huber|Berger|Keller|Vogel|Fuchs|Roth|Brandt)\b/;
/* Gattungswörter, die das Muster fälschlich als Namen erfasst. */
const GATTUNG = new Set(["Beispiel", "Muster", "Sohn", "Tochter", "Kinder", "Kind", "Enkel", "Ehefrau", "Ehemann", "Witwe", "Witwer", "Senior", "Junior", "Gründer", "Inhaber", "Alleingesellschafter", "Gesellschafter", "Geschäftsführer", "Vater", "Mutter", "Eltern", "Familie", "Und", "Oder", "Aber", "Der", "Die", "Das", "Ein", "Eine", "Einer", "Sie", "Mit", "Ohne", "Nach", "Vor"]);

export function gefundeneNamen(text) {
  const t = String(text);
  const namen = new Set();
  for (const m of t.matchAll(PERSONENNAME)) if (!GATTUNG.has(m[1])) namen.add(m[0]);
  const e = t.match(ERFUNDENE_NAMEN);
  if (e) namen.add(e[0]);
  for (const n of korpus().namen) if (n && new RegExp(`(^|[^a-zäöüß])${n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}([^a-zäöüß]|$)`, "iu").test(t)) namen.add(n);
  return [...namen];
}

const QUELLENBEZUG = /\b(laut (?:Quelle|Aufsatz|Vortrag|Dossier)|Seite \d+|S\. \d+ ff?\.|Folie \d|Mitschrift|Skript|Vortragsfolie|Beck-Akademie|Dossier|Rohmaterial|\bQ[1-9]\b|Rn\. \d+|Randnummer)\b/i;
const DU_FORM = /\b(du|dich|dir|dein|deine|deinen|deinem|deiner|deines|ihr habt|euch|euer|eure)\b/i;
const EINZELFALL = /\b(in ihrem fall|in ihrer situation|für sie persönlich|ich empfehle ihnen|sie sollten (?:jetzt|sofort|unbedingt)|rufen sie (?:mich|uns) an|schreiben sie (?:mir|uns) eine (?:dm|nachricht))\b/i;
const ZITIER_ARTIKEL = /(?:§§?\s*|\bParagraf\s+)\d+[a-z]?(?:\s*(?:Abs\.|S\.|Nr\.)\s*\d+[a-z]?)*\s*(?:GG|AEUV|EUV|EMRK|GRCh|EuErbVO|PGR)\b/;
const NORMZITAT = /(?:§§?|Art\.)\s*\d+/g;

export const GRENZEN = {
  captionZeichen: 2200,
  hashtagsMax: 30,
  storyTitelWoerter: 16,
  storyTextWoerter: 45,
};

/** Alle sichtbaren Texte einer Folie. */
export function folienTexte(f) {
  const t = [f.titel, f.untertitel, f.text, f.zahl, f.einheit, f.cta];
  for (const p of f.punkte || []) t.push(p);
  for (const k of f.knoten || []) t.push(k.label, k.unter);
  for (const s of f.schritte || []) t.push(typeof s === "string" ? s : `${s.zeit || ""} ${s.text || ""}`);
  for (const seite of ["links", "rechts"]) if (f[seite]) t.push(f[seite].titel, ...(f[seite].punkte || []));
  for (const p of f.relevant || []) t.push(p);
  for (const p of f.problematisch || []) t.push(p);
  return t.filter((x) => typeof x === "string" && x.trim());
}

function storyTexte(s) {
  const t = [s.ueberzeile, s.titel, s.text, s.norm, s.pille];
  for (const p of s.punkte || []) t.push(p);
  if (s.schaubild) t.push(...folienTexte(s.schaubild));
  return t.filter((x) => typeof x === "string" && x.trim());
}

/* Wortzahl des Folieninhalts ohne Titel. */
function inhaltWoerter(f) {
  return folienTexte(f).filter((x) => x !== f.titel).reduce((n, x) => n + wortzahl(x), 0);
}

export function folieLeer(f) {
  const n = inhaltWoerter(f);
  switch (f.art) {
    case "hook": return !(f.titel || "").trim();
    case "struktur": return (f.knoten || []).filter((k) => k?.label).length < 2;
    case "vergleich": return !(f.links?.punkte?.length >= 1 && f.rechts?.punkte?.length >= 1);
    case "zeitachse": return (f.schritte || []).length < 2;
    case "zahl": return !(f.zahl || "").trim() || n < 4;
    case "einordnung": return (f.relevant || []).length + (f.problematisch || []).length < 2;
    case "takeaway": return n < 6;
    default: return n < 8;
  }
}

/** Aufbau eines Carousels: Hook zuerst, Take-away zuletzt, dazwischen Inhalt. */
export function pruefeAufbau(folien) {
  const c = CONFIG.carousel;
  const fehler = [];
  if (folien.length < c.folienMin || folien.length > c.folienMax) fehler.push(`Folienzahl ${folien.length} außerhalb ${c.folienMin}–${c.folienMax}`);
  if (folien[0]?.art !== "hook") fehler.push("Folie 1 muss die Art „hook“ haben");
  if (folien.at(-1)?.art !== "takeaway") fehler.push("Die letzte Folie muss die Art „takeaway“ sein (Take-away + CTA)");
  folien.forEach((f, i) => {
    if (!FOLIEN_ARTEN.includes(f.art)) fehler.push(`Folie ${i + 1}: unbekannte Art „${f.art}“`);
    if (i > 0 && f.art === "hook") fehler.push(`Folie ${i + 1}: nur Folie 1 ist der Hook`);
    if (i < folien.length - 1 && f.art === "takeaway") fehler.push(`Folie ${i + 1}: nur die letzte Folie ist das Take-away`);
    if (f.art !== "hook" && f.art !== "takeaway" && !(f.titel || "").trim()) fehler.push(`Folie ${i + 1} (${f.art}): keine Zwischenüberschrift`);
    if (folieLeer(f)) fehler.push(`Folie ${i + 1} (${f.art}): zu wenig Inhalt – jede Folie trägt genau eine zentrale Aussage mit Text, Punkten oder Diagramm`);
    if (/inhaltsverzeichnis|in diesem beitrag|willkommen|hallo zusammen|swipe/i.test(folienTexte(f).join(" "))) fehler.push(`Folie ${i + 1}: kein Inhaltsverzeichnis, keine Begrüßung, keine Swipe-Aufforderung`);
  });
  return fehler;
}

/** Formale Grenzen je Folie (Strategiepapier Abschnitt 6). */
export function pruefeGrenzen(folien) {
  const c = CONFIG.carousel;
  const fehler = [];
  folien.forEach((f, i) => {
    const nr = i + 1;
    if (f.art === "hook") {
      const n = wortzahl(f.titel);
      if (n < c.hookWoerterMin || n > c.hookWoerterMax) fehler.push(`Folie 1: Hook hat ${n} Wörter (erlaubt ${c.hookWoerterMin}–${c.hookWoerterMax})`);
      if (f.untertitel && wortzahl(f.untertitel) > 16) fehler.push("Folie 1: Untertitel höchstens 16 Wörter");
    } else if (f.titel && wortzahl(f.titel) > c.zwischenueberschriftWoerterMax) fehler.push(`Folie ${nr}: Zwischenüberschrift hat ${wortzahl(f.titel)} Wörter (höchstens ${c.zwischenueberschriftWoerterMax})`);
    const n = inhaltWoerter(f);
    if (n > c.folienWoerterMax) fehler.push(`Folie ${nr}: ${n} Wörter Folientext (Richtwert ${c.folienWoerterRichtwert}, absolut höchstens ${c.folienWoerterMax})`);
    if ((f.punkte || []).length > c.punkteMax) fehler.push(`Folie ${nr}: ${f.punkte.length} Punkte (höchstens ${c.punkteMax})`);
    for (const seite of ["links", "rechts"]) if ((f[seite]?.punkte || []).length > c.punkteMax) fehler.push(`Folie ${nr}: ${seite} hat ${f[seite].punkte.length} Punkte (höchstens ${c.punkteMax})`);
    if ((f.knoten || []).length > 4) fehler.push(`Folie ${nr}: höchstens 4 Knoten im Strukturdiagramm`);
    if ((f.schritte || []).length > 4) fehler.push(`Folie ${nr}: höchstens 4 Stationen auf der Zeitachse`);
    if ((f.relevant || []).length > 3 || (f.problematisch || []).length > 3) fehler.push(`Folie ${nr}: Einordnung höchstens 3 Punkte je Seite`);
    if (f.text && f.punkte?.length) fehler.push(`Folie ${nr}: entweder Fließtext oder Punkte, nicht beides`);
    const normen = (folienTexte(f).join(" ").match(NORMZITAT) || []).length;
    if (normen > 2) fehler.push(`Folie ${nr}: ${normen} Normzitate (höchstens zwei je Folie – die Norm belegt, sie erklärt nicht)`);
  });
  return fehler;
}

/** Sprache und Haltung: Sie-Form, kein Clickbait, keine Einzelfallberatung. */
export function pruefeSprache(text, wo = "Text") {
  const fehler = [];
  const v = verboteneFormulierung(text);
  if (v) fehler.push(`${wo}: marktschreierische Formulierung (${v}) – sachlich bleiben`);
  if (DU_FORM.test(text)) fehler.push(`${wo}: Du-Form („${text.match(DU_FORM)[0]}“) – der Kanal siezt`);
  if (EINZELFALL.test(text)) fehler.push(`${wo}: individualisierte Beratung („${text.match(EINZELFALL)[0]}“) – nur abstrakt, nie im Einzelfall`);
  if (/\p{Extended_Pictographic}/u.test(text) && wo !== "Caption") fehler.push(`${wo}: keine Emojis auf Kacheln`);
  return fehler;
}

export function pruefeBeitrag(beitrag, opt = {}) {
  const fehler = [];
  const k = opt.korpus || korpus();
  const texte = [];
  for (const f of beitrag.folien || []) texte.push(...folienTexte(f));
  if (beitrag.caption) texte.push(beitrag.caption);
  for (const s of beitrag.stories || []) texte.push(...storyTexte(s));
  const gesamt = texte.join("\n");

  /* 1. Wörtliche Übernahmen aus der Wissensbasis */
  const laeufe = uebernahmeLaeufe(ohneNormen(gesamt), k);
  const deutlich = laeufe.filter((l) => l.woerter >= UEBERNAHME_WOERTER);
  if (deutlich.length || laeufe.length >= 3) fehler.push(`Wörtliche Übernahme aus dem Themen-Skelett (bitte in eigenen Worten): ${(deutlich.length ? deutlich : laeufe).slice(0, 3).map((d) => `„${d.text}“`).join(" · ")}`);

  /* 2. Namen in Beispielen */
  const namen = gefundeneNamen(gesamt);
  if (namen.length) fehler.push(`Personennamen in Beispielen (Beispiele bleiben anonym: „ein Unternehmer, 62, zwei Kinder“): ${namen.join(", ")}`);

  /* 3. Quellenbezüge */
  const q = gesamt.match(QUELLENBEZUG);
  if (q) fehler.push(`Bezug auf Quelle/Seiten/Dossier entfernen: „${q[0]}“`);

  /* 4. Zitierweise */
  if (ZITIER_ARTIKEL.test(gesamt)) fehler.push("Grundgesetz, europäische Verordnungen und das liechtensteinische PGR werden mit „Art.“ zitiert, nie mit Paragraf.");

  /* 5. Sprache je Folie / Story / Caption */
  (beitrag.folien || []).forEach((f, i) => fehler.push(...pruefeSprache(folienTexte(f).join(" "), `Folie ${i + 1}`)));
  (beitrag.stories || []).forEach((s) => fehler.push(...pruefeSprache(storyTexte(s).join(" "), `Story ${s.slot || s.art}`)));
  if (beitrag.caption) fehler.push(...pruefeSprache(beitrag.caption, "Caption"));

  /* 6. Aufbau und Grenzen */
  if (beitrag.folien) {
    fehler.push(...pruefeAufbau(beitrag.folien));
    fehler.push(...pruefeGrenzen(beitrag.folien));
  }
  if (beitrag.caption != null && beitrag.folien) {
    const n = wortzahl(beitrag.caption);
    const c = CONFIG.carousel;
    if (n < c.captionWoerterMin || n > c.captionWoerterMax) fehler.push(`Caption hat ${n} Wörter (erlaubt ${c.captionWoerterMin}–${c.captionWoerterMax})`);
    if (beitrag.caption.length > GRENZEN.captionZeichen) fehler.push(`Caption zu lang (${beitrag.caption.length} Zeichen)`);
    if ((beitrag.hashtags || []).length > GRENZEN.hashtagsMax) fehler.push("Zu viele Hashtags");
    if (!/rechtsstand|stand:/i.test(beitrag.caption)) fehler.push("Caption ohne Rechtsstand („Rechtsstand: September 2026“)");
    if (!/keine rechtsberatung|ersetzt keine|allgemeine information|einzelfall/i.test(beitrag.caption)) fehler.push("Caption ohne Vorbehalt (allgemeine Information, keine Rechtsberatung im Einzelfall)");
  }
  for (const s of beitrag.stories || []) {
    if (!STORY_ARTEN.includes(s.art)) fehler.push(`Story ${s.slot}: unbekannte Art „${s.art}“`);
    if (s.titel && wortzahl(s.titel) > GRENZEN.storyTitelWoerter) fehler.push(`Story ${s.slot}: Titel hat ${wortzahl(s.titel)} Wörter (höchstens ${GRENZEN.storyTitelWoerter})`);
    const n = wortzahl(s.text) + (s.punkte || []).reduce((a, p) => a + wortzahl(p), 0);
    if (n > GRENZEN.storyTextWoerter) fehler.push(`Story ${s.slot}: ${n} Wörter Text (höchstens ${GRENZEN.storyTextWoerter})`);
    if (s.art === "wissen" && !s.schaubild && !s.text) fehler.push(`Story ${s.slot}: Zusatzwissen braucht Text oder Schaubild`);
    if (s.art !== "hinweis" && !(s.titel || "").trim()) fehler.push(`Story ${s.slot}: kein Titel`);
  }

  return { ok: fehler.length === 0, fehler };
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const k = korpus();
  console.log(`Korpus: ${k.dateien} Themendateien, ${k.index.size} Shingles, ${k.namen.length} gesperrte Namen`);
}
