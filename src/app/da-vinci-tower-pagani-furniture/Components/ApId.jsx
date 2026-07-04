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
      label: 'Furniture & Furnishing',
    },
    {
      value: 'CUSTOM',
      label: 'Custom Furniture',
    },
    {
      value: 'IN-HOUSE',
      label: 'Joinery',
    },
    {
      value: 'BUSINESS BAY',
      label: 'Da Vinci Specialists',
    },
  ];

  const images = [
    '/images/da-vinci-tower-10.webp',
    '/images/da-vinci-tower-12.webp',
    '/images/da-vinci-tower-13.webp',
    '/images/da-vinci-tower-14.webp',
    '/images/da-vinci-tower-15.webp',
    '/images/da-vinci-tower-16.webp',
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
            If you own a unit in Da Vinci Tower by Pagani in Business Bay, you
            already know the developer&apos;s furniture packages run AED 2
            million to AED 3 million for the Pagani Arte collection, leather
            upholstery, carbon fibre detailing, Italian marble, and hand-finished
            joinery.{' '}
            <b className="text-[#caa193]">
              <a href="https://wedointerior.ae/">
                WE DO Interior Design & Fit-Out
              </a>
            </b>{' '}
            builds matching-grade materials, comparable finish quality, and the
            same design language for less than half of the price offered by the
            developer&apos;s furniture package, fully furnished. We are an
            independent fit-out company, not affiliated with Pagani Automobili or
            DarGlobal we recreate the aesthetic using equivalent premium
            materials and craftsmanship, at a fraction of the branded price.
          </p>
        </div>

        {/* KEY FACTS */}

        <div className="mt-10 border border-[#caa193]/10 bg-[#111] p-8">
          <p className="text-[#caa193] text-xs tracking-[3px] uppercase font-conthrax mb-4">
            Key Facts
          </p>

          <ul className="space-y-1 font-play text-white/80 leading-8 list-disc list-inside">

            <li>
              WE DO&apos;s equivalent package:{' '}
              <strong>AED 500K–700K</strong>
            </li>

            <li>
              Furnishing timeline: <strong>3–6 weeks</strong> from measurement
              to installation, after snagging is cleared.
            </li>

            <li>
              WE DO is an independent fit-out company, not licensed by Pagani
              Automobili or DarGlobal.
            </li>

            <li>
              Available remotely for international owners via 3D rendering
              approval and video walkthroughs.
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

        {/* THIS GUIDE IS DESIGNED FOR */}

        <div className="mt-5 border border-[#caa193]/10 bg-[#111] p-8">
          <p className="text-[#caa193] text-xs tracking-[3px] uppercase font-conthrax mb-3">
            This Guide Is Designed For
          </p>

          <ul className="space-y-1 font-play text-white/80 leading-8 list-disc list-inside">
            <li>
              Owners who have already closed on a unit and are now facing the
              furniture budget.
            </li>

            <li>
              Owners who have just taken handover and need a move-in plan.
            </li>

            <li>
              Buyers anywhere in the world researching Da Vinci Tower before
              they commit, who want to understand what furnishing costs beyond
              the unit price.
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

        {/* FURNITURE PRICING */}

        <section className="mt-10">
          <p className="text-[#caa193] text-xs tracking-[3px] uppercase font-conthrax mb-3">
            Furniture Pricing
          </p>

          <h2 className="text-2xl text-white lg:text-3xl font-conthrax mb-8">
            Why Da Vinci Tower Furniture Costs AED 2-3 Million Through the
            Developer
          </h2>

          <div className="border border-[#caa193]/10 bg-[#111] p-6">
            <p className="text-sm sm:text-base leading-8 mb-4 font-play text-white/85">
              Da Vinci Tower is DarGlobal&apos;s branded residential tower on
              the Dubai Canal in Business Bay, the world&apos;s first
              residential development with interiors by Pagani Automobili, the
              Italian hypercar manufacturer. Units range from 2 to 4 bedrooms,
              77 to 398 sq m, with prices starting around AED 6.8 million. The
              Pagani Arte furniture packages that come with full branding rights
              use carbon fibre panelling, aluminium and titanium accents,
              full-grain leather, and Italian marble surfaces, all produced
              under license with Pagani&apos;s design studio.
            </p>

            <p className="text-sm sm:text-base leading-8 mb-4 font-play text-white/85">
              That licensing is exactly what drives the AED 2-3 million
              furniture cost. You are not only paying for materials and
              craftsmanship; you are also paying for the brand name attached to
              every piece, the exclusivity of a limited production run, and the
              marketing premium built into the branded package.
            </p>
          </div>
        </section>

        {/* PACKAGE INCLUSIONS */}

        <section className="mt-10">
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
        </section>

        {/* DA VINCI TOWER IMAGE GALLERY */}

        <section className="mt-10">
          <h2 className="text-center text-white text-xl lg:text-2xl font-conthrax tracking-widest uppercase mb-8">
            Da Vinci Tower Apartment Furniture
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((src, index) => (
              <div
                key={index}
                className="relative aspect-square overflow-hidden"
              >
                <Image
                  src={src}
                  alt={`Da Vinci Tower apartment furniture ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </section>

        {/* PAGANI-INSPIRED FURNITURE */}

        <section className="mt-10">
          <p className="text-[#caa193] text-xs tracking-[3px] uppercase font-conthrax mb-3">
            Our Approach
          </p>

          <h2 className="text-2xl text-white lg:text-3xl font-conthrax mb-8">
            Pagani-Inspired Furniture, Less Than Half of the Price Offered by
            Developer, How We Match the Quality
          </h2>

          <div className="border border-[#caa193]/10 bg-[#111] p-6">
            <p className="text-sm sm:text-base leading-8 mb-4 font-play text-white/85">
              WE DO Interior Design & Fit-Out has worked across Business Bay,
              Downtown Dubai, and Dubai Marina apartments for 15+ years,
              completing{' '}
              <b className="text-[#caa193]">
                <a href="https://wedointerior.ae/gallery">
                  500+ residential and commercial fit-out projects
                </a>
              </b>
              . For Da Vinci Tower owners, we run a dedicated process: source
              the same-grade leather, marble, and carbon-fibre-finish materials
              directly from our supplier network.
            </p>

            <p className="text-sm sm:text-base leading-8 mb-4 font-play text-white/85">
              The starting price of approximately AED 500,000 covers a full
              apartment: living room sofa set, dining table and chairs, primary
              and guest bedroom sets, and feature joinery.
            </p>

            <section className="mt-10">
              <p className="text-[#caa193] text-xs tracking-[3px] uppercase font-conthrax mb-3">
                Cost Breakdown
              </p>

              <h3 className="text-xl text-white lg:text-2xl font-conthrax mb-8">
                Where the AED 1.4-2.4 Million Saving Comes From?
              </h3>

              <div className="border border-[#caa193]/10 bg-[#111] p-6">
                <ol className="space-y-2 font-play text-white/80 leading-7 list-decimal list-inside">
                  <li>
                    <strong className="text-white">No brand licensing fee:</strong>{' '}
                    The developer&apos;s branded furniture pricing includes a
                    licensing premium.
                  </li>
                  <li>
                    <strong className="text-white">Direct supplier sourcing:</strong>{' '}
                    We buy leather, marble, and carbon-fibre veneer directly.
                  </li>
                  <li>
                    <strong className="text-white">In-house production:</strong>{' '}
                    Our own{' '}
                    <b className="text-[#caa193]">
                      <a href="https://wedointerior.ae/joinery-company-dubai">
                        joinery and upholstery workshops
                      </a>
                    </b>{' '}
                    in Jebel Ali means no third-party contractor margin.
                  </li>
                  <li>
                    <strong className="text-white">Project-specific scope:</strong>{' '}
                    We furnish exactly your unit&apos;s layout.
                  </li>
                </ol>
              </div>
            </section>
          </div>
        </section>

        {/* PRICING GUIDE */}

        <section className="mt-10">
          <p className="text-[#caa193] text-xs tracking-[3px] uppercase font-conthrax mb-3">
            Pricing Guide
          </p>

          <h2 className="text-xl lg:text-2xl font-conthrax mb-5">
            How Much Does It Cost to Furnish a Da Vinci Tower Apartment?
          </h2>

          <p className="text-sm sm:text-base leading-8 mb-4 font-play text-white/85">
            Pricing depends on unit size and configuration.
          </p>

          <div className="overflow-x-auto rounded-lg border border-[#caa193]/10">
            <table className="w-full min-w-[650px] border-collapse">
              <thead className="bg-[#181818]">
                <tr>
                  <th className="border border-[#caa193]/10 px-4 py-3 text-left font-conthrax text-[12px] text-[#caa193]">
                    Configuration
                  </th>
                  <th className="border border-[#caa193]/10 px-4 py-3 text-left font-conthrax text-[12px] text-[#caa193]">
                    Developer Branded Package
                  </th>
                  <th className="border border-[#caa193]/10 px-4 py-3 text-left font-conthrax text-[12px] text-[#caa193]">
                    WE DO Equivalent Package
                  </th>
                </tr>
              </thead>

              <tbody className="bg-[#111] font-play text-[14px] text-white/80">
                <tr>
                  <td className="border border-[#caa193]/10 px-4 py-3">
                    2-bedroom (~140 sq m)
                  </td>
                  <td className="border border-[#caa193]/10 px-4 py-3">
                    AED 2.0M - 2.3M
                  </td>
                  <td className="border border-[#caa193]/10 px-4 py-3">
                    Starting from AED 500K
                  </td>
                </tr>

                <tr>
                  <td className="border border-[#caa193]/10 px-4 py-3">
                    3-bedroom (~220 sq m)
                  </td>
                  <td className="border border-[#caa193]/10 px-4 py-3">
                    AED 2.4M - 2.7M
                  </td>
                  <td className="border border-[#caa193]/10 px-4 py-3">
                    Starting from AED 600K
                  </td>
                </tr>

                <tr>
                  <td className="border border-[#caa193]/10 px-4 py-3">
                    4-bedroom / duplex
                  </td>
                  <td className="border border-[#caa193]/10 px-4 py-3">
                    AED 2.8M - 3.2M
                  </td>
                  <td className="border border-[#caa193]/10 px-4 py-3">
                    Starting from AED 700K
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* PROJECTS */}

        <div className="mb-10">
          <p className="text-[#caa193] text-[10px] text-center mt-10 tracking-[3px] uppercase font-conthrax mb-3">
            Gallery
          </p>

          <h2 className="text-white text-center text-xl sm:text-3xl font-conthrax mb-5">
            Furnished Residences Across Dubai
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
            Before & After
          </p>

          <h2 className="text-white text-center text-2xl lg:text-3xl font-conthrax mb-8">
            From Bare Handover to Fully Furnished
          </h2>

          <div className="w-full max-w-[900px] mx-auto bg-[#151515] border border-[#caa193]/10 p-5">
            <div
              className="relative overflow-hidden aspect-[16/9] bg-black border border-[#caa193]/10 cursor-ew-resize select-none"
              onMouseMove={(e) => e.buttons === 1 && handleMove(e)}
              onClick={handleMove}
              onTouchMove={handleMove}
            >
              <div className="absolute inset-0">
                <Image
                  src="/images/testing image 1.png"
                  alt="After furnishing"
                  fill
                  className="object-contain"
                />
              </div>

              <div
                className="absolute inset-0"
                style={{
                  clipPath: `inset(0 ${100 - slider}% 0 0)`,
                }}
              >
                <Image
                  src="/images/testing image 2.png"
                  alt="Before furnishing"
                  fill
                  className="object-contain"
                />
              </div>

              <div
                className="absolute top-0 h-full w-[2px] bg-white"
                style={{ left: `${slider}%` }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-[#111] border border-[#caa193] flex items-center justify-center text-[#caa193]">
                  ↔
                </div>
              </div>

              <div className="absolute left-5 bottom-5 bg-[#caa193] text-black px-4 py-2 rounded-full text-xs">
                Before
              </div>

              <div className="absolute right-5 bottom-5 bg-black/50 text-white px-4 py-2 rounded-full text-xs">
                After
              </div>
            </div>
          </div>
        </section>

        {/* INTERNATIONAL OWNERS */}

        <section className="mt-10">
          <p className="text-[#caa193] text-xs tracking-[3px] uppercase font-conthrax mb-3">
            International Owners
          </p>

          <h2 className="text-xl lg:text-2xl font-conthrax mb-5">
            Furnishing Da Vinci Tower Remotely — For International Owners
          </h2>

          <div className="rounded-lg border border-[#caa193]/10 bg-[#111] p-6">
            <p className="text-sm sm:text-base leading-8 mb-4 font-play text-white/85">
              A large share of Da Vinci Tower buyers are international investors
              who won&apos;t be in Dubai during the furnishing phase. We handle
              the full process remotely.
            </p>
          </div>
        </section>

        {/* DESIGN LANGUAGE */}

        <section className="mt-10">
          <p className="text-[#caa193] text-xs tracking-[3px] uppercase font-conthrax mb-3">
            Design Language
          </p>

          <h2 className="text-xl lg:text-2xl font-conthrax mb-5">
            The Pagani Design Language, Explained
          </h2>

          <div className="rounded-lg border border-[#caa193]/10 bg-[#111] p-6">
            <p className="text-sm sm:text-base leading-8 mb-4 font-play text-white/85">
              Pagani&apos;s hypercar design philosophy centres on flowing,
              sculptural lines, exposed structural materials, and a contrast
              between raw industrial texture and soft luxury.
            </p>
          </div>
        </section>

        {/* LOCAL EXPERTISE */}

        <section className="mt-10">
          <p className="text-[#caa193] text-xs tracking-[3px] uppercase font-conthrax mb-3">
            Local Expertise
          </p>

          <h2 className="text-xl lg:text-2xl font-conthrax mb-5">
            Who Furnishes Da Vinci Tower? Local Business Bay Expertise
          </h2>

          <div className="border border-[#caa193]/10 bg-[#111] p-6">
            <p className="text-sm sm:text-base leading-8 font-play text-white/85">
              Choosing a fit-out company for a tower like Da Vinci means working
              with a team that already understands Business Bay&apos;s building
              access rules, loading bay scheduling, and NOC requirements.
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