/* Q7 · Kap. 23 Ehevertrag, Güterstand und Familienunternehmen · Fall 28.10 · Fehler 29, 30 */
export default {
  id: "ehevertrag-unternehmer",
  titel: "Der Unternehmer-Ehevertrag — warum „Gütertrennung\" die falsche Antwort ist",
  bereich: "erbrecht",
  kurz: "Scheidung und Tod können ein Unternehmen über den Zugewinnausgleich zur Kasse bitten; die Antwort ist selten Gütertrennung, sondern die modifizierte Zugewinngemeinschaft, die das Unternehmen herausnimmt und den Partner fair absichert.",
  normen: ["§ 1408 BGB", "§ 1414 BGB", "§ 1378 BGB", "§ 138 BGB", "§ 5 ErbStG"],
  kern: [
    "Im gesetzlichen Güterstand wird bei Scheidung der Wertzuwachs während der Ehe hälftig ausgeglichen — bei einem Unternehmen, das in der Ehe gewachsen ist, kann das mehr sein, als die Firma an Liquidität hat.",
    "Pauschale Gütertrennung löst das, kostet aber den steuerfreien Zugewinnausgleich beim Tod und die Erhöhung des Ehegattenerbteils — und benachteiligt den Ehegatten, der das Unternehmen mitgetragen hat.",
    "Die modifizierte Zugewinngemeinschaft nimmt das Unternehmen, Beteiligungen und deren Surrogate aus dem Zugewinn heraus — für den Scheidungsfall — und lässt den Ausgleich beim Tod bestehen.",
    "Der Bundesgerichtshof hat 2025 die Inhaltskontrolle für Unternehmer-Eheverträge geschärft: Ein Totalverzicht ohne ausgewogene Kompensation ist angreifbar — dann gilt der Vertrag nicht, und der volle Zugewinnausgleich kommt.",
    "Gesellschaftsverträge enthalten oft die Pflicht, einen bestimmten Ehevertrag abzuschließen — mit Einziehung oder Ausschluss als Sanktion. Die Klausel nützt nur, wenn der Ehevertrag auch abgeschlossen und wirksam ist.",
  ],
  mythos: {
    behauptung: "Als Unternehmer heiratet man mit Gütertrennung — alles andere ist leichtsinnig.",
    richtigstellung: "Gütertrennung ist die gröbste Lösung: Sie verschenkt den steuerfreien Zugewinnausgleich beim Tod und hält vor Gericht nicht besser als ein ausgewogener Vertrag. Der modifizierte Zugewinn schützt das Unternehmen genauso — und den Partner mit.",
  },
  einsatzfelder: [
    { situation: "Der Sohn übernimmt die Anteile und heiratet nächstes Jahr.", warum: "Die Anteile müssen aus dem Zugewinn heraus, bevor die Ehe beginnt — der Gesellschaftsvertrag verlangt das ohnehin." },
    { situation: "Ein Ehepaar ist seit zwanzig Jahren verheiratet, das Unternehmen ist in der Ehe gewachsen, ein Ehevertrag fehlt.", warum: "Der nachträgliche Vertrag braucht eine Kompensation für den Verzicht — Vermögen, Versorgung, Beteiligung — sonst hält er nicht." },
    { situation: "Der Gesellschaftsvertrag verlangt Gütertrennung, der Ehevertrag ist wirtschaftlich einseitig.", warum: "Unternehmensschutz funktioniert mit ausgewogener Gestaltung besser als mit maximaler Härte." },
  ],
  beispiele: [
    { konstellation: "Eine Gesellschafterin hält 50 % einer GmbH (Wert 8 Mio. €, bei Heirat 1 Mio. €). Ohne Ehevertrag lässt sie sich nach 15 Jahren scheiden.", gestaltung: "Zugewinn aus den Anteilen: 7 Mio. €. Ausgleichsanspruch des Mannes: 3,5 Mio. € — zahlbar in Geld, das die GmbH nicht hat. Mit modifizierter Zugewinngemeinschaft wären die Anteile ausgenommen; ausgeglichen würde nur das übrige Vermögen.", pointe: "Der Ehevertrag hätte nicht den Mann schlechter gestellt — er hätte das Unternehmen vor dem Verkauf bewahrt." },
  ],
  fehler: [
    { fehler: "Die Güterstandsklausel steht im Gesellschaftsvertrag, aber niemand schließt den Ehevertrag ab.", richtig: "Die Klausel ist nur eine Verpflichtung — geschützt ist das Unternehmen erst, wenn der Ehevertrag beim Notar unterschrieben ist.", norm: "§ 1408 BGB" },
    { fehler: "Pauschale Gütertrennung als Standardlösung für Unternehmerfamilien.", richtig: "Modifizierte Zugewinngemeinschaft: Unternehmen raus, Rest bleibt — steuerlich und familiär die bessere Lösung.", norm: "§ 5 ErbStG" },
  ],
  merksatz: "Ein guter Unternehmer-Ehevertrag schützt die Firma — und den Ehegatten, der sie mitgetragen hat.",
  gewicht: { mandat: 3, reichweite: 3 },
  antwortfreigabe: "abstrakt",
  stand: "2026-09-12",
  quellen: ["Q7 Kap. 23", "Q7 Fall 28.10", "Q7 Fehler 29, 30"],
  verwandt: ["zugewinn-stiftung", "rueckforderungsrechte", "gmbh-anteile-nachfolge", "nachfolge-als-system"],
};
