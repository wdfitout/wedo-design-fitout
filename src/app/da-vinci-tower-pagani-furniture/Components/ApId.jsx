'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

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

const handleMove = (e) => {
  const rect = e.currentTarget.getBoundingClientRect();

  const clientX =
    'touches' in e ? e.touches[0].clientX : e.clientX;

  const percentage = Math.max(
    0,
    Math.min(100, ((clientX - rect.left) / rect.width) * 100)
  );

  setSlider(percentage);
};
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
 
  '/images/05-bedroom3-07.jpg',
   '/images/05-bedroom3-01.jpg',
  '/images/05-bedroom3-04.jpg',
];
  return (
    <section className="bg-black text-white px-6 sm:px-10 md:px-16 lg:px-28 xl:px-55 font-sans py-10">

      <div className="lg:max-w-[90%] mx-auto">

        {/* HERO */}

        <div>

         
          <p className="text-sm sm:text-base leading-8  font-play text-white/85">
           If you own a unit in Da Vinci Tower by Pagani in Business Bay, you already know the developer's furniture packages  run AED 2 million to AED 3 million for the Pagani Arte collection, leather upholstery, carbon fibre detailing, Italian marble, and hand-finished joinery. <b className='text-[#caa193]'><a href="https://wedointerior.ae/">WE DO Interior Design & Fit-Out</a></b> builds matching-grade materials, comparable finish quality, and the same design language for less than half of the price offered by the developer's furniture package, fully furnished. We are an independent fit-out company, not affiliated with Pagani Automobili or DarGlobal we recreate the aesthetic using equivalent premium materials and craftsmanship, at a fraction of the branded price.
          </p>

        </div>

{/* KEY FACTS */}

<div className="mt-10 border border-[#caa193]/10 bg-[#111] p-8">

  <p className="text-[#caa193] text-xs tracking-[3px] uppercase font-conthrax mb-4">
    Key Facts 
  </p>

  <ul className="space-y-1 font-play text-white/80 leading-8 list-disc list-inside">

    <li>
      Developer's Pagani Arte furniture package: <strong>AED 2.0M–3.2M</strong>, depending on unit size.
    </li>

    <li>
      WE DO's equivalent package: <strong>AED 500K–700K</strong>, a saving of <strong>AED 1.5M–2.3M</strong>.
    </li>

    <li>
      Furnishing timeline: <strong>8–12 weeks</strong> from measurement to installation, after snagging is cleared.
    </li>

    <li>
      WE DO is an independent fit-out company, not licensed by Pagani Automobili or DarGlobal.
    </li>

    <li>
      Available remotely for international owners via 3D rendering approval and video walkthroughs.
    </li>

  </ul>

</div>

{/* THIS GUIDE IS DESIGNED FOR */}

<div className="mt-5  border border-[#caa193]/10 bg-[#111] p-8">

  <p className="text-[#caa193] text-xs tracking-[3px] uppercase font-conthrax mb-3">
    This Guide Is Designed For
  </p>

  <ul className="space-y-1 font-play text-white/80 leading-8 list-disc list-inside">

    <li>
      Owners who have already closed on a unit and are now facing the furniture budget.
    </li>

    <li>
      Owners who have just taken handover and need a move-in plan.
    </li>

    <li>
      Buyers anywhere in the world researching Da Vinci Tower before they commit, who want to understand what furnishing costs beyond the unit price.
    </li>

  </ul>

</div>

        {/* TRUST BAR */}

        <div className="mt-5  border border-[#caa193]/15 bg-[#111] overflow-hidden">

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

        {/* =========================================================
    WHY DA VINCI TOWER FURNITURE COSTS
========================================================= */}

<section className="mt-10">

  <p className="text-[#caa193] text-xs tracking-[3px] uppercase font-conthrax mb-3">
    Furniture Pricing
  </p>

  <h2 className="text-2xl text-white lg:text-3xl font-conthrax mb-8">
    Why Da Vinci Tower Furniture Costs AED 2-3 Million Through the Developer
  </h2>

  <div className=" border border-[#caa193]/10 bg-[#111] p-6">

    <p className="text-sm sm:text-base leading-8 mb-4 font-play text-white/85">
      Da Vinci Tower is DarGlobal's branded residential tower on the Dubai Canal in Business Bay, the world's first residential development with interiors by Pagani Automobili, the Italian hypercar manufacturer. Units range from 2 to 4 bedrooms, 77 to 398 sq m, with prices starting around AED 6.8 million. The Pagani Arte furniture packages that come with full branding rights use carbon fibre panelling, aluminium and titanium accents, full-grain leather, and Italian marble surfaces, all produced under license with Pagani's design studio.
    </p>

    <p className="text-sm sm:text-base leading-8 mb-4 font-play text-white/85">
      That licensing is exactly what drives the AED 2-3 million furniture cost. You are not only paying for materials and craftsmanship; you are also paying for the brand name attached to every piece, the exclusivity of a limited production run, and the marketing premium built into the branded package. The underlying materials themselves, carbon fibre veneer, Italian marble, top-grain leather, kinetic lighting fixtures, are sourced from suppliers across Italy and the UAE that any experienced fit-out company with the right relationships can also access.
    </p>

  </div>

</section>
{/* =========================================================
    WHAT'S ACTUALLY INSIDE THE AED 2–3 MILLION PACKAGE
========================================================= */}

<section className="mt-10">

  <p className="text-[#caa193] text-xs tracking-[3px] uppercase font-conthrax mb-3">
    Package Inclusions
  </p>

  <h3 className="text-xl text-white lg:text-2xl font-conthrax mb-8">
    What's Actually Inside the AED 2-3 Million Package
  </h3>

  <div className=" border border-[#caa193]/10 bg-[#111] p-6">

    <ul className="space-y-2 font-play text-white/80 leading-7 list-disc list-inside">

      <li>
        Carbon fibre and aluminium accent panelling on feature walls and joinery.
      </li>

      <li>
        Full-grain leather sofas and dining chairs, hand-stitched.
      </li>

      <li>
        Italian marble dining tables, coffee tables, and console surfaces.
      </li>

      <li>
        Engineered wood flooring with custom inlay detailing.
      </li>

      <li>
        Kinetic chandeliers and sculptural lighting fixtures.
      </li>

      <li>
        Built-in lacquered joinery and smart-home-integrated storage.
      </li>

    </ul>

  </div>

</section>


{/* ============================================================
    DA VINCI TOWER IMAGE GALLERY
============================================================ */}

<section className="mt-10">

  <h2 className="text-center text-white text-xl lg:text-2xl font-conthrax tracking-widest uppercase mb-8">
    Da Vinci Tower Apartment Furniture
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

    {images.map((src, index) => (

      <div
        key={index}
        className="relative aspect-square overflow-hidden "
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

{/* =========================================================
    PAGANI-INSPIRED FURNITURE
========================================================= */}

<section className="mt-10">

  <p className="text-[#caa193] text-xs tracking-[3px] uppercase font-conthrax mb-3">
    Our Approach
  </p>

  <h2 className="text-2xl text-white lg:text-3xl font-conthrax mb-8">
    Pagani-Inspired Furniture, Less Than Half of the Price Offered by Developer, How We Match the Quality
  </h2>

  <div className=" border border-[#caa193]/10 bg-[#111] p-6">

   <p className="text-sm sm:text-base leading-8 mb-4 font-play text-white/85">
      WE DO Interior Design & Fit-Out has worked across Business Bay, Downtown Dubai, and Dubai Marina apartments for 15+ years, completing <b className='text-[#caa193]'><a href="https://wedointerior.ae/gallery">500+ residential and commercial fit-out projects</a></b>. For Da Vinci Tower owners, we run a dedicated process: source the same-grade leather, marble, and carbon-fibre-finish materials directly from our supplier network, cutting out the Pagani licensing markup, and have our in-house joinery and upholstery teams build each piece to match the tower's design language, room by room.
    </p>

    <p className="text-sm sm:text-base leading-8 mb-4 font-play text-white/85">
      The starting price of approximately AED 500,000 covers a full apartment: living room sofa set, dining table and chairs, primary and guest bedroom sets, and feature joinery, all in materials and finish comparable to the branded package. We are upfront that this is not Pagani-branded furniture, there's no Pagani nameplate or licensing certificate, but the leather grade, marble slab quality, and carbon-fibre-effect panelling are sourced to match, and our craftsmen visit the unit to take exact measurements against the tower's actual room dimensions before production begins.
    </p>
{/* =========================================================
    WHERE THE AED 1.4–2.4 MILLION SAVING COMES FROM
========================================================= */}

<section className="mt-10">

  <p className="text-[#caa193] text-xs tracking-[3px] uppercase font-conthrax mb-3">
    Cost Breakdown
  </p>

  <h3 className="text-xl text-white lg:text-2xl font-conthrax mb-8">
    Where the AED 1.4-2.4 Million Saving Comes From?
  </h3>

  <div className=" border border-[#caa193]/10 bg-[#111] p-6">

    <ol className="space-y-2 font-play text-white/80 leading-7 list-decimal list-inside">

      <li>
        <strong className="text-white">No brand licensing fee:</strong> The developer's branded furniture pricing includes a licensing premium that has nothing to do with material or labour cost
      </li>

      <li>
        <strong className="text-white">Direct supplier sourcing:</strong> We buy leather, marble, and carbon-fibre veneer directly from Italian and regional suppliers, not through a developer's marked-up procurement chain
      </li>

      <li>
        <strong className="text-white">In-house production:</strong> Our own <b className='text-[#caa193]'><a href="https://wedointerior.ae/joinery-company-dubai">joinery and upholstery workshops</a></b> in Jebel Ali means no third-party contractor margin stacked on top
      </li>

      <li>
        <strong className="text-white">Project-specific scope:</strong> We furnish exactly your unit's layout, not a showroom-standard package designed for upsell
      </li>

    </ol>

  </div>

</section>
  </div>

</section>

{/* =========================================================
    HOW MUCH DOES IT COST TO FURNISH A DA VINCI TOWER APARTMENT?
========================================================= */}

<section className="mt-10">

  <p className="text-[#caa193] text-xs tracking-[3px] uppercase font-conthrax mb-3">
    Pricing Guide
  </p>

  <h2 className="text-xl lg:text-2xl font-conthrax mb-5">
    How Much Does It Cost to Furnish a Da Vinci Tower Apartment?
  </h2>

  <p className="text-sm sm:text-base leading-8 mb-4 font-play text-white/85">
    Pricing depends on unit size and configuration. As a working range for Da Vinci Tower's 2 to 4-bedroom layouts (77-398 sq m): 
  </p>

  {/* TABLE */}

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

   <p className="text-sm  mt-5 sm:text-base leading-8 font-play text-white/85">
    These are starting ranges based on full-apartment furnishing, living, dining, bedrooms, and feature joinery. Final quotes depend on exact sq ft, material selections, and whether you want additional pieces like home office furniture, outdoor terrace seating, or a custom bar unit, since several Da Vinci Tower units include private outdoor terraces facing the canal.
  </p>

</section>

{/* =========================================================
    WHAT'S INCLUDED, SIDE BY SIDE
========================================================= */}

<section className="mt-10">

  <p className="text-[#caa193] text-xs tracking-[3px] uppercase font-conthrax mb-3">
    Comparison
  </p>

  <h3 className="text-xl lg:text-2xl font-conthrax mb-5">
    What's Included, Side by Side
  </h3>

  <div className="overflow-x-auto rounded-lg border border-[#caa193]/10">

    <table className="w-full min-w-[850px] border-collapse">

      <thead className="bg-[#181818]">

        <tr>

          <th className="border border-[#caa193]/10 px-4 py-3 text-left font-conthrax text-[12px] text-[#caa193]">
            Feature
          </th>

          <th className="border border-[#caa193]/10 px-4 py-3 text-left font-conthrax text-[12px] text-[#caa193]">
            Developer Pagani Arte Package
          </th>

          <th className="border border-[#caa193]/10 px-4 py-3 text-left font-conthrax text-[12px] text-[#caa193]">
            WE DO Equivalent Package
          </th>

        </tr>

      </thead>

      <tbody className="bg-[#111] font-play text-[14px] text-white/80">

        <tr>

          <td className="border border-[#caa193]/10 px-4 py-3">
            Leather
          </td>

          <td className="border border-[#caa193]/10 px-4 py-3">
            Full-grain leather, Pagani-branded
          </td>

          <td className="border border-[#caa193]/10 px-4 py-3">
            Full-grain leather, matching grade
          </td>

        </tr>

        <tr>

          <td className="border border-[#caa193]/10 px-4 py-3">
            Marble
          </td>

          <td className="border border-[#caa193]/10 px-4 py-3">
            Italian marble, licensed sourcing
          </td>

          <td className="border border-[#caa193]/10 px-4 py-3">
            Italian marble, equivalent sourcing
          </td>

        </tr>

        <tr>

          <td className="border border-[#caa193]/10 px-4 py-3">
            Carbon fibre finish
          </td>

          <td className="border border-[#caa193]/10 px-4 py-3">
            Licensed carbon fibre veneer
          </td>

          <td className="border border-[#caa193]/10 px-4 py-3">
            Carbon-fibre-effect panelling, matched
          </td>

        </tr>

        <tr>

          <td className="border border-[#caa193]/10 px-4 py-3">
            Branding / nameplate
          </td>

          <td className="border border-[#caa193]/10 px-4 py-3">
            Pagani nameplate + provenance documentation
          </td>

          <td className="border border-[#caa193]/10 px-4 py-3">
            Independent design — no Pagani branding
          </td>

        </tr>

        <tr>

          <td className="border border-[#caa193]/10 px-4 py-3">
            Customization
          </td>

          <td className="border border-[#caa193]/10 px-4 py-3">
            Fixed showroom-standard package
          </td>

          <td className="border border-[#caa193]/10 px-4 py-3">
            Built to your unit's exact layout and material preferences
          </td>

        </tr>

        <tr>

          <td className="border border-[#caa193]/10 px-4 py-3">
            Timeline
          </td>

          <td className="border border-[#caa193]/10 px-4 py-3">
            Set by developer schedule
          </td>

          <td className="border border-[#caa193]/10 px-4 py-3">
            8-12 weeks from measurement to installation
          </td>

        </tr>

        <tr>

          <td className="border border-[#caa193]/10 px-4 py-3">
            Remote / international service
          </td>

          <td className="border border-[#caa193]/10 px-4 py-3">
            Not specified
          </td>

          <td className="border border-[#caa193]/10 px-4 py-3">
            Full remote process — 3D renders, samples, video walkthroughs
          </td>

        </tr>

      </tbody>

    </table>

  </div>

</section>
  <div className="mb-10">
          <p className="text-[#caa193] text-[10px] text-center mt-10  tracking-[3px] uppercase font-conthrax mb-3">
            Gallery
          </p>
          <h2 className="text-white text-center text-xl sm:text-3xl font-conthrax mb-5">
            Furnished Residences
           
            Across Dubai
          </h2>
         
        </div>
{/* PROJECTS */}

<div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5">

{galleryProjects.map((item, index) => (

<Link
  key={index}
  href={item.link}
  className="
    group
    block
    rounded-2xl
    overflow-hidden
    border
    border-[#caa193]/10
    bg-[#111]
    hover:border-[#caa193]/25
    transition
  "
>

  <div className="relative aspect-square">

    <Image
      src={item.image}
      alt={`${item.project} furnished apartment interior in Dubai by WE DO`}
      fill
      className="
        object-cover
        transition
        duration-700
        group-hover:scale-[1.04]
      "
    />

    {/* Overlay */}

    <div
      className="
        absolute
        inset-0
        bg-gradient-to-t
        from-black/90
        via-black/30
        to-transparent
      "
    />

    {/* Content */}

    <div
      className="
        absolute
        inset-x-0
        bottom-0
        p-6
      "
    >

      <h3
        className="
          font-conthrax
          text-[13px]
          text-white
          uppercase
          leading-6
        "
      >
        {item.project}
      </h3>

      <div
        className="
          mt-4
          text-[#caa193]
          text-[11px]
          uppercase
          tracking-[2px]
          font-conthrax
        "
      >
        View Project →
      </div>

    </div>

  </div>

</Link>


))}

</div>

{/* =========================================================
    FURNISHING DA VINCI TOWER AFTER HANDOVER
========================================================= */}

<section className="mt-10">

  <p className="text-[#caa193] text-xs tracking-[3px] uppercase font-conthrax mb-3">
    Move-In Guide
  </p>

  <h2 className="text-xl lg:text-2xl font-conthrax mb-5">
    Furnishing Da Vinci Tower After Handover, Your Move-In Guide
  </h2>

  <div className="rounded-lg border border-[#caa193]/10 bg-[#111] p-6">

     <p className="text-sm sm:text-base leading-8 mb-4 font-play text-white/85">
      Da Vinci Tower's handover is underway, with a limited number of ready units already available. If you've just received your keys or are about to furnish, it is typically the first major decision after handover, and it needs to happen before you can move in or list the unit for rent.
    </p>

    {/* H3 */}

    <h3 className="mt-8 text-lg lg:text-xl font-conthrax text-[#caa193] mb-5">
      Your Da Vinci Tower Move-In Checklist
    </h3>

    <ol className="space-y-2 font-play text-[14px] text-white/80 leading-7 list-decimal list-inside">

      <li>
        <strong className="text-white">Snagging inspection:</strong> Walk the unit with a snagging list before signing off; furniture should go in after finishing issues are resolved, not before
      </li>

      <li>
        <strong className="text-white">DEWA and utilities connection:</strong> Confirm this is active before any delivery is scheduled
      </li>

      <li>
        <strong className="text-white">Building access approval:</strong> Da Vinci Tower, like most <b className='text-[#caa193]'><a href="https://wedointerior.ae/interior-design-company-business-bay">Business Bay towers</a></b>, requires an NOC or delivery permit from building management before large furniture can move through the loading bay
      </li>

      <li>
        <strong className="text-white">Furniture decision:</strong> Developer package vs. independent furnishing 
      </li>

      <li>
        <strong className="text-white">Measurements confirmed:</strong> Against the actual unit, not just the sales brochure, brochure dimensions and as-built dimensions can differ
      </li>

      <li>
        <strong className="text-white">Installation and final walkthrough:</strong> Before you move in or hand the unit to a tenant
      </li>

    </ol>

    {/* H3 */}

    <h3 className="mt-10 text-lg lg:text-xl font-conthrax text-[#caa193] mb-5">
      Snagging, Timeline & What to Expect
    </h3>

     <p className="text-sm sm:text-base leading-8 mb-4 font-play text-white/85">
      We recommend furnishing after snagging is resolved, not before moving furniture into a unit that still needs finishing fixes creates avoidable damage risk and rework. Once snagging is cleared, our process from measurement to installation typically runs 8-12 weeks, timed around Da Vinci Tower's specific building access and loading bay scheduling rather than a generic citywide estimate.
    </p>

    {/* H3 */}

    <h3 className="mt-10 text-lg lg:text-xl font-conthrax text-[#caa193] mb-5">
      Developer Package vs. Independent Furnishing — What You're Actually Deciding
    </h3>

    <p className="text-sm sm:text-base leading-8 mb-4 font-play text-white/85">
      This comes down to what you're optimizing for. If resale value tied to the fully Pagani-branded nameplate and provenance documentation matters to you — some buyers do pay a premium for that — the developer package may be worth the cost. If you're furnishing to live in the unit or to rent it at a strong yield, the AED 1.4-2.4 million difference is real capital that can go toward the purchase itself, a second investment, or simply stay liquid.
    </p>

     <p className="text-sm sm:text-base leading-8 mb-4 font-play text-white/85">
      We work with both groups: owners who want a Pagani look without the branding premium, and owners furnishing a second or third Business Bay property where a developer furniture package was never part of the deal.
    </p>

  </div>

</section>

{/* =========================================================
    FURNISHING DA VINCI TOWER REMOTELY
========================================================= */}
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

      {/* AFTER */}

      <div className="absolute inset-0">

        <Image
          src="/images/testing image 1.png"
          alt="After furnishing"
          fill
          className="object-contain"
        />

      </div>

      {/* BEFORE */}

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

      {/* Divider */}

      <div
        className="absolute top-0 h-full w-[2px] bg-white"
        style={{ left: `${slider}%` }}
      >

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-[#111] border border-[#caa193] flex items-center justify-center text-[#caa193]">

          ↔

        </div>

      </div>

      {/* Labels */}

      <div className="absolute left-5 bottom-5 bg-[#caa193] text-black px-4 py-2 rounded-full text-xs">

        Before

      </div>

      <div className="absolute right-5 bottom-5 bg-black/50 text-white px-4 py-2 rounded-full text-xs">

        After

      </div>

    </div>

  </div>

</section>
<section className="mt-10">

  <p className="text-[#caa193] text-xs tracking-[3px] uppercase font-conthrax mb-3">
    International Owners
  </p>

  <h2 className="text-xl lg:text-2xl font-conthrax mb-5">
    Furnishing Da Vinci Tower Remotely — For International Owners
  </h2>

  <div className="rounded-lg border border-[#caa193]/10 bg-[#111] p-6">

     <p className="text-sm sm:text-base leading-8 mb-4 font-play text-white/85">
      A large share of Da Vinci Tower buyers are international investors who won't be in Dubai during the furnishing phase. We handle the full process remotely:
    </p>

    <ol className="space-y-2 font-play text-[14px] text-white/80 leading-7 list-decimal list-inside">

      <li>
        <strong className="text-white">Floor plan review:</strong> Send us your unit's floor plan and we map furniture placement against the actual layout
      </li>

      <li>
        <strong className="text-white">3D rendering approval:</strong> We produce renders of each room, so you approve the design before any material is cut
      </li>

      <li>
        <strong className="text-white">Material samples:</strong> Leather, marble, and wood-finish samples sent digitally or shipped to you on request
      </li>

      <li>
        <strong className="text-white">Production and installation:</strong> Our teams build and install while you're away, with progress photos and video updates at each stage
      </li>

      <li>
        <strong className="text-white">Handover walkthrough:</strong> A final video walkthrough before you ever set foot in the apartment
      </li>

    </ol>

     <p className="text-sm sm:text-base leading-8 mb-4 font-play text-white/85">
      This is the same remote process we use for <b className='text-[#caa193]'><a href="https://wedointerior.ae/apartment-interior-design-dubai">overseas owners furnishing villas and apartments across Dubai</a></b> , adapted specifically to Da Vinci Tower's layouts and the Pagani aesthetic.
    </p>

  </div>

</section>



{/* =========================================================
    THE PAGANI DESIGN LANGUAGE
========================================================= */}

<section className="mt-10">

  <p className="text-[#caa193] text-xs tracking-[3px] uppercase font-conthrax mb-3">
    Design Language
  </p>

  <h2 className="text-xl lg:text-2xl font-conthrax mb-5">
    The Pagani Design Language, Explained
  </h2>

  <div className="rounded-lg border border-[#caa193]/10 bg-[#111] p-6">

     <p className="text-sm sm:text-base leading-8 mb-4 font-play text-white/85">
      If you're researching Da Vinci Tower before buying, it helps to understand what "Pagani interiors" actually means in design terms, since it's a phrase used loosely across property listings.
    
      Pagani's hypercar design philosophy centres on flowing, sculptural lines, exposed structural materials (carbon fibre, titanium, aluminium), and a contrast between raw industrial texture and soft, tactile luxury — full-grain leather against bare carbon weave, polished marble against matte metal. In Da Vinci Tower, this translates into feature walls with visible carbon-fibre-effect panelling, leather-upholstered furniture with stitched detailing reminiscent of a car interior, sculptural lighting that echoes automotive design, and marble surfaces with bold, dramatic veining.
    </p>

    <p className="text-sm sm:text-base leading-8 mb-4 font-play text-white/85">
      When we translate this for clients, we focus on three things: material contrast (hard structural finishes against soft upholstery), stitching and joinery detail that makes leather pieces read as crafted rather than mass-produced, and lighting with sculptural presence rather than purely functional fixtures.
    </p>

  </div>

</section>

{/* =========================================================
    WHO FURNISHES DA VINCI TOWER?
========================================================= */}

<section className="mt-10">

  <p className="text-[#caa193] text-xs tracking-[3px] uppercase font-conthrax mb-3">
    Local Expertise
  </p>

  <h2 className="text-xl lg:text-2xl font-conthrax mb-5">
    Who Furnishes Da Vinci Tower? Local Business Bay Expertise
  </h2>

  <div className="border border-[#caa193]/10 bg-[#111] p-6">

    <p className="text-sm sm:text-base leading-8 font-play text-white/85">
      Choosing a fit-out company for a tower like Da Vinci means working with a team that already understands Business Bay's building access rules, loading bay scheduling, and NOC requirements—not just furniture design. <strong>WE DO Interior Design &amp; Fit-Out</strong> has completed <strong>500+ residential and commercial projects</strong> across Dubai over the past <strong>15+ years</strong>, including work throughout <strong>Business Bay, Downtown Dubai, Dubai Marina,</strong> and <strong>Palm Jumeirah</strong>, with an in-house joinery and upholstery workshop based in <strong>Jebel Ali Industrial 1</strong>. We're rated <strong>4.9★ from 118+ Google reviews</strong>.
    </p>

  </div>

</section>

      </div>

    </section>
    
  );
};

export default ApId;

