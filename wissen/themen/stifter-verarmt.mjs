/* Q1 Abschn. 3.2.3 a.E. · Rückforderung wegen Verarmung, Pfändung */
export default {
  id: "stifter-verarmt",
  titel: "Wenn der Stifter selbst verarmt — kann er zurückholen?",
  bereich: "vermoegensschutz",
  kurz: "Wer sein Vermögen weggestiftet hat und später selbst bedürftig wird, kann es nach herrschender Meinung nicht zurückfordern — und genau das schützt die Stiftung auch vor seinen Gläubigern.",
  normen: ["§ 528 BGB analog", "§ 852 Abs. 2 ZPO", "§ 87 Abs. 1 S. 1 BGB", "§ 83c BGB"],
  kern: [
    "Wer eine Schenkung gemacht hat und später seinen angemessenen Unterhalt nicht mehr bestreiten kann, darf das Geschenk grundsätzlich zurückfordern. Die Frage ist, ob das auch für die Dotation einer Stiftung gilt.",
    "Die überwiegende Auffassung sagt nein: Die Ausstattung einer Stiftung ist keine Schenkung, weil es keinen Beschenkten gibt, der bereichert wäre — die Stiftung entsteht überhaupt erst durch sie.",
    "Deshalb bleibt es meist dabei: Was in die Stiftung gegeben ist, kommt auch bei eigener Not nicht zurück.",
    "Für die Gläubiger des Stifters ist das die letzte Tür. Sind die Anfechtungsfristen abgelaufen, bliebe ihnen nur, einen solchen Rückforderungsanspruch zu pfänden.",
    "Auch das ist verschlossen: Ein Anspruch dieser Art ist erst pfändbar, wenn er vertraglich anerkannt oder rechtshängig geworden ist — und das hat der Stifter selbst in der Hand.",
    "Träfe es ihn doch, wäre die Folge hart: Verliert die Stiftung ihr Vermögen, kann sie ihren Zweck nicht mehr erfüllen und ist aufzulösen.",
    "Die Kehrseite gehört ins Gespräch: Diese Endgültigkeit ist der Preis des Schutzes. Wer sie nicht will, braucht Versorgungsregelungen in der Satzung statt Rückholrechte im Hinterkopf.",
  ],
  mythos: {
    behauptung: "Im Notfall hole ich mein Vermögen aus der Stiftung zurück.",
    richtigstellung: "Nach herrschender Meinung gibt es diesen Weg nicht, weil die Dotation keine Schenkung ist. Vorsorge für den eigenen Notfall gehört deshalb in die Satzung — als Versorgungsleistung an den Stifter, soweit sie zulässig ist —, nicht in die Hoffnung auf eine Rückforderung.",
  },
  fehler: [
    { fehler: "Die Altersvorsorge des Stifters wandert vollständig in die Stiftung.", richtig: "Ein auskömmlicher Teil bleibt draussen. Eine Stiftung ist kein Konto, auf das man zurückgreift — Leistungen an den Stifter stehen im Ermessen der Organe und müssen in der Satzung angelegt sein.", norm: "§ 83c BGB" },
  ],
  einsatzfelder: [
    { situation: "Ein Stifter fragt, was passiert, wenn er im Alter pflegebedürftig wird und das Geld knapp ist.", warum: "Die ehrliche Antwort lautet: Die Stiftung ist keine Reserve. Die Lösung liegt in der Vermögensaufteilung vor der Errichtung und in einer Versorgungsklausel, nicht in einem Rückforderungsrecht." },
  ],
  merksatz: "Was in die Stiftung fliesst, fliesst nicht zurück — auch nicht zum Stifter selbst.",
  gewicht: { mandat: 2, reichweite: 2 },
  antwortfreigabe: "abstrakt",
  stand: "2026-09-18",
  quellen: ["Q1 Abschn. 3.2.3 a.E."],
  verwandt: ["glaeubiger-anfechtung", "anfechtung-ausserhalb-insolvenz", "versorgungsstiftung", "exit-aus-der-stiftung"],
};
