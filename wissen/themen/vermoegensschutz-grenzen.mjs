/* Q1 · Schutz des Familienvermögens und seine drei Grenzen; Q3 · Querschnitt */
export default {
  id: "vermoegensschutz-grenzen",
  titel: "Vermögensschutz durch die Stiftung — und seine drei Grenzen",
  bereich: "vermoegensschutz",
  kurz: "Die Stiftung schirmt Vermögen ab, weil es niemandem mehr gehört — aber nicht rückwirkend und nicht gegen Ehegatten, Pflichtteilsberechtigte und Gläubiger, die schon da waren.",
  normen: ["§ 1375 Abs. 2 BGB", "§ 2325 BGB", "§ 134 InsO", "§ 4 AnfG"],
  kern: [
    "Rechtlich beruht der Schutz auf der mitgliederlosen Verselbständigung: Das Stiftungsvermögen ist ein vom Stifter und von den Begünstigten strikt getrenntes Sondervermögen.",
    "Die Kehrseite: Auch Stifter und Begünstigte kommen nicht mehr an das Vermögen heran, sondern nur an satzungsgemässe Leistungen.",
    "Drei Grenzen bleiben. Erstens der Zugewinnausgleich: Zuwendungen an die Stiftung werden dem Endvermögen zehn Jahre lang voll hinzugerechnet — ohne Abschmelzung.",
    "Zweitens der Pflichtteil: Die Dotation ist eine Schenkung im Sinne der Pflichtteilsergänzung; zehn Jahre lang, mit jährlicher Abschmelzung um ein Zehntel.",
    "Drittens die Anfechtung: Unentgeltliche Leistungen sind vier Jahre lang anfechtbar, bei Benachteiligungsvorsatz zehn Jahre.",
    "Gläubiger der Begünstigten greifen dagegen regelmässig ins Leere — wenn die Satzung ihnen keine einklagbaren Ansprüche gibt, sondern Leistungen ins Ermessen der Organe stellt.",
  ],
  mythos: {
    behauptung: "In der Stiftung ist das Vermögen sofort sicher.",
    richtigstellung: "Sicher wird es mit der Zeit. Für Zugewinn, Pflichtteil und Anfechtung läuft ab der Übertragung eine Frist von bis zu zehn Jahren. Wer stiftet, wenn die Krise schon absehbar ist, stiftet zu spät — und wer es rechtzeitig tut, schützt wirklich.",
  },
  einsatzfelder: [
    { situation: "Ein Unternehmer haftet persönlich — als Geschäftsführer, als Bürge, als Freiberufler — und will sein Privatvermögen dauerhaft aus dieser Sphäre herauslösen.", warum: "Nach Ablauf der Anfechtungsfristen ist die Stiftung gläubigerfest, wenn keine Benachteiligungsabsicht vorlag." },
    { situation: "Eltern sorgen sich, dass eine Scheidung ihrer Kinder das Familienvermögen halbiert.", warum: "Die Begünstigten haben keinen Anteil, den ein Zugewinnausgleich erfassen könnte — nur Leistungen, die im Ermessen der Stiftung stehen." },
  ],
  beispiele: [
    { konstellation: "Ein Unternehmer überträgt sein Immobilienportfolio auf eine Familienstiftung. Sechs Jahre später scheitert eine Beteiligung, für die er gebürgt hat.", gestaltung: "Die Vierjahresfrist für die Anfechtung unentgeltlicher Leistungen ist abgelaufen; Benachteiligungsvorsatz lag zur Zeit der Übertragung nicht vor. Der Stifter war nicht selbst im Vorstand.", pointe: "Die Stiftung hält. Dieselbe Übertragung zwei Jahre vor der Krise hätte der Insolvenzverwalter zurückgeholt." },
  ],
  fehler: [
    { fehler: "Die Satzung gibt den Begünstigten feste, einklagbare Ansprüche.", richtig: "Dann kann ein Gläubiger diesen Anspruch pfänden. Leistungen gehören ins Ermessen der Organe, Leistungskataloge nicht an rein objektive Kriterien.", norm: "§ 829 ZPO" },
    { fehler: "Der Stifter ist zugleich alleiniger Vorstand.", richtig: "Für die Vorsatzanfechtung wird das Wissen des Vorstands der Stiftung zugerechnet. Ist der Stifter nicht im Vorstand, ist das Anfechtungsrisiko erheblich geringer.", norm: "§ 133 InsO, § 166 BGB" },
  ],
  zahlen: [
    { wert: "10 Jahre", bedeutung: "So lange läuft die Frist für Zugewinn und Pflichtteilsergänzung — beim Zugewinn ohne, beim Pflichtteil mit Abschmelzung." },
    { wert: "4 Jahre", bedeutung: "Anfechtungsfrist für unentgeltliche Leistungen in der Insolvenz des Stifters.", norm: "§ 134 InsO" },
  ],
  merksatz: "Vermögensschutz durch eine Stiftung ist kein Schalter, sondern eine Uhr — sie läuft ab dem Tag der Übertragung.",
  gewicht: { mandat: 3, reichweite: 3 },
  antwortfreigabe: "abstrakt",
  stand: "2026-09-12",
  quellen: ["Q1 Abschn. 3.2 bis 3.2.3", "Q3 Querschnitt Pflichtteil, Zugewinn und Gläubigerschutz"],
  verwandt: ["pflichtteil-stiftung", "zugewinn-stiftung", "glaeubiger-anfechtung"],
};
