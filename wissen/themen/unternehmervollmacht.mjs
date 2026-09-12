/* Q8 · Kap. 1.2, 1.3, 1.6 · Fall 3, 4 */
export default {
  id: "unternehmervollmacht",
  titel: "Vier Dokumente, kein Formular — die Unternehmervollmacht",
  bereich: "vorsorge",
  kurz: "Vorsorgevollmacht, Unternehmervollmacht, Prokura und Betreuungsverfügung tun vier verschiedene Dinge; das Muster aus dem Internet deckt das Privatvermögen ab und lässt die Firma offen.",
  normen: ["§ 1814 Abs. 3 BGB", "§ 1816 BGB", "§ 1820 BGB", "§§ 49, 52 HGB", "§ 181 BGB"],
  kern: [
    "Die private Vorsorgevollmacht schützt Person und Privatvermögen und macht eine Betreuung entbehrlich — für Gesellschaftsrechte, Register und einen Unternehmensverkauf ist sie meist zu allgemein.",
    "Die Unternehmervollmacht ist auf Gesellschaft und Vermögensstruktur zugeschnitten: Stimmrechte, Beschlüsse, Anteilsgeschäfte, Bank und Finanzierung — das Organamt des Geschäftsführers überträgt auch sie nicht.",
    "Die Prokura sichert die operative Ebene mit gesetzlich festem Umfang und ist im Handelsregister eingetragen — Grundstücksverkäufe braucht sie ausdrücklich, Gesellschafterbeschlüsse ersetzt sie nie.",
    "Die Betreuungsverfügung erteilt keine Vertretungsmacht; sie benennt die Wunschperson für den Fall, dass doch ein Betreuer bestellt werden muss.",
    "Bewährte Architektur: im Aussenverhältnis sofort wirksam, im Innenverhältnis erst bei definiertem Notfall auszuüben — sonst müssen Bank, Registergericht und Mitgesellschafter erst ein medizinisches Beweisverfahren führen.",
  ],
  einsatzfelder: [
    { situation: "Zwei Kinder sollen gemeinsam bevollmächtigt werden, sind aber zerstritten.", warum: "Gesamtvertretung führt zum Stillstand, Einzelvertretung ohne Kontrolle zum Missbrauchsrisiko — die Lösung ist ein Katalog: operativ einzeln, Grundlagengeschäfte gemeinsam, ein neutraler Dritter für den Patt." },
    { situation: "Ein Unternehmer steht mitten im Verkaufsprozess, der Letter of Intent ist unterschrieben.", warum: "Anteilsabtretung und Garantien brauchen eine Vollmacht, die Grundlagengeschäfte und notarielle Form abdeckt — eine transaktionsbezogene Spezialvollmacht gehört in jeden M&A-Prozess." },
  ],
  ablauf: [
    { schritt: "Aussen- und Innenverhältnis trennen", hinweis: "Aussen unbeschränkt, damit Dritte handeln können; innen an den Notfall gebunden, damit der Bevollmächtigte nicht vorher tätig wird." },
    { schritt: "Vertretungsform festlegen", hinweis: "Einzel- oder Gesamtvertretung, Untervollmacht, Ersatzbevollmächtigter für den Fall, dass der Erste selbst ausfällt." },
    { schritt: "Geschäftskatalog abarbeiten", hinweis: "Anteilsgeschäfte, Grundstücke, Schenkungen, Bank und Depot, Steuerkonto und elektronische Zugänge, Befreiung von § 181 BGB — jede Lücke blockiert im Ernstfall.", norm: "§ 181 BGB" },
    { schritt: "Kontrolle einbauen", hinweis: "Vier-Augen-Regel für Verkauf, Schenkung und Entnahmen, Berichtspflicht gegenüber Beirat oder Steuerberater, Regeln für Interessenkonflikte." },
    { schritt: "Mit Satzung und Gesellschaftsvertrag abgleichen", hinweis: "Die beste Vollmacht nützt nichts, wenn die Satzung Stimmrechtsvertretung ausschliesst." },
    { schritt: "Form, Originale und Zugang klären", hinweis: "Notarielle Beglaubigung für Register und Grundbuch, wer die Originale hat, wo sie liegen." },
  ],
  fehler: [
    { fehler: "Die Vollmacht soll erst „bei Geschäftsunfähigkeit\" gelten.", richtig: "Dann muss jeder Dritte erst prüfen, ob dieser Fall eingetreten ist — Banken und Registergerichte lehnen ab. Die Bedingung gehört ins Innenverhältnis, nicht in die Urkunde nach aussen." },
    { fehler: "Es gibt eine rechtliche Vollmacht, aber niemand kennt die Zugangsdaten.", richtig: "Ohne Zugriff auf Banking, Warenwirtschaft, Steuerportal und E-Mail nützt die Vollmacht wenig — der digitale Notfallordner gehört dazu." },
    { fehler: "Eine Person bekommt alles, ohne Kontrolle.", richtig: "Handlungsfähigkeit und Missbrauchsschutz sind beide nötig. Bei Anhaltspunkten für pflichtwidrige Ausübung kann das Betreuungsgericht eingreifen — besser ist eine eigene Kontrollarchitektur.", norm: "§ 1820 BGB" },
  ],
  merksatz: "Eine Vollmacht ist kein Formular, sondern eine Zuständigkeitsmatrix — vier Dokumente, die zusammenpassen müssen.",
  gewicht: { mandat: 3, reichweite: 3 },
  antwortfreigabe: "abstrakt",
  stand: "2026-09-13",
  quellen: ["Q8 Kap. 1.2, 1.3, 1.6", "Q8 Fall 3, 4"],
  verwandt: ["handlungsunfaehigkeit-unternehmer", "ein-mann-gmbh-notfall", "notfallordner-unternehmen"],
};
