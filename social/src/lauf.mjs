/* ==========================================================================
   Tageslauf – wird stündlich von GitHub Actions gestartet.

   1. Asset-Zweig holen (Bilder, Ledger, Tagesplan, Token-Tresor)
   2. Trockenlaufphase prüfen (die ersten Tage nach dem ersten Lauf)
   3. Tagesplan laden oder für heute erzeugen
   4. Alle fälligen, noch nicht veröffentlichten Einträge abarbeiten:
        Gegencheck → schreiben → Hooks → prüfen → Faktencheck I + II
        → rendern → hochladen → veröffentlichen → vermerken
   5. Zustand committen und pushen

   Optionen:  --nur-planen        Plan anzeigen, nichts erzeugen
              --nur-rendern       Inhalte erzeugen und rendern, nichts veröffentlichen
              --datum=YYYY-MM-DD  Plan eines anderen Tages (für Tests)
              --alles             alle Einträge des Tages sofort (ohne Uhrzeit-Prüfung)
   ========================================================================== */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { CONFIG } from "./config.mjs";
import { zeitStatistik } from "./zeiten.mjs";
import { themenpool } from "./inhalte.mjs";
import { tagesplan, ledgerLaden, ledgerSpeichern, vermerken, ersatzThema, themaSperren } from "./planer.mjs";
import { pruefeBeitrag } from "./pruefung.mjs";
import { beitragSchreiben, storiesSchreiben, hinweisAusBeitrag, zweiterFaktencheck } from "./autor.mjs";
import { gegencheck, aktuellRecherchieren } from "./gegencheck.mjs";
import { OpenaiFehler } from "./faktencheck-openai.mjs";
import { beitragRendern, storyRendern, browserBeenden } from "./render.mjs";
import { Instagram } from "./instagram.mjs";
import { Hosting } from "./hosting.mjs";
import { kommentareBeantworten } from "./interaktion.mjs";
import { lernschleife } from "./insights.mjs";
import { verteilen } from "./verteilen.mjs";
import { berichtErstellen, berichtSenden } from "./bericht.mjs";
import { abschluss as kostenAbschluss, budgetSetzen, reservieren, reservierungAufheben, tagesStand, tagesLimit, BudgetFehler } from "./kosten.mjs";
import { heuteIso, lokaleMinuten, minutenVon, wochentag, tageBis } from "./zeit.mjs";

const hier = path.dirname(fileURLToPath(import.meta.url));
const args = new Map(process.argv.slice(2).map((a) => { const [k, v] = a.replace(/^--/, "").split("="); return [k, v ?? true]; }));
const datum = args.get("datum") || heuteIso();
const nurPlanen = args.has("nur-planen");
const alles = args.has("alles");
const AUSGABE = path.resolve(hier, "../out", datum);

function log(...t) { console.log(new Date().toISOString().slice(11, 19), ...t); }

const planSpeichern = (hosting, plan) => hosting.jsonSchreiben(`plaene/${plan.datum}.json`, plan);

/* Trockenlaufphase: ab dem ersten Lauf so viele Tage nur erzeugen, danach
   von selbst live. IG_DRY_RUN (manueller Lauf, IG_PAUSE) erzwingt trocken. */
function trockenlaufPhase(hosting) {
  const stand = hosting.jsonLesen("trockenlauf.json", null);
  if (!stand?.start) {
    hosting.jsonSchreiben("trockenlauf.json", { start: datum, tage: CONFIG.instagram.trockenTage });
    return { trocken: CONFIG.instagram.trockenTage > 0, tag: 0, tage: CONFIG.instagram.trockenTage, start: datum };
  }
  const tage = stand.tage ?? CONFIG.instagram.trockenTage;
  const tag = -tageBis(stand.start, new Date(`${datum}T12:00:00Z`));
  return { trocken: tag < tage, tag, tage, start: stand.start };
}

/* Faktencheck II nachholen, wenn er beim Schreiben ausgefallen war. Streng:
   ohne Ergebnis keine Veröffentlichung – der nächste Lauf versucht es erneut. */
