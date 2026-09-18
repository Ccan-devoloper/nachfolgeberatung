/* Q7 Nr. 30.129, Kap. zu § 2205 BGB · Testamentsvollstreckung nach dem MoPeG */
export default {
  id: "testamentsvollstreckung-personengesellschaft",
  titel: "Testamentsvollstreckung über einen KG-Anteil — der Gesellschaftsvertrag entscheidet zuerst",
  bereich: "nachfolge",
  kurz: "Die Anordnung im Testament reicht nicht: Ob ein Testamentsvollstrecker einen Personengesellschaftsanteil wirklich verwalten darf, sagt der Gesellschaftsvertrag.",
  normen: ["§ 2205 BGB", "§ 2197 BGB", "§ 705 BGB", "§ 177 HGB"],
  kern: [
    "Bei einem GmbH-Anteil ist die Testamentsvollstreckung unproblematisch: Der Vollstrecker übt die Gesellschafterrechte aus, der Erbe bleibt aussen vor.",
    "Bei Personengesellschaften ist es schwieriger, weil dort die persönliche Stellung des Gesellschafters und die Haftung im Weg stehen.",
    "Beim Kommanditanteil, wo die Haftung auf die Einlage beschränkt ist, lässt sich eine Vollstreckung regelmässig durchführen; bei einer unbeschränkt haftenden Beteiligung stösst sie an Grenzen.",
    "Entscheidend ist aber nicht nur die Rechtsform, sondern der Gesellschaftsvertrag: Er muss die Testamentsvollstreckung zulassen oder die Mitgesellschafter müssen zustimmen.",
    "Seit der Modernisierung des Personengesellschaftsrechts ist das nicht einfacher geworden, sondern nur klarer geregelt — und die Verträge vieler Familiengesellschaften stammen aus der Zeit davor.",
    "Die Folge ist unangenehm: Eine testamentarische Anordnung, die sich gesellschaftsrechtlich nicht durchsetzt, läuft ins Leere — und der unerfahrene Erbe steht ohne Schutz in der Gesellschafterversammlung.",
    "Deshalb gehört die Reihenfolge umgedreht: erst den Gesellschaftsvertrag ansehen, dann das Testament schreiben.",
  ],
  fehler: [
    { fehler: "Das Testament ordnet Dauertestamentsvollstreckung über alle Beteiligungen an, ohne die Verträge zu prüfen.", richtig: "Für Personengesellschaftsanteile kann sie unwirksam sein. Beide Dokumente müssen zusammen entworfen werden.", norm: "§ 2205 BGB" },
    { fehler: "Der Gesellschaftsvertrag wird geändert, das alte Testament bleibt liegen.", richtig: "Eine Nachfolgeklausel und eine Vollstreckungsanordnung müssen zueinander passen. Ändert sich eine, gehört die andere auf den Tisch." },
  ],
  einsatzfelder: [
    { situation: "Ein Unternehmer hält Kommanditanteile und will minderjährige oder unerfahrene Erben für einige Jahre schützen.", warum: "Das ist der Hauptanwendungsfall — und er funktioniert, wenn der Gesellschaftsvertrag die Vollstreckung ausdrücklich zulässt." },
  ],
  merksatz: "Was das Testament anordnet, muss der Gesellschaftsvertrag erlauben — sonst ordnet es nichts an.",
  gewicht: { mandat: 2, reichweite: 2 },
  antwortfreigabe: "abstrakt",
  stand: "2026-09-18",
  quellen: ["Q7 Nr. 30.129 und Kap. zu § 2205 BGB"],
  verwandt: ["dauertestamentsvollstreckung", "nachfolgeklauseln-kg", "unternehmertestament", "minderjaehrige-nachfolge"],
};
