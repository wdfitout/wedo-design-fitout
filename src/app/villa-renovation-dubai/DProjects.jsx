// app/villa-renovation-dubai/DProjects.jsx

'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  VILLA_PROJECTS,
  EXPERIENCE_YEARS,
  PHONE_DISPLAY,
  PHONE_E164,
  WHATSAPP_URL,
  EMAIL,
} from '../brand-facts';

/*
  ROOT CAUSE OF THE HREFLESS LINKS
  --------------------------------
  `textImage` was destructured as { src, title } but rendered with
  href={textImage.link}. There is no `link` key on the object, so React
  received href={undefined} and emitted <a class="block"> with no href.

  Same bug in the gallery: .map(({ src, link, title })) destructures a `link`
  that none of the six objects define.

  That is seven anchors on this page that look clickable (they have hover
  overlays and cursor styling) and do nothing. It's the kind of thing that
  reads as a broken page to a user and as a dead end to a crawler.

  Since there are no destination pages for these images, I've converted them to
  <figure>/<figcaption> rather than inventing URLs. If project detail pages do
  exist, add a `href` key to each object and wrap the figure in <Link> — the
  structure below is ready for it.
*/

const featureImage = {
  src: '/images/villa-renovation-demolition-dubai.png',
  alt: 'Demolition and strip-out at the start of a Dubai villa renovation',
  caption: 'Strip-out and site clearance before the new layout goes in',
};

/*
  FIXED: `title` was doing double duty as both the alt text and the visible
  overlay label, and every value was in ALL CAPS — "VILLA RENOVATION DUBAI
  BEFORE AFTER". All-caps alt text is read letter-by-letter by some screen
  readers and reads as keyword stuffing. Split into a descriptive `alt` and a
  human `caption`.
*/
const galleryImages = [
  {
    src: '/images/villa-renovation-dubai-before-after.png',
    alt: 'Before and after comparison of a villa renovation in Dubai',
    caption: 'Before and after',
  },
  {
    src: '/images/villa-renovation-extension-dubai.png',
    alt: 'Villa extension work in Dubai adding built-up area to an existing home',
    caption: 'Extensions',
  },
  {
    src: '/images/villa-renovation-exterior-dubai.png',
    alt: 'Renovated villa exterior and facade in Dubai with new cladding',
    caption: 'Exterior and facade',
  },
  {
    src: '/images/villa-renovation-flooring-dubai.png',
    alt: 'New stone flooring installed during a Dubai villa renovation',
    caption: 'Flooring',
  },
  {
    src: '/images/villa-renovation-kitchen-dubai.png',
    alt: 'Renovated villa kitchen in Dubai with custom joinery and stone countertops',
    caption: 'Kitchens',
  },
  {
    src: '/images/villa-renovation-pool-dubai.png',
    alt: 'Swimming pool resurfacing and retiling at a Dubai villa',
    caption: 'Swimming pools',
  },
];

/*
  ⚠️ SCHEMA MISMATCH — STILL UNRESOLVED
  The two testimonials below (Reem Al Muhairi, Dana Al Kaabi) do not match the
  two reviews in the LocalBusiness schema injected by app/layout.js (Sarah A.,
  Ahmed K.). Marked-up reviews must be visible on the page. Until the root
  layout is fixed, this page carries four different reviewers — two visible,
  two in structured data — which is a structured data policy violation.

  Also confirm these are real, attributable testimonials. If they came from
  Google, link them to the GBP profile; unsourced quotes carry almost no
  E-E-A-T weight and carry real risk if they were written in-house.
*/
const testimonials = [
  {
    quote:
      "WE DO completely transformed our villa into a modern, elegant home while preserving the character we loved. From the renovation planning to the final finishes, every detail was handled professionally. The team kept us informed throughout the project, completed the work on schedule, and delivered exceptional quality. We couldn't be happier with the results.",
    author: 'Reem Al Muhairi',
    location: 'Arabian Ranches',
  },
  {
    quote:
      'Renovating our villa felt like a huge decision, but WE DO made the entire process smooth and stress-free. Their designers understood exactly what we wanted, and the craftsmanship exceeded our expectations. The finished home is brighter, more functional, and beautifully finished. We highly recommend them to anyone planning a villa renovation in Dubai.',
    author: 'Dana Al Kaabi',
    location: 'Palm Jumeirah',
  },
];

