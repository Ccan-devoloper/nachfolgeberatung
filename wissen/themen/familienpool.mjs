/* Q3 · Familiengesellschaft und Familienpool */
export default {
  id: "familienpool",
  titel: "Der Familienpool — zusammenhalten, ohne loszulassen",
  bereich: "ersatzformen",
  kurz: "Die Familiengesellschaft bündelt Vermögen in einer KG, GmbH & Co. KG oder GbR; die Familie bleibt Eigentümerin, der Gesellschaftsvertrag ersetzt den Stifterwillen durch organisierte Familienwillensbildung.",
  normen: ["§§ 161 ff. HGB", "§§ 705 ff. BGB", "§ 13b Abs. 1 Nr. 3 ErbStG", "§ 13a Abs. 9 ErbStG", "§ 24 GrEStG", "§§ 129 ff. InsO"],
  kern: [
    "Die Familiengesellschaft ist die praktisch wichtigste Stiftungsersatzform: Familienmitglieder bleiben Gesellschafter, das Vermögen wird gebündelt, aber nicht aus der Familiensphäre verselbständigt.",
    "Bindung entsteht durch Vertrag: Übertragungs- und qualifizierte Nachfolgeklauseln halten Fremde draussen; Kündigungsbeschränkungen und Abfindungen unter Verkehrswert schützen die Liquidität.",
    "Wer zu Lebzeiten überträgt, sichert sich Rückforderungsrechte — bei Insolvenz, Vorversterben, nicht genehmigter Verfügung oder fehlendem Ehevertrag des Erwerbers.",
    "Governance: Geschäftsführung bei wenigen, Beirat oder Familienrat, Stimmrechte nach Köpfen, Stämmen oder Kapital — Familienherrschaft ohne Einzelherrschaft.",
    "Steuerlich transparent bei Vermögensverwaltung; keine Erbersatzsteuer, dafür bleibt jeder Generationenwechsel ein Erbfall — mit Verschonung für Betriebsvermögen und Poolvereinbarung für Kapitalgesellschaftsanteile.",
    "Gesellschaftsvertrag, Testament, Ehevertrag und Schenkungsverträge sind ein Regelwerk — die häufigste Fehlerquelle ist, dass sie einander widersprechen.",
  ],
  einsatzfelder: [
    { situation: "Eltern halten ein Immobilienportfolio und wollen die Kinder schrittweise beteiligen, ohne die Kontrolle abzugeben.", warum: "Kommanditanteile an die Kinder, Geschäftsführung bei den Eltern oder einer Komplementär-GmbH, Vinkulierung und Rückforderungsklauseln — Bündelung und kontrollierte Nachfolge ohne Stiftung." },
    { situation: "Die Familie will gemeinsam entscheiden, nicht einem Stifterwillen aus dem Jahr 1995 folgen.", warum: "Verbandsautonomie: Der Vertrag kann angepasst werden. Das ist gegenüber der Stiftung Stärke und Schwäche zugleich." },
  ],
  beispiele: [
    { konstellation: "Ein Ehepaar mit vermietetem Wohnungsbestand und einer Beteiligung an einer operativen GmbH, drei erwachsene Kinder.", gestaltung: "Die Immobilien gehen in eine Familien-KG; die Kinder erhalten über Jahre Kommanditanteile mit Rückforderungsrechten und Ehevertragsauflage. Grundlagengeschäfte bleiben bei der Komplementär-GmbH der Eltern. Die GmbH-Beteiligung wird separat auf Verschonung und Poolung geprüft.", pointe: "Die Familie bleibt Eigentümerin und die Struktur bleibt änderbar — genau das, was eine Stiftung nicht kann und nicht soll." },
  ],
  alternativen: [
    { form: "Familienstiftung", wannBesser: "Wenn die Familie gerade nicht mehr Eigentümerin sein soll — wegen Streit, Scheidungsrisiken oder weil ein Wille für immer gelten soll.", warum: "Der Pool bindet über Vertrag, die Stiftung über Rechtsform. Nur die Stiftung ist unwiderruflich." },
  ],
  fehler: [
    { fehler: "Der Gesellschaftsvertrag lässt nur Abkömmlinge zu, das Testament setzt den Ehegatten als Erben ein.", richtig: "Erbrecht und Gesellschaftsrecht widersprechen sich — der Ehegatte erbt einen Anteil, den er nicht halten darf, und bekommt eine Abfindung. Beide Urkunden gehören aufeinander abgestimmt." },
    { fehler: "Rückforderungsrechte werden als Standardklausel übernommen.", richtig: "Seit dem MoPeG kann die Insolvenz eines Gesellschafters zum Ausscheiden führen — eine Rückforderung, die erst danach greift, geht ins Leere. Der Rückfall muss vor Verfahrenseröffnung anknüpfen und dinglich gesichert sein.", norm: "§§ 129 ff. InsO" },
    { fehler: "Die Grunderwerbsteuer wird bei der Gründung des Immobilienpools geprüft — und danach nie wieder.", richtig: "Gehen innerhalb von zehn Jahren 90 Prozent der Anteile über, entsteht sie erneut; die Befreiungen für Verwandte greifen nur teilweise. Jede Anteilsverschiebung ist ein Grunderwerbsteuerfall.", norm: "§ 1 Abs. 2a GrEStG" },
    { fehler: "Der Gesellschaftsvertrag regelt Gewinnverteilung und Geschäftsführung — Streit, Exit und Deadlock nicht.", richtig: "Ein Familienpool ohne Konfliktregeln ist nur vertagter Streit: Abfindung, Kündigung, Pattsituation, Scheidung und Insolvenz eines Gesellschafters gehören in den Vertrag, bevor sie eintreten." },
    { fehler: "Die Poolvereinbarung für die GmbH-Anteile wird nach dem Erbfall geschlossen.", richtig: "Sie muss im Besteuerungszeitpunkt bestehen.", norm: "§ 13b Abs. 1 Nr. 3 ErbStG" },
  ],
  merksatz: "Der Familienpool ersetzt den Stifterwillen durch einen Familienwillen — und muss deshalb jede Generation neu verdient werden.",
  gewicht: { mandat: 3, reichweite: 3 },
  antwortfreigabe: "abstrakt",
  stand: "2026-09-12",
  quellen: ["Q3 Familiengesellschaft und Familienpool", "Q7 Kap. 16, 24.1, Fall 28.12"],
  verwandt: ["ersatzformen-ueberblick", "stiftung-warum", "betriebsvermoegen-verschonung", "stifterwille-ewigkeit", "immobilien-nachfolge-struktur", "minderjaehrige-nachfolge"],
};
