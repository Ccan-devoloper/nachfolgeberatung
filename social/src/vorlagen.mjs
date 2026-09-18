/* ==========================================================================
   HTML-Vorlagen für Folien (1080×1350) und Stories (1080×1920).

   Optische Hierarchie (Strategiepapier, Abschnitt 8): oben das Kategorie-
   Label und das Zeichen, sehr klein; dann eine Aussage je Kachel; unten die
   Absenderzeile. Grafiken sind die Marke – Strukturdiagramme, Zeitachsen,
   Vergleiche, Zahlen – keine Fotos, keine Personen.
   ========================================================================== */

import path from "node:path";
import { fileURLToPath } from "node:url";
import { markeSvg } from "./stile.mjs";
import { normKurz, GESETZ_KUERZEL } from "./normen.mjs";

const hier = path.dirname(fileURLToPath(import.meta.url));
export const FONT_DIR = path.resolve(hier, "../fonts");

export const MASSE = {
  beitrag: { breite: 1080, hoehe: 1350 },
  story: { breite: 1080, hoehe: 1920 },
};

export function esc(s) {
  return String(s ?? "")
    .replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]))
    .replace(/i\.\s?V\.\s?m\./g, "i. V. m.")
    .replace(/(§§?|Abs\.|Nr\.|S\.|Art\.|lit\.)\s(?=[\d\w])/g, "$1 ")
    .replace(/(\d)\s(Mio\.|Mrd\.|€|%|Jahre|Tage)/g, "$1 $2");
}

const NORM_MUSTER = new RegExp(`((?:§§?|Art\\.)\\s?[\\dA-Za-z.\\s§]+?(?:${GESETZ_KUERZEL.join("|")}))`, "g");

/** Fließtext: *wichtig* → Hervorhebung, Normen in Mono. */
export function markieren(s) {
  let t = esc(normKurz(s));
  t = t.replace(/\*([^*]+)\*/g, "<em>$1</em>");
  return t.replace(NORM_MUSTER, "<code>$1</code>");
}
/** Überschriften: nur Hervorhebungen, keine Mono-Normen. */
export function markierenTitel(s) {
  return esc(normKurz(s)).replace(/\*([^*]+)\*/g, "<em>$1</em>");
}

const fontFace = (name, datei, gewicht = "400", stil = "normal") => `@font-face{font-family:"${name}";src:url("file://${FONT_DIR}/${datei}") format("truetype");font-weight:${gewicht};font-style:${stil};font-display:block}`;

