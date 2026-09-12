/* Q8 · Kap. 3.7 · Fall 15 */
export default {
  id: "bindungswirkung-ehegattentestament",
  titel: "Der Preis des gemeinsamen Testaments — Bindung über den Tod hinaus",
  bereich: "erbrecht",
  kurz: "Wechselbezügliche Verfügungen binden den überlebenden Ehegatten: Nach dem ersten Todesfall kann er sie grundsätzlich nicht mehr ändern — auch dann nicht, wenn sich der vorgesehene Nachfolger als ungeeignet erweist.",
  normen: ["§ 2270 BGB", "§ 2271 BGB", "§ 2289 BGB", "§ 2078 BGB"],
  kern: [
    "Wechselbezüglich sind Verfügungen, die der eine Ehegatte nur getroffen hat, weil auch der andere so verfügt hat — das Gesetz vermutet das für die Einsetzung der gemeinsamen Kinder als Schlusserben.",
    "Zu Lebzeiten beider kann jeder widerrufen, aber nur notariell und mit Zugang beim anderen. Mit dem ersten Todesfall erlischt das Widerrufsrecht grundsätzlich.",
    "Für Unternehmerfamilien ist das riskant: Der „richtige\" Nachfolger kann sich in zwanzig Jahren als falsch erweisen, ein Kind kann ausfallen, ein Verkauf kann sinnvoll werden, der Vermögensmix kann sich vom Unternehmen zu liquiden Werten verschieben.",
    "Wer flexibel bleiben will, muss das ausdrücklich regeln: Änderungsvorbehalt für den Überlebenden, Begrenzung der Wechselbezüglichkeit auf bestimmte Verfügungen, Sonderregeln für Unternehmensvermögen, Wiederverheiratungsklausel.",
    "Die Hoffnung, man könne „später noch ändern\", trägt nicht — die Ausschlagung gegen Pflichtteil ist dann oft der einzige Weg heraus und kostet regelmässig mehr, als eine Klausel gekostet hätte.",
  ],
  einsatzfelder: [
    { situation: "Ein Ehepaar will sich gegenseitig absichern, aber der Überlebende soll die Unternehmensnachfolge noch anpassen können.", warum: "Die Unternehmensverfügungen werden ausdrücklich als einseitig und frei widerruflich bezeichnet, die Versorgungsverfügungen bleiben wechselbezüglich." },
    { situation: "Der überlebende Ehegatte heiratet erneut.", warum: "Ohne Wiederverheiratungsklausel kann der neue Ehegatte Pflichtteils- und Zugewinnansprüche gegen den gebundenen Nachlass geltend machen." },
  ],
  beispiele: [
    { konstellation: "Nach dem Tod des Unternehmers stellt sich heraus, dass der im gemeinsamen Testament vorgesehene Sohn das Unternehmen nicht führen kann.", gestaltung: "Die Ehefrau ist an die Schlusserbeneinsetzung gebunden. Sie kann das Testament nicht ändern; gesellschaftsrechtlich kann sie steuern, erbrechtlich nicht.", pointe: "Ein Satz — „Der Überlebende bleibt berechtigt, die Verfügung über das Unternehmensvermögen zu ändern\" — hätte die Nachfolge gerettet." },
  ],
  fehler: [
    { fehler: "Das gemeinsame Testament wird unterschrieben, ohne die Bindungswirkung zu besprechen.", richtig: "Wechselbezüglichkeit ist der Preis für die gegenseitige Sicherheit — wer ihn nicht zahlen will, muss den Änderungsvorbehalt aufnehmen.", norm: "§ 2271 Abs. 2 BGB" },
    { fehler: "Man geht davon aus, dass ein neues Testament das alte einfach ersetzt.", richtig: "Nach dem ersten Todesfall ist eine entgegenstehende Verfügung grundsätzlich unwirksam — nicht nur anfechtbar." },
  ],
  merksatz: "Das gemeinsame Testament ist ein Versprechen, das der Tod des Ersten unwiderruflich macht.",
  gewicht: { mandat: 2, reichweite: 3 },
  antwortfreigabe: "abstrakt",
  stand: "2026-09-13",
  quellen: ["Q8 Kap. 3.7", "Q8 Fall 15"],
  verwandt: ["berliner-testament-unternehmer", "pflichtteilsstrafklausel", "unternehmertestament", "alternativen-berliner-testament"],
};
