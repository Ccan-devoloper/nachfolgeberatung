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
social/            der Instagram-Bot (Node, GitHub Actions, stündlich)
  src/lauf.mjs       Tageslauf: Plan → Gegencheck → Schreiben → Hooks → Prüfen → Rendern → Posten
  src/planer.mjs     Themenmix nach Quote, Sperren, CTA-Rotation, Uhrzeiten
  src/autor.mjs      Carousels und Stories (Claude), Sie-Form, 7-Folien-Aufbau
  src/hooks.mjs      Hook-Engine: fünf Hooks, Bewertung 1–10 in fünf Dimensionen, nur ≥ 40/50
  src/pruefung.mjs   Eigenständigkeit, Namen, Sperrliste, Formgrenzen
  src/faktencheck.mjs / faktencheck-openai.mjs   zwei unabhängige Prüfer
  src/gegencheck.mjs Web-Gegencheck vor dem Schreiben, Recherche für Aktuelles
  src/stile.mjs / vorlagen.mjs / render.mjs   zwei Stile (Kontor, Dossier), Diagramm-Vorlagen, Chromium
  beispiele/         Beispielinhalte (für Prompt, Tests, Vorschau)
.github/workflows/instagram.yml   stündlicher Lauf mit Weckkette
SETUP.md           Secrets, Profil, Trockenlauf – was von Hand passieren muss
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
- **121 Themen** aus zehn Quellen (`wissen/rohmaterial/QUELLEN.md`): Einsatzfelder,
  Vorteile und Nachteile, Alternativen, Ersatzformen, Lebenszyklus-Besteuerung,
  Vermögensschutz und seine Grenzen, Liechtenstein, Reform 2023 — und seit Q7 das
  Feld jenseits der Stiftung: Niessbrauch, Rückforderungsrechte, Personen- und
  Kapitalgesellschaftsanteile, Unternehmertestament, Ehevertrag, Immobilien,
  Minderjährige, 90-Prozent-Test, Vorwegabschlag, BVerfG-Verhandlung 13.10.2026; seit Q8
  die vier bis dahin offenen Felder: Handlungsunfähigkeit des Unternehmers,
  Unternehmensverkauf, Erbengemeinschaft und Berliner Testament, internationales
  Erbrecht; seit Q9 Bewertung, Grunderwerbsteuer, Family Governance und die
  Vermögensanlage der Stiftung — mit fiktiven Beispielen in den Grössenordnungen, die in
  der Beratung vorkommen

**Vorgaben des Kanzleiinhabers**

- Zielgruppe sind Mandanten. Keine Prüfschemata; stattdessen Vorteile, Einsatzfelder,
  Alternativen, Ersatzformen, Unternehmens- und Vermögensnachfolge im Ganzen.
- Beispiele sind erwünscht — fiktiv, um Konstellationen vor Augen zu führen.
- Tagesbudget 0,35 € für alle Beiträge und Stories zusammen (Sonnet für die Texte,
  Haiku für Hook-Bewertung und Faktencheck I, OpenAI für Faktencheck II, harter
  Tagesdeckel über beide Anbieter).
- **Vollautomatisch, keine manuelle Freigabe.** Vor jeder Veröffentlichung laufen
  mehrere Gegenchecks, darunter einer gegen den aktuellen Rechtsstand im Netz.
  Was nicht besteht, erscheint nicht — siehe [`FREIGABE.md`](FREIGABE.md).
- Autoren und Fundstellen werden in Beiträgen nicht genannt.

- **Der Bot** (`social/`), portiert aus dem Steuerberater-Repo und auf das
  Strategiepapier „Instagram-Strategie Stiftungsrecht & Nachfolge“ umgebaut: ein
  Carousel am Tag (7 Folien: Hook → Problem → Erklärung I–III/Beispiel → Einordnung →
  Take-away), drei bis vier Stories, Themenmix 30/20/12/8/12/10/8 über ein rollendes
  28-Tage-Fenster, Tiefe 40/40/20, Hook-Engine mit Bewertung, CTA-Rotation, Sicherheits-
  felder je Beitrag (Rechtsstand, Jurisdiktion, Primärquelle, Normen, Unsicherheit,
  Prüfstatus), Lernschleife nach 48 h und 7 Tagen. Grafiken statt Fotos:
  Strukturdiagramme, Zeitachsen, Vergleiche, Zahlen. Zwei Stile, Kontor und Dossier.
- **Veröffentlichungsschranke** ([`FREIGABE.md`](FREIGABE.md)): Web-Gegencheck des
  Themas, Eigenständigkeits- und Formprüfung, Hook-Mindestpunkte, Faktencheck I
  (Claude) und Faktencheck II (OpenAI, streng). Was nicht besteht, erscheint nicht.
- **Trockenlauf**: die ersten drei Tage nach dem ersten Lauf werden alle Inhalte nur
  erzeugt und im Asset-Zweig abgelegt; danach schaltet der Bot von selbst auf live.

**Als Nächstes**

1. **Stil entscheiden** (Kontor oder Dossier) – Variable `IG_STIL`.
2. **Vertiefung** statt Lücken: Alle sieben Inhaltsblöcke halten im Planer ihren Zielanteil
   (Simulation über acht Wochen). Offen sind Themen zweiter Ordnung – siehe
   `wissen/rohmaterial/QUELLEN.md`, Abschnitt Lücken.
3. **Reels** (Di/Do/Sa) mit dem Diagramm-Motion-Ansatz aus dem Strategiepapier.

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

```bash
cd social && npm install
npm test            # Bot-Tests ohne API
npm run vorschau    # Beispielkacheln in beiden Stilen
```

Node 22. Einrichtung des Kanals: [`SETUP.md`](SETUP.md).
