/* ==========================================================================
   Rendert Folien und Stories mit Chromium (Playwright) als JPEG.
   Instagram akzeptiert für Bilder nur JPEG; 1080×1350 (4:5) und 1080×1920.
   ========================================================================== */

import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { chromium } from "playwright";
import { folieHtml, storyHtml, MASSE } from "./vorlagen.mjs";
import { stil as stilLaden } from "./stile.mjs";
import { CONFIG } from "./config.mjs";

let browser = null;

export async function browserStarten() {
  if (browser) return browser;
  browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH || undefined, args: ["--font-render-hinting=none"] });
  return browser;
}

export async function browserBeenden() {
  if (browser) { await browser.close(); browser = null; }
}

/** Render-Kontext: Stil, Kategorie, Absender, Rechtsstand. */
export function kontext(opt = {}) {
  return {
    stil: stilLaden(opt.stil || CONFIG.marke.stil),
    absender: opt.absender ?? CONFIG.marke.absender,
    handle: opt.handle ?? CONFIG.marke.handle,
    kategorie: opt.kategorie || "Stiftungsrecht & Nachfolge",
    rechtsstand: opt.rechtsstand || null,
  };
}

async function htmlZuJpeg(html, masse, zielPfad, skala = Number(process.env.IG_RENDER_SKALA || 1)) {
  const b = await browserStarten();
  const page = await b.newPage({ viewport: { width: masse.breite, height: masse.hoehe }, deviceScaleFactor: skala });
  const tmp = path.join(os.tmpdir(), `ig-${process.pid}-${Math.random().toString(36).slice(2)}.html`);
  fs.writeFileSync(tmp, html);
  try {
    await page.goto(`file://${tmp}`, { waitUntil: "load" });
    await page.evaluate(() => document.fonts.ready);
    await page.evaluate(einpassen);
    await page.waitForTimeout(50);
    fs.mkdirSync(path.dirname(zielPfad), { recursive: true });
    await page.screenshot({ path: zielPfad, type: "jpeg", quality: skala < 1 ? 80 : 92, fullPage: false });
  } finally {
    await page.close();
    fs.rmSync(tmp, { force: true });
  }
  return zielPfad;
}

/* Läuft im Browser: verkleinert Text, bis nichts über den Rand hinausragt und
   der Inhalt zwischen Kopf und Fuß bleibt. Der Hook fällt nie unter 72 px –
   darunter ist er im Feed-Vorschaubild nicht mehr zu lesen. */
function einpassen() {
  const wurzel = document.querySelector(".folie, .story");
  if (!wurzel) return;
  const px = (el) => parseFloat(getComputedStyle(el).fontSize);
  const untergrenze = (el) => (el.tagName === "H1" ? 72 : el.classList.contains("zahl") ? 120 : 24);
  const setze = (el, f) => { el.style.fontSize = `${Math.max(untergrenze(el), px(el) * f)}px`; };
  const innenRechts = wurzel.getBoundingClientRect().right - parseFloat(getComputedStyle(wurzel).paddingRight || 0);
  for (const el of wurzel.querySelectorAll("h1,h2,h3,.kern,.zahl,.kategorie,.knoten .l,.zeit,.pille")) {
    let n = 0;
    while ((el.scrollWidth > el.clientWidth + 1 || el.getBoundingClientRect().right > innenRechts + 1) && n++ < 20) setze(el, 0.94);
  }
  const inhalt = wurzel.querySelector(".inhalt");
  const fuss = wurzel.querySelector(".fuss");
  if (!inhalt) return;
  const textElemente = [...inhalt.querySelectorAll("h1,h2,h3,p,li,.text,.unter,.kern,.cta,.nachsatz,.zahl,.zahl-text,.knoten .l,.knoten .u,.st,.zeit,.tag,.ueberzeile,.norm,.hinweis,.pille,.einheit")];
  /* Gemessen wird der Inhalt, nicht der Kasten: .inhalt füllt als flex-Kind
     immer den Platz bis zur Fußzeile, seine Kinder dürfen ihn nur nicht
     überlaufen. */
  const passt = () => {
    const grenze = fuss ? fuss.getBoundingClientRect().top - 8 : wurzel.getBoundingClientRect().bottom - 60;
    const unten = Math.max(...[...inhalt.children].map((c) => c.getBoundingClientRect().bottom));
    return inhalt.scrollHeight <= inhalt.clientHeight + 1 && unten <= grenze + 1 && wurzel.scrollHeight <= wurzel.clientHeight + 1;
  };
  let n = 0;
  while (!passt() && n++ < 16) for (const el of textElemente) setze(el, 0.95);
}

/** Rendert alle Folien eines Beitrags → Liste der JPEG-Pfade. */
export async function beitragRendern(beitrag, zielVerzeichnis, opt = {}) {
  const ctx = kontext({ ...opt, kategorie: beitrag.kategorie, rechtsstand: beitrag.sicherheit?.rechtsstand });
  const pfade = [];
  const n = beitrag.folien.length;
  for (let i = 0; i < n; i++) {
    const html = folieHtml(beitrag.folien[i], ctx, i + 1, n);
    const ziel = path.join(zielVerzeichnis, `${beitrag.slug || "beitrag"}-${String(i + 1).padStart(2, "0")}.jpg`);
    pfade.push(await htmlZuJpeg(html, MASSE.beitrag, ziel));
  }
  return pfade;
}

export async function storyRendern(story, zielPfad, opt = {}) {
  const ctx = kontext({ ...opt, kategorie: story.kategorie });
  return htmlZuJpeg(storyHtml(story, ctx), MASSE.story, zielPfad);
}
