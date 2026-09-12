/* Q2 · Besteuerung der Begünstigten */
export default {
  id: "destinataer-besteuerung",
  titel: "Was die Familie zahlt — erst wenn Geld fliesst, und dann 26,375 Prozent",
  bereich: "ertragsteuer",
  kurz: "Leistungen der Stiftung an Begünstigte sind Kapitaleinkünfte mit Abgeltungsteuer — auch eine einmalige Ermessensleistung, auch die Wohnung zum Nulltarif, aber keine Schenkung.",
  normen: ["§ 20 Abs. 1 Nr. 9 EStG", "§ 32d EStG", "§§ 43 ff. EStG", "§ 7 Abs. 1 Nr. 1 ErbStG"],
  kern: [
    "Auf Ebene der Begünstigten greift die Besteuerung erst mit der Leistung — solange die Stiftung thesauriert, zahlt die Familie nichts.",
    "Leistungen, die einer Gewinnausschüttung wirtschaftlich vergleichbar sind, sind Kapitaleinkünfte mit Abgeltungsteuer, effektiv 26,375 Prozent; die Stiftung behält Kapitalertragsteuer ein.",
    "Der BFH hat 2024 klargestellt: Es genügt, dass der Empfänger zum begünstigungsfähigen Kreis gehört und keine Gegenleistung erbringt — kein Anspruch, keine Regelmässigkeit, keine Gesellschafterähnlichkeit nötig.",
    "Auch Sach- und Nutzungsvorteile — die stiftungseigene Wohnung, das Fahrzeug — sind Leistungen, wenn sie aus der Ertragssphäre stammen.",
    "Satzungsgemässe Leistungen sind keine Schenkungen: Es fehlt an der Freigebigkeit, weil die Satzung die Verwendung vorgibt.",
    "Lebt ein Begünstigter im Ausland, ist er mit den Leistungen beschränkt steuerpflichtig; ob das Abkommen sie als Dividende mit deutschem Quellensteuerrecht oder als sonstige Einkünfte nur im Wohnsitzstaat einordnet, ist nicht geklärt — die wohl herrschende Meinung sagt Letzteres.",
    "Die Stiftung behält Kapitalertragsteuer ein und haftet, wenn sie es unterlässt; übernimmt sie die Steuer für den Begünstigten, erhöht das die Leistung und damit die Steuer.",
    "Auf Stiftungsebene gibt es keine Hinzurechnung wie bei der vGA — verzichtet die Stiftung auf Einnahmen, wird nichts hinzugerechnet; bei verbilligter Wohnraumüberlassung aber auch kein Abzug von Zins und Abschreibung.",
    "Vergütungen für echte Tätigkeit — Vorstand, Geschäftsführung einer Beteiligung — werden nach dem Dienstverhältnis besteuert, nicht als Destinatärsleistung.",
  ],
  vorteile: [
    { vorteil: "Steuerstundung durch Thesaurierung", erklaerung: "Was in der Stiftung bleibt, wird nur mit Körperschaftsteuer belastet. Die zweite Ebene kommt erst mit der Ausschüttung." },
    { vorteil: "Planbare Belastung", erklaerung: "26,375 Prozent auf die Leistung — unabhängig vom persönlichen Steuersatz des Begünstigten.", norm: "§ 32d EStG" },
    { vorteil: "Keine Schenkungsteuer auf laufende Leistungen", erklaerung: "Satzungsgemässe Zuwendungen sind keine freigebigen Zuwendungen.", norm: "§ 7 Abs. 1 Nr. 1 ErbStG" },
  ],
  nachteile: [
    { nachteil: "Zwei Ebenen", erklaerung: "Körperschaftsteuer in der Stiftung plus Abgeltungsteuer beim Empfänger — in Summe mehr als der persönliche Satz bei direktem Bezug sein kann." },
    { nachteil: "Keine Neutralität bei Sachleistungen", erklaerung: "Die Wohnung zum Nulltarif ist steuerpflichtig — und muss bewertet werden." },
  ],
  fehler: [
    { fehler: "Man geht davon aus, dass sich die steuerfrei auskehrbare Substanz von selbst ergibt.", richtig: "Selbst wenn man die Auskehr dem Grunde nach für steuerfrei hält, ist offen, woran sie sich bemisst: am Zeitwert des Vermögens bei Zugang oder an den fortgeführten Anschaffungskosten. Wer darauf baut, braucht die Bewertung zum Zuwendungszeitpunkt dokumentiert — rückwirkend ist sie nicht zu beschaffen." },
    { fehler: "Eine einmalige Ermessenszahlung an ein Enkelkind wird für steuerfrei gehalten, 'weil es keinen Anspruch hatte'.", richtig: "Gerade das ist der Fall des BFH: Auch ohne Anspruch Kapitalertrag, wenn der Empfänger nach der Satzung begünstigt sein kann." },
    { fehler: "Die Herkunft ausgeschütteter Mittel wird nicht dokumentiert.", richtig: "Ertrag, Rückzahlung von Dotationskapital und sonstige Vermögensübertragung sind nicht gleich zu behandeln. Ohne Dokumentation gilt im Zweifel: Ertrag." },
  ],
  zahlen: [
    { wert: "26,375 %", bedeutung: "Abgeltungsteuer plus Solidaritätszuschlag auf Leistungen der Stiftung an Begünstigte.", norm: "§ 32d EStG" },
  ],
  merksatz: "In der Stiftung bleibt das Geld günstig — teuer wird es erst auf dem Weg zur Familie.",
  gewicht: { mandat: 3, reichweite: 3 },
  antwortfreigabe: "abstrakt",
  stand: "2026-09-12",
  quellen: ["Q2 Besteuerung der Begünstigten, Organvergütungen und Sachleistungen, Schenkungsteuerliche Abgrenzung", "Q1 Abschn. 1"],
  verwandt: ["stiftung-laufende-steuer", "versorgungsstiftung", "stiftung-aufloesung"],
};
