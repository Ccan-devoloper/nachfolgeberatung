/* Q5 Teil 5 · Organe; Q4 · Escape-Klausel und Kontrolle */
export default {
  id: "liechtenstein-organe",
  titel: "Stiftungsrat und Protektor — wer in Liechtenstein wirklich entscheidet",
  bereich: "liechtenstein",
  kurz: "Der Stiftungsrat führt die Stiftung, ein Protektor kann ihn kontrollieren. Wie diese Gremien besetzt sind, entscheidet nicht nur über die Führung — sondern darüber, ob die Stiftung in Deutschland steuerlich anerkannt wird.",
  normen: ["Art. 552 § 24 PGR", "Art. 552 § 28 PGR", "§ 15 Abs. 6 AStG", "§ 39 AO"],
  kern: [
    "Pflichtorgan ist der Stiftungsrat; er entspricht dem deutschen Vorstand und führt und vertritt die Stiftung. Alles Weitere ist Gestaltung.",
    "Häufig kommt ein Protektor hinzu: ein Kontrollorgan, das den Stiftungsrat überwacht, ihn bestellen oder abberufen und bestimmten Geschäften zustimmen kann.",
    "Weitere Organe sind zulässig — Beiräte, Familiengremien, Anlageausschüsse. Das liechtensteinische Recht lässt hier mehr Freiheit als das deutsche.",
    "Die deutsche Steuerfrage entscheidet sich an diesen Gremien: Wer den Stiftungsrat anweisen oder auswechseln kann, hat die Verfügungsmacht über das Vermögen nicht verloren.",
    "Der Bundesfinanzhof hat dafür 2024 einen klaren Massstab gesetzt: Es kommt darauf an, ob die Begünstigten nach zivilrechtlichen Massstäben die Herausgabe des Vermögens erzwingen oder dem Stiftungsrat Weisungen erteilen können. Wirtschaftlicher Einfluss genügt nicht.",
    "Die Finanzverwaltung sieht das enger: Nach ihrer Auffassung reicht schon eine Mehrheit der Begünstigten in den Gremien, um den Entlastungsbeweis auszuschliessen. Der Bundesfinanzhof ist ihr entgegengetreten.",
    "Ein Familienmitglied im Stiftungsrat ist deshalb nicht automatisch schädlich — ein Mandatsvertrag, der den Stiftungsrat an Weisungen bindet, dagegen fast immer.",
    "Wer den Protektor mit einem freien Abberufungsrecht gegenüber dem Stiftungsrat ausstattet und ihn mit der Familie besetzt, verlagert die Kontrolle nur — und verliert denselben Beweis.",
  ],
  vorteile: [
    { vorteil: "Kontrolle ohne Eigentum", erklaerung: "Der Protektor kann die Familie in wichtigen Fragen mitreden lassen, ohne dass jemand Eigentümer wird." },
    { vorteil: "Gestaltungsfreiheit bei den Gremien", erklaerung: "Zusammensetzung, Bestellung und Abberufung lassen sich weitgehend frei regeln — anders als bei der deutschen Stiftung, wo die Satzung nach der Anerkennung kaum noch beweglich ist." },
  ],
  nachteile: [
    { nachteil: "Jede Kontrollbefugnis ist steuerlich ein Risiko", erklaerung: "Was die Familie an Einfluss behält, kann den Entlastungsbeweis kosten — und damit die Zurechnung der gesamten Stiftungseinkünfte auslösen.", norm: "§ 15 Abs. 6 AStG" },
    { nachteil: "Fremde entscheiden über Familienvermögen", erklaerung: "Ein Stiftungsrat, der wirklich unabhängig ist, entscheidet auch gegen die Familie. Wer das nicht aushält, sollte keine Auslandsstiftung errichten." },
  ],
  fehler: [
    { fehler: "Der Stiftungsrat wird mit Dienstleistern besetzt, die faktisch tun, was der Stifter sagt.", richtig: "Dann ist die Stiftung steuerlich transparent — das Vermögen wird dem Stifter zugerechnet, als gäbe es sie nicht.", norm: "§ 39 AO" },
    { fehler: "Ein Letter of wishes regelt, was die Statuten nicht sagen dürfen.", richtig: "Wird er in der Praxis ausnahmslos befolgt, behandelt ihn die Finanzverwaltung wie eine Weisung. Unverbindlich ist nur, was auch einmal nicht befolgt wird." },
  ],
  beispiele: [
    { konstellation: "Ein Unternehmer, 64, will die Kontrolle über sein Vermögen nicht ganz abgeben und lässt sich als Protektor mit Abberufungsrecht gegenüber dem Stiftungsrat einsetzen.", gestaltung: "Alternative: Der Protektorposten geht an einen langjährigen Berater, die Familie erhält Informations- und Anhörungsrechte sowie das Recht, bei Vakanz Kandidaten vorzuschlagen.", pointe: "Die erste Variante kostet den Entlastungsbeweis, die zweite nicht — der Unterschied liegt in einem einzigen Recht." },
  ],
  merksatz: "In Liechtenstein entscheidet nicht, wer die Stiftung gegründet hat, sondern wer den Stiftungsrat auswechseln kann.",
  gewicht: { mandat: 3, reichweite: 2 },
  antwortfreigabe: "abstrakt",
  stand: "2026-09-18",
  quellen: ["Q5 Teil 5 Abschn. 2a, 5", "Q4 Abschn. IV.2"],
  verwandt: ["liechtenstein-errichtung", "liechtenstein-zurechnung", "liechtenstein-stifterrechte", "stiftung-governance"],
};
