/* Q1 · Stiftungsgeschäft von Todes wegen */
export default {
  id: "stiftung-von-todes-wegen",
  titel: "Stiftung per Testament — bequem, aber teuer erkauft",
  bereich: "erbrecht",
  kurz: "Wer die Stiftung erst mit dem Tod entstehen lässt, muss zu Lebzeiten nichts hergeben — verliert aber jede Mitwirkung im Anerkennungsverfahren und den Schutz der Zehnjahresfrist gegen Pflichtteile.",
  normen: ["§ 80 Abs. 2 S. 2 BGB", "§ 81 Abs. 2 BGB", "§§ 2247, 2267 BGB", "§ 3 Abs. 2 Nr. 1 ErbStG"],
  kern: [
    "Die Stiftung kann durch Testament, Erbvertrag oder gemeinschaftliches Testament errichtet werden; sie wird dann Erbin, Ersatzerbin oder Schlusserbin.",
    "Der Stifter muss zu Lebzeiten kein Vermögen übertragen und behält bis zum Tod die volle Verfügung.",
    "Der Preis: Während des Anerkennungsverfahrens kann er nicht mehr mitwirken; ein Testamentsvollstrecker sollte Organe benennen und die Satzung durchsetzen.",
    "Pflichtteils- und Pflichtteilsergänzungsansprüche treffen die Stiftung ungebremst — die Abschmelzung über zehn Jahre gibt es nur bei lebzeitiger Dotation.",
    "Eine Eigenheit: Die Steuer entsteht nicht mit dem Tod, sondern mit der Anerkennung der Stiftung — und bis dahin kann ein dazu ermächtigter Testamentsvollstrecker das Vermögen umschichten. Ein Poolvertrag, der vor der Anerkennung geschlossen wird, macht aus Verwaltungsvermögen begünstigtes Vermögen; Geld in eine begünstigte Beteiligung zu investieren funktioniert dagegen nach Finanzverwaltung und BFH nur, wenn der Erblasser selbst schon begünstigungsfähiges Vermögen hatte.",
    "Erbschaftsteuerlich ist der Übergang ein Erwerb von Todes wegen; das Steuerklassenprivileg gilt auch hier.",
  ],
  gegenueberstellung: {
    links: {
      label: "Zu Lebzeiten",
      punkte: [
        { krit: "Verfügung über das Vermögen", wert: "Endet mit der Übertragung" },
        { krit: "Mitwirkung bei der Anerkennung", wert: "Der Stifter verhandelt selbst mit der Behörde" },
        { krit: "Pflichtteilsergänzung", wert: "Schmilzt über zehn Jahre ab", norm: "§ 2325 Abs. 3 BGB" },
        { krit: "Anfechtung und Zugewinn", wert: "Fristen laufen ab Übertragung" },
      ],
    },
    rechts: {
      label: "Von Todes wegen",
      punkte: [
        { krit: "Verfügung über das Vermögen", wert: "Bleibt bis zum Tod beim Stifter" },
        { krit: "Mitwirkung bei der Anerkennung", wert: "Nur über Testamentsvollstrecker und Satzung" },
        { krit: "Pflichtteilsergänzung", wert: "Voller Nachlass, keine Abschmelzung", norm: "§ 2303 BGB" },
        { krit: "Anfechtung und Zugewinn", wert: "Entfällt — aber Pflichtteil in voller Höhe" },
      ],
    },
  },
  einsatzfelder: [
    { situation: "Ein Ehepaar will sich gegenseitig absichern und erst nach dem Tod des Längerlebenden binden.", warum: "Gemeinschaftliches Testament mit der Stiftung als Schlusserbin — der Überlebende bleibt frei, danach greift die Ordnung." },
  ],
  fehler: [
    { fehler: "Die testamentarische Stiftung wird gewählt, um sich Pflichtteile zu sparen.", richtig: "Sie erhöht das Pflichtteilsrisiko, statt es zu senken. Wer Pflichtteile begrenzen will, muss zu Lebzeiten stiften oder Verzichte einholen." },
    { fehler: "Kein Testamentsvollstrecker wird bestellt.", richtig: "Dann gibt es niemanden, der die Organe besetzt und die Anerkennung betreibt. Die Stiftung kann im Verfahren stecken bleiben." },
  ],
  merksatz: "Die Stiftung per Testament spart dem Stifter das Loslassen — und kostet die Stiftung den Pflichtteilsschutz.",
  gewicht: { mandat: 2, reichweite: 2 },
  antwortfreigabe: "abstrakt",
  stand: "2026-09-12",
  quellen: ["Q1 Abschn. 4.1.1 (b)", "Q2 Erbschaft- und schenkungsteuerlicher Ausgangspunkt"],
  verwandt: ["stiftung-errichtung-ablauf", "pflichtteil-stiftung"],
};
