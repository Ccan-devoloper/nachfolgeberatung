/* Q5 Teil 5 · Steuerliche Hürden bei Auslandsstiftungen */
export default {
  id: "auslandsstiftung-huerden",
  titel: "Vier Hürden auf dem Weg ins Ausland — und was gegen jede hilft",
  bereich: "liechtenstein",
  kurz: "Zwischen dem deutschen Vermögen und der ausländischen Stiftung stehen vier Steuerfolgen: Erbschaftsteuer in der ungünstigsten Klasse, Wegzugsteuer, Zurechnungsbesteuerung und der Verlust der Quellensteuerentlastung.",
  normen: ["§ 15 Abs. 1 ErbStG", "§ 6 AStG", "§ 15 Abs. 6 AStG", "§ 50d Abs. 3 EStG", "§§ 13a, 13b ErbStG"],
  kern: [
    "Hürde eins, die Übertragung selbst: Sie löst Schenkungsteuer aus. Das Steuerklassenprivileg, das bei der deutschen Familienstiftung auf den entferntest Berechtigten abstellt, gilt für ausländische Stiftungen nicht — es bleibt bei Steuerklasse III.",
    "Steuerklasse III bedeutet 30 Prozent bis zu einem Erwerb von sechs Millionen Euro und darüber 50 Prozent. Der Unterschied zur Klasse I ist der grösste Einzelposten der ganzen Struktur.",
    "Der Europäische Gerichtshof hat die Beschränkung 2025 im Grundsatz gebilligt: Sie ist kohärent, weil ausländische Stiftungen im Gegenzug nicht der Erbersatzsteuer unterliegen. Endgültig entschieden ist die Sache aber nicht — das vorlegende Gericht prüft die Verhältnismässigkeit im engeren Sinne noch.",
    "Gegenmittel: begünstigtes Betriebsvermögen übertragen, dessen Verschonung auch hier gilt — oder statt zu übertragen zu verkaufen.",
    "Hürde zwei, die Wegzugsteuer: Wer Anteile an einer Kapitalgesellschaft unentgeltlich auf eine nicht unbeschränkt steuerpflichtige Empfängerin überträgt, deckt die stillen Reserven fiktiv auf. Vorausgesetzt sind sieben Jahre unbeschränkte Steuerpflicht innerhalb der letzten zwölf.",
    "Gegenmittel: die Anteile in Betriebsvermögen einlegen, eine gewerbliche Personengesellschaft zwischenschalten oder den Verkauf statt der Schenkung wählen.",
    "Hürde drei, die Zurechnungsbesteuerung: Die Einkünfte der Stiftung werden dem Stifter zugerechnet, ohne dass Geld fliesst. Gegenmittel ist der Entlastungsbeweis — echter Kontrollverzicht.",
    "Hürde vier, die Quellensteuer: Das Abkommen sieht für Dividenden eine vollständige Entlastung vor, die deutsche Missbrauchsvorschrift ist inzwischen aber ausdrücklich auf Stiftungen erstreckt. Die Entlastung ist damit nicht mehr sicher.",
  ],
  gegenueberstellung: {
    links: {
      label: "Die Hürde",
      punkte: [
        { krit: "Übertragung", wert: "Schenkungsteuer in Klasse III", norm: "§ 15 Abs. 1 ErbStG" },
        { krit: "Kapitalgesellschaftsanteile", wert: "Wegzugsteuer auf die stillen Reserven", norm: "§ 6 AStG" },
        { krit: "Laufende Erträge", wert: "Zurechnung beim Stifter ohne Zufluss", norm: "§ 15 Abs. 1 AStG" },
        { krit: "Deutsche Dividenden", wert: "Quellensteuer wird womöglich nicht erstattet", norm: "§ 50d Abs. 3 EStG" },
      ],
    },
    rechts: {
      label: "Der Weg darüber",
      punkte: [
        { krit: "Übertragung", wert: "Begünstigtes Betriebsvermögen oder Verkauf statt Schenkung", norm: "§§ 13a, 13b ErbStG" },
        { krit: "Kapitalgesellschaftsanteile", wert: "Einlage ins Betriebsvermögen oder gewerbliche Personengesellschaft" },
        { krit: "Laufende Erträge", wert: "Entlastungsbeweis durch echten Kontrollverzicht", norm: "§ 15 Abs. 6 AStG" },
        { krit: "Deutsche Dividenden", wert: "Beteiligung über eine originär gewerbliche Personengesellschaft halten" },
      ],
    },
  },
  einsatzfelder: [
    { situation: "Das Vermögen besteht überwiegend aus begünstigtem Betriebsvermögen.", warum: "Dann fällt die erste Hürde weitgehend weg — die Verschonung gilt auch bei Übertragung auf eine ausländische Stiftung." },
    { situation: "Das Vermögen liegt in Wertpapieren und Auslandsimmobilien, die Familie lebt verteilt.", warum: "Hier sind Wegzugsteuer und Quellensteuerproblem kaum relevant; die Struktur trägt." },
  ],
  fehler: [
    { fehler: "Die Struktur wird gerechnet, ohne die Erbschaftsteuer beim Weg hinein anzusetzen.", richtig: "Klasse III auf das gesamte übertragene Vermögen ist meist der grösste Einzelbetrag der ganzen Gestaltung — er gehört an den Anfang der Rechnung, nicht ans Ende." },
  ],
  merksatz: "Der Weg in die ausländische Stiftung kostet einmal viel — die Frage ist nur, ob das, was sie leistet, mehr wert ist.",
  gewicht: { mandat: 3, reichweite: 3 },
  antwortfreigabe: "keine",
  stand: "2026-09-18",
  quellen: ["Q5 Teil 5 Abschn. 3a, 3c", "Q4 Abschn. I"],
  verwandt: ["liechtenstein-vorteile", "steuerklassenprivileg", "auslandsstiftung-quellensteuer", "liechtenstein-zurechnung"],
};
