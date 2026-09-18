/* ==========================================================================
   Zwei Stilrichtungen – beide dieselbe Typografie, dasselbe Raster, nur die
   Farbwelt ist verschieden. Der aktive Stil steht in config.mjs (marke.stil)
   bzw. in der Umgebungsvariablen IG_STIL. Die Vorlagen (vorlagen.mjs) sind
   für beide gleich; ein Stil liefert nur CSS-Variablen.

   Schriften (alle OFL, in social/fonts):
     Instrument Serif   Hook, Take-away, große Zahlen – die Stimme des Kanals
     Archivo            Fließtext, Zwischenüberschriften
     IBM Plex Mono      Kategorie-Label, Zähler, Normen, Rechtsstand
     Cormorant Garamond das Zeichen (Monogramm)
   ========================================================================== */

export const STILE = {
  /* A · Kontor – warmes Papier, Tinte, Bordeaux als einziger Akzent.
     Wirkt wie ein Briefbogen einer alten Kanzlei, modern gesetzt. */
  kontor: {
    name: "Kontor",
    beschreibung: "Warmes Papier, tiefe Tinte, Bordeaux-Akzent – Briefbogen einer Kanzlei, modern gesetzt.",
    modus: "hell",
    farben: {
      grund: "#E8E0D1", flaeche: "#F1EBDF", flaeche2: "#DED4C2",
      text: "#1A1815", textWeich: "#6F6859", linie: "rgba(26,24,21,.22)", linieStark: "#1A1815",
      akzent: "#6E1F2E", akzentText: "#F6F1E7",
      ok: "#3E5C3A", warn: "#6E1F2E",
    },
  },

  /* B · Dossier – Nachtblau, Creme, ein Hauch Gold. Ruhig, dicht, hochwertig. */
  dossier: {
    name: "Dossier",
    beschreibung: "Nachtblau, Creme, Gold-Akzent – ruhig, dicht, hochwertig.",
    modus: "dunkel",
    farben: {
      grund: "#19222B", flaeche: "#222D38", flaeche2: "#2C3945",
      text: "#E7EBEE", textWeich: "#93A0AC", linie: "rgba(231,235,238,.16)", linieStark: "#E7EBEE",
      akzent: "#C4A052", akzentText: "#19222B",
      ok: "#8FB58A", warn: "#C4A052",
    },
  },
};

export function stil(name) {
  const s = STILE[name];
  if (!s) throw new Error(`Unbekannter Stil „${name}“. Möglich: ${Object.keys(STILE).join(", ")}`);
  return { id: name, ...s };
}

/** Das Zeichen: ein Paragraf im Ring, sehr klein – Logo, kein Schmuck. */
export function markeSvg(groesse = 40) {
  return `<svg class="marke" width="${groesse}" height="${groesse}" viewBox="0 0 40 40" aria-hidden="true"><circle cx="20" cy="20" r="18.5" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="20" y="21" text-anchor="middle" dominant-baseline="central" font-family="'Cormorant Garamond', serif" font-weight="600" font-size="24" fill="currentColor">§</text></svg>`;
}
