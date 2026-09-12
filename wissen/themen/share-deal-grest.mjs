/* Q9 · Kap. 3.1, 3.2 */
export default {
  id: "share-deal-grest",
  titel: "Neunzig Prozent in zehn Jahren — die Grunderwerbsteuer bei Immobiliengesellschaften",
  bereich: "grest",
  kurz: "Wer Anteile an einer Gesellschaft mit Grundbesitz bewegt, löst Grunderwerbsteuer aus, sobald innerhalb von zehn Jahren 90 Prozent auf neue Gesellschafter übergehen — auch schrittweise und auch innerhalb der Familie.",
  normen: ["§ 1 Abs. 2a GrEStG", "§ 1 Abs. 2b GrEStG", "§ 1 Abs. 3 GrEStG", "§ 1 Abs. 3a GrEStG"],
  kern: [
    "Vier Tatbestände greifen ineinander: Gesellschafterwechsel bei Personengesellschaften, Gesellschafterwechsel bei Kapitalgesellschaften, Anteilsvereinigung in einer Hand und wirtschaftliche Beteiligung.",
    "Die ersten beiden rechnen über zehn Jahre: Gehen in diesem Zeitraum mindestens 90 Prozent der Anteile auf neue Gesellschafter über, gilt das als Erwerb des Grundstücks durch eine neue Gesellschaft.",
    "Bei mehrstufigen Beteiligungen gelten eigene Rechenregeln: Ein Wechsel von 90 Prozent auf einer Zwischenebene kann die Zwischengesellschaft für die darunterliegende Ebene vollständig zur neuen Gesellschafterin machen.",
    "Ein Blick auf die Gesellschafterliste am Tag des Vollzugs genügt deshalb nicht — es braucht eine Beteiligungschronik über zehn Jahre.",
    "Die Befreiungen für Übertragungen zwischen Verwandten gerader Linie und Ehegatten gelten auch hier, aber nur anteilig und nur für die dort genannten Vorgänge — sie machen den Familienpool nicht grunderwerbsteuerfrei.",
  ],
  einsatzfelder: [
    { situation: "Eltern übertragen Anteile an der Immobilien-KG über zwölf Jahre in Tranchen an drei Kinder.", warum: "Jede Tranche zählt in den Zehnjahreszeitraum. Ohne Chronik merkt niemand, wann die 90 Prozent erreicht sind — die Steuer entsteht dann für den ganzen Grundbesitz." },
    { situation: "Eine Familiengesellschaft nimmt einen neuen Stamm auf oder kauft einen Stamm heraus.", warum: "Beides bewegt Quoten. Vor der Beurkundung gehört gerechnet, ob die Schwelle überschritten wird." },
  ],
  ablauf: [
    { schritt: "Alle inländischen Grundstücke je Gesellschaft erfassen", hinweis: "Auch kürzlich erworbene und veräußerte — die Zurechnung wirkt zeitbezogen." },
    { schritt: "Zehnjahres-Chronik der Beteiligungen aufbauen", hinweis: "Datum, direkte Quote, indirekte Kette, Alt- oder Neugesellschafterstatus, Umstrukturierungen, Erbfälle." },
    { schritt: "Status grundstücksbezogen bestimmen", hinweis: "Wer ist für dieses konkrete Grundstück Altgesellschafter — die Frage kann je Objekt anders ausfallen." },
    { schritt: "Schwelle und Tatbestand prüfen", hinweis: "Erst danach steht fest, ob und welcher Tatbestand greift.", norm: "§ 1 Abs. 2a, 2b GrEStG" },
    { schritt: "Anzeige als Teil des Vollzugs einplanen", hinweis: "Fristgerecht und vollständig — sonst entfallen die Erleichterungen bei einer Rückabwicklung.", norm: "§ 16 Abs. 5 GrEStG" },
  ],
  fehler: [
    { fehler: "Beraten wird auf Basis der Beteiligungsquote allein.", richtig: "Grundstücks- und Zeitachse sind gleich wichtig: Welches Objekt, welcher Gesellschaft, zu welchem Zeitpunkt zugerechnet?" },
    { fehler: "Die 89,9-Prozent-Gestaltung wird als dauerhaft sicher behandelt.", richtig: "Sie ist eine Momentaufnahme. Jede spätere Bewegung zählt in denselben Zehnjahreszeitraum hinein." },
  ],
  zahlen: [
    { wert: "90 %", bedeutung: "Schwelle für alle Ergänzungstatbestände seit 2021.", norm: "§ 1 Abs. 2a, 2b, 3, 3a GrEStG" },
    { wert: "10 Jahre", bedeutung: "Betrachtungszeitraum für den Gesellschafterwechsel.", norm: "§ 1 Abs. 2a, 2b GrEStG" },
  ],
  merksatz: "Bei Immobiliengesellschaften zählt nicht, wer heute hält — sondern was sich in zehn Jahren bewegt hat.",
  gewicht: { mandat: 3, reichweite: 2 },
  antwortfreigabe: "keine",
  stand: "2026-09-13",
  quellen: ["Q9 Kap. 3.1, 3.2, 3.7"],
  verwandt: ["grest-zurechnung", "grest-signing-closing", "grest-konzernklausel", "immobilien-nachfolge-struktur"],
};
