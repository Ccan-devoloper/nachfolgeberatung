/* Q7 · Kap. 24.3, 26.2 · Fall 28.13 · Fehler 15 */
export default {
  id: "immobilien-verwaltungsvermoegen",
  titel: "Das Parkhaus-Urteil — warum „operativ\" nicht „begünstigt\" heißt",
  bereich: "immobilien",
  kurz: "An Dritte überlassener Grundbesitz ist erbschaftsteuerlich Verwaltungsvermögen — auch ein eigenbetriebenes Parkhaus, wie der Bundesfinanzhof 2024 entschied; nur die gesetzlichen Ausnahmen retten Immobilien in die Verschonung.",
  normen: ["§ 13b Abs. 4 Nr. 1 ErbStG", "§ 13b Abs. 2 ErbStG", "§ 13a ErbStG"],
  kern: [
    "Vermietete Immobilien im Betriebsvermögen sind grundsätzlich Verwaltungsvermögen: Sie werden nicht verschont, und zu viele davon kippen die ganze Begünstigung.",
    "Der Bundesfinanzhof hat 2024 ein selbst betriebenes Parkhaus als Verwaltungsvermögen eingestuft — die Überlassung der Stellplätze an Dritte zählt, nicht der Aufwand, den der Betreiber treibt.",
    "Was ertragsteuerlich gewerblich ist, ist erbschaftsteuerlich nicht automatisch begünstigt — die Begriffe laufen auseinander.",
    "Die Ausnahmen sind eng und wörtlich zu prüfen: Betriebsaufspaltung und Sonderbetriebsvermögen, Betriebsverpachtung im Ganzen, Überlassung im Konzern, Wohnungsunternehmen mit wirtschaftlichem Geschäftsbetrieb, land- und forstwirtschaftliche Nutzung.",
    "Für Hotels, Parkhäuser, Logistikflächen, Selfstorage und ähnliche Mischformen muss vor der Übertragung geklärt sein, auf welcher Seite der Linie sie liegen.",
  ],
  einsatzfelder: [
    { situation: "Ein Unternehmen betreibt neben der Produktion ein Parkhaus und vermietet Bürofläche.", warum: "Beides ist Verwaltungsvermögen; die Quote entscheidet, ob die Produktion noch verschont wird oder das Ganze durchfällt." },
    { situation: "Das Betriebsgrundstück gehört dem Gesellschafter privat und ist an die GmbH vermietet.", warum: "Bei Betriebsaufspaltung ist es ausnahmsweise kein Verwaltungsvermögen — aber nur, wenn die Beherrschung und die Übertragung im Gleichlauf bleiben." },
  ],
  beispiele: [
    { konstellation: "Eine Familie erwartet die volle Verschonung für ihren Parkhausbetrieb mit 600 Stellplätzen, Personal, Schrankenanlage und Wachdienst.", gestaltung: "Das Finanzamt und der Bundesfinanzhof sehen eine Nutzungsüberlassung an Dritte: Verwaltungsvermögen, keine Verschonung. Der Aufwand des Betriebs ändert daran nichts.", pointe: "„Operativer Betrieb\" ist ein Wort aus dem Alltag — das Erbschaftsteuergesetz fragt nur, wer die Fläche nutzt." },
  ],
  fehler: [
    { fehler: "Vermietete Immobilien im Betriebsvermögen werden automatisch als begünstigt angesehen.", richtig: "Sie sind grundsätzlich Verwaltungsvermögen; die Ausnahme muss positiv festgestellt werden.", norm: "§ 13b Abs. 4 Nr. 1 ErbStG" },
    { fehler: "Ertragsteuerliche Gewerblichkeit wird als Nachweis für die Verschonung verwendet.", richtig: "Erbschaftsteuer und Einkommensteuer verwenden verschiedene Begriffe — der Gewerbebetrieb kann voll aus Verwaltungsvermögen bestehen." },
  ],
  merksatz: "Das Erbschaftsteuergesetz fragt nicht, wie viel Arbeit die Immobilie macht — sondern wer sie nutzt.",
  gewicht: { mandat: 3, reichweite: 2 },
  antwortfreigabe: "keine",
  stand: "2026-09-12",
  quellen: ["Q7 Kap. 24.3", "Q7 Kap. 26.2", "Q7 Fall 28.13", "Q7 Fehler 15"],
  verwandt: ["einstiegstest-90-prozent", "betriebsvermoegen-verschonung", "immobilien-nachfolge-struktur", "immobilien-stiftung-rechnen"],
};
