/** Desktop scatter slots — px offset from stage center (phone center) */
export type ShowcaseScatterSlot = {
  x: number;
  y: number;
  rotate: number;
  floatDelay: number;
  floatDuration: number;
};

const RX = 400;
const RY = 300;

/** Even ring around phone + tiny fixed jitter so it feels organic, not grid-like */
const JITTER: Record<string, { jx: number; jy: number; rotate: number }> = {
  community: { jx: -12, jy: 8, rotate: -2 },
  notices: { jx: 10, jy: 6, rotate: 1.5 },
  visitors: { jx: -8, jy: -6, rotate: -1 },
  complaints: { jx: 6, jy: 10, rotate: 2 },
  billing: { jx: 12, jy: -8, rotate: -1.5 },
  marketplace: { jx: -10, jy: 8, rotate: 2 },
  emergency: { jx: 8, jy: -10, rotate: -2 },
  amenities: { jx: -6, jy: 6, rotate: 1 },
};

/** Slug order maps to 8 evenly spaced angles (top → clockwise) */
const SLUG_RING_ORDER = [
  "community",
  "notices",
  "billing",
  "marketplace",
  "complaints",
  "amenities",
  "visitors",
  "emergency",
] as const;

function slotAtIndex(index: number): ShowcaseScatterSlot {
  const angle = -Math.PI / 2 + (index * 2 * Math.PI) / 8;
  const slug = SLUG_RING_ORDER[index];
  const jitter = JITTER[slug];
  return {
    x: Math.round(RX * Math.cos(angle) + jitter.jx),
    y: Math.round(RY * Math.sin(angle) + jitter.jy),
    rotate: jitter.rotate,
    floatDelay: index * 0.4,
    floatDuration: 4.2 + (index % 4) * 0.6,
  };
}

export const showcaseScatterBySlug: Record<string, ShowcaseScatterSlot> =
  Object.fromEntries(
    SLUG_RING_ORDER.map((slug, index) => [slug, slotAtIndex(index)])
  );
