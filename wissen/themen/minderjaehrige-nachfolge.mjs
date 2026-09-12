/* Q7 · Kap. 25 Minderjährige in der Nachfolge · Fehler 31 */
export default {
  id: "minderjaehrige-nachfolge",
  titel: "Enkel mit zwölf als Gesellschafter — was das Familiengericht dazu sagt",
  bereich: "erbrecht",
  kurz: "Minderjährige lassen sich früh in Familiengesellschaften einbinden, um Freibeträge zu nutzen — aber Eltern dürfen sie dabei nicht vertreten, Ergänzungspfleger und Familiengericht wirken mit, und die Genehmigung ist nie sicher.",
  normen: ["§ 1643 BGB", "§ 1852 BGB", "§ 1809 BGB", "§ 1824 BGB", "§ 1629a BGB", "§ 16 ErbStG"],
  kern: [
    "Schenken Eltern oder Großeltern einem Kind Gesellschaftsanteile, können die Eltern das Kind beim Vertrag nicht vertreten, wenn sie selbst beteiligt sind — das Gericht bestellt einen Ergänzungspfleger.",
    "Der Beitritt eines Minderjährigen zu einer Gesellschaft, die ein Erwerbsgeschäft betreibt, braucht die Genehmigung des Familiengerichts — sie kommt nicht automatisch und nicht schnell.",
    "Das Gericht prüft das Kindeswohl: Haftungsrisiken, Nachschusspflichten, Nießbrauch und belastende Nebenpflichten sprechen gegen die Genehmigung — der Kommanditanteil mit voll eingezahlter Einlage ist der typische Weg.",
    "Mit Volljährigkeit kann das Kind seine Haftung auf das bei Eintritt vorhandene Vermögen beschränken — die Gesellschaft muss damit rechnen.",
    "Bis zur Volljährigkeit braucht die Gesellschaft eine eigene Governance: Wer übt die Stimmrechte aus, wer entscheidet über Entnahmen, was passiert, wenn das Kind mit 18 aussteigen will?",
  ],
  einsatzfelder: [
    { situation: "Großeltern wollen den Enkeln früh Anteile an der Familien-KG schenken, um die Freibeträge von 200.000 € je Enkel zu nutzen.", warum: "Steuerlich richtig — aber Ergänzungspfleger, Genehmigung und Haftungsbeschränkung müssen vor dem Notartermin geklärt sein." },
    { situation: "Der Vater will die Anteile schenken, aber Stimmrechte und Gewinne bis zur Volljährigkeit behalten.", warum: "Nießbrauch und Stimmrechtsvorbehalt erhöhen die Komplexität vor dem Familiengericht — je mehr der Schenker behält, desto kritischer die Prüfung." },
  ],
  ablauf: [
    { schritt: "Vertretungssituation klären", hinweis: "Sind die Eltern selbst Gesellschafter oder Schenker, vertreten sie das Kind nicht — Ergänzungspfleger beantragen.", norm: "§ 1809, § 1824 BGB" },
    { schritt: "Genehmigungspflicht prüfen", hinweis: "Beitritt zu einer Erwerbsgesellschaft ist genehmigungspflichtig; rein vermögensverwaltende Gesellschaften sind ein Grenzfall.", norm: "§ 1643, § 1852 BGB" },
    { schritt: "Vertrag kindgerecht gestalten", hinweis: "Kommanditanteil, Einlage voll eingezahlt, keine Nachschusspflicht, keine persönliche Haftung." },
    { schritt: "Genehmigung einholen und Vertrag vollziehen", hinweis: "Erst mit Genehmigung wird der Vertrag wirksam — Schenkungsteuer und Fristen laufen ab dann." },
    { schritt: "Governance bis 18 regeln", hinweis: "Stimmrechte, Entnahmen, Information — im Gesellschaftsvertrag, nicht im Kopf der Eltern." },
  ],
  fehler: [
    { fehler: "Minderjährige Gesellschafter werden ohne Analyse von Vertretung und Genehmigung eingeplant.", richtig: "Der Ergänzungspfleger und das Familiengericht sind Beteiligte der Gestaltung — nicht Formalien danach.", norm: "§ 1643 BGB" },
    { fehler: "Die steuerliche Gestaltung setzt voraus, dass die Genehmigung sicher und kurzfristig kommt.", richtig: "Sie kann Monate dauern oder verweigert werden — die Planung braucht einen Plan B ohne Minderjährige." },
  ],
  zahlen: [
    { wert: "200.000 €", bedeutung: "Freibetrag je Enkel und Großelternteil alle zehn Jahre — der häufigste Grund, Minderjährige einzubinden.", norm: "§ 16 Abs. 1 Nr. 3 ErbStG" },
  ],
  merksatz: "Wer Minderjährige beteiligt, holt sich das Familiengericht an den Tisch — besser vorher als beim Notar.",
  gewicht: { mandat: 2, reichweite: 3 },
  antwortfreigabe: "abstrakt",
  stand: "2026-09-12",
  quellen: ["Q7 Kap. 25", "Q7 Fehler 31"],
  verwandt: ["familienpool", "unternehmertestament", "niessbrauch-kg-anteil", "immobilien-nachfolge-struktur"],
};
