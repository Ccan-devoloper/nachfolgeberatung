/* Q8 · Kap. 4.4, 4.5, 4.6 · Fall 17 */
export default {
  id: "auslandsimmobilie-erbfall",
  titel: "Das Ferienhaus im Nachlass — ein Erbstatut, aber lokale Umsetzung",
  bereich: "auslandserbfall",
  kurz: "Innerhalb der EU zielt die Erbrechtsverordnung auf eine einheitliche Abwicklung; Grundbuch, Sachenrecht und Nachweispflichten bleiben trotzdem lokal — und bei Drittstaaten kann deren Kollisionsrecht die Immobilie zurückholen.",
  normen: ["Art. 34 EuErbVO", "Art. 62 ff. EuErbVO", "Art. 1 Abs. 2 lit. k, l EuErbVO"],
  kern: [
    "Das Erbstatut bestimmt, wer erbt — welche dinglichen Rechte es gibt und was das Grundbuch verlangt, richtet sich nach dem Recht des Belegenheitsstaats.",
    "Verweist die Verordnung auf einen Drittstaat, ist grundsätzlich auch dessen internationales Privatrecht zu beachten: Knüpft es für Grundstücke an den Belegenheitsort an, kann es zurück- oder weiterverweisen.",
    "Bei wirksamer Rechtswahl ist diese Rück- und Weiterverweisung ausgeschlossen — ein weiteres Argument für die ausdrückliche Wahl im Testament.",
    "Das Europäische Nachlasszeugnis weist Erben, unmittelbar berechtigten Vermächtnisnehmern, Testamentsvollstreckern und Nachlassverwaltern ihre Stellung in den teilnehmenden Staaten nach — es gilt in der ganzen EU ausser Dänemark und Irland.",
    "Es ersetzt weder lokale Registeranforderungen noch einen Steuerbescheid; es erleichtert nur den Legitimationsnachweis, und das erheblich.",
  ],
  einsatzfelder: [
    { situation: "Ein Erblasser lebt in Deutschland und besitzt eine Immobilie in Florida.", warum: "Das Erbstatut kann deutsch sein, das Nachlassverfahren vor Ort bleibt amerikanisch — Probate, lokale Titelstruktur und eine mögliche Rückverweisung gehören vorher geklärt." },
    { situation: "Eine Familie hat eine Ferienwohnung in Spanien und rechnet mit einem einfachen Erbschein.", warum: "Das Europäische Nachlasszeugnis ist dafür das richtige Dokument — der deutsche Erbschein wird im Ausland nicht überall akzeptiert." },
    { situation: "Immobilien in der Schweiz oder im Vereinigten Königreich.", warum: "Beide Staaten nehmen an der Verordnung nicht teil; dort gelten eigene Kollisionsnormen, Nachlassverwaltung und Pflichtteils- oder Versorgungssysteme." },
  ],
  beispiele: [
    { konstellation: "Ein deutscher Unternehmer hinterlässt ein Haus in Mallorca und eine GmbH in Köln. Testament mit Rechtswahl deutschen Rechts.", gestaltung: "Das Erbstatut ist deutsch, auch für die Immobilie. Für die Umschreibung im spanischen Register braucht es aber ein Europäisches Nachlasszeugnis, Übersetzungen, die spanische Steuernummer und die dortige Erbschaftsteuererklärung.", pointe: "Das Erbrecht ist einheitlich — die Abwicklung bleibt zweisprachig." },
  ],
  fehler: [
    { fehler: "Man geht davon aus, dass ein deutscher Erbschein überall genügt.", richtig: "Für die teilnehmenden EU-Staaten ist das Europäische Nachlasszeugnis das vorgesehene Instrument; ausserhalb der EU gelten lokale Nachweisverfahren.", norm: "Art. 62 ff. EuErbVO" },
    { fehler: "Bei Drittstaatsimmobilien wird die Rückverweisung übersehen.", richtig: "Ohne Rechtswahl kann das Recht des Belegenheitsstaats für die Immobilie doch zur Anwendung kommen — mit eigener Erbfolge für diesen Teil des Nachlasses.", norm: "Art. 34 EuErbVO" },
  ],
  merksatz: "Ein Erbstatut für alles, ein Grundbuch für jedes Land — die Abwicklung bleibt lokal.",
  gewicht: { mandat: 2, reichweite: 3 },
  antwortfreigabe: "abstrakt",
  stand: "2026-09-13",
  quellen: ["Q8 Kap. 4.4, 4.5, 4.6", "Q8 Fall 17"],
  verwandt: ["euerbvo-grundlagen", "rechtswahl-testament", "erbschaftsteuer-international", "immobilien-nachfolge-struktur"],
};
