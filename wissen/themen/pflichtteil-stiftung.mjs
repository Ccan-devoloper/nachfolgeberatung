/* Q1 · Erbrecht, Pflichtteilsergänzung, Erbverzicht */
export default {
  id: "pflichtteil-stiftung",
  titel: "Pflichtteil und Stiftung — die Zehnjahresuhr mit Abschmelzung",
  bereich: "erbrecht",
  kurz: "Gegen Pflichtteilsansprüche schirmt keine Stiftung ab; die Dotation gilt als Schenkung und wird zehn Jahre lang mit abnehmendem Gewicht dem Nachlass hinzugerechnet.",
  normen: ["§ 2303 BGB", "§ 2325 Abs. 3 BGB", "§ 2305 BGB", "§§ 2346 ff. BGB"],
  kern: [
    "Der Pflichtteil beträgt die Hälfte des gesetzlichen Erbteils und steht Abkömmlingen, Ehegatten und — nachrangig — Eltern zu; Testament und Stiftung ändern daran nichts.",
    "Die Ausstattung der Stiftung zu Lebzeiten ist eine Schenkung im Sinne der Pflichtteilsergänzung: Der Berechtigte kann verlangen, dass sie dem Nachlass rechnerisch hinzugezählt wird.",
    "Die Hinzurechnung schmilzt ab: im ersten Jahr nach der Leistung voll, dann jedes Jahr um ein Zehntel weniger, nach zehn Jahren gar nicht mehr.",
    "Bei einer Stiftung von Todes wegen gibt es diese Abschmelzung nicht — das gesamte Vermögen fällt in den Nachlass, und der Pflichtteil trifft die Stiftung ungebremst.",
    "Der sichere Weg ist der notarielle Pflichtteils- oder Erbverzicht der Berechtigten — meist gegen eine Abfindung oder gegen die Aufnahme in den Begünstigtenkreis.",
  ],
  einsatzfelder: [
    { situation: "Ein Stifter hat mehrere Kinder, von denen nur eines das Unternehmen führen soll; die anderen sollen versorgt, aber nicht beteiligt sein.", warum: "Ohne Verzicht könnten die übrigen Kinder Pflichtteilsergänzung verlangen und die Stiftung zu Zahlungen zwingen. Mit Verzicht gegen Begünstigung sind alle Seiten gebunden." },
    { situation: "Eine Familie will die Stiftung errichten, während die Eltern noch gesund und Mitte sechzig sind.", warum: "Je früher die Dotation, desto weiter läuft die Abschmelzung vor dem Erbfall — und desto kleiner das Risiko." },
  ],
  beispiele: [
    { konstellation: "Ein Vater überträgt sein wesentliches Vermögen mit 62 auf eine Familienstiftung, in der zwei seiner drei Kinder begünstigt sind. Das dritte Kind hat sich entfremdet.", gestaltung: "Er stirbt mit 74. Die Übertragung liegt zwölf Jahre zurück — die Pflichtteilsergänzung greift nicht mehr. Stirbt er mit 68, sind noch vier Zehntel der Dotation anzurechnen.", pointe: "Dieselbe Stiftung, dieselbe Familie — der Unterschied ist allein die Zeit. Wer kann, stiftet früh." },
  ],
  fehler: [
    { fehler: "Die Stiftung wird per Testament errichtet, um Pflichtteile zu umgehen.", richtig: "Das Gegenteil passiert: Ohne lebzeitige Dotation gibt es keine Abschmelzung; die Stiftung entsteht mit dem vollen Pflichtteilsrisiko.", norm: "§ 2325 Abs. 3 BGB" },
    { fehler: "Ein Kind wird enterbt und man hält die Sache für erledigt.", richtig: "Enterbung beseitigt den Pflichtteil nicht — nur ein Verzicht tut das.", norm: "§ 2303, §§ 2346 ff. BGB" },
  ],
  zahlen: [
    { wert: "1/10 pro Jahr", bedeutung: "So schmilzt der ergänzungspflichtige Wert einer lebzeitigen Dotation ab.", norm: "§ 2325 Abs. 3 S. 1 BGB" },
    { wert: "1/2", bedeutung: "Der Pflichtteil ist die Hälfte des gesetzlichen Erbteils.", norm: "§ 2303 BGB" },
  ],
  merksatz: "Enterben kann man, den Pflichtteil nehmen nicht — nur Zeit und ein Verzicht können das.",
  gewicht: { mandat: 3, reichweite: 3 },
  antwortfreigabe: "abstrakt",
  stand: "2026-09-12",
  quellen: ["Q1 Abschn. 3.2.2", "Q3 Pflichtteil und eheliches Güterrecht als Gestaltungsgrenzen"],
  verwandt: ["vermoegensschutz-grenzen", "stiftung-von-todes-wegen", "zugewinn-stiftung", "pflichtteil-fristanlauf", "pflichtteilsstrafklausel"],
};
