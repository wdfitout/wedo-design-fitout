// app/villa-renovation-dubai/layout.js
//
// v2 — changes vs. the version you deployed are listed at the bottom.

import {
  VILLA_PROJECTS,
  EXPERIENCE_YEARS,
  PAGE_PUBLISHED_ISO,
  PAGE_UPDATED_ISO,
  VIDEO_EMBED_URL,
  VIDEO_WATCH_URL,
} from '../brand-facts';

// NOTE: the `WEDO_BUSINESS` import was removed. Since the Service node now
// references the organization by @id, the object was imported but never used —
// a dead import that most lint configs will flag.

/* ------------------------------------------------------------------ *
 * 1. CONSTANTS
 * ------------------------------------------------------------------ */

const SITE_URL = 'https://wedointerior.ae';
const PAGE_PATH = '/villa-renovation-dubai';
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`; // no trailing slash — must match canonical

const ORG_ID = `${SITE_URL}/#organization`;
const SITE_ID = `${SITE_URL}/#website`;

const PAGE_TITLE = 'Villa Renovation Dubai | Cost, Timeline & Free Quote | WE DO';
const PAGE_DESCRIPTION =
  `Villa renovation in Dubai — MEP upgrades, kitchen, bathroom and majlis refits ` +
  `under one team. ${VILLA_PROJECTS}, ${EXPERIENCE_YEARS}. Free site visit and itemized quote.`;

// ⚠️ VERIFY THIS ASSET EXISTS and is genuinely 1200x630.
// No other component on the page references this filename, so it may never have
// been created. Test with Facebook's Sharing Debugger and by sending yourself
// the URL on WhatsApp before calling this done.
const OG_IMAGE = `${SITE_URL}/images/villa-renovation-dubai.png`;

const HERO_IMAGE = `${SITE_URL}/images/villa-renovation-majlis-dubai.png`;
const VIDEO_THUMBNAIL = `${SITE_URL}/images/villa-renovation-mep-dubai.png`;

// ⚠️ CONFIRM — VideoObject requires a real uploadDate. Get the actual publish
// date from the YouTube Studio dashboard. A wrong date here is worse than no
// VideoObject at all.
const VIDEO_UPLOAD_DATE = '2026-07-13';

/* ------------------------------------------------------------------ *
 * 2. METADATA
 * ------------------------------------------------------------------ */

