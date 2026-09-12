/* Q9 · Kap. 2.3, 2.7 · BFH II R 17/23, II R 2/24 */
export default {
  id: "ertragswertverfahren-praxis",
  titel: "Warum 13,75 nicht die wichtigste Zahl ist",
  bereich: "bewertung",
  kurz: "Das vereinfachte Ertragswertverfahren multipliziert den nachhaltig erzielbaren Jahresertrag mit einem festen Faktor; gestritten wird fast nie über den Faktor, sondern über den Ertrag, der hineingeht.",
  normen: ["§ 200 BewG", "§ 201 BewG", "§ 202 BewG", "§ 203 BewG"],
  kern: [
    "Die Formel ist simpel: durchschnittlicher Jahresertrag der letzten drei Wirtschaftsjahre, bereinigt, abzüglich 30 Prozent pauschaler Ertragsteuer, multipliziert mit 13,75. Dazu kommen gesondert zu bewertende Posten.",
    "Die Arbeit steckt in der Bereinigung: Welche Erträge und Aufwendungen der Vergangenheit sagen etwas über die Zukunft — und welche nicht?",
    "Eine fremdübliche Geschäftsführungsvergütung ist anzusetzen, auch wenn die Familie bisher unentgeltlich mitgearbeitet hat. Wer das übersieht, bewertet einen Ertrag, den es so nicht gibt.",
    "Nicht betriebsnotwendiges Vermögen, bestimmte Beteiligungen und junge Einlagen werden getrennt bewertet und hinzugerechnet — doppelt oder gar nicht erfasst ist der häufigste Rechenfehler.",
    "Der Bundesfinanzhof hat 2026 den Maßstab für außerordentliche Aufwendungen geschärft: Entscheidend ist, ob der Aufwand den künftig nachhaltig erzielbaren Ertrag beeinflusst — nicht, ob er im gewöhnlichen Geschäftsbetrieb vorkommt. Rechtsgrund, Häufigkeit und Größenordnung sind zu würdigen.",
  ],
  mythos: {
    behauptung: "Ein schlechtes Jahr senkt den Unternehmenswert — also überträgt man nach einer Krise.",
    richtigstellung: "Nicht unbedingt. Ein einmaliger Aufwand — Rechtsstreit, Bußgeld, Sondereffekt — wird hinzugerechnet, wenn er die Zukunft nicht belastet. Die Krise kann den steuerlichen Wert sogar erhöhen.",
  },
  einsatzfelder: [
    { situation: "Das Unternehmen hatte im Vorjahr einen Sondereffekt — eine Abfindung, einen Prozess, eine Nachzahlung.", warum: "Ob der Aufwand herausgerechnet wird, entscheidet über den Wert. Die Begründung muss vorbereitet sein, nicht improvisiert." },
    { situation: "Der Seniorchef führt das Unternehmen für ein symbolisches Gehalt.", warum: "Der Ansatz eines fremdüblichen Unternehmerlohns senkt den Ertrag und damit den Wert — er muss belegt und nicht geschätzt werden." },
  ],
  beispiele: [
    { konstellation: "Bereinigte Jahreserträge nach Steuerabzug: 0,80 / 0,90 / 1,00 Mio. €. Daneben ein nicht betriebsnotwendiges Grundstück im Wert von 1,5 Mio. €.", gestaltung: "Durchschnitt 0,90 Mio. €, multipliziert mit 13,75 ergibt 12,375 Mio. €. Plus 1,5 Mio. € gesondert bewertetes Vermögen: 13,875 Mio. €.", pointe: "Das ist ein Steuerwert, kein Kaufpreis — Synergien, Finanzierung, Kontrollprämie und Nettoverschuldung kommen darin nicht vor. Vereinfachte Modellrechnung." },
  ],
  fehler: [
    { fehler: "Ein Sondereffekt aus einem der drei Basisjahre wird ungeprüft fortgeschrieben.", richtig: "Jedes Basisjahr gehört durchgesehen: Was war einmalig, was ist nachhaltig? Die Rechtsprechung fragt nach der Zukunft, nicht nach der Handelsbilanz.", norm: "§ 202 BewG" },
    { fehler: "Der Faktor wird als Verhandlungsgegenstand behandelt.", richtig: "Er ist gesetzlich festgeschrieben. Verhandelt wird über den Ertrag, über die Bereinigung und darüber, ob das Verfahren überhaupt passt.", norm: "§ 203 BewG" },
  ],
  zahlen: [
    { wert: "13,75", bedeutung: "Gesetzlicher Kapitalisierungsfaktor des vereinfachten Ertragswertverfahrens.", norm: "§ 203 BewG" },
    { wert: "30 %", bedeutung: "Pauschaler Ertragsteuerabzug vom Betriebsergebnis.", norm: "§ 202 Abs. 3 BewG" },
    { wert: "3 Jahre", bedeutung: "Zahl der Wirtschaftsjahre, aus denen der Durchschnittsertrag gebildet wird.", norm: "§ 201 Abs. 2 BewG" },
  ],
  merksatz: "Der Faktor steht im Gesetz — der Streit steht in der Gewinn- und Verlustrechnung.",
  gewicht: { mandat: 3, reichweite: 2 },
  antwortfreigabe: "keine",
  stand: "2026-09-13",
  quellen: ["Q9 Kap. 2.3, 2.7"],
  verwandt: ["bewertung-methodenrangfolge", "bewertungsanlass", "abfindungsklausel", "betriebsvermoegen-verschonung"],
};
