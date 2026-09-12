/* Q7 · Kap. 6 Satzung, Governance, Business Judgment Rule · Fehler 3, 4, 34, 35, 36, 42 */
export default {
  id: "satzung-zukunftsklauseln",
  titel: "Zehn Satzungsklauseln, die eine Familienstiftung dreißig Jahre später retten",
  bereich: "stiftungsrecht",
  kurz: "Die Satzung einer Stiftung ist eine Verfassung: Was heute fehlt, lässt sich in dreißig Jahren kaum nachholen — deshalb gehören Änderungsleitlinien, Organwechsel, Ausschüttungslogik und Unternehmensverkauf von Anfang an hinein.",
  normen: ["§ 83 BGB", "§ 85 BGB", "§ 84a Abs. 2 BGB", "§ 85a BGB"],
  kern: [
    "Organe und Aufsicht sind an den Stifterwillen gebunden, wie er bei Errichtung zum Ausdruck kam — was der Stifter dreißig Jahre später gewollt hätte, zählt nur, wenn die Satzung es sagt.",
    "Änderungen sind in abgestuften Fallgruppen möglich; der Stifter kann weitergehende Ermächtigungen vorsehen, muss Inhalt und Ausmaß aber hinreichend bestimmt festlegen — die pauschale Blankoklausel ist riskant.",
    "Die Regelungsfelder, die nicht offenbleiben dürfen: Zweckhierarchie, Begünstigtenkreis inklusive Patchwork und ausgeschiedener Stämme, Rechtsanspruch oder Ermessen, Organbesetzung und -nachfolge, Interessenkonflikte, Unternehmens-Governance, Anlagerahmen, Verkauf des Unternehmens, Änderungsleitlinien, Konfliktlösung.",
    "Ein absolutes Verkaufsverbot für das Familienunternehmen ist ein Fehler: Markt- und Technologiewandel sind nicht vorhersehbar — die Satzung sollte Verkauf und Transformation unter Bedingungen erlauben.",
    "Für Organmitglieder gilt seit der Reform die Business Judgment Rule: Wer auf angemessener Informationsgrundlage vernünftigerweise zum Wohl der Stiftung handelt, verletzt keine Pflicht — dokumentierte Entscheidungsprozesse sind Haftungsprävention.",
  ],
  einsatzfelder: [
    { situation: "Der Stifter will sicher sein, dass die Stiftung sein Unternehmen nie verkauft.", warum: "Genau diese Klausel kann die Stiftung in dreißig Jahren in einem sterbenden Markt fesseln — besser: Verkauf nur mit qualifizierter Mehrheit und Reinvestitionspflicht." },
    { situation: "Familienmitglieder sollen im Vorstand sitzen, aber auch Externe.", warum: "Ohne Informations- und Kompetenzarchitektur sind Externe Feigenblatt oder Blockierer — die Satzung muss sagen, wer was entscheidet und wer was erfährt." },
    { situation: "Der Stifter ist 70 und will die Organnachfolge nach seinem Tod regeln.", warum: "Wer nachrückt, wer benennt, welche Qualifikation und Altersgrenze gilt — bleibt das offen, entscheidet die Stiftungsaufsicht." },
  ],
  beispiele: [
    { konstellation: "Ein Stifter formuliert 1998: „Der Vorstand verwaltet das Vermögen nach den Grundsätzen ordnungsgemäßer Stiftungsführung.\" Sonst nichts zur Anlage.", gestaltung: "2028 will der Vorstand das Familienunternehmen wegen eines Übernahmeangebots verkaufen. Die Satzung schweigt; die Aufsicht sieht den Stifterwillen im Halten des Unternehmens. Streit über Jahre, das Angebot ist weg.", pointe: "Ein Absatz zur Vermögensanlage mit Verkaufsbedingungen hätte das Angebot annehmbar gemacht — oder klar verboten. Beides ist besser als Schweigen." },
  ],
  fehler: [
    { fehler: "Änderungsermächtigungen als pauschale Blankoklausel: „Der Vorstand kann die Satzung ändern, wenn er es für sinnvoll hält.\"", richtig: "Inhalt und Ausmaß müssen bestimmt sein: Welche Regelungen, aus welchen Anlässen, mit welcher Mehrheit — sonst wirkt die Klausel nicht.", norm: "§ 85 Abs. 4 BGB" },
    { fehler: "Organentscheidungen werden nicht dokumentiert.", richtig: "Die Business Judgment Rule schützt nur, wer die Informationsgrundlage nachweisen kann — Protokoll und Unterlagen sind der Haftungsschutz.", norm: "§ 84a Abs. 2 BGB" },
    { fehler: "Keine Regeln für die Organbesetzung nach dem Tod des Stifters.", richtig: "Benennungsrechte, Familienrat, Externe, Altersgrenzen, Abberufung — die Nachfolge im Organ ist so wichtig wie die im Unternehmen." },
  ],
  merksatz: "Die Satzung ist die Verfassung der Stiftung — was heute fehlt, kann in dreißig Jahren niemand mehr nachtragen.",
  gewicht: { mandat: 3, reichweite: 2 },
  antwortfreigabe: "abstrakt",
  stand: "2026-09-12",
  quellen: ["Q7 Kap. 6", "Q7 Fehler 3, 4, 34, 35, 36, 42", "Q7 Kap. 29.1"],
  verwandt: ["stiftung-governance", "satzungsaenderung-reform", "stifterwille-ewigkeit", "exit-aus-der-stiftung"],
};
