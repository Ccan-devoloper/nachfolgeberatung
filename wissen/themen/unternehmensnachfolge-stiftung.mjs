/* Q1 · Geregelte Unternehmensnachfolge, Unternehmensstiftung */
export default {
  id: "unternehmensnachfolge-stiftung",
  titel: "Die Stiftung als Ankergesellschafter — Unternehmensnachfolge ohne Erbstreit",
  bereich: "nachfolge",
  kurz: "Hält eine Familienstiftung die Unternehmensanteile, gibt es niemanden mehr, der verkaufen, streiten oder zersplittern kann — und die Führung kann unabhängig von der Familie besetzt werden.",
  normen: ["§ 80 Abs. 1 BGB", "§ 2210 BGB", "§ 1 Abs. 1 Nr. 1 MitbestG", "§ 1 Abs. 2 HGB"],
  kern: [
    "Die Beteiligungsträgerstiftung hält die Anteile und wird damit Ankergesellschafter, dessen Zustimmung für alles Wesentliche nötig ist — Verkauf, Anteilsübertragung, Satzungsänderung.",
    "Die Unternehmensträgerstiftung betreibt das Unternehmen selbst; sie ist seltener, weil die Satzungsflexibilität geringer ist.",
    "Die Stiftung löst das klassische Nachfolgeproblem: Erben, die nicht wollen oder nicht können, müssen nicht Gesellschafter werden — sie können Begünstigte sein.",
    "Mitgliederlosigkeit schützt vor feindlicher Übernahme: Selbst ein lukratives Angebot können die Begünstigten nicht annehmen, weil ihnen die Anteile nicht gehören.",
    "Über Personalunion in Stiftungs- und Gesellschaftsorganen lässt sich das Gesamtgeschehen lenken; über Fremdorganschaft die Führung professionalisieren.",
    "Gegenüber der Dauertestamentsvollstreckung fehlt die 30-Jahres-Grenze; gegenüber der GmbH die Mitbestimmung.",
  ],
  fehler: [
    { fehler: "Mit der Stiftung gilt die Nachfolge als geregelt.", richtig: "Die Stiftung löst die Anteilsnachfolge, nicht die Führungsnachfolge. Wer das Unternehmen künftig führt, wie diese Person gefunden, eingearbeitet und kontrolliert wird, steht in keiner Stiftungssatzung — das ist eine eigene, meist die schwierigere Aufgabe." },
    { fehler: "Bei ausländischen Beteiligungsgesellschaften wird die Geschäftsleitung faktisch vom Stiftungsvorstand im Inland ausgeübt.", richtig: "Dann rutscht der Ort der Geschäftsleitung ins Inland und mit ihm die unbeschränkte Steuerpflicht der Gesellschaft.", norm: "§ 1 Abs. 1 Nr. 4 KStG" },
  ],
  einsatzfelder: [
    { situation: "Kein Kind will oder kann das Unternehmen führen, aber alle sollen davon leben können.", warum: "Die Stiftung trennt Führung von Versorgung: Fremdmanager führen, die Familie ist begünstigt." },
    { situation: "Mehrere Kinder mit unterschiedlichen Lebenswegen — eines im Betrieb, zwei nicht.", warum: "Ohne Stiftung entstehen bei jedem Erbfall neue Gesellschafter mit eigenen Interessen; mit Stiftung bleibt der Gesellschafter immer derselbe." },
    { situation: "Ein börsennotiertes oder begehrtes Unternehmen soll nicht verkauft werden können — nie.", warum: "Die Stiftungsorgane dürfen sich nicht über den Stifterwillen hinwegsetzen. Ein Verkaufsverbot in der Satzung gilt für alle Zeit." },
  ],
  beispiele: [
    { konstellation: "Ein Mittelständler mit drei Kindern: Eines arbeitet im Betrieb, eines ist Ärztin, eines lebt im Ausland. Der Betrieb soll bleiben, alle drei sollen profitieren.", gestaltung: "Die Anteile gehen auf eine Familienstiftung. Das im Betrieb tätige Kind wird Geschäftsführer mit marktüblichem Gehalt, alle drei sind Begünstigte. Ein Kuratorium aus Familie und externem Beirat besetzt die Führung nach Eignung.", pointe: "Niemand muss Gesellschafter werden, um zu profitieren. Und niemand kann die anderen zum Verkauf zwingen." },
  ],
  alternativen: [
    { form: "Familienpool oder Familienholding", wannBesser: "Wenn die Familie Eigentümerin bleiben und mitentscheiden will.", warum: "Die Mitgliedschaft bleibt; Governance ist anpassbar. Aber jeder Generationenwechsel bleibt ein Erbfall mit allen Folgen." },
    { form: "Dauertestamentsvollstreckung", wannBesser: "Wenn nur eine Übergangsphase überbrückt werden soll — etwa bis die Kinder reif genug sind.", warum: "Kein neuer Rechtsträger, planmässiges Ende. Aber maximal 30 Jahre." },
    { form: "Stiftung & Co. KG", wannBesser: "Wenn die Leitung institutionalisiert, die Familie aber über Kommanditanteile beteiligt bleiben soll.", warum: "Die Stiftung führt als Komplementärin, die Anteile bleiben vererblich." },
  ],
  merksatz: "Die Stiftung ist der Gesellschafter, der nie stirbt, nie verkauft und nie streitet.",
  gewicht: { mandat: 3, reichweite: 3 },
  antwortfreigabe: "abstrakt",
  stand: "2026-09-12",
  quellen: ["Q1 Abschn. 3.2.4", "Q3 Stiftung & Co. KG, Dauertestamentsvollstreckung"],
  verwandt: ["stiftung-warum", "betriebsvermoegen-verschonung", "stiftung-co-kg", "dauertestamentsvollstreckung", "familienpool"],
};
