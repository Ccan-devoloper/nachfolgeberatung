/* Q7 Nr. 30.115 · Ausländischer Destinatär einer deutschen Stiftung */
export default {
  id: "auslandsdestinataer",
  titel: "Das Kind lebt im Ausland und bekommt aus der deutschen Stiftung",
  bereich: "international",
  kurz: "Zieht ein Begünstigter ins Ausland, bleibt die deutsche Stiftung, was sie ist — aber die Zahlung an ihn wird zu einem Fall für zwei Steuerordnungen.",
  normen: ["§ 49 Abs. 1 Nr. 5 EStG", "§ 43 Abs. 1 Nr. 7a EStG", "§ 50d EStG", "§ 20 Abs. 1 Nr. 9 EStG"],
  kern: [
    "Eine Familienstiftung mit Sitz in Deutschland bleibt hier unbeschränkt steuerpflichtig, gleichgültig wo ihre Begünstigten leben.",
    "Für den Begünstigten ändert sich alles: Er ist in Deutschland nur noch beschränkt steuerpflichtig, und die einbehaltene Kapitalertragsteuer hat für ihn abgeltende Wirkung.",
    "Ob Deutschland überhaupt besteuern darf und in welcher Höhe, entscheidet das Abkommen mit seinem Wohnsitzstaat — eine Erstattung setzt einen eigenen Antrag voraus.",
    "Die grössere Unsicherheit liegt auf der anderen Seite: Manche Staaten sehen eine ausländische Stiftung als transparent an und rechnen ihre Erträge dem dort ansässigen Begünstigten laufend zu, auch ohne Ausschüttung.",
    "Andere behandeln die Zahlung als Kapitaleinkunft, wieder andere als Schenkung. Eine allgemeingültige Antwort gibt es nicht.",
    "Für die Familie heisst das: Bevor ein Begünstigter dauerhaft ins Ausland zieht, gehört seine steuerliche Behandlung dort geklärt — vor dem Umzug, nicht bei der ersten Ausschüttung.",
    "Für die Stiftung heisst es: Der Steuerabzug läuft weiter, und der Vorstand muss ihn auch bei Auslandszahlungen richtig anwenden.",
  ],
  fehler: [
    { fehler: "Es wird angenommen, mit dem Wegzug des Kindes werde die Ausschüttung in Deutschland steuerfrei.", richtig: "Der Steuerabzug bleibt. Eine Entlastung gibt es nur nach Abkommen und nur auf Antrag.", norm: "§ 50d EStG" },
    { fehler: "Die Behandlung im Zuzugsstaat wird erst geprüft, nachdem dort schon Jahre gewohnt wurde.", richtig: "Manche Staaten rechnen die Stiftungserträge laufend zu. Rückwirkend lässt sich das nicht mehr gestalten, nur noch erklären." },
  ],
  einsatzfelder: [
    { situation: "Die Tochter arbeitet dauerhaft in London oder Zürich und ist Begünstigte der deutschen Familienstiftung.", warum: "Zwei Fragen vorab: Was behält Deutschland ein, und wie sieht ihr Wohnsitzstaat die Stiftung. Beides zusammen ergibt erst die tatsächliche Belastung." },
  ],
  merksatz: "Die Stiftung bleibt deutsch — der Begünstigte nicht, und sein Wohnsitzstaat entscheidet mit.",
  gewicht: { mandat: 2, reichweite: 2 },
  antwortfreigabe: "keine",
  stand: "2026-09-18",
  quellen: ["Q7 Nr. 30.115"],
  verwandt: ["destinataer-besteuerung", "erbschaftsteuer-international", "auslandsstiftung-quellensteuer", "vorstandshaftung-steuern"],
};
