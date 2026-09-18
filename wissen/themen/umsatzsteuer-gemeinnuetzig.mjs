/* Q10 Abschn. G.4d, G.4e · § 19 UStG, § 23a UStG, ermäßigter Steuersatz */
export default {
  id: "umsatzsteuer-gemeinnuetzig",
  titel: "Umsatzsteuer in der gemeinnützigen Stiftung — die vergessene Steuer",
  bereich: "gemeinnuetzig",
  kurz: "Gemeinnützig heisst nicht umsatzsteuerfrei: Wer Leistungen gegen Entgelt erbringt, ist Unternehmer — mit Kleinunternehmergrenze, Pauschalierung und einem Steuersatz, über den Verwaltung und Rechtsprechung streiten.",
  normen: ["§ 19 UStG", "§ 23a UStG", "§ 12 Abs. 2 Nr. 8 UStG", "§ 64 Abs. 3 AO"],
  kern: [
    "Die Gemeinnützigkeit befreit von Körperschaft- und Gewerbesteuer. Die Umsatzsteuer ist eine eigene Welt und folgt anderen Regeln.",
    "Sobald die Stiftung nachhaltig Leistungen gegen Entgelt erbringt, ist sie insoweit Unternehmerin — ob sie gemeinnützig ist, spielt für diese Frage keine Rolle.",
    "Kleine Stiftungen kommen mit der Kleinunternehmerregelung aus; sie weisen dann keine Umsatzsteuer aus und ziehen keine Vorsteuer.",
    "Wer darüber liegt, kann die Vorsteuer pauschalieren: sieben Prozent des steuerpflichtigen Umsatzes, ohne jeden Eingangsbeleg einzeln zu erfassen.",
    "Weil auf die eigenen Leistungen meist der ermässigte Satz von sieben Prozent anfällt, bleibt die Zahllast dabei im Regelfall bei null — der Vorteil liegt vor allem in der ersparten Arbeit.",
    "Für Leistungen im Zweckbetrieb gilt grundsätzlich der ermässigte Steuersatz — aber nicht, wenn der Zweckbetrieb in erster Linie zusätzliche Einnahmen im Wettbewerb mit normal besteuerten Unternehmen erzielt.",
    "Über die Auslegung dieser Ausnahme bestehen erhebliche Differenzen zwischen der Finanzverwaltung und den Umsatzsteuersenaten des Bundesfinanzhofs — für die Praxis eine echte Rechtsunsicherheit beim Steuersatz.",
    "Vom ertragsteuerlichen Freibetrag für wirtschaftliche Geschäftsbetriebe ist das alles unabhängig: Die Umsatzsteuer schert sich nicht darum, ob die Einnahmen unter der Bagatellgrenze bleiben.",
  ],
  zahlen: [
    { wert: "25.000 Euro", bedeutung: "Umsatzgrenze der Kleinunternehmerregelung.", norm: "§ 19 UStG" },
    { wert: "50.000 Euro", bedeutung: "Umsatzgrenze der Vorsteuerpauschalierung, angehoben zum 1. Januar 2026.", norm: "§ 23a UStG" },
    { wert: "7 Prozent", bedeutung: "Pauschaler Vorsteuersatz auf den steuerpflichtigen Umsatz.", norm: "§ 23a UStG" },
  ],
  fehler: [
    { fehler: "Die Stiftung geht davon aus, mit dem Freistellungsbescheid sei auch die Umsatzsteuer erledigt.", richtig: "Der Bescheid betrifft Körperschaft- und Gewerbesteuer. Umsatzsteuerlich wird jede entgeltliche Leistung eigenständig beurteilt." },
    { fehler: "Auf alle Leistungen des Zweckbetriebs wird ohne Weiteres der ermässigte Satz angewendet.", richtig: "Die gesetzliche Ausnahme für Wettbewerbslagen ist umstritten. Wo es um Beträge geht, gehört die Einordnung vorher geklärt — notfalls mit verbindlicher Auskunft.", norm: "§ 12 Abs. 2 Nr. 8 UStG" },
  ],
  einsatzfelder: [
    { situation: "Eine Familienstiftung wird gemeinnützig aufgestellt und soll Seminare, Publikationen oder Veranstaltungen anbieten.", warum: "Dann steht die Umsatzsteuer von Anfang an im Raum. Die Entscheidung zwischen Kleinunternehmer, Pauschalierung und Regelbesteuerung gehört in die Planung, nicht in die erste Betriebsprüfung." },
  ],
  merksatz: "Von der Körperschaftsteuer befreit die Gemeinnützigkeit — von der Umsatzsteuer nicht.",
  gewicht: { mandat: 1, reichweite: 2 },
  antwortfreigabe: "keine",
  stand: "2026-09-18",
  quellen: ["Q10 Abschn. G.4d, G.4e", "Grenzen und Durchschnittssatz zum 1.1.2026 gegengeprüft (StÄndG 2025)"],
  verwandt: ["gemeinnuetzigkeit-sphaeren", "gemeinnuetzigkeit-vorteile", "zeitnahe-mittelverwendung", "feststellung-60a"],
};
