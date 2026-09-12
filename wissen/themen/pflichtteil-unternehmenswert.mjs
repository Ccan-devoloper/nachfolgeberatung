/* Q9 · Kap. 2.5 */
export default {
  id: "pflichtteil-unternehmenswert",
  titel: "Der Erblasser kann den Pflichtteil nicht kleinrechnen",
  bereich: "bewertung",
  kurz: "Für den Pflichtteil zählt der wirkliche Wert des Nachlasses am Todestag; eine Wertfestlegung im Testament bindet ausdrücklich nicht — und der Steuerwert ist kein Ersatz für die Schätzung.",
  normen: ["§ 2311 BGB", "§ 2312 BGB", "§ 2313 BGB"],
  kern: [
    "Maßgeblich sind Bestand und Wert des Nachlasses im Zeitpunkt des Erbfalls — ein Tag, nicht ein Zeitraum, und nicht der Tag der Auseinandersetzung.",
    "Das Gesetz sagt ausdrücklich: Eine vom Erblasser getroffene Wertbestimmung ist nicht maßgebend. Der Satz „mein Unternehmen ist mit zwei Millionen anzusetzen\" im Testament bindet niemanden.",
    "Bei einem gesunden, fortgeführten Unternehmen spricht viel für eine ertragsorientierte Fortführungsbewertung; steht eine Liquidation real an, gewinnen Nettovermögen und Liquidationswert an Gewicht.",
    "Konfliktträchtig sind dieselben Posten wie in jedem Gutachterstreit: personenbezogene Erträge, nicht betriebsnotwendige Immobilien, Gesellschafterdarlehen, Pensionszusagen, latente Steuern, Minderheitsabschläge und Verfügungsbeschränkungen.",
    "Der Pflichtteilsberechtigte hat einen Auskunfts- und Wertermittlungsanspruch — er kann ein Sachverständigengutachten auf Kosten des Nachlasses verlangen.",
  ],
  einsatzfelder: [
    { situation: "Ein Kind ist enterbt, das Unternehmen geht an das Geschwister.", warum: "Der Pflichtteil ist ein Geldanspruch gegen den Erben — und der muss ihn aus Liquidität bedienen, die im Unternehmen steckt. Die Bewertung entscheidet über die Existenz der Nachfolge." },
    { situation: "Der Erblasser will Streit vermeiden und schreibt einen Wert ins Testament.", warum: "Das wirkt nicht. Was wirkt: ein notarieller Pflichtteilsverzicht gegen Abfindung, zu Lebzeiten verhandelt." },
  ],
  beispiele: [
    { konstellation: "Ein Vater vererbt sein Unternehmen (Verkehrswert rund 9 Mio. €) an die Tochter und setzt im Testament fest, es sei „mit 3 Mio. € zu bewerten\". Der Sohn ist enterbt.", gestaltung: "Die Festlegung bindet nicht. Der Sohn kann Wertermittlung verlangen; die Bewertung erfolgt objektiviert zum Todestag. Sein Pflichtteil bemisst sich am wirklichen Wert.", pointe: "Der Vater hat drei Millionen ins Testament geschrieben und sechs Millionen Streitwert hinterlassen." },
  ],
  fehler: [
    { fehler: "Der für die Erbschaftsteuer festgestellte Wert wird als Pflichtteilsgrundlage übernommen.", richtig: "Steuerwert und zivilrechtlicher Nachlasswert beantworten verschiedene Fragen — auch die Methoden und Stichtagsregeln unterscheiden sich.", norm: "§ 2311 BGB" },
    { fehler: "Die Liquidität für den Pflichtteil wird erst nach dem Erbfall gesucht.", richtig: "Lebensversicherung, Privatvermögen, gestreckte Zahlung oder Stundung gehören in die Nachfolgeplanung — sonst zahlt das Unternehmen." },
  ],
  merksatz: "Was das Unternehmen wert ist, entscheidet nicht der Erblasser — sondern der Todestag.",
  gewicht: { mandat: 3, reichweite: 3 },
  antwortfreigabe: "abstrakt",
  stand: "2026-09-13",
  quellen: ["Q9 Kap. 2.5"],
  verwandt: ["bewertungsanlass", "pflichtteil-stiftung", "pflichtteil-fristanlauf", "unternehmertestament"],
};