/*
  FIXED: the FAQ copy on this page did NOT match the FAQ text in the schema.
  Five of the nine answers differed — comma splices on the page where the
  schema had em dashes, "Partial renovations of a single kitchen" vs "Partial
  renovations — a single kitchen or bathroom —", and so on.

  Google requires the marked-up answer to match the visible answer. Moving the
  FAQ into a single array means the page renders exactly what layout.js
  declares. If you change one, change both — or better, import FAQ_ENTITIES
  here so there is literally one copy.
*/
const faqs = [
  {
    q: 'How much does villa renovation cost in Dubai?',
    // ⚠️ PRIORITY REWRITE: no AED figure. Every competitor ranking for this
    // query leads with cost-per-sqft. This answer cannot win the cost cluster.
    a: "Villa renovation cost in Dubai depends on villa size, scope of work, material grade, and community — larger villas, premium communities, and MEP- or layout-heavy projects generally sit at the higher end. WE DO provides a detailed, itemized quote after a free site visit, so you're working from real numbers rather than a lump-sum estimate.",
  },
  {
    q: 'Who is the best villa renovation company in Dubai?',
    a: `WE DO Interior Design & Fit-Out has completed ${VILLA_PROJECTS} across Dubai over ${EXPERIENCE_YEARS}, managing design, approvals, and construction under one DED-registered team. "Best" depends on your villa's scope, community, and budget — we recommend comparing project portfolios, approval-handling experience, and whether pricing is itemized by room before deciding, rather than choosing on price alone.`,
  },
  {
    q: 'How long does a full villa renovation take?',
    a: 'A full villa renovation in Dubai typically takes 3-4 months for standard-scope projects, extending to 6-8 months for large villas or extensive full-scope work like full MEP replacement. Partial renovations — a single kitchen or bathroom — usually complete in 3-6 weeks. NOC approvals and imported material lead times most often extend these timelines.',
  },
  {
    q: 'Do I need a permit or NOC to renovate my villa in Dubai?',
    a: "It depends on the work. Moving walls, adding rooms, or altering the roofline requires a Dubai Municipality building permit and, in gated communities, a No Objection Certificate — but that's structural work, which sits outside WE DO's renovation scope and is coordinated separately through our villa construction team. Purely cosmetic and interior work like repainting, flooring, or MEP upgrades usually doesn't require a Dubai Municipality permit, though DEWA approval or a community NOC may still apply. WE DO manages the approvals relevant to your project as part of the process.",
  },
  {
    q: "Can I live in my villa while it's being renovated?",
    a: 'In most cases, yes — renovations are typically phased so one section of the villa is worked on while you continue living in another. For extensive, whole-villa renovations involving major MEP work, a short-term move-out of a few weeks is more practical for dust, noise, and safety. We advise on this during your site visit.',
  },
  {
    q: "What's the difference between villa renovation and villa fit-out?",
    a: "Villa renovation covers cosmetic and interior changes to an existing, lived-in villa — upgrading MEP systems, replacing finishes, refreshing layouts within the existing footprint. Villa fit-out typically refers to interior systems, joinery, and furnishing for a shell-and-core or newly handed-over space. Structural changes, like moving load-bearing walls or extending a villa's footprint, are handled separately through our villa construction team. Many projects combine renovation, fit-out, and structural work under one contract to avoid duplicated site visits.",
  },
  {
    q: "What's the difference between a cosmetic and a structural renovation?",
    a: "A cosmetic renovation updates surfaces and finishes — flooring, paint, cabinetry fronts — without changing the villa's layout, and usually needs no permit. Structural changes involve moving walls, relocating plumbing or electrical points, or extending the footprint, which requires Dubai Municipality approval and a licensed structural sign-off, and cost more and take longer. WE DO's renovation service covers the cosmetic side; structural work is handled through our villa construction team.",
  },
  {
    q: 'Is it worth renovating an older villa in Dubai?',
    a: "Older villas (10-25+ years) often have outdated MEP systems, dated finishes, and layouts that no longer suit modern family life — renovating can address all three while avoiding the cost and disruption of relocating. Whether it's worth it depends on your villa's condition and how long you plan to stay; we assess this honestly during the initial consultation rather than upselling unnecessary work.",
  },
  {
    q: 'Can I book just one service, like pool renovation or smart home automation, without a full villa renovation?',
    a: "Yes. Pool renovation, landscaping, smart home automation, painting, and waterproofing can all be booked as standalone projects — they don't require a full villa renovation around them. The exception is anything that touches walls or MEP mid-build, like wiring for smart home features, which is easier to install while walls are already open, so it's worth flagging upfront if you might want it later.",
  },
];

const services = [
  {
    // FIXED: "ahead of construction stripping out old finishes" was missing
    // punctuation and read as one run-on clause.
    title: 'Demolition & Site Clearance',
    body: 'Demolition, non-structural partition removal, and site clearance ahead of construction — stripping out old finishes, fixtures, and layouts to prepare for the new design. This typically runs alongside the early weeks of the Construction & MEP phase rather than as its own separate timeline. Structural changes, like moving load-bearing walls, sit outside our renovation scope and are handled through our villa construction team instead.',
  },
  {
    // FIXED: "HVAC/AC upgrades the MEP work most responsible" — missing dash.
    title: 'MEP Systems Renovation',
    body: 'Electrical rewiring, plumbing repiping, and HVAC/AC upgrades — the MEP work most responsible for triggering a renovation decision in the first place, since villas built between the early 2000s and 2015 are now at or past the point where these need replacing regardless of finish preference. These MEP upgrades happen early in the build, before walls are closed up and finishes go in.',
  },
  {
    title: 'Kitchen Renovation',
    body: 'Cabinetry, countertops, appliances, and layout changes, including reconfiguring the kitchen footprint within the existing floor plan. Material choice drives most of the cost difference: locally sourced quartz and standard cabinetry sit at the affordable end, while imported stone countertops and fully custom joinery push a kitchen renovation toward the premium end of the range.',
  },
  {
    title: 'Bathroom Renovation',
    body: 'Waterproofing, tiling, fixtures, and layout upgrades, handled with the plumbing and MEP coordination that bathroom work always needs. We recommend budgeting separately for waterproofing and ducting, since these are essential but easy to underestimate in an initial budget.',
  },
  {
    title: 'Majlis & Living Space Renovation',
    body: 'Majlis renovation is one of the most requested rooms in Dubai villa projects. We work with traditional and contemporary layouts, built-in seating, mashrabiya-inspired screening, and lighting design specific to how the space is used, whether for daily family life or formal hosting.',
  },
  {
    title: 'Flooring, Ceiling & Waterproofing',
    body: 'Hardwood, tile, and stone flooring replacement, roof and terrace waterproofing beneath new tiling, plus gypsum ceiling and lighting integration commonly paired with a full room refresh. Porcelain tile is the most common mid-range choice; natural stone and engineered hardwood sit at the premium end and typically add to both material cost and installation time.',
  },
  {
    // FIXED: "integrated during the renovation wiring and infrastructure are far
    // easier to install" — two sentences collided into one ungrammatical clause.
    title: 'Smart Home & Automation',
    body: 'Smart home automation for lighting, climate, and security, integrated during the renovation. Wiring and infrastructure are far easier to install while walls are open than to retrofit afterward, so this is typically scoped alongside MEP and electrical work rather than added at the end. Common additions include app-controlled lighting scenes, climate zoning, and video entry or security systems.',
  },
  {
    // FIXED: heading was "Painting services" — the only sentence-case heading
    // among eleven title-case siblings. Body had "painting ,refreshing".
    title: 'Painting',
    body: "Whole-villa exterior and interior painting, refreshing walls, ceilings, and trim with coatings suited to Dubai's heat, dust, and sun exposure. Usually scheduled alongside exterior façade work, since both need scaffolding and similar site access.",
  },
  {
    title: 'Exterior & Façade Renovation',
    body: "Exterior finishes, façade cladding, and driveway or garden-adjacent hardscaping updates suited to Dubai's heat and dust exposure. Exterior work often runs alongside interior renovation phases rather than as a separate project, since scaffolding and site access overlap.",
  },
  {
    title: 'Swimming Pool Renovation',
    body: 'Resurfacing, retiling, and filtration or equipment upgrades for existing swimming pools — a common request across communities like Emirates Hills, Palm Jumeirah, and Dubai Hills, where a private pool is typically part of the villa. Pool renovation work usually runs as a parallel workstream alongside interior renovation rather than blocking it, since the pool sits outside the main structure.',
  },
];

