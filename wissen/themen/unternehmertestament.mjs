/* Q7 · Kap. 21 Unternehmertestament und Testamentsvollstreckung · Fehler 22, 23 */
export default {
  id: "unternehmertestament",
  titel: "Das Unternehmertestament — nicht „wer erbt\", sondern „wer kann führen\"",
  bereich: "erbrecht",
  kurz: "Auch die beste lebzeitige Nachfolge braucht ein Notfalltestament; die Kernfrage ist nicht, wer erbt, sondern wer gesellschaftsrechtlich eintreten darf, wer entscheidet und woher die Liquidität für Pflichtteile und Steuern kommt.",
  normen: ["§ 2197 BGB", "§ 2205 BGB", "§ 2210 BGB", "§ 2048 BGB", "§ 2150 BGB", "§ 13a ErbStG"],
  kern: [
    "Ein Unternehmertestament beantwortet drei Fragen: Wer bekommt das Unternehmen, wer führt es bis dahin, und wie werden die weichenden Erben, der Ehegatte und das Finanzamt bezahlt?",
    "Erbenstellung und gesellschaftsvertragliche Nachfolgefähigkeit müssen übereinstimmen — sonst erbt jemand einen Anteil, den er nicht halten darf.",
    "Unternehmensvermächtnis, Teilungsanordnung und Vorausvermächtnis wirken verschieden: Beim Vorausvermächtnis bekommt das Kind das Unternehmen zusätzlich zum Erbteil, bei der Teilungsanordnung wird es angerechnet.",
    "Testamentsvollstreckung über Gesellschaftsanteile ist je nach Rechtsform verschieden möglich — beim Kommanditanteil etabliert, beim persönlich haftenden Gesellschafter nur eingeschränkt, und nur, wenn der Gesellschaftsvertrag sie zulässt.",
    "Für minderjährige oder noch nicht geeignete Erben braucht es eine Brücke: Testamentsvollstreckung, Vollmacht, Beirat — die Stiftung ist die Dauerlösung, die Testamentsvollstreckung die Brücke mit Verfallsdatum.",
  ],
  einsatzfelder: [
    { situation: "Ein Unternehmer hat die Nachfolge zu Lebzeiten geplant, aber noch nicht vollzogen — die Übergabe soll in fünf Jahren sein.", warum: "Stirbt er vorher, greift das gesetzliche Erbrecht: Erbengemeinschaft aus Ehegatte und Kindern, handlungsunfähig. Das Notfalltestament überbrückt." },
    { situation: "Die Kinder sind 14 und 17, das Unternehmen hat 80 Mitarbeiter.", warum: "Ohne Testamentsvollstrecker vertritt das Familiengericht mit — jede Gesellschafterentscheidung wird genehmigungspflichtig." },
    { situation: "Ein Kind soll das Unternehmen bekommen, die Geschwister gleichwertig aus dem Privatvermögen abgefunden werden.", warum: "Vorausvermächtnis, Teilungsanordnung und Pflichtteilsverzichte müssen so kombiniert werden, dass niemand die Gesellschaft aufreißen kann." },
  ],
  beispiele: [
    { konstellation: "Eine Unternehmerin, 55, alleinige Gesellschafterin einer GmbH & Co. KG, verunglückt. Testament: keines. Erben: Ehemann und zwei Kinder, 16 und 19.", gestaltung: "Die Erbengemeinschaft hält den Anteil gemeinsam; für den Minderjährigen entscheidet ein Ergänzungspfleger mit. Die Bank stellt die Kreditlinie, weil niemand allein zeichnungsberechtigt ist.", pointe: "Nicht die Steuer war das Problem, sondern dass drei Monate niemand entscheiden konnte." },
  ],
  fehler: [
    { fehler: "Testamentsvollstreckung wird angeordnet, obwohl der Gesellschaftsvertrag sie praktisch blockiert.", richtig: "Der Gesellschaftsvertrag muss die Testamentsvollstreckung am Anteil zulassen — sonst läuft die Anordnung ins Leere.", norm: "§ 2205 BGB" },
    { fehler: "Das Testament regelt das Unternehmen, aber nicht die Liquidität für Pflichtteile und Erbschaftsteuer.", richtig: "Wer das Unternehmen zuteilt, muss sagen, woher das Geld für die anderen kommt — Lebensversicherung, Privatvermögen, Stundung." },
  ],
  zahlen: [
    { wert: "30 Jahre", bedeutung: "Höchstdauer der Testamentsvollstreckung — die Stiftung kennt diese Grenze nicht.", norm: "§ 2210 BGB" },
  ],
  merksatz: "Das Unternehmertestament fragt nicht „wer erbt\", sondern „wer kann am Montag entscheiden\".",
  gewicht: { mandat: 3, reichweite: 3 },
  antwortfreigabe: "abstrakt",
  stand: "2026-09-12",
  quellen: ["Q7 Kap. 21", "Q7 Fehler 22, 23", "Q8 Kap. 3.1, 3.2"],
  verwandt: ["nachfolgeklauseln-kg", "dauertestamentsvollstreckung", "minderjaehrige-nachfolge", "nachfolge-als-system", "erbengemeinschaft-unternehmen", "berliner-testament-unternehmer", "handlungsunfaehigkeit-unternehmer"],
};
