/* Q8 · Kap. 4.2, 4.9 · Fall 19 */
export default {
  id: "rechtswahl-testament",
  titel: "Die Rechtswahl — ein Satz im Testament, der das Erbstatut festhält",
  bereich: "auslandserbfall",
  kurz: "Wer mobil ist, kann im Testament das Recht seiner Staatsangehörigkeit wählen und damit das Erbstatut stabil halten — aber nur das Erbstatut, nicht das Gesellschafts-, Register- oder Steuerrecht.",
  normen: ["Art. 22 EuErbVO", "Art. 83 Abs. 4 EuErbVO", "Art. 35 EuErbVO", "Art. 34 Abs. 2 EuErbVO"],
  kern: [
    "Wählbar ist das Recht eines Staates, dessen Staatsangehörigkeit die Person im Zeitpunkt der Wahl oder des Todes besitzt — bei Mehrstaatern jede der Staatsangehörigkeiten.",
    "Nicht wählbar ist das Recht des Wohnsitzes, des gewöhnlichen Aufenthalts oder des Belegenheitsortes einer Immobilie: Ein Nichtdeutscher kann deutsches Erbrecht nicht wählen, nur weil sein Unternehmen hier sitzt.",
    "Die Wahl gehört ausdrücklich in eine Verfügung von Todes wegen — sie kann sich auch aus deren Bestimmungen ergeben, aber darauf sollte man es nicht ankommen lassen.",
    "Die Rechtswahl stabilisiert das Erbstatut für den gesamten Nachlass und schliesst zugleich eine Rück- oder Weiterverweisung fremden Kollisionsrechts aus.",
    "Ihre Grenze ist die öffentliche Ordnung: Der Bundesgerichtshof hat 2022 in einem stark deutsch geprägten Fall behandelt, dass die vollständige Beseitigung des deutschen Pflichtteils durch englisches Recht an dieser Grenze scheitern kann.",
  ],
  einsatzfelder: [
    { situation: "Ein deutscher Unternehmer zieht in den Ruhestand nach Spanien.", warum: "Die Wahl deutschen Rechts hält das Erbstatut stabil, egal wie sich der Lebensmittelpunkt in den nächsten Jahren entwickelt." },
    { situation: "Ein Niederländer lebt dauerhaft in Deutschland und hat niederländische Beteiligungen.", warum: "Ohne Wahl gilt deutsches Erbrecht; er kann niederländisches Recht wählen, wenn es besser zur Struktur seiner Beteiligungen passt." },
    { situation: "Eine Familie besitzt Immobilien in drei Staaten und erwägt getrennte Testamente.", warum: "Separate Testamente beschleunigen die lokale Abwicklung, bergen aber Widerrufs- und Widerspruchsrisiken — jede Urkunde muss ihren räumlichen Anwendungsbereich und ihr Verhältnis zu den anderen ausdrücklich regeln." },
  ],
  beispiele: [
    { konstellation: "Ein deutscher Unternehmer mit Wohnsitz in Zürich setzt in sein Testament: „Für meine gesamte Rechtsnachfolge von Todes wegen wähle ich deutsches Recht.\"", gestaltung: "Damit gilt deutsches Erbrecht unabhängig davon, wo er stirbt. Die Erbschaftsteuer folgt dieser Wahl nicht — sie richtet sich nach eigenen Anknüpfungen in beiden Staaten.", pointe: "Ein Satz ordnet das Erbrecht. Für die Steuer braucht es eine zweite, ganz andere Prüfung." },
  ],
  fehler: [
    { fehler: "Ein zweites Testament im Ferienhausstaat wird erstellt, ohne es mit dem deutschen abzustimmen.", richtig: "Eine pauschale Widerrufsklausel im späteren Testament kann das erste vollständig aufheben — Anwendungsbereich und Verhältnis der Urkunden müssen ausdrücklich geregelt sein." },
    { fehler: "Die Rechtswahl wird als Lösung für alle Auslandsfragen verstanden.", richtig: "Sie betrifft das Erbstatut. Gesellschaftsvertragliche Nachfolgeklauseln, Grundbuch, Register und Steuern bleiben unberührt.", norm: "Art. 1 Abs. 2 EuErbVO" },
  ],
  merksatz: "Die Rechtswahl kostet einen Satz und entscheidet, nach welchem Recht ein Leben verteilt wird.",
  gewicht: { mandat: 3, reichweite: 2 },
  antwortfreigabe: "abstrakt",
  stand: "2026-09-13",
  quellen: ["Q8 Kap. 4.2, 4.9", "Q8 Fall 19"],
  verwandt: ["euerbvo-grundlagen", "euerbvo-grenzen", "auslandsimmobilie-erbfall", "unternehmertestament"],
};
