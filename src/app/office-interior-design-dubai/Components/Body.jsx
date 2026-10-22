'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { FaPlay } from 'react-icons/fa';

/* ======================================================================
 * WE DO OFFICE PAGE - SINGLE BODY FILE
 *
 * Page order follows the supplied office-page PDF exactly:
 * 01  Intro text + Instagram video
 * 02  Office project grid (4 across desktop, no slider)
 * 03  Get In Touch strip
 * 04  Four office workspace image/info cards
 * 05  Types of office spaces + prime Dubai locations
 * 06  Office-related services image gallery
 * 07  Get In Touch strip
 * 08  Why office design matters
 * 09  Our office interior design services
 * 10  Office design trends + our design process
 * 11  Regulations + why choose WE DO
 * 12  FAQs
 * 13  FINAL Call to Action (second supplied PDF)
 *
 * The old secondary five-project gallery and mid-page CTA are deliberately
 * omitted: neither appears in the final design, and both duplicate sections.
 *
 * Colors: black #000000 | background #111111 | rose #caa193 | cream #f5ede5
 * Font classes are inherited from the existing site: font-conthrax/font-play.
 * ====================================================================== */

/* ======================================================================
 * MANUAL LAYOUT CONTROLS - CHANGE VALUES HERE
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
  types: {
    maxWidth: '1140px',
  },
  serviceGallery: {
    maxWidth: '1880px',
    gap: '24px',
  },
};

/* ======================================================================
 * PROJECT DATA
 * Titles and routes are preserved from the supplied code, including the
 * repeated placeholder project entries; confirm those routes before launch.
 * ====================================================================== */
const OFFICE_PROJECTS = [
  {
    image: '/images/x.learning (4).webp',
    title: 'Dubai Knowledge Park Office Fit-Out',
    link: '/dubai-knowledge-park-office-fit-out',
  },
  {
    image: '/images/1ofc-1.png',
    title: 'Business Bay Classic Office',
    link: '/business-bay-classic-office',
  },
  {
    image: '/images/2ofc-1.png',
    title: 'Business Bay Minimalist Office',
    link: '/business-bay-minimalist-office',
  },
  {
    image: '/images/3ofc-3.png',
    title: 'DIFC Executive Office',
    link: '/difc-executive-office',
  },
  {
    image: '/images/4ofc-4.png',
    title: 'Downtown Dubai Corporate Office',
    link: '/downtown-dubai-corporate-office',
  },
  {
    image: '/images/5ofc-5.png',
    title: 'Dubai Hills Modern Office',
    link: '/dubai-hills-modern-office',
  },
  {
    image: '/images/6ofc-2.png',
    title: 'Dubai Internet City Tech Office',
    link: '/dubai-internet-city-tech-office',
  },
  {
    image: '/images/7ofc-2.png',
    title: 'Al Safa Real Estate Office',
    link: '/dubai-marina-real-estate-office',
  },
  {
    image: '/images/8ofc-1.png',
    title: 'MEBY Business Bay Travel Agency',
    link: '/dubai-media-city-creative-office',
  },
  {
    image: '/images/9ofc-9.png',
    title: 'Jumeirah Lakes Tower Consultancy Office',
    link: '/jumeirah-lakes-towers-consultancy-office',
  },
  {
    image: '/images/nest-finders.png',
    title: 'Al Safa Real Estate Office',
    link: '/al-safa-real-estate-office',
  },
  {
    image: '/images/meby (6).webp',
    title: 'MEBY Business Bay Travel Agency',
    link: '/business-bay-travel-agency',
  },
];

const WORKSPACE_AREAS = [
  {
    image: '/images/x.learning (4).webp',
    title: 'Reception & Lobby Design',
    description:
      'We design welcoming reception areas with refined counters, comfortable waiting spaces and thoughtful finishes that create a strong first impression.',
  },
  {
    image: '/images/1ofc-1.png',
    title: 'Open-Plan Workstation Areas',
    description:
      'Our workspace layouts combine practical desk arrangements, efficient circulation and ergonomic planning to support collaboration and daily productivity.',
  },
  {
    image: '/images/2ofc-1.png',
    title: 'Executive & CEO Office Design',
    description:
      'We create sophisticated private offices with carefully selected materials, bespoke storage and balanced lighting for focused leadership spaces.',
  },
  {
    image: '/images/3ofc-3.png',
    title: 'Conference Rooms & Training Suites',
    description:
      'We plan professional meeting and training environments with flexible seating, considered acoustics and layouts that support presentations and teamwork.',
  },
];

