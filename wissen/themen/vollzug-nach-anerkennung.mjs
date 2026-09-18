/* Q1 Abschn. 3 · Form; Q5 Folien 74 f., 198 f. · OLG Köln 2 Wx 220/19, Vollzug; Q10 Abschn. B.9 */
export default {
  id: "vollzug-nach-anerkennung",
  titel: "Nach der Anerkennung — was noch übertragen und gemeldet werden muss",
  bereich: "stiftungsrecht",
  kurz: "Mit der Anerkennung existiert die Stiftung, aber sie besitzt noch nichts: Grundstücke brauchen den Notar, GmbH-Anteile nur eine neue Gesellschafterliste — und drei Meldungen stehen an.",
  normen: ["§ 82 BGB", "§ 82a S. 2 BGB", "§ 81a BGB", "§ 311b BGB", "§ 137 AO"],
  kern: [
    "Das Stiftungsgeschäft verpflichtet, die Anerkennung schafft die Stiftung — übertragen ist damit noch nichts. Verpflichtung und Vollzug sind formrechtlich zwei Paar Schuhe.",
    "Für das Stiftungsgeschäft genügt seit der Reform Schriftform, auch wenn Grundstücke oder GmbH-Anteile gewidmet werden. Vor der Reform verlangte die Rechtsprechung dafür den Notar.",
    "Der dingliche Vollzug bleibt aber formbedürftig: Ein Grundstück geht erst mit notarieller Auflassung und Eintragung über.",
    "Eine Gebührenersparnis bringt das bei reinem Grundbesitz kaum — fehlt die schuldrechtliche Vorbefassung, wird die Übertragung ohne Ermässigung abgerechnet.",
    "Bei GmbH-Anteilen ist der Gewinn dagegen echt: Sind sie im Stiftungsgeschäft angelegt, gehen sie mit der Anerkennung von selbst über; zu tun bleibt nur die Berichtigung der Gesellschafterliste.",
    "Bis zur Anerkennung kann der Stifter das Stiftungsgeschäft widerrufen — danach nicht mehr. Das ist die letzte Ausstiegstür, und sie schliesst mit dem Bescheid.",
    "Danach beginnt die Meldephase: Anzeige beim Finanzamt durch den Vorstand, Meldung der wirtschaftlich Berechtigten ans Transparenzregister und ab 2028 die Eintragung ins Stiftungsregister.",
  ],
  ablauf: [
    { schritt: "Anerkennungsbescheid der Landesbehörde — ab jetzt ist die Stiftung rechtsfähig.", hinweis: "Bis zu diesem Moment, aber keinen Tag länger, kann der Stifter zurücktreten.", norm: "§ 82 BGB, § 81a BGB" },
    { schritt: "Vermögensübertragung in der jeweils richtigen Form.", hinweis: "Grundstücke zum Notar, Kontoguthaben per Überweisung, GmbH-Anteile ohne weiteres Zutun — dort nur die Gesellschafterliste berichtigen.", norm: "§ 82a S. 2 BGB, § 311b BGB" },
    { schritt: "Anzeige gegenüber dem Finanzamt.", hinweis: "Sie trifft den Vorstand persönlich, nicht den Berater.", norm: "§ 137 AO" },
    { schritt: "Meldung ans Transparenzregister.", hinweis: "Vorstände, namentlich bestimmte Begünstigte und der Begünstigtenkreis gehören hinein.", norm: "§ 20 GwG" },
    { schritt: "Ab 1. Januar 2028: Eintragung ins Stiftungsregister.", hinweis: "Neue Stiftungen sofort, bestehende bis Ende 2028.", norm: "§ 20 StiftRG" },
  ],
  fehler: [
    { fehler: "Nach der Anerkennung passiert monatelang nichts, weil 'die Stiftung ja gegründet ist'.", richtig: "Eine Stiftung ohne Vermögen kann ihren Zweck nicht erfüllen. Die Behörde hat die Ausstattung im Blick, und der Vorstand ist zur Einforderung verpflichtet." },
    { fehler: "Das Stiftungsgeschäft wird beim Notar beurkundet, obwohl nur Wertpapiere gewidmet werden.", richtig: "Schriftform genügt. Die Beurkundung kostet, ohne etwas zu bringen — anders als die dingliche Übertragung eines Grundstücks.", norm: "§ 81 Abs. 3 BGB" },
  ],
  einsatzfelder: [
    { situation: "Ein Unternehmer will seine GmbH-Beteiligung in eine Familienstiftung geben.", warum: "Seit der Reform ist das der einfachste Fall überhaupt: Widmung im schriftlichen Stiftungsgeschäft, Übergang mit der Anerkennung, danach nur noch die Liste beim Handelsregister." },
  ],
  merksatz: "Die Anerkennung schafft die Stiftung — das Vermögen muss ihr danach noch jemand geben.",
  gewicht: { mandat: 3, reichweite: 2 },
  antwortfreigabe: "abstrakt",
  stand: "2026-09-18",
  quellen: ["Q1 Abschn. 3", "Q5 Folien 74 f. und 198 f.", "Q10 Abschn. B.9"],
  verwandt: ["stiftung-errichtung-ablauf", "stiftungsregister-transparenz", "vorstandshaftung-steuern", "stichtag-stiftungserrichtung"],
};
