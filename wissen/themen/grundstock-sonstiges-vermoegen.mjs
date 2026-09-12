/* Q7 · Kap. 7 Stiftungsvermögen · Fehler 7 */
export default {
  id: "grundstock-sonstiges-vermoegen",
  titel: "Grundstock oder sonstiges Vermögen — die Weiche, die der Stifter selbst stellt",
  bereich: "familienstiftung",
  kurz: "Seit der Reform unterscheidet das Gesetz Grundstockvermögen, das erhalten bleiben muss, von sonstigem Vermögen, das die Stiftung verbrauchen darf — und der Stifter entscheidet im Stiftungsgeschäft, was wohin gehört.",
  normen: ["§ 83b BGB", "§ 83c BGB", "§ 80 Abs. 1 BGB"],
  kern: [
    "Das Grundstockvermögen ist bei einer Ewigkeitsstiftung ungeschmälert zu erhalten — nur seine Erträge stehen für den Zweck zur Verfügung. Umschichtungsgewinne dürfen genutzt werden, wenn die Satzung das erlaubt und der Bestand gewahrt bleibt.",
    "Sonstiges Vermögen unterliegt keinem Erhaltungsgebot — es kann für den Stiftungszweck ausgegeben werden, auch in der Substanz.",
    "Der Stifter kann schon im Stiftungsgeschäft einen Teil des gewidmeten Vermögens dem sonstigen Vermögen zuordnen — das ist die zentrale Stellschraube für spätere Ausschüttungs- und Umschichtungsflexibilität.",
    "Zustiftungen fallen automatisch ins Grundstockvermögen, wenn der Zuwendende nichts anderes bestimmt — und sind steuerlich meist schlechter als die Erstausstattung.",
    "Die Verbrauchsstiftung besteht nur aus sonstigem Vermögen — dafür muss ein Verbrauchsplan sicherstellen, dass der Zweck über die Laufzeit erfüllt werden kann.",
  ],
  einsatzfelder: [
    { situation: "Der Stifter will das Unternehmen dauerhaft binden, aber Liquidität und Wertpapiere für Versorgung und Notfälle frei halten.", warum: "Unternehmensanteile in den Grundstock, Liquidität ins sonstige Vermögen — die Stiftung kann ausschütten, ohne den Grundstock anzutasten." },
    { situation: "Eine Stiftung soll die Enkel ausbilden und in Notlagen helfen können, auch wenn die Erträge einmal nicht reichen.", warum: "Ein ausreichendes sonstiges Vermögen gibt dem Vorstand Spielraum, der beim reinen Grundstock fehlt." },
  ],
  beispiele: [
    { konstellation: "Ein Stifter überträgt 10 Mio. € Unternehmensanteile und 3 Mio. € Wertpapiere; er sagt nichts zur Zuordnung.", gestaltung: "Alles wird Grundstockvermögen. Die Stiftung darf nur Erträge ausschütten — in einem Krisenjahr ohne Dividende kann sie den Enkeln nichts geben, obwohl 3 Mio. € auf dem Depot liegen.", pointe: "Ein Satz im Stiftungsgeschäft hätte die Wertpapiere zum sonstigen Vermögen gemacht — verwendbar, wenn es darauf ankommt." },
  ],
  fehler: [
    { fehler: "Bei der Errichtung wird nur in Grundstockvermögen gedacht.", richtig: "Die Zuordnung zum sonstigen Vermögen ist die Flexibilitätsreserve — wer sie nicht nutzt, bindet mehr, als er muss.", norm: "§ 83b Abs. 2 BGB" },
    { fehler: "Ein „minimaler Grundstock\" aus wenig Liquidität, alles andere frei.", richtig: "Die Anerkennungsbehörde verlangt eine nachhaltige Ertragsbasis für den Zweck — der Grundstock muss tragen, nicht nur existieren.", norm: "§ 80 Abs. 1 BGB" },
  ],
  merksatz: "Grundstock ist, was bleiben muss — sonstiges Vermögen ist, was helfen darf. Der Stifter entscheidet, nicht der Zufall.",
  gewicht: { mandat: 2, reichweite: 1 },
  antwortfreigabe: "abstrakt",
  stand: "2026-09-12",
  quellen: ["Q7 Kap. 7", "Q7 Fehler 7", "Q9 Kap. 5.1"],
  verwandt: ["stiftung-errichtung-ablauf", "verbrauchsstiftung", "zustiftung-steuerklasse", "stifterwille-ewigkeit", "anlagerichtlinie-stiftung"],
};
