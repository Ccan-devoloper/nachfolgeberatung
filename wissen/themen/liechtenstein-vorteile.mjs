/* Q1 · Einführung (Gründe für FL); Q4 · Ausgangslage; Q3 · Ausländische Stiftungen */
export default {
  id: "liechtenstein-vorteile",
  titel: "Deutschland oder Liechtenstein — die ehrliche Abwägung",
  bereich: "liechtenstein",
  kurz: "Die Liechtensteiner Stiftung ist schneller, billiger, aufsichtsfrei und kennt keine Erbersatzsteuer — dafür Steuerklasse III bei Errichtung, die Zurechnungsbesteuerung und ein Rechtsgebiet in Bewegung.",
  normen: ["Art. 552 § 13, § 14 PGR", "§ 15 Abs. 2 S. 1 ErbStG", "§ 1 Abs. 1 Nr. 4 ErbStG", "§ 15 AStG"],
  kern: [
    "Errichtung in Liechtenstein: Mindestkapital 30.000 Franken, Euro oder Dollar; Rechtsfähigkeit mit der Stiftungserklärung — keine Anerkennung, wenige Tage.",
    "Privatnützige Stiftungen unterliegen in Liechtenstein keiner obligatorischen Aufsicht; in Deutschland ist die Anerkennung je nach Bundesland langwierig, mit hohen Anforderungen an Satzung und Grundstock.",
    "Die deutsche Erbersatzsteuer trifft nur Stiftungen mit Sitz oder Geschäftsleitung im Inland — die Liechtensteiner Stiftung nicht.",
    "Dafür gilt bei Errichtung Steuerklasse III: Das Privileg ist auf inländische Stiftungen beschränkt. Der EuGH hat die Beschränkung 2025 im Grundsatz als kohärent gebilligt, weil Auslandsstiftungen im Gegenzug keine Erbersatzsteuer trifft — die Verhältnismässigkeit im engeren Sinne prüft das vorlegende Gericht allerdings noch.",
    "Und die Zurechnungsbesteuerung: Ohne Entlastungsbeweis werden die Einkünfte dem Stifter zugerechnet, als gäbe es die Stiftung nicht.",
    "Eine ausländische Struktur trägt nur bei echtem grenzüberschreitendem Sachverhalt — die blosse Erwartung, deutsche Steuerfolgen zu vermeiden, ist kein tragfähiges Motiv.",
    "In Liechtenstein wird die Stiftung meist über einen Treuhänder als hinterlegte Stiftung errichtet — der Treuhänder ist Pflicht; Organe sind Stiftungsrat und oft ein Protektor. Unternehmensträgerstiftung und Komplementärstellung sind dort unzulässig, Beteiligungsträgerstiftungen erlaubt.",
    "Liechtensteinische Ertragsteuer: 12,5 Prozent auf eine schmale Bemessungsgrundlage — Dividenden und Veräusserungsgewinne bleiben aussen vor —, dazu ein fiktiver Eigenkapitalzinsabzug von 4 Prozent. Das gilt für dort erzielte Einkünfte; deutsche Einkünfte werden wie bei einer deutschen Stiftung erfasst.",
    "Österreich als Gegenbeispiel: 1993 in einem günstigen Umfeld eingeführt, seither stetig verschlechtert — der Mausefalleneffekt, den eine auf Ewigkeit angelegte Struktur fürchten muss.",
    "Wer die Geschäftsleitung faktisch aus Deutschland führt, holt die Stiftung steuerlich nach Deutschland — und die Stiftungsbehörde könnte eine deutsche Stiftung bei Sitzverlegung ins Ausland sogar aufheben.",
  ],
  gegenueberstellung: {
    links: {
      label: "Deutschland",
      punkte: [
        { krit: "Errichtung", wert: "Anerkennung durch die Stiftungsbehörde, oft Monate", norm: "§§ 80 ff. BGB" },
        { krit: "Mindestvermögen", wert: "Kein gesetzliches — praktisch deutlich über 100.000 €" },
        { krit: "Aufsicht", wert: "Laufende Rechtsaufsicht des Landes" },
        { krit: "Schenkungsteuer bei Errichtung", wert: "Steuerklasse nach dem entferntest Berechtigten", norm: "§ 15 Abs. 2 S. 1 ErbStG" },
        { krit: "Erbersatzsteuer", wert: "Alle 30 Jahre", norm: "§ 1 Abs. 1 Nr. 4 ErbStG" },
        { krit: "Laufende Besteuerung", wert: "Körperschaftsteuer bei der Stiftung", norm: "§ 1 Abs. 1 Nr. 4 KStG" },
      ],
    },
    rechts: {
      label: "Liechtenstein",
      punkte: [
        { krit: "Errichtung", wert: "Rechtsfähig mit der Stiftungserklärung, wenige Tage", norm: "Art. 552 § 14 PGR" },
        { krit: "Mindestvermögen", wert: "30.000 CHF / EUR / USD", norm: "Art. 552 § 13 PGR" },
        { krit: "Aufsicht", wert: "Keine bei privatnütziger Stiftung" },
        { krit: "Schenkungsteuer bei Errichtung", wert: "Steuerklasse III — das Privileg gilt nur im Inland", norm: "§ 15 Abs. 1 ErbStG" },
        { krit: "Erbersatzsteuer", wert: "Keine" },
        { krit: "Laufende Besteuerung", wert: "Zurechnung beim Stifter, solange der Entlastungsbeweis fehlt", norm: "§ 15 Abs. 1, 6 AStG" },
      ],
    },
  },
  fehler: [
    { fehler: "Der Stifter behält sich Widerrufsrecht und Satzungsänderungsrecht vor — 'das geht in Liechtenstein ja'.", richtig: "Zivilrechtlich ja, aber dann ist das Vermögen nicht entzogen: Anfechtungs- und Pflichtteilsfristen laufen womöglich gar nicht erst, die Zurechnungsbesteuerung greift, und die Stiftung ist steuerlich transparent — eine zweite Brieftasche, keine Stiftung." },
    { fehler: "Die Stiftung wird als Privatvermögensstruktur mit 1.800 Franken Mindeststeuer aufgesetzt, weil das billiger ist.", richtig: "Eine PVS gilt für das Abkommen mit Deutschland nicht als in Liechtenstein ansässig — der Abkommensschutz ist weg. Bei deutschen Dividenden droht ohnehin, dass die Quellensteuer wegen der Missbrauchsregel nicht erstattet wird; Beteiligungen über eine gewerbliche Personengesellschaft zu halten kann das lösen.", norm: "§ 50d Abs. 3 EStG" },
    { fehler: "Kapitalgesellschaftsanteile werden unentgeltlich auf die Liechtensteiner Stiftung übertragen.", richtig: "Das ist eine Übertragung an eine nicht unbeschränkt steuerpflichtige Person — Wegzugsteuer. Auswege: Verkauf mit Earn-out, Einbringung in eine gewerbliche Personengesellschaft, oder die Anteile bleiben in Deutschland.", norm: "§ 6 AStG" },
  ],
  einsatzfelder: [
    { situation: "Die Familie lebt teils in Deutschland, teils in der Schweiz und Österreich; Vermögen liegt in mehreren Ländern.", warum: "Echter Auslandsbezug — die Liechtensteiner Stiftung ist hier keine Umgehung, sondern die naheliegende Struktur." },
    { situation: "Ein deutscher Unternehmer ohne Auslandsbezug will 'die Erbersatzsteuer sparen'.", warum: "Das ist der Fall, in dem Liechtenstein regelmässig nicht trägt: Klasse III bei Errichtung, Zurechnungsbesteuerung, kein aussersteuerlicher Grund. Die deutsche Stiftung ist dann die ehrlichere Wahl." },
  ],
  zahlen: [
    { wert: "30.000", bedeutung: "Franken, Euro oder Dollar — Mindestkapital einer Liechtensteiner Stiftung.", norm: "Art. 552 § 13 PGR" },
    { wert: "1 Woche", bedeutung: "Errichtungsdauer in Liechtenstein. In Deutschland: in der Regel mindestens drei Monate, oft länger." },
    { wert: "12,5 %", bedeutung: "Liechtensteinische Ertragsteuer — auf eine Bemessungsgrundlage ohne Dividenden und Veräusserungsgewinne." },
  ],
  merksatz: "Liechtenstein ist keine Flucht vor dem deutschen Steuerrecht — es ist eine Wahl für Familien, deren Leben nicht an der Grenze endet.",
  gewicht: { mandat: 3, reichweite: 3 },
  antwortfreigabe: "keine",
  stand: "2026-09-12",
  quellen: ["Q1 Abschn. 1 und Fn. 9", "Q4 Abschn. I, IV.2", "Q3 Ausländische Stiftungen und Trusts", "Q2 Grenzüberschreitende Einordnung"],
  verwandt: ["liechtenstein-zurechnung", "astg-reform-motivtest", "erbersatzsteuer", "steuerklassenprivileg"],
};
