/* Q3 · Doppelstiftung; Q2 · Praxishinweis bei hoher Verwaltungsvermögensquote */
export default {
  id: "doppelstiftung",
  titel: "Die Doppelstiftung — Gemeinwohl und Familienkontrolle in einer Struktur",
  bereich: "doppelstiftung",
  kurz: "Eine gemeinnützige und eine Familienstiftung halten gemeinsam das Unternehmen: Die gemeinnützige den grossen Kapitalanteil steuerfrei und ohne Erbersatzsteuer, die Familienstiftung den kleinen — mit den Stimmrechten.",
  normen: ["§ 13 Abs. 1 Nr. 16 Buchst. b ErbStG", "§§ 51, 55 ff. AO", "§ 1 Abs. 1 Nr. 4 ErbStG", "§ 42 AO"],
  kern: [
    "Die Doppelstiftung ist keine Ersatzform, sondern eine Kombination: zwei Stiftungen an derselben Beteiligung, mit funktional aufgeteilten Rechten.",
    "Typisch — nicht zwingend — hält die gemeinnützige Stiftung den grossen Kapitalanteil, die Familienstiftung den kleinen; Stimm- und Gewinnrechte werden im Gesellschaftsvertrag abweichend verteilt.",
    "Die Zuwendung an die gemeinnützige Stiftung ist schenkungsteuerfrei, ihr Vermögen unterliegt nicht der Erbersatzsteuer.",
    "Dem stehen die gemeinnützigkeitsrechtliche Vermögensbindung, Anforderungen an die Vermögensverwaltung und die zeitnahe Mittelverwendung gegenüber — Thesaurierung, Stimmrechte und Rückfallklauseln sind heikel.",
    "Varianten: statt der GmbH mit disquotalen Stimmrechten eine KGaA, deren Komplementärgesellschaft die Familienstiftung hält; stimmrechtslose Vorzugsaktien für die gemeinnützige Stiftung — aber höchstens die Hälfte des Grundkapitals; eine gGmbH statt der gemeinnützigen Stiftung; eine Familiengesellschaft oder natürliche Personen statt der Familienstiftung.",
    "Das beschränkte Stimmrecht der gemeinnützigen Stiftung stellt zugleich sicher, dass ihre Beteiligung Vermögensverwaltung bleibt und kein wirtschaftlicher Geschäftsbetrieb entsteht.",
    "Für die Beteiligungs- oder Zwischenholding ist die GmbH geeigneter als die AG, weil die Satzungsflexibilität grösser ist.",
    "Sie kann auch dort helfen, wo eine hohe Verwaltungsvermögensquote die Verschonung gefährdet.",
    "Je künstlicher die Ebenen nur für einzelne Steuerfolgen auseinandergezogen werden, desto grösser Gemeinnützigkeits- und Missbrauchsrisiko.",
  ],
  einsatzfelder: [
    { situation: "Das Unternehmen hat eine hohe Verwaltungsvermögensquote; die Erbschaftsteuer würde Unternehmen oder Gesellschafter überfordern.", warum: "Der grosse Kapitalanteil geht steuerfrei an die gemeinnützige Stiftung; die Familienstiftung erwirbt nur den kleinen — und die Steuer darauf ist tragbar." },
    { situation: "Der Stifter will eine gemeinnützige Stiftung mitbegünstigen, ohne das Steuerklassenprivileg der Familienstiftung zu verlieren.", warum: "In einer Stiftung kostet der gemeinnützige Mitbegünstigte Klasse III. In zwei Stiftungen kostet er nichts." },
    { situation: "Die Grundversorgung der Familie soll ohne die engen Grenzen des Stifterdrittels gesichert sein.", warum: "Die Familienstiftung versorgt ohne Bedürftigkeitsprüfung und Drittelgrenze; die gemeinnützige Stiftung bleibt sauber gemeinnützig." },
    { situation: "Ein Unternehmer will Gutes tun, das Unternehmen erhalten und der Familie den Einfluss sichern — alles drei.", warum: "Die Doppelstiftung ist die einzige Struktur, die diese drei Ziele in einem Modell trägt: Gemeinwohl über die eine, Kontrolle über die andere Stiftung." },
  ],
  beispiele: [
    { konstellation: "Ein Familienunternehmen wird über eine Holding-GmbH gehalten; der Gründer hat keine Nachfolger im Betrieb, aber eine Familie, die versorgt sein soll, und ein Anliegen, das er fördern will.", gestaltung: "90 Prozent der Kapitalanteile an eine gemeinnützige Stiftung, 10 Prozent an eine Familienstiftung; die Satzung der Holding gibt der Familienstiftung — soweit gesellschafts- und gemeinnützigkeitsrechtlich tragfähig — die stärkeren Stimmrechte.", pointe: "Die Quoten sind keine Blaupause. Gewinnbezug, Thesaurierung und Einfluss der gemeinnützigen Stiftung müssen mit deren Status vereinbar bleiben — sonst kippt die ganze Struktur." },
  ],
  fehler: [
    { fehler: "Die Doppelstiftung wird als 'steueroptimierte Familienstiftung' angelegt — die gemeinnützige Stiftung ist nur Hülle.", richtig: "Dann drohen Verlust der Gemeinnützigkeit und § 42 AO. Die gemeinnützige Stiftung muss echt sein — mit echter Mittelverwendung." },
  ],
  merksatz: "Die Doppelstiftung teilt nicht das Vermögen, sondern die Funktionen: Wert hier, Stimme dort, Gemeinwohl und Familie beide bedient.",
  gewicht: { mandat: 3, reichweite: 2 },
  antwortfreigabe: "keine",
  stand: "2026-09-12",
  quellen: ["Q3 Doppelstiftung", "Q2 Praxishinweis nach Verschonungsbedarfsprüfung"],
  verwandt: ["ersatzformen-ueberblick", "grosserwerb-verschonungsbedarf", "unternehmensnachfolge-stiftung"],
};
