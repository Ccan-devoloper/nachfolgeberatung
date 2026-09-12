/* Q9 · Kap. 2.2, 2.4 · Beispiel 1 */
export default {
  id: "bewertung-methodenrangfolge",
  titel: "Ein echter Verkauf schlägt jede Rechenformel",
  bereich: "bewertung",
  kurz: "Das Bewertungsgesetz fragt zuerst nach Verkäufen unter fremden Dritten im letzten Jahr; erst wenn es keine gibt, kommen Ertragsmethoden — und erst dort greift der Substanzwert als Untergrenze.",
  normen: ["§ 11 Abs. 2 BewG", "§ 199 BewG", "§ 11 Abs. 2 S. 3 BewG"],
  kern: [
    "Schritt eins: Gab es innerhalb eines Jahres vor dem Stichtag Verkäufe unter fremden Dritten? Dann wird der gemeine Wert daraus abgeleitet — punkt.",
    "Schritt zwei: Nur wenn das ausscheidet, wird nach Ertragsaussichten oder einer anderen anerkannten, auch nicht steuerlichen Methode bewertet. Das vereinfachte Ertragswertverfahren ist eine Möglichkeit in diesem zweiten Pfad, nicht der gesetzliche Regelfall.",
    "Der Bundesfinanzhof hat 2024 klargestellt: Wird der Wert aus zeitnahen Fremdverkäufen abgeleitet, wird er nicht durch einen höheren Substanzwert nach oben korrigiert — die Substanzwertschranke gilt nur im zweiten Pfad.",
    "Der Fremdverkauf muss allerdings echt sein: Ein seit Jahren mechanisch fortgeschriebener Festpreis unter Gesellschaftern trägt eine solche Ableitung nicht.",
    "Der Substanzwert ist kein Liquidationswert: Er rechnet die gemeinen Werte aller betrieblichen Wirtschaftsgüter zusammen und zieht Schulden ab — bei Immobilien, Beteiligungen und stillen Reserven weicht er stark von den Buchwerten ab.",
  ],
  einsatzfelder: [
    { situation: "Ein Unternehmen mit schwankenden Gewinnen, aber wertvollem Betriebsgrundstück soll übertragen werden.", warum: "Nach dem Ertragswert wäre der Wert niedrig, der Substanzwert zieht ihn hoch — es sei denn, ein echter Anteilsverkauf kurz vorher liefert den Maßstab." },
    { situation: "Sechs Monate vor der Schenkung sind 10 Prozent an einen externen Manager gegangen.", warum: "Dieser Verkauf kann die gesamte Bewertung bestimmen — Preisverhandlung, Nebenabreden und Informationsstand des Käufers gehören deshalb gesichert." },
  ],
  beispiele: [
    { konstellation: "Eine GmbH mit schwankenden Erträgen und einem Betriebsgrundstück mit hohen stillen Reserven. Sechs Monate vor dem Stichtag kaufte ein externer Manager 10 Prozent zu einem verhandelten Preis.", gestaltung: "Ist dieser Verkauf ein belastbarer Fremdvergleich, wird der Wert daraus abgeleitet — und der höhere Substanzwert setzt ihn nicht außer Kraft. War der Preis dagegen durch Sonderbedingungen geprägt, scheidet er als Maßstab aus.", pointe: "Ein Verkauf von zehn Prozent kann über die Bewertung der übrigen neunzig entscheiden." },
  ],
  fehler: [
    { fehler: "Die Bewertung beginnt mit einer Substanzwertrechnung.", richtig: "Zuerst klären, auf welchem Bewertungsweg man ist — der Substanzwert ist Untergrenze nur im ertragsorientierten Pfad.", norm: "§ 11 Abs. 2 S. 3 BewG" },
    { fehler: "Das vereinfachte Ertragswertverfahren wird als „der gesetzliche Unternehmenswert\" bezeichnet.", richtig: "Es ist ein Wahlrecht im zweiten Pfad — und nur anwendbar, wenn es nicht zu offensichtlich unzutreffenden Ergebnissen führt.", norm: "§ 199 BewG" },
  ],
  merksatz: "Erst der echte Verkauf, dann die Methode, dann der Substanzwert — in dieser Reihenfolge.",
  gewicht: { mandat: 3, reichweite: 2 },
  antwortfreigabe: "keine",
  stand: "2026-09-13",
  quellen: ["Q9 Kap. 2.2, 2.4", "Q9 Beispiel 1"],
  verwandt: ["bewertungsanlass", "ertragswertverfahren-praxis", "einstiegstest-90-prozent"],
};
