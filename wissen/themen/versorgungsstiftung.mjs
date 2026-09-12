/* Q1 · Finanzielle Absicherung, Zweckgestaltung, Grundstockvermögen */
export default {
  id: "versorgungsstiftung",
  titel: "Die Familie versorgen — nach Regeln, nicht nach Laune",
  bereich: "familienstiftung",
  kurz: "Eine Versorgungsstiftung zahlt aus den Erträgen an die Familie; die Satzung bestimmt, wer, wann, wofür — und ob der Vermögensstamm dabei unangetastet bleibt.",
  normen: ["§ 80 Abs. 1 BGB", "§ 83b BGB", "§ 83c Abs. 1 BGB", "§ 81 Abs. 1 Nr. 1 BGB"],
  kern: [
    "Der häufigste Stiftungszweck ist die Unterstützung der Begünstigten — durch Geld, Nutzungsüberlassung von Stiftungsvermögen oder Übertragung einzelner Gegenstände.",
    "Leistungen kommen aus den Erträgen; das Grundstockvermögen ist ungeschmälert zu erhalten und getrennt vom sonstigen Vermögen zu verwalten.",
    "Voraussetzungslose Versorgung ist zulässig, aber die Praxis knüpft Leistungen an Anlässe: Ausbildung, Notlage, Hochzeit, Unternehmensgründung.",
    "Der Stifter kann Zwecke in eine Reihenfolge bringen oder einen Zweck erst nach Erfüllung eines anderen freischalten — die Sukzessivstiftung.",
    "Was 'Erhalt' des Grundstocks heisst — Nominalwert, Kaufkraft, Ertragskraft — lässt das Gesetz offen; die Satzung sollte es sagen, gern mit Inflationsausgleich und Anlagerichtlinien.",
    "Ein Teil des Grundstocks darf verbraucht werden, wenn die Satzung das zulässt und die Stiftung ihn in absehbarer Zeit wieder auffüllt.",
  ],
  einsatzfelder: [
    { situation: "Grosseltern wollen die Ausbildung aller Enkel sichern — auch derer, die noch nicht geboren sind.", warum: "Die Satzung kann 'sämtliche Abkömmlinge' begünstigen und Leistungen an Ausbildungszwecke knüpfen. Steuerlich hat das einen Preis beim Freibetrag." },
    { situation: "Ein Vermögen soll die Familie tragen, aber niemanden zum Nichtstun verleiten.", warum: "Leistungen an Voraussetzungen zu binden — Abschluss, Gründung, Notlage — ist zulässig und üblich. Die Stiftung wird zum Förderer, nicht zum Versorger." },
  ],
  beispiele: [
    { konstellation: "Eine Familie mit Wertpapiervermögen im zweistelligen Millionenbereich und fünf Enkeln zwischen 3 und 19 Jahren.", gestaltung: "Die Satzung sieht Ausbildungsstipendien bis zum Abschluss, Gründungsdarlehen aus dem sonstigen Vermögen und Notfallhilfen nach Ermessen vor. Anlagerichtlinie: Realwerterhalt, Ausschüttung maximal der Ertrag der letzten drei Jahre.", pointe: "Niemand hat einen Anspruch — jeder hat eine Chance. Und der Stamm bleibt für die Ururenkel." },
  ],
  fehler: [
    { fehler: "Die Satzung schweigt zur Frage, was 'Vermögenserhalt' bedeutet.", richtig: "Dann streitet man später über Nominal- oder Realwert. Die Satzung sollte den Massstab nennen und einen Inflationsausgleich vorsehen.", norm: "§ 83c BGB" },
    { fehler: "Begünstigte bekommen feste Ansprüche, 'damit sie sich darauf verlassen können'.", richtig: "Feste Ansprüche sind pfändbar und fallen in Zugewinn und Nachlass. Ermessen der Organe ist der Kern des Schutzes." },
  ],
  merksatz: "Eine gute Versorgungsstiftung gibt Chancen, keine Ansprüche.",
  gewicht: { mandat: 3, reichweite: 3 },
  antwortfreigabe: "abstrakt",
  stand: "2026-09-12",
  quellen: ["Q1 Abschn. 3.1, 4.1.2 (a), 6"],
  verwandt: ["stiftung-warum", "steuerklassenprivileg", "destinataer-besteuerung", "verbrauchsstiftung"],
};