export function css(s, art = "beitrag") {
  const f = s.farben;
  const m = MASSE[art];
  return `
${fontFace("Archivo", "Archivo.ttf", "400")}
${fontFace("Archivo", "Archivo-SemiBold.ttf", "600")}
${fontFace("Archivo", "Archivo-Bold.ttf", "700")}
${fontFace("Instrument Serif", "InstrumentSerif.ttf", "400")}
${fontFace("Instrument Serif", "InstrumentSerif-Italic.ttf", "400", "italic")}
${fontFace("IBM Plex Mono", "IBMPlexMono-Medium.ttf", "400 500")}
${fontFace("Cormorant Garamond", "CormorantGaramond-SemiBold.ttf", "600")}
:root{
  --grund:${f.grund};--flaeche:${f.flaeche};--flaeche2:${f.flaeche2};--text:${f.text};--text-weich:${f.textWeich};
  --linie:${f.linie};--linie-stark:${f.linieStark};--akzent:${f.akzent};--akzent-text:${f.akzentText};--ok:${f.ok};--warn:${f.warn};
  --serif:"Instrument Serif";--sans:"Archivo";--mono:"IBM Plex Mono";
}
*{box-sizing:border-box;margin:0;padding:0}
html,body{width:${m.breite}px;height:${m.hoehe}px;overflow:hidden;background:var(--grund);color:var(--text);font-family:var(--sans),system-ui,sans-serif;-webkit-font-smoothing:antialiased;text-rendering:geometricPrecision}
.folie,.story{position:relative;width:${m.breite}px;height:${m.hoehe}px;padding:84px 84px 76px;display:flex;flex-direction:column;background:var(--grund)}

/* Kopf: Kategorie-Label links, Zeichen und Zähler rechts – klein. */
.kopf{display:flex;justify-content:space-between;align-items:center;height:40px;flex:none}
.kopf .kategorie{font-family:var(--mono);font-size:24px;letter-spacing:.14em;text-transform:uppercase;color:var(--text-weich);white-space:nowrap}
.kopf .rechts{display:flex;align-items:center;gap:22px;color:var(--text-weich)}
.kopf .zaehler{font-family:var(--mono);font-size:24px;letter-spacing:.08em;color:var(--text-weich)}
.kopf .marke{color:var(--text-weich)}

/* Fuß: Absender links, Handle rechts. */
.fuss{margin-top:auto;padding-top:28px;border-top:1.5px solid var(--linie);display:flex;justify-content:space-between;align-items:baseline;font-family:var(--mono);font-size:24px;letter-spacing:.06em;color:var(--text-weich);flex:none}
.fuss .absender{color:var(--text)}
.fuss .stand{letter-spacing:.04em}

/* Inhalt – nimmt den Platz zwischen Kopf und Fuß, vertikal mittig. */
.inhalt{flex:1 1 auto;display:flex;flex-direction:column;justify-content:center;min-height:0;padding:40px 0}
.art-hook .inhalt{justify-content:center}

h1{font-family:var(--serif);font-weight:400;font-size:108px;line-height:1.04;letter-spacing:-.012em;text-wrap:balance;overflow-wrap:normal;hyphens:manual}
h1 em{font-style:italic;color:var(--akzent);font-weight:400}
.unter{margin-top:38px;font-size:36px;line-height:1.38;color:var(--text-weich);max-width:860px}
.regel{width:120px;height:4px;background:var(--akzent);margin-bottom:44px;flex:none}
h2{font-family:var(--sans);font-weight:600;font-size:56px;line-height:1.12;letter-spacing:-.012em;text-wrap:balance;margin-bottom:40px}
h2 em{font-style:normal;color:var(--akzent)}
.text{font-size:40px;line-height:1.42;max-width:900px}
.text p+p{margin-top:24px}
em{font-style:normal;color:var(--akzent);font-weight:600}
code{font-family:var(--mono);font-size:.9em;white-space:nowrap;color:var(--text)}
ul.punkte{list-style:none;display:flex;flex-direction:column;gap:30px;font-size:40px;line-height:1.36}
ul.punkte li{display:flex;gap:26px;align-items:flex-start}
ul.punkte li::before{content:"";flex:none;width:14px;height:14px;background:var(--akzent);margin-top:20px}
.nachsatz{margin-top:44px;font-size:32px;line-height:1.4;color:var(--text-weich);max-width:900px}

/* Strukturdiagramm: Kästen mit Pfeilen. */
.struktur{display:flex;align-items:stretch;gap:0}
.struktur .knoten{flex:1 1 0;min-width:0;border:2px solid var(--linie-stark);padding:34px 30px;display:flex;flex-direction:column;justify-content:center;gap:12px;background:var(--flaeche)}
.struktur .knoten .l{font-weight:600;font-size:34px;line-height:1.15;letter-spacing:-.01em;overflow-wrap:normal;hyphens:auto;-webkit-hyphens:auto}
.struktur .knoten .u{font-size:26px;line-height:1.3;color:var(--text-weich)}
.struktur .pfeil{flex:none;width:64px;display:flex;align-items:center;justify-content:center;color:var(--akzent)}
.struktur .pfeil svg{width:44px;height:44px}
.struktur.senkrecht{flex-direction:column}
.struktur.senkrecht .knoten{flex:none;flex-direction:row;align-items:baseline;gap:24px;padding:26px 30px}
.struktur.senkrecht .pfeil{width:auto;height:52px}
.struktur.senkrecht .pfeil svg{transform:rotate(90deg)}
.struktur .knoten:first-child{border-color:var(--akzent);box-shadow:inset 6px 0 0 var(--akzent)}

/* Vergleich: zwei Spalten. */
.vergleich{display:grid;grid-template-columns:1fr 1fr;gap:28px;align-items:stretch}
.spalte{background:var(--flaeche);border-top:4px solid var(--linie-stark);padding:34px 34px 38px}
.spalte.rechts{border-top-color:var(--akzent)}
.spalte h3{font-family:var(--sans);font-weight:600;font-size:34px;line-height:1.15;margin-bottom:26px;letter-spacing:-.01em}
.spalte ul{list-style:none;display:flex;flex-direction:column;gap:18px;font-size:29px;line-height:1.35}
.spalte ul li{padding-left:30px;position:relative}
.spalte ul li::before{content:"–";position:absolute;left:0;color:var(--text-weich)}

/* Zeitachse. */
.zeitachse{display:flex;flex-direction:column;gap:0;position:relative;padding-left:56px}
.zeitachse::before{content:"";position:absolute;left:11px;top:22px;bottom:22px;width:2px;background:var(--linie-stark)}
.zeitachse .station{position:relative;padding:0 0 40px}
.zeitachse .station:last-child{padding-bottom:0}
.zeitachse .station::before{content:"";position:absolute;left:-52px;top:14px;width:16px;height:16px;border-radius:50%;background:var(--grund);border:3px solid var(--linie-stark)}
.zeitachse .station:first-child::before{background:var(--akzent);border-color:var(--akzent)}
.zeitachse .zeit{font-family:var(--mono);font-size:26px;letter-spacing:.1em;text-transform:uppercase;color:var(--akzent);margin-bottom:8px}
.zeitachse .st{font-size:36px;line-height:1.32}

/* Zahl. */
.zahl{font-family:var(--serif);font-size:250px;line-height:.92;letter-spacing:-.03em;color:var(--akzent);display:flex;align-items:baseline;gap:22px;flex-wrap:wrap}
.zahl .einheit{font-family:var(--mono);font-size:44px;letter-spacing:.06em;color:var(--text-weich);text-transform:uppercase}
.zahl-text{margin-top:40px;font-size:38px;line-height:1.4;max-width:900px}

/* Beispiel. */
.beispiel{background:var(--flaeche);border-left:6px solid var(--akzent);padding:40px 44px 44px}
.beispiel .tag{font-family:var(--mono);font-size:24px;letter-spacing:.14em;text-transform:uppercase;color:var(--akzent);margin-bottom:22px}
.beispiel .text{font-size:38px;max-width:none}

/* Einordnung: relevant / problematisch. */
.einordnung{display:grid;grid-template-columns:1fr 1fr;gap:28px}
.einordnung .block{background:var(--flaeche);padding:34px 34px 38px;border-top:4px solid var(--ok)}
.einordnung .block.problem{border-top-color:var(--warn)}
.einordnung h3{font-family:var(--mono);font-size:24px;letter-spacing:.14em;text-transform:uppercase;color:var(--text-weich);margin-bottom:26px}
.einordnung .block:not(.problem) h3{color:var(--ok)}
.einordnung .block.problem h3{color:var(--warn)}
.einordnung ul{list-style:none;display:flex;flex-direction:column;gap:18px;font-size:29px;line-height:1.35}
.einordnung ul li{padding-left:30px;position:relative}
.einordnung ul li::before{content:"";position:absolute;left:0;top:14px;width:12px;height:12px;background:currentColor;opacity:.55}

/* Take-away. */
.takeaway .tag{font-family:var(--mono);font-size:26px;letter-spacing:.16em;text-transform:uppercase;color:var(--akzent);margin-bottom:36px}
.takeaway .kern{font-family:var(--serif);font-size:70px;line-height:1.12;letter-spacing:-.01em;text-wrap:balance}
.takeaway .cta{margin-top:56px;padding-top:40px;border-top:1.5px solid var(--linie);font-size:36px;line-height:1.4;color:var(--text);max-width:900px}
.takeaway .cta::before{content:"→";color:var(--akzent);margin-right:18px}

/* Stories */
.story{padding:250px 84px 300px}
.story .kopf{position:absolute;left:84px;right:84px;top:150px}
.story .fuss{position:absolute;left:84px;right:84px;bottom:230px;margin:0}
.story .inhalt{padding:0}
.story .ueberzeile{font-family:var(--mono);font-size:28px;letter-spacing:.16em;text-transform:uppercase;color:var(--akzent);margin-bottom:44px}
.story h1{font-size:104px}
.story .text{font-size:44px;line-height:1.4;margin-top:48px}
.story .norm{margin-top:56px;font-family:var(--mono);font-size:34px;letter-spacing:.06em;color:var(--text-weich)}
.story h2{font-size:64px;margin-bottom:36px}
.story .schaubild{margin-top:56px}
.story .schaubild .struktur .knoten{padding:28px 26px}
.story .schaubild .struktur .knoten .l{font-size:30px}
.story .schaubild .struktur .knoten .u{font-size:24px}
.story .pille{display:inline-block;margin-top:64px;padding:18px 34px;border:2px solid var(--linie-stark);font-family:var(--mono);font-size:28px;letter-spacing:.12em;text-transform:uppercase}
.story .hinweis{margin-top:36px;font-size:30px;line-height:1.4;color:var(--text-weich)}
`;
}

