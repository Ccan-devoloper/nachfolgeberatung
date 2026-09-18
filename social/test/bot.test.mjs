import { test } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import { themenpool, poolStatistik, SCHWERPUNKTE, themaText } from "../src/inhalte.mjs";
import { pruefeBeitrag, uebernahmeLaeufe, gefundeneNamen, korpus, pruefeGrenzen } from "../src/pruefung.mjs";
import { tagesplan, vermerken, ledgerLaden, verfuegbar, ctaWaehlen, rng, themaSperren, quotenStand } from "../src/planer.mjs";
import { folieHtml, storyHtml, FOLIEN_ARTEN, STORY_ARTEN } from "../src/vorlagen.mjs";
import { kontext } from "../src/render.mjs";
import { STILE } from "../src/stile.mjs";
import { hookFormal, verboteneFormulierung, hookWaehlen, hookTypErkennen } from "../src/hooks.mjs";
import { normKurz } from "../src/normen.mjs";
import { budgetSetzen, erfassen, erfassenOpenai, budgetFrei, tagesStand, reservieren, BudgetFehler, budgetPruefen } from "../src/kosten.mjs";
import { befundeAuswerten, korrekturenAnwenden, textAus } from "../src/faktencheck.mjs";
import { hashtagsWaehlen, hinweisAusBeitrag, rechtsstandText } from "../src/autor.mjs";
import { strategieAbleiten, punkte } from "../src/insights.mjs";
import { tokenVerschluesseln, tokenEntschluesseln } from "../src/instagram.mjs";
import { CONFIG } from "../src/config.mjs";

const beispiele = JSON.parse(fs.readFileSync(new URL("../beispiele/inhalte.json", import.meta.url), "utf8"));
const pool = await themenpool();

test("Themenpool: alle Blöcke vertreten, Kategorie und Blickwinkel gesetzt", () => {
  const st = poolStatistik(pool);
  assert.ok(st.gesamt >= 90, `nur ${st.gesamt} Themen`);
  for (const k of Object.keys(SCHWERPUNKTE)) if (k !== "aktuell") assert.ok(st.jeSchwerpunkt[k] > 0, `Block ${k} fehlt`);
  const stiftung = ["de", "fl", "gemein", "kombi", "steuer"].reduce((a, k) => a + (st.jeSchwerpunkt[k] || 0), 0);
  assert.ok(stiftung / st.gesamt >= 0.4, "Stiftungsthemen sollten einen großen Teil stellen");
  for (const t of pool) {
    assert.ok(t.kategorie && t.blickwinkel.length && ["einstieg", "fortgeschritten", "experte"].includes(t.tiefe), t.id);
    assert.ok(!/Q[1-9]|Seite \d/.test(themaText(t)), `Quellenbezug im Skelett: ${t.id}`);
  }
});

test("Prüfung erkennt wörtliche Übernahmen aus der Wissensbasis, nicht aber eigene Sätze", () => {
  const k = korpus();
  assert.ok(k.index.size > 10000);
  const original = pool[0].kern[0];
  assert.ok(uebernahmeLaeufe(original, k).some((l) => l.woerter >= 13), "Originalsatz müsste erkannt werden");
  const eigen = "Wer eine Stiftung gründet, gibt Vermögen endgültig aus der Hand und bekommt dafür eine Ordnung, die länger hält als jede Generation.";
  assert.equal(uebernahmeLaeufe(eigen, k).length, 0);
});

test("Prüfung sperrt Personennamen in Beispielen", () => {
  assert.ok(gefundeneNamen("Herr Müller überträgt Anteile auf Familie Schmidt.").length >= 1);
  assert.equal(gefundeneNamen("Ein Unternehmer, 62, überträgt Anteile auf seine Tochter.").length, 0);
});

test("Sperrliste greift, ohne gewöhnliche Wörter zu treffen", () => {
  const liste = korpus().namen;
  assert.ok(liste.length >= 8, `Sperrliste hat nur ${liste.length} Einträge`);
  /* Autoren und Kanzleien des Rohmaterials dürfen nie in einem Beitrag stehen. */
  assert.ok(gefundeneNamen("Nach Oppel ist das anders zu sehen.").includes("Oppel"));
  /* Und die Liste darf keine juristische Alltagssprache blockieren. */
  for (const satz of ["Das Gesetz tritt in Kraft.", "Der weiten Auslegung folgt der BFH nicht.", "Die Stiftung wird kraft Gesetzes rechtsfähig."]) {
    assert.deepEqual(gefundeneNamen(satz), [], satz);
  }
});

