/* Q7 Nr. 30.123 · BFH VIII R 25/21, Sachleistungen einer Familienstiftung */
export default {
  id: "sachleistung-destinataer",
  titel: "Die Stiftung zahlt in Sachwerten — ist das trotzdem Kapitalertrag?",
  bereich: "ertragsteuer",
  kurz: "Wer statt Geld Aktien, eine Wohnung oder ein Nutzungsrecht von der Stiftung bekommt, hat deshalb noch lange keinen steuerfreien Vorteil — auch Sachleistungen können Kapitalerträge sein.",
  normen: ["§ 20 Abs. 1 Nr. 9 EStG", "§ 8 Abs. 2 EStG", "§ 43 Abs. 1 Nr. 7a EStG"],
  kern: [
    "Leistungen einer Familienstiftung an ihre Begünstigten sind im Grundsatz Kapitaleinkünfte — das ist bekannt, solange Geld überwiesen wird.",
    "In der Praxis fliesst aber oft anderes: ein Wertpapierdepot wird übertragen, eine Stiftungswohnung wird unentgeltlich überlassen, ein Fahrzeug wird gestellt.",
    "Der Bundesfinanzhof hat dazu entschieden, dass auch solche Sachleistungen steuerbare Kapitalerträge sein können.",
    "Massgeblich sind drei Fragen: ob der Empfänger die Leistung als Begünstigter erhält, ob er eine Gegenleistung erbringt, und ob die Leistung wirtschaftlich eine Verteilung des Überschusses ist.",
    "Wer eine marktübliche Miete zahlt, erhält keine Zuwendung. Wer weniger zahlt, erhält sie in Höhe der Differenz.",
    "Das hat eine unangenehme Nebenwirkung: Auf Sachleistungen ist ebenfalls Kapitalertragsteuer einzubehalten — nur gibt es davon nichts abzuziehen, weil kein Geld fliesst.",
    "Deshalb gehört jede unbare Leistung in der Stiftung bewertet und dokumentiert, bevor sie gewährt wird. Der Vorstand haftet sonst für die nicht abgeführte Steuer.",
  ],
  fehler: [
    { fehler: "Die Stiftungswohnung wird einem Familienmitglied 'einfach überlassen', weil die Stiftung sie ohnehin hat.", richtig: "Die verbilligte Überlassung ist eine Zuwendung in Höhe des Mietvorteils. Entweder marktüblich vermieten oder als Leistung erfassen und versteuern.", norm: "§ 20 Abs. 1 Nr. 9 EStG" },
    { fehler: "Es wird in Wertpapieren ausgeschüttet, damit kein steuerpflichtiger Zufluss entsteht.", richtig: "Der Zufluss bemisst sich nach dem Wert der Sache. Die Form der Leistung ändert an der Steuerpflicht nichts.", norm: "§ 8 Abs. 2 EStG" },
  ],
  einsatzfelder: [
    { situation: "Eine Familienstiftung hält Immobilien, in denen Familienmitglieder wohnen.", warum: "Das ist eine der häufigsten Konstellationen — und eine der häufigsten Prüfungsfeststellungen. Ein schriftlicher Mietvertrag zu ortsüblichen Konditionen löst das Problem, bevor es entsteht." },
  ],
  merksatz: "Eine Zuwendung der Stiftung wird nicht dadurch steuerfrei, dass sie nicht aus Geld besteht.",
  gewicht: { mandat: 2, reichweite: 2 },
  antwortfreigabe: "keine",
  stand: "2026-09-18",
  quellen: ["Q7 Nr. 30.123"],
  verwandt: ["destinataer-besteuerung", "vorstandshaftung-steuern", "vermoegensauskehr-stiftung", "versorgungsstiftung"],
};
