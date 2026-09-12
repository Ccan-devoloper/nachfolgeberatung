/* Q7 · Kap. 19, 21.1 · Fehler 22 */
export default {
  id: "nachfolgeklauseln-kg",
  titel: "Wer wird Gesellschafter, wenn der Gesellschafter stirbt? — die Nachfolgeklausel",
  bereich: "gesellschaftsrecht",
  kurz: "Bei Personengesellschaften entscheidet der Gesellschaftsvertrag, nicht das Testament, wer nach dem Tod Gesellschafter wird; Fortsetzungs-, Nachfolge- und Eintrittsklauseln haben völlig verschiedene Folgen für Familie, Abfindung und Steuer.",
  normen: ["§ 723 BGB", "§ 130 HGB", "§ 177 HGB", "§ 6 Abs. 3 EStG", "§ 13b ErbStG"],
  kern: [
    "Ohne Regelung scheidet der verstorbene Gesellschafter einer OHG oder GbR aus; die Erben bekommen eine Abfindung, nicht den Anteil. Beim Kommanditisten geht der Anteil dagegen von Gesetzes wegen auf die Erben über.",
    "Die Fortsetzungsklausel setzt die Gesellschaft unter den übrigen Gesellschaftern fort — die Familie erhält Geld statt Beteiligung, und die Gesellschaft muss die Abfindung aufbringen.",
    "Die einfache Nachfolgeklausel lässt alle Erben eintreten, die qualifizierte nur bestimmte — die übrigen Erben haben dann Ausgleichsansprüche gegen den Nachfolger, nicht gegen die Gesellschaft.",
    "Die Eintrittsklausel gibt dem Benannten ein Recht einzutreten, nicht die Pflicht — er kann sich entscheiden.",
    "Testament und Gesellschaftsvertrag müssen spiegelbildlich passen: Wer im Testament Nachfolger ist, aber nach Gesellschaftsvertrag nicht eintreten darf, bekommt eine Abfindung — oder nichts, wenn die Abfindung ausgeschlossen ist.",
  ],
  gegenueberstellung: {
    links: { label: "Fortsetzungsklausel", punkte: [
      { krit: "Wer wird Gesellschafter?", wert: "Niemand aus der Familie — die übrigen Gesellschafter setzen fort" },
      { krit: "Was bekommt die Familie?", wert: "Abfindung, soweit nicht ausgeschlossen" },
      { krit: "Steuer", wert: "Aufdeckung stiller Reserven beim Erblasser möglich; keine Verschonung des Anteils", norm: "§ 16 EStG" },
    ] },
    rechts: { label: "Qualifizierte Nachfolgeklausel", punkte: [
      { krit: "Wer wird Gesellschafter?", wert: "Nur der im Vertrag bestimmte Erbe" },
      { krit: "Was bekommt die Familie?", wert: "Die übrigen Erben haben Ausgleichsansprüche gegen den Nachfolger" },
      { krit: "Steuer", wert: "Buchwertfortführung und Verschonung möglich, wenn der Nachfolger auch Erbe ist", norm: "§ 6 Abs. 3 EStG" },
    ] },
  },
  einsatzfelder: [
    { situation: "Von drei Kindern soll nur eines das Unternehmen fortführen; alle drei sollen erben.", warum: "Die qualifizierte Nachfolgeklausel lässt nur das eine Kind eintreten — Testament und Ausgleichsregelung müssen dazu passen." },
    { situation: "Mehrere Familienstämme sind an einer KG beteiligt und wollen keinen Fremden in der Gesellschaft.", warum: "Die Nachfolgeklausel kann den Kreis auf Abkömmlinge beschränken; Ehegatten und Schwiegerkinder bleiben draußen." },
  ],
  beispiele: [
    { konstellation: "Ein Mitgesellschafter stirbt; sein Testament setzt die Ehefrau als Alleinerbin ein. Der Gesellschaftsvertrag lässt nur Abkömmlinge als Nachfolger zu.", gestaltung: "Die Ehefrau wird nicht Gesellschafterin. Sie erhält die Abfindung nach Gesellschaftsvertrag — dort steht: Buchwert, zahlbar in zehn Jahresraten ohne Zinsen.", pointe: "Das Testament war eindeutig, der Gesellschaftsvertrag auch — nur miteinander gesprochen hatten sie nie." },
  ],
  fehler: [
    { fehler: "Das Testament wird geändert, der Gesellschaftsvertrag nicht — oder umgekehrt.", richtig: "Beide Dokumente sind ein System; jede Änderung an einem verlangt den Abgleich mit dem anderen." },
    { fehler: "Die Abfindungsklausel wird nur steuerlich gedacht, um den Vorwegabschlag zu sichern.", richtig: "Eine Abfindung weit unter Wert kann gesellschaftsrechtlich unwirksam oder sittenwidrig sein — dann gilt der volle Verkehrswert, und die Liquiditätsplanung bricht.", norm: "§ 138 BGB" },
  ],
  merksatz: "Beim Tod des Gesellschafters gilt zuerst der Gesellschaftsvertrag — das Testament kommt erst danach zu Wort.",
  gewicht: { mandat: 3, reichweite: 2 },
  antwortfreigabe: "abstrakt",
  stand: "2026-09-12",
  quellen: ["Q7 Kap. 19", "Q7 Kap. 21.1", "Q7 Fehler 22, 32"],
  verwandt: ["unternehmertestament", "sonderbetriebsvermoegen", "vorwegabschlag-familienunternehmen", "dauertestamentsvollstreckung", "abfindungsklausel"],
};
