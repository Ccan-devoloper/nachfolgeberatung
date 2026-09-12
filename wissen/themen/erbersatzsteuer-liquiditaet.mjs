/* Q9 · Kap. 5.4 */
export default {
  id: "erbersatzsteuer-liquiditaet",
  titel: "Dreissig Jahre Vorlauf — und trotzdem überrascht",
  bereich: "erbst",
  kurz: "Der Termin der Erbersatzsteuer steht mit dem Tag der Errichtung fest; wer ihn erst im dreissigsten Jahr rechnet, verkauft unter Druck — die Liquiditätsleiter beginnt zehn Jahre vorher.",
  normen: ["§ 1 Abs. 1 Nr. 4 ErbStG", "§ 24 ErbStG", "§ 13a ErbStG"],
  kern: [
    "Anders als ein Todesfall ist der Stichtag planbar: Er liegt exakt dreissig Jahre nach dem ersten Übergang und wiederholt sich im selben Rhythmus.",
    "Die Verrentung auf dreissig Jahresbeträge ist keine zinslose Stundung — das Gesetz rechnet mit 5,5 Prozent. Sie gehört gegen Liquiditätsreserve, Ausschüttungsverzicht, Bankfinanzierung und rechtzeitige Umschichtung gerechnet, nicht automatisch gewählt.",
    "Zehn Jahre vor dem Stichtag beginnt die Arbeit mit Szenarien: Welche Grössenordnung ist zu erwarten, ist das Unternehmensvermögen noch begünstigungsfähig?",
    "Fünf bis zehn Jahre vorher werden Liquiditätsquote und Fälligkeiten illiquider Anlagen angepasst — danach lässt sich ein Private-Equity-Fonds nicht mehr zeitlich verschieben.",
    "In den letzten drei Jahren geht es nur noch um Ausführung: aktuelle Bewertung, Verwaltungsvermögensanalyse, Vergleich mit der Verrentung, Zahlungsplan.",
  ],
  ablauf: [
    { schritt: "Zehn Jahre und früher: Grössenordnung kennen", hinweis: "Regelmässige Steuerwert-Szenarien, Begünstigungsfähigkeit beobachten — keine Scheingenauigkeit, nur die Dimension." },
    { schritt: "Fünf bis zehn Jahre: Anlagen ausrichten", hinweis: "Liquiditätsquote anheben, Fälligkeiten illiquider Anlagen auf den Stichtag hin planen." },
    { schritt: "Drei bis fünf Jahre: Reserve und Linien", hinweis: "Steuerreserve aufbauen, Kreditlinien verhandeln, Ausschüttungen an die Destinatäre planen." },
    { schritt: "Ein bis drei Jahre: rechnen und entscheiden", hinweis: "Bewertung, Verwaltungsvermögen, Verschonung und der Vergleich mit der Verrentung — dann steht der Zahlungsplan.", norm: "§ 24 ErbStG" },
    { schritt: "Nach dem Stichtag: neu ausrichten", hinweis: "Zahlung oder Verrentung, Rebalancing, Dokumentation — und die nächste Leiter beginnt." },
  ],
  einsatzfelder: [
    { situation: "Eine Stiftung aus den 1990er Jahren nähert sich ihrem ersten Stichtag.", warum: "Die Struktur wurde nie auf diesen Tag hin gebaut — jetzt entscheidet sich, ob Substanz verkauft werden muss." },
    { situation: "Eine Stiftung wird gerade errichtet.", warum: "Der Termin steht ab heute fest. Eine Rückstellung von Beginn an kostet wenig und löst das Problem." },
  ],
  fehler: [
    { fehler: "Die Verrentung wird als kostenlose Stundung verstanden.", richtig: "Die Jahresbeträge enthalten Tilgung und Zins; das Gesetz rechnet mit 5,5 Prozent. Gegen die eigenen Finanzierungskosten abwägen.", norm: "§ 24 ErbStG" },
    { fehler: "Kurz vor dem Stichtag wird die Struktur umgebaut, um Verschonung zu erreichen.", richtig: "Ein später Strukturwechsel kann Ertrag- oder Grunderwerbsteuer auslösen, und die Nachsteuerfristen laufen ohnehin weiter." },
  ],
  zahlen: [
    { wert: "30 Jahre", bedeutung: "Abstand zwischen zwei Erbersatzsteuerterminen — ab Errichtung planbar.", norm: "§ 1 Abs. 1 Nr. 4 ErbStG" },
    { wert: "5,5 %", bedeutung: "Zinsanteil, mit dem die Verrentung kalkuliert wird.", norm: "§ 24 ErbStG" },
  ],
  merksatz: "Die Erbersatzsteuer ist der einzige Steuertermin, den man dreissig Jahre im Voraus kennt — und der einzige, den Stiftungen regelmässig verschlafen.",
  gewicht: { mandat: 3, reichweite: 2 },
  antwortfreigabe: "keine",
  stand: "2026-09-13",
  quellen: ["Q9 Kap. 5.4", "Q9 Beispiel 4"],
  verwandt: ["erbersatzsteuer", "anlagerichtlinie-stiftung", "konzentrationsrisiko-stiftung", "grosserwerb-verschonungsbedarf"],
};
