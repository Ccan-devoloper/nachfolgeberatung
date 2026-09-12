/* Q8 · Kap. 3.8 · Fall 14 */
export default {
  id: "erbauseinandersetzung-steuer",
  titel: "Die gerechte Teilung, die Steuer kostet — Erbauseinandersetzung mit Betriebsvermögen",
  bereich: "erbrecht",
  kurz: "Erbschaftsteuerlich ist der Erwerb mit dem Erbfall abgeschlossen; ertragsteuerlich kann die spätere Teilung stille Reserven aufdecken — besonders, wenn Ausgleichszahlungen fliessen oder Sonderbetriebsvermögen getrennt wird.",
  normen: ["§ 2042 BGB", "§ 6 Abs. 3 EStG", "§ 16 EStG", "§ 3 Nr. 3 GrEStG"],
  kern: [
    "Die Teilung nach Erbquoten ohne Ausgleichszahlung ist der einfachste Fall — bei Betriebsvermögen gelten aber Sonderregeln, und Buchwerte und Sonderbetriebsvermögen müssen geprüft werden.",
    "Übernimmt ein Miterbe das Unternehmen und zahlt die Geschwister aus, ist der Vorgang teils Erbauseinandersetzung, teils entgeltlicher Erwerb: Soweit gezahlt wird, entstehen Veräusserungs- und Anschaffungskomponenten.",
    "Werden Mitunternehmeranteil und Sonderbetriebsvermögen auf verschiedene Erben verteilt, droht die Aufdeckung stiller Reserven und der Verlust der Buchwertfortführung — die „gerechte\" Teilung ist steuerlich die gefährlichste.",
    "Bei Immobilien kommen Grunderwerbsteuer und Spekulationsfristen hinzu; die Teilung des Nachlasses selbst ist zwar grunderwerbsteuerfrei, spätere Tauschgeschäfte sind es nicht.",
    "Eine Teilungsanordnung im Testament steuert die Zuweisung, ersetzt aber nicht die steuerliche Modellrechnung: Wertverschiebungen zwischen den Erben können eigene Folgen auslösen.",
  ],
  einsatzfelder: [
    { situation: "Die Tochter soll die KG führen, der Sohn das Betriebsgrundstück bekommen.", warum: "Das Grundstück ist funktional wesentliches Sonderbetriebsvermögen — die Trennung kann die Mitunternehmerstruktur zerstören. Besser sind andere Ausgleichsassets oder ein Nutzungsrecht." },
    { situation: "Ein Miterbe braucht sofort Liquidität, das Vermögen besteht aus Unternehmen und Immobilien.", warum: "Die Finanzierung der Ausgleichszahlung entscheidet über die Steuerlast — wer aus dem Betrieb entnimmt, kann Verschonung und Buchwerte verlieren." },
  ],
  beispiele: [
    { konstellation: "Zwei Geschwister erben eine KG (Wert 6 Mio. €) und ein Wertpapierdepot (2 Mio. €). Der Bruder übernimmt die KG und zahlt der Schwester 2 Mio. € aus dem Privatvermögen.", gestaltung: "Soweit er zahlt, erwirbt er entgeltlich: Insoweit entsteht bei der Schwester ein Veräusserungsgewinn, bei ihm Anschaffungskosten mit Abschreibungspotenzial.", pointe: "Dieselbe Familie, dasselbe Ergebnis — aber ob mit oder ohne Ausgleichszahlung geteilt wird, entscheidet über eine sechsstellige Steuer." },
  ],
  fehler: [
    { fehler: "Die Auseinandersetzung wird als „zweiter Erbfall\" behandelt.", richtig: "Erbschaftsteuerlich ist der Erwerb mit dem Erbfall verwirklicht; die Teilung ist ertragsteuerlich ein eigener Vorgang mit eigenen Realisationstatbeständen." },
    { fehler: "Erst wird zivilrechtlich geteilt, dann der Steuerberater gefragt.", richtig: "Die ertragsteuerliche Struktur gehört vor die Teilung — danach ist sie nur noch zu dokumentieren, nicht mehr zu gestalten." },
  ],
  merksatz: "Wer den Nachlass gerecht teilt, kann ihn teuer teilen — die Rechnung gehört vor den Teilungsvertrag.",
  gewicht: { mandat: 2, reichweite: 2 },
  antwortfreigabe: "keine",
  stand: "2026-09-13",
  quellen: ["Q8 Kap. 3.8", "Q8 Fall 14"],
  verwandt: ["erbengemeinschaft-unternehmen", "sonderbetriebsvermoegen", "unternehmertestament"],
};
