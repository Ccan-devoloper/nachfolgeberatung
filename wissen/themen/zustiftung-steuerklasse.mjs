/* Q2 · Spätere Zustiftungen und sonstige Erwerbe */
export default {
  id: "zustiftung-steuerklasse",
  titel: "Nachschenken ist teurer — die Zustiftung",
  bereich: "erbst",
  kurz: "Das Steuerklassenprivileg gilt nur für die Erstausstattung; wer später zustiftet, zahlt nach Klasse III — es sei denn, die gestreckte Ausstattung war von Anfang an verbindlich angelegt.",
  normen: ["§ 15 Abs. 2 S. 1 ErbStG", "§ 7 Abs. 1 Nr. 1 ErbStG", "§ 14 ErbStG", "§§ 13a, 13b ErbStG"],
  kern: [
    "Eine spätere Zuwendung ist kein Nachtrag zur Erstausstattung, sondern ein eigener Erwerb nach den allgemeinen Tatbeständen.",
    "Nach der BFH-Rechtsprechung gilt das Steuerklassenprivileg für Zustiftungen grundsätzlich nicht — Klasse III, 20.000 Euro Freibetrag, bis zu 50 Prozent.",
    "Ausnahme: sachliche Befreiungen, vor allem für begünstigtes Unternehmensvermögen.",
    "Mehrere Erwerbe vom selben Zuwendenden innerhalb von zehn Jahren werden zusammengerechnet.",
    "Ein zweiter Ausweg ist die Schwesterstiftung: eine neue Stiftung mit denselben Organen und derselben Satzung, deren Erstausstattung wieder das Privileg geniesst.",
    "Anders liegt es bei einer im Stiftungsgeschäft schon verbindlich angelegten, nur technisch gestreckten Erstausstattung — das sollte vor der Anerkennung dokumentiert und im Zweifel durch verbindliche Auskunft abgesichert sein.",
  ],
  mythos: {
    behauptung: "Ich stifte erstmal klein und lege später nach.",
    richtigstellung: "Das Nachlegen kostet ein Vielfaches: Die Erstausstattung geniesst das Steuerklassenprivileg, jede spätere Zustiftung läuft nach Klasse III. Wer in Etappen stiften will, muss die Etappen im Stiftungsgeschäft verbindlich anlegen.",
  },
  beispiele: [
    { konstellation: "Ein Stifter überträgt zunächst 1 Million Euro und will nach einem geplanten Unternehmensverkauf weitere 8 Millionen nachlegen.", gestaltung: "Variante A, ungeplant: 8 Millionen nach Klasse III. Variante B: Das Stiftungsgeschäft verpflichtet den Stifter verbindlich zur Übertragung des Verkaufserlöses; verbindliche Auskunft vor Anerkennung.", pointe: "Dieselben 9 Millionen — der Unterschied ist ein Absatz im Stiftungsgeschäft und ein Antrag beim Finanzamt." },
  ],
  fehler: [
    { fehler: "Die Zuwendung wird als Zustiftung zum Grundstock erklärt in der Annahme, das ändere die Steuerklasse.", richtig: "Zivilrechtliche Zuordnung ist steuerlich gleichgültig. Grundstock oder sonstiges Vermögen — die Zustiftung bleibt Klasse III.", norm: "§ 83b Abs. 2 BGB" },
  ],
  merksatz: "Bei einer Stiftung zählt der erste Schritt — alle weiteren zahlen den vollen Preis.",
  gewicht: { mandat: 3, reichweite: 2 },
  antwortfreigabe: "abstrakt",
  stand: "2026-09-12",
  quellen: ["Q2 Spätere Zustiftungen und sonstige Erwerbe"],
  verwandt: ["steuerklassenprivileg", "stiftung-errichtung-ablauf", "betriebsvermoegen-verschonung"],
};
