/* Q2 · Steuerklassenprivileg und Begünstigtenkreis */
export default {
  id: "steuerklassenprivileg",
  titel: "Der Freibetrag bei Errichtung hängt am entferntesten Begünstigten",
  bereich: "erbst",
  kurz: "Bei der Erstausstattung einer inländischen Familienstiftung richtet sich die Steuerklasse nach dem entferntest Berechtigten laut Satzung — und der BFH zählt auch Ungeborene mit.",
  normen: ["§ 15 Abs. 2 S. 1 ErbStG", "§ 16 ErbStG", "§ 7 Abs. 1 Nr. 8 ErbStG"],
  kern: [
    "Ohne Sonderregel wäre die Stiftung als fremde juristische Person Steuerklasse III mit 20.000 Euro Freibetrag; das Privileg stellt auf das Verwandtschaftsverhältnis des entferntest Berechtigten ab.",
    "Es wirkt auf Steuersatz und Freibetrag zugleich — bei einem Kind als entferntestem Berechtigten 400.000 Euro und Klasse I.",
    "Der BFH versteht 'Berechtigter' weit: Es genügt, dass jemand nach der Satzung potentiell Leistungen erhalten könnte; er muss weder geboren sein noch je etwas bekommen.",
    "Eine Satzung, die 'sämtliche Abkömmlinge' begünstigt, führt damit schon am Errichtungstag zum Urenkel-Freibetrag — obwohl der Urenkel Jahrzehnte entfernt ist.",
    "Ob reine Anfallsberechtigte bei Auflösung mitzählen, ist beim BFH anhängig; bis dahin keine familienfremde Auffangregel ohne steuerliche Prüfung.",
    "Der EuGH hat 2025 die Beschränkung des Privilegs auf inländische Stiftungen gebilligt — Begründung: die Erbersatzsteuer als Gegenstück.",
  ],
  einsatzfelder: [
    { situation: "Die Satzung soll dynastisch offen sein — alle künftigen Generationen.", warum: "Das ist zivilrechtlich richtig und steuerlich teuer. Die Entscheidung muss bewusst fallen, nicht als Nebeneffekt der Satzungsformulierung." },
  ],
  beispiele: [
    { konstellation: "Ein Stifter überträgt 5 Millionen Euro. Variante A: Begünstigte sind Ehefrau und Kinder. Variante B: 'alle Abkömmlinge in gerader Linie'.", gestaltung: "A: Klasse I, Freibetrag nach dem Kind, Steuersatz nach 4,6 Millionen. B: Klasse I bleibt, aber der Freibetrag sinkt auf den des Urenkels — 100.000 Euro.", pointe: "Ein Wort in der Satzung, 300.000 Euro Freibetrag Unterschied. Und das Wort war gut gemeint." },
  ],
  beispiele: [
    { konstellation: "Vier Satzungen, dasselbe Vermögen, vier Freibeträge.", gestaltung: "Nur Kinder und Kinder verstorbener Kinder: Klasse I, 400.000 Euro. Kinder und deren Abkömmlinge: Klasse I, 100.000 Euro — der Urenkel zählt. Eltern und deren Abkömmlinge: Klasse III, 20.000 Euro — weil auch Grossnichten und Grossneffen berechtigt sind. Kinder und Geschwister: Klasse II, 20.000 Euro.", pointe: "Wer 'die Familie' begünstigen will, sollte vorher aufschreiben, wer das steuerlich ist. Notfalls sind zwei Stiftungen billiger als eine." },
    { konstellation: "Neben den Abkömmlingen soll die vom Stifter errichtete gemeinnützige Stiftung jährlich zehn Prozent des Überschusses erhalten.", gestaltung: "Die Finanzverwaltung sieht darin formal einen familienfremden Berechtigten — Klasse III für die ganze Errichtung.", pointe: "Gemeinwohl und Familie in einer Stiftung kostet das Privileg. Die Lösung heisst Doppelstiftung." },
  ],
  fehler: [
    { fehler: "Die Satzung überlässt die Bestimmung des Anfallberechtigten einem Organ.", richtig: "Dann gewährt die Finanzverwaltung das Steuerklassenprivileg nicht. Anfallberechtigte in der Satzung festlegen — gemeinnützige sollen dabei unschädlich sein; fehlt jede Regelung, fällt das Vermögen an den Fiskus, und wie das steuerlich zählt, ist offen.", norm: "§ 87c BGB" },
    { fehler: "Eine familienfremde Person wird als 'Reserve' für den Vermögensanfall aufgenommen.", richtig: "Das kann den Freibetrag auf Klasse III drücken — 20.000 Euro. Bis zur BFH-Entscheidung nur nach steuerlicher Prüfung.", norm: "§ 15 Abs. 2 S. 1 ErbStG" },
    { fehler: "Der Begünstigtenkreis wird nur wegen des Freibetrags eng gefasst.", richtig: "Dann verliert die Stiftung ihre dynastische Reichweite — und die Erbersatzsteuer kommt trotzdem. Die Abwägung gehört auf den Tisch, nicht in den Zufall." },
  ],
  zahlen: [
    { wert: "400.000 €", bedeutung: "Freibetrag, wenn ein Kind der entferntest Berechtigte ist.", norm: "§ 16 Abs. 1 Nr. 2 ErbStG" },
    { wert: "20.000 €", bedeutung: "Freibetrag in Klasse III — was ohne das Privileg gälte, und was bei ausländischen Stiftungen gilt." },
  ],
  merksatz: "Die Satzung bestimmt nicht nur, wer bekommt — sie bestimmt am Errichtungstag, was der Fiskus bekommt.",
  gewicht: { mandat: 3, reichweite: 2 },
  antwortfreigabe: "abstrakt",
  stand: "2026-09-12",
  quellen: ["Q2 Steuerklassenprivileg und Begünstigtenkreis, Grenzüberschreitende Einordnung"],
  verwandt: ["erbersatzsteuer", "zustiftung-steuerklasse", "versorgungsstiftung", "liechtenstein-vorteile"],
};
