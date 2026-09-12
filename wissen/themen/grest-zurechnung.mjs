/* Q9 · Kap. 3.4 · Beispiel 2 */
export default {
  id: "grest-zurechnung",
  titel: "Wem gehört das Grundstück grunderwerbsteuerlich? — Zurechnungsketten",
  bereich: "grest",
  kurz: "Die entscheidende Frage ist nicht, wer im Grundbuch steht, sondern welcher Gesellschaft ein bestimmtes Grundstück für welchen Tatbestand zu welchem Zeitpunkt zuzurechnen ist — seit Ende 2024 steht das im Gesetz.",
  normen: ["§ 1 Abs. 4a GrEStG", "§ 1 Abs. 1 GrEStG", "§ 1 Abs. 2 GrEStG", "§ 23 Abs. 25 GrEStG"],
  kern: [
    "Seit dem Jahressteuergesetz 2024 regelt das Gesetz ausdrücklich, wann ein Grundstück zum Vermögen einer Gesellschaft gehört: im Grundfall, wenn sie es durch einen steuerbaren Vorgang erworben hat.",
    "Die Zurechnung endet, wenn ein anderer Rechtsträger es durch einen solchen Vorgang erwirbt oder die Voraussetzungen entfallen — zusätzlich kann eine Verwertungsbefugnis eine Zurechnung begründen.",
    "Die Ländererlasse vom März 2026 trennen ausdrücklich die Rechtslage bis zum 5. Dezember 2024 und ab dem 6. Dezember 2024. Für Altfälle arbeiteten Rechtsprechung und Verwaltung teils mit einer zusätzlichen Zurechnung an Obergesellschaften.",
    "Die Beratung muss deshalb für jede Transaktion zuerst den zeitlichen Anwendungsbereich bestimmen — dieselbe Struktur wird vor und nach dem Stichtag unterschiedlich beurteilt.",
    "Eine Beteiligungskette kann gesellschaftsrechtlich unverändert wirken und grunderwerbsteuerlich trotzdem mehrere relevante Ebenen enthalten.",
  ],
  beispiele: [
    { konstellation: "Eine Obergesellschaft hält 100 Prozent an einer Zwischengesellschaft, diese 100 Prozent an der Grundstücksgesellschaft. Nun werden 95 Prozent der Obergesellschaft verkauft.", gestaltung: "Eigentümerin der Immobilien ist nur die unterste Gesellschaft. Für die Prüfung zählen aber die mittelbaren Gesellschafterwechsel und die tatbestandsbezogene Zurechnung auf jeder Ebene.", pointe: "Drei Gesellschaften, ein Verkauf — und drei getrennte Prüfungen, von denen jede die Steuer auslösen kann." },
  ],
  einsatzfelder: [
    { situation: "Eine Familienholding mit mehreren Immobilientöchtern wird umstrukturiert.", warum: "Ohne Zurechnungsdiagramm über alle Ebenen und alle Objekte lässt sich nicht sagen, welcher Vorgang steuerbar ist." },
    { situation: "Ein Grundstück wurde vor Jahren innerhalb der Gruppe bewegt.", warum: "Die frühere Bewegung bestimmt mit, wem das Objekt heute zugerechnet wird — die Grundstückshistorie gehört in die Prüfung." },
  ],
  fehler: [
    { fehler: "Geprüft wird nur der Kaufvertrag über die Anteile.", richtig: "Beteiligungskette, Grundstückshistorie, frühere steuerbare Vorgänge und das Datum jeder Umstrukturierung gehören in ein gemeinsames Diagramm." },
    { fehler: "Die Rechtslage für Altfälle wird auf neue Vorgänge fortgeschrieben.", richtig: "Der 6. Dezember 2024 ist die Zäsur; davor und danach gelten unterschiedliche Zurechnungsregeln.", norm: "§ 1 Abs. 4a GrEStG" },
  ],
  merksatz: "Das Grundbuch sagt, wer Eigentümer ist — die Grunderwerbsteuer fragt, wem es zugerechnet wird.",
  gewicht: { mandat: 2, reichweite: 1 },
  antwortfreigabe: "keine",
  stand: "2026-09-13",
  quellen: ["Q9 Kap. 3.4", "Q9 Beispiel 2"],
  verwandt: ["share-deal-grest", "grest-signing-closing", "grest-konzernklausel"],
};
