/* Q5 Folien 63 f. · Haftung der Organe; Q7 Kap. 6.2 · Business Judgment Rule; Q10 Abschn. B.11 */
export default {
  id: "organhaftung-stiftung",
  titel: "Wofür der Stiftungsvorstand haftet — und wie die Satzung ihn schützt",
  bereich: "stiftungsrecht",
  kurz: "Ein Stiftungsvorstand haftet grundsätzlich für jede Fahrlässigkeit; ehrenamtliche Vorstände sind privilegiert, und wer gut informiert entscheidet, haftet für das Ergebnis gar nicht.",
  normen: ["§ 84a Abs. 1 S. 3 BGB", "§ 84a Abs. 2 BGB", "§ 84a Abs. 3 BGB", "§ 31a BGB"],
  kern: [
    "Im Innenverhältnis haftet ein Organmitglied der Stiftung gegenüber für Vorsatz und für jede Fahrlässigkeit — ein strenger Massstab, der viele überrascht, die ein Ehrenamt übernehmen.",
    "Für unentgeltlich oder nur gering vergütete Vorstände gilt eine Privilegierung: Sie haften nur für Vorsatz und grobe Fahrlässigkeit.",
    "Die Reform hat ausserdem eine Business Judgment Rule ins Gesetz geschrieben: Wer Gesetz und Satzung einhält und auf angemessener Informationsgrundlage vernünftigerweise zum Wohle der Stiftung handeln durfte, verletzt keine Pflicht.",
    "Das schützt nicht das Ergebnis, sondern den Weg dorthin. Eine Anlage, die schlecht läuft, ist keine Pflichtverletzung — eine Anlage ohne Grundlage schon.",
    "Deshalb ist Dokumentation der eigentliche Haftungsschutz: Welche Informationen lagen vor, welche Alternativen wurden erwogen, warum fiel die Entscheidung so aus.",
    "Die Satzung kann mehr: Sie kann den Haftungsmassstab über die gesetzliche Privilegierung hinaus mildern — und sie kann die Privilegierung auch ausschliessen.",
    "Für Familienstiftungen ist beides eine bewusste Entscheidung: Wer Familienmitglieder in den Vorstand holt, sollte die Haftungsfrage vorher klären, nicht im Streitfall.",
  ],
  zahlen: [
    { wert: "3.300 Euro", bedeutung: "Bis zu dieser Jahresvergütung gilt ein Vorstand als ehrenamtlich und haftet nur für Vorsatz und grobe Fahrlässigkeit.", norm: "§ 84a Abs. 3 BGB i.V.m. § 31a BGB" },
  ],
  fehler: [
    { fehler: "Die Satzung schweigt zur Haftung — 'das regelt schon das Gesetz'.", richtig: "Dann gilt der strenge Massstab für jeden vergüteten Vorstand. Eine Haftungsmilderung muss in der Satzung stehen, sonst gibt es sie nicht.", norm: "§ 84a Abs. 1 S. 3 BGB" },
    { fehler: "Entscheidungen fallen im Gespräch und werden nicht festgehalten.", richtig: "Die Business Judgment Rule verlangt eine angemessene Informationsgrundlage. Wer sie nicht belegen kann, kann sich später nicht auf sie berufen.", norm: "§ 84a Abs. 2 BGB" },
    { fehler: "Ein Familienmitglied übernimmt den Vorstand nebenbei und ohne Vergütung — und hält sich deshalb für sicher.", richtig: "Die Privilegierung senkt den Massstab, schliesst die Haftung aber nicht aus. Grobe Fahrlässigkeit reicht weiter, als die meisten annehmen.", norm: "§ 31a BGB" },
  ],
  einsatzfelder: [
    { situation: "Eine Familie besetzt den Vorstand mit einem ihrer Mitglieder und einem externen Berater.", warum: "Genau hier lohnt die Haftungsklausel: Der Externe wird vergütet und haftet streng, das Familienmitglied ehrenamtlich und milder — ohne Satzungsregelung sitzen beide auf unterschiedlichen Stühlen, ohne es zu wissen." },
  ],
  beispiele: [
    { konstellation: "Der Vorstand einer Familienstiftung legt einen erheblichen Teil des Grundstockvermögens in eine Beteiligung an, die drei Jahre später ausfällt.", gestaltung: "Vor der Entscheidung lagen zwei externe Bewertungen und eine schriftliche Abwägung gegen die Anlagerichtlinie vor; das Protokoll hält die Gründe fest.", pointe: "Der Verlust bleibt, die Haftung nicht. Ohne diese Unterlagen wäre es genau umgekehrt." },
  ],
  merksatz: "Haftungsschutz im Stiftungsvorstand ist kein Vertrauen, sondern ein Protokoll.",
  gewicht: { mandat: 2, reichweite: 3 },
  antwortfreigabe: "abstrakt",
  stand: "2026-09-18",
  quellen: ["Q5 Folien 63 f.", "Q7 Kap. 6.2 und 30.050", "Q10 Abschn. B.11"],
  verwandt: ["stiftung-governance", "anlagerichtlinie-stiftung", "satzung-zukunftsklauseln", "vorstandshaftung-steuern"],
};
