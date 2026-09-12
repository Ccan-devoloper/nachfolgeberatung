/* Q7 · Kap. 18 Schenkungsverträge, Rückforderungsrechte · Fehler 26 */
export default {
  id: "rueckforderungsrechte",
  titel: "Rückforderungsrechte — das Sicherheitsnetz der Schenkung",
  bereich: "schenkung",
  kurz: "Jede lebzeitige Übertragung braucht eine Rückabwicklungsmatrix: Insolvenz, Scheidung, Vorversterben, Wegzug, Pflichtverletzung — aber ein freies Widerrufsrecht kann die Gestaltung als Ganzes entwerten.",
  normen: ["§ 528 BGB", "§ 530 BGB", "§ 29 Abs. 1 Nr. 1 ErbStG", "§ 2325 Abs. 3 BGB"],
  kern: [
    "Das Gesetz gibt dem Schenker nur zwei Rückforderungsgründe — eigene Verarmung und groben Undank. Alles andere muss im Vertrag stehen.",
    "Die typischen Störfälle: Vorversterben des Beschenkten, Insolvenz oder Zwangsvollstreckung, Scheidung, Verfügung ohne Zustimmung, Wegzug in ein ungünstiges Land, Verlust der Qualifikation, schwere Pflichtverletzung.",
    "Wird die Schenkung aufgrund eines vertraglichen Rückforderungsrechts zurückgewährt, erlischt die Schenkungsteuer rückwirkend — aber nur bei einem echten Rückforderungsrecht, nicht bei bloßer Einigung.",
    "Ein freies, jederzeitiges Widerrufsrecht ist gefährlich: Wer jederzeit zurückholen kann, hat wirtschaftlich nichts aufgegeben — Pflichtteilsfrist, Vermögensschutz und steuerliche Anerkennung leiden.",
    "Rückforderungsrechte müssen mit dem Gesellschaftsvertrag abgestimmt sein — die Rückübertragung eines Anteils braucht dieselben Zustimmungen wie die Hinübertragung.",
  ],
  einsatzfelder: [
    { situation: "Eltern schenken dem Sohn Gesellschaftsanteile; er heiratet ohne Ehevertrag.", warum: "Ein Rückforderungsrecht für den Fall der Scheidung oder für fehlenden Ehevertrag hält die Anteile aus dem Zugewinnausgleich heraus." },
    { situation: "Der Beschenkte gerät Jahre später in wirtschaftliche Schwierigkeiten.", warum: "Ohne Rückforderungsrecht für Insolvenz und Zwangsvollstreckung fällt das Geschenkte den Gläubigern zu." },
    { situation: "Das beschenkte Kind stirbt vor den Eltern — das Vermögen ginge an Schwiegerkind und Enkel.", warum: "Ein Rückfallrecht bei Vorversterben holt das Vermögen zurück oder leitet es an die Enkel." },
  ],
  beispiele: [
    { konstellation: "Ein Unternehmer schenkt seiner Tochter 30 % der GmbH. Der Vertrag enthält ein Rückforderungsrecht für den Fall, dass über ihr Vermögen das Insolvenzverfahren eröffnet wird.", gestaltung: "Sieben Jahre später scheitert ihr eigenes Start-up. Der Vater fordert die Anteile zurück; die Schenkungsteuer von damals erlischt rückwirkend.", pointe: "Die Anteile sind wieder in sicherer Hand — und die Steuer gibt es zurück. Ohne die Klausel hätte der Insolvenzverwalter verkauft." },
  ],
  fehler: [
    { fehler: "Der Schenker behält sich ein freies Widerrufsrecht vor, „für alle Fälle\".", richtig: "Damit gilt die Schenkung wirtschaftlich als nicht vollzogen — enumerative Rückforderungsgründe schützen, ein Blankowiderruf entwertet.", norm: "§ 2325 Abs. 3 BGB" },
    { fehler: "Die Rückforderung steht im Schenkungsvertrag, aber die Satzung verlangt für jede Abtretung die Zustimmung der Gesellschafterversammlung.", richtig: "Die Rückübertragung muss gesellschaftsrechtlich durchsetzbar sein — Satzung und Schenkungsvertrag zusammen gestalten." },
  ],
  merksatz: "Rückforderungsrechte sind ein Netz mit benannten Maschen — kein Gummiband.",
  gewicht: { mandat: 3, reichweite: 2 },
  antwortfreigabe: "abstrakt",
  stand: "2026-09-12",
  quellen: ["Q7 Kap. 18.1", "Q7 Fehler 26"],
  verwandt: ["steuerklausel-schenkung", "niessbrauch-grundlagen", "pflichtteil-fristanlauf", "ehevertrag-unternehmer"],
};
