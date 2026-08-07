'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

// Section 12 — Gallery
const galleryProjects = [
  {
    image: '/images/penth7.webp',
    project: 'II Primo Penthouse',
    link: '/ii-primo-penthouse',
  },
  {
    image: '/images/bba8.webp',
    project: 'Business Bay Apartment',
    link: '/business-bay-apartment',
  },
  {
    image: '/images/pjapt (5).webp',
    project: 'Business Bay Apartment',
    link: '/palm-jumeirah-apartment',
  },
  {
    image: '/images/6w-residence (2).webp',
    project: '6W Residence',
    link: '/palm-jumeirah-6-bedroom-penthouse',
  },
];

const ApId = () => {
  const [slider, setSlider] = useState(50);

  const scrollRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const trustItems = [
  {
    value: 'TURNKEY',
    label: 'Interior & Fit-Out',
  },
  {
    value: 'CUSTOM',
    label: 'Joinery & Furniture',
  },
  {
    value: 'IN-HOUSE',
    label: 'Design & Execution',
  },
  {
    value: 'PALM JUMEIRAH',
    label: 'Serenia Living Specialists',
  },
];

  const images = [
    '/images/SereniaL.jpeg',
    '/images/SereniaL (2).jpeg',
    '/images/SereniaL (3).jpeg',
    '/images/SereniaL (4).jpeg',
    '/images/SereniaL (5).jpeg',
    '/images/SereniaL (6).jpeg',
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

    const percentage = Math.max(
      0,
      Math.min(100, ((clientX - rect.left) / rect.width) * 100)
    );

    setSlider(percentage);
  };

  return (
    <section className="bg-black text-white px-6 sm:px-10 md:px-16 lg:px-28 xl:px-55 font-sans py-10">
      <div className="lg:max-w-[90%] mx-auto">
        {/* HERO */}

        <div>
          <p className="text-sm sm:text-base leading-8 font-play text-white/85">
            {' '}
            <b className="text-[#caa193]">
              <a href="https://wedointerior.ae/">
                WE DO Interior Design & Fit-Out
              </a>
            </b>{' '} designs personalized interiors for {' '}
            <b className="text-[#caa193]">
              <a href="https://wedointerior.ae/interior-design-companies-palm-jumeirah-dubai">
                Serenia Living residences in Palm Jumeirah
              </a>
            </b>{' '}, with the entire process including interior design and 3D visualization to custom joinery, furniture, and turnkey installation. If you own a 2-, 3-, or 4-bedroom apartment, penthouse, Reserve residence, or Sky Mansion, our in-house team creates the interior around the residence itself, its proportions, sea views, natural light, handover condition, and the way you want to live in it. With 15+ years of experience, 250+ completed projects, and in-house design, joinery, and fit-out teams, WE DO gives Serenia Living owners one team and one contract from ideation through move-in.
          </p>
        </div>

        {/* KEY FACTS */}

       <div className="mt-10 border border-[#caa193]/10 bg-[#111] p-8">
  <p className="text-[#caa193] text-xs tracking-[3px] uppercase font-conthrax mb-4">
    Key Facts
  </p>

  <ul className="space-y-2 font-play text-white/80 leading-7 list-disc list-inside">
    <li>
      Serenia Living comprises <strong>226 residences</strong>: 2–4 bedroom apartments, penthouses, 20 furnished Reserve design residences, and 4 Sky Mansions.
    </li>

    <li>
      Outside The Reserve, no unit is delivered furnished; every other owner needs independent interior design and furnishing.
    </li>

    <li>
      WE DO: <strong>15+ years</strong>, <strong>250+ completed projects</strong>, in-house design, joinery, and fit-out under one team and one contract.
    </li>

    <li>
      In-house joinery factory — wardrobes, kitchen units, and cabinetry are designed and built by the same company that installs them.
    </li>

    <li>
      Full remote project management for owners based outside the UAE, from video consultation through to installation sign-off.
    </li>

    <li>
      DED-registered Dubai interior design and fit-out company, HQ in Jebel Ali Industrial 1.
    </li>

    <p>Ready to hire an interior designer for your Serenia Living residence? Call or WhatsApp WE DO at
              +971 58 807 5603
  
      , or email
              info@wedointerior.ae
      
      , for a project-specific quote.</p>
      
    
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

              const x = e.pageX;
              const walk = (x - startX) * 1.5;
              scrollRef.current.scrollLeft = scrollLeft - walk;
            }}
            onMouseUp={() => setIsDragging(false)}
          >
            {[...images, ...images].map((src, index) => (
              <button
                key={index}
                type="button"
                onClick={() => {
                  if (!isDragging) setSelectedImage(src);
                }}
                className="relative h-[520px] w-[320px] shrink-0 overflow-hidden"
              >
                <Image
                  src={src}
                  alt={`Da Vinci Tower furniture image ${index + 1}`}
                  fill
                  sizes="320px"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </button>
            ))}
          </div>
        </section>
{/* INTERNATIONAL OWNERS */}
<section className="mt-10">
  <p className="text-[#caa193] text-xs tracking-[3px] uppercase font-conthrax mb-3">
    International Owners
  </p>

  <h2 className="text-xl lg:text-2xl font-conthrax mb-5">
    Interior Design for Overseas & Remote Serenia Living Owners
  </h2>

  <div className="rounded-lg border border-[#caa193]/10 bg-[#111] p-6 space-y-4">
    <p className="text-sm sm:text-base leading-8 font-play text-white/85">
      Palm Jumeirah ownership includes a significant share of buyers who don&apos;t live in the UAE full-time. WE DO runs remote-friendly projects for owners based abroad, including video consultations, 3D visualization for design sign-off, and progress updates through installation so a Serenia Living owner never needs to be in Dubai for any stage of the process.
    </p>

    <p className="text-sm sm:text-base leading-8 font-play text-white/85">
      This also covers two specific cases that often come up at Serenia Living: investor owners furnishing a unit to a standard suited to tenants rather than for personal use, and first-time owners who want a guided, single-point process rather than managing designers, joinery, and installation themselves.
    </p>
  </div>
