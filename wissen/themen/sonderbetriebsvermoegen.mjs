/* Q7 · Kap. 19.1, 19.2 · Fall 28.5 · Fehler 21 */
export default {
  id: "sonderbetriebsvermoegen",
  titel: "Sonderbetriebsvermögen — der blinde Fleck jeder KG-Nachfolge",
  bereich: "gesellschaftsrecht",
  kurz: "Das Betriebsgrundstück im Privatvermögen des Vaters, das Gesellschafterdarlehen, die Komplementär-GmbH: Wer nur den KG-Anteil verschenkt und dieses Sonderbetriebsvermögen zurücklässt, riskiert Entnahmesteuer und den Verlust der Verschonung.",
  normen: ["§ 6 Abs. 3 EStG", "§ 15 Abs. 1 S. 1 Nr. 2 EStG", "§ 13b Abs. 1 Nr. 2 ErbStG", "§ 16 EStG"],
  kern: [
    "Zum Mitunternehmeranteil gehört steuerlich nicht nur der Gesellschaftsanteil, sondern auch, was der Gesellschafter der Gesellschaft persönlich zur Verfügung stellt — vor allem Grundstücke, Darlehen und Anteile an der Komplementär-GmbH.",
    "Die Übertragung zu Buchwerten verlangt, dass der ganze Anteil übergeht — einschließlich des Sonderbetriebsvermögens, das wesentliche Betriebsgrundlage ist.",
    "Wird das Betriebsgrundstück zurückbehalten und bleibt beim Vater, kann die Übertragung des Anteils als Aufgabe gewertet werden: Die stillen Reserven werden versteuert, obwohl kein Geld fließt.",
    "Auch die Erbschaftsteuerverschonung kennt das Sonderbetriebsvermögen: Es ist begünstigt — aber nur, wenn es mit dem Anteil übergeht.",
    "Die Praxis verlangt vor jeder Übertragung ein vollständiges Inventar: Was gehört wem, was nutzt die Gesellschaft, was ist wesentlich?",
  ],
  einsatzfelder: [
    { situation: "Der Vater will den KG-Anteil verschenken, das Firmengrundstück aber als Altersvorsorge behalten.", warum: "Das ist der klassische Störfall — er braucht eine Gestaltung, die das Grundstück steuerlich mitzieht oder vorher sauber trennt." },
    { situation: "Die Komplementär-GmbH gehört dem Senior allein.", warum: "Ihre Anteile sind regelmäßig Sonderbetriebsvermögen; werden sie nicht mitübertragen, ist die Nachfolge steuerlich unvollständig." },
  ],
  ablauf: [
    { schritt: "Gesellschaftsvertrag und Nachfolgeklausel lesen", hinweis: "Wer darf überhaupt Gesellschafter werden — und mit welcher Zustimmung?" },
    { schritt: "Sonderbetriebsvermögen inventarisieren", hinweis: "Grundstücke, Darlehen, GmbH-Anteile, Lizenzen — alles, was der Gesellschafter der Gesellschaft überlässt." },
    { schritt: "Wesentliche Betriebsgrundlagen bestimmen", hinweis: "Das Betriebsgrundstück ist es fast immer; das muss mitübertragen werden oder vorher steuerneutral ausgegliedert." },
    { schritt: "Buchwertfortführung und Verschonung getrennt rechnen", hinweis: "Ertragsteuer und Erbschaftsteuer stellen unterschiedliche Anforderungen an dieselbe Übertragung.", norm: "§ 6 Abs. 3 EStG, § 13b ErbStG" },
    { schritt: "Behaltensfristen dokumentieren", hinweis: "Fünf oder sieben Jahre lang darf nichts entnommen oder verkauft werden, was die Verschonung rückwirkend kostet.", norm: "§ 13a Abs. 6 ErbStG" },
  ],
  beispiele: [
    { konstellation: "Ein Vater schenkt seiner Tochter seinen Kommanditanteil an der Produktions-KG. Das Fabrikgrundstück gehört ihm privat und bleibt bei ihm — er will die Miete als Rente.", gestaltung: "Das Grundstück ist Sonderbetriebsvermögen und wesentliche Betriebsgrundlage. Weil es nicht mitgeht, wird die Anteilsübertragung steuerlich zur Aufgabe: Die stillen Reserven in Anteil und Grundstück werden versteuert.", pointe: "Die Rente aus der Miete gibt es weiter — aber erst nach einer Steuerrechnung, die die Rente von zehn Jahren kostet. Vorher planen hätte beides erhalten." },
  ],
  fehler: [
    { fehler: "Das Sonderbetriebsvermögen wird bei der KG-Schenkung übersehen.", richtig: "Die Sonderbilanz gehört in jede Nachfolgeakte — bevor der Notartermin feststeht.", norm: "§ 6 Abs. 3 EStG" },
    { fehler: "Anteil und Grundstück werden getrennt übertragen, zeitlich versetzt.", richtig: "Die Reihenfolge entscheidet: Grundstück zuerst allein zu übertragen, kann Buchwertfortführung retten oder zerstören — das gehört vorher durchgerechnet." },
  ],
  merksatz: "Bei der KG gehört die Sonderbilanz in jede Nachfolgeakte — nicht nur der Anteil.",
  gewicht: { mandat: 3, reichweite: 2 },
  antwortfreigabe: "keine",
  stand: "2026-09-12",
  quellen: ["Q7 Kap. 19.1", "Q7 Kap. 19.2", "Q7 Fall 28.5", "Q7 Fehler 21"],
  verwandt: ["niessbrauch-kg-anteil", "nachfolgeklauseln-kg", "betriebsvermoegen-verschonung", "dotation-ertragsteuer"],
};
