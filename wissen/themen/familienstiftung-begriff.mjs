/* Q6 · Begriff der Familienstiftung, R E 1.2 ErbStR 2019; Stiftungsaufsicht je Bundesland */
export default {
  id: "familienstiftung-begriff",
  titel: "Wann ist eine Stiftung eine Familienstiftung — und warum das über alles entscheidet",
  bereich: "stiftungsrecht",
  kurz: "„Familienstiftung\" ist kein einheitlicher Rechtsbegriff; ob eine Stiftung als solche gilt, entscheidet über Erbersatzsteuer, Steuerklassenprivileg und Zurechnungsbesteuerung — und hängt an Prozentsätzen in der Satzung.",
  normen: ["§ 1 Abs. 1 Nr. 4 ErbStG", "§ 15 Abs. 2 S. 1 ErbStG", "§ 15 Abs. 2 AStG", "R E 1.2 ErbStR 2019"],
  kern: [
    "Es gibt keine einheitliche Legaldefinition: Erbschaftsteuerrecht, Aussensteuerrecht und die Landesstiftungsgesetze meinen jeweils etwas anderes.",
    "Das Erbschaftsteuerrecht verlangt, dass die Stiftung „wesentlich im Interesse einer Familie\" errichtet ist — die Finanzverwaltung liest das quantitativ: ab der Hälfte Bezugs- oder Anfallsberechtigung, oder ab einem Viertel plus einem Sondermerkmal wie wesentlichem Einfluss auf die Geschäftsführung.",
    "Das Aussensteuerrecht hat eine eigene Definition: mehr als die Hälfte bezugs- oder anfallsberechtigt — und einen anderen Personenkreis.",
    "An dieser Einordnung hängt fast alles: die Erbersatzsteuer alle 30 Jahre, das Steuerklassenprivileg bei Errichtung, und bei Auslandsbezug die Zurechnungsbesteuerung.",
    "Eine Stiftung kann also Vermögen einer Familie halten, ohne im Rechtssinn Familienstiftung zu sein — und umgekehrt eine werden, ohne dass jemand es beabsichtigt hat.",
    "Die Stiftungsaufsicht ist nicht überall gleich streng: Für Familienstiftungen ist sie in mehreren Bundesländern deutlich zurückgenommen — das macht den Sitz zu einem Gestaltungsparameter.",
  ],
  einsatzfelder: [
    { situation: "Eine Stiftung soll überwiegend gemeinnützig wirken, die Familie aber mit einem Anteil bedacht werden.", warum: "Ab welcher Quote die Stiftung zur Familienstiftung kippt, entscheidet über die Erbersatzsteuer — das gehört vor die Satzungsformulierung, nicht danach." },
    { situation: "Der Sitz der Stiftung ist noch offen.", warum: "Anerkennungspraxis und Aufsichtsdichte unterscheiden sich erheblich; bei Familienstiftungen ist die Aufsicht in einigen Ländern spürbar reduziert." },
  ],
  fehler: [
    { fehler: "Der Destinatärskreis wird per Satzungsänderung erweitert, ohne die Folgen zu prüfen.", richtig: "Ändert sich dadurch der Charakter der Stiftung, behandelt die Finanzverwaltung das wie die Errichtung einer neuen Familienstiftung — mit Schenkungsteuer auf das gesamte Vermögen.", norm: "§ 7 Abs. 1 Nr. 8 ErbStG" },
    { fehler: "Man verlässt sich darauf, dass „Familienstiftung\" überall dasselbe bedeutet.", richtig: "Drei Rechtsgebiete, drei Definitionen. Eine Stiftung kann erbschaftsteuerlich Familienstiftung sein und aussensteuerlich nicht — oder umgekehrt." },
  ],
  zahlen: [
    { wert: "50 % / 25 %", bedeutung: "Die Schwellen der Finanzverwaltung: ab der Hälfte Berechtigung, oder ab einem Viertel plus Sondermerkmal.", norm: "R E 1.2 ErbStR 2019" },
  ],
  merksatz: "Ob eine Stiftung Familienstiftung ist, steht nicht im Namen — es steht in den Prozentsätzen der Satzung.",
  gewicht: { mandat: 3, reichweite: 1 },
  antwortfreigabe: "abstrakt",
  stand: "2026-09-12",
  quellen: ["Q6 Folie 4", "Q5 Folie 15"],
  verwandt: ["erbersatzsteuer", "steuerklassenprivileg", "liechtenstein-zurechnung", "satzungsaenderung-reform"],
};
