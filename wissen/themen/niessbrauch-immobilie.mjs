/* Q7 · Kap. 17.1 Immobiliennießbrauch */
export default {
  id: "niessbrauch-immobilie",
  titel: "Mietshaus verschenken, Mieten behalten — der Immobiliennießbrauch",
  bereich: "immobilien",
  kurz: "Die Immobilie geht auf die Kinder über, die Mieten bleiben bei den Eltern; entscheidend ist, was der Vertrag zu Lasten, Sanierung, Finanzierung und Verkauf sagt — und ob der Pflichtteil mitgeplant ist.",
  normen: ["§§ 1030, 1041, 1047 BGB", "§ 14 BewG", "§ 2325 Abs. 3 BGB", "§ 23 EStG"],
  kern: [
    "Die laufenden Lasten und die gewöhnliche Unterhaltung trägt nach dem Gesetz der Nießbraucher; außergewöhnliche Instandsetzungen — Dach, Heizung, Fassade — der Eigentümer. Fast immer will die Familie das anders regeln.",
    "Der Nießbraucher versteuert die Mieteinkünfte weiter; die Abschreibung folgt beim Vorbehaltsnießbrauch dem Nießbraucher, nicht dem neuen Eigentümer.",
    "Der Kapitalwert des Nießbrauchs mindert die Schenkungsteuer — berechnet aus Jahresmiete und statistischer Lebenserwartung des Übergebers.",
    "Verkauft der Beschenkte innerhalb von zehn Jahren, kann die Spekulationsfrist des Übergebers auf ihn übergehen — die unentgeltliche Übertragung startet keine neue Frist.",
    "Beim Pflichtteil kommt es darauf an, ob der Übergeber den wirtschaftlichen Genuss aufgegeben hat; ein umfassender Vorbehalt kann den Fristanlauf verhindern.",
  ],
  einsatzfelder: [
    { situation: "Ein Ehepaar mit drei Mietobjekten will die Erbschaftsteuer für die Kinder senken, aber im Alter nicht von den Kindern abhängen.", warum: "Der Nießbrauch trennt beides: Die Kinder tragen die künftige Wertsteigerung, die Eltern behalten die Mieten." },
    { situation: "Ein Objekt soll übertragen, aber demnächst kernsaniert werden.", warum: "Ohne Vertragsregel trägt der Eigentümer die Sanierung, obwohl der Nießbraucher die Mieten bekommt — das muss vorher verteilt werden." },
  ],
  ablauf: [
    { schritt: "Wert der Immobilie und Jahresreinertrag ermitteln", hinweis: "Beides bestimmt Schenkungsteuer und Nießbrauchswert." },
    { schritt: "Rechte und Lasten verteilen", hinweis: "Wer zahlt Dach und Heizung, wer entscheidet über Verkauf, wer haftet für Darlehen — das steht nicht im Gesetz, das steht im Vertrag." },
    { schritt: "Pflichtteil und Rückforderung prüfen", hinweis: "Weitere Kinder, Ehegatte, Scheidungs- und Insolvenzfall des Beschenkten." },
    { schritt: "Notarielle Beurkundung und Grundbucheintragung", hinweis: "Der Nießbrauch wird eingetragen und ist damit gegen jeden Erwerber gesichert.", norm: "§ 873 BGB" },
  ],
  beispiele: [
    { konstellation: "Ein 70-jähriger Vater überträgt ein Wohnhaus (1,5 Mio. €, Jahresmiete 60.000 €) auf die Tochter und behält den Nießbrauch.", gestaltung: "Bei seinem Alter bewertet das Finanzamt den Nießbrauch mit gut dem Zehnfachen der Jahresmiete, also rund 600.000 €. Steuerpflichtig bleiben etwa 900.000 €, nach Freibetrag 500.000 €.", pointe: "Wäre er zehn Jahre jünger, läge der Nießbrauchswert deutlich höher und die Steuer niedriger — der Zeitpunkt ist selbst ein Gestaltungsmittel." },
  ],
  fehler: [
    { fehler: "Der Vertrag schweigt zur Instandhaltung.", richtig: "Dann trägt der Eigentümer die großen Reparaturen aus eigener Tasche, obwohl er keine Miete sieht — ein Streit auf Ansage.", norm: "§ 1041 BGB" },
    { fehler: "Der Nießbrauch wird mit einem freien Widerrufsrecht und einer Verfügungssperre kombiniert, „zur Sicherheit\".", richtig: "Damit ist wirtschaftlich nichts aus dem Vermögen des Übergebers ausgeschieden — für den Pflichtteil läuft keine Frist.", norm: "§ 2325 Abs. 3 BGB" },
  ],
  zahlen: [
    { wert: "Jahreswert × Vervielfältiger", bedeutung: "So wird der Nießbrauch bewertet; der Vervielfältiger hängt vom Alter des Nießbrauchers ab und sinkt mit jedem Lebensjahr.", norm: "§ 14 BewG" },
    { wert: "10 Jahre", bedeutung: "Spekulationsfrist bei Immobilien — sie läuft beim Beschenkten weiter, nicht neu.", norm: "§ 23 Abs. 1 S. 3 EStG" },
  ],
  merksatz: "Beim Immobiliennießbrauch entscheidet nicht das Gesetz, sondern der Vertrag — wer das Dach zahlt, steht dort oder nirgends.",
  gewicht: { mandat: 3, reichweite: 3 },
  antwortfreigabe: "abstrakt",
  stand: "2026-09-12",
  quellen: ["Q7 Kap. 17.1", "Q7 Kap. 24"],
  verwandt: ["niessbrauch-grundlagen", "pflichtteil-fristanlauf", "immobilien-nachfolge-struktur", "rueckforderungsrechte"],
};
