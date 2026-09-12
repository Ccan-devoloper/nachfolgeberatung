/* Q2 · Laufende Besteuerung, § 8b KStG, Streubesitz, Immobilien */
export default {
  id: "stiftung-laufende-steuer",
  titel: "Was die Stiftung laufend zahlt — und warum sie keine GmbH ist",
  bereich: "ertragsteuer",
  kurz: "Die Familienstiftung zahlt Körperschaftsteuer wie eine GmbH, behält aber die privaten Einkunftsarten: Immobilien nach zehn Jahren steuerfrei verkaufen, Beteiligungserträge zu 95 Prozent frei — und Leistungen an die Familie mindern nichts.",
  normen: ["§ 1 Abs. 1 Nr. 4 KStG", "§ 8 Abs. 1, 2 KStG", "§ 8b KStG", "§ 10 Nr. 1 KStG", "§ 23 EStG", "§ 2 GewStG"],
  kern: [
    "Die Stiftung ist unbeschränkt körperschaftsteuerpflichtig — 15 Prozent plus Solidaritätszuschlag, ab 2028 stufenweise sinkend auf 10 Prozent bis 2032.",
    "Anders als die GmbH fällt sie nicht unter die Gewerblichkeitsfiktion: Mieten bleiben Vermietungseinkünfte, Kapitalerträge bleiben Kapitalerträge, und ein Gewerbebetrieb infiziert nicht das übrige Vermögen.",
    "Deshalb kann die vermögensverwaltende Stiftung Immobilien nach Ablauf der Zehnjahresfrist steuerfrei veräussern — eine GmbH kann das nie.",
    "Gewerbesteuer fällt nur an, wo ein Gewerbebetrieb ist; das Halten von Beteiligungen und die Vermietung eigenen Grundbesitzes genügen nicht.",
    "Beteiligungserträge: Veräusserungsgewinne aus Kapitalgesellschaftsanteilen zu 95 Prozent frei; Dividenden nur ab 10 Prozent Beteiligung.",
    "Leistungen an Begünstigte sind Einkommensverwendung, keine Betriebsausgaben — die Stiftung wird nicht dadurch entlastet, dass sie ausschüttet. Fremdübliche Vergütungen für echte Tätigkeit dagegen schon.",
    "Bei Streubesitz im Kapitalvermögen sind nach dem FG Hamburg die tatsächlichen Werbungskosten nicht abziehbar — nur der Sparer-Pauschbetrag. Grosse Depots kosten das mehr, als man denkt.",
  ],
  gegenueberstellung: {
    links: {
      label: "Familienstiftung",
      punkte: [
        { krit: "Steuersatz", wert: "15 % KSt + SolZ, ab 2028 sinkend", norm: "§ 23 KStG" },
        { krit: "Einkunftsarten", wert: "Bleiben erhalten — keine Gewerblichkeitsfiktion", norm: "§ 8 Abs. 2 KStG" },
        { krit: "Immobilienverkauf nach 10 Jahren", wert: "Steuerfrei", norm: "§ 23 EStG" },
        { krit: "Gewerbesteuer", wert: "Nur bei echtem Gewerbebetrieb", norm: "§ 2 GewStG" },
        { krit: "Generationenwechsel", wert: "Keiner — stattdessen Erbersatzsteuer alle 30 Jahre" },
      ],
    },
    rechts: {
      label: "Familien-GmbH",
      punkte: [
        { krit: "Steuersatz", wert: "15 % KSt + SolZ, ab 2028 sinkend", norm: "§ 23 KStG" },
        { krit: "Einkunftsarten", wert: "Alles gewerblich kraft Rechtsform", norm: "§ 8 Abs. 2 KStG" },
        { krit: "Immobilienverkauf nach 10 Jahren", wert: "Immer steuerpflichtig" },
        { krit: "Gewerbesteuer", wert: "Grundsätzlich ja, ggf. erweiterte Kürzung" },
        { krit: "Generationenwechsel", wert: "Anteile werden vererbt — jedes Mal Erbschaftsteuer" },
      ],
    },
  },
  fehler: [
    { fehler: "Die Stiftung wird pauschal als 'gewerbesteuerfrei' verkauft.", richtig: "Betriebsaufspaltung, Mitunternehmerstellung oder eine tatsächlich unternehmerisch geführte Holding begründen Gewerblichkeit — tätigkeitsbezogen prüfen." },
    { fehler: "Ein Begünstigter ist Vorstand und bekommt 'Vergütung', die eigentlich Versorgung ist.", richtig: "Fremdüblichkeit und saubere Trennung — sonst ist es Einkommensverwendung ohne Abzug und beim Empfänger trotzdem steuerpflichtig.", norm: "§ 10 Nr. 1 KStG" },
  ],
  zahlen: [
    { wert: "95 %", bedeutung: "Steuerfreier Anteil an Veräusserungsgewinnen aus Kapitalgesellschaftsanteilen.", norm: "§ 8b Abs. 2, 3 KStG" },
    { wert: "10 Jahre", bedeutung: "Danach verkauft die vermögensverwaltende Stiftung Immobilien steuerfrei — die GmbH nie.", norm: "§ 23 EStG" },
  ],
  merksatz: "Die Stiftung zahlt wie eine GmbH, aber sie rechnet wie eine Privatperson — das ist ihr stiller Vorteil.",
  gewicht: { mandat: 3, reichweite: 2 },
  antwortfreigabe: "abstrakt",
  stand: "2026-09-12",
  quellen: ["Q2 Laufende Besteuerung der Stiftung, Beteiligungserträge, Streubesitzdividenden, Immobilien", "Q1 Abschn. 3.3"],
  verwandt: ["destinataer-besteuerung", "stiftungs-gmbh", "dotation-ertragsteuer"],
};
