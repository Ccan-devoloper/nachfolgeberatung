/* Beispielthema — das Differenzierungsthema des Kanals. Fachlich heikel und
   einzelfallnah, deshalb `antwortfreigabe: "keine"`. */

export default {
  id: "liechtenstein-zurechnung",
  titel: "Zurechnungsbesteuerung der liechtensteinischen Familienstiftung",
  bereich: "liechtenstein",
  kurz: "Einkünfte einer ausländischen Familienstiftung rechnet das Gesetz dem Stifter zu — es sei denn, der Entlastungsbeweis für den EWR gelingt.",

  normen: [
    "§ 15 Abs. 1 AStG",
    "§ 15 Abs. 2 AStG",
    "§ 15 Abs. 6 AStG",
    "§ 15 Abs. 7 AStG",
    "Art. 552 PGR",
  ],

  kern: [
    "Vermögen und Einkünfte einer ausländischen Familienstiftung werden dem unbeschränkt steuerpflichtigen Stifter zugerechnet, sonst den unbeschränkt steuerpflichtigen Bezugs- oder Anfallsberechtigten.",
    "Familienstiftung ist eine Stiftung, bei der der Stifter und seine Angehörigen zu mehr als der Hälfte bezugs- oder anfallsberechtigt sind — die Beteiligungsquote entscheidet, nicht die Bezeichnung.",
    "Für Stiftungen mit Sitz und Geschäftsleitung im EU-/EWR-Raum entfällt die Zurechnung, wenn zwei Voraussetzungen zusammenkommen.",
    "Erstens muss nachgewiesen sein, dass das Stiftungsvermögen der Verfügungsmacht der begünstigten Personen rechtlich und tatsächlich entzogen ist.",
    "Zweitens muss zwischen Deutschland und dem Sitzstaat die erforderliche Amtshilfe bestehen — bei Liechtenstein ist das der Fall.",
    "Liechtenstein gehört zum EWR. Der Entlastungsbeweis steht damit offen — er ist aber Gestaltungs- und Dokumentationsarbeit, kein Formular.",
    "Der häufigste Grund, warum der Beweis misslingt, ist tatsächliche Einflussnahme des Stifters trotz formal sauberer Statuten.",
  ],

  mythos: {
    behauptung: "Mit einer Liechtensteiner Stiftung ist das Vermögen dem deutschen Fiskus entzogen.",
    richtigstellung: "Der Grundfall ist das Gegenteil: Das Gesetz rechnet die Einkünfte dem Stifter zu, als hätte er sie selbst erzielt. Nur wer den Entlastungsbeweis führt, kommt aus der Zurechnung heraus — und der verlangt echten Kontrollverzicht.",
  },

  fehler: [
    {
      fehler: "Die Statuten sind sauber, der Stifter steuert die Stiftung aber faktisch weiter — über Mandatsverträge, Beiratsbesetzung oder informelle Weisungen.",
      richtig: "Der Entlastungsbeweis verlangt, dass das Vermögen rechtlich UND tatsächlich entzogen ist. Tatsächliche Einflussnahme lässt ihn scheitern, egal wie die Urkunden lauten.",
      norm: "§ 15 Abs. 6 AStG",
    },
    {
      fehler: "Die Errichtung wird schenkungsteuerlich wie bei einer inländischen Familienstiftung gerechnet.",
      richtig: "Das Steuerklassenprivileg gilt nur für inländische Familienstiftungen. Bei der ausländischen Stiftung greift Steuerklasse III.",
      norm: "§ 15 Abs. 2 S. 1 ErbStG",
    },
  ],

  schritte: [
    { titel: "Familienstiftung?", hinweis: "Sind Stifter und Angehörige zu mehr als der Hälfte bezugs- oder anfallsberechtigt?", norm: "§ 15 Abs. 2 AStG" },
    { titel: "Zurechnungssubjekt bestimmen", hinweis: "Unbeschränkt steuerpflichtiger Stifter — sonst die Berechtigten.", norm: "§ 15 Abs. 1 AStG" },
    { titel: "EWR-Sitz prüfen", hinweis: "Sitz und Geschäftsleitung im EU-/EWR-Raum. Liechtenstein erfüllt das.", norm: "§ 15 Abs. 6 AStG" },
    { titel: "Kontrollverzicht nachweisen", hinweis: "Rechtlich und tatsächlich entzogen — das ist die eigentliche Hürde und die eigentliche Gestaltungsaufgabe.", norm: "§ 15 Abs. 6 AStG" },
    { titel: "Amtshilfe prüfen", hinweis: "Erforderlicher Auskunftsaustausch mit dem Sitzstaat.", norm: "§ 15 Abs. 6 AStG" },
  ],

  merksatz: "Die liechtensteinische Stiftung schirmt nicht durch ihre Rechtsform ab, sondern durch echten Kontrollverzicht — wer weiter steuern will, zahlt weiter.",

  gewicht: { mandat: 3, reichweite: 2 },
  /* Einzelfallnah und auslandsbezogen: Kommentarfragen dazu beantwortet der
     Bot nicht selbst, sondern gibt den Standardhinweis aus. */
  antwortfreigabe: "keine",
  stand: "2026-09-12",
  quellen: [
    "Gesetzestext AStG — Fassung nach dem ATAD-Umsetzungsgesetz; Stand vor jedem Beitrag prüfen.",
    "TODO: BFH-Rechtsprechung zum Entlastungsbeweis und Kommentarfundstellen aus dem Material des Kanzleiinhabers ergänzen.",
  ],
  verwandt: ["erbersatzsteuer"],
};
