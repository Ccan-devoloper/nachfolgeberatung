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
FREIGABE.md        die Veröffentlichungsschranke — die einzige Kontrolle im Automatikbetrieb
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
- **85 Themen** aus acht Quellen (`wissen/rohmaterial/QUELLEN.md`): Einsatzfelder,
  Vorteile und Nachteile, Alternativen, Ersatzformen, Lebenszyklus-Besteuerung,
  Vermögensschutz und seine Grenzen, Liechtenstein, Reform 2023 — und seit Q7 das
  Feld jenseits der Stiftung: Niessbrauch, Rückforderungsrechte, Personen- und
  Kapitalgesellschaftsanteile, Unternehmertestament, Ehevertrag, Immobilien,
  Minderjährige, 90-Prozent-Test, Vorwegabschlag, BVerfG-Verhandlung 13.10.2026; seit Q8
  die vier bis dahin offenen Felder: Handlungsunfähigkeit des Unternehmers,
  Unternehmensverkauf, Erbengemeinschaft und Berliner Testament, internationales
  Erbrecht — mit fiktiven Beispielen in den Grössenordnungen, die in der Beratung
  vorkommen

**Vorgaben des Kanzleiinhabers**

- Zielgruppe sind Mandanten. Keine Prüfschemata; stattdessen Vorteile, Einsatzfelder,
  Alternativen, Ersatzformen, Unternehmens- und Vermögensnachfolge im Ganzen.
- Beispiele sind erwünscht — fiktiv, um Konstellationen vor Augen zu führen.
- Tagesbudget 0,25 € für alle Beiträge und Stories zusammen (wie im Steuerberater-Repo:
  Sonnet für die Texte, Haiku für den Faktencheck, harter Tagesdeckel).
- **Vollautomatisch, keine manuelle Freigabe.** Vor jeder Veröffentlichung laufen
  mehrere Gegenchecks, darunter einer gegen den aktuellen Rechtsstand im Netz.
  Was nicht besteht, erscheint nicht — siehe [`FREIGABE.md`](FREIGABE.md).
- Autoren und Fundstellen werden in Beiträgen nicht genannt.

**Als Nächstes**

1. **Bot portieren** aus `Ccan-devoloper/steuerberater`, Ordner `social/`. Rund 7.000
   Zeilen, die weitgehend domänenneutral sind: Rendern über Chromium, Instagram Graph
   API, Reels mit Sprachausgabe, lernende Veröffentlichungszeiten, Kostendeckel,
   Eigenständigkeitsprüfung, Weiterverteilung nach LinkedIn und YouTube. Anzupassen
   sind im Wesentlichen drei Stellen: der Themenpool (gegen `wissen/` statt gegen eine
   Webseite), die Beitragsformate und der Kalender.
2. **Veröffentlichungsschranke** bauen ([`FREIGABE.md`](FREIGABE.md)) — sechs
   Prüfungen vor jedem Beitrag, davon vier kostenlos und lokal. Kein Entwurf, der
   eine nicht besteht, erscheint.
3. **Stil** — zwei Entwurfsrichtungen liegen vor und sind noch nicht entschieden.

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
