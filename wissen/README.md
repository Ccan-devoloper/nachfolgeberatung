# Wissensbasis

Hier liegt das materielle Recht, aus dem alle Beiträge entstehen. Das ist der Teil, der
den Kanal von jedem anderen unterscheidet — die Technik drumherum ist austauschbar,
dieser Bestand nicht.

```
wissen/
  taxonomie.mjs      Themenbereiche, die zweiachsige Gewichtung, Fristen
  schema.mjs         Aufbau eines Themas + Prüfung + welche Formate es trägt
  index.mjs          lädt alle Themen, prüft den Gesamtbestand
  themen/            ein Thema je Datei
  rohmaterial/       Ablage für unverarbeitetes Material
```

## Wie Material hierher kommt

**Du lieferst roh, ich strukturiere.** Du musst nichts in das Schema übersetzen — genau
dafür ist der Umweg über `rohmaterial/` da.

Brauchbar ist praktisch alles:

| Form | Anmerkung |
| --- | --- |
| Word, PDF, Text | ideal — Aufsätze, Vortragsmanuskripte, Mandantenrundschreiben, Merkblätter |
| Vortragsfolien | gut, weil schon auf Kernaussagen verdichtet |
| Checklisten, Prüfschemata | am wertvollsten — daraus wird direkt das Format „Schema" |
| Gesetzes- und Kommentarauszüge | brauchbar, aber nur als Beleg: Wortlaut wird nie übernommen |
| Diktate, Sprachnotizen | brauchbar |

**Was nicht hierher gehört:** Mandatsakten, Entwürfe für konkrete Mandanten, alles mit
echten Namen oder Zahlen aus laufenden Sachen. § 43a Abs. 2 BRAO — siehe
[`../BERUFSRECHT.md`](../BERUFSRECHT.md). Das Schema hat deshalb bewusst kein Feld für
Sachverhalte; Fälle in Beiträgen werden frei erfunden.

## Was aus dem Material wird

Aus einem Aufsatz werden typischerweise drei bis acht Themen. Jedes Thema ist ein
**Skelett**, kein fertiger Text: Titel, Normen, Prüfgedanken, Merksatz. Der Autor
formuliert daraus jeden Beitrag neu — schon damit derselbe Stoff in sechs Monaten
nicht denselben Beitrag ergibt.

`quellen` am Thema nennt die Fundstellen für die interne Pflege. **Der Autor sieht dieses
Feld nie**, damit kein Beitrag Skript-, Seiten- oder Vortragsbezüge ausplaudert.

## Ein Thema anlegen

Eine Datei je Thema unter `themen/`, Default-Export. Vollständige Beispiele:

- [`themen/erbersatzsteuer.mjs`](themen/erbersatzsteuer.mjs) — alle Blöcke ausgefüllt
- [`themen/liechtenstein-zurechnung.mjs`](themen/liechtenstein-zurechnung.mjs) — mit
  `antwortfreigabe: "keine"`, weil einzelfallnah

Pflichtfelder sind `id · titel · bereich · kurz · normen · kern · merksatz · gewicht ·
stand · antwortfreigabe`. Die optionalen Blöcke sind keine Kür: **jeder schaltet ein
Beitragsformat frei.** Ein Thema ohne sie trägt nur Frage, Norm und Merksatz.

| Block | Format, das er freischaltet |
| --- | --- |
| `mythos` | Mythos — der stärkste Reichweitenhebel des Kanals |
| `fehler` | Fehlerfalle |
| `schritte` | Prüfschema |
| `gegenueberstellung` | Vergleich (z. B. Deutschland ↔ Liechtenstein) |
| `zahlen` | Zahl des Tages (Stories) |

Deshalb gilt: Lieber dreissig Themen mit vollen Blöcken als hundert dünne.

## Gewichtung

Zwei Achsen, je 1–3, Produkt steuert die Häufigkeit (`taxonomie.mjs`):

- **`mandat`** — entscheidet dieses Thema über echte Mandate?
- **`reichweite`** — versteht ein Unternehmer die Frage in einem Satz?

Ein Thema mit 3×3 kommt neunmal so oft wie eines mit 1×1, aber **keines nie**: Die
reinen Fachthemen halten die Steuerberater und Vermögensverwalter im Publikum, und über
die kommen die grössten Mandate.

## Prüfen

```bash
npm run pruefe
```

Zeigt den Bestand nach Bereichen und Formaten und bricht ab bei Schemafehlern, doppelten
IDs und toten Verweisen. Warnt, wenn der Rechtsstand eines Themas älter als ein Jahr ist —
Stiftungs- und Aussensteuerrecht bewegen sich, und ein Beitrag mit falschem Stand ist
keine Kleinigkeit.
