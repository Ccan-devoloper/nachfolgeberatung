/* Q7 · Kap. 17.3, 19 · Fehler 20 */
export default {
  id: "niessbrauch-kg-anteil",
  titel: "Nießbrauch am KG-Anteil — wo zu viel Kontrolle die Steuerneutralität kostet",
  bereich: "gesellschaftsrecht",
  kurz: "Bei Personengesellschaften ist der Nießbrauch heikel: Behält der Übergeber zu viel Einfluss, wird das Kind kein Mitunternehmer, und die stillen Reserven werden aufgedeckt, statt zu Buchwerten überzugehen.",
  normen: ["§ 6 Abs. 3 EStG", "§ 15 Abs. 1 S. 1 Nr. 2 EStG", "§§ 161 ff. HGB", "§ 13b ErbStG"],
  kern: [
    "Die steuerneutrale Übertragung eines Mitunternehmeranteils setzt voraus, dass der Erwerber selbst Mitunternehmer wird — mit Initiative (Stimmrecht, Kontrolle) und Risiko (Gewinn, Verlust, stille Reserven).",
    "Behält der Übergeber per Nießbrauch Stimmrechte und Gewinn nahezu vollständig, fehlt dem Kind die Mitunternehmerinitiative — die Übertragung wird als Entnahme mit Aufdeckung der stillen Reserven behandelt.",
    "Sonderbetriebsvermögen — das Betriebsgrundstück, Gesellschafterdarlehen, die Komplementär-GmbH — muss mitgeplant werden; eine isolierte Anteilsübertragung kann die Begünstigung kosten.",
    "Auch die Erbschaftsteuerverschonung verlangt, dass der Erwerber Mitunternehmer wird — sonst kein begünstigtes Betriebsvermögen.",
    "Die Faustregel der Praxis: Gewinnbezug kann beim Nießbraucher liegen, Stimmrechte in Grundlagenfragen müssen beim Erwerber bleiben — mindestens mitentscheidend.",
  ],
  einsatzfelder: [
    { situation: "Ein Kommanditist will seinen Anteil an der Familien-KG übergeben, aber die Gewinne bis zur Rente behalten.", warum: "Der Ertragsnießbrauch ist möglich, wenn der Erwerber die Gesellschafterrechte wirklich ausübt — der Vertrag muss das ausdrücklich so verteilen." },
    { situation: "Das Betriebsgrundstück gehört dem Vater privat und ist an die KG vermietet.", warum: "Es ist Sonderbetriebsvermögen; wird nur der Anteil verschenkt, kann die Buchwertfortführung scheitern." },
  ],
  beispiele: [
    { konstellation: "Ein Vater überträgt seinen KG-Anteil auf die Tochter und behält per Nießbrauch alle Stimmrechte und den gesamten Gewinn.", gestaltung: "Das Finanzamt sieht die Tochter nicht als Mitunternehmerin: Die stillen Reserven im Anteil gelten als entnommen und werden sofort versteuert — obwohl kein Euro geflossen ist.", pointe: "Der Vater wollte Kontrolle behalten und hat stattdessen eine Steuerrechnung ohne Liquidität ausgelöst." },
  ],
  fehler: [
    { fehler: "Der Nießbrauch am KG-Anteil wird nach dem Muster des Immobiliennießbrauchs gestaltet.", richtig: "Bei der KG entscheidet die Mitunternehmerstellung des Erwerbers — der Vertrag muss Initiative und Risiko beim Kind belassen.", norm: "§ 15 Abs. 1 S. 1 Nr. 2 EStG" },
    { fehler: "Nur der Gesellschaftsanteil wird übertragen, das Sonderbetriebsvermögen bleibt beim Übergeber.", richtig: "Wesentliche Betriebsgrundlagen im Sonderbetriebsvermögen müssen mitgehen, sonst ist der Anteil nicht zu Buchwerten übertragbar.", norm: "§ 6 Abs. 3 EStG" },
  ],
  merksatz: "Bei der KG darf der Nießbraucher den Gewinn behalten — nicht das Sagen.",
  gewicht: { mandat: 3, reichweite: 2 },
  antwortfreigabe: "keine",
  stand: "2026-09-12",
  quellen: ["Q7 Kap. 17.3", "Q7 Kap. 19", "Q7 Fehler 20"],
  verwandt: ["niessbrauch-grundlagen", "sonderbetriebsvermoegen", "nachfolgeklauseln-kg", "dotation-ertragsteuer"],
};
