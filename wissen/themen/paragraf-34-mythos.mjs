/* Q8 · Kap. 2.3 · Fehler 2 · Beck-Gegenprüfung 7.3 */
export default {
  id: "paragraf-34-mythos",
  titel: "„Firmenverkauf gleich halber Steuersatz\" — der teuerste Irrtum beim Exit",
  bereich: "unternehmensverkauf",
  kurz: "Der ermässigte Steuersatz für ausserordentliche Einkünfte ist kein allgemeiner Exit-Rabatt: Beim klassischen Verkauf einer GmbH-Beteiligung aus dem Privatvermögen greift er nicht — auch nicht, wenn es der einzige Verkauf im Leben ist.",
  normen: ["§ 34 Abs. 2 EStG", "§ 34 Abs. 3 EStG", "§ 16 Abs. 4 EStG", "§ 17 EStG"],
  kern: [
    "Das Gesetz zählt abschliessend auf, welche Veräusserungsgewinne begünstigt sind — erfasst sind insbesondere Gewinne aus der Veräusserung von Betrieben, Teilbetrieben und Mitunternehmeranteilen, nicht der gewöhnliche Gewinn aus dem privaten Verkauf einer wesentlichen GmbH-Beteiligung.",
    "Auch der vollständige Verkauf einer 100-Prozent-Beteiligung aus einem Betriebsvermögen wird nicht allein deshalb begünstigt: Der nach dem Teileinkünfteverfahren steuerpflichtige Teil ist ausdrücklich ausgenommen.",
    "Der ermässigte Durchschnittssteuersatz braucht einen Antrag, die Vollendung des 55. Lebensjahres oder dauernde Berufsunfähigkeit, gilt nur bis 5 Mio. € und beträgt 56 Prozent des durchschnittlichen Steuersatzes, mindestens 14 Prozent.",
    "Es gibt ihn nur einmal im Leben — wer ihn früh für einen kleinen Betriebsverkauf verbraucht, hat ihn beim grossen nicht mehr.",
    "Daneben steht der Freibetrag für Betriebsveräusserungen ab 55: 45.000 €, die ab einem Gewinn von 136.000 € abschmelzen und bei 181.000 € auf null sind — für grosse Exits ohne Bedeutung.",
  ],
  mythos: {
    behauptung: "Wer sein Lebenswerk verkauft, zahlt nur den halben Steuersatz — dafür gibt es ja die Regelung für ausserordentliche Einkünfte.",
    richtigstellung: "Nicht bei der GmbH im Privatvermögen: Dieser Gewinn steht gar nicht im Katalog der begünstigten Einkünfte. Und wo die Begünstigung greift, verlangt sie Antrag, Alter 55 und ist auf 5 Mio. € und einmal im Leben begrenzt.",
  },
  einsatzfelder: [
    { situation: "Ein 58-jähriger Einzelunternehmer verkauft seinen Betrieb im Ganzen.", warum: "Hier greifen Freibetrag und ermässigter Satz tatsächlich — aber nur auf Antrag und nur für diesen einen Vorgang im Leben." },
    { situation: "Ein Gesellschafter rechnet für seinen GmbH-Exit mit dem halben Steuersatz.", warum: "Die Rechnung ist falsch und meist um Millionen zu optimistisch — sie muss vor dem Letter of Intent korrigiert werden, nicht danach." },
  ],
  zahlen: [
    { wert: "5 Mio. €", bedeutung: "Höchstbetrag, bis zu dem der ermässigte Durchschnittssteuersatz gewährt wird.", norm: "§ 34 Abs. 3 S. 2 EStG" },
    { wert: "56 %", bedeutung: "Anteil des durchschnittlichen Steuersatzes, mindestens aber 14 Prozent.", norm: "§ 34 Abs. 3 S. 2 EStG" },
    { wert: "1×", bedeutung: "So oft im Leben gibt es die Begünstigung — und nur auf Antrag.", norm: "§ 34 Abs. 3 S. 4 EStG" },
    { wert: "55 Jahre", bedeutung: "Mindestalter, alternativ dauernde Berufsunfähigkeit.", norm: "§ 34 Abs. 3 S. 1 EStG" },
  ],
  fehler: [
    { fehler: "Die Kaufpreisverhandlung wird auf einer Nettorechnung mit halbem Steuersatz geführt.", richtig: "Erst die Halteebene prüfen, dann rechnen — sonst steht am Ende ein Preis, der die Steuer nicht trägt." },
    { fehler: "Die Begünstigung wird für einen kleinen Teilbetriebsverkauf mit 52 Jahren beantragt.", richtig: "Ohne Alter 55 gibt es sie ohnehin nicht — und mit 60 beim Hauptverkauf wäre sie erheblich mehr wert gewesen." },
  ],
  merksatz: "Den halben Steuersatz gibt es einmal im Leben, ab 55, auf Antrag, bis 5 Millionen — und für die GmbH im Privatvermögen gar nicht.",
  gewicht: { mandat: 3, reichweite: 3 },
  antwortfreigabe: "keine",
  stand: "2026-09-13",
  quellen: ["Q8 Kap. 2.3", "Q8 Fehler 2", "Q8 Kap. 7.3"],
  verwandt: ["exit-steuer-halteebene", "share-asset-deal", "holding-vor-dem-exit"],
};