const PFEIL = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12h17M14 6l6 6-6 6"/></svg>`;

function kopf(ctx, kategorie, zaehler) {
  return `<div class="kopf"><span class="kategorie">${esc(kategorie || "")}</span><span class="rechts">${zaehler ? `<span class="zaehler">${esc(zaehler)}</span>` : ""}${markeSvg(36)}</span></div>`;
}

function fuss(ctx, stand) {
  return `<div class="fuss"><span class="absender">${esc(ctx.absender || "")}</span>${stand ? `<span class="stand">Rechtsstand ${esc(stand)}</span>` : `<span class="handle">${esc(ctx.handle || "")}</span>`}</div>`;
}

/* Bausteine, die Folien und Stories teilen. */
export function strukturHtml(f) {
  const knoten = (f.knoten || []).filter((k) => k?.label);
  const senkrecht = knoten.length >= 4;
  return `<div class="struktur ${senkrecht ? "senkrecht" : ""}">${knoten.map((k, i) => `${i ? `<div class="pfeil">${PFEIL}</div>` : ""}<div class="knoten"><div class="l">${markierenTitel(k.label)}</div>${k.unter ? `<div class="u">${markieren(k.unter)}</div>` : ""}</div>`).join("")}</div>`;
}
export function vergleichHtml(f) {
  const spalte = (s, klasse) => `<div class="spalte ${klasse}"><h3>${markierenTitel(s?.titel || "")}</h3><ul>${(s?.punkte || []).map((p) => `<li>${markieren(p)}</li>`).join("")}</ul></div>`;
  return `<div class="vergleich">${spalte(f.links, "links")}${spalte(f.rechts, "rechts")}</div>`;
}
export function zeitachseHtml(f) {
  return `<div class="zeitachse">${(f.schritte || []).map((s) => `<div class="station"><div class="zeit">${esc(typeof s === "string" ? "" : s.zeit)}</div><div class="st">${markieren(typeof s === "string" ? s : s.text)}</div></div>`).join("")}</div>`;
}
function schaubildHtml(sb) {
  if (!sb) return "";
  const inner = sb.art === "zeitachse" ? zeitachseHtml(sb) : sb.art === "vergleich" ? vergleichHtml(sb) : strukturHtml(sb);
  return `<div class="schaubild">${inner}</div>`;
}

