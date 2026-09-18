/* Q10 Abschn. D.1 · Rechnungslegung, Rechtsquellen */
export default {
  id: "rechnungslegung-stiftung",
  titel: "Welche Bücher eine Stiftung führen muss",
  bereich: "stiftungsrecht",
  kurz: "Eine Stiftung ist nicht kraft Rechtsform Kaufmann — ihre Rechnungslegung ergibt sich aus vier Quellen, und meist genügt eine Einnahmen-Ausgaben-Rechnung mit Vermögensverzeichnis.",
  normen: ["§ 84a Abs. 1 BGB", "§ 666 BGB", "§ 259 Abs. 1 BGB", "§ 260 Abs. 1 BGB", "§ 238 HGB", "§ 6 HGB", "§ 140 AO"],
  kern: [
    "Viele nehmen an, eine Stiftung müsse bilanzieren wie eine GmbH. Das stimmt nicht: Sie ist nicht kraft Rechtsform Kaufmann.",
    "Zur Buchführung nach kaufmännischen Grundsätzen ist sie nur verpflichtet, wenn sie tatsächlich ein Handelsgewerbe betreibt — dann folgt daraus auch die steuerliche Buchführungspflicht.",
    "Die allgemeine Grundlage steht im Stiftungsrecht selbst: Die Organe schulden Rechenschaft, und das Gesetz verweist dafür auf das Auftragsrecht.",
    "Daraus ergeben sich zwei konkrete Pflichten: eine geordnete Zusammenstellung der Einnahmen und Ausgaben mit Belegen, und ein Vermögensverzeichnis.",
    "Hinzu kommen die Landesstiftungsgesetze: Sie verlangen fast überall eine Jahresrechnung mit Vermögensübersicht und einen Tätigkeitsbericht über die Zweckerfüllung.",
    "Die Vorlagefristen unterscheiden sich von Land zu Land — zwischen sechs und zwölf Monaten; teils entfällt die Vorlage, wenn ein Wirtschaftsprüfer beauftragt ist.",
    "Die vierte Quelle ist die Satzung selbst. Sie kann strengere Anforderungen aufstellen, und genau das ist bei grösseren Familienstiftungen oft sinnvoll.",
  ],
  fehler: [
    { fehler: "Für die Familienstiftung wird von Anfang an eine handelsrechtliche Bilanz aufgestellt, weil 'das so üblich ist'.", richtig: "Ohne Handelsgewerbe besteht dazu keine Pflicht. Das kostet jedes Jahr Geld, das der Zweckerfüllung fehlt — es sei denn, die Satzung oder die Grösse verlangen es.", norm: "§ 6 HGB" },
    { fehler: "Ein Vermögensverzeichnis wird nicht geführt, weil die Bank ja Depotauszüge schickt.", richtig: "Das Verzeichnis ist eine eigene Pflicht und muss das gesamte Stiftungsvermögen abbilden — auch Immobilien, Beteiligungen und Forderungen.", norm: "§ 260 Abs. 1 BGB" },
    { fehler: "Die Frist zur Vorlage wird bundeseinheitlich angenommen.", richtig: "Sie steht im Landesstiftungsgesetz und schwankt erheblich. Wer in mehreren Ländern Stiftungen hat, hat mehrere Termine." },
  ],
  einsatzfelder: [
    { situation: "Eine neu errichtete Familienstiftung soll ihre laufende Verwaltung schlank aufsetzen.", warum: "Hier lohnt die Frage, was wirklich verlangt ist: meist eine geordnete Einnahmen-Ausgaben-Rechnung, ein Vermögensverzeichnis und ein Tätigkeitsbericht — nicht mehr." },
  ],
  merksatz: "Eine Stiftung ist nicht kraft Rechtsform Kaufmann — was sie an Büchern führt, sagen Gesetz, Landesrecht und ihre eigene Satzung.",
  gewicht: { mandat: 1, reichweite: 1 },
  antwortfreigabe: "abstrakt",
  stand: "2026-09-18",
  quellen: ["Q10 Abschn. D.1"],
  verwandt: ["stiftungsaufsicht", "landesstiftungsrecht", "vorstandshaftung-steuern", "vermoegensverwaltung-stiftung"],
};
