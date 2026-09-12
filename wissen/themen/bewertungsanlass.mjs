/* Q9 · Kap. 2.1 · Executive Summary */
export default {
  id: "bewertungsanlass",
  titel: "Vier Werte für denselben Anteil — und jeder ist richtig",
  bereich: "bewertung",
  kurz: "Erbschaftsteuerwert, Pflichtteilswert, Abfindung und Kaufpreis können für dieselbe Beteiligung gleichzeitig weit auseinanderliegen; wer einen davon für „den\" Unternehmenswert hält, rechnet den falschen Fall.",
  normen: ["§ 11 BewG", "§ 2311 BGB", "§ 728 BGB", "§ 135 HGB", "§§ 1375, 1376 BGB"],
  kern: [
    "Der Steuerwert folgt dem Bewertungsgesetz und einer gesetzlichen Methodenrangfolge — er beantwortet nur die Frage, worauf Erbschaft- oder Schenkungsteuer erhoben wird.",
    "Der Pflichtteilswert ist der wirkliche Wert des Nachlasses am Todestag, zivilrechtlich zu schätzen — der Steuerwert darf dafür nicht ungeprüft übernommen werden.",
    "Die Abfindung richtet sich zuerst nach dem Gesellschaftsvertrag; fehlt eine Regelung, schuldet die Gesellschaft einen dem Anteilswert angemessenen Betrag.",
    "Im Zugewinnausgleich zählt der individuelle Verkehrswert zum jeweiligen Stichtag — mit eigenen Regeln für latente Steuern und persönliche Erträge.",
    "Der Transaktionspreis ist keine Bewertung, sondern ein Verhandlungsergebnis: Synergien, Finanzierung, Kontrollprämie, Nettoverschuldung und Garantien stecken darin.",
  ],
  mythos: {
    behauptung: "Der Steuerberater hat den Unternehmenswert für die Erbschaftsteuer schon berechnet — damit ist die Frage erledigt.",
    richtigstellung: "Damit ist genau eine Frage beantwortet. Für Pflichtteil, Abfindung und Zugewinn gelten andere Maßstäbe, andere Stichtage und andere Methoden — dieselbe Beteiligung kann dort um ein Mehrfaches abweichen.",
  },
  gegenueberstellung: {
    links: { label: "Steuerwert", punkte: [
      { krit: "Rechtsanker", wert: "Bewertungsgesetz, gesetzliche Methodenrangfolge", norm: "§ 11 BewG" },
      { krit: "Stichtag", wert: "Tag der Steuerentstehung" },
      { krit: "Maßstab", wert: "Gemeiner Wert, typisiert" },
      { krit: "Verhandelbar", wert: "Nein — Feststellung durch das Finanzamt" },
    ] },
    rechts: { label: "Pflichtteilswert", punkte: [
      { krit: "Rechtsanker", wert: "Bürgerliches Recht, Schätzung des Nachlasswerts", norm: "§ 2311 BGB" },
      { krit: "Stichtag", wert: "Todestag des Erblassers" },
      { krit: "Maßstab", wert: "Wirklicher Wert, meist ertragsorientierte Fortführung" },
      { krit: "Verhandelbar", wert: "Ja — und oft Gegenstand eines Gutachterstreits" },
    ] },
  },
  einsatzfelder: [
    { situation: "Ein Kind verlangt den Pflichtteil, die Erbschaftsteuererklärung liegt schon vor.", warum: "Der festgestellte Steuerwert ist ein Ausgangspunkt für das Gespräch, aber kein Maßstab für den Anspruch — beide Seiten brauchen eine eigene Bewertung." },
    { situation: "Ein Gesellschafter scheidet aus und der Vertrag nennt den Buchwert.", warum: "Buchwert, Steuerwert und Verkehrswert liegen bei gewachsenen Unternehmen typischerweise um ein Vielfaches auseinander — das ist der Konfliktherd." },
  ],
  fehler: [
    { fehler: "Über Zahlen wird gesprochen, bevor der Bewertungsanlass festgelegt ist.", richtig: "Zuerst schriftlich festhalten: Welche Frage, welche Norm, welcher Stichtag. Danach rechnen." },
    { fehler: "Ein Bewertungsgutachten und eine steuerliche Feststellung werden begrifflich vermischt.", richtig: "Das eine ist eine Schätzung für einen zivilrechtlichen Anspruch, das andere ein Verwaltungsakt mit Rechtsbehelfsweg." },
  ],
  merksatz: "Es gibt nicht den Unternehmenswert — es gibt den Wert für eine bestimmte Frage an einem bestimmten Tag.",
  gewicht: { mandat: 3, reichweite: 3 },
  antwortfreigabe: "abstrakt",
  stand: "2026-09-13",
  quellen: ["Q9 Kap. 2.1", "Q9 Kap. 1"],
  verwandt: ["bewertung-methodenrangfolge", "pflichtteil-unternehmenswert", "abfindungsklausel", "ertragswertverfahren-praxis"],
};
