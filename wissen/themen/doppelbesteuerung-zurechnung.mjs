/* Q4 Abschn. 5 · Vermeidung einer Doppelbesteuerung, § 15 Abs. 11 AStG / Abs. 8, 9 AStG-E */
export default {
  id: "doppelbesteuerung-zurechnung",
  titel: "Zweimal besteuert? Wie die Auslandsstiftung eine Doppelbelastung vermeidet",
  bereich: "international",
  kurz: "Wer die Erträge einer Auslandsstiftung bereits zugerechnet bekam, soll die spätere Ausschüttung nicht noch einmal versteuern — der Nachweis dafür liegt bei der Familie.",
  normen: ["§ 15 Abs. 11 AStG", "§ 15 Abs. 8 AStG-E", "§ 15 Abs. 9 AStG-E", "§ 11 AStG", "§ 12 AStG", "§ 18 AStG"],
  kern: [
    "Die Zurechnungsbesteuerung greift, bevor Geld fliesst: Die Erträge der ausländischen Stiftung werden dem Stifter oder den Berechtigten zugerechnet und dort versteuert.",
    "Zahlt die Stiftung Jahre später aus, wäre das an sich ein zweites Mal steuerpflichtig — als Kapitaleinkunft beim Empfänger.",
    "Deshalb sind Zuwendungen steuerfrei, soweit die zugrunde liegenden Einkünfte nachweislich bereits zugerechnet wurden.",
    "Massgeblich ist die Identität der Einkünfte, nicht die der Personen. Wer zurechnet und wer empfängt, dürfen also auseinanderfallen.",
    "Der Reformentwurf des BMF führt dafür ein eigenes Konto ein — ein Zurechnungskorrekturvolumen, das gesondert festgestellt und nach dem Prinzip zuerst herein, zuerst hinaus verbraucht wird.",
    "Steuern, die die Stiftung im Ausland gezahlt hat, sollen weiterhin angerechnet werden können.",
    "Der praktische Punkt liegt nicht im Gesetz, sondern in der Buchführung: Ohne lückenlose Aufzeichnung, welche Erträge wann zugerechnet wurden, ist die Entlastung im Zweifel nicht zu bekommen.",
  ],
  fehler: [
    { fehler: "Die Familie verlässt sich darauf, dass das Finanzamt die früheren Zurechnungen 'ja weiss'.", richtig: "Die Steuerfreiheit setzt den Nachweis voraus. Sie gehört von Jahr eins an dokumentiert, nicht erst bei der ersten Ausschüttung rekonstruiert.", norm: "§ 15 Abs. 11 AStG" },
    { fehler: "Eine Ausschüttung geht an ein Familienmitglied, dem nie etwas zugerechnet wurde — und wird trotzdem als steuerfrei behandelt.", richtig: "Es kommt auf die Identität der Einkünfte an, nicht der Personen. Das kann funktionieren, muss aber am Einkünftestrang belegt werden." },
  ],
  einsatzfelder: [
    { situation: "Eine liechtensteinische Familienstiftung besteht seit Jahren, die Erträge wurden laufend zugerechnet, jetzt soll erstmals ausgeschüttet werden.", warum: "Genau hier entscheidet die Aktenlage über eine echte Doppelbelastung. Die Vorbereitung beginnt Jahre vor der Ausschüttung." },
  ],
  merksatz: "Gegen die Doppelbesteuerung der Auslandsstiftung schützt kein Paragraf, sondern eine Aufzeichnung.",
  gewicht: { mandat: 2, reichweite: 2 },
  antwortfreigabe: "keine",
  stand: "2026-09-18",
  quellen: ["Q4 Abschn. 5"],
  verwandt: ["liechtenstein-zurechnung", "astg-reform-motivtest", "zwischenberechtigter-auslandsstiftung", "nachgeschaltete-stiftung"],
};