async function zweitenCheckNachholen(inhalt, hosting, datei) {
  if (!inhalt.openaiAusstehend) return true;
  if (!CONFIG.faktencheck.openaiStrikt) { log("  Faktencheck II ausgefallen, nicht streng – Beitrag geht raus."); return true; }
  const ist = Array.isArray(inhalt.stories) ? { stories: inhalt.stories } : inhalt;
  const r = await zweiterFaktencheck(ist, Array.isArray(inhalt.stories) ? "openai-stories" : "openai");
  if (Array.isArray(inhalt.stories)) {
    for (const f of r.fehler) { const t = String(f).match(/\[?\b(s\d+)\b\]?/); for (const o of t ? inhalt.stories.filter((x) => x.slot === t[1]) : inhalt.stories) (o.beanstandet ||= []).push(`zweiter Prüfer: ${f}`); }
    for (const o of inhalt.stories) { delete o.openaiAusstehend; o.geprueft = { ...(o.geprueft || {}), pruefer2: true, stand: new Date().toISOString() }; }
    return true;
  }
  delete inhalt.openaiAusstehend;
  inhalt.sicherheit.pruefstatus = { ...(inhalt.sicherheit.pruefstatus || {}), pruefer2: { modell: r.modell, ok: r.ok, hinweise: r.hinweise.length }, geprueft: new Date().toISOString() };
  hosting.jsonSchreiben(datei, inhalt);
  if (!r.ok) throw new Error(`Faktencheck II beanstandet den gespeicherten Entwurf: ${r.fehler.join(" | ")}`);
  return true;
}

