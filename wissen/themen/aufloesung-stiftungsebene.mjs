/* Q2 Abschn. zur Beendigung; Q5 Folie 118; Q10 Abschn. F.4 */
export default {
  id: "aufloesung-stiftungsebene",
  titel: "Was die Auflösung die Stiftung selbst kostet",
  bereich: "erbst",
  kurz: "Anders als eine GmbH wird eine Stiftung bei der Auflösung nicht schematisch liquidationsbesteuert — unentgeltlich ausgekehrte Wirtschaftsgüter gehen grundsätzlich zu Buchwerten hinaus.",
  normen: ["§ 11 KStG", "§ 8 Abs. 1 KStG", "§ 13 Abs. 4 KStG", "§ 87c BGB"],
  kern: [
    "Für Kapitalgesellschaften gibt es ein eigenes Liquidationsregime, das am Ende alle stillen Reserven aufdeckt. Auf Stiftungen ist es nicht anwendbar — sie werden von der Vorschrift schlicht nicht erfasst.",
    "Die Folgen richten sich deshalb nach der Einordnung der einzelnen Wirtschaftsgüter und Tätigkeiten.",
    "Die blosse unentgeltliche Auskehr aus einer nichtbetrieblichen Vermögenssphäre realisiert nicht automatisch die stillen Reserven; unentgeltlich übertragen wird grundsätzlich zu Buchwerten.",
    "Werden im Rahmen der Liquidation dagegen einzelne Wirtschaftsgüter entgeltlich übertragen, beschränkt sich die Besteuerung auf den Veräusserungsgewinn.",
    "Gewerbesteuer fällt nicht an.",
    "Wandelt sich eine Familienstiftung in eine gemeinnützige um, bleiben die stillen Reserven ebenfalls unangetastet.",
    "Der teure Teil liegt also nicht bei der Stiftung, sondern bei denen, die das Vermögen bekommen — dort entstehen Schenkungsteuer und womöglich Einkommensteuer.",
  ],
  gegenueberstellung: {
    links: {
      label: "Ebene der Stiftung",
      punkte: [
        { krit: "Liquidationsbesteuerung", wert: "kein eigenes Regime", norm: "§ 11 KStG" },
        { krit: "Unentgeltliche Auskehr", wert: "grundsätzlich zu Buchwerten" },
        { krit: "Gewerbesteuer", wert: "fällt nicht an" },
        { krit: "Umwandlung in gemeinnützig", wert: "keine Aufdeckung stiller Reserven", norm: "§ 13 Abs. 4 KStG" },
      ],
    },
    rechts: {
      label: "Ebene der Begünstigten",
      punkte: [
        { krit: "Liquidationsbesteuerung", wert: "entfällt, dafür Erwerbsbesteuerung" },
        { krit: "Unentgeltliche Auskehr", wert: "schenkungsteuerpflichtiger Erwerb", norm: "§ 7 Abs. 1 Nr. 9 ErbStG" },
        { krit: "Gewerbesteuer", wert: "fällt nicht an" },
        { krit: "Umwandlung in gemeinnützig", wert: "kein Erwerb, weil nichts zufliesst" },
      ],
    },
  },
  fehler: [
    { fehler: "Die Auflösung wird wie die Liquidation einer GmbH gerechnet, mit voller Aufdeckung der stillen Reserven bei der Stiftung.", richtig: "Das Liquidationsregime des Körperschaftsteuerrechts gilt für Stiftungen nicht. Die Belastung entsteht beim Empfänger, nicht bei der Stiftung.", norm: "§ 11 KStG" },
  ],
  einsatzfelder: [
    { situation: "Eine Familienstiftung soll beendet und das Vermögen an die nächste Generation gegeben werden.", warum: "Die Rechnung gehört auf die richtige Ebene: bei der Stiftung meist nichts, bei den Anfallberechtigten Schenkungsteuer nach dem Verhältnis zum Stifter." },
  ],
  merksatz: "Die Auflösung einer Stiftung kostet nicht die Stiftung, sondern die Familie.",
  gewicht: { mandat: 2, reichweite: 2 },
  antwortfreigabe: "keine",
  stand: "2026-09-18",
  quellen: ["Q2 Abschn. zur Beendigung", "Q5 Folie 118", "Q10 Abschn. F.4"],
  verwandt: ["stiftung-aufloesung", "aufhebung-durch-behoerde", "vermoegensauskehr-stiftung", "flucht-gemeinnuetzigkeit"],
};
