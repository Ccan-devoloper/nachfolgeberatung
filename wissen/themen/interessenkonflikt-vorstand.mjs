/* Q5 Folie 61 · § 84b BGB, Interessenkonflikte; Q7 Nr. 30.044 */
export default {
  id: "interessenkonflikt-vorstand",
  titel: "Wenn der Vorstand über die eigene Ausschüttung entscheidet",
  bereich: "familygovernance",
  kurz: "In der Familienstiftung sitzen oft dieselben Menschen im Vorstand, die Leistungen empfangen — das ist zulässig, verlangt aber Stimmverbote und einen Freigabeweg ohne den Betroffenen.",
  normen: ["§ 84b BGB", "§ 84 Abs. 1 S. 1 BGB", "§ 84a Abs. 2 BGB", "§ 181 BGB"],
  kern: [
    "Begünstigte und der Stifter selbst dürfen grundsätzlich im Vorstand sitzen. Die Grenzen zieht das Gesetz dort, wo ein Organmitglied über eigene Angelegenheiten entscheidet.",
    "Der klassische Fall in der Familienstiftung: Der Vorstand beschliesst über die jährliche Ausschüttung — und ist selbst Empfänger.",
    "Für sich genommen ist das kein Verbot, aber ein Risiko: Ein solcher Beschluss ist angreifbar, und die Business Judgment Rule trägt ihn nicht, wenn das Eigeninteresse die Entscheidung geprägt hat.",
    "Die saubere Lösung steht in der Satzung, nicht im Vertrauen: ein Stimmverbot für die eigene Leistung, ersatzweise die Entscheidung durch ein anderes Organ.",
    "Das gilt auch für Geschäfte der Stiftung mit einem Vorstandsmitglied — Mietverträge, Beraterverträge, Darlehen. Hier gehört die Befreiung von den Beschränkungen des Selbstkontrahierens bewusst entschieden, nicht standardmässig erteilt.",
    "Ein zweites Gremium ist deshalb bei Familienstiftungen selten Luxus: Es entscheidet, wenn der Vorstand befangen ist, und es macht die Entscheidung überprüfbar.",
    "Dokumentiert wird, wer nicht mitgestimmt hat — das ist der Beleg, der Jahre später zählt.",
  ],
  fehler: [
    { fehler: "Die Satzung erlaubt Begünstigten den Vorstandssitz und schweigt zum Rest.", richtig: "Dann entscheidet der Empfänger über seine eigene Leistung. Ein Stimmverbot und ein Ersatzentscheider gehören in dieselbe Klausel.", norm: "§ 84b BGB" },
    { fehler: "Der Vorstand wird pauschal von den Beschränkungen des Selbstkontrahierens befreit.", richtig: "Das ist bei einer Stiftung ohne Gesellschafter ein weitreichender Freibrief. Eine Befreiung sollte auf bestimmte Geschäfte begrenzt und an die Zustimmung eines zweiten Organs gebunden sein.", norm: "§ 181 BGB" },
  ],
  einsatzfelder: [
    { situation: "Eine Familienstiftung wird mit einem dreiköpfigen Vorstand aus Vater und zwei Kindern besetzt, alle drei sind begünstigt.", warum: "Genau die Konstellation, für die Stimmverbot und Ersatzentscheider gemacht sind — sonst hängt jede Ausschüttung an der Frage, wer sie beschlossen hat." },
  ],
  merksatz: "Wer über die eigene Ausschüttung mitstimmt, macht sie angreifbar — auch wenn sie richtig ist.",
  gewicht: { mandat: 2, reichweite: 2 },
  antwortfreigabe: "abstrakt",
  stand: "2026-09-18",
  quellen: ["Q5 Folie 61", "Q7 Nr. 30.044"],
  verwandt: ["stiftung-governance", "organhaftung-stiftung", "governance-ebenen", "versorgungsstiftung"],
};
