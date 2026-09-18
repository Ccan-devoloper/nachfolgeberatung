/* Q5 Teil 5 · Transparente vs. intransparente Stiftungen; BMF 16.9.2004; BFH II R 21/05 */
export default {
  id: "auslandsstiftung-transparenz",
  titel: "Die zweite Brieftasche — wann eine Auslandsstiftung steuerlich gar nicht existiert",
  bereich: "liechtenstein",
  kurz: "Bevor überhaupt über Zurechnungsbesteuerung gestritten wird, steht eine schärfere Frage: Kann der Stifter die Stiftung benutzen wie ein eigenes Konto? Dann wird ihm das Vermögen zugerechnet, als gäbe es die Stiftung nicht.",
  normen: ["§ 39 Abs. 2 Nr. 1 AO", "§ 7 Abs. 1 Nr. 8 ErbStG", "§ 15 AStG", "§ 20 Abs. 1 Nr. 9 EStG"],
  kern: [
    "Ausländische Stiftungen sind in aller Regel rechtsfähig und werden zivilrechtlich Eigentümerin ihres Vermögens. Ob sie es auch steuerlich ist, ist eine zweite Frage.",
    "Entscheidend ist das wirtschaftliche Eigentum: Kann der Stifter über das Vermögen weiter verfügen wie über eigenes, bleibt es ihm steuerlich zugerechnet. Die Stiftung ist dann transparent.",
    "Die Faustformel der Praxis: Lässt sich die Stiftung benutzen wie ein Auslandskonto oder eine zweite Brieftasche?",
    "Die Finanzverwaltung arbeitet mit einem Kriterienkatalog aus dem Jahr 2004: Ist der Verwalter an Weisungen gebunden? Gibt es einen Letter of wishes, der ausnahmslos befolgt wird? Kann der Stifter den Verwalter absetzen? Muss der Stifter Anlageentscheidungen billigen? Kann er die Übertragung rückgängig machen? Was geschieht bei seinem Tod?",
    "Transparenz wirkt in beide Richtungen. Der Bundesfinanzhof hat 2007 entschieden, dass die Übertragung auf eine liechtensteinische Stiftung nicht der Schenkungsteuer unterliegt, wenn die Stiftung über das Vermögen im Verhältnis zum Stifter nicht tatsächlich und rechtlich frei verfügen kann.",
    "Das klingt zunächst nach einem Vorteil — es ist keiner: Wer keine Schenkungsteuer zahlt, weil nichts übergegangen ist, hat auch nichts übertragen. Kein Vermögensschutz, keine Nachfolgewirkung, keine Trennung.",
    "Erst wenn die Stiftung steuerlich als eigenständig anerkannt ist, stellt sich überhaupt die Frage der Zurechnungsbesteuerung. Transparenz und Zurechnung sind zwei Stufen, nicht dasselbe.",
    "Die Prüfung erfolgt für jeden Veranlagungszeitraum neu. Eine Struktur, die zehn Jahre gehalten hat, kann im elften kippen, wenn sich die tatsächliche Handhabung ändert.",
  ],
  ablauf: [
    { schritt: "Stufe 1: Ist die Stiftung steuerlich eigenständig?", hinweis: "Wirtschaftliches Eigentum nach dem Kriterienkatalog. Fällt die Antwort negativ aus, endet die Prüfung hier — das Vermögen bleibt beim Stifter.", norm: "§ 39 Abs. 2 Nr. 1 AO" },
    { schritt: "Stufe 2: Liegt eine ausländische Familienstiftung vor?", hinweis: "Stifter, Angehörige und Abkömmlinge zu mehr als der Hälfte bezugs- oder anfallsberechtigt.", norm: "§ 15 Abs. 2 AStG" },
    { schritt: "Stufe 3: Greift der Entlastungsbeweis?", hinweis: "Vermögen rechtlich und tatsächlich entzogen, Informationsaustausch gesichert.", norm: "§ 15 Abs. 6 AStG" },
    { schritt: "Stufe 4: Wie werden Ausschüttungen besteuert?", hinweis: "Bezüge der Begünstigten als Kapitaleinkünfte — was bereits zugerechnet wurde, wird nicht noch einmal erfasst.", norm: "§ 20 Abs. 1 Nr. 9 EStG" },
  ],
  fehler: [
    { fehler: "Der Stifter freut sich, dass bei der Errichtung keine Schenkungsteuer angefallen ist.", richtig: "Das ist kein Erfolg, sondern der Befund, dass nichts übertragen wurde. Die Struktur leistet dann nichts von dem, wofür sie errichtet wurde.", norm: "§ 7 Abs. 1 Nr. 8 ErbStG" },
    { fehler: "Die Dokumente sind sauber, also ist die Stiftung intransparent.", richtig: "Geprüft wird die tatsächliche Handhabung über Jahre — Zahlungsflüsse, E-Mails, Protokolle. Papier allein genügt nicht." },
  ],
  beispiele: [
    { konstellation: "Eine Unternehmerin, 58, überträgt Wertpapiere auf eine liechtensteinische Stiftung, gibt dem Stiftungsrat aber weiterhin telefonisch Anlageanweisungen und lässt sich Beträge nach Bedarf auszahlen.", gestaltung: "Der Stiftungsrat befolgt jede Anweisung; einen förmlichen Vorbehalt gibt es nicht.", pointe: "Steuerlich existiert die Stiftung nicht: Die Erträge versteuert sie selbst, geschützt ist nichts — und für die Struktur zahlt sie jährlich Verwaltungskosten." },
  ],
  merksatz: "Wer eine Auslandsstiftung benutzen kann wie ein eigenes Konto, hat auch nur ein Konto — mit höheren Kosten.",
  gewicht: { mandat: 3, reichweite: 3 },
  antwortfreigabe: "keine",
  stand: "2026-09-18",
  quellen: ["Q5 Teil 5 Abschn. 3b", "Q4 Abschn. I"],
  verwandt: ["liechtenstein-zurechnung", "liechtenstein-stifterrechte", "auslandsstiftung-huerden", "vermoegensschutz-grenzen"],
};
