/* Q5 · Stiftungsregister, Transparenzregister; Vergleich LI Transparenz */
export default {
  id: "stiftungsregister-transparenz",
  titel: "Wer sieht, was in meiner Stiftung steht? Stiftungsregister und Transparenzregister",
  bereich: "stiftungsrecht",
  kurz: "Ab 2028 gibt es ein öffentliches Stiftungsregister mit Satzung und Vorständen; dazu meldet jede Stiftung ihre wirtschaftlich Berechtigten — mit Ausnahmen, die Familienstiftungen kennen sollten.",
  normen: ["§§ 82b–82d BGB", "§ 82c BGB", "StiftRG", "§§ 19, 20, 23 GwG", "§ 3 Abs. 3 GwG"],
  kern: [
    "Das Stiftungsregister beim Bundesamt für Justiz startet am 1. Januar 2028 — verschoben vom ursprünglichen Termin 2026; bestehende Stiftungen melden sich bis Ende 2028 an.",
    "Es wirkt deklaratorisch — rechtsfähig wird die Stiftung weiterhin durch Anerkennung — und mit negativer Publizität: Man darf auf das Schweigen des Registers vertrauen.",
    "Eingetragen werden Name, Sitz, Anerkennungsdatum, die Vorstände mit Geburtsdatum und Wohnort, Vertretungsbeschränkungen, Satzungsänderungen; einzureichen sind Anerkennung, Vorstandsbestellung und Satzung.",
    "Einsicht hat grundsätzlich jeder, einschliesslich der Satzung — ausser bei berechtigtem Interesse der Stiftung oder Dritter, was bei Familienstiftungen wegen der Daten von Begünstigten und Stiftern häufig vorliegen dürfte.",
    "Unabhängig davon meldet jede Stiftung ihre wirtschaftlich Berechtigten ans Transparenzregister: Vorstandsmitglieder, namentlich bestimmte Begünstigte, der Begünstigtenkreis, und wer beherrschenden Einfluss auf Vermögensverwaltung oder Ertragsverteilung hat.",
    "Dort ist Einsicht nur bei berechtigtem Interesse möglich und kann beschränkt werden — bei Gefahr bestimmter Straftaten, bei Minderjährigen.",
    "Bei stiftungsbeherrschten Unternehmen ab 25 Prozent Beteiligung gilt als wirtschaftlich Berechtigter, wer die Stiftung beherrschen kann — typischerweise der Vorstand.",
    "Liechtenstein: Handelsregistereintragung nicht zwingend, sensible Regelungen wandern in die Beistatuten — weitgehende Diskretion, die es in Deutschland ab 2028 so nicht mehr gibt.",
  ],
  einsatzfelder: [
    { situation: "Eine Familie will nicht, dass Nachbarn, Geschäftspartner oder Journalisten die Satzung ihrer Stiftung lesen.", warum: "Der Antrag auf Einsichtsbeschränkung wegen berechtigten Interesses und eine Satzung, die Sensibles in Nebenordnungen auslagert — beides gehört in die Planung vor 2028." },
  ],
  fehler: [
    { fehler: "Die Satzung enthält Namen, Geburtsdaten und Ausschüttungsquoten aller Begünstigten.", richtig: "Ab 2028 ist die Satzung im Register. Was nicht öffentlich sein soll, gehört in Nebenordnungen oder Beschlüsse, nicht in die Satzung — soweit das Stiftungsrecht das zulässt." },
    { fehler: "Die Transparenzregistermeldung wird vergessen, weil 'die Stiftung ja keine Gesellschafter hat'.", richtig: "Wirtschaftlich Berechtigte gibt es auch ohne Anteile: Vorstand, Begünstigte, Einflussnehmer. Die Meldepflicht besteht, die Berechtigten müssen mitwirken.", norm: "§ 20 GwG" },
  ],
  zahlen: [
    { wert: "1.1.2028", bedeutung: "Start des Stiftungsregisters — und ab dann heisst jede Stiftung 'e. S.'." },
    { wert: "31.12.2028", bedeutung: "Bis dahin müssen bestehende Stiftungen angemeldet sein." },
  ],
  merksatz: "Ab 2028 ist die deutsche Stiftung kein stilles Vermögen mehr — Diskretion muss man dann gestalten, nicht voraussetzen.",
  gewicht: { mandat: 2, reichweite: 2 },
  antwortfreigabe: "abstrakt",
  stand: "2026-09-12",
  quellen: ["Q5 Folien 97–101, 189", "Q7 Fall 28.15"],
  verwandt: ["stiftung-errichtung-ablauf", "liechtenstein-vorteile", "stiftung-governance"],
};
