/* Q1 Abschn. 3.2.2 · § 1371 BGB, erbrechtliche und güterrechtliche Lösung */
export default {
  id: "ehegattenerbrecht-stiftung",
  titel: "Was der Ehegatte bekommt, wenn alles in die Stiftung geht",
  bereich: "erbrecht",
  kurz: "Wird der Ehegatte enterbt, weil die Stiftung alles erben soll, wechselt er von der pauschalen in die rechnerische Lösung — sein Pflichtteil halbiert sich, dafür kommt der echte Zugewinnausgleich hinzu.",
  normen: ["§ 1371 Abs. 1 BGB", "§ 1371 Abs. 2 BGB", "§ 2303 BGB", "§ 2305 BGB"],
  kern: [
    "Leben die Eheleute im gesetzlichen Güterstand, erhöht sich der gesetzliche Erbteil des Überlebenden pauschal um ein Viertel — das ist der Ausgleich für den Zugewinn, ohne dass jemand rechnen muss.",
    "Neben Kindern bekommt der Ehegatte damit die Hälfte, neben Eltern und Grosseltern drei Viertel, und sind nur noch entferntere Verwandte da, den ganzen Nachlass.",
    "Setzt der Stifter dagegen seine Stiftung als Alleinerbin ein, greift diese Pauschale nicht mehr.",
    "Dann tritt die güterrechtliche Lösung an ihre Stelle: Der Zugewinn wird tatsächlich berechnet und ausgeglichen.",
    "Für den Pflichtteil zählt in diesem Fall nur der nicht erhöhte gesetzliche Erbteil — neben Kindern also ein Achtel des Nachlasses statt eines Viertels.",
    "Die Rechnung kann deshalb in beide Richtungen ausschlagen: Wer während der Ehe viel Zugewinn erwirtschaftet hat, schuldet seinem Ehegatten mehr, nicht weniger.",
    "Ein dritter Fall wird oft übersehen: Bekommt der Pflichtteilsberechtigte zwar einen Erbteil, ist dieser aber kleiner als die Hälfte seines gesetzlichen Erbteils, kann er die Differenz verlangen.",
  ],
  beispiele: [
    { konstellation: "Ein Unternehmer im gesetzlichen Güterstand setzt seine Familienstiftung als Alleinerbin ein; seine Frau und zwei Kinder werden nicht bedacht.", gestaltung: "Die Ehefrau erhält keinen Erbteil und kein Vermächtnis. Es gilt die güterrechtliche Lösung: echter Zugewinnausgleich gegen den Nachlass, dazu ein Pflichtteil aus dem nicht erhöhten Erbteil.", pointe: "Ihr Pflichtteil ist kleiner als gedacht — aber der Zugewinnausgleich kann ihn um ein Vielfaches übersteigen, wenn das Unternehmen während der Ehe gewachsen ist." },
  ],
  fehler: [
    { fehler: "Bei der Planung wird nur mit dem Pflichtteil des Ehegatten gerechnet.", richtig: "Ohne Erbteil und Vermächtnis kommt der echte Zugewinnausgleich hinzu. Bei einem Unternehmen, das während der Ehe entstanden ist, ist das der grössere Posten.", norm: "§ 1371 Abs. 2 BGB" },
    { fehler: "Der Ehegatte wird mit einer kleinen Quote bedacht, 'damit er nichts fordern kann'.", richtig: "Liegt die Quote unter der Hälfte des gesetzlichen Erbteils, kann er die Differenz als Zusatzpflichtteil verlangen — und bleibt zugleich Miterbe mit Mitspracherechten.", norm: "§ 2305 BGB" },
  ],
  einsatzfelder: [
    { situation: "Ein Unternehmer will das Unternehmen vollständig in eine Familienstiftung geben und seine Frau anderweitig absichern.", warum: "Die Absicherung muss vor dem Erbfall stehen — über Ehevertrag, Versorgungsvermögen ausserhalb der Stiftung oder einen Pflichtteilsverzicht gegen Abfindung. Danach ist sie eine Rechenaufgabe mit ungewissem Ausgang." },
  ],
  merksatz: "Wer den Ehegatten enterbt, tauscht die Pauschale gegen die Rechnung — und weiss vorher nicht, welche teurer ist.",
  gewicht: { mandat: 3, reichweite: 2 },
  antwortfreigabe: "abstrakt",
  stand: "2026-09-18",
  quellen: ["Q1 Abschn. 3.2.2"],
  verwandt: ["pflichtteil-stiftung", "zugewinn-stiftung", "ehevertrag-unternehmer", "unternehmertestament"],
};
