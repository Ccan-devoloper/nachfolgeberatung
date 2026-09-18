/* Q5 Teil 5 · Rolle des Stifters, Stifterrechte */
export default {
  id: "liechtenstein-stifterrechte",
  titel: "Widerruf und Änderungsvorbehalt — was sie in Liechtenstein kosten",
  bereich: "liechtenstein",
  kurz: "Liechtenstein erlaubt dem Stifter, sich Widerruf und Satzungsänderung vorzubehalten. Zivilrechtlich ist das zulässig — steuerlich und beim Pflichtteil führt es dazu, dass das Vermögen behandelt wird, als sei es nie übertragen worden.",
  normen: ["Art. 552 § 30 PGR", "§ 4 PGR", "§ 39 AO", "§ 2325 Abs. 3 BGB", "§ 15 Abs. 6 AStG"],
  kern: [
    "Das deutsche Recht kennt nach der Anerkennung praktisch keinen Widerruf; das liechtensteinische lässt zu, dass der Stifter sich Widerruf und Änderung der Statuten in der Stiftungsurkunde vorbehält.",
    "Das ist der meistgenannte Vorzug des Standorts — und zugleich die Stelle, an der die meisten Strukturen scheitern.",
    "Behält der Stifter den Widerruf, ist das Vermögen ihm nicht endgültig entzogen. Steuerlich bleibt es ihm zugerechnet: die Stiftung ist transparent, als gäbe es sie nicht.",
    "Die Kehrseite, die selten mitgedacht wird: Ist nichts übergegangen, liegt bei der Errichtung auch keine Schenkung vor — es fällt keine Schenkungsteuer an, aber es ist eben auch nichts geschützt.",
    "Beim Pflichtteil beginnt die Abschmelzungsfrist erst zu laufen, wenn der Zuwendende den Gegenstand wirtschaftlich aus der Hand gegeben hat. Ein Widerrufsvorbehalt verhindert genau das — die Frist läuft womöglich nie an.",
    "Dasselbe gilt für die Gläubigeranfechtung: Was zurückgeholt werden kann, ist dem Zugriff nicht entzogen.",
    "Und für die Zurechnungsbesteuerung: Wer widerrufen kann, kann die Herausgabe des Vermögens bewirken — der Entlastungsbeweis ist damit ausgeschlossen.",
    "Ein Änderungsvorbehalt, der sich auf die Verteilung unter den Begünstigten beschränkt und den Kreis nicht verlassen kann, ist weniger scharf als ein Widerruf. Sicher ist er trotzdem nicht.",
  ],
  mythos: {
    behauptung: "In Liechtenstein kann ich mir den Widerruf vorbehalten — dann bin ich flexibel und habe trotzdem eine Stiftung.",
    richtigstellung: "Flexibel ja, Stiftung nein. Mit einem Widerrufsvorbehalt behandelt das deutsche Steuerrecht das Vermögen weiter als Ihres, die Pflichtteilsfrist beginnt nicht zu laufen, und Gläubiger können zugreifen. Sie haben die Kosten einer Stiftung und keine ihrer Wirkungen.",
  },
  vorteile: [
    { vorteil: "Korrekturmöglichkeit über Jahrzehnte", erklaerung: "Familienverhältnisse ändern sich. Ein Änderungsvorbehalt erlaubt es, auf Scheidungen, Zerwürfnisse und neue Generationen zu reagieren, ohne ein Gericht zu bemühen." },
  ],
  nachteile: [
    { nachteil: "Kein Vermögensschutz", erklaerung: "Was widerrufen werden kann, ist weder vor Pflichtteilsberechtigten noch vor Gläubigern sicher.", norm: "§ 2325 Abs. 3 BGB" },
    { nachteil: "Steuerliche Transparenz", erklaerung: "Das Vermögen bleibt dem Stifter zugerechnet — alle laufenden Erträge werden bei ihm versteuert.", norm: "§ 39 AO" },
  ],
  fehler: [
    { fehler: "Der Widerrufsvorbehalt steht in einem Reglement, nicht in den Statuten — 'dann sieht es ja niemand'.", richtig: "Die Finanzverwaltung fragt nach der gesamten Dokumentenlage, nicht nur nach den Statuten. Verdeckte Vorbehalte sind nicht weniger schädlich, sondern zusätzlich erklärungsbedürftig." },
    { fehler: "Der Vorbehalt wird aufgenommen, weil er jederzeit gestrichen werden kann.", richtig: "Die Streichung wirkt erst ab diesem Zeitpunkt — Fristen beginnen dann neu zu laufen. Die Jahre davor sind verloren." },
  ],
  merksatz: "Ein Widerrufsvorbehalt macht aus einer Stiftung ein Depot mit Satzung — er kostet genau das, wofür man die Stiftung errichtet hat.",
  gewicht: { mandat: 3, reichweite: 3 },
  antwortfreigabe: "abstrakt",
  stand: "2026-09-18",
  quellen: ["Q5 Teil 5 Abschn. 2a", "Q4 Abschn. IV.2"],
  verwandt: ["auslandsstiftung-transparenz", "liechtenstein-zurechnung", "pflichtteil-stiftung", "glaeubiger-anfechtung"],
};
