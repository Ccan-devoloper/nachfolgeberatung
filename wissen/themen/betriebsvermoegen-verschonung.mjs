/* Q2 · Unternehmensvermögen und erbschaftsteuerliche Verschonung */
export default {
  id: "betriebsvermoegen-verschonung",
  titel: "Unternehmen in die Stiftung — die Verschonung gilt auch hier",
  bereich: "nachfolge",
  kurz: "Betriebsvermögen, Mitunternehmeranteile und qualifizierte Kapitalgesellschaftsanteile können auch bei der Übertragung auf eine Familienstiftung verschont werden — nach denselben Regeln wie innerhalb der Familie.",
  normen: ["§§ 13a, 13b ErbStG", "§ 13a Abs. 9 ErbStG", "§ 13b Abs. 1 Nr. 3 ErbStG", "§ 13c ErbStG"],
  kern: [
    "Die Stiftung ist als Erwerberin nicht von der Verschonung ausgeschlossen; es gelten dieselben Fragen wie sonst — begünstigungsfähiges Vermögen, Verwaltungsvermögen, Lohnsumme, Behaltensfrist, Optionsverschonung.",
    "Für familiengeführte Kapitalgesellschaften kann der Vorwegabschlag von bis zu 30 Prozent hinzukommen — wenn Entnahmen, Verfügungen und Abfindungen gesellschaftsvertraglich beschränkt sind und das tatsächlich eingehalten wird.",
    "Eine Stiftung als dauerhafter Anteilseigner stabilisiert solche Bindungen organisatorisch — die Begünstigung hängt aber am Gesellschaftsvertrag, nicht an der Rechtsform des Gesellschafters.",
    "Bei Kapitalgesellschaftsanteilen unter 25 Prozent kann eine Poolvereinbarung die Mindestbeteiligung sichern — sie muss im Besteuerungszeitpunkt bestehen.",
    "Wert, Vermögenszusammensetzung und Verschonungsvoraussetzungen werden stichtagsbezogen geprüft — die zivilrechtliche Reihenfolge der Übertragungsakte hat unmittelbare Steuerfolgen.",
  ],
  einsatzfelder: [
    { situation: "Ein Familienunternehmen mit hohem Wert und wenig Privatvermögen daneben soll auf die nächste Generation übergehen, ohne dass die Steuer den Betrieb aushöhlt.", warum: "Verschonung bei Übertragung auf die Stiftung und Verschonung bei jedem Erbersatzsteuer-Stichtag — das Unternehmen wird nur einmal gebunden und dann nie wieder vererbt." },
  ],
  fehler: [
    { fehler: "Weil unsicher ist, ob die Verschonung greift, wird ein Rückforderungsrecht ins Stiftungsgeschäft geschrieben.", richtig: "Die Stiftungsaufsicht akzeptiert das nicht — die Vermögensausstattung ist bedingungsfeindlich. Der Ausweg: Nur ein kleines Grundstockvermögen widmen, auf das sich die Lebensfähigkeitsprognose bezieht, und das Unternehmen als sonstiges Vermögen mit Widerrufsvorbehalt übertragen. Bei Rückgewähr erlischt die Steuer rückwirkend, zu Buchwerten; gezogene Nutzungen bleiben steuerpflichtig.", norm: "§ 29 Abs. 1 Nr. 1 ErbStG" },
    { fehler: "Die Poolvereinbarung wird erst nach der Übertragung geschlossen.", richtig: "Zu spät. Sie muss im Besteuerungszeitpunkt bestehen und Verfügungsbindung plus einheitliche Stimmausübung vorsehen.", norm: "§ 13b Abs. 1 Nr. 3 ErbStG" },
    { fehler: "Der Vorwegabschlag wird eingeplant, weil 'die Stiftung ja ohnehin nicht ausschüttet'.", richtig: "Der Abschlag hängt an den Beschränkungen im Gesellschaftsvertrag der Beteiligungsgesellschaft und deren Einhaltung über Jahre — nicht daran, wer Gesellschafter ist.", norm: "§ 13a Abs. 9 ErbStG" },
  ],
  merksatz: "Die Verschonung fragt nicht, wer erwirbt — sie fragt, was erworben wird und wie es gehalten wird.",
  gewicht: { mandat: 3, reichweite: 2 },
  antwortfreigabe: "abstrakt",
  stand: "2026-09-12",
  quellen: ["Q2 Unternehmensvermögen und erbschaftsteuerliche Verschonung", "Q3 Steuerliche Grundlinien des Familienpools"],
  verwandt: ["unternehmensnachfolge-stiftung", "grosserwerb-verschonungsbedarf", "erbersatzsteuer", "familienpool", "einstiegstest-90-prozent", "vorwegabschlag-familienunternehmen", "verschonung-bverfg-2026"],
};
