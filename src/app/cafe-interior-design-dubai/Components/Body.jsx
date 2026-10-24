'use client';

import { useCallback, useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { FaPlay } from 'react-icons/fa';

/**
 * WE DO - CAFE INTERIOR DESIGN DUBAI
 * The office service-page template is the design and typography standard.
 *
 * 01 Intro text + click-to-play video
 * 02 Cafe projects (four per row on desktop; not a slider)
 * 03 Get In Touch strip
 * 04 Four cafe-area image/info cards
 * 05 Cafe types + Dubai locations
 * 06 Related services images (desktop grid / mobile carousel)
 * 07 Get In Touch strip
 * 08 Why cafe interior design matters
 * 09 Our cafe design and fit-out services
 * 10 Design trends + process (image on right)
 * 11 Fit-out considerations + why WE DO (image on left)
 * 12 Interactive FAQ accordion
 * 13 Final call to action - NOTHING BELOW THIS
 *
 * Brand palette: black #000000 | charcoal #111111 | rose #caa193 | cream #f5ede5
 * Brand fonts: font-conthrax for headings | font-play for body content
 */

/* ======================================================================
 * MANUAL LAYOUT CONTROLS - MATCH OFFICE/RESTAURANT PAGE TEMPLATE
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
 * PAGE DATA - ORIGINAL PROJECT IMAGES AND INTERNAL LINKS PRESERVED
 * ====================================================================== */

// Video ID and thumbnail came from the original commented cafe video section.
const CAFE_YOUTUBE_VIDEO_ID = 'yNeCQLpYvww';
const CAFE_VIDEO_THUMBNAIL = '/images/nolen-6.webp';

// Five distinct cafe projects were supplied; do not create fictitious entries
// simply to fill a four-column row.
const CAFE_PROJECTS = [
  {
    image: '/images/lila-milano (2).webp',
    title: 'Lila Milano Al Quoz Cafe Interior',
    link: '/al-quoz-cafe-interior',
  },
  {
    image: '/images/karakna (2).webp',
    title: 'Karakna Al Safa Cafe Design',
    link: '/al-safa-cafe-design',
  },
  {
    image: '/images/undimanche (3).webp',
    title: 'Undimanche Bluewaters Cafe Interior',
    link: '/bluewaters-cafe-interior',
  },
  {
    image: '/images/vogue (7).webp',
    title: 'Vogue Downtown Cafe Design',
    link: '/downtown-cafe-design',
  },
  {
    image: '/images/allegro (3).webp',
    title: 'Allegro Business Bay Cafe Interior',
    link: '/business-bay-cafe-interior',
  },
];

// Adapted to the office template's four image + information cards.
const CAFE_SPACES = [
  {
    image: '/images/nolen-8.webp',
    title: 'Coffee Counters & Service Areas',
    description:
      'We design practical service counters, ordering points and back-counter storage to support smooth workflows and a recognisable cafe identity.',
  },
  {
    image: '/images/nolen-2.webp',
    title: 'Cafe Seating & Lounge Areas',
    description:
      'Comfortable seating, sensible table spacing and clear circulation help create welcoming spaces where customers can enjoy their visit.',
  },
  {
    image: '/images/undimanche (3).webp',
    title: 'Lighting & Cafe Ambience',
    description:
      'Layered lighting, considered colours and coordinated finishes establish the atmosphere of a cafe while supporting everyday functionality.',
  },
  {
    image: '/images/lila-milano (2).webp',
    title: 'Bespoke Furniture & Finishes',
    description:
      'Custom furniture, durable materials and detailed joinery help express a cafe brand while making the best use of available space.',
  },
];

// Original related-service images, supplemented only with images already present
// in the user's cafe page and project code to match the 4 x 2 office gallery.
const CAFE_SERVICE_IMAGES = [
  { src: '/images/nolen-2.webp', alt: 'WE DO cafe interior design reference image one' },
  { src: '/images/nolen-7.webp', alt: 'WE DO cafe interior design reference image two' },
  { src: '/images/nolen-4.webp', alt: 'WE DO cafe interior design reference image three' },
  { src: '/images/nolen-1.webp', alt: 'WE DO Bluewaters cafe interior design reference' },
  { src: '/images/karakna (2).webp', alt: 'WE DO Karakna Al Safa cafe project reference' },
  { src: '/images/vogue (7).webp', alt: 'WE DO Vogue Downtown cafe design project reference' },
  { src: '/images/allegro (3).webp', alt: 'WE DO Allegro Business Bay cafe project reference' },
  { src: '/images/nolen-8.webp', alt: 'WE DO cafe commercial fit-out image reference' },
];

const CAFE_TYPES = [
  {
    title: 'Specialty Coffee Shops',
    description:
      'Coffee-focused interiors that bring together a welcoming customer area, practical ordering counters and a distinctive brand presentation.',
  },
  {
    title: 'Boutique Cafes',
    description:
      'Characterful spaces with tailored materials, furniture and lighting that help smaller cafes create a memorable atmosphere.',
  },
  {
    title: 'Modern Minimalist Cafes',
    description:
      'Understated layouts, balanced colours and carefully chosen finishes for contemporary cafe concepts in Dubai.',
  },
  {
    title: 'Cafe & Restaurant Concepts',
    description:
      'Combined food-and-beverage venues designed with comfortable dining, efficient service and coordinated kitchen and seating zones.',
  },
  {
    title: 'Branded Cafe Chains',
    description:
      'Repeatable design elements and practical layouts that help maintain a consistent customer experience across multiple locations.',
  },
  {
    title: 'Hospitality & Lounge Cafes',
    description:
      'Relaxed hospitality spaces with comfortable seating, thoughtful ambient lighting and considered guest circulation.',
  },
  {
    title: 'Compact Coffee Counters',
    description:
      'Space-efficient service points where clear circulation, counter planning and functional storage are essential.',
  },
  {
    title: 'Community & Neighbourhood Cafes',
    description:
      'Warm, inviting interiors that encourage everyday visits, informal conversations and a strong sense of local identity.',
  },
];

const CAFE_PROCESS = [
  {
    title: 'Concept Consultation & Brand Brief',
    description:
      'We discuss your cafe concept, target customers, service format and visual identity before setting the overall design direction.',
  },
  {
    title: 'Site Review & Space Planning',
    description:
      'We assess the available area and plan customer seating, ordering points, counter functions and the flow between key cafe zones.',
  },
  {
    title: 'Mood Boards & Design Development',
    description:
      'Our designers prepare coordinated ideas for colours, materials, lighting, furniture and the overall cafe ambience.',
  },
  {
    title: 'Technical Coordination & Fit-Out',
    description:
      'We coordinate the agreed works, including relevant fit-out details, site requirements and any necessary technical interfaces.',
  },
  {
    title: 'Furniture, Finishes & Styling',
    description:
      'Bespoke counters, furniture, materials and decorative details are selected to support the approved cafe concept.',
  },
  {
    title: 'Quality Review & Final Handover',
    description:
      'We review completed works and final details against the agreed scope before preparing the space for handover.',
  },
];

// These general FAQs were drafted for the template because no original cafe
// FAQ section was supplied. Avoids invented rates, deadlines or permissions.
const CAFE_FAQS = [
  {
    q: 'What does cafe interior design and fit-out include?',
    a: 'A cafe project can include concept design, space planning, counter and seating layouts, material and lighting selection, bespoke joinery, fit-out coordination and final styling. The services provided depend on the agreed scope.',
  },
  {
    q: 'Do you design coffee shops and small cafes in Dubai?',
    a: 'Yes. WE DO works on cafe and coffee shop concepts, including compact layouts where counter efficiency, customer flow, seating comfort and storage all need careful planning.',
  },
  {
    q: 'Can the cafe design reflect our brand identity?',
    a: 'Yes. Colour palettes, materials, furniture, lighting, counters and other visual details can be coordinated with the cafe concept and brand requirements.',
  },
  {
    q: 'Can you handle both cafe design and fit-out work?',
    a: 'WE DO offers cafe design and fit-out services, with project management and execution coordinated according to the scope agreed with the client.',
  },
  {
    q: 'What approvals are required for a cafe fit-out in Dubai?',
    a: 'Requirements depend on the building, location, layout changes, food-and-beverage operation and the work being proposed. Relevant landlord, developer and authority requirements should be identified before the project starts.',
  },
  {
    q: 'How long does a cafe fit-out take?',
    a: 'The programme depends on the size of the space, technical requirements, design detail, availability of materials and the approvals involved. A project-specific timeline can be discussed after the site and scope are reviewed.',
  },
  {
    q: 'How much does cafe interior design cost in Dubai?',
    a: 'Cost depends on area, design complexity, finishes, custom counters and furniture, technical works and the level of fit-out. Contact WE DO for a quotation based on your proposed cafe.',
  },
  {
    q: 'Which areas of Dubai do you serve for cafe projects?',
    a: 'The supplied cafe portfolio includes projects in Al Quoz, Al Safa, Bluewaters, Downtown Dubai and Business Bay. Contact us to discuss your proposed location elsewhere in Dubai.',
  },
];

/* ======================================================================
 * SHARED CONTACT STRIP - SAME COMPONENT APPEARS AT 03 AND 07
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
 * 01 - INTRO TEXT + CLICK-TO-PLAY VIDEO
 * ====================================================================== */
function IntroVideo() {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <section
      aria-labelledby="cafe-intro-heading"
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
                id="cafe-intro-heading"
                className="mb-3 py-2 font-conthrax text-sm tracking-widest text-[#caa193] sm:text-xl"
              >
                Café Interior Design in Dubai – Expert Fit-Out &amp; Design Services
              </h2>
              <p className="font-play text-base leading-7 text-white [text-align:justify]">
                Designing a cafe interior in Dubai is about more than style. It
                combines comfort, functionality and ambience to create a welcoming
                experience for customers. At{' '}
                <strong>WE DO Interior Design &amp; Fitout</strong>, we provide
                complete cafe design and fit-out services for independent coffee
                shops, contemporary cafes and other commercial spaces. Whether
                you have a minimalist concept, a customised coffee shop or a
                combined{' '}
                <Link href="/restaurant-interior-design" className="font-semibold text-[#caa193] hover:underline">
                  cafe and restaurant design
                </Link>
                , we plan interiors that reflect your brand identity.
              </p>
              <p className="mt-4 font-play text-base leading-7 text-white [text-align:justify]">
                With more than 11 years of experience across hospitality and
                commercial projects, our approach spans concept development,
                layout planning and fit-out execution. We coordinate materials,
                seating, lighting and practical service areas to create a cafe
                environment that balances appearance with daily operations.
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
                Get Best Cafe Interior Design Dubai
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
                    aria-label="Play WE DO cafe interior design video"
                    className="group relative block h-full w-full cursor-pointer overflow-hidden"
                  >
                    <Image
                      src={CAFE_VIDEO_THUMBNAIL}
                      alt="WE DO cafe interior design video preview"
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
                    src={`https://www.youtube-nocookie.com/embed/${CAFE_YOUTUBE_VIDEO_ID}?autoplay=1&mute=1&playsinline=1&rel=0`}
                    title="WE DO Cafe Interior Design and Fit-Out Dubai"
                    className="absolute inset-0 h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                )}
              </div>
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
 * 02 - FIVE CAFE PROJECTS, FOUR PER DESKTOP ROW, NO SLIDER
 * ====================================================================== */
function ProjectGrid() {
  return (
    <section
      aria-labelledby="cafe-projects-heading"
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
          id="cafe-projects-heading"
          className="mb-10 text-center font-conthrax text-sm uppercase tracking-widest text-[#caa193] sm:text-xl md:text-2xl"
        >
          Our Café Interior Design &amp; Fit-Out Projects in Dubai
        </h2>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          style={{ gap: LAYOUT.projects.gap }}
        >
          {CAFE_PROJECTS.map((project) => (
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
 * 04 - CAFE AREAS: FOUR IMAGE + INFORMATION CARDS
 * ====================================================================== */
function CafeSpaceCards() {
  return (
    <section
      aria-labelledby="cafe-spaces-heading"
      className="bg-black text-white"
      style={{
        paddingTop: LAYOUT.workspaces.topPadding,
        paddingBottom: LAYOUT.workspaces.bottomPadding,
        paddingLeft: LAYOUT.workspaces.sidePadding,
        paddingRight: LAYOUT.workspaces.sidePadding,
      }}
    >
      <div className="mx-auto" style={{ maxWidth: LAYOUT.workspaces.maxWidth }}>
        <h2 id="cafe-spaces-heading" className="sr-only">
          Cafe Spaces We Design in Dubai
        </h2>
        <p
          className="mx-auto mb-10 text-center font-conthrax text-sm leading-7 text-white sm:text-base sm:leading-8"
          style={{ maxWidth: LAYOUT.workspaces.introMaxWidth }}
        >
          A successful cafe brings together its ordering counter, customer seating,
          lighting and materials in one thoughtful design. WE DO Interior Design
          &amp; Fitout plans these connected areas around customer comfort,
          efficient service and the personality of each coffee shop.
        </p>
        <div
          className="grid grid-cols-1 items-stretch sm:grid-cols-2 lg:grid-cols-4"
          style={{ gap: LAYOUT.workspaces.gap }}
        >
          {CAFE_SPACES.map((space) => (
            <article key={space.title} className="group flex h-full min-w-0 flex-col">
              <div
                className="relative w-full overflow-hidden bg-zinc-900"
                style={{ aspectRatio: LAYOUT.workspaces.aspectRatio }}
              >
                <Image
                  src={space.image}
                  alt={`WE DO cafe design: ${space.title}`}
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
 * 05 - TYPES OF CAFE SPACES + LOCATIONS
 * ====================================================================== */
function CafeTypes() {
  return (
    <section
      className="bg-[#111111] px-5 pb-9 pt-10 text-white"
      aria-labelledby="cafe-types-heading"
    >
      <div className="mx-auto" style={{ maxWidth: LAYOUT.types.maxWidth }}>
        <h2 id="cafe-types-heading" className="sr-only">
          Types of Cafe Interior Design We Specialise In
        </h2>
        <p className="mx-auto mb-10 max-w-4xl text-center font-conthrax text-md leading-7 text-[#caa193] sm:text-lg">
          Types of Café &amp; Coffee Shop Interiors We Design in Dubai
        </p>
        <div className="grid grid-cols-1 gap-x-16 gap-y-7 font-play text-sm leading-7 text-white sm:text-base md:grid-cols-2">
          <div className="space-y-6">
            {CAFE_TYPES.slice(0, 4).map(({ title, description }) => (
              <div key={title}>
                <h3 className="mb-1 font-play font-bold uppercase text-[#caa193]">
                  {title} –
                </h3>
                <p>{description}</p>
              </div>
            ))}
          </div>
          <div className="space-y-6">
            {CAFE_TYPES.slice(4).map(({ title, description }) => (
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
              Café Design &amp; Fit-Out Across Dubai –{' '}
            </strong>
            Our featured cafe projects include{' '}
            <strong>Al Quoz, Al Safa, Bluewaters, Downtown Dubai and Business Bay</strong>.
            We also discuss new cafe and hospitality concepts in other Dubai
            communities according to each project&apos;s requirements.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ======================================================================
 * 06 - RELATED CAFE SERVICES GALLERY: 4 x 2 DESKTOP / MOBILE CAROUSEL
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
      aria-labelledby="cafe-related-services-heading"
    >
      <div className="mx-auto" style={{ maxWidth: LAYOUT.serviceGallery.maxWidth }}>
        <h2
          id="cafe-related-services-heading"
          className="mb-7 text-center font-conthrax text-sm uppercase tracking-widest text-[#caa193] sm:text-lg md:text-xl"
        >
          We Do Cafe Interior Design Related Services
        </h2>

        <div
          className="mb-6 hidden grid-cols-4 lg:grid"
          style={{ gap: LAYOUT.serviceGallery.gap }}
        >
          {CAFE_SERVICE_IMAGES.map(({ src, alt }) => (
            <div key={src} className="relative aspect-video overflow-hidden bg-zinc-900">
              <Image src={src} alt={alt} fill sizes="25vw" className="object-cover" />
            </div>
          ))}
        </div>

        <div className="mb-6 lg:hidden">
          <div ref={emblaRef} className="overflow-hidden">
            <div className="-ml-4 flex touch-pan-y">
              {CAFE_SERVICE_IMAGES.map(({ src, alt }) => (
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
              aria-label="Previous cafe service image"
              className="min-h-11 min-w-11 rounded border border-[#caa193] font-play text-xl text-white transition-colors hover:bg-[#caa193] hover:text-black"
            >
              ←
            </button>
            <button
              type="button"
              onClick={scrollNext}
              aria-label="Next cafe service image"
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
 * 08 - WHY CAFE INTERIOR DESIGN MATTERS
 * ====================================================================== */
function WhyDesignMatters() {
  return (
    <section
      className="bg-[#111111] px-4 pb-7 pt-5 sm:px-6"
      aria-labelledby="cafe-why-heading"
    >
      <div className="mx-auto max-w-[1500px] rounded bg-black px-6 py-7 text-left text-white shadow sm:px-10 sm:py-9">
        <h2
          id="cafe-why-heading"
          className="mb-4 font-conthrax text-md uppercase text-[#caa193] sm:text-lg"
        >
          Why Café Interior Design Matters in Dubai
        </h2>
        <p className="font-play text-sm leading-7 sm:text-sm sm:leading-8">
          A cafe is more than a place to serve coffee. It can be a meeting
          point, a work-friendly destination or a neighbourhood gathering place.
          Well-considered <strong>cafe interior design in Dubai</strong> helps
          create an inviting first impression and a comfortable atmosphere,
          while planning seating, acoustics, lighting and circulation for both
          customers and staff. For cafe owners, these choices help communicate
          the brand, make efficient use of the available space and support
          day-to-day service. A cohesive concept brings together the social and
          practical sides of a coffee shop without sacrificing its personality.
        </p>
      </div>
    </section>
  );
}

/* ======================================================================
 * 09 - OUR CAFE INTERIOR DESIGN & FIT-OUT SERVICES
 * ====================================================================== */
function CafeServicesText() {
  return (
    <section
      className="bg-[#111111] px-4 pb-12 pt-7 text-white sm:px-6"
      aria-labelledby="cafe-services-heading"
    >
      <div className="mx-auto max-w-[1500px] space-y-5 font-play text-sm leading-5 sm:text-sm sm:leading-6">
        <h2
          id="cafe-services-heading"
          className="font-conthrax text-md uppercase tracking-widest text-[#caa193] sm:text-lg"
        >
          Our Café Interior Design Services in Dubai
        </h2>
        <p>
          We create distinctive <strong>cafe and coffee shop interiors</strong>{' '}
          that balance customer experience with practical service needs. Our
          work covers concepts for boutique cafes, branded coffee shops and
          larger hospitality spaces, with services matched to the project scope.
        </p>
        <p>
          <strong className="text-[#caa193]">a. Café Concept &amp; Layout Planning:</strong>{' '}
          We explore the brand identity, seating arrangements, ordering sequence,
          traffic flow and counter layout before developing a detailed concept.
        </p>
        <p>
          <strong className="text-[#caa193]">b. Interior Design &amp; Brand Integration:</strong>{' '}
          Mood boards, coordinated colours, finishes and decorative elements
          help create an atmosphere connected to your cafe&apos;s personality.
        </p>
        <p>
          <strong className="text-[#caa193]">c. Café Fit-Out &amp; Project Coordination:</strong>{' '}
          We bring together the agreed fit-out works, relevant technical
          coordination and on-site project management to help realise the design.
        </p>
        <p>
          <strong className="text-[#caa193]">d. Service Counters &amp; Custom Furniture:</strong>{' '}
          Tailored counters, joinery, seating and functional storage help
          achieve a coherent look while supporting staff efficiency.
        </p>
        <p>
          <strong className="text-[#caa193]">e. Lighting, Materials &amp; Final Styling:</strong>{' '}
          We select suitable lighting, furniture finishes and details to support
          comfort, durability and a distinctive cafe ambience.
        </p>
      </div>
    </section>
  );
}

/* ======================================================================
 * 10 - CAFE DESIGN TRENDS & OUR PROCESS (PHOTO ON THE RIGHT)
 * ====================================================================== */
function TrendsAndProcess() {
  return (
    <section className="bg-[#111111] px-4 pb-14 pt-10 text-white sm:px-6">
      <div className="mx-auto grid max-w-[1800px] grid-cols-1 items-center gap-10 lg:grid-cols-2">
        <div className="min-w-0 space-y-6 font-play text-sm leading-5 sm:text-sm sm:leading-6">
          <h2 className="font-conthrax text-md uppercase text-[#caa193] sm:text-lg">
            Café Interior Design Trends in Dubai
          </h2>
          <p>
            Modern cafe concepts range from calming minimal interiors to
            expressive coffee shops with bespoke furniture and rich material
            palettes. Well-planned lighting, comfortable seating, layered
            textures and thoughtful use of compact areas can make a space feel
            distinctive and inviting. At{' '}
            <strong>WE DO Interior Design &amp; Fitout</strong>, we balance those
            design ideas with practical counter layouts, service flow and brand
            presentation rather than following a single style for every client.
          </p>
          <h2 className="pt-2 font-conthrax text-base uppercase text-[#caa193] sm:text-md">
            Our Café Design &amp; Fit-Out Process
          </h2>
          <p>
            From early design discussions to final styling, we plan each cafe
            through a coordinated process that responds to its space and purpose:
          </p>
          <ol className="list-decimal space-y-3 pl-5 marker:text-[#caa193]">
            {CAFE_PROCESS.map(({ title, description }) => (
              <li key={title}>
                <h3 className="font-play font-bold text-[#caa193]">{title}</h3>
                <p className="text-white">{description}</p>
              </li>
            ))}
          </ol>
          <p>
            Each stage is shaped by the actual cafe concept, the agreed scope
            and site requirements.
          </p>
        </div>
        <div className="overflow-hidden rounded-lg shadow-md">
          <Image
            src="/images/allegro (3).webp"
            alt="WE DO Allegro Business Bay cafe interior design project"
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
 * 11 - FIT-OUT CONSIDERATIONS & WHY CHOOSE WE DO (PHOTO ON LEFT)
 * ====================================================================== */
function RegulationsAndWhyWeDo() {
  return (
    <section className="bg-[#111111] px-4 pb-14 pt-5 text-white sm:px-6">
      <div className="mx-auto grid max-w-[1800px] grid-cols-1 items-center gap-10 lg:grid-cols-2">
        <div className="overflow-hidden rounded-lg shadow-md">
          <Image
            src="/images/nolen-7.webp"
            alt="WE DO cafe interior design and fit-out reference project in Dubai"
            width={1200}
            height={800}
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="h-auto w-full object-cover"
          />
        </div>
        <div className="min-w-0 space-y-6 font-play text-sm leading-5 sm:text-sm sm:leading-6">
          <h2 className="font-conthrax text-md uppercase text-[#caa193] sm:text-lg">
            Café Fit-Out Regulations &amp; Approvals in Dubai
          </h2>
          <p>
            Cafe fit-out planning should account for building permissions,
            landlord or developer requirements and any applicable approvals
            connected to the proposed food-and-beverage operation. The details
            can change with the building, technical scope and fit-out work.
            Our team takes relevant site and technical requirements into account
            during the design and execution planning, according to the
            agreed project scope.
          </p>
          <h2 className="pt-2 font-conthrax text-md text-[#caa193] sm:text-md">
            Why Choose WE DO Interior Design &amp; Fitout for Your Café
          </h2>
          <p>
            WE DO brings together cafe interior design, layout development,
            material selection, custom furniture and fit-out coordination.
            Our team considers how a coffee shop works as well as how it looks,
            aiming to create customer-friendly interiors that allow staff to
            operate comfortably. We develop each concept around the client&apos;s
            identity rather than relying on a fixed design for every cafe.
          </p>
          <p>
            Our supplied cafe portfolio includes{' '}
            <Link href="/al-quoz-cafe-interior" className="font-bold text-[#caa193] hover:underline">
              Al Quoz
            </Link>
            ,{' '}
            <Link href="/bluewaters-cafe-interior" className="font-bold text-[#caa193] hover:underline">
              Bluewaters
            </Link>{' '}
            and other locations such as Al Safa, Downtown Dubai and Business
            Bay. We also provide related{' '}
            <Link href="/commercial-interior-fit-out" className="font-bold text-[#caa193] hover:underline">
              commercial interior fit-out services
            </Link>{' '}
            as part of our broader design offering.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ======================================================================
 * 12 - INTERACTIVE CAFE FAQ ACCORDION
 * ====================================================================== */
function FrequentlyAskedQuestions() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <section
      aria-labelledby="cafe-faq-heading"
      className="bg-[#111111] px-4 pb-20 pt-7 text-white sm:px-6"
    >
      <div className="mx-auto max-w-[1500px]">
        <h2
          id="cafe-faq-heading"
          className="mb-10 text-center font-conthrax text-lg uppercase text-[#caa193] sm:text-xl"
        >
          Frequently Asked Questions (FAQs)
        </h2>
        <div className="mx-auto max-w-4xl space-y-4">
          {CAFE_FAQS.map((faq, index) => {
            const expanded = openFaq === index;
            const panelId = `cafe-faq-answer-${index}`;

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
 * 13 - FINAL CTA - LAST ELEMENT ON THE PAGE
 * ====================================================================== */
function FinalCallToAction() {
  return (
    <section
      aria-labelledby="cafe-final-cta"
      className="bg-[#111111] px-4 pb-12 pt-2 sm:px-6 sm:pb-16"
    >
      <div className="mx-auto max-w-[1280px] rounded-xl border-2 border-[#caa193] bg-black px-5 py-10 text-center sm:px-8 sm:py-14 lg:px-12">
        <h2
          id="cafe-final-cta"
          className="mb-6 font-conthrax text-sm uppercase text-[#caa193] sm:text-lg"
        >
          Call to Action
        </h2>
        <p className="mx-auto mb-8 w-full max-w-[1350px] font-play text-xs leading-7 text-white sm:text-sm sm:leading-8">
          Planning a new coffee shop or refreshing an existing cafe in Dubai?
          <strong> WE DO Interior Design &amp; Fitout</strong> provides
          <strong> cafe interior design and fit-out services in Dubai</strong>{' '}
          focused on brand identity, customer comfort and day-to-day operations.
          From counter layouts and lighting concepts to furniture and
          fit-out coordination, we can help shape a distinctive space for your
          business. Get in touch to discuss your cafe concept and next steps.
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
      <CafeSpaceCards />
      <CafeTypes />
      <RelatedServices />
      <ContactStrip />
      <WhyDesignMatters />
      <CafeServicesText />
      <TrendsAndProcess />
      <RegulationsAndWhyWeDo />
      <FrequentlyAskedQuestions />
      <FinalCallToAction />
    </div>
  );
}
