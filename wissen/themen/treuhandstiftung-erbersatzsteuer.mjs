/* Q10 Abschn. H.4 · Unselbstständige Stiftung, BFH 25.01.2017 II R 26/16 */
export default {
  id: "treuhandstiftung-erbersatzsteuer",
  titel: "Die Stiftung, die keine Erbersatzsteuer zahlt",
  bereich: "ersatzformen",
  kurz: "Die unselbstständige Stiftung unterliegt nicht der Erbersatzsteuer — der BFH hat das 2017 entschieden, weil die Vorschrift nur rechtsfähige Stiftungen erfasst. Für viele Familien ist das der entscheidende Unterschied.",
  normen: ["§ 1 Abs. 1 Nr. 4 ErbStG", "§ 1 Abs. 1 Nr. 5 KStG", "§ 15 Abs. 2 S. 1 ErbStG", "§ 39 AO"],
  kern: [
    "Die unselbstständige Stiftung ist die ältere Form: Kein eigener Rechtsträger, sondern ein Sondervermögen, das ein Träger — eine GmbH, ein Verein oder eine rechtsfähige Stiftung — aufgrund eines Vertrags nach den Vorgaben des Stifters verwaltet.",
    "Der grösste steuerliche Unterschied zur rechtsfähigen Familienstiftung liegt bei der Erbersatzsteuer: Sie fällt nicht an.",
    "Der Bundesfinanzhof hat das 2017 klar entschieden. Die Vorschrift erfasst nach ihrem Wortlaut nur die rechtsfähige Stiftung; die unselbstständige hat kein eigenes Vermögen, und massgeblich ist die zivilrechtliche Betrachtung.",
    "Über dreissig, sechzig, neunzig Jahre gerechnet ist das ein erheblicher Betrag — bei einer rechtsfähigen Familienstiftung fällt alle dreissig Jahre eine fiktive Erbschaftsteuer an, als gingen zwei Kinder als Erben hervor.",
    "Ertragsteuerlich ist die unselbstständige Stiftung trotzdem ein eigenes Steuersubjekt: Sie wird als nichtrechtsfähige Stiftung zur Körperschaftsteuer herangezogen.",
    "Das setzt aber voraus, dass das Vermögen wirklich übergegangen ist: Es darf dem Träger wirtschaftlich nicht zuzurechnen sein, und weder Stifter noch Begünstigte dürfen ein freies Rückforderungsrecht haben.",
    "Fehlt das, ist die Konstruktion steuerlich durchsichtig — dann bleibt das Vermögen beim Stifter, mit allen Folgen.",
    "Ob bei der Errichtung das Steuerklassenprivileg gilt, ist zweifelhaft. Das ist der Preis, der dem Vorteil gegenübersteht.",
    "Weitere Vorzüge: keine Stiftungsaufsicht, keine Anerkennung, deutlich geringere Anforderungen an das Vermögen, hohe Flexibilität.",
    "Der Preis dafür ist Abhängigkeit vom Träger. Es gibt keine Behörde, die über den Stifterwillen wacht — nur den Vertrag. Dessen Qualität entscheidet über alles.",
  ],
  gegenueberstellung: {
    links: {
      label: "Rechtsfähige Familienstiftung",
      punkte: [
        { krit: "Entstehung", wert: "Anerkennung durch die Stiftungsbehörde", norm: "§ 80 Abs. 1 BGB" },
        { krit: "Erbersatzsteuer", wert: "Alle 30 Jahre", norm: "§ 1 Abs. 1 Nr. 4 ErbStG" },
        { krit: "Aufsicht", wert: "Laufende Rechtsaufsicht des Landes" },
        { krit: "Steuerklassenprivileg", wert: "Gilt bei der Erstausstattung", norm: "§ 15 Abs. 2 S. 1 ErbStG" },
        { krit: "Schutz des Stifterwillens", wert: "Behörde und Satzung" },
      ],
    },
    rechts: {
      label: "Unselbstständige Stiftung",
      punkte: [
        { krit: "Entstehung", wert: "Vertrag mit einem Träger, sofort wirksam" },
        { krit: "Erbersatzsteuer", wert: "Keine — der BFH hat das 2017 entschieden" },
        { krit: "Aufsicht", wert: "Keine" },
        { krit: "Steuerklassenprivileg", wert: "Zweifelhaft" },
        { krit: "Schutz des Stifterwillens", wert: "Nur der Vertrag — und die Solidität des Trägers" },
      ],
    },
  },
  einsatzfelder: [
    { situation: "Das Vermögen ist zu klein für eine rechtsfähige Stiftung, soll aber dauerhaft gebunden werden.", warum: "Die Anforderungen an die Ausstattung sind deutlich geringer, und es gibt keine Anerkennungshürde." },
    { situation: "Die Familie will die dreissigjährige Steuerlast vermeiden, aber trotzdem eine Stiftungsstruktur.", warum: "Genau hier liegt der wirtschaftliche Kern — über mehrere Generationen kann der Unterschied den Aufbau der Struktur mehr als rechtfertigen." },
  ],
  fehler: [
    { fehler: "Der Stiftungsvertrag behält dem Stifter ein Rückforderungsrecht vor.", richtig: "Dann ist das Vermögen nicht übergegangen — die Konstruktion ist steuerlich durchsichtig und erreicht nichts von dem, wofür sie gebaut wurde." },
    { fehler: "Der Träger wird nach Sympathie ausgewählt.", richtig: "Es gibt keine Aufsicht. Bonität, Dauerhaftigkeit und die Frage, was bei Insolvenz des Trägers geschieht, entscheiden über das Vermögen." },
  ],
  merksatz: "Die unselbstständige Stiftung zahlt keine Erbersatzsteuer — dafür schützt sie kein Gesetz, sondern nur ihr Vertrag.",
  gewicht: { mandat: 3, reichweite: 3 },
  antwortfreigabe: "abstrakt",
  stand: "2026-09-18",
  quellen: ["Q10 Abschn. H.4", "Q3 Treuhandstiftung"],
  verwandt: ["treuhandstiftung", "erbersatzsteuer", "ersatzformen-ueberblick", "stiftungs-gmbh"],
};
