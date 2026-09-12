/* Q8 · Kap. 1.4, 1.5 · Fall 1, 2 · Fehler 4, 5, 11 */
export default {
  id: "ein-mann-gmbh-notfall",
  titel: "Gesellschafter und Geschäftsführer sind zwei verschiedene Notfälle",
  bereich: "vorsorge",
  kurz: "Fällt ein Gesellschafter aus, ruhen seine Stimmrechte; fällt ein Geschäftsführer aus, fehlt das Organ — wer beides in einer Person ist, blockiert die Gesellschaft doppelt, wenn nichts vorbereitet ist.",
  normen: ["§ 6 Abs. 2 GmbHG", "§ 47 GmbHG", "§ 35 GmbHG", "§ 105 HGB"],
  kern: [
    "Der Geschäftsanteil bleibt bestehen — problematisch ist die Ausübung der Rechte: Beschlüsse über Geschäftsführerbestellung, Jahresabschluss, Gewinnverwendung oder Verkauf müssen wirksam gefasst werden.",
    "Eine passende Unternehmervollmacht kann die Mitgliedschaftsrechte abdecken; Satzungsbeschränkungen zur Stimmrechtsvertretung, Vinkulierung und persönliche Sonderrechte sind vorher zu prüfen.",
    "Das Geschäftsführeramt ist an die unbeschränkte Geschäftsfähigkeit geknüpft und nicht delegierbar — die Notfallordnung muss den Beschluss über einen Ersatzgeschäftsführer ermöglichen.",
    "Der Worst Case: Alleingesellschafter plus Alleingeschäftsführer plus keine Unternehmervollmacht plus kein zweiter Geschäftsführer — operativ und gesellschaftsrechtlich gleichzeitig blockiert.",
    "Bei Personengesellschaften gilt zusätzlich: Für eine umfassende, alle Gesellschafterrechte erfassende Vollmacht verlangt die überwiegende Auffassung die Zustimmung der Mitgesellschafter; höchstrichterlich geklärt ist das nicht — deshalb gehört die Öffnungsklausel ausdrücklich in den Gesellschaftsvertrag.",
  ],
  einsatzfelder: [
    { situation: "Eine Ein-Mann-GmbH mit 40 Mitarbeitern soll krisenfest werden.", warum: "Zwei Bausteine genügen meist: eine Vollmacht, die das Stimmrecht abdeckt, und ein zweiter Geschäftsführer oder ein Prokurist mit Zeichnungsbefugnis." },
    { situation: "Mehrere Familienstämme halten eine KG; ein Stamm will eine Vorsorgevollmacht erteilen.", warum: "Ohne Regelung im Gesellschaftsvertrag streiten die übrigen Gesellschafter darüber, ob der Bevollmächtigte mitstimmen darf — die Zustimmung gehört vorab in den Vertrag." },
  ],
  beispiele: [
    { konstellation: "Ein Alleingesellschafter-Geschäftsführer wird nach einem Unfall geschäftsunfähig. Seine Unternehmervollmacht deckt ausdrücklich die Ausübung aller Gesellschafterrechte ab.", gestaltung: "Der Bevollmächtigte fasst den Gesellschafterbeschluss, bestellt die langjährige Prokuristin zur Geschäftsführerin und meldet sie zum Handelsregister an. Die Gesellschaft ist nach vier Tagen wieder handlungsfähig.", pointe: "Ein Absatz in der Vollmacht — „einschliesslich der Bestellung und Abberufung von Geschäftsführern\" — war der Unterschied zwischen vier Tagen und vier Monaten." },
  ],
  fehler: [
    { fehler: "Die Vollmacht passt nicht zur Satzung — sie erlaubt Stimmrechtsvertretung, die Satzung schliesst sie aus.", richtig: "Satzung und Vollmacht müssen im selben Vorgang geprüft und, wenn nötig, beide geändert werden.", norm: "§ 47 Abs. 3 GmbHG" },
    { fehler: "Prokura wird mit Gesellschaftermacht verwechselt.", richtig: "Der Prokurist führt das Handelsgewerbe, er fasst keine Gesellschafterbeschlüsse und bestellt keine Geschäftsführer.", norm: "§ 49 HGB" },
    { fehler: "Der Bevollmächtigte darf abstimmen, aber keine Anteile übertragen oder Grundstücke belasten.", richtig: "Was nicht ausdrücklich in der Vollmacht steht, geht nicht — gerade Anteilsgeschäfte und Grundstücke brauchen die ausdrückliche Befugnis." },
  ],
  merksatz: "Wer Gesellschafter und Geschäftsführer in einer Person ist, braucht zwei Notfalllösungen — nicht eine.",
  gewicht: { mandat: 3, reichweite: 3 },
  antwortfreigabe: "abstrakt",
  stand: "2026-09-13",
  quellen: ["Q8 Kap. 1.4, 1.5", "Q8 Fall 1, 2", "Q8 Fehler 4, 5, 11"],
  verwandt: ["handlungsunfaehigkeit-unternehmer", "unternehmervollmacht", "gmbh-anteile-nachfolge", "notfallordner-unternehmen"],
};
