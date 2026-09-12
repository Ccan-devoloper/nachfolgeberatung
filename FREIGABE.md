# Veröffentlichungsschranke

Der Kanal läuft **vollautomatisch**. Es gibt keine manuelle Freigabe und keine
Warteschlange, in der ein Mensch etwas durchwinkt. Damit ist diese Schranke die
einzige Kontrolle, die zwischen einem Entwurf und der Öffentlichkeit steht.

Sie ist entsprechend gebaut.

---

## Grundsatz

**Ein Entwurf, der eine Prüfung nicht besteht, wird nicht veröffentlicht.** Der Slot
bleibt leer. Es gibt keinen Pfad, auf dem ein beanstandeter Beitrag doch erscheint —
kein „im Zweifel posten", kein Übersteuern durch eine Umgebungsvariable, keine
Ausnahme, wenn der Tagesplan sonst dünn aussieht.

Ein leerer Slot kostet Reichweite für einen Tag. Ein falscher Beitrag kostet mehr.

---

## Die sechs Prüfungen

In dieser Reihenfolge — billig vor teuer, damit ein Entwurf, der an einem
Sperrlistenwort scheitert, keinen API-Aufruf verbraucht.

| # | Prüfung | Wogegen | Kosten |
| --- | --- | --- | --- |
| 1 | **Rechtsstand** | `stand` des Themas älter als `STAND_MAX_TAGE` → Thema gesperrt, gar kein Entwurf | 0 |
| 2 | **Sperrlisten** | Erfolgsversprechen, Superlative, Dringlichkeitsdruck, Mitbewerbernamen, Handles, „Link in Bio" | 0 |
| 3 | **Zahlenbindung** | Jede Zahl im Entwurf muss aus `zahlen`, `normen` oder dem Gesetz stammen — keine erfundenen Beträge | 0 |
| 4 | **Eigenständigkeit** | Wortlaut gegen `wissen/` (Shingle-Vergleich) — kein Abschreiben aus dem eigenen Material | 0 |
| 5 | **Faktencheck** | Zweiter, unabhängiger Aufruf gegen den Entwurf, `claude-haiku-4-5` | ~$0,01 |
| 6 | **Web-Gegencheck** | Normen und Kernaussagen gegen den aktuellen Rechtsstand im Netz | ~$0,03 |

Prüfung 1 bis 4 laufen lokal und kosten nichts. Erst was dort durchkommt, geht in die
beiden bezahlten Prüfungen.

---

## Der Web-Gegencheck

Das ist die Prüfung, auf der die Entscheidung für den Automatikbetrieb ruht. Sie muss
eng und belastbar sein, nicht breit und teuer.

**Geprüft wird nicht der ganze Text**, sondern die drei Dinge, die falsch sein können,
ohne dass man es dem Entwurf ansieht:

1. **Die zitierten Normen** — gibt es sie noch in dieser Fassung, hat sich die
   Absatznummer verschoben, ist die Vorschrift aufgehoben oder neu gefasst?
2. **Die tragenden Aussagen** — hat ein BFH-Urteil, ein BMF-Schreiben oder eine
   Gesetzesänderung seit dem `stand` des Themas etwas daran gekippt?
3. **Die Zahlen** — Freibeträge, Fristen, Steuersätze, Schwellenwerte.

**Technisch:** Web-Suche als Server-Tool im selben Aufruf, mit `max_uses: 2` und
`allowed_domains` auf verlässliche Quellen begrenzt (Gesetzestexte, BFH, BMF,
Bundesanzeiger). Zwei Einstellungen senken die Kosten erheblich und sollten beim Port
gesetzt werden:

- **Dynamisches Filtern** (`web_search_20260209` oder neuer): Claude filtert die
  Treffer per Code, bevor sie ins Kontextfenster laufen. Ohne das landen ganze Seiten
  als Input-Token in der Rechnung.
- **`response_inclusion: "excluded"`** (`web_search_20260318` oder neuer): Die rohen
  Suchblöcke fallen aus der Antwort heraus. Der Gegencheck braucht ein Urteil, keine
  Materialsammlung.

**Ergebnis ist dreiwertig:**

- **bestätigt** → Beitrag wird veröffentlicht.
- **unklar** (keine belastbare Quelle gefunden, widersprüchliche Treffer) → Beitrag
  wird **nicht** veröffentlicht, Thema bleibt unangetastet, nächster Lauf versucht ein
  anderes Thema.
