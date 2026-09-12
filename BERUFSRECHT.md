# Berufsrechtliche Leitplanken

Dieses Dokument ist **verbindlich für jeden automatisch erzeugten Inhalt**. Es ist
keine Rechtsberatung an den Kanzleiinhaber, sondern die Übersetzung seiner Vorgaben
in Regeln, die der Bot einhalten muss. Jede Regel hat eine technische Entsprechung;
wo die noch fehlt, steht das ausdrücklich dabei.

Der Unterschied zum Steuerberater-Repo ist grundlegend: Dort ist ein fachlicher
Fehler peinlich. Hier ist er ein Haftungs- und ein Berufsrechtsproblem.

---

## 1 · Sachlichkeitsgebot

**Grundlage:** § 43b BRAO, §§ 6 ff. BORA — Werbung ist erlaubt, soweit sie über die
berufliche Tätigkeit in Form und Inhalt sachlich unterrichtet.

**Was das ausschliesst**

- Erfolgsversprechen jeder Art („so sparen Sie …", „garantiert steuerfrei")
- Vermögens- und Ersparnisbeträge als Aufhänger („2,4 Mio. € gespart")
- Superlative über die eigene Person oder Kanzlei („führend", „der Experte für …")
- Dringlichkeitsdruck („nur noch bis Jahresende", „jetzt handeln")

**Technisch:** Sperrlistenfilter über jeden Entwurf, vor dem Rendern. Zahlen sind
erlaubt, wenn sie aus dem Gesetz stammen (Freibeträge, Fristen, Steuersätze) — nicht,
wenn sie ein Beratungsergebnis behaupten. *Status: noch zu bauen (Teil der Portierung).*

## 2 · Verschwiegenheit

**Grundlage:** § 43a Abs. 2 BRAO.

**Regel:** Es wird **kein einziger echter Fall** verwendet — auch nicht anonymisiert,
auch nicht abgewandelt. Sachverhalte in Beiträgen sind frei erfunden: eigene Namen,
eigene Zahlen, eigene Konstellationen.

**Technisch:** Das Themenschema (`wissen/schema.mjs`) hat bewusst **kein Feld für
Sachverhalte**. Der Autor bekommt nur Normen, Prüfgedanken und Merksätze und erfindet
jeden Fall neu. Was dennoch mandatsnah klingt, fängt die Eigenständigkeitsprüfung ab.

## 3 · Keine Werbung um ein Einzelmandat

**Grundlage:** § 43b BRAO.

**Regel:** Beiträge richten sich an ein unbestimmtes Publikum. Keine Ansprache einer
konkreten Person, keine Reaktion auf eine bekannt gewordene Einzelsituation.

**Technisch:** Direktnachrichten-Automatik bleibt aus (im Steuerberater-Repo
`IG_NACHRICHTEN=false`). Aufrufe zum Kommentieren sind allgemein gehalten.

## 4 · Keine Herabsetzung von Mitbewerbern

**Grundlage:** § 6 Abs. 1 BORA, § 4 Nr. 1 UWG.

Das Format **„Mythos"** ist der stärkste Reichweitenhebel dieses Kanals — und genau
deshalb die gefährlichste Stelle. Die Grenze verläuft scharf:

| Erlaubt | Nicht erlaubt |
| --- | --- |
| „Eine Familienstiftung zahlt keine Erbschaftsteuer" — das ist ein verbreiteter Irrtum. | „Was Ihnen Anbieter X verschweigt" |
| „In Verkaufsgesprächen hört man oft …" | Namen, Handles, Firmen, erkennbare Umschreibungen |
| Die Sache richtigstellen, mit Norm | Motive unterstellen, Seriosität absprechen |

**Technisch:** Namenssperrliste (Mitbewerber, Kanzleien, Handles) über jeden Entwurf.
`wissen/schema.mjs` trennt `mythos.behauptung` (die Sache) von jeder Zuschreibung an
eine Person — das Feld für „wer das behauptet" existiert nicht. *Sperrliste: noch zu
bauen.*

## 5 · Kommentarantworten — die grösste Gefahrenstelle

Im Steuerberater-Repo beantwortet der Bot Fachfragen unter den Beiträgen. Das ist dort
harmlos. Hier ist eine Antwort auf „Ich habe eine GmbH und drei Immobilien, lohnt sich
eine Stiftung?" **Rechtsberatung im Einzelfall** — mit Haftung und ohne Mandatsverhältnis.

**Regel:** Der Bot antwortet nur auf **abstrakte Fachfragen** und nur zu Themen, die
`antwortfreigabe: "abstrakt"` tragen. Sobald ein Kommentar einen eigenen Sachverhalt
schildert — Zahlen, Vermögensgegenstände, Familienverhältnisse, „bei mir ist es so" —
gibt es ausschliesslich den Standardhinweis. Das gilt auch im Automatikbetrieb: Hier
wird nicht gelockert, sondern im Zweifel geschwiegen.

**Technisch:** zwei Schranken, die beide greifen müssen:

1. `antwortfreigabe` am Thema (`wissen/schema.mjs`, Pflichtfeld). Auslandsgestaltung
   und alles Einzelfallnahe steht auf `"keine"`.
2. Sachverhaltserkennung am Kommentar, vor dem Formulieren der Antwort.

*Status: Feld existiert, Erkennung noch zu bauen.*

## 6 · Anbieterkennzeichnung

**Grundlage:** § 5 DDG (früher § 5 TMG), § 2 DL-InfoV.

Im Profil bzw. auf der verlinkten Seite: Name, Anschrift, Berufsbezeichnung
„Rechtsanwalt" mit dem Staat der Verleihung, zuständige Rechtsanwaltskammer,
berufsrechtliche Regelungen und wo sie einsehbar sind, Angaben zur
Berufshaftpflichtversicherung, USt-IdNr.

**Technisch:** Der Instagram-Bio-Link zeigt auf eine Seite mit vollständigem Impressum.
Auf den Kacheln steht dafür kein Platz und muss auch keiner sein.

## 7 · Rechtsstand und Hinweis

Jeder Beitrag trägt den Rechtsstand. Die Abschlussfolie trägt den Hinweis, dass es sich
um allgemeine Information und nicht um Rechtsberatung im Einzelfall handelt.

**Technisch:** Der Rechtsstand kommt aus `stand` am Thema, nicht aus dem Systemdatum —
so kann kein Beitrag einen aktuelleren Stand behaupten, als er hat. Themen, deren
`stand` älter als `STAND_MAX_TAGE` ist, werden vor der erneuten Verwendung gemeldet
(`npm run pruefe`).

---

## 8 · Automatikbetrieb — Entscheidung des Kanzleiinhabers

Der Kanal läuft **vollautomatisch, ohne manuelle Freigabe**. Das ist eine bewusste
Entscheidung des Kanzleiinhabers, getroffen in Kenntnis der Alternative: Die
Wissensbasis stammt aus seinen eigenen veröffentlichten Aufsätzen und Vorträgen, und
vor jeder Veröffentlichung läuft ein Gegencheck gegen das Web.

Damit verlagert sich die gesamte Kontrolle in die **Veröffentlichungsschranke**
([`FREIGABE.md`](FREIGABE.md)). Deren tragende Regel: Ein Beitrag, der eine Prüfung
nicht besteht, wird **nicht veröffentlicht** — der Slot bleibt leer. Es gibt keinen
Pfad, auf dem ein beanstandeter Entwurf trotzdem erscheint.

## Vor dem ersten Live-Beitrag

Diese Punkte kann kein Programm entscheiden. Sie gehören dem Kanzleiinhaber:

- [ ] Accountname und Profilangaben mit den Kennzeichnungspflichten abgleichen
- [ ] Berufshaftpflichtversicherer über die Kanalaktivität informieren — bei
      vollautomatischem Betrieb ohne Vorabsicht ist das kein Formalismus
- [ ] Die Sperrliste der Mitbewerber und Begriffe einmal befüllen
- [ ] Die ersten Läufe im Modus „trocken" ansehen: Der Bot erzeugt und rendert alles
      in den Asset-Zweig, veröffentlicht aber nichts. Das ersetzt keine Freigabe,
      zeigt aber, ob Ton und Schranken sitzen, bevor es live geht.
