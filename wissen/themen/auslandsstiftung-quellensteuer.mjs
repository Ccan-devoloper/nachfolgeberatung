/* Q5 Teil 5 · Laufende Besteuerung, Quellensteuer */
export default {
  id: "auslandsstiftung-quellensteuer",
  titel: "Die Dividende, die zu 26 Prozent hängen bleibt",
  bereich: "liechtenstein",
  kurz: "Auf dem Papier entlastet das Abkommen die Stiftung vollständig von deutscher Kapitalertragsteuer. Seit die Missbrauchsvorschrift ausdrücklich auch Stiftungen erfasst, ist das keine sichere Rechnung mehr.",
  normen: ["Art. 10 Abs. 2 DBA-Liechtenstein", "§ 50d Abs. 3 EStG", "§ 43 Abs. 1 EStG", "§ 15 Abs. 1 Nr. 2 EStG"],
  kern: [
    "Hält eine ausländische Stiftung Anteile an einer deutschen Kapitalgesellschaft, behält diese auf jede Ausschüttung Kapitalertragsteuer und Solidaritätszuschlag ein — rund ein Viertel der Dividende.",
    "Das Abkommen mit Liechtenstein sieht für Schachtelbeteiligungen eine Entlastung auf null vor. Die Stiftung müsste sie nur beantragen.",
    "Der deutsche Gesetzgeber hat die Missbrauchsvorschrift zur Entlastungsberechtigung inzwischen ausdrücklich auf Stiftungen erstreckt. Welcher Massstab dabei gilt, ist noch nicht geklärt.",
    "Damit verschiebt sich die Frage von der Struktur auf die Substanz: Übt die Stiftung eine eigene wirtschaftliche Tätigkeit aus, oder ist sie nur zwischengeschaltet?",
    "Für eine rein vermögensverwaltende Stiftung, deren einzige Tätigkeit das Halten einer deutschen Beteiligung ist, ist das keine bequeme Ausgangslage.",
    "Wurde die Stiftung zusätzlich als Privatvermögensstruktur aufgesetzt, ist die Frage ohnehin erledigt: Sie gilt dann nicht als abkommensansässig, der Entlastungsanspruch besteht gar nicht erst.",
    "Ein gangbarer Weg ist, die Beteiligung nicht unmittelbar zu halten, sondern über eine originär gewerbliche Personengesellschaft — die Erträge werden dann einer inländischen Betriebsstätte zugeordnet und die Quellensteuerfrage stellt sich anders.",
    "Bei Immobilien ist die Lage günstiger: Deutsche Mieteinkünfte unterliegen der beschränkten Körperschaftsteuerpflicht mit 15 Prozent, ohne Gewerbesteuer, wenn nur vermögensverwaltend gehalten wird.",
  ],
  zahlen: [
    { wert: "26,375 %", bedeutung: "Kapitalertragsteuer und Solidaritätszuschlag, die eine deutsche Gesellschaft auf die Ausschüttung einbehält." },
    { wert: "0 %", bedeutung: "Was das Abkommen für Schachtelbeteiligungen vorsieht — wenn die Entlastungsberechtigung anerkannt wird.", norm: "Art. 10 Abs. 2 DBA-Liechtenstein" },
    { wert: "15 %", bedeutung: "Körperschaftsteuer auf deutsche Mieteinkünfte einer ausländischen Stiftung — deshalb sind Immobilien der unproblematischere Fall." },
  ],
  fehler: [
    { fehler: "Die Struktur wird mit der vollen Abkommensentlastung durchgerechnet.", richtig: "Rechnen Sie beide Fälle. Bleibt die Quellensteuer stehen, verschiebt das die Rendite der gesamten Struktur.", norm: "§ 50d Abs. 3 EStG" },
    { fehler: "Die Stiftung hält die deutsche GmbH-Beteiligung direkt, weil das am einfachsten ist.", richtig: "Gerade die direkte Beteiligung ohne eigene Tätigkeit ist der Fall, den die Missbrauchsvorschrift adressiert." },
  ],
  einsatzfelder: [
    { situation: "Das Auslandsvermögen besteht aus Wertpapieren und ausländischen Beteiligungen.", warum: "Dann stellt sich die Frage nicht — sie betrifft nur deutsche Ausschüttungen." },
    { situation: "Eine deutsche Familienholding soll unter eine ausländische Stiftung gehängt werden.", warum: "Hier ist die Quellensteuerfrage der Kern der Wirtschaftlichkeitsrechnung, nicht eine Randnotiz." },
  ],
  merksatz: "Eine Stiftung, die nichts tut, als eine deutsche Beteiligung zu halten, ist genau der Fall, für den die Missbrauchsvorschrift geschrieben wurde.",
  gewicht: { mandat: 2, reichweite: 2 },
  antwortfreigabe: "keine",
  stand: "2026-09-18",
  quellen: ["Q5 Teil 5 Abschn. 3a, 3d"],
  verwandt: ["liechtenstein-besteuerung", "auslandsstiftung-huerden", "immobilien-stiftung-rechnen"],
};
