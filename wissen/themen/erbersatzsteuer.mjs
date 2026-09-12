/* Q1 · Nachteile; Q2 · Ersatzerbschaftsteuer, Verrentung, § 26 */
export default {
  id: "erbersatzsteuer",
  titel: "Erbersatzsteuer — der Termin, den man zur Errichtung schon kennt",
  bereich: "erbst",
  kurz: "Weil die Stiftung nie stirbt, besteuert das Gesetz sie alle 30 Jahre so, als ginge ihr Vermögen auf zwei Kinder über — mit doppeltem Freibetrag, Steuerklasse I und Verschonung für Betriebsvermögen.",
  normen: ["§ 1 Abs. 1 Nr. 4 ErbStG", "§ 9 Abs. 1 Nr. 4 ErbStG", "§ 15 Abs. 2 S. 3 ErbStG", "§ 16 Abs. 1 Nr. 2 ErbStG", "§ 24 ErbStG", "§ 26 ErbStG", "§ 28a Abs. 7 ErbStG"],
  kern: [
    "Das Vermögen einer inländischen Familienstiftung unterliegt alle 30 Jahre seit dem ersten Vermögensübergang der Erbersatzsteuer; Steuerschuldnerin ist die Stiftung.",
    "Erfasst ist alles, was am Stichtag da ist — Dotation, Zustiftungen, thesaurierte Erträge, Wertsteigerungen; künftige Leistungspflichten an Begünstigte mindern nicht.",
    "Berechnet wird wie beim Übergang auf zwei Kinder: doppelter Kinderfreibetrag, derzeit 800.000 Euro, und der Steuersatz der Klasse I für die Hälfte des Vermögens.",
    "Die Verschonung für Betriebsvermögen gilt auch hier; ebenso die Verschonungsbedarfsprüfung bei Grosserwerben — mit zehnjähriger Nachbeobachtung, die die Stiftung selbst trifft.",
    "Auf Antrag kann in 30 gleichen Jahresbeträgen gezahlt werden — die enthalten aber 5,5 Prozent Zins; das ist ein Liquiditätsinstrument, kein Geschenk.",
    "Wird die Stiftung innerhalb der Verrentung aufgelöst, sind die offenen Beträge mit dem Kapitalwert abzulösen.",
    "Nur rechtsfähige Stiftungen sind erfasst: Treuhandstiftungen nicht, und nach dem BFH auch nicht eine ausländische Stiftung, die in Deutschland nicht als rechtsfähig anerkannt ist.",
  ],
  mythos: {
    behauptung: "Eine Familienstiftung zahlt keine Erbschaftsteuer, weil sie nicht stirbt.",
    richtigstellung: "Genau deshalb gibt es die Erbersatzsteuer. Das Bundesverfassungsgericht hat sie schon 1983 gebilligt: Wo Vermögen der Erbfolge dauerhaft entzogen wird, sucht das Steuerrecht einen Ersatz für den Generationenwechsel — alle 30 Jahre.",
  },
  einsatzfelder: [
    { situation: "Die Frage, ob eine Stiftung sich gegenüber dem Vererben lohnt.", warum: "Bei zwei Kindern und gleichmässigem Generationenabstand ist die Erbersatzsteuer ungefähr das, was ohnehin anfiele — nur planbar und ohne Streit. Bei einem Kind oder häufigen Erbfällen kann sie günstiger sein, bei vielen Kindern teurer." },
  ],
  beispiele: [
    { konstellation: "Eine Stiftung hält seit 28 Jahren ein Immobilienportfolio und eine Unternehmensbeteiligung.", gestaltung: "Zwei Jahre vor dem Stichtag prüft der Vorstand Verwaltungsvermögensquote, Lohnsummen und verfügbares Vermögen, stellt Liquidität für die Steuer auf das nicht begünstigte Vermögen bereit und beantragt die Verrentung nur für den Teil, für den die Finanzierung teurer wäre als 5,5 Prozent.", pointe: "Wer im 28. Jahr anfängt, gestaltet. Wer im 30. anfängt, zahlt." },
  ],
  fehler: [
    { fehler: "Die Ersatzerbschaftsteuer wird nicht in die Liquiditätsplanung aufgenommen.", richtig: "Der Termin steht mit der Errichtung fest. Er gehört in eine mehrjährige Anlage- und Ausschüttungsplanung, nicht ins letzte Jahr." },
    { fehler: "Kurz vor dem Stichtag wird die Struktur umgebaut, um Verschonung zu erreichen.", richtig: "Ein Strukturwechsel kurz vor dem Stichtag kann Ertrag- oder Grunderwerbsteuer auslösen — und die Nachsteuerfristen laufen ohnehin." },
    { fehler: "Die Verrentung wird als zinslose Stundung verstanden.", richtig: "5,5 Prozent. Gegen die eigenen Finanzierungskosten abwägen.", norm: "§ 24 ErbStG" },
  ],
  zahlen: [
    { wert: "30 Jahre", bedeutung: "Der Rhythmus der Erbersatzsteuer — seit dem ersten Vermögensübergang auf die Stiftung.", norm: "§ 9 Abs. 1 Nr. 4 ErbStG" },
    { wert: "800.000 €", bedeutung: "Doppelter Kinderfreibetrag aus der Fiktion zweier Kinder.", norm: "§ 16 Abs. 1 Nr. 2 ErbStG" },
    { wert: "5,5 %", bedeutung: "Zins in den 30 Jahresbeträgen der Verrentung.", norm: "§ 24 ErbStG" },
  ],
  merksatz: "Die Erbersatzsteuer ist kein Argument gegen die Stiftung — sie ist der Preis dafür, dass niemand mehr erben muss.",
  gewicht: { mandat: 3, reichweite: 3 },
  antwortfreigabe: "abstrakt",
  stand: "2026-09-12",
  quellen: ["Q2 Ersatzerbschaftsteuer, Verrentung, § 26 ErbStG", "Q1 Abschn. 3.3", "Q3 Die Rolle der Ersatzerbschaftsteuer"],
  verwandt: ["steuerklassenprivileg", "grosserwerb-verschonungsbedarf", "treuhandstiftung", "liechtenstein-vorteile"],
};
