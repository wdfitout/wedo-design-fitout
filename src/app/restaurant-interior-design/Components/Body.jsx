'use client';

import { useCallback, useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { FaPlay } from 'react-icons/fa';

/**
 * WE DO - RESTAURANT INTERIOR DESIGN DUBAI
 * Standard service template: all sections below Hero.jsx, in this order:
 * 01 Intro text + video
 * 02 Projects grid (four columns on desktop; never a project carousel)
 * 03 Get In Touch strip
 * 04 Four restaurant-space image/info cards
 * 05 Restaurant types + Dubai locations
 * 06 Related services gallery (desktop grid / mobile carousel)
 * 07 Get In Touch strip
 * 08 Why restaurant design matters
 * 09 Our restaurant design and fit-out services
 * 10 Restaurant trends + design process (photo on right)
 * 11 Regulations + why choose WE DO (photo on left)
 * 12 Interactive FAQs
 * 13 Final CTA - ALWAYS THE LAST SECTION
 *
 * Palette: #000000 | #111111 | #caa193 | #f5ede5
 * Fonts: font-conthrax for headings, font-play for body text
 */

/* ======================================================================
 * MANUAL LAYOUT CONTROLS - KEPT CONSISTENT WITH OFFICE PAGE TEMPLATE
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
 * CONTENT - PROJECT ROUTES AND IMAGE PATHS ARE FROM THE SUPPLIED CODE
 * ====================================================================== */

// The restaurant source supplied this Instagram post (no YouTube ID).
// Click-to-load keeps the video off the page until visitors choose to open it.
// Change to a dedicated 16:9 YouTube embed when the restaurant video is available.
const RESTAURANT_INSTAGRAM_EMBED =
  'https://www.instagram.com/p/DI_9Xf5ucyP/embed/';

const RESTAURANT_PROJECTS = [
  {
    image: '/images/crazymask (7).webp',
    title: 'JBR Restaurant Interior',
    link: '/jbr-restaurant-interior',
  },
  {
    image: '/images/dtrest (2).webp',
    title: 'Downtown Dubai Restaurant',
    link: '/downtown-dubai-restaurant',
  },
  {
    image: '/images/sahelnom (5).webp',
    title: 'Business Bay Restaurant',
    link: '/business-bay-restaurant',
  },
  {
    image: '/images/piadera (9).webp',
    title: 'World Trade Center Restaurant',
    link: '/world-trade-center-restaurant',
  },
  {
    image: '/images/xaima (10).webp',
    title: 'Dubai Restaurant Interior Fit-Out',
    link: '/dubai-restaurant-interior-fit-out',
  },
  {
    image: '/images/fujiya (6).webp',
    title: 'Dubai Mall Restaurant Interior',
    link: '/dubai-mall-restaurant',
  },
];

const RESTAURANT_SPACES = [
  {
    image: '/images/dubai-interior-design-company-restaurant-counter.webp',
    title: 'Reception & Host Counters',
    description:
      'Welcoming entry and reception spaces with considered guest circulation, refined joinery and a clear first impression of your restaurant concept.',
  },
  {
    image: '/images/ht-2.png',
    title: 'Main Dining & Seating Areas',
    description:
      'Thoughtful table layouts, comfortable seating, durable finishes and ambient lighting help create dining rooms suited to your service style.',
  },
  {
    image: '/images/ht-3.png',
    title: 'Cafes & Casual Dining',
    description:
      'Inviting interiors and efficient layouts balance daily operations, customer comfort and a recognisable identity for cafes and informal dining.',
  },
  {
    image: '/images/ht-4.png',
    title: 'Lounges & Social Spaces',
    description:
      'Flexible seating, layered lighting and tailored materials support distinctive restaurant lounges and memorable social experiences.',
  },
];

const RESTAURANT_SERVICE_IMAGES = [
  { src: '/images/ht-4.png', alt: 'WE DO restaurant interior design reference image one' },
  { src: '/images/ht-5.png', alt: 'WE DO restaurant interior design reference image two' },
  { src: '/images/ht-6.png', alt: 'WE DO restaurant interior design reference image three' },
  { src: '/images/ht-1.png', alt: 'WE DO restaurant interior design reference image four' },
  { src: '/images/ht-2.png', alt: 'WE DO restaurant interior design reference image five' },
  { src: '/images/ht-3.png', alt: 'WE DO restaurant interior design reference image six' },
  { src: '/images/ht-8.png', alt: 'WE DO restaurant interior design reference image seven' },
  { src: '/images/ht-12.png', alt: 'WE DO restaurant interior design reference image eight' },
];

const RESTAURANT_TYPES = [
  {
    title: 'Fine Dining Restaurants',
    description:
      'High-end layouts, immersive ambience and premium finishes that reflect elegance and exclusivity.',
  },
  {
    title: 'Cafes & Coffee Shops',
    description:
      'Warm, inviting spaces designed to balance comfort, creativity and the practical needs of frequent visitors.',
  },
  {
    title: 'Rooftop Lounges & Beachfront Venues',
    description:
      'Open-air concepts that make the most of the setting, with considered materials, seating and ambient lighting.',
  },
  {
    title: 'Fast Casual & Quick-Service Restaurants',
    description:
      'Efficient customer flow, brand-led design and hard-wearing materials suited to busy daily operations.',
  },
  {
    title: 'Themed & Concept Restaurants',
    description:
      'Distinctive interiors, from vintage-inspired to contemporary, that help bring a unique dining story to life.',
  },
];

const RESTAURANT_PROCESS = [
  {
    title: 'Concept Consultation',
    description:
      'We explore your brand story, cuisine, audience and business goals to establish the direction of your restaurant concept.',
  },
  {
    title: 'Interior Design Development',
    description:
      'Our team prepares space plans, mood boards and 3D visualisations that balance dining ambience with functional requirements.',
  },
  {
    title: 'Restaurant Fit-Out Execution',
    description:
      'We coordinate construction, MEP requirements, fitted elements and custom furniture as the approved design is brought to life.',
  },
  {
    title: 'Styling & Final Handover',
    description:
      'Following final finishes and quality checks, we prepare the completed restaurant for the next stage of operation.',
  },
];

const RESTAURANT_FAQS = [
  {
    q: 'What is included in restaurant interior design and fit-out services?',
    a: 'A restaurant project can include concept planning, dining and service layouts, mood boards, 3D visualisation, finishes, fit-out execution, MEP coordination, custom furniture and final styling. The exact scope is agreed for each venue.',
  },
  {
    q: 'What types of restaurants do you design in Dubai?',
    a: 'WE DO works on fine-dining concepts, cafes, coffee shops, rooftop lounges, beachfront venues, quick-service restaurants and themed dining spaces. Each layout is adapted to the brand, cuisine and guest experience.',
  },
  {
    q: 'Do you coordinate kitchen layouts and MEP works?',
    a: 'Restaurant design needs careful coordination between guest-facing spaces and back-of-house requirements. Our fit-out approach includes relevant construction and MEP coordination, with equipment and technical requirements confirmed for the project scope.',
  },
  {
    q: 'Will my restaurant need approvals before fit-out work?',
    a: 'Approvals vary according to the building, restaurant operation and proposed works. Landlord or building permissions and relevant authority requirements should be checked before construction begins. Our team can help coordinate applicable fit-out approvals.',
  },
  {
    q: 'How long does a restaurant fit-out in Dubai take?',
    a: 'The schedule depends on restaurant size, design complexity, kitchen requirements, custom furniture, material availability and applicable approvals. We establish a project-specific programme after reviewing the site and scope.',
  },
  {
    q: 'How much does restaurant interior design cost in Dubai?',
    a: 'The budget depends on floor area, design scope, finishes, kitchen and MEP requirements, bespoke elements and level of fit-out. Contact WE DO for a proposal based on your restaurant concept and site.',
  },
  {
    q: 'Do you manage the full process from concept to handover?',
    a: 'WE DO offers a coordinated design-and-fit-out approach covering concept consultation, design development, fit-out execution and final styling, based on the services included in the agreed contract.',
  },
  {
    q: 'Which parts of Dubai do you cover for restaurant projects?',
    a: 'The supplied restaurant portfolio and service description cover JBR, Downtown Dubai, Dubai Marina, Palm Jumeirah, Business Bay, World Trade Centre and other Dubai commercial and hospitality locations.',
  },
];

/* ======================================================================
 * SHARED REUSABLE CONTACT STRIP - USED TWICE
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
 * 01 - INTRO TEXT + CLICK-TO-LOAD VIDEO
 * ====================================================================== */
function IntroVideo() {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <section
      aria-labelledby="restaurant-intro-heading"
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
              <h2
                id="restaurant-intro-heading"
                className="mb-3 py-2 font-conthrax text-sm tracking-widest text-[#caa193] sm:text-xl"
              >
                Restaurant Interior Design &amp; Fit-Out Services in Dubai
              </h2>
              <p className="font-play text-base leading-7 text-white [text-align:justify]">
                <strong>WE DO Interior Design &amp; Fitout</strong> provides bespoke{' '}
                <Link
                  href="/restaurant-projects"
                  className="font-semibold text-[#caa193] hover:underline"
                >
                  restaurant interior design
                </Link>{' '}
                and fit-out services for Dubai&apos;s food and beverage industry.
                From chic cafes in Jumeirah Beach Residence to fine-dining
                venues in Downtown Dubai and contemporary lounges overlooking
                Dubai Marina, we create distinctive dining environments for
                each concept. Our restaurant fit-out services bring together
                brand identity, guest comfort and operational needs, whether
                you are planning a venue in JBR, Palm Jumeirah, Business Bay
                or another part of Dubai.
              </p>
            </div>

            <div
              className="mt-auto flex justify-start"
              style={{ paddingTop: LAYOUT.intro.ctaTopSpacing }}
            >
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
                Get Best Restaurant Design Dubai
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
                    aria-label="Load WE DO restaurant interior design Instagram video"
                    className="group relative block h-full w-full cursor-pointer overflow-hidden"
                  >
                    <Image
                      src="/images/xaima (8).webp"
                      alt="WE DO restaurant interior design video preview"
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
                    src={RESTAURANT_INSTAGRAM_EMBED}
                    title="WE DO restaurant interior design video on Instagram"
                    className="absolute inset-0 h-full w-full bg-white"
                    loading="lazy"
                    allow="autoplay; encrypted-media; picture-in-picture"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                )}
              </div>
              <p className="mt-2 font-play text-xs text-white/70">
                Video not displaying?{' '}
                <a
                  href="https://www.instagram.com/p/DI_9Xf5ucyP/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#caa193] underline underline-offset-2 hover:text-[#f5ede5]"
                >
                  View it on Instagram
                </a>
                .
              </p>
            </div>

            <div
              className="mt-auto flex justify-start"
              style={{ paddingTop: LAYOUT.intro.ctaTopSpacing }}
            >
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
 * 02 - RESTAURANT PROJECTS: FOUR CARDS PER ROW ON DESKTOP, NO SLIDER
 * ====================================================================== */