const processSteps = [
  ['Consultation & Site Visit', "we assess the villa's condition, your goals, and community requirements", null],
  ['Design & 3D Visualization', 'layout options, material selection, and a full design brief before anything is finalized', 'typically 4-8 weeks'],
  ['Approvals', 'DEWA approval for electrical and MEP changes, and community/developer NOC where applicable; a Dubai Municipality building permit only applies if structural work is separately commissioned through our construction team', 'typically 4-8 weeks, often run alongside design'],
  ['Construction & MEP Works', 'demolition, layout adjustments, plumbing and electrical rough-ins', 'typically 4-16 weeks depending on scope'],
  ['Joinery, Finishes & Styling', 'custom carpentry, flooring, painting, and final material installation', 'typically 4-8 weeks'],
  ['Handover & Final Walkthrough', 'quality inspection and walkthrough before you move back in', null],
];

/* ------------------------------------------------------------------ *
 * Shared CTA block — this markup was duplicated three times across
 * DProjects.jsx and DesignV.jsx with slightly different copy each time.
 * ------------------------------------------------------------------ */

const CtaBlock = ({ heading, children }) => (
  <div className="mb-12 space-y-4 bg-[#f5ede5] py-10 text-center">
    <h3 className="font-conthrax text-sm uppercase sm:text-xl">{heading}</h3>
    <div className="mx-auto max-w-2xl px-4 font-play text-sm sm:text-base">{children}</div>
    <div className="mt-4 flex flex-col justify-center gap-4 px-4 sm:flex-row">
      {/*
        ⚠️ CONVERSION TRACKING — still missing on every CTA on this page.
        gtag AW-11361089409 loads, but nothing fires on click. Add:
          onClick={() => window.gtag?.('event', 'conversion', {
            send_to: 'AW-11361089409/YOUR_LABEL'
          })}
        Without it, Smart Bidding and the offline conversion import have no
        signal to optimise against.
      */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full rounded bg-green-600 px-6 py-3 text-center font-play text-sm text-white sm:w-auto"
      >
        Ask about availability on WhatsApp
      </a>
      <a
        href={`mailto:${EMAIL}`}
        className="w-full rounded bg-[#a0624d] px-6 py-3 text-center font-play text-sm text-white sm:w-auto"
      >
        Ask about availability by email
      </a>
    </div>
  </div>
);

const DProjects = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const timeoutRef = useRef(null);

  // Wrapped in useCallback so the useEffect dependency array is honest and
  // eslint's exhaustive-deps rule stops warning.
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  }, []);

  useEffect(() => {
    // Respect prefers-reduced-motion: auto-advancing carousels are exactly the
    // kind of motion this setting exists to suppress.
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

    if (isPlaying && !prefersReduced) {
      timeoutRef.current = setTimeout(nextSlide, 4000);
    }
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [currentSlide, isPlaying, nextSlide]);

  return (
    <section className="bg-black-200 px-6 py-10">
      {/* Why Choose */}
      <div className="mx-auto mb-12 space-y-6 rounded bg-black p-6 shadow sm:p-10 lg:max-w-[70%]">
        <h2 className="text-center font-conthrax text-base tracking-widest text-[#caa193] sm:text-xl">
          Why Choose WE DO for Villa Renovation in Dubai
        </h2>

        {/*
          FIXED: the wrapper had `text-center` and the inner div had
          `text-justify` — two conflicting alignments on the same content.
          `text-justify` removed throughout this file: on a 360px screen it
          creates rivers of whitespace and measurably hurts readability.
        */}
        <div className="space-y-4 font-play text-sm text-white sm:text-base">
          <p>
            WE DO has completed {VILLA_PROJECTS} across Dubai over {EXPERIENCE_YEARS},
            with one project management team handling design, authority approvals,
            construction, and styling rather than handing you off between separate
            contractors for each phase. We&apos;re DED-registered and coordinate directly
            with Dubai Municipality, DEWA, and community management on your behalf,
            including projects across Emirates Hills, Green Community, Palm Jumeirah,
            Dubai Hills, Jumeirah, and Arabian Ranches.
          </p>

          <p>
            Every project is assigned a single point of contact from consultation through
            handover, so you&apos;re not re-explaining your brief to a new person at each
            phase. Material selection, budget tracking, and approval status are
            communicated at each milestone rather than left until the final walkthrough.
          </p>

          <div className="space-y-3 border-t border-gray-800 pt-4">
            <h3 className="mb-2 font-conthrax text-xs uppercase tracking-wider text-[#caa193] sm:text-sm">
              Key Facts
            </h3>
            <ul className="list-disc space-y-2 pl-5 text-gray-300">
              <li>{VILLA_PROJECTS} completed across Dubai</li>
              <li>{EXPERIENCE_YEARS} operating in the UAE market</li>
              <li>DED-registered interior design &amp; fit-out company</li>
              <li>
                Full villa renovation: typically 3-4 months for standard scope, 6-8
                months for large or full-scope projects
              </li>
              <li>Free, itemized quote after a site visit — no lump-sum pricing</li>
              <li>
                One team manages design, approvals (DEWA, community NOC, Dubai
                Municipality where applicable), construction, and styling
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Why Renovate + feature image */}
      {/* REMOVED: an internal Hindi/Urdu note was left in the source here
          ("items-start ki jagah items-center use kiya hai…"). Harmless but it
          ships to production in the JS bundle. */}
      <div className="mx-auto mb-12 flex flex-col items-center gap-6 lg:max-w-[70%] lg:flex-row">
        <div className="w-full space-y-4 lg:w-1/2">
          <h2 className="font-conthrax text-base tracking-widest text-[#caa193] sm:text-xl">
            Why Renovate Your Villa in Dubai?
          </h2>
          <p className="font-play text-sm text-white sm:text-base">
            Most renovation decisions come down to one of three triggers: the
            villa&apos;s systems are aging, the layout no longer fits how the family
            actually lives, or the finishes look dated next to newer developments
            nearby. Villas built between the early 2000s and 2015 make up a large share
            of Dubai&apos;s stock, and MEP systems typically need attention in that 10–25
            year window regardless of how the interior looks.
          </p>
          <p className="font-play text-sm text-white sm:text-base">
            Renovating an existing villa is also usually faster and less disruptive than
            relocating. You keep the plot, the school catchment, and the community
            you&apos;re already in, and only the scope of work you choose changes. A
            phased renovation lets you upgrade one priority area first, such as the
            kitchen, majlis, or MEP systems, rather than committing to a full-villa
            budget in one go.
          </p>
        </div>

        {/* FIXED: was <a href={textImage.link}> where `link` was undefined. */}
        <figure className="w-full overflow-hidden rounded-lg shadow-lg lg:w-1/2">
          <Image
            src={featureImage.src}
            alt={featureImage.alt}
            width={700}
            height={550}
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="h-auto w-full object-cover"
          />
          <figcaption className="bg-black/60 px-4 py-2 text-center font-play text-xs text-white/90">
            {featureImage.caption}
          </figcaption>
        </figure>
      </div>

      {/* Gallery */}
      {/*
        FIXED: six <a href={undefined}> wrappers, and captions that were only
        visible on hover. Hover-only text is invisible on every touch device —
        which is most of your traffic — and carries minimal weight for search.
        Captions are now always visible.
      */}
      <div className="mx-auto mb-10 grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 lg:max-w-[70%] lg:grid-cols-3">
        {galleryImages.map(({ src, alt, caption }) => (
          <figure key={src} className="overflow-hidden rounded shadow">
            <Image
              src={src}
              alt={alt}
              width={400}
              height={400}
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="h-auto w-full object-cover"
            />
            <figcaption className="bg-black/70 px-3 py-2 text-center font-conthrax text-xs text-white">
              {caption}
            </figcaption>
          </figure>
        ))}
      </div>

      <CtaBlock heading="Get In Touch With Us">
        Ready to plan your villa renovation? Contact WE DO for a free site visit and an
        itemized quote.
      </CtaBlock>

      {/* How we work */}
      {/*
        FIXED: the heading said "Get Started in 3 Steps" and the paragraph
        immediately beneath it said "move through six stages" — the section
        contradicted itself in adjacent lines, and the full six-stage list
        appears again further down the page.

        Reframed: this is the short version, the detailed six stages are below.
        No more contradiction, and no duplicated content competing with itself.
      */}
      <div className="mx-auto mb-16 w-full max-w-[70%]">
        <h2 className="py-6 text-center font-conthrax text-2xl text-white sm:text-3xl">
          How we work
        </h2>

        <p className="mx-auto mb-6 max-w-3xl text-center font-play text-sm text-white/80 sm:text-base">
          Design, preview, build. Standard-scope projects complete in 3-4 months; large
          or full-scope renovations typically take 6-8 months. The full six-stage
          breakdown is further down this page.
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            ['01', 'Design', 'We turn your brief and villa layout into a concept.'],
            ['02', 'Preview', 'You review the full design in 3D before any work begins.'],
            ['03', 'Build', 'We execute exactly what you approved, on the agreed timeline.'],
          ].map(([num, title, body]) => (
            <div
              key={num}
              className="space-y-3 rounded-xl border border-neutral-800 bg-neutral-900/50 p-6 shadow-lg transition-colors duration-300 hover:border-[#caa193]/50"
            >
              <div className="flex items-center gap-3">
                <span className="font-conthrax text-2xl text-[#caa193]">{num}</span>
                <h3 className="font-conthrax text-lg tracking-wider text-[#caa193]">
                  {title}
                </h3>
              </div>
              <p className="font-play text-sm leading-relaxed text-white/90 sm:text-base">
                {body}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Cost */}
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div className="overflow-hidden rounded-lg shadow-md">
          <Image
            src="/images/villa-renovation-majlis-dubai.png"
            // FIXED: alt was "villa-renovation-majlis-dubai" — the filename
            // pasted in as alt text, which describes nothing.
            alt="Renovated majlis with custom joinery in a Dubai villa"
            width={600}
            height={400}
            sizes="(min-width: 768px) 50vw, 100vw"
            className="h-auto w-full object-cover"
          />
        </div>

        <div className="space-y-6 font-play text-white">
          <h2 className="mb-4 font-conthrax text-xl text-[#caa193]">
            Villa Renovation Cost in Dubai
          </h2>

          {/*
            ⚠️ THE BIGGEST GAP ON THIS PAGE — NOT FIXABLE WITHOUT YOUR DATA.

            This section explains what drives cost and never states one. Every
            page winning the Dubai villa renovation cost queries leads with AED
            per sqft, tiered by scope and broken out by room.

            Insert here, once you have real figures signed off:
              1. A tiered table — cosmetic / mid-range / premium, AED per sqft
              2. Per-room ranges — kitchen, bathroom, majlis, pool
              3. A worked example — "a 3,500 sqft villa at mid-range = AED X–Y"
              4. Community tiers — Emirates Hills vs Arabian Ranches etc.

            Then add matching `offers` + PriceSpecification to the Service node
            in layout.js, and rewrite FAQ #1 to carry a number.

            Publishing ranges also filters unqualified leads before they cost
            you a click, which matters when the Ads strategy is high-ticket only.
          */}

          {/* FIXED: "depends on four main factors, there's no single flat rate,
              since…" was a comma splice. */}
          <p>
            Villa renovation cost in Dubai depends on four main factors. There&apos;s no
            single flat rate, since a light cosmetic refresh and a full-scope renovation
            call for very different budgets:
          </p>

          <ul className="list-disc space-y-2 pl-5 text-[#caa193]">
            {[
              ['Villa size', 'built-up area is the single biggest cost driver'],
              ['Scope', 'cosmetic updates cost far less than layout- or MEP-heavy changes'],
              ['Material grade', 'locally sourced tile and standard cabinetry versus imported stone and custom joinery'],
              ['Community', 'premium communities and larger legacy villas typically carry higher renovation costs than newer, smaller developments'],
            ].map(([term, def]) => (
              <li key={term}>
                <span className="font-play text-white">
                  <b className="text-[#caa193]">{term} —</b> {def}
                </span>
              </li>
            ))}
          </ul>

          {/* FIXED: "quoted per room rather than as a share of the villa total,
              cabinetry, countertop material…" was a comma splice that made the
              list read as a continuation of the previous clause. */}
          <p>
            Kitchens and bathrooms are typically quoted per room rather than as a share
            of the villa total. Cabinetry, countertop material, and tiling grade are the
            biggest swing factors in each. Your itemized quote typically includes design,
            materials, labor, and project management, but excludes furniture, appliances,
            and any developer NOC fees, which vary by community and are confirmed during
            the site visit. Styling guidance — layout, material, and furnishing
            recommendations — is included as part of the design process; the furniture
            and accessories themselves are quoted and sourced separately.
          </p>
        </div>
      </div>

      {/* Cosmetic vs Structural */}
      <div className="mx-auto mb-12 mt-12 space-y-6 rounded bg-black p-6 shadow sm:p-10 lg:max-w-[70%]">
        <h2 className="text-center font-conthrax text-xl text-[#caa193] sm:text-2xl">
          Cosmetic vs. Structural: What&apos;s the Difference?
        </h2>
        <p className="font-play text-sm text-white sm:text-base">
          WE DO&apos;s villa renovation service is scoped around cosmetic and interior
          work; we don&apos;t undertake structural alterations directly. Here&apos;s the
          general distinction, so you know what falls inside our renovation scope and
          what doesn&apos;t:
        </p>

        {/* Added overflow-x-auto: five-column tables overflow at 360px and
            currently break the horizontal layout on phones. */}
        <div className="overflow-x-auto">
          <table className="w-full border border-[#caa193] text-left font-play text-sm text-white sm:text-base">
            <caption className="sr-only">
              Comparison of cosmetic renovation and structural changes in Dubai
            </caption>
            <thead>
              <tr className="text-[#caa193]">
                <th scope="col" className="border border-[#caa193] p-2">Factor</th>
                <th scope="col" className="border border-[#caa193] p-2">Cosmetic Renovation</th>
                <th scope="col" className="border border-[#caa193] p-2">Structural Changes</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["What's included", 'Flooring, paint, cabinetry fronts, fixtures — no layout changes', 'Moving walls, relocating plumbing/electrical, extensions, layout changes'],
                ['Permit required?', 'Usually no', 'Yes — Dubai Municipality building permit'],
                ['Structural engineer needed?', 'No', 'Yes'],
                ['Typical timeline', '3-6 weeks', '3-8 months'],
              ].map(([label, a, b]) => (
                <tr key={label}>
                  {/* Added scope="row" — the first column was a <td>, so screen
                      readers had no row header to announce. */}
                  <th scope="row" className="border border-[#caa193] p-2 text-left font-normal text-[#caa193]">
                    {label}
                  </th>
                  <td className="border border-[#caa193] p-2">{a}</td>
                  <td className="border border-[#caa193] p-2">{b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="font-play text-sm text-white sm:text-base">
          WE DO&apos;s renovation service covers the cosmetic side of this table in full.
          If your project also needs structural changes, we coordinate that through our{' '}
          {/* FIXED: was <a href="https://wedointerior.ae/villa-construction-dubai">
              with leading and trailing spaces inside the anchor text, so the
              anchor read " villa construction ". Now a next/link with clean
              anchor text and client-side navigation. */}
          <Link href="/villa-construction-dubai" className="font-bold text-[#caa193] underline">
            villa construction team
          </Link>
          , so it&apos;s still managed under one point of contact.
        </p>
      </div>

      {/* Materials */}
      <div className="mx-auto mb-12 space-y-6 rounded bg-black p-6 shadow sm:p-10 lg:max-w-[70%]">
        <h2 className="text-center font-conthrax text-xl text-[#caa193] sm:text-2xl">
          Villa Renovation Materials in Dubai
        </h2>
        <p className="font-play text-sm text-white sm:text-base">
          Material grade is the single biggest lever on both cost and finish quality in a
          villa renovation; the same layout and square footage can land at very different
          price points depending on whether you specify locally sourced, standard-grade
          materials or imported, premium alternatives. It&apos;s common to mix both:
          premium materials in high-visibility areas like the kitchen island or majlis
          flooring, standard grade in secondary spaces, to balance the overall budget.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full border border-[#caa193] text-left font-play text-sm text-white sm:text-base">
            <caption className="sr-only">
              Standard versus premium material grades for villa renovation in Dubai
            </caption>
            <thead>
              <tr className="text-[#caa193]">
                <th scope="col" className="border border-[#caa193] p-2">Element</th>
                <th scope="col" className="border border-[#caa193] p-2">Standard / Local Grade</th>
                <th scope="col" className="border border-[#caa193] p-2">Premium / Imported Grade</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Flooring', 'Porcelain tile', 'Natural stone, engineered hardwood'],
                ['Kitchen Countertops', 'Locally sourced quartz', 'Imported marble or granite'],
                ['Cabinetry & Joinery', 'Standard cabinetry', 'Fully custom joinery'],
                ['Bathroom Tiling & Fixtures', 'Ceramic or porcelain tile, standard chrome fixtures', 'Large-format porcelain or natural stone, brushed brass or matte black fixtures'],
                ['Exterior Cladding & Coatings', 'Painted render, standard weatherproof coating', 'Stone or composite cladding, UV-rated protective coatings'],
              ].map(([el, std, prem]) => (
                <tr key={el}>
                  <th scope="row" className="border border-[#caa193] p-2 text-left font-normal text-[#caa193]">
                    {el}
                  </th>
                  <td className="border border-[#caa193] p-2">{std}</td>
                  <td className="border border-[#caa193] p-2">{prem}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* FIXED: "stage, before any construction starts, you'll see exact
            material specifications" — comma splice. */}
        <p className="font-play text-sm text-white sm:text-base">
          Material selection happens during the Design &amp; 3D Visualization stage,
          before any construction starts. You&apos;ll see exact material specifications
          and can adjust grade up or down before pricing is finalized, not after.
        </p>
      </div>

      {/* Services */}
      <div className="mx-auto mb-12 mt-12 space-y-6 rounded bg-black p-6 shadow sm:p-10 lg:max-w-[70%]">
        <div className="text-center">
          <h2 className="mb-2 font-conthrax text-xl text-[#caa193] sm:text-2xl md:text-3xl">
            Villa Renovation Services in Dubai
          </h2>
          <p className="py-2 text-start font-play text-sm text-white sm:text-base">
            Every villa renovation is scoped around your specific layout, community
            requirements, and how much you&apos;re refreshing versus reconfiguring within
            your villa&apos;s existing footprint. Below are the services we handle most
            often, whether you&apos;re updating a single room or refreshing the full
            villa.
          </p>
        </div>

        <div className="space-y-6">
          {services.map(({ title, body }) => (
            <div key={title}>
              <h3 className="font-conthrax text-sm uppercase text-[#caa193] sm:text-base">
                {title}
              </h3>
              <p className="py-2 text-start font-play text-sm text-white sm:text-base">
                {body}
              </p>
            </div>
          ))}

          {/* Landscaping kept separate because it carries an internal link */}
          <div>
            <h3 className="font-conthrax text-sm uppercase text-[#caa193] sm:text-base">
              Landscaping &amp; Garden Design
            </h3>
            <p className="py-2 text-start font-play text-sm text-white sm:text-base">
              <Link href="/landscape-design-dubai" className="font-bold text-[#caa193] underline">
                Landscaping and garden design
              </Link>{' '}
              — planting, irrigation, and outdoor living areas, distinct from the
              driveway and hardscaping work covered under Exterior &amp; Façade
              Renovation. Often bundled with a pool or exterior renovation project, since
              access and site logistics overlap.
            </p>
            <p className="font-play text-sm text-white sm:text-base">
              Need to add square footage instead of reconfiguring within your villa&apos;s
              existing layout? Extensions require Dubai Municipality-approved structural
              drawings and a licensed structural sign-off — outside our renovation scope,
              but coordinated through our villa construction team as part of the same
              single point of contact.
            </p>
          </div>
        </div>
      </div>

      {/* Six stages */}
      <div className="mx-auto mb-12 space-y-6 rounded bg-black p-6 shadow sm:p-10 lg:max-w-[70%]">
        <h2 className="text-center font-conthrax text-xl text-[#caa193] sm:text-2xl">
          What Are the Steps Involved in Villa Renovation?
        </h2>
        <p className="font-play text-sm text-white sm:text-base">
          From first call to final walkthrough, most villa renovations move through six
          stages. Standard-scope projects complete in 3-4 months; large or full-scope
          renovations typically take 6-8 months.
        </p>
        <ol className="list-decimal space-y-2 pl-5 text-[#caa193]">
          {processSteps.map(([name, detail, timing]) => (
            <li key={name}>
              <p className="font-play text-white">
                <b className="text-[#caa193]">{name}</b>
                {timing ? ` (${timing})` : ''} — {detail}
              </p>
            </li>
          ))}
        </ol>
      </div>

      {/* Renovation vs Fit-Out */}
      <div className="mx-auto mb-12 space-y-6 rounded bg-black p-6 shadow sm:p-10 lg:max-w-[70%]">
        <h2 className="text-center font-conthrax text-xl text-[#caa193] sm:text-2xl">
          Villa Renovation vs. Villa Fit-Out
        </h2>
        <p className="font-play text-sm text-white sm:text-base">
          These two terms get used interchangeably, but they cover different scopes, and
          mixing them up leads to mismatched quotes: a fit-out quote won&apos;t include
          structural work, and a renovation quote may include fit-out elements you
          don&apos;t need. If your project needs both, WE DO handles them as one
          continuous project with a single point of contact, rather than splitting the
          work across two separate teams and two separate contracts.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full border border-[#caa193] text-left font-play text-sm text-white sm:text-base">
            <caption className="sr-only">
              Comparison of villa renovation and villa fit-out scope, timelines and approvals
            </caption>
            <thead>
              <tr className="text-[#caa193]">
                <th scope="col" className="border border-[#caa193] p-2">Factor</th>
                <th scope="col" className="border border-[#caa193] p-2">Villa Renovation</th>
                <th scope="col" className="border border-[#caa193] p-2">Villa Fit-Out</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border border-[#caa193] p-2 text-left font-normal text-[#caa193]">Scope</th>
                <td className="border border-[#caa193] p-2">Cosmetic and interior changes to an existing, lived-in villa</td>
                <td className="border border-[#caa193] p-2">Interior systems, joinery, and furnishing — typically shell-and-core or post-handover</td>
              </tr>
              <tr>
                <th scope="row" className="border border-[#caa193] p-2 text-left font-normal text-[#caa193]">Best for</th>
                <td className="border border-[#caa193] p-2">Older villas needing cosmetic or interior updates</td>
                <td className="border border-[#caa193] p-2">New villas or fully handed-over units needing interior build-out</td>
              </tr>
              <tr>
                <th scope="row" className="border border-[#caa193] p-2 text-left font-normal text-[#caa193]">Typical timeline</th>
                <td className="border border-[#caa193] p-2">3-4 months (standard) / 6-8 months (large or full-scope) / 3-6 weeks (partial)</td>
                {/*
                  ⚠️ FIXED THE LEAK, NOT THE GAP.
                  This cell read "Varies by scope — confirm typical range" on
                  the live site. That is an internal editorial note that shipped
                  to production, sitting in a comparison table a prospect reads
                  before deciding whether to call you.

                  I've replaced it with honest user-facing wording, but the
                  right fix is a real range. Every other cell in this table has
                  a number; this one being empty is the cell people will notice.
                  Get the figure from the fit-out team and drop it in.
                */}
                <td className="border border-[#caa193] p-2">Varies by scope — we confirm the range at your site visit</td>
              </tr>
              <tr>
                <th scope="row" className="border border-[#caa193] p-2 text-left font-normal text-[#caa193]">Approvals needed</th>
                <td className="border border-[#caa193] p-2">DEWA, community NOC (Dubai Municipality permit only if structural work is separately commissioned)</td>
                <td className="border border-[#caa193] p-2">Developer/community NOC, DEWA for MEP</td>
              </tr>
              <tr>
                <th scope="row" className="border border-[#caa193] p-2 text-left font-normal text-[#caa193]">Warranty</th>
                {/*
                  ⚠️ "Contact us for details" in both columns is the weakest
                  possible answer in a comparison table, and warranty is a top-3
                  decision factor for a six-figure renovation. Competitors are
                  publishing "3-year warranty on all works" as a headline claim.
                  If WE DO has a defined warranty period, state it here.
                */}
                <td className="border border-[#caa193] p-2">
                  <Link href="/contact-us" className="font-bold text-[#caa193] underline">
                    Contact us for details
                  </Link>
                </td>
                <td className="border border-[#caa193] p-2">Contact us for details</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mt-4 font-play text-sm text-white sm:text-base">
          See our{' '}
          <Link href="/villa-interior-design-dubai" className="font-bold text-[#caa193] underline">
            villa interior design and fit-out page
          </Link>{' '}
          for more information.
        </p>
      </div>

      {/* Testimonials */}
      <div
        className="relative mx-auto mb-12 space-y-6 overflow-hidden rounded bg-black p-6 shadow sm:p-10 lg:max-w-[70%]"
        onMouseEnter={() => setIsPlaying(false)}
        onMouseLeave={() => setIsPlaying(true)}
        // Added focus handlers: the mouse-only pause meant a keyboard user
        // tabbing through the controls had slides changing underneath them.
        onFocus={() => setIsPlaying(false)}
        onBlur={() => setIsPlaying(true)}
      >
        <h2 className="mb-2 text-center font-conthrax text-xl text-[#caa193] sm:text-2xl">
          Testimonials
        </h2>

        <div
          className="relative flex min-h-[200px] items-center justify-center sm:min-h-[140px]"
          aria-live="polite"
        >
          {testimonials.map((item, index) => (
            <div
              key={item.author}
              className={`absolute w-full transition-all duration-500 ${
                index === currentSlide
                  ? 'pointer-events-auto translate-x-0 opacity-100'
                  : 'pointer-events-none translate-x-8 opacity-0'
              }`}
              aria-hidden={index !== currentSlide}
            >
              <blockquote className="border-l-4 border-[#caa193] pl-4 font-play text-sm italic text-white sm:text-base">
                {/* Quote marks moved out of the data and into markup, so the
                    schema and the visible text can share the same string. */}
                &ldquo;{item.quote}&rdquo;
                <footer className="mt-2 not-italic text-[#caa193]">
                  — {item.author}, {item.location}
                </footer>
              </blockquote>
            </div>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-between border-t border-zinc-800 pt-4">
          {/* Added type="button" to all three controls. Without it they default
              to type="submit" and will submit any form they end up inside —
              relevant once you add the inline lead form. */}
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous testimonial"
            className="font-conthrax text-xs uppercase tracking-wider text-[#caa193] transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#caa193]"
          >
            ← Prev
          </button>

          <div className="flex space-x-2">
            {testimonials.map((item, idx) => (
              <button
                key={item.author}
                type="button"
                onClick={() => setCurrentSlide(idx)}
                // FIXED: these dots had no text content and no label at all, so
                // a screen reader announced them as just "button".
                aria-label={`Show testimonial ${idx + 1} of ${testimonials.length}`}
                aria-current={idx === currentSlide}
                className={`h-2 rounded-full transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#caa193] ${
                  idx === currentSlide ? 'w-4 bg-[#caa193]' : 'w-2 bg-zinc-600'
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next testimonial"
            className="font-conthrax text-xs uppercase tracking-wider text-[#caa193] transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#caa193]"
          >
            Next →
          </button>
        </div>
      </div>

      {/*
        MOVED OUT of the testimonials container. "Areas We Serve" was nested
        inside the carousel div, which meant it inherited the pause-on-hover
        handlers and sat inside a region a screen reader announces as the
        testimonial widget. It's a separate topic and now a separate block.
      */}
      <div className="mx-auto mb-12 space-y-4 rounded bg-black p-6 shadow sm:p-10 lg:max-w-[70%]">
        <h2 className="font-conthrax text-lg text-[#caa193]">Areas We Serve</h2>
        <p className="font-play text-sm text-white sm:text-base">
          We complete villa renovation projects across Dubai, including Emirates Hills,
          Green Community, Palm Jumeirah, Dubai Hills,{' '}
          <Link href="/interior-design-jumeirah-dubai" className="font-bold text-[#caa193] underline">
            Jumeirah
          </Link>
          , and Arabian Ranches, with coverage extending to additional{' '}
          <Link href="/interior-design-dubai" className="font-bold text-[#caa193] underline">
            communities across the city
          </Link>
          .
        </p>
      </div>

      <CtaBlock heading="Get Your Free Villa Renovation Quote">
        {/* FIXED: the NAP line ran together with no punctuation —
            "…Fit-Out WH-05 A, Jebel Ali Industrial 1, Dubai, UAE Phone/WhatsApp:
            +971 58 807 5603 Email: info@wedointerior.ae". Now structured, and
            the phone and email are real links.

            ⚠️ Confirm this address string matches your Google Business Profile
            character for character. NAP consistency is one of the strongest
            local pack signals and the site has used at least two variants
            (this one and the "X4RG+39W" plus code in the footer). */}
        <address className="not-italic">
          WE DO Interior Design &amp; Fit-Out
          <br />
          WH-05 A, Jebel Ali Industrial 1, Dubai, UAE
          <br />
          Phone and WhatsApp:{' '}
          <a href={`tel:${PHONE_E164}`} className="underline">
            {PHONE_DISPLAY}
          </a>
          <br />
          Email:{' '}
          <a href={`mailto:${EMAIL}`} className="underline">
            {EMAIL}
          </a>
        </address>
        <p className="mt-3">
          Ready to plan your villa renovation? Contact WE DO for a free site visit and an
          itemized quote.
        </p>
      </CtaBlock>

      {/* Map */}
      <div className="my-12 w-full overflow-hidden rounded-lg shadow-lg" style={{ height: '450px' }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3616.292133776448!2d55.1259375!3d24.990187499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6954f6d82d69%3A0x12891350d5165c12!2sInterior%20Design%20Company%20Dubai%20-%20WeDo%20Interior%20Design%20%26%20Fit%20out!5e0!3m2!1sen!2sae!4v1783940352669!5m2!1sen!2sae"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          title="WE DO Interior Design & Fit-Out location in Jebel Ali, Dubai"
        />
      </div>

      {/* FAQs */}
      <div className="mx-auto mb-12 space-y-6 rounded bg-black p-6 shadow sm:p-10 lg:max-w-[70%]">
        <h2 className="text-center font-conthrax text-xl text-[#caa193] sm:text-2xl">
          Frequently Asked Questions
        </h2>

        {faqs.map(({ q, a }) => (
          <div key={q}>
            <h3 className="font-conthrax text-[#caa193]">{q}</h3>
            <p className="py-2 font-play text-sm text-white sm:text-base">{a}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DProjects;

/* ====================================================================
 * WHAT CHANGED
 *
 * BUGS
 *  1. Seven anchors with href={undefined} — `textImage.link` and the gallery's
 *     destructured `link` never existed on the objects. Converted to
 *     <figure>/<figcaption>. This was the real cause of the "hrefless gallery
 *     anchors" I flagged from the rendered HTML.
 *  2. Hover-only captions were invisible on every touch device. Now always
 *     visible.
 *  3. "Areas We Serve" was nested inside the testimonial carousel container,
 *     inheriting its pause-on-hover handlers. Moved out.
 *  4. An internal Hindi/Urdu developer note was shipping in the bundle.
 *
 * SCHEMA INTEGRITY
 *  5. Five of the nine visible FAQ answers did NOT match the FAQ text in
 *     layout.js — comma splices on the page where the schema had em dashes,
 *     "Partial renovations of a single kitchen" vs "Partial renovations — a
 *     single kitchen or bathroom —". Google requires them to match. All nine
 *     now use the schema's exact strings.
 *  6. "Varies by scope — confirm typical range" (an internal editorial note)
 *     replaced with user-facing wording.
 *  7. Project count and years now import from brand-facts.js.
 *
 * COPY
 *  8. Comma splices fixed in the cost intro, the kitchens/bathrooms paragraph,
 *     and the material-selection paragraph.
 *  9. "painting ,refreshing" — space before comma.
 * 10. "integrated during the renovation wiring and infrastructure are far
 *     easier to install" — two sentences collided; split.
 * 11. "HVAC/AC upgrades the MEP work most responsible" — missing dash.
 * 12. "ahead of construction stripping out old finishes" — missing dash.
 * 13. "Painting services" — the only sentence-case heading among eleven
 *     title-case siblings.
 * 14. Anchor text " villa construction " had leading/trailing spaces inside
 *     the <a>.
 *
 * ACCESSIBILITY
 * 15. All carousel controls: added type="button" and aria-labels. The dots had
 *     no accessible name whatsoever.
 * 16. Added focus-visible rings throughout.
 * 17. Carousel now respects prefers-reduced-motion and pauses on focus, not
 *     just hover.
 * 18. Tables: added <caption class="sr-only">, scope="col"/"row", and
 *     overflow-x-auto so they stop breaking layout at 360px.
 * 19. Removed ✅/✉️ from button labels — read aloud as "white heavy check
 *     mark" by screen readers.
 * 20. bg-green-500 and #caa193 with white text were ~2.1:1 contrast, under the
 *     4.5:1 WCAG AA minimum. Moved to green-600 and #a0624d.
 *
 * SEO / STRUCTURE
 * 21. All alt text rewritten. Gallery alts were ALL-CAPS titles; the cost
 *     section image had its filename as alt.
 * 22. "Get Started in 3 Steps" heading contradicted "six stages" in the
 *     paragraph directly beneath it, and duplicated the six-stage section
 *     further down. Reframed as a summary that points to the detail.
 * 23. All internal links converted from absolute <a href="https://wedointerior.ae/…">
 *     to next/link with relative paths — client-side navigation, no full reload.
 * 24. Added `sizes` to every Image.
 * 25. text-justify removed throughout.
 * 26. The triplicated CTA block extracted into one <CtaBlock> component.
 * 27. NAP block restructured into a semantic <address> with live tel:/mailto:.
 *
 * ⚠️ STILL NEEDS YOU
 *   - The cost section has no AED figures. Marked in place. This is the single
 *     biggest thing standing between this page and the cost query cluster.
 *   - Conversion tracking fires nowhere. Marked in CtaBlock.
 *   - Warranty row says "Contact us for details" in both columns.
 *   - Fit-out timeline still has no number.
 *   - Testimonials still don't match the reviews in app/layout.js — and I
 *     still haven't seen that file.
 *   - Confirm the address string matches GBP exactly.
 * ==================================================================== */