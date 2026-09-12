/* Q8 · Kap. 4.3 · Fall 20 */
export default {
  id: "euerbvo-grenzen",
  titel: "Was die europäische Erbrechtsverordnung nicht regelt — und warum das Unternehmer trifft",
  bereich: "auslandserbfall",
  kurz: "Die Verordnung bestimmt das Erbstatut, aber nicht die Erbschaftsteuer, nicht das eheliche Güterrecht, nicht gesellschaftsvertragliche Nachfolgeklauseln und nicht das Grundbuch — vier Ebenen, die getrennt geprüft werden müssen.",
  normen: ["Art. 1 Abs. 2 EuErbVO", "Art. 21 EuErbVO", "§ 2 ErbStG"],
  kern: [
    "Erfasst sind Erbfolge, Erben, Quoten und pflichtteilsähnliche Rechte — ausgenommen sind Erbschaftsteuer, Güterrecht, gesellschaftsrechtliche Fragen, die Rechtsnatur dinglicher Rechte und die Registerwirkung.",
    "Das eheliche Güterrecht wirkt vor dem Erbrecht: Was güterrechtlich ausgeglichen wird, verändert die Masse, bevor die Erbquote greift — ein anderes Güterstatut kann das Ergebnis stärker verschieben als das Erbstatut.",
    "Gesellschaftsanteile sind der zentrale Grenzfall: Die verbreitete Auffassung ordnet gesellschaftsvertraglich beschränkte Vererblichkeit dem Gesellschaftsstatut zu — das Oberlandesgericht Hamm hat das 2023 für einen Kommanditanteil so gesehen.",
    "Ein Beitrag aus 2026 widerspricht der pauschalen Zuordnung und differenziert: Vererblichkeit stets Gesellschaftsstatut, bei unbeschränkt haftenden Gesellschaftern auch die Nachfolgeklausel, bei Kommandit- und Kapitalgesellschaftsanteilen dagegen stärker Erbstatut. Eine einheitliche Meinung ist das nicht — die Frage ist offen.",
    "Praktische Folge: Ein deutsches Testament mit Rechtswahl kann eine gesellschaftsvertragliche Nachfolgeklausel nicht wegwählen. Erbrecht und Gesellschaftsrecht müssen deckungsgleich geplant werden.",
  ],
  einsatzfelder: [
    { situation: "Ein Deutscher hält Anteile an einer luxemburgischen Holding mit Nachfolgeklauseln im Gesellschaftsvertrag.", warum: "Erbstatut, Gesellschaftsstatut und luxemburgisches Registerrecht sind drei getrennte Prüfungen — eine pauschale Aussage zur Anteilsnachfolge wäre nach dem aktuellen Meinungsstand zu weit." },
    { situation: "Ein Ehepaar mit unterschiedlichen Staatsangehörigkeiten und Wohnsitzwechseln.", warum: "Das Güterstatut kann einem anderen Recht folgen als das Erbstatut — beides muss zusammen betrachtet werden, sonst stimmt die Quote nicht." },
  ],
  beispiele: [
    { konstellation: "Ein deutscher Gesellschafter einer französischen Gesellschaft wählt im Testament deutsches Erbrecht. Der Gesellschaftsvertrag sieht vor, dass Anteile beim Tod eingezogen werden.", gestaltung: "Die Rechtswahl bestimmt, wer Erbe wird — nicht, ob der Erbe Gesellschafter werden kann. Die Einziehungsklausel bleibt anwendbar; die Erben bekommen eine Abfindung nach französischem Gesellschaftsrecht.", pointe: "Das Testament war perfekt und hat die Anteile trotzdem nicht in die Familie gebracht." },
  ],
  fehler: [
    { fehler: "Testament und Gesellschaftsvertrag werden von verschiedenen Beratern in verschiedenen Ländern getrennt entworfen.", richtig: "Für jede Beteiligung gehört dokumentiert: Gesellschaftsform, Gesellschaftsstatut, Vererblichkeit, Nachfolgeklausel, Erbstatut, Registernachweis und steuerliche Anknüpfung." },
    { fehler: "Man hält die Anteilsnachfolge pauschal für eine Frage ausserhalb der Verordnung.", richtig: "Die Abgrenzung ist umstritten und hängt von Rechtsform und Teilfrage ab — bei Beratung und Beitrag gehört diese Offenheit ausdrücklich benannt." },
  ],
  merksatz: "Die Verordnung sagt, wer erbt — nicht, wer Gesellschafter wird und wer Steuer zahlt.",
  gewicht: { mandat: 3, reichweite: 1 },
  antwortfreigabe: "keine",
  stand: "2026-09-13",
  quellen: ["Q8 Kap. 4.3", "Q8 Fall 20"],
  verwandt: ["euerbvo-grundlagen", "rechtswahl-testament", "nachfolgeklauseln-kg", "erbschaftsteuer-international"],
};