const textOderPunkte = (f) => (f.punkte?.length ? `<ul class="punkte">${f.punkte.map((p) => `<li><span>${markieren(p)}</span></li>`).join("")}</ul>` : f.text ? `<div class="text">${String(f.text).split(/\n+/).map((p) => `<p>${markieren(p)}</p>`).join("")}</div>` : "");
const nachsatz = (f) => (f.text ? `<div class="nachsatz">${markieren(f.text)}</div>` : "");

const FOLIEN = {
  hook: (f, ctx) => `
    ${kopf(ctx, ctx.kategorie, "")}
    <div class="inhalt"><div class="regel"></div><h1>${markierenTitel(f.titel)}</h1>${f.untertitel ? `<p class="unter">${markieren(f.untertitel)}</p>` : ""}</div>
    ${fuss(ctx)}`,
  text: (f, ctx, i, n) => `
    ${kopf(ctx, ctx.kategorie, `${i}/${n}`)}
    <div class="inhalt"><h2>${markierenTitel(f.titel)}</h2>${textOderPunkte(f)}</div>
    ${fuss(ctx)}`,
  struktur: (f, ctx, i, n) => `
    ${kopf(ctx, ctx.kategorie, `${i}/${n}`)}
    <div class="inhalt"><h2>${markierenTitel(f.titel)}</h2>${strukturHtml(f)}${nachsatz(f)}</div>
    ${fuss(ctx)}`,
  vergleich: (f, ctx, i, n) => `
    ${kopf(ctx, ctx.kategorie, `${i}/${n}`)}
    <div class="inhalt"><h2>${markierenTitel(f.titel)}</h2>${vergleichHtml(f)}${nachsatz(f)}</div>
    ${fuss(ctx)}`,
  zeitachse: (f, ctx, i, n) => `
    ${kopf(ctx, ctx.kategorie, `${i}/${n}`)}
    <div class="inhalt"><h2>${markierenTitel(f.titel)}</h2>${zeitachseHtml(f)}${nachsatz(f)}</div>
    ${fuss(ctx)}`,
  zahl: (f, ctx, i, n) => `
    ${kopf(ctx, ctx.kategorie, `${i}/${n}`)}
    <div class="inhalt"><h2>${markierenTitel(f.titel)}</h2><div class="zahl"><span>${esc(f.zahl)}</span>${f.einheit ? `<span class="einheit">${esc(f.einheit)}</span>` : ""}</div>${f.text ? `<div class="zahl-text">${markieren(f.text)}</div>` : ""}</div>
    ${fuss(ctx)}`,
  beispiel: (f, ctx, i, n) => `
    ${kopf(ctx, ctx.kategorie, `${i}/${n}`)}
    <div class="inhalt"><h2>${markierenTitel(f.titel)}</h2><div class="beispiel"><div class="tag">Fiktives Beispiel</div>${textOderPunkte(f)}</div></div>
    ${fuss(ctx)}`,
  einordnung: (f, ctx, i, n) => `
    ${kopf(ctx, ctx.kategorie, `${i}/${n}`)}
    <div class="inhalt"><h2>${markierenTitel(f.titel)}</h2><div class="einordnung">
      <div class="block"><h3>Passt, wenn</h3><ul>${(f.relevant || []).map((p) => `<li>${markieren(p)}</li>`).join("")}</ul></div>
      <div class="block problem"><h3>Problematisch, wenn</h3><ul>${(f.problematisch || []).map((p) => `<li>${markieren(p)}</li>`).join("")}</ul></div>
    </div>${nachsatz({ text: f.nachsatz })}</div>
    ${fuss(ctx)}`,
  takeaway: (f, ctx, i, n) => `
    ${kopf(ctx, ctx.kategorie, `${i}/${n}`)}
    <div class="inhalt takeaway"><div class="tag">${esc(f.titel || "Take-away")}</div><div class="kern">${markierenTitel(f.text)}</div>${f.cta ? `<div class="cta">${markieren(f.cta)}</div>` : ""}</div>
    ${fuss(ctx, ctx.rechtsstand)}`,
};

