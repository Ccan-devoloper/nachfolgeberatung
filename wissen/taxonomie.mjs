/* ==========================================================================
   Themenbereiche und Gewichtung.

   Zwei Unterschiede zum Steuerberater-Repo, beide bewusst:

   1. Dort gewichtet die „Examensprioritaet" nach einer Achse — wie oft ein
      Thema geprüft wird. Hier braucht es zwei: Ein Thema kann mandatsträchtig
      und trotzdem reichweitenschwach sein (Stiftungsaufsichtsrecht) oder
      umgekehrt (prominente Steuer-Mythen). Der Planer multipliziert beide.

   2. Der Rechtsstand veraltet. Jedes Thema trägt ein Datum; `stand.mjs`
      meldet, was überprüft werden muss, bevor es erneut gepostet wird.
   ========================================================================== */

export const BEREICHE = {
  familienstiftung: { label: "Familienstiftung (Deutschland)", kurz: "FamStiftung", leitnormen: ["§§ 80 ff. BGB"] },
  liechtenstein:    { label: "Liechtensteinische Familienstiftung", kurz: "FL-Stiftung", leitnormen: ["Art. 552 PGR", "§ 15 AStG"] },
  doppelstiftung:   { label: "Doppelstiftung", kurz: "Doppelstiftung", leitnormen: ["§§ 80 ff. BGB", "§§ 51 ff. AO"] },
  gemeinnuetzig:    { label: "Gemeinnützige Stiftung", kurz: "Gemeinnützig", leitnormen: ["§§ 51 ff. AO"] },
  erbst:            { label: "Erbschaft- und Schenkungsteuer", kurz: "ErbSt", leitnormen: ["ErbStG"] },
  ertragsteuer:     { label: "Laufende Besteuerung", kurz: "Ertragsteuer", leitnormen: ["§ 1 Abs. 1 Nr. 4 KStG", "§ 8b KStG"] },
  international:    { label: "Außensteuerrecht und Wegzug", kurz: "International", leitnormen: ["§ 6 AStG", "§ 15 AStG"] },
  nachfolge:        { label: "Unternehmensnachfolge", kurz: "Nachfolge", leitnormen: ["§§ 13a, 13b ErbStG"] },
  erbrecht:         { label: "Erb- und Familienrecht", kurz: "Erbrecht", leitnormen: ["§§ 2303 ff. BGB"] },
  vermoegensschutz: { label: "Vermögensschutz und seine Grenzen", kurz: "Asset Protection", leitnormen: ["§ 2325 BGB", "§ 1375 BGB", "§§ 129 ff. InsO"] },
  ersatzformen:     { label: "Stiftungsersatzformen", kurz: "Ersatzformen", leitnormen: ["GmbHG", "HGB", "§§ 2197 ff. BGB"] },
  stiftungsrecht:   { label: "Stiftungsorganisation und Aufsicht", kurz: "Organisation", leitnormen: ["§§ 84 ff. BGB"] },
};

/* Mandatsrelevanz: Wie oft entscheidet dieses Thema über ein echtes Mandat?
   3 = steht regelmäßig im Zentrum einer Gestaltung
   2 = kommt in Gestaltungen vor, trägt sie aber nicht
   1 = Randthema, Spezialfrage                                              */
export const MANDAT = { 3: "tragend", 2: "begleitend", 1: "Randthema" };

/* Reichweitenpotenzial: Wie viele Menschen ausserhalb der Fachwelt verstehen
   die Frage sofort und wollen die Antwort?
   3 = jeder Unternehmer versteht die Frage in einem Satz
   2 = verständlich, aber erklärungsbedürftig
   1 = nur für Fachpublikum (Steuerberater, Kollegen — trotzdem wertvoll,
       weil Zuweiser hier mitlesen)                                          */
export const REICHWEITE = { 3: "breit", 2: "erklärungsbedürftig", 1: "Fachpublikum" };

/* Das Produkt beider Achsen steuert, wie oft ein Thema drankommt. Ein Thema
   mit 3x3 erscheint neunmal so oft wie eines mit 1x1 — aber keines nie, weil
   die Fachthemen die Zuweiser halten. */
export function gewicht(thema) {
  const m = thema?.gewicht?.mandat ?? 1;
  const r = thema?.gewicht?.reichweite ?? 1;
  return m * r;
}

/* Wiederholungssperre.

   Das Steuerberater-Repo sperrt pro THEMA (60 Tage) — bei 436 Themen und drei
   Beiträgen am Tag geht das auf. Hier nicht: 41 Themen mal 2 Beiträge am Tag
   wären nach drei Wochen durch, und der Planer würde die Sperre stillschweigend
   übergehen (planer.mjs fällt auf den ungefilterten Pool zurück, wenn kein
   Kandidat frei ist).

   Deshalb zwei Stufen. Gesperrt wird die KOMBINATION aus Thema und Format —
   dieselbe Sache aus einem anderen Blickwinkel ist ein neuer Beitrag, keine
   Wiederholung. Zusätzlich hält eine kurze Themensperre denselben Stoff aus
   zwei aufeinanderfolgenden Wochen heraus.

   Rechnung zum Bestand: 115 Thema-Format-Paare auf Blockebene, 181 auf
   Einzeleintragsebene. Bei zwei Beiträgen am Tag sind das 58 bis 91 Tage ohne
   jede Wiederholung; das Format „aktuell" (Websuche) kommt unbegrenzt dazu. */
export const SPERRE_TAGE = 240;        // Thema + Format: praktisch einmal pro Bestandszyklus
export const THEMA_SPERRE_TAGE = 12;   // dasselbe Thema nicht zweimal in zwei Wochen

/* Stories zehren den Bestand rund viermal so schnell auf wie Beiträge. Neun am
   Tag sind für ein Examenspublikum richtig, für Unternehmer und Family Offices
   nicht — sie lassen den Kanal wie einen Newsfeed wirken und wären hier nach
   gut zwei Wochen durch. */
export const STORIES_PRO_TAG = 4;

/* Rechtsstand: Ab diesem Alter muss ein Thema überprüft werden, bevor es
   erneut in einen Beitrag darf. Stiftungs- und Aussensteuerrecht bewegen
   sich; ein Beitrag mit falschem Stand ist ein Haftungsrisiko. */
export const STAND_MAX_TAGE = 365;