</section>

        {/* TRUST BAR */}

        <div className="mt-5 border border-[#caa193]/15 bg-[#111] overflow-hidden">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {trustItems.map((item, index) => (
              <div
                key={index}
                className={`
                  px-4 py-4 text-center
                  ${
                    index !== trustItems.length - 1
                      ? 'lg:border-r border-[#caa193]/10'
                      : ''
                  }
                  ${
                    index < 2
                      ? 'border-b lg:border-b-0 border-[#caa193]/10'
                      : ''
                  }
                `}
              >
                <h3 className="font-conthrax text-[11px] tracking-[2px] text-[#caa193] uppercase">
                  {item.value}
                </h3>

                <p className="mt-1 text-[10px] text-white/60 uppercase font-play">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

       

{/* WHY CHOOSE WE DO */}
<section className="mt-10">
  <h2 className="text-2xl text-white lg:text-3xl font-conthrax mb-8">
    Why Serenia Living Homeowners Choose WE DO
  </h2>

  <div className="border border-[#caa193]/10 bg-[#111] p-6">
    <p className="text-sm sm:text-base leading-8 font-play text-white/85">
      Designing a luxury residence at Serenia Living requires more than creative ideas. It takes a team that can manage design, approvals, custom manufacturing, and on-site execution under one roof. In addition to having over 15 years of experience and delivering over 250+ residential and commercial projects in Dubai, WE DO ensures that all stages of your project are taken care of by one team with one contract.
    </p>

    <p className="text-sm sm:text-base leading-8 mt-4 font-play text-white/85">
      Being an ISO 9001:2015, ISO 14001:2015, and ISO 45001:2018 company and winner of Luxury Style Awards 2026, WE DO utilizes in-house interior designers, a joinery factory, civil works, a decoration team, and approval experts for DM, DCD, Emaar, DAMAC, Nakheel, and private developers of Dubai. Our portfolio includes prime waterfront and luxury residences across {' '}
            <b className="text-[#caa193]">
              <a href="https://wedointerior.ae/royal-atlantis-dubai-interior-design-company">
                Atlantis The Royal
              </a>
            </b>{' '}, and {' '}
            <b className="text-[#caa193]">
              <a href="https://wedointerior.ae/da-vinci-tower-pagani-furniture">
                Da Vinci Tower
              </a>
            </b>{' '} Tower, Business Bay.
    </p>
  </div>
</section>

        {/* PACKAGE INCLUSIONS */}

        {/* <section className="mt-10">
          <p className="text-[#caa193] text-xs tracking-[3px] uppercase font-conthrax mb-3">
            Package Inclusions
          </p>

          <h3 className="text-xl text-white lg:text-2xl font-conthrax mb-8">
            What&apos;s Actually Inside the AED 2-3 Million Package
          </h3>

          <div className="border border-[#caa193]/10 bg-[#111] p-6">
            <ul className="space-y-2 font-play text-white/80 leading-7 list-disc list-inside">
              <li>
                Carbon fibre and aluminium accent panelling on feature walls and
                joinery.
              </li>
              <li>
                Full-grain leather sofas and dining chairs, hand-stitched.
              </li>
              <li>
                Italian marble dining tables, coffee tables, and console
                surfaces.
              </li>
              <li>
                Engineered wood flooring with custom inlay detailing.
              </li>
              <li>Kinetic chandeliers and sculptural lighting fixtures.</li>
              <li>
                Built-in lacquered joinery and smart-home-integrated storage.
              </li>
            </ul>
          </div>
        </section> */}

        {/* SERENIA LIVING IMAGE GALLERY */}
<section className="mt-10">
  <h2 className="text-center text-white text-xl lg:text-2xl font-conthrax tracking-widest uppercase mb-8">
    Serenia Living Apartment Interiors
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {images.map((src, index) => (
      <div
        key={index}
        className="relative aspect-square overflow-hidden border border-[#caa193]/10"
      >
        <Image
          src={src}
          alt={`Serenia Living Palm Jumeirah apartment interior ${index + 1}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 hover:scale-105"
        />
      </div>
    ))}
  </div>
</section>

       {/* INTERIOR DESIGN & FIT-OUT SERVICES */}
<section className="mt-10">
  <p className="text-[#caa193] text-xs tracking-[3px] uppercase font-conthrax mb-3">
    Bespoke Services
  </p>

  <h2 className="text-2xl text-white lg:text-3xl font-conthrax mb-4">
    Interior Design & Fit-Out Services at Serenia Living
  </h2>

  <p className="text-sm sm:text-base leading-8 mb-8 font-play text-white/85">
    Serenia Living&apos;s residence types range from standard apartments to a handful of ultra-high-value Sky Mansions, and the right scope of work is different for each. WE DO scopes every project against the unit&apos;s actual handover condition rather than a single fixed package.
  </p>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {/* APARTMENT DESIGN */}
    <div className="border border-[#caa193]/10 bg-[#111] p-6 flex flex-col justify-between">
      <div>
        <h3 className="text-lg text-white font-conthrax mb-3">
          {' '}
            <b className="text-[#caa193]">
              <a href="https://wedointerior.ae/apartment-interior-design-dubai">
                Apartment Interior Design
              </a>
            </b>{' '} (2, 3 & 4-Bedroom Residences)
        </h3>
        <p className="text-sm leading-7 font-play text-white/80">
          This covers the largest share of Serenia Living&apos;s 226 residences. The layout is mostly open plan with living and dining, with floor-to-ceiling glazing overlooking the waterfront, so WE DO’s design considerations will include furniture arrangement and joinery to frame the views rather than block them. Project scope includes design concept development, 3D visualizations, bespoke joinery, furniture, and installation.
        </p>
      </div>
      <div className="mt-4 pt-4 border-t border-[#caa193]/10">
        <a href="/palm-jumeirah-apartment" className="text-[#caa193] text-xs uppercase font-conthrax tracking-[2px] hover:underline">
          See our Palm Jumeirah apartment project →
        </a>
      </div>
    </div>

    {/* PENTHOUSE DESIGN */}
    <div className="border border-[#caa193]/10 bg-[#111] p-6 flex flex-col justify-between">
      <div>
        <h3 className="text-lg text-white font-conthrax mb-3">
          Penthouse Interior Design
        </h3>
        <p className="text-sm leading-7 font-play text-white/80">
          Serenia Living&apos;s penthouses run roughly 5,000–14,000 sq ft across half-floor and full-floor layouts, with multiple living zones and private terraces. WE DO scales joinery and furniture to these larger footprints, with separate design treatments for formal living, family, and outdoor entertaining areas within the same residence.
        </p>
      </div>
      <div className="mt-4 pt-4 border-t border-[#caa193]/10">
        <a href="/palm-jumeirah-2-bedroom-penthouse" className="text-[#caa193] text-xs uppercase font-conthrax tracking-[2px] hover:underline">
          See our Palm Jumeirah penthouse project →
        </a>
      </div>
    </div>

    {/* THE RESERVE */}
    <div className="border border-[#caa193]/10 bg-[#111] p-6 flex flex-col justify-between">
      <div>
        <h3 className="text-lg text-white font-conthrax mb-3">
          The Reserve Bespoke Design Residences
        </h3>
        <p className="text-sm leading-7 font-play text-white/80">
          The design of the Reserve apartments includes furniture supplied by Italian design companies within the developer’s package. In the case of WE DO, our task is not about replacing the basic set of furniture that comes with the package, but adding an element of customization on top of that, such as joinery, office/library fit out, feature walls, or styling according to the client&apos;s taste.
        </p>
      </div>
    </div>

    {/* SKY MANSIONS */}
    <div className="border border-[#caa193]/10 bg-[#111] p-6 flex flex-col justify-between">
      <div>
        <h3 className="text-lg text-white font-conthrax mb-3">
          Sky Mansion Interior Design
        </h3>
        <p className="text-sm leading-7 font-play text-white/80">
          Only four Sky Mansions exist at Serenia Living, each 18,500–25,000 sq ft with double-height ceilings around 8.5 metres and a private pool. At this scale, WE DO builds a fully bespoke concept per residence—feature walls, statement joinery, home theatre or wine room fit-outs—rather than applying a repeatable template.
        </p>
      </div>
    </div>
  </div>
</section>

        {/* PRICING GUIDE */}
<section className="mt-10">
  <p className="text-[#caa193] text-xs tracking-[3px] uppercase font-conthrax mb-3">
    Pricing Guide
  </p>

  <h2 className="text-xl lg:text-2xl font-conthrax mb-5 text-white">
    Serenia Living Interior Design & Fit-Out Cost
  </h2>

  <p className="text-sm sm:text-base leading-8 mb-6 font-play text-white/85">
    Every Serenia Living residence is different, so the final investment depends on the unit type, level of customization, material selection, and the amount of bespoke joinery and furniture required. After reviewing your floor plan and design brief, WE DO provides a detailed project-specific quotation before work begins.
  </p>

  <div className="overflow-x-auto rounded-lg border border-[#caa193]/10">
    <table className="w-full min-w-[650px] border-collapse">
      <thead className="bg-[#181818]">
        <tr>
          <th className="border border-[#caa193]/10 px-4 py-3 text-left font-conthrax text-[12px] text-[#caa193]">
            Residence Type
          </th>
          <th className="border border-[#caa193]/10 px-4 py-3 text-left font-conthrax text-[12px] text-[#caa193]">
            Approximate Interior Fit-Out Cost
          </th>
        </tr>
      </thead>

      <tbody className="bg-[#111] font-play text-[14px] text-white/80">
        <tr>
          <td className="border border-[#caa193]/10 px-4 py-3">
            2 Bedroom Apartment
          </td>
          <td className="border border-[#caa193]/10 px-4 py-3">
            Around AED 450,000 – AED 700,000
          </td>
        </tr>

        <tr>
          <td className="border border-[#caa193]/10 px-4 py-3">
            3 Bedroom Apartment
          </td>
          <td className="border border-[#caa193]/10 px-4 py-3">
            Approximately AED 700,000 – AED 1.1 Million
          </td>
        </tr>

        <tr>
          <td className="border border-[#caa193]/10 px-4 py-3">
            4 Bedroom Apartment
          </td>
          <td className="border border-[#caa193]/10 px-4 py-3">
            Around AED 1.1 Million – AED 1.8 Million
          </td>
        </tr>

        <tr>
          <td className="border border-[#caa193]/10 px-4 py-3">
            Penthouse
          </td>
          <td className="border border-[#caa193]/10 px-4 py-3">
            Approximately AED 2.0 Million – AED 5.0 Million+
          </td>
        </tr>

        <tr>
          <td className="border border-[#caa193]/10 px-4 py-3">
            Sky Mansion
          </td>
          <td className="border border-[#caa193]/10 px-4 py-3">
            Custom quotation based on project scope
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <p className="mt-4 text-xs sm:text-sm leading-6 font-play text-white/60">
    These figures are approximate estimates for luxury interior design and fit-out projects in Serenia Living. Final pricing depends on residence size, custom joinery, furniture, material selections, imported finishes, and the overall project scope.
  </p>
</section>

        {/* PROJECTS */}

        <div className="mb-10">
          <p className="text-[#caa193] text-[10px] text-center mt-10 tracking-[3px] uppercase font-conthrax mb-3">
            Gallery
          </p>

          <h2 className="text-white text-center text-xl sm:text-3xl font-conthrax mb-5">
            Furnished Residences Across Palm Jumeirah & Dubai
          </h2>
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
                  alt={`${item.project} furnished apartment interior in Dubai by WE DO`}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-[1.04]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="font-conthrax text-[13px] text-white uppercase leading-6">
                    {item.project}
                  </h3>

                  <div className="mt-4 text-[#caa193] text-[11px] uppercase tracking-[2px] font-conthrax">
                    View Project →
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

       {/* BEFORE & AFTER */}
<section className="mt-16">
  <p className="text-[#caa193] text-xs tracking-[3px] uppercase font-conthrax mb-3 text-center">
    Before &amp; After
  </p>

  <h2 className="text-white text-center text-2xl lg:text-3xl font-conthrax mb-8">
    From Developer Handover to Bespoke Fit-Out
  </h2>

  <div className="w-full max-w-[900px] mx-auto bg-[#151515] border border-[#caa193]/10 p-5">
    <div
      className="relative overflow-hidden aspect-[16/9] bg-black border border-[#caa193]/10 cursor-ew-resize select-none"
      onMouseMove={(e) => e.buttons === 1 && handleMove(e)}
      onClick={handleMove}
      onTouchMove={handleMove}
    >
      {/* AFTER IMAGE */}
      <div className="absolute inset-0">
        <Image
          src="/images/SereniaA.jpeg"
          alt="After furnishing"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* BEFORE IMAGE */}
      <div
        className="absolute inset-0"
        style={{
          clipPath: `inset(0 ${100 - slider}% 0 0)`,
        }}
      >
        <Image
          src="/images/SS.jpeg"
          alt="Before furnishing"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* SLIDER HANDLE */}
      <div
        className="absolute top-0 h-full w-[2px] bg-white z-10"
        style={{ left: `${slider}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-[#111] border border-[#caa193] flex items-center justify-center text-[#caa193]">
          ↔
        </div>
      </div>

      {/* BADGES */}
      <div className="absolute left-5 bottom-5 bg-[#caa193] text-black px-4 py-2 rounded-full text-xs font-conthrax z-20 pointer-events-none">
        Before
      </div>

      <div className="absolute right-5 bottom-5 bg-black/50 text-white px-4 py-2 rounded-full text-xs font-conthrax z-20 pointer-events-none">
        After
      </div>
    </div>
  </div>
</section>

       {/* ROOM-BY-ROOM INTERIOR DESIGN & CUSTOM JOINERY (SINGLE BOX - NO DIVIDERS) */}
<section className="mt-16">
  <p className="text-[#caa193] text-xs tracking-[3px] uppercase font-conthrax mb-3">
    Comprehensive Scope
  </p>

  <h2 className="text-2xl text-white lg:text-3xl font-conthrax mb-6">
    Room-by-Room Interior Design & Custom Joinery
  </h2>

  <div className="border border-[#caa193]/10 bg-[#111] p-6 lg:p-8">
    <p className="text-sm sm:text-base leading-8 mb-8 font-play text-white/85">
      Beyond the residence-type breakdown above, most Serenia Living projects come down to the same core rooms and joinery decisions.
    </p>

    <div className="space-y-6">
      {/* KITCHEN DESIGN */}
      <div>
        <h3 className="text-lg text-[#caa193] font-conthrax mb-2">
          Kitchen Design
        </h3>
        <p className="text-sm sm:text-base leading-7 font-play text-white/80">
          Only Reserve residences include Italian-branded kitchens as standard. Every other unit is an open kitchen design opportunity: cabinetry, worktops, appliance integration, and layout planning suited to entertaining, given most units open the kitchen toward the living area and view.
        </p>
      </div>

      {/* LIVING ROOM INTERIOR DESIGN */}
      <div>
        <h3 className="text-lg text-[#caa193] font-conthrax mb-2">
          Living Room Interior Design
        </h3>
        <p className="text-sm sm:text-base leading-7 font-play text-white/80">
          The presence of floor-to-ceiling glazing within each unit means that the design of the living room at Serenia Living is entirely dependent upon the view—furniture arrangement that does not detract from the glazing, slim joinery, and good lighting that looks nice against the backdrop of the ocean and skyline at night.
        </p>
      </div>

      {/* BEDROOM INTERIOR DESIGN */}
      <div>
        <h3 className="text-lg text-[#caa193] font-conthrax mb-2">
          Bedroom Interior Design
        </h3>
        <p className="text-sm sm:text-base leading-7 font-play text-white/80">
          Primary suites and secondary bedrooms get integrated wardrobe joinery, headboard and lighting details, and window treatments suited to the sun exposure that comes with full-height glazing.
        </p>
      </div>

      {/* BATHROOM DESIGN */}
      <div>
        <h3 className="text-lg text-[#caa193] font-conthrax mb-2">
          Bathroom Design
        </h3>
        <p className="text-sm sm:text-base leading-7 font-play text-white/80">
          Vanity joinery, wet-room detailing, and material choices selected for the humidity and light conditions of a beachfront building, with natural stone and porcelain finishes that hold up over time in a coastal environment.
        </p>
      </div>

      {/* CUSTOM JOINERY & BUILT-IN WARDROBES */}
      <div>
        <h3 className="text-lg text-[#caa193] font-conthrax mb-2">
          Custom Joinery & Built-In Wardrobes
        </h3>
        <p className="text-sm sm:text-base leading-7 font-play text-white/80">
          {' '}
            <b className="text-[#caa193]">
              <a href="https://wedointerior.ae/joinery-company-dubai">
                WE DO's own joinery factory
              </a>
            </b>{' '} manufactures wardrobes, TV units, kitchen cabinetry, and other built-ins to the exact dimensions of each Serenia Living unit, rather than sourcing from a third-party joinery subcontractor. This is the direct differentiator behind the &quot;one company, one contract&quot; approach used across every service on this page.
        </p>
      </div>

      {/* LIGHTING DESIGN */}
      <div>
        <h3 className="text-lg text-[#caa193] font-conthrax mb-2">
          Lighting Design
        </h3>
        <p className="text-sm sm:text-base leading-7 font-play text-white/80">
          A layered lighting plan—ambient, task, and accent—matters more in a building defined by glass and sea views: over-lit interiors compete with the view at night, so WE DO designs lighting that supports the space without flattening the outlook.
        </p>
      </div>
    </div>
  </div>
</section>

        {/* DESIGN LANGUAGE */}
<section className="mt-10">
  <p className="text-[#caa193] text-xs tracking-[3px] uppercase font-conthrax mb-3">
    Design Language
  </p>

  <h2 className="text-xl lg:text-2xl font-conthrax mb-5 text-white">
    Materials, Styles & Custom Furniture for Serenia Living Interiors
  </h2>

  <div className="rounded-lg border border-[#caa193]/10 bg-[#111] p-6 lg:p-8 space-y-6">
    {/* MATERIALS & FINISHES */}
    <div>
      <h3 className="text-lg text-[#caa193] font-conthrax mb-2">
        Materials & Finishes for a Beachfront Interior
      </h3>
      <p className="text-sm sm:text-base leading-8 font-play text-white/85">
        Material choices at Serenia Living require accounting for direct sun exposure through large glazing and coastal humidity, not just aesthetics. WE DO generally specify engineered stone or quartz worktops, natural oak or walnut veneer joinery, brushed brass or matte black hardware selected for corrosion resistance, UV-stable fabric and leather for furniture near large windows, and large-format porcelain or natural stone flooring.
      </p>
    </div>

    {/* INTERIOR STYLES */}
    <div>
      <h3 className="text-lg text-[#caa193] font-conthrax mb-2">
        Interior Styles That Suit Serenia Living
      </h3>
      <p className="text-sm sm:text-base leading-8 font-play text-white/85">
        Three directions come up most often in early client briefs: contemporary coastal luxury (light palettes, natural textures, warm neutrals that echo the building&apos;s own material language); Italian-influenced contemporary (a natural complement for Reserve and Sky Mansion owners layering onto Italian-sourced base furniture); and refined minimalism (fewer, higher-quality pieces that let the sea view carry the room). WE DO develops a style direction against the specific unit and brief rather than applying one house style across every project.
      </p>
    </div>

    {/* CUSTOM & BESPOKE FURNITURE */}
    <div>
      <h3 className="text-lg text-[#caa193] font-conthrax mb-2">
        Custom & Bespoke Furniture
      </h3>
      <p className="text-sm sm:text-base leading-8 font-play text-white/85">
        Living, dining, and bedroom furniture is designed and built to the residence&apos;s actual dimensions rather than sourced off-the-shelf, a meaningful difference in apartments where floor plates and glazing lines are building-specific. Every unit at Serenia Living is sea-facing, so WE DO also designs indoor-outdoor furniture for balconies and terraces as part of the same brief.
      </p>
    </div>
  </div>
</section>

        {/* INTERIOR DESIGN TRENDS 2026 */}
<section className="mt-16">
  <p className="text-[#caa193] text-xs tracking-[3px] uppercase font-conthrax mb-3">
    2026 Design Insights
  </p>

  <h2 className="text-2xl text-white lg:text-3xl font-conthrax mb-6">
    Interior Design Trends for Serenia Living Homes in 2026
  </h2>

  <div className="border border-[#caa193]/10 bg-[#111] p-6 lg:p-8">
    <p className="text-sm sm:text-base leading-8 mb-8 font-play text-white/85">
      The luxury homeowners who reside in Serenia Living no longer prefer homes that only seem to be expensive-looking. Their current interior design projects aim at designing houses that are calm, timeless, and very personal while maximizing the incredible views of the seas around Palm Jumeirah.
    </p>

    <div className="space-y-6">
      {/* QUIET LUXURY */}
      <div>
        <h3 className="text-lg text-[#caa193] font-conthrax mb-2">
          Quiet Luxury with Natural Materials
        </h3>
        <p className="text-sm sm:text-base leading-7 font-play text-white/80">
          Interior design for luxury beachfront properties is characterized by subtle color palettes, natural stones, oak, walnut veneer, and brushed metals, among other handmade finishes. These homeowners opt for materials that are ageless and elegant over time.
        </p>
      </div>

      {/* SEAMLESS INDOOR-OUTDOOR */}
      <div>
        <h3 className="text-lg text-[#caa193] font-conthrax mb-2">
          Seamless Indoor–Outdoor Living
        </h3>
        <p className="text-sm sm:text-base leading-7 font-play text-white/80">
          Large terraces are becoming true extensions of the living area. Coordinated flooring, outdoor lounging layouts, weatherproof bespoke furniture, and architectural exterior lighting make the transition between inside and outside completely seamless.
        </p>
      </div>

      {/* STATEMENT JOINERY */}
      <div>
        <h3 className="text-lg text-[#caa193] font-conthrax mb-2">
          Statement Joinery Instead of More Furniture
        </h3>
        <p className="text-sm sm:text-base leading-7 font-play text-white/80">
          In contrast to filling up spaces with freestanding furnishings, clients prefer investing in tailor-made wall paneling, integrated storage, media walls, dressing rooms, and cabinetry specifically crafted for the apartment&apos;s layout.
        </p>
      </div>

      {/* LAYERED LIGHTING */}
      <div>
        <h3 className="text-lg text-[#caa193] font-conthrax mb-2">
          Layered Lighting Design
        </h3>
        <p className="text-sm sm:text-base leading-7 font-play text-white/80">
          In luxury interiors, lighting consists of several thoughtful layers: indirect ceiling cove lighting, recessed architectural spotlights, concealed LED strips, statement pendants, and customizable dimmable scenes.
        </p>
      </div>

      {/* WELLNESS-FOCUSED BEDROOMS */}
      <div>
        <h3 className="text-lg text-[#caa193] font-conthrax mb-2">
          Wellness-Focused Bedrooms
        </h3>
        <p className="text-sm sm:text-base leading-7 font-play text-white/80">
          Bedrooms are designed with a boutique hotel atmosphere—incorporating acoustic wall finishes, total blackout solutions, atmospheric mood lighting, and breathable natural materials.
        </p>
      </div>

      {/* SMART HOME INTEGRATION */}
      <div>
        <h3 className="text-lg text-[#caa193] font-conthrax mb-2">
          Smart Home Integration
        </h3>
        <p className="text-sm sm:text-base leading-7 font-play text-white/80">
          Intelligent lighting control, motorized drapery, climate automation, advanced security, and voice integration are built-in seamlessly during the fit-out phase to eliminate any post-handover alterations.
        </p>
      </div>
    </div>

    <p className="mt-8 pt-6 border-t border-[#caa193]/10 text-sm sm:text-base leading-7 font-play text-white/70 italic">
      We follow trends not to copy, but to be inspired by them. Each Serenia Living apartment is created according to the client&apos;s individual vision and will stay relevant long after temporary trends change.
    </p>
  </div>
</section>

{/* DEVELOPER FINISH VS WE DO COMPARISON TABLE */}
<section className="mt-16">
  <p className="text-[#caa193] text-xs tracking-[3px] uppercase font-conthrax mb-3">
    Comparison Scope
  </p>

  <h2 className="text-2xl text-white lg:text-3xl font-conthrax mb-5">
    Developer Finish vs. WE DO Custom Interior Fit-Out
  </h2>

  <p className="text-sm sm:text-base leading-8 mb-6 font-play text-white/85">
    Every Serenia Living unit outside The Reserve is handed over with a high-end shell finish—flooring, walls, and a standard kitchen—but not furniture or custom joinery. The table below sets out what that means in practice against a full WE DO fit-out.
  </p>

  <div className="overflow-x-auto rounded-lg border border-[#caa193]/10">
    <table className="w-full min-w-[650px] border-collapse">
      <thead className="bg-[#181818]">
        <tr>
          <th className="border border-[#caa193]/10 px-4 py-3 text-left font-conthrax text-[12px] text-[#caa193] w-1/4">
            Feature / Scope
          </th>
          <th className="border border-[#caa193]/10 px-4 py-3 text-left font-conthrax text-[12px] text-[#caa193] w-3/8">
            Developer Handover Finish
          </th>
          <th className="border border-[#caa193]/10 px-4 py-3 text-left font-conthrax text-[12px] text-[#caa193] w-3/8">
            WE DO Custom Fit-Out
          </th>
        </tr>
      </thead>

      <tbody className="bg-[#111] font-play text-[14px] text-white/80">
        <tr>
          <td className="border border-[#caa193]/10 px-4 py-3 font-semibold text-white">
            Furniture
          </td>
          <td className="border border-[#caa193]/10 px-4 py-3">
            Included only in The Reserve
          </td>
          <td className="border border-[#caa193]/10 px-4 py-3">
            Custom-designed and built for every unit
          </td>
        </tr>

        <tr>
          <td className="border border-[#caa193]/10 px-4 py-3 font-semibold text-white">
            Joinery & Cabinetry
          </td>
          <td className="border border-[#caa193]/10 px-4 py-3">
            Standard kitchen units only (non-Reserve)
          </td>
          <td className="border border-[#caa193]/10 px-4 py-3">
            Bespoke wardrobes, TV units, and cabinetry from WE DO&apos;s own factory
          </td>
        </tr>

        <tr>
          <td className="border border-[#caa193]/10 px-4 py-3 font-semibold text-white">
            Design Personalization
          </td>
          <td className="border border-[#caa193]/10 px-4 py-3">
            One building-wide design language
          </td>
          <td className="border border-[#caa193]/10 px-4 py-3">
            Tailored to the owner&apos;s brief, room by room
          </td>
        </tr>

        <tr>
          <td className="border border-[#caa193]/10 px-4 py-3 font-semibold text-white">
            Point of Contact
          </td>
          <td className="border border-[#caa193]/10 px-4 py-3">
            Developer, plus separate contractors for anything additional
          </td>
          <td className="border border-[#caa193]/10 px-4 py-3">
            One team, one contract, design through installation
          </td>
        </tr>

        <tr>
          <td className="border border-[#caa193]/10 px-4 py-3 font-semibold text-white">
            Timeline
          </td>
          <td className="border border-[#caa193]/10 px-4 py-3">
            Fixed at handover
          </td>
          <td className="border border-[#caa193]/10 px-4 py-3">
            Project-specific confirmed at design sign-off, once scope and materials are finalized
          </td>
        </tr>

        <tr>
          <td className="border border-[#caa193]/10 px-4 py-3 font-semibold text-white">
            Warranty
          </td>
          <td className="border border-[#caa193]/10 px-4 py-3">
            Developer defect-liability period (standard UAE handover terms)
          </td>
          <td className="border border-[#caa193]/10 px-4 py-3">
            Covered under the project contract
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</section>



{/* INTERIOR DESIGN & FIT-OUT PROCESS */}
<section className="mt-16">
  <p className="text-[#caa193] text-xs tracking-[3px] uppercase font-conthrax mb-3">
    Execution Blueprint
  </p>

  <h2 className="text-2xl text-white lg:text-3xl font-conthrax mb-5">
    Our Interior Design & Fit-Out Process at Serenia Living
  </h2>

  <div className="border border-[#caa193]/10 bg-[#111] p-6 lg:p-8">
    <p className="text-sm sm:text-base leading-8 mb-8 font-play text-white/85">
      Every project follows the same six stages, whether it starts before handover or after developer snagging is already underway. Comparable Dubai apartment fit-outs typically run 8–16 weeks from design to installation, depending on unit size, scope, and whether furniture is custom-built or imported. WE DO confirms a project-specific timeline once your scope is set at Step 2 below.
    </p>

    <div className="space-y-6">
      {/* STEP 1 */}
      <div>
        <h3 className="text-lg text-[#caa193] font-conthrax mb-2">
          1. Consultation & Unit Assessment
        </h3>
        <p className="text-sm sm:text-base leading-7 font-play text-white/80">
          WE DO reviews the residence&apos;s layout, handover condition, and any outstanding developer snagging, in person or remotely, and takes measurements for joinery work. This is also when WE DO opens the Building Management NOC application with Serenia Living&apos;s facilities team and confirms contractor registration—a required step for fit-out work in any Dubai apartment building, handled on the owner&apos;s behalf.
        </p>
      </div>

      {/* STEP 2 */}
      <div>
        <h3 className="text-lg text-[#caa193] font-conthrax mb-2">
          2. Design Concept & 3D Visualization
        </h3>
        <p className="text-sm sm:text-base leading-7 font-play text-white/80">
          Mood boards, a material palette, and 3D renders are developed against the brief, typically over one to two weeks. The owner reviews and signs off on the direction, including the chosen style path, before anything is ordered or manufactured.
        </p>
      </div>

      {/* STEP 3 */}
      <div>
        <h3 className="text-lg text-[#caa193] font-conthrax mb-2">
          3. Material & Furniture Selection
        </h3>
        <p className="text-sm sm:text-base leading-7 font-play text-white/80">
          Finishes, materials, and furniture pieces are finalized against the approved concept. Imported European or Italian pieces carry their own lead times (commonly 8–12 weeks for shipping), so these are ordered early and in parallel with joinery manufacturing to keep the timeline streamlined.
        </p>
      </div>

      {/* STEP 4 */}
      <div>
        <h3 className="text-lg text-[#caa193] font-conthrax mb-2">
          4. Joinery Manufacturing
        </h3>
        <p className="text-sm sm:text-base leading-7 font-play text-white/80">
          Custom wardrobes, kitchen units, TV units, and cabinetry are built at WE DO&apos;s in-house factory to the exact dimensions of the residence, running alongside material delivery and building-management approvals.
        </p>
      </div>

      {/* STEP 5 */}
      <div>
        <h3 className="text-lg text-[#caa193] font-conthrax mb-2">
          5. Fit-Out & Installation
        </h3>
        <p className="text-sm sm:text-base leading-7 font-play text-white/80">
          On-site work begins once the Building Management NOC is approved and any refundable damage deposit required by Serenia Living&apos;s management is settled. WE DO books service elevator slots and delivery windows around the building&apos;s access rules, arranging DEWA sign-offs separately if the scope includes electrical or plumbing changes.
        </p>
      </div>

      {/* STEP 6 */}
      <div>
        <h3 className="text-lg text-[#caa193] font-conthrax mb-2">
          6. Styling & Handover
        </h3>
        <p className="text-sm sm:text-base leading-7 font-play text-white/80">
          Final furniture placement, a professional styling pass, an internal quality check, and a walkthrough with the owner close out the project, along with comprehensive handover documentation covering warranty items.
        </p>
      </div>
    </div>

    <p className="mt-8 pt-6 border-t border-[#caa193]/10 text-sm sm:text-base leading-7 font-play text-white/70 italic">
      For owners who haven&apos;t yet finished developer snagging, WE DO can sequence fit-out work around the remaining snagging process rather than waiting for it to fully close out first.
    </p>
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
              className="absolute top-5 right-5 text-white text-3xl z-10"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>

            <div
              className="relative w-full max-w-5xl aspect-[16/10]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Large Da Vinci Tower furniture preview"
                fill
                className="object-contain"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ApId;