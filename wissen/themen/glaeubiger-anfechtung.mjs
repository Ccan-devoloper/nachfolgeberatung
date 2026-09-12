/* Q1 · Insolvenz- und Anfechtungsrecht */
export default {
  id: "glaeubiger-anfechtung",
  titel: "Gläubiger und Stiftung — wann die Übertragung zurückgeholt wird",
  bereich: "vermoegensschutz",
  kurz: "Die Übertragung auf eine Stiftung ist eine unentgeltliche Leistung: vier Jahre lang anfechtbar, bei Benachteiligungsvorsatz zehn — und das Wissen des Vorstands zählt als Wissen der Stiftung.",
  normen: ["§ 129 InsO", "§ 134 InsO", "§ 133 InsO", "§§ 3, 4 AnfG", "§ 143 Abs. 2 InsO"],
  kern: [
    "Der Insolvenzverwalter kann Rechtshandlungen vor Verfahrenseröffnung anfechten, wenn sie die Gläubiger benachteiligen; unentgeltliche Leistungen der letzten vier Jahre ohne Weiteres.",
    "Bei Benachteiligungsvorsatz des Stifters, den die Stiftung kannte, verlängert sich die Frist auf zehn Jahre.",
    "Das Wissen wird der Stiftung über ihren Vorstand zugerechnet — ist der Stifter selbst Vorstand, weiss die Stiftung, was er weiss.",
    "Auch ausserhalb der Insolvenz kann ein Gläubiger mit vollstreckbarem Titel nach dem Anfechtungsgesetz vorgehen, mit denselben Fristen.",
    "Die Stiftung muss zurückgewähren, soweit sie bereichert ist — und auf Entreicherung kann sie sich kaum berufen, wenn die Leistung ins Grundstockvermögen floss.",
    "Gläubiger der Begünstigten haben es dagegen schwer: Ohne einklagbaren Anspruch gibt es nichts zu pfänden.",
  ],
  einsatzfelder: [
    { situation: "Ein Freiberufler oder Geschäftsführer will sein Privatvermögen vorsorglich aus der persönlichen Haftungssphäre nehmen — lange bevor ein Problem absehbar ist.", warum: "Das ist die legitime Anwendung: Vorsorge in guten Zeiten. Nach vier Jahren ohne Vorsatz ist die Übertragung unangreifbar." },
  ],
  fehler: [
    { fehler: "Der Stifter setzt sich selbst als alleinigen Vorstand ein — 'damit ich die Kontrolle behalte'.", richtig: "Damit wird sein Wissen zum Wissen der Stiftung. Kontrolle lässt sich über ein Kuratorium, Vetorechte oder Benennungsrechte sichern, ohne den Vorstand zu stellen.", norm: "§ 133 InsO, § 166 BGB" },
    { fehler: "Die Stiftung wird errichtet, wenn die Krise schon absehbar ist.", richtig: "Dann wird sie mit hoher Wahrscheinlichkeit angefochten — und die Stiftung verliert im Zweifel ihr gesamtes Vermögen.", norm: "§ 134 InsO" },
  ],
  zahlen: [
    { wert: "4 Jahre", bedeutung: "Anfechtungsfrist für unentgeltliche Leistungen — ohne dass es auf Vorsatz ankommt.", norm: "§ 134 InsO" },
    { wert: "10 Jahre", bedeutung: "Anfechtungsfrist bei Benachteiligungsvorsatz, den die Stiftung kannte.", norm: "§ 133 InsO" },
  ],
  merksatz: "Eine Stiftung schützt vor dem Gläubiger von morgen — nie vor dem von gestern.",
  gewicht: { mandat: 2, reichweite: 2 },
  antwortfreigabe: "keine",
  stand: "2026-09-12",
  quellen: ["Q1 Abschn. 3.2.3"],
  verwandt: ["vermoegensschutz-grenzen", "stiftung-governance"],
};
