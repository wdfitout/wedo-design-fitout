'use client';

import { useCallback, useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { FaPlay } from 'react-icons/fa';

/**
 * WE DO - APARTMENT INTERIOR DESIGN DUBAI
 * Body contains everything below Hero.jsx, in the standard service-page order.
 *
 * 01 Intro text + video
 * 02 Apartment projects (4 columns on desktop, no slider)
 * 03 Get In Touch
 * 04 Four apartment area image + info cards
 * 05 Apartment types, locations + key facts
 * 06 Related services gallery (desktop grid / mobile carousel)
 * 07 Get In Touch
 * 08 Why apartment design matters
 * 09 Our apartment design services
 * 10 Apartment design trends + our process (image on right)
 * 11 Approvals + why choose WE DO (image on left)
 * 12 Frequently asked questions
 * 13 Final call to action - ALWAYS LAST
 *
 * Branding: #000000 / #111111 / #caa193 / #f5ede5
 * Fonts: font-conthrax (headings) and font-play (body)
 */

/* ----------------------------------------------------------------------
 * MANUAL LAYOUT CONTROLS - same values as the office page reference
 * ---------------------------------------------------------------------- */
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

/* ----------------------------------------------------------------------
 * CONTENT / IMAGE DATA - update images or routes here, without editing JSX
 * ---------------------------------------------------------------------- */

// The reference office template's WE DO YouTube video.
// Replace this ID if you have a dedicated apartment-service video.
const YOUTUBE_VIDEO_ID = 'qCAlrFPJp5g';

const APARTMENT_PROJECTS = [
  {
    image: '/images/da-vinci-tower-4.webp',
    title: 'Da Vinci Tower Penthouse',
    link: '/da-vinci-tower-pagani-furniture',
  },
  {
    image: '/images/bt-10.jpg',
    title: 'Bleu Tower Penthouse',
    link: '/bleu-tower-penthouse',
  },
  {
    image: '/images/ma-4.jpg',
    title: 'Dubai Marina Apartment',
    link: '/dubai-marina-apartment',
  },
  {
    image: '/images/penth19.webp',
    title: 'II Primo Penthouse',
    link: '/ii-primo-penthouse',
  },
  {
    image: '/images/pt-4.jpg',
    title: 'Princess Tower Apartment',
    link: '/princess-tower-penthouse',
  },
  {
    image: '/images/bba (8).webp',
    title: 'Business Bay Apartment',
    link: '/business-bay-apartment',
  },

    {
    image: '/images/address-harbour-point-master-bedroom-design-dubai.png',
    title: 'EMAAR HARBOUR POINT APARTMENT',
    link: '/emaar-harbour-point-apartment-dubai',
  },   
  {
    image: '/images/apartment-dining-area-interior-design-dubai-silicon-oasis.png',
    title: 'DUBAI SILICON OASIS APARTMENT',
    link: '/dubai-silicon-oasis-apartment',
  },
    {
    image: '/images/mg2-(1).webp',
    title: 'MARINA GATE 2 LUXURY APARTMENT',
    link: '/marina-gate-2-luxury-apartment',
  },
  {
    image: '/images/adh (7).webp',
    title: 'ACCACIA DUBAI HILLS 2 BEDROOM APARTMENT',
    link: '/acacia-dubai-hills-2-bedroom-apartment',
  },
    {
    image: '/images/pjapt (5).webp',
    title: 'PALM JUMEIRAH APARTMEN',
    link: '/palm-jumeirah-apartmen',
  },
    {
    image: '/images/ATRD (14.1).webp',
    title: 'ROYAL ATLANTIS 2 BEDROOM APARTMENT',
    link: '/royal-atlantis-2-bedroom-apartment',
  },
];

const APARTMENT_AREAS = [
  {
    image: '/images/dubai-interior-design-companies-apartment-sitting-area.webp',
    title: 'Living Rooms & Sitting Areas',
    description:
      'We plan comfortable and welcoming living rooms with practical furniture arrangements, refined finishes and lighting suited to everyday apartment living.',
  },
  {
    image: '/images/bba (6).jpg',
    title: 'Bedrooms & Master Suites',
    description:
      'Our bedroom interiors combine calm colour palettes, carefully selected furnishings and integrated storage for personal comfort and functionality.',
  },
  {
    image: '/images/ma-1.jpg',
    title: 'Open-Plan Living & Dining',
    description:
      'We organise compact and open-plan apartments with considered circulation, flexible dining areas and thoughtful zoning between living spaces.',
  },
  {
    image: '/images/da-vinci-tower-2.webp',
    title: 'Bespoke Furniture & Storage',
    description:
      'Custom joinery, fitted wardrobes and multifunctional furnishings help make better use of available space without sacrificing the apartment\'s design.',
  },
];

const APARTMENT_SERVICE_IMAGES = [
  { src: '/images/penth19.webp', alt: 'WE DO Dubai luxury penthouse interior project' },
  { src: '/images/ma-1.jpg', alt: 'WE DO Dubai Marina apartment interior project' },
  { src: '/images/pt-4.jpg', alt: 'WE DO Princess Tower apartment project' },
  { src: '/images/da-vinci-tower-2.webp', alt: 'WE DO Da Vinci Tower interior design project' },
  { src: '/images/bba (8).webp', alt: 'WE DO Business Bay apartment interior project' },
  { src: '/images/bba (6).jpg', alt: 'Bedroom interior in a Dubai apartment project' },
  { src: '/images/pentv3.webp', alt: 'Luxury apartment bedroom interior design detail' },
  { src: '/images/ma-4.jpg', alt: 'Dubai Marina residential interior project' },
];

const APARTMENT_TYPES = [
  {
    title: 'Studio Apartments',
    description:
      'Efficient zoning, integrated storage and multipurpose furnishings help compact studios feel open, inviting and practical.',
  },
  {
    title: 'One-Bedroom Apartments',
    description:
      'Thoughtful room layouts and coordinated materials create a comfortable home with a clear, consistent design identity.',
  },
  {
    title: 'Two-Bedroom Apartments',
    description:
      'Balanced living, dining and private areas designed around everyday routines, natural light and flexible furniture.',
  },
  {
    title: 'Three-Bedroom Apartments',
    description:
      'Tailored concepts for larger homes, including storage solutions, bedrooms, shared spaces and cohesive finishes.',
  },
  {
    title: 'Luxury Penthouses',
    description:
      'Personalised material palettes, bespoke joinery and refined detailing for premium high-rise residential interiors.',
  },
  {
    title: 'Investment & Rental Apartments',
    description:
      'Practical upgrades that improve appearance, durability, everyday comfort and the appeal of a rental property.',
  },
  {
    title: 'Loft-Inspired Apartments',
    description:
      'Open-plan living, warm timber, metal accents and tailored lighting create modern spaces with character.',
  },
  {
    title: 'Turnkey Apartment Fit-Outs',
    description:
      'A coordinated approach covering design, procurement, site work, furniture and final styling.',
  },
];

const APARTMENT_FACTS = [
  { label: 'Service', value: 'Turnkey apartment design & fit-out' },
  {
    label: 'Apartment types',
    value: (
      <>
        Studios, 1-3 bedroom apartments,{' '}
        <Link href="/penthouse-projects" className="text-[#caa193] underline hover:opacity-80">
          penthouses
        </Link>
      </>
    ),
  },
  { label: 'Experience', value: 'Since 2015 - 250+ projects' },
  {
    label: 'In-house delivery',
    value: (
      <>
        Designers, civil works, decoration &{' '}
        <Link href="/joinery-company-dubai" className="text-[#caa193] underline hover:opacity-80">
          own joinery factory
        </Link>
      </>
    ),
  },
  { label: 'Design deliverables', value: 'Mood boards, 3D visualisation, VR/AR walkthroughs' },
  { label: 'Approvals', value: 'Building NOCs, developer & authority approvals, as applicable' },
  { label: 'Certifications', value: 'ISO 9001, ISO 14001 & ISO 45001' },
  {
    label: 'Award',
    value: (
      <Link href="/ii-primo-penthouse" className="text-[#caa193] underline hover:opacity-80">
        Luxury Lifestyle Awards 2026
      </Link>
    ),
  },
  {
    label: 'Featured projects',
    value: 'Royal Atlantis, Marina Gate 2, Acacia Dubai Hills, Marina Vista, Palm Jumeirah & Business Bay',
  },
  {
    label: 'Areas served',
    value: (
      <>
        <Link href="/apartment-interior-design-downtown-dubai" className="text-[#caa193] underline hover:opacity-80">
          Downtown Dubai
        </Link>
        ,{' '}
        <Link href="/apartment-interior-design-business-bay" className="text-[#caa193] underline hover:opacity-80">
          Business Bay
        </Link>
        ,{' '}
        <Link href="/best-interior-design-company-in-dubai-marina" className="text-[#caa193] underline hover:opacity-80">
          Dubai Marina
        </Link>
        ,{' '}
        <Link href="/interior-design-companies-palm-jumeirah-dubai" className="text-[#caa193] underline hover:opacity-80">
          Palm Jumeirah
        </Link>{' '}
        &{' '}
        <Link href="/interior-design-companies-near-dubai-hills" className="text-[#caa193] underline hover:opacity-80">
          Dubai Hills Estate
        </Link>
      </>
    ),
  },
];

const APARTMENT_PROCESS = [
  {
    title: 'Concept Development',
    description: 'Style discovery, space analysis and mood boards tailored to your vision.',
  },
  {
    title: 'Material & Furniture Curation',
    description:
      'We collaborate with suppliers to select furnishings, fabrics and decor that align with your taste and lifestyle.',
  },
  {
    title: 'Project Documentation',
    description:
      'Layouts, lighting plans and colour specifications are documented for accuracy and transparency.',
  },
  {
    title: 'On-Site Supervision & Execution',
    description:
      'Our project managers oversee implementation, from painting to furnishing, and coordinate the finished result.',
  },
];

const APARTMENT_FAQS = [
  {
    q: 'How much does apartment interior design cost in Dubai?',
    a: 'Apartment interior design and fit-out in Dubai typically costs around AED 80-150 per sq ft, from about AED 40,000 for a studio to AED 300,000+ for a 3-bedroom or larger apartment, with penthouses quoted on scope. The price depends on size, scope (design-only or turnkey), materials, custom joinery and approvals. WE DO provides a detailed quotation after an on-site meeting, with mood boards and 3D visualisation.',
  },
  {
    q: 'How long does an apartment interior design and fit-out take in Dubai?',
    a: 'A turnkey apartment fit-out in Dubai typically takes 3-5 weeks for a studio, 6-9 weeks for a 1-bedroom, 8-12 weeks for a 2-bedroom and 10-16 weeks for a 3-bedroom or larger apartment, with design and building approvals adding time before work starts. Penthouses with bespoke joinery or imported materials can take longer. Our in-house joinery factory keeps production on schedule.',
  },
  {
    q: 'Do I need approvals to renovate or fit out my apartment in Dubai?',
    a: 'Yes, most apartment fit-outs in Dubai need approval before work starts. This usually means a building NOC from building management and, depending on the scope, developer approval (such as Emaar or Damac) and authority approvals from Dubai Municipality or Dubai Civil Defence. WE DO\'s dedicated approvals team prepares and submits these for you.',
  },
  {
    q: 'Should I hire one company for both design and fit-out?',
    a: 'For most apartments, yes. One company handling both design and fit-out gives you a single point of responsibility, a design that is costed and buildable from day one, and no handovers between contractors. WE DO delivers both under one roof, with in-house designers, civil works and decoration teams, and its own joinery factory.',
  },
  {
    q: 'What types of apartments do you design?',
    a: 'WE DO designs and fits out studios, 1-3 bedroom apartments and penthouses across Dubai. Recent apartment projects include Atlantis The Royal, Marina Gate 2, Acacia Dubai Hills, Emaar Beachfront Marina Vista and a Palm Jumeirah penthouse, ranging from compact city apartments to fully bespoke luxury residences.',
  },
  {
    q: 'Which Dubai buildings and communities have you worked in?',
    a: 'WE DO has completed apartment interiors at Atlantis The Royal, Marina Gate 2, Emaar Beachfront Marina Vista, Acacia Dubai Hills, Madinat Jumeirah Living, Palm Jumeirah and Business Bay. Our Primo Tower apartment by Emaar won the Luxury Lifestyle Awards 2026 for Best Luxury Residential Renovation Interior Design. We work across Downtown Dubai, Business Bay, Dubai Marina, Palm Jumeirah, Dubai Hills Estate and DIFC.',
  },
  {
    q: 'What is included in a turnkey apartment package, and can it be move-in ready?',
    a: 'A turnkey package covers everything from concept to handover: space planning, mood boards, 3D visualisation and VR/AR walkthroughs, building approvals, civil and decoration works, custom joinery from our own factory, furniture and decor sourcing, on-site supervision and final styling. Yes, the apartment is handed over furnished and ready to move into.',
  },
  {
    q: 'Can I stay in my apartment during the works?',
    a: 'It depends on the scope. For lighter works such as furnishing, styling or joinery installation, you can usually stay in the apartment while working. For full fit-outs involving flooring, kitchens, bathrooms or MEP works, we recommend that our clients move out, as dust, noise and building working-hour rules make living there impractical.',
  },
  {
    q: 'Can you renovate an apartment that is rented out or between tenants?',
    a: 'Yes. Most of our clients in Dubai are investors, and they are upgrading apartments to increase rental value. The best time is between tenancies, when works can run without disruption. If the apartment is occupied, we coordinate access with the tenant and building management, and schedule works to keep disruption to a minimum.',
  },
];

/* ----------------------------------------------------------------------
 * SHARED CONTACT STRIP - rendered at positions 03 and 07
 * ---------------------------------------------------------------------- */
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

/* ----------------------------------------------------------------------
 * 01 - INTRO TEXT + VIDEO
 * ---------------------------------------------------------------------- */
function IntroVideo() {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <section
      aria-labelledby="apartment-intro-heading"
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
                id="apartment-intro-heading"
                className="mb-3 py-2 font-conthrax text-sm tracking-widest text-[#caa193] sm:text-xl"
              >
                Apartment Interior Design Dubai by Experts Who Know Style and Space
              </h2>
              <div className="space-y-4 font-play text-base leading-7 text-white [text-align:justify]">
                <p>
                  Apartment interior design Dubai is not just about aesthetics - it is about
                  creating smart, functional and emotionally resonant spaces that reflect
                  how people truly live in this city.{' '}
                  <strong>At WE DO Interior Design &amp; Fitout,</strong> our team of interior
                  architects, designers and fit-out specialists brings extensive experience
                  transforming Dubai apartments into exceptional, livable spaces. We
                  understand the unique structural layouts, lighting limitations and
                  lifestyle expectations of Dubai apartments - from compact studios in JVC
                  to{' '}
                  <Link
                    href="/palm-jumeirah-2-bedroom-penthouse"
                    className="font-semibold text-[#caa193] hover:underline"
                  >
                    luxurious penthouses in Palm Jumeirah
                  </Link>
                  . Every design reflects our commitment to thoughtful planning, quality
                  execution and timeless value.
                </p>
                <p>
                  Whether you are upgrading for personal comfort or increasing rental value,
                  our end-to-end service helps make your apartment a reflection of elegance,
                  efficiency and Dubai&apos;s modern lifestyle.{' '}
                  <Link
                    href="/apartment-projects"
                    className="font-semibold text-[#caa193] hover:underline"
                  >
                    See our completed apartment projects in Dubai
                  </Link>
                  .
                </p>
              </div>
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
                Explore WE DO Interior Design &amp; Fit-Out
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
                    aria-label="Play WE DO interior design video"
                    className="group relative block h-full w-full cursor-pointer overflow-hidden"
                  >
                    <Image
                      src="/images/dubai-interior-design-companies-apartment-sitting-area.webp"
                      alt="WE DO apartment interior design video preview"
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
                    src={`https://www.youtube-nocookie.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&playsinline=1&rel=0`}
                    title="WE DO Interior Design and Fit-Out Dubai"
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

/* ----------------------------------------------------------------------
 * 02 - PROJECT GRID (FOUR PER ROW ON DESKTOP, NO CAROUSEL)
 * ---------------------------------------------------------------------- */
function ProjectGrid() {
  return (
    <section
      aria-labelledby="apartment-projects-heading"
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
          id="apartment-projects-heading"
          className="mb-10 text-center font-conthrax text-sm uppercase tracking-widest text-[#caa193] sm:text-xl md:text-2xl"
        >
          Our Apartment Interior Design &amp; Fit-Out Projects in Dubai
        </h2>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          style={{ gap: LAYOUT.projects.gap }}
        >
          {APARTMENT_PROJECTS.map((project) => (
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

/* ----------------------------------------------------------------------
 * 04 - FOUR APARTMENT AREA IMAGE + INFORMATION CARDS
 * ---------------------------------------------------------------------- */
function WorkspaceCards() {
  return (
    <section
      aria-labelledby="apartment-areas-heading"
      className="bg-black text-white"
      style={{
        paddingTop: LAYOUT.workspaces.topPadding,
        paddingBottom: LAYOUT.workspaces.bottomPadding,
        paddingLeft: LAYOUT.workspaces.sidePadding,
        paddingRight: LAYOUT.workspaces.sidePadding,
      }}
    >
      <div className="mx-auto" style={{ maxWidth: LAYOUT.workspaces.maxWidth }}>
        <h2 id="apartment-areas-heading" className="sr-only">
          Apartment Spaces We Design in Dubai
        </h2>
        <p
          className="mx-auto mb-10 text-center font-conthrax text-sm leading-7 text-white sm:text-base sm:leading-8"
          style={{ maxWidth: LAYOUT.workspaces.introMaxWidth }}
        >
          Every room of an apartment should feel cohesive and welcoming. At WE DO Interior
          Design &amp; Fitout, we plan living spaces, bedrooms, open-plan layouts and bespoke
          storage that combine comfort, personality and everyday functionality.
        </p>
        <div
          className="grid grid-cols-1 items-stretch sm:grid-cols-2 lg:grid-cols-4"
          style={{ gap: LAYOUT.workspaces.gap }}
        >
          {APARTMENT_AREAS.map((area) => (
            <article key={area.title} className="group flex h-full min-w-0 flex-col">
              <div
                className="relative w-full overflow-hidden bg-zinc-900"
                style={{ aspectRatio: LAYOUT.workspaces.aspectRatio }}
              >
                <Image
                  src={area.image}
                  alt={area.title}
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

/* ----------------------------------------------------------------------
 * 05 - APARTMENT TYPES + DUBAI LOCATIONS + EXISTING KEY FACTS
 * ---------------------------------------------------------------------- */
function ApartmentTypesAndFacts() {
  return (
    <section
      aria-labelledby="apartment-types-heading"
      className="bg-[#111111] px-5 pb-9 pt-10 text-white"
    >
      <div className="mx-auto" style={{ maxWidth: LAYOUT.types.maxWidth }}>
        <h2 id="apartment-types-heading" className="sr-only">
          Types of Apartments We Design in Dubai
        </h2>
        <p className="mx-auto mb-10 max-w-4xl text-center font-conthrax text-base leading-7 text-[#caa193] sm:text-lg">
          Apartment Interior Design Solutions for Every Lifestyle
        </p>
        <div className="grid grid-cols-1 gap-x-16 gap-y-7 font-play text-sm leading-7 text-white sm:text-base md:grid-cols-2">
          <div className="space-y-6">
            {APARTMENT_TYPES.slice(0, 4).map(({ title, description }) => (
              <div key={title}>
                <h3 className="mb-1 font-play font-bold uppercase text-[#caa193]">
                  {title} -
                </h3>
                <p>{description}</p>
              </div>
            ))}
          </div>
          <div className="space-y-6">
            {APARTMENT_TYPES.slice(4).map(({ title, description }) => (
              <div key={title}>
                <h3 className="mb-1 font-play font-bold uppercase text-[#caa193]">
                  {title} -
                </h3>
                <p>{description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 rounded-r-lg border-l-4 border-[#caa193] bg-zinc-900/50 p-6">
          <p className="font-play text-sm italic leading-relaxed text-white sm:text-base">
            <strong className="not-italic text-[#caa193]">
              Apartment Design in Prime Dubai Locations -{' '}
            </strong>
            We design apartment interiors in{' '}
            <strong>Downtown Dubai, Business Bay, Dubai Marina, Palm Jumeirah and Dubai Hills Estate</strong>
            , as well as other residential communities across Dubai.
          </p>
        </div>

        <div className="mt-12">
          <h3 className="mb-5 font-conthrax text-sm uppercase text-[#caa193] sm:text-lg">
            Apartment Interior Design - Key Facts
          </h3>
          <div className="grid grid-cols-1 gap-x-8 font-play sm:grid-cols-2">
            {APARTMENT_FACTS.map(({ label, value }) => (
              <div
                key={label}
                className="grid grid-cols-[105px_minmax(0,1fr)] gap-3 border-b border-white/10 py-2.5 sm:grid-cols-[125px_minmax(0,1fr)]"
              >
                <span className="text-xs font-semibold text-[#caa193] sm:text-sm">
                  {label}
                </span>
                <span className="min-w-0 break-words text-xs leading-5 text-white/80 sm:text-sm">
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------------
 * 06 - RELATED SERVICES: 4 x 2 DESKTOP GRID / MOBILE EMBLA CAROUSEL
 * ---------------------------------------------------------------------- */
function RelatedServices() {
  const autoplay = useMemo(
    () => Autoplay({ delay: 3000, stopOnInteraction: false }),
    []
  );
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'start' },
    [autoplay]
  );
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);

  return (
    <section
      aria-labelledby="apartment-related-services-heading"
      className="bg-[#111111] px-4 pb-5 pt-8 sm:px-6"
    >
      <div className="mx-auto" style={{ maxWidth: LAYOUT.serviceGallery.maxWidth }}>
        <h2
          id="apartment-related-services-heading"
          className="mb-7 text-center font-conthrax text-sm uppercase tracking-widest text-[#caa193] sm:text-lg md:text-xl"
        >
          WE DO Apartment Design Related Services
        </h2>

        <div
          className="mb-6 hidden grid-cols-4 lg:grid"
          style={{ gap: LAYOUT.serviceGallery.gap }}
        >
          {APARTMENT_SERVICE_IMAGES.map(({ src, alt }) => (
            <div key={src} className="relative aspect-video overflow-hidden bg-zinc-900">
              <Image src={src} alt={alt} fill sizes="25vw" className="object-cover" />
            </div>
          ))}
        </div>

        <div className="mb-6 lg:hidden">
          <div ref={emblaRef} className="overflow-hidden">
            <div className="-ml-4 flex touch-pan-y">
              {APARTMENT_SERVICE_IMAGES.map(({ src, alt }) => (
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
              aria-label="Previous apartment service image"
              className="min-h-11 min-w-11 rounded border border-[#caa193] font-play text-xl text-white transition-colors hover:bg-[#caa193] hover:text-black"
            >
              &larr;
            </button>
            <button
              type="button"
              onClick={scrollNext}
              aria-label="Next apartment service image"
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

/* ----------------------------------------------------------------------
 * 08 - WHY APARTMENT INTERIOR DESIGN MATTERS
 * ---------------------------------------------------------------------- */
function WhyDesignMatters() {
  return (
    <section
      aria-labelledby="apartment-design-matters-heading"
      className="bg-[#111111] px-4 pb-7 pt-5 sm:px-6"
    >
      <div className="mx-auto max-w-[1500px] rounded bg-black px-6 py-7 text-left text-white shadow sm:px-10 sm:py-9">
        <h2
          id="apartment-design-matters-heading"
          className="mb-4 font-conthrax text-base uppercase text-[#caa193] sm:text-lg"
        >
          Why Apartment Interior Design in Dubai Matters
        </h2>
        <div className="space-y-4 font-play text-sm leading-7 text-white sm:leading-8">
          <p>
            Creating a modern apartment interior in Dubai is not just about looks - it
            is about functionality in limited space, comfort in rental settings and
            optimising every detail for modern city life. At{' '}
            <strong>WE DO Interior Design &amp; Fitout</strong>, we design small and
            mid-sized apartments that feel spacious, stylish and personal, whether
            it is a studio, a Downtown residence or a{' '}
            <Link
              href="/royal-atlantis-2-bedroom-apartment"
              className="font-semibold text-[#caa193] hover:underline"
            >
              two-bedroom apartment in Atlantis The Royal
            </Link>
            .
          </p>
          <p>
            We balance modern furnishings with regional design cues to reflect
            Dubai&apos;s cultural blend. Space-saving layouts, bedroom and living-room
            integration, multifunctional furniture and personalised lighting
            strategies make the space more comfortable and practical.
          </p>
          <p>
            <strong>Our mission:</strong> turn every apartment into a welcoming,
            livable home rather than an impersonal space. Whether you are a tenant,
            homeowner or investor, we focus on everyday comfort, efficient use of
            space and long-term appeal.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------------
 * 09 - OUR APARTMENT INTERIOR DESIGN SERVICES
 * ---------------------------------------------------------------------- */
function ApartmentServicesText() {
  return (
    <section
      aria-labelledby="apartment-services-text-heading"
      className="bg-[#111111] px-4 pb-12 pt-7 text-white sm:px-6"
    >
      <div className="mx-auto max-w-[1500px] space-y-5 font-play text-sm leading-5 sm:leading-6">
        <h2
          id="apartment-services-text-heading"
          className="font-conthrax text-base uppercase tracking-widest text-[#caa193] sm:text-lg"
        >
          Our Apartment Interior Design Services in Dubai
        </h2>
        <p>
          <strong>Luxury Dubai interiors, seamless execution.</strong> WE DO offers
          complete turnkey apartment interior solutions - from concept and design
          through procurement, documentation, execution, supervision and final
          styling. We believe luxury should feel personal and practical.
        </p>
        <p>
          <strong className="text-[#caa193]">a. Space Planning &amp; Layout Design:</strong>{' '}
          We plan layouts for studios, one-bedroom apartments, larger residences
          and penthouses. Our apartment design solutions include space-saving
          furniture layouts, bedroom and living-room integration, practical
          circulation and flexible zones for working, dining and relaxing.
        </p>
        <p>
          <strong className="text-[#caa193]">b. Turnkey Apartment Fit-Out:</strong>{' '}
          Our team coordinates civil works, decoration, materials, project
          documentation and execution. We deliver a unified design and fit-out
          process so that the finished home reflects the approved concept.
        </p>
        <p>
          <strong className="text-[#caa193]">c. Custom Furniture &amp; Joinery:</strong>{' '}
          Choosing furniture for apartment interior design in Dubai is about fitting
          function into form. We understand tight corners, open layouts, awkward
          niches and the need for more storage in minimal space. Our solutions can
          include slimline consoles, floating shelves, extendable dining tables,
          built-in wardrobes and concealed cabinetry.
        </p>
        <p>
          <strong className="text-[#caa193]">d. Lighting &amp; Material Selection:</strong>{' '}
          We curate furniture, fabrics, finishes and colour palettes with lighting
          that supports how each room is used. Wall-mounted lighting can free
          floor space, while mirrored panels and uplighting can create greater
          visual depth in darker interiors.
        </p>
        <p>
          <strong className="text-[#caa193]">e. Styling &amp; Personalisation:</strong>{' '}
          Your apartment should reflect your story. We help style shelves with
          artwork, books, curated keepsakes and personal photographs. From
          industrial-chic coffee tables to minimal wall-mounted desks, every piece
          should contribute to function, durability and visual harmony.
        </p>
        <p>
          <strong className="text-[#caa193]">f. Cost-Conscious Apartment Upgrades:</strong>{' '}
          Your home should combine your personal style with thoughtful design. Our
          designers help develop efficient and personalised interiors for different
          budgets, including apartments being prepared for rental or upgraded
          between tenancies.
        </p>
        <p>
          <strong className="text-[#caa193]">g. Furniture Sourcing &amp; Coordination:</strong>{' '}
          We source multifunctional furniture suited to each apartment&apos;s layout
          and collaborate with suppliers to select items for comfort, quality and
          long-term use. Our online design collaboration process also helps clients
          review choices from bedroom concepts to lounge furniture.
        </p>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------------
 * 10 - APARTMENT DESIGN TRENDS + PROCESS (IMAGE ON THE RIGHT)
 * ---------------------------------------------------------------------- */
function TrendsAndProcess() {
  return (
    <section
      aria-labelledby="apartment-trends-heading"
      className="bg-[#111111] px-4 pb-14 pt-10 text-white sm:px-6"
    >
      <div className="mx-auto grid max-w-[1800px] grid-cols-1 items-center gap-10 lg:grid-cols-2">
        <div className="min-w-0 space-y-6 font-play text-sm leading-5 sm:leading-6">
          <h2
            id="apartment-trends-heading"
            className="font-conthrax text-base uppercase text-[#caa193] sm:text-lg"
          >
            Apartment Interior Design Trends in Dubai
          </h2>
          <p>
            <strong>Complete your apartment interior design in Dubai with bold,
            loft-inspired concepts.</strong> As layouts move toward open-plan living,
            industrial-chic details - exposed metal frames, rustic oak textures,
            matte-black accents and personalised lighting - create modern homes
            with warmth and character.
          </p>
          <p>
            Whether you are designing a{' '}
            <Link
              href="/acacia-dubai-hills-2-bedroom-apartment"
              className="font-bold text-[#caa193] hover:underline"
            >
              two-bedroom apartment in Dubai Hills
            </Link>{' '}
            or a studio in Business Bay, our approach balances distinctive
            materials and smart layouts with everyday comfort. Curated furniture
            and custom lighting give the space a clear identity without
            sacrificing functionality.
          </p>
          <h2 className="pt-2 font-conthrax text-base uppercase text-[#caa193]">
            Our Apartment Design &amp; Fit-Out Process
          </h2>
          <p>
            Our turnkey approach brings design, procurement, documentation,
            execution and supervision together under one team:
          </p>
          <ol className="list-decimal space-y-3 pl-5 marker:text-[#caa193]">
            {APARTMENT_PROCESS.map(({ title, description }) => (
              <li key={title}>
                <h3 className="font-play font-bold text-[#caa193]">{title}</h3>
                <p className="text-white">{description}</p>
              </li>
            ))}
          </ol>
          <p>
            Whether your preferred look is a contemporary loft, classic modern
            design or a bespoke luxury palette, we manage the transformation
            with careful attention to detail.
          </p>
        </div>

        <div className="overflow-hidden rounded-lg shadow-md">
          <Image
            src="/images/pentv3.webp"
            alt="Luxury bedroom interior in a WE DO Dubai residential design project"
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

/* ----------------------------------------------------------------------
 * 11 - DUBAI APPROVALS + WHY CHOOSE WE DO (IMAGE ON THE LEFT)
 * ---------------------------------------------------------------------- */
function RegulationsAndWhyWeDo() {
  return (
    <section
      aria-labelledby="apartment-approvals-heading"
      className="bg-[#111111] px-4 pb-14 pt-5 text-white sm:px-6"
    >
      <div className="mx-auto grid max-w-[1800px] grid-cols-1 items-center gap-10 lg:grid-cols-2">
        <div className="overflow-hidden rounded-lg shadow-md">
          <Image
            src="/images/bba (6).jpg"
            alt="Elegant bedroom in a Dubai apartment interior design project"
            width={1200}
            height={800}
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="h-auto w-full object-cover"
          />
        </div>
        <div className="min-w-0 space-y-6 font-play text-sm leading-5 sm:leading-6">
          <h2
            id="apartment-approvals-heading"
            className="font-conthrax text-base uppercase text-[#caa193] sm:text-lg"
          >
            Apartment Renovation &amp; Fit-Out Approvals in Dubai
          </h2>
          <p>
            Renovation work in Dubai apartment buildings may require a building
            NOC, developer consent and other approvals depending on the project
            scope and location. WE DO coordinates the applicable documentation
            and submissions with building management, developers and relevant
            authorities before the approved works begin.
          </p>

          <h2 className="pt-2 font-conthrax text-base text-[#caa193] sm:text-lg">
            Why Choose WE DO Interior Design &amp; Fitout for Your Apartment
          </h2>
          <p>
            We offer in-house design, civil works, decoration and custom joinery,
            with experience dating back to 2015. Our apartment portfolio includes
            homes in Atlantis The Royal, Marina Gate 2, Acacia Dubai Hills,
            Marina Vista, Palm Jumeirah and Business Bay. Our company also holds
            ISO 9001, ISO 14001 and ISO 45001 certifications.
          </p>
          <p>
            Our{' '}
            <Link href="/ii-primo-penthouse" className="font-bold text-[#caa193] hover:underline">
              II Primo residence
            </Link>{' '}
            received the Luxury Lifestyle Awards 2026 recognition for Best Luxury
            Residential Renovation Interior Design. We combine design planning,
            material selection and project management to help create
            elegant, efficient and personal spaces for different budgets.
          </p>
          <p>
            From bedroom concepts to living-room furniture, our design process is
            structured to make decisions transparent and execution coordinated.
            We focus on durable, functional interiors that reflect how you want
            to live, rather than a one-size-fits-all aesthetic.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------------
 * 12 - INTERACTIVE FAQ ACCORDION
 * ---------------------------------------------------------------------- */
function FrequentlyAskedQuestions() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <section
      aria-labelledby="apartment-faq-heading"
      className="bg-[#111111] px-4 pb-20 pt-7 text-white sm:px-6"
    >
      <div className="mx-auto max-w-[1500px]">
        <h2
          id="apartment-faq-heading"
          className="mb-10 text-center font-conthrax text-lg uppercase text-[#caa193] sm:text-xl"
        >
          Frequently Asked Questions (FAQs)
        </h2>
        <div className="mx-auto max-w-4xl space-y-4">
          {APARTMENT_FAQS.map((faq, index) => {
            const expanded = openFaq === index;
            const panelId = `apartment-faq-answer-${index}`;

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

/* ----------------------------------------------------------------------
 * 13 - FINAL CTA - NOTHING AFTER THIS SECTION
 * ---------------------------------------------------------------------- */
function FinalCallToAction() {
  return (
    <section
      aria-labelledby="apartment-final-cta"
      className="bg-[#111111] px-4 pb-12 pt-2 sm:px-6 sm:pb-16"
    >
      <div className="mx-auto max-w-[1280px] rounded-xl border-2 border-[#caa193] bg-black px-5 py-10 text-center sm:px-8 sm:py-14 lg:px-12">
        <h2
          id="apartment-final-cta"
          className="mb-6 font-conthrax text-sm uppercase text-[#caa193] sm:text-lg"
        >
          Call to Action
        </h2>
        <p className="mx-auto mb-8 w-full max-w-[1350px] font-play text-xs leading-7 text-white sm:text-sm sm:leading-8">
          Planning a studio makeover, a complete apartment renovation or a
          luxury penthouse transformation?{' '}
          <strong>WE DO Interior Design &amp; Fitout</strong> offers apartment
          interior design and fit-out services in Dubai tailored to your
          lifestyle, space and budget. Our team can guide you through concepts,
          furniture selection, project execution and final styling. Contact us
          to discuss an apartment that feels thoughtfully designed and truly yours.
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

/* ----------------------------------------------------------------------
 * ONE DEFAULT EXPORT - EXACT STANDARD SECTION ORDER
 * ---------------------------------------------------------------------- */
export default function Body() {
  return (
    <div className="bg-[#111111] text-white">
      <IntroVideo />
      <ProjectGrid />
      <ContactStrip />
      <WorkspaceCards />
      <ApartmentTypesAndFacts />
      <RelatedServices />
      <ContactStrip />
      <WhyDesignMatters />
      <ApartmentServicesText />
      <TrendsAndProcess />
      <RegulationsAndWhyWeDo />
      <FrequentlyAskedQuestions />
      <FinalCallToAction />
    </div>
  );
}