const OFFICE_SERVICE_IMAGES = [
  '/images/1ofc-3.png',
  '/images/2ofc-3.png',
  '/images/3ofc-3.png',
  '/images/4ofc-3.png',
  '/images/5ofc-3.png',
  '/images/6ofc-3.png',
  '/images/7ofc-3.png',
  '/images/8ofc-3.png',
 
];

const OFFICE_TYPES = [
  {
    title: 'Corporate Offices',
    description:
      'Professional and scalable ambiances crafted for large teams, showcasing strong corporate office interior design Dubai standards.',
  },
  {
    title: 'Co-Working Spaces',
    description:
      "Advanced and thoughtfully designed offices perfect for collaborative working environments and companies in today's world.",
  },
  {
    title: 'Boardrooms and Meeting Rooms',
    description:
      'Properly designed offices featuring good designs suitable for presentations, meetings, and decisions.',
  },
  {
    title: 'Reception and Waiting Areas',
    description:
      'High-end entrance spaces that craft lasting first impressions, match your brand identity.',
  },
  {
    title: 'Private Cabins and Manager Rooms',
    description:
      'Practical and luxurious enclosed spaces for leadership and focused work.',
  },
  {
    title: 'Lounge and Pantry Spaces',
    description:
      'Peaceful zones crafted to elevate employee wellbeing and informal interactions.',
  },
  {
    title: 'Startups & Small Offices',
    description:
      'Smart and exclusive layouts for compact spaces, best for businesses seeking interior offices near me or cost-effective services.',
  },
  {
    title: 'Executive Offices',
    description:
      'Quality and elegant interiors specific for top management, blending luxury with practicality.',
  },
];

const DESIGN_PROCESS = [
  {
    title: 'Site Visit and Measurement',
    description:
      'We start with a detailed site inspection to understand the space, needs, and technical aspects for your office interior design in Dubai space.',
  },
  {
    title: 'Zoning and Space Planning',
    description:
      'Our specialization crafts exclusive layouts that maximize practicality and workflow, making sure smart utilization of your office interiors in Dubai.',
  },
  {
    title: 'Development of Concepts and Visualization in 3D',
    description:
      'We provide visionary ideas and supply realistic 3D visuals so that you can get an idea of what the end result will be even before completing the project.',
  },
  {
    title: 'Selection of Furniture, Lighting, and Material',
    description:
      'We smartly choose the right materials, furniture, and lighting services to suit your brand identity and budget.',
  },
  {
    title: 'Execution and Management of Projects',
    description:
      'Being professional contractors in Dubai office fit-out services, we ensure the successful completion of your project.',
  },
  {
    title: 'Final Handover and Aftercare',
    description:
      'We ensure a flawless handover and offer ongoing support, creating us one of the best office fit out companies in Dubai for timeless partnerships.',
  },
];

const FAQS = [
  {
    q: 'What is office interior design Dubai?',
    a: 'It is the process of crafting practical and elegant workspaces that elevate functionality and efficiency.',
  },
  {
    q: 'How to design an office interior?',
    a: 'It includes styling layouts, quality materials, and integrating branding to design a sophisticated workspace.',
  },
  {
    q: 'What are the requirements for office interior design?',
    a: 'The primary requirements for a business are space design, ergonomics in furniture, lighting, and legal issues.',
  },
  {
    q: 'How long does it take to carry out an office fit-out in Dubai?',
    a: 'Most office interior fit-out projects take 4–12 weeks based on size and complexity.',
  },
  {
    q: 'How much will office interior design cost in Dubai?',
    a: 'Depends on quality of materials and project size.',
  },
  {
    q: 'Do you handle office fit-out approvals in Dubai?',
    a: 'Yes, we handle all approvals needed for office fit-out companies in Dubai projects.',
  },
  {
    q: 'Can you design small office spaces?',
    a: 'Yes, we are experts in compact and exclusive layouts for startups and small offices.',
  },
];

