/* Q1 · Governance, Vorstand, Kuratorium, Stifterrechte, Stiftung für den Stifter */
export default {
  id: "stiftung-governance",
  titel: "Wer entscheidet in der Stiftung — Kontrolle ohne Eigentum",
  bereich: "stiftungsrecht",
  kurz: "Der Stifter gibt das Eigentum ab, nicht den Einfluss: Vorstand, Kuratorium, Vetorechte und Benennungsrechte lassen sich in der Satzung so verteilen, dass die Familie lenkt, ohne zu besitzen.",
  normen: ["§ 84 Abs. 1, 3, 4 BGB", "§ 83 Abs. 2 BGB", "§ 58 Nr. 6 AO"],
  kern: [
    "Das einzige Pflichtorgan ist der Vorstand; er führt die Geschäfte und vertritt die Stiftung.",
    "Die Satzung kann weitere Organe schaffen — typisch ein Kuratorium als Kontroll- und Beratungsgremium mit dem Recht, den Vorstand aus wichtigem Grund abzuberufen.",
    "Gerade bei Familienstiftungen ist das sinnvoll, weil die Begünstigten gesetzlich kaum Rechte haben und die Stiftungsaufsicht kein Kontrolldefizit ausgleicht.",
    "Stifter und Begünstigte dürfen Organmitglieder sein; der Stifter kann sich Vorsitz, Einzelzeichnung, Mehrfachstimmrecht, Veto- und Benennungsrechte vorbehalten — auf Lebenszeit.",
    "Die Begünstigten haben nur die Rechte, die die Satzung ihnen gibt — und wo Vermögensschutz das Ziel ist, sollten das keine einklagbaren Ansprüche sein.",
    "Eine Stiftung ausschliesslich für den Stifter selbst gilt nach herrschender Meinung als unzulässig; die Gegenansicht wächst, aber wer sicher gehen will, begünstigt die Familie.",
  ],
  einsatzfelder: [
    { situation: "Der Stifter will zu Lebzeiten das Sagen behalten und danach eine Familienkontrolle sichern.", warum: "Er bleibt Vorstandsvorsitzender mit Vetorecht; das Kuratorium aus Familienmitgliedern und einem Externen besetzt nach ihm den Vorstand." },
    { situation: "Die Familie fürchtet, dass ein Fremdvorstand das Vermögen verwaltet, ohne dass sie eingreifen kann.", warum: "Ein Kuratorium mit Abberufungsrecht und Zustimmungsvorbehalten für Grundlagengeschäfte ist der Hebel." },
  ],
  beispiele: [
    { konstellation: "Ein Stifter Anfang siebzig, drei erwachsene Kinder, ein Familienunternehmen und ein Wertpapierdepot.", gestaltung: "Vorstand: der Stifter als Vorsitzender mit Vetorecht, dazu ein Steuerberater. Kuratorium: die drei Kinder und ein externer Unternehmer, Vorsitz rotierend. Grundlagengeschäfte — Verkauf, Satzungsänderung, Ausschüttung über Plan — nur mit Zustimmung des Kuratoriums.", pointe: "Die Familie hat Kontrolle, aber keine Anteile. Und der Stifter hat sich nicht selbst entmachtet." },
  ],
  fehler: [
    { fehler: "Nur ein Vorstand, kein Kontrollorgan — 'wir sind ja eine Familie'.", richtig: "Nach dem Tod des Stifters kontrolliert dann niemand mehr. Ein Kuratorium ist bei Familienstiftungen der Regelfall, nicht die Ausnahme.", norm: "§ 84 Abs. 4 BGB" },
    { fehler: "Vorstandsentscheidungen werden per Handschlag getroffen und nicht dokumentiert.", richtig: "Seit der Reform schützt die Business Judgment Rule Organmitglieder, die auf angemessener Informationsgrundlage vernünftig zum Wohl der Stiftung handeln — nachweisen kann das nur, wer Protokoll und Unterlagen hat.", norm: "§ 84a Abs. 2 BGB" },
    { fehler: "Der Stifter hält sich für den Eigentümer, weil er Vorstand ist.", richtig: "Er ist Organ, gebunden an seinen eigenen Errichtungswillen. Wer gegen die Satzung handelt, handelt pflichtwidrig — auch als Stifter." },
  ],
  merksatz: "Eigentum abgeben und Einfluss behalten ist kein Widerspruch — es ist die Satzung.",
  gewicht: { mandat: 3, reichweite: 2 },
  antwortfreigabe: "abstrakt",
  stand: "2026-09-12",
  quellen: ["Q1 Abschn. 4.2, 4.1.2 (a) cc), 5", "Q7 Kap. 6.2"],
  verwandt: ["stifterwille-ewigkeit", "glaeubiger-anfechtung", "stiftung-errichtung-ablauf", "satzung-zukunftsklauseln", "anlagerichtlinie-stiftung", "governance-ebenen"],
};
