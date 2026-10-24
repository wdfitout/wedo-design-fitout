'use client';

import { useCallback, useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { FaPlay } from 'react-icons/fa';

/**
 * WE DO - HOTEL INTERIOR DESIGN DUBAI
 * Based on the established office service-page template.
 *
 * 01 Intro text + click-to-play video
 * 02 Hotel design showcase (four per row on desktop; no slider)
 * 03 Get In Touch strip
 * 04 Four hotel-area image/info cards
 * 05 Hotel types + Dubai hospitality locations
 * 06 Related services image gallery (desktop grid / mobile carousel)
 * 07 Get In Touch strip
 * 08 Why hotel design matters
 * 09 Our hotel interior design and fit-out services
 * 10 Trends + process (image on right)
 * 11 Fit-out considerations + why WE DO (image on left)
 * 12 Interactive FAQ accordion
 * 13 Final call to action - KEEP THIS LAST
 *
 * Brand colors: #000000 | #111111 | #caa193 | #f5ede5
 * Fonts: font-conthrax for headings | font-play for body text
 */

/* ======================================================================
 * MANUAL LAYOUT CONTROLS - PRESERVED FROM OFFICE TEMPLATE
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
 * HOTEL PAGE DATA
 * ====================================================================== */

// The following YouTube ID appeared in the old (commented-out) hotel code.
// Confirm that it is the intended hotel video before publishing.
const HOTEL_YOUTUBE_VIDEO_ID = 'yNeCQLpYvww';
const HOTEL_VIDEO_THUMBNAIL = '/images/Hotel relaxing area Interior Design Dubai.png';

// The original hotel gallery was commented out and contained unrelated
// restaurant/apartment entries. Keep this gallery hotel-only.
// TODO: Add the real hotel project page URLs to each `link` below.
// An empty `link` is intentional: the card is prepared for navigation,
// but its click does not redirect until an actual project URL is provided.
const HOTEL_SHOWCASE = [
  { image: '/images/hl-1.png', title: 'Hotel Interior Design - Gallery 01', link: '' },
  { image: '/images/hl-3.png', title: 'Hotel Interior Design - Gallery 02', link: '' },
  { image: '/images/hl-5.png', title: 'Hotel Interior Design - Gallery 03', link: '' },
  { image: '/images/hl-6.png', title: 'Hotel Interior Design - Gallery 04', link: '' },
  { image: '/images/hl-10.png', title: 'Hotel Interior Design - Gallery 05', link: '' },
  { image: '/images/hl-11.png', title: 'Hotel Interior Design - Gallery 06', link: '' },
  { image: '/images/hl-12.png', title: 'Hotel Interior Design - Gallery 07', link: '' },
  { image: '/images/hospitality-dubai-interiors.png', title: 'Hotel Interior Design - Gallery 08', link: '' },
];

const HOTEL_AREAS = [
  {
    image: '/images/hl-3.png',
    title: 'Hotel Lobby & Reception Design',
    description:
      'We plan inviting entrance spaces, considered reception counters and practical waiting areas that reflect the hotel brand and support a smooth guest arrival.',
  },
  {
    image: '/images/hl-5.png',
    title: 'Guest Rooms & Luxury Suites',
    description:
      'Our guest room concepts combine thoughtful furniture layouts, durable finishes, comfortable lighting and useful storage for a relaxing stay.',
  },
  {
    image: '/images/hl-6.png',
    title: 'Hotel Restaurants & Lounges',
    description:
      'We design comfortable dining, bar and lounge settings with a distinctive atmosphere, suitable circulation and carefully coordinated materials.',
  },
  {
    image: '/images/hl-10.png',
    title: 'Spa & Wellness Interiors',
    description:
      'Our wellness concepts focus on privacy, calming materials and balanced lighting to create restorative guest spaces with everyday practicality.',
  },
];

// Uses only hotel imagery referenced in the supplied code.
const HOTEL_SERVICE_IMAGES = [
  { src: '/images/hl-5.png', alt: 'WE DO hotel interior design image one' },
  { src: '/images/hl-3.png', alt: 'WE DO hotel interior design image two' },
  { src: '/images/hl-6.png', alt: 'WE DO hotel interior design image three' },
  { src: '/images/hl-10.png', alt: 'WE DO hotel interior design image four' },
  { src: '/images/hl-11.png', alt: 'WE DO hotel interior design image five' },
  { src: '/images/hl-12.png', alt: 'WE DO hotel interior design image six' },
  { src: '/images/hl-1.png', alt: 'WE DO hotel interior design image seven' },
  { src: '/images/hospitality-dubai-interiors.png', alt: 'WE DO hospitality interior design image eight' },
];

const HOTEL_TYPES = [
  {
    title: 'Luxury & Five-Star Hotels',
    description:
      'Detailed, premium guest-facing interiors designed to support a refined arrival, stay and hospitality experience.',
  },
  {
    title: 'Boutique & Lifestyle Hotels',
    description:
      'Distinctive environments shaped around a property\'s character, from intimate lounges to memorable guest rooms.',
  },
  {
    title: 'Business Hotels',
    description:
      'Efficient accommodation, reception and meeting environments developed around the needs of modern business travellers.',
  },
  {
    title: 'Resorts & Destination Properties',
    description:
      'Relaxed hospitality concepts that connect reception areas, guest accommodation and shared leisure spaces.',
  },
  {
    title: 'Reception & Public Areas',
    description:
      'Welcoming lobbies, concierge points and waiting spaces with practical circulation and coordinated design details.',
  },
  {
    title: 'Guest Rooms & Suites',
    description:
      'Comfortable, functional sleeping and living spaces with tailored lighting, furniture and material specifications.',
  },
  {
    title: 'Hotel Dining & Social Spaces',
    description:
      'Restaurants, bars, lounges and other social settings that reflect the dining concept and guest experience.',
  },
  {
    title: 'Spas & Wellness Areas',
    description:
      'Calm, private wellness settings with appropriate finishes, ambient lighting and thoughtful spatial planning.',
  },
];

const HOTEL_PROCESS = [
  {
    title: 'Consultation & Briefing',
    description:
      'We discuss your hotel brand, operating needs, guest profile and market positioning to establish a clear project brief.',
  },
  {
    title: 'Concept Development',
    description:
      'Our team prepares layouts, mood boards, materials and a visual design direction that supports the hospitality concept.',
  },
  {
    title: 'Design Detailing & Approvals',
    description:
      'We develop detailed drawings, FF&E selections and visualisations, with relevant approval coordination according to the project scope.',
  },
  {
    title: 'Fit-Out & Procurement',
    description:
      'We coordinate agreed site works, finishes, furniture sourcing and installation, supported by project supervision.',
  },
  {
    title: 'Handover & Aftercare',
    description:
      'Completed spaces are reviewed against the agreed design and quality requirements before handover and applicable aftercare.',
  },
];

// General hotel-specific FAQs added because no FAQ section was in the source.
// Do not promise fixed prices, timelines, permits or guaranteed outcomes.
const HOTEL_FAQS = [
  {
    q: 'What hotel interior design services does WE DO offer in Dubai?',
    a: 'Our services can cover hotel concept design, space planning, guest room and public-area interiors, detailed design, furniture and finishes, fit-out coordination and handover. The exact deliverables depend on the project brief and agreed scope.',
  },
  {
    q: 'Do you design luxury hotels, boutique hotels and resorts?',
    a: 'We develop hospitality design solutions for luxury hotels, boutique properties, business hotels and resort concepts. Each approach is tailored to the property\'s brand, guest profile and operating requirements.',
  },
  {
    q: 'Can WE DO design hotel lobbies, rooms, restaurants and spa areas?',
    a: 'Yes. Our hotel interior design scope can include reception and lobby areas, guest rooms and suites, bathrooms, restaurants, bars, lounges, spas and other guest facilities.',
  },
  {
    q: 'Do you provide turnkey hotel fit-out services?',
    a: 'We can coordinate design and fit-out activities from initial concepts through finishes, furniture procurement and installation to project handover, depending on the agreed contract and scope.',
  },
  {
    q: 'How long does hotel interior design and fit-out take in Dubai?',
    a: 'The duration varies significantly with the number of rooms, project scale, renovation or new-build scope, material lead times and any approvals. A schedule can be developed after the initial brief and site review.',
  },
  {
    q: 'Are approvals required for hotel interior fit-out in Dubai?',
    a: 'Approvals depend on the property, location and works involved. Building, developer, municipality, fire-safety and other requirements may apply. The responsible parties and approvals process should be confirmed for each project.',
  },
  {
    q: 'Can you combine modern luxury with Arabic-inspired hotel design?',
    a: 'Yes. A hospitality concept can combine contemporary finishes, locally inspired architectural details, materials and lighting while remaining aligned with the hotel\'s brand identity.',
  },
  {
    q: 'How can I request a hotel interior design quotation?',
    a: 'Contact our team with your hotel location, approximate size, type of property, required areas and anticipated scope. We can then discuss a suitable design and fit-out proposal.',
  },
];

/* ======================================================================
 * SHARED GET IN TOUCH STRIP - USED TWICE AS IN REFERENCE
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
 * 01 - INTRO TEXT + VIDEO
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
                Hotel Interior Design &amp; Fit-Out Services in Dubai
              </h2>
              <p className="font-play text-base leading-7 text-white [text-align:justify]">
                At <strong>WE DO Interior Design &amp; Fitout</strong>, we create
                tailored hospitality environments for hotels and resorts in
                Dubai. From luxury hotel interiors and boutique properties to
                business hotels and guest accommodation, our design approach
                balances brand identity, guest comfort and operational needs.
                We combine creative concepts, thoughtful space planning and
                technical coordination to shape distinctive interiors that
                feel welcoming and function efficiently.
              </p>
              <p className="mt-4 font-play text-base leading-7 text-white [text-align:justify]">
                Our work can cover lobby and reception spaces, guest rooms,
                restaurants, wellness areas and complete hotel fit-out.
                Each solution is tailored to the project brief and the
                standards expected of contemporary hospitality spaces in Dubai.
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
                Explore Hotel Interior Design in Dubai
              </h2>
              <div
                className="relative w-full overflow-hidden rounded-lg border-2 border-[#caa193] bg-black"
                style={{
                  aspectRatio: LAYOUT.intro.videoAspectRatio,
                  marginTop: LAYOUT.intro.videoTopSpacing,
                }}
              >
                {!videoLoaded ? (
                  <button
                    type="button"
                    onClick={() => setVideoLoaded(true)}
                    aria-label="Play WE DO hotel interior design video"
                    className="group relative block h-full w-full cursor-pointer overflow-hidden"
                  >
                    <Image
                      src={HOTEL_VIDEO_THUMBNAIL}
                      alt="Hotel interior design video preview from WE DO"
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
                    src={`https://www.youtube-nocookie.com/embed/${HOTEL_YOUTUBE_VIDEO_ID}?autoplay=1&playsinline=1&rel=0`}
                    title="WE DO Hotel Interior Design & Fitout Dubai"
                    className="absolute inset-0 h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
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
 * 02 - CLICKABLE HOTEL PROJECT GRID - FOUR ACROSS DESKTOP, NO SLIDER
 * ====================================================================== */
function ProjectGrid() {
  return (
    <section
      aria-labelledby="hotel-projects-heading"
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
          id="hotel-projects-heading"
          className="mb-10 text-center font-conthrax text-sm uppercase tracking-widest text-[#caa193] sm:text-xl md:text-2xl"
        >
          Hotel Interior Design &amp; Fit-Out Showcase in Dubai
        </h2>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          style={{ gap: LAYOUT.projects.gap }}
        >
          {HOTEL_SHOWCASE.map((item) => (
            <Link
              key={item.image}
              href={item.link || '#'}
              onClick={(event) => {
                // Don't jump to the top of the page while the URL is pending.
                // Add a real link in HOTEL_SHOWCASE; no further JSX edits needed.
                if (!item.link) event.preventDefault();
              }}
              aria-label={`View ${item.title}`}
              className="group relative block w-full cursor-pointer overflow-hidden rounded-sm bg-zinc-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#caa193]"
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
 * 04 - HOTEL AREAS: FOUR IMAGE + INFO CARDS
 * ====================================================================== */
function HotelAreaCards() {
  return (
    <section
      className="bg-black text-white"
      aria-labelledby="hotel-areas-heading"
      style={{
        paddingTop: LAYOUT.workspaces.topPadding,
        paddingBottom: LAYOUT.workspaces.bottomPadding,
        paddingLeft: LAYOUT.workspaces.sidePadding,
        paddingRight: LAYOUT.workspaces.sidePadding,
      }}
    >
      <div className="mx-auto" style={{ maxWidth: LAYOUT.workspaces.maxWidth }}>
        <h2 id="hotel-areas-heading" className="sr-only">
          Hotel Interior Spaces We Design in Dubai
        </h2>
        <p
          className="mx-auto mb-10 text-center font-conthrax text-sm leading-7 text-white sm:text-base sm:leading-8"
          style={{ maxWidth: LAYOUT.workspaces.introMaxWidth }}
        >
          Thoughtful hotel interior design extends beyond guest rooms.
          WE DO considers the complete hospitality experience, from arrival
          and accommodation to dining, leisure and wellness spaces.
        </p>
        <div
          className="grid grid-cols-1 items-stretch sm:grid-cols-2 lg:grid-cols-4"
          style={{ gap: LAYOUT.workspaces.gap }}
        >
          {HOTEL_AREAS.map((area) => (
            <article key={area.title} className="group flex h-full min-w-0 flex-col">
              <div
                className="relative w-full overflow-hidden bg-zinc-900"
                style={{ aspectRatio: LAYOUT.workspaces.aspectRatio }}
              >
                <Image
                  src={area.image}
                  alt={`Hotel interior illustration for ${area.title}`}
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
 * 05 - HOTEL TYPES + DUBAI HOSPITALITY LOCATIONS
 * ====================================================================== */
function HotelTypes() {
  return (
    <section
      className="bg-[#111111] px-5 pb-9 pt-10 text-white"
      aria-labelledby="hotel-types-heading"
    >
      <div className="mx-auto" style={{ maxWidth: LAYOUT.types.maxWidth }}>
        <h2 id="hotel-types-heading" className="sr-only">
          Types of Hotel Interiors We Design in Dubai
        </h2>
        <p className="mx-auto mb-10 max-w-4xl text-center font-conthrax text-md leading-7 text-[#caa193] sm:text-lg">
          Hospitality Interiors Tailored to Every Hotel Concept
        </p>
        <div className="grid grid-cols-1 gap-x-16 gap-y-7 font-play text-sm leading-7 text-white sm:text-base md:grid-cols-2">
          <div className="space-y-6">
            {HOTEL_TYPES.slice(0, 4).map(({ title, description }) => (
              <div key={title}>
                <h3 className="mb-1 font-play font-bold uppercase text-[#caa193]">{title} -</h3>
                <p>{description}</p>
              </div>
            ))}
          </div>
          <div className="space-y-6">
            {HOTEL_TYPES.slice(4).map(({ title, description }) => (
              <div key={title}>
                <h3 className="mb-1 font-play font-bold uppercase text-[#caa193]">{title} -</h3>
                <p>{description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 rounded-r-lg border-l-4 border-[#caa193] bg-zinc-900/50 p-6">
          <p className="font-play text-sm italic leading-relaxed text-white sm:text-base">
            <strong className="not-italic text-[#caa193]">Hotel Design in Dubai - </strong>
            Hospitality properties have different guest profiles and spatial needs
            across areas such as <strong>Downtown Dubai, Dubai Marina, Palm Jumeirah,
            Jumeirah Beach Residence and Business Bay</strong>. Our approach is
            tailored to the property, brand and project brief rather than a
            one-size-fits-all design formula.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ======================================================================
 * 06 - RELATED HOTEL DESIGN SERVICES: 4x2 GRID / MOBILE CAROUSEL
 * ====================================================================== */
function RelatedServices() {
  const autoplay = useMemo(() => Autoplay({ delay: 3000, stopOnInteraction: false }), []);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' }, [autoplay]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);

  return (
    <section
      className="bg-[#111111] px-4 pb-5 pt-8 sm:px-6"
      aria-labelledby="hotel-related-services-heading"
    >
      <div className="mx-auto" style={{ maxWidth: LAYOUT.serviceGallery.maxWidth }}>
        <h2
          id="hotel-related-services-heading"
          className="mb-7 text-center font-conthrax text-sm uppercase tracking-widest text-[#caa193] sm:text-lg md:text-xl"
        >
          WE DO Hotel Interior Design Related Services
        </h2>
        <div
          className="mb-6 hidden grid-cols-4 lg:grid"
          style={{ gap: LAYOUT.serviceGallery.gap }}
        >
          {HOTEL_SERVICE_IMAGES.map(({ src, alt }) => (
            <div key={src} className="relative aspect-video overflow-hidden bg-zinc-900">
              <Image src={src} alt={alt} fill sizes="25vw" className="object-cover" />
            </div>
          ))}
        </div>
        <div className="mb-6 lg:hidden">
          <div ref={emblaRef} className="overflow-hidden">
            <div className="-ml-4 flex touch-pan-y">
              {HOTEL_SERVICE_IMAGES.map(({ src, alt }) => (
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
              aria-label="Previous hotel interior design image"
              className="min-h-11 min-w-11 rounded border border-[#caa193] font-play text-xl text-white transition-colors hover:bg-[#caa193] hover:text-black"
            >
              &larr;
            </button>
            <button
              type="button"
              onClick={scrollNext}
              aria-label="Next hotel interior design image"
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
 * 08 - WHY HOTEL DESIGN MATTERS
 * ====================================================================== */
function WhyDesignMatters() {
  return (
    <section className="bg-[#111111] px-4 pb-7 pt-5 sm:px-6">
      <div className="mx-auto max-w-[1500px] rounded bg-black px-6 py-7 text-left text-white shadow sm:px-10 sm:py-9">
        <h2 className="mb-4 font-conthrax text-md uppercase text-[#caa193] sm:text-lg">
          Why Hotel Interior Design in Dubai Matters
        </h2>
        <p className="font-play text-sm leading-7 sm:text-sm sm:leading-8">
          Dubai attracts guests with different cultures, expectations and travel
          purposes. For hotels and resorts, <strong>interior design</strong> helps
          establish the guest experience from the first impression at reception
          to the comfort of the bedroom, restaurant and wellness facilities.
          The right approach also improves wayfinding, circulation, furniture
          functionality and operational efficiency. At <strong>WE DO Interior
          Design &amp; Fitout</strong>, we aim to bring together the visual
          character of the property, practical hospitality requirements and
          the sense of comfort guests expect throughout their stay.
        </p>
      </div>
    </section>
  );
}

/* ======================================================================
 * 09 - OUR HOTEL INTERIOR DESIGN SERVICES
 * ====================================================================== */
function HotelServicesText() {
  return (
    <section className="bg-[#111111] px-4 pb-12 pt-7 text-white sm:px-6">
      <div className="mx-auto max-w-[1500px] space-y-5 font-play text-sm leading-5 sm:text-sm sm:leading-6">
        <h2 className="font-conthrax text-md uppercase tracking-widest text-[#caa193] sm:text-lg">
          Our Hotel Interior Design Services in Dubai
        </h2>
        <p>
          WE DO develops hospitality interior concepts and fit-out solutions
          around each property&apos;s brand, guest needs and technical brief.
          Our services include the following key hotel spaces and activities.
        </p>
        <p>
          <strong className="text-[#caa193]">a. Hotel Lobby &amp; Reception Design:</strong>{' '}
          First impressions are important. We plan reception desks, concierge
          areas, guest waiting spaces and circulation routes to combine a
          welcoming atmosphere with practical everyday operations.
        </p>
        <p>
          <strong className="text-[#caa193]">b. Hotel Room &amp; Bathroom Interior Design:</strong>{' '}
          Our guest accommodation concepts bring together comfortable layouts,
          coordinated finishes, storage, bathroom functionality and suitable
          lighting, with the needs of the property and its guests in mind.
        </p>
        <p>
          <strong className="text-[#caa193]">c. Hotel Restaurants, Bars &amp; Dining Spaces:</strong>{' '}
          From relaxed dining settings to more formal restaurants and lounges,
          we create spaces that connect food-and-beverage operations with
          ambience, material choices and the guest journey.
        </p>
        <p>
          <strong className="text-[#caa193]">d. Spa &amp; Wellness Centre Design:</strong>{' '}
          Our approach to wellness interiors considers privacy, relaxation,
          calming materials, lighting and the flow between treatment and
          circulation spaces.
        </p>
        <p>
          <strong className="text-[#caa193]">e. Turnkey Hotel Interior Fit-Out:</strong>{' '}
          Depending on the agreed scope, we coordinate concept development,
          procurement, detailed design, installation and site supervision,
          providing a joined-up approach to hotel interior fit-out in Dubai.
        </p>
      </div>
    </section>
  );
}

/* ======================================================================
 * 10 - HOTEL DESIGN TRENDS & PROCESS: PHOTO ON RIGHT
 * ====================================================================== */
function TrendsAndProcess() {
  return (
    <section className="bg-[#111111] px-4 pb-14 pt-10 text-white sm:px-6">
      <div className="mx-auto grid max-w-[1800px] grid-cols-1 items-center gap-10 lg:grid-cols-2">
        <div className="min-w-0 space-y-6 font-play text-sm leading-5 sm:text-sm sm:leading-6">
          <h2 className="font-conthrax text-md uppercase text-[#caa193] sm:text-lg">
            Hotel Interior Design Trends in Dubai
          </h2>
          <p>
            Hospitality interiors can combine contemporary luxury with
            <strong> modern Arabic-inspired details</strong>, natural textures,
            carefully chosen materials and comfortable furnishings. Our design
            decisions are shaped by the hotel brand and the guest experience,
            with attention to responsible material choices and lasting
            functionality rather than trends alone.
          </p>
          <h2 className="pt-2 font-conthrax text-base uppercase text-[#caa193] sm:text-md">
            Our Hotel Interior Design Process
          </h2>
          <p>
            We follow a coordinated approach from the initial hospitality brief
            to fit-out and handover:
          </p>
          <ol className="list-decimal space-y-3 pl-5 marker:text-[#caa193]">
            {HOTEL_PROCESS.map(({ title, description }) => (
              <li key={title}>
                <h3 className="font-play font-bold text-[#caa193]">{title}</h3>
                <p className="text-white">{description}</p>
              </li>
            ))}
          </ol>
        </div>
        <div className="overflow-hidden rounded-lg shadow-md">
          <Image
            src="/images/hospitality-dubai-interiors.png"
            alt="Hotel hospitality interior design by WE DO in Dubai"
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
 * 11 - HOTEL FIT-OUT CONSIDERATIONS + WHY WE DO: PHOTO ON LEFT
 * ====================================================================== */
function RegulationsAndWhyWeDo() {
  return (
    <section className="bg-[#111111] px-4 pb-14 pt-5 text-white sm:px-6">
      <div className="mx-auto grid max-w-[1800px] grid-cols-1 items-center gap-10 lg:grid-cols-2">
        <div className="overflow-hidden rounded-lg shadow-md">
          <Image
            src="/images/Hotel Interior Design company in Dubai.png"
            alt="Contemporary hotel interior design reference in Dubai"
            width={1200}
            height={800}
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="h-auto w-full object-cover"
          />
        </div>
        <div className="min-w-0 space-y-6 font-play text-sm leading-5 sm:text-sm sm:leading-6">
          <h2 className="font-conthrax text-md uppercase text-[#caa193] sm:text-lg">
            Hotel Interior Fit-Out Requirements in Dubai
          </h2>
          <p>
            Hotel projects require careful technical planning and coordination
            with property stakeholders. Depending on the location, nature of
            the work and applicable rules, requirements may include building
            permissions, fire and life-safety considerations, MEP coordination
            and relevant authority approvals. We address these matters during
            planning and coordinate the responsibilities that fall within the
            agreed <Link href="/commercial-interior-fit-out" className="font-bold text-[#caa193] hover:underline">commercial fit-out</Link> scope.
          </p>
          <h2 className="pt-2 font-conthrax text-md text-[#caa193] sm:text-md">
            Why Choose WE DO Interior Design &amp; Fitout for Your Hotel Project
          </h2>
          <p>
            WE DO brings together creative design thinking, practical space
            planning and the coordination needed for hospitality interiors.
            Whether the project involves a boutique hotel, business property
            or resort concept, we aim to align brand identity, guest comfort
            and operational efficiency through a single design direction.
          </p>
          <p>
            Our focus covers the details that make hotel interiors distinctive,
            including reception spaces, guest accommodation, dining environments
            and wellness areas. With consideration for contemporary design and
            locally inspired character, we develop tailored solutions for the
            requirements of each property.
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
      aria-labelledby="hotel-faq-heading"
    >
      <div className="mx-auto max-w-[1500px]">
        <h2
          id="hotel-faq-heading"
          className="mb-10 text-center font-conthrax text-lg uppercase text-[#caa193] sm:text-xl"
        >
          Frequently Asked Questions (FAQs)
        </h2>
        <div className="mx-auto max-w-4xl space-y-4">
          {HOTEL_FAQS.map((faq, index) => {
            const expanded = openFaq === index;
            const panelId = `hotel-faq-answer-${index}`;
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
                    <span aria-hidden="true">{expanded ? '-' : '+'}</span>
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
 * 13 - FINAL CALL TO ACTION - DO NOT PLACE ANYTHING BELOW THIS
 * ====================================================================== */
function FinalCallToAction() {
  return (
    <section
      className="bg-[#111111] px-4 pt-2 pb-12 sm:px-6 sm:pb-16"
      aria-labelledby="hotel-final-cta"
    >
      <div className="mx-auto max-w-[1280px] rounded-xl border-2 border-[#caa193] bg-black px-5 py-10 text-center sm:px-8 sm:py-14 lg:px-12">
        <h2
          id="hotel-final-cta"
          className="mb-6 font-conthrax text-sm uppercase text-[#caa193] sm:text-lg"
        >
          Call to Action
        </h2>
        <p className="mx-auto mb-8 w-full max-w-[1350px] font-play text-xs leading-7 text-white sm:text-sm sm:leading-8">
          Are you planning a <strong>luxury hotel interior design project in Dubai</strong>,
          a boutique hotel renovation or a complete hospitality fit-out?
          <strong> WE DO Interior Design &amp; Fitout</strong> can help shape
          inviting environments that express your hotel&apos;s identity, enhance
          guest comfort and support day-to-day operations. From reception areas
          and guest rooms to restaurants and wellness interiors, discuss your
          project requirements with our team and explore a tailored design
          and fit-out proposal.
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
 * ONE DEFAULT EXPORT FOR EVERY SECTION BELOW THE HERO
 * ====================================================================== */
export default function Body() {
  return (
    <div className="bg-[#111111] text-white">
      <IntroVideo />
      <ProjectGrid />
      <ContactStrip />
      <HotelAreaCards />
      <HotelTypes />
      <RelatedServices />
      <ContactStrip />
      <WhyDesignMatters />
      <HotelServicesText />
      <TrendsAndProcess />
      <RegulationsAndWhyWeDo />
      <FrequentlyAskedQuestions />
      <FinalCallToAction />
    </div>
  );
}
