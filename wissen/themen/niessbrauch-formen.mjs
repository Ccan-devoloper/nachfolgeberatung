/* Q7 Kap. 17, Nr. 30.087–30.089 · Zuwendungsnießbrauch, Bruchteilsnießbrauch, Erlöschen */
export default {
  id: "niessbrauch-formen",
  titel: "Drei Arten von Nießbrauch — und was passiert, wenn er endet",
  bereich: "schenkung",
  kurz: "Nießbrauch ist nicht gleich Nießbrauch: Man kann das Eigentum weggeben und die Erträge behalten, nur die Erträge verschenken oder beides teilen — und jeder Weg endet anders.",
  normen: ["§§ 1030 ff. BGB", "§ 1059 BGB", "§ 7 Abs. 1 Nr. 1 ErbStG", "§ 14 BewG"],
  kern: [
    "Beim Vorbehaltsnießbrauch verschenkt der Übergeber die Substanz und behält die Nutzung. Das ist der Normalfall der vorweggenommenen Erbfolge.",
    "Beim Zuwendungsnießbrauch ist es umgekehrt: Das Eigentum bleibt, verschenkt wird nur das Nutzungsrecht — etwa die Mieten eines Hauses für zehn Jahre an ein Kind in der Ausbildung.",
    "Steuerlich sind das zwei verschiedene Welten. Beim Vorbehalt mindert der Kapitalwert die Schenkung; beim Zuwendungsnießbrauch ist genau dieser Kapitalwert die Schenkung.",
    "Der Bruchteilsnießbrauch erfasst nur einen Teil — etwa die Hälfte der Erträge eines Anteils. Das erlaubt eine feinere Versorgung, ist gesellschafts- und steuerrechtlich aber anspruchsvoll und gehört nicht in einen Standardvertrag.",
    "Der am häufigsten übersehene Punkt ist das Ende. Erlischt der Nießbrauch — durch Tod, Fristablauf oder Verzicht —, verschiebt sich die Einkünftezurechnung auf den Eigentümer.",
    "Ein Verzicht zu Lebzeiten ist dabei kein neutraler Vorgang, sondern kann selbst eine Zuwendung sein.",
    "Deshalb gehört die Anschlussplanung in den Vertrag, nicht ans Ende: Wer trägt dann die Lasten, wovon lebt der bisherige Nießbraucher, und was ist mit laufenden Finanzierungen.",
  ],
  gegenueberstellung: {
    links: {
      label: "Vorbehaltsnießbrauch",
      punkte: [
        { krit: "Was wechselt", wert: "das Eigentum" },
        { krit: "Was bleibt", wert: "die Erträge beim Übergeber" },
        { krit: "Schenkungsteuer", wert: "Wert der Sache abzüglich Kapitalwert des Nießbrauchs", norm: "§ 14 BewG" },
        { krit: "Typischer Zweck", wert: "Nachfolge einleiten, Versorgung sichern" },
      ],
    },
    rechts: {
      label: "Zuwendungsnießbrauch",
      punkte: [
        { krit: "Was wechselt", wert: "das Nutzungsrecht" },
        { krit: "Was bleibt", wert: "das Eigentum beim Übergeber" },
        { krit: "Schenkungsteuer", wert: "der Kapitalwert des Nießbrauchs selbst", norm: "§ 14 BewG" },
        { krit: "Typischer Zweck", wert: "befristete Versorgung, ohne Substanz zu geben" },
      ],
    },
  },
  fehler: [
    { fehler: "Der Nießbrauch wird bestellt und das Ende nicht geregelt.", richtig: "Mit dem Erlöschen ändern sich Einkünftezurechnung, Lastentragung und oft die Finanzierung. Das gehört vorher entschieden, nicht im Erbfall." },
    { fehler: "Auf den Nießbrauch wird später 'einfach verzichtet', um die Sache zu bereinigen.", richtig: "Der Verzicht kann eine eigene Zuwendung sein — mit eigener Schenkungsteuer. Er gehört durchgerechnet." },
  ],
  einsatzfelder: [
    { situation: "Eltern wollen einem Kind für die Dauer des Studiums die Mieten eines Hauses zukommen lassen, das Haus selbst aber behalten.", warum: "Das ist der Zuwendungsnießbrauch: befristet, ohne Substanzverlust, mit einer überschaubaren Schenkungsteuer auf den Kapitalwert." },
  ],
  merksatz: "Beim Nießbrauch entscheidet nicht, was man behält, sondern was man verschenkt — und wann es zurückfällt.",
  gewicht: { mandat: 2, reichweite: 2 },
  antwortfreigabe: "abstrakt",
  stand: "2026-09-18",
  quellen: ["Q7 Kap. 17 und Nr. 30.087–30.089"],
  verwandt: ["niessbrauch-grundlagen", "niessbrauch-immobilie", "niessbrauch-gmbh-anteil", "pflichtteil-fristanlauf"],
};
