/* Q10 Abschn. F.2f · Unsicherheit bzgl. §§ 13a, 13b ErbStG */
export default {
  id: "dotation-in-zwei-schritten",
  titel: "Die Stiftung verträgt keine Bedingung — deshalb dotiert man zweimal",
  bereich: "familienstiftung",
  kurz: "Bei einer Schenkung sichert ein Rückforderungsrecht das Risiko ab, dass die Verschonung doch nicht greift. Bei der Stiftungsausstattung geht das nicht: Sie ist bedingungsfeindlich, und die Aufsicht akzeptiert keinen Vorbehalt.",
  normen: ["§ 29 Abs. 1 Nr. 1 ErbStG", "§§ 13a, 13b ErbStG", "§ 81 BGB", "§ 15 Abs. 2 S. 1 ErbStG", "§ 7 Abs. 1 Nr. 8 ErbStG"],
  kern: [
    "Ob die Verschonung für Betriebsvermögen greift, steht vor der Übertragung oft nicht fest — Verwaltungsvermögensquote, Lohnsumme und Abgrenzungsfragen lassen sich nicht immer sicher beurteilen.",
    "Bei einer gewöhnlichen Schenkung ist das beherrschbar: Ein Rückforderungsrecht im Vertrag, und wenn die Steuer anders ausfällt als erwartet, wird das Geschenk herausgegeben. Die Steuer erlischt dann rückwirkend.",
    "Bei der Stiftung funktioniert dieser Schutz nicht. Die Ausstattung ist bedingungsfeindlich, und die Stiftungsbehörde akzeptiert kein Rückforderungsrecht im Stiftungsgeschäft — sonst stünde das Grundstockvermögen von Anfang an unter Vorbehalt.",
    "Der übliche Ausweg ist die Dotation in zwei Schritten: Die Stiftung wird zunächst mit einem kleineren, unproblematischen Vermögen errichtet; das Unternehmen folgt später als Zustiftung.",
    "Der Preis dafür ist erheblich: Das Steuerklassenprivileg gilt nur für die Erstausstattung, nicht für Zustiftungen. Die Zustiftung fällt in Steuerklasse III.",
    "Die zweite Variante lässt die Erstausstattung gross, teilt das gewidmete Vermögen aber in Grundstockvermögen und sonstiges Vermögen. Die Lebensfähigkeitsprognose der Behörde muss sich dann nur auf den Grundstock beziehen.",
    "Eine dritte Überlegung ist die Errichtung einer zweiten, organgleichen Stiftung: Sie nimmt das nachfolgende Vermögen als eigene Erstausstattung auf — mit Steuerklassenprivileg.",
    "Ob eine bereits im Stiftungsgeschäft verbindlich zugesagte weitere Übertragung noch als Erstausstattung zählt, ist umstritten. Wer darauf baut, sollte das Risiko kennen.",
  ],
  alternativen: [
    { form: "Zweistufige Dotation", wannBesser: "die steuerliche Beurteilung des Unternehmens unsicher ist", warum: "Die Stiftung existiert schon, das Risiko bleibt beim Stifter — um den Preis der Steuerklasse für die Zustiftung." },
    { form: "Aufteilung in Grundstock und sonstiges Vermögen", wannBesser: "die Behörde vor allem die dauernde Leistungsfähigkeit prüfen will", warum: "Die Prognose bezieht sich nur auf den Grundstock; das übrige Vermögen ist dadurch beweglicher." },
    { form: "Zweite Stiftung mit gleichen Organen", wannBesser: "später erhebliches Vermögen nachfolgen soll", warum: "Jede Erstausstattung trägt ihr eigenes Steuerklassenprivileg — zwei Stiftungen, zweimal Klasse I." },
  ],
  fehler: [
    { fehler: "Das Stiftungsgeschäft enthält ein Rückforderungsrecht für den Fall, dass die Verschonung versagt wird.", richtig: "Die Aufsicht wird das nicht anerkennen. Die Absicherung muss über die Struktur laufen, nicht über eine Bedingung." },
    { fehler: "Das Unternehmen wird nachträglich zugestiftet, ohne die Steuerklasse zu prüfen.", richtig: "Zustiftungen fallen in Klasse III — bei grossem Vermögen ist das der teuerste Satz. Vorher prüfen, ob eine zweite Stiftung günstiger ist.", norm: "§ 15 Abs. 2 S. 1 ErbStG" },
  ],
  merksatz: "Was bei jeder Schenkung selbstverständlich ist — ein Rückweg für den Fall der Fälle — gibt es bei der Stiftung nicht. Dafür gibt es Struktur.",
  gewicht: { mandat: 3, reichweite: 2 },
  antwortfreigabe: "keine",
  stand: "2026-09-18",
  quellen: ["Q10 Abschn. F.2f"],
  verwandt: ["zustiftung-steuerklasse", "steuerklassenprivileg", "rueckforderungsrechte", "betriebsvermoegen-verschonung"],
};
