/* Q2 · Verschonungsbedarfsprüfung § 28a ErbStG; Q1 · steuerliche Gründe */
export default {
  id: "grosserwerb-verschonungsbedarf",
  titel: "Grosserwerbe über 26 Millionen — der Erlass für die arme Stiftung",
  bereich: "erbst",
  kurz: "Oberhalb von 26 Millionen Euro begünstigtem Vermögen greift statt der Regelverschonung die Bedarfsprüfung: Wer kein verfügbares Vermögen hat, bekommt die Steuer erlassen — und eine frisch errichtete Stiftung hat oft keines.",
  normen: ["§ 13c ErbStG", "§ 28a ErbStG", "§ 28a Abs. 4 ErbStG", "§ 28a Abs. 7 ErbStG"],
  kern: [
    "Die 26-Millionen-Grenze gilt je Erwerber und rechnet alle begünstigten Erwerbe vom selben Übergeber innerhalb von zehn Jahren zusammen; darüber schmilzt die Verschonung um einen Prozentpunkt je volle 750.000 Euro ab und ist bei 90 Millionen aufgebraucht.",
    "Ab 26 Millionen Euro begünstigtem Vermögen je Erwerb schmilzt die Regelverschonung ab; alternativ kann der Erwerber die Verschonungsbedarfsprüfung beantragen.",
    "Erlassen wird die Steuer, soweit sie nicht aus 50 Prozent des verfügbaren, nicht begünstigten Vermögens des Erwerbers gezahlt werden kann.",
    "Eine neu errichtete Stiftung, die nur mit begünstigtem Unternehmensvermögen ausgestattet ist, hat kaum verfügbares Vermögen — das Erlasspotenzial ist erheblich.",
    "Aber zehn Jahre lang wird nachgeschaut: Später erworbenes verfügbares Vermögen — Zustiftungen, Erträge, Erbschaften — löst Nachsteuer aus.",
    "Satzungsmässige Bindungen des Vermögens mindern das verfügbare Vermögen nach herrschender Lesart nicht.",
    "Verfügbar ist auch, was zugleich mit dem Unternehmen erworben wird: Wer Betriebsvermögen und Depot in einem Akt auf dieselbe Stiftung überträgt, rechnet sich den Erlass selbst klein — Vermögensseparierung ist die Voraussetzung, nicht die Kür.",
    "Die Verschonungsbedarfsprüfung steht 2026 mit auf dem Prüfstand des Bundesverfassungsgerichts — kein Modell sollte als dauerhafte Garantie verkauft werden.",
    "Die Bedarfsprüfung gilt entsprechend bei der Erbersatzsteuer; Antrag und Nachbeobachtung treffen dann die Stiftung selbst.",
  ],
  einsatzfelder: [
    { situation: "Ein Unternehmen im Wert von 60 Millionen Euro soll übergehen; die Familie hat daneben Immobilien und Depots.", warum: "Geht das Unternehmen auf eine eigens errichtete Stiftung, hat die Erwerberin kein verfügbares Vermögen — anders als ein Kind, das die Immobilien mit erbt. Liquidität und Unternehmen bewusst trennen." },
  ],
  beispiele: [
    { konstellation: "Begünstigtes und nicht begünstigtes Vermögen je 100 Millionen Euro, ein Kind ohne eigenes Vermögen.", gestaltung: "Direktübertragung: rund 60 Millionen Steuer, keine Verschonung für das Unternehmen — das Kind könnte die Steuer aus dem übrigen Vermögen zahlen. Gestaltung: Das begünstigte Vermögen geht auf eine neue Familienstiftung, die den Erlass beantragt; das übrige Vermögen geht an das Kind.", pointe: "Gutes und schlechtes Vermögen trennen — auf zwei Erwerber. Die Bundesregierung hat 2015 auf Anfrage erklärt, dass die Verteilung auf verschiedene Erwerber üblich ist und Befreiungen je Erwerber geprüft werden; ein Missbrauch liegt darin nicht." },
    { konstellation: "Begünstigtes Vermögen 100 Millionen, das Kind hat selbst 30 Millionen und ist verheiratet.", gestaltung: "Das Kind überträgt die Hälfte seines Vermögens per Güterstandsschaukel steuerfrei auf den Ehegatten, die übrigen 15 Millionen auf eine eigene Familienstiftung — und ist damit selbst vermögenslos genug für den Erlass.", pointe: "Verfügbares Vermögen ist eine Stichtagsfrage. Wer den Stichtag kennt, kann ihn vorbereiten." },
    { konstellation: "Der Übergeber ist gesundheitlich angeschlagen, das Kind hat nichts.", gestaltung: "Das begünstigte Vermögen geht sofort an das Kind, das den Erlass beantragt. Für das nicht begünstigte Vermögen ordnet das Testament eine Stiftung von Todes wegen an — nur, wenn der Tod innerhalb der zehn Jahre eintritt; sonst entfällt die Einsetzung.", pointe: "Die Nachbeobachtung läuft zehn Jahre. Ein bedingtes Testament hält das Kind so lange arm, wie es arm sein muss." },
    { konstellation: "Übertragung eines Familienunternehmens im Wert von 80 Millionen Euro. Variante A auf die Tochter, die ein Depot von 10 Millionen besitzt. Variante B auf eine neue Familienstiftung ohne sonstiges Vermögen.", gestaltung: "A: Bis zu 5 Millionen aus dem Depot sind zur Steuerzahlung einzusetzen. B: Kein verfügbares Vermögen, Erlass nahezu vollständig — sofern in den zehn Folgejahren keine nennenswerte Liquidität in die Stiftung fliesst.", pointe: "Der Erlass ist keine Eintrittskarte, sondern eine Zehnjahresverpflichtung: Die Stiftung muss arm bleiben." },
  ],
  fehler: [
    { fehler: "Unternehmen und Privatvermögen werden gleichzeitig in dieselbe Stiftung übertragen — 'alles in einem Akt'.", richtig: "Zugleich erworbenes nicht begünstigtes Vermögen ist verfügbares Vermögen. Das Depot gehört in eine zweite Struktur oder bleibt beim Stifter — sonst zahlt die Stiftung die Steuer aus genau dem Geld, das sie hätte schützen sollen.", norm: "§ 28a Abs. 2 ErbStG" },
    { fehler: "Nach dem Erlass wird das Wertpapiervermögen der Familie zugestiftet, 'damit alles zusammen ist'.", richtig: "Das ist verfügbares Vermögen im Nachbeobachtungszeitraum — Nachsteuer. Die Trennung von Unternehmensvermögen und Liquidität muss zehn Jahre halten.", norm: "§ 28a Abs. 4 ErbStG" },
  ],
  zahlen: [
    { wert: "26 Mio. €", bedeutung: "Ab dieser Grenze je Erwerb beginnt die Welt der Grosserwerbe.", norm: "§ 13c ErbStG" },
    { wert: "50 %", bedeutung: "So viel des verfügbaren Vermögens ist zur Steuerzahlung einzusetzen — der Rest wird erlassen.", norm: "§ 28a Abs. 1 ErbStG" },
    { wert: "10 Jahre", bedeutung: "Nachbeobachtung: Was an verfügbarem Vermögen hinzukommt, löst Nachsteuer aus.", norm: "§ 28a Abs. 4 ErbStG" },
  ],
  merksatz: "Bei Grosserwerben belohnt das Gesetz die Stiftung, die nur das Unternehmen hat — und bestraft die, die später reich wird.",
  gewicht: { mandat: 3, reichweite: 2 },
  antwortfreigabe: "keine",
  stand: "2026-09-12",
  quellen: ["Q2 Unternehmensvermögen und erbschaftsteuerliche Verschonung, Verschonungsbedarfsprüfung bei der Ersatzerbschaftsteuer", "Q1 Abschn. 3.2.5", "Q7 Kap. 12, 31.7"],
  verwandt: ["betriebsvermoegen-verschonung", "erbersatzsteuer", "doppelstiftung", "verschonung-bverfg-2026", "einstiegstest-90-prozent"],
};
