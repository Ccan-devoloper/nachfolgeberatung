/* Q5 Teil 5 · Stiftungsstandort Liechtenstein, Steuerrecht */
export default {
  id: "liechtenstein-besteuerung",
  titel: "12,5 Prozent — und die Falle im Sonderregime",
  bereich: "liechtenstein",
  kurz: "Liechtenstein besteuert Stiftungen mit 12,5 Prozent auf eine schmale Bemessungsgrundlage. Das günstigere Sonderregime für reine Vermögensverwaltung kostet allerdings den Abkommensschutz gegenüber Deutschland.",
  normen: ["Art. 10 Abs. 2 DBA-Liechtenstein", "§ 50d Abs. 3 EStG", "§ 15 AStG", "§ 8 Abs. 5 AStG"],
  kern: [
    "Die liechtensteinische Ertragsteuer beträgt 12,5 Prozent. Aus der Bemessungsgrundlage bleiben Dividenden, Gewinne aus der Veräusserung von Kapitalgesellschaftsanteilen und Grundstücken sowie ausländische Betriebsstättengewinne aussen vor.",
    "Hinzu kommt ein fiktiver Zinsabzug auf das Eigenkapital von vier Prozent — er senkt die effektive Belastung weiter.",
    "Das Sonderregime der Privatvermögensstruktur kostet nur eine Mindestertragssteuer von 1.800 Franken im Jahr. Voraussetzung: Die Stiftung ist rein privatnützig, verwaltet ausschliesslich Vermögen und hält nur Finanzinstrumente, liquide Mittel, Bankguthaben, alternative Anlagegegenstände und Beteiligungen ohne Kontrolle.",
    "Der Preis steht im Protokoll zum Doppelbesteuerungsabkommen: Eine Privatvermögensstruktur gilt nicht als in Liechtenstein ansässig. Damit entfällt der Abkommensschutz vollständig.",
    "Für eine Stiftung, die deutsche Dividenden bezieht, ist das teuer: Ohne Abkommen bleibt die deutsche Kapitalertragsteuer stehen, statt nach dem Schachtelprivileg auf null zu sinken.",
    "Die niedrige liechtensteinische Belastung hat noch eine zweite Seite. Der Reformentwurf zu § 15 AStG will die Zurechnung von einer Niedrigsteuergrenze abhängig machen — unter 15 Prozent Ertragsteuerbelastung wird zugerechnet.",
    "Liechtenstein liegt mit 12,5 Prozent unter dieser Grenze. Der Standortvorteil wäre damit zugleich das Tatbestandsmerkmal, das die Zurechnung auslöst.",
    "Für die deutsche Seite ändert das alles nichts an den Einkünften, die in Deutschland entstehen: Deutsche Mieten und deutsche Betriebsstättengewinne unterliegen der beschränkten Steuerpflicht, unabhängig vom liechtensteinischen Satz.",
  ],
  zahlen: [
    { wert: "12,5 %", bedeutung: "Liechtensteinische Ertragsteuer auf eine Bemessungsgrundlage ohne Dividenden und Veräusserungsgewinne." },
    { wert: "4 %", bedeutung: "Fiktiver Eigenkapitalzinsabzug — er senkt die Bemessungsgrundlage zusätzlich." },
    { wert: "1.800", bedeutung: "Franken Mindestertragssteuer im Sonderregime für Privatvermögensstrukturen — ohne Abkommensschutz." },
    { wert: "15 %", bedeutung: "Die Niedrigsteuergrenze, ab der nach dem Reformentwurf nicht mehr zugerechnet werden soll.", norm: "§ 8 Abs. 5 AStG" },
  ],
  fehler: [
    { fehler: "Die Stiftung wird als Privatvermögensstruktur aufgesetzt, weil 1.800 Franken günstiger klingen als 12,5 Prozent.", richtig: "Ohne Abkommensansässigkeit bleibt bei deutschen Dividenden die volle Kapitalertragsteuer hängen. Die Ersparnis bei der liechtensteinischen Steuer ist dann ein Vielfaches teurer." },
    { fehler: "Die niedrige Belastung wird als Argument für den Standort geführt.", richtig: "Sie ist eher ein Risiko: Genau die niedrige Belastung ist es, an die der Reformentwurf die Zurechnungsbesteuerung knüpfen will." },
  ],
  merksatz: "Das günstigste liechtensteinische Steuerregime ist für eine Stiftung mit deutschen Beteiligungen das teuerste.",
  gewicht: { mandat: 2, reichweite: 2 },
  antwortfreigabe: "keine",
  stand: "2026-09-18",
  quellen: ["Q5 Teil 5 Abschn. 2b, 3d", "Q4 Abschn. III.2"],
  verwandt: ["auslandsstiftung-quellensteuer", "astg-reform-motivtest", "liechtenstein-vorteile"],
};