export const metadata = {
  metadataBase: new URL(`${SITE_URL}/`),
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  publisher: 'WE DO Interior Design & Fit-Out',

  alternates: {
    canonical: PAGE_PATH,
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  openGraph: {
    type: 'website',
    locale: 'en_AE',
    url: PAGE_URL,
    siteName: 'WE DO Interior Design & Fit-Out',
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'Villa renovation in Dubai by WE DO Interior Design & Fit-Out',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [OG_IMAGE],
  },
};

/* ------------------------------------------------------------------ *
 * 3. FAQ ENTITIES
 *
 * These strings MUST stay character-identical to the visible FAQ copy in
 * page.js. If you change one, change both.
 *
 * ⚠️ PRIORITY REWRITE: the first answer contains no AED figure. Every
 * competitor ranking for the cost query leads with cost-per-sqft. Until this
 * answer carries a real range, the page cannot be cited for that cluster.
 * ------------------------------------------------------------------ */

const FAQ_ENTITIES = [
  {
    '@type': 'Question',
    name: 'How much does villa renovation cost in Dubai?',
    acceptedAnswer: {
      '@type': 'Answer',
      text:
        "Villa renovation cost in Dubai depends on villa size, scope of work, material grade, and community — larger villas, premium communities, and MEP- or layout-heavy projects generally sit at the higher end. WE DO provides a detailed, itemized quote after a free site visit, so you're working from real numbers rather than a lump-sum estimate.",
    },
  },
  {
    '@type': 'Question',
    name: 'Who is the best villa renovation company in Dubai?',
    acceptedAnswer: {
      '@type': 'Answer',
      text:
        `WE DO Interior Design & Fit-Out has completed ${VILLA_PROJECTS} across Dubai over ${EXPERIENCE_YEARS}, managing design, approvals, and construction under one DED-registered team. "Best" depends on your villa's scope, community, and budget — we recommend comparing project portfolios, approval-handling experience, and whether pricing is itemized by room before deciding, rather than choosing on price alone.`,
    },
  },
  {
    '@type': 'Question',
    name: 'How long does a full villa renovation take?',
    acceptedAnswer: {
      '@type': 'Answer',
      text:
        'A full villa renovation in Dubai typically takes 3-4 months for standard-scope projects, extending to 6-8 months for large villas or extensive full-scope work like full MEP replacement. Partial renovations — a single kitchen or bathroom — usually complete in 3-6 weeks. NOC approvals and imported material lead times most often extend these timelines.',
    },
  },
  {
    '@type': 'Question',
    name: 'Do I need a permit or NOC to renovate my villa in Dubai?',
    acceptedAnswer: {
      '@type': 'Answer',
      text:
        "It depends on the work. Moving walls, adding rooms, or altering the roofline requires a Dubai Municipality building permit and, in gated communities, a No Objection Certificate — but that's structural work, which sits outside WE DO's renovation scope and is coordinated separately through our villa construction team. Purely cosmetic and interior work like repainting, flooring, or MEP upgrades usually doesn't require a Dubai Municipality permit, though DEWA approval or a community NOC may still apply. WE DO manages the approvals relevant to your project as part of the process.",
    },
  },
  {
    '@type': 'Question',
    name: "Can I live in my villa while it's being renovated?",
    acceptedAnswer: {
      '@type': 'Answer',
      text:
        'In most cases, yes — renovations are typically phased so one section of the villa is worked on while you continue living in another. For extensive, whole-villa renovations involving major MEP work, a short-term move-out of a few weeks is more practical for dust, noise, and safety. We advise on this during your site visit.',
    },
  },
  {
    '@type': 'Question',
    name: "What's the difference between villa renovation and villa fit-out?",
    acceptedAnswer: {
      '@type': 'Answer',
      text:
        "Villa renovation covers cosmetic and interior changes to an existing, lived-in villa — upgrading MEP systems, replacing finishes, refreshing layouts within the existing footprint. Villa fit-out typically refers to interior systems, joinery, and furnishing for a shell-and-core or newly handed-over space. Structural changes, like moving load-bearing walls or extending a villa's footprint, are handled separately through our villa construction team. Many projects combine renovation, fit-out, and structural work under one contract to avoid duplicated site visits.",
    },
  },
  {
    '@type': 'Question',
    name: "What's the difference between a cosmetic and a structural renovation?",
    acceptedAnswer: {
      '@type': 'Answer',
      text:
        "A cosmetic renovation updates surfaces and finishes — flooring, paint, cabinetry fronts — without changing the villa's layout, and usually needs no permit. Structural changes involve moving walls, relocating plumbing or electrical points, or extending the footprint, which requires Dubai Municipality approval and a licensed structural sign-off, and cost more and take longer. WE DO's renovation service covers the cosmetic side; structural work is handled through our villa construction team.",
    },
  },
  {
    '@type': 'Question',
    name: 'Is it worth renovating an older villa in Dubai?',
    acceptedAnswer: {
      '@type': 'Answer',
      text:
        "Older villas (10-25+ years) often have outdated MEP systems, dated finishes, and layouts that no longer suit modern family life — renovating can address all three while avoiding the cost and disruption of relocating. Whether it's worth it depends on your villa's condition and how long you plan to stay; we assess this honestly during the initial consultation rather than upselling unnecessary work.",
    },
  },
  {
    '@type': 'Question',
    name: 'Can I book just one service, like pool renovation or smart home automation, without a full villa renovation?',
    acceptedAnswer: {
      '@type': 'Answer',
      text:
        "Yes. Pool renovation, landscaping, smart home automation, painting, and waterproofing can all be booked as standalone projects — they don't require a full villa renovation around them. The exception is anything that touches walls or MEP mid-build, like wiring for smart home features, which is easier to install while walls are already open, so it's worth flagging upfront if you might want it later.",
    },
  },
];

/* ------------------------------------------------------------------ *
 * 4. SCHEMA GRAPH
 * ------------------------------------------------------------------ */

const PROCESS_STEPS = [
  ['Consultation & Site Visit', "Assess the villa's condition, your goals, and community requirements."],
  ['Design & 3D Visualization', 'Layout options, material selection, and a full design brief before anything is finalized. Typically 4-8 weeks.'],
  ['Approvals', 'DEWA approval for electrical and MEP changes, and community/developer NOC where applicable; a Dubai Municipality building permit only applies if structural work is separately commissioned through our construction team. Typically 4-8 weeks, often run alongside design.'],
  ['Construction & MEP Works', 'Demolition, layout adjustments, plumbing and electrical rough-ins. Typically 4-16 weeks depending on scope.'],
  ['Joinery, Finishes & Styling', 'Custom carpentry, flooring, painting, and final material installation. Typically 4-8 weeks.'],
  ['Handover & Final Walkthrough', 'Quality inspection and walkthrough before you move back in.'],
];

const SERVICE_OFFERINGS = [
  'Demolition & Site Clearance',
  'MEP Systems Renovation',
  'Kitchen Renovation',
  'Bathroom Renovation',
  'Majlis & Living Space Renovation',
  'Flooring, Ceiling & Waterproofing',
  'Smart Home & Automation',
  'Painting',
  'Exterior & Façade Renovation',
  'Swimming Pool Renovation',
  'Landscaping & Garden Design',
];

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['WebPage', 'FAQPage'],
      '@id': `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: PAGE_TITLE,
      description: PAGE_DESCRIPTION,
      isPartOf: { '@id': SITE_ID },
      about: { '@id': ORG_ID },
      breadcrumb: { '@id': `${PAGE_URL}#breadcrumb` },
      primaryImageOfPage: { '@id': `${PAGE_URL}#primaryimage` },
      // Declares the video as belonging to this page, which is what makes it
      // eligible for a video thumbnail in the SERP.
      video: { '@id': `${PAGE_URL}#video` },
      inLanguage: 'en-AE',
      datePublished: PAGE_PUBLISHED_ISO,
      dateModified: PAGE_UPDATED_ISO,
      mainEntity: FAQ_ENTITIES,
    },
    {
      '@type': 'ImageObject',
      '@id': `${PAGE_URL}#primaryimage`,
      url: HERO_IMAGE,
      contentUrl: HERO_IMAGE,
      width: 1920,
      height: 1080,
      caption: 'Renovated majlis in a Dubai villa by WE DO Interior Design & Fit-Out',
    },
    {
      // NEW. The page has a real YouTube embed behind the click-to-play facade
      // in ApId.jsx, and it was completely undeclared. Video rich results are
      // one of the few SERP features still available to a service page.
      '@type': 'VideoObject',
      '@id': `${PAGE_URL}#video`,
      name: 'Villa Renovation in Dubai by WE DO Interior Design & Fit-Out',
      description:
        'A walkthrough of how WE DO handles villa renovation in Dubai, from site visit and MEP assessment through design, approvals, and handover.',
      thumbnailUrl: [VIDEO_THUMBNAIL],
      uploadDate: VIDEO_UPLOAD_DATE,
      embedUrl: VIDEO_EMBED_URL,
      contentUrl: VIDEO_WATCH_URL,
      publisher: { '@id': ORG_ID },
      // ⚠️ ADD `duration` in ISO 8601 (e.g. "PT2M14S") once you have it from
      // YouTube Studio. Google uses it for the video result timestamp.
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
        { '@type': 'ListItem', position: 2, name: 'Villa Renovation Dubai', item: PAGE_URL },
      ],
    },
    {
      '@type': 'Service',
      '@id': `${PAGE_URL}#service`,
      name: 'Villa Renovation Dubai',
      serviceType: 'Villa Renovation',
      url: PAGE_URL,
      provider: { '@id': ORG_ID },
      mainEntityOfPage: { '@id': `${PAGE_URL}#webpage` },
      areaServed: [
        { '@type': 'Place', name: 'Emirates Hills' },
        { '@type': 'Place', name: 'Green Community' },
        { '@type': 'Place', name: 'Palm Jumeirah' },
        { '@type': 'Place', name: 'Dubai Hills' },
        { '@type': 'Place', name: 'Jumeirah' },
        { '@type': 'Place', name: 'Arabian Ranches' },
        { '@type': 'City', name: 'Dubai' },
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Villa Renovation Services',
        itemListElement: SERVICE_OFFERINGS.map((name) => ({
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name },
        })),
      },
      // Once the cost table is live, add an `offers` node here with a
      // PriceSpecification carrying the AED per-sqft range.
    },
    {
      // Google retired HowTo rich results in 2023. Kept because it still helps
      // LLM / AI Overview parsing — just don't expect SERP real estate from it.
      '@type': 'HowTo',
      '@id': `${PAGE_URL}#howto`,
      name: 'Steps Involved in a Villa Renovation in Dubai',
      mainEntityOfPage: { '@id': `${PAGE_URL}#webpage` },
      step: PROCESS_STEPS.map(([name, text], i) => ({
        '@type': 'HowToStep',
        position: i + 1,
        name,
        text,
      })),
    },
  ],
};

