/* Q5 · Laufende Besteuerung, Praxisbeispiele Leverage und VC/PE, Fall 5 */
export default {
  id: "leverage-verkauf-an-stiftung",
  titel: "Verkaufen statt schenken — die Stiftung als Investitionsvehikel",
  bereich: "ertragsteuer",
  kurz: "Wer Immobilien oder Beteiligungen an die eigene Stiftung verkauft statt verschenkt, hebt Abschreibungspotenzial, verlagert Wertsteigerungen in die 15-Prozent-Welt und behält über das Darlehen einen Rückfluss.",
  normen: ["§ 23 EStG", "§ 8b KStG", "§ 32d Abs. 2 EStG", "§ 3 Nr. 40 EStG", "§ 9 Nr. 1 S. 2 GewStG"],
  kern: [
    "Immobilien nach Ablauf der Zehnjahresfrist kann der Eigentümer steuerfrei verkaufen — auch an die eigene Familienstiftung. Die Stiftung schreibt dann vom Kaufpreis ab, nicht von den historischen Anschaffungskosten.",
    "Finanziert die Stiftung über ein Verkäuferdarlehen zu marktüblichem Zins, fliessen dem Verkäufer Zinsen zu, die mit Abgeltungsteuer belastet sind — statt Mieten mit dem Spitzensatz; ob der Abgeltungstarif bei Darlehen an die eigene Stiftung gilt, ist umstritten.",
    "Der Überschuss in der Stiftung wird mit 15 Prozent Körperschaftsteuer belastet; zusammen bleibt nach Steuern deutlich mehr als bei direkter Vermietung — Ausschüttungen an die Familie kosten dann noch einmal Abgeltungsteuer.",
    "Gegenüber der vermögensverwaltenden GmbH hat die Stiftung zwei Vorteile: Sie braucht die engen Voraussetzungen der erweiterten Gewerbesteuerkürzung nicht, und sie verkauft Immobilien nach zehn Jahren körperschaftsteuerfrei.",
    "Bei Beteiligungen unter 25 Prozent — Venture Capital, Private Equity: Verkauf an die Stiftung mit höchstens 28,5 Prozent Belastung beim Verkäufer, danach laufen Wertsteigerungen zu 95 Prozent steuerfrei; die Darlehensrückführung aus Erträgen ist neutral, und die Wegzugsteuer ist entschärft.",
    "Variante mit zwei Stiftungen: Der Verkäufer schenkt die Kaufpreisforderung einer Schwesterstiftung — dieselbe Schenkungsteuer wie bei direkter Schenkung der Immobilie, aber mit dem höheren Abschreibungspotenzial.",
  ],
  einsatzfelder: [
    { situation: "Ein Eigentümer hält abgeschriebene Bestandsimmobilien, braucht die Mieterträge nicht zum Leben und legt sie ohnehin an.", warum: "Der Verkauf an die Stiftung mit Verkäuferdarlehen verwandelt hoch besteuerte Mieten in niedriger besteuerte Zinsen und schafft neues Abschreibungsvolumen — bei gleichzeitigem Aufbau der Stiftung." },
    { situation: "Ein Investor hält frühe Beteiligungen, deren Wertsteigerung noch bevorsteht.", warum: "Jetzt verkaufen, solange der Wert niedrig ist; die Steigerung fällt dann in der Stiftung an — zu 0,75 Prozent effektiv." },
  ],
  beispiele: [
    { konstellation: "Immobilien mit Anschaffungskosten von 30 und Verkehrswert von 50 Millionen Euro, seit über zehn Jahren gehalten, jährlicher Überschuss 2 Millionen, beim Eigentümer mit 47,5 Prozent besteuert — netto etwa 1,05 Millionen.", gestaltung: "Die Stiftung kauft zu 50 Millionen plus Grunderwerbsteuer, finanziert über ein Verkäuferdarlehen zu 3 Prozent. Der Veräusserungsgewinn ist steuerfrei. Die Stiftung zahlt rund 1,5 Millionen Zinsen — beim Verkäufer nach Abgeltungsteuer etwa 1,1 Millionen — und versteuert ihren Restüberschuss von 500.000 mit 15 Prozent.", pointe: "Stiftung und Stifter zusammen: rund 1,5 Millionen nach Steuern statt 1,05. Und die Stiftung existiert — mit Vermögen, das sie sich selbst gekauft hat." },
  ],
  fehler: [
    { fehler: "Der Verkauf wird mit einem Freundschaftszins finanziert.", richtig: "Marktüblich oder gar nicht — sonst steht die verdeckte Zuwendung im Raum und mit ihr die Schenkungsteuer." },
    { fehler: "Die Gestaltung wird als reines Steuermodell ohne aussersteuerliche Zwecke aufgesetzt.", richtig: "Die Stiftung muss eine echte Stiftung sein — mit Zweck, Organen, Begünstigten. Das Investitionsvehikel ist eine Funktion, nicht der Grund." },
  ],
  merksatz: "Schenken bewahrt den alten Buchwert. Verkaufen schafft einen neuen — und die Stiftung kann sich das leisten.",
  gewicht: { mandat: 3, reichweite: 2 },
  antwortfreigabe: "keine",
  stand: "2026-09-12",
  quellen: ["Q5 Folien 118 (Fall 5), 129–130"],
  verwandt: ["holding-vor-dem-exit", "stiftung-laufende-steuer", "dotation-ertragsteuer", "wegzugsteuer-stiftung"],
};
