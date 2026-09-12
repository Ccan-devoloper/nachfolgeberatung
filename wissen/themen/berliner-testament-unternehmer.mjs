/* Q8 · Kap. 3.4, 3.5 · Fall 11 */
export default {
  id: "berliner-testament-unternehmer",
  titel: "Das Berliner Testament — die Standardlösung, die Unternehmerfamilien Geld kostet",
  bereich: "erbrecht",
  kurz: "Ehegatten setzen sich gegenseitig zu Alleinerben ein, die Kinder erben erst zuletzt: maximale Versorgung des Überlebenden — aber die Freibeträge der Kinder bleiben im ersten Erbfall ungenutzt, und der Pflichtteil kommt trotzdem.",
  normen: ["§ 2269 BGB", "§ 16 ErbStG", "§ 15 Abs. 3 ErbStG", "§ 2303 BGB"],
  kern: [
    "In der Einheitslösung wird der überlebende Ehegatte Vollerbe, die Kinder werden Schlusserben des Letztversterbenden — das vermeidet die Erbengemeinschaft zwischen Ehegatte und Kindern im ersten Erbfall.",
    "Jeder Elternteil ist ein eigener Erblasser mit eigenem Freibetrag von 400.000 € je Kind. Erhalten die Kinder im ersten Erbfall nichts, wird dieser Freibetrag nicht genutzt — rechtlich geht er nicht verloren, praktisch verfällt er.",
    "Im zweiten Erbfall steht den Kindern nur der Freibetrag gegenüber dem zuletzt Verstorbenen zu; bei zwei Kindern bleiben so leicht 800.000 € Freibetrag ungenutzt.",
    "Auf Antrag kann für das noch vorhandene Vermögen das Verhältnis zum Erstverstorbenen zugrunde gelegt werden — das betrifft Steuerklasse und Tarif, schafft aber keinen zweiten persönlichen Freibetrag.",
    "Die Kinder sind im ersten Erbfall enterbt und können ihren Pflichtteil fordern — die Liquiditätsbelastung entsteht also womöglich trotzdem, nur unkontrolliert.",
  ],
  einsatzfelder: [
    { situation: "Ein Ehepaar mit mittlerem Vermögen und guter Familienlage.", warum: "Hier funktioniert das Berliner Testament oft gut — Versorgung geht vor Steueroptimierung, und die Beträge bleiben unter den Freibeträgen." },
    { situation: "Ein Ehepaar mit einer GmbH im Wert von 12 Mio. € und zwei Kindern.", warum: "Hier kostet die Standardlösung Geld und verschiebt die Unternehmensnachfolge auf den zweiten Erbfall — eine Modellrechnung über beide Erbfälle gehört auf den Tisch." },
  ],
  beispiele: [
    { konstellation: "Ehepaar, Vermögen 4 Mio. €, zwei Kinder. Berliner Testament, beide Eltern sterben im Abstand von acht Jahren.", gestaltung: "Erster Erbfall: Die Ehefrau erbt alles, ihr Freibetrag von 500.000 € wird genutzt. Die Freibeträge der Kinder von zusammen 800.000 € bleiben ungenutzt. Zweiter Erbfall: 4 Mio. € auf zwei Kinder, je 400.000 € frei.", pointe: "Mit Vermächtnissen an die Kinder im ersten Erbfall hätte die Familie 800.000 € zusätzlichen Freibetrag genutzt — bei 19 Prozent rund 150.000 € Steuer. Vereinfachte Modellrechnung." },
  ],
  fehler: [
    { fehler: "Das Berliner Testament wird als Steuergestaltung verstanden.", richtig: "Es ist eine Versorgungsgestaltung. Steuerlich ist es fast immer die teurere Variante — was in Ordnung ist, solange die Familie das weiss." },
    { fehler: "Man verlässt sich darauf, dass die Steuerklassenregel den Freibetrag rettet.", richtig: "Sie betrifft Steuerklasse und Tarif für das noch vorhandene Vermögen, nicht den persönlichen Freibetrag.", norm: "§ 15 Abs. 3 ErbStG" },
  ],
  zahlen: [
    { wert: "400.000 €", bedeutung: "Freibetrag je Kind und je Elternteil — bei zwei Kindern und zwei Eltern also viermal.", norm: "§ 16 Abs. 1 Nr. 2 ErbStG" },
    { wert: "800.000 €", bedeutung: "Was bei zwei Kindern im ersten Erbfall ungenutzt bleibt, wenn sie nichts erwerben." },
  ],
  merksatz: "Das Berliner Testament versorgt den Ehegatten — und lässt die Freibeträge der Kinder einmal ungenutzt verstreichen.",
  gewicht: { mandat: 3, reichweite: 3 },
  antwortfreigabe: "abstrakt",
  stand: "2026-09-13",
  quellen: ["Q8 Kap. 3.4, 3.5", "Q8 Fall 11"],
  verwandt: ["alternativen-berliner-testament", "pflichtteilsstrafklausel", "bindungswirkung-ehegattentestament", "unternehmertestament"],
};
