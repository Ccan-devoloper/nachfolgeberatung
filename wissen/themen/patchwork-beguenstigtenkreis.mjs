/* Q7 Nr. 30.103 · Patchwork und Familienstiftung; Q5, Q10 · entferntest Berechtigter */
export default {
  id: "patchwork-beguenstigtenkreis",
  titel: "Patchwork in der Familienstiftung — wer gehört zur Familie?",
  bereich: "familienstiftung",
  kurz: "Stiefkinder, Adoptivkinder und Kinder aus zwei Ehen müssen im Begünstigtenkreis bewusst geregelt werden — sonst entscheidet ein Auslegungsstreit, und steuerlich zählt ohnehin eine andere Verwandtschaft.",
  normen: ["§ 15 Abs. 2 S. 1 ErbStG", "§ 15 Abs. 1 ErbStG", "§ 1754 BGB", "§ 81 Abs. 1 Nr. 1 BGB"],
  kern: [
    "Das Wort „Abkömmlinge\" in einer Satzung klingt eindeutig und ist es nicht: Es erfasst leibliche und adoptierte Kinder, aber nicht die Kinder des neuen Ehepartners.",
    "Wer Stiefkinder einbeziehen will, muss sie ausdrücklich nennen — und entscheiden, ob sie drinbleiben, wenn die Ehe endet.",
    "Bei der Adoption ist es umgekehrt: Ein angenommenes Kind wird zivilrechtlich zum Kind, mit allen Folgen für den Begünstigtenkreis. Das ist gewollt oder es ist ein Unfall.",
    "Zivilrecht und Steuerrecht laufen hier auseinander. Für die Steuerklasse bei der Errichtung zählt das Verwandtschaftsverhältnis zwischen Stifter und dem nach der Satzung entferntest Berechtigten.",
    "Ein Stiefkind steht dem Stifter erbschaftsteuerlich näher, als viele denken — aber der Partner einer nicht verheirateten Beziehung und dessen Kinder stehen ihm fern.",
    "Ein einziger familienfremder Berechtigter in der Satzung kann deshalb die Steuerklasse für die gesamte Errichtung verschlechtern.",
    "Die Konsequenz ist nüchtern: Der Begünstigtenkreis wird nicht nach Gefühl formuliert, sondern nach zwei Prüfungen — wer soll versorgt werden, und was kostet dieser Kreis bei der Errichtung.",
  ],
  fehler: [
    { fehler: "Die Satzung spricht von „meiner Familie\" oder „meinen Angehörigen\".", richtig: "Beides ist auslegungsbedürftig und produziert Streit, sobald jemand ausgeschlossen werden soll. Der Kreis gehört namentlich oder über klar definierte Abstammungslinien beschrieben." },
    { fehler: "Der Lebensgefährte wird aufgenommen, um ihn abzusichern.", richtig: "Das kann die Steuerklasse der gesamten Errichtung verschlechtern. Seine Versorgung gehört dann eher ausserhalb der Stiftung geregelt — oder in eine zweite Struktur.", norm: "§ 15 Abs. 2 S. 1 ErbStG" },
    { fehler: "Stiefkinder werden aufgenommen, ohne den Fall der Trennung zu bedenken.", richtig: "Ohne Regelung bleiben sie begünstigt, auch wenn die Ehe längst geschieden ist. Eine Bedingung oder ein Ausschlusstatbestand gehört in dieselbe Klausel." },
  ],
  einsatzfelder: [
    { situation: "Ein Unternehmer in zweiter Ehe hat zwei eigene Kinder und zwei Kinder der Ehefrau, die er aufgezogen hat.", warum: "Genau hier entscheidet die Satzung, nicht das Gesetz. Und die Reihenfolge ist wichtig: erst den gewollten Kreis bestimmen, dann seine steuerlichen Kosten ansehen." },
  ],
  merksatz: "Wer zur Familie gehört, entscheidet in der Stiftung die Satzung — nicht das Gefühl und nicht das Melderegister.",
  gewicht: { mandat: 3, reichweite: 3 },
  antwortfreigabe: "abstrakt",
  stand: "2026-09-18",
  quellen: ["Q7 Nr. 30.103", "Q5 und Q10 zum entferntest Berechtigten"],
  verwandt: ["steuerklassenprivileg", "familienstiftung-begriff", "zweckaenderung-neue-stiftung", "versorgungsstiftung"],
};
