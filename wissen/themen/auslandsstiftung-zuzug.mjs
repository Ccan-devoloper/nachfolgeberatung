/* Q5 Teil 5 · Begrifflichkeiten und Einsatzmöglichkeiten; Q4 · Rechtstypenvergleich */
export default {
  id: "auslandsstiftung-zuzug",
  titel: "Wer nach Deutschland zieht und eine Stiftung mitbringt",
  bereich: "liechtenstein",
  kurz: "Das überzeugendste Einsatzfeld der ausländischen Stiftung ist nicht der Weg hinaus, sondern der Weg herein: Wer nach Deutschland zieht, kann verhindern, dass sein Auslandsvermögen hier steuerlich verstrickt wird.",
  normen: ["§ 2 Abs. 1 Nr. 1 ErbStG", "§ 17 EStG", "§ 6 AStG", "§ 15 Abs. 4 AStG", "§ 80 Abs. 1 S. 1 BGB"],
  kern: [
    "Mit dem Wohnsitz in Deutschland beginnt die unbeschränkte Steuerpflicht — und mit ihr greift die deutsche Erbschaft- und Schenkungsteuer auf das weltweite Vermögen zu.",
    "Wer sein Vermögen vor dem Zuzug in eine ausländische Stiftung gegeben hat, hat es aus dem persönlichen Vermögen herausgelöst, bevor die deutsche Anknüpfung entstand. Das ist keine Umgehung, sondern eine Frage der Reihenfolge.",
    "Dasselbe gilt für Kapitalgesellschaftsanteile: Sie werden mit dem Zuzug für die Wegzugsbesteuerung verstrickt. Liegen sie bereits in einer Stiftung, entsteht diese Verstrickung nicht.",
    "Häufiger ist der zweite Fall: Jemand zieht zu und hat bereits eine Struktur — oft einen Trust aus einem Common-Law-Land. Dann geht es nicht um Gestaltung, sondern um die Frage, was diese Struktur im deutschen Steuerrecht ist.",
    "Trusts werden ausländischen Stiftungen im Steuerrecht weitgehend gleichgestellt. Die Zurechnungsbesteuerung erfasst auch Vermögensmassen ohne Rechtspersönlichkeit.",
    "Ob ein ausländisches Gebilde als Stiftung zählt, entscheidet der Rechtstypenvergleich am Massstab des deutschen Stiftungsbegriffs. Entscheidend ist die Funktionsäquivalenz, vor allem die Mitgliederlosigkeit.",
    "Eine Besonderheit, die gern übersehen wird: Liegt der Verwaltungssitz einer nach ausländischem Recht errichteten Stiftung im Inland, unterliegt sie nicht der Zurechnungsbesteuerung — sie wird dann wie eine inländische Stiftung behandelt.",
    "Der Zuzug ist der Moment, in dem sich das entscheidet. Danach lässt sich die Reihenfolge nicht mehr herstellen.",
  ],
  einsatzfelder: [
    { situation: "Eine Familie aus einem Drittstaat verlegt den Lebensmittelpunkt nach Deutschland und hält Auslandsvermögen.", warum: "Vor dem Zuzug lässt sich die Struktur so ordnen, dass deutsches Erbschaftsteuerrecht und Wegzugsbesteuerung nicht auf das gesamte Weltvermögen durchgreifen." },
    { situation: "Jemand zieht zu und ist Begünstigter eines bestehenden Familientrusts.", warum: "Hier ist keine Gestaltung nötig, sondern eine Einordnung: Wie wird der Trust in Deutschland behandelt, und was löst eine Ausschüttung aus?" },
    { situation: "Ein in Deutschland ansässiger Unternehmer ohne Auslandsbezug will eine ausländische Stiftung errichten.", warum: "Das ist der Fall, in dem regelmässig abzuraten ist — die vier Hürden fallen alle an, die Vorteile greifen nicht." },
  ],
  fehler: [
    { fehler: "Die Struktur wird nach dem Zuzug aufgesetzt.", richtig: "Dann greifen alle deutschen Regeln auf die Übertragung durch: Schenkungsteuer in Klasse III und Wegzugsbesteuerung. Der zeitliche Vorlauf ist der ganze Gestaltungsspielraum.", norm: "§ 6 AStG" },
    { fehler: "Ein bestehender Trust wird beim Zuzug nicht erwähnt, weil er 'im Ausland liegt'.", richtig: "Die Zurechnungsbesteuerung und die Erklärungspflichten gelten unabhängig davon, wo das Vermögen liegt. Unterlassene Angaben sind hier kein Randthema.", norm: "§ 15 Abs. 4 AStG" },
  ],
  beispiele: [
    { konstellation: "Eine Ärztin, 47, zieht aus der Schweiz nach Deutschland und hält Beteiligungen an zwei Schweizer Gesellschaften sowie ein Wertpapierdepot.", gestaltung: "Zwei Jahre vor dem Umzug werden die Beteiligungen in eine liechtensteinische Stiftung eingebracht, deren Stiftungsrat familienfremd besetzt ist; das Depot bleibt im Privatvermögen.", pointe: "Die Beteiligungen werden mit dem Zuzug nicht in Deutschland verstrickt; das Depot schon — aber dort gibt es kaum stille Reserven. Die Struktur schützt genau das, wofür sie teuer ist." },
  ],
  merksatz: "Beim Zuzug entscheidet nicht die Struktur, sondern das Datum — was vorher geordnet ist, bleibt draussen.",
  gewicht: { mandat: 3, reichweite: 2 },
  antwortfreigabe: "keine",
  stand: "2026-09-18",
  quellen: ["Q5 Teil 5 Abschn. 3b", "Q4 Abschn. III.1"],
  verwandt: ["auslandsstiftung-huerden", "erbschaftsteuer-international", "liechtenstein-zurechnung", "wegzugsteuer-stiftung"],
};
