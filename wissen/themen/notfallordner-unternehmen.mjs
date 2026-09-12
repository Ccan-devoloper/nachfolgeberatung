/* Q8 · Kap. 1.7, 1.8, 1.10 */
export default {
  id: "notfallordner-unternehmen",
  titel: "Der Notfallordner — was in den ersten 24 Stunden funktionieren muss",
  bereich: "vorsorge",
  kurz: "Eine Notfallordnung misst sich nicht an der Zahl der Urkunden, sondern daran, ob die Firma am Montagmorgen zahlungsfähig, sprechfähig und beschlussfähig ist — das lässt sich üben.",
  normen: ["§ 1814 BGB", "§ 6 Abs. 2 GmbHG", "§§ 49 ff. HGB"],
  kern: [
    "Die ersten 24 Stunden entscheiden über Zahlungsfähigkeit und Vertrauen: Wer gibt Zahlungen frei, wer spricht mit Belegschaft und Kunden, wer hat Originalvollmachten und digitale Zugänge?",
    "In der ersten Woche kommen die Formalien: Gesellschafterbeschlüsse und Ersatzgeschäftsführer, Kreditlinien und Covenants, Versicherer, Steuer- und Sozialversicherungsfristen, laufende Transaktionen.",
    "Im ersten Monat wird aus dem Provisorium eine Struktur: dauerhafte Organbesetzung, gegebenenfalls Betreuung, angepasste Zeichnungsregeln, Familienkommunikation, Entscheidung über Fortführung, Interimsmanagement oder Verkauf.",
    "Rechtliche Vollmacht und faktischer Zugriff sind zwei verschiedene Dinge — ohne Zugangsdaten für Banking, Warenwirtschaft, Steuerportal und E-Mail steht der Bevollmächtigte vor verschlossenen Türen.",
    "Der ehrlichste Test ist der jährliche Probelauf: Würde die Firma tatsächlich funktionieren, wenn der Chef morgen nicht mehr erreichbar wäre?",
  ],
  einsatzfelder: [
    { situation: "Ein Unternehmer hat Vollmachten, aber sie liegen im Tresor der Kanzlei und niemand weiss davon.", warum: "Im Ernstfall zählt, wer das Original in der Hand hat — Aufbewahrungsort, Kopien und Information der Beteiligten gehören zur Gestaltung." },
    { situation: "Eine Familie hat vor fünf Jahren alles geregelt und seither nichts angesehen.", warum: "Banken ändern Formulare, Personen scheiden aus, Zugänge ändern sich — eine Vollmacht, die niemand getestet hat, ist eine Vermutung." },
  ],
  ablauf: [
    { schritt: "Rollenkarte erstellen", hinweis: "Eigentümer, Gesellschafter, Geschäftsführer, Prokurist, Stiftungsvorstand — wer ist der Unternehmer in welcher Rolle?" },
    { schritt: "Gesellschaftsvertrag und Satzung prüfen", hinweis: "Vertretung, Vollmacht, Ausfall, Einziehung, Tod, Handlungsunfähigkeit — was steht da, was fehlt?" },
    { schritt: "Private Vorsorgevollmacht und Unternehmervollmacht abstimmen", hinweis: "Zwei Dokumente, die sich ergänzen statt zu widersprechen." },
    { schritt: "Organnachfolge sichern", hinweis: "Ersatzgeschäftsführer vorbestimmen oder wenigstens den Bestellungsmechanismus handlungsfähig halten." },
    { schritt: "Bank-, Steuer- und Digitalzugänge testen", hinweis: "Nicht fragen, ob die Bank die Vollmacht akzeptieren würde — vorlegen und bestätigen lassen." },
    { schritt: "Betreuungsverfügung als Auffangnetz", hinweis: "Wunschperson und Leitlinien, falls eine Vollmacht nicht reicht oder angegriffen wird.", norm: "§ 1816 BGB" },
    { schritt: "Jährlicher Notfall-Drill", hinweis: "Einmal im Jahr durchspielen: Zahlungen, Beschluss, Kommunikation. Was hakt, wird repariert." },
  ],
  fehler: [
    { fehler: "Es gibt keinen Ersatz, falls der Bevollmächtigte selbst ausfällt oder in einen Interessenkonflikt gerät.", richtig: "Ersatzbevollmächtigter und Konfliktregel gehören in jede Vollmacht — der Notfall trifft selten nur eine Person." },
    { fehler: "Die Bankvollmacht fehlt, weil eine allgemeine private Vollmacht vorliegt.", richtig: "Banken verlangen regelmässig ihre eigenen Formulare oder eine beglaubigte Vollmacht — das gehört vorher geklärt." },
  ],
  merksatz: "Eine Notfallordnung, die nie geprobt wurde, ist eine Hoffnung mit Unterschrift.",
  gewicht: { mandat: 2, reichweite: 3 },
  antwortfreigabe: "abstrakt",
  stand: "2026-09-13",
  quellen: ["Q8 Kap. 1.7, 1.8, 1.10"],
  verwandt: ["handlungsunfaehigkeit-unternehmer", "unternehmervollmacht", "ein-mann-gmbh-notfall", "nachfolge-als-system"],
};
