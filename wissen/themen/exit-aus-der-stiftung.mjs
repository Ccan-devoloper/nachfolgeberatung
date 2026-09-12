/* Q6 · Exit-Besteuerung beim ungeplanten Unternehmensverkauf */
export default {
  id: "exit-aus-der-stiftung",
  titel: "Verkauf aus der Stiftung — warum die niedrigere Steuer der teurere Weg sein kann",
  bereich: "nachfolge",
  kurz: "Wird das Unternehmen aus einer Familienstiftung heraus verkauft, entscheidet nicht der Steuersatz, sondern auf welcher Ebene verkauft wird — die Behaltensfrist der Verschonung kostet mehr als jede Ertragsteuer.",
  normen: ["§ 8b KStG", "§ 13a Abs. 6 ErbStG", "§ 13a Abs. 3 ErbStG", "§ 28a ErbStG", "§ 2 Abs. 3 GewStG"],
  kern: [
    "Die Stiftung hält typischerweise eine Holding, die Holding hält die operativen Gesellschaften. Verkauft werden kann auf beiden Ebenen — und die Wahl ist die eigentliche Gestaltung.",
    "Verkauft die Stiftung ihre Holdinganteile, bleibt der Gewinn zu 95 Prozent körperschaftsteuerfrei; Gewerbesteuer fällt nicht an, weil die Stiftung nicht kraft Rechtsform gewerblich ist. Effektiv rund 0,8 Prozent.",
    "Verkauft die Holding ihre operativen Beteiligungen, sind es 95 Prozent frei von Körperschaft- und Gewerbesteuer — effektiv rund 1,6 Prozent. Doppelt so viel.",
    "Trotzdem ist der zweite Weg meist der günstigere: Beim Verkauf auf Stiftungsebene gibt die Stiftung begünstigtes Vermögen weg und verstösst gegen die Behaltensfrist — die Verschonung entfällt zumindest zeitanteilig.",
    "Beim Verkauf auf Holdingebene behält die Stiftung ihre Anteile. Die Holding wirkt als Blocker: Wird der Erlös dort bis zum Ablauf der Behaltensfrist thesauriert, bleibt die Verschonung unangetastet.",
    "Was sich nicht verhindern lässt, ist die Lohnsummenfrist — sind die operativen Gesellschaften verkauft, sammelt die Gruppe keine Lohnsummen mehr. Sind die Löhne seit Errichtung stetig gestiegen, ist ein grosser Teil der Zielsumme aber schon aufgelaufen.",
    "Anders als im Umwandlungssteuerrecht gibt es hier keine eigene Sperrfrist — die Bindung kommt allein aus dem Erbschaftsteuerrecht.",
  ],
  mythos: {
    behauptung: "Aus der Stiftung heraus verkaufen kostet fast keine Steuer — 0,8 Prozent.",
    richtigstellung: "Auf der Ertragsteuer stimmt das. Aber wer aus der Stiftung heraus verkauft, gibt das begünstigte Vermögen weg, gegen das die Verschonung gewährt wurde. Die Nachsteuer auf eine Verschonung im zweistelligen Millionenbereich übersteigt den Unterschied zwischen 0,8 und 1,6 Prozent um ein Vielfaches.",
  },
  gegenueberstellung: {
    links: {
      label: "Verkauf auf Stiftungsebene",
      punkte: [
        { krit: "Was verkauft wird", wert: "Die Anteile an der Holding" },
        { krit: "Ertragsteuer", wert: "Rund 0,8 % — keine Gewerbesteuer", norm: "§ 8b KStG" },
        { krit: "Behaltensfrist", wert: "Verstoss — Verschonung entfällt zeitanteilig", norm: "§ 13a Abs. 6 ErbStG" },
        { krit: "Lohnsummenfrist", wert: "Verstoss" },
      ],
    },
    rechts: {
      label: "Verkauf auf Holdingebene",
      punkte: [
        { krit: "Was verkauft wird", wert: "Die Anteile an den operativen Gesellschaften" },
        { krit: "Ertragsteuer", wert: "Rund 1,6 % — Körperschaft- und Gewerbesteuer", norm: "§ 8b KStG" },
        { krit: "Behaltensfrist", wert: "Kein Verstoss, wenn der Erlös in der Holding bleibt" },
        { krit: "Lohnsummenfrist", wert: "Verstoss — nicht vermeidbar" },
      ],
    },
  },
  einsatzfelder: [
    { situation: "Ein Unternehmen ist in eine Stiftung eingebracht, und ein Jahr später liegt ein Kaufangebot auf dem Tisch, mit dem niemand gerechnet hat.", warum: "Genau dafür ist die Zwischenholding da. Ohne sie steht die Stiftung vor der Wahl, das Angebot auszuschlagen oder die Verschonung zu verlieren." },
    { situation: "Die Stiftung soll errichtet werden, ein Verkauf ist aber nicht ausgeschlossen.", warum: "Die Holdingstruktur gehört dann vor die Stiftungserrichtung, nicht danach — sie lässt sich später nicht folgenlos einziehen." },
  ],
  beispiele: [
    { konstellation: "Eine Familienstiftung hält 100 Prozent einer Holding, diese hält die operativen Gesellschaften. Im vierten Jahr nach Errichtung kommt ein Angebot über einen hohen zweistelligen Millionenbetrag.", gestaltung: "Nicht die Stiftung verkauft ihre Holdinganteile, sondern die Holding verkauft die operativen Beteiligungen. Der Erlös bleibt bis zum Ablauf der siebenjährigen Behaltensfrist in der Holding und wird dort angelegt. Erst danach fliesst er weiter.", pointe: "Drei Jahre Geduld auf Holdingebene kosten weniger als der zeitanteilige Wegfall einer Verschonung, die das halbe Unternehmen ausmachte." },
  ],
  fehler: [
    { fehler: "Die Stiftung wird direkt mit den operativen Gesellschaften ausgestattet, ohne Holding dazwischen.", richtig: "Dann gibt es keine Ebene, auf der verkauft werden kann, ohne die Behaltensfrist zu verletzen. Die Zwischenholding ist beim Aufbau fast umsonst und später nicht mehr nachzuholen." },
    { fehler: "Der Veräusserungserlös wird nach dem Verkauf an die Stiftung ausgekehrt, weil dort die Ausschüttungen gebraucht werden.", richtig: "Der Blocker wirkt nur, solange der Erlös in der Holding bleibt. Die Ausschüttungsplanung der Stiftung muss die Behaltensfrist überbrücken können." },
  ],
  zahlen: [
    { wert: "0,8 % / 1,6 %", bedeutung: "Effektive Ertragsteuer beim Verkauf auf Stiftungs- gegenüber Holdingebene.", norm: "§ 8b KStG" },
    { wert: "5 bzw. 7 Jahre", bedeutung: "Behaltensfrist der Verschonung — Regel- oder Optionsverschonung.", norm: "§ 13a Abs. 6 ErbStG" },
  ],
  merksatz: "Beim Exit aus der Stiftung entscheidet nicht der Steuersatz, sondern die Ebene — und die legt man Jahre vorher fest.",
  gewicht: { mandat: 3, reichweite: 2 },
  antwortfreigabe: "keine",
  stand: "2026-09-12",
  quellen: ["Q6 Folie 10"],
  verwandt: ["betriebsvermoegen-verschonung", "grosserwerb-verschonungsbedarf", "unternehmensnachfolge-stiftung", "stiftung-laufende-steuer"],
};
