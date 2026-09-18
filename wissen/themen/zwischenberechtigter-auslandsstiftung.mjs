/* Q10 Abschn. H.3e/f · Destinatszahlungen, BFH 03.07.2019 II R 6/16 */
export default {
  id: "zwischenberechtigter-auslandsstiftung",
  titel: "Wer Rechte an einer Auslandsstiftung hat, zahlt womöglich Schenkungsteuer",
  bereich: "international",
  kurz: "Zahlungen einer Auslandsstiftung sind meist Kapitaleinkünfte; wer aber unabhängig vom Ausschüttungsbeschluss Rechte am Vermögen hat, ist Zwischenberechtigter — und zahlt Schenkungsteuer.",
  normen: ["§ 7 Abs. 1 Nr. 9 S. 2 ErbStG", "§ 20 Abs. 1 Nr. 9 S. 2 EStG", "§ 15 AStG", "§ 7 Abs. 1 Nr. 1 ErbStG"],
  kern: [
    "Laufende Zahlungen einer ausländischen Familienstiftung an ihre Begünstigten unterliegen der Einkommensteuer als Kapitaleinkünfte — sofern nicht bereits eine Zurechnung nach dem Außensteuerrecht stattgefunden hat.",
    "Schenkungsteuer fällt darauf im Grundsatz nicht an. Die Stiftung erfüllt ihren Zweck; sie schenkt nicht.",
    "Es gibt aber eine Vorschrift, die für ausländische Vermögensmassen einen eigenen Tatbestand schafft: den Erwerb durch Zwischenberechtigte.",
    "Der Bundesfinanzhof hat 2019 geklärt, wer das ist: Zwischenberechtigter ist, wer unabhängig von einem konkreten Ausschüttungsbeschluss über Rechte an dem Vermögen oder den Erträgen der Vermögensmasse verfügt.",
    "Entscheidend ist damit die Rechtsstellung, nicht die Zahlung. Wer einen durchsetzbaren Anspruch hat, ist Zwischenberechtigter — auch wenn nie ausgeschüttet wird.",
    "Umgekehrt gilt: Wer nur Zuwendungen erhält, ohne einen Anspruch darauf zu haben, gehört nicht dazu. Die reine Ermessensbegünstigung bleibt aussen vor.",
    "Für die Gestaltung ausländischer Strukturen ist das ein zentraler Punkt — und er zieht in dieselbe Richtung wie die Zurechnungsbesteuerung: Feste Ansprüche der Familie kosten, Ermessen kostet nicht.",
    "Eine ausländische Familienstiftung unterliegt dafür nicht der Erbersatzsteuer; alle dreissig Jahre passiert dort nichts.",
    "Bei Substanzauszahlungen stellt sich dieselbe offene Frage wie im Inland: Ob Stiftungen ein steuerliches Einlagekonto führen können, ist ungeklärt.",
  ],
  fehler: [
    { fehler: "Die Beistatuten geben den Kindern feste, einklagbare Ausschüttungsansprüche, damit die Versorgung gesichert ist.", richtig: "Damit werden sie zu Zwischenberechtigten — und zugleich wird der Entlastungsbeweis bei der Zurechnungsbesteuerung schwerer. Ermessensregelungen mit klaren Leitlinien erreichen das Ziel, ohne beides auszulösen." },
    { fehler: "Die steuerliche Prüfung beschränkt sich auf die Einkommensteuer der Begünstigten.", richtig: "Bei ausländischen Vermögensmassen gehört der Zwischenberechtigten-Tatbestand immer mitgeprüft.", norm: "§ 7 Abs. 1 Nr. 9 S. 2 ErbStG" },
  ],
  einsatzfelder: [
    { situation: "Eine Familie richtet eine liechtensteinische Stiftung ein und will die Versorgung der nächsten Generation verbindlich regeln.", warum: "Genau hier entscheidet die Formulierung: Anspruch oder Ermessen — steuerlich sind das zwei verschiedene Welten." },
  ],
  merksatz: "Bei der Auslandsstiftung kostet nicht die Zahlung, sondern der Anspruch darauf.",
  gewicht: { mandat: 2, reichweite: 2 },
  antwortfreigabe: "keine",
  stand: "2026-09-18",
  quellen: ["Q10 Abschn. H.3e, H.3f"],
  verwandt: ["liechtenstein-zurechnung", "destinataer-besteuerung", "vermoegensauskehr-stiftung", "auslandsstiftung-huerden"],
};
