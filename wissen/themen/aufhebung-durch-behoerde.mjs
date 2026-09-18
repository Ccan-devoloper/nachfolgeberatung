/* Q1 Abschn. 7 · Beendigung; Q5 · §§ 87–87c BGB n.F.; Q10 Abschn. B.13 */
export default {
  id: "aufhebung-durch-behoerde",
  titel: "Wenn die Behörde die Stiftung aufhebt",
  bereich: "stiftungsrecht",
  kurz: "Die Stiftung endet nicht nur, wenn ihre Organe es beschliessen — die Aufsicht kann sie aufheben, und einer der Gründe ist die Verlegung des Verwaltungssitzes ins Ausland.",
  normen: ["§ 87 Abs. 1–3 BGB", "§ 87a BGB", "§ 87b BGB", "§ 87c BGB"],
  kern: [
    "Die Organe sollen die Stiftung auflösen, wenn sie ihren Zweck endgültig nicht mehr dauernd und nachhaltig erfüllen kann — auch nicht nach einer Umgestaltung der Satzung.",
    "Eine Verbrauchsstiftung ist aufzulösen, wenn die Zeit abgelaufen ist, für die sie errichtet wurde.",
    "Beides braucht die Genehmigung der Stiftungsbehörde. Die Auflösung ist also nie eine reine Familienentscheidung.",
    "Handeln die Organe nicht, kann die Behörde die Stiftung von Amts wegen aufheben — dasselbe gilt bei Gemeinwohlgefährdung.",
    "Ein eigener Aufhebungsgrund ist die Verlegung des Verwaltungssitzes ins Ausland. Wer die Stiftung mitnehmen will, weil er selbst wegzieht, riskiert ihre Aufhebung.",
    "Ohne Zutun endet die Stiftung, wenn ein Insolvenzverfahren über ihr Vermögen eröffnet oder die Eröffnung mangels Masse rechtskräftig abgelehnt wird.",
    "Was dann mit dem Vermögen geschieht, steht in der Satzung: Es fällt an die dort bestimmten Anfallberechtigten, und fehlt eine Bestimmung, an den Fiskus.",
  ],
  fehler: [
    { fehler: "Der Stifter wandert aus und will die Stiftung 'mitnehmen', indem die Verwaltung ins Ausland verlagert wird.", richtig: "Das ist ein Aufhebungsgrund. Wer international plant, entscheidet vorher zwischen deutscher Stiftung mit deutschem Verwaltungssitz und einer ausländischen Struktur.", norm: "§ 87a Abs. 2 Nr. 3 BGB" },
    { fehler: "Die Satzung nennt keine Anfallberechtigten, weil 'die Stiftung ja ewig laufen soll'.", richtig: "Fehlt die Bestimmung, fällt das Vermögen am Ende an den Fiskus. Eine Anfallklausel kostet nichts und rettet im Ernstfall alles.", norm: "§ 87c Abs. 1 S. 3 BGB" },
  ],
  einsatzfelder: [
    { situation: "Eine Familie erwägt den Wegzug ins Ausland und fragt, was aus der deutschen Familienstiftung wird.", warum: "Die Stiftung kann bleiben, wo sie ist, und weiter verwaltet werden — sie darf nur nicht mitziehen. Das ist ein Governance-Thema, kein Steuerthema." },
  ],
  merksatz: "Eine deutsche Stiftung kann ihren Stifter nicht ins Ausland begleiten — sie würde dabei aufgehoben.",
  gewicht: { mandat: 2, reichweite: 2 },
  antwortfreigabe: "abstrakt",
  stand: "2026-09-18",
  quellen: ["Q1 Abschn. 7", "Q5 Folien zu §§ 87–87c BGB", "Q10 Abschn. B.13"],
  verwandt: ["stiftung-aufloesung", "aufloesung-stiftungsebene", "wegzugsteuer-stiftung", "stiftungsaufsicht"],
};
