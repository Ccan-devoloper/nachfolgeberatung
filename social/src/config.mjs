/* ==========================================================================
   Zentrale Einstellungen des Instagram-Bots „Stiftungsrecht & Nachfolge“.
   Alles, was ein Mensch je anfassen müsste, steht hier oder in den Secrets
   (siehe SETUP.md). Umgebungsvariablen überschreiben die Werte in dieser Datei.
   ========================================================================== */

const env = (name, fallback) => (process.env[name] != null && process.env[name] !== "" ? process.env[name] : fallback);
const bool = (name, fallback) => env(name, String(fallback)) === "true";

export const CONFIG = {
  /* Marke -------------------------------------------------------------- */
  marke: {
    /* Faceless Fachmarke: kein Name, kein Gesicht, kein Arbeitgeber. Sichtbar
       sind Qualifikation und Spezialisierung (Strategiepapier, Abschnitt 1). */
    anzeigename: env("IG_ANZEIGENAME", "Stiftungsrecht & Nachfolge | RA · Dr. jur."),
    absender: env("IG_ABSENDER", "RA · Dr. jur."),          // Zeile unten auf jeder Kachel
    handle: env("IG_HANDLE", ""),                            // unten links, sobald bekannt
    website: env("IG_WEBSITE", ""),                          // nur in Captions, nur wenn gesetzt
    stil: env("IG_STIL", "dossier"),                         // kontor | dossier (stile.mjs)
    zeitzone: "Europe/Berlin",
  },

  /* Tagesplan ------------------------------------------------------------ */
  plan: {
    /* Genau ein Feed-Beitrag am Tag – Qualität vor Masse (Abschnitt 2). */
    beitraegeProTag: 1,
    /* Wochenrhythmus (0 = Sonntag): Mo/Mi/Fr/So Carousel, Di/Do/Sa Reel.
       Solange Reels abgeschaltet sind, wird der Reel-Tag zum Carousel. */
    formatJeWochentag: { 1: "carousel", 2: "reel", 3: "carousel", 4: "reel", 5: "carousel", 6: "reel", 0: "carousel" },
    /* Stories: drei am Tag (Hook, Zusatzwissen, Hinweis auf den Beitrag),
       gelegentlich eine vierte zu Rechtsprechung oder Gesetzgebung. */
    storiesProTag: Number(env("IG_STORIES_PRO_TAG", 3)),
    vierteStoryJeWoche: Number(env("IG_VIERTE_STORY", 2)),   // an so vielen Tagen der Woche eine vierte
    storyFenster: ["08:00", "20:30"],
    /* Wiederholungssperren (wissen/taxonomie.mjs kennt dieselben Werte):
       ein Thema mit demselben Blickwinkel frühestens nach 240 Tagen, dasselbe
       Thema überhaupt frühestens nach 12 Tagen. */
    sperreTage: Number(env("IG_SPERRE_TAGE", 240)),
    themaSperreTage: Number(env("IG_THEMA_SPERRE_TAGE", 12)),
    /* Quoten (Abschnitt 12 und 13) werden über ein rollendes Fenster gehalten. */
    quotenFensterTage: 28,
    /* Lernende Uhrzeiten (zeiten.mjs). */
    zeitLernen: bool("IG_ZEIT_LERNEN", true),
    zeitFenster: env("IG_ZEIT_FENSTER", "7-20"),
    zeitAbstandStunden: 4,
    zeitErkundung: Number(env("IG_ZEIT_ERKUNDUNG", "0.35")),
    zeitReifeTage: 2,
    zeitMindestMessungen: 8,
    zeitMindestWirkung: 1,
    beitragsZeiten: ["08:30"],                               // nur ohne Lernschleife
    /* Lernschleife: Themenblöcke, Hooks, CTAs, Uhrzeiten nach Insights anpassen. */
    lernen: bool("IG_LERNEN", true),
  },

  /* Carousel (Abschnitt 3 und 6) ------------------------------------------ */
  carousel: {
    folienStandard: 7,
    folienMin: 5,
    folienMax: 9,
    /* Harte Obergrenzen, die der Renderer bzw. die Prüfung durchsetzt. */
    hookWoerterMin: 6, hookWoerterMax: 14,
    zwischenueberschriftWoerterMax: 8,
    folienWoerterRichtwert: 45,
    folienWoerterMax: 60,
    punkteMax: 3,
    captionWoerterMin: 100, captionWoerterMax: 220,
  },

  /* Hook-Engine (Abschnitt 4) --------------------------------------------- */
  hooks: {
    anzahl: 5,                                               // so viele Hooks intern je Beitrag
    mindestPunkte: Number(env("IG_HOOK_MINDESTPUNKTE", 40)), // von 50
  },

  /* CTA-Rotation (Abschnitt 11): Beratungs-CTA nur bei 10–15 % der Beiträge. */
  cta: {
    conversionAnteil: 0.12,
    conversionFruehestensNachTagen: Number(env("IG_CTA_CONVERSION_AB_TAG", 45)),
  },

  /* Faktenprüfung (Abschnitt 14) ------------------------------------------- */
  faktencheck: {
    aktiv: bool("IG_FAKTENCHECK", true),
    /* Zweiter, unabhängiger Prüfer über die OpenAI-API. Streng: Fällt er aus
       (Netz, Schlüssel, Budget), erscheint der Beitrag nicht – der nächste
       Stundenlauf versucht es mit dem gespeicherten Entwurf erneut. */
    openaiAktiv: bool("IG_OPENAI_FAKTENCHECK", true),
    openaiStrikt: bool("IG_OPENAI_STRIKT", true),
    /* Web-Gegencheck vor dem Schreiben (FREIGABE.md): Hat sich zum Thema seit
       dem Stand der Vorlage etwas geändert? */
    gegencheckAktiv: bool("IG_GEGENCHECK", true),
    gegencheckSuchen: Number(env("IG_GEGENCHECK_SUCHEN", 2)),
    gegencheckReserveUsd: Number(env("IG_GEGENCHECK_RESERVE_USD", "0.05")),
  },

  /* Claude API ----------------------------------------------------------- */
  ki: {
    modell: env("IG_KI_MODELL", "claude-sonnet-5"),               // Beiträge, Stories, Recherche, Kommentare
    modellNeben: env("IG_KI_MODELL_NEBEN", env("IG_KI_MODELL", "claude-sonnet-5")),
    modellPruefung: env("IG_KI_MODELL_PRUEFUNG", "claude-haiku-4-5"),   // Faktencheck, Hook-Bewertung
    effort: env("IG_KI_EFFORT", "low"),
    maxVersuche: Number(env("IG_KI_VERSUCHE", "2")),
    /* Tagesdeckel 0,35 € ≈ 0,38 $. Erreicht: alle weiteren Aufrufe warten bis morgen. */
    tagesBudgetUsd: Number(env("IG_TAGESBUDGET_USD", "0.38")),
    rechercheSuchen: Number(env("IG_KI_RECHERCHE_SUCHEN", "3")),
  },

  /* OpenAI API (zweiter Faktencheck) ----------------------------------------
     Modellname und Preise sind einstellbar; die Preise fließen in den
     Tagesdeckel ein (USD je Million Tokens). */
  openai: {
    key: env("OPENAI_API_KEY", ""),
    modell: env("OPENAI_MODEL", "gpt-5-mini"),
    preisEin: Number(env("OPENAI_PREIS_EIN", "0.25")),
    preisAus: Number(env("OPENAI_PREIS_AUS", "2.00")),
    basis: env("OPENAI_BASE_URL", "https://api.openai.com/v1"),
  },

  /* Instagram Graph API -------------------------------------------------- */
  instagram: {
    host: env("IG_GRAPH_HOST", "instagram"),
    version: env("IG_GRAPH_VERSION", "v23.0"),
    kontoId: env("IG_ACCOUNT_ID", ""),
    token: env("IG_ACCESS_TOKEN", ""),
    tokenSchluessel: env("IG_TOKEN_KEY", ""),
    trockenlauf: bool("IG_DRY_RUN", false),                  // true: alles erzeugen, nichts veröffentlichen
    /* Trockenlaufphase zu Beginn: so viele Tage ab dem ersten Lauf werden
       Beiträge nur erzeugt und im Asset-Zweig abgelegt (state/trockenlauf.json). */
    trockenTage: Number(env("IG_TROCKEN_TAGE", 3)),
    sicherheitsabstandLimit: 10,
    auffuellPauseSekunden: 480,
  },

  /* Reels – zunächst aus; der Diagramm-Motion-Ansatz folgt (Abschnitt 7). */
  reel: {
    aktiv: bool("IG_REELS", false),
  },

  /* Interaktion: Kommentare beantworten – abstrakt, nie im Einzelfall. */
  interaktion: {
    aktiv: bool("IG_INTERAKTION", true),
    maxAntwortenJeLauf: Number(env("IG_MAX_ANTWORTEN", 10)),
    beitraegeZurueck: 12,
    maxAlterTage: 14,
  },

  /* Weiterverteilen – jeder Kanal ist aktiv, sobald seine Secrets da sind. */
  verteilen: {
    threads: { token: env("THREADS_ACCESS_TOKEN", ""), nutzerId: env("THREADS_USER_ID", "") },
    youtube: { clientId: env("YT_CLIENT_ID", ""), clientSecret: env("YT_CLIENT_SECRET", ""), refreshToken: env("YT_REFRESH_TOKEN", "") },
    facebook: { seitenId: env("FB_PAGE_ID", ""), token: env("FB_PAGE_TOKEN", "") },
    tiktok: { clientKey: env("TT_CLIENT_KEY", ""), clientSecret: env("TT_CLIENT_SECRET", ""), refreshToken: env("TT_REFRESH_TOKEN", "") },
    linkedin: { token: env("LI_ACCESS_TOKEN", ""), personUrn: env("LI_PERSON_URN", "") },
  },

  /* Wochenbericht per E-Mail (Montag, erster Lauf) ----------------------- */
  bericht: {
    an: env("BERICHT_EMAIL", ""),
    smtp: { host: env("SMTP_HOST", ""), port: Number(env("SMTP_PORT", 587)), user: env("SMTP_USER", ""), pass: env("SMTP_PASS", ""), von: env("SMTP_FROM", env("SMTP_USER", "")) },
    wochentag: 1,
  },

  /* Bild-Hosting ----------------------------------------------------------- */
  hosting: {
    zweig: env("IG_ASSET_BRANCH", "instagram-assets"),
    basisUrl: env("IG_ASSET_BASE_URL", ""),
    verzeichnis: env("IG_ASSET_DIR", "assets"),
  },

  /* Hashtags: kleiner fester Kern, dazu themenabhängige aus dem Autor. */
  hashtags: {
    kern: ["#familienstiftung", "#stiftungsrecht", "#unternehmensnachfolge", "#vermögensnachfolge", "#nachfolgeplanung"],
    entdecker: ["#stiftung", "#erbschaftsteuer", "#vermögensschutz", "#liechtenstein", "#familienunternehmen", "#erbrecht", "#gemeinnützigestiftung", "#nachfolge", "#unternehmerfamilie", "#assetprotection", "#steuerrecht", "#pflichtteil", "#testament", "#familienvermögen", "#stiftungsberatung"],
    maxJeBeitrag: 12,
  },
};

export default CONFIG;