test("Beispielbeiträge und -Stories bestehen die Prüfung", () => {
  for (const b of beispiele.beitraege) { const r = pruefeBeitrag(b); assert.ok(r.ok, `${b.slug}: ${r.fehler.join(" | ")}`); }
  const r = pruefeBeitrag({ stories: beispiele.stories });
  assert.ok(r.ok, r.fehler.join(" | "));
});

test("Prüfung setzt die Grenzen des Strategiepapiers durch", () => {
  const lang = Array.from({ length: 70 }, (_, i) => `Wort${i}`).join(" ");
  const r = pruefeBeitrag({ folien: [
    { art: "hook", titel: "Kurz" },
    { art: "text", titel: "Eine viel zu lange Zwischenüberschrift mit deutlich mehr als acht Wörtern darin", text: lang },
    { art: "text", titel: "Punkte", punkte: ["a b c d e", "f g h i j", "k l m n o", "p q r s t"] },
    { art: "text", titel: "Normen", text: "Nach § 1 ErbStG, § 2 ErbStG und § 3 ErbStG gilt das hier so, sagt auch § 4 ErbStG in jedem Fall." },
    { art: "takeaway", titel: "Take-away", text: "Mit diesem Trick sparst du Steuern, in Ihrem Fall sicher.", cta: "Folgen." },
  ], caption: "kurz" });
  assert.ok(!r.ok);
  const f = r.fehler.join("\n");
  assert.match(f, /Hook hat 1 Wörter/);
  assert.match(f, /Zwischenüberschrift hat/);
  assert.match(f, /Wörter Folientext/);
  assert.match(f, /4 Punkte/);
  assert.match(f, /Normzitate/);
  assert.match(f, /marktschreierisch/);
  assert.match(f, /Du-Form/);
  assert.match(f, /individualisierte Beratung/);
  assert.match(f, /Caption hat/);
});

test("Hooks: Sperrliste, Länge, Wahl nur ab Mindestpunkten", () => {
  assert.ok(verboteneFormulierung("So umgehen Sie die Erbschaftsteuer"));
  assert.ok(verboteneFormulierung("Der geheime Stiftungstrick"));
  assert.equal(verboteneFormulierung("Eine Familienstiftung spart nicht automatisch Steuern."), null);
  assert.deepEqual(hookFormal({ typ: "irrtum", text: "Eine Familienstiftung spart nicht automatisch Erbschaftsteuer." }), []);
  assert.ok(hookFormal({ typ: "irrtum", text: "Zu kurz." }).length);
  assert.ok(hookFormal({ typ: "irrtum", text: "Willst du wissen, was du bei der Stiftung falsch machst?" }).some((f) => /Du-Form/.test(f)));
  const { gewaehlt } = hookWaehlen([{ typ: "irrtum", text: "a", punkte: 38 }, { typ: "vergleich", text: "b", punkte: 39 }]);
  assert.equal(gewaehlt, null);
  assert.equal(hookWaehlen([{ typ: "irrtum", text: "a", punkte: 44 }, { typ: "vergleich", text: "b", punkte: 41 }]).gewaehlt.text, "a");
  assert.equal(hookTypErkennen("Deutschland oder Liechtenstein – wann macht der Unterschied wirklich etwas aus?"), "vergleich");
});

test("Normen werden in die Kurzform gebracht", () => {
  assert.equal(normKurz("Paragraf 15 Absatz 2 Satz 1 Erbschaftsteuergesetz"), "§ 15 Abs. 2 S. 1 ErbStG");
  assert.equal(normKurz("Artikel 552 § 1 PGR"), "Art. 552 § 1 PGR");
});