async function main() {
  const hosting = new Hosting({ pushen: !nurPlanen }).vorbereiten();
  const ledgerPfad = path.join(hosting.stateDir, "ledger.json");

  const phase = trockenlaufPhase(hosting);
  const trocken = args.has("nur-rendern") || CONFIG.instagram.trockenlauf || phase.trocken;
  log(`Instagram-Bot · ${datum} · Stil ${CONFIG.marke.stil} · ${trocken ? `TROCKENLAUF${phase.trocken ? ` (Tag ${phase.tag + 1} von ${phase.tage})` : ""}` : "live"}`);

  /* Tagesdeckel: bisheriger Verbrauch des Tages aus state/kosten.json. */
  const kostenStart = hosting.jsonLesen("kosten.json", { wochen: {}, tage: {} });
  budgetSetzen({
    limitUsd: CONFIG.ki.tagesBudgetUsd,
    bisher: kostenStart.tage?.[datum]?.usd || 0,
    gemessen: kostenStart.tage?.[datum]?.messungen || {},
    speichern: (usd, aufrufe, zwecke, gemessen) => {
      const k = hosting.jsonLesen("kosten.json", { wochen: {}, tage: {} }); k.tage = k.tage || {};
      const alt = kostenStart.tage?.[datum] || {};
      const gesamtZwecke = { ...(alt.zwecke || {}) };
      for (const [z, betrag] of Object.entries(zwecke || {})) gesamtZwecke[z] = Number(((alt.zwecke?.[z] || 0) + betrag).toFixed(4));
      const hoechste = { ...(alt.messungen || {}) };
      for (const [z, betrag] of Object.entries(gemessen || {})) hoechste[z] = Number(Math.max(hoechste[z] || 0, betrag).toFixed(4));
      k.tage[datum] = { usd: Number(usd.toFixed(4)), aufrufe: (alt.aufrufe || 0) + aufrufe, zwecke: gesamtZwecke, messungen: hoechste, stand: new Date().toISOString() };
      hosting.jsonSchreiben("kosten.json", k);
    },
  });
  log(`Tagesbudget: ${tagesStand().toFixed(3)} $ von ${tagesLimit().toFixed(2)} $ verbraucht`);

  const ledger = ledgerLaden(ledgerPfad);
  const pool = await themenpool();
  const poolIndex = new Map(pool.map((t) => [t.id, t]));
  const strategie = hosting.jsonLesen("strategie.json", null);

  /* Plan des Tages – nur einmal erzeugen, danach fortschreiben. Ein Plan aus
     einem Trockenlauf gilt live nicht. */
  let plan = hosting.jsonLesen(`plaene/${datum}.json`, null);
  if (plan && !trocken && (plan.trocken || [...(plan.beitraege || []), ...(plan.stories || [])].some((e) => e.medienId === "trocken"))) {
    log("Tagesplan stammt aus einem Trockenlauf – wird neu erzeugt.");
    plan = null;
  }
  if (!plan) {
    const p = tagesplan(datum, ledger, pool, strategie);
    plan = {
      datum: p.datum, erzeugt: new Date().toISOString(), trocken,
      beitraege: p.beitraege.map((b) => ({ slot: b.slot, zeit: b.zeit, format: b.format, themaId: b.thema?.id || null, themaTitel: b.thema?.titel || null, schwerpunkt: b.schwerpunkt, tiefe: b.tiefe, blickwinkel: b.blickwinkel, cta: b.cta, status: "geplant" })),
      stories: p.stories.map((s) => ({ slot: s.slot, zeit: s.zeit, art: s.art, themaId: s.thema?.id || null, beitragSlot: s.beitragSlot || null, status: "geplant" })),
    };
    planSpeichern(hosting, plan);
    log(`Tagesplan erzeugt: ${plan.beitraege.length} Beitrag, ${plan.stories.length} Stories`);
    if (CONFIG.plan.zeitLernen) { const zs = zeitStatistik(ledger); log(`  Uhrzeiten: ${zs.gesamt ? `aus ${zs.gesamt} gemessenen Beiträgen gelernt` : "noch ohne Messungen"}${zs.gesamt < 20 ? ", weitere Stunden werden ausprobiert" : ""}`); }
  }
  if (nurPlanen) {
    for (const b of plan.beitraege) log(`  ${b.zeit} Beitrag ${b.slot} ${b.format} · ${b.schwerpunkt}/${b.tiefe}/${b.blickwinkel || "recherche"} · CTA ${b.cta} · ${b.themaTitel || "(Aktuelles)"} [${b.status}]`);
    for (const s of plan.stories) log(`  ${s.zeit} Story ${s.slot} ${s.art} ${s.beitragSlot ? "→ " + s.beitragSlot : poolIndex.get(s.themaId)?.titel || "(Web)"} [${s.status}]`);
    return;
  }

  const jetzt = lokaleMinuten();
  const faellig = (e) => e.status !== "veroeffentlicht" && e.status !== "uebersprungen" && (alles || minutenVon(e.zeit) <= jetzt);
  const beitraegeFaellig = plan.beitraege.filter(faellig);
  const storiesFaellig = plan.stories.filter(faellig);

  /* Instagram-Verbindung und Kontingent. */
  const ig = new Instagram({ trockenlauf: trocken, tresorDatei: path.join(hosting.stateDir, "token.enc") });
  let kontingent = { genutzt: 0, maximum: 100 };
  if (!trocken) {
    ig.tresorLaden();
    const { konto, limit } = await ig.pruefen();
    kontingent = limit;
    log(`Verbunden mit @${konto.username} · Kontingent ${limit.genutzt}/${limit.maximum}`);
    if (await ig.tokenAuffrischen()) log("Zugriffstoken verlängert und im Tresor gespeichert.");

    if (CONFIG.interaktion.aktiv) {
      try {
        const freigabe = (medienId) => { const e = (ledger.veroeffentlicht || []).find((x) => x.medienId === medienId); const t = e?.thema ? poolIndex.get(e.thema) : null; return t?.antwortfreigabe === "keine" ? "keine" : "abstrakt"; };
        const r = await kommentareBeantworten(ig, ledger, { log, freigabe });
        if (r.beantwortet) { ledgerSpeichern(ledgerPfad, ledger); hosting.commit(`Kommentare beantwortet ${datum}`); await hosting.push(); }
        log(`Interaktion: ${r.beantwortet} Antworten (${r.geprueft} Beiträge, ${r.kommentare ?? 0} Kommentare geprüft)`);
      } catch (e) { if (e instanceof BudgetFehler) log(`  ⏸ ${e.message}`); else console.error(`  ✗ Interaktion: ${e.message}`); }
    }
    /* Lernschleife: einmal am Tag beim ersten Lauf. */
    const stand = hosting.jsonLesen("lernschleife.json", { datum: null });
    if (stand.datum !== datum) {
      try { await lernschleife(ig, ledger, hosting, { log }); hosting.jsonSchreiben("lernschleife.json", { datum }); ledgerSpeichern(ledgerPfad, ledger); hosting.commit(`Lernschleife ${datum}`); await hosting.push(); }
      catch (e) { console.error(`  ✗ Lernschleife: ${e.message}`); }
    }
    /* Wochenbericht: montags beim ersten Lauf. */
    const berichtStand = hosting.jsonLesen("bericht.json", { woche: null });
    const kw = wochenKennung(datum);
    if (wochentag(new Date(`${datum}T12:00:00Z`)) === CONFIG.bericht.wochentag && berichtStand.woche !== kw) {
      try {
        const kostenWoche = hosting.jsonLesen("kosten.json", { wochen: {} });
        const text = berichtErstellen({ ledger, strategie: hosting.jsonLesen("strategie.json", null), follower: hosting.jsonLesen("follower.json", []), kosten: { ...(kostenWoche.wochen?.[wochenKennung(vorwoche(datum))] || {}), tage: kostenWoche.tage || {}, limit: CONFIG.ki.tagesBudgetUsd }, datum, fehler: hosting.jsonLesen("fehler.json", []).slice(-10), hinweise: berichtHinweise(hosting.jsonLesen("strategie.json", null)) });
        hosting.jsonSchreiben(`berichte/${kw}.txt`, { text });
        const r = await berichtSenden(text, `${CONFIG.marke.anzeigename} · Wochenbericht ${kw}`);
        hosting.jsonSchreiben("bericht.json", { woche: kw, gesendet: r.gesendet, grund: r.grund || null });
        log(`Wochenbericht ${kw}: ${r.gesendet ? "per E-Mail gesendet" : `nur abgelegt (${r.grund})`}`);
      } catch (e) { console.error(`  ✗ Wochenbericht: ${e.message}`); }
    }
  }
  if (!beitraegeFaellig.length && !storiesFaellig.length) { log("Nichts fällig."); return; }
  const frei = () => kontingent.maximum - kontingent.genutzt - CONFIG.instagram.sicherheitsabstandLimit;

  /* Solange der Beitrag des Tages aussteht, bleibt der Gegencheck bezahlbar. */
  const beitragOffen = plan.beitraege.some((b) => b.status === "geplant" && !b.fehler);
  if (beitragOffen && CONFIG.faktencheck.gegencheckAktiv) reservieren(CONFIG.faktencheck.gegencheckReserveUsd, "gegencheck"); else reservierungAufheben();

  const fertigeBeitraege = new Map();
  let fehler = 0;

  /* Story-Texte des Tages zuerst, in einem Aufruf (billig; würden sonst
     ausfallen, wenn der Beitrag das Budget aufbraucht). Die Aktuell-Story
     braucht eine Web-Recherche; sie teilt sie sich mit einem Aktuell-Beitrag. */
  const geschrieben = new Map();
  let rechercheHeute = hosting.jsonLesen(`inhalte/${datum}-recherche.json`, null);
  const eigenstaendig = plan.stories.filter((s) => s.art !== "hinweis" && s.status === "geplant");
  if (eigenstaendig.length && (storiesFaellig.length || beitraegeFaellig.length)) {
    const offen = [];
    for (const s of eigenstaendig) { const v = hosting.jsonLesen(`inhalte/${datum}-${s.slot}.json`, null); if (v) geschrieben.set(s.slot, v); else offen.push(s); }
    if (offen.length) {
      try {
        if (offen.some((s) => s.art === "aktuell") && !rechercheHeute) {
          try {
            const bisher = (ledger.veroeffentlicht || []).filter((e) => e.schwerpunkt === "aktuell").slice(-12).map((e) => e.titel);
            rechercheHeute = await aktuellRecherchieren(datum, bisher);
            hosting.jsonSchreiben(`inhalte/${datum}-recherche.json`, rechercheHeute);
            log(`  Recherche: ${rechercheHeute.titel || "(ohne Titel)"} · ${rechercheHeute.quellen.length} Quellen`);
          } catch (e) { if (e instanceof BudgetFehler) throw e; console.warn(`  ! Recherche: ${e.message.slice(0, 160)} – Aktuell-Story entfällt heute.`); }
        }
        const auftrag = offen.filter((s) => s.art !== "aktuell" || rechercheHeute).map((s) => ({ slot: s.slot, art: s.art, thema: s.themaId ? poolIndex.get(s.themaId) : null, recherche: s.art === "aktuell" ? rechercheHeute : null }));
        for (const s of offen) if (s.art === "aktuell" && !rechercheHeute) s.status = "uebersprungen";
        if (auftrag.length) {
          const neu = await storiesSchreiben(auftrag, datum);
          for (const s of neu) { hosting.jsonSchreiben(`inhalte/${datum}-${s.slot}.json`, s); geschrieben.set(s.slot, s); }
          log(`  Story-Texte für ${neu.length} Slots geschrieben`);
          hosting.commit(`Story-Texte ${datum}`);
          const strittig = neu.filter((s) => s.beanstandet);
          if (strittig.length) try {
            const hinweis = `Die folgenden Entwürfe wurden abgelehnt – formuliere sie vollständig neu:\n${strittig.map((s) => `- Slot ${s.slot}: ${s.beanstandet.join("; ")}`).join("\n")}`;
            log(`  ${strittig.length} Story-Entwürfe beanstandet – zweiter Versuch`);
            const zweite = await storiesSchreiben(auftrag.filter((o) => strittig.some((s) => s.slot === o.slot)), datum, hinweis);
            for (const s of zweite) { const vorher = geschrieben.get(s.slot); if (s.beanstandet && vorher && !vorher.beanstandet) continue; hosting.jsonSchreiben(`inhalte/${datum}-${s.slot}.json`, s); geschrieben.set(s.slot, s); }
            hosting.commit(`Story-Texte ${datum} (zweiter Versuch)`);
          } catch (e) { if (e instanceof BudgetFehler) log(`  ⏸ ${e.message}`); else console.error(`  ✗ Stories nachschreiben: ${e.message}`); }
        }
      } catch (e) {
        if (e instanceof BudgetFehler) log(`  ⏸ ${e.message}`);
        else { fehler++; console.error(`  ✗ Stories schreiben: ${e.message}`); }
      }
    }
  }

  /* Der Beitrag des Tages. */
  for (const eintrag of beitraegeFaellig) {
    if (frei() <= 0) { log("Tageskontingent erschöpft – Beitrag verschoben."); break; }
    const datei = `inhalte/${datum}-${eintrag.slot}.json`;
    try {
      log(`Beitrag ${eintrag.slot} · ${eintrag.schwerpunkt}/${eintrag.tiefe}/${eintrag.blickwinkel || "recherche"} · ${eintrag.themaTitel || "(Aktuelles)"}`);
      let beitrag = hosting.jsonLesen(datei, null);
      if (!beitrag) {
        let thema = eintrag.themaId ? poolIndex.get(eintrag.themaId) : null;
        let recherche = null, check = null;
        if (!thema) {
          if (!rechercheHeute) {
            const bisher = (ledger.veroeffentlicht || []).filter((e) => e.schwerpunkt === "aktuell").slice(-12).map((e) => e.titel);
            rechercheHeute = await aktuellRecherchieren(datum, bisher);
            hosting.jsonSchreiben(`inhalte/${datum}-recherche.json`, rechercheHeute);
            log(`  Recherche: ${rechercheHeute.titel || "(ohne Titel)"} · ${rechercheHeute.quellen.length} Quellen`);
          }
          recherche = rechercheHeute;
        } else {
          /* Web-Gegencheck vor dem Schreiben – ein Thema, das überholt ist,
             wird heute nicht geschrieben, sondern gesperrt und ersetzt. */
          const ausgeschlossen = [];
          for (let runde = 0; runde < 3 && thema; runde++) {
            check = await gegencheckSicher(thema, datum);
            eintrag.gegencheck = { ergebnis: check.ergebnis, notiz: check.notiz.slice(0, 600), quellen: check.quellen };
            log(`  Gegencheck: ${check.ergebnis}${check.suchen ? ` (${check.suchen} Suchen)` : ""}`);
            if (check.ergebnis !== "widerlegt") break;
            themaSperren(ledger, thema, check.notiz); ledgerSpeichern(ledgerPfad, ledger);
            ausgeschlossen.push(thema.id);
            console.warn(`  ! Thema „${thema.titel}“ laut Gegencheck überholt – gesperrt: ${check.notiz.slice(0, 200)}`);
            const ersatz = ersatzThema(eintrag, pool, ledger, datum, ausgeschlossen);
            thema = ersatz?.thema || null;
            if (thema) { eintrag.themaId = thema.id; eintrag.themaTitel = thema.titel; eintrag.blickwinkel = ersatz.blickwinkel; eintrag.schwerpunkt = thema.schwerpunkt; eintrag.tiefe = thema.tiefe; planSpeichern(hosting, plan); log(`  Ersatzthema: ${thema.titel} (${ersatz.blickwinkel})`); }
          }
          if (!thema) throw new Error("Kein Thema, das den Gegencheck besteht.");
        }
        reservierungAufheben();
        try {
          beitrag = await beitragSchreiben({ thema, blickwinkel: eintrag.blickwinkel, cta: eintrag.cta, datum, gegencheck: check, recherche, strategie });
        } catch (e) {
          /* Nicht freigegeben: ein Ersatzthema aus demselben Block versuchen, wenn das Budget reicht. */
          if (!/nicht freigegeben/.test(e.message) || !thema) throw e;
          const ersatz = ersatzThema(eintrag, pool, ledger, datum, [thema.id]);
          if (!ersatz) throw e;
          console.warn(`  ! ${e.message.split("\n")[0]} – Ersatzthema: ${ersatz.thema.titel}`);
          eintrag.themaId = ersatz.thema.id; eintrag.themaTitel = ersatz.thema.titel; eintrag.blickwinkel = ersatz.blickwinkel; eintrag.schwerpunkt = ersatz.thema.schwerpunkt; eintrag.tiefe = ersatz.thema.tiefe;
          planSpeichern(hosting, plan);
          const check2 = await gegencheckSicher(ersatz.thema, datum);
          eintrag.gegencheck = { ergebnis: check2.ergebnis, notiz: check2.notiz.slice(0, 600), quellen: check2.quellen };
          if (check2.ergebnis === "widerlegt") throw new Error(`Ersatzthema laut Gegencheck überholt: ${check2.notiz.slice(0, 200)}`);
          beitrag = await beitragSchreiben({ thema: ersatz.thema, blickwinkel: ersatz.blickwinkel, cta: eintrag.cta, datum, gegencheck: check2, strategie });
        }
        beitrag.slug = `${datum}-${eintrag.slot}`;
        beitrag.gegencheck = eintrag.gegencheck || null;
        hosting.jsonSchreiben(datei, beitrag);
        hosting.commit(`Beitrag geschrieben ${datum} ${eintrag.slot}`);
        log(`  Hook (${beitrag.hookTyp}, ${beitrag.hookPunkte ?? "?"}/50): „${beitrag.folien[0].titel}“ · ${beitrag.folien.length} Folien · Unsicherheit ${beitrag.sicherheit.unsicherheit}`);
      }
      await zweitenCheckNachholen(beitrag, hosting, datei);
      const bilder = await beitragRendern(beitrag, path.join(AUSGABE, "beitraege"));
      const urls = await hosting.veroeffentlichen(bilder, datum, `Beitrag ${datum} ${eintrag.slot}`);
      const caption = `${beitrag.caption}\n\n${beitrag.hashtags.join(" ")}`;
      const schonDa = await ig.bereitsVeroeffentlicht(caption);
      if (schonDa) log(`  Beitrag steht bereits auf Instagram (${schonDa}) – wird nur vermerkt.`);
      const medienId = schonDa || await ig.beitragPosten({ bildUrls: urls, caption });
      kontingent.genutzt += 1;
      eintrag.status = "veroeffentlicht"; eintrag.medienId = medienId; eintrag.veroeffentlicht = new Date().toISOString();
      vermerken(ledger, { datum, art: "beitrag", slot: eintrag.slot, zeit: eintrag.zeit, stunde: Math.floor(lokaleMinuten() / 60), format: eintrag.format, thema: beitrag.themaId, schwerpunkt: beitrag.schwerpunkt, tiefe: beitrag.tiefe, blickwinkel: beitrag.blickwinkel, cta: beitrag.cta, hookTyp: beitrag.hookTyp, hookPunkte: beitrag.hookPunkte ?? null, folien: beitrag.folien.length, titel: beitrag.folien[0].titel, medienId, hashtags: beitrag.hashtags, sicherheit: { rechtsstand: beitrag.sicherheit.rechtsstand, jurisdiktion: beitrag.sicherheit.jurisdiktion, primaerquelle: beitrag.sicherheit.primaerquelle, normen: beitrag.sicherheit.normen, unsicherheit: beitrag.sicherheit.unsicherheit, pruefstatus: beitrag.sicherheit.pruefstatus }, veroeffentlicht: new Date().toISOString() });
      fertigeBeitraege.set(eintrag.slot, beitrag);
      eintrag.kanaele = await verteilen({ art: "beitrag", bildUrls: urls, bildPfade: bilder, titel: beitrag.folien[0].titel, text: caption, hashtags: beitrag.hashtags }, { log, trockenlauf: trocken });
      ledgerSpeichern(ledgerPfad, ledger); planSpeichern(hosting, plan);
      hosting.commit(`Veröffentlicht: Beitrag ${datum} ${eintrag.slot}`); await hosting.push();
      log(`  ✓ ${medienId} (${urls.length} Folien)`);
    } catch (e) {
      if (e instanceof BudgetFehler) { log(`  ⏸ ${e.message}`); continue; }
      if (e instanceof OpenaiFehler) { log(`  ⏸ Faktencheck II nicht erreichbar (${e.message.slice(0, 120)}) – Beitrag wartet auf den nächsten Lauf.`); continue; }
      fehler++;
      eintrag.fehler = `${new Date().toISOString()} ${e.message}`;
      planSpeichern(hosting, plan);
      console.error(`  ✗ Beitrag ${eintrag.slot}: ${e.message}`);
    }
  }

  /* Stories. */
  for (const eintrag of storiesFaellig) {
    if (frei() <= 0) { log("Tageskontingent erschöpft – Story verschoben."); break; }
    try {
      let story;
      if (eintrag.art === "hinweis") {
        const beitrag = fertigeBeitraege.get(eintrag.beitragSlot) || hosting.jsonLesen(`inhalte/${datum}-${eintrag.beitragSlot}.json`, null);
        const b = plan.beitraege.find((x) => x.slot === eintrag.beitragSlot);
        if (!beitrag || b?.status !== "veroeffentlicht") { log(`Story ${eintrag.slot}: Beitrag ${eintrag.beitragSlot} noch nicht veröffentlicht – später.`); continue; }
        story = hinweisAusBeitrag(beitrag, eintrag.slot);
      } else {
        story = geschrieben.get(eintrag.slot);
        if (!story) continue;
        if (story.openaiAusstehend) {
          const liste = [...geschrieben.values()].filter((s) => s.openaiAusstehend);
          await zweitenCheckNachholen({ stories: liste }, hosting, null);
          for (const s of liste) hosting.jsonSchreiben(`inhalte/${datum}-${s.slot}.json`, s);
        }
        if (story.beanstandet) {
          const erneut = pruefeBeitrag({ stories: [story] });
          const fachlich = story.beanstandet.some((b) => /Prüfer|→/.test(b));
          if (erneut.ok && !fachlich) { delete story.beanstandet; hosting.jsonSchreiben(`inhalte/${datum}-${eintrag.slot}.json`, story); }
          else { log(`Story ${eintrag.slot} beanstandet: ${story.beanstandet.join("; ")} – übersprungen.`); eintrag.status = "uebersprungen"; continue; }
        }
      }
      const bild = await storyRendern(story, path.join(AUSGABE, "stories", `${datum}-${eintrag.slot}-${story.art}.jpg`));
      const [url] = await hosting.veroeffentlichen([bild], datum, `Story ${datum} ${eintrag.slot}`);
      const medienId = await ig.storyPosten({ bildUrl: url });
      kontingent.genutzt += 1;
      eintrag.status = "veroeffentlicht"; eintrag.medienId = medienId; eintrag.veroeffentlicht = new Date().toISOString();
      vermerken(ledger, { datum, art: "story", slot: eintrag.slot, storyArt: story.art, thema: story.themaId || eintrag.themaId || null, schwerpunkt: story.schwerpunkt, titel: story.titel || story.text || "", medienId });
      ledgerSpeichern(ledgerPfad, ledger); planSpeichern(hosting, plan);
      hosting.commit(`Veröffentlicht: Story ${datum} ${eintrag.slot}`); await hosting.push();
      log(`  ✓ Story ${eintrag.slot} ${story.art} → ${medienId}`);
    } catch (e) {
      if (e instanceof BudgetFehler) { log(`  ⏸ ${e.message}`); continue; }
      if (e instanceof OpenaiFehler) { log(`  ⏸ Faktencheck II nicht erreichbar – Story wartet auf den nächsten Lauf.`); continue; }
      fehler++;
      eintrag.fehler = `${new Date().toISOString()} ${e.message}`;
      planSpeichern(hosting, plan);
      console.error(`  ✗ Story ${eintrag.slot}: ${e.message}`);
    }
  }

  /* Kosten der Woche und Fehler für den Bericht festhalten. */
  const kosten = kostenAbschluss();
  if (kosten.aufrufe) {
    const k = hosting.jsonLesen("kosten.json", { wochen: {} });
    const kw = wochenKennung(datum);
    const w = k.wochen[kw] || { usd: 0, aufrufe: 0 };
    w.usd += kosten.usd; w.aufrufe += kosten.aufrufe;
    k.wochen[kw] = w;
    hosting.jsonSchreiben("kosten.json", k);
  }
  const fehlerListe = hosting.jsonLesen("fehler.json", []);
  for (const e of [...plan.beitraege, ...plan.stories]) if (e.fehler && !fehlerListe.includes(e.fehler)) fehlerListe.push(e.fehler);
  hosting.jsonSchreiben("fehler.json", fehlerListe.slice(-50));

  const geloescht = hosting.aufraeumen();
  if (geloescht) hosting.commit(`Alte Bilder entfernt (${geloescht} Tage)`);
  planSpeichern(hosting, plan);
  hosting.commit(`Zustand ${datum}`);
  await hosting.push();
  if (trocken && ig.protokoll.length) { fs.mkdirSync(AUSGABE, { recursive: true }); fs.writeFileSync(path.join(AUSGABE, "trockenlauf.json"), JSON.stringify(ig.protokoll, null, 2)); }
  log(`Fertig · ${plan.beitraege.filter((b) => b.status === "veroeffentlicht").length}/${plan.beitraege.length} Beitrag, ${plan.stories.filter((s) => s.status === "veroeffentlicht").length}/${plan.stories.length} Stories · Kosten heute ${tagesStand().toFixed(3)} $ · Fehler: ${fehler}`);
  if (fehler) process.exitCode = 1;
}

