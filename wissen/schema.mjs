/* ==========================================================================
   Schema eines Themas.

   Ein Thema ist KEIN fertiger Beitrag, sondern ein Skelett: Titel, Normen,
   Prüfgedanken, Merksatz. Der Autor (social/src/autor.mjs) bekommt nur dieses
   Skelett und formuliert jeden Beitrag neu; die Eigenständigkeitsprüfung
   stellt anschliessend sicher, dass nichts wörtlich übernommen wurde.

   Was NIE in einen Beitrag darf und deshalb getrennt steht:
     - `quellen`   Fundstellen, Seitenzahlen, Skript- und Vortragsbezüge.
                   Nur für die interne Pflege. Der Autor sieht sie nicht.
     - echte Mandate. Sachverhalte werden frei erfunden (§ 43a Abs. 2 BRAO),
       siehe BERUFSRECHT.md. Das Schema hat dafür bewusst kein Feld.

   Welche Beitragsformate ein Thema bedienen kann, ergibt sich aus den
   optionalen Blöcken — `formateFuer()` am Ende dieser Datei leitet das ab.
   Ein Thema ohne optionale Blöcke trägt nur die einfachen Formate.
   ========================================================================== */

import { BEREICHE } from "./taxonomie.mjs";

export const FELDER = {
  /* --- Pflicht ------------------------------------------------------- */
  id:          { pflicht: true,  zweck: "Stabiler Schlüssel, kebab-case. Wird nie geändert — das Ledger merkt sich daran, was schon lief." },
  titel:       { pflicht: true,  zweck: "Wie das Thema intern heisst. Nicht die Überschrift des Beitrags — die schreibt der Autor." },
  bereich:     { pflicht: true,  zweck: "Schlüssel aus taxonomie.mjs → BEREICHE." },
  kurz:        { pflicht: true,  zweck: "Ein Satz: worum es geht. Der Autor baut daraus den Aufhänger." },
  normen:      { pflicht: true,  zweck: "Die tragenden Vorschriften, in Zitierweise. Mindestens eine." },
  kern:        { pflicht: true,  zweck: "Die Prüfgedanken, je ein Satz. Mindestens zwei. Das ist der fachliche Kern." },
  merksatz:    { pflicht: true,  zweck: "Ein Satz, der hängen bleibt. Wird auf der Merke-Folie verwendet." },
  gewicht:     { pflicht: true,  zweck: "{ mandat: 1–3, reichweite: 1–3 } — siehe taxonomie.mjs." },
  stand:       { pflicht: true,  zweck: "ISO-Datum der letzten fachlichen Durchsicht. Älter als STAND_MAX_TAGE → sperrt das Thema." },
  antwortfreigabe: { pflicht: true, zweck: "\"abstrakt\" = der Bot darf abstrakte Kommentarfragen dazu beantworten. \"keine\" = nur Standardhinweis. Siehe BERUFSRECHT.md." },

  /* --- Optional: jeder Block schaltet ein Beitragsformat frei -------- */
  mythos:            { pflicht: false, zweck: "{ behauptung, richtigstellung } — schaltet das Format \"mythos\" frei, den stärksten Reichweitenhebel." },
  fehler:            { pflicht: false, zweck: "[{ fehler, richtig, norm? }] — schaltet \"fehlerfalle\" frei." },
  gegenueberstellung:{ pflicht: false, zweck: "{ links, rechts } mit je { label, punkte: [{ krit, wert, norm? }] } — schaltet \"vergleich\" frei." },
  schritte:          { pflicht: false, zweck: "[{ titel, hinweis, norm? }] — schaltet \"schema\" frei." },
  zahlen:            { pflicht: false, zweck: "[{ wert, bedeutung, norm? }] — belegbare Zahlen für Stories (\"Zahl des Tages\")." },
  quellen:           { pflicht: false, zweck: "Fundstellen für die interne Pflege. Erreicht den Autor NIE." },
  verwandt:          { pflicht: false, zweck: "IDs verwandter Themen — der Planer vermeidet sie in derselben Woche." },
};

const istText = (v) => typeof v === "string" && v.trim().length > 0;
const istListe = (v, min = 1) => Array.isArray(v) && v.length >= min;

/**
 * Prüft ein Thema gegen das Schema. Gibt eine Liste von Fehlertexten zurück;
 * leere Liste = in Ordnung. Bewusst streng: Ein Thema, das hier durchrutscht,
 * landet ungeprüft in einem veröffentlichten Beitrag.
 */
