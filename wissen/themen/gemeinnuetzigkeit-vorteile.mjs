/* Q10 Abschn. G.1 · Steuerbegünstigung und sonstige Vorteile */
export default {
  id: "gemeinnuetzigkeit-vorteile",
  titel: "Was Gemeinnützigkeit wirklich bringt — und was nicht",
  bereich: "gemeinnuetzig",
  kurz: "Die gemeinnützige Stiftung zahlt keine Körperschaft- und Gewerbesteuer, erhält Zuwendungen erbschaftsteuerfrei und verschafft ihren Spendern den Spendenabzug. Eine vollständige Steuerbefreiung ist sie deshalb nicht.",
  normen: ["§ 5 Abs. 1 Nr. 9 KStG", "§ 3 Nr. 6 GewStG", "§ 13 Abs. 1 Nr. 16 ErbStG", "§ 10b EStG", "§ 12 Abs. 2 Nr. 8 UStG", "§ 64 Abs. 3 AO"],
  kern: [
    "Die Stiftung selbst ist von Körperschaft- und Gewerbesteuer befreit — allerdings nur, soweit sie sich im begünstigten Bereich bewegt.",
    "Zuwendungen an sie sind von der Erbschaft- und Schenkungsteuer befreit. Wer Vermögen in eine gemeinnützige Stiftung gibt, zahlt darauf keine Schenkungsteuer.",
    "Auf Kapitalerträge wird kein Steuerabzug vorgenommen; Leistungen der Stiftung unterliegen häufig dem ermäßigten Umsatzsteuersatz.",
    "Die Vorteile für Dritte wiegen oft schwerer als die eigenen: Spender können ihre Zuwendungen absetzen, Unternehmen Wirtschaftsgüter zum Buchwert übertragen, Ehrenamtliche Freibeträge nutzen.",
    "Dazu kommen Vorteile jenseits des Steuerrechts: Zahlungen aus eingestellten Strafverfahren, Gebührenbefreiungen, eine besondere Stellung im Vergaberecht.",
    "Entscheidend ist die Kehrseite: Gemeinnützigkeit ist keine Generalbefreiung. Wer einen wirtschaftlichen Geschäftsbetrieb unterhält, versteuert dessen Gewinn wie jedes Unternehmen, sobald die Einnahmen 50.000 Euro im Jahr übersteigen.",
    "Und der Preis ist hoch: Das Vermögen ist dauerhaft in der gemeinnützigen Sphäre gebunden. Es kommt nie wieder zur Familie zurück — auch nicht bei Auflösung.",
    "Wer Vermögen binden und zugleich die Familie versorgen will, muss die Frage anders stellen: Familienstiftung, gemeinnützige Stiftung oder eine Kombination aus beidem.",
  ],
  vorteile: [
    { vorteil: "Keine laufende Ertragsteuer", erklaerung: "Erträge aus Vermögensverwaltung und Zweckbetrieb bleiben unversteuert — das Vermögen wächst schneller als im Privatvermögen.", norm: "§ 5 Abs. 1 Nr. 9 KStG" },
    { vorteil: "Zuwendungen bleiben erbschaftsteuerfrei", erklaerung: "Anders als bei der Familienstiftung fällt bei der Ausstattung keine Schenkungsteuer an — und es gibt keine Erbersatzsteuer alle 30 Jahre.", norm: "§ 13 Abs. 1 Nr. 16 ErbStG" },
    { vorteil: "Spendenabzug für den Stifter", erklaerung: "Zuwendungen in den Vermögensstock lassen sich über zehn Jahre verteilt geltend machen.", norm: "§ 10b Abs. 1a EStG" },
  ],
  nachteile: [
    { nachteil: "Das Vermögen ist endgültig gebunden", erklaerung: "Die Vermögensbindung verlangt, dass das Vermögen auch bei Auflösung in der gemeinnützigen Sphäre bleibt. Ein Rückweg zur Familie existiert nicht.", norm: "§ 55 Abs. 1 Nr. 4 AO" },
    { nachteil: "Laufende Bindungen statt einmaliger Prüfung", erklaerung: "Zeitnahe Mittelverwendung, Ausschließlichkeit, Angemessenheit jeder Vergütung — die Stiftung steht dauerhaft unter Beobachtung des Finanzamts.", norm: "§ 63 AO" },
    { nachteil: "Die Familie kann nur begrenzt bedacht werden", erklaerung: "Höchstens ein Drittel des Einkommens darf für den Unterhalt des Stifters und seiner nächsten Angehörigen verwendet werden.", norm: "§ 58 Nr. 6 AO" },
  ],
  einsatzfelder: [
    { situation: "Ein Unternehmer ohne Nachfolger will sein Lebenswerk erhalten und einem Zweck widmen.", warum: "Hier trägt die gemeinnützige Stiftung ihre Stärke voll aus: steuerfreier Vermögensaufbau, dauerhafte Zweckbindung, gesellschaftliche Wirkung." },
    { situation: "Eine Familie will Vermögen binden und trotzdem Erträge beziehen.", warum: "Dann ist die gemeinnützige Stiftung der falsche Weg — die Drittelgrenze deckt keine Versorgung. Familienstiftung oder Doppelstiftung prüfen." },
  ],
  zahlen: [
    { wert: "50.000 €", bedeutung: "Bis zu dieser Einnahmengrenze bleibt der wirtschaftliche Geschäftsbetrieb ertragsteuerfrei.", norm: "§ 64 Abs. 3 AO" },
    { wert: "1/3", bedeutung: "Höchstens ein Drittel des Einkommens darf dem Unterhalt des Stifters und seiner nächsten Angehörigen dienen.", norm: "§ 58 Nr. 6 AO" },
    { wert: "10 Mio. €", bedeutung: "Höchstbetrag für Zuwendungen in den Vermögensstock, verteilbar über zehn Jahre.", norm: "§ 10b Abs. 1a EStG" },
  ],
  merksatz: "Gemeinnützigkeit befreit von Steuern, nicht von Pflichten — und niemals vom Grundsatz, dass das Vermögen nicht zurückkommt.",
  gewicht: { mandat: 3, reichweite: 3 },
  antwortfreigabe: "abstrakt",
  stand: "2026-09-18",
  quellen: ["Q10 Abschn. G.1"],
  verwandt: ["gemeinnuetzigkeit-sphaeren", "stifterdrittel", "doppelstiftung", "gemeinnuetzige-satzung"],
};
