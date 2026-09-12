/* Q7 · Kap. 20, 26.3 · Fehler 32 */
export default {
  id: "vorwegabschlag-familienunternehmen",
  titel: "Der Vorwegabschlag — bis zu 30 % weniger Bewertung für gebundene Familienunternehmen",
  bereich: "erbst",
  kurz: "Wer im Gesellschaftsvertrag Entnahmen, Verfügungen und Abfindungen beschränkt, kann bis zu 30 % Abschlag bei der Erbschaftsteuer bekommen — wenn die Familie die Beschränkungen zwei Jahre vorher und zwanzig Jahre danach lebt.",
  normen: ["§ 13a Abs. 9 ErbStG", "§ 13b ErbStG", "§ 138 BGB"],
  kern: [
    "Drei Beschränkungen müssen zusammen im Gesellschaftsvertrag stehen: Entnahmen oder Ausschüttungen auf höchstens 37,5 % des Gewinns nach Steuern, Verfügungen nur an Angehörige, Mitgesellschafter oder eine Familienstiftung, und eine Abfindung unter dem Verkehrswert.",
    "Die Höhe des Abschlags folgt der Abfindungsbeschränkung: Wer beim Ausscheiden nur 70 % des Werts bekommt, erhält 30 % Abschlag — mehr geht nicht.",
    "Die Beschränkungen müssen zwei Jahre vor der Übertragung bestehen und zwanzig Jahre danach tatsächlich eingehalten werden — wird in dieser Zeit die Satzung geändert oder mehr entnommen, fällt der Abschlag rückwirkend weg.",
    "Der Abschlag wirkt vor der Verschonung: Er senkt den Wert, auf den dann 85 % oder 100 % Verschonung angewendet werden — und hilft besonders dort, wo die Verschonung an ihre Grenzen stößt.",
    "Die Klauseln müssen gesellschaftsrechtlich wirksam sein: Eine Abfindung weit unter Wert kann sittenwidrig sein — dann gilt sie nicht, und der Abschlag ist weg.",
  ],
  einsatzfelder: [
    { situation: "Ein Familienunternehmen in der dritten Generation hat schon Vinkulierung und Abfindungsklauseln — nur die Entnahmebeschränkung fehlt.", warum: "Mit der Ergänzung und zwei Jahren Wartezeit lässt sich der Abschlag für die nächste Übertragung sichern." },
    { situation: "Der Wert des Unternehmens liegt knapp über der 26-Millionen-Grenze für die volle Verschonung.", warum: "Der Vorwegabschlag kann den begünstigten Erwerb unter die Schwelle drücken." },
  ],
  beispiele: [
    { konstellation: "Eine Familien-KG (Wert 40 Mio. €) hat seit zehn Jahren im Vertrag: Entnahmen höchstens ein Drittel des Gewinns, Anteile nur an Abkömmlinge, Abfindung 70 % des Verkehrswerts.", gestaltung: "Der Vater schenkt dem Sohn seinen Anteil. Vorwegabschlag 30 %: Aus 40 Mio. € werden 28 Mio. €. Erst darauf wird die Verschonung gerechnet.", pointe: "Zwölf Millionen weniger Bemessungsgrundlage — weil die Familie seit Jahren lebt, was andere kurz vor der Schenkung erst hineinschreiben." },
  ],
  fehler: [
    { fehler: "Die Klauseln werden kurz vor der Schenkung eingebaut.", richtig: "Zwei Jahre Vorlauf sind Pflicht — und zwanzig Jahre Nachlauf. Der Abschlag ist ein Versprechen der Familie, kein Steuertrick.", norm: "§ 13a Abs. 9 S. 4, 5 ErbStG" },
    { fehler: "Die Abfindung wird auf 10 % des Werts gesetzt, um den maximalen Abschlag zu holen.", richtig: "Mehr als 30 % gibt es ohnehin nicht — und eine so niedrige Abfindung ist gesellschaftsrechtlich angreifbar. Dann fällt beides.", norm: "§ 138 BGB" },
  ],
  zahlen: [
    { wert: "37,5 %", bedeutung: "Höchstgrenze für Entnahmen oder Ausschüttungen, gemessen am Gewinn nach Steuern.", norm: "§ 13a Abs. 9 S. 1 Nr. 1 ErbStG" },
    { wert: "30 %", bedeutung: "Maximaler Vorwegabschlag.", norm: "§ 13a Abs. 9 S. 3 ErbStG" },
    { wert: "2 + 20 Jahre", bedeutung: "Vorlauf vor und Nachlauf nach der Übertragung, in denen die Beschränkungen gelten müssen.", norm: "§ 13a Abs. 9 S. 4, 5 ErbStG" },
  ],
  merksatz: "Der Vorwegabschlag belohnt Familien, die ihre Bindung seit Jahren leben — nicht solche, die sie vor dem Notartermin erfinden.",
  gewicht: { mandat: 2, reichweite: 2 },
  antwortfreigabe: "keine",
  stand: "2026-09-12",
  quellen: ["Q7 Kap. 20", "Q7 Kap. 26.3", "Q7 Fehler 32"],
  verwandt: ["betriebsvermoegen-verschonung", "grosserwerb-verschonungsbedarf", "gmbh-anteile-nachfolge", "nachfolgeklauseln-kg"],
};
