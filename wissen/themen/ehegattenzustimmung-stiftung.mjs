/* Q10 Abschn. B · Familienrechtliche Bezüge, § 1365 BGB, Unterhalt */
export default {
  id: "ehegattenzustimmung-stiftung",
  titel: "Ohne die Unterschrift des Ehegatten ist die Stiftung nichtig",
  bereich: "vermoegensschutz",
  kurz: "Wer in Zugewinngemeinschaft lebt und nahezu sein ganzes Vermögen in eine Stiftung gibt, braucht die Zustimmung des Ehegatten — sonst ist das Stiftungsgeschäft von Anfang an unwirksam.",
  normen: ["§ 1365 BGB", "§ 1360 S. 1 BGB", "§§ 1601, 1602 BGB", "§ 1408 BGB"],
  kern: [
    "Im gesetzlichen Güterstand kann ein Ehegatte nicht über sein Vermögen im Ganzen verfügen, ohne dass der andere zustimmt.",
    "Die Rechtsprechung hat das in Zahlen gefasst: Bei grösseren Vermögen greift die Zustimmungspflicht ab etwa 90 Prozent, bei kleineren ab etwa 85 Prozent.",
    "Die Folge ist die härteste, die das Zivilrecht kennt: Ohne Zustimmung ist das Stiftungsgeschäft von Anfang an nichtig — nicht schwebend unwirksam, nicht anfechtbar.",
    "Das trifft ausgerechnet die Fälle, in denen die Stiftung am wichtigsten ist: den Unternehmer, dessen Vermögen im Wesentlichen aus der Beteiligung besteht.",
    "Die Lösung ist einfach und wird trotzdem oft vergessen: Der Ehegatte unterzeichnet mit, oder der Güterstand wird vorher durch Ehevertrag geändert.",
    "Ein zweiter familienrechtlicher Punkt steht daneben: Ehegatten und Verwandte in gerader Linie schulden einander Unterhalt. Diese Pflichten muss der Stifter auch nach der Dotation noch erfüllen können.",
    "Umgekehrt gilt: Leistungen der Stiftung an Familienangehörige können auf deren Unterhaltsansprüche angerechnet werden — die Versorgung über die Stiftung ersetzt den Unterhalt also teilweise.",
  ],
  zahlen: [
    { wert: "etwa 90 Prozent", bedeutung: "Ab diesem Anteil des Gesamtvermögens gilt eine Verfügung bei grösseren Vermögen als Verfügung über das Vermögen im Ganzen.", norm: "§ 1365 BGB" },
    { wert: "etwa 85 Prozent", bedeutung: "Dieselbe Schwelle bei kleineren Vermögen; als klein gelten Vermögen ab rund 50.000 Euro.", norm: "§ 1365 BGB" },
  ],
  fehler: [
    { fehler: "Der Unternehmer errichtet die Stiftung allein, weil das Vermögen ja ihm gehört.", richtig: "Es gehört ihm — aber er darf über nahezu alles nicht ohne Zustimmung verfügen. Die Unterschrift des Ehegatten gehört unter das Stiftungsgeschäft oder in eine gesonderte Zustimmungserklärung.", norm: "§ 1365 BGB" },
    { fehler: "Es wird darauf vertraut, dass sich ein Verstoss später heilen lässt.", richtig: "Das Geschäft ist von Anfang an nichtig. Eine Heilung setzt eine neue Errichtung voraus — mit neuem Stichtag für Bewertung, Fristen und Steuer." },
    { fehler: "Nach der Dotation reicht das verbliebene Vermögen nicht mehr für den eigenen Unterhalt und den der Familie.", richtig: "Unterhaltspflichten bestehen weiter und lassen sich nicht wegstiften. Sie gehören in die Vermögensplanung vor der Errichtung.", norm: "§ 1360 S. 1 BGB" },
  ],
  einsatzfelder: [
    { situation: "Ein verheirateter Unternehmer im gesetzlichen Güterstand will seine Beteiligung — praktisch sein gesamtes Vermögen — in eine Familienstiftung geben.", warum: "Hier ist die Zustimmung des Ehegatten keine Höflichkeit, sondern Wirksamkeitsvoraussetzung. Sie gehört an den Anfang der Planung, nicht ans Ende." },
  ],
  merksatz: "Wer fast alles stiftet, braucht die Unterschrift des Ehegatten — sonst hat er gar nichts gestiftet.",
  gewicht: { mandat: 3, reichweite: 3 },
  antwortfreigabe: "abstrakt",
  stand: "2026-09-18",
  quellen: ["Q10 Abschn. B, familienrechtliche Bezüge"],
  verwandt: ["zugewinn-stiftung", "ehevertrag-unternehmer", "ehegattenerbrecht-stiftung", "stiftung-errichtung-ablauf"],
};
