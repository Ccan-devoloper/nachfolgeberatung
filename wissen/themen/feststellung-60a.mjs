/* Q10 Abschn. G.3c · Feststellung nach § 60a AO */
export default {
  id: "feststellung-60a",
  titel: "Es gibt keine Anerkennung als gemeinnützig",
  bereich: "gemeinnuetzig",
  kurz: "Anders als bei der Stiftungsanerkennung gibt es für die Gemeinnützigkeit kein Anerkennungsverfahren. Es gibt nur einen Bescheid über die Satzung — und alle drei Jahre eine Prüfung dessen, was tatsächlich geschehen ist.",
  normen: ["§ 60a AO", "§ 63 AO", "§ 63 Abs. 5 AO", "§ 171 Abs. 10 AO", "§ 60b AO"],
  kern: [
    "Ein besonderes Anerkennungsverfahren für die Gemeinnützigkeit kennt das Gesetz nicht. Das Finanzamt entscheidet im Veranlagungsverfahren durch Steuerbescheid, gegebenenfalls durch Freistellungsbescheid.",
    "Vorgelagert gibt es die Feststellung der satzungsmässigen Voraussetzungen — auf formlosen Antrag oder von Amts wegen. Sie schafft Rechtssicherheit, aber nur über die Satzung.",
    "Was der Bescheid nicht prüft: die tatsächliche Geschäftsführung. Wer ihn hat, weiss, dass seine Satzung stimmt — mehr nicht.",
    "Sein praktischer Wert liegt woanders: Er erlaubt der Körperschaft, Zuwendungsbestätigungen auszustellen. Ohne ihn kann sie keine abzugsfähigen Spenden entgegennehmen.",
    "Als Grundlagenbescheid bindet er auch gegenüber denen, die spenden — das ist der Vertrauensschutz des Spenders.",
    "Die Bindung endet von selbst, wenn sich die massgeblichen Vorschriften ändern, etwa der Zweckkatalog oder die Mustersatzung. Niemand muss dafür etwas tun; der Schutz ist einfach weg.",
    "Bei Neugründungen kommt es auf das Jahr an: Die Feststellung sollte im selben Veranlagungszeitraum beantragt werden wie die Gründung. Wird sie abgelehnt, gibt es die Begünstigung erst ab dem Folgejahr — selbst wenn die Satzung in Ordnung war.",
    "Überprüft wird die Gemeinnützigkeit danach etwa alle drei Jahre, bei Neugründungen früher.",
    "Seit 2024 führt das Bundeszentralamt für Steuern ein öffentliches Zuwendungsempfängerregister. Man sieht dort, dass eine Körperschaft steuerbegünstigt ist — nicht, ob sie auch Zuwendungsbestätigungen ausstellen darf.",
  ],
  ablauf: [
    { schritt: "Satzung vor der Gründung abstimmen", hinweis: "Das Finanzamt prüft den Entwurf; Änderungen sind vorher billiger als nachher." },
    { schritt: "Gründen und im selben Jahr die Feststellung beantragen", hinweis: "Sonst beginnt die Begünstigung erst im Folgejahr.", norm: "§ 60a AO" },
    { schritt: "Zuwendungsbestätigungen erst danach ausstellen", hinweis: "Der Feststellungsbescheid darf dafür höchstens drei Jahre alt sein, ein Freistellungsbescheid höchstens fünf.", norm: "§ 63 Abs. 5 AO" },
    { schritt: "Alle drei Jahre die Prüfung erwarten", hinweis: "Geprüft wird dann die tatsächliche Geschäftsführung — Mittelverwendung, Zweckerfüllung, Angemessenheit." },
  ],
  fehler: [
    { fehler: "Der Feststellungsbescheid wird als Nachweis der Gemeinnützigkeit behandelt.", richtig: "Er bestätigt nur die Satzung. Ob die Stiftung gemeinnützig bleibt, entscheidet sich an dem, was sie tut." },
    { fehler: "Nach einer Gesetzesänderung wird weiter auf den alten Bescheid vertraut.", richtig: "Die Bindungswirkung entfällt automatisch, sobald sich die feststellungsrelevanten Vorschriften ändern.", norm: "§ 60a Abs. 3 AO" },
  ],
  zahlen: [
    { wert: "3 Jahre", bedeutung: "So alt darf ein Feststellungsbescheid höchstens sein, damit Zuwendungsbestätigungen ausgestellt werden dürfen.", norm: "§ 63 Abs. 5 AO" },
    { wert: "5 Jahre", bedeutung: "Dieselbe Frist, wenn bereits ein Freistellungsbescheid oder eine Anlage zum Körperschaftsteuerbescheid vorliegt." },
  ],
  merksatz: "Der Bescheid nach § 60a AO sagt, dass Ihre Satzung stimmt — nicht, dass Ihre Stiftung gemeinnützig ist.",
  gewicht: { mandat: 2, reichweite: 2 },
  antwortfreigabe: "abstrakt",
  stand: "2026-09-18",
  quellen: ["Q10 Abschn. G.2a, G.3c, G.4a"],
  verwandt: ["gemeinnuetzige-satzung", "spendenabzug", "gemeinnuetzigkeit-verlieren"],
};
