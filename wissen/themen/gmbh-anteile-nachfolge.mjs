/* Q7 · Kap. 20 GmbH-/Kapitalgesellschaftsanteile in der Nachfolge */
export default {
  id: "gmbh-anteile-nachfolge",
  titel: "GmbH-Anteile übertragen — fünf Dokumente, die zusammenpassen müssen",
  bereich: "gesellschaftsrecht",
  kurz: "Bei GmbH-Anteilen genügt der Schenkungsvertrag nicht: Satzung, Vinkulierung, Poolvertrag, Abfindungsklauseln und Steuerrecht greifen ineinander — und wer später ins Ausland zieht, hat ein Problem, das er heute lösen muss.",
  normen: ["§ 15 GmbHG", "§ 13a Abs. 9 ErbStG", "§ 13b Abs. 1 Nr. 3 ErbStG", "§ 8b KStG", "§ 6 AStG"],
  kern: [
    "Die Abtretung eines GmbH-Anteils braucht notarielle Form — auch die Schenkung an das eigene Kind. Vinkulierungsklauseln verlangen zusätzlich die Zustimmung der Gesellschaft oder der Mitgesellschafter.",
    "Die Erbschaftsteuerverschonung setzt bei GmbH-Anteilen eine Beteiligung von mehr als 25 % voraus — oder einen Poolvertrag, der kleinere Anteile zusammenfasst.",
    "Gesellschaftsvertragliche Ausschüttungs-, Verfügungs- und Abfindungsbeschränkungen können einen Vorwegabschlag von bis zu 30 % ermöglichen — wenn sie zwei Jahre vor und zwanzig Jahre nach der Übertragung eingehalten werden.",
    "In Holdingstrukturen sind Dividenden und Veräußerungsgewinne zwischen Kapitalgesellschaften weitgehend steuerfrei — das ändert, auf welcher Ebene die Nachfolge sinnvoll ansetzt.",
    "Zieht der Gesellschafter ins Ausland, wird der Anteil fiktiv verkauft und der Gewinn versteuert — Stiftung oder Holding als Ausweg müssen Jahre vorher stehen, nicht Wochen.",
  ],
  einsatzfelder: [
    { situation: "Vier Geschwister halten je 20 % einer GmbH und wollen an die nächste Generation übertragen.", warum: "Jeder Anteil liegt unter 25 % — ohne Poolvertrag keine Verschonung. Der Pool macht aus vier Minderheiten eine begünstigte Mehrheit." },
    { situation: "Der Sohn soll Geschäftsführer und Gesellschafter werden, die Tochter lebt in den USA.", warum: "Stimmbindung, Abfindung bei Ausscheiden und die Wegzugsfrage der Tochter gehören in die Satzung, bevor übertragen wird." },
  ],
  ablauf: [
    { schritt: "Satzung und bestehende Verträge lesen", hinweis: "Vinkulierung, Einziehung, Abfindung, Stimmbindung — was steht schon da, was fehlt?" },
    { schritt: "Beteiligungsquote und Pool prüfen", hinweis: "Über 25 % oder Poolvertrag — sonst keine Verschonung.", norm: "§ 13b Abs. 1 Nr. 3 ErbStG" },
    { schritt: "Vorwegabschlag erwägen", hinweis: "Nur, wenn die Familie die Beschränkungen zwanzig Jahre leben will.", norm: "§ 13a Abs. 9 ErbStG" },
    { schritt: "Notarielle Abtretung mit allen Zustimmungen", hinweis: "Gesellschafterbeschluss und Zustimmungen gehören in dieselbe Urkunde." },
    { schritt: "Gesellschafterliste aktualisieren", hinweis: "Erst mit Eintragung in die beim Handelsregister hinterlegte Liste gilt der Erwerber gegenüber der Gesellschaft als Gesellschafter.", norm: "§ 16 GmbHG" },
  ],
  fehler: [
    { fehler: "Die Wegzugsbesteuerung wird erst geprüft, wenn der Umzug feststeht.", richtig: "Strukturen, die den Wegzug entschärfen, brauchen Vorlauf und Substanz — kurz vor dem Umzug ist es zu spät.", norm: "§ 6 AStG" },
    { fehler: "Kurz vor der Schenkung wird eine Abfindungsklausel in die Satzung geschrieben, um den Vorwegabschlag zu bekommen.", richtig: "Der Abschlag verlangt, dass die Klausel zwei Jahre vorher bestand und zwanzig Jahre danach gilt — und tatsächlich gelebt wird.", norm: "§ 13a Abs. 9 S. 4, 5 ErbStG" },
  ],
  zahlen: [
    { wert: "> 25 %", bedeutung: "Mindestbeteiligung an einer Kapitalgesellschaft für die Verschonung — allein oder im Pool.", norm: "§ 13b Abs. 1 Nr. 3 ErbStG" },
    { wert: "bis 30 %", bedeutung: "Vorwegabschlag bei gesellschaftsvertraglichen Beschränkungen.", norm: "§ 13a Abs. 9 ErbStG" },
  ],
  merksatz: "Beim GmbH-Anteil ist der Schenkungsvertrag das fünfte Dokument — die Satzung ist das erste.",
  gewicht: { mandat: 3, reichweite: 2 },
  antwortfreigabe: "abstrakt",
  stand: "2026-09-12",
  quellen: ["Q7 Kap. 20"],
  verwandt: ["niessbrauch-gmbh-anteil", "vorwegabschlag-familienunternehmen", "wegzugsteuer-stiftung", "betriebsvermoegen-verschonung", "share-asset-deal", "ein-mann-gmbh-notfall"],
};