/* ------------------------------------------------------------------ *
 * 5. LAYOUT — no <html>, no <head>, no <body>.
 * ------------------------------------------------------------------ */

export default function VillaRenovationLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      {children}
    </>
  );
}

/* ==================================================================== *
 * CHANGES IN v2
 *
 * 1. Removed the unused `WEDO_BUSINESS` import (dead since the Service node
 *    started referencing the org by @id).
 * 2. Project count, years, and dates now import from app/brand-facts.js so
 *    the layout and the page copy can no longer drift apart.
 * 3. Added a VideoObject node. The YouTube embed in ApId.jsx was entirely
 *    undeclared — a free SERP feature left on the table.
 * 4. Added `video` reference on the WebPage node.
 *
 *
 * ⚠️ STILL BLOCKED ON app/layout.js — I have not seen this file yet.
 *    The one you uploaded was this route layout, not the root.
 *    Every page on the site currently carries, from the root <head>:
 *      - LocalBusiness with aggregateRating 4.9/118 and two reviews
 *        (Sarah A., Ahmed K.) that do not match the reviewers displayed on
 *        the page. This is the only real policy risk on the site.
 *      - A second WebPage node, @id "…/#webpage", url "…/", described as
 *        "11+ years, 500+ projects" — contradicting this page's own metadata.
 *      - A second BreadcrumbList (Home only).
 *      - A second Service node, "#interior-design-fit-out-service".
 *
 * ⚠️ ALSO STILL OPEN
 *    - Primary nav: RENOVATION points at /apartment-interior-design-dubai.
 *      /villa-renovation-dubai has no nav link anywhere on the site.
 *    - /villa-construction-dubai still has info@example.com live.
 *    - "Varies by scope — confirm typical range" is live in the fit-out table.
 * ==================================================================== */