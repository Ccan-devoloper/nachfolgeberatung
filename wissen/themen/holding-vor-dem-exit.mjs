/* Q8 · Kap. 2.4 · Fall 7 · Fehler 3 */
export default {
  id: "holding-vor-dem-exit",
  titel: "Die Holding vor dem Exit — richtig, aber nicht auf den letzten Metern",
  bereich: "unternehmensverkauf",
  kurz: "Die Beteiligung unter eine Holding zu hängen, kann den Verkaufserlös fast ungeschmälert investierbar halten — wer das kurz vor dem Verkauf tut, läuft in die Sperrfrist und zahlt rückwirkend doch.",
  normen: ["§ 21 UmwStG", "§ 22 UmwStG", "§ 8b KStG", "§ 42 AO"],
  kern: [
    "Beim Anteilstausch bringt der Gesellschafter seine Anteile gegen neue Anteile in eine Holding ein — zu Buchwerten, also ohne sofortige Steuer.",
    "Danach läuft eine siebenjährige Sperrfrist: Verkauft die Holding die eingebrachten Anteile innerhalb dieser Zeit, wird der Einbringungsgewinn rückwirkend besteuert, abschmelzend um ein Siebtel pro Jahr.",
    "Die Holding ist deshalb kein Instrument für die Wochen vor dem Verkauf, sondern eine Strukturentscheidung mit Jahren Vorlauf.",
    "Ihr eigentlicher Wert liegt nicht im Steuersatz, sondern in der Reinvestitionsfähigkeit: Was oben bleibt, kann in neue Beteiligungen, Immobilien oder Wertpapiere fliessen, ohne vorher privat versteuert zu werden.",
    "Die richtige Frage lautet nicht, wie man beim Signing Steuer spart, sondern welche Eigentümerstruktur die Familie fünf Jahre vor und zehn Jahre nach dem Exit haben soll.",
  ],
  einsatzfelder: [
    { situation: "Ein Unternehmer, 48, rechnet in sechs bis acht Jahren mit einem Verkauf.", warum: "Genau der richtige Zeitpunkt: Die Sperrfrist läuft ab, bevor verkauft wird, und die Struktur kann in Ruhe wachsen." },
    { situation: "Die Familie will nach dem Verkauf ein Family Office mit Immobilien und Wertpapieren aufbauen.", warum: "Aus der Holding heraus steht dafür nahezu der gesamte Erlös zur Verfügung; privat wäre gut ein Drittel weg." },
    { situation: "Die nächste Generation soll später beteiligt werden.", warum: "Anteile an einer Holding lassen sich leichter in Tranchen verschenken als eine operative Gesellschaft — und die Verschonungsfragen stellen sich auf einer Ebene." },
  ],
  beispiele: [
    { konstellation: "Ein Gesellschafter bringt seine GmbH-Anteile in eine neue Holding ein. Drei Jahre später kommt ein Kaufangebot, das er annimmt.", gestaltung: "Die Sperrfrist läuft noch: Vier Siebtel des damaligen Einbringungsgewinns werden rückwirkend im Jahr der Einbringung besteuert — mit Zinsen, weil der Bescheid geändert wird.", pointe: "Die Holding war richtig gedacht und drei Jahre zu spät gebaut." },
  ],
  fehler: [
    { fehler: "Kurz vor dem Verkauf wird eine Holding eingezogen und die Sperrfrist übersehen.", richtig: "Sieben Jahre, abschmelzend um ein Siebtel pro Jahr — vorher verkaufen heisst rückwirkend versteuern.", norm: "§ 22 Abs. 1 UmwStG" },
    { fehler: "Die Holding wird gebaut, aber niemand plant, was mit dem Geld darin geschehen soll.", richtig: "Ohne Anlage-, Ausschüttungs- und Nachfolgekonzept entsteht nur ein Behälter — der Vorteil entsteht erst durch die Reinvestition." },
  ],
  zahlen: [
    { wert: "7 Jahre", bedeutung: "Sperrfrist nach dem Anteilstausch; pro abgelaufenem Jahr sinkt der rückwirkend zu versteuernde Gewinn um ein Siebtel.", norm: "§ 22 Abs. 1, 2 UmwStG" },
  ],
  merksatz: "Die Holding ist eine Entscheidung von vor sieben Jahren — keine Massnahme für die Woche vor dem Signing.",
  gewicht: { mandat: 3, reichweite: 2 },
  antwortfreigabe: "keine",
  stand: "2026-09-13",
  quellen: ["Q8 Kap. 2.4", "Q8 Fall 7", "Q8 Fehler 3"],
  verwandt: ["exit-steuer-halteebene", "paragraf-34-mythos", "kaeufertypen-exit", "leverage-verkauf-an-stiftung"],
};
