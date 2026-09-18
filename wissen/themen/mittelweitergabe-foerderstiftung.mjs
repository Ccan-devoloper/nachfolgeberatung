/* Q10 Abschn. G.5c · § 58 Nr. 1 AO, Vertrauensschutz § 58a AO */
export default {
  id: "mittelweitergabe-foerderstiftung",
  titel: "Die Förderstiftung — gemeinnützig sein, ohne selbst zu handeln",
  bereich: "gemeinnuetzig",
  kurz: "Eine gemeinnützige Stiftung darf ihre Mittel einer anderen steuerbegünstigten Körperschaft geben, statt selbst tätig zu werden — und die Zwecke beider müssen dafür nicht einmal übereinstimmen.",
  normen: ["§ 58 Nr. 1 AO", "§ 58 Nr. 1 S. 4 AO", "§ 58a Abs. 1 AO", "§ 58a Abs. 2 AO", "§ 58a Abs. 3 AO"],
  kern: [
    "Viele Familien wollen fördern, nicht betreiben. Genau dafür gibt es die Mittelweitergabe: Die Stiftung verwirklicht ihren Zweck mittelbar, indem sie einer anderen Körperschaft Mittel zuwendet.",
    "Mittel sind dabei mehr als Geld — auch Nutzungsüberlassungen, Warenlieferungen und Dienstleistungen zählen dazu.",
    "Die Zwecke von Geber und Empfänger müssen nicht synchron sein. Eine Stiftung für Bildung darf einer Körperschaft für Denkmalpflege Mittel geben, solange diese selbst steuerbegünstigt ist.",
    "Bei einer privatrechtlichen Empfängerin ist deren eigene Steuerbegünstigung Voraussetzung. Bei einer juristischen Person des öffentlichen Rechts genügt, dass die Mittel steuerbegünstigt verwendet werden.",
    "Der grosse Vorteil: Die empfangende Körperschaft muss die Mittel nach denselben Regeln verwenden — zeitnah und zweckgebunden —, sodass die Geberin nicht selbst Projekte führen muss.",
    "Vor dem Risiko schützt ein Vertrauensschutz: Legt die Empfängerin einen ordnungsgemässen Bescheid vor, darf die Geberin sich darauf verlassen; eine elektronische Kopie genügt.",
    "Er entfällt aber, wenn die Geberin die Unrichtigkeit kannte, grob fahrlässig nicht kannte oder die zweckwidrige Verwendung selbst veranlasst hat.",
  ],
  vorteile: [
    { vorteil: "Kein eigener Betrieb nötig", erklaerung: "Die Stiftung braucht kein Personal, keine Einrichtung, keine Projektstruktur — sie fördert und prüft.", norm: "§ 58 Nr. 1 AO" },
    { vorteil: "Freie Themenwahl", erklaerung: "Weil die Zwecke nicht übereinstimmen müssen, kann die Stiftung ihren Förderkreis breit halten.", norm: "§ 58 Nr. 1 AO" },
    { vorteil: "Kalkulierbares Risiko", erklaerung: "Der Freistellungsbescheid der Empfängerin schützt die Geberin, wenn dort später etwas schiefgeht.", norm: "§ 58a Abs. 1, 2 AO" },
  ],
  nachteile: [
    { nachteil: "Prüfpflicht bleibt", erklaerung: "Wer die Unrichtigkeit grob fahrlässig übersieht, verliert den Schutz — der Bescheid gehört zu jeder Zuwendung in die Akte.", norm: "§ 58a Abs. 3 AO" },
    { nachteil: "Weniger Sichtbarkeit", erklaerung: "Die Wirkung erscheint unter dem Namen der Empfängerin; wer eine eigene Marke aufbauen will, braucht eigene Projekte." },
    { nachteil: "Benennung in der Satzung", erklaerung: "Ist die Mittelweitergabe die einzige Art der Zweckverwirklichung, muss sie in der Satzung stehen — in der Praxis nimmt man sie immer auf.", norm: "§ 58 Nr. 1 S. 4 AO" },
  ],
  fehler: [
    { fehler: "Die Satzung nennt nur eigene Projekte, tatsächlich wird nur gefördert.", richtig: "Dann weicht die tatsächliche Geschäftsführung von der Satzung ab. Die Mittelweitergabe gehört vorsorglich in jede Satzung, auch wenn sie nicht zwingend ist.", norm: "§ 58 Nr. 1 S. 4 AO" },
    { fehler: "Die Zuwendung geht an eine Organisation im Ausland ohne deutschen Freistellungsbescheid.", richtig: "Für den Vertrauensschutz braucht es einen Bescheid, der den gesetzlichen Anforderungen genügt. Ohne ihn trägt die Geberin das volle Risiko.", norm: "§ 58a Abs. 2 AO" },
  ],
  einsatzfelder: [
    { situation: "Eine Unternehmerfamilie will dauerhaft gemeinnützig wirken, aber keine Einrichtung betreiben und kein Personal führen.", warum: "Die Förderstiftung ist die schlanke Form: Kapital, ein Gremium, klare Förderkriterien — und die Arbeit machen Partner, die es können." },
  ],
  merksatz: "Eine Förderstiftung muss nicht wissen, wie man hilft — sie muss wissen, wem sie es zutraut.",
  gewicht: { mandat: 2, reichweite: 2 },
  antwortfreigabe: "abstrakt",
  stand: "2026-09-18",
  quellen: ["Q10 Abschn. G.5c"],
  verwandt: ["gemeinnuetzige-zwecke", "zeitnahe-mittelverwendung", "gemeinnuetzige-satzung", "gemeinnuetzigkeit-grundprinzipien"],
};
