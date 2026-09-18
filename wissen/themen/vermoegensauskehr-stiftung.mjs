/* Q10 Abschn. F.3d · Auskehr von Vermögensbestandteilen, BFH 17.05.2023 */
export default {
  id: "vermoegensauskehr-stiftung",
  titel: "Wenn die Stiftung Substanz auskehrt — Ertrag oder Rückgabe?",
  bereich: "ertragsteuer",
  kurz: "Laufende Leistungen an Begünstigte sind Kapitaleinkünfte. Ob das auch für die Auskehr von Vermögenssubstanz gilt, ist ungeklärt — und der BFH hat 2023 den Weg verbaut, das im Voraus feststellen zu lassen.",
  normen: ["§ 20 Abs. 1 Nr. 9 EStG", "§ 27 KStG", "§ 179 Abs. 1 AO", "§ 7 Abs. 1 Nr. 9 ErbStG", "§ 43 Abs. 1 Nr. 7a EStG"],
  kern: [
    "Leistungen einer Familienstiftung an ihre Begünstigten sind Kapitaleinkünfte und unterliegen der Abgeltungsteuer. Die Stiftung behält Kapitalertragsteuer ein und haftet, wenn sie es nicht tut.",
    "Anders liegt es, wenn nicht Erträge ausgeschüttet werden, sondern eingelegte Substanz zurückfliesst. Bei Kapitalgesellschaften regelt das steuerliche Einlagekonto diesen Fall: Was aus der Einlage kommt, ist kein Ertrag.",
    "Für Stiftungen ist das ungeklärt. Naheliegend wäre es, dieselbe Systematik anzuwenden — der Wortlaut verweist darauf.",
    "Die Finanzverwaltung hält dagegen: Die Vorschrift nennt Körperschaften und Personenvereinigungen, aber keine Vermögensmassen.",
    "Der Bundesfinanzhof hat 2023 in zwei Entscheidungen die Verwaltungsauffassung bestätigt — jedenfalls im Verfahren: Für rechtsfähige private Stiftungen findet keine gesonderte Feststellung des Einlagekontos statt, weil das Gesetz sie dafür nicht vorsieht.",
    "Die Folge ist unbequem: Die Frage, ob eine Auskehr Ertrag oder Substanzrückgabe ist, wird nicht vorab bei der Stiftung geklärt, sondern erst im Veranlagungsverfahren des einzelnen Begünstigten.",
    "Damit fehlt die Planungssicherheit genau dort, wo es um grosse Beträge geht — und die Beweislast liegt beim Begünstigten.",
    "Erbschaftsteuerlich ist die Lage klarer: Erfasst ist nur die Auflösung der Stiftung, nicht die blosse Rückgewähr von Vermögen.",
    "Bei ausländischen Stiftungen stellt sich dieselbe Frage noch einmal gesondert; für Stiftungen im EWR ist das praktisch relevant.",
    "Wer erhebliche Zustiftungen plant, sollte die Dokumentation von Anfang an so führen, dass sich Einlagen und Erträge später auseinanderhalten lassen — auch ohne förmliche Feststellung.",
  ],
  fehler: [
    { fehler: "Die Stiftung kehrt zugestiftetes Kapital an einen Begünstigten aus und behandelt das als steuerfreie Rückgabe.", richtig: "Ohne Feststellung des Einlagekontos trägt der Begünstigte in seiner Veranlagung die Darlegungslast. Ohne saubere Dokumentation wird daraus ein Kapitalertrag." },
    { fehler: "Die Stiftung verzichtet auf den Kapitalertragsteuereinbehalt, weil „nur Substanz“ ausgekehrt wird.", richtig: "Die Stiftung haftet für den Einbehalt. Die Einordnung ist offen — und das Risiko liegt dann bei ihr.", norm: "§ 43 Abs. 1 Nr. 7a EStG" },
  ],
  zahlen: [
    { wert: "26,375 %", bedeutung: "Abgeltungsteuer samt Solidaritätszuschlag auf Leistungen der Stiftung an Begünstigte." },
    { wert: "17.05.2023", bedeutung: "An diesem Tag hat der BFH in zwei Verfahren entschieden, dass Stiftungen kein Einlagekonto feststellen lassen können." },
  ],
  merksatz: "Bei der Stiftung gibt es kein Konto, das beweist, was Einlage war — den Beweis führt am Ende der Begünstigte.",
  gewicht: { mandat: 2, reichweite: 2 },
  antwortfreigabe: "keine",
  stand: "2026-09-18",
  quellen: ["Q10 Abschn. F.3d"],
  verwandt: ["destinataer-besteuerung", "stiftung-aufloesung", "zustiftung-steuerklasse", "stiftung-laufende-steuer"],
};
