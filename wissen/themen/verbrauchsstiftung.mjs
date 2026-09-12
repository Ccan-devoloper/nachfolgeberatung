/* Q1 · Verbrauchsstiftung; Q2 · Kohärenz und Verbrauchsstiftung unter 30 Jahren */
export default {
  id: "verbrauchsstiftung",
  titel: "Die Stiftung auf Zeit — Verbrauchsstiftung",
  bereich: "familienstiftung",
  kurz: "Eine Verbrauchsstiftung wird für mindestens zehn Jahre errichtet, darf ihren Vermögensstamm ausschütten und endet planmässig — und erlebt bei kurzer Laufzeit keinen Erbersatzsteuer-Stichtag.",
  normen: ["§ 80 Abs. 1 S. 2 BGB", "§ 82 S. 2 BGB", "§ 83b Abs. 1 S. 2 BGB", "§ 87 Abs. 2 BGB"],
  kern: [
    "Die Ewigkeitsstiftung ist der Regelfall; die Verbrauchsstiftung ist die auf bestimmte Zeit errichtete Stiftung, deren Vermögen bis zum Zeitablauf vollständig für den Zweck zu verbrauchen ist.",
    "Die Anerkennung setzt eine Laufzeit von mindestens zehn Jahren voraus.",
    "Es gibt kein Grundstockvermögen — alles ist sonstiges Vermögen und darf an die Begünstigten fliessen.",
    "Ab 2028 heisst sie im Namen 'eingetragene Verbrauchsstiftung' oder 'e. VS.'.",
    "Eine Verbrauchsstiftung mit einer Laufzeit unter 30 Jahren erlebt typischerweise keinen Erbersatzsteuer-Stichtag, kann aber das Steuerklassenprivileg bei Errichtung beanspruchen — ein Punkt, der in der Diskussion um die Europarechtskonformität eine Rolle spielt.",
  ],
  einsatzfelder: [
    { situation: "Ein Vermögen soll zwei Generationen tragen, nicht zehn — etwa bis alle Enkel ausgebildet sind.", warum: "Die Verbrauchsstiftung hat ein Ende, das man kennt. Danach fällt das Restvermögen an die Anfallberechtigten." },
    { situation: "Der Stifter will die Bindung, aber nicht die Ewigkeit — er traut der übernächsten Generation zu, selbst zu entscheiden.", warum: "Bindung mit Verfallsdatum: Die Regeln gelten für die Zeit, die der Stifter überblickt." },
  ],
  alternativen: [
    { form: "Dauertestamentsvollstreckung", wannBesser: "Wenn nur der Nachlass gebunden werden soll, ohne neuen Rechtsträger.", warum: "Erben bleiben Eigentümer, die Bindung endet nach höchstens 30 Jahren. Kein Anerkennungsverfahren." },
    { form: "Ewigkeitsstiftung", wannBesser: "Wenn der Zweck kein Ende haben soll.", warum: "Sie ist die einzige Struktur, die einen Willen ohne Verfallsdatum trägt." },
  ],
  zahlen: [
    { wert: "10 Jahre", bedeutung: "Mindestlaufzeit einer Verbrauchsstiftung.", norm: "§ 82 S. 2 BGB" },
  ],
  merksatz: "Nicht jede Bindung muss ewig sein — die Verbrauchsstiftung bindet so lange, wie der Stifter voraussieht.",
  gewicht: { mandat: 2, reichweite: 2 },
  antwortfreigabe: "abstrakt",
  stand: "2026-09-12",
  quellen: ["Q1 Abschn. 2.1, 4.1.2 (b) bb), 7", "Q2 Grenzüberschreitende Einordnung des Steuerklassenprivilegs"],
  verwandt: ["versorgungsstiftung", "erbersatzsteuer", "dauertestamentsvollstreckung"],
};
