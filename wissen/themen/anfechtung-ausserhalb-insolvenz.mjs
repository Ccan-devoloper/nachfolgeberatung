/* Q1 Abschn. 3.2.3 · Anfechtungsgesetz; Q5 · Fristenübersicht */
export default {
  id: "anfechtung-ausserhalb-insolvenz",
  titel: "Der einzelne Gläubiger — Anfechtung auch ohne Insolvenzverfahren",
  bereich: "vermoegensschutz",
  kurz: "Auch ohne Insolvenzverfahren kann ein einzelner Gläubiger die Übertragung auf eine Stiftung angreifen — mit denselben Fristen, aber eigenen Voraussetzungen.",
  normen: ["§ 1 AnfG", "§ 2 AnfG", "§ 3 Abs. 1 S. 1 AnfG", "§ 4 Abs. 1 AnfG", "§ 11 AnfG"],
  kern: [
    "Viele denken beim Thema Anfechtung nur an die Insolvenz. Das Anfechtungsgesetz gilt aber gerade dann, wenn es mangels Masse gar nicht erst zu einem Insolvenzverfahren kommt.",
    "Dann kann ein einzelner Gläubiger Rechtshandlungen des Schuldners anfechten, die ihn benachteiligen.",
    "Er braucht dafür drei Dinge: einen vollstreckbaren Titel, eine fällige Forderung und eine Zwangsvollstreckung, die nicht zur vollen Befriedigung geführt hat oder erkennbar nicht führen würde.",
    "Die Fristen laufen parallel zum Insolvenzrecht: vier Jahre für unentgeltliche Leistungen, zehn Jahre bei vorsätzlicher Gläubigerbenachteiligung.",
    "Die Rechtsfolge trifft die Stiftung: Sie muss den Gegenstand zur Befriedigung zur Verfügung stellen, soweit sie bereichert ist.",
    "Ist sie bösgläubig, haftet sie verschärft — der Bereicherungseinwand hilft ihr dann nicht mehr.",
    "Praktisch heisst das: Wer einen einzelnen grossen Gläubiger hat, ist mit einer Stiftung nicht besser dran als in der Insolvenz. Es kommt auf denselben Zeitpunkt an.",
  ],
  gegenueberstellung: {
    links: {
      label: "Insolvenzanfechtung",
      punkte: [
        { krit: "Wer greift an", wert: "der Insolvenzverwalter für alle Gläubiger", norm: "§ 129 InsO" },
        { krit: "Voraussetzung", wert: "eröffnetes Insolvenzverfahren" },
        { krit: "Frist unentgeltliche Leistung", wert: "vier Jahre", norm: "§ 134 InsO" },
        { krit: "Frist bei Vorsatz", wert: "zehn Jahre", norm: "§ 133 InsO" },
      ],
    },
    rechts: {
      label: "Anfechtung nach dem AnfG",
      punkte: [
        { krit: "Wer greift an", wert: "ein einzelner Gläubiger für sich", norm: "§ 1 AnfG" },
        { krit: "Voraussetzung", wert: "Titel, fällige Forderung, erfolglose Vollstreckung", norm: "§ 2 AnfG" },
        { krit: "Frist unentgeltliche Leistung", wert: "vier Jahre", norm: "§ 4 Abs. 1 AnfG" },
        { krit: "Frist bei Vorsatz", wert: "zehn Jahre", norm: "§ 3 Abs. 1 S. 1 AnfG" },
      ],
    },
  },
  fehler: [
    { fehler: "Es wird darauf gesetzt, dass ohne Insolvenzverfahren nichts passieren kann.", richtig: "Gerade die masselose Lage ist der Hauptanwendungsfall des Anfechtungsgesetzes. Der Gläubiger braucht nur einen Titel und eine fruchtlose Vollstreckung.", norm: "§ 2 AnfG" },
    { fehler: "Die Stiftung verlässt sich darauf, das Erhaltene längst verbraucht zu haben.", richtig: "Auf Entreicherung kann sie sich kaum berufen, wenn das Vermögen ins Grundstockvermögen floss — und bei Bösgläubigkeit gar nicht.", norm: "§ 11 AnfG" },
  ],
  einsatzfelder: [
    { situation: "Ein Unternehmer hat eine grosse streitige Forderung gegen sich und überlegt, ob eine Stiftung noch hilft.", warum: "Sie hilft nicht gegen diesen Gläubiger. Die Frage ist nur, ob vier oder zehn Jahre laufen — und beides beginnt erst mit der Übertragung." },
  ],
  merksatz: "Auch ein einzelner Gläubiger kann zurückholen, was in die Stiftung gegeben wurde — er braucht dafür kein Insolvenzverfahren, nur einen Titel.",
  gewicht: { mandat: 2, reichweite: 2 },
  antwortfreigabe: "abstrakt",
  stand: "2026-09-18",
  quellen: ["Q1 Abschn. 3.2.3", "Q5 Folien zu Gläubigerschutz"],
  verwandt: ["glaeubiger-anfechtung", "vermoegensschutz-grenzen", "stifter-verarmt"],
};
