// app/brand-facts.js
//
// NEW FILE. Single source of truth for the claims that currently contradict
// each other across the site.
//
// Right now wedointerior.ae publishes FOUR different project counts:
//   "200+ projects"  — homepage OG description
//   "250+ projects"  — the figure confirmed by the client
//   "400+ villas"    — /villa-renovation-dubai
//   "500+ projects"  — root layout WebPage schema + /retail-interior-design-downtown-dubai
//
// A single URL currently serves two of them about 2KB apart. Search engines and
// LLMs both penalise internal contradictions, and it is a plain E-E-A-T problem.
//
// Fix the values HERE once, and every page that imports this file stays in sync.
// Then grep the codebase for the literal strings "200+", "250+", "400+", "500+"
// and replace the remaining hardcoded ones with these imports.

/* ------------------------------------------------------------------ *
 * ⚠️ DECISION REQUIRED — confirm with the client before deploy
 * ------------------------------------------------------------------ */

// Villa-specific count, used on /villa-renovation-dubai only.
// NOTE: this currently exceeds the company-wide confirmed total of 250+,
// which cannot both be true. One of the two has to change.
export const VILLA_PROJECTS = '100+ villa renovations';

// Company-wide count. Use this on the homepage and non-villa pages.
export const TOTAL_PROJECTS = '250+ projects';

// ⚠️ The company was founded in 2015. "11+ years in the Dubai market" reads as
// company age and does not survive a trade-licence check. If the 15 years is
// founder or team experience, use EXPERIENCE_TEAM instead and say so in copy.
export const EXPERIENCE_YEARS = '11+ years';
export const EXPERIENCE_TEAM = '11+ years of team experience';
export const EXPERIENCE_BADGE = '11 Years of Experience';

/* ------------------------------------------------------------------ *
 * Page freshness — replaces the bare "July 13, 2026" that was floating
 * above the intro with no label. A labelled, machine-readable updated
 * date is a genuine AEO signal; an unlabelled date is just confusing.
 * ------------------------------------------------------------------ */

export const PAGE_PUBLISHED_ISO = '2026-07-13';
export const PAGE_UPDATED_ISO = '2026-09-15';
export const PAGE_UPDATED_LABEL = '15 September 2026';

/* ------------------------------------------------------------------ *
 * Contact + video constants, so they stop being retyped per component
 * ------------------------------------------------------------------ */

export const PHONE_E164 = '+971588075603';
export const PHONE_DISPLAY = '+971588075603';
export const WHATSAPP_URL = 'https://wa.me/971588075603';
export const EMAIL = 'info@wedointerior.ae';

export const VIDEO_ID = 'yNeCQLpYvww';
// youtube-nocookie defers YouTube's tracking cookies until the user actually
// plays. Combined with the click-to-load facade you already have, no YouTube
// request fires on page load at all.
export const VIDEO_EMBED_URL = `https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1`;
export const VIDEO_WATCH_URL = `https://www.youtube.com/watch?v=${VIDEO_ID}`;