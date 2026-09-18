/* Q5 Teil 5 · Stiftungsstandort Liechtenstein, Stiftungsrecht; Q4 Fn. 1 */
export default {
  id: "liechtenstein-errichtung",
  titel: "In einer Woche errichtet — wie eine liechtensteinische Stiftung entsteht",
  bereich: "liechtenstein",
  kurz: "Keine Behörde erkennt sie an: Die liechtensteinische Stiftung ist mit der Stiftungserklärung rechtsfähig, braucht 30.000 an Kapital und wird meist nicht vom Stifter selbst, sondern von einem Treuhänder errichtet.",
  normen: ["Art. 552 § 13 PGR", "Art. 552 § 14 PGR", "Art. 552 § 16 PGR", "§ 4 PGR", "§§ 80 ff. BGB"],
  kern: [
    "Das liechtensteinische Stiftungsrecht steht in einem einzigen Artikel des Personen- und Gesellschaftsrechts, Art. 552 PGR, dort in rund vier Dutzend Paragrafen. Es stammt aus dem Jahr 1926 und wurde 2009 behutsam reformiert — im Kern wurde geschriebenes Recht aus dem, was ohnehin galt.",
    "Der Stiftungsbegriff entspricht der deutschen Anschauung: eine rechtlich verselbstständigte Vermögensmasse mit Zweck, Vermögen und Organisation. Der Unterschied liegt nicht im Begriff, sondern im Weg dorthin.",
    "Rechtsfähig wird die Stiftung mit der Stiftungserklärung — nicht mit einem Anerkennungsbescheid. Nur gemeinnützige Stiftungen und solche, die ein kaufmännisches Gewerbe betreiben, müssen vorher ins Handelsregister.",
    "Mindestkapital sind 30.000 Franken, Euro oder Dollar. Eine Pflicht, dieses Kapital dauerhaft zu erhalten, kennt das Gesetz nicht — anders als der deutsche Grundstock.",
    "Errichtet wird fast immer indirekt: Ein Treuhänder handelt als indirekter Stellvertreter, die Stiftung heisst dann hinterlegte Stiftung. Die unmittelbare Errichtung durch den Stifter ist die Ausnahme.",
    "Wer als Stifter gilt, entscheidet sich nicht nach der Urkunde, sondern nach der wirtschaftlichen Betrachtung: Stifter ist, wer das Vermögen aufbringt — nicht der Treuhänder, der unterschreibt.",
    "Drei Dokumentenebenen statt einer Satzung: Statuten mit den Grundentscheidungen, Beistatuten mit den Begünstigten, Reglemente für die Einzelheiten. Nur die Statuten sind nach aussen sichtbar.",
    "Unternehmensbeteiligungen darf die Stiftung halten. Selbst ein Unternehmen betreiben oder persönlich haftender Gesellschafter einer Personengesellschaft sein darf sie nicht.",
  ],
  gegenueberstellung: {
    links: {
      label: "Deutsche Stiftung",
      punkte: [
        { krit: "Entstehung", wert: "Anerkennung durch die Stiftungsbehörde", norm: "§ 80 Abs. 1 BGB" },
        { krit: "Dauer", wert: "Regelmässig Monate" },
        { krit: "Mindestvermögen", wert: "Gesetzlich keines, praktisch ein sechsstelliger Betrag" },
        { krit: "Satzung", wert: "Ein Dokument, der Behörde vorgelegt" },
      ],
    },
    rechts: {
      label: "Liechtensteinische Stiftung",
      punkte: [
        { krit: "Entstehung", wert: "Rechtsfähig mit der Stiftungserklärung", norm: "Art. 552 § 14 PGR" },
        { krit: "Dauer", wert: "Tage" },
        { krit: "Mindestvermögen", wert: "30.000 CHF, EUR oder USD, ohne Erhaltungspflicht", norm: "Art. 552 § 13 PGR" },
        { krit: "Satzung", wert: "Statuten, Beistatuten, Reglemente — gestuft" },
      ],
    },
  },
  ablauf: [
    { schritt: "Motivlage klären", hinweis: "Warum Liechtenstein und nicht Deutschland? Ohne einen Grund, der auch ohne Steuern trägt, ist die Struktur angreifbar." },
    { schritt: "Treuhänder und Stiftungsrat auswählen", hinweis: "Sie führen die Stiftung. Wer hier nur Erfüllungsgehilfen sucht, verliert später den Entlastungsbeweis." },
    { schritt: "Statuten und Beistatuten entwerfen", hinweis: "Zweck und Organisation in die Statuten, der Begünstigtenkreis in die Beistatuten." },
    { schritt: "Stiftungserklärung und Kapitalausstattung", hinweis: "Mit der Erklärung ist die Stiftung da; die 30.000 sind der Einstieg, nicht die Ausstattung." },
    { schritt: "Vermögen übertragen", hinweis: "Der teure Schritt — hier entscheiden deutsche Erbschaft- und Wegzugsteuer, nicht liechtensteinisches Recht." },
  ],
  zahlen: [
    { wert: "30.000", bedeutung: "Mindestkapital in Franken, Euro oder Dollar — ohne Pflicht, es zu erhalten.", norm: "Art. 552 § 13 PGR" },
    { wert: "1926", bedeutung: "Aus diesem Jahr stammt das liechtensteinische Stiftungsrecht; die Reform von 2009 hat es vor allem verschriftlicht." },
  ],
  merksatz: "Die Errichtung in Liechtenstein ist die einfachste Übung — teuer und schwierig wird erst der Weg des Vermögens dorthin.",
  gewicht: { mandat: 3, reichweite: 3 },
  antwortfreigabe: "abstrakt",
  stand: "2026-09-18",
  quellen: ["Q5 Teil 5 Abschn. 2a", "Q4 Abschn. I Fn. 1"],
  verwandt: ["liechtenstein-vorteile", "liechtenstein-organe", "liechtenstein-stifterrechte", "auslandsstiftung-huerden"],
};