export function folieHtml(folie, ctx, index, anzahl) {
  const render = FOLIEN[folie.art] || FOLIEN.text;
  return `<!doctype html><html lang="de"><head><meta charset="utf-8"><style>${css(ctx.stil, "beitrag")}</style></head>
<body class="stil-${ctx.stil.id}"><div class="folie art-${esc(folie.art || "text")}">${render(folie, ctx, index, anzahl)}</div></body></html>`;
}

const STORIES = {
  hook: (s, ctx) => `
    ${kopf(ctx, ctx.kategorie, "")}
    <div class="inhalt"><div class="ueberzeile">${esc(s.ueberzeile || "Kurz gefragt")}</div><h1>${markierenTitel(s.titel)}</h1>${s.text ? `<div class="text">${markieren(s.text)}</div>` : ""}${s.norm ? `<div class="norm">${esc(normKurz(s.norm))}</div>` : ""}</div>
    ${fuss(ctx)}`,
  wissen: (s, ctx) => `
    ${kopf(ctx, ctx.kategorie, "")}
    <div class="inhalt"><div class="ueberzeile">${esc(s.ueberzeile || "Zusatzwissen")}</div><h2>${markierenTitel(s.titel)}</h2>${s.text ? `<div class="text" style="margin-top:0">${markieren(s.text)}</div>` : ""}${schaubildHtml(s.schaubild)}${s.norm ? `<div class="norm">${esc(normKurz(s.norm))}</div>` : ""}</div>
    ${fuss(ctx)}`,
  hinweis: (s, ctx) => `
    ${kopf(ctx, ctx.kategorie, "")}
    <div class="inhalt"><div class="ueberzeile">${esc(s.ueberzeile || "Heute im Feed")}</div><h1 style="font-size:92px">${markierenTitel(s.titel)}</h1>${s.text ? `<div class="text">${markieren(s.text)}</div>` : ""}<div><span class="pille">${esc(s.pille || "Neuer Beitrag")}${s.folien ? ` · ${s.folien} Folien` : ""}</span></div><div class="hinweis">Der Beitrag ist der neueste im Profil.</div></div>
    ${fuss(ctx)}`,
  aktuell: (s, ctx) => `
    ${kopf(ctx, ctx.kategorie, "")}
    <div class="inhalt"><div class="ueberzeile">${esc(s.ueberzeile || "Aktuell")}</div><h1 style="font-size:92px">${markierenTitel(s.titel)}</h1>${s.text ? `<div class="text">${markieren(s.text)}</div>` : ""}${s.norm ? `<div class="norm">${esc(normKurz(s.norm))}</div>` : ""}</div>
    ${fuss(ctx)}`,
};

export function storyHtml(story, ctx) {
  const render = STORIES[story.art] || STORIES.hook;
  return `<!doctype html><html lang="de"><head><meta charset="utf-8"><style>${css(ctx.stil, "story")}</style></head>
<body class="stil-${ctx.stil.id}"><div class="story art-${esc(story.art || "hook")}">${render(story, ctx)}</div></body></html>`;
}

export const FOLIEN_ARTEN = Object.keys(FOLIEN);
export const STORY_ARTEN = Object.keys(STORIES);
