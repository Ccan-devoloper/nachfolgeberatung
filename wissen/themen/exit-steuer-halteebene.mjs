/* Q8 · Kap. 2.2 · Fall 6, 7 */
export default {
  id: "exit-steuer-halteebene",
  titel: "Wer verkauft, entscheidet über die Steuer — fünf Halteebenen im Vergleich",
  bereich: "unternehmensverkauf",
  kurz: "Dieselbe Firma, derselbe Preis, fünf verschiedene Steuerrechnungen: Es macht den Unterschied, ob die Privatperson, ein Einzelunternehmer, ein Mitunternehmer, eine Holding oder eine Stiftung verkauft.",
  normen: ["§ 17 EStG", "§ 16 EStG", "§ 8b Abs. 2, 3 KStG", "§ 3 Nr. 40 EStG", "§ 34 EStG"],
  kern: [
    "Verkauft die Privatperson eine wesentliche GmbH-Beteiligung, greift das Teileinkünfteverfahren: 60 Prozent des Gewinns sind steuerpflichtig, zum persönlichen Satz — der ermässigte Tarif gilt dafür nicht.",
    "Verkauft ein Einzelunternehmer seinen Betrieb, kommen ab 55 Jahren oder bei dauernder Berufsunfähigkeit auf Antrag ein Freibetrag und der ermässigte Steuersatz in Betracht — einmal im Leben.",
    "Verkauft ein Mitunternehmer seinen ganzen Anteil, gilt dasselbe Regime; beim Teilanteil entsteht dagegen grundsätzlich laufender Gewinn, und das Sonderbetriebsvermögen muss vollständig mitgedacht werden.",
    "Verkauft eine Holding-GmbH ihre Tochter, bleibt der Gewinn grundsätzlich ausser Ansatz, 5 Prozent gelten als nicht abzugsfähige Betriebsausgaben — effektiv rund 1,5 Prozent. Das ist ein Reinvestitionsvorteil auf Holdingebene, keine steuerfreie Privatentnahme.",
    "Verkauft eine Familienstiftung eine Kapitalbeteiligung, gilt dasselbe Beteiligungsprivileg — aber der Erlös bleibt der Stiftung zugeordnet, und Satzung, Stifterwille und Grundstockvermögen sind eine zweite, eigenständige Prüfung.",
  ],
  einsatzfelder: [
    { situation: "Ein Gründer hält 100 Prozent im Privatvermögen und bekommt ein Kaufangebot über 8 Mio. €.", warum: "Die Halteebene hätte Jahre vorher entschieden werden müssen — jetzt ist der Privatverkauf der einzige Weg, und der ermässigte Tarif greift dafür nicht." },
    { situation: "Die Familie will nach dem Verkauf reinvestieren statt konsumieren.", warum: "Dann gehört die Beteiligung vor dem Exit unter eine Holding: Der Erlös bleibt fast ungeschmälert investierbar, die Privatentnahme wird später und dosiert besteuert." },
  ],
  beispiele: [
    { konstellation: "Eine operative GmbH wird für 20 Mio. € verkauft. Variante A: Der Gründer hält die Anteile privat. Variante B: Eine Holding-GmbH hält sie seit acht Jahren.", gestaltung: "Variante A: rund 60 Prozent des Gewinns steuerpflichtig zum persönlichen Satz — grob 5,5 bis 6 Mio. € Steuer. Variante B: rund 1,5 Prozent auf Holdingebene, also etwa 300.000 €; die Steuer auf die spätere Ausschüttung fällt erst an, wenn und soweit ausgeschüttet wird.", pointe: "Der Unterschied liegt nicht im Kaufvertrag, sondern in einer Entscheidung, die acht Jahre vorher getroffen wurde. Vereinfachte Modellrechnung." },
  ],
  fehler: [
    { fehler: "Der Letter of Intent wird unterschrieben, bevor Steuerstruktur und Halteebene geprüft sind.", richtig: "Danach ist fast jede Umstrukturierung entweder gesperrt oder als Gestaltungsmissbrauch angreifbar. Die Strukturfrage gehört an den Anfang, nicht ans Ende." },
    { fehler: "Die Holding-Rechnung endet bei 1,5 Prozent.", richtig: "Das Geld liegt dann in der Holding, nicht auf dem Privatkonto. Die Ausschüttung an die natürliche Person ist eine eigene Steuerstufe.", norm: "§ 20 Abs. 1 Nr. 1 EStG" },
  ],
  zahlen: [
    { wert: "60 %", bedeutung: "Steuerpflichtiger Anteil des Gewinns beim Verkauf aus dem Privatvermögen — Teileinkünfteverfahren.", norm: "§ 3 Nr. 40 EStG" },
    { wert: "5 %", bedeutung: "Gelten beim Verkauf durch eine Körperschaft als nicht abzugsfähige Betriebsausgaben — effektiv rund 1,5 Prozent Steuer.", norm: "§ 8b Abs. 3 KStG" },
  ],
  merksatz: "Nicht der Kaufpreis entscheidet über die Steuer, sondern wer am Tag der Unterschrift Eigentümer ist.",
  gewicht: { mandat: 3, reichweite: 3 },
  antwortfreigabe: "keine",
  stand: "2026-09-13",
  quellen: ["Q8 Kap. 2.2", "Q8 Fall 6, 7"],
  verwandt: ["share-asset-deal", "paragraf-34-mythos", "holding-vor-dem-exit", "exit-aus-der-stiftung"],
};
