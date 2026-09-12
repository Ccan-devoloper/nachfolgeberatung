/* Q9 · Kap. 4.2, 4.3, 4.4 · Beispiel 3 */
export default {
  id: "governance-ebenen",
  titel: "Familientag ist keine Gesellschafterversammlung",
  bereich: "familygovernance",
  kurz: "Familie, Eigentümerkreis, Gesellschaft und Nachfolge sind vier Ebenen mit eigenen Instrumenten; werden sie vermischt, entstehen Schattenorgane und Beschlüsse, die rechtlich nicht existieren.",
  normen: ["§ 48 GmbHG", "§ 51 GmbHG", "§ 705 BGB", "Gesellschaftsvertrag"],
  kern: [
    "Ebene Familie: Familienverfassung, Familientag, Familienrat. Sie dürfen Werte, Information, Ausbildung und Konfliktverfahren regeln — keine Gesellschafterbeschlüsse fassen.",
    "Ebene Eigentümerkreis: Pool- und Stimmbindungsverträge koordinieren Stimmverhalten und Übertragung — sie binden schuldrechtlich, ändern aber nicht die Satzung.",
    "Ebene Gesellschaft: Gesellschaftsvertrag, Geschäftsordnung, Beirat. Hier entstehen Organrechte, Zustimmungskataloge und wirksame Beschlüsse.",
    "Ebene Nachfolge und Privates: Testament, Erbvertrag, Ehevertrag, Schenkungsvertrag. Erbfolge, Pflichtteil, Güterstand und Rückforderungsrechte gehören dorthin und nirgendwo sonst.",
    "Der Familienrat koordiniert und bereitet vor — er sollte weder faktisch Geschäftsführung betreiben noch unklar in Organrechte eingreifen. Kompetenz, Wahl, Amtszeit, Informationszugang, Budget und Vertraulichkeit gehören in eine Governance-Ordnung.",
  ],
  gegenueberstellung: {
    links: { label: "Familientag", punkte: [
      { krit: "Wer nimmt teil", wert: "Die Familie, oft auch ohne Anteile" },
      { krit: "Was entsteht", wert: "Information, Meinungsbild, Beziehungsarbeit" },
      { krit: "Rechtswirkung", wert: "Keine — ausser er wird zugleich formgerecht als Versammlung durchgeführt" },
      { krit: "Protokoll", wert: "Governance-Ergebnisse, keine Beschlüsse" },
    ] },
    rechts: { label: "Gesellschafterversammlung", punkte: [
      { krit: "Wer nimmt teil", wert: "Die Gesellschafter, nach Gesellschaftsvertrag" },
      { krit: "Was entsteht", wert: "Wirksame Beschlüsse" },
      { krit: "Rechtswirkung", wert: "Bindend — mit Anfechtungs- und Nichtigkeitsfolgen", norm: "§ 48 GmbHG" },
      { krit: "Protokoll", wert: "Beschlussprotokoll mit Form und Frist" },
    ] },
  },
  einsatzfelder: [
    { situation: "Drei Stämme, zwei operativ tätige Cousins, acht passive Gesellschafter.", warum: "Der Familienrat bündelt Information, der Beirat übernimmt Aufsicht, Bewertungsfragen gehen an einen Sachverständigen — jede Frage an ihren Ort." },
    { situation: "Beim Familientag wird über die Ausschüttung „entschieden\".", warum: "Ohne Einberufung, Form und Beschlussfähigkeit ist das keine Entscheidung — die Enttäuschung kommt später und trifft die Falschen." },
  ],
  fehler: [
    { fehler: "Der Familienrat bekommt unklare quasi-organische Entscheidungsrechte.", richtig: "Entweder echte Rechte über den Gesellschaftsvertrag — oder klar beschränkt auf Beratung, Vorbereitung und Vorschlag." },
    { fehler: "Der Familientag wird zur Gesellschafterversammlung umfunktioniert.", richtig: "Form, Einberufung und Beschlussregeln gelten trotzdem. Beide Formate lassen sich am selben Tag durchführen — getrennt und protokolliert.", norm: "§ 51 GmbHG" },
  ],
  merksatz: "Vier Ebenen, vier Regelwerke — wer sie vermischt, bekommt Beschlüsse, die es nicht gibt.",
  gewicht: { mandat: 2, reichweite: 3 },
  antwortfreigabe: "abstrakt",
  stand: "2026-09-13",
  quellen: ["Q9 Kap. 4.2, 4.3, 4.4", "Q9 Beispiel 3"],
  verwandt: ["familienverfassung", "konflikt-eskalation", "familienpool", "stiftung-governance"],
};
