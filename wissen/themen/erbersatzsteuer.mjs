/* Beispielthema — vollständig ausgefüllt, damit das Schema an einem echten
   Fall sichtbar ist. Fachlich noch von RA gegenzuzeichnen (siehe `stand`). */

export default {
  id: "erbersatzsteuer",
  titel: "Erbersatzsteuer der Familienstiftung",
  bereich: "erbst",
  kurz: "Eine inländische Familienstiftung wird alle 30 Jahre so besteuert, als ginge ihr Vermögen auf zwei Kinder über.",

  normen: [
    "§ 1 Abs. 1 Nr. 4 ErbStG",
    "§ 15 Abs. 2 S. 3 ErbStG",
    "§ 16 Abs. 1 Nr. 2 ErbStG",
    "§§ 13a, 13b ErbStG",
    "§ 24 ErbStG",
  ],

  kern: [
    "Der Erbersatzsteuer unterliegt das Vermögen einer Familienstiftung in Zeitabständen von je 30 Jahren seit dem ersten Übergang von Vermögen auf die Stiftung.",
    "Besteuert wird ein fingierter Erbfall: Das Vermögen gilt als auf zwei Kinder des Erblassers übergegangen.",
    "Daraus folgt der doppelte Kinderfreibetrag und der Steuersatz der Steuerklasse I, bemessen nach dem hälftigen Vermögen.",
    "Die Verschonung für begünstigtes Betriebsvermögen gilt auch hier — die Erbersatzsteuer trifft Betriebsvermögen nicht härter als ein echter Erbfall.",
    "Auf Antrag kann die Steuer in 30 gleichen Jahresbeträgen entrichtet werden; das verwandelt eine Einmalbelastung in eine kalkulierbare laufende Last.",
    "Die Frist läuft nach jeder Besteuerung erneut — die Belastung wiederholt sich über die gesamte Lebensdauer der Stiftung.",
  ],

  mythos: {
    behauptung: "Eine Familienstiftung zahlt keine Erbschaftsteuer, weil sie nicht stirbt.",
    richtigstellung: "Genau deshalb hat der Gesetzgeber die Erbersatzsteuer geschaffen. Die Stiftung stirbt nicht — also besteuert das Gesetz sie in einem festen Rhythmus, unabhängig von jedem echten Erbfall.",
  },

  fehler: [
    {
      fehler: "Die Erbersatzsteuer wird bei der Ertragsplanung der Stiftung nicht eingeplant.",
      richtig: "Der Termin steht mit der Errichtung fest. Er gehört von Anfang an in die Liquiditätsplanung — nicht in das 29. Jahr.",
      norm: "§ 1 Abs. 1 Nr. 4 ErbStG",
    },
    {
      fehler: "Es wird mit den tatsächlichen Begünstigten und deren Steuerklassen gerechnet.",
      richtig: "Das Gesetz fingiert zwei Kinder und damit Steuerklasse I — unabhängig davon, wer tatsächlich begünstigt ist. Ein Enkel als einziger Destinatär ändert daran nichts.",
      norm: "§ 15 Abs. 2 S. 3 ErbStG",
    },
    {
      fehler: "Die Verrentungsmöglichkeit wird übersehen und die Stiftung muss Vermögen veräussern.",
      richtig: "Auf Antrag sind 30 Jahresbeträge möglich. Gerade bei illiquidem Vermögen — Immobilien, Beteiligungen — ist das der Unterschied zwischen Halten und Verkaufen.",
      norm: "§ 24 ErbStG",
    },
  ],

  schritte: [
    { titel: "Stichtag bestimmen", hinweis: "30 Jahre seit dem ersten Vermögensübergang auf die Stiftung — nicht seit der Anerkennung.", norm: "§ 1 Abs. 1 Nr. 4 ErbStG" },
    { titel: "Vermögen bewerten", hinweis: "Bewertung wie im echten Erbfall, auf den Stichtag.", norm: "§ 12 ErbStG" },
    { titel: "Verschonung prüfen", hinweis: "Begünstigtes Betriebsvermögen zuerst aussondern — das entscheidet über die Grössenordnung.", norm: "§§ 13a, 13b ErbStG" },
    { titel: "Fiktion anwenden", hinweis: "Zwei Kinder, doppelter Freibetrag, Steuersatz nach dem hälftigen Vermögen.", norm: "§ 15 Abs. 2 S. 3 ErbStG" },
    { titel: "Zahlungsweg wählen", hinweis: "Einmalzahlung oder 30 Jahresbeträge — eine Liquiditäts-, keine Steuerfrage.", norm: "§ 24 ErbStG" },
  ],

  gegenueberstellung: {
    links: {
      label: "Deutschland",
      punkte: [
        { krit: "Errichtung", wert: "Anerkennung durch die Stiftungsbehörde", norm: "§§ 80 ff. BGB" },
        { krit: "Schenkungsteuer bei Errichtung", wert: "Steuerklasse nach dem entferntest Berechtigten", norm: "§ 15 Abs. 2 S. 1 ErbStG" },
        { krit: "Erbersatzsteuer", wert: "Alle 30 Jahre", norm: "§ 1 Abs. 1 Nr. 4 ErbStG" },
        { krit: "Laufende Besteuerung", wert: "Körperschaftsteuer bei der Stiftung", norm: "§ 1 Abs. 1 Nr. 4 KStG" },
      ],
    },
    rechts: {
      label: "Liechtenstein",
      punkte: [
        { krit: "Errichtung", wert: "Eintragung, keine staatliche Genehmigung", norm: "Art. 552 PGR" },
        { krit: "Schenkungsteuer bei Errichtung", wert: "Steuerklasse III — das Privileg gilt nur im Inland", norm: "§ 15 Abs. 1 ErbStG" },
        { krit: "Erbersatzsteuer", wert: "Keine" },
        { krit: "Laufende Besteuerung", wert: "Zurechnung beim Stifter, solange der Entlastungsbeweis fehlt", norm: "§ 15 Abs. 1, 6 AStG" },
      ],
    },
  },

  zahlen: [
    { wert: "30 Jahre", bedeutung: "Der Rhythmus der Erbersatzsteuer — und die einzige Frist im Stiftungsrecht, die man zur Errichtung schon kennt.", norm: "§ 1 Abs. 1 Nr. 4 ErbStG" },
    { wert: "2 × 400.000 €", bedeutung: "Der Freibetrag aus der Fiktion zweier Kinder.", norm: "§ 16 Abs. 1 Nr. 2 ErbStG" },
    { wert: "30 Jahresbeträge", bedeutung: "So lässt sich die Steuer auf Antrag strecken.", norm: "§ 24 ErbStG" },
  ],

  merksatz: "Die Erbersatzsteuer ist kein Argument gegen die Stiftung — sie ist ein Termin, den man zur Errichtung schon kennt.",

  gewicht: { mandat: 3, reichweite: 3 },
  antwortfreigabe: "abstrakt",
  stand: "2026-09-12",
  quellen: [
    "Gesetzestext ErbStG (Stand prüfen).",
    "TODO: Kommentarfundstellen und Verwaltungsanweisungen aus dem Material des Kanzleiinhabers ergänzen.",
  ],
  verwandt: ["liechtenstein-zurechnung"],
};
