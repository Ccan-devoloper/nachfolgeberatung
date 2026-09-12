/* Q1 · Einführung, Gründe für den Einsatz, Vor- und Nachteile */
export default {
  id: "stiftung-warum",
  titel: "Warum überhaupt eine Familienstiftung",
  bereich: "familienstiftung",
  kurz: "Eine Familienstiftung wird nicht wegen der Steuer errichtet, sondern weil jemand die Geschicke seines Vermögens über den eigenen Tod hinaus bestimmen will.",
  normen: ["§ 80 Abs. 1 BGB", "§ 83 Abs. 2 BGB", "§§ 51 ff. AO"],
  kern: [
    "Eine rechtsfähige Stiftung ist eine mitgliederlose juristische Person: ein Vermögen, das einem vom Stifter gesetzten Zweck dauerhaft dient — ohne Eigentümer, ohne Gesellschafter, ohne Erben.",
    "Vier Motive tragen fast jede Familienstiftung: die langfristige Absicherung der Familie, der Schutz des Vermögens, die Unternehmensnachfolge und — nachrangig — steuerliche Gründe.",
    "Die Stiftung ist auf die Ewigkeit angelegt, das Steuerrecht ist unstet; wer nur wegen einer Steuervorschrift stiftet, baut auf Sand.",
    "Von den rund 27.000 rechtsfähigen Stiftungen in Deutschland verfolgen etwa 88 Prozent gemeinnützige Zwecke, aber der Trend dreht: Überproportional viele Neugründungen sind privatnützige Familienstiftungen.",
    "Der Stifterwille ist das oberste Gebot des Stiftungsrechts; er wird mit der Anerkennung verselbständigt und bindet fortan alle Organe — auch den Stifter selbst.",
  ],
  mythos: {
    behauptung: "Eine Familienstiftung ist ein Steuersparmodell.",
    richtigstellung: "Sie ist zunächst ein Instrument, Vermögen dem Zugriff Einzelner zu entziehen und einem Zweck zu widmen. Steuerliche Vorteile gibt es in bestimmten Konstellationen — Verschonung von Unternehmensvermögen, Körperschaftsteuer statt Einkommensteuer, Mobilität ohne Wegzugsbesteuerung. Ihnen stehen Errichtungsbesteuerung, Destinatärsbesteuerung und Erbersatzsteuer gegenüber. Wer nur die Steuer sieht, sieht die Hälfte.",
  },
  einsatzfelder: [
    { situation: "Ein Unternehmer will verhindern, dass sein Lebenswerk nach seinem Tod zerschlagen, verkauft oder unter zerstrittenen Erben aufgeteilt wird.", warum: "Die Stiftung hält die Anteile dauerhaft; niemand kann sie verkaufen, vererben oder pfänden lassen." },
    { situation: "Eine Familie mit erheblichem Vermögen will, dass die nächsten Generationen versorgt sind — aber nach Regeln, nicht nach Laune.", warum: "Die Satzung legt fest, wer wann was bekommt, und kann Leistungen an Voraussetzungen wie Ausbildung oder Notlage knüpfen." },
    { situation: "Vermögen soll vor persönlichen Risiken einzelner Familienmitglieder geschützt werden — Scheidung, Haftung, Insolvenz, Betreuung.", warum: "Nach wirksamer Übertragung gehört das Vermögen weder dem Stifter noch den Begünstigten; deren Gläubiger greifen ins Leere." },
    { situation: "Die Familie ist international, Kinder leben oder ziehen ins Ausland.", warum: "Die Stiftung hält das Vermögen im Inland; ein Wegzug der Begünstigten löst keine Wegzugsbesteuerung aus." },
  ],
  vorteile: [
    { vorteil: "Ewige Testamentsvollstreckung", erklaerung: "Der Stifterwille gilt ohne zeitliche Grenze — anders als die Dauertestamentsvollstreckung, die nach 30 Jahren endet.", norm: "§ 2210 BGB" },
    { vorteil: "Schutz vor Verkauf und feindlicher Übernahme", erklaerung: "Die Begünstigten haben es nicht in der Hand, Anteile zu veräussern; das entscheiden die Organe, gebunden an den Stifterwillen." },
    { vorteil: "Mitbestimmungsfrei", erklaerung: "Die Stiftung steht nicht im Katalog des Mitbestimmungsgesetzes.", norm: "§ 1 Abs. 1 Nr. 1 MitbestG" },
    { vorteil: "Verschonung von Unternehmensvermögen", erklaerung: "Die Stiftung ist als Erwerberin nicht von den Verschonungsregeln ausgeschlossen.", norm: "§§ 13a, 13b ErbStG" },
  ],
  nachteile: [
    { nachteil: "Dauerhafter Verlust der Verfügungsmacht", erklaerung: "Wer stiftet, gibt her. Die Satzung kann Einfluss sichern, aber keine Rückgabe auf Zuruf." },
    { nachteil: "Erbersatzsteuer alle 30 Jahre", erklaerung: "Planbar, aber unausweichlich — der Preis dafür, dass das Vermögen nicht mehr vererbt wird.", norm: "§ 1 Abs. 1 Nr. 4 ErbStG" },
    { nachteil: "Geringe Flexibilität nach dem Tod des Stifters", erklaerung: "Satzungsänderungen sind eng begrenzt und an den historischen Stifterwillen gebunden.", norm: "§§ 85, 85a BGB" },
    { nachteil: "Pflichtteil und Zugewinn bleiben", erklaerung: "In den ersten zehn Jahren nach der Übertragung kann die Stiftung angegriffen werden.", norm: "§ 2325 BGB, § 1375 BGB" },
  ],
  zahlen: [
    { wert: "27.082", bedeutung: "Rechtsfähige Stiftungen in Deutschland — und jedes Jahr kommen fast 900 hinzu." },
    { wert: "88 %", bedeutung: "davon gemeinnützig. Die Familienstiftung ist die Minderheit — aber die wachsende." },
  ],
  merksatz: "Eine Stiftung gründet man nicht, um Steuern zu sparen, sondern um ein Vermögen zu einem Willen zu machen.",
  gewicht: { mandat: 3, reichweite: 3 },
  antwortfreigabe: "abstrakt",
  stand: "2026-09-12",
  quellen: ["Q1 Abschn. 1, 3, 3.3"],
  verwandt: ["stifterwille-ewigkeit", "vermoegensschutz-grenzen", "unternehmensnachfolge-stiftung", "ersatzformen-ueberblick", "nachfolge-als-system"],
};
