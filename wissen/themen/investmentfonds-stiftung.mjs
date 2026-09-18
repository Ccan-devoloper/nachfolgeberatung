/* Q2 · Laufende Besteuerung, Investmentfonds */
export default {
  id: "investmentfonds-stiftung",
  titel: "Fonds im Stiftungsdepot — ein eigenes Steuerregime",
  bereich: "ertragsteuer",
  kurz: "Hält die Stiftung Investmentfonds, gilt nicht das normale Kapitalertragsrecht, sondern das Investmentsteuerrecht — mit Vorabpauschale und Teilfreistellungen.",
  normen: ["§§ 16–20 InvStG", "§ 20 InvStG", "§ 8b KStG", "§ 20 EStG"],
  kern: [
    "Für Direktanlagen in Aktien und Anleihen gelten die gewohnten Regeln. Sobald Fondsanteile im Depot liegen, greift ein eigenes Gesetz.",
    "Steuerbar sind dort drei Dinge: die Ausschüttungen des Fonds, die sogenannte Vorabpauschale und der Gewinn aus der Veräusserung der Anteile.",
    "Die Vorabpauschale ist der unangenehme Teil: Sie wird besteuert, obwohl kein Geld geflossen ist — bei thesaurierenden Fonds fällt also Steuer an, ohne dass die Stiftung Liquidität erhält.",
    "Dem steht eine Entlastung gegenüber: Je nach Fondstyp bleibt ein Teil der Erträge von vornherein steuerfrei.",
    "Das Beteiligungsprivileg für Dividenden, das bei Direktbeteiligungen hilft, gilt für Fondsanlagen so nicht — die Teilfreistellung tritt an seine Stelle.",
    "Für ein gemischtes Depot heisst das: Direkt- und Fondsanlagen müssen getrennt gerechnet werden, bevor sich effektive Steuerquoten überhaupt vergleichen lassen.",
    "Und für die Liquiditätsplanung heisst es: Die Vorabpauschale gehört in denselben Kalender wie die Erbersatzsteuer und die Ausschüttungen an die Familie.",
  ],
  fehler: [
    { fehler: "Die Stiftung setzt auf thesaurierende Fonds, um Steuern zu verschieben.", richtig: "Die Vorabpauschale greift trotzdem. Ohne Ausschüttung muss die Steuer aus anderen Mitteln bezahlt werden.", norm: "§§ 16–20 InvStG" },
    { fehler: "Die erwartete Nettorendite wird für Direkt- und Fondsanlagen gleich gerechnet.", richtig: "Teilfreistellung, Vorabpauschale und das Beteiligungsprivileg führen zu spürbar unterschiedlichen Nettoergebnissen. Der Vergleich gehört vor die Anlageentscheidung.", norm: "§ 20 InvStG" },
  ],
  einsatzfelder: [
    { situation: "Eine Familienstiftung baut ein breit gestreutes Wertpapierdepot auf und steht vor der Wahl zwischen Direktanlagen, ETFs und aktiven Fonds.", warum: "Die Antwort hängt nicht nur an Kosten und Risiko, sondern an zwei Steuerregimen, die sich rechnerisch deutlich unterscheiden." },
  ],
  merksatz: "Im Stiftungsdepot entscheidet nicht nur, was gekauft wird, sondern in welcher Hülle — der Fonds bringt sein eigenes Steuerrecht mit.",
  gewicht: { mandat: 1, reichweite: 1 },
  antwortfreigabe: "keine",
  stand: "2026-09-18",
  quellen: ["Q2 Laufende Besteuerung, Investmentfonds"],
  verwandt: ["stiftung-laufende-steuer", "anlagerichtlinie-stiftung", "vermoegensverwaltung-stiftung", "erbersatzsteuer-liquiditaet"],
};
