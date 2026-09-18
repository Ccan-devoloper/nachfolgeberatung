/* Q5 · Steuerschuldner und Haftung; Q10 Abschn. F · Kapitalertragsteuer */
export default {
  id: "vorstandshaftung-steuern",
  titel: "Die Steuern der Stiftung — und warum der Vorstand persönlich haftet",
  bereich: "stiftungsrecht",
  kurz: "Steuerschuldnerin ist die Stiftung, aber ihre Pflichten erfüllt der Vorstand — und wer sie grob fahrlässig verletzt, haftet dafür mit dem eigenen Vermögen.",
  normen: ["§ 34 AO", "§ 69 AO", "§ 43 Abs. 1 Nr. 7a EStG", "§ 137 AO"],
  kern: [
    "Die Stiftung ist eigenes Steuersubjekt; die steuerlichen Pflichten einer juristischen Person erfüllen aber ihre gesetzlichen Vertreter — bei der Stiftung der Vorstand.",
    "Werden diese Pflichten vorsätzlich oder grob fahrlässig verletzt und fallen deshalb Ansprüche aus, haftet das Organmitglied persönlich.",
    "Der praktisch häufigste Stolperstein ist die Kapitalertragsteuer: Leistungen an Begünstigte unterliegen dem Steuerabzug, den die Stiftung einzubehalten und abzuführen hat.",
    "Unterbleibt er, haftet die Stiftung — und über die allgemeine Haftungsnorm rückt der Vorstand nach.",
    "Auch die Anzeige der Stiftung beim Finanzamt trifft den Vorstand; sie gehört zu den ersten Schritten nach der Anerkennung.",
    "Für die Familienstiftung heisst das: Wer Vater oder Tochter zum Vorstand macht, gibt ihnen nicht nur Einfluss, sondern eine steuerliche Verantwortung mit persönlichem Risiko.",
    "Entlastung schafft kein Vertrauen, sondern ein Ablauf: feste Zuständigkeit für Steuererklärungen und Kapitalertragsteuer, ein Steuerberater mit Auftrag, und Belege, dass beides überwacht wurde.",
  ],
  fehler: [
    { fehler: "Ausschüttungen an die Familie werden brutto überwiesen, weil 'die Begünstigten das selbst versteuern'.", richtig: "Auf Leistungen einer Stiftung ist Kapitalertragsteuer einzubehalten. Wer sie nicht abführt, löst eine Haftung aus — erst der Stiftung, dann des Vorstands.", norm: "§ 43 Abs. 1 Nr. 7a EStG" },
    { fehler: "Der Vorstand verlässt sich vollständig auf den Steuerberater.", richtig: "Die Pflicht bleibt beim Organ. Auswahl, Instruktion und Überwachung des Beraters muss es leisten — und belegen können.", norm: "§ 34 AO" },
  ],
  einsatzfelder: [
    { situation: "Eine Familienstiftung nimmt den laufenden Betrieb auf und die erste Ausschüttung steht an.", warum: "Bevor Geld fliesst, gehört der Steuerabzug geklärt. Später ist die Korrektur teurer als die Ausschüttung." },
  ],
  merksatz: "Die Stiftung schuldet die Steuer, der Vorstand haftet für sie.",
  gewicht: { mandat: 2, reichweite: 2 },
  antwortfreigabe: "keine",
  stand: "2026-09-18",
  quellen: ["Q5 Folien zur laufenden Besteuerung", "Q10 Abschn. F"],
  verwandt: ["organhaftung-stiftung", "stiftung-laufende-steuer", "destinataer-besteuerung", "vollzug-nach-anerkennung"],
};
