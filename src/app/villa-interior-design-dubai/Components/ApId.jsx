'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const SITE = 'https://wedointerior.ae';
const D1_2BR = `${SITE}/district-1-mbr-city-contemporary-villa`;
const D1_3BR = `${SITE}/district-one-contemporary-villa`;

// Section 12 — Project cards
const galleryProjects = [
  {
    image: '/images/manara villa (35).webp',
    project: 'Al Manara Villa',
    alt: 'Al Manara luxury villa interior in Dubai by WE DO',
    link: '/al-manara-luxury-villa',
  },
  {
    image: '/images/majanvilla (3).webp',
    project: 'Majan Villa Design',
    alt: 'Majan villa interior design in Dubai by WE DO',
    link: '/majan-villa-design',
  },
  {
    image: '/images/district-one-villa-double-height-living-glass-staircase.png',
    project: 'District One 2-Bedroom Contemporary Villa',
    alt: 'Double-height living room with glass staircase, District One 2-bedroom contemporary villa, MBR City',
    link: '/district-1-mbr-city-contemporary-villa',
  },
  {
    image: '/images/district-one-3-bedroom-contemporary-villa-living-room.webp',
    project: 'District One 3-Bedroom Contemporary Villa',
    alt: 'Travertine fireplace wall and walnut staircase, District One 3-bedroom contemporary villa, MBR City',
    link: '/district-one-contemporary-villa',
  },
];

// Scrolling strip: mix of projects, each image with its own alt.
// TODO: replace the Majan alts with a description of what each photo actually shows.
const stripImages = [
  { src: '/images/district-one-3-bedroom-contemporary-villa-exterior.webp', alt: 'Contemporary District One villa exterior with travertine facade and pool, MBR City' },
  { src: '/images/majanvilla (2).webp', alt: 'Majan villa interior designed and fitted out by WE DO, Dubai' },
  { src: '/images/district-one-villa-double-height-living-glass-staircase.png', alt: 'Double-height villa living room with glass staircase, District One, MBR City' },
  { src: '/images/district-one-3-bedroom-contemporary-villa-dining-room.webp', alt: 'Villa dining room with walnut table and olive chairs, District One, Dubai' },
  { src: '/images/majanvilla (12).webp', alt: 'Majan villa living space interior by WE DO, Dubai' },
  { src: '/images/district-one-villa-kitchen-stone-island.png', alt: 'Villa kitchen with stone-clad island and handleless cabinetry, District One, Dubai' },
  { src: '/images/district-one-3-bedroom-contemporary-villa-master-bedroom.webp', alt: 'Villa master bedroom with walnut headboard wall and pool view, District One, Dubai' },
  { src: '/images/majanvilla (5).webp', alt: 'Majan villa room interior with custom joinery by WE DO, Dubai' },
];

// Gallery grid: different images from the strip so the page doesn't repeat itself
const gridImages = [
  { src: '/images/district-one-3-bedroom-contemporary-villa-majlis.webp', alt: 'Contemporary villa majlis with walnut panelling and low linear seating, Dubai' },
  { src: '/images/district-one-3-bedroom-contemporary-villa-kitchen.webp', alt: 'Villa kitchen with travertine island and walnut cabinetry, District One, Dubai' },
  { src: '/images/district-one-villa-master-bedroom-wall-panelling.png', alt: 'Villa master bedroom with upholstered wall panelling and cove lighting, Dubai' },
  { src: '/images/district-one-3-bedroom-contemporary-villa-master-bathroom.webp', alt: 'Travertine villa master bathroom with freestanding stone bathtub, Dubai' },
  { src: '/images/district-one-villa-home-office-green-wall.png', alt: 'Villa home office with built-in oak shelving and green wall view, Dubai' },
  { src: '/images/district-one-3-bedroom-contemporary-villa-outdoor-terrace.webp', alt: 'Villa pool terrace with slatted pergola and outdoor seating at dusk, Dubai' },
];

const linkClass = 'text-[#caa193]';

