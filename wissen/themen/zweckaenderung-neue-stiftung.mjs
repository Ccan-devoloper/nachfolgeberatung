/* Q10 Abschn. F.3c · Zweckänderungen */
export default {
  id: "zweckaenderung-neue-stiftung",
  titel: "Wer den Begünstigtenkreis erweitert, gründet steuerlich neu",
  bereich: "erbst",
  kurz: "Eine Satzungsänderung, die den Charakter der Stiftung ändert, behandelt die Finanzverwaltung als Errichtung einer neuen Familienstiftung — mit voller Schenkungsteuer auf das gesamte Stiftungsvermögen.",
  normen: ["§ 7 Abs. 1 Nr. 8 ErbStG", "§ 15 Abs. 2 S. 1 ErbStG", "§ 85 BGB", "§ 1 Abs. 1 Nr. 4 ErbStG"],
  kern: [
    "Satzungsänderungen sind seit der Reform 2023 bundeseinheitlich geregelt und in engen Grenzen möglich. Die zivilrechtliche Zulässigkeit sagt aber nichts über die Steuer.",
    "Die Finanzverwaltung nimmt an: Ändert eine Satzungsänderung den Charakter der Stiftung, gilt das als Errichtung einer neuen Familienstiftung — steuerlich also als vollständig neue Zuwendung.",
    "Besonders im Blick ist die Erweiterung des Begünstigtenkreises. Der Gedanke dahinter: Wäre der neu Aufgenommene schon bei Errichtung berechtigt gewesen, hätte damals eine ungünstigere Steuerklasse gegolten.",
    "Die Folge ist unangenehm asymmetrisch. Nicht die Erweiterung wird besteuert, sondern der Vorgang gilt als neue Errichtung — und Bemessungsgrundlage ist das gesamte Stiftungsvermögen zum neuen Stichtag.",
    "Bei einer Stiftung, die über Jahrzehnte gewachsen ist, kann das teurer sein als die ursprüngliche Errichtung.",
    "Praktisch heisst das: Der Begünstigtenkreis gehört von Anfang an so weit gefasst, wie er je reichen soll — aber nicht weiter, weil die Steuerklasse sich nach dem entferntest Berechtigten richtet.",
    "Das ist die Spannung, die jede Familienstiftungssatzung aushalten muss: Zu eng gefasst, wird jede spätere Öffnung zur Neugründung. Zu weit gefasst, kostet schon die Errichtung eine schlechtere Steuerklasse.",
    "Wer später doch öffnen muss, sollte die Alternative rechnen: eine zweite Stiftung für den neuen Kreis statt der Änderung der bestehenden.",
  ],
  fehler: [
    { fehler: "Die Satzung wird nach der Geburt von Urenkeln erweitert, weil sie „auch dazugehören sollen“.", richtig: "Standen Abkömmlinge in gerader Linie von Anfang an in der Satzung, ist nichts zu tun. Wird der Kreis dagegen erst jetzt geöffnet, droht die Behandlung als Neuerrichtung.", norm: "§ 7 Abs. 1 Nr. 8 ErbStG" },
    { fehler: "Es wird nur geprüft, ob die Stiftungsbehörde die Änderung genehmigt.", richtig: "Die Genehmigung sagt nichts über die Steuer. Beides gehört vor der Änderung geprüft — nicht nacheinander." },
  ],
  einsatzfelder: [
    { situation: "Eine Familienstiftung aus den 1990er-Jahren soll an eine veränderte Familienstruktur angepasst werden.", warum: "Hier entscheidet sich vorab, ob die Anpassung eine Änderung ist oder steuerlich eine Neugründung — der Unterschied kann siebenstellig sein." },
  ],
  merksatz: "Der Begünstigtenkreis einer Familienstiftung lässt sich später kaum öffnen, ohne dass das Finanzamt von vorn anfängt.",
  gewicht: { mandat: 3, reichweite: 2 },
  antwortfreigabe: "keine",
  stand: "2026-09-18",
  quellen: ["Q10 Abschn. F.3c"],
  verwandt: ["satzungsaenderung-reform", "steuerklassenprivileg", "satzung-zukunftsklauseln", "stifterwille-ewigkeit"],
};
