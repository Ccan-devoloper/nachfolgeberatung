/* Q10 Abschn. G.5a, G.5b · Mittelverwendung und Rücklagen */
export default {
  id: "zeitnahe-mittelverwendung",
  titel: "Zwei Jahre — so lange darf gemeinnütziges Geld liegen bleiben",
  bereich: "gemeinnuetzig",
  kurz: "Eine gemeinnützige Stiftung muss ihre Mittel binnen zwei Jahren für ihre Zwecke einsetzen. Wer Vermögen aufbauen will, braucht dafür einen der gesetzlichen Rücklagentatbestände.",
  normen: ["§ 55 Abs. 1 Nr. 5 AO", "§ 62 Abs. 1 AO", "§ 62 Abs. 3 AO", "§ 63 Abs. 4 AO", "§ 55 Abs. 1 Nr. 1 AO"],
  kern: [
    "Mittel dürfen nur für satzungsmässige Zwecke verwendet werden — und sie müssen zeitnah verwendet werden, das heisst innerhalb von zwei Jahren nach Zufluss.",
    "Verwendung meint nicht nur den Verbrauch für laufende Aufwendungen, sondern auch die Anschaffung von Gegenständen, die den Satzungszwecken dienen.",
    "Kleine Körperschaften sind befreit: Wer jährliche Einnahmen unter 100.000 Euro hat, unterliegt dem Gebot nicht.",
    "Wer Mittel nicht zeitnah verwendet, bekommt vom Finanzamt eine Frist gesetzt. Erst wenn auch die verstreicht, wird es ernst.",
    "Vier Rücklagen erlauben, Geld dennoch zurückzulegen: die Projektrücklage für ein konkretes Vorhaben, die Betriebsmittelrücklage für laufende Kosten, die Wiederbeschaffungsrücklage für geplante Ersatzanschaffungen und die freie Rücklage.",
    "Die freie Rücklage ist die wichtigste für den Vermögensaufbau: höchstens ein Drittel des Überschusses aus der Vermögensverwaltung, dazu höchstens zehn Prozent der übrigen zeitnah zu verwendenden Mittel.",
    "Wird der Höchstbetrag in einem Jahr nicht ausgeschöpft, lässt er sich in den beiden Folgejahren nachholen.",
    "Bestimmte Zuflüsse unterliegen dem Gebot von vornherein nicht — insbesondere Zuwendungen in den Vermögensstock. Wer will, dass sein Geld dauerhaft bleibt, muss das beim Zuwenden sagen.",
    "Neben dem Gebot stehen Verbote: keine Zuwendungen an Mitglieder, keine Parteienfinanzierung, keine zweckfremden Ausgaben und keine unverhältnismässig hohen Vergütungen.",
    "Die Angemessenheit von Vergütungen wird nach denselben Massstäben beurteilt wie bei der verdeckten Gewinnausschüttung — durch Fremdvergleich innerhalb einer Bandbreite, zu der auch Gehälter in Wirtschaftsunternehmen zählen.",
  ],
  zahlen: [
    { wert: "2 Jahre", bedeutung: "So lange dürfen Mittel unverwendet bleiben.", norm: "§ 55 Abs. 1 Nr. 5 AO" },
    { wert: "100.000 €", bedeutung: "Unter dieser Einnahmengrenze gilt das Gebot der zeitnahen Mittelverwendung nicht.", norm: "§ 55 Abs. 1 Nr. 5 S. 4 AO" },
    { wert: "1/3", bedeutung: "Anteil des Überschusses aus Vermögensverwaltung, der in die freie Rücklage darf — plus 10 Prozent der sonstigen Mittel.", norm: "§ 62 Abs. 1 Nr. 3 AO" },
  ],
  fehler: [
    { fehler: "Die Stiftung legt Erträge an, um erst in zehn Jahren ein grosses Projekt zu finanzieren — ohne Rücklagenbeschluss.", richtig: "Ohne einen Rücklagentatbestand ist das eine Mittelfehlverwendung. Die Projektrücklage verlangt eine konkrete Zeitvorstellung oder wenigstens die glaubhafte Darstellung der Durchführung.", norm: "§ 62 Abs. 1 Nr. 1 AO" },
    { fehler: "Verwaltungs- und Werbekosten wachsen mit dem Spendenaufkommen mit.", richtig: "Werden ausserhalb einer Aufbauphase mehr als die Hälfte der Mittel für Verwaltung und Spendenwerbung ausgegeben, sieht die Finanzverwaltung das als schädlich an." },
    { fehler: "Der Stifter erhält ein Geschäftsführergehalt am oberen Rand des Üblichen — mit Verweis auf seine Verdienste.", richtig: "Massstab ist der Fremdvergleich. Verdienste um die Stiftung rechtfertigen keine Vergütung oberhalb der Bandbreite.", norm: "§ 55 Abs. 1 Nr. 3 AO" },
  ],
  einsatzfelder: [
    { situation: "Eine Stiftung soll über Jahrzehnte Vermögen aufbauen, bevor sie gross ausschüttet.", warum: "Das geht nur über Rücklagen und Zuwendungen in den Vermögensstock — beides gehört von Anfang an geplant, nicht im Nachhinein erklärt." },
  ],
  merksatz: "Gemeinnütziges Vermögen wächst nicht von allein — jeder zurückgelegte Euro braucht einen gesetzlichen Grund.",
  gewicht: { mandat: 3, reichweite: 2 },
  antwortfreigabe: "abstrakt",
  stand: "2026-09-18",
  quellen: ["Q10 Abschn. G.5a, G.5b"],
  verwandt: ["gemeinnuetzigkeit-grundprinzipien", "gemeinnuetzigkeit-sphaeren", "anlagerichtlinie-stiftung", "gemeinnuetzigkeit-verlieren"],
};
