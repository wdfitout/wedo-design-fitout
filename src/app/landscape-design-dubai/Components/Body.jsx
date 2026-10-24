'use client';

import { useCallback, useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { FaPlay } from 'react-icons/fa';

/**
 * WE DO - LANDSCAPE DESIGN DUBAI
 * The established office service-page template, including font sizes,
 * spacing, breakpoints, colors, interactive behavior, and 13-section order.
 *
 * 01 Intro text + video
 * 02 Landscape design image showcase, clickable cards, four per desktop row
 * 03 Get In Touch strip
 * 04 Four landscape area image/information cards
 * 05 Landscape types + Dubai locations
 * 06 Related services grid (desktop) / carousel (mobile)
 * 07 Get In Touch strip
 * 08 Why landscape design matters
 * 09 Landscape design and construction services
 * 10 Trends + design process (image on right)
 * 11 Project requirements + why WE DO (image on left)
 * 12 Interactive FAQ accordion
 * 13 Final call to action - ALWAYS LAST
 *
 * Original gallery contained landscape photos with unrelated apartment links.
 * These are therefore landscape design showcase images, not verified
 * completed project case studies. Update project labels and links as needed.
 */

/* ======================================================================
 * MANUAL LAYOUT CONTROLS - SAME AS OFFICE SERVICE TEMPLATE
 * ====================================================================== */
const LAYOUT = {
  intro: {
    maxWidth: '1800px',
    contentWidth: '90%',
    sidePadding: '32px',
    verticalPadding: '40px',
    textColumn: '1.25fr',
    videoColumn: '1fr',
    columnGap: '40px',
    rowGap: '36px',
    videoAspectRatio: '16 / 9',
    videoTopSpacing: '24px',
    ctaTopSpacing: '32px',
    ctaHeight: '56px',
  },
  projects: {
    maxWidth: '1880px',
    sidePadding: '20px',
    topPadding: '50px',
    bottomPadding: '60px',
    gap: '16px',
    aspectRatio: '4 / 3',
  },
  workspaces: {
    maxWidth: '1880px',
    sidePadding: '20px',
    topPadding: '12px',
    bottomPadding: '80px',
    introMaxWidth: '1050px',
    gap: '18px',
    aspectRatio: '4 / 3',
    cardMinHeight: '245px',
  },
  types: { maxWidth: '1140px' },
  serviceGallery: { maxWidth: '1880px', gap: '24px' },
};

/* ======================================================================
 * SERVICE DATA - EASY TO UPDATE WITHOUT EDITING COMPONENTS
 * ====================================================================== */

// Video source appeared only in the old commented-out landscape code.
// Verify the video before publishing or set the ID to '' for the gallery fallback.
const LANDSCAPE_YOUTUBE_VIDEO_ID = 'yNeCQLpYvww';
const LANDSCAPE_VIDEO_THUMBNAIL = '/images/atlantis (2).webp';

// Each image is a Next.js Link card. Replace empty links with REAL landscape
// project slugs when available. Empty links intentionally do not navigate.
// The old apartment URLs have been removed: they are unrelated projects.
const LANDSCAPE_SHOWCASE = [
  { image: '/images/luxury-landscape-design.png', title: 'Luxury Landscape Design - Showcase 01', link: '' },
  { image: '/images/poolside-landscape-design-dubai-sunken-seating.png', title: 'Poolside Landscape & Sunken Seating - Showcase 02', link: '' },
  { image: '/images/contemporary-villa-landscape-design-dubai.png', title: 'Contemporary Villa Landscape - Showcase 03', link: '' },
  { image: '/images/luxury-villa-landscape-design-dubai.png', title: 'Luxury Villa Garden - Showcase 04', link: '' },
  { image: '/images/contemporary-villa-landscape-design.png', title: 'Contemporary Outdoor Design - Showcase 05', link: '' },
  { image: '/images/luxury-villa-landscape-design-dubai-pool-evening.png', title: 'Poolside Evening Landscape - Showcase 06', link: '' },
  { image: '/images/landscape-3.png', title: 'Landscape Design - Showcase 07', link: '' },
  { image: '/images/landscape-4.png', title: 'Landscape Design - Showcase 08', link: '' },
];

const LANDSCAPE_AREAS = [
  {
    image: '/images/luxury-landscape-design.png',
    title: 'Gardens & Softscape Design',
    description:
      'We combine planting, natural textures and thoughtfully arranged greenery to create welcoming gardens suited to the space and its surroundings.',
  },
  {
    image: '/images/poolside-landscape-design-dubai-sunken-seating.png',
    title: 'Swimming Pools & Water Features',
    description:
      'Swimming pools, Jacuzzis and water elements can be integrated with outdoor seating and surrounding finishes for a cohesive retreat.',
  },
  {
    image: '/images/contemporary-villa-landscape-design-dubai.png',
    title: 'Pergolas & Outdoor Seating',
    description:
      'Pergolas, gazebos, fire-pit seating and shaded relaxation zones help make outdoor environments comfortable and practical.',
  },
  {
    image: '/images/landscape-4.png',
    title: 'Hardscape & Outdoor Lighting',
    description:
      'Paths, surfaces, garden structures and considered exterior lighting provide the framework for usable and attractive outdoor spaces.',
  },
];

const LANDSCAPE_SERVICE_IMAGES = [
  { src: '/images/landscape-3.png', alt: 'Landscape design visual showing an outdoor setting in Dubai' },
  { src: '/images/landscape-4.png', alt: 'Landscape construction and garden design visual' },
  { src: '/images/landscape-5.png', alt: 'Outdoor landscape design and planting reference' },
  { src: '/images/luxury-landscape-design-dubai-night-villa.png', alt: 'Villa landscape design shown in an evening setting' },
  { src: '/images/resort-style-landscape-design-dubai-backyard.png', alt: 'Resort-style backyard landscape design visual' },
  { src: '/images/luxury-villa-landscape-design-dubai-pool-evening.png', alt: 'Luxury villa poolside landscape at night' },
  { src: '/images/ultra-luxury-villa-exterior-in-dubai.png', alt: 'Luxury villa exterior and outdoor landscape design reference' },
  { src: '/images/landscape-2.webp', alt: 'Villa landscaping and outdoor design visual in Dubai' },
];

const LANDSCAPE_TYPES = [
  {
    title: 'Villa & Residential Landscapes',
    description:
      'Outdoor environments tailored to villa architecture, family living, circulation and the relationship between the house and garden.',
  },
  {
    title: 'Commercial Outdoor Spaces',
    description:
      'Landscape concepts for commercial settings that balance a welcoming appearance with practical circulation and maintenance needs.',
  },
  {
    title: 'Bespoke Gardens & Planting',
    description:
      'Softscape plans, planted borders and garden compositions that introduce character and greenery to outdoor areas.',
  },
  {
    title: 'Swimming Pools & Jacuzzis',
    description:
      'Pool and Jacuzzi concepts considered together with deck finishes, adjacent seating and outdoor lighting.',
  },
  {
    title: 'Pergolas, Gazebos & Shade',
    description:
      'Outdoor structures create opportunities for comfortable seating and year-round use according to the site conditions.',
  },
  {
    title: 'Sunken Seating & Fire Pits',
    description:
      'Social spaces designed around seating arrangements, material coordination and comfortable gathering areas.',
  },
  {
    title: 'Hardscape & Outdoor Finishes',
    description:
      'Walkways, patios, paved surfaces and structural detailing connect different areas into a unified landscape.',
  },
  {
    title: 'Irrigation & Garden Maintenance',
    description:
      'Drip irrigation, sprinkler planning and maintenance considerations help keep outdoor greenery manageable.',
  },
];

const LANDSCAPE_PROCESS = [
  {
    title: 'Site Consultation & Landscape Brief',
    description:
      'We discuss your outdoor vision, the type of property, the existing space and any site-specific priorities before preparing concepts.',
  },
  {
    title: 'Concept Design & 3D Visualisation',
    description:
      'Our team develops layout concepts and visuals to illustrate the relationship between landscaping, seating, structures and outdoor amenities.',
  },
  {
    title: 'Planting, Materials & Irrigation Planning',
    description:
      'Softscape, hardscape, lighting, irrigation and relevant technical details are coordinated around the agreed design direction.',
  },
  {
    title: 'Landscape Construction & Installation',
    description:
      'Agreed works are implemented with attention to surfaces, planting, outdoor features and the associated construction details.',
  },
  {
    title: 'Final Inspection & Handover',
    description:
      'We review the completed outdoor areas and provide applicable guidance for irrigation, planting care and maintenance arrangements.',
  },
];

const LANDSCAPE_FAQS = [
  {
    q: 'What landscape design services does WE DO offer in Dubai?',
    a: 'We develop outdoor design solutions that may include gardens and softscape, patios and hardscape, swimming pools and Jacuzzis, pergolas, outdoor seating, lighting, irrigation and agreed construction work. The final scope is tailored to the project.',
  },
  {
    q: 'Do you provide landscape design and construction together?',
    a: 'Our landscape services can bring design concepts and agreed construction or installation activities into a coordinated process, subject to the project brief and proposal.',
  },
  {
    q: 'Can you design villa gardens and commercial outdoor spaces?',
    a: 'We can develop landscape concepts for residential villas and commercial properties, with layouts, finishes and outdoor features selected according to the setting and intended use.',
  },
  {
    q: 'Can WE DO include swimming pools, Jacuzzis and sunken seating?',
    a: 'Poolside landscapes, Jacuzzi areas, sunken seating and fire-pit concepts can be considered within the overall design. Feasibility, technical requirements and permissions are reviewed for the actual property.',
  },
  {
    q: 'Do you install automatic irrigation systems?',
    a: 'Smart irrigation planning, drip irrigation and sprinkler systems can form part of the landscape scope. A suitable system depends on planting needs, water availability and site conditions.',
  },
  {
    q: 'How long does landscape design and construction take in Dubai?',
    a: 'The schedule depends on the site size, design detail, pool or structural work, materials, planting, contractor coordination and any required approvals. A realistic timeframe can be discussed after a site review.',
  },
  {
    q: 'Are approvals needed for landscape works in Dubai?',
    a: 'They may be. Requirements can vary by developer, building or community and by the nature of the work, particularly for pools, significant structures, drainage or utilities. The applicable approval responsibilities should be confirmed for each project.',
  },
  {
    q: 'How much does landscape design and construction cost in Dubai?',
    a: 'Cost varies with garden size, existing conditions, selected materials, planting, irrigation, pools, outdoor structures and installation scope. We can discuss an itemised proposal once the requirements and site are understood.',
  },
];

/* ======================================================================
 * SHARED CONTACT STRIP - REUSED AT POSITIONS 03 AND 07
 * ====================================================================== */
function ContactStrip() {
  return (
    <section aria-label="Get in touch with WE DO" className="bg-[#111111] px-4 py-7 sm:px-5">
      <div className="mx-auto max-w-[1880px] bg-[#f5ede5] px-5 py-9 text-center text-black sm:py-10">
        <h2 className="font-conthrax text-sm uppercase sm:text-xl">Get In Touch With Us</h2>
        <p className="mt-4 font-play text-sm sm:text-base">
          We are located in the world&apos;s luxury city, Dubai
        </p>
        <div className="mt-5 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="https://wa.me/971588075603"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center justify-center rounded bg-[#19c65a] px-6 py-3 font-play text-sm font-semibold text-white transition-colors hover:bg-[#11aa48]"
          >
            Request availability by WhatsApp
          </a>
          <a
            href="mailto:info@wedointerior.ae"
            className="inline-flex min-h-11 items-center justify-center rounded bg-[#caa193] px-6 py-3 font-play text-sm font-semibold text-white transition-colors hover:bg-[#ac8275]"
          >
            Request availability by E-mail
          </a>
        </div>
      </div>
    </section>
  );
}

/* ======================================================================
 * 01 - INTRO TEXT + VIDEO-READY LANDSCAPE VISUAL
 * ====================================================================== */
function IntroVideo() {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <section
      className="bg-black px-4 py-[var(--section-padding)] text-white sm:px-6 lg:px-[var(--side-padding)]"
      style={{
        '--side-padding': LAYOUT.intro.sidePadding,
        '--section-padding': LAYOUT.intro.verticalPadding,
      }}
    >
      <div
        className="mx-auto"
        style={{ width: LAYOUT.intro.contentWidth, maxWidth: LAYOUT.intro.maxWidth }}
      >
        <div
          className="grid grid-cols-1 items-stretch lg:grid-cols-[var(--intro-columns)]"
          style={{
            '--intro-columns': `minmax(0, ${LAYOUT.intro.textColumn}) minmax(0, ${LAYOUT.intro.videoColumn})`,
            columnGap: LAYOUT.intro.columnGap,
            rowGap: LAYOUT.intro.rowGap,
          }}
        >
          <div className="flex min-w-0 flex-col">
            <div>
              <h2 className="mb-3 py-2 font-conthrax text-sm tracking-widest text-[#caa193] sm:text-xl">
                Landscape Design &amp; Construction Services in Dubai
              </h2>
              <p className="font-play text-base leading-7 text-white [text-align:justify]">
                At <strong>WE DO Interior Design &amp; Fitout</strong>, we create
                outdoor environments that connect architecture, nature and
                everyday living. Our <strong>landscape design in Dubai</strong>{' '}
                combines bespoke gardens, thoughtful space planning and
                landscape construction for villas, homes and commercial
                properties. From planting and hardscape to outdoor seating
                and water features, we aim to make every exterior feel
                welcoming, practical and visually cohesive.
              </p>
              <p className="mt-4 font-play text-base leading-7 text-white [text-align:justify]">
                Our team plans gardens, pools, pergolas, landscape lighting
                and irrigation around the needs of each site and the
                Dubai climate. For a larger home transformation, our{' '}
                <Link href="/complete-villa-construction-dubai" className="font-semibold text-[#caa193] hover:underline">
                  villa construction services
                </Link>{' '}
                can help connect the outdoor concept with the broader
                property design and construction brief.
              </p>
            </div>
            <div className="mt-auto flex justify-start" style={{ paddingTop: LAYOUT.intro.ctaTopSpacing }}>
              <span
                className="inline-flex items-center justify-center rounded bg-[#caa193] px-8 font-play text-xs text-white sm:text-base"
                style={{ height: LAYOUT.intro.ctaHeight }}
              >
                11+ Years of Experience
              </span>
            </div>
          </div>

          <div className="flex min-w-0 flex-col">
            <div>
              <h2 className="py-2 font-conthrax text-sm tracking-widest text-gray-200 sm:text-xl">
                Explore Landscape Design in Dubai
              </h2>
              <div
                className="relative w-full overflow-hidden rounded-lg border-2 border-[#caa193] bg-black"
                style={{
                  aspectRatio: LAYOUT.intro.videoAspectRatio,
                  marginTop: LAYOUT.intro.videoTopSpacing,
                }}
              >
                {LANDSCAPE_YOUTUBE_VIDEO_ID ? (
                  !videoLoaded ? (
                    <button
                      type="button"
                      onClick={() => setVideoLoaded(true)}
                      aria-label="Play WE DO landscape design video"
                      className="group relative block h-full w-full cursor-pointer overflow-hidden"
                    >
                      <Image
                        src={LANDSCAPE_VIDEO_THUMBNAIL}
                        alt="WE DO landscape design video preview"
                        fill
                        sizes="(min-width: 1024px) 45vw, 90vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <span className="absolute inset-0 flex items-center justify-center bg-black/40">
                        <span className="flex h-16 w-16 items-center justify-center rounded-full border border-[#caa193] bg-black/50 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-[#caa193] sm:h-20 sm:w-20">
                          <FaPlay aria-hidden="true" className="ml-1 text-xl text-white sm:text-2xl" />
                        </span>
                      </span>
                    </button>
                  ) : (
                    <iframe
                      src={`https://www.youtube-nocookie.com/embed/${LANDSCAPE_YOUTUBE_VIDEO_ID}?autoplay=1&playsinline=1&rel=0`}
                      title="WE DO Landscape Design & Construction Dubai"
                      className="absolute inset-0 h-full w-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  )
                ) : (
                  <Link
                    href="/gallery"
                    aria-label="Browse WE DO interior design gallery"
                    className="group relative block h-full w-full overflow-hidden"
                  >
                    <Image
                      src={LANDSCAPE_VIDEO_THUMBNAIL}
                      alt="Dubai luxury villa landscape design visual"
                      fill
                      sizes="(min-width: 1024px) 45vw, 90vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute inset-0 flex items-center justify-center bg-black/40">
                      <span className="rounded border border-[#caa193] bg-black/60 px-5 py-3 font-play text-sm uppercase text-white transition-colors group-hover:bg-[#caa193] group-hover:text-black">
                        View Our Gallery
                      </span>
                    </span>
                  </Link>
                )}
              </div>
            </div>
            <div className="mt-auto flex justify-start" style={{ paddingTop: LAYOUT.intro.ctaTopSpacing }}>
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center rounded border border-[#caa193] px-8 font-play text-xs uppercase text-white transition-colors hover:bg-[#caa193] hover:text-black sm:text-base"
                style={{ height: LAYOUT.intro.ctaHeight }}
              >
                Get Your Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ======================================================================
 * 02 - CLICKABLE LANDSCAPE SHOWCASE GRID, FOUR ACROSS DESKTOP, NO SLIDER
 * ====================================================================== */
function ProjectGrid() {
  return (
    <section
      aria-labelledby="landscape-projects-heading"
      className="bg-black text-white"
      style={{
        paddingTop: LAYOUT.projects.topPadding,
        paddingBottom: LAYOUT.projects.bottomPadding,
        paddingLeft: LAYOUT.projects.sidePadding,
        paddingRight: LAYOUT.projects.sidePadding,
      }}
    >
      <div className="mx-auto" style={{ maxWidth: LAYOUT.projects.maxWidth }}>
        <h2
          id="landscape-projects-heading"
          className="mb-10 text-center font-conthrax text-sm uppercase tracking-widest text-[#caa193] sm:text-xl md:text-2xl"
        >
          Landscape Design &amp; Construction Showcase in Dubai
        </h2>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          style={{ gap: LAYOUT.projects.gap }}
        >
          {LANDSCAPE_SHOWCASE.map((item) => (
            <Link
              key={item.image}
              href={item.link || '#'}
              onClick={(event) => {
                // Waiting for an actual project page: no false navigation.
                if (!item.link) event.preventDefault();
              }}
              aria-label={`View ${item.title}`}
              aria-disabled={!item.link}
              className="group relative block w-full overflow-hidden rounded-sm bg-zinc-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#caa193]"
              style={{ aspectRatio: LAYOUT.projects.aspectRatio }}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105 group-focus-visible:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-100 transition-opacity duration-300 lg:opacity-0 lg:group-hover:opacity-100 lg:group-focus-visible:opacity-100">
                <h3 className="px-5 text-center font-conthrax text-xs uppercase leading-relaxed tracking-wide text-white sm:text-sm xl:text-base">
                  {item.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ======================================================================
 * 04 - FOUR LANDSCAPE AREA CARDS
 * ====================================================================== */
function LandscapeAreaCards() {
  return (
    <section
      className="bg-black text-white"
      aria-labelledby="landscape-areas-heading"
      style={{
        paddingTop: LAYOUT.workspaces.topPadding,
        paddingBottom: LAYOUT.workspaces.bottomPadding,
        paddingLeft: LAYOUT.workspaces.sidePadding,
        paddingRight: LAYOUT.workspaces.sidePadding,
      }}
    >
      <div className="mx-auto" style={{ maxWidth: LAYOUT.workspaces.maxWidth }}>
        <h2 id="landscape-areas-heading" className="sr-only">
          Outdoor &amp; Landscape Spaces We Design in Dubai
        </h2>
        <p
          className="mx-auto mb-10 text-center font-conthrax text-sm leading-7 text-white sm:text-base sm:leading-8"
          style={{ maxWidth: LAYOUT.workspaces.introMaxWidth }}
        >
          Every outdoor area has a purpose, from welcoming gardens and pool
          surrounds to shaded seating and practical pathways. WE DO combines
          planting, hardscape, water features and outdoor structures into
          coordinated landscape design concepts for Dubai properties.
        </p>
        <div
          className="grid grid-cols-1 items-stretch sm:grid-cols-2 lg:grid-cols-4"
          style={{ gap: LAYOUT.workspaces.gap }}
        >
          {LANDSCAPE_AREAS.map((area) => (
            <article key={area.title} className="group flex h-full min-w-0 flex-col">
              <div
                className="relative w-full overflow-hidden bg-zinc-900"
                style={{ aspectRatio: LAYOUT.workspaces.aspectRatio }}
              >
                <Image
                  src={area.image}
                  alt={`Landscape design visual for ${area.title}`}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                />
              </div>
              <div
                className="relative z-10 mx-3 -mt-6 flex flex-1 flex-col items-center border-t-2 border-[#caa193] bg-[#f5ede5] px-4 py-6 text-center shadow-lg sm:px-5"
                style={{ minHeight: LAYOUT.workspaces.cardMinHeight }}
              >
                <h3 className="font-conthrax text-xs uppercase leading-relaxed text-black xl:text-sm">
                  {area.title}
                </h3>
                <div className="my-4 h-px w-12 bg-[#caa193]" aria-hidden="true" />
                <p className="font-play text-sm leading-6 text-[#4b4542]">{area.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ======================================================================
 * 05 - LANDSCAPE TYPES + DUBAI OUTDOOR SETTINGS
 * ====================================================================== */
function LandscapeTypes() {
  return (
    <section
      className="bg-[#111111] px-5 pb-9 pt-10 text-white"
      aria-labelledby="landscape-types-heading"
    >
      <div className="mx-auto" style={{ maxWidth: LAYOUT.types.maxWidth }}>
        <h2 id="landscape-types-heading" className="sr-only">
          Types of Landscapes We Design in Dubai
        </h2>
        <p className="mx-auto mb-10 max-w-4xl text-center font-conthrax text-md leading-7 text-[#caa193] sm:text-lg">
          Types of Landscape Spaces &amp; Outdoor Features in Dubai
        </p>
        <div className="grid grid-cols-1 gap-x-16 gap-y-7 font-play text-sm leading-7 text-white sm:text-base md:grid-cols-2">
          <div className="space-y-6">
            {LANDSCAPE_TYPES.slice(0, 4).map(({ title, description }) => (
              <div key={title}>
                <h3 className="mb-1 font-play font-bold uppercase text-[#caa193]">{title} -</h3>
                <p>{description}</p>
              </div>
            ))}
          </div>
          <div className="space-y-6">
            {LANDSCAPE_TYPES.slice(4).map(({ title, description }) => (
              <div key={title}>
                <h3 className="mb-1 font-play font-bold uppercase text-[#caa193]">{title} -</h3>
                <p>{description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 rounded-r-lg border-l-4 border-[#caa193] bg-zinc-900/50 p-6">
          <p className="font-play text-sm italic leading-relaxed text-white sm:text-base">
            <strong className="not-italic text-[#caa193]">Outdoor Design Across Dubai - </strong>
            From villa gardens and private courtyards to commercial landscapes,
            properties across Dubai have different outdoor requirements. We
            adapt planting, shade, irrigation, paved areas and water features
            to the setting, available space and site brief. Our{' '}
            <Link href="/villa-interior-design-dubai" className="font-bold not-italic text-[#caa193] hover:underline">
              villa interior design
            </Link>{' '}
            service can also help align indoor and outdoor design directions.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ======================================================================
 * 06 - RELATED LANDSCAPE IMAGES, FOUR ACROSS DESKTOP / MOBILE CAROUSEL
 * ====================================================================== */
function RelatedServices() {
  const autoplay = useMemo(() => Autoplay({ delay: 3000, stopOnInteraction: false }), []);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' }, [autoplay]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);

  return (
    <section
      className="bg-[#111111] px-4 pb-5 pt-8 sm:px-6"
      aria-labelledby="landscape-related-services-heading"
    >
      <div className="mx-auto" style={{ maxWidth: LAYOUT.serviceGallery.maxWidth }}>
        <h2
          id="landscape-related-services-heading"
          className="mb-7 text-center font-conthrax text-sm uppercase tracking-widest text-[#caa193] sm:text-lg md:text-xl"
        >
          WE DO Landscape Design Related Services
        </h2>
        <div
          className="mb-6 hidden grid-cols-4 lg:grid"
          style={{ gap: LAYOUT.serviceGallery.gap }}
        >
          {LANDSCAPE_SERVICE_IMAGES.map(({ src, alt }) => (
            <div key={src} className="relative aspect-video overflow-hidden bg-zinc-900">
              <Image src={src} alt={alt} fill sizes="25vw" className="object-cover" />
            </div>
          ))}
        </div>
        <div className="mb-6 lg:hidden">
          <div ref={emblaRef} className="overflow-hidden">
            <div className="-ml-4 flex touch-pan-y">
              {LANDSCAPE_SERVICE_IMAGES.map(({ src, alt }) => (
                <div key={src} className="min-w-0 flex-[0_0_100%] pl-4 sm:flex-[0_0_50%]">
                  <div className="relative aspect-video w-full overflow-hidden bg-zinc-900">
                    <Image
                      src={src}
                      alt={alt}
                      fill
                      sizes="(min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-4 flex justify-center gap-7">
            <button
              type="button"
              onClick={scrollPrev}
              aria-label="Previous landscape design image"
              className="min-h-11 min-w-11 rounded border border-[#caa193] font-play text-xl text-white transition-colors hover:bg-[#caa193] hover:text-black"
            >
              &larr;
            </button>
            <button
              type="button"
              onClick={scrollNext}
              aria-label="Next landscape design image"
              className="min-h-11 min-w-11 rounded border border-[#caa193] font-play text-xl text-white transition-colors hover:bg-[#caa193] hover:text-black"
            >
              &rarr;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ======================================================================
 * 08 - WHY LANDSCAPE DESIGN MATTERS
 * ====================================================================== */
function WhyDesignMatters() {
  return (
    <section className="bg-[#111111] px-4 pb-7 pt-5 sm:px-6">
      <div className="mx-auto max-w-[1500px] rounded bg-black px-6 py-7 text-left text-white shadow sm:px-10 sm:py-9">
        <h2 className="mb-4 font-conthrax text-md uppercase text-[#caa193] sm:text-lg">
          Why Landscape Design in Dubai Matters
        </h2>
        <div className="space-y-4 font-play text-sm leading-7 sm:text-sm sm:leading-8">
          <p>
            A well-planned landscape creates a meaningful connection between
            a property and its outdoor spaces. Garden design involves more
            than selecting plants: it shapes circulation, shade, outdoor
            activities and the transition from the home to the garden.
            For Dubai villas and commercial exteriors, thoughtful design
            balances <strong>comfort, function and visual identity</strong>.
          </p>
          <p>
            <strong>Softscape and hardscape</strong> should work together.
            Planting can soften built forms, while paved routes, terraces,
            pergolas and seating areas create practical places to gather,
            relax and enjoy the property. Swimming pools, water features and
            landscape lighting add another layer when appropriate to the site.
          </p>
          <p>
            The climate and upkeep requirements also matter. Considering shade,
            irrigation and suitable material choices early in the design can
            help make a garden more manageable over time. At WE DO, we aim to
            create a coherent outdoor experience rather than a collection of
            unrelated decorative elements.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ======================================================================
 * 09 - OUR LANDSCAPE INTERIOR DESIGN SERVICES
 * ====================================================================== */
function LandscapeServicesText() {
  return (
    <section className="bg-[#111111] px-4 pb-12 pt-7 text-white sm:px-6">
      <div className="mx-auto max-w-[1500px] space-y-5 font-play text-sm leading-5 sm:text-sm sm:leading-6">
        <h2 className="font-conthrax text-md uppercase tracking-widest text-[#caa193] sm:text-lg">
          Our Landscape Design &amp; Construction Services in Dubai
        </h2>
        <p>
          WE DO plans bespoke gardens and outdoor environments around each
          property&apos;s architecture, lifestyle, available space and design brief.
          Our landscape services can include the following features and works.
        </p>
        <p>
          <strong className="text-[#caa193]">a. Bespoke Garden &amp; Softscape Design:</strong>{' '}
          Garden layouts, plant compositions and green spaces bring a natural
          character to villa exteriors and other outdoor settings.
        </p>
        <p>
          <strong className="text-[#caa193]">b. Landscape Construction &amp; Hardscape:</strong>{' '}
          Paving, patios, landscape structures, circulation routes and
          coordinated finishes help create durable, usable outdoor areas.
        </p>
        <p>
          <strong className="text-[#caa193]">c. Swimming Pool &amp; Jacuzzi Design:</strong>{' '}
          We develop poolside concepts in relation to outdoor seating, deck
          materials, lighting, water features and the surrounding garden.
          Pool construction and technical works depend on the agreed scope.
        </p>
        <p>
          <strong className="text-[#caa193]">d. Pergolas, Gazebos &amp; Social Seating:</strong>{' '}
          Shaded structures, sunken seating and fire-pit areas can offer
          comfortable spaces for conversation, relaxation and entertaining.
        </p>
        <p>
          <strong className="text-[#caa193]">e. Smart Irrigation &amp; Garden Maintenance:</strong>{' '}
          Automated drip irrigation, sprinklers and planned upkeep help
          support healthy planting and thoughtful water use where appropriate.
        </p>
        <p>
          <strong className="text-[#caa193]">f. Landscape Lighting &amp; Finishes:</strong>{' '}
          Exterior lighting, coordinated surfaces and garden detailing help
          connect the landscape visually from daytime into the evening.
        </p>
        <p>
          For homeowners considering a larger property transformation,
          explore our <Link href="/villa-interior-design-dubai" className="font-semibold text-[#caa193] hover:underline">villa interior design services</Link>{' '}
          and <Link href="/villa-projects" className="font-semibold text-[#caa193] hover:underline">villa projects</Link>
          for an approach that connects indoor architecture and outdoor spaces.
        </p>
      </div>
    </section>
  );
}

/* ======================================================================
 * 10 - LANDSCAPE DESIGN STYLES & PROCESS: PHOTO ON RIGHT
 * ====================================================================== */
function TrendsAndProcess() {
  return (
    <section className="bg-[#111111] px-4 pb-14 pt-10 text-white sm:px-6">
      <div className="mx-auto grid max-w-[1800px] grid-cols-1 items-center gap-10 lg:grid-cols-2">
        <div className="min-w-0 space-y-6 font-play text-sm leading-5 sm:text-sm sm:leading-6">
          <h2 className="font-conthrax text-md uppercase text-[#caa193] sm:text-lg">
            Landscape Design Styles &amp; Trends in Dubai
          </h2>
          <p>
            Contemporary outdoor concepts can combine <strong>natural planting,
            elegant hardscape and outdoor living areas</strong> into one design.
            Shaded pergolas, relaxed seating, subtle exterior lighting and
            carefully integrated water features can connect the garden to the
            home while accommodating the local climate and practical needs.
          </p>
          <p>
            Thoughtful irrigation planning, material selection and a balanced
            mix of garden structures and greenery help make the landscape
            beautiful to experience and realistic to maintain.
          </p>
          <h2 className="pt-2 font-conthrax text-base uppercase text-[#caa193] sm:text-md">
            Our Landscape Design &amp; Construction Process
          </h2>
          <p>
            From the initial outdoor concept to the finished landscape,
            our approach follows these project stages:
          </p>
          <ol className="list-decimal space-y-3 pl-5 marker:text-[#caa193]">
            {LANDSCAPE_PROCESS.map(({ title, description }) => (
              <li key={title}>
                <h3 className="font-play font-bold text-[#caa193]">{title}</h3>
                <p className="text-white">{description}</p>
              </li>
            ))}
          </ol>
        </div>
        <div className="overflow-hidden rounded-lg shadow-md">
          <Image
            src="/images/luxury-landscape-design-dubai-night-villa.png"
            alt="Evening landscape design showing a luxury villa outdoor setting in Dubai"
            width={1200}
            height={800}
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="h-auto w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

/* ======================================================================
 * 11 - APPROVALS & WHY CHOOSE WE DO: PHOTO ON LEFT
 * ====================================================================== */
function RegulationsAndWhyWeDo() {
  return (
    <section className="bg-[#111111] px-4 pb-14 pt-5 text-white sm:px-6">
      <div className="mx-auto grid max-w-[1800px] grid-cols-1 items-center gap-10 lg:grid-cols-2">
        <div className="overflow-hidden rounded-lg shadow-md">
          <Image
            src="/images/resort-style-landscape-design-dubai-backyard.png"
            alt="Backyard landscape design with garden and outdoor relaxation spaces"
            width={1200}
            height={800}
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="h-auto w-full object-cover"
          />
        </div>
        <div className="min-w-0 space-y-6 font-play text-sm leading-5 sm:text-sm sm:leading-6">
          <h2 className="font-conthrax text-md uppercase text-[#caa193] sm:text-lg">
            Landscape Construction Requirements in Dubai
          </h2>
          <p>
            Outdoor works must be planned around the site and the applicable
            property requirements. Depending on the community, developer and
            scope, swimming pools, structural garden features, utility changes
            or drainage may require specific permissions and technical review.
            Irrigation, access and the placement of landscape structures also
            need careful coordination. Applicable approvals and responsibilities
            should be confirmed for each project before construction begins.
          </p>
          <h2 className="pt-2 font-conthrax text-md text-[#caa193] sm:text-md">
            Why Choose WE DO for Landscape Design in Dubai
          </h2>
          <p>
            At <strong>WE DO Interior Design &amp; Fitout</strong>, we aim to
            combine design creativity with practical outdoor planning. Our
            concepts consider landscape architecture, garden planting,
            swimming pools, outdoor living structures and the materials that
            connect them. The result is a coordinated vision shaped around
            how the property will be used.
          </p>
          <p>
            Whether the brief is a villa garden, a new poolside setting or
            an exterior refurbishment, our team focuses on thoughtful
            space planning, realistic 3D visualisation and fit-out coordination.
            For integrated property work, view our{' '}
            <Link href="/complete-villa-construction-dubai" className="font-bold text-[#caa193] hover:underline">
              villa construction services
            </Link>.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ======================================================================
 * 12 - INTERACTIVE FAQ ACCORDION
 * ====================================================================== */
function FrequentlyAskedQuestions() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <section
      className="bg-[#111111] px-4 pb-20 pt-7 text-white sm:px-6"
      aria-labelledby="landscape-faq-heading"
    >
      <div className="mx-auto max-w-[1500px]">
        <h2
          id="landscape-faq-heading"
          className="mb-10 text-center font-conthrax text-lg uppercase text-[#caa193] sm:text-xl"
        >
          Frequently Asked Questions (FAQs)
        </h2>
        <div className="mx-auto max-w-4xl space-y-4">
          {LANDSCAPE_FAQS.map((faq, index) => {
            const expanded = openFaq === index;
            const panelId = `landscape-faq-answer-${index}`;
            return (
              <div key={faq.q} className="overflow-hidden rounded-lg border border-[#caa193]/30">
                <h3>
                  <button
                    type="button"
                    aria-expanded={expanded}
                    aria-controls={panelId}
                    onClick={() => setOpenFaq(expanded ? null : index)}
                    className="flex min-h-14 w-full items-center justify-between gap-4 bg-black p-4 text-left font-play text-sm text-white sm:text-base"
                  >
                    <span className="font-bold">{faq.q}</span>
                    <span aria-hidden="true">{expanded ? '−' : '+'}</span>
                  </button>
                </h3>
                <div
                  id={panelId}
                  hidden={!expanded}
                  className="border-t border-[#caa193]/30 bg-zinc-900 p-4 font-play text-sm leading-7 text-zinc-300 sm:text-base"
                >
                  {faq.a}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ======================================================================
 * 13 - FINAL CTA - NOTHING AFTER THIS SECTION
 * ====================================================================== */
function FinalCallToAction() {
  return (
    <section
      className="bg-[#111111] px-4 pt-2 pb-12 sm:px-6 sm:pb-16"
      aria-labelledby="landscape-final-cta"
    >
      <div className="mx-auto max-w-[1280px] rounded-xl border-2 border-[#caa193] bg-black px-5 py-10 text-center sm:px-8 sm:py-14 lg:px-12">
        <h2
          id="landscape-final-cta"
          className="mb-6 font-conthrax text-sm uppercase text-[#caa193] sm:text-lg"
        >
          Call to Action
        </h2>
        <p className="mx-auto mb-8 w-full max-w-[1350px] font-play text-xs leading-7 text-white sm:text-sm sm:leading-8">
          Ready to transform your outdoor environment with{' '}
          <strong>landscape design in Dubai</strong>? Whether you are planning
          a private villa garden, poolside retreat, pergola, elegant hardscape
          or a complete landscape construction project,{' '}
          <strong>WE DO Interior Design &amp; Fitout</strong> can help bring
          the elements together in one considered design. Discuss your garden,
          villa or commercial outdoor requirements with our team and explore
          a tailored landscape design and construction proposal.
        </p>
        <Link
          href="/contact-us"
          className="inline-flex min-h-14 items-center justify-center rounded-full bg-[#caa193] px-8 py-2 text-center font-play text-sm uppercase text-black transition-colors hover:bg-[#f5ede5] sm:px-10"
        >
          Contact Us Now
        </Link>
      </div>
    </section>
  );
}

/* ======================================================================
 * ONE DEFAULT EXPORT FOR ALL SECTIONS BELOW HERO
 * ====================================================================== */
export default function Body() {
  return (
    <div className="bg-[#111111] text-white">
      <IntroVideo />
      <ProjectGrid />
      <ContactStrip />
      <LandscapeAreaCards />
      <LandscapeTypes />
      <RelatedServices />
      <ContactStrip />
      <WhyDesignMatters />
      <LandscapeServicesText />
      <TrendsAndProcess />
      <RegulationsAndWhyWeDo />
      <FrequentlyAskedQuestions />
      <FinalCallToAction />
    </div>
  );
}
