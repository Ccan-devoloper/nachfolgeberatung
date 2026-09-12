# Nachfolgeberatung

Wissensbasis und Social-Automatik für Unternehmens- und Vermögensnachfolge mit
Schwerpunkt auf deutschen Stiftungen — privatnützig und gemeinnützig — sowie
liechtensteinischen Familienstiftungen.

Ziel ist nicht die grösste Followerzahl, sondern der Kanal, über den die richtigen
Mandate kommen. Reichweite ist dafür die Voraussetzung, nicht der Massstab.

## Aufbau

```
wissen/            das materielle Recht — der eigentliche Wert des Projekts
  taxonomie.mjs      Bereiche, zweiachsige Gewichtung, Fristen
  schema.mjs         Aufbau eines Themas, Prüfung, Formatableitung
  index.mjs          Bestand laden und im Ganzen prüfen
  themen/            ein Thema je Datei
  rohmaterial/       unverarbeitetes Material
tools/
  pruefe-wissen.mjs  `npm run pruefe`
BERUFSRECHT.md     verbindliche Leitplanken für jeden erzeugten Inhalt
```

## Stand

**Fertig**

- Themenschema mit Prüfung: Pflichtfelder, doppelte IDs, tote Querverweise,
  überalterter Rechtsstand
- Zweiachsige Gewichtung (Mandatsrelevanz × Reichweitenpotenzial) statt der
  einachsigen Prioritätslogik aus dem Steuerberater-Repo
- Formatableitung: Welche Beitragsformate ein Thema tragen kann, ergibt sich aus
  seinen Blöcken — nicht aus einer Pflegeliste, die veraltet
- Berufsrechtliche Leitplanken, jeweils mit ihrer technischen Entsprechung
- Zwei vollständig ausgefüllte Beispielthemen

**Als Nächstes**

1. **Material einspeisen** — läuft, sobald es da ist. Aus Rohmaterial werden Themen.
2. **Bot portieren** aus `Ccan-devoloper/steuerberater`, Ordner `social/`. Rund 7.000
   Zeilen, die weitgehend domänenneutral sind: Rendern über Chromium, Instagram Graph
   API, Reels mit Sprachausgabe, lernende Veröffentlichungszeiten, Kostendeckel,
   Eigenständigkeitsprüfung, Weiterverteilung nach LinkedIn und YouTube. Anzupassen
   sind im Wesentlichen drei Stellen: der Themenpool (gegen `wissen/` statt gegen eine
   Webseite), die Beitragsformate und der Kalender.
3. **Freigabe-Queue** — der wichtigste Unterschied zum Steuerberater-Bot: Der Bot
   erzeugt, ein Mensch gibt frei, erst dann wird veröffentlicht. Formatweise lockerbar.
4. **Stil** — zwei Entwurfsrichtungen liegen vor und sind noch nicht entschieden.

## Warum nicht dasselbe Repo wie der Steuerberater-Bot

Die Maschinerie ist dort schon gebaut, und es wäre verlockend, sie zu teilen. Dagegen
sprechen zwei Dinge: Die einzige harte Kopplung des Bots an seine Domäne ist der
Themenpool, und der wird hier ohnehin neu geschrieben. Und eine gemeinsame Bibliothek
über drei Kanäle mit unterschiedlichen Formaten, Stilen und — hier entscheidend —
unterschiedlichen berufsrechtlichen Anforderungen zu pflegen, kostet mehr, als sie
spart. Zusammenführen lässt sich später, wenn sich Muster gezeigt haben.

## Betrieb

```bash
npm run pruefe     # Themenbestand prüfen
```

Node 20 oder neuer. Bis der Bot portiert ist, gibt es ausser der Prüfung nichts
auszuführen — bewusst: ein halb angepasster Bot, der Rechtsinhalte veröffentlicht, wäre
schlechter als keiner.
