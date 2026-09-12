/* Q9 · Kap. 3.5 · BFH II R 31/22, II R 56/22 */
export default {
  id: "grest-konzernklausel",
  titel: "Die Konzernklausel ist keine Familienfreiheit",
  bereich: "grest",
  kurz: "Umstrukturierungen im Konzern können grunderwerbsteuerfrei bleiben — aber nur bei 95 Prozent Abhängigkeit und fünf Jahren davor und danach; eine Gruppe von Familienmitgliedern ist kein herrschendes Unternehmen.",
  normen: ["§ 6a GrEStG", "§ 1 Abs. 1 Nr. 3 GrEStG", "UmwG"],
  kern: [
    "Begünstigt sind bestimmte Umwandlungen, Einbringungen und gesellschaftsvertragliche Erwerbsvorgänge innerhalb qualifizierter Abhängigkeitsstrukturen — nicht jede Bewegung im Familienverbund.",
    "Die abhängige Gesellschaft muss grundsätzlich fünf Jahre vor und fünf Jahre nach dem Vorgang zu mindestens 95 Prozent gehalten werden; beide Fristen sind gleichrangig.",
    "Der Bundesfinanzhof hat 2025 die Grenze gezogen: Bei einer Ausgliederung auf einen bereits bestehenden Rechtsträger ist die Vorbehaltensfrist einzuhalten, wenn ihre Einhaltung rechtlich möglich war. Nur wo eine Frist gerade wegen des begünstigten Vorgangs nicht eingehalten werden kann — etwa bei einer Neugründung — wird sie reduziert.",
    "Ebenfalls 2025 entschieden: Eine bloße Gruppe natürlicher Personen ohne eigene Rechtsträgerschaft ist kein herrschendes Unternehmen. Familienstämme, die gemeinsam halten, erfüllen die Voraussetzung nicht.",
    "Für Familienstrukturen heißt das: Wer die Klausel nutzen will, braucht eine echte Holdinggesellschaft an der Spitze — und die muss fünf Jahre vorher schon dort stehen.",
  ],
  mythos: {
    behauptung: "Innerhalb der Familie kann man Immobiliengesellschaften umstrukturieren, ohne Grunderwerbsteuer auszulösen.",
    richtigstellung: "Die Konzernklausel setzt ein herrschendes Unternehmen voraus — mehrere Familienmitglieder nebeneinander sind das nicht. Ohne Holding an der Spitze greift sie nicht.",
  },
  einsatzfelder: [
    { situation: "Eine Familie will ihre Immobilien aus mehreren Einzelgesellschaften in einer Struktur bündeln.", warum: "Ohne Holding und ohne fünfjährige Vorlaufzeit fällt Grunderwerbsteuer an — die Struktur braucht Jahre Vorlauf, nicht Wochen." },
    { situation: "Vor dem Verkauf soll eine Gesellschaft ausgegliedert werden.", warum: "Die Nachbehaltensfrist von fünf Jahren kollidiert mit dem Verkaufsplan — beides zusammen geht nicht." },
  ],
  fehler: [
    { fehler: "Die Klausel wird als allgemeine Konzernfreiheit verstanden.", richtig: "Sie ist eng: qualifizierte Abhängigkeit, 95 Prozent, zwei Fünfjahresfristen, bestimmte Vorgangsarten.", norm: "§ 6a GrEStG" },
    { fehler: "Die Vorbehaltensfrist wird mit Hinweis auf die Neugründungsrechtsprechung übergangen.", richtig: "Die Ausnahme gilt nur, wenn die Frist rechtlich gar nicht eingehalten werden konnte — bei Ausgliederung auf einen bestehenden Rechtsträger ist sie einzuhalten." },
  ],
  zahlen: [
    { wert: "95 %", bedeutung: "Mindestbeteiligung des herrschenden Unternehmens, unmittelbar oder mittelbar.", norm: "§ 6a S. 4 GrEStG" },
    { wert: "5 + 5 Jahre", bedeutung: "Vor- und Nachbehaltensfrist.", norm: "§ 6a S. 4 GrEStG" },
  ],
  merksatz: "Die Konzernklausel braucht einen Konzern — eine Familie allein ist keiner.",
  gewicht: { mandat: 2, reichweite: 2 },
  antwortfreigabe: "keine",
  stand: "2026-09-13",
  quellen: ["Q9 Kap. 3.5"],
  verwandt: ["share-deal-grest", "grest-zurechnung", "immobilien-nachfolge-struktur", "familienpool"],
};