test("Tagesplan: deterministisch, ein Beitrag, drei bis vier Stories, Sperren greifen", () => {
  const a = tagesplan("2026-09-21", ledgerLaden(), pool);
  const b = tagesplan("2026-09-21", ledgerLaden(), pool);
  assert.equal(a.beitraege.length, 1);
  assert.equal(a.beitraege[0].format, "carousel");
  assert.deepEqual(a.beitraege.map((x) => x.thema?.id), b.beitraege.map((x) => x.thema?.id));
  assert.ok(a.stories.length >= 3 && a.stories.length <= 4, `Stories: ${a.stories.length}`);
  assert.deepEqual(a.stories.filter((s) => s.art === "hinweis").length, 1);
  assert.ok(["save", "share", "follow", "conversation"].includes(a.beitraege[0].cta));
  const ids = [a.beitraege[0].thema?.id, ...a.stories.map((s) => s.thema?.id)].filter(Boolean);
  assert.equal(new Set(ids).size, ids.length, "kein Thema doppelt am Tag");
  /* Sperre: dasselbe Thema mit demselben Blickwinkel nicht innerhalb von 240 Tagen. */
  const t = a.beitraege[0].thema;
  if (t) {
    const ledger = vermerken(ledgerLaden(), { datum: "2026-09-21", art: "beitrag", thema: t.id, blickwinkel: a.beitraege[0].blickwinkel, schwerpunkt: t.schwerpunkt, tiefe: t.tiefe, cta: "save", medienId: "x" });
    assert.equal(verfuegbar(t, ledger, "2026-09-25"), false, "12-Tage-Sperre");
    assert.equal(verfuegbar(t, ledger, "2026-10-20", { blickwinkel: a.beitraege[0].blickwinkel }), false, "240-Tage-Sperre für den Blickwinkel");
    assert.equal(verfuegbar(t, ledger, "2026-10-20", { blickwinkel: "zzz" }), true);
    themaSperren(ledger, t, "Gesetz geändert");
    assert.equal(verfuegbar(t, ledger, "2027-12-01"), false, "Gegencheck-Sperre");
  }
});

test("Quoten: Blöcke mit Rückstand kommen häufiger dran", () => {
  const ledger = ledgerLaden();
  for (let i = 1; i <= 20; i++) vermerken(ledger, { datum: `2026-09-${String(i).padStart(2, "0")}`, art: "beitrag", thema: `x${i}`, schwerpunkt: "nachfolge", tiefe: "einstieg", cta: "save", medienId: "m" });
  let de = 0;
  for (let i = 0; i < 30; i++) { const p = tagesplan(`2026-10-${String((i % 28) + 1).padStart(2, "0")}`, ledger, pool); if (["de", "fl", "gemein", "kombi", "steuer"].includes(p.beitraege[0].schwerpunkt)) de++; }
  assert.ok(de >= 22, `Stiftungsblöcke nur ${de}/30`);
  const q = quotenStand(ledger, "2026-09-21");
  assert.equal(q.schwerpunkt.nachfolge.ist, 20);
});

test("CTA: Beratungs-CTA erst nach der Anlaufphase und selten", () => {
  const ledger = ledgerLaden();
  vermerken(ledger, { datum: "2026-09-01", art: "beitrag", thema: "a", cta: "save", medienId: "m" });
  let conv = 0;
  for (let i = 0; i < 200; i++) if (ctaWaehlen(ledger, "2026-09-20", rng(`t${i}`)) === "conversion") conv++;
  assert.equal(conv, 0, "keine Conversion in den ersten 45 Tagen");
  for (let i = 0; i < 200; i++) if (ctaWaehlen(ledger, "2026-12-01", rng(`t${i}`)) === "conversion") conv++;
  assert.ok(conv > 5 && conv < 60, `Conversion-Anteil ${conv}/200`);
});

test("Vorlagen rendern alle Folien- und Story-Arten in beiden Stilen", () => {
  for (const stil of Object.keys(STILE)) {
    const ctx = kontext({ stil, kategorie: "Familienstiftung · Deutschland", rechtsstand: "September 2026" });
    for (const b of beispiele.beitraege) b.folien.forEach((f, i) => { const html = folieHtml(f, ctx, i + 1, b.folien.length); assert.ok(html.includes("<h1") || html.includes("<h2") || html.includes("takeaway"), f.art); assert.ok(!/undefined/.test(html), `undefined in ${f.art}`); });
    for (const s of beispiele.stories) { const html = storyHtml(s, ctx); assert.ok(!/undefined/.test(html), `undefined in Story ${s.art}`); assert.ok(html.includes(STILE[stil].farben.grund)); }
  }
  assert.deepEqual(FOLIEN_ARTEN.sort(), ["beispiel", "einordnung", "hook", "struktur", "takeaway", "text", "vergleich", "zahl", "zeitachse"]);
  assert.deepEqual(STORY_ARTEN.sort(), ["aktuell", "hinweis", "hook", "wissen"]);
});

