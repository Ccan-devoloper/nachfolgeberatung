/* Q7 · Kap. 26.1 · Fall 28.14 · Fehler 14 */
export default {
  id: "einstiegstest-90-prozent",
  titel: "Der 90-Prozent-Test — die Alles-oder-nichts-Schranke vor jeder Verschonung",
  bereich: "erbst",
  kurz: "Bevor über 85 % oder 100 % Verschonung geredet wird, muss das Unternehmen den Einstiegstest bestehen: Macht das Verwaltungsvermögen brutto 90 % oder mehr des Werts aus, gibt es gar keine Begünstigung — ein Rechenschritt entscheidet.",
  normen: ["§ 13b Abs. 2 S. 2 ErbStG", "§ 13b Abs. 4 ErbStG", "§ 13a ErbStG"],
  kern: [
    "Der Test rechnet brutto: Verwaltungsvermögen und Finanzmittel werden ohne Schuldenabzug dem Unternehmenswert gegenübergestellt — deshalb fallen gerade Handels- und Dienstleistungsunternehmen mit hohen Forderungen und Bankguthaben durch.",
    "Der Bundesfinanzhof hat 2023 für Handelsunternehmen korrigiert: Betrieblich veranlasste Schulden sind bei den Finanzmitteln abzuziehen — die Verwaltung wendet das inzwischen auf gewerbliche und freiberufliche Betriebe an.",
    "Der Test ist keine Quote, die man teilweise besteht: Wer durchfällt, verliert die gesamte Verschonung, auch für den operativen Teil.",
    "Er steht vor allen weiteren Wegen — Regelverschonung, Optionsverschonung, Abschmelzmodell, Verschonungsbedarfsprüfung — und muss deshalb vor jeder Modellrechnung separat gerechnet werden.",
    "Die Gefahr liegt im Stichtag: Ein Großauftrag mit hoher Anzahlung, ein Verkaufserlös auf dem Konto oder ein Immobilienkauf kurz vor der Übertragung kann das Verhältnis kippen.",
  ],
  einsatzfelder: [
    { situation: "Ein Handelsunternehmen mit hohem Warenlager und hohen Kundenforderungen soll übertragen werden.", warum: "Forderungen zählen als Finanzmittel; ohne Schuldenabzug kann das Unternehmen rechnerisch zum Verwaltungsvermögen werden." },
    { situation: "Nach dem Verkauf eines Geschäftsbereichs liegen 15 Mio. € auf dem Konto.", warum: "Bis das Geld reinvestiert ist, sollte nichts übertragen werden — der Stichtag entscheidet." },
  ],
  beispiele: [
    { konstellation: "Ein Großhändler (Unternehmenswert 20 Mio. €) hat 12 Mio. € Forderungen und Guthaben, 10 Mio. € Lieferantenverbindlichkeiten und ein Lager.", gestaltung: "Ohne Schuldenabzug lägen Finanzmittel und Verwaltungsvermögen weit über der Schwelle — keine Verschonung. Nach der BFH-Rechtsprechung werden die betrieblichen Schulden abgezogen: Der Test ist bestanden, die Verschonung offen.", pointe: "Ein einziger Rechenschritt entscheidet zwischen 0 % und 85 % Verschonung — auf 20 Mio. €." },
  ],
  fehler: [
    { fehler: "Der 90-Prozent-Test wird beim Schuldenabzug nach altem Verwaltungsverständnis gerechnet.", richtig: "Die Rechtsprechung von 2023 und die nachfolgende Verwaltungsauffassung erlauben den Abzug betrieblicher Schulden — wer das nicht kennt, verschenkt die Begünstigung.", norm: "§ 13b Abs. 2 S. 2 ErbStG" },
    { fehler: "Der Test wird als Teil der Verwaltungsvermögensquote mitgerechnet.", richtig: "Er ist eine eigene Vorprüfung mit eigener Rechenregel — erst danach kommt die Verschonung." },
  ],
  zahlen: [
    { wert: "90 %", bedeutung: "Ab dieser Bruttoquote an Verwaltungsvermögen gibt es keine Begünstigung — für nichts.", norm: "§ 13b Abs. 2 S. 2 ErbStG" },
  ],
  merksatz: "Der 90-Prozent-Test ist die Tür — wer nicht durchkommt, braucht sich den Raum dahinter nicht anzusehen.",
  gewicht: { mandat: 3, reichweite: 2 },
  antwortfreigabe: "keine",
  stand: "2026-09-12",
  quellen: ["Q7 Kap. 26.1", "Q7 Fall 28.14", "Q7 Fehler 14"],
  verwandt: ["betriebsvermoegen-verschonung", "immobilien-verwaltungsvermoegen", "steuerklausel-schenkung", "grosserwerb-verschonungsbedarf"],
};