/* Gegencheck, der den Tag nicht stoppt: Fällt die Websuche aus, gilt „unklar“
   ohne Notiz – der Autor schreibt vorsichtig, beide Faktenchecks laufen ohnehin. */
async function gegencheckSicher(thema, datum) {
  try { return await gegencheck(thema, datum); }
  catch (e) {
    if (e instanceof BudgetFehler) throw e;
    console.warn(`  ! Gegencheck nicht möglich: ${e.message.slice(0, 160)}`);
    return { ergebnis: "unklar", notiz: "", quellen: [], suchen: 0, ausgefallen: true };
  }
}

function wochenKennung(iso) {
  const d = new Date(`${iso}T12:00:00Z`);
  const tag = (d.getUTCDay() + 6) % 7;
  d.setUTCDate(d.getUTCDate() - tag + 3);
  const erster = new Date(Date.UTC(d.getUTCFullYear(), 0, 4));
  const kw = 1 + Math.round(((d - erster) / 86400000 - 3 + ((erster.getUTCDay() + 6) % 7)) / 7);
  return `${d.getUTCFullYear()}-W${String(kw).padStart(2, "0")}`;
}
const vorwoche = (iso) => new Date(new Date(`${iso}T12:00:00Z`).getTime() - 7 * 86400000).toISOString().slice(0, 10);

