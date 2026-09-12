/* Q3 · Unselbständige bzw. Treuhand-Familienstiftung, Dachstiftung; Q1 · Abgrenzung */
export default {
  id: "treuhandstiftung",
  titel: "Die Treuhandstiftung — schnell, klein, ohne Aufsicht, ohne Erbersatzsteuer, aber mit Trägerrisiko",
  bereich: "ersatzformen",
  kurz: "Die unselbständige Stiftung ist keine juristische Person: Ein Träger hält das Vermögen zweckgebunden — keine Anerkennung, keine Aufsicht, keine Erbersatzsteuer, dafür hängt alles am Träger und am Vertrag.",
  normen: ["§§ 662 ff., 671 BGB", "§ 525 BGB", "§ 47 InsO", "§ 1 Abs. 1 Nr. 5 KStG", "§ 1 Abs. 1 Nr. 4 ErbStG"],
  kern: [
    "Der Stifter überträgt Vermögen auf einen Träger, der es im eigenen Namen, aber nach Massgabe einer Zweckbindung verwaltet — Treuhandvertrag oder Schenkung unter Auflage, die §§ 80 ff. BGB gelten nicht.",
    "Vorteile: keine behördliche Anerkennung, schnelle Errichtung, auch für kleinere Vermögen, privatautonome Änderung, keine Stiftungsaufsicht — und als Übergangslösung bis zur rechtsfähigen Stiftung.",
    "Der BFH stellt für die Erbersatzsteuer auf das Zivilrecht ab: Ohne eigenes Vermögen keine Familienstiftung im Sinne der Norm — bestätigt 2025 auch für eine Schweizer Stiftung mit deutschem Verwaltungssitz.",
    "Der strukturelle Nachteil: Der Träger ist Eigentümer. Bonität, Organisation, Vertragstreue und Nachfolge des Trägers tragen die ganze Struktur; eine natürliche Person ist als Träger regelmässig ungeeignet.",
    "Widerruf und Kündigung nach Auftragsrecht, Übergang von Rechtspositionen auf Erben des Stifters, Aussonderung in der Trägerinsolvenz nur bei identifizierbarem Treugut — die 'Ewigkeit' der rechtsfähigen Stiftung erreicht die Treuhand nicht automatisch.",
    "Die Dachstiftung ist die institutionelle Variante: Ein Träger verwaltet mehrere Untervermögen — für Familienstämme oder getrennte Zwecke mit zentraler Administration. Nach dem BFH sind intern verrechnete Verwaltungsleistungen umsatzsteuerlich nicht selbstverständlich ausserhalb des Leistungsaustauschs.",
  ],
  einsatzfelder: [
    { situation: "Ein Vermögen von einigen hunderttausend Euro soll zweckgebunden für die Ausbildung der Enkel verwaltet werden.", warum: "Für eine rechtsfähige Stiftung zu klein, für einen Familienpool zu zweckgebunden — die Treuhandstiftung bei einem institutionellen Träger passt." },
    { situation: "Die rechtsfähige Stiftung ist geplant, aber das Vermögen ist noch nicht vollständig übertragbar.", warum: "Die Treuhandstiftung überbrückt, bis Kapitalausstattung und Anerkennung stehen." },
  ],
  fehler: [
    { fehler: "Eine Treuhandstiftung 'aus dem Standardvertrag' für ein grösseres Vermögen.", richtig: "Mindestens: getrennte Konten und Buchführung, Vermögensverzeichnis, Anlage- und Ausschüttungsregeln, Informationsrechte, Interessenkonfliktregeln, ein kontrolliertes Trägerwechselverfahren und eine insolvenzrechtliche Prüfung je Assetklasse." },
    { fehler: "Kein Verfahren für den Trägerwechsel.", richtig: "Dann destabilisiert der Ausfall des Treuhänders ausgerechnet die auf Dauer angelegte Struktur. Voraussetzungen, Verfahren, Herausgabepflichten und Fortgeltung der Zweckbindung gehören in den Vertrag." },
    { fehler: "Die Treuhandstiftung wird gewählt, um die Erbersatzsteuer zu vermeiden.", richtig: "Das gelingt — bezahlt wird mit dem fehlenden eigenen Rechtsträger, also mit Träger-, Vertrags- und Insolvenzrisiko. Eine Gestaltungs-, keine Steuerfrage." },
  ],
  merksatz: "Die Treuhandstiftung ist so sicher wie ihr Träger und so dauerhaft wie ihr Vertrag — nicht mehr, nicht weniger.",
  gewicht: { mandat: 2, reichweite: 2 },
  antwortfreigabe: "abstrakt",
  stand: "2026-09-12",
  quellen: ["Q3 Unselbständige bzw. Treuhand-Familienstiftung, Dachstiftung", "Q1 Abschn. 2.2", "Q2 Tatbestand und persönliche Reichweite"],
  verwandt: ["ersatzformen-ueberblick", "erbersatzsteuer", "stiftung-errichtung-ablauf"],
};
