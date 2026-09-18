/* Q10 Abschn. E.1–E.3 · Bedeutung, Anlageziele, Eigen- und Fremdverwaltung */
export default {
  id: "vermoegensverwaltung-stiftung",
  titel: "Selbst anlegen oder verwalten lassen — und was dabei nicht übersehen werden darf",
  bereich: "stiftungsrecht",
  kurz: "Für viele Stiftungen ist die Vermögensanlage die einzige Einnahmequelle; ob der Vorstand selbst anlegt oder einen Verwalter beauftragt, ändert nichts an seiner Verantwortung.",
  normen: ["§ 83c BGB", "§ 84a Abs. 2 BGB", "§ 55 Abs. 1 Nr. 1 AO"],
  kern: [
    "Etwa die Hälfte der Einnahmen gemeinnütziger Stiftungen stammt aus der Vermögensanlage; oft ist sie die einzige Einkommensquelle.",
    "Damit ist die Anlage keine Nebenaufgabe des Vorstands, sondern seine zentrale — und er kann für den ungeschmälerten Erhalt des Kapitals persönlich haften.",
    "Eigenverwaltung lohnt sich, wenn das Fachwissen im Gremium tatsächlich vorhanden ist. Dann braucht es dokumentierte Investitionsentscheidungen und meist ergänzende Anlageberatung.",
    "Fremdverwaltung heisst: ein unabhängiger Vermögensverwalter übernimmt Beratung und Portfoliomanagement, die Depotbank nur noch die Administration.",
    "Bei der Auswahl des Verwalters zählen drei Dinge, die selten im Prospekt stehen: mögliche Interessenkonflikte, ob Nachhaltigkeitskriterien wirklich Teil des Investmentprozesses sind, und ob das Team gross genug ist, um Ausfälle zu verkraften.",
    "Zwei Grenzen gelten unabhängig davon: Unrealisierte Kursgewinne dürfen nicht für Kosten oder den Stiftungszweck verwendet werden, und bei gemeinnützigen Stiftungen sollten die Verwaltungskosten ein Drittel der Einnahmen nicht übersteigen.",
    "Ein praktischer Punkt zum Schluss: Die gesetzliche Einlagensicherung greift je Bank und Einleger — grössere Guthaben gehören deshalb auf mehrere Institute verteilt.",
  ],
  zahlen: [
    { wert: "rund 50 Prozent", bedeutung: "Anteil der Einnahmen gemeinnütziger Stiftungen, der aus der Vermögensanlage stammt." },
    { wert: "etwa 70 Prozent", bedeutung: "So viele Stiftungen haben eine schriftliche Anlagerichtlinie — die übrigen entscheiden ohne Rahmen." },
    { wert: "100.000 Euro", bedeutung: "Gesetzliche Einlagensicherung je Bank und Einleger; darüber hinaus ist Streuung ratsam." },
    { wert: "ein Drittel", bedeutung: "Obergrenze, an der sich die Verwaltungskosten einer gemeinnützigen Stiftung messen lassen müssen.", norm: "§ 55 Abs. 1 Nr. 1 AO" },
  ],
  gegenueberstellung: {
    links: {
      label: "Eigenverwaltung",
      punkte: [
        { krit: "Voraussetzung", wert: "echtes Fachwissen im Gremium" },
        { krit: "Kosten", wert: "niedrig, aber Zeit und Beratung kommen hinzu" },
        { krit: "Dokumentation", wert: "muss der Vorstand selbst leisten", norm: "§ 84a Abs. 2 BGB" },
        { krit: "Risiko", wert: "Klumpen und blinde Flecken bleiben unentdeckt" },
      ],
    },
    rechts: {
      label: "Fremdverwaltung",
      punkte: [
        { krit: "Voraussetzung", wert: "sorgfältige Auswahl und laufende Überwachung" },
        { krit: "Kosten", wert: "Verwaltergebühr, zählt in die Kostenquote" },
        { krit: "Dokumentation", wert: "liefert der Verwalter, verantwortet der Vorstand", norm: "§ 84a Abs. 2 BGB" },
        { krit: "Risiko", wert: "Interessenkonflikte und Abhängigkeit vom Anbieter" },
      ],
    },
  },
  fehler: [
    { fehler: "Der Vorstand überträgt die Anlage vollständig und sieht einmal im Jahr auf den Depotauszug.", richtig: "Auswahl, Instruktion und Überwachung bleiben seine Pflicht. Ein Quartalsbericht mit Abgleich gegen die Anlagerichtlinie ist das Mindeste." },
    { fehler: "Kursgewinne im Depot werden als Ertrag verplant, bevor sie realisiert sind.", richtig: "Unrealisierte Gewinne sind kein verwendbarer Ertrag. Die Ausschüttungsplanung muss auf tatsächlichen Zuflüssen beruhen." },
    { fehler: "Das gesamte Barvermögen liegt bei einer Hausbank.", richtig: "Die Einlagensicherung endet je Institut. Streuung über mehrere Banken kostet nichts ausser etwas Verwaltung." },
  ],
  merksatz: "Ob der Vorstand selbst anlegt oder anlegen lässt — verantwortlich bleibt er in beiden Fällen.",
  gewicht: { mandat: 1, reichweite: 2 },
  antwortfreigabe: "abstrakt",
  stand: "2026-09-18",
  quellen: ["Q10 Abschn. E.1–E.3"],
  verwandt: ["anlagerichtlinie-stiftung", "konzentrationsrisiko-stiftung", "organhaftung-stiftung", "grundstock-sonstiges-vermoegen"],
};
