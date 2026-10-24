'use client';

import { useCallback, useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { FaPlay } from 'react-icons/fa';

/**
 * WE DO - BOUTIQUE INTERIOR DESIGN IN DUBAI
 * Body section order exactly follows the WE DO office service-page template:
 *
 * 01 Intro text + video-ready boutique visual
 * 02 Clickable boutique project/showcase grid - four per row, no slider
 * 03 Get In Touch strip
 * 04 Four boutique-area image/information cards
 * 05 Boutique types + Dubai retail locations
 * 06 Related boutique design gallery - desktop grid / mobile carousel
 * 07 Get In Touch strip
 * 08 Why boutique design matters
 * 09 Our boutique interior design and fit-out services
 * 10 Design trends + process (photo on right)
 * 11 Approvals + why WE DO (photo on left)
 * 12 Interactive FAQ accordion
 * 13 Final call to action (nothing after this)
 *
 * Brand: #000000 | #111111 | #caa193 | #f5ede5
 * Fonts: font-conthrax (headings) | font-play (body).
 *
 * Note: The old gallery showed unrelated beauty salon projects. Boutique
 * visuals are therefore described as a showcase, not verified case studies.
 * Named testimonials from the source are deliberately not published until
 * the quotes and permission to use them have been verified.
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

// Add a genuine, rights-cleared boutique YouTube video ID here if available.
// The original code contained a commented-out iStock stock-video URL, not a
// YouTube video. With no video ID, the visual links to the site's gallery.
const BOUTIQUE_YOUTUBE_VIDEO_ID = '';
const BOUTIQUE_VIDEO_THUMBNAIL = '/images/boutique (8).jpeg';

// All cards are pre-coded as Next.js Links. Replace each empty link with an
// actual boutique project URL when published; empty links never redirect.
const BOUTIQUE_SHOWCASE = [
  { image: '/images/bt-1.png', title: 'Boutique Interior Design - Showcase 01', link: '' },
  { image: '/images/bt-2.png', title: 'Boutique Interior Design - Showcase 02', link: '' },
  { image: '/images/bt-3.png', title: 'Boutique Interior Design - Showcase 03', link: '' },
  { image: '/images/bt-4.png', title: 'Boutique Interior Design - Showcase 04', link: '' },
  { image: '/images/boutique (4).jpeg', title: 'Boutique Interior Design - Showcase 05', link: '' },
  { image: '/images/boutique (8).jpeg', title: 'Boutique Interior Design - Showcase 06', link: '' },
  { image: '/images/boutique.jpeg', title: 'Boutique Interior Design - Showcase 07', link: '' },
];

const BOUTIQUE_AREAS = [
  {
    image: '/images/bt-2.png',
    title: 'Boutique Shopfront & Entrance',
    description:
      'We shape entrances and window displays that communicate brand character and create a clear, inviting first impression.',
  },
  {
    image: '/images/bt-1.png',
    title: 'Display & Merchandising Zones',
    description:
      'Thoughtful product presentation, flexible fixtures and balanced circulation help shoppers browse with ease and discover collections.',
  },
  {
    image: '/images/bt-3.png',
    title: 'Fitting Rooms & Customer Lounges',
    description:
      'Comfortable private changing areas, considered mirrors and welcoming seating make the boutique experience feel personal.',
  },
  {
    image: '/images/bt-4.png',
    title: 'Lighting, Joinery & Finishes',
    description:
      'Coordinated materials, custom retail fixtures and layered lighting express the brand while supporting daily operation.',
  },
];

// Seven distinct boutique image paths were supplied. Do not invent an eighth
// asset or copy an unrelated salon image merely to fill the last grid cell.
const BOUTIQUE_SERVICE_IMAGES = [
  { src: '/images/bt-1.png', alt: 'Boutique interior design visual reference one' },
  { src: '/images/bt-2.png', alt: 'Boutique interior design visual reference two' },
  { src: '/images/bt-3.png', alt: 'Boutique interior design visual reference three' },
  { src: '/images/bt-4.png', alt: 'Boutique interior design visual reference four' },
  { src: '/images/boutique (4).jpeg', alt: 'Boutique shop fit-out reference with retail displays' },
  { src: '/images/boutique (8).jpeg', alt: 'Boutique design reference highlighting store ambience' },
  { src: '/images/boutique.jpeg', alt: 'Luxury boutique interior and retail fixtures reference' },
];

const BOUTIQUE_TYPES = [
  {
    title: 'Fashion & Apparel Boutiques',
    description:
      'Fashion-led retail interiors combine flexible product displays, clear customer flow and comfortable fitting spaces.',
  },
  {
    title: 'Jewellery & Accessories Boutiques',
    description:
      'Careful lighting, elegant display cabinetry and considered material palettes give premium products the attention they deserve.',
  },
  {
    title: 'Beauty & Wellness Boutiques',
    description:
      'Calm, welcoming retail spaces support product discovery, demonstrations and a relaxed customer experience.',
  },
  {
    title: 'Lifestyle & Concept Stores',
    description:
      'Multi-category stores benefit from brand storytelling, adaptable merchandising and intuitive routes between collections.',
  },
  {
    title: 'Pop-Up & Seasonal Boutiques',
    description:
      'Adaptable fixtures and a strong identity help short-term spaces make an impression while remaining practical to install.',
  },
  {
    title: 'Small Independent Boutiques',
    description:
      'Compact layouts use considered storage, circulation and display hierarchy without overcrowding the customer journey.',
  },
  {
    title: 'Luxury Designer Showrooms',
    description:
      'Premium finishes, curated presentation and restrained details create an environment consistent with exclusive collections.',
  },
  {
    title: 'Mall & Standalone Boutique Stores',
    description:
      'Designs are adapted to storefront visibility, landlord requirements, entry routes and the character of each retail location.',
  },
];

const BOUTIQUE_PROCESS = [
  {
    title: 'Brand Discovery & Retail Brief',
    description:
      'We learn about your products, brand positioning, audience, operational needs and the experience you want shoppers to remember.',
  },
  {
    title: 'Customer Journey & Space Planning',
    description:
      'Layouts define display zones, circulation, changing rooms, storage and moments where shoppers can pause or explore.',
  },
  {
    title: 'Concept Design & 3D Visualisation',
    description:
      'Mood boards, layouts and visual concepts translate your identity into a coherent, reviewable design direction.',
  },
  {
    title: 'Lighting, Materials & Display Specification',
    description:
      'We coordinate product lighting, finish choices, signage and flexible merchandising systems to support brand presentation.',
  },
  {
    title: 'Joinery & Boutique Fit-Out',
    description:
      'Agreed retail fixtures, shopfront details and fit-out works are coordinated against the design and site requirements.',
  },
  {
    title: 'Styling, Checks & Handover',
    description:
      'Final installation, detailing and the agreed checks prepare the boutique for merchandising and opening.',
  },
];

const BOUTIQUE_FAQS = [
  {
    q: 'How much does boutique interior design cost in Dubai?',
    a: 'The investment depends on store size, design scope, materials, custom display fixtures, joinery, fit-out requirements and approvals. We can prepare a tailored quotation after reviewing your brief and site.',
  },
  {
    q: 'How long does a boutique fit-out take in Dubai?',
    a: 'The timeline depends on concept development, approvals, fabrication lead times, site conditions and the complexity of the work. A realistic schedule is agreed after the project scope is defined.',
  },
  {
    q: 'Can you design a boutique with a small floor area?',
    a: 'Yes. Compact boutiques can benefit from flexible product displays, efficient circulation, integrated storage and carefully selected lighting that helps each collection stand out.',
  },
  {
    q: 'Do you coordinate boutique shopfront and landlord approvals?',
    a: 'Approval needs vary by mall, building, location and scope of work. We can discuss the applicable landlord and authority coordination as part of the agreed design and fit-out service.',
  },
  {
    q: 'Can WE DO follow our existing brand guidelines?',
    a: 'Yes. Brand colours, signage rules, material standards and display requirements can guide the physical retail concept, keeping the boutique aligned with your identity.',
  },
  {
    q: 'Do you design boutiques in malls and standalone locations?',
    a: 'We develop concepts for both mall retail units and standalone shops. The layout, storefront, circulation and technical coordination will depend on the particular premises.',
  },
  {
    q: 'What boutique interior design and fit-out services are included?',
    a: 'Depending on your proposal, services may include retail space planning, concept design, shopfronts, display systems, lighting, fitting rooms, custom joinery, finishes, signage and fit-out coordination.',
  },
  {
    q: 'Can you design fashion, jewellery, lifestyle and concept boutiques?',
    a: 'We tailor boutique design concepts to different retail formats, including fashion, accessories, jewellery, beauty, lifestyle and temporary stores. Each requires its own approach to display and customer experience.',
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
 * 01 - INTRO TEXT + VIDEO-READY BOUTIQUE VISUAL
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
                Boutique Interior Design &amp; Fit-Out Services in Dubai
              </h2>
              <p className="font-play text-base leading-7 text-white [text-align:justify]">
                A boutique is more than a small retail shop. Customers come for
                curated products, a personal connection and an atmosphere that
                reflects the brand. That experience begins at the entrance and
                continues through lighting, materials, display areas, fitting
                rooms and the way people move around the shop. At{' '}
                <strong>WE DO Interior Design &amp; Fitout</strong>, we create
                individual boutique interiors for fashion brands, concept stores,
                independent retailers and lifestyle businesses in Dubai.
              </p>
              <p className="mt-4 font-play text-base leading-7 text-white [text-align:justify]">
                Whether you are opening a new boutique, introducing a luxury
                retail concept or refurbishing an existing store, our team can
                coordinate the process from initial design through to the agreed{' '}
                <Link href="/commercial-interior-fit-out" className="font-semibold text-[#caa193] hover:underline">
                  commercial fit-out
                </Link>{' '}
                works. We focus on the details that make a small retail space
                distinctive, practical and memorable.
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
                Explore Boutique Interior Design in Dubai
              </h2>
              <div
                className="relative w-full overflow-hidden rounded-lg border-2 border-[#caa193] bg-black"
                style={{
                  aspectRatio: LAYOUT.intro.videoAspectRatio,
                  marginTop: LAYOUT.intro.videoTopSpacing,
                }}
              >
                {BOUTIQUE_YOUTUBE_VIDEO_ID ? (
                  !videoLoaded ? (
                    <button
                      type="button"
                      onClick={() => setVideoLoaded(true)}
                      aria-label="Play WE DO boutique interior design video"
                      className="group relative block h-full w-full cursor-pointer overflow-hidden"
                    >
                      <Image
                        src={BOUTIQUE_VIDEO_THUMBNAIL}
                        alt="Boutique interior design video preview"
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
                      src={`https://www.youtube-nocookie.com/embed/${BOUTIQUE_YOUTUBE_VIDEO_ID}?autoplay=1&playsinline=1&rel=0`}
                      title="WE DO Boutique Interior Design & Fitout Dubai"
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
                      src={BOUTIQUE_VIDEO_THUMBNAIL}
                      alt="Boutique retail interior and display design preview"
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
 * 02 - CLICKABLE BOUTIQUE SHOWCASE GRID, FOUR ACROSS DESKTOP, NO SLIDER
 * ====================================================================== */
function ProjectGrid() {
  return (
    <section
      aria-labelledby="boutique-projects-heading"
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
          id="boutique-projects-heading"
          className="mb-10 text-center font-conthrax text-sm uppercase tracking-widest text-[#caa193] sm:text-xl md:text-2xl"
        >
          Boutique Interior Design &amp; Fit-Out Showcase in Dubai
        </h2>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          style={{ gap: LAYOUT.projects.gap }}
        >
          {BOUTIQUE_SHOWCASE.map((item) => (
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
 * 04 - FOUR BOUTIQUE INTERIOR AREA CARDS
 * ====================================================================== */
function BoutiqueAreaCards() {
  return (
    <section
      className="bg-black text-white"
      aria-labelledby="boutique-areas-heading"
      style={{
        paddingTop: LAYOUT.workspaces.topPadding,
        paddingBottom: LAYOUT.workspaces.bottomPadding,
        paddingLeft: LAYOUT.workspaces.sidePadding,
        paddingRight: LAYOUT.workspaces.sidePadding,
      }}
    >
      <div className="mx-auto" style={{ maxWidth: LAYOUT.workspaces.maxWidth }}>
        <h2 id="boutique-areas-heading" className="sr-only">
          Boutique Interior Spaces We Design in Dubai
        </h2>
        <p
          className="mx-auto mb-10 text-center font-conthrax text-sm leading-7 text-white sm:text-base sm:leading-8"
          style={{ maxWidth: LAYOUT.workspaces.introMaxWidth }}
        >
          From the first glimpse of a shopfront to the final fitting-room
          experience, every boutique area shapes the way customers connect with
          a brand. WE DO plans coordinated spaces for browsing, discovery,
          service and comfort.
        </p>
        <div
          className="grid grid-cols-1 items-stretch sm:grid-cols-2 lg:grid-cols-4"
          style={{ gap: LAYOUT.workspaces.gap }}
        >
          {BOUTIQUE_AREAS.map((area) => (
            <article key={area.title} className="group flex h-full min-w-0 flex-col">
              <div
                className="relative w-full overflow-hidden bg-zinc-900"
                style={{ aspectRatio: LAYOUT.workspaces.aspectRatio }}
              >
                <Image
                  src={area.image}
                  alt={`Boutique interior design reference for ${area.title}`}
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
 * 05 - BOUTIQUE TYPES + DUBAI RETAIL LOCATIONS
 * ====================================================================== */
function BoutiqueTypes() {
  return (
    <section
      className="bg-[#111111] px-5 pb-9 pt-10 text-white"
      aria-labelledby="boutique-types-heading"
    >
      <div className="mx-auto" style={{ maxWidth: LAYOUT.types.maxWidth }}>
        <h2 id="boutique-types-heading" className="sr-only">
          Types of Boutique Interiors We Design in Dubai
        </h2>
        <p className="mx-auto mb-10 max-w-4xl text-center font-conthrax text-md leading-7 text-[#caa193] sm:text-lg">
          Types of Boutiques We Design in Dubai
        </p>
        <div className="grid grid-cols-1 gap-x-16 gap-y-7 font-play text-sm leading-7 text-white sm:text-base md:grid-cols-2">
          <div className="space-y-6">
            {BOUTIQUE_TYPES.slice(0, 4).map(({ title, description }) => (
              <div key={title}>
                <h3 className="mb-1 font-play font-bold uppercase text-[#caa193]">{title} -</h3>
                <p>{description}</p>
              </div>
            ))}
          </div>
          <div className="space-y-6">
            {BOUTIQUE_TYPES.slice(4).map(({ title, description }) => (
              <div key={title}>
                <h3 className="mb-1 font-play font-bold uppercase text-[#caa193]">{title} -</h3>
                <p>{description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 rounded-r-lg border-l-4 border-[#caa193] bg-zinc-900/50 p-6">
          <p className="font-play text-sm italic leading-relaxed text-white sm:text-base">
            <strong className="not-italic text-[#caa193]">Boutique Design in Dubai - </strong>
            Retail units in areas such as <strong>Downtown Dubai, City Walk,
            Jumeirah, Dubai Marina and Business Bay</strong> can have different
            customer profiles, storefront conditions and landlord requirements.
            We tailor the layout and design approach to the actual location,
            brand and operating brief.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ======================================================================
 * 06 - RELATED BOUTIQUE IMAGES, FOUR ACROSS DESKTOP / MOBILE CAROUSEL
 * ====================================================================== */
function RelatedServices() {
  const autoplay = useMemo(() => Autoplay({ delay: 3000, stopOnInteraction: false }), []);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' }, [autoplay]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);

  return (
    <section
      className="bg-[#111111] px-4 pb-5 pt-8 sm:px-6"
      aria-labelledby="boutique-related-services-heading"
    >
      <div className="mx-auto" style={{ maxWidth: LAYOUT.serviceGallery.maxWidth }}>
        <h2
          id="boutique-related-services-heading"
          className="mb-7 text-center font-conthrax text-sm uppercase tracking-widest text-[#caa193] sm:text-lg md:text-xl"
        >
          WE DO Boutique Interior Design Related Services
        </h2>
        <div
          className="mb-6 hidden grid-cols-4 lg:grid"
          style={{ gap: LAYOUT.serviceGallery.gap }}
        >
          {BOUTIQUE_SERVICE_IMAGES.map(({ src, alt }) => (
            <div key={src} className="relative aspect-video overflow-hidden bg-zinc-900">
              <Image src={src} alt={alt} fill sizes="25vw" className="object-cover" />
            </div>
          ))}
        </div>
        <div className="mb-6 lg:hidden">
          <div ref={emblaRef} className="overflow-hidden">
            <div className="-ml-4 flex touch-pan-y">
              {BOUTIQUE_SERVICE_IMAGES.map(({ src, alt }) => (
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
              aria-label="Previous boutique interior design image"
              className="min-h-11 min-w-11 rounded border border-[#caa193] font-play text-xl text-white transition-colors hover:bg-[#caa193] hover:text-black"
            >
              &larr;
            </button>
            <button
              type="button"
              onClick={scrollNext}
              aria-label="Next boutique interior design image"
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
 * 08 - WHY BOUTIQUE DESIGN MATTERS
 * ====================================================================== */
function WhyDesignMatters() {
  return (
    <section className="bg-[#111111] px-4 pb-7 pt-5 sm:px-6">
      <div className="mx-auto max-w-[1500px] rounded bg-black px-6 py-7 text-left text-white shadow sm:px-10 sm:py-9">
        <h2 className="mb-4 font-conthrax text-md uppercase text-[#caa193] sm:text-lg">
          Why Boutique Interior Design Is Different From Standard Retail
        </h2>
        <div className="space-y-4 font-play text-sm leading-7 sm:text-sm sm:leading-8">
          <p>
            Traditional retail environments often prioritise volume, broad
            accessibility and fast movement. A boutique depends more heavily on
            <strong> atmosphere, curation and personal experience</strong>.
            Customers notice every corner, from the shopfront and display
            details to the lighting and fitting rooms. That is why strong
            boutique design relies on clarity and restraint instead of simply
            placing more products on the floor.
          </p>
          <p>
            Thoughtful planning creates a comfortable rhythm between browsing,
            product discovery and quiet moments. Finishes and materials help
            shape perceived value, while lighting gives merchandise a clear
            presence. Flexible displays support changing collections without
            compromising the overall identity of the store.
          </p>
          <p>
            <strong>Good design can support commercial performance</strong> by
            improving navigation, making products easier to find and presenting
            collections more consistently. A memorable storefront, display
            wall or fitting area can also encourage customers to share their
            experience. The aim is a retail environment that shoppers enjoy
            exploring and remember after their visit.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ======================================================================
 * 09 - OUR BOUTIQUE INTERIOR DESIGN SERVICES
 * ====================================================================== */
function BoutiqueServicesText() {
  return (
    <section className="bg-[#111111] px-4 pb-12 pt-7 text-white sm:px-6">
      <div className="mx-auto max-w-[1500px] space-y-5 font-play text-sm leading-5 sm:text-sm sm:leading-6">
        <h2 className="font-conthrax text-md uppercase tracking-widest text-[#caa193] sm:text-lg">
          Our Boutique Interior Design &amp; Fit-Out Services in Dubai
        </h2>
        <p>
          WE DO brings boutique design, bespoke interior detailing and fit-out
          coordination together around the identity of each retail brand.
          Our scope can include the following services.
        </p>
        <p>
          <strong className="text-[#caa193]">a. Brand Concept &amp; Spatial Identity:</strong>{' '}
          We translate the brand story, products and customer expectations into
          a coherent interior rather than applying a generic retail formula.
        </p>
        <p>
          <strong className="text-[#caa193]">b. Shopfront &amp; Window Display Design:</strong>{' '}
          Storefronts and window displays introduce the brand and invite
          exploration while maintaining a sophisticated appearance.
        </p>
        <p>
          <strong className="text-[#caa193]">c. Custom Display &amp; Merchandising Systems:</strong>{' '}
          Adaptable shelving, counters and display units present products clearly
          and can be updated when collections and campaigns change.
        </p>
        <p>
          <strong className="text-[#caa193]">d. Boutique Lighting Design:</strong>{' '}
          Product-focused lighting, ambient light and considered accents help
          create comfort and highlight the merchandise without overwhelming it.
        </p>
        <p>
          <strong className="text-[#caa193]">e. Fitting Rooms &amp; Customer Experience:</strong>{' '}
          We design private fitting rooms, mirrors and customer lounge areas
          that align with the broader boutique experience.
        </p>
        <p>
          <strong className="text-[#caa193]">f. Materials &amp; Finish Specification:</strong>{' '}
          Selection considers brand character, durability, maintenance and
          how different textures and finishes make the products feel.
        </p>
        <p>
          <strong className="text-[#caa193]">g. Custom Retail Joinery:</strong>{' '}
          Tailored display cabinetry, counters and fixtures create an organised
          presentation while supporting daily retail operations.
        </p>
        <p>
          <strong className="text-[#caa193]">h. Signage &amp; Brand Graphics:</strong>{' '}
          Integrated signage, graphics and wayfinding help build a consistent
          identity from the shopfront through the interior.
        </p>
      </div>
    </section>
  );
}

/* ======================================================================
 * 10 - BOUTIQUE DESIGN STYLES & PROCESS: PHOTO ON RIGHT
 * ====================================================================== */
function TrendsAndProcess() {
  return (
    <section className="bg-[#111111] px-4 pb-14 pt-10 text-white sm:px-6">
      <div className="mx-auto grid max-w-[1800px] grid-cols-1 items-center gap-10 lg:grid-cols-2">
        <div className="min-w-0 space-y-6 font-play text-sm leading-5 sm:text-sm sm:leading-6">
          <h2 className="font-conthrax text-md uppercase text-[#caa193] sm:text-lg">
            Boutique Interior Design Styles &amp; Trends in Dubai
          </h2>
          <p>
            <strong>Minimalist luxury</strong> uses restrained detailing and
            carefully selected materials to keep products in focus.{' '}
            <strong>Warm concept stores</strong> build an approachable feeling
            with texture and places to explore. <strong>Editorial and
            gallery-inspired boutiques</strong> draw on exhibition-style
            displays, while <strong>heritage and artisanal spaces</strong> use
            craftsmanship and rich finishes to express a distinct character.
          </p>
          <p>
            Boutique interiors also need room to evolve. As seasonal collections
            and campaigns change, thoughtful lighting and flexible merchandising
            can help a store refresh its presentation without losing its identity.
          </p>
          <h2 className="pt-2 font-conthrax text-base uppercase text-[#caa193] sm:text-md">
            Our Boutique Interior Design Process
          </h2>
          <p>
            Our coordinated approach develops the boutique experience from the
            initial brand brief through to the agreed fit-out and handover:
          </p>
          <ol className="list-decimal space-y-3 pl-5 marker:text-[#caa193]">
            {BOUTIQUE_PROCESS.map(({ title, description }) => (
              <li key={title}>
                <h3 className="font-play font-bold text-[#caa193]">{title}</h3>
                <p className="text-white">{description}</p>
              </li>
            ))}
          </ol>
        </div>
        <div className="overflow-hidden rounded-lg shadow-md">
          <Image
            src="/images/bt-4.png"
            alt="Boutique interior design with curated retail presentation"
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
            src="/images/boutique (4).jpeg"
            alt="Boutique interior and retail fit-out design in Dubai"
            width={1200}
            height={800}
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="h-auto w-full object-cover"
          />
        </div>
        <div className="min-w-0 space-y-6 font-play text-sm leading-5 sm:text-sm sm:leading-6">
          <h2 className="font-conthrax text-md uppercase text-[#caa193] sm:text-lg">
            Boutique Fit-Out Approvals &amp; Retail Requirements in Dubai
          </h2>
          <p>
            The requirements for a boutique interior fit-out depend on whether
            the premises are in a shopping mall, mixed-use property or standalone
            retail location. A design may need to address landlord or building
            rules, shopfront and signage approvals, access and circulation,
            fire-safety arrangements, and other technical requirements. We
            discuss the responsibilities and coordination involved as part of
            the agreed{' '}
            <Link href="/commercial-interior-fit-out" className="font-bold text-[#caa193] hover:underline">
              commercial interior fit-out
            </Link>{' '}
            scope.
          </p>
          <h2 className="pt-2 font-conthrax text-md text-[#caa193] sm:text-md">
            Why Choose WE DO for Boutique Interior Design in Dubai
          </h2>
          <p>
            Boutiques benefit from an individual approach that connects design
            thinking with retail practicality. WE DO brings space planning,
            material selection, display detailing, joinery and fit-out
            coordination into one design direction. We focus on making each
            boutique feel aligned with its products and brand rather than
            copying an existing store concept.
          </p>
          <p>
            From a small fashion boutique to a multi-category lifestyle store,
            our aim is to support both <strong>customer experience and everyday
            retail performance</strong>. Considered display hierarchy, welcoming
            circulation, purposeful lighting and flexible fixtures help a
            compact store use its floor space more effectively.
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
      aria-labelledby="boutique-faq-heading"
    >
      <div className="mx-auto max-w-[1500px]">
        <h2
          id="boutique-faq-heading"
          className="mb-10 text-center font-conthrax text-lg uppercase text-[#caa193] sm:text-xl"
        >
          Frequently Asked Questions (FAQs)
        </h2>
        <div className="mx-auto max-w-4xl space-y-4">
          {BOUTIQUE_FAQS.map((faq, index) => {
            const expanded = openFaq === index;
            const panelId = `boutique-faq-answer-${index}`;
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
      aria-labelledby="boutique-final-cta"
    >
      <div className="mx-auto max-w-[1280px] rounded-xl border-2 border-[#caa193] bg-black px-5 py-10 text-center sm:px-8 sm:py-14 lg:px-12">
        <h2
          id="boutique-final-cta"
          className="mb-6 font-conthrax text-sm uppercase text-[#caa193] sm:text-lg"
        >
          Call to Action
        </h2>
        <p className="mx-auto mb-8 w-full max-w-[1350px] font-play text-xs leading-7 text-white sm:text-sm sm:leading-8">
          A boutique should make customers curious the moment they see its
          shopfront. Thoughtful <strong>boutique interior design in Dubai</strong>{' '}
          can make products more engaging, create a comfortable customer journey
          and communicate the brand at every detail. Whether you are launching
          a fashion store, a premium concept shop or a lifestyle boutique,{' '}
          <strong>WE DO Interior Design &amp; Fitout</strong> can help you plan
          the design, custom fixtures and fit-out around your vision. Contact
          our team to discuss your retail space and explore a tailored proposal.
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
      <BoutiqueAreaCards />
      <BoutiqueTypes />
      <RelatedServices />
      <ContactStrip />
      <WhyDesignMatters />
      <BoutiqueServicesText />
      <TrendsAndProcess />
      <RegulationsAndWhyWeDo />
      <FrequentlyAskedQuestions />
      <FinalCallToAction />
    </div>
  );
}
