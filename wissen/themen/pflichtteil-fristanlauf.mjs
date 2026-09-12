/* Q7 · Kap. 17.4, 22 · Fall 28.11 · Fehler 24, 25 */
export default {
  id: "pflichtteil-fristanlauf",
  titel: "Die Zehnjahresfrist, die nie beginnt — Pflichtteil bei Nießbrauch und Leibrente",
  bereich: "erbrecht",
  kurz: "Die Zehnjahresfrist gegen Pflichtteilsergänzung läuft nur, wenn der Schenker das Verschenkte auch wirtschaftlich aufgegeben hat — bei umfassendem Nießbrauch, Wohnrecht oder Rente in Höhe der Mieten möglicherweise nie.",
  normen: ["§ 2325 Abs. 3 BGB", "§ 2329 BGB", "§ 528 BGB"],
  kern: [
    "Schenkungen werden für den Pflichtteil zehn Jahre lang dem Nachlass hinzugerechnet, abschmelzend um ein Zehntel pro Jahr — aber nur, wenn die Frist überhaupt läuft.",
    "Nach dem Bundesgerichtshof beginnt die Frist erst, wenn der Schenker den Gegenstand wirtschaftlich aus seinem Vermögen ausgegliedert und den wesentlichen Genuss aufgegeben hat.",
    "Bei einem umfassenden Nießbrauch oder einem Wohnrecht am ganzen Haus fehlt dieser Genussverzicht — die Schenkung wird beim Tod so behandelt, als wäre sie gerade erst erfolgt.",
    "Das Oberlandesgericht Nürnberg hat 2025 dieselbe Logik auf eine grundbuchgesicherte Leibrente in Höhe der gesamten Mieten übertragen — umstritten, aber ein deutliches Warnsignal.",
    "Bei Schenkungen unter Ehegatten läuft die Frist ohnehin erst mit Auflösung der Ehe.",
  ],
  mythos: {
    behauptung: "Ich habe das Haus vor zwölf Jahren übertragen — der Pflichtteil kann es nicht mehr erfassen.",
    richtigstellung: "Wenn Sie seit zwölf Jahren im ganzen Haus wohnen oder alle Mieten beziehen, hat die Frist möglicherweise nie angefangen. Dann zählt das Haus für den Pflichtteil voll.",
  },
  einsatzfelder: [
    { situation: "Ein Elternteil will ein Kind bevorzugen und die Pflichtteile der anderen über die Zehnjahresfrist reduzieren.", warum: "Das funktioniert nur, wenn die Übertragung wirtschaftlich echt ist — Nießbrauch an einem Teil, nicht am Ganzen, oder eine Rente unterhalb der Erträge." },
    { situation: "Eine Familie plant Nießbrauch für die Versorgung und gleichzeitig Pflichtteilsplanung.", warum: "Beide Ziele stehen im Konflikt; sie müssen gemeinsam gestaltet werden, nie getrennt." },
  ],
  beispiele: [
    { konstellation: "Eine Mutter überträgt ihr Mietshaus auf die Tochter gegen eine lebenslange, im Grundbuch gesicherte Rente, die genau den Mieteinnahmen entspricht.", gestaltung: "Nach der Nürnberger Entscheidung hat sie den wirtschaftlichen Genuss nicht aufgegeben. Stirbt sie 15 Jahre später, kann der Sohn Pflichtteilsergänzung aus dem vollen Wert verlangen.", pointe: "Auch „kein Nießbrauch\" heißt nicht automatisch, dass die Frist läuft." },
    { konstellation: "Ein Vater überträgt zwei von drei Mietshäusern und behält den Nießbrauch nur am dritten.", gestaltung: "An den übertragenen Objekten hat er den Genuss aufgegeben — dort läuft die Frist. Das dritte bleibt ohnehin in seinem Vermögen.", pointe: "Teilen statt vorbehalten: Versorgung aus einem Objekt, Pflichtteilsplanung mit den anderen." },
  ],
  fehler: [
    { fehler: "Die Ergänzungsfrist wird pauschal ab Vertragsdatum gerechnet.", richtig: "Maßgeblich ist der Genussverzicht, nicht die Unterschrift — bei vorbehaltenen Nutzungen läuft die Frist womöglich gar nicht.", norm: "§ 2325 Abs. 3 BGB" },
    { fehler: "Eine Leibrente in Höhe sämtlicher Mieterträge wird als sicherer Fristanlauf behandelt.", richtig: "Das Oberlandesgericht Nürnberg hat das 2025 verneint; die Frage ist umstritten — wer sicher gehen will, gestaltet die Rente niedriger als die Erträge." },
  ],
  zahlen: [
    { wert: "1/10 pro Jahr", bedeutung: "Abschmelzung der Hinzurechnung — vorausgesetzt, die Frist läuft.", norm: "§ 2325 Abs. 3 S. 1 BGB" },
    { wert: "0 Jahre", bedeutung: "So lange läuft die Frist bei umfassendem Nießbrauch: Sie beginnt erst mit dem Ende des Vorbehalts.", norm: "§ 2325 Abs. 3 BGB" },
  ],
  merksatz: "Die Zehnjahresuhr startet nicht beim Notar, sondern beim Loslassen.",
  gewicht: { mandat: 3, reichweite: 3 },
  antwortfreigabe: "abstrakt",
  stand: "2026-09-12",
  quellen: ["Q7 Kap. 17.4", "Q7 Kap. 22", "Q7 Fall 28.11", "Q7 Fehler 24, 25"],
  verwandt: ["pflichtteil-stiftung", "niessbrauch-grundlagen", "niessbrauch-immobilie", "vermoegensschutz-grenzen"],
};