/* ======================================================================
 * SHARED REUSABLE CONTACT STRIP - USED TWICE, AS IN THE REFERENCE PDF
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
            ✅ Request availability by WhatsApp
          </a>
          <a
            href="mailto:info@wedointerior.ae"
            className="inline-flex min-h-11 items-center justify-center rounded bg-[#caa193] px-6 py-3 font-play text-sm font-semibold text-white transition-colors hover:bg-[#ac8275]"
          >
            ✉️ Request availability by E-mail
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

  // Replace with your actual YouTube video ID
  // Example: https://www.youtube.com/watch?v=ABC123xyz
  // Video ID: ABC123xyz
  const YOUTUBE_VIDEO_ID = 'qCAlrFPJp5g';

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
        style={{
          width: LAYOUT.intro.contentWidth,
          maxWidth: LAYOUT.intro.maxWidth,
        }}
      >
        <div
          className="grid grid-cols-1 items-stretch lg:grid-cols-[var(--intro-columns)]"
          style={{
            '--intro-columns': `minmax(0, ${LAYOUT.intro.textColumn}) minmax(0, ${LAYOUT.intro.videoColumn})`,
            columnGap: LAYOUT.intro.columnGap,
            rowGap: LAYOUT.intro.rowGap,
          }}
        >
          {/* LEFT COLUMN — TEXT */}
          <div className="flex min-w-0 flex-col">
            <div>
              <h2 className="mb-3 py-2 font-conthrax text-sm tracking-widest text-[#caa193] sm:text-xl">
                Office Interior Fitout Companies in Dubai
              </h2>

              <p className="font-play text-base leading-7 text-white [text-align:justify]">
                Dubai is famous as a business hub, the requirements for quality
                office interior design Dubai is increasing day by day as the
                companies are now giving attention to practicality, branding,
                and employee productivity.{' '}
                <strong>WE DO Interior Design &amp; Fitout</strong> is well known
                as one of the top{' '}
                <strong>office interior fit-out companies in Dubai</strong>,
                delivering innovative workspaces according to contemporary
                business needs. We are a reliable{' '}
                <strong>interior design &amp; office fit-out company in Dubai</strong>,
                our experienced designers blend their expertise with technical
                elegance in order to offer the best results.
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

          {/* RIGHT COLUMN — YOUTUBE VIDEO */}
          <div className="flex min-w-0 flex-col">
            <div>
              <h2 className="py-2 font-conthrax text-sm tracking-widest text-gray-200 sm:text-xl">
                Get Best Office Interior Design Dubai
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
                    aria-label="Play WE DO office interior design video"
                    className="group relative block h-full w-full cursor-pointer overflow-hidden"
                  >
                    {/* VIDEO THUMBNAIL */}
                    <Image
                      src="/images/nestfinder (10).webp"
                      alt="WE DO office interior design and fitout video preview"
                      fill
                      sizes="(min-width: 1024px) 45vw, 90vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* DARK OVERLAY + PLAY BUTTON */}
                    <span className="absolute inset-0 flex items-center justify-center bg-black/40">
                      <span className="flex h-16 w-16 items-center justify-center rounded-full border border-[#caa193] bg-black/50 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-[#caa193] sm:h-20 sm:w-20">
                        <FaPlay
                          aria-hidden="true"
                          className="ml-1 text-xl text-white sm:text-2xl"
                        />
                      </span>
                    </span>
                  </button>
                ) : (
                  /* YOUTUBE VIDEO PLAYER */
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&playsinline=1&rel=0`}
                    title="WE DO Office Interior Design & Fitout Dubai"
                    className="absolute inset-0 h-full w-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                )}
              </div>
            </div>

            {/* CTA BUTTON */}
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
 * 02 - 12 PROJECT IMAGES (FOUR PER ROW ON DESKTOP, NO SLIDER)
 * ====================================================================== */
function ProjectGrid() {
  return (
    <section
      aria-labelledby="office-projects-heading"
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
          id="office-projects-heading"
          className="mb-10 text-center font-conthrax text-sm uppercase tracking-widest text-[#caa193] sm:text-xl md:text-2xl"
        >
          Our Office Interior Design &amp; Fit-Out<br />Projects in Dubai
        </h2>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          style={{ gap: LAYOUT.projects.gap }}
        >
          {OFFICE_PROJECTS.map((project, index) => (
            <Link
              key={`${project.image}-${index}`}
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
 * 04 - OFFICE AREAS: FOUR IMAGE + INFO CARDS
 * ====================================================================== */
function WorkspaceCards() {
  return (
    <section
      className="bg-black text-white"
      aria-labelledby="workspace-areas-heading"
      style={{
        paddingTop: LAYOUT.workspaces.topPadding,
        paddingBottom: LAYOUT.workspaces.bottomPadding,
        paddingLeft: LAYOUT.workspaces.sidePadding,
        paddingRight: LAYOUT.workspaces.sidePadding,
      }}
    >
      <div className="mx-auto" style={{ maxWidth: LAYOUT.workspaces.maxWidth }}>
        <h2 id="workspace-areas-heading" className="sr-only">
          Office Spaces We Design in Dubai
        </h2>
        <p
          className="mx-auto mb-10 text-center font-conthrax text-sm leading-7 text-white sm:text-base sm:leading-8"
          style={{ maxWidth: LAYOUT.workspaces.introMaxWidth }}
        >
          Every area of an office has its own purpose. At WE DO Interior Design
          &amp; Fitout, we design reception spaces, open-plan workstations,
          executive offices and meeting rooms to combine everyday functionality
          with a refined corporate identity.
        </p>
        <div
          className="grid grid-cols-1 items-stretch sm:grid-cols-2 lg:grid-cols-4"
          style={{ gap: LAYOUT.workspaces.gap }}
        >
          {WORKSPACE_AREAS.map((area) => (
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
                <p className="font-play text-sm leading-6 text-[#4b4542]">
                  {area.description}
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
 * 05 - TYPES OF OFFICE SPACES + PRIME LOCATIONS
 * ====================================================================== */
function OfficeTypes() {
  return (
    <section className="bg-[#111111] px-5 pb-9 pt-10 text-white" aria-labelledby="office-types-heading">
      <div className="mx-auto" style={{ maxWidth: LAYOUT.types.maxWidth }}>
        <h2 id="office-types-heading" className="sr-only">Types of Office Spaces We Design</h2>
        <p className="mx-auto mb-10 max-w-4xl text-center text-[#caa193] font-conthrax text-md leading-7 sm:text-lg">
          We are one of the top office interior design companies in Dubai
        </p>
        <div className="grid grid-cols-1 gap-x-16 gap-y-7 font-play text-sm leading-7 text-white sm:text-base md:grid-cols-2">
          <div className="space-y-6">
            {OFFICE_TYPES.slice(0, 4).map(({ title, description }) => (
              <div key={title}>
                <h3 className="mb-1 font-play font-bold uppercase text-[#caa193]">{title} –</h3>
                <p>{description}</p>
              </div>
            ))}
          </div>
          <div className="space-y-6">
            {OFFICE_TYPES.slice(4).map(({ title, description }) => (
              <div key={title}>
                <h3 className="mb-1 font-play font-bold uppercase text-[#caa193]">{title} –</h3>
                <p>{description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 rounded-r-lg border-l-4 border-[#caa193] bg-zinc-900/50 p-6">
          <p className="font-play text-sm italic leading-relaxed text-white sm:text-base">
            <strong className="not-italic text-[#caa193]">Commercial Offices in Prime Locations – </strong>
            We offer full office interior fit-out Dubai services. Our projects
            are located in significant business districts like{' '}
            <strong>Business Bay, Downtown Dubai, Dubai Marina, and JLT</strong>,
            together with other surrounding areas such as{' '}
            <strong>Sheikh Zayed Road, Al Wasl, DIFC, and Al Quoz</strong>.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ======================================================================
 * 06 - RELATED SERVICES: 4x2 DESKTOP IMAGES, MOBILE CAROUSEL
 * ====================================================================== */
function RelatedServices() {
  const autoplay = useMemo(() => Autoplay({ delay: 3000, stopOnInteraction: false }), []);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' }, [autoplay]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);

  return (
    <section className="bg-[#111111] px-4 pb-5 pt-8 sm:px-6" aria-labelledby="related-services-heading">
      <div className="mx-auto" style={{ maxWidth: LAYOUT.serviceGallery.maxWidth }}>
        <h2
          id="related-services-heading"
          className="mb-7 text-center font-conthrax text-sm uppercase tracking-widest text-[#caa193] sm:text-lg md:text-xl"
        >
          We Do Office Interior Design Related Services
        </h2>
        <div
          className="mb-6 hidden grid-cols-4 lg:grid"
          style={{ gap: LAYOUT.serviceGallery.gap }}
        >
          {OFFICE_SERVICE_IMAGES.map((src, index) => (
            <div key={src} className="relative aspect-video overflow-hidden bg-zinc-900">
              <Image
                src={src}
                alt={`WE DO office interior design related service, image ${index + 1}`}
                fill
                sizes="25vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
        <div className="mb-6 lg:hidden">
          <div ref={emblaRef} className="overflow-hidden">
            <div className="-ml-4 flex touch-pan-y">
              {OFFICE_SERVICE_IMAGES.map((src, index) => (
                <div key={src} className="min-w-0 flex-[0_0_100%] pl-4 sm:flex-[0_0_50%]">
                  <div className="relative aspect-video w-full overflow-hidden bg-zinc-900">
                    <Image
                      src={src}
                      alt={`WE DO office interior design related service, image ${index + 1}`}
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
              aria-label="Previous office service image"
              className="min-h-11 min-w-11 rounded border border-[#caa193] font-play text-xl text-white transition-colors hover:bg-[#caa193] hover:text-black"
            >
              ←
            </button>
            <button
              type="button"
              onClick={scrollNext}
              aria-label="Next office service image"
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
 * 08 - WHY OFFICE DESIGN MATTERS
 * ====================================================================== */
function WhyDesignMatters() {
  return (
    <section className="bg-[#111111] px-4 pb-7 pt-5 sm:px-6">
      <div className="mx-auto max-w-[1500px] rounded bg-black px-6 py-7 text-left text-white shadow sm:px-10 sm:py-9">
        <h2 className="mb-4 font-conthrax text-md uppercase text-[#caa193] sm:text-lg">
          Why Office Interior Design Dubai Matters
        </h2>
        <p className="font-play text-sm leading-7 sm:text-sm sm:leading-8">
          The design of <strong>Office Interiors Dubai</strong> plays a vital
          role in improving the productivity of both the employees and the
          organization itself. Good interior designs make the employees happy,
          reduce stress, and improve their collaboration skills. As someone who
          appreciates ambience, your office represents your entire business.
          Hiring a competent firm for <strong>office interior design</strong>{' '}
          ensures that your space communicates professionalism. High-end layouts
          are also crucial. With rising commercial costs, integrating space
          through <strong>interior office fit-out</strong> strategies makes sure
          maximum usability without compromising luxury. Additionally,{' '}
          <strong>corporate office interior design</strong> matches your
          workspace with your brand personality, crafting a consistent and
          memorable experience.
        </p>
      </div>
    </section>
  );
}

/* ======================================================================
 * 09 - OUR OFFICE INTERIOR DESIGN SERVICES (TEXT)
 * ====================================================================== */
function OfficeServicesText() {
  return (
    <section className="bg-[#111111] px-4 pb-12 pt-7 text-white sm:px-6">
      <div className="mx-auto max-w-[1500px] space-y-5 font-play text-sm leading-5 sm:text-sm sm:leading-6">
        <h2 className="font-conthrax text-md uppercase tracking-widest text-[#caa193] sm:text-lg">
          Our Office Interior Design Services in Dubai
        </h2>
        <p>
          We are one of the best <strong>office interior fit out companies in Dubai</strong>,
          offering full services specific to each business.
        </p>
        <p>
          <strong className="text-[#caa193]">a. Space Planning &amp; Layout Design:</strong>{' '}
          We are experts in thoughtful layouts for office interiors in Dubai,
          managing open-plan workspaces with private offices. Our professionals
          ensure exclusive zoning for departments, making us the best office
          interior company for contemporary businesses.
        </p>
        <p>
          <strong className="text-[#caa193]">b. Office Fit-Out Services:</strong>{' '}
          Our personalized office interior fit-out solutions cover each and
          everything from ideation to completion. As reliable Dubai office
          fit-out contractors, we also manage approvals, making your space
          flawless and compliant.
        </p>
        <p>
          <strong className="text-[#caa193]">c. Custom Office Furniture Design:</strong>{' '}
          We design ergonomic and stylish furniture services, from workstations
          to executive desks. Our personalized designs enhance practicality and
          aesthetics, creating us one of the best office interior design Dubai
          offers for personalized spaces.
        </p>
        <p>
          <strong className="text-[#caa193]">d. Lighting Design:</strong>{' '}
          We curate lighting systems that handle natural and artificial sources,
          making sure a productive and luxurious work ambiance.
        </p>
        <p>
          <strong className="text-[#caa193]">e. Branding &amp; Corporate Identity Integration:</strong>{' '}
          We include brand elements into interiors, offering elegant office
          interior design Dubai services that showcase your company identity.
        </p>
      </div>
    </section>
  );
}

/* ======================================================================
 * 10 - TRENDS & PROCESS (PHOTO ON THE RIGHT)
 * ====================================================================== */
function TrendsAndProcess() {
  return (
    <section className="bg-[#111111] px-4 pb-14 pt-10 text-white sm:px-6">
      <div className="mx-auto grid max-w-[1800px] grid-cols-1 items-center gap-10 lg:grid-cols-2">
        <div className="min-w-0 space-y-6 font-play text-sm leading-5 sm:text-sm sm:leading-6">
          <h2 className="font-conthrax text-md uppercase text-[#caa193] sm:text-lg">
            <Link href="/office-interior-design-trends-in-business-bay" className="hover:underline">
              Office Interior Design Trends
            </Link>{' '}
            in Dubai
          </h2>
          <p>
            Contemporary office interior design companies in Dubai are elevating
            elegant aesthetics that promote accuracy and attention.{' '}
            <Link
              href="/office-interior-elements-business-bay"
              className="font-bold text-[#caa193] hover:underline"
            >
              Office Interior Elements
            </Link>{' '}
            from biophilic interior design, such as plants, are employed to
            increase the productivity of employees.
          </p>
          <h2 className="pt-2 font-conthrax text-base uppercase text-[#caa193] sm:text-md">
            Our Office Design Process
          </h2>
          <p>
            WE DO is a reliable <strong>office interior design company in Dubai</strong>,
            we follow a well-planned concept to offer flawless office interior
            fit-out and design services:
          </p>
          <ol className="list-decimal space-y-3 pl-5 marker:text-[#caa193]">
            {DESIGN_PROCESS.map(({ title, description }) => (
              <li key={title}>
                <h3 className="font-play font-bold text-[#caa193]">{title}</h3>
                <p className="text-white">{description}</p>
              </li>
            ))}
          </ol>
        </div>
        <div className="overflow-hidden rounded-lg shadow-md">
          <Image
            src="/images/x.learning (12).webp"
            alt="WE DO office conference room showing completed interior fit-out"
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
 * 11 - REGULATIONS & WHY WE DO (PHOTO ON THE LEFT)
 * ====================================================================== */
function RegulationsAndWhyWeDo() {
  return (
    <section className="bg-[#111111] px-4 pb-14 pt-5 text-white sm:px-6">
      <div className="mx-auto grid max-w-[1800px] grid-cols-1 items-center gap-10 lg:grid-cols-2">
        <div className="overflow-hidden rounded-lg shadow-md">
          <Image
            src="/images/x.learning (15).webp"
            alt="WE DO Dubai office interior showing meeting rooms and fitted partitions"
            width={1200}
            height={800}
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="h-auto w-full object-cover"
          />
        </div>
        <div className="min-w-0 space-y-6 font-play text-sm leading-5 sm:text-sm sm:leading-6">
          <h2 className="font-conthrax text-md uppercase text-[#caa193] sm:text-lg">
            Office Fit-Out Regulations in Dubai
          </h2>
          <p>
            Each{' '}
            <Link href="/commercial-interior-fit-out" className="font-bold text-[#caa193] hover:underline">
              commercial interior fit-out in business bay
            </Link>{' '}
            space must comply with Dubai legalities. Approvals from accurate
            authorities are important before completion. As professionals, we
            manage all approvals, making sure compliance with elegant standards.
            This makes us a reliable partner for{' '}
            <strong>interior architect office</strong> level spaces and
            large-scale fit-outs.
          </p>
          <h2 className="pt-2 font-conthrax text-md text-[#caa193] sm:text-md">
            Why Choose WE DO Interior Design &amp; Fitout for Your Office Project
          </h2>
          <p>
            Creating an office interior design that maximizes productivity and
            embodies your brand is at the very center of our endeavors at WE DO
            Interior Design &amp; Fitout. As one of the top office interior
            design companies in Dubai, we are experts in office interior fit-out,
            office refurbishment, and office renovation with emphasis on
            creativity, functionality, and accuracy. Our highly acclaimed office
            fit-out and interior design services in Dubai cover high-end
            business districts such as Jumeirah lake towers, DIFC, Business Bay,
            and Dubai Media City, with unparalleled performance for both luxury
            fit-out and refurbishment schemes and contemporary commercial
            interiors.
          </p>
          <p>
            As one of the top Dubai office fit-out contractors, we combine smart
            solutions and ergonomic fittings to design intelligent workplaces
            for today&apos;s employees. With a long history of delivering excellence
            across Sheikh Zayed Road, Dubai South, and more, our on-time delivery
            guarantee makes us the preferred partner for businesses looking for
            office interior designers in Dubai who deliver excellence every time.
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
    <section className="bg-[#111111] px-4 pb-20 pt-7 text-white sm:px-6" aria-labelledby="office-faq-heading">
      <div className="mx-auto max-w-[1500px]">
        <h2
          id="office-faq-heading"
          className="mb-10 text-center font-conthrax text-lg uppercase text-[#caa193] sm:text-xl"
        >
          Frequently Asked Questions (FAQs)
        </h2>
        <div className="mx-auto max-w-4xl space-y-4">
          {FAQS.map((faq, index) => {
            const expanded = openFaq === index;
            const panelId = `office-faq-answer-${index}`;
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
 * 13 - FINAL CTA (SECOND PDF) - DO NOT ADD ANYTHING AFTER THIS
 * ====================================================================== */

function FinalCallToAction() {
  return (
    <section
      className="bg-[#111111] px-4 pt-2 pb-12 sm:px-6 sm:pb-16"
      aria-labelledby="office-final-cta"
    >
      <div className="mx-auto max-w-[1280px] rounded-xl border-2 border-[#caa193] bg-black px-5 py-10 text-center sm:px-8 sm:py-14 lg:px-12">
        <h2
          id="office-final-cta"
          className="mb-6 font-conthrax text-sm uppercase text-[#caa193] sm:text-lg"
        >
          Call to Action
        </h2>

        <p className="mx-auto mb-8 w-full max-w-[1350px] font-play text-xs leading-7 text-white sm:text-sm sm:leading-8">
          Are you on the lookout for the most outstanding{' '}
          <strong>office interior design agency in Dubai</strong> to give your
          office space a whole new meaning?{' '}
          <strong>WE DO Interior Design &amp; Fitout</strong> is your top choice
          for complete{' '}
          <strong>office interior design and fitout services in Dubai</strong>,
          tailored to meet your business needs. Whether you want a complete
          redesign of your office space, an uplift in your work environment,
          or a completely new office design, our team is here for you. Contact
          us now for a consultation and work with one of the most reliable{' '}
          <strong>office interior design companies in Dubai</strong>.
        </p>

        <Link
          href="/contact-us"
          className="inline-flex min-h-14 items-center justify-center rounded-full bg-[#caa193]  py-2 text-center font-play text-sm uppercase text-black transition-colors hover:bg-[#f5ede5] sm:px-10 sm:text-sm"
        >
          Contact Us Now
        </Link>
      </div>
    </section>
  );
}


/* ======================================================================
 * ONE DEFAULT EXPORT FOR EVERYTHING BELOW HERO
 * ====================================================================== */
export default function Body() {
  return (
    <div className="bg-[#111111] text-white">
      <IntroVideo />
      <ProjectGrid />
      <ContactStrip />
      <WorkspaceCards />
      <OfficeTypes />
      <RelatedServices />
      <ContactStrip />
      <WhyDesignMatters />
      <OfficeServicesText />
      <TrendsAndProcess />
      <RegulationsAndWhyWeDo />
      <FrequentlyAskedQuestions />
      <FinalCallToAction />
    </div>
  );
}