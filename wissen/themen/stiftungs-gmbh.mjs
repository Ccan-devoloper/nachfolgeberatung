/* Q3 · Stiftungs-GmbH und kapitalgesellschaftliche Familienholding */
export default {
  id: "stiftungs-gmbh",
  titel: "Die Stiftungs-GmbH — Stiftung ohne Stiftungsrecht",
  bereich: "ersatzformen",
  kurz: "Eine GmbH mit stiftungsähnlicher Satzung: eigener Rechtsträger, Haftungsbeschränkung, keine Aufsicht, hohe Thesaurierung — aber die Gesellschafter können sie ändern, und ihre Anteile werden vererbt.",
  normen: ["§§ 3, 29, 45 ff., 53, 60 GmbHG", "§ 8b KStG", "§§ 13a, 13b ErbStG", "§ 23 Abs. 5 AktG"],
  kern: [
    "'Stiftungs-GmbH' ist keine Rechtsform, sondern eine GmbH, deren Vertrag Zweck, Vermögensbindung und Governance stiftungsähnlich ausgestaltet.",
    "Ihr Reiz: Rechtspersönlichkeit, Haftungsbeschränkung, Verbandsautonomie — keine Stiftungsaufsicht, Anpassung und Beendigung durch Beschluss.",
    "Ihre Achillesferse ist dieselbe Autonomie: Qualifizierte Mehrheiten, Beiratszustimmung, Sonderrechte erschweren Änderungen, aber keine Klausel bindet alle künftigen Gesellschafter dauerhaft an den Gründerwillen.",
    "Die GmbH ist geeigneter als die AG, weil die Satzungsstrenge des Aktienrechts die Ausgestaltung begrenzt; für internationale Familien können SE oder SE & Co. KG als Holdingbaustein interessant sein.",
    "Steuerlich: Körperschaftsteuersubjekt, Beteiligungsfreistellung, Thesaurierungseffekt — aber keine Erbersatzsteuer, weil die Anteile vererbt und verschenkt werden, jedes Mal mit Erbschaftsteuer.",
    "Sie ist vor allem eine Governance- und Thesaurierungsalternative, kein Ersatz für die Vermögensentkopplung.",
  ],
  einsatzfelder: [
    { situation: "Die Familie will Eigentümerin bleiben, die Leitung professionalisieren und die Ausschüttungspolitik langfristig disziplinieren.", warum: "Genau das kann die Stiftungs-GmbH — mit 90-Prozent-Klausel und Beiratszustimmung für Zweckänderung, Ausschüttungsfreigabe und Verkauf." },
  ],
  beispiele: [
    { konstellation: "Eine Unternehmerfamilie mit Beteiligungen an mehreren operativen Gesellschaften und dem Wunsch, Gewinne über Jahrzehnte zu thesaurieren.", gestaltung: "Familienholding-GmbH, Satzung mit Ausschüttungsbeschränkung, Familienbeirat mit Zustimmungsvorbehalt, 90-Prozent-Mehrheit für Zweckänderung und Auflösung.", pointe: "Eine hohe faktische Hürde — aber keine stiftungsrechtlich unumkehrbare Bindung. Sind alle einig, ist die Bindung weg." },
  ],
  alternativen: [
    { form: "Familienstiftung", wannBesser: "Wenn die Bindung wirklich unumkehrbar sein soll.", warum: "Nur die Stiftung entzieht das Vermögen der Verbandsautonomie." },
  ],
  fehler: [
    { fehler: "Die Stiftungs-GmbH wird als 'Stiftung ohne Erbersatzsteuer' verkauft.", richtig: "Sie vermeidet die Erbersatzsteuer, weil ihre Anteile vererbt werden — und das kostet bei jedem Generationenwechsel Erbschaftsteuer." },
  ],
  merksatz: "Die Stiftungs-GmbH bindet so fest, wie ihre Gesellschafter es gerade wollen.",
  gewicht: { mandat: 2, reichweite: 2 },
  antwortfreigabe: "abstrakt",
  stand: "2026-09-12",
  quellen: ["Q3 Stiftungs-GmbH und kapitalgesellschaftliche Familienholding"],
  verwandt: ["ersatzformen-ueberblick", "stiftung-laufende-steuer", "familienpool"],
};
