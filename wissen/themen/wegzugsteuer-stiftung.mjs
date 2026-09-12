/* Q5 · Stiftung zur Vermeidung der Wegzugsteuer; Q1 · globale Mobilität */
export default {
  id: "wegzugsteuer-stiftung",
  titel: "Auswandern ohne Wegzugsteuer — die Stiftung hält die Beteiligung",
  bereich: "international",
  kurz: "Wer mit einer wesentlichen Beteiligung Deutschland verlässt, versteuert die stillen Reserven wie bei einem Verkauf; hält eine deutsche Familienstiftung die Anteile, kann die Familie gehen.",
  normen: ["§ 6 AStG", "§ 17 EStG", "§ 17 Abs. 2 S. 5 EStG", "§§ 13a, 13b, 28a ErbStG"],
  kern: [
    "Die Wegzugsteuer trifft, wer mindestens ein Prozent an einer Kapitalgesellschaft im Privatvermögen hält, in sieben der letzten zwölf Jahre unbeschränkt steuerpflichtig war und diese Steuerpflicht beendet — oder die Anteile unentgeltlich an jemanden überträgt, der nicht unbeschränkt steuerpflichtig ist.",
    "Unterschätzt wird der Erbfall: Die Wegzugsbesteuerung kann auch ausgelöst werden, wenn die Anteile auf einen Erben übergehen, der im Ausland ansässig ist. Wer Kinder im Ausland hat, trägt das Risiko also, ohne selbst irgendwohin zu ziehen.",
    "Seit der Reform 2022 gibt es für den Wegzug in EU- und EWR-Staaten keine zinslose Dauerstundung mehr: Die Steuer wird festgesetzt und gezahlt, auf Antrag in sieben Jahresraten, meist gegen Sicherheit.",
    "Die Rückkehrregel wurde verlängert — sieben Jahre plus fünf auf Antrag —, aber die Steuer wird zunächst erhoben. Der Gestaltungsdruck ist gestiegen.",
    "Der Gestaltungsansatz: Die Beteiligung geht auf eine deutsche Familienstiftung; sie bleibt stets im Inland steuerpflichtig, der Wegzug von Stifter und Begünstigten ist aus deutscher Sicht gefahrlos.",
    "Die Übertragung selbst löst keine Aufdeckung aus — die Stiftung führt die Anschaffungskosten fort —, unterliegt aber der Schenkungsteuer, bei Unternehmensvermögen mit Verschonung oder Erlass.",
    "Was bleibt, sind die Steuerfolgen im Zuzugsstaat: Manche Länder rechnen die Stiftung transparent zu oder wenden eigene Hinzurechnungsregeln an — das muss vorher geklärt sein.",
    "Spiegelbild beim Zuzug: Wer nach Deutschland zieht und Verstrickung seines Vermögens vermeiden will, prüft vor dem Zuzug eine ausländische Stiftung.",
  ],
  einsatzfelder: [
    { situation: "Der Unternehmer bleibt in Deutschland, aber eines seiner Kinder lebt dauerhaft im Ausland und würde miterben.", warum: "Auch dieser Anteilsübergang kann die Wegzugsteuer auslösen — die Familienstiftung als Anteilsinhaberin nimmt den Anteil aus der Erbfolge heraus und damit das Risiko." },
    { situation: "Die Kinder eines Unternehmers leben in London, Zürich und Singapur; er selbst überlegt, seinen Ruhestand im Ausland zu verbringen.", warum: "Jede Übertragung der GmbH-Anteile an ein Kind im Ausland und jeder eigene Wegzug würde die Wegzugsteuer auslösen. Hält die Stiftung die Anteile, kann die ganze Familie mobil bleiben." },
    { situation: "Ein Gründer will nach dem Exit seines Start-ups ins Ausland, hält aber noch eine Beteiligung.", warum: "Die Beteiligung vor dem Wegzug in eine Stiftung — dann geht er ohne Steuer, und künftige Wertsteigerungen laufen in der Stiftung zu 95 Prozent steuerfrei." },
  ],
  fehler: [
    { fehler: "Die Stiftung wird erst nach dem Wegzug errichtet oder die Anteile werden erst dann übertragen.", richtig: "Zu spät. Die Steuer entsteht mit dem Ende der unbeschränkten Steuerpflicht. Die Struktur muss stehen, solange der Stifter noch im Inland ist." },
    { fehler: "Die Steuerfolgen im Zielland werden nicht geprüft.", richtig: "Deutschland ist erledigt, das Ausland nicht. Hinzurechnungsregeln oder transparente Betrachtung im Zuzugsstaat können die Stiftung dort besteuern." },
  ],
  zahlen: [
    { wert: "7 von 12 Jahren", bedeutung: "So lange muss die unbeschränkte Steuerpflicht bestanden haben, damit die Wegzugsteuer greift.", norm: "§ 6 AStG" },
    { wert: "1 %", bedeutung: "Ab dieser Beteiligungsquote im Privatvermögen ist man betroffen.", norm: "§ 17 EStG" },
  ],
  merksatz: "Die Stiftung ist der Gesellschafter, der nie auswandert — und deshalb können alle anderen.",
  gewicht: { mandat: 3, reichweite: 3 },
  antwortfreigabe: "keine",
  stand: "2026-09-12",
  quellen: ["Q5 Folien 146–148, 172–177", "Q1 Abschn. 1"],
  verwandt: ["einfuehrungsfall-unternehmer", "liechtenstein-vorteile", "dotation-ertragsteuer", "gmbh-anteile-nachfolge", "erbschaftsteuer-international", "exit-steuer-halteebene"],
};
