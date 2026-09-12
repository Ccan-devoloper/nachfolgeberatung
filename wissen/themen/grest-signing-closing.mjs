/* Q9 · Kap. 3.3, 3.6 */
export default {
  id: "grest-signing-closing",
  titel: "Zweimal Steuer für einen Kauf? — Signing und Closing seit Juli 2026",
  bereich: "grest",
  kurz: "Unterschrift und Vollzug konnten bei Immobilien-Share-Deals zwei getrennte Steuertatbestände auslösen; für Vorgänge ab dem 3. Juli 2026 ordnet das Gesetz den Vorrang des Signing an — für Altfälle bleibt die alte Lage.",
  normen: ["§ 1 Abs. 3b GrEStG", "§ 23 Abs. 28, 29 GrEStG", "§ 16 GrEStG", "§ 1 Abs. 3 GrEStG"],
  kern: [
    "Beim Share Deal kann schon der Abschluss des Kaufvertrags einen Tatbestand erfüllen — der spätere Übergang der Anteile einen zweiten. Das führte zu doppelten Festsetzungen.",
    "Der Bundesfinanzhof hatte 2025 in zwei Eilverfahren ernstliche Zweifel geäußert, wenn das Finanzamt beim zweiten Bescheid den vollzogenen Anteilsübergang bereits kannte. Es waren Aussetzungsentscheidungen, keine abschließenden Urteile.",
    "Der Gesetzgeber hat nachgezogen: Für Erwerbsvorgänge nach dem 2. Juli 2026 treten die Gesellschafterwechsel-Tatbestände zurück, soweit der Vorgang bereits von den Signing-Tatbeständen erfasst ist.",
    "Für Altfälle und Übergangsfälle bleiben die alte Fassung, die Übergangsregeln und die Eilrechtsprechung maßgeblich — die alte Diskussion darf nicht unverändert fortgeschrieben werden.",
    "Die Anzeigepflichten sind kein Formalismus: Die Erleichterungen bei einer Rückabwicklung setzen eine fristgerechte und in allen Teilen vollständige Anzeige voraus.",
  ],
  einsatzfelder: [
    { situation: "Ein Immobilien-Share-Deal wird unterschrieben und erst Monate später vollzogen.", warum: "Beide Zeitpunkte gehören getrennt geprüft und angezeigt — mit der richtigen Tatbestandsbezeichnung." },
    { situation: "Ein Bescheid aus einem Altfall liegt noch offen.", warum: "Dort gelten die alte Fassung und die Eilrechtsprechung; die Übergangsregeln entscheiden, welche Lage anzuwenden ist." },
  ],
  fehler: [
    { fehler: "Die Anzeige wird als Nebensache des Notars behandelt.", richtig: "Sie gehört mit Verantwortlichem, Frist, Grundstücksliste und abgestimmter Tatbestandsbezeichnung in die Vollzugsliste.", norm: "§ 16 Abs. 5 GrEStG" },
    { fehler: "Ratgeber und Muster von vor Juli 2026 werden unverändert übernommen.", richtig: "Die Zäsur liegt beim 3. Juli 2026 — davor und danach ist die Systematik verschieden.", norm: "§ 1 Abs. 3b GrEStG" },
  ],
  merksatz: "Unterschrift und Vollzug sind zwei Zeitpunkte — seit Juli 2026 aber nur noch eine Steuer.",
  gewicht: { mandat: 2, reichweite: 1 },
  antwortfreigabe: "keine",
  stand: "2026-09-13",
  quellen: ["Q9 Kap. 3.3, 3.6"],
  verwandt: ["share-deal-grest", "grest-zurechnung", "grest-konzernklausel"],
};
