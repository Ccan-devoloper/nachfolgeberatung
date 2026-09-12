/* Q8 · Kap. 2.8 · Fall 10 · Fehler 6 */
export default {
  id: "verkauf-nach-schenkung",
  titel: "Erst geschenkt, dann verkauft — wenn die Behaltensfrist zurückschlägt",
  bereich: "unternehmensverkauf",
  kurz: "Wer ein verschontes Unternehmen innerhalb von fünf oder sieben Jahren verkauft, verliert die Verschonung anteilig rückwirkend — es sei denn, der Erlös wird binnen sechs Monaten begünstigt reinvestiert.",
  normen: ["§ 13a Abs. 6 ErbStG", "§ 13a Abs. 3 ErbStG", "§ 13a Abs. 10 ErbStG"],
  kern: [
    "Die Regelverschonung von 85 Prozent verlangt fünf Jahre Behaltenszeit, die Optionsverschonung von 100 Prozent sieben Jahre — verkauft der Erwerber vorher, entfällt die Verschonung zeitanteilig.",
    "Betroffen ist nicht nur der Verkauf: Auch Betriebsaufgabe, Verkauf wesentlicher Betriebsgrundlagen und Überentnahmen lösen die Nachsteuer aus.",
    "Es gibt eine Rettungsleine: Wird der Erlös innerhalb von sechs Monaten in begünstigtes Vermögen desselben Betriebs reinvestiert, bleibt die Verschonung erhalten — die Frist ist kurz und wird oft verpasst.",
    "Neben der Behaltensfrist läuft die Lohnsummenfrist mit denselben fünf oder sieben Jahren; ein Verkauf mit Personalabbau kann beide gleichzeitig reissen.",
    "Jeder Exit muss deshalb gegen die alten Schenkungs- und Erbschaftsteuerbescheide gespiegelt werden — die Nachsteuer trifft den Erwerber persönlich, nicht die Gesellschaft.",
  ],
  einsatzfelder: [
    { situation: "Ein Kind hat das Unternehmen vor drei Jahren mit 85 Prozent Verschonung erhalten und bekommt ein gutes Angebot.", warum: "Zwei Jahre Wartezeit können mehr wert sein als ein höherer Preis heute — die Rechnung muss vor der Verhandlung stehen." },
    { situation: "Der Käufer will nur einen Teilbetrieb.", warum: "Der Verkauf einer wesentlichen Betriebsgrundlage kann die Nachsteuer für den ganzen Erwerb auslösen — Zuschnitt und Zeitpunkt entscheiden." },
  ],
  beispiele: [
    { konstellation: "Eine Tochter hat vor drei Jahren Anteile im Wert von 12 Mio. € mit Regelverschonung erhalten. Jetzt verkauft sie.", gestaltung: "Drei von fünf Jahren sind abgelaufen: Zwei Fünftel der verschonten 85 Prozent werden nachversteuert. Bei einem Steuersatz von 19 Prozent sind das grob 780.000 € — fällig bei ihr persönlich.", pointe: "Zwei Jahre warten hätte 780.000 € gespart. Vereinfachte Modellrechnung — die konkrete Zahl hängt von Freibetrag, Vorerwerben und Struktur ab." },
  ],
  fehler: [
    { fehler: "Die erbschaftsteuerliche Behaltensfrist aus einer früheren Schenkung wird beim Exit übersehen.", richtig: "Die alten Bescheide gehören in jede Verkaufsprüfung — die Nachsteuer entsteht automatisch und trifft den Verkäufer.", norm: "§ 13a Abs. 6 ErbStG" },
    { fehler: "Die Reinvestitionsklausel wird erst nach dem Vollzug entdeckt.", richtig: "Sechs Monate, gerechnet ab der Veräusserung — und reinvestiert werden muss in begünstigtes Vermögen desselben Betriebs. Das gehört in den Zeitplan der Transaktion." },
  ],
  zahlen: [
    { wert: "5 / 7 Jahre", bedeutung: "Behaltens- und Lohnsummenfrist bei Regel- und Optionsverschonung.", norm: "§ 13a Abs. 3, 6 ErbStG" },
    { wert: "6 Monate", bedeutung: "Frist für die begünstigte Reinvestition des Veräusserungserlöses.", norm: "§ 13a Abs. 6 S. 3, 4 ErbStG" },
  ],
  merksatz: "Die Verschonung ist ein Kredit auf sieben Jahre gute Führung — der Verkauf davor ist die Rückzahlung.",
  gewicht: { mandat: 3, reichweite: 2 },
  antwortfreigabe: "keine",
  stand: "2026-09-13",
  quellen: ["Q8 Kap. 2.8", "Q8 Fall 10", "Q8 Fehler 6"],
  verwandt: ["betriebsvermoegen-verschonung", "exit-aus-der-stiftung", "exit-steuer-halteebene", "steuerklausel-schenkung"],
};
