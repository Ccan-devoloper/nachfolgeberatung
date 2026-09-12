/* Q9 · Kap. 5.1, 5.2, 5.5 */
export default {
  id: "anlagerichtlinie-stiftung",
  titel: "Die Anlagerichtlinie — ein Korridor, keine Produktliste",
  bereich: "stiftungsrecht",
  kurz: "Stiftungsvermögen wird treuhänderisch verwaltet: Nicht die Rendite entscheidet über die Haftung des Vorstands, sondern ob er auf angemessener Informationsgrundlage innerhalb eines dokumentierten Rahmens entschieden hat.",
  normen: ["§ 83c BGB", "§ 84a Abs. 2 BGB", "§ 83b BGB"],
  kern: [
    "Das Grundstockvermögen ist ungeschmälert zu erhalten, der Zweck grundsätzlich aus seinen Nutzungen zu erfüllen; Umschichtungsgewinne dürfen verwendet werden, soweit die Satzung das nicht ausschließt und die Erhaltung gewahrt bleibt.",
    "„Ungeschmälert erhalten\" heißt nicht „risikolos\" und nicht „nur nominal\": Satzung, Zweck, Zeithorizont, reale Werterhaltung, Ertragsbedarf und Liquidität müssen zusammengebracht werden.",
    "Für Organmitglieder gilt die stiftungsrechtliche Business Judgment Rule: Keine Pflichtverletzung, wer unter Beachtung von Gesetz und Satzung auf angemessener Informationsgrundlage vernünftigerweise zum Wohl der Stiftung handeln durfte. Beurteilt wird vorher, nicht im Rückblick.",
    "Eine gute Anlagerichtlinie definiert deshalb den Entscheidungskorridor statt einzelner Produkte: Ziele, Risikobudget, Liquidität, Bandbreiten je Anlageklasse, Grenzen für Illiquides und Konzentration, Zuständigkeiten, Dokumentation.",
    "Vor jedem größeren Beschluss steht ein kurzes Investment-Memo: Entscheidung und Volumen, Satzungskonformität, Informationsgrundlage, Rendite- und Risikoszenario, Liquiditätswirkung einschließlich Steuerterminen, Alternativen, Interessenkonflikte, Beschluss und Überprüfungstermin.",
  ],
  einsatzfelder: [
    { situation: "Eine neu errichtete Familienstiftung soll ein Wertpapierdepot aufbauen.", warum: "Ohne Richtlinie entscheidet faktisch die Bank — und der Vorstand haftet für eine Entscheidung, die er nicht dokumentiert getroffen hat." },
    { situation: "Der Vorstand will in Private Equity investieren.", warum: "Kapitalbindung über zehn Jahre trifft auf Ausschüttungsbedarf und Steuertermine — das gehört in die Richtlinie, bevor gezeichnet wird." },
  ],
  ablauf: [
    { schritt: "Ziele festlegen", hinweis: "Realer Vermögenserhalt, Zweckfinanzierung, langfristig tragbare Ausschüttungsquote." },
    { schritt: "Risikobudget bestimmen", hinweis: "Welcher Wertrückgang ist finanziell und in der Familie tragbar — nicht nur rechnerisch, sondern im Gespräch mit den Organen." },
    { schritt: "Liquiditätsleiter bauen", hinweis: "Laufende Zwecke, Destinatärleistungen, Steuertermine — wie viele Jahre Cashflow werden liquide gehalten?" },
    { schritt: "Bandbreiten und Rebalancing regeln", hinweis: "Pro Anlageklasse eine Spanne und eine Schwelle, ab der umgeschichtet wird." },
    { schritt: "Zuständigkeiten trennen", hinweis: "Wer entscheidet strategisch, wer taktisch, wer berichtet an wen und in welchem Rhythmus?" },
    { schritt: "Dokumentation festschreiben", hinweis: "Was muss vor jedem Beschluss schriftlich vorliegen — das ist der Haftungsschutz.", norm: "§ 84a Abs. 2 BGB" },
  ],
  fehler: [
    { fehler: "Die Richtlinie wird als Produktliste geschrieben.", richtig: "Sie altert in zwei Jahren. Der Korridor — Ziele, Bandbreiten, Grenzen, Verfahren — trägt zehn." },
    { fehler: "Der Vermögensverwalter entscheidet faktisch, das Organ zeichnet ab.", richtig: "Die Organverantwortung lässt sich nicht delegieren. Beratung ja, Entscheidung und Dokumentation bleiben beim Vorstand." },
    { fehler: "„Sicher und ertragreich\" steht als Anlageziel in der Satzung.", richtig: "Das dokumentiert keine Risikoentscheidung und hilft im Haftungsfall nicht — es braucht messbare Größen." },
  ],
  merksatz: "Für die Haftung zählt nicht, wie die Anlage gelaufen ist — sondern wie sie entschieden wurde.",
  gewicht: { mandat: 2, reichweite: 1 },
  antwortfreigabe: "abstrakt",
  stand: "2026-09-13",
  quellen: ["Q9 Kap. 5.1, 5.2, 5.5"],
  verwandt: ["grundstock-sonstiges-vermoegen", "stiftung-governance", "konzentrationsrisiko-stiftung", "erbersatzsteuer-liquiditaet"],
};