function ProjectGrid() {
  return (
    <section
      aria-labelledby="restaurant-projects-heading"
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
          id="restaurant-projects-heading"
          className="mb-10 text-center font-conthrax text-sm uppercase tracking-widest text-[#caa193] sm:text-xl md:text-2xl"
        >
          Our Restaurant Interior Design &amp; Fit-Out Projects in Dubai
        </h2>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          style={{ gap: LAYOUT.projects.gap }}
        >
          {RESTAURANT_PROJECTS.map((project) => (
            <Link
              key={project.link}
              href={project.link}
              aria-label={`View ${project.title}`}
              className="group relative block w-full overflow-hidden rounded-sm bg-zinc-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#caa193]"
              style={{ aspectRatio: LAYOUT.projects.aspectRatio }}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105 group-focus-visible:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-100 transition-opacity duration-300 lg:opacity-0 lg:group-hover:opacity-100 lg:group-focus-visible:opacity-100">
                <h3 className="px-5 text-center font-conthrax text-xs uppercase leading-relaxed tracking-wide text-white sm:text-sm xl:text-base">
                  {project.title}
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
 * 04 - FOUR RESTAURANT SPACE IMAGE + INFORMATION CARDS
 * ====================================================================== */
function RestaurantSpaceCards() {
  return (
    <section
      aria-labelledby="restaurant-spaces-heading"
      className="bg-black text-white"
      style={{
        paddingTop: LAYOUT.workspaces.topPadding,
        paddingBottom: LAYOUT.workspaces.bottomPadding,
        paddingLeft: LAYOUT.workspaces.sidePadding,
        paddingRight: LAYOUT.workspaces.sidePadding,
      }}
    >
      <div className="mx-auto" style={{ maxWidth: LAYOUT.workspaces.maxWidth }}>
        <h2 id="restaurant-spaces-heading" className="sr-only">
          Restaurant Spaces We Design in Dubai
        </h2>
        <p
          className="mx-auto mb-10 text-center font-conthrax text-sm leading-7 text-white sm:text-base sm:leading-8"
          style={{ maxWidth: LAYOUT.workspaces.introMaxWidth }}
        >
          Every part of a restaurant contributes to the guest experience.
          WE DO Interior Design &amp; Fitout plans welcoming reception counters,
          dining rooms, cafes and lounge areas that balance brand identity,
          comfort and everyday service requirements.
        </p>
        <div
          className="grid grid-cols-1 items-stretch sm:grid-cols-2 lg:grid-cols-4"
          style={{ gap: LAYOUT.workspaces.gap }}
        >
          {RESTAURANT_SPACES.map((space) => (
            <article key={space.title} className="group flex h-full min-w-0 flex-col">
              <div
                className="relative w-full overflow-hidden bg-zinc-900"
                style={{ aspectRatio: LAYOUT.workspaces.aspectRatio }}
              >
                <Image
                  src={space.image}
                  alt={space.title}
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
                  {space.title}
                </h3>
                <div className="my-4 h-px w-12 bg-[#caa193]" aria-hidden="true" />
                <p className="font-play text-sm leading-6 text-[#4b4542]">
                  {space.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ======================================================================
 * 05 - RESTAURANT TYPES + AREAS SERVED
 * ====================================================================== */
function RestaurantTypes() {
  return (
    <section
      className="bg-[#111111] px-5 pb-9 pt-10 text-white"
      aria-labelledby="restaurant-types-heading"
    >
      <div className="mx-auto" style={{ maxWidth: LAYOUT.types.maxWidth }}>
        <h2 id="restaurant-types-heading" className="sr-only">
          Types of Restaurant Interior Design We Specialise In
        </h2>
        <p className="mx-auto mb-10 max-w-4xl text-center font-conthrax text-md leading-7 text-[#caa193] sm:text-lg">
          Types of Restaurant Interiors We Design in Dubai
        </p>
        <div className="grid grid-cols-1 gap-x-16 gap-y-7 font-play text-sm leading-7 text-white sm:text-base md:grid-cols-2">
          <div className="space-y-6">
            {RESTAURANT_TYPES.slice(0, 3).map(({ title, description }) => (
              <div key={title}>
                <h3 className="mb-1 font-play font-bold uppercase text-[#caa193]">
                  {title} –
                </h3>
                <p>{description}</p>
              </div>
            ))}
          </div>
          <div className="space-y-6">
            {RESTAURANT_TYPES.slice(3).map(({ title, description }) => (
              <div key={title}>
                <h3 className="mb-1 font-play font-bold uppercase text-[#caa193]">
                  {title} –
                </h3>
                <p>{description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 rounded-r-lg border-l-4 border-[#caa193] bg-zinc-900/50 p-6">
          <p className="font-play text-sm italic leading-relaxed text-white sm:text-base">
            <strong className="not-italic text-[#caa193]">
              Restaurant Interior Fit-Out in Dubai&apos;s Key Dining Districts –{' '}
            </strong>
            Our restaurant projects and service areas include{' '}
            <strong>JBR, Downtown Dubai, Dubai Marina, Business Bay, and Palm Jumeirah</strong>,
            alongside destinations such as{' '}
            <strong>World Trade Centre, DIFC, Jumeirah Bay, Al Safa, Barsha Heights</strong>{' '}
            and <strong>Dubai Creek Harbour</strong>.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ======================================================================
 * 06 - RELATED RESTAURANT SERVICES: 4x2 DESKTOP / MOBILE CAROUSEL
 * ====================================================================== */
function RelatedServices() {
  const autoplay = useMemo(
    () => Autoplay({ delay: 3000, stopOnInteraction: false }),
    [],
  );
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'start' },
    [autoplay],
  );
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);

  return (
    <section
      className="bg-[#111111] px-4 pb-5 pt-8 sm:px-6"
      aria-labelledby="restaurant-related-services-heading"
    >
      <div className="mx-auto" style={{ maxWidth: LAYOUT.serviceGallery.maxWidth }}>
        <h2
          id="restaurant-related-services-heading"
          className="mb-7 text-center font-conthrax text-sm uppercase tracking-widest text-[#caa193] sm:text-lg md:text-xl"
        >
          We Do Restaurant Interior Design Related Services
        </h2>

        <div
          className="mb-6 hidden grid-cols-4 lg:grid"
          style={{ gap: LAYOUT.serviceGallery.gap }}
        >
          {RESTAURANT_SERVICE_IMAGES.map(({ src, alt }) => (
            <div key={src} className="relative aspect-video overflow-hidden bg-zinc-900">
              <Image src={src} alt={alt} fill sizes="25vw" className="object-cover" />
            </div>
          ))}
        </div>

        <div className="mb-6 lg:hidden">
          <div ref={emblaRef} className="overflow-hidden">
            <div className="-ml-4 flex touch-pan-y">
              {RESTAURANT_SERVICE_IMAGES.map(({ src, alt }) => (
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
              aria-label="Previous restaurant service image"
              className="min-h-11 min-w-11 rounded border border-[#caa193] font-play text-xl text-white transition-colors hover:bg-[#caa193] hover:text-black"
            >
              ←
            </button>
            <button
              type="button"
              onClick={scrollNext}
              aria-label="Next restaurant service image"
              className="min-h-11 min-w-11 rounded border border-[#caa193] font-play text-xl text-white transition-colors hover:bg-[#caa193] hover:text-black"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ======================================================================
 * 08 - WHY RESTAURANT DESIGN MATTERS
 * ====================================================================== */
function WhyDesignMatters() {
  return (
    <section className="bg-[#111111] px-4 pb-7 pt-5 sm:px-6" aria-labelledby="restaurant-why-heading">
      <div className="mx-auto max-w-[1500px] rounded bg-black px-6 py-7 text-left text-white shadow sm:px-10 sm:py-9">
        <h2
          id="restaurant-why-heading"
          className="mb-4 font-conthrax text-md uppercase text-[#caa193] sm:text-lg"
        >
          Why Restaurant Interior Design Matters in Dubai
        </h2>
        <p className="font-play text-sm leading-7 sm:text-sm sm:leading-8">
          In Dubai&apos;s food and beverage industry, a well-designed restaurant
          helps express the brand, shape a memorable guest experience and support
          repeat visits. Comfortable seating, well-planned circulation and an
          inviting atmosphere also make a difference to staff workflow and
          day-to-day service. The goal of{' '}
          <strong>restaurant interior design in Dubai</strong> is more than a
          beautiful dining room: it is to bring customer comfort, operational
          function and a distinctive identity into one cohesive space. Working
          with an experienced restaurant design and fit-out team helps keep
          these priorities aligned from concept through execution.
        </p>
      </div>
    </section>
  );
}

/* ======================================================================
 * 09 - RESTAURANT DESIGN AND FIT-OUT SERVICES
 * ====================================================================== */
function RestaurantServicesText() {
  return (
    <section
      className="bg-[#111111] px-4 pb-12 pt-7 text-white sm:px-6"
      aria-labelledby="restaurant-services-heading"
    >
      <div className="mx-auto max-w-[1500px] space-y-5 font-play text-sm leading-5 sm:text-sm sm:leading-6">
        <h2
          id="restaurant-services-heading"
          className="font-conthrax text-md uppercase tracking-widest text-[#caa193] sm:text-lg"
        >
          Our Restaurant Interior Design Services in Dubai
        </h2>
        <p>
          <strong>WE DO Interior Design &amp; Fitout</strong> offers coordinated,
          turnkey restaurant solutions, combining design, sourcing and execution
          for hospitality venues across Dubai.
        </p>
        <p>
          <strong className="text-[#caa193]">a. Concept &amp; Space Planning:</strong>{' '}
          We develop layouts around your cuisine, audience and operational needs,
          taking account of seating zones, guest circulation and the way the team works.
        </p>
        <p>
          <strong className="text-[#caa193]">b. Interior Design &amp; 3D Visualisation:</strong>{' '}
          Our design team prepares mood boards, material palettes and 3D concepts
          to show how the venue can reflect the character of your brand.
        </p>
        <p>
          <strong className="text-[#caa193]">c. Restaurant Fit-Out &amp; MEP Coordination:</strong>{' '}
          We coordinate agreed site works, construction details and relevant
          mechanical, electrical and plumbing requirements for the approved concept.
        </p>
        <p>
          <strong className="text-[#caa193]">d. Furniture, Finishes &amp; Joinery:</strong>{' '}
          Tailored counters, dining furniture, durable finishes and decorative
          elements are selected to suit the service style and required level of finish.
        </p>
        <p>
          <strong className="text-[#caa193]">e. Styling &amp; Project Handover:</strong>{' '}
          We oversee final detailing, quality reviews and finishing touches so
          that the completed restaurant aligns with the agreed design direction.
        </p>
      </div>
    </section>
  );
}

/* ======================================================================
 * 10 - RESTAURANT DESIGN TRENDS & OUR PROCESS (IMAGE ON RIGHT)
 * ====================================================================== */
function TrendsAndProcess() {
  return (
    <section className="bg-[#111111] px-4 pb-14 pt-10 text-white sm:px-6">
      <div className="mx-auto grid max-w-[1800px] grid-cols-1 items-center gap-10 lg:grid-cols-2">
        <div className="min-w-0 space-y-6 font-play text-sm leading-5 sm:text-sm sm:leading-6">
          <h2 className="font-conthrax text-md uppercase text-[#caa193] sm:text-lg">
            Restaurant Interior Design Trends in Dubai
          </h2>
          <p>
            Contemporary restaurant concepts bring together atmospheric lighting,
            carefully chosen materials and layouts tailored to the dining format.
            From inviting cafes and character-led interiors to fine-dining spaces
            and open-air lounges, strong restaurant design balances a memorable
            setting with comfortable seating and efficient service flow.
          </p>
          <h2 className="pt-2 font-conthrax text-base uppercase text-[#caa193] sm:text-md">
            Our Restaurant Design Process
          </h2>
          <p>
            From concept consultation to final handover, WE DO follows a
            coordinated approach to <strong>restaurant interior design and fit-out in Dubai</strong>:
          </p>
          <ol className="list-decimal space-y-3 pl-5 marker:text-[#caa193]">
            {RESTAURANT_PROCESS.map(({ title, description }) => (
              <li key={title}>
                <h3 className="font-play font-bold text-[#caa193]">{title}</h3>
                <p className="text-white">{description}</p>
              </li>
            ))}
          </ol>
          <p>
            Our work spans boutique cafes and larger dining venues in locations
            such as JBR, Downtown Dubai, Dubai Marina and beyond.
          </p>
        </div>
        <div className="overflow-hidden rounded-lg shadow-md">
          <Image
            src="/images/ht-8.png"
            alt="Interior design and fit-out reference from WE DO restaurant portfolio"
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
 * 11 - REGULATIONS & WHY CHOOSE WE DO (IMAGE ON LEFT)
 * ====================================================================== */
function RegulationsAndWhyWeDo() {
  return (
    <section className="bg-[#111111] px-4 pb-14 pt-5 text-white sm:px-6">
      <div className="mx-auto grid max-w-[1800px] grid-cols-1 items-center gap-10 lg:grid-cols-2">
        <div className="overflow-hidden rounded-lg shadow-md">
          <Image
            src="/images/ht-12.png"
            alt="Interior fit-out reference image from WE DO Dubai restaurant projects"
            width={1200}
            height={800}
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="h-auto w-full object-cover"
          />
        </div>
        <div className="min-w-0 space-y-6 font-play text-sm leading-5 sm:text-sm sm:leading-6">
          <h2 className="font-conthrax text-md uppercase text-[#caa193] sm:text-lg">
            Restaurant Fit-Out Regulations in Dubai
          </h2>
          <p>
            Restaurant fit-out projects need to account for applicable building,
            developer and authority requirements before construction begins.
            Depending on the venue and planned works, coordination may include
            building permissions, municipality requirements and relevant DEWA
            considerations. We plan for these requirements as part of the
            restaurant design and fit-out process, based on the agreed scope.
          </p>
          <h2 className="pt-2 font-conthrax text-md text-[#caa193] sm:text-md">
            Why Choose WE DO for Your Restaurant Project
          </h2>
          <p>
            <strong>WE DO Interior Design &amp; Fitout</strong> brings concept
            development, design planning and fit-out execution together for
            restaurant and hospitality businesses in Dubai. We consider guest
            comfort, brand presentation, workflow and practical material choices
            to help create dining environments that both look distinctive and
            work effectively for daily operations.
          </p>
          <p>
            From restaurant projects in JBR, Downtown Dubai, Business Bay and
            Dubai Marina to other hospitality locations, our approach is focused
            on clear coordination, workmanship and a smooth route from concept
            to final styling.{' '}
            <Link href="/restaurant-projects" className="font-bold text-[#caa193] hover:underline">
              Explore our restaurant projects
            </Link>{' '}
            or get in touch to discuss your proposed venue.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ======================================================================
 * 12 - INTERACTIVE RESTAURANT FAQ ACCORDION
 * ====================================================================== */
function FrequentlyAskedQuestions() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <section
      aria-labelledby="restaurant-faq-heading"
      className="bg-[#111111] px-4 pb-20 pt-7 text-white sm:px-6"
    >
      <div className="mx-auto max-w-[1500px]">
        <h2
          id="restaurant-faq-heading"
          className="mb-10 text-center font-conthrax text-lg uppercase text-[#caa193] sm:text-xl"
        >
          Frequently Asked Questions (FAQs)
        </h2>
        <div className="mx-auto max-w-4xl space-y-4">
          {RESTAURANT_FAQS.map((faq, index) => {
            const expanded = openFaq === index;
            const panelId = `restaurant-faq-answer-${index}`;

            return (
              <div
                key={faq.q}
                className="overflow-hidden rounded-lg border border-[#caa193]/30"
              >
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
 * 13 - FINAL CTA - DO NOT ADD ANYTHING AFTER THIS SECTION
 * ====================================================================== */
function FinalCallToAction() {
  return (
    <section
      aria-labelledby="restaurant-final-cta"
      className="bg-[#111111] px-4 pb-12 pt-2 sm:px-6 sm:pb-16"
    >
      <div className="mx-auto max-w-[1280px] rounded-xl border-2 border-[#caa193] bg-black px-5 py-10 text-center sm:px-8 sm:py-14 lg:px-12">
        <h2
          id="restaurant-final-cta"
          className="mb-6 font-conthrax text-sm uppercase text-[#caa193] sm:text-lg"
        >
          Call to Action
        </h2>
        <p className="mx-auto mb-8 w-full max-w-[1350px] font-play text-xs leading-7 text-white sm:text-sm sm:leading-8">
          Planning a new restaurant, refreshing a cafe or developing a distinctive
          dining venue in Dubai? <strong>WE DO Interior Design &amp; Fitout</strong>{' '}
          offers <strong>restaurant interior design and fit-out services in Dubai</strong>{' '}
          focused on brand identity, guest comfort and practical operations.
          Speak with our team about your concept, site requirements and next
          steps towards a well-planned restaurant interior.
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
 * ONE DEFAULT EXPORT - ALL SECTIONS BELOW HERO, IN TEMPLATE ORDER
 * ====================================================================== */
export default function Body() {
  return (
    <div className="bg-[#111111] text-white">
      <IntroVideo />
      <ProjectGrid />
      <ContactStrip />
      <RestaurantSpaceCards />
      <RestaurantTypes />
      <RelatedServices />
      <ContactStrip />
      <WhyDesignMatters />
      <RestaurantServicesText />
      <TrendsAndProcess />
      <RegulationsAndWhyWeDo />
      <FrequentlyAskedQuestions />
      <FinalCallToAction />
    </div>
  );
}
