/* Q8 · Kap. 2.5, 2.6 · Fall 8 · Fehler 8 */
export default {
  id: "kaeufertypen-exit",
  titel: "Stratege, Private Equity oder das eigene Management — wer kauft, prägt den Vertrag",
  bereich: "unternehmensverkauf",
  kurz: "Hinter „fünf Millionen Kaufpreis\" stecken Earn-out, Rückbeteiligung, Verkäuferdarlehen und Einbehalte; welcher Anteil davon sicher ist und wie er besteuert wird, hängt vom Käufertyp ab.",
  normen: ["§ 17 EStG", "§ 19 EStG", "§ 8b KStG", "§ 20 EStG"],
  kern: [
    "Der strategische Käufer zahlt oft den höchsten Preis und will die volle Kontrolle — dafür kommen Kartell- und Investitionskontrolle, harte Garantien und ein Wettbewerbsverbot.",
    "Private Equity kauft meist die Mehrheit und lässt den Verkäufer mit einer Rückbeteiligung an Bord: Der zweite Exit in vier bis sechs Jahren ist Teil des Geschäfts — und der Preis dafür ist Fremdfinanzierung und fremde Governance.",
    "Beim Management-Buy-out zählt Kontinuität, aber die Finanzierung ist das Nadelöhr; Verkäuferdarlehen und gestreckte Kaufpreise sind die Regel, nicht die Ausnahme.",
    "Der Earn-out macht einen Teil des Preises von künftigen Kennzahlen abhängig — wann er entsteht, wann er zufliesst und wie er besteuert wird, gehört vor der Unterschrift geklärt.",
    "Bei Managementbeteiligungen ist die Kernfrage, ob der spätere Gewinn Kapitaleinkunft ist oder als Vergütung für Arbeitsleistung besteuert wird — der Unterschied beträgt leicht zwanzig Prozentpunkte.",
  ],
  einsatzfelder: [
    { situation: "Ein Finanzinvestor bietet 70 Prozent Kauf und 30 Prozent Rückbeteiligung.", warum: "Der Preis ist nur die halbe Verhandlung; Mitverkaufspflicht, Vorzugsrechte bei der Verteilung, Verwässerung und die Bewertung der Rückbeteiligung entscheiden über den zweiten Exit." },
    { situation: "Das Management soll übernehmen, hat aber nur zwanzig Prozent Eigenkapital.", warum: "Verkäuferdarlehen, Rangrücktritt und Sicherheiten machen den Verkäufer zum Kreditgeber seines Nachfolgers — das gehört in die Risikoabwägung, nicht in den Anhang." },
  ],
  beispiele: [
    { konstellation: "Ein Gesellschafter verkauft für 30 Mio. €: 18 Mio. € bei Vollzug, 6 Mio. € Rückbeteiligung, 4 Mio. € Earn-out über drei Jahre, 2 Mio. € auf einem Treuhandkonto für Garantiefälle.", gestaltung: "Sicher sind zunächst 18 Mio. €. Die Rückbeteiligung teilt das unternehmerische Risiko weiter, der Earn-out hängt an Kennzahlen, die der neue Eigentümer beeinflusst, der Einbehalt an Garantien.", pointe: "Verkauft wurde für dreissig — angekommen sind achtzehn, alles Weitere ist Zukunft." },
  ],
  fehler: [
    { fehler: "Earn-out, Rückbeteiligung und Managementbeteiligung werden wirtschaftlich verhandelt, die steuerliche Qualifikation kommt später.", richtig: "Sie muss parallel modelliert werden: Zeitpunkt der Entstehung, Einkunftsart und Bewertung entscheiden über ein Drittel des Ergebnisses." },
    { fehler: "Der Earn-out wird an einen Gewinn gekoppelt, den der Käufer nach dem Vollzug selbst steuert.", richtig: "Bemessungsgrössen gehören auf Kennzahlen, die der Verkäufer nachvollziehen kann — samt Informations- und Schutzrechten während der Earn-out-Phase." },
  ],
  merksatz: "Der Kaufpreis ist eine Zahl im Vertrag — was davon ankommt, steht in den Nebenabreden.",
  gewicht: { mandat: 2, reichweite: 3 },
  antwortfreigabe: "keine",
  stand: "2026-09-13",
  quellen: ["Q8 Kap. 2.5, 2.6", "Q8 Fall 8", "Q8 Fehler 8"],
  verwandt: ["exit-steuer-halteebene", "holding-vor-dem-exit", "verkauf-nach-schenkung", "share-asset-deal"],
};
