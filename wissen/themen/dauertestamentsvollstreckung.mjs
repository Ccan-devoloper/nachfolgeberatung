/* Q3 · Dauertestamentsvollstreckung und erbrechtliche Dauerbindungen; Q1 · Abgrenzung */
export default {
  id: "dauertestamentsvollstreckung",
  titel: "Dauertestamentsvollstreckung — Bindung mit Verfallsdatum",
  bereich: "ersatzformen",
  kurz: "Der Testamentsvollstrecker verwaltet den Nachlass, die Erben bleiben Eigentümer, Eigengläubiger der Erben greifen nicht zu — für höchstens 30 Jahre, und dann endet die Bindung planmässig.",
  normen: ["§§ 2197 ff. BGB", "§ 2210 BGB", "§ 2214 BGB", "§ 2211 BGB"],
  kern: [
    "Keine Organisationsform, sondern eine erbrechtliche Bindung: Der Vollstrecker verwaltet, die Erben können über die unterliegenden Gegenstände nicht frei verfügen.",
    "Eigengläubiger der Erben können in die verwalteten Nachlassgegenstände nicht vollstrecken — ein Gläubigerschutz ohne Vermögensübertragung.",
    "Die Grenze: grundsätzlich 30 Jahre; Anknüpfungen an Lebensereignisse sind möglich, enden aber spätestens mit dem Tod des letzten innerhalb der Frist ernannten Vollstreckers.",
    "Erbschaftsteuerlich ändert die Vollstreckung nichts: Der Erbe erwirbt, kein neuer Rechtsträger, keine Erbersatzsteuer, spätere Generationenwechsel bleiben steuerbar.",
    "Bei Gesellschaftsanteilen muss der Gesellschaftsvertrag die Vollstreckung zulassen — eine qualifizierte Nachfolgeklausel kann nicht durch Testament überspielt werden.",
    "Gegenüber der Stiftung überlegen, wenn die Bindung enden soll; unterlegen, wenn das Vermögen dauerhaft aus der Erbfolge soll.",
  ],
  einsatzfelder: [
    { situation: "Die Kinder sollen erben, sind aber noch zu jung oder nicht bereit, Gesellschafterrechte auszuüben.", warum: "Verwaltungsvollstreckung bis zu definierten Altersgrenzen oder Qualifikationsstufen — ein Übergangsproblem wird gelöst, ohne das Unternehmen für immer in eine Stiftung zu geben." },
    { situation: "Der Nachlass soll nicht auseinandergesetzt werden, solange eine Übergangsphase läuft.", warum: "Der Vollstrecker hält zusammen, was die Erben sonst teilen würden." },
  ],
  beispiele: [
    { konstellation: "Ein Unternehmer mit zwei Kindern, 17 und 20 Jahre alt, die einmal das Unternehmen führen sollen — aber noch nicht heute.", gestaltung: "Testamentarische Verwaltungsvollstreckung über die Anteile bis zum 30. Lebensjahr und Abschluss einer Ausbildung; Gesellschaftsvertrag und Testament so abgestimmt, dass der Vollstrecker die Stimmrechte ausübt.", pointe: "Die Struktur löst ein Übergangsproblem und soll gerade keine ewige Ordnung schaffen. Genau dafür wäre eine Stiftung das falsche Werkzeug." },
  ],
  alternativen: [
    { form: "Familienstiftung", wannBesser: "Wenn die Bindung kein Ende haben soll.", warum: "Die Stiftung kennt keine 30-Jahres-Grenze und keine Erbenstellung — sie ist die 'ewige Testamentsvollstreckung'." },
  ],
  zahlen: [
    { wert: "30 Jahre", bedeutung: "Die Grenze der Dauertestamentsvollstreckung — dieselbe Zahl wie beim Erbersatzsteuer-Rhythmus, aber mit gegenteiliger Bedeutung: Hier endet die Bindung.", norm: "§ 2210 BGB" },
  ],
  merksatz: "Die Testamentsvollstreckung ist die Stiftung für alle, die wissen, wann sie loslassen wollen.",
  gewicht: { mandat: 2, reichweite: 2 },
  antwortfreigabe: "abstrakt",
  stand: "2026-09-12",
  quellen: ["Q3 Dauertestamentsvollstreckung und erbrechtliche Dauerbindungen", "Q1 Abschn. 3.2.4"],
  verwandt: ["ersatzformen-ueberblick", "unternehmensnachfolge-stiftung", "verbrauchsstiftung", "unternehmertestament"],
};
