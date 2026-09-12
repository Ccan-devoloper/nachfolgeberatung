/* Q4 · Ausgangslage, BFH 3.12.2024; Q2 · Grundzüge des § 15 AStG */
export default {
  id: "liechtenstein-zurechnung",
  titel: "Zurechnungsbesteuerung — die liechtensteinische Stiftung schirmt nur ab, wenn man wirklich loslässt",
  bereich: "liechtenstein",
  kurz: "Einkünfte einer ausländischen Familienstiftung rechnet das Gesetz dem Stifter zu, als hätte er sie selbst erzielt — ausser das Vermögen ist seiner Verfügungsmacht rechtlich und tatsächlich entzogen.",
  normen: ["§ 15 Abs. 1 AStG", "§ 15 Abs. 2 AStG", "§ 15 Abs. 6 AStG", "§ 15 Abs. 11 AStG", "Art. 552 PGR"],
  kern: [
    "Die Zurechnung durchbricht das Trennungsprinzip: vorrangig beim unbeschränkt steuerpflichtigen Stifter, nachrangig bei den Begünstigten — ohne dass Geld fliesst.",
    "Familienstiftung im Sinne der Norm ist eine Stiftung, bei der Stifter, Angehörige und Abkömmlinge zu mehr als der Hälfte bezugs- oder anfallsberechtigt sind.",
    "Für Stiftungen im EU-/EWR-Raum entfällt die Zurechnung, wenn das Vermögen der Verfügungsmacht dieser Personen rechtlich und tatsächlich entzogen ist und der Sitzstaat Auskünfte erteilt — Liechtenstein tut das.",
    "Der BFH hat am 3. Dezember 2024 den Massstab geklärt: Entzogen ist das Vermögen, wenn die Beteiligten nach zivilrechtlichen Massstäben die Herausgabe nicht bewirken können und keine Weisungsbefugnis gegenüber dem Stiftungsrat haben; wirtschaftliche Massstäbe zählen nicht.",
    "Der BFH wendet die Escape-Klausel wegen der Kapitalverkehrsfreiheit über den Wortlaut hinaus auch auf Drittstaatenstiftungen an.",
    "Was bereits zugerechnet wurde, wird bei späterer Ausschüttung nicht noch einmal besteuert.",
    "Der Zurechnungsbesteuerung vorgelagert ist eine schärfere Stufe: Behält der Stifter die vollständige Kontrolle, wird ihm das Vermögen schon nach den allgemeinen Zurechnungsregeln zugerechnet — die Stiftung existiert steuerlich gar nicht erst. Dann fehlt es konsequenterweise auch an einer Schenkung bei der Errichtung.",
    "Der häufigste Grund für das Scheitern des Entlastungsbeweises: Der Stifter steuert faktisch weiter — über Mandatsverträge, Beiratsbesetzung, informelle Weisungen.",
  ],
  mythos: {
    behauptung: "Mit einer Liechtensteiner Stiftung ist das Vermögen dem deutschen Fiskus entzogen.",
    richtigstellung: "Der Grundfall ist das Gegenteil: Das Gesetz rechnet die Einkünfte dem Stifter zu, als gäbe es die Stiftung nicht. Nur wer nachweist, dass er rechtlich und tatsächlich keinen Zugriff mehr hat, kommt aus der Zurechnung heraus — und das verlangt echten Kontrollverzicht, kein Papier.",
  },
  beispiele: [
    { konstellation: "Sechs Stiftungsräte, ein Massstab — welche Besetzung besteht den Entlastungsbeweis?", gestaltung: "Nur Familienfremde, Begünstigte mit blossen Informationsrechten: eindeutig erfüllt. Familie in der Minderheit, aber mit dem Recht, die anderen Räte auszutauschen: erfüllt — die Drohkulisse ist nur wirtschaftlicher Einfluss. Paritätisch besetzt, bei Patt entscheidet ein Beirat aus Managern des Familienunternehmens: erfüllt. Familienmehrheit im Rat, aber die Begünstigung der Ratsmitglieder ruht während der Amtszeit: naheliegend erfüllt. Keine Familie im Rat, ein Beirat mit freiem Abberufungsrecht: erfüllt. Und: Begünstigte als Geschäftsführer der Tochtergesellschaften sind unschädlich — sie verfügen über Gesellschaftsvermögen, nicht über Stiftungsvermögen.", pointe: "Der BFH fragt nur eines: Kann die Familie die Herausgabe rechtlich erzwingen oder den Rat anweisen? Alles andere — Drohkulisse, Nähe, Einfluss — zählt nicht. Die Finanzverwaltung sieht das enger; der BFH hat ihr widersprochen." },
    { konstellation: "Der Stifter steuert den Stiftungsrat über einen Mandatsvertrag.", gestaltung: "Dann ist die Stiftung steuerlich transparent: Das Vermögen wird dem Stifter als wirtschaftlichem Eigentümer zugerechnet — die Zurechnungsbesteuerung kommt gar nicht erst zum Zug, weil es steuerlich keine Stiftung gibt. Die Faustformel: Kann der Stifter die Stiftung wie ein Auslandskonto benutzen?", pointe: "Die Kehrseite der Transparenz: Bei Errichtung fällt keine Schenkungsteuer an, weil nichts übergegangen ist — und genauso wenig ist etwas geschützt." },
  ],
  einsatzfelder: [
    { situation: "Eine Familie mit echtem Auslandsbezug — Wohnsitze, Vermögen oder Unternehmen in mehreren Ländern — sucht eine Struktur, die international anerkannt ist.", warum: "Hier trägt Liechtenstein: schnelle Errichtung, keine Aufsicht, EWR-Mitglied mit Informationsaustausch. Der Entlastungsbeweis ist dann Gestaltungsarbeit, keine Fiktion." },
  ],
  fehler: [
    { fehler: "Die Statuten sind sauber, aber der Stifter sitzt im Stiftungsrat oder hat ein Mandatsverhältnis zum Stiftungsrat.", richtig: "Weisungsbefugnis oder Herausgabemöglichkeit — und der Beweis ist gescheitert. Der BFH prüft zivilrechtlich, aber genau.", norm: "§ 15 Abs. 6 AStG" },
    { fehler: "Die Errichtung wird schenkungsteuerlich wie bei einer deutschen Familienstiftung gerechnet.", richtig: "Das Steuerklassenprivileg gilt nur für inländische Stiftungen — der EuGH hat das 2025 bestätigt. Bei der Liechtensteiner Stiftung: Klasse III.", norm: "§ 15 Abs. 2 S. 1 ErbStG" },
  ],
  merksatz: "Die liechtensteinische Stiftung schirmt nicht durch ihre Rechtsform ab, sondern durch echten Kontrollverzicht — wer weiter steuern will, zahlt weiter.",
  gewicht: { mandat: 3, reichweite: 2 },
  antwortfreigabe: "keine",
  stand: "2026-09-12",
  quellen: ["Q4 Abschn. I", "Q2 Grundzüge des § 15 AStG, Aktuelle Rechtsprechung", "Q3 § 15 AStG als besonderes Zugriffsregime"],
  verwandt: ["astg-reform-motivtest", "liechtenstein-vorteile", "steuerklassenprivileg"],
};
