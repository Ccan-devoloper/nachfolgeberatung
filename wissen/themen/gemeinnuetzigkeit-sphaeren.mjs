/* Q10 Abschn. G.1b · Sphärenmodell */
export default {
  id: "gemeinnuetzigkeit-sphaeren",
  titel: "Vier Töpfe, vier Regeln — das Sphärenmodell",
  bereich: "gemeinnuetzig",
  kurz: "Eine gemeinnützige Stiftung hat nicht eine Kasse, sondern vier: ideeller Bereich, Vermögensverwaltung, Zweckbetrieb und wirtschaftlicher Geschäftsbetrieb. Nur der letzte wird besteuert — und nur er gefährdet die Gemeinnützigkeit.",
  normen: ["§ 14 AO", "§ 64 AO", "§ 65 AO", "§§ 66–68 AO", "§ 5 Abs. 1 Nr. 9 KStG"],
  kern: [
    "Im ideellen Bereich landet, was ohne Gegenleistung zufliesst: Spenden, Mitgliedsbeiträge, öffentliche Förderung, Erbschaften. Keine Ertragsteuer, keine Umsatzsteuer.",
    "Zur Vermögensverwaltung gehört die Fruchtziehung aus erhaltenem Vermögen: Zinsen, Dividenden, Mieten, Pachten, Lizenzen. Ertragsteuerfrei, umsatzsteuerlich aber durchaus relevant.",
    "Der Zweckbetrieb ist ein wirtschaftlicher Betrieb, der den Satzungszweck selbst verwirklicht — die Schulmensa, das Krankenhaus, die Soziallotterie. Ertragsteuerfrei, obwohl damit Geld verdient wird.",
    "Der wirtschaftliche Geschäftsbetrieb ist alles übrige Erwerbshandeln: aktive Werbung, die Beteiligung an einer gewerblichen Personengesellschaft, die Betriebsaufspaltung. Hier wird besteuert wie bei jedem Unternehmen.",
    "Die Grenze zwischen Vermögensverwaltung und wirtschaftlichem Geschäftsbetrieb entscheidet sich daran, ob Substanz erhalten und genutzt wird oder ob Umschichtung und unternehmerische Organisation im Vordergrund stehen.",
    "Praktisch wichtig: Eine Beteiligung an einer Kapitalgesellschaft ist grundsätzlich Vermögensverwaltung — es sei denn, die Stiftung nimmt tatsächlich entscheidenden Einfluss auf die laufende Geschäftsführung oder es liegt eine Betriebsaufspaltung vor.",
    "Verluste sind das eigentliche Risiko: Mittel des ideellen Bereichs dürfen nicht dauerhaft in einen defizitären Geschäftsbetrieb fliessen. Ein Dauerverlustbetrieb ist Mittelfehlverwendung und kann die Gemeinnützigkeit kosten.",
    "Mehrere wirtschaftliche Geschäftsbetriebe werden zusammengerechnet — Gewinne und Verluste lassen sich also untereinander verrechnen.",
  ],
  gegenueberstellung: {
    links: {
      label: "Zweckbetrieb",
      punkte: [
        { krit: "Was es ist", wert: "Ein Betrieb, der den Satzungszweck selbst verwirklicht", norm: "§ 65 AO" },
        { krit: "Beispiele", wert: "Krankenhaus, Schulmensa, Museumsshop, Soziallotterie" },
        { krit: "Ertragsteuer", wert: "Frei" },
        { krit: "Umsatzsteuer", wert: "Oft befreit oder ermäßigt — der Maßstab ist zwischen BFH und Verwaltung umstritten", norm: "§ 12 Abs. 2 Nr. 8 UStG" },
        { krit: "Risiko", wert: "Abgrenzung: Sonderregelungen gehen der allgemeinen Definition vor", norm: "§§ 66–68 AO" },
      ],
    },
    rechts: {
      label: "Wirtschaftlicher Geschäftsbetrieb",
      punkte: [
        { krit: "Was es ist", wert: "Erwerbstätigkeit jenseits von Zweck und Vermögensverwaltung", norm: "§ 14 AO" },
        { krit: "Beispiele", wert: "Aktive Werbung, gewerbliche Beteiligung, Betriebsaufspaltung" },
        { krit: "Ertragsteuer", wert: "Pflichtig oberhalb von 50.000 € Einnahmen", norm: "§ 64 Abs. 3 AO" },
        { krit: "Umsatzsteuer", wert: "Nach allgemeinen Regeln" },
        { krit: "Risiko", wert: "Dauerverluste sind Mittelfehlverwendung und gefährden die Gemeinnützigkeit" },
      ],
    },
  },
  fehler: [
    { fehler: "Die Stiftung gleicht Verluste ihres Geschäftsbetriebs aus Spendenmitteln aus.", richtig: "Das ist Mittelfehlverwendung. Zulässig ist die Verrechnung mit Gewinnen anderer Geschäftsbetriebe oder mit Gewinnen der sechs Vorjahre — nicht der Griff in den ideellen Topf.", norm: "§ 55 Abs. 1 Nr. 1 AO" },
    { fehler: "Werbung auf der Website wird wie eine Spende behandelt.", richtig: "Ein blosser Dank ohne Hervorhebung bleibt ideeller Bereich. Sobald der Sponsor aktiv werben oder das Logo hervorheben darf, wird daraus Vermögensverwaltung oder ein Geschäftsbetrieb." },
  ],
  beispiele: [
    { konstellation: "Eine gemeinnützige Stiftung hält 60 Prozent an der operativen GmbH der Familie und vermietet ihr zugleich das Betriebsgrundstück.", gestaltung: "Beteiligung und Vermietung wären je für sich Vermögensverwaltung — zusammen begründen sie aber eine Betriebsaufspaltung.", pointe: "Aus zwei steuerfreien Sphären wird ein steuerpflichtiger Geschäftsbetrieb. Das ist einer der häufigsten Fallstricke bei unternehmensverbundenen Stiftungen." },
  ],
  merksatz: "Wer versteht, in welchen der vier Töpfe ein Euro fällt, versteht das halbe Gemeinnützigkeitsrecht.",
  gewicht: { mandat: 3, reichweite: 3 },
  antwortfreigabe: "abstrakt",
  stand: "2026-09-18",
  quellen: ["Q10 Abschn. G.1b, G.4c, G.4d, G.4e"],
  verwandt: ["gemeinnuetzigkeit-vorteile", "zeitnahe-mittelverwendung", "gemeinnuetzigkeit-verlieren", "konzentrationsrisiko-stiftung"],
};
