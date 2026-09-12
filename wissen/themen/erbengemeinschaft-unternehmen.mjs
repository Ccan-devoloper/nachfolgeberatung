/* Q8 · Kap. 3.1, 3.2, 3.3 · Fall 13 */
export default {
  id: "erbengemeinschaft-unternehmen",
  titel: "Drei Geschwister, ein GmbH-Anteil — warum die Erbengemeinschaft kein Unternehmensmodell ist",
  bereich: "erbrecht",
  kurz: "Ohne Testament entsteht die Erbengemeinschaft von selbst; sie ist auf Teilung angelegt, nicht auf Führung — und einen ungeteilten Geschäftsanteil können die Erben nur gemeinsam ausüben.",
  normen: ["§ 2032 BGB", "§ 2038 BGB", "§ 2042 BGB", "§ 18 GmbHG"],
  kern: [
    "Bei mehreren Erben wird der Nachlass gemeinschaftliches Vermögen; jeder Miterbe kann grundsätzlich jederzeit die Auseinandersetzung verlangen — das System zielt auf Teilung, nicht auf Dauerbetrieb.",
    "Steht ein Geschäftsanteil mehreren ungeteilt zu, können die Rechte daraus nur gemeinschaftlich ausgeübt werden: Geschäftsführerbestellung, Feststellung des Jahresabschlusses, Gewinnverwendung, Verkauf — alles braucht Einigkeit.",
    "Ein gemeinsamer Vertreter, eine Teilungsanordnung, ein Vermächtnis oder eine Testamentsvollstreckung sind die Instrumente, die diese Blockade von vornherein vermeiden.",
    "Bei Personengesellschaften gilt zuerst der Gesellschaftsvertrag: Nachfolgeklauseln können zur Sonderrechtsnachfolge führen oder den Eintritt begrenzen — die Erbquote sagt nicht, wer Gesellschafter wird.",
    "Ein Miterbe muss nicht bösartig sein, um das Unternehmen zu gefährden: Liquiditätsbedarf, eine Scheidung, Gläubiger, ein Wohnsitz im Ausland oder schlicht andere Lebenspläne genügen.",
  ],
  einsatzfelder: [
    { situation: "Ein Unternehmer stirbt ohne Testament, drei Kinder erben zu je einem Drittel.", warum: "Der Anteil steht ihnen ungeteilt zu; bis zur Auseinandersetzung ist jede Gesellschafterentscheidung von Einstimmigkeit abhängig." },
    { situation: "Die Familie will die Erbengemeinschaft zügig beenden.", warum: "Auseinandersetzungsvertrag, Unternehmensbewertung und Finanzierung der Ausgleichszahlungen gehören zusammen geplant — sonst zieht sich die Teilung über Jahre." },
  ],
  beispiele: [
    { konstellation: "Drei Geschwister erben gemeinsam 100 Prozent einer GmbH. Eines will das Unternehmen führen, eines verkaufen, eines nur Geld.", gestaltung: "Bis zur Auseinandersetzung können sie die Rechte nur gemeinsam ausüben. Der Geschäftsführer, der seit dem Todesfall im Amt ist, kann nicht bestätigt und nicht ersetzt werden.", pointe: "Nicht Streit hat die Firma blockiert, sondern die Rechtsform des Erbens." },
  ],
  fehler: [
    { fehler: "Die Erbengemeinschaft wird als Dauerlösung akzeptiert — „wir kommen ja miteinander klar\".", richtig: "Sie ist eine Übergangsstruktur. Eine Ehe, eine Insolvenz oder ein Umzug eines Miterben reicht, um die Einstimmigkeit zu verlieren.", norm: "§ 2042 BGB" },
    { fehler: "Der Anteil wird zur „gerechten\" Teilung in drei gleiche Anteile zerlegt.", richtig: "Satzung und Vinkulierung prüfen, Stimmrechtszersplitterung bedenken und die Auswirkung auf die Erbschaftsteuerverschonung rechnen — Teilung kann teurer sein als Übernahme gegen Ausgleich." },
  ],
  merksatz: "Die Erbengemeinschaft ist ein Wartezimmer, kein Gesellschaftsvertrag.",
  gewicht: { mandat: 3, reichweite: 3 },
  antwortfreigabe: "abstrakt",
  stand: "2026-09-13",
  quellen: ["Q8 Kap. 3.1, 3.2, 3.3", "Q8 Fall 13"],
  verwandt: ["unternehmertestament", "erbauseinandersetzung-steuer", "nachfolgeklauseln-kg", "berliner-testament-unternehmer"],
};
