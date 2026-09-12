/* Q7 · Kap. 24 Immobilienvermögen · Fall 28.3, 28.12 · Fehler 28 */
export default {
  id: "immobilien-nachfolge-struktur",
  titel: "Vierzig Mietobjekte, vier Wege — direkte Schenkung, Nießbrauch, Familien-KG oder Stiftung",
  bereich: "immobilien",
  kurz: "Bei Immobilienfamilien ist die Strukturfrage offen: Direktübertragung, Nießbrauch, Familiengesellschaft oder Stiftung — entschieden wird nach Verkaufsabsicht, Grunderwerbsteuer, Spekulationsfrist und dem Wunsch nach Bindung.",
  normen: ["§ 23 EStG", "§ 1 Abs. 2a, Abs. 3 GrEStG", "§§ 3, 5, 6 GrEStG", "§ 13b Abs. 4 ErbStG", "§ 13d ErbStG"],
  kern: [
    "Die Direktschenkung ist einfach und grunderwerbsteuerfrei zwischen Verwandten in gerader Linie — aber jede Immobilie zerfällt beim nächsten Erbfall in Miteigentumsquoten, und jede Entscheidung braucht alle Miteigentümer.",
    "Die Familien-KG oder -GbR bündelt Eigentum und Verwaltung: Anteile lassen sich in Tranchen verschenken, der Gesellschaftsvertrag regelt Geschäftsführung, Exit und Abfindung — und die Immobilie bleibt ungeteilt.",
    "Die Familienstiftung bindet am stärksten, vermeidet Erbfall und Zersplitterung dauerhaft und kann Immobilien nach zehn Jahren steuerfrei verkaufen — dafür gibt die Familie das Eigentum auf und zahlt alle 30 Jahre Erbersatzsteuer.",
    "Grunderwerbsteuer lauert nicht nur bei der Gründung: Werden innerhalb von zehn Jahren 90 % der Anteile an einer Grundstücksgesellschaft übertragen, fällt sie erneut an — auch innerhalb der Familie, soweit keine Befreiung greift.",
    "Wohnimmobilien bekommen bei der Erbschaftsteuer einen Abschlag von 10 %; als Betriebsvermögen sind vermietete Immobilien dagegen regelmäßig schädliches Verwaltungsvermögen — die Rechtsform ändert die Steuerwelt.",
  ],
  gegenueberstellung: {
    links: { label: "Familien-KG", punkte: [
      { krit: "Eigentum", wert: "Bleibt bei der Familie — die Gesellschafter halten Anteile" },
      { krit: "Flexibilität", wert: "Hoch: schrittweise Schenkung, Vertrag änderbar, Austritt möglich" },
      { krit: "Bindung", wert: "So lange, wie die Familie sich einig ist — oder der Vertrag hält" },
      { krit: "Verkauf nach 10 Jahren", wert: "Steuerfrei bei vermögensverwaltender Gesellschaft", norm: "§ 23 EStG" },
      { krit: "Erbfall", wert: "Findet statt — Anteile werden vererbt, mit Freibeträgen alle 10 Jahre" },
    ] },
    rechts: { label: "Familienstiftung", punkte: [
      { krit: "Eigentum", wert: "Bei der Stiftung — die Familie ist begünstigt, nicht Eigentümerin" },
      { krit: "Flexibilität", wert: "Gering: Satzung ist Verfassung, Änderung nur in Stufen" },
      { krit: "Bindung", wert: "Dauerhaft — über Generationen und Familienstreit hinweg" },
      { krit: "Verkauf nach 10 Jahren", wert: "Steuerfrei, weil keine Gewerblichkeit kraft Rechtsform", norm: "§ 23 EStG, § 8 Abs. 2 KStG" },
      { krit: "Erbfall", wert: "Findet nicht statt — stattdessen Erbersatzsteuer alle 30 Jahre", norm: "§ 1 Abs. 1 Nr. 4 ErbStG" },
    ] },
  },
  einsatzfelder: [
    { situation: "Ein Immobilienunternehmer mit 40 Mietobjekten will zentrale Verwaltung und kein Miteigentumschaos unter drei Kindern.", warum: "Die KG löst das Verwaltungsproblem und erlaubt schrittweise Schenkung; die Stiftung nur, wenn die Familie die Bindung will." },
    { situation: "Die Familie will die Immobilien nie verkaufen und über Generationen zusammenhalten.", warum: "Das ist das Kernmotiv der Stiftung — die KG hält nur, solange alle wollen." },
  ],
  beispiele: [
    { konstellation: "Eltern bringen zehn Mietshäuser in eine Familien-KG ein und schenken den drei Kindern über zwölf Jahre je 30 % der Anteile.", gestaltung: "Jede Tranche nutzt die Freibeträge. Die Einbringung ist grunderwerbsteuerfrei, die Anteilsschenkungen an die Kinder auch — aber der Vertrag muss Geschäftsführung, Exit, Vinkulierung, Abfindung und Ehe- und Nachfolgepflichten regeln.", pointe: "Ein Familienpool ohne Konfliktregeln ist nur vertagter Streit." },
  ],
  fehler: [
    { fehler: "Die Grunderwerbsteuer wird nur bei der Gründung geprüft, nicht bei späteren Anteilsverschiebungen.", richtig: "Anteilsübertragungen an Grundstücksgesellschaften lösen ab 90 % innerhalb von zehn Jahren erneut Grunderwerbsteuer aus — die Familienbefreiungen greifen nur teilweise.", norm: "§ 1 Abs. 2a, Abs. 3 GrEStG" },
    { fehler: "Jedes große Immobilienvermögen wird reflexhaft in eine Stiftung gepackt.", richtig: "Nicht jedes große Immobilienvermögen gehört in eine Stiftung — die KG ist oft flexibler und für die Familie leichter zu tragen." },
  ],
  merksatz: "Immobilien brauchen eine Strukturentscheidung — die Stiftung ist eine von vier Antworten, nicht die einzige.",
  gewicht: { mandat: 3, reichweite: 3 },
  antwortfreigabe: "abstrakt",
  stand: "2026-09-12",
  quellen: ["Q7 Kap. 24", "Q7 Fall 28.3, 28.12", "Q7 Fehler 28", "Q9 Kap. 3"],
  verwandt: ["familienpool", "immobilien-stiftung-rechnen", "niessbrauch-immobilie", "immobilien-verwaltungsvermoegen", "share-deal-grest"],
};
