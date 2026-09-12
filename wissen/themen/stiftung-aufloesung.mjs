/* Q2 · Auflösung, Substanzauskehr, § 26 ErbStG, Änderung des Begünstigtenkreises */
export default {
  id: "stiftung-aufloesung",
  titel: "Der Weg zurück — was die Auflösung kostet",
  bereich: "erbst",
  kurz: "Wird die Stiftung aufgelöst, fällt das Vermögen nicht steuerfrei in die Familie zurück: Schenkungsteuer nach dem Verhältnis zum Stifter, Einkommensteuer auf die Erträge — und ein offener Streit um die Substanz.",
  normen: ["§ 87 BGB", "§ 87c BGB", "§ 7 Abs. 1 Nr. 9 ErbStG", "§ 15 Abs. 2 S. 2 ErbStG", "§ 20 Abs. 1 Nr. 9 EStG", "§ 26 ErbStG", "§ 27 KStG"],
  kern: [
    "Zivilrechtlich wird die Stiftung aufgelöst, wenn sie ihren Zweck endgültig nicht mehr erfüllen kann; das Vermögen fällt an die Anfallberechtigten laut Satzung — fehlt eine Bestimmung, an den Fiskus.",
    "Der Anfall ist schenkungsteuerpflichtig; die Steuerklasse richtet sich nach dem Verhältnis des Erwerbers zum Stifter.",
    "Daneben können ausgekehrte Erträge Kapitaleinkünfte sein — die Frage der Doppelbelastung ist offen.",
    "Für die Substanz gilt: Der BFH hat entschieden, dass es für Stiftungen kein steuerliches Einlagekonto gibt; das BMF folgert daraus, dass eine steuerfreie Kapitalrückzahlung nicht anerkannt werden kann. Die Literatur widerspricht deutlich.",
    "Wer Substanz steuerfrei auskehren will, muss ihre Herkunft lückenlos dokumentieren — und ein Einspruchsverfahren einplanen.",
    "Liegt die Erbersatzsteuer weniger als zwei Jahre zurück, werden 50 Prozent angerechnet, bei bis zu vier Jahren 25 Prozent — beim Erwerber, nicht bei der Stiftung.",
    "Offene Verrentungsraten sind bei Auflösung mit dem Kapitalwert abzulösen.",
  ],
  mythos: {
    behauptung: "Wenn es nicht passt, lösen wir die Stiftung eben wieder auf.",
    richtigstellung: "Die Auflösung ist der teuerste Vorgang im Leben einer Stiftung: Schenkungsteuer auf den gesamten Anfall, Einkommensteuer auf Erträge, Streit um die Substanz, Ablösung der Verrentung. Die Stiftung ist kein Probelauf — wer sie errichtet, sollte den Ausstieg nie brauchen.",
  },
  ablauf: [
    { schritt: "Vorher: thesaurierte Erträge auskehren", hinweis: "In einer Phase, in der ihre einkommensteuerliche Behandlung klar ist — bevor Ertrag und Substanz im selben Vorgang zusammenfallen." },
    { schritt: "Substanzherkunft dokumentieren", hinweis: "Was ist Dotationskapital, was Ertrag, was Wertsteigerung? Ohne Nachweis gilt alles als Ertrag." },
    { schritt: "Verrentungsraten prüfen", hinweis: "Offene Erbersatzsteuer-Raten werden mit dem Kapitalwert fällig.", norm: "§ 24 ErbStG" },
    { schritt: "Anfallberechtigte und Steuerklasse bestimmen", hinweis: "Nach dem Verhältnis zum Stifter — nicht zur Stiftung.", norm: "§ 15 Abs. 2 S. 2 ErbStG" },
    { schritt: "Genehmigung der Stiftungsbehörde", hinweis: "Ohne sie keine Auflösung.", norm: "§ 87 Abs. 3 BGB" },
  ],
  fehler: [
    { fehler: "Die Satzung nennt keinen Anfallberechtigten.", richtig: "Dann fällt das Vermögen an den Fiskus. Der Anfallberechtigte gehört in jede Satzung — und seine steuerliche Nähe zum Stifter sollte bedacht sein.", norm: "§ 87c Abs. 1 S. 3 BGB" },
  ],
  merksatz: "Eine Stiftung zu errichten kostet Zeit — sie aufzulösen kostet Vermögen.",
  gewicht: { mandat: 2, reichweite: 2 },
  antwortfreigabe: "keine",
  stand: "2026-09-12",
  quellen: ["Q2 Auskehrung von Vermögenssubstanz, Änderungen der Stiftungsstruktur und Beendigung", "Q1 Abschn. 7"],
  verwandt: ["erbersatzsteuer", "destinataer-besteuerung", "verbrauchsstiftung"],
};