function berichtHinweise(strategie = null) {
  const h = [];
  const profil = strategie?.profil;
  if (profil && !profil.bio) h.push("Profil ohne Bio – Vorschlag in SETUP.md (Abschnitt Profil).");
  if (profil && !profil.bild) h.push("Kein Profilbild gesetzt.");
  if (profil && profil.name && profil.name !== CONFIG.marke.anzeigename) h.push(`Anzeigename ist „${profil.name}“, vorgesehen ist „${CONFIG.marke.anzeigename}“.`);
  if (!CONFIG.openai.key) h.push("OPENAI_API_KEY fehlt – der zweite Faktencheck läuft nicht, Beiträge bleiben liegen.");
  if (!CONFIG.verteilen.threads.token) h.push("Threads nicht verbunden – kostenlose Zweitreichweite mit demselben Meta-Login.");
  if ((strategie?.follower ?? 0) < 100) h.push("Unter 100 Followern greift der Algorithmus kaum: Beiträge im persönlichen Netzwerk teilen, LinkedIn-Verweis auf das Profil.");
  return h;
}

main()
  .catch((e) => {
    console.error(e);
    if (/access blocked|code 200\b/i.test(e.message || "")) console.error("\nMeta hat den API-Zugriff der App gesperrt („API access blocked“). Das lässt sich nur im Meta-App-Dashboard klären. Der Bot versucht es stündlich weiter.");
    process.exitCode = 1;
  })
  .finally(() => browserBeenden());
