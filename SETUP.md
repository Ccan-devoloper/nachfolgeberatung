# Einrichtung des Instagram-Bots

Was einmalig von Hand passieren muss, damit der Bot läuft. Alles andere macht er selbst.

## 1. Instagram-Konto

Ein **Instagram-Business- oder Creator-Konto** (kein privates), Anzeigename, Bio und
Profilbild nach dem Strategiepapier. Vorschläge:

| Feld | Text |
| --- | --- |
| Anzeigename | `Stiftungsrecht & Nachfolge \| RA · Dr. jur.` |
| Bio | `Dr. jur. · Rechtsanwalt`<br>`Stiftungsrecht & Nachfolge`<br>`🇩🇪 Familienstiftungen · Gemeinnützigkeit`<br>`🇱🇮 Liechtensteinische Familienstiftungen`<br>`Steuerrecht · Unternehmensnachfolge` |
| Profilbild | das eigene Zeichen (kein Foto, kein Name) |
| Link | erst später; solange leer, verweisen die Beiträge nirgendwohin |

Kein Name, kein Kanzleiname, keine Adresse – die Marke ist die Qualifikation. Das
Impressum gehört in den Link, sobald einer gesetzt ist.

## 2. Meta-App und Zugangstoken

1. [developers.facebook.com](https://developers.facebook.com) → App erstellen, Typ
   **Business**, Produkt **Instagram** hinzufügen („Instagram API mit Instagram-Login“).
2. Unter *Instagram → API-Setup mit Instagram-Login* das Konto verbinden und einen
   Zugangstoken erzeugen. Benötigte Berechtigungen:
   `instagram_business_basic`, `instagram_business_content_publish`,
   `instagram_business_manage_comments`, `instagram_business_manage_insights`.
3. Token in einen **langlebigen Token** (60 Tage) tauschen – der Bot verlängert ihn ab
   dann selbst und legt ihn verschlüsselt im Asset-Zweig ab (`IG_TOKEN_KEY`).
4. Die **Instagram-Konto-ID** (numerisch) steht auf derselben Seite.

Solange die App im Entwicklungsmodus ist, funktioniert alles für das verbundene Konto;
ein App-Review ist für den eigenen Kanal nicht nötig.

## 3. Secrets im Repository

GitHub → *Settings → Secrets and variables → Actions → Secrets*:

| Secret | Wofür |
| --- | --- |
| `ANTHROPIC_API_KEY` | Claude: Texte, Hook-Bewertung, Faktencheck I, Web-Gegencheck |
| `OPENAI_API_KEY` | OpenAI: Faktencheck II (zweiter, unabhängiger Prüfer) – **Pflicht**, ohne ihn erscheint kein Beitrag |
| `IG_ACCESS_TOKEN` | der langlebige Instagram-Token |
| `IG_ACCOUNT_ID` | die Instagram-Konto-ID |
| `IG_TOKEN_KEY` | ein frei gewähltes langes Passwort; verschlüsselt den gespeicherten Token |

Optional: `SMTP_USER`/`SMTP_PASS` für den Wochenbericht, `THREADS_ACCESS_TOKEN`,
`FB_PAGE_TOKEN`, `LI_ACCESS_TOKEN` zum Weiterverteilen.

## 4. Variablen (optional)

*Settings → Secrets and variables → Actions → Variables*:

| Variable | Standard | Bedeutung |
| --- | --- | --- |
| `IG_STIL` | `dossier` | `kontor` (Papier, Bordeaux) oder `dossier` (Nachtblau, Gold) |
| `IG_HANDLE` | leer | `@…` in der Fußzeile der Kacheln |
| `IG_TROCKEN_TAGE` | `3` | Trockenlauftage ab dem ersten Lauf |
| `IG_TAGESBUDGET_USD` | `0.38` | Tagesdeckel für Claude und OpenAI zusammen (≈ 0,35 €) |
| `OPENAI_MODEL` | `gpt-5-mini` | Modell des zweiten Prüfers; `OPENAI_PREIS_EIN`/`_AUS` (USD je Mio. Tokens) für die Kostenrechnung |
| `IG_PAUSE` | leer | `true` hält den Zeitplan an (nichts wird veröffentlicht) |
| `IG_HOOK_MINDESTPUNKTE` | `40` | Mindestpunkte eines Hooks (von 50) |
| `IG_STORIES_PRO_TAG` | `3` | Stories je Tag; eine vierte (Aktuelles) an etwa zwei Tagen der Woche |
| `IG_REELS` | `false` | Reels – vorerst aus, Carousels an Reel-Tagen |
| `BERICHT_EMAIL`, `SMTP_HOST`, `SMTP_PORT`, `SMTP_FROM` | leer | Wochenbericht per E-Mail (montags) |

## 5. Erster Lauf und Trockenlauf

1. *Actions → Instagram-Bot → Run workflow → Modus `startklar`* – prüft Token, Schlüssel,
   OpenAI-Modell, Themenpool. Muss „Alles bereit“ melden.
2. Der Zeitplan läuft stündlich (07:35–22:35 Sommerzeit). Der **erste Lauf startet die
   Trockenlaufphase**: drei Tage lang wird alles erzeugt – Plan, Texte, Hooks, beide
   Faktenchecks, Kacheln – und im Zweig `instagram-assets` unter `bilder/<datum>/`
   abgelegt, aber nichts veröffentlicht. Danach schaltet der Bot von selbst auf live.
3. Während des Trockenlaufs die Kacheln im Asset-Zweig ansehen; Stilwechsel über
   `IG_STIL`, ein gespeicherter Tag lässt sich mit Modus `nachrendern` ohne KI-Kosten
   neu bauen.
4. Wer den Livegang verschieben will: `IG_PAUSE=true`. Wer ihn vorziehen will: im
   Asset-Zweig `state/trockenlauf.json` löschen und `IG_TROCKEN_TAGE=0` setzen.

## 6. Was täglich passiert

- 1 Carousel (5–9 Folien, Standard 7): Hook → Problem → drei Erklärungen/Beispiel →
  Einordnung → Take-away mit CTA. Mo/Mi/Fr/So Carousel; Di/Do/Sa wäre Reel-Tag, solange
  Reels aus sind, ebenfalls Carousel.
- 3 Stories (Hook · Zusatzwissen mit Schaubild · Hinweis auf den Beitrag), an etwa zwei
  Tagen der Woche eine vierte zu Rechtsprechung oder Gesetzgebung.
- Vor jedem Beitrag: Web-Gegencheck des Themas (überholte Themen werden gesperrt),
  fünf Hooks mit Bewertung (nur ≥ 40/50 erscheint), Eigenständigkeits- und Formprüfung,
  Faktencheck I (Claude) und Faktencheck II (OpenAI). Fällt der zweite Prüfer aus,
  wartet der Beitrag auf den nächsten Lauf.
- Kommentare werden abstrakt beantwortet, nie im Einzelfall. Insights nach 48 h und
  7 Tagen; die Gewichte für Themenblock, Hook-Typ, Folienzahl, CTA und Uhrzeit lernen
  daraus.
- Kosten: harter Tagesdeckel 0,38 $ für Claude und OpenAI zusammen; erreicht → alles
  Weitere wartet bis morgen.

## 7. Lokal

```
cd social
npm install
npm test                      # 16 Tests, keine API nötig
npm run vorschau              # Beispielkacheln in beiden Stilen → out/vorschau/
IG_AUTOR=beispiele npm run rendern   # Tageslauf ohne KI (Beispielinhalte)
```
