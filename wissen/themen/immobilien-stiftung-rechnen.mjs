/* Q5 · Steuerliche Motive, Praxisbeispiele I und II */
export default {
  id: "immobilien-stiftung-rechnen",
  titel: "Immobilien auf die Stiftung? Meistens teurer — ausser sie sind ein Wohnungsunternehmen",
  bereich: "erbst",
  kurz: "Privates Immobilienvermögen auf eine Familienstiftung zu übertragen kostet regelmässig mehr Erbschaftsteuer als die Übertragung auf Kinder und Enkel — es sei denn, das Vermögen ist begünstigt und die Kinder sind zu reich für den Erlass.",
  normen: ["§ 15 Abs. 2 S. 1 ErbStG", "§ 16 ErbStG", "§ 13d ErbStG", "§ 10 Abs. 6 ErbStG", "§ 13b Abs. 4 Nr. 1 Buchst. d ErbStG", "§ 28a ErbStG", "§ 3 Nr. 2 GrEStG"],
  kern: [
    "Bei der Übertragung auf Kinder und Enkel stehen viele Freibeträge zur Verfügung — je 400.000 und 200.000 Euro —, die Steuersätze sind niedriger, und der Vorgang lässt sich über Zehnjahreszeiträume strecken.",
    "Die Stiftung hat einen Freibetrag, nach dem entferntest Berechtigten — bei Enkeln in der Satzung 100.000 Euro —, und der Steuersatz richtet sich nach dem ganzen Erwerb auf einmal.",
    "Bei belasteten Immobilien kommt hinzu: Soweit die Stiftung Schulden übernimmt, ist der Vorgang entgeltlich und die Grunderwerbsteuer nicht befreit; bei der Einbringung in eine Familien-KG fällt sie in der Regel nicht an.",
    "Anders bei begünstigtem Vermögen — etwa einem Wohnungsunternehmen: Dann greifen Verschonung und oberhalb von 26 Millionen die Bedarfsprüfung, und die Stiftung ist als vermögensloser Erwerber im Vorteil gegenüber Kindern, die eigenes Vermögen haben.",
    "Aus steuerlichen Gründen allein ist die Stiftung bei Privatvermögen nur im Ausnahmefall sinnvoll; sie lohnt sich für die aussersteuerlichen Ziele — Bindung, Schutz, Ordnung.",
  ],
  mythos: {
    behauptung: "Immobilien in die Stiftung, dann ist die Erbschaftsteuer erledigt.",
    richtigstellung: "Bei privatem Immobilienvermögen ist die Stiftung meist der teurere Weg: ein kleiner Freibetrag statt vieler, ein hoher Satz auf alles, dazu Grunderwerbsteuer bei übernommenen Schulden. Die Stiftung gewinnt bei Immobilien nur, wenn sie als Wohnungsunternehmen begünstigt sind — oder wenn es um etwas anderes als Steuern geht.",
  },
  beispiele: [
    { konstellation: "Ein Eigentümer, 60, hält vermietete Immobilien im Wert von rund 70 Millionen Euro, seit über zehn Jahren im Bestand, mit 30 Millionen Darlehen. Drei Kinder, drei Enkel.", gestaltung: "Variante Stiftung: Freibetrag 100.000 Euro, Steuersatz 30 Prozent, mit Wohnimmobilienabschlag und anteiliger Schuldenkürzung rund 10,8 Millionen Erbschaftsteuer, dazu etwa 2 Millionen Grunderwerbsteuer für den entgeltlichen Teil. Variante Familien-KG mit Kindern und Enkeln: Freibeträge 1,8 Millionen, 19 Prozent, rund 6,5 Millionen, streckbar über Zehnjahreszeiträume, keine Grunderwerbsteuer.", pointe: "Über sechs Millionen Unterschied — zulasten der Stiftung. Wer sie trotzdem wählt, wählt sie wegen der Bindung, nicht wegen der Steuer." },
    { konstellation: "Derselbe Eigentümer, aber die Immobilien qualifizieren als Wohnungsunternehmen und die drei Kinder sind selbst bereits vermögend.", gestaltung: "Steuerklasse III und 100.000 Euro Freibetrag bleiben — aber die Verschonung greift, und oberhalb von 26 Millionen die Bedarfsprüfung: Die neue Stiftung hat kein verfügbares Vermögen, die Kinder schon. Grunderwerbsteuer bei unentgeltlicher Übertragung null.", pointe: "Hier dreht sich das Bild: Die Stiftung als vermögensloser Erwerber besteht die Prüfung, die die Kinder nicht bestehen würden." },
  ],
  fehler: [
    { fehler: "Die Grunderwerbsteuer wird mit Hinweis auf die Schenkung abgehakt.", richtig: "Befreit ist nur der unentgeltliche Teil. Übernimmt die Stiftung Darlehen, ist insoweit Grunderwerbsteuer fällig — bei 30 Millionen Schulden ein siebenstelliger Betrag.", norm: "§ 3 Nr. 2 GrEStG" },
  ],
  merksatz: "Bei Immobilien entscheidet nicht die Stiftung über die Steuer, sondern die Frage, ob das Vermögen begünstigt ist und wer sonst erben würde.",
  gewicht: { mandat: 3, reichweite: 3 },
  antwortfreigabe: "abstrakt",
  stand: "2026-09-12",
  quellen: ["Q5 Folien 40–42"],
  verwandt: ["steuerklassenprivileg", "grosserwerb-verschonungsbedarf", "familienpool", "stiftung-warum", "immobilien-nachfolge-struktur"],
};
