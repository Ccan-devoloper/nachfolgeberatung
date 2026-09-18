/* Q10 Abschn. F.2f · Steuerentstehungszeitpunkt */
export default {
  id: "stichtag-stiftungserrichtung",
  titel: "Bei der Stiftung von Todes wegen zählt nicht der Todestag",
  bereich: "erbst",
  kurz: "Zivilrechtlich gilt die Stiftung als vor dem Tod des Stifters entstanden. Steuerlich entsteht die Steuer erst mit ihrer Anerkennung — und in der Zeit dazwischen lässt sich das Vermögen noch umschichten.",
  normen: ["§ 9 Abs. 1 Nr. 1 ErbStG", "§ 9 Abs. 1 Nr. 2 ErbStG", "§ 11 ErbStG", "§ 80 Abs. 2 S. 2 BGB", "§ 12 ErbStG"],
  kern: [
    "Die Erbschaftsteuer folgt dem Stichtagsprinzip: Bewertung und Steuerbefreiungen richten sich nach den Verhältnissen im Zeitpunkt der Steuerentstehung.",
    "Bei der Errichtung unter Lebenden entsteht die Steuer mit Ausführung der Zuwendung. Mit der Anerkennung ist der Stifter verpflichtet, das zugesagte Vermögen zu übertragen.",
    "Bei der Stiftung von Todes wegen läuft Zivilrecht und Steuerrecht auseinander. Zivilrechtlich gilt die Stiftung für die Zuwendungen des Stifters als schon vor dessen Tod entstanden — damit kann sie überhaupt erben.",
    "Steuerlich entsteht die Steuer dagegen erst mit der Anerkennung der Stiftung als rechtsfähig. Zwischen Tod und Anerkennung liegen regelmässig Monate.",
    "Daraus folgt eine Gestaltungsmöglichkeit, die selten genutzt wird: In diesem Zeitfenster lässt sich das künftige Stiftungsvermögen umschichten — vorausgesetzt, der Testamentsvollstrecker ist dazu ermächtigt.",
    "Wer Geld hinterlässt und daraus vor der Anerkennung eine unternehmerische Beteiligung erwerben lässt, kann der Stiftung begünstigungsfähiges Vermögen zuwenden statt schlicht Kapital.",
    "Die Grenze zieht die Finanzverwaltung mit Rückhalt in der Rechtsprechung: Der Erblasser muss schon selbst begünstigungsfähiges Vermögen gehabt haben. Aus Bargeld wird auf diesem Weg kein Betriebsvermögen.",
    "Die Ermächtigung des Testamentsvollstreckers gehört deshalb ins Testament, und die Grenze gehört mitbedacht — sonst ist das Fenster zwar offen, aber nutzlos.",
  ],
  fehler: [
    { fehler: "Das Testament ordnet die Stiftung an, sagt zur Verwaltung bis zur Anerkennung aber nichts.", richtig: "Dann kann niemand in diesem Zeitfenster handeln. Die Befugnisse des Testamentsvollstreckers gehören ausdrücklich geregelt." },
    { fehler: "Es wird darauf gesetzt, dass aus Geldvermögen durch geschickten Einkauf begünstigtes Vermögen wird.", richtig: "Die Verwaltung verlangt, dass der Erblasser selbst begünstigungsfähiges Vermögen hatte. Die Umschichtung verbessert die Struktur, sie erschafft keine Begünstigung." },
  ],
  beispiele: [
    { konstellation: "Ein Erblasser hinterlässt einen erheblichen Geldbetrag und ordnet im Testament eine Stiftung von Todes wegen an.", gestaltung: "Der Testamentsvollstrecker ist ermächtigt, das Vermögen zu investieren; er erwirbt vor der Anerkennung eine Beteiligung an einer operativ tätigen Gesellschaft.", pointe: "Bei Anerkennung geht eine Beteiligung auf die Stiftung über, nicht Bargeld. Ob die Verschonung greift, entscheidet sich aber daran, was der Erblasser hatte — nicht daran, was der Testamentsvollstrecker gekauft hat." },
  ],
  zahlen: [
    { wert: "Anerkennung", bedeutung: "Nicht der Todestag — dieser Zeitpunkt bestimmt Bewertung und Befreiungen bei der Stiftung von Todes wegen.", norm: "§ 9 Abs. 1 Nr. 1 ErbStG" },
  ],
  merksatz: "Zwischen Tod und Anerkennung liegt ein Fenster, das die meisten Testamente ungenutzt lassen.",
  gewicht: { mandat: 2, reichweite: 2 },
  antwortfreigabe: "keine",
  stand: "2026-09-18",
  quellen: ["Q10 Abschn. F.2f"],
  verwandt: ["stiftung-von-todes-wegen", "betriebsvermoegen-verschonung", "unternehmertestament", "dauertestamentsvollstreckung"],
};
