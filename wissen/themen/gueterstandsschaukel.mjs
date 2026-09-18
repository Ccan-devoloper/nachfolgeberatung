/* Q7 Nr. 30.102 · Güterstandsschaukel; Q1 · Zugewinn und Stiftung */
export default {
  id: "gueterstandsschaukel",
  titel: "Die Güterstandsschaukel — Vermögen zwischen Ehegatten verschieben, ohne Schenkungsteuer",
  bereich: "schenkung",
  kurz: "Wer den Güterstand beendet, löst einen echten Zugewinnausgleich aus — und der ist keine Schenkung, sondern die Erfüllung eines gesetzlichen Anspruchs.",
  normen: ["§ 5 Abs. 2 ErbStG", "§ 1378 BGB", "§ 1408 BGB", "§ 7 Abs. 1 Nr. 1 ErbStG"],
  kern: [
    "Endet die Zugewinngemeinschaft, hat der Ehegatte mit dem geringeren Zugewinn einen Anspruch auf die Hälfte der Differenz.",
    "Dieser Anspruch ist keine Schenkung. Wird er erfüllt, fällt keine Schenkungsteuer an — auch nicht in Höhe von Millionenbeträgen.",
    "Die Güterstandsschaukel nutzt das bewusst: Die Eheleute beenden den gesetzlichen Güterstand durch Ehevertrag, rechnen ab, und vereinbaren ihn anschliessend neu.",
    "Für Unternehmerfamilien ist das interessant, weil es Vermögen auf den Ehegatten bringt, ohne Freibeträge zu verbrauchen — und weil beide danach eigene Freibeträge für die nächste Generation haben.",
    "Es ist auch ein Weg, Vermögen für eine Stiftungserrichtung auf beide Ehegatten zu verteilen, bevor gestiftet wird.",
    "Die Grenzen sind real: Der Ausgleich muss tatsächlich geschuldet und tatsächlich erfüllt werden, nicht nur auf dem Papier stehen.",
    "Und das Timing zählt — eine Gestaltung, die erkennbar nur der Steuer dient und den Güterstand am selben Tag wieder herstellt, lädt zur Diskussion über den Gestaltungsmissbrauch ein.",
  ],
  fehler: [
    { fehler: "Der Ausgleich wird vereinbart, aber nie gezahlt — 'das bleibt ja in der Familie'.", richtig: "Ein nicht erfüllter Anspruch verschiebt kein Vermögen. Erfüllung heisst Übertragung, mit Vollzug und Nachweis." },
    { fehler: "Beendigung und Neubegründung des Güterstands stehen in derselben Urkunde und am selben Tag.", richtig: "Das ist der klassische Angriffspunkt. Abstand, eigenständige Gründe und ein tatsächlicher Vollzug dazwischen tragen die Gestaltung." },
    { fehler: "Der Betrieb wird zur Erfüllung des Anspruchs übertragen, ohne die ertragsteuerlichen Folgen zu prüfen.", richtig: "Die Erfüllung einer Geldschuld mit einem Wirtschaftsgut ist ein entgeltlicher Vorgang — und kann stille Reserven aufdecken." },
  ],
  einsatzfelder: [
    { situation: "Das gesamte Unternehmensvermögen steht bei einem Ehegatten, und die Familie plant eine Stiftung oder eine Schenkung an die Kinder.", warum: "Vorher auszugleichen kostet keine Schenkungsteuer und verdoppelt anschliessend die Freibeträge gegenüber der nächsten Generation." },
  ],
  merksatz: "Der Zugewinnausgleich ist keine Schenkung — das ist der einzige legale Weg, grosse Beträge zwischen Ehegatten steuerfrei zu bewegen.",
  gewicht: { mandat: 3, reichweite: 3 },
  antwortfreigabe: "abstrakt",
  stand: "2026-09-18",
  quellen: ["Q7 Nr. 30.102", "Q1 Abschn. 3.2.1"],
  verwandt: ["ehevertrag-unternehmer", "zugewinn-stiftung", "ehegattenerbrecht-stiftung", "steuerklassenprivileg"],
};