- **widerlegt** (die Rechtslage hat sich geändert) → Beitrag wird nicht veröffentlicht,
  **und das Thema wird gesperrt**: `stand` wird zurückgesetzt, das Thema kommt erst
  wieder in den Pool, wenn der Kanzleiinhaber es durchgesehen hat. Der Wochenbericht
  nennt es namentlich mit der gefundenen Fundstelle.

Der dritte Fall ist der wichtige: Der Bot repariert das Thema nicht selbst. Er merkt,
dass er es nicht mehr weiß, und schweigt darüber — dauerhaft, bis ein Mensch
nachgesehen hat.

---

## Budget

Tagesdeckel **0,27 $ (≈ 0,25 €)** für alles zusammen. Die Rechnung mit den aktuellen
Preisen — `claude-sonnet-5` 2 $ / 10 $ je Million Token rein/raus, `claude-haiku-4-5`
1 $ / 5 $, Websuche 10 $ je 1.000 Suchen plus Ergebnis-Token:

| Posten | je Tag | Kosten |
| --- | --- | --- |
| Beitrag und Reel schreiben, Sonnet 5, inkl. einer Nachbesserung | 2 | ~0,12 $ |
| Stories schreiben, ein Aufruf für alle vier | 1 | ~0,03 $ |
| Faktencheck, Haiku 4.5 | 2–4 | ~0,02 $ |
| **Web-Gegencheck**, 2 Suchen je Beitrag plus gefilterte Ergebnis-Token | 2 | ~0,06 $ |
| Kommentarantworten, Sonnet 5 | 1–3 | ~0,02 $ |
| **Summe** | | **~0,25 $** |

Das passt, aber ohne Luft. Deshalb eine Regel, die aus dem Reel-Vorrang des
Steuerberater-Bots übernommen wird und hier sicherheitsrelevant ist:

> **`IG_GEGENCHECK_RESERVE_USD` — die Kosten des Gegenchecks werden zurückgelegt,
> bevor ein Beitrag geschrieben wird.**

Ohne diese Reserve entstünde ein Loch: Der Bot schreibt zwei Beiträge, das Budget ist
aufgebraucht, der Gegencheck fällt aus — und der Deckel, der Geld sparen soll, hätte
die Kontrolle abgeschaltet. Mit der Reserve gilt: **Wer nicht geprüft werden kann, wird
nicht geschrieben.** Lieber ein Beitrag am Tag als zwei ungeprüfte.

Reicht das Budget nur für einen geprüften Beitrag, entfällt der zweite.

---

## Port-Hinweise

Beim Übernehmen aus `steuerberater/social` zu beachten:

- **Modell-IDs ohne Datumssuffix.** Dort steht `claude-haiku-4-5-20251001`; richtig ist
  `claude-haiku-4-5`. Die IDs sind vollständig, wie sie sind.
- **`IG_NACHRICHTEN` bleibt aus** (§ 43b BRAO, keine Werbung um das Einzelmandat).
- **`IG_STORIES_PRO_TAG` auf 4**, nicht 9 — sonst ist der Themenbestand in gut zwei
  Wochen durch (`wissen/taxonomie.mjs`).
- **Die Wiederholungssperre greift auf Thema *und* Format**, nicht nur auf das Thema.
  Der Steuerberater-Planer fällt auf den ungefilterten Pool zurück, wenn kein Kandidat
  frei ist — bei 41 Themen würde die Sperre damit still ausgehebelt.

---

## Sichtbarkeit statt Freigabe

Ohne Warteschlange braucht es einen Spiegel. Der **Wochenbericht** (Montag, erster
Lauf, per E-Mail) ist kein Kontrollinstrument vor der Veröffentlichung, sondern die
Rückschau danach — und die Stelle, an der die Schranke Rechenschaft ablegt:

- was veröffentlicht wurde, mit Thema und Format
- **welche Entwürfe an welcher Prüfung gescheitert sind** — das ist die wichtigste
  Zeile des Berichts
- welche Themen der Web-Gegencheck gesperrt hat, mit Fundstelle
- welche Themen einen Rechtsstand nahe der Altersgrenze haben
- Reichweite, Interaktion, Tagesverbrauch
