/* Q1 Abschn. 3.2.2 · §§ 1924, 1931 BGB, gesetzliche Erbfolge */
export default {
  id: "gesetzliche-erbfolge",
  titel: "Wer erbt, wenn kein Testament da ist",
  bereich: "erbrecht",
  kurz: "Ohne letztwillige Verfügung teilt das Gesetz auf — und bei Unternehmern führt seine Aufteilung fast immer zu genau dem, was niemand wollte.",
  normen: ["§ 1924 BGB", "§ 1931 BGB", "§ 1922 BGB", "§ 1371 Abs. 1 BGB"],
  kern: [
    "Mit dem Tod geht das gesamte Vermögen als Ganzes auf die Erben über — Unternehmensanteile, Immobilien, Schulden, alles zugleich.",
    "Sind Kinder da, erben sie zu gleichen Teilen. Der Ehegatte erbt neben ihnen ein Viertel, im gesetzlichen Güterstand erhöht auf die Hälfte.",
    "Gibt es keine Kinder, erbt der Ehegatte neben Eltern und Grosseltern die Hälfte, im gesetzlichen Güterstand drei Viertel.",
    "Sind nur noch entferntere Verwandte vorhanden, bekommt der Ehegatte alles.",
    "Für Unternehmerfamilien ist das Ergebnis regelmässig ungeeignet: Es entsteht eine Erbengemeinschaft, in der alle gemeinsam über den Anteil verfügen müssen.",
    "Ob ein Erbe das Unternehmen führen kann, spielt für das Gesetz keine Rolle — es teilt nach Verwandtschaft, nicht nach Eignung.",
    "Und der Gesellschaftsvertrag kann anderes bestimmen als das Testament: Was gesellschaftsrechtlich vorgeht, entscheidet über den Anteil, gleich was im Nachlass steht.",
  ],
  mythos: {
    behauptung: "Ohne Testament bekommt der Ehepartner sowieso alles.",
    richtigstellung: "Nur wenn keine Kinder, Eltern und Grosseltern mehr leben. Sind Kinder da, erbt der Ehegatte im gesetzlichen Güterstand die Hälfte — und der Rest geht auf die Kinder, die damit Miteigentümer des Unternehmens werden.",
  },
  einsatzfelder: [
    { situation: "Ein Unternehmer hat kein Testament und geht davon aus, dass sich das schon regeln wird.", warum: "Die gesetzliche Folge ist eine Erbengemeinschaft am Unternehmensanteil — der Zustand, den fast jede Nachfolgeplanung zuerst vermeiden will." },
  ],
  fehler: [
    { fehler: "Es wird auf die gesetzliche Erbfolge vertraut, weil 'die Kinder sich einig sind'.", richtig: "Einigkeit hält selten durch eine Erbengemeinschaft mit Unternehmensanteil. Und sie hilft nicht, wenn ein Kind später ausfällt oder ein Gläubiger pfändet." },
    { fehler: "Ein Testament wird geschrieben, ohne den Gesellschaftsvertrag anzusehen.", richtig: "Nachfolgeklauseln im Gesellschaftsvertrag gehen vor. Passen beide nicht zusammen, läuft die letztwillige Verfügung ins Leere." },
  ],
  merksatz: "Das Gesetz teilt nach Verwandtschaft — ein Unternehmen braucht eine Teilung nach Eignung.",
  gewicht: { mandat: 3, reichweite: 3 },
  antwortfreigabe: "abstrakt",
  stand: "2026-09-18",
  quellen: ["Q1 Abschn. 3.2.2"],
  verwandt: ["unternehmertestament", "erbengemeinschaft-unternehmen", "ehegattenerbrecht-stiftung", "nachfolgeklauseln-kg"],
};