const ApId = () => {
  const [slider, setSlider] = useState(50);
  const [selectedVillaStyle, setSelectedVillaStyle] = useState(0);

  const scrollRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const trustItems = [
    { value: '11+ YEARS', label: 'Villa Design & Fit-Out' },
    { value: '250+', label: 'Completed Projects' },
    { value: 'ISO CERTIFIED', label: '9001 · 14001 · 45001' },
    { value: 'IN-HOUSE', label: 'Design & Joinery' },
  ];

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let animationFrame;

    const autoScroll = () => {
      if (!isPaused && !isDragging) {
        container.scrollLeft += 0.35;

        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        }
      }

      animationFrame = requestAnimationFrame(autoScroll);
    };

    animationFrame = requestAnimationFrame(autoScroll);

    return () => cancelAnimationFrame(animationFrame);
  }, [isPaused, isDragging]);

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const percentage = Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100));
    setSlider(percentage);
  };

  const h2Class = `
    text-[12px]
    sm:text-xl
    text-white
    tracking-widest
    font-conthrax
    py-0
    md:py-5
  `;

  const h3Class = `
    text-xs
    font-conthrax
    uppercase
    mb-3
    text-white
    tracking-wide
  `;

  const eyebrowClass = 'text-[#caa193] text-[8px] sm:text-[9px] tracking-[0.22em] font-conthrax uppercase';

  return (
    <section className="bg-black text-white px-6 sm:px-10 md:px-16 lg:px-28 xl:px-55 font-sans py-10">
      <div className="lg:max-w-[90%] mx-auto">
        {/* INTRO */}

        <div>
          <p className="text-sm sm:text-base leading-8 font-play text-white/85">
            <b className={linkClass}><a href={`${SITE}/`}>WE DO Interior Design & Fit-Out</a></b> provides villa interior design in Dubai from concept to handover, design, joinery, MEP coordination, and final styling, all run through one in-house team instead of five separate contractors. WE DO is a DED-registered interior design and fit-out company that keeps design and construction under one roof: 250+ completed residential and commercial projects over 11+ years, ISO 9001:2015, ISO 14001:2015 and ISO 45001:2018 certification, and direct approval relationships with Dubai Civil Defence, Dubai Municipality, and developers including Emaar and Damac. <b className={linkClass}><a href={`${SITE}/gallery`}>See our full project gallery</a></b> for completed villa work across Dubai.
          </p>
        </div>

        {/* KEY FACTS */}

        <div className="mt-10 border border-[#caa193]/10 bg-[#111] p-2">
          <p className={`p-2 ${eyebrowClass}`}>Key Facts</p>

          <ul className="space-y-1 text-sm font-play text-white/80 list-disc list-inside">
            <li>11+ years designing and fitting out villas in Dubai; 250+ completed residential and commercial projects.</li>
            <li>DED-registered interior design and fit-out company</li>
            <li>ISO 9001:2015 (quality), ISO 14001:2015 (environmental) and ISO 45001:2018 (health & safety) certified</li>
            <li>In-house joinery factory plus dedicated design, civil works, joinery, and decoration teams; one contract, one point of contact</li>
            <li>Direct approval coordination with Dubai Civil Defence (DCD), Dubai Municipality (DM), and developers including Emaar and Damac</li>
            <li>Winner, Luxury Lifestyle Award 2026</li>
            <li>
              Completed villa interior design projects in Emirates Hills, MBR City/District One, Majan and Al Manara: <br />
              <b className={linkClass}><a href={`${SITE}/al-manara-luxury-villa`}>Al Manara Luxury Villa</a></b> ·{' '}
              <b className={linkClass}><a href={`${SITE}/majan-villa-design`}>Majan Villa Design</a></b> ·{' '}
              <b className={linkClass}><a href={D1_2BR}>District One 2-Bedroom Contemporary Villa</a></b> ·{' '}
              <b className={linkClass}><a href={D1_3BR}>District One 3-Bedroom Contemporary Villa</a></b>
            </li>
          </ul>
        </div>

        {/* SCROLLING IMAGE STRIP */}

        <section className="mt-5 overflow-hidden border border-[#caa193]/10 bg-[#111] py-5">
          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing select-none"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => {
              setIsPaused(false);
              setIsDragging(false);
            }}
            onMouseDown={(e) => {
              setIsDragging(true);
              setStartX(e.pageX);
              setScrollLeft(scrollRef.current.scrollLeft);
            }}
            onMouseMove={(e) => {
              if (!isDragging) return;
              e.preventDefault();
              const walk = (e.pageX - startX) * 1.5;
              scrollRef.current.scrollLeft = scrollLeft - walk;
            }}
            onMouseUp={() => setIsDragging(false)}
          >
            {[...stripImages, ...stripImages].map((img, index) => {
              // The second copy only exists for the infinite-scroll loop,
              // so hide it from screen readers and search engines.
              const isLoopCopy = index >= stripImages.length;
              return (
                <button
                  key={index}
                  type="button"
                  aria-hidden={isLoopCopy || undefined}
                  tabIndex={isLoopCopy ? -1 : 0}
                  onClick={() => {
                    if (!isDragging) setSelectedImage(img);
                  }}
                  className="relative h-[520px] w-[320px] shrink-0 overflow-hidden"
                >
                  <Image
                    src={img.src}
                    alt={isLoopCopy ? '' : img.alt}
                    fill
                    sizes="320px"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </button>
              );
            })}
          </div>
        </section>

        {/* IS THIS THE RIGHT SERVICE */}

        <div className="mt-5 border border-[#caa193]/10 bg-[#111] p-2">
          <h2 className={h2Class}>Is This the Right Villa Interior Design Service for You?</h2>
          <p className="font-play text-white/80 leading-7 text-sm mb-3">
            This page is part of WE DO&apos;s residential interior design services, focused specifically on villas. It&apos;s for villa owners in Dubai with an existing or handover-ready villa who want it designed, furnished, and fitted out, a full villa or a handful of key rooms. It&apos;s probably not the page you need if:
          </p>
          <ul className="space-y-1 text-sm font-play text-white/80 leading-8 list-disc list-inside">
            <li>
              You live in an apartment or townhouse rather than a villa, <b className={linkClass}><a href={`${SITE}/home-interior-design-dubai`}>see Residential Interior Design Dubai</a></b> instead.
            </li>
            <li>Your villa needs structural work before any design can start, see the comparison below.</li>
            <li>
              You need villa construction from the ground up, see <b className={linkClass}><a href={`${SITE}/villa-construction-dubai`}>Villa Construction Dubai</a></b> instead.
            </li>
          </ul>
        </div>

        {/* TRUST BAR */}

        <div className="mt-5 border border-[#caa193]/15 bg-[#111] overflow-hidden">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {trustItems.map((item, index) => (
              <div
                key={index}
                className={`
                  px-4 py-4 text-center
                  ${index !== trustItems.length - 1 ? 'lg:border-r border-[#caa193]/10' : ''}
                  ${index < 2 ? 'border-b lg:border-b-0 border-[#caa193]/10' : ''}
                `}
              >
                <h3 className={h3Class}>{item.value}</h3>
                <p className={eyebrowClass}>{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* DESIGN VS RENOVATION */}

        <section className="mt-10">
          <p className={eyebrowClass}>Design & Renovation</p>
          <h2 className={h2Class}>Villa Interior Design vs. Villa Renovation in Dubai</h2>

          <p className="text-sm sm:text-base leading-8 mb-4 font-play text-white/85">
            Villa interior design and villa renovation or construction are related but different services. If you&apos;re not sure which one your villa needs, this is the fastest way to tell:
          </p>
          <div className="border border-[#caa193]/10 bg-[#111] p-2 sm:p-2 overflow-x-auto">
            <table className="w-full min-w-[600px] border-collapse text-left">
              <thead>
                <tr className="border-b border-[#caa193]/10">
                  <th className="p-2 text-[#caa193] text-[10px] tracking-[1.5px] uppercase font-conthrax">Comparison</th>
                  <th className="p-2 text-[#caa193] text-[10px] tracking-[1.5px] uppercase font-conthrax">Villa Interior Design</th>
                  <th className="p-2 text-[#caa193] text-[10px] tracking-[1.5px] uppercase font-conthrax">Villa Renovation &amp; Construction</th>
                </tr>
              </thead>
              <tbody className="font-play text-xs sm:text-sm text-white/80">
                <tr className="border-b border-[#caa193]/10">
                  <td className="p-2 text-white font-semibold align-top">Focus</td>
                  <td className="p-2 leading-6 align-top">Space planning, styling, furniture, joinery, and finishes</td>
                  <td className="p-2 leading-6 align-top">New builds, extensions, demolish-and-rebuild, structural/civil works, and municipality approvals</td>
                </tr>
                <tr className="border-b border-[#caa193]/10">
                  <td className="p-2 text-white font-semibold align-top">Typical client</td>
                  <td className="p-2 leading-6 align-top">Villa shell exists or is move-in ready</td>
                  <td className="p-2 leading-6 align-top">Empty plot, structural changes required, or a full rebuild</td>
                </tr>
                <tr>
                  <td className="p-2 text-white font-semibold align-top">Typical output</td>
                  <td className="p-2 leading-6 align-top">A fully furnished, styled, move-in-ready interior</td>
                  <td className="p-2 leading-6 align-top">A completed structure, ready for interior design and fit-out</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm sm:text-base leading-8 mb-4 font-play text-white/85">
            If your villa needs both, structural work runs first; our team coordinates the handover between the two internally rather than asking you to manage two separate villa renovation companies in Dubai. See our <b className={linkClass}><a href={`${SITE}/villa-renovation-dubai`}>villa renovation page</a></b> for renovation-specific pricing and process.
          </p>
        </section>

        {/* VILLA DESIGN SERVICES */}

        <section className="mt-10">
          <p className={eyebrowClass}>Villa Design Services</p>
          <h2 className={h2Class}>Villa Interior Design Services in Dubai — Rooms, Layouts & Sizes</h2>
          <p className="text-sm sm:text-base leading-8 mb-4 font-play text-white/85">
            Villa fit-out services in Dubai cover very different briefs from room to room; a majlis and a kitchen aren&apos;t designed the same way, even in the same villa. Here&apos;s how each space is approached, followed by how layout and size change the brief further.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Living Room & Majlis */}
            <div className="group overflow-hidden">
              <div className="relative h-[230px] overflow-hidden">
                <Image
                  src="/images/majanvilla (6).webp"
                  alt="Luxury villa living room and majlis interior design in Dubai"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="pt-5">
                <h3 className={h3Class}>Living Room & Majlis</h3>
                <p className="text-white/70 text-sm font-play">
                  The majlis interior design, the formal seating room for receiving guests, is designed separately from the family living room, usually with higher, more formal seating, richer textiles, and a distinct entrance sequence. For a contemporary take on the majlis, see the low linear seating and walnut panelling in our <b className={linkClass}><a href={D1_3BR}>District One 3-bedroom villa</a></b>.
                </p>
              </div>
            </div>

            {/* Master Bedroom */}
            <div className="group overflow-hidden">
              <div className="relative h-[230px] overflow-hidden">
                <Image
                  src="/images/majanvilla (7).webp"
                  alt="Luxury villa master bedroom interior design in Dubai"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="pt-5">
                <h3 className={h3Class}>Master Bedroom</h3>
                <p className="text-white/70 text-sm font-play">
                  Master bedroom design in Dubai villas is planned around a private sitting area, walk-in wardrobe, and en-suite as one connected sequence. Children&apos;s and guest bedrooms use more flexible, durable finishes and joinery.
                </p>
              </div>
            </div>

            {/* Kitchen */}
            <div className="group overflow-hidden">
              <div className="relative h-[230px] overflow-hidden">
                <Image
                  src="/images/manaravilla (13).png"
                  alt="Luxury villa kitchen interior design in Dubai"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="pt-5">
                <h3 className={h3Class}>Kitchen</h3>
                <p className="text-white/70 text-sm font-play">
                  Villa kitchen interior design in Dubai is increasingly split into a show kitchen, open to the living and dining area, and a working kitchen behind it. We plan cabinetry, appliance layout, and ventilation around this split rather than a single all-purpose kitchen. Our <b className={linkClass}><a href={D1_2BR}>District One 2-bedroom villa</a></b> uses a stone-clad island facing full-height handleless cabinetry.
                </p>
              </div>
            </div>

            {/* Bathrooms */}
            <div className="group overflow-hidden">
              <div className="relative h-[230px] overflow-hidden">
                <Image
                  src="/images/majanvilla (14).png"
                  alt="Luxury villa bathroom interior design in Dubai"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="pt-5">
                <h3 className={h3Class}>Bathrooms</h3>
                <p className="text-white/70 text-sm font-play">
                  Wet-area waterproofing, slope-to-drain detailing and material selection are decided early, since they&apos;re harder to change once tiling starts. Ensuite and family bathrooms get different fixture specifications based on daily use versus guest use. The <b className={linkClass}><a href={D1_3BR}>District One 3-bedroom villa</a></b> has a fully travertine-clad master bathroom with a freestanding stone tub and walk-in shower.
                </p>
              </div>
            </div>

            {/* Outdoor */}
            <div className="group overflow-hidden">
              <div className="relative h-[230px] overflow-hidden">
                <Image
                  src="/images/manara villa (34).webp"
                  alt="Luxury villa outdoor terrace and pool design in Dubai"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="pt-5">
                <h3 className={h3Class}>Outdoor Terrace & Pool</h3>
                <p className="text-white/70 text-sm font-play">
                  Dubai&apos;s climate makes shaded terraces, pool decks and outdoor kitchens a genuine extension of the interior for roughly nine months of the year. See the shaded pergola terrace in our <b className={linkClass}><a href={D1_3BR}>District One contemporary villa</a></b>. For garden and planting work beyond the terrace itself, see our <b className={linkClass}><a href={`${SITE}/landscape-design-dubai`}>landscape design services in Dubai</a></b>.
                </p>
              </div>
            </div>

            {/* Smart Home */}
            <div className="group overflow-hidden">
              <div className="relative h-[230px] overflow-hidden">
                <Image
                  src="/images/luxury-villa-interior-design-dubai-smart-home-integration.jpg"
                  alt="Smart home integration in a luxury Dubai villa"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="pt-5">
                <h3 className={h3Class}>Smart Home Integration</h3>
                <p className="text-white/70 text-sm font-play">
                  Automated lighting, climate control and security are now standard requests rather than upgrades. The current direction in Dubai villas is toward concealed technology, wiring and control panels integrated into joinery rather than visible panels and speakers.
                </p>
              </div>
            </div>

            {/* Standalone Villas */}
            <div className="group overflow-hidden">
              <div className="relative h-[230px] overflow-hidden">
                <Image
                  src="/images/manara villa (33).webp"
                  alt="Standalone luxury villa interior design in Dubai"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="pt-5">
                <h3 className={h3Class}>Standalone Villas</h3>
                <p className="text-white/70 text-sm font-play">
                  Fully detached villas with private gardens and pools on all sides give the most design freedom, no shared walls to plan around, and typically the largest floor plates. Most of our featured projects, including Al Manara and Emirates Hills, are standalone villas.
                </p>
              </div>
            </div>

            {/* Twin Villas */}
            <div className="group overflow-hidden">
              <div className="relative h-[230px] overflow-hidden">
                <Image
                  src="/images/manara villa (6).webp"
                  alt="Twin villa and townhouse interior design in Dubai"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="pt-5">
                <h3 className={h3Class}>Twin Villa Layouts</h3>
                <p className="text-white/70 text-sm font-play">
                  Twin villas share one common wall with a neighbouring unit; townhouse-style layouts share walls on two sides across a row. Both need more deliberate acoustic and privacy planning between the shared wall and adjacent bedrooms, and layouts that make the most of a narrower footprint.
                </p>
              </div>
            </div>

            {/* Villa Sizes */}
            <div className="group overflow-hidden">
              <div className="relative h-[230px] overflow-hidden">
                <Image
                  src="/images/majanvilla (9).webp"
                  alt="Large luxury villa interior design in Dubai"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="pt-5">
                <h3 className={h3Class}>2–7+ Bedroom Villas</h3>
                <p className="text-white/70 text-sm font-play">
                 A 2–4 bedroom villa and a 6–7+ bedroom estate are different design problems: larger villas need clear zoning for family, guest and staff areas, while smaller ones need every room to work harder. Our <b className='text-[#caa193]'><a href="https://wedointerior.ae/district-1-mbr-city-contemporary-villa">District One 2-bedroom villa</a></b> adds a home office, and our <b className='text-[#caa193]'><a href="https://wedointerior.ae/district-one-contemporary-villa"> 3-bedroom villa </a></b>includes a children's room with built-in storage.
                </p>
              </div>
            </div>
          </div>

          <p className="text-white/70 text-sm font-play mt-5">
           We also take on villa interior design projects across other well-established Dubai communities on request, including Dubai Hills Estate, Arabian Ranches, Palm Jumeirah, <b className='text-[#caa193]'><a href="https://wedointerior.ae/interior-design-jumeirah-dubai">Jumeirah</a></b> and Al Barsha; see our full list of <b className='text-[#caa193]'><a href="https://wedointerior.ae/interior-design-dubai">areas we serve across Dubai</a></b>.
          </p>
        </section>

        {/* VILLA INTERIOR IMAGE GALLERY */}

        <section className="mt-10">
          <h2 className={h2Class}>Villa Interior Design Gallery in Dubai</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gridImages.map((img, index) => (
              <div key={index} className="relative aspect-square overflow-hidden">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </section>

        {/* PROCESS */}

        <section className="mt-10">
          <p className={eyebrowClass}>From Concept to Handover</p>
          <h2 className={h2Class}>Our Villa Interior Design Process</h2>

          <p className="text-sm sm:text-base leading-8 mb-4 font-play text-white/85">
            WE DO runs a turnkey villa interior design process in three stages, from first conversation to final handover.
          </p>

          <div className="border border-[#caa193]/10 bg-[#111] p-2">
            <ol className="leading-7 space-y-2 font-play text-white/80 text-sm list-decimal list-inside">
              <li>
                <strong className="text-white">Consultation & Site Visit:</strong>{' '}
                (typically within 1 week of first contact) We start with a consultation covering your style preferences, functionality needs and budget. Once you confirm you&apos;d like to move forward, WE DO includes a complimentary site visit to assess the villa in person before design work begins.
              </li>
              <li>
                <strong className="text-white">Design Proposal:</strong>{' '}
                (typically 2-4 weeks) You receive detailed concepts, mood boards, 3D visuals and material samples, plus a VR walkthrough of the proposed design before anything is built.
              </li>
              <li>
                <strong className="text-white">Execution & Handover:</strong>{' '}
                (timeline confirmed at quote stage, based on villa size and scope) Our in-house teams manage construction, joinery and final styling through to a complete handover. For villa owners handling a post-handover fit-out on an off-plan property from a developer like Emaar or Damac, our direct developer approval relationships apply here too.
              </li>
            </ol>
          </div>
        </section>

        {/* STYLES, MATERIALS & FINISHES */}

        <section className="mt-14">
          <p className={eyebrowClass}>Styles, Materials & Finishes</p>
          <h2 className={h2Class}>Villa Interior Design Styles, Materials & Finishes</h2>

          <p className="text-sm sm:text-base leading-8 mb-8 font-play text-white/85">
            Bespoke villa interior design in Dubai generally falls into four style directions, though most real projects blend two of them rather than following one purely.
          </p>

          {(() => {
            const villaStyleItems = [
              {
                title: 'Modern & Contemporary',
                short: 'Clean lines, neutral palettes and minimal detailing.',
                image: '/images/district-one-3-bedroom-contemporary-villa-living-room.webp',
                alt: 'Contemporary villa living room with travertine fireplace wall and walnut staircase, District One, Dubai',
                content: (
                  <p>
                    Clean lines, minimal ornament and a tightly controlled palette. Our{' '}
                    <a href={D1_2BR} className="text-[#caa193] hover:underline">District One 2-bedroom contemporary villa</a>{' '}
                    takes the light route, with oak joinery, soft beige and pale stone around a double-height living room. For a richer take, our{' '}
                    <a href={D1_3BR} className="text-[#caa193] hover:underline">District One 3-bedroom villa</a>{' '}
                    pairs dark walnut with honed travertine and brushed bronze.
                  </p>
                ),
              },
              {
                title: 'Arabic & Majlis-Inspired',
                short: 'Richer textiles, arched detailing and warmer material tones.',
                image: '/images/arabic-majlis-inspired-villa-interior.png',
                alt: 'Arabic majlis inspired villa interior design in Dubai',
                content: (
                  <p>
                    <strong className="text-white">Arabic style villa interior design in Dubai</strong>{' '}
                    is built around the majlis as the anchor space, with richer textiles, arched detailing and warmer material tones than a purely modern scheme, while keeping the layout and lighting contemporary. This is the approach used on our Emirates Hills project.
                  </p>
                ),
              },
              {
                title: 'Moroccan',
                short: 'Layered pattern work, handcrafted tilework and warm, earthy palettes.',
                image: '/images/try.jpg',
                alt: 'Moroccan inspired villa interior design in Dubai',
                content: (
                  <p>
                    Layered pattern work, handcrafted tilework and warm, earthy palettes, drawing on Moroccan, Arabian and Mediterranean influences together rather than any single tradition in isolation.
                  </p>
                ),
              },
              {
                title: 'Classic Luxury',
                short: 'Ornate detailing, symmetry and classical furniture proportions.',
                image: '/images/manara villa (11).webp',
                alt: 'Classic luxury villa interior design in Dubai',
                content: (
                  <p>
                    Ornate detailing, symmetry and classical furniture proportions for owners who want a more traditional, formal register rather than a minimal one.
                  </p>
                ),
              },
            ];

            const activeItem = villaStyleItems[selectedVillaStyle];

            return (
              <div className="grid grid-cols-1 lg:grid-cols-[34%_66%] border border-white/10 bg-black overflow-hidden">
                {/* LEFT SIDE — SELECTABLE ITEMS */}
                <div className="border-b lg:border-b-0 lg:border-r border-white/10">
                  {villaStyleItems.map((item, index) => {
                    const isActive = selectedVillaStyle === index;
                    return (
                      <button
                        key={item.title}
                        type="button"
                        onClick={() => setSelectedVillaStyle(index)}
                        className={`w-full text-left px-6 sm:px-7 py-2 border-b border-white/10 transition-all duration-300 group ${
                          isActive ? 'bg-[#caa193]' : 'bg-black hover:bg-white/[0.03]'
                        }`}
                      >
                        <div className="flex items-start justify-between gap-5">
                          <div>
                            <h3
                              className={`text-base sm:text-lg font-conthrax transition-colors ${
                                isActive ? 'text-white' : 'text-white/90 group-hover:text-white'
                              }`}
                            >
                              {item.title}
                            </h3>
                            <p className={`mt-2 text-sm leading-6 font-play ${isActive ? 'text-white/85' : 'text-white/65'}`}>
                              {item.short}
                            </p>
                          </div>
                          <span
                            className={`shrink-0 text-xl transition-all duration-300 ${
                              isActive
                                ? 'text-white translate-x-1'
                                : 'text-white/60 group-hover:text-[#caa193] group-hover:translate-x-1'
                            }`}
                          >
                            →
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* RIGHT SIDE — ACTIVE CONTENT */}
                <div className="bg-black">
                  <div className="relative w-full h-[280px] sm:h-[380px] lg:h-[430px]">
                    <Image
                      key={activeItem.image}
                      src={activeItem.image}
                      alt={activeItem.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 66vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
                  </div>
                  <div className="px-6 sm:px-8 lg:px-10 py-7 lg:py-8">
                    <h3 className="text-2xl sm:text-xl text-white font-conthrax mb-5">{activeItem.title}</h3>
                    <div className="text-sm sm:text-base leading-8 font-play text-white/85">{activeItem.content}</div>
                  </div>
                </div>
              </div>
            );
          })()}
        </section>

        <h3 className="text-xl text-white lg:text-md font-conthrax mt-5 mb-5">Materials & Finishes</h3>
        <div className="rounded-lg border border-[#caa193]/10 bg-[#111] p-2">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-md font-conthrax text-white mb-4">Flooring & Stone</h4>
              <p className="text-white/70 text-sm leading-7">
                Large-format marble and porcelain remain the default for villa living areas and majlis spaces; bookmatched marble feature walls and marble-clad bathroom walls have moved from occasional request to a standard ask over the past year.
              </p>
            </div>
            <div>
              <h4 className="text-md font-conthrax text-white mb-4">Custom Joinery & Furniture</h4>
              <p className="text-white/70 text-sm leading-7">
                Wardrobes, kitchen cabinetry, TV units and bespoke furniture are manufactured at our own{' '}
                <a href="/joinery-company-dubai" className="text-[#caa193] hover:underline">in-house joinery factory</a>{' '}
                rather than outsourced, which is what lets us hold a single delivery timeline and warranty across design and furniture together.
              </p>
            </div>
            <div>
              <h4 className="text-md font-conthrax text-white mb-4">Walls, Ceilings & Lighting</h4>
              <p className="text-white/70 text-sm leading-7">
                Ceilings are increasingly treated as a fifth design surface: coffered detailing, cove lighting and, for quieter schemes, flush plasterboard with concealed linear lighting. Layered lighting (ambient, task and accent, on separate circuits) is standard on every project rather than a single ceiling fixture per room.
              </p>
            </div>
          </div>
        </div>

        {/* PRICING GUIDE */}

        <section className="mt-10">
          <p className={eyebrowClass}>Pricing Guide</p>
          <h2 className={h2Class}>Villa Interior Design Cost in Dubai</h2>

          <p className="text-sm sm:text-base leading-8 mb-4 font-play text-white/85">
            There&apos;s no single fixed price for villa interior design cost in Dubai; it depends on villa size, finish level, and how much of the villa is in scope:
          </p>

          <div className="overflow-x-auto rounded-lg border border-[#caa193]/10">
            <table className="w-full min-w-[650px] border-collapse">
              <thead className="bg-[#181818]">
                <tr>
                  <th className="border border-[#caa193]/10 p-2 text-left font-conthrax text-[12px] text-[#caa193]">Scope</th>
                  <th className="border border-[#caa193]/10 p-2 text-left font-conthrax text-[12px] text-[#caa193]">Approx. range (AED)</th>
                </tr>
              </thead>
              <tbody className="bg-[#111] font-play text-[14px] text-white/80">
                <tr>
                  <td className="border border-[#caa193]/10 p-2">Partial villa interior design (select rooms)</td>
                  <td className="border border-[#caa193]/10 p-2">80,000 – 150,000</td>
                </tr>
                <tr>
                  <td className="border border-[#caa193]/10 p-2">Full design & fit-out, 3-5 bedroom villa</td>
                  <td className="border border-[#caa193]/10 p-2">250,000 – 1,000,000+</td>
                </tr>
                <tr>
                  <td className="border border-[#caa193]/10 p-2">Bespoke ultra-luxury fit-out (e.g. Emirates Hills, Palm Jumeirah-tier finishes)</td>
                  <td className="border border-[#caa193]/10 p-2">3,000,000+</td>
                </tr>
              </tbody>
            </table>
            <p className="text-sm mt-5 sm:text-base leading-8 mb-4 font-play text-white/85">
              Because so much depends on your specific villa, WE DO provides a fixed, itemized quote after the initial site visit rather than a generic price list or a per-square-foot rate alone.
            </p>
          </div>
        </section>

        {/* PROJECTS */}

        <div className="mb-10">
          <p className={eyebrowClass}>Gallery</p>
          <h2 className={h2Class}>Villa Interior Design Projects Across Dubai</h2>
        </div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {galleryProjects.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className="group block rounded-2xl overflow-hidden border border-[#caa193]/10 bg-[#111] hover:border-[#caa193]/25 transition"
            >
              <div className="relative aspect-square">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                  className="object-cover transition duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-2">
                  <h3 className="font-conthrax text-[13px] text-white uppercase leading-6">{item.project}</h3>
                  <div className="mt-4 text-[#caa193] text-[11px] uppercase tracking-[2px] font-conthrax">View Project →</div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* BEFORE & AFTER */}

        <section className="mt-16">
          <p className={eyebrowClass}>Before & After</p>
          <h2 className={h2Class}>From Bare Handover to Fully Designed</h2>

          <div className="w-full max-w-[900px] mx-auto bg-[#151515] border border-[#caa193]/10 p-5">
            <div
              className="relative overflow-hidden aspect-[16/9] bg-black border border-[#caa193]/10 cursor-ew-resize select-none"
              onMouseMove={(e) => e.buttons === 1 && handleMove(e)}
              onClick={handleMove}
              onTouchMove={handleMove}
            >
              <div className="absolute inset-0">
                <Image
                  src="/images/majan-after.jpg"
                  alt="Majan villa after WE DO interior design and fit-out"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - slider}% 0 0)` }}>
                <Image
                  src="/images/majanvilla-before.png"
                  alt="Majan villa before, at bare developer handover"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              <div className="absolute top-0 h-full w-[2px] bg-white" style={{ left: `${slider}%` }}>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-[#111] border border-[#caa193] flex items-center justify-center text-[#caa193]">
                  ↔
                </div>
              </div>

              <div className="absolute left-5 bottom-5 bg-[#caa193] text-black px-4 py-2 rounded-full text-xs">Before</div>
              <div className="absolute right-5 bottom-5 bg-black/50 text-white px-4 py-2 rounded-full text-xs">After</div>
            </div>
          </div>
        </section>

        {/* THE WE DO DIFFERENCE */}

        <section className="mt-10">
          <p className={eyebrowClass}>The WE DO Difference</p>
          <h2 className={h2Class}>Why Choose WE DO for Your Villa Interior Design</h2>

          <div className="rounded-lg border border-[#caa193]/10 bg-[#111] p-2">
            <p className="text-sm leading-7 mb-4 font-play text-white/85">
              Design and fit-out under one contract. WE DO combines villa interior design and fit-out under one contract, giving you a single team and point of contact from design through execution.
              Real certifications, not just marketing claims. ISO 9001:2015, ISO 14001:2015 and ISO 45001:2018 certification, DED registration, plus a 2026 Luxury Lifestyle Award, credentials you can verify, not just brand copy.
              An in-house joinery factory. Custom furniture and cabinetry are manufactured in-house rather than outsourced, which is what lets WE DO hold a single delivery timeline and warranty across design and furniture together.
              Direct developer and municipality relationships. WE DO coordinates approvals directly with Dubai Civil Defence, Dubai Municipality, and developers including Emaar and Damac — useful if your villa is a post-handover, off-plan property.
            </p>
          </div>
        </section>

        {/* TRENDS */}

        <section className="mt-10">
          <p className={eyebrowClass}>Latest Design Trends</p>
          <h2 className={h2Class}>2026 Villa Interior Design Trends in Dubai</h2>

          <p className="text-sm leading-8 mb-4 font-play text-white/85">
            Dubai villa interior design in 2026 is settling into four clear directions, most of them a reaction to the louder, more maximalist decade before it:
          </p>
          <div className="rounded-lg border border-[#caa193]/10 bg-[#111]">
            <ul className="space-y-1 text-sm font-play text-white/80 list-disc list-inside">
              <li><strong className="text-white">Quiet luxury & refined minimalism</strong> — fewer visual statements, more attention to material quality and finish precision.</li>
              <li><strong className="text-white">Branded-residence quality</strong> — villa owners increasingly want that same material and finish standard applied to their own home, without buying into any specific brand&apos;s actual design.</li>
              <li><strong className="text-white">Biophilic & sustainable design</strong> — natural materials, daylight-first layouts and energy-efficient systems.</li>
              <li><strong className="text-white">Wellness-focused bathrooms</strong> — steam rooms, deeper soaking tubs and spa-grade finishes have moved from an occasional request to a fairly standard ask in master bathrooms.</li>
            </ul>
          </div>
        </section>

        {/* IMAGE MODAL */}

        {selectedImage && (
          <div
            className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              type="button"
              aria-label="Close image"
              className="absolute top-5 right-5 text-white text-xl z-10"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
            <div className="relative w-full max-w-5xl aspect-[16/10]" onClick={(e) => e.stopPropagation()}>
              <Image src={selectedImage.src} alt={selectedImage.alt} fill sizes="90vw" className="object-contain" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ApId;