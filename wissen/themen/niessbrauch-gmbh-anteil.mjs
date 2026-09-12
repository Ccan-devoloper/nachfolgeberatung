/* Q7 · Kap. 17.2, 20 und Fall 28.4 · Fehler 44 */
export default {
  id: "niessbrauch-gmbh-anteil",
  titel: "Nießbrauch am GmbH-Anteil — wer bekommt die Dividende, wer stimmt ab, wer versteuert?",
  bereich: "gesellschaftsrecht",
  kurz: "Beim Nießbrauch an GmbH-Anteilen sind Gewinnbezug, Stimmrecht und steuerliche Zurechnung drei getrennte Fragen; wer sie gleichsetzt, bekommt Streit mit Mitgesellschaftern und dem Finanzamt.",
  normen: ["§ 15 GmbHG", "§§ 1068 ff. BGB", "§ 20 Abs. 1 Nr. 1 EStG", "§ 17 EStG", "§ 13b ErbStG"],
  kern: [
    "Zivilrechtlich muss der Vertrag genau sagen, welche Gewinn-, Stimm-, Informations- und Verwaltungsrechte beim neuen Eigentümer und welche beim Nießbraucher liegen — das Gesetz lässt vieles offen.",
    "Steuerlich folgt die Zurechnung der Dividenden nicht automatisch der Gewinnbezugsregel des Vertrags; das Finanzamt fragt, wer wirtschaftlich über den Anteil verfügt.",
    "Behält der Übergeber sämtliche Stimmrechte, kann das Finanzamt ihn weiter als wirtschaftlichen Eigentümer ansehen — dann ist steuerlich noch nichts übertragen.",
    "Die Abtretung des Anteils braucht notarielle Form; Vinkulierungsklauseln und Zustimmungserfordernisse der Satzung gelten auch für die Schenkung an das eigene Kind.",
    "Satzung, Poolvertrag und Nießbrauchvertrag müssen zusammenpassen — die Satzung kann Stimmrechtsvorbehalte zugunsten Dritter schlicht verbieten.",
  ],
  mythos: {
    behauptung: "Ich übertrage die Anteile, behalte aber 100 % Dividende und alle Stimmrechte — dann habe ich das Beste aus beiden Welten.",
    richtigstellung: "Dann haben Sie möglicherweise gar nichts übertragen: Das Finanzamt kann Sie weiter als wirtschaftlichen Eigentümer behandeln, und für den Pflichtteil läuft keine Frist.",
  },
  einsatzfelder: [
    { situation: "Ein Gesellschafter-Geschäftsführer will Anteile an die Tochter geben, aber bis zur Rente weiter mitbestimmen.", warum: "Ein befristeter, klar begrenzter Stimmrechtsvorbehalt für Grundlagengeschäfte ist gestaltbar — ein Totalvorbehalt nicht." },
    { situation: "Die Übergabe soll über mehrere Jahre in Tranchen laufen, um Freibeträge zu nutzen.", warum: "Jede Tranche braucht Satzungsprüfung, Form und dieselbe Rechteverteilung — sonst entstehen Anteile mit unterschiedlichem Rechtsstatus." },
  ],
  beispiele: [
    { konstellation: "Ein Senior überträgt 60 % seiner GmbH auf den Sohn, behält aber per Nießbrauch die volle Dividende und alle Stimmrechte.", gestaltung: "Das Finanzamt wertet ihn weiter als wirtschaftlichen Eigentümer; die Betriebsvermögensverschonung ist gefährdet, für den Pflichtteil hat er nichts verschenkt.", pointe: "Wer alles behält, hat möglicherweise noch nicht genug verschenkt." },
  ],
  fehler: [
    { fehler: "Gewinnbezugsrecht, Stimmrecht und steuerliche Einkünftezurechnung werden im Vertrag als eine Frage behandelt.", richtig: "Es sind drei Fragen mit drei Antworten: Der Vertrag verteilt Rechte, das Steuerrecht fragt nach wirtschaftlicher Verfügungsmacht, die Satzung setzt die Grenzen." },
    { fehler: "Die Satzung wird nicht gelesen, weil „das Kind ja ohnehin in die Familie gehört\".", richtig: "Vinkulierung und Zustimmungsvorbehalte gelten für jede Abtretung — auch innerhalb der Familie.", norm: "§ 15 Abs. 5 GmbHG" },
  ],
  merksatz: "Dividende, Stimme, Steuer — drei Fragen, drei Antworten, ein Vertrag.",
  gewicht: { mandat: 3, reichweite: 2 },
  antwortfreigabe: "abstrakt",
  stand: "2026-09-12",
  quellen: ["Q7 Kap. 17.2", "Q7 Kap. 20", "Q7 Fall 28.4", "Q7 Fehler 44"],
  verwandt: ["niessbrauch-grundlagen", "gmbh-anteile-nachfolge", "pflichtteil-fristanlauf", "vorwegabschlag-familienunternehmen"],
};
