'use client';

import { useCallback, useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { FaPlay } from 'react-icons/fa';

/**
 * WE DO - CLINIC INTERIOR DESIGN DUBAI
 * Based on the established office service-page template.
 *
 * 01 Intro text + click-to-play video
 * 02 Clinic design showcase (four per row on desktop; no slider)
 * 03 Get In Touch strip
 * 04 Four clinic-area image/info cards
 * 05 Clinic types + healthcare locations
 * 06 Related services image gallery (desktop grid / mobile carousel)
 * 07 Get In Touch strip
 * 08 Why clinic design matters
 * 09 Our clinic interior design and fit-out services
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
 * CLINIC PAGE DATA
 * ====================================================================== */

// Video ID and preview image were present in the clinic page's commented-out
// video block. Confirm the video matches the clinic service before publishing.
const CLINIC_YOUTUBE_VIDEO_ID = 'yNeCQLpYvww';
const CLINIC_VIDEO_THUMBNAIL = '/images/modern clinic design in Dubai.png';

// The uploaded project list referenced unrelated beauty-salon projects.
// Clinic gallery tiles below are clickable Link components with editable URLs.
// They deliberately make no claim to be verified completed clinic projects.
const CLINIC_SHOWCASE = [
  // TODO: Replace each empty `link` with the verified clinic project URL.
  // These images are a showcase, not confirmed completed-project case studies.
  { image: '/images/cl-1.png', title: 'Clinic Interior Design - Gallery 01', link: '' },
  { image: '/images/cl-2.png', title: 'Clinic Interior Design - Gallery 02', link: '' },
  { image: '/images/cl-3.png', title: 'Clinic Interior Design - Gallery 03', link: '' },
  { image: '/images/cl-4.png', title: 'Clinic Interior Design - Gallery 04', link: '' },
  { image: '/images/cl-6.png', title: 'Clinic Interior Design - Gallery 05', link: '' },
  { image: '/images/cl-7.png', title: 'Clinic Interior Design - Gallery 06', link: '' },
];

const CLINIC_AREAS = [
  {
    image: '/images/cl-3.png',
    title: 'Clinic Reception & Waiting Areas',
    description:
      'We create welcoming reception desks, comfortable seating and clear circulation routes that support a calm arrival and smooth patient check-in.',
  },
  {
    image: '/images/cl-1.png',
    title: 'Consultation & Examination Rooms',
    description:
      'Our room layouts consider patient privacy, clinician movement, suitable lighting and practical access to examination equipment.',
  },
  {
    image: '/images/cl-2.png',
    title: 'Treatment & Procedure Spaces',
    description:
      'We plan functional treatment rooms with appropriate surfaces, considered storage and finishes selected for their intended clinical use.',
  },
  {
    image: '/images/cl-4.png',
    title: 'Medical Storage & Staff Areas',
    description:
      'Thoughtful cabinetry, staff-support spaces and organised storage help healthcare teams keep essential supplies accessible and work efficiently.',
  },
];

// Uses only clinic image paths referenced in the supplied code and attached section.
const CLINIC_SERVICE_IMAGES = [
  { src: '/images/cl-1.png', alt: 'Clinic interior design reference showing healthcare space planning' },
  { src: '/images/cl-2.png', alt: 'Clinic interior design and modern treatment-space concept' },
  { src: '/images/cl-4.png', alt: 'Contemporary clinic interior finishes and fittings' },
  { src: '/images/cl-3.png', alt: 'Healthcare interior design environment in Dubai' },
  { src: '/images/cl-6.png', alt: 'Clinic and medical centre fit-out design reference' },
  { src: '/images/cl-7.png', alt: 'Medical interior planning and clinic fit-out' },
  { src: '/images/modern clinic design in Dubai.png', alt: 'Modern clinic design reference in Dubai' },
  // Add an eighth image when an additional verified file is available.
];

const CLINIC_TYPES = [
  {
    title: 'Private Medical Clinics',
    description:
      'Patient-focused layouts for appointment-based practices, integrating reception, examination and staff-support areas.',
  },
  {
    title: 'Skin & Dermatology Clinics',
    description:
      'Refined consultation and treatment interiors that consider privacy, practical storage and an inviting experience.',
  },
  {
    title: 'Specialist & Outpatient Centres',
    description:
      'Adaptable clinics with clear wayfinding and planning that reflects clinical workflows and room requirements.',
  },
  {
    title: 'Diagnostic & Medical Centres',
    description:
      'Functional healthcare spaces with appropriate circulation, equipment coordination and comfortable waiting areas.',
  },
  {
    title: 'Hospital Interior Areas',
    description:
      'Design concepts for patient-facing spaces, treatment support and shared areas, planned for relevant operational needs.',
  },
  {
    title: 'Clinic Reception & Waiting Areas',
    description:
      'Welcoming arrival areas that combine durable finishes, straightforward patient flows and a recognisable brand identity.',
  },
  {
    title: 'Consultation & Treatment Rooms',
    description:
      'Carefully considered workspaces that accommodate the practitioner, the patient and the equipment each procedure requires.',
  },
  {
    title: 'Staff & Administrative Areas',
    description:
      'Practical offices, storage and support zones that help teams manage records, supplies and day-to-day activities.',
  },
];

const CLINIC_PROCESS = [
  {
    title: 'Consultation & Clinical Brief',
    description:
      'We discuss the medical speciality, proposed services, brand identity, patient needs, site conditions and operating requirements.',
  },
  {
    title: 'Space Planning & Patient Flow',
    description:
      'We organise reception, waiting, examination, treatment and back-of-house functions around efficient movement and appropriate privacy.',
  },
  {
    title: 'Concept Design & 3D Visualisation',
    description:
      'The design direction is developed through layouts, finishes, mood boards and visualisations to review before execution.',
  },
  {
    title: 'Technical Design & Approval Coordination',
    description:
      'Detailed drawings and building-services requirements are coordinated with relevant professionals and applicable approval processes.',
  },
  {
    title: 'Clinic Fit-Out & Installation',
    description:
      'Agreed site works, suitable materials, custom cabinetry and finishes are managed according to the approved project scope.',
  },
  {
    title: 'Checks, Handover & Aftercare',
    description:
      'The completed works are reviewed against the agreed specifications before handover, with applicable aftercare support.',
  },
];

// General clinic-specific FAQs added because no FAQ section was in the source.
// Do not promise fixed prices, timelines, permits or guaranteed outcomes.
const CLINIC_FAQS = [
  {
    q: 'What is included in clinic interior design and fit-out in Dubai?',
    a: 'The scope may cover the initial brief, space planning, concept design, 3D visualisation, detailed drawings, interior finishes, furniture and cabinetry, coordination of site works, and handover. The exact deliverables are set out in the agreed proposal.',
  },
  {
    q: 'Do you design private clinics, medical centres and healthcare facilities?',
    a: 'WE DO develops interior design and fit-out solutions for private practices, skin and specialist clinics, medical centres and healthcare environments. Layouts and specifications are tailored to the facility type and clinical brief.',
  },
  {
    q: 'How do you plan consultation, treatment and patient waiting areas?',
    a: 'We consider patient and staff circulation, reception requirements, privacy, storage, equipment needs, lighting and the intended function of each room. Technical and clinical requirements must be confirmed for the specific practice.',
  },
  {
    q: 'Which materials work well in a modern clinic interior?',
    a: 'Material selection depends on the room and its clinical use. The design may call for suitable cleanable finishes, durable surfaces, appropriate flooring and practical storage, subject to relevant healthcare and infection-control requirements.',
  },
  {
    q: 'Does a clinic fit-out in Dubai need DHA or other approvals?',
    a: 'The approvals depend on the medical activities, facility licence, location and construction scope. DHA or other relevant authorities, building management and safety requirements may apply. Required submissions and responsibilities should be confirmed before work begins.',
  },
  {
    q: 'Can an operating medical clinic be renovated in phases?',
    a: 'Phased works may be possible depending on patient safety, infection-control measures, access, the building rules and the nature of the works. The approach should be assessed with the operator and responsible project professionals.',
  },
  {
    q: 'How long does clinic interior design and fit-out take?',
    a: 'Timelines vary with clinic size, room requirements, equipment, detailed design, approvals, material lead times and construction scope. A project schedule can be developed after the brief and site assessment.',
  },
  {
    q: 'How can I request a clinic interior design quotation?',
    a: 'Share your location, approximate floor area, clinic speciality, required rooms, site status and intended fit-out scope. Our team can review the requirements and discuss a tailored proposal.',
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
                Clinic Interior Design &amp; Healthcare Fit-Out Services in Dubai
              </h2>
              <p className="font-play text-base leading-7 text-white [text-align:justify]">
                At <strong>WE DO Interior Design &amp; Fitout</strong>, we plan
                welcoming and functional clinic interiors for private medical
                practices, specialist clinics and healthcare centres in Dubai.
                Our approach combines patient comfort, practical staff workflows,
                thoughtful lighting and durable materials suited to the purpose
                of each space. From the reception to consultation and treatment
                rooms, we design interiors around the facility&apos;s operational
                needs and brand identity.
              </p>
              <p className="mt-4 font-play text-base leading-7 text-white [text-align:justify]">
                Our clinic design and <Link href="/fit-out-company-dubai" className="font-semibold text-[#caa193] hover:underline">fit-out services</Link> can
                cover layouts, visualisation, interior finishes, bespoke storage
                and construction coordination. Planning also considers applicable
                building and healthcare requirements, with approvals addressed
                according to the location and agreed scope.
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
                Explore Clinic Interior Design in Dubai
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
                    aria-label="Play WE DO clinic interior design video"
                    className="group relative block h-full w-full cursor-pointer overflow-hidden"
                  >
                    <Image
                      src={CLINIC_VIDEO_THUMBNAIL}
                      alt="Clinic interior design video preview from WE DO"
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
                    src={`https://www.youtube-nocookie.com/embed/${CLINIC_YOUTUBE_VIDEO_ID}?autoplay=1&playsinline=1&rel=0`}
                    title="WE DO Clinic Interior Design & Fitout Dubai"
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
 * 02 - CLICKABLE CLINIC SHOWCASE GRID - FOUR ACROSS DESKTOP, NO SLIDER
 * ====================================================================== */
function ProjectGrid() {
  return (
    <section
      aria-labelledby="clinic-projects-heading"
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
          id="clinic-projects-heading"
          className="mb-10 text-center font-conthrax text-sm uppercase tracking-widest text-[#caa193] sm:text-xl md:text-2xl"
        >
          Clinic Interior Design &amp; Fit-Out Showcase in Dubai
        </h2>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          style={{ gap: LAYOUT.projects.gap }}
        >
          {CLINIC_SHOWCASE.map((item) => (
            <Link
              key={item.image}
              href={item.link || '#'}
              onClick={(event) => {
                // Don't jump to the top of the page while the URL is pending.
                // Add a real link in CLINIC_SHOWCASE; no further JSX edits needed.
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
 * 04 - CLINIC AREAS: FOUR IMAGE + INFO CARDS
 * ====================================================================== */
function ClinicAreaCards() {
  return (
    <section
      className="bg-black text-white"
      aria-labelledby="clinic-areas-heading"
      style={{
        paddingTop: LAYOUT.workspaces.topPadding,
        paddingBottom: LAYOUT.workspaces.bottomPadding,
        paddingLeft: LAYOUT.workspaces.sidePadding,
        paddingRight: LAYOUT.workspaces.sidePadding,
      }}
    >
      <div className="mx-auto" style={{ maxWidth: LAYOUT.workspaces.maxWidth }}>
        <h2 id="clinic-areas-heading" className="sr-only">
          Clinic Interior Spaces We Design in Dubai
        </h2>
        <p
          className="mx-auto mb-10 text-center font-conthrax text-sm leading-7 text-white sm:text-base sm:leading-8"
          style={{ maxWidth: LAYOUT.workspaces.introMaxWidth }}
        >
          Every area of a healthcare clinic has a specific purpose. WE DO
          considers the patient journey, efficient staff movement and welcoming
          interiors while planning reception, consultation, treatment and
          supporting spaces.
        </p>
        <div
          className="grid grid-cols-1 items-stretch sm:grid-cols-2 lg:grid-cols-4"
          style={{ gap: LAYOUT.workspaces.gap }}
        >
          {CLINIC_AREAS.map((area) => (
            <article key={area.title} className="group flex h-full min-w-0 flex-col">
              <div
                className="relative w-full overflow-hidden bg-zinc-900"
                style={{ aspectRatio: LAYOUT.workspaces.aspectRatio }}
              >
                <Image
                  src={area.image}
                  alt={`Healthcare interior design reference for ${area.title}`}
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
 * 05 - CLINIC TYPES + DUBAI HEALTHCARE LOCATIONS
 * ====================================================================== */
function ClinicTypes() {
  return (
    <section
      className="bg-[#111111] px-5 pb-9 pt-10 text-white"
      aria-labelledby="clinic-types-heading"
    >
      <div className="mx-auto" style={{ maxWidth: LAYOUT.types.maxWidth }}>
        <h2 id="clinic-types-heading" className="sr-only">
          Types of Clinic and Healthcare Interiors We Design in Dubai
        </h2>
        <p className="mx-auto mb-10 max-w-4xl text-center font-conthrax text-md leading-7 text-[#caa193] sm:text-lg">
          Healthcare Interiors Tailored to Different Clinic Needs
        </p>
        <div className="grid grid-cols-1 gap-x-16 gap-y-7 font-play text-sm leading-7 text-white sm:text-base md:grid-cols-2">
          <div className="space-y-6">
            {CLINIC_TYPES.slice(0, 4).map(({ title, description }) => (
              <div key={title}>
                <h3 className="mb-1 font-play font-bold uppercase text-[#caa193]">{title} -</h3>
                <p>{description}</p>
              </div>
            ))}
          </div>
          <div className="space-y-6">
            {CLINIC_TYPES.slice(4).map(({ title, description }) => (
              <div key={title}>
                <h3 className="mb-1 font-play font-bold uppercase text-[#caa193]">{title} -</h3>
                <p>{description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 rounded-r-lg border-l-4 border-[#caa193] bg-zinc-900/50 p-6">
          <p className="font-play text-sm italic leading-relaxed text-white sm:text-base">
            <strong className="not-italic text-[#caa193]">Clinic Interior Design Across Dubai - </strong>
            WE DO discusses clinic and medical-centre fit-out requirements for
            areas including <strong>Dubai Healthcare City, Business Bay, Dubai Marina,
            Jumeirah, Al Wasl and Sheikh Zayed Road</strong>. The layout, technical
            scope and relevant approvals depend on the building, location and
            proposed medical services. Learn more about our work in <Link href="/interior-design-company-business-bay" className="font-bold text-[#caa193] hover:underline">Business Bay</Link>.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ======================================================================
 * 06 - RELATED CLINIC DESIGN SERVICES: 4 COLUMNS / MOBILE CAROUSEL
 * ====================================================================== */
function RelatedServices() {
  const autoplay = useMemo(() => Autoplay({ delay: 3000, stopOnInteraction: false }), []);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' }, [autoplay]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);

  return (
    <section
      className="bg-[#111111] px-4 pb-5 pt-8 sm:px-6"
      aria-labelledby="clinic-related-services-heading"
    >
      <div className="mx-auto" style={{ maxWidth: LAYOUT.serviceGallery.maxWidth }}>
        <h2
          id="clinic-related-services-heading"
          className="mb-7 text-center font-conthrax text-sm uppercase tracking-widest text-[#caa193] sm:text-lg md:text-xl"
        >
          WE DO Clinic Interior Design Related Services
        </h2>
        <div
          className="mb-6 hidden grid-cols-4 lg:grid"
          style={{ gap: LAYOUT.serviceGallery.gap }}
        >
          {CLINIC_SERVICE_IMAGES.map(({ src, alt }) => (
            <div key={src} className="relative aspect-video overflow-hidden bg-zinc-900">
              <Image src={src} alt={alt} fill sizes="25vw" className="object-cover" />
            </div>
          ))}
        </div>
        <div className="mb-6 lg:hidden">
          <div ref={emblaRef} className="overflow-hidden">
            <div className="-ml-4 flex touch-pan-y">
              {CLINIC_SERVICE_IMAGES.map(({ src, alt }) => (
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
              aria-label="Previous clinic interior design image"
              className="min-h-11 min-w-11 rounded border border-[#caa193] font-play text-xl text-white transition-colors hover:bg-[#caa193] hover:text-black"
            >
              &larr;
            </button>
            <button
              type="button"
              onClick={scrollNext}
              aria-label="Next clinic interior design image"
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
 * 08 - WHY CLINIC DESIGN MATTERS
 * ====================================================================== */
function WhyDesignMatters() {
  return (
    <section className="bg-[#111111] px-4 pb-7 pt-5 sm:px-6">
      <div className="mx-auto max-w-[1500px] rounded bg-black px-6 py-7 text-left text-white shadow sm:px-10 sm:py-9">
        <h2 className="mb-4 font-conthrax text-md uppercase text-[#caa193] sm:text-lg">
          Why Clinic Interior Design in Dubai Matters
        </h2>
        <p className="font-play text-sm leading-7 sm:text-sm sm:leading-8">
          The interior of a medical clinic affects how patients experience
          the space, how clearly they move between appointments and how
          efficiently staff perform their work. Thoughtful <strong>clinic
          interior design in Dubai</strong> combines a welcoming reception,
          private consultation rooms, suitable lighting, well-planned storage
          and cleanable materials. Carefully designed circulation and acoustic
          considerations can support calmer, more organised healthcare
          environments without compromising the clinical and operational
          requirements of the facility. At <strong>WE DO Interior Design
          &amp; Fitout</strong>, each concept is developed around the relevant
          medical speciality and project brief.
        </p>
      </div>
    </section>
  );
}

/* ======================================================================
 * 09 - OUR CLINIC INTERIOR DESIGN SERVICES
 * ====================================================================== */
function ClinicServicesText() {
  return (
    <section className="bg-[#111111] px-4 pb-12 pt-7 text-white sm:px-6">
      <div className="mx-auto max-w-[1500px] space-y-5 font-play text-sm leading-5 sm:text-sm sm:leading-6">
        <h2 className="font-conthrax text-md uppercase tracking-widest text-[#caa193] sm:text-lg">
          Our Clinic Interior Design &amp; Fit-Out Services in Dubai
        </h2>
        <p>
          WE DO offers tailored design and fit-out support for healthcare
          spaces, balancing functional needs, patient experience and visual identity.
        </p>
        <p>
          <strong className="text-[#caa193]">a. Medical Clinic Setup &amp; Space Planning:</strong>{' '}
          We coordinate the concept for new clinics and medical centres, with
          layouts for waiting, consultation, examination and staff-support areas.
        </p>
        <p>
          <strong className="text-[#caa193]">b. Clinic Interior Fit-Out &amp; Renovation:</strong>{' '}
          Our agreed works can include layout adjustments, walls, finishes,
          lighting and interior fixtures to renew an existing practice.
        </p>
        <p>
          <strong className="text-[#caa193]">c. Hospital &amp; Medical Centre Interiors:</strong>{' '}
          We develop patient-facing and staff-support interior concepts that
          consider healthcare operations, circulation and technical coordination.
        </p>
        <p>
          <strong className="text-[#caa193]">d. Skin &amp; Specialist Clinic Design:</strong>{' '}
          Consultation and treatment settings are planned to align with the
          chosen speciality, clinical equipment and brand presentation.
        </p>
        <p>
          <strong className="text-[#caa193]">e. Bespoke Furniture &amp; Medical Storage:</strong>{' '}
          Practical cabinetry, organised supplies, ergonomic seating and
          fitted furniture support an uncluttered, functional clinic environment.
        </p>
        <p>
          <strong className="text-[#caa193]">f. Lighting, Acoustics &amp; Material Selection:</strong>{' '}
          We consider appropriate lighting, acoustic privacy and finishes
          selected for their intended clinical use and maintenance needs.
        </p>
        <p>
          <strong className="text-[#caa193]">g. Healing-Inspired &amp; Biophilic Design:</strong>{' '}
          Natural textures, considered colour palettes and carefully placed
          greenery can create a calming visual environment where appropriate.
        </p>
      </div>
    </section>
  );
}

/* ======================================================================
 * 10 - CLINIC DESIGN TRENDS & PROCESS: PHOTO ON RIGHT
 * ====================================================================== */
function TrendsAndProcess() {
  return (
    <section className="bg-[#111111] px-4 pb-14 pt-10 text-white sm:px-6">
      <div className="mx-auto grid max-w-[1800px] grid-cols-1 items-center gap-10 lg:grid-cols-2">
        <div className="min-w-0 space-y-6 font-play text-sm leading-5 sm:text-sm sm:leading-6">
          <h2 className="font-conthrax text-md uppercase text-[#caa193] sm:text-lg">
            Clinic Interior Design Trends in Dubai
          </h2>
          <p>
            Contemporary healthcare interiors increasingly consider
            <strong> calm colour palettes, biophilic elements, practical storage,
            acoustic privacy and patient-centred wayfinding</strong>. The right
            approach combines these design ideas with equipment requirements,
            infection-control considerations and durable surfaces rather than
            pursuing aesthetics alone.
          </p>
          <h2 className="pt-2 font-conthrax text-base uppercase text-[#caa193] sm:text-md">
            Our Clinic Design &amp; Fit-Out Process
          </h2>
          <p>
            From the initial medical brief to design and construction, we
            follow a coordinated approach suited to the facility and agreed scope:
          </p>
          <ol className="list-decimal space-y-3 pl-5 marker:text-[#caa193]">
            {CLINIC_PROCESS.map(({ title, description }) => (
              <li key={title}>
                <h3 className="font-play font-bold text-[#caa193]">{title}</h3>
                <p className="text-white">{description}</p>
              </li>
            ))}
          </ol>
        </div>
        <div className="overflow-hidden rounded-lg shadow-md">
          <Image
            src="/images/cl-6.png"
            alt="Contemporary healthcare interior design and clinic fit-out concept"
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
 * 11 - CLINIC FIT-OUT CONSIDERATIONS + WHY WE DO: PHOTO ON LEFT
 * ====================================================================== */
function RegulationsAndWhyWeDo() {
  return (
    <section className="bg-[#111111] px-4 pb-14 pt-5 text-white sm:px-6">
      <div className="mx-auto grid max-w-[1800px] grid-cols-1 items-center gap-10 lg:grid-cols-2">
        <div className="overflow-hidden rounded-lg shadow-md">
          <Image
            src="/images/cl-7.png"
            alt="Clinic interior design reference for medical and patient spaces"
            width={1200}
            height={800}
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="h-auto w-full object-cover"
          />
        </div>
        <div className="min-w-0 space-y-6 font-play text-sm leading-5 sm:text-sm sm:leading-6">
          <h2 className="font-conthrax text-md uppercase text-[#caa193] sm:text-lg">
            Clinic Fit-Out Requirements &amp; Approvals in Dubai
          </h2>
          <p>
            A medical facility may be subject to requirements from the relevant
            healthcare regulator, building management and other authorities,
            depending on its licence, location and proposed services. Matters
            can include room functionality, accessibility, fire and life safety,
            MEP coordination, hygiene and infection-control provisions. We
            consider these technical requirements during planning, with approval
            responsibilities confirmed in the agreed <Link href="/fit-out-company-dubai" className="font-bold text-[#caa193] hover:underline">clinic fit-out</Link> scope.
          </p>
          <h2 className="pt-2 font-conthrax text-md text-[#caa193] sm:text-md">
            Why Choose WE DO Interior Design &amp; Fitout for Your Clinic?
          </h2>
          <p>
            WE DO brings together interior design, space planning and fit-out
            coordination for healthcare environments. We aim to create interiors
            that represent the practice's brand while supporting staff workflows,
            patient comfort and the practical demands of clinical spaces.
          </p>
          <p>
            Our approach considers cleanable finishes, suitable storage,
            lighting, acoustics and the coordination needed for consultation,
            treatment and support areas. From medical clinics in Dubai Healthcare
            City to practices in Business Bay and Jumeirah, each proposal is
            tailored to the site's actual requirements and scope.
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
      aria-labelledby="clinic-faq-heading"
    >
      <div className="mx-auto max-w-[1500px]">
        <h2
          id="clinic-faq-heading"
          className="mb-10 text-center font-conthrax text-lg uppercase text-[#caa193] sm:text-xl"
        >
          Frequently Asked Questions (FAQs)
        </h2>
        <div className="mx-auto max-w-4xl space-y-4">
          {CLINIC_FAQS.map((faq, index) => {
            const expanded = openFaq === index;
            const panelId = `clinic-faq-answer-${index}`;
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
      aria-labelledby="clinic-final-cta"
    >
      <div className="mx-auto max-w-[1280px] rounded-xl border-2 border-[#caa193] bg-black px-5 py-10 text-center sm:px-8 sm:py-14 lg:px-12">
        <h2
          id="clinic-final-cta"
          className="mb-6 font-conthrax text-sm uppercase text-[#caa193] sm:text-lg"
        >
          Call to Action
        </h2>
        <p className="mx-auto mb-8 w-full max-w-[1350px] font-play text-xs leading-7 text-white sm:text-sm sm:leading-8">
          Planning a <strong>clinic interior design project in Dubai</strong>,
          a private medical centre, specialist practice or a healthcare
          renovation? <strong>WE DO Interior Design &amp; Fitout</strong> can
          help you develop practical, patient-focused interiors that reflect
          your brand and support daily clinical operations. From consultation
          rooms and reception areas to detailed finishes and
          <strong> clinic fit-out services</strong>, discuss your facility's
          requirements with our team to explore a tailored proposal.
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
      <ClinicAreaCards />
      <ClinicTypes />
      <RelatedServices />
      <ContactStrip />
      <WhyDesignMatters />
      <ClinicServicesText />
      <TrendsAndProcess />
      <RegulationsAndWhyWeDo />
      <FrequentlyAskedQuestions />
      <FinalCallToAction />
    </div>
  );
}
