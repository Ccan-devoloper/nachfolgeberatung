/* Q7 · Kap. 17 Nießbrauch in der Vermögens- und Unternehmensnachfolge */
export default {
  id: "niessbrauch-grundlagen",
  titel: "Der Vorbehaltsnießbrauch — Eigentum verschenken, Erträge behalten",
  bereich: "schenkung",
  kurz: "Beim Vorbehaltsnießbrauch geht das Eigentum auf die nächste Generation über, die Erträge bleiben beim Übergeber — die Nachfolge beginnt früh, die Versorgung der Eltern bleibt gesichert.",
  normen: ["§§ 1030 ff. BGB", "§ 7 Abs. 1 Nr. 1 ErbStG", "§ 14 BewG", "§ 2325 Abs. 3 BGB"],
  kern: [
    "Der Nießbrauch trennt Substanz und Ertrag: Das Kind wird Eigentümer, die Eltern behalten Mieten, Dividenden oder Gewinnanteile — lebenslang oder befristet.",
    "Der Kapitalwert des Nießbrauchs wird von der Schenkung abgezogen; je jünger der Übergeber, desto höher der Abzug und desto geringer die Schenkungsteuer.",
    "Immobilien-, GmbH- und Personengesellschaftsnießbrauch folgen völlig verschiedenen Regeln — was bei der Mietwohnung funktioniert, kann bei der KG die Steuerneutralität kosten.",
    "Ein zu weitgehender Vorbehalt kann verhindern, dass die Zehnjahresfrist für Pflichtteilsergänzungsansprüche überhaupt zu laufen beginnt.",
    "Lastentragung, außergewöhnliche Instandhaltung, Finanzierungen und Zustimmungsrechte bei Verfügungen gehören ausdrücklich in den Vertrag — das Gesetz regelt sie nur unvollkommen.",
  ],
  mythos: {
    behauptung: "Mit Nießbrauch verschenke ich nur auf dem Papier — wirtschaftlich ändert sich nichts.",
    richtigstellung: "Genau das ist die Gefahr: Wer wirtschaftlich nichts aufgibt, hat für den Pflichtteil möglicherweise noch nichts verschenkt. Der Nießbrauch ist ein Versorgungs-, kein Verstecktinstrument.",
  },
  einsatzfelder: [
    { situation: "Eltern Anfang sechzig wollen die Mietshäuser schon jetzt an die Kinder geben, sind aber auf die Mieten angewiesen.", warum: "Der Nießbrauch sichert die Mieteinnahmen, die Kinder werden Eigentümer, die Zehnjahresfrist für die Freibeträge beginnt zu laufen." },
    { situation: "Ein Unternehmer will Anteile übertragen, aber Dividenden und Mitsprache vorerst behalten.", warum: "Bei GmbH-Anteilen ist das gestaltbar, verlangt aber einen genauen Rechtekatalog — bei KG-Anteilen kann zu viel Kontrolle die Mitunternehmerstellung des Kindes gefährden." },
  ],
  vorteile: [
    { vorteil: "Frühe Übertragung ohne Versorgungslücke", erklaerung: "Die Eltern geben Eigentum ab, ohne Einkünfte zu verlieren — der häufigste Grund, warum Nachfolge sonst aufgeschoben wird, entfällt." },
    { vorteil: "Geringere Schenkungsteuer", erklaerung: "Der Kapitalwert des Nießbrauchs mindert die Bereicherung; die Freibeträge reichen für mehr Substanz.", norm: "§ 14 BewG" },
    { vorteil: "Freibeträge alle zehn Jahre neu", erklaerung: "Wer früh beginnt, kann Freibeträge mehrfach nutzen — jedes Jahrzehnt 400.000 € je Kind und Elternteil.", norm: "§ 14 ErbStG" },
  ],
  nachteile: [
    { nachteil: "Pflichtteilsfrist möglicherweise blockiert", erklaerung: "Behält der Übergeber den wesentlichen Genuss, läuft die Zehnjahresfrist nicht — die Schenkung bleibt voll ergänzungspflichtig.", norm: "§ 2325 Abs. 3 BGB" },
    { nachteil: "Zwei Herren über eine Sache", erklaerung: "Eigentümer und Nießbraucher müssen bei Sanierung, Verkauf und Finanzierung zusammenwirken — ohne klare Vertragsregeln entstehen Konflikte." },
  ],
  beispiele: [
    { konstellation: "Eine 58-jährige Unternehmerin überträgt ein Mietshaus im Wert von 2 Mio. € (Jahresmiete 75.000 €) auf ihren Sohn und behält den Nießbrauch.", gestaltung: "Bei ihrem Alter bewertet das Finanzamt den lebenslangen Nießbrauch mit etwa dem 13,5-Fachen der Jahresmiete, rund 1 Mio. €. Steuerpflichtig bleibt rund 1 Mio. €, davon 400.000 € steuerfrei.", pointe: "Statt Steuer auf 2 Mio. € fällt Steuer auf 600.000 € an — und die Mieten bleiben, wo sie waren." },
  ],
  fehler: [
    { fehler: "Der Nießbrauch wird für Immobilie, GmbH und KG nach demselben Muster gestaltet.", richtig: "Jede Vermögensart hat eigene Regeln — bei der KG entscheidet die Mitunternehmerstellung, bei der GmbH die Einkünftezurechnung, bei der Immobilie die Lastenverteilung." },
    { fehler: "Der Übergeber behält sich alles vor — Erträge, Stimmrechte, Verfügungssperre, Rückforderung.", richtig: "Wer alles behält, hat möglicherweise noch nicht genug verschenkt: Pflichtteilsfrist und steuerliche Anerkennung leiden.", norm: "§ 2325 Abs. 3 BGB" },
  ],
  merksatz: "Der Nießbrauch trennt Haben und Bekommen — wer beides behalten will, hat nicht verschenkt.",
  gewicht: { mandat: 3, reichweite: 3 },
  antwortfreigabe: "abstrakt",
  stand: "2026-09-12",
  quellen: ["Q7 Kap. 17", "Q7 Kap. 29.3"],
  verwandt: ["niessbrauch-immobilie", "niessbrauch-gmbh-anteil", "niessbrauch-kg-anteil", "pflichtteil-fristanlauf"],
};
