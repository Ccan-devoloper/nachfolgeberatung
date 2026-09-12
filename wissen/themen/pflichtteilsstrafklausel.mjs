/* Q8 · Kap. 3.6 · Fall 12 */
export default {
  id: "pflichtteilsstrafklausel",
  titel: "Die Pflichtteilsstrafklausel — Abschreckung, kein Schutzschild",
  bereich: "erbrecht",
  kurz: "Wer im ersten Erbfall den Pflichtteil verlangt, soll auch im zweiten nur den Pflichtteil bekommen; das ist ein Verhaltensanreiz, kein Ausschluss des Anspruchs — und die Wirkung hängt am Wortlaut.",
  normen: ["§ 2303 BGB", "§ 2269 BGB", "§ 2270 BGB", "§ 6 ErbStG"],
  kern: [
    "Werden die Kinder im ersten Erbfall enterbt, entsteht ihr Pflichtteilsanspruch — die Strafklausel nimmt ihn nicht weg, sie macht seine Geltendmachung nur teuer.",
    "Die Klausel wirkt nur, wenn die Rechnung für das Kind aufgeht: Ist der Pflichtteil aus dem ersten Erbfall grösser als die spätere Schlusserbenstellung, fordert es trotzdem.",
    "Die Auslegung ist formulierungsempfindlich. Das Oberlandesgericht Frankfurt hat im März 2026 entschieden, dass eine Strafklausel ohne ausdrückliche Schlusserbeneinsetzung nicht zwingend beweist, dass die Kinder Schlusserben sein sollten — es kommt auf die Gesamtumstände an.",
    "Die Jastrowsche Klausel setzt statt der Strafe ein Vermächtnis ein: Wer nicht fordert, bekommt ein Vermächtnis, das erst mit dem Tod des Überlebenden fällig wird — der Nachlass des Ersten wird so rechnerisch reduziert.",
    "Steuerlich ist sie kein kostenloser Freibetragsretter: Nach der Rechtsprechung des Bundesfinanzhofs kann der überlebende Ehegatte das betagte Vermächtnis zunächst nicht als Nachlassverbindlichkeit abziehen, und das Kind versteuert es beim zweiten Erbfall als vom Überlebenden stammend.",
  ],
  einsatzfelder: [
    { situation: "Ein Ehepaar fürchtet, ein Kind könnte nach dem Tod des Erstversterbenden Liquidität aus dem Unternehmen fordern.", warum: "Die Strafklausel erhöht den Preis dieser Entscheidung — sie ersetzt aber keinen Pflichtteilsverzicht, der der einzige sichere Weg ist." },
    { situation: "Ein Kind ist ohnehin zerstritten und wird voraussichtlich fordern.", warum: "Dann ist die Klausel wirkungslos und die Liquiditätsplanung entscheidend: Woher kommt das Geld, ohne das Unternehmen anzugreifen?" },
  ],
  beispiele: [
    { konstellation: "Nach dem Tod des Vaters verlangt der Sohn seinen Pflichtteil von 600.000 €. Das Testament enthält eine Strafklausel.", gestaltung: "Der Anspruch besteht und ist zu zahlen. Die Klausel wirkt erst beim zweiten Erbfall: Dann erhält er nur noch den Pflichtteil statt der Erbenstellung.", pointe: "Er hat abgewogen — 600.000 € heute gegen eine ungewisse Erbenstellung in zwanzig Jahren. Die Klausel hat ihn nicht gehindert, nur die Rechnung verändert." },
  ],
  fehler: [
    { fehler: "Die Strafklausel wird für einen Pflichtteilsausschluss gehalten.", richtig: "Nur ein notarieller Pflichtteilsverzicht beseitigt den Anspruch — meist gegen Abfindung oder gegen eine gesicherte Position.", norm: "§ 2346 BGB" },
    { fehler: "Die Klausel steht im Testament, eine Schlusserbeneinsetzung fehlt.", richtig: "Dann ist offen, was die Klausel eigentlich sanktioniert — die Schlusserbeneinsetzung gehört ausdrücklich in den Text." },
    { fehler: "Die Jastrowsche Klausel wird als Steuervorteil verkauft.", richtig: "Sie verlagert Steuer, sie schafft sie nicht ab — Zivilrecht und Steuerwirkung müssen gemeinsam gerechnet werden." },
  ],
  merksatz: "Die Strafklausel ändert nicht das Recht des Kindes, sondern nur seine Rechnung.",
  gewicht: { mandat: 2, reichweite: 3 },
  antwortfreigabe: "abstrakt",
  stand: "2026-09-13",
  quellen: ["Q8 Kap. 3.6", "Q8 Fall 12"],
  verwandt: ["berliner-testament-unternehmer", "pflichtteil-stiftung", "bindungswirkung-ehegattentestament", "alternativen-berliner-testament"],
};
