'use client';

import { useCallback, useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { FaPlay } from 'react-icons/fa';

/**
 * WE DO - BEAUTY SALON INTERIOR DESIGN DUBAI
 * Uses the Office Interior Design Dubai service-page template.
 *
 * 01 Intro text + click-to-play video
 * 02 Completed salon project grid (four columns on desktop; no slider)
 * 03 Get In Touch strip
 * 04 Four salon-area image + information cards
 * 05 Types of salon spaces + Dubai locations
 * 06 Related-services gallery (4 x 2 desktop / mobile carousel)
 * 07 Get In Touch strip
 * 08 Why salon design matters
 * 09 Our salon interior design services
 * 10 Design trends + process (photo on right)
 * 11 Fit-out considerations + why choose WE DO (photo on left)
 * 12 Interactive FAQ accordion
 * 13 Final call to action - LAST SECTION
 *
 * Fonts: font-conthrax / font-play
 * Palette: #000000 | #111111 | #caa193 | #f5ede5
 */

/* ======================================================================
 * MANUAL LAYOUT CONTROLS - MATCHES THE WE DO OFFICE PAGE TEMPLATE
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
 * PAGE DATA - ORIGINAL IMAGES AND PROJECT LINKS ARE PRESERVED
 * ====================================================================== */

// The video ID and thumbnail were present in the supplied commented-out code.
// Confirm that this YouTube video is the desired beauty-salon video before launch.
const SALON_YOUTUBE_VIDEO_ID = 'yNeCQLpYvww';
const SALON_VIDEO_THUMBNAIL = '/images/sl-1.png';

// Only TWO beauty-salon project entries were provided. Do not invent others.
const SALON_PROJECTS = [
  {
    image: '/images/dhfs (1).webp',
    title: 'Dubai Hills Mall Facial Studio',
    link: '/dubai-hills-mall-facial-studio',
  },
  {
    image: '/images/beauty-salon-interior.PNG',
    title: 'Jumeirah 1 Beauty Salon',
    link: '/jumeirah-1-beauty-salon',
  },
];

const SALON_SPACES = [
  {
    image: '/images/sl-1.png',
    title: 'Reception & Waiting Lounges',
    description:
      'We plan welcoming reception desks, comfortable waiting zones and coordinated brand details that create a confident first impression.',
  },
  {
    image: '/images/sl-2.png',
    title: 'Hair Styling & Beauty Stations',
    description:
      'Thoughtful mirror placement, lighting, storage and circulation support the everyday needs of stylists and their clients.',
  },
  {
    image: '/images/sl-4.png',
    title: 'Manicure & Pedicure Lounges',
    description:
      'Comfortable seating, suitable finishes and considered workstation spacing help create a calm and functional nail-care environment.',
  },
  {
    image: '/images/dhfs (1).webp',
    title: 'Facial & Spa Treatment Rooms',
    description:
      'Private treatment spaces bring together soothing lighting, practical equipment layouts and materials chosen for daily salon use.',
  },
];

// Eight images all appear in the user's original salon code/files.
const SALON_SERVICE_IMAGES = [
  { src: '/images/sl-2.png', alt: 'WE DO beauty salon interior design reference image one' },
  { src: '/images/sl-5.png', alt: 'WE DO beauty salon interior design reference image two' },
  { src: '/images/sl-7.png', alt: 'WE DO beauty salon interior design reference image three' },
  { src: '/images/sl-4.png', alt: 'Beauty salon pedicure lounge design reference in Dubai' },
  { src: '/images/sl-1.png', alt: 'WE DO salon interior design reference image four' },
  { src: '/images/sl-3.png', alt: 'WE DO salon design and fit-out reference image five' },
  { src: '/images/sl-8.png', alt: 'WE DO salon design and decoration reference image six' },
  { src: '/images/dhfs (1).webp', alt: 'Dubai Hills Mall facial studio project reference' },
];

const SALON_TYPES = [
  {
    title: 'Luxury Beauty Salons',
    description:
      'Refined beauty environments with elegant reception areas, coordinated finishes and comfortable client-service zones.',
  },
  {
    title: 'Boutique Salon Studios',
    description:
      'Carefully planned smaller salons with a distinctive brand personality and efficient use of every available area.',
  },
  {
    title: 'Hair & Styling Studios',
    description:
      'Practical styling stations, mirrors, lighting and circulation layouts that balance the needs of staff and customers.',
  },
  {
    title: 'Nail & Pedicure Lounges',
    description:
      'Dedicated manicure and pedicure zones designed around seating comfort, workflow and a relaxing atmosphere.',
  },
  {
    title: 'Facial & Skincare Studios',
    description:
      'Privacy-conscious treatment spaces with thoughtful lighting, suitable finishes and storage for service equipment.',
  },
  {
    title: 'Spa & Wellness Spaces',
    description:
      'Calming interiors that consider lighting, acoustics, materials and privacy for relaxing spa treatments.',
  },
  {
    title: 'Modern & Minimalist Salons',
    description:
      'Contemporary designs featuring clean lines, balanced colour palettes, carefully chosen furniture and uncluttered layouts.',
  },
  {
    title: 'Arabian-Inspired & Bespoke Salons',
    description:
      'Custom concepts that can incorporate rich textures, decorative details and locally inspired design elements.',
  },
];

// Stages retained from the original Beauty Salon DProjects component.
const SALON_PROCESS = [
  {
    title: 'Space Planning & Concept Development',
    description:
      'We study the available space and map customer circulation, reception, retail and treatment zones around the services you plan to offer.',
  },
  {
    title: 'Creative Design & Visualization',
    description:
      'Our team develops concepts, mood boards and 3D visuals to help communicate the proposed interior before execution.',
  },
  {
    title: 'Material Selection & Detailing',
    description:
      'We coordinate the choice of flooring, wall finishes, furniture, mirrors and lighting according to the design and practical needs.',
  },
  {
    title: 'Salon Fit-Out & Furnishing',
    description:
      'We execute the agreed fit-out works with attention to workstation placement, furniture, finishes and site coordination.',
  },
  {
    title: 'Final Styling & Handover',
    description:
      'Branding, decorative details and final quality checks complete the interior before it is prepared for handover.',
  },
];

// New questions are general guidance rather than unsupported price or timing claims.
const SALON_FAQS = [
  {
    q: 'What is included in beauty salon interior design in Dubai?',
    a: 'A salon project can include concept planning, reception and waiting areas, styling or treatment layouts, lighting, mirrors, materials, furniture, bespoke joinery, fit-out coordination and final styling. The scope is tailored to the individual salon.',
  },
  {
    q: 'Do you design both beauty salons and spas?',
    a: 'Yes. WE DO provides beauty salon, spa and treatment-space design services, including layouts for reception, beauty stations, nail lounges, facial studios and private treatment rooms.',
  },
  {
    q: 'How should a beauty salon be decorated?',
    a: 'Start with a clear brand identity, a welcoming reception, appropriate mirrors and lighting, comfortable client areas and durable finishes. Decorative details, colours, acoustics and displays can be coordinated with the salon concept.',
  },
  {
    q: 'Can you provide both salon design and fit-out services?',
    a: 'WE DO offers salon interior design and fit-out services, including concept development, material selection, furnishing and execution coordination according to the agreed scope.',
  },
  {
    q: 'What approvals may be required for a salon fit-out?',
    a: 'Requirements vary by building, location and proposed works. Building or developer permissions and any applicable technical or authority approvals should be confirmed during project planning.',
  },
  {
    q: 'How long does a salon interior fit-out take?',
    a: 'The schedule depends on the site size, number of treatment areas, extent of building works, bespoke furniture, material availability and approvals. A realistic programme can be provided once the project scope is assessed.',
  },
  {
    q: 'How much does beauty salon interior design cost in Dubai?',
    a: 'Costs vary with the salon size, design complexity, workstations, specialist equipment coordination, materials and fit-out requirements. WE DO can prepare a project-specific quotation after reviewing your space and brief.',
  },
  {
    q: 'Which salon project locations are featured on your website?',
    a: 'The salon projects supplied for this page are a facial studio at Dubai Hills Mall and a beauty salon in Jumeirah 1. You can contact us to discuss projects in other Dubai locations.',
  },
];

/* ======================================================================
 * SHARED CONTACT STRIP - USED TWICE IN THE TEMPLATE
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
      aria-labelledby="salon-intro-heading"
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
                id="salon-intro-heading"
                className="mb-3 py-2 font-conthrax text-sm tracking-widest text-[#caa193] sm:text-xl"
              >
                Beauty Salon Interior Design in Dubai – Luxury, Functionality &amp; Brand Identity
              </h2>
              <p className="font-play text-base leading-7 text-white [text-align:justify]">
                At{' '}
                <Link href="/" className="font-semibold text-[#caa193] hover:underline">
                  WE DO Interior Design &amp; Fitout
                </Link>
                , we create beauty salon interiors that combine visual appeal,
                daily functionality and client comfort. A well-designed salon
                influences how clients feel from the moment they arrive. With
                11+ years of experience, our approach brings together layouts,
                lighting, furniture, decoration and brand identity to help
                create welcoming salon and spa environments in Dubai.
              </p>
              <p className="mt-4 font-play text-base leading-7 text-white [text-align:justify]">
                Whether you are opening a new salon or renovating an existing
                space, we develop solutions for facial studios, beauty lounges
                and specialised treatment areas. Our featured work includes{' '}
                <Link href="/dubai-hills-mall-facial-studio" className="font-semibold text-[#caa193] hover:underline">
                  a facial studio at Dubai Hills Mall
                </Link>{' '}
                and{' '}
                <Link href="/jumeirah-1-beauty-salon" className="font-semibold text-[#caa193] hover:underline">
                  a beauty salon in Jumeirah 1
                </Link>
                . We also discuss new salon concepts in Downtown Dubai, Palm
                Jumeirah, Business Bay and other communities.
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
                Get Best Spa &amp; Beauty Salon Design Dubai
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
                    aria-label="Play WE DO beauty salon interior design video"
                    className="group relative block h-full w-full cursor-pointer overflow-hidden"
                  >
                    <Image
                      src={SALON_VIDEO_THUMBNAIL}
                      alt="WE DO beauty salon interior design video preview"
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
                    src={`https://www.youtube-nocookie.com/embed/${SALON_YOUTUBE_VIDEO_ID}?autoplay=1&mute=1&playsinline=1&rel=0`}
                    title="WE DO Spa and Beauty Salon Interior Design Dubai"
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
 * 02 - TWO SUPPLIED SALON PROJECT ENTRIES / FOUR-COLUMN DESKTOP GRID
 * ====================================================================== */
function ProjectGrid() {
  return (
    <section
      aria-labelledby="salon-projects-heading"
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
          id="salon-projects-heading"
          className="mb-10 text-center font-conthrax text-sm uppercase tracking-widest text-[#caa193] sm:text-xl md:text-2xl"
        >
          Our Beauty Salon Interior Design &amp; Fit-Out Projects in Dubai
        </h2>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          style={{ gap: LAYOUT.projects.gap }}
        >
          {SALON_PROJECTS.map((project) => (
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
 * 04 - SALON AREAS: FOUR IMAGE + INFORMATION CARDS
 * ====================================================================== */
function SalonSpaceCards() {
  return (
    <section
      aria-labelledby="salon-spaces-heading"
      className="bg-black text-white"
      style={{
        paddingTop: LAYOUT.workspaces.topPadding,
        paddingBottom: LAYOUT.workspaces.bottomPadding,
        paddingLeft: LAYOUT.workspaces.sidePadding,
        paddingRight: LAYOUT.workspaces.sidePadding,
      }}
    >
      <div className="mx-auto" style={{ maxWidth: LAYOUT.workspaces.maxWidth }}>
        <h2 id="salon-spaces-heading" className="sr-only">
          Beauty Salon Spaces We Design in Dubai
        </h2>
        <p
          className="mx-auto mb-10 text-center font-conthrax text-sm leading-7 text-white sm:text-base sm:leading-8"
          style={{ maxWidth: LAYOUT.workspaces.introMaxWidth }}
        >
          Every part of a beauty salon supports the client experience. At WE DO
          Interior Design &amp; Fitout, we plan reception lounges, beauty stations,
          nail-care areas and treatment rooms with attention to privacy,
          everyday functionality and a cohesive brand identity.
        </p>
        <div
          className="grid grid-cols-1 items-stretch sm:grid-cols-2 lg:grid-cols-4"
          style={{ gap: LAYOUT.workspaces.gap }}
        >
          {SALON_SPACES.map((space) => (
            <article key={space.title} className="group flex h-full min-w-0 flex-col">
              <div
                className="relative w-full overflow-hidden bg-zinc-900"
                style={{ aspectRatio: LAYOUT.workspaces.aspectRatio }}
              >
                <Image
                  src={space.image}
                  alt={`WE DO beauty salon design reference for ${space.title}`}
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
 * 05 - TYPES OF SALON SPACES + PRIME DUBAI LOCATIONS
 * ====================================================================== */
function SalonTypes() {
  return (
    <section
      aria-labelledby="salon-types-heading"
      className="bg-[#111111] px-5 pb-9 pt-10 text-white"
    >
      <div className="mx-auto" style={{ maxWidth: LAYOUT.types.maxWidth }}>
        <h2 id="salon-types-heading" className="sr-only">
          Types of Beauty Salon and Spa Spaces We Design
        </h2>
        <p className="mx-auto mb-10 max-w-4xl text-center font-conthrax text-md leading-7 text-[#caa193] sm:text-lg">
          Types of Beauty Salon &amp; Spa Interiors We Design in Dubai
        </p>
        <div className="grid grid-cols-1 gap-x-16 gap-y-7 font-play text-sm leading-7 text-white sm:text-base md:grid-cols-2">
          <div className="space-y-6">
            {SALON_TYPES.slice(0, 4).map(({ title, description }) => (
              <div key={title}>
                <h3 className="mb-1 font-play font-bold uppercase text-[#caa193]">
                  {title} –
                </h3>
                <p>{description}</p>
              </div>
            ))}
          </div>
          <div className="space-y-6">
            {SALON_TYPES.slice(4).map(({ title, description }) => (
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
              Beauty Salon Projects &amp; Service Locations –{' '}
            </strong>
            Our featured salon portfolio includes{' '}
            <Link href="/dubai-hills-mall-facial-studio" className="font-semibold text-[#caa193] hover:underline">
              Dubai Hills Mall
            </Link>{' '}
            and{' '}
            <Link href="/jumeirah-1-beauty-salon" className="font-semibold text-[#caa193] hover:underline">
              Jumeirah 1
            </Link>
            . We also welcome inquiries for salons in Downtown Dubai, Palm Jumeirah,
            Business Bay and other communities, subject to site and scope requirements.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ======================================================================
 * 06 - RELATED SALON SERVICES: 4 x 2 DESKTOP / MOBILE CAROUSEL
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
      aria-labelledby="salon-related-services-heading"
      className="bg-[#111111] px-4 pb-5 pt-8 sm:px-6"
    >
      <div className="mx-auto" style={{ maxWidth: LAYOUT.serviceGallery.maxWidth }}>
        <h2
          id="salon-related-services-heading"
          className="mb-7 text-center font-conthrax text-sm uppercase tracking-widest text-[#caa193] sm:text-lg md:text-xl"
        >
          We Do Salon Design Related Services
        </h2>
        <div
          className="mb-6 hidden grid-cols-4 lg:grid"
          style={{ gap: LAYOUT.serviceGallery.gap }}
        >
          {SALON_SERVICE_IMAGES.map(({ src, alt }) => (
            <div key={src} className="relative aspect-video overflow-hidden bg-zinc-900">
              <Image src={src} alt={alt} fill sizes="25vw" className="object-cover" />
            </div>
          ))}
        </div>

        <div className="mb-6 lg:hidden">
          <div ref={emblaRef} className="overflow-hidden">
            <div className="-ml-4 flex touch-pan-y">
              {SALON_SERVICE_IMAGES.map(({ src, alt }) => (
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
              aria-label="Previous salon service image"
              className="min-h-11 min-w-11 rounded border border-[#caa193] font-play text-xl text-white transition-colors hover:bg-[#caa193] hover:text-black"
            >
              ←
            </button>
            <button
              type="button"
              onClick={scrollNext}
              aria-label="Next salon service image"
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
 * 08 - WHY BEAUTY SALON INTERIOR DESIGN MATTERS
 * ====================================================================== */
function WhyDesignMatters() {
  return (
    <section
      aria-labelledby="salon-why-heading"
      className="bg-[#111111] px-4 pb-7 pt-5 sm:px-6"
    >
      <div className="mx-auto max-w-[1500px] rounded bg-black px-6 py-7 text-left text-white shadow sm:px-10 sm:py-9">
        <h2
          id="salon-why-heading"
          className="mb-4 font-conthrax text-md uppercase text-[#caa193] sm:text-lg"
        >
          Why Beauty Salon Interior Design in Dubai Matters
        </h2>
        <p className="font-play text-sm leading-7 sm:text-sm sm:leading-8">
          In the beauty industry, a client&apos;s first impression begins before
          a treatment starts. Thoughtful <strong>beauty salon interior design
          in Dubai</strong> can communicate professionalism, introduce a brand
          and create a sense of comfort and relaxation. The planning of
          reception, retail, styling stations and treatment rooms also affects
          how easily customers and staff move through the salon. Suitable
          lighting, mirrors, acoustics, finishes and comfortable seating are
          more than decoration: they help the interior support the services
          being offered. A cohesive environment can make each visit feel more
          considered and memorable while keeping everyday salon functions in view.
        </p>
      </div>
    </section>
  );
}

/* ======================================================================
 * 09 - OUR BEAUTY SALON INTERIOR DESIGN & FIT-OUT SERVICES
 * ====================================================================== */
function SalonServicesText() {
  return (
    <section
      aria-labelledby="salon-services-heading"
      className="bg-[#111111] px-4 pb-12 pt-7 text-white sm:px-6"
    >
      <div className="mx-auto max-w-[1500px] space-y-5 font-play text-sm leading-5 sm:text-sm sm:leading-6">
        <h2
          id="salon-services-heading"
          className="font-conthrax text-md uppercase tracking-widest text-[#caa193] sm:text-lg"
        >
          Our Salon Interior Design &amp; Fit-Out Services in Dubai
        </h2>
        <p>
          At <strong>WE DO Interior Design &amp; Fitout</strong>, we create
          bespoke interiors for beauty salons, facial studios, spa and wellness
          areas. Our services can span initial design and decoration through
          to{' '}
          <Link href="/fit-out-company-dubai" className="font-bold text-[#caa193] hover:underline">
            fit-out planning and execution
          </Link>
          , depending on the agreed brief and the needs of the premises.
        </p>
        <p>
          <strong className="text-[#caa193]">a. Salon Interior Design &amp; Decoration:</strong>{' '}
          We develop inviting receptions, waiting areas, treatment rooms and
          coordinated visual concepts. Materials, colours and brand details
          are selected to give each space an identity of its own.
        </p>
        <p>
          <strong className="text-[#caa193]">b. Spa &amp; Treatment Room Design:</strong>{' '}
          Our designs consider client privacy, calm lighting, acoustics,
          treatment-room layout and the practical needs of day-to-day spa
          operations, creating a relaxing environment without overlooking use.
        </p>
        <p>
          <strong className="text-[#caa193]">c. Luxury Salon Fit-Out:</strong>{' '}
          Our salon fit-out work can include the coordination of site planning,
          finishes, fixtures, furniture and other agreed construction details.
          Permissions and technical requirements are assessed for the specific
          premises and project scope.
        </p>
        <p>
          <strong className="text-[#caa193]">d. Custom Furniture, Mirrors &amp; Lighting:</strong>{' '}
          We plan beauty workstations, seating, cabinetry, retail shelving,
          lighting and mirror placement to support treatments while expressing
          the selected design style.
        </p>
        <p>
          <strong className="text-[#caa193]">e. Brand Integration &amp; Final Styling:</strong>{' '}
          Reception branding, carefully chosen decorative features and
          finishing touches help connect the salon&apos;s appearance to its
          business identity and desired client experience.
        </p>
      </div>
    </section>
  );
}

/* ======================================================================
 * 10 - SALON DESIGN TRENDS & PROCESS (PHOTO ON RIGHT)
 * ====================================================================== */
function TrendsAndProcess() {
  return (
    <section className="bg-[#111111] px-4 pb-14 pt-10 text-white sm:px-6">
      <div className="mx-auto grid max-w-[1800px] grid-cols-1 items-center gap-10 lg:grid-cols-2">
        <div className="min-w-0 space-y-6 font-play text-sm leading-5 sm:text-sm sm:leading-6">
          <h2 className="font-conthrax text-md uppercase text-[#caa193] sm:text-lg">
            Beauty Salon Interior Design Trends in Dubai
          </h2>
          <p>
            Salon designs may take a contemporary, minimalist, luxury or
            Arabian-inspired direction, depending on the character of the
            business. Neutral palettes and clean lines suit some concepts;
            richer textures and decorative details suit others. Thoughtful
            styling also makes use of mirrors, wall-mounted lights, built-in
            storage and displays to create welcoming spaces without crowding
            the rooms. For wellness-focused interiors, considered lighting,
            sound and materials can make treatment areas feel more peaceful.
          </p>
          <h2 className="pt-2 font-conthrax text-base uppercase text-[#caa193] sm:text-md">
            Our Salon Design &amp; Fit-Out Process
          </h2>
          <p>
            We follow a structured approach from concept to final handover,
            adapting the stages to the services offered and the approved scope:
          </p>
          <ol className="list-decimal space-y-3 pl-5 marker:text-[#caa193]">
            {SALON_PROCESS.map(({ title, description }) => (
              <li key={title}>
                <h3 className="font-play font-bold text-[#caa193]">{title}</h3>
                <p className="text-white">{description}</p>
              </li>
            ))}
          </ol>
        </div>
        <div className="overflow-hidden rounded-lg shadow-md">
          <Image
            src="/images/sl-3.png"
            alt="WE DO beauty salon interior design and styling reference image"
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
 * 11 - SALON FIT-OUT CONSIDERATIONS & WHY WE DO (PHOTO ON LEFT)
 * ====================================================================== */
function RegulationsAndWhyWeDo() {
  return (
    <section className="bg-[#111111] px-4 pb-14 pt-5 text-white sm:px-6">
      <div className="mx-auto grid max-w-[1800px] grid-cols-1 items-center gap-10 lg:grid-cols-2">
        <div className="overflow-hidden rounded-lg shadow-md">
          <Image
            src="/images/sl-8.png"
            alt="WE DO beauty salon fit-out and interior design reference image"
            width={1200}
            height={800}
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="h-auto w-full object-cover"
          />
        </div>
        <div className="min-w-0 space-y-6 font-play text-sm leading-5 sm:text-sm sm:leading-6">
          <h2 className="font-conthrax text-md uppercase text-[#caa193] sm:text-lg">
            Beauty Salon Fit-Out Regulations &amp; Planning in Dubai
          </h2>
          <p>
            A salon design must account for more than surface finishes. The
            proposed layout should consider building access, circulation,
            treatment-room requirements, lighting, plumbing and other relevant
            technical provisions. Landlord, developer or authority permissions
            may be required, depending on the building and the scope of the
            works. WE DO incorporates relevant site conditions and fit-out
            coordination into the project planning process.
          </p>
          <h2 className="pt-2 font-conthrax text-md text-[#caa193] sm:text-md">
            Why Choose WE DO Interior Design &amp; Fitout for Your Salon
          </h2>
          <p>
            An outstanding salon interior balances client comfort, smooth
            customer flow and a consistent visual identity. Our team combines
            beauty salon space planning with decorative details, custom
            furniture, lighting and fit-out services to create spaces that
            are practical as well as appealing. With 11+ years of experience,
            we approach each project according to its treatment offerings,
            brand and budget rather than using a fixed design for every client.
          </p>
          <p>
            Our original portfolio includes a{' '}
            <Link href="/dubai-hills-mall-facial-studio" className="font-bold text-[#caa193] hover:underline">
              Dubai Hills Mall facial studio
            </Link>{' '}
            and a{' '}
            <Link href="/jumeirah-1-beauty-salon" className="font-bold text-[#caa193] hover:underline">
              Jumeirah 1 beauty salon
            </Link>
            . We also provide related{' '}
            <Link href="/commercial-interior-fit-out" className="font-bold text-[#caa193] hover:underline">
              commercial interior fit-out services
            </Link>{' '}
            for businesses seeking coordinated design and execution.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ======================================================================
 * 12 - INTERACTIVE BEAUTY SALON FAQ ACCORDION
 * ====================================================================== */
function FrequentlyAskedQuestions() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <section
      aria-labelledby="salon-faq-heading"
      className="bg-[#111111] px-4 pb-20 pt-7 text-white sm:px-6"
    >
      <div className="mx-auto max-w-[1500px]">
        <h2
          id="salon-faq-heading"
          className="mb-10 text-center font-conthrax text-lg uppercase text-[#caa193] sm:text-xl"
        >
          Frequently Asked Questions (FAQs)
        </h2>
        <div className="mx-auto max-w-4xl space-y-4">
          {SALON_FAQS.map((faq, index) => {
            const expanded = openFaq === index;
            const panelId = `salon-faq-answer-${index}`;

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
 * 13 - FINAL CALL TO ACTION - NOTHING AFTER THIS
 * ====================================================================== */
function FinalCallToAction() {
  return (
    <section
      aria-labelledby="salon-final-cta"
      className="bg-[#111111] px-4 pb-12 pt-2 sm:px-6 sm:pb-16"
    >
      <div className="mx-auto max-w-[1280px] rounded-xl border-2 border-[#caa193] bg-black px-5 py-10 text-center sm:px-8 sm:py-14 lg:px-12">
        <h2
          id="salon-final-cta"
          className="mb-6 font-conthrax text-sm uppercase text-[#caa193] sm:text-lg"
        >
          Call to Action
        </h2>
        <p className="mx-auto mb-8 w-full max-w-[1350px] font-play text-xs leading-7 text-white sm:text-sm sm:leading-8">
          Planning a new beauty salon or renovating an existing spa in Dubai?
          <strong> WE DO Interior Design &amp; Fitout</strong> provides
          <strong> beauty salon interior design and fit-out services in Dubai</strong>{' '}
          tailored to your brand, treatments and customers. From welcoming
          reception spaces and comfortable treatment rooms to custom furniture,
          materials and coordinated fit-out works, we can help develop an
          interior that is as functional as it is inviting. Contact our team
          to discuss your salon project and arrange a consultation.
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
 * ONE DEFAULT EXPORT - ALL SECTIONS BELOW HERO IN TEMPLATE ORDER
 * ====================================================================== */
export default function Body() {
  return (
    <div className="bg-[#111111] text-white">
      <IntroVideo />
      <ProjectGrid />
      <ContactStrip />
      <SalonSpaceCards />
      <SalonTypes />
      <RelatedServices />
      <ContactStrip />
      <WhyDesignMatters />
      <SalonServicesText />
      <TrendsAndProcess />
      <RegulationsAndWhyWeDo />
      <FrequentlyAskedQuestions />
      <FinalCallToAction />
    </div>
  );
}
