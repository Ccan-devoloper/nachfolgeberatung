/* Q7 · Kap. 18.2 Steuerklauseln · Fehler 27 */
export default {
  id: "steuerklausel-schenkung",
  titel: "Die Steuerklausel — was passiert, wenn das Finanzamt anders rechnet",
  bereich: "schenkung",
  kurz: "Eine Steuerklausel regelt, wer eine unerwartete Steuer trägt oder ob die Schenkung dann rückabgewickelt wird — sie ersetzt keine Prüfung vorher, und die zivilrechtliche Rückabwicklung neutralisiert nicht automatisch jede Steuer.",
  normen: ["§ 29 Abs. 1 Nr. 1 ErbStG", "§ 13a Abs. 6 ErbStG", "§ 16 Abs. 2 GrEStG", "§ 89 AO"],
  kern: [
    "Steuerklauseln haben zwei Formen: Die Verteilungsklausel sagt, wer eine Nachbelastung zahlt; die Rückabwicklungsklausel gibt ein Rückforderungsrecht, wenn eine kalkulierte Begünstigung versagt wird.",
    "Die Schenkungsteuer erlischt bei Rückgabe aufgrund eines vertraglichen Rückforderungsrechts — Ertragsteuern, Grunderwerbsteuer und Bewertungsstichtage folgen eigenen Regeln und werden nicht automatisch neutralisiert.",
    "Die zivilrechtliche Rückabwicklung kann selbst neue Steuern auslösen: Bei Betriebsvermögen etwa eine Entnahme, bei Immobilien Grunderwerbsteuer ohne Rückerstattung, wenn die Fristen nicht passen.",
    "Bei großen Beträgen ist die verbindliche Auskunft des Finanzamts der sichere Weg — die Klausel ist nur die Rückversicherung dahinter.",
    "Wer eine Verschonung einplant, sollte die Behaltensfristen in die Klausel aufnehmen: Der Beschenkte verpflichtet sich, nichts zu tun, was die Begünstigung rückwirkend kostet.",
  ],
  einsatzfelder: [
    { situation: "Eine Schenkung von Unternehmensanteilen wird auf die Verschonung gerechnet — aber der 90-Prozent-Test ist knapp.", warum: "Fällt der Test anders aus als erwartet, kann die Rückabwicklung die einzige Rettung vor einer sechsstelligen Steuer sein." },
    { situation: "Die Übertragung enthält Immobilien und Gesellschaftsanteile in einem Vertrag.", warum: "Bei Rückabwicklung wird Grunderwerbsteuer nur unter engen Voraussetzungen erstattet — die Klausel muss die Frist von zwei Jahren kennen." },
  ],
  beispiele: [
    { konstellation: "Ein Vater schenkt seinem Sohn einen KG-Anteil mit Steuerklausel: Versagt das Finanzamt die Verschonung, darf der Vater zurückfordern.", gestaltung: "Das Finanzamt stuft die Hälfte des Vermögens als Verwaltungsvermögen ein. Der Vater fordert zurück; die Schenkungsteuer erlischt. Die zwischenzeitlich entnommenen Gewinne bleiben aber beim Sohn versteuert.", pointe: "Die Klausel hat die große Steuer verhindert — die kleinen bleiben. Deshalb prüfen vorher, absichern nachher." },
  ],
  fehler: [
    { fehler: "Die Steuerklausel wird als Ersatz für eine verbindliche Auskunft oder eine Steuerberechnung verwendet.", richtig: "Sie ist eine Rückversicherung für den Restfehler, kein Freibrief — Rückabwicklungen kosten Zeit, Nerven und oft eigene Steuern.", norm: "§ 89 AO" },
    { fehler: "Die Klausel lässt eine zivilrechtliche Rückabwicklung zu, prüft aber nicht, was dabei ertragsteuerlich passiert.", richtig: "Jede Rückübertragung von Betriebsvermögen ist steuerlich ein eigener Vorgang — die Klausel muss die Folgen benennen." },
  ],
  zahlen: [
    { wert: "2 Jahre", bedeutung: "Frist für die Aufhebung der Grunderwerbsteuer bei Rückerwerb — danach zahlt man zweimal.", norm: "§ 16 Abs. 2 Nr. 1 GrEStG" },
  ],
  merksatz: "Die Steuerklausel fängt den Restfehler auf — den Hauptfehler muss die Prüfung vorher verhindern.",
  gewicht: { mandat: 2, reichweite: 2 },
  antwortfreigabe: "keine",
  stand: "2026-09-12",
  quellen: ["Q7 Kap. 18.2", "Q7 Fehler 27"],
  verwandt: ["rueckforderungsrechte", "einstiegstest-90-prozent", "betriebsvermoegen-verschonung"],
};
