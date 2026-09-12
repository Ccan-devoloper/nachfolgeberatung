/* Q1 · Familienrecht, Zugewinnausgleich */
export default {
  id: "zugewinn-stiftung",
  titel: "Zugewinnausgleich — die Grenze, die nicht abschmilzt",
  bereich: "erbrecht",
  kurz: "Wer in Zugewinngemeinschaft lebt und Vermögen auf eine Stiftung überträgt, muss es bei einer Scheidung zehn Jahre lang voll gegen sich rechnen lassen — es sei denn, der Ehegatte war einverstanden.",
  normen: ["§ 1372 BGB", "§ 1375 Abs. 2 S. 1 Nr. 1 BGB", "§ 1375 Abs. 3 BGB", "§ 1378 Abs. 1 BGB"],
  kern: [
    "Endet die Zugewinngemeinschaft, steht dem Ehegatten mit dem geringeren Zugewinn die Hälfte des Überschusses zu.",
    "Unentgeltliche Zuwendungen, die nicht einer sittlichen Pflicht entsprechen, werden dem Endvermögen des Zuwendenden hinzugerechnet — die Erstausstattung einer Stiftung und jede Zustiftung eingeschlossen.",
    "Anders als beim Pflichtteil gibt es keine Abschmelzung: Zehn Jahre lang zählt der volle Wert.",
    "Zwei Auswege: Die Zuwendung liegt mindestens zehn Jahre zurück, oder der andere Ehegatte war mit ihr einverstanden.",
    "Praktisch heisst das: Stiftung gemeinsam errichten oder die ausdrückliche Zustimmung des Ehegatten einholen — und beides hat auch schenkungsteuerlich Vorteile, weil zwei Stifter zwei Freibeträge bringen.",
  ],
  mythos: {
    behauptung: "Was in der Stiftung ist, ist aus der Scheidung raus.",
    richtigstellung: "Kurzfristig nicht. Das Gesetz rechnet die Zuwendung dem Endvermögen zu, als wäre sie nie geschehen — zehn Jahre lang, ohne Abschmelzung. Die Stiftung schützt gegen die Scheidung der Kinder, nicht ohne Weiteres gegen die eigene.",
  },
  einsatzfelder: [
    { situation: "Ein Ehepaar will das Familienvermögen für die Kinder binden.", warum: "Errichten beide gemeinsam, gibt es keinen Ausgleichskonflikt zwischen ihnen und doppelte Freibeträge bei der Schenkungsteuer." },
    { situation: "Ein Stifter lebt in zweiter Ehe und will Vermögen aus erster Ehe der eigenen Linie sichern.", warum: "Ohne Zustimmung des Ehegatten oder Ehevertrag bleibt die Dotation zehn Jahre lang im Ausgleich — hier gehören Ehevertrag und Stiftung zusammen." },
  ],
  fehler: [
    { fehler: "Die Stiftung wird allein und ohne Wissen des Ehegatten errichtet, um Vermögen 'zu sichern'.", richtig: "Genau das löst die Hinzurechnung aus. Einverständnis des Ehegatten vermeidet sie — und ist ohnehin die Grundlage, auf der eine Familienstiftung Bestand hat.", norm: "§ 1375 Abs. 3 BGB" },
  ],
  zahlen: [
    { wert: "0 %", bedeutung: "So viel schmilzt beim Zugewinn ab. Zehn Jahre voller Wert — anders als beim Pflichtteil." },
  ],
  merksatz: "Beim Pflichtteil arbeitet die Zeit für den Stifter, beim Zugewinn nur das Einverständnis.",
  gewicht: { mandat: 2, reichweite: 3 },
  antwortfreigabe: "abstrakt",
  stand: "2026-09-12",
  quellen: ["Q1 Abschn. 3.2.1"],
  verwandt: ["vermoegensschutz-grenzen", "pflichtteil-stiftung", "steuerklassenprivileg"],
};
