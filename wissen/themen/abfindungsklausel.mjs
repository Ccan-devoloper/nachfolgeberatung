/* Q9 · Kap. 2.6 */
export default {
  id: "abfindungsklausel",
  titel: "Sechzig Prozent sind kein sicherer Hafen — Abfindungsklauseln",
  bereich: "gesellschaftsrecht",
  kurz: "Ein fester Abschlag im Gesellschaftsvertrag ist keine dauerhafte Garantie: Je weiter die Klausel den Ausscheidenden vom wirklichen Wert entfernt und je größer die Wertentwicklung seither, desto größer das Risiko, dass sie angepasst wird.",
  normen: ["§ 728 BGB", "§ 135 HGB", "§ 138 BGB", "§ 242 BGB"],
  kern: [
    "Ohne Regelung schuldet die Gesellschaft eine dem Wert des Anteils angemessene Abfindung; der Wert darf geschätzt werden. Der Gesellschaftsvertrag kann abweichen — aber nicht beliebig.",
    "Es gibt keinen pauschalen Prozentsatz, der als sicher gilt. Zu prüfen sind vier Dinge getrennt: die Klausel selbst, das Bewertungsverfahren, der Bewertungsstichtag und die Wertentwicklung seit Vertragsschluss.",
    "Eine Klausel kann bei Abschluss wirksam sein und später unzumutbar werden — dann wird sie im Wege der ergänzenden Auslegung angepasst, nicht einfach gestrichen.",
    "Buchwertklauseln verschieben den Konflikt nur: Bei gewachsenen Unternehmen mit stillen Reserven liegt der Buchwert um ein Vielfaches unter dem Verkehrswert, und genau darüber wird dann gestritten.",
    "Für Familienunternehmen ist meist sinnvoller, Bewertungsmethode und einen Schiedsgutachtermechanismus zu regeln, als einen vermeintlich ewigen Abschlag zu versprechen.",
  ],
  einsatzfelder: [
    { situation: "Der Gesellschaftsvertrag stammt von 1994 und nennt den Buchwert als Abfindung.", warum: "Das Unternehmen ist seither um ein Vielfaches gewachsen — die Klausel ist ein Prozessrisiko, das bei der nächsten Übertragung mitgeht." },
    { situation: "Eine niedrige Abfindung soll den Vorwegabschlag bei der Erbschaftsteuer sichern.", warum: "Steuerlich gibt es dafür maximal 30 Prozent Abschlag — gesellschaftsrechtlich muss die Klausel trotzdem wirksam bleiben. Beide Ziele gehören zusammen geprüft." },
  ],
  ablauf: [
    { schritt: "Bewertungsstichtag festlegen", hinweis: "Kündigungszugang, Ausscheidenstag oder letzter Bilanzstichtag — ohne klare Regel streitet man über Monate mit Millionenwirkung." },
    { schritt: "Methode benennen, nicht nur den Abschlag", hinweis: "Ertragswert, vereinfachtes Verfahren oder ein Standard der Wirtschaftsprüfer — die Methode gehört in den Vertrag." },
    { schritt: "Gutachtermechanismus regeln", hinweis: "Wer bestellt den Schiedsgutachter, wie bindend ist das Ergebnis, wer trägt die Kosten?" },
    { schritt: "Zahlungsmodalitäten festlegen", hinweis: "Raten, Verzinsung, Sicherheiten — die Liquidität der Gesellschaft entscheidet mit über die Angemessenheit." },
    { schritt: "Anpassungsklausel aufnehmen", hinweis: "Eine Regel für den Fall, dass sich Wert und Klausel auseinanderentwickeln, ist besser als das spätere Gerichtsurteil." },
  ],
  fehler: [
    { fehler: "Die Abfindungsklausel wird nur steuerlich gedacht.", richtig: "Was steuerlich einen Abschlag bringt, muss gesellschaftsrechtlich wirksam und angemessen sein — sonst fällt beides.", norm: "§ 138 BGB" },
    { fehler: "Ein fester Prozentsatz wird als dauerhaft sicher behandelt.", richtig: "Die Rechtsprechung prüft das Verhältnis zum wirklichen Wert im Zeitpunkt des Ausscheidens — je größer die Lücke, desto größer das Anpassungsrisiko." },
  ],
  merksatz: "Eine Abfindungsklausel ist kein Preis, sondern ein Verfahren — wer nur den Abschlag regelt, regelt den Streit.",
  gewicht: { mandat: 3, reichweite: 2 },
  antwortfreigabe: "abstrakt",
  stand: "2026-09-13",
  quellen: ["Q9 Kap. 2.6"],
  verwandt: ["bewertungsanlass", "vorwegabschlag-familienunternehmen", "nachfolgeklauseln-kg", "konflikt-eskalation"],
};
