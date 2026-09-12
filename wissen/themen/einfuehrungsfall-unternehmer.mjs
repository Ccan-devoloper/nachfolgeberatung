/* Q5 · Einführungsfall mit Lösung (Zivil- und Steuerrecht) */
export default {
  id: "einfuehrungsfall-unternehmer",
  titel: "Der Unternehmer mit zwei Kindern, von denen keines übernimmt — Schenkung, Erbschaft oder Stiftung?",
  bereich: "nachfolge",
  kurz: "Ein 58-jähriger Alleininhaber eines Familienunternehmens, ein Kind ungeeignet, eines im Ausland und nicht interessiert — an diesem Fall zeigt sich, warum Schenkung und Testament die Ziele nur begrenzt erreichen und die Stiftung alle fünf.",
  normen: ["§ 17 Abs. 2 S. 5 EStG", "§ 28a ErbStG", "§ 6 AStG", "§ 2303 BGB", "§ 2210 BGB", "§ 8b KStG"],
  kern: [
    "Die typischen Ziele eines Unternehmers in der Nachfolge: eigene Absicherung und die der Familie, aber kein ungehinderter Zugriff der Kinder; dauerhafter Erhalt des Unternehmens; Familieneinfluss ohne Verkauf an Fremde; keine schädlichen Liquiditätsabflüsse durch Pflichtteil oder Steuer; weltweite Mobilität für sich und die Kinder.",
    "Schenkung an ein Kind: Das andere muss faktisch ausbezahlt werden, es gibt keine langfristige Bindung, der Nachfolger kann verfügen, ein Wegzug des Beschenkten löst Wegzugsteuer aus — und der Erlass für Grosserwerbe scheitert, wenn das Kind eigenes Vermögen hat.",
    "Erbschaft oder Vermächtnis: Pflichtteil des nicht bedachten Kindes, Bindung höchstens 30 Jahre über Testamentsvollstreckung, Wegzugsteuer, und die Vermögenszusammensetzung für die Verschonung ist am Todestag kaum planbar.",
    "Familienstiftung: Zweck Versorgung der Familie, Begünstigte der Stifter und seine Abkömmlinge, der Stifter als Vorstand mit Mehrfachstimmrecht, das geeignete Kind über ein satzungsmässiges Sonderrecht als Geschäftsführer einführbar.",
    "Steuerlich: keine Aufdeckung stiller Reserven bei Einbringung der Beteiligung, Erlass der Schenkungsteuer über die Verschonungsbedarfsprüfung — die Stiftung hat kein verfügbares Vermögen, das vermögende Kind schon —, Dividenden mit effektiv 0,75 Prozent, Wegzug von Stifter und Kindern ohne Wegzugsteuer.",
    "Ein Kind im Ausland ist als Begünstigter beschränkt steuerpflichtig; ob das Abkommen die Leistung als Dividende mit Quellensteuer oder als sonstige Einkünfte nur im Wohnsitzstaat behandelt, ist offen — die wohl herrschende Meinung sagt Letzteres.",
  ],
  beispiele: [
    { konstellation: "Ein lediger Unternehmer, 58, hält alle Anteile an einer produzierenden GmbH mit mehreren hundert Mitarbeitern, Wert im hohen zweistelligen Millionenbereich, Anschaffungskosten ein Bruchteil davon. Daneben vermietete Immobilien und Wertpapiere, ein Haus in Deutschland, ein Ferienhaus im Ausland. Ein eingearbeiteter Fremdgeschäftsführer ist da. Zwei Kinder: eines Künstler, als Unternehmer ungeeignet; eines Betriebswirtin bei einem Fonds im Ausland, geeignet, aber derzeit nicht interessiert und selbst schon vermögend.", gestaltung: "Die GmbH-Anteile gehen auf eine Familienstiftung. Der Stifter bleibt Vorstand mit Mehrfachstimmrecht und übt die Gesellschafterrechte aus; die Satzung gibt geeigneten Familienmitgliedern ein Sonderrecht auf die Geschäftsführung, das die Tochter später nutzen kann. Beide Kinder sind Begünstigte. Die Satzung regelt, ob und wann verkauft werden darf.", pointe: "Das liquide Vermögen hätte nie gereicht, das eine Kind bei Übertragung auf das andere abzufinden. Die Stiftung braucht keine Abfindung — sie braucht nur eine Satzung." },
  ],
  gegenueberstellung: {
    links: {
      label: "Schenkung oder Erbschaft",
      punkte: [
        { krit: "Absicherung ohne ungehinderten Zugriff", wert: "Begrenzt möglich — der Zugriff lässt sich schwer beschränken" },
        { krit: "Dauerhafter Erhalt des Unternehmens", wert: "Begrenzt — der Nachfolger kann verkaufen oder scheitern" },
        { krit: "Familieneinfluss ohne Verkauf", wert: "Begrenzt — Stamm oder Zersplitterung" },
        { krit: "Erlass bei Grosserwerb", wert: "Nur, wenn der Erwerber kein verfügbares Vermögen hat", norm: "§ 28a ErbStG" },
        { krit: "Wegzug der Kinder", wert: "Wegzugsteuer greift", norm: "§ 6 AStG" },
      ],
    },
    rechts: {
      label: "Familienstiftung",
      punkte: [
        { krit: "Absicherung ohne ungehinderten Zugriff", wert: "Möglich — Leistungen nach Satzung, im Ermessen der Organe" },
        { krit: "Dauerhafter Erhalt des Unternehmens", wert: "Möglich — die Stiftung verkauft nur, wenn die Satzung es erlaubt" },
        { krit: "Familieneinfluss ohne Verkauf", wert: "Möglich — über Organe und Sonderrechte" },
        { krit: "Erlass bei Grosserwerb", wert: "Möglich — die neue Stiftung hat kein verfügbares Vermögen; auch bei der Erbersatzsteuer", norm: "§ 28a Abs. 7 ErbStG" },
        { krit: "Wegzug der Kinder", wert: "Keine Wegzugsteuer — die Stiftung bleibt im Inland" },
      ],
    },
  },
  merksatz: "Schenkung und Testament verteilen Vermögen. Die Stiftung verteilt Rollen — und lässt das Vermögen, wo es hingehört.",
  gewicht: { mandat: 3, reichweite: 3 },
  antwortfreigabe: "abstrakt",
  stand: "2026-09-12",
  quellen: ["Q5 Folien 7–10, 90–92, 141–143"],
  verwandt: ["stiftung-warum", "unternehmensnachfolge-stiftung", "grosserwerb-verschonungsbedarf", "wegzugsteuer-stiftung", "ersatzformen-ueberblick"],
};
