/* Q8 · Kap. 4.7, 4.8 · Fall 18 */
export default {
  id: "erbschaftsteuer-international",
  titel: "Das Kind in Zürich zahlt deutsche Erbschaftsteuer — und vielleicht auch Schweizer",
  bereich: "auslandserbfall",
  kurz: "Die deutsche Erbschaftsteuer folgt nicht dem Erbstatut, sondern eigenen Anknüpfungen: Ist Erblasser oder Erwerber Inländer, wird das Weltvermögen erfasst — und die Anrechnung ausländischer Steuer ist begrenzt.",
  normen: ["§ 2 ErbStG", "§ 21 ErbStG", "§ 30 ErbStG", "§ 2 Abs. 1 Nr. 1 lit. b ErbStG"],
  kern: [
    "Unbeschränkte Steuerpflicht besteht schon, wenn einer der Beteiligten Inländer ist — Erblasser oder Erwerber. Dann erfasst die deutsche Steuer den gesamten Vermögensanfall, unabhängig davon, wo er liegt.",
    "Ein Kind, das seit Jahren im Ausland lebt, schuldet deutsche Erbschaftsteuer auf den ganzen Nachlass, wenn der Erblasser in Deutschland steuerlich Inländer war.",
    "Deutsche Staatsangehörige bleiben bis zu fünf Jahre nach dem Wegzug erweitert unbeschränkt steuerpflichtig — der Umzug wirkt erbschaftsteuerlich also mit Verzögerung.",
    "Gleichzeitig kann der ausländische Staat zugreifen. Erbschaftsteuerliche Doppelbesteuerungsabkommen gibt es nur mit wenigen Staaten; im Übrigen hilft nur die Anrechnung, und die ist an Voraussetzungen geknüpft und nicht vollständig.",
    "Die Anzeigepflicht beträgt drei Monate ab Kenntnis. Die Ausnahme für ein in Deutschland eröffnetes Testament greift gerade nicht, wenn zum Erwerb Grundbesitz, Betriebsvermögen, bestimmte Kapitalgesellschaftsanteile oder Auslandsvermögen gehören — also fast immer im Unternehmermandat.",
  ],
  einsatzfelder: [
    { situation: "Ein Unternehmer lebt in Deutschland, die alleinige Erbin in Zürich.", warum: "Deutsche unbeschränkte Steuerpflicht auf das Weltvermögen wegen des Erblassers, Schweizer Kanton separat — Anrechnung und Liquidität gehören modelliert, bevor der Erbfall eintritt." },
    { situation: "Eine Familie erwägt den Wegzug, auch aus erbschaftsteuerlichen Gründen.", warum: "Die Fünfjahresfrist und die Frage, ob Inlandsvermögen zurückbleibt, entscheiden — der Wegzug allein löst die deutsche Steuer nicht ab." },
  ],
  beispiele: [
    { konstellation: "Ein in Deutschland ansässiger Unternehmer hinterlässt 15 Mio. € an seine in der Schweiz lebende Tochter, darunter ein Wertpapierdepot in Luxemburg.", gestaltung: "Deutschland besteuert den gesamten Erwerb, auch das luxemburgische Depot. Der Kanton Zürich erhebt für direkte Nachkommen derzeit keine Erbschaftsteuer — sonst wäre die Anrechnung die einzige Entlastung, und die reicht selten ganz.", pointe: "Der Wohnsitz der Erbin ändert nichts an der deutschen Steuer — solange der Erblasser Inländer ist." },
  ],
  fehler: [
    { fehler: "Man nimmt an, dass Erbstatut und Steuerpflicht demselben Recht folgen.", richtig: "Die Rechtswahl nach der Erbrechtsverordnung entscheidet nicht, welcher Staat besteuert — das sind zwei getrennte Systeme.", norm: "§ 2 ErbStG" },
    { fehler: "Die Anzeige wird unterlassen, weil ein deutsches Testament notariell eröffnet wurde.", richtig: "Bei Grundbesitz, Betriebsvermögen, Anteilen oder Auslandsvermögen gilt die Ausnahme nicht — drei Monate ab Kenntnis.", norm: "§ 30 Abs. 3 ErbStG" },
  ],
  zahlen: [
    { wert: "3 Monate", bedeutung: "Anzeigefrist beim Finanzamt ab Kenntnis vom Erwerb.", norm: "§ 30 Abs. 1 ErbStG" },
    { wert: "5 Jahre", bedeutung: "So lange bleiben weggezogene deutsche Staatsangehörige erweitert unbeschränkt steuerpflichtig.", norm: "§ 2 Abs. 1 Nr. 1 lit. b ErbStG" },
  ],
  merksatz: "Erbrecht und Erbschaftsteuer fragen nicht dasselbe — und selten denselben Staat.",
  gewicht: { mandat: 3, reichweite: 2 },
  antwortfreigabe: "keine",
  stand: "2026-09-13",
  quellen: ["Q8 Kap. 4.7, 4.8", "Q8 Fall 18"],
  verwandt: ["euerbvo-grundlagen", "euerbvo-grenzen", "wegzugsteuer-stiftung", "auslandsimmobilie-erbfall"],
};