test("Kosten: Claude und OpenAI zählen auf denselben Deckel, Rücklage greift", () => {
  budgetSetzen({ limitUsd: 0.38, bisher: 0 });
  erfassen("claude-sonnet-5", { input_tokens: 20000, output_tokens: 4000 }, "beitrag");
  erfassenOpenai("gpt-5-mini", { prompt_tokens: 8000, completion_tokens: 1000 }, "openai");
  assert.ok(tagesStand() > 0.08 && tagesStand() < 0.1, `${tagesStand()}`);
  erfassen("claude-sonnet-5", { input_tokens: 5000, output_tokens: 2000 }, "gegencheck", { suchen: 2 });
  assert.ok(tagesStand() > 0.12, "Websuchen kosten extra");
  budgetSetzen({ limitUsd: 0.1, bisher: 0.05 });
  reservieren(0.05, "gegencheck");
  assert.equal(budgetFrei("Beitrag schreiben"), false);
  assert.equal(budgetFrei("gegencheck"), true);
  assert.throws(() => budgetPruefen("Beitrag schreiben"), BudgetFehler);
  budgetSetzen({});
});

test("Faktencheck: Befunde werden nach Schwere sortiert, Sprachkorrekturen angewendet", () => {
  const r = befundeAuswerten({ befunde: [
    { schwere: "fehler", stelle: "Folie 3", problem: "Frist falsch", korrektur: "30 Jahre", original: "", ersatz: "" },
    { schwere: "fehler", stelle: "Folie 4", problem: "etwas ungenau formuliert", korrektur: "präzisieren", original: "", ersatz: "" },
    { schwere: "sprache", stelle: "Folie 2", problem: "doppelt", korrektur: "", original: "die die Stiftung", ersatz: "die Stiftung" },
    { schwere: "unsicher", stelle: "Caption", problem: "?", korrektur: "", original: "", ersatz: "" },
  ], unsicherheit: "mittel" });
  assert.equal(r.fehler.length, 1);
  assert.equal(r.hinweise.length, 2);
  assert.equal(r.unsicherheit, "mittel");
  const o = { folien: [{ art: "text", titel: "x", text: "Hier ist die die Stiftung." }] };
  assert.equal(korrekturenAnwenden(o, r.korrekturen), 1);
  assert.equal(o.folien[0].text, "Hier ist die Stiftung.");
  assert.match(textAus(beispiele.beitraege[0]), /\[Folie 1 hook\]/);
});

test("Autor-Helfer: Hashtags, Hinweis-Story, Rechtsstand", () => {
  const tags = hashtagsWaehlen(["#erbersatzsteuer", "Stiftung", "#familienstiftung"], CONFIG.hashtags.kern, null, 3);
  assert.ok(tags.length <= CONFIG.hashtags.maxJeBeitrag && tags.includes("#familienstiftung") && tags.includes("#erbersatzsteuer") && tags.includes("#stiftung"));
  const h = hinweisAusBeitrag(beispiele.beitraege[0], "s3");
  assert.equal(h.art, "hinweis"); assert.equal(h.folien, 7); assert.ok(h.text.length > 10);
  assert.equal(rechtsstandText("2026-09-18"), "September 2026");
});

test("Lernschleife: Gewichte je Block, Hook-Typ, CTA und Folienzahl", () => {
  const ledger = ledgerLaden();
  const ins = (n) => ({ reach: 1000 * n, saved: 10 * n, shares: 5 * n, likes: 50, comments: 2, follows: n });
  for (let i = 0; i < 8; i++) vermerken(ledger, { datum: `2026-09-0${(i % 9) + 1}`, art: "beitrag", thema: `t${i}`, schwerpunkt: i % 2 ? "de" : "fl", hookTyp: i % 2 ? "irrtum" : "vergleich", cta: i % 2 ? "save" : "share", folien: i % 2 ? 7 : 5, insights: ins(i % 2 ? 3 : 1), medienId: "m" });
  const s = strategieAbleiten(ledger);
  assert.ok(s.schwerpunktGewicht.de > s.schwerpunktGewicht.fl);
  assert.ok(s.hookGewicht.irrtum > s.hookGewicht.vergleich);
  assert.ok(s.ctaGewicht.save > s.ctaGewicht.share);
  assert.ok(s.folienGewicht["7"] > s.folienGewicht["5"]);
  assert.ok(punkte(ins(2)) > punkte(ins(1)));
});

test("Token-Tresor verschlüsselt und entschlüsselt", () => {
  CONFIG.instagram.tokenSchluessel = "test-schluessel-1234567890";
  const t = tokenVerschluesseln({ token: "abc", ablauf: "2027-01-01" });
  assert.notEqual(t, "abc");
  assert.equal(tokenEntschluesseln(t).token, "abc");
});
