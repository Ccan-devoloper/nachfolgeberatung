/* Q8 · Kap. 1, 1.1 · Fall 1, 2 */
export default {
  id: "handlungsunfaehigkeit-unternehmer",
  titel: "Der Nachfolgefall vor dem Tod — wenn der Unternehmer ausfällt",
  bereich: "vorsorge",
  kurz: "Schlaganfall, Unfall, Demenz: Löhne, Kreditlinien, Beschlüsse und Steuerfristen laufen weiter, während der Unternehmer nicht mehr unterschreiben kann — und niemand rückt automatisch nach, auch der Ehegatte nicht.",
  normen: ["§ 1358 BGB", "§ 1814 BGB", "§ 6 Abs. 2 GmbHG", "§§ 48 ff. HGB"],
  kern: [
    "Handlungsunfähigkeit trifft vier Rollen unterschiedlich: den Einzelunternehmer, den Gesellschafter, den Geschäftsführer und den Stiftungsvorstand — jede braucht eine eigene Lösung.",
    "Der Gesellschafter kann Stimm-, Informations- und Verfügungsrechte nicht mehr ausüben; eine passende Vollmacht kann das auffangen, wenn die Satzung sie zulässt.",
    "Das Geschäftsführeramt ist persönlich: Geschäftsführer kann nur sein, wer unbeschränkt geschäftsfähig ist. Eine Vollmacht überträgt das Amt nicht — sie kann nur einzelne Geschäfte abdecken.",
    "Bei Personengesellschaften sind organschaftliche Geschäftsführungs- und Vertretungsrechte besonders heikel: Eine private Vorsorgevollmacht ersetzt sie nicht automatisch.",
    "Ohne Vorsorge bestellt das Betreuungsgericht einen Betreuer — das dauert Wochen, und der Betreuer ist nicht der, den die Familie gewählt hätte.",
  ],
  mythos: {
    behauptung: "Wenn mir etwas passiert, kann meine Frau doch unterschreiben — wir sind verheiratet.",
    richtigstellung: "Für die Firma stimmt das nicht. Das gesetzliche Ehegattenvertretungsrecht gilt nur für die Gesundheitssorge und nur befristet — nicht für Gesellschaftsanteile, nicht für die Geschäftsführung, nicht für die Bank.",
  },
  gegenueberstellung: {
    links: { label: "Was eine Vollmacht leisten kann", punkte: [
      { krit: "Laufende Geschäfte", wert: "Ja, bei ausreichend weiter Unternehmervollmacht" },
      { krit: "Gesellschafterrechte", wert: "Ja, wenn Vollmacht und Satzung zusammenpassen" },
      { krit: "Bank, Depot, Finanzierung", wert: "Nur mit ausdrücklicher Bank- und Depotvollmacht" },
      { krit: "Geschäftsführeramt", wert: "Nein — das Amt ist persönlich und nicht übertragbar", norm: "§ 6 Abs. 2 GmbHG" },
    ] },
    rechts: { label: "Was nur Satzung oder Gesellschaftsvertrag leisten", punkte: [
      { krit: "Laufende Geschäfte", wert: "Prokura und zweiter Geschäftsführer als Dauerlösung" },
      { krit: "Gesellschafterrechte", wert: "Öffnungsklausel für Vertretung, Zustimmung der Mitgesellschafter" },
      { krit: "Bank, Depot, Finanzierung", wert: "Zeichnungsregeln und Vertretungsnachweis gegenüber der Bank" },
      { krit: "Geschäftsführeramt", wert: "Ersatzgeschäftsführer oder Bestellungsmechanismus für den Ausfall" },
    ] },
  },
  einsatzfelder: [
    { situation: "Ein Alleingesellschafter ist zugleich alleiniger Geschäftsführer.", warum: "Fällt er aus, ist die Gesellschaft doppelt blockiert: Niemand führt, und niemand kann einen Nachfolger bestellen, weil niemand das Stimmrecht ausüben darf." },
    { situation: "Der geschäftsführende Komplementär einer Familien-KG entwickelt eine Demenz.", warum: "Die private Bevollmächtigung löst die organschaftliche Stellung nicht — der Gesellschaftsvertrag muss den Ausfall regeln, samt Feststellungsmechanismus." },
    { situation: "Eine Familienstiftung hält das Unternehmen, aber nur ein Vorstandsmitglied ist wirklich aktiv.", warum: "Die private Vorsorgevollmacht dieses Mitglieds hilft der Stiftung nicht — sie braucht Ersatzbestellung und Mindestbesetzung in der Satzung." },
  ],
  beispiele: [
    { konstellation: "Ein 54-jähriger Alleingesellschafter und Alleingeschäftsführer einer GmbH mit 60 Mitarbeitern erleidet einen Schlaganfall. Seine Frau hat eine allgemeine private Vorsorgevollmacht aus dem Internet.", gestaltung: "Die Vollmacht deckt das Privatvermögen, aber die Bank akzeptiert sie für die Firmenkonten nicht. Geschäftsführerin wird die Frau nicht — dafür bräuchte es einen Gesellschafterbeschluss, den nur er fassen könnte.", pointe: "Die Löhne waren am 15. fällig. Bis das Betreuungsgericht entschieden hatte, war es der 3. des Folgemonats." },
  ],
  fehler: [
    { fehler: "Es gibt eine Patientenverfügung, aber keine Vermögens- und Unternehmervollmacht.", richtig: "Die Patientenverfügung regelt die Behandlung — nicht, wer die Firma führt. Beides sind verschiedene Dokumente." },
    { fehler: "Man verlässt sich darauf, dass Ehegatte oder erwachsene Kinder vertretungsberechtigt sind.", richtig: "Sind sie nicht. Ohne Vollmacht entscheidet das Betreuungsgericht, wer vertritt.", norm: "§ 1358 BGB, § 1814 BGB" },
  ],
  merksatz: "Die erste Nachfolgefrage ist nicht, wer erbt — sondern wer am Montag unterschreibt.",
  gewicht: { mandat: 3, reichweite: 3 },
  antwortfreigabe: "abstrakt",
  stand: "2026-09-13",
  quellen: ["Q8 Kap. 1, 1.1", "Q8 Fall 1, 2, 5"],
  verwandt: ["unternehmervollmacht", "ein-mann-gmbh-notfall", "notfallordner-unternehmen", "unternehmertestament"],
};
