/* Q5 · Stiftung und Unternehmen — Risiko Unternehmensspenden */
export default {
  id: "unternehmensspenden-vga",
  titel: "Wenn die eigene GmbH an die eigene Stiftung spendet — das vGA-Risiko",
  bereich: "gemeinnuetzig",
  kurz: "Spendet die GmbH des Gesellschafters fast nur an dessen gemeinnützige Stiftung, kann das Finanzamt eine verdeckte Gewinnausschüttung annehmen — Gemeinnützigkeit des Empfängers schützt davor nicht.",
  normen: ["§ 9 Abs. 1 Nr. 2 KStG", "§ 8 Abs. 3 KStG", "§ 9 Nr. 5 GewStG", "§ 42 AO"],
  kern: [
    "Der Spendenabzug einer Kapitalgesellschaft steht unter dem Vorbehalt der verdeckten Gewinnausschüttung: Ist die Spende durch das Gesellschaftsverhältnis veranlasst, gibt es keinen Abzug — und der Gesellschafter versteuert eine Ausschüttung.",
    "Der BFH hat 2021 klargestellt: Auch eine gemeinnützige Stiftung kann dem Gesellschafter nahestehende Person sein; ihr Zweck muss nicht seinen Unterhalt umfassen, und weder Gemeinnützigkeitsrecht noch Stiftungsaufsicht schliessen die vGA aus.",
    "Warnsignale: der Gesellschafter im Stiftungsvorstand, private Spenden über den Höchstbeträgen, und eine einseitige Spendenpraxis — fast alles an die eigene Stiftung, an Dritte nur symbolisch.",
    "Die Kernfrage lautet: Hätte ein ordentlicher und gewissenhafter Geschäftsleiter die Spende auch an eine dem Gesellschafter fremde Körperschaft geleistet?",
    "Gegen die vGA sprechen: fachkundige Dritte in der Mittelverwendung, Verwendungsauflagen, Durchlaufspenden — das FG Düsseldorf hat eine Bündelung der Spendentätigkeit mit Verteilung durch ein unabhängiges Gremium anerkannt.",
    "Spiegelbildlich bei Spenden aus dem wirtschaftlichen Geschäftsbetrieb an die eigene Tochter-gGmbH: nach dem BFH 2022 keine verdeckte Einlage und kein Missbrauch, wenn die Mittel im ideellen Bereich der Tochter landen.",
  ],
  mythos: {
    behauptung: "Was an eine gemeinnützige Stiftung geht, ist steuerlich immer sauber.",
    richtigstellung: "Beim Empfänger ja. Beim spendenden Unternehmen nicht — wenn die Stiftung dem Gesellschafter nahesteht und die Spende seinem privaten Förderinteresse dient, ist sie eine verdeckte Gewinnausschüttung. Die Gemeinnützigkeit des Empfängers ist kein Schutzschild für die Veranlassung beim Geber.",
  },
  einsatzfelder: [
    { situation: "Eine Unternehmerfamilie will ihr gemeinnütziges Engagement über eine eigene Stiftung bündeln und das Unternehmen soll mitspenden.", warum: "Geht — mit Fremdspendenvergleich, dokumentierter Verteilung abseits der Gesellschafterinteressen und einem fachkundigen Gremium, das über die Mittelverwendung entscheidet." },
  ],
  beispiele: [
    { konstellation: "Ein Ehepaar gründet eine gemeinnützige Kunststiftung und sitzt im mehrköpfigen Vorstand ohne Stimmmehrheit. Privat spenden beide bis zur Höchstgrenze. Ihre GmbH kauft laufend Kunst und spendet sie fast ausschliesslich an dieselbe Stiftung; Spenden an Dritte bleiben dreistellig.", gestaltung: "Der BFH hat hier die Nähe bejaht: personelle Verflechtung, privates Förderinteresse, einseitige Praxis — Gesamtwürdigung, keine automatische vGA, aber alle Indizien in eine Richtung.", pointe: "Nicht die Kunst war das Problem, sondern das Muster. Wer als Unternehmen spendet, muss auch an Fremde spenden können." },
  ],
  fehler: [
    { fehler: "Der Gesellschafter sitzt im Stiftungsvorstand und hält das für unschädlich, weil er keine Stimmmehrheit hat.", richtig: "Der BFH geht von gleichgerichteten Interessen im Vorstand aus — die Mehrheit ist nicht entscheidend. Ein unabhängiges Vergabegremium hilft mehr als eine Stimmenzählung." },
    { fehler: "Spenden werden nach dem Giesskannenprinzip verteilt, aber nirgends dokumentiert.", richtig: "Der Fremdspendenvergleich lebt von der Dokumentation. Ohne sie bleibt es eine Behauptung." },
  ],
  merksatz: "Ein Unternehmen darf grosszügig sein — aber nicht nur zu der Stiftung, die seinem Eigentümer gehört.",
  gewicht: { mandat: 2, reichweite: 2 },
  antwortfreigabe: "keine",
  stand: "2026-09-12",
  quellen: ["Q5 Folien 18–27"],
  verwandt: ["doppelstiftung", "stifterdrittel"],
};
