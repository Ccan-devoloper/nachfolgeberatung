/* Q5 Folien 199 f. · OLG Frankfurt a.M., Urt. v. 15.10.2010 – 4 U 134/10; Q10 Abschn. B.9 */
export default {
  id: "testamentsvollstrecker-stiftung",
  titel: "Testamentsvollstrecker und Stiftung von Todes wegen — wer verwaltet was",
  bereich: "erbrecht",
  kurz: "Wird die Stiftung erst mit dem Tod errichtet, endet das Amt des Testamentsvollstreckers nicht automatisch mit ihrer Anerkennung — aber er muss freigeben, was er nicht mehr braucht.",
  normen: ["§ 2217 Abs. 1 BGB", "§ 80 Abs. 2 S. 2 BGB", "§ 81 Abs. 2 BGB"],
  kern: [
    "Bei einer Stiftung von Todes wegen klaffen zwei Rollen auseinander: Der Testamentsvollstrecker verwaltet den Nachlass, die Stiftung soll ihn bekommen — und beide bestehen eine Zeit lang nebeneinander.",
    "Der Vollstrecker ist derjenige, der die Anerkennung beantragt und das Stiftungsvorhaben zu Ende bringt; dafür sollte ihm das Testament ausdrücklich die Befugnis geben, auch die Satzung anzupassen.",
    "Ein Oberlandesgericht hatte den Fall, dass der Vollstrecker nach der Anerkennung weiterverwalten wollte — bei einem Nachlass in zweistelliger Millionenhöhe.",
    "Das Gericht entschied: Das Amt endet nicht automatisch mit der Anerkennung der Stiftung.",
    "Es besteht aber eine Freigabepflicht, soweit das Vermögen für die verbliebenen Aufgaben nicht mehr gebraucht wird.",
    "Wie es ausgeht, hängt damit vollständig an der konkreten Gestaltung des Testaments — eine unbefriedigende Lage für beide Seiten.",
    "Die saubere Lösung steht vorher fest: Das Testament sagt, wann das Amt endet, und die dauerhafte Kontrolle über das Vermögen wird in der Stiftungssatzung angelegt, nicht in einer verlängerten Testamentsvollstreckung.",
  ],
  fehler: [
    { fehler: "Das Testament ernennt einen Testamentsvollstrecker und errichtet eine Stiftung, ohne das Verhältnis beider zu regeln.", richtig: "Dann streiten Vollstrecker und Stiftungsvorstand darüber, wer verwalten darf. Das Testament sollte Aufgabe, Dauer und Endpunkt des Amtes benennen.", norm: "§ 2217 Abs. 1 BGB" },
    { fehler: "Der Testamentsvollstrecker soll dauerhaft ein Gegengewicht zum Stiftungsvorstand bilden.", richtig: "Dafür ist das Amt nicht gemacht. Ein Kontrollgremium gehört in die Satzung; es hält länger und ist klarer legitimiert." },
  ],
  einsatzfelder: [
    { situation: "Ein Unternehmer will seine Stiftung erst nach seinem Tod entstehen lassen und den Weg dorthin einem Vertrauten überlassen.", warum: "Das ist der Regelfall — und er funktioniert, wenn das Testament dem Vollstrecker die nötigen Befugnisse gibt und zugleich sagt, wann Schluss ist." },
  ],
  merksatz: "Der Testamentsvollstrecker bringt die Stiftung zur Welt — er soll sie nicht auf Dauer führen.",
  gewicht: { mandat: 2, reichweite: 2 },
  antwortfreigabe: "abstrakt",
  stand: "2026-09-18",
  quellen: ["Q5 Folien 199 f.", "Q10 Abschn. B.9"],
  verwandt: ["stiftung-von-todes-wegen", "dauertestamentsvollstreckung", "stiftung-governance", "unternehmertestament"],
};
