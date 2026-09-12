/* Q5 · Flucht in die Gemeinnützigkeit, § 29 Abs. 1 Nr. 4 ErbStG; Umwandlung § 13 Abs. 4 KStG */
export default {
  id: "flucht-gemeinnuetzigkeit",
  titel: "Die 24-Monats-Regel — Erbschaftsteuer rückwirkend löschen durch Weitergabe an eine gemeinnützige Stiftung",
  bereich: "gemeinnuetzig",
  kurz: "Wer geerbtes Vermögen binnen 24 Monaten einer ausschliesslich gemeinnützigen Stiftung zuwendet, lässt die Erbschaftsteuer darauf rückwirkend erlöschen — und kann die Kontrolle behalten.",
  normen: ["§ 29 Abs. 1 Nr. 4 ErbStG", "§ 58 Nr. 6 AO", "§ 13 Abs. 4 KStG", "§ 13 Abs. 1 Nr. 16 Buchst. b ErbStG"],
  kern: [
    "Die Erbschaftsteuer erlischt mit Wirkung für die Vergangenheit, soweit erworbene Vermögensgegenstände binnen 24 Monaten nach Steuerentstehung einer inländischen Stiftung zugewendet werden, die ausschliesslich gemeinnützige Zwecke verfolgt.",
    "Nutzt die Stiftung das Stifterdrittel, ist das schädlich — die Befreiung verlangt Ausschliesslichkeit.",
    "Der Erwerber kann damit bestimmtes Vermögen erbschaftsteuerlich neutralisieren und gleichwohl die unternehmerische Kontrolle behalten — über die Ausgestaltung des Gesellschaftsvertrags, auch noch zwischen Erwerb und Weitergabe.",
    "Denkbar ist die teilweise Weitergabe: Die Beteiligung wird voll erworben, ein Teil geht an die gemeinnützige Stiftung, Stimmrechte bleiben beim Erwerber.",
    "Verwandt: Wird eine bestehende Familienstiftung in eine gemeinnützige umgewandelt, bleiben die stillen Reserven unaufgedeckt.",
    "Wer hier gestaltet, muss die Gemeinnützigkeit ernst meinen — die Stiftung muss ihre Mittel zeitnah gemeinnützig verwenden, und die Familie bekommt daraus nichts.",
  ],
  einsatzfelder: [
    { situation: "Ein Erbe erhält ein Unternehmen mit hoher Verwaltungsvermögensquote, die Steuer ist erheblich, und er hat ohnehin ein gemeinnütziges Anliegen.", warum: "Ein Teil der Beteiligung geht binnen 24 Monaten an eine gemeinnützige Stiftung — die Steuer darauf erlischt rückwirkend, die Stimmrechte bleiben beim Erben." },
  ],
  fehler: [
    { fehler: "Die Frist wird verpasst, weil erst die Stiftung errichtet und anerkannt werden muss.", richtig: "24 Monate ab Steuerentstehung — die Errichtung einer Stiftung dauert Monate. Wer die Option will, beginnt sofort." },
    { fehler: "Die gemeinnützige Stiftung soll die Familie mitversorgen.", richtig: "Dann ist sie nicht ausschliesslich gemeinnützig und die Befreiung entfällt. Familienversorgung gehört in eine Familienstiftung — Doppelstiftung." },
  ],
  zahlen: [
    { wert: "24 Monate", bedeutung: "Frist für die Weitergabe an eine gemeinnützige Stiftung mit rückwirkendem Erlöschen der Erbschaftsteuer.", norm: "§ 29 Abs. 1 Nr. 4 ErbStG" },
  ],
  merksatz: "Zwei Jahre nach dem Erbfall kann man die Steuer noch löschen — wenn man bereit ist, das Vermögen wirklich zu geben.",
  gewicht: { mandat: 2, reichweite: 2 },
  antwortfreigabe: "keine",
  stand: "2026-09-12",
  quellen: ["Q5 Folien 127, 140"],
  verwandt: ["stifterdrittel", "doppelstiftung", "grosserwerb-verschonungsbedarf"],
};
