/* Q8 · Kap. 2.1 · Beck-Gegenprüfung 7.3 */
export default {
  id: "share-asset-deal",
  titel: "Share Deal oder Asset Deal — dieselbe Firma, zwei verschiedene Verkäufe",
  bereich: "unternehmensverkauf",
  kurz: "Beim Share Deal wechseln die Anteile, beim Asset Deal die Vermögensgegenstände; das entscheidet über Haftung, Verträge, Arbeitnehmer, Form — und darüber, wer den Gewinn versteuert.",
  normen: ["§ 15 GmbHG", "§ 613a BGB", "§ 1 Abs. 1a UStG", "§ 16 EStG", "§ 17 EStG"],
  kern: [
    "Beim Share Deal verkauft der Gesellschafter seine Anteile; der Rechtsträger bleibt mitsamt seiner Geschichte bestehen — der Käufer prüft deshalb die Vergangenheit umso genauer.",
    "Beim Asset Deal verkauft die Gesellschaft einzelne Vermögensgegenstände und Verträge; der Käufer kann auswählen, braucht aber für viele Verträge die Zustimmung der Vertragspartner.",
    "Arbeitsverhältnisse gehen beim Asset Deal von Gesetzes wegen über, mit Unterrichtungspflicht und Widerspruchsrecht der Arbeitnehmer; beim reinen Share Deal bleibt der Arbeitgeber derselbe.",
    "Steuerlich greift die Zweiteilung zu kurz: Zu unterscheiden sind drei Kategorien — Verkauf von Kapitalgesellschaftsanteilen, Verkauf eines Betriebs oder der Einzelwirtschaftsgüter und Verkauf eines Mitunternehmeranteils. Der Personengesellschaftsanteil liegt steuerlich näher am Asset Deal als am Anteilsverkauf.",
    "Der Käufer will meist den Asset Deal, weil er die Kaufpreise auf die Wirtschaftsgüter verteilen und abschreiben kann; der Verkäufer meist den Share Deal, weil der Gewinn bei ihm und nicht in der Gesellschaft entsteht. Der Preis bildet diesen Unterschied ab.",
  ],
  gegenueberstellung: {
    links: { label: "Share Deal", punkte: [
      { krit: "Was wird verkauft", wert: "Gesellschaftsanteile; der Rechtsträger bleibt" },
      { krit: "Verkäufer", wert: "Der Gesellschafter" },
      { krit: "Haftungshistorie", wert: "Bleibt im Unternehmen — Due Diligence ist alles" },
      { krit: "Verträge", wert: "Laufen weiter; Change-of-Control-Klauseln prüfen" },
      { krit: "Arbeitnehmer", wert: "Arbeitgeber bleibt derselbe" },
      { krit: "Form", wert: "GmbH-Anteile notariell", norm: "§ 15 GmbHG" },
    ] },
    rechts: { label: "Asset Deal", punkte: [
      { krit: "Was wird verkauft", wert: "Einzelne Gegenstände, Verträge, Verbindlichkeiten" },
      { krit: "Verkäufer", wert: "Die Gesellschaft selbst" },
      { krit: "Haftungshistorie", wert: "Käufer kann selektieren; Übergangshaftung bleibt" },
      { krit: "Verträge", wert: "Einzelübertragung, häufig Zustimmung nötig" },
      { krit: "Arbeitnehmer", wert: "Übergang kraft Gesetzes, Widerspruchsrecht", norm: "§ 613a BGB" },
      { krit: "Form", wert: "Je nach Asset: Grundstücke, IP, Gesamtvermögen" },
    ] },
  },
  einsatzfelder: [
    { situation: "Ein Unternehmen mit belasteter Historie — Altlasten, Prozesse, Betriebsprüfung — soll verkauft werden.", warum: "Käufer bestehen dann oft auf dem Asset Deal; der Verkäufer muss die zweite Steuerstufe bei der Ausschüttung einpreisen." },
    { situation: "Nur ein Geschäftsbereich soll verkauft werden.", warum: "Entweder Asset Deal für diesen Bereich oder vorherige Ausgliederung in eine eigene Gesellschaft — die Ausgliederung braucht Vorlauf wegen der Sperrfristen." },
  ],
  fehler: [
    { fehler: "Beim Asset Deal wird nur der Kaufpreis betrachtet.", richtig: "Der Gewinn entsteht in der verkaufenden GmbH. Bis das Geld beim Gesellschafter ankommt, kommt eine zweite Steuerstufe — die Rechnung muss bis zur Privatperson durchgehen." },
    { fehler: "Beim Verkauf eines Mitunternehmeranteils bleibt das Sonderbetriebsvermögen zurück.", richtig: "Dann ist es kein Verkauf des ganzen Anteils — die Begünstigungen entfallen und es entsteht laufender Gewinn.", norm: "§ 16 EStG" },
  ],
  merksatz: "Share oder Asset entscheidet nicht nur, was verkauft wird — sondern wer die Steuer zahlt.",
  gewicht: { mandat: 3, reichweite: 2 },
  antwortfreigabe: "abstrakt",
  stand: "2026-09-13",
  quellen: ["Q8 Kap. 2.1", "Q8 Kap. 7.3"],
  verwandt: ["exit-steuer-halteebene", "paragraf-34-mythos", "sonderbetriebsvermoegen", "holding-vor-dem-exit"],
};
