/* Q10 Abschn. G.4a · Steuerlicher Spendenabzug */
export default {
  id: "spendenabzug",
  titel: "Was der Fiskus von einer Spende zurückgibt",
  bereich: "gemeinnuetzig",
  kurz: "Zuwendungen an gemeinnützige Körperschaften sind abziehbar — bis 20 Prozent des Gesamtbetrags der Einkünfte. Für den Vermögensstock einer Stiftung gilt ein eigener Höchstbetrag von 10 Mio. €, verteilbar über zehn Jahre.",
  normen: ["§ 10b EStG", "§ 10b Abs. 1a EStG", "§ 9 Abs. 1 Nr. 2 KStG", "§ 9 Nr. 5 GewStG", "§ 50 EStDV"],
  kern: [
    "Abziehbar sind Spenden und Mitgliedsbeiträge an juristische Personen des öffentlichen Rechts und an gemeinnützige Körperschaften im Inland sowie im EU- und EWR-Raum.",
    "Die Grenze liegt bei 20 Prozent des Gesamtbetrags der Einkünfte oder wahlweise bei vier Promille der Summe aus Umsätzen, Löhnen und Gehältern. Was darüber hinausgeht, lässt sich vortragen.",
    "Für Zuwendungen in den Vermögensstock einer Stiftung gibt es einen zusätzlichen Höchstbetrag von zehn Millionen Euro, den man über zehn Jahre verteilen kann.",
    "Drei Merkmale muss eine Spende erfüllen: Sie muss unentgeltlich sein, freiwillig, und sie muss beim Spender zu einer endgültigen wirtschaftlichen Belastung führen.",
    "Unentgeltlich heisst ohne Gegenleistung. Ein gutes Gefühl oder gesellschaftliches Ansehen schaden nicht — eine Werbewirkung schon, dann wird aus der Spende Sponsoring.",
    "Freiwillig ist die Vermögenswidmung im Stiftungsgeschäft und auch die Erfüllung einer freiwillig vereinbarten Auflage in einem Schenkungsvertrag. Nicht freiwillig ist die Erfüllung eines Vermächtnisses.",
    "Ein Sonderfall, der oft übersehen wird: Zuwendungen von Todes wegen sind nicht abziehbar. Beim Erblasser fehlt die Belastung, bei den Erben die Freiwilligkeit — sie erhalten von vornherein ein belastetes Vermögen.",
    "Ohne Zuwendungsbestätigung kein Abzug. Sie ist keine Formalie, sondern sachliche Voraussetzung und muss im Zeitpunkt der Veranlagung vorliegen.",
    "Eine gemeinnützige Körperschaft darf Bestätigungen nur ausstellen, wenn ihr Freistellungsbescheid nicht älter als fünf Jahre oder ihr Feststellungsbescheid nicht älter als drei Jahre ist.",
    "Wer sie entgegen diesen Voraussetzungen ausstellt, produziert eine unrichtige Bestätigung — und haftet dafür.",
  ],
  zahlen: [
    { wert: "20 %", bedeutung: "Des Gesamtbetrags der Einkünfte — die Obergrenze des allgemeinen Spendenabzugs.", norm: "§ 10b Abs. 1 EStG" },
    { wert: "10 Mio. €", bedeutung: "Zusätzlicher Höchstbetrag für Zuwendungen in den Vermögensstock, über zehn Jahre verteilbar.", norm: "§ 10b Abs. 1a EStG" },
    { wert: "300 €", bedeutung: "Bis zu diesem Betrag genügt unter weiteren Voraussetzungen ein vereinfachter Nachweis.", norm: "§ 50 EStDV" },
  ],
  fehler: [
    { fehler: "Im Testament wird eine Zuwendung an die eigene gemeinnützige Stiftung ausgesetzt, um Steuern zu sparen.", richtig: "Ein Spendenabzug entsteht dabei nicht — weder beim Erblasser noch bei den Erben. Erbschaftsteuerlich bleibt die Zuwendung allerdings befreit.", norm: "§ 13 Abs. 1 Nr. 16 ErbStG" },
    { fehler: "Die Stiftung nennt den Spender werbewirksam auf Plakaten und stellt trotzdem eine Zuwendungsbestätigung aus.", richtig: "Ein schlichter Dank ist unschädlich. Aktive Werbung macht daraus Sponsoring — und die Bestätigung unrichtig." },
  ],
  beispiele: [
    { konstellation: "Eine Unternehmerin, 61, will 8 Mio. € in den Vermögensstock einer neu gegründeten gemeinnützigen Stiftung geben; ihr Gesamtbetrag der Einkünfte liegt bei rund 900.000 € im Jahr.", gestaltung: "Der allgemeine Abzug von 20 Prozent wäre bei 180.000 € im Jahr erschöpft. Über den besonderen Höchstbetrag lässt sich die Zuwendung dagegen über zehn Jahre verteilen.", pointe: "Dieselbe Summe, zwei Vorschriften — und ein Unterschied von mehreren Jahren im Abzug." },
  ],
  merksatz: "Eine Spende wirkt steuerlich nur, wenn sie freiwillig, unentgeltlich und endgültig ist — und nur mit einer Bestätigung, die ausgestellt werden durfte.",
  gewicht: { mandat: 3, reichweite: 3 },
  antwortfreigabe: "abstrakt",
  stand: "2026-09-18",
  quellen: ["Q10 Abschn. G.4a"],
  verwandt: ["feststellung-60a", "gemeinnuetzigkeit-verlieren", "gemeinnuetzigkeit-vorteile", "unternehmensspenden-vga"],
};