export function pruefeThema(t, quelle = "?") {
  const f = [];
  const bei = (s) => `${quelle}: ${s}`;

  if (!istText(t?.id)) f.push(bei("`id` fehlt oder ist leer."));
  else if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(t.id)) f.push(bei(`\`id\` „${t.id}" ist nicht kebab-case.`));

  if (!istText(t?.titel)) f.push(bei("`titel` fehlt."));
  if (!istText(t?.kurz)) f.push(bei("`kurz` fehlt."));
  else if (t.kurz.length > 220) f.push(bei("`kurz` ist länger als ein Satz (über 220 Zeichen)."));

  if (!istText(t?.bereich)) f.push(bei("`bereich` fehlt."));
  else if (!BEREICHE[t.bereich]) f.push(bei(`\`bereich\` „${t.bereich}" steht nicht in taxonomie.mjs. Möglich: ${Object.keys(BEREICHE).join(", ")}`));

  if (!istListe(t?.normen, 1)) f.push(bei("`normen` braucht mindestens eine Vorschrift."));
  else t.normen.forEach((n, i) => { if (!istText(n)) f.push(bei(`\`normen[${i}]\` ist kein Text.`)); });

  if (!istListe(t?.kern, 2)) f.push(bei("`kern` braucht mindestens zwei Prüfgedanken."));
  else t.kern.forEach((k, i) => { if (!istText(k)) f.push(bei(`\`kern[${i}]\` ist kein Text.`)); });

  if (!istText(t?.merksatz)) f.push(bei("`merksatz` fehlt."));

  const g = t?.gewicht;
  for (const achse of ["mandat", "reichweite"]) {
    const v = g?.[achse];
    if (!Number.isInteger(v) || v < 1 || v > 3) f.push(bei(`\`gewicht.${achse}\` muss 1, 2 oder 3 sein (ist: ${JSON.stringify(v)}).`));
  }

  if (!istText(t?.stand)) f.push(bei("`stand` fehlt (ISO-Datum der letzten Durchsicht)."));
  else if (!/^\d{4}-\d{2}-\d{2}$/.test(t.stand)) f.push(bei(`\`stand\` „${t.stand}" ist kein ISO-Datum (JJJJ-MM-TT).`));
  else if (Number.isNaN(Date.parse(t.stand))) f.push(bei(`\`stand\` „${t.stand}" ist kein gültiges Datum.`));

  if (!["abstrakt", "keine"].includes(t?.antwortfreigabe)) {
    f.push(bei("`antwortfreigabe` muss \"abstrakt\" oder \"keine\" sein — siehe BERUFSRECHT.md."));
  }

  if (t?.mythos != null) {
    if (!istText(t.mythos.behauptung)) f.push(bei("`mythos.behauptung` fehlt."));
    if (!istText(t.mythos.richtigstellung)) f.push(bei("`mythos.richtigstellung` fehlt."));
  }

  if (t?.fehler != null) {
    if (!istListe(t.fehler, 1)) f.push(bei("`fehler` ist gesetzt, aber leer."));
    else t.fehler.forEach((e, i) => {
      if (!istText(e?.fehler)) f.push(bei(`\`fehler[${i}].fehler\` fehlt.`));
      if (!istText(e?.richtig)) f.push(bei(`\`fehler[${i}].richtig\` fehlt.`));
    });
  }

  if (t?.schritte != null) {
    if (!istListe(t.schritte, 2)) f.push(bei("`schritte` braucht mindestens zwei Schritte, sonst ist es kein Schema."));
    else t.schritte.forEach((s, i) => {
      if (!istText(s?.titel)) f.push(bei(`\`schritte[${i}].titel\` fehlt.`));
      if (!istText(s?.hinweis)) f.push(bei(`\`schritte[${i}].hinweis\` fehlt.`));
    });
  }

  if (t?.gegenueberstellung != null) {
    for (const seite of ["links", "rechts"]) {
      const s = t.gegenueberstellung[seite];
      if (!istText(s?.label)) { f.push(bei(`\`gegenueberstellung.${seite}.label\` fehlt.`)); continue; }
      if (!istListe(s?.punkte, 2)) { f.push(bei(`\`gegenueberstellung.${seite}.punkte\` braucht mindestens zwei Punkte.`)); continue; }
      s.punkte.forEach((p, i) => {
        if (!istText(p?.krit)) f.push(bei(`\`gegenueberstellung.${seite}.punkte[${i}].krit\` fehlt.`));
        if (!istText(p?.wert)) f.push(bei(`\`gegenueberstellung.${seite}.punkte[${i}].wert\` fehlt.`));
      });
    }
    const l = t.gegenueberstellung.links?.punkte?.map((p) => p.krit);
    const r = t.gegenueberstellung.rechts?.punkte?.map((p) => p.krit);
    if (Array.isArray(l) && Array.isArray(r) && (l.length !== r.length || l.some((k, i) => k !== r[i]))) {
      f.push(bei("`gegenueberstellung`: beide Seiten müssen dieselben Kriterien in derselben Reihenfolge tragen — sonst steht die Tabelle versetzt."));
    }
  }

  if (t?.zahlen != null) {
    t.zahlen.forEach((z, i) => {
      if (!istText(z?.wert)) f.push(bei(`\`zahlen[${i}].wert\` fehlt.`));
      if (!istText(z?.bedeutung)) f.push(bei(`\`zahlen[${i}].bedeutung\` fehlt.`));
    });
  }

  return f;
}

/**
 * Welche Beitragsformate dieses Thema tragen kann. Der Planer wählt daraus.
 * Die einfachen Formate kann jedes vollständige Thema.
 */
export function formateFuer(t) {
  const formate = ["frage", "norm", "merksatz"];
  if (t?.mythos) formate.push("mythos");
  if (istListe(t?.fehler, 1)) formate.push("fehlerfalle");
  if (istListe(t?.schritte, 2)) formate.push("schema");
  if (t?.gegenueberstellung) formate.push("vergleich");
  if (istListe(t?.zahlen, 1)) formate.push("zahl");
  return formate;
}

/** Tage seit der letzten fachlichen Durchsicht. */
export function standAlterTage(t, heute = new Date()) {
  const d = Date.parse(t?.stand);
  if (Number.isNaN(d)) return Infinity;
  return Math.floor((heute.getTime() - d) / 86_400_000);
}
