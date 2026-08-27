'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const testimonials = [
  {
    quote: `" The project timeline and coordination were handled professionally throughout. Every element, from flooring to lighting fixtures, was carefully curated. The space now feels like a luxury showroom we get to live in."`,
    author: "— Waqar Sajid "
  },
  {
    quote: `"“Professional and reliable! WE DO Interior Design and Fitout delivered premium commercial fit-out solutions in Dubai Festival City with great attention to detail. Truly one of the top interior design companies in DFC for luxury fit-out and refurbishment in Dubai. Highly recommended!"`,
    author: "— Sajawal Hussain"
  }
];

const stagesData = [
  { 
    id: 1, 
    title: "Shopfront & Facade ", 
    imageSrc: "/images/luxury-retail-shopfront-renovation-dubai.webp", 
    imageAlt: "Luxury retail shopfront renovation in Dubai with glass storefront and refined finishes", 
    imageTitle: "Luxury Retail Shopfront Renovation Dubai", 
    desc: "Glazing, entrance redesign, and shopfront renovation work- the first thing any customer actually sees, and usually the highest-return place to start. A tired facade undersells everything behind it, no matter how good the interior fit-out is." 
  },
  { 
    id: 2, 
    title: "Flooring & Ceilings ", 
    imageSrc: "/images/premium-retail-flooring-renovation-dubai.webp", 
    imageAlt: "Premium retail flooring renovation with stone and timber finishes in Dubai", 
    imageTitle: "Premium Retail Flooring Dubai", 
    desc: "Retail flooring renovation specified for daily high-footfall traffic rather than a residential-grade finish that wears out within a year, plus layered ceiling lighting rather than a single grid of downlights." 
  },
  { 
    id: 3, 
    title: "Joinery & Display Units ", 
    imageSrc: "/images/bespoke-retail-joinery-dubai.webp", 
    imageAlt: "Close-up of bespoke retail joinery and illuminated display shelving in Dubai", 
    imageTitle: "Bespoke Retail Joinery Dubai", 
    desc: "Custom display shelving, gondolas, cash counters, and window displays, retail joinery renovation built through our own joinery factory. This is typically the single largest line item in a retail renovation budget, sometimes running close to 40% of total cost on higher-end fit-outs, so it's worth planning for early rather than discovering it at the quotation stage." 
  },
  { 
    id: 4, 
    title: "Lighting & MEP ", 
    imageSrc: "/images/retail-lighting-renovation-dubai.webp", 
    imageAlt: "Retail lighting renovation in Dubai with layered LED and merchandise display lighting", 
    imageTitle: "Retail Lighting Renovation Dubai", 
    desc: "Retail lighting renovation focused on merchandising accent and spot lighting on product zones, not just ambient light, plus retail MEP renovation covering electrical capacity for POS systems, digital displays, and HVAC upgrades where the scope requires them." 
  },
  { 
    id: 5, 
    title: "Signage ", 
    imageSrc: "/images/luxury-retail-interior-renovation-dubai.webp", 
    imageAlt: "Luxury retail interior renovation in Dubai with bespoke shelving and display units", 
    imageTitle: "Luxury Retail Interior Renovation Dubai", 
    desc: "Retail signage renovation developed as one coordinated project alongside the shopfront and window display, rather than being farmed out to a separate sign maker; separating them almost always produces a less coherent result." 
  },
];

const DProjects = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeStage, setActiveStage] = useState(null);
  const timeoutRef = useRef(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  useEffect(() => {
    if (isPlaying) {
      timeoutRef.current = setTimeout(() => {
        nextSlide();
      }, 4000);
    }
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [currentSlide, isPlaying]);

  return (
    <section className="px-6 sm:px-12 md:px-20 lg:px-28 xl:px-36 py-12 bg-black-200">
      <div className="max-w-6xl mx-auto space-y-12">

       {/* Top Content Block / Hero */}
{/* Top Content Block / Hero */}
<div className="bg-black p-6 sm:p-10 rounded-xl border border-gray-800 shadow-xl text-left space-y-8 font-play text-sm sm:text-base text-white">
  
  <h2 className="text-center  text-xs sm:text-xl md:text-xl font-conthrax tracking-widest mb-6 uppercase text-[#caa193]">
    Is This the Right Fit for Your Store?
  </h2>
  
  <p className="leading-relaxed">
    This page is for you if you already have a retail trading space, a boutique renovation, a shop, a showroom renovation, or a small kiosk renovation, and the space itself needs updating, not a brand-new unit being fitted out from a bare shell. That covers a fashion boutique refresh as much as a full storefront renovation, and it's the right page whether you're comparing quotes or ready to hire a retail renovation contractor now.
Opening a new store or boutique from an empty unit instead? Our {' '}
                <b className="text-[#caa193]">
                  <a href="https://wedointerior.ae/boutique-interior-design-dubai">
                     boutique interior design page
                  </a>
                </b>{' '} covers that from-scratch process. 
  </p>

  {/* Grid: Key Facts (Left) & Image (Right) - Image ends at border line */}
  <div className="pt-6 border-t border-gray-800 grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
    
    {/* Left Side: Key Facts Only */}
    <div className="space-y-4">
      <h3 className="font-conthrax text-[#caa193] text-sm sm:text-base tracking-wider ">
        Key Facts
      </h3>
      <ul className="list-disc pl-5 space-y-2 leading-relaxed">
        <li>Service:  shopfront, flooring, joinery, lighting, and MEP upgrades to an existing retail unit, not a from-shell fit-out</li>
        <li>Cost: typically around AED 100–800+ per sq ft on average, depending on scope</li>
        <li>Timeline: typically 2–14 weeks, depending on scope; mall units add approval time, see below</li>
        <li>Approvals: Dubai Municipality and DCD for standalone units; a mall fit-out NOC for units inside a shopping centre</li>
        <li>Contract model:one fixed-price contract, one accountable team, staged payments, never full payment upfront</li>
        <li>Areas served: {' '}
                <b className="text-[#caa193]">
                  <a href="https://wedointerior.ae/retail-interior-design-business-bay">
                     Business Bay
                  </a>
                </b>{''}, Downtown Dubai, Dubai Marina, JBR, DIFC, Deira, Al Quoz, and {' '}
                <b className="text-[#caa193]">
                  <a href="https://wedointerior.ae/retail-interior-design-jumeirah">
                     Jumeirah
                  </a>
                </b>{' '}</li>
      </ul>
    </div>

    {/* Right Side: Image (Height strictly aligned with Key Facts list) */}
    <div className="relative w-full min-h-[280px] h-full rounded-lg overflow-hidden border border-[#caa193]/40 bg-black">
      <Image
        src="/images/classyym (13).webp"
        alt="classyym (13)"
        
        fill
        sizes="(max-width: 1024px) 100vw, 50vw"
        className="object-cover"
      />
    </div>

  </div>

  {/* CTA Link / Button - Placed below the border line */}
  <div className="pt-6 border-t border-gray-800">
    <a
      href="https://wedointerior.ae/contact-us"
      className="inline-flex items-center gap-2 text-[#caa193] hover:text-white font-conthrax text-sm sm:text-base transition-colors duration-200 group"
    >
      Get in Touch to Start Your Retail Renovation
      <span className="transform transition-transform duration-200 group-hover:translate-x-1">→</span>
    </a>
  </div>

</div>

       <div className="bg-black p-6 sm:p-10 rounded-xl border border-gray-800 space-y-8 text-left">
  {/* Section Header & Intro */}
  <div className="space-y-3">
    <h2 className="text-center text-xs sm:text-xl md:text-xl font-conthrax tracking-widest mb-6 uppercase text-[#caa193]">
      Retail Renovation Cost & Timeline in Dubai
    </h2>
    <p className="text-sm sm:text-base text-white font-play leading-relaxed">
      Cost depends on scope and location type more than on size alone; a mall unit and a street-facing shop of the same footprint can land in different cost tiers. Treat these as average, ballpark ranges; your exact number is confirmed once we've assessed your space.
    </p>
  </div>

  {/* Single Medium Image */}
  <div className="relative h-64 sm:h-80 rounded-xl overflow-hidden border border-[#caa193]/40 bg-black mx-auto max-w-2xl">
    <Image
      src="/images/classyym (10).webp"
      alt="classyym (10)"
     
      fill
      className="object-cover"
    />
  </div>

  {/* Pricing Table */}
  <div className="overflow-x-auto rounded-xl border border-gray-800 bg-[#111]">
    <table className="w-full text-left text-sm sm:text-base font-play text-white border-collapse">
      <thead>
        <tr className="bg-black border-b border-gray-800 text-[#caa193] font-conthrax text-xs sm:text-sm">
          <th className="p-4 border-r border-gray-800">Tier</th>
          <th className="p-4 border-r border-gray-800">What's Included</th>
          <th className="p-4 border-r border-gray-800">Average Cost (AED/sq ft)</th>
          <th className="p-4">Typical Timeline</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-800">
        <tr>
          <td className="p-4 font-semibold text-[#caa193] border-r border-gray-800">Cosmetic Refresh</td>
          <td className="p-4 border-r border-gray-800">Shopfront refresh, flooring, lighting</td>
          <td className="p-4 border-r border-gray-800">100 – 250</td>
          <td className="p-4">2–4 weeks</td>
        </tr>
        <tr>
          <td className="p-4 font-semibold text-[#caa193] border-r border-gray-800">Standard Renovation</td>
          <td className="p-4 border-r border-gray-800">+ Joinery, ceilings, some MEP</td>
          <td className="p-4 border-r border-gray-800">250 – 450</td>
          <td className="p-4">4–8 weeks</td>
        </tr>
        <tr>
          <td className="p-4 font-semibold text-[#caa193] border-r border-gray-800">Full Renovation with MEP</td>
          <td className="p-4 border-r border-gray-800">+ Electrical, HVAC, layout changes</td>
          <td className="p-4 border-r border-gray-800">450 – 800+</td>
          <td className="p-4">8–14 weeks</td>
        </tr>
      </tbody>
    </table>
  </div>

  {/* Closing Note */}
  <p className="text-sm sm:text-base text-white font-play leading-relaxed">
    Mall units add a further 15–25% to whichever tier applies, largely from guide-compliant materials and the mall NOC process itself, the single most common reason a retail renovation cost per sqft quote comes in higher than a street-facing equivalent. Custom joinery is consistently the biggest line item across every tier, so budgeting for it early avoids the most common quotation-stage surprise. Luxury retail renovation cost in Dubai typically sits at the top of the full-renovation tier or above it, driven by bespoke joinery and premium materials rather than by square footage alone. Every WE DO quote is a full bill of quantities, not a lump sum, so you can see exactly where the budget goes before you sign.
  </p>
</div>

  
        {/* CTA Section 1 - Full Width */}
      <div className="w-screen relative left-1/2 -translate-x-1/2 bg-[#f5ede5] py-10 px-6 sm:px-12 text-center space-y-4 text-black">
        <h3 className="text-lg sm:text-2xl font-conthrax uppercase text-black">
          Get In Touch With Us
        </h3>
        <p className="text-sm sm:text-base font-play text-gray-800 max-w-3xl mx-auto">
          Ready to plan your Retail renovation? Contact WE DO for a free site visit and itemized quote.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
          <a
            href="https://wa.me/971588075603"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-play text-sm sm:text-base rounded-lg shadow-md text-center transition-colors"
          >
            ✅ Request availability by WhatsApp
          </a>
          <a
            href="mailto:info@wedointerior.ae"
            className="px-6 py-3 bg-[#caa193] hover:bg-[#b88f81] text-white font-play text-sm sm:text-base rounded-lg shadow-md text-center transition-colors"
          >
            ✉️ Request availability by E-mail
          </a>
        </div>
      </div>

       <div className="bg-black p-6 sm:p-10 rounded-xl border border-gray-800 space-y-8 text-left">
  <h2 className="text-center text-xs sm:text-xl md:text-xl font-conthrax tracking-widest mb-6 uppercase text-[#caa193]">
    The Real Benefits of Renovating Your Retail Store
  </h2>

  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
    {/* Text Content with Bullet Points (Left Side) */}
    <div className="lg:col-span-6 text-sm sm:text-base font-play text-white leading-relaxed space-y-4">
      <p>
        Renovating instead of relocating or rebuilding comes with advantages beyond the obvious cost savings.
      </p>
      
      <ul className="list-disc pl-5 space-y-3 text-[#CFCFCF]">
        <li>
          <strong className="text-[#caa193]">You keep your address and your customer base.</strong> Existing footfall and brand recognition at your current location are worth more than most owners credit; renovation keeps both intact.
        </li>
        <li>
          <strong className="text-[#caa193]">Lower cost, faster turnaround.</strong> A full fit-out or relocation typically takes.
        </li>
        <li>
          <strong className="text-[#caa193]">A stronger first impression.</strong> An updated shopfront and interior change how customers read your brand before they've even stepped inside.
        </li>
        <li>
          <strong className="text-[#caa193]">Better use of the space you already have.</strong> Rezoning for how customers actually move through the shop often solves a display or checkout-flow problem without adding a single square foot.
        </li>
        <li>
          <strong className="text-[#caa193]">A smaller environmental footprint.</strong> Reusing the existing shell and upgrading its systems, rather than a full rebuild, is consistently the more sustainable option, a genuine reason to renovate, not just a marketing line.
        </li>
      </ul>
    </div>

    {/* Image (Right Side) */}
    <div className="lg:col-span-6 relative h-80 sm:h-[28rem] w-full rounded-xl overflow-hidden border border-[#caa193]/40 shadow-lg bg-black">
      <Image
        src="/images/retail.jpeg"
        alt="retail"
        
        fill
        className="object-cover"
      />
    </div>
  </div>
</div>

      <div className="bg-black p-6 sm:p-10 rounded-xl border border-gray-800 space-y-8 text-left">
  
  {/* Section Header */}
  <h2 className="text-center text-xs sm:text-xl md:text-xl font-conthrax tracking-widest mb-6 uppercase text-[#caa193]">
    Signs It's Time to Renovate Your Shop 
  </h2>

  {/* Top Grid: Image Left, Bullets Right */}
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
    
    {/* Image: Auto Height Matches Text (Left Side) */}
    <div className="lg:col-span-6 relative w-full min-h-[250px] rounded-xl overflow-hidden border border-[#caa193]/40 shadow-lg bg-black">
      <Image
        src="/images/retail (7).jpeg"
        alt="retail (7)"
       
        fill
        sizes="(max-width: 1024px) 100vw, 50vw"
        className="object-cover"
      />
    </div>

    {/* Bullet List Content (Right Side) */}
    <div className="lg:col-span-6 text-sm sm:text-base font-play text-white leading-relaxed space-y-4 flex flex-col justify-center">
      <p className="text-[#CFCFCF]">
        Not sure if it's worth doing yet? These are the tells we hear most from Dubai retailers:
      </p>

      <ul className="list-disc pl-5 space-y-3 text-[#CFCFCF]">
        <li>
          Your shopfront looks dated next to a recently refreshed neighbor on the same street or in the same mall corridor
        </li>
        <li>
          Footfall has quietly declined even though the area's overall traffic hasn't
        </li>
        <li>
          The layout still reflects how the brand looked years ago, not how it's positioned today
        </li>
        <li>
          Lighting and joinery feel generic rather than built around your actual product range
        </li>
        <li>
          You're paying to run a shop that isn't working as hard for you as it should
        </li>
      </ul>
    </div>

  </div>

  {/* Full Width Paragraph (Below Image and Bullets) */}
  <div className="w-full text-sm sm:text-base font-play text-white leading-relaxed pt-2">
    <p>
      If two or three of these sound familiar, renovation is usually the right move before assuming you need a new lease.
    </p>
  </div>

</div>

<div className="bg-black p-6 sm:p-10 rounded-xl border border-gray-800 space-y-6 text-left">
  <h2 className="text-center text-xs sm:text-xl md:text-xl font-conthrax tracking-widest mb-4 uppercase text-[#caa193]">
    What's Included: Every Stage of a Retail Renovation
  </h2>

  {/* Grid Layout: Mobile me 1 column, Tablet me 2, Desktop me 3/4 columns */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full pt-4">
    {stagesData.map((stage) => (
      <div
        key={stage.id}
        onClick={() => setActiveStage(stage)}
        className="bg-[#181818]/90 border border-gray-800 rounded-sm overflow-hidden flex flex-col w-full h-full hover:border-[#caa193] transition-all duration-300 group shadow-lg cursor-pointer"
      >
        <div className="relative h-48 w-full shrink-0 overflow-hidden">
          <Image
            src={stage.imageSrc}
            alt={stage.imageAlt}
            title={stage.imageTitle}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span className="text-[10px] text-white bg-[#caa193] px-3 py-1 uppercase tracking-widest rounded-xs">
              View Details
            </span>
          </div>
        </div>
        <div className="p-5 flex-1 flex flex-col justify-between text-center bg-[#181818]">
          <div>
            <h3 className="font-conthrax text-white font-medium text-sm mb-2 group-hover:text-[#caa193] transition-colors">
              {stage.title}
            </h3>
            <div className="text-xs text-white leading-relaxed line-clamp-3">
              {typeof stage.desc === 'string' ? <p>{stage.desc}</p> : stage.desc}
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>

  {/* Modal for Details */}
  {activeStage && (
    <div
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      onClick={() => setActiveStage(null)}
    >
      <div
        className="bg-[#181818] border border-gray-800 max-w-3xl w-full rounded-sm overflow-hidden shadow-2xl relative my-auto max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setActiveStage(null)}
          className="absolute top-4 right-4 z-10 bg-black/60 hover:bg-[#caa193] text-white w-8 h-8 rounded-full flex items-center justify-center transition-colors text-sm"
        >
          ✕
        </button>
        <div className="relative h-48 sm:h-80 md:h-96 w-full shrink-0 bg-black">
          <Image
            src={activeStage.imageSrc}
            alt={activeStage.imageAlt}
            title={activeStage.imageTitle}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-6 sm:p-8 space-y-4 overflow-y-auto">
          <h3 className="font-conthrax text-xl sm:text-2xl text-white font-medium border-b border-gray-800 pb-3">
            {activeStage.title}
          </h3>
          <div className="text-xs sm:text-sm text-white leading-relaxed space-y-3 font-light">
            {typeof activeStage.desc === 'string' ? <p>{activeStage.desc}</p> : activeStage.desc}
          </div>
        </div>
      </div>
    </div>
  )}
</div>

      <div className="bg-black p-6 sm:p-10 rounded-xl border border-gray-800 space-y-8 text-left">
  
  {/* Top Row: Renovating While You Stay Open (Left Text, Right Image) */}
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
    
    {/* Left Text */}
    <div className="lg:col-span-7 space-y-4">
      <h2 className="text-center text-xs sm:text-xl md:text-xl font-conthrax tracking-widest mb-6 uppercase text-[#caa193]">
        Renovating While You Stay Open 
      </h2>
      <div className="font-play text-sm sm:text-base text-white">
        <p className="leading-relaxed text-white">
          Closing a shop for renovation means lost sales, so most phased retail renovation work is scheduled to avoid full closure. Non-disruptive stages, joinery fabrication and material sourcing happen off-site in parallel with design and approvals and disruptive on-site work is scheduled outside your trading hours wherever the space allows. This is exactly the concern behind renovating retail stores while open Dubai searches, and full closure is genuinely the exception, not the default plan.
        </p>
      </div>
    </div>

    {/* Right Image */}
    <div className="lg:col-span-5 relative w-full h-full min-h-[220px] rounded-xl overflow-hidden border border-[#caa193]/40 bg-black">
      <Image
        src="/images/retail (3).jpeg"
        alt="retail (3)"
        
        fill
        sizes="(max-width: 1024px) 100vw, 40vw"
        className="object-cover"
      />
    </div>

  </div>

  {/* Bottom Row: Mall vs. Street-Facing (Full Width) */}
  <div className="space-y-4 pt-6 border-t border-gray-800/60">
    <h2 className="text-center text-xs sm:text-xl md:text-xl font-conthrax tracking-widest mb-6 uppercase text-[#caa193]">
      Mall vs. Street-Facing Retail Renovation in Dubai
    </h2>
    <div className="font-play text-sm sm:text-base text-white">
      <p className="leading-relaxed text-white">
        Dubai's retail landscape splits cleanly into two categories with two different renovation processes: a standalone shop on a high street, or a unit inside a shopping centre like Dubai Mall, Mall of the Emirates, or a community mall. For retailers in central locations such as {' '}
                <b className="text-[#caa193]">
                  <a href="https://wedointerior.ae/retail-interior-design-downtown-dubai">
Downtown Dubai,                 </a>
                </b>{''}
                {' '}
                <b className="text-[#caa193]">
                  <a href="https://wedointerior.ae/retail-interior-design-dubai-creek-harbour">
Creek Harbour              </a>
                </b>{' ,'} the building, landlord, and retail environment can also influence the renovation process.<br /><br />
        A mall retail renovation runs under that mall's own fit-out guide, a document prescribing approved materials, ceiling heights, signage rules, and in some cases a list of pre-approved contractors, published separately by each major developer (Emaar, Majid Al Futtaim, Nakheel, and others each maintain their own). Mall renovations typically carry a 15–25% cost premium over an equivalent street-facing shop, largely from guide-compliant materials and the mall fit-out NOC process itself, which can add 4–8 weeks before construction even starts. A street-facing retail renovation answers to Dubai Municipality and Dubai Civil Defence directly, with no separate mall design-review layer, generally the faster, more flexible path if your lease allows either location.
        WE DO is an expert renovation company in Dubai that manages both processes and can help you weigh the trade-off if you're choosing between a mall unit and a street-facing space.
      </p>
    </div>
  </div>

</div>

     <div className="bg-black p-6 sm:p-10 rounded-xl border border-gray-800 text-left space-y-6">
  
  <h2 className="text-center text-xs sm:text-xl md:text-xl font-conthrax tracking-widest uppercase text-[#caa193]">
    Our Retail Renovation Process 
  </h2>

  {/* Top Row: Steps 1, 2, 3 (Left Text, Right Image) */}
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-4">
    
    {/* Left Text */}
    <div className="lg:col-span-7 font-play text-sm sm:text-base text-white space-y-4 leading-relaxed">
      <p>
        <b className="text-[#caa193] font-conthrax block text-base sm:text-lg mb-1">
          1. Site Assessment 
        </b>
        We walk the space, note what's staying and what's changing, and flag whether you're dealing with a mall unit or a standalone shop, since that determines the approval path from here.
      </p>

      <p>
        <b className="text-[#caa193] font-conthrax block text-base sm:text-lg mb-1">
          2. Scope, Design &amp; Fixed-Price Proposal 
        </b>
        A design concept and a full itemized bill of quantities, including joinery, before anything is ordered.
      </p>

      <p>
        <b className="text-[#caa193] font-conthrax block text-base sm:text-lg mb-1">
          3. Approvals 
        </b>
        Retail renovation approvals in Dubai run through Dubai Municipality and DCD for standalone units, or the relevant mall fit-out NOC for units inside a shopping centre, submitted and tracked on your behalf.
      </p>
    </div>

    {/* Right Image */}
    <div className="lg:col-span-5 relative w-full h-full min-h-[220px] rounded-xl overflow-hidden border border-[#caa193]/40 bg-black">
      <Image
        src="/images/retail (5).jpeg"
        alt="retail (5)"
       
        fill
        sizes="(max-width: 1024px) 100vw, 40vw"
        className="object-cover"
      />
    </div>

  </div>

  {/* Bottom Row: Steps 4, 5, 6 */}
  <div className="font-play text-sm sm:text-base text-white space-y-4 leading-relaxed mt-4">
    <p>
      <b className="text-[#caa193] font-conthrax block text-base sm:text-lg mb-1">
        4. Joinery &amp; Fabrication 
      </b>
      Display units, counters, and shopfront joinery are built offsite through our own joinery factory while approvals and site prep run in parallel.
    </p>

    <p>
      <b className="text-[#caa193] font-conthrax block text-base sm:text-lg mb-1">
        5. Phased Construction 
      </b>
      Shopfront, flooring, MEP, and fit-out are carried out in sequence, scheduled around your trading hours where possible.
    </p>

    <p>
      <b className="text-[#caa193] font-conthrax block text-base sm:text-lg mb-1">
        6. Snagging &amp; Handover 
      </b>
      A full inspection against the agreed design before handover documentation is issued.
    </p>
  </div>

</div>

      <div className="bg-black p-6 sm:p-10 rounded-xl border border-gray-800 space-y-8 text-left">
      
  {/* 1. Header & Text Intro */}
  <div className="space-y-3">
    <h2 className="text-center text-xs sm:text-xl md:text-xl font-conthrax tracking-widest mb-6 uppercase text-[#caa193]">
      Retail Renovation Mistakes to Avoid in Dubai
    </h2>
    <p className="text-sm sm:text-base text-white font-play leading-relaxed">
      We see the same handful of mistakes repeatedly, usually on someone else's unfinished or already-delayed renovation.
    </p>
  </div>

  {/* 2. Mistakes Table */}
  <div className="overflow-x-auto rounded-xl border border-gray-800 bg-[#111]">
    <table className="w-full text-left text-xs sm:text-sm font-play text-white border-collapse">
      <thead>
        <tr className="bg-black border-b border-gray-800 text-[#caa193] font-conthrax text-[10px] sm:text-xs">
          <th className="p-2 sm:p-3 border-r border-gray-800">Mistake</th>
          <th className="p-2 sm:p-3 border-r border-gray-800">Why It's a Problem</th>
          <th className="p-2 sm:p-3">How We Prevent It</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-800">
        <tr>
          <td className="p-2 sm:p-3 font-semibold text-[#caa193] border-r border-gray-800 leading-snug">
            Ordering joinery before mall approval
          </td>
          <td className="p-2 sm:p-3 border-r border-gray-800 leading-snug">
            Custom display units built to a design the mall later rejects means a costly remake
          </td>
          <td className="p-2 sm:p-3 leading-snug">
            We confirm mall guide compliance before any joinery is fabricated, not after
          </td>
        </tr>
        <tr>
          <td className="p-2 sm:p-3 font-semibold text-[#caa193] border-r border-gray-800 leading-snug">
            Treating signage as a separate project
          </td>
          <td className="p-2 sm:p-3 border-r border-gray-800 leading-snug">
            A sign maker working independently of the shopfront design usually produces a mismatched result
          </td>
          <td className="p-2 sm:p-3 leading-snug">
            Facade, signage, and window display are designed as one coordinated project from day one
          </td>
        </tr>
        <tr>
          <td className="p-2 sm:p-3 font-semibold text-[#caa193] border-r border-gray-800 leading-snug">
            Underestimating joinery lead time
          </td>
          <td className="p-2 sm:p-3 border-r border-gray-800 leading-snug">
            Custom display units can be the longest lead-time item, not the finishing touch people assume
          </td>
          <td className="p-2 sm:p-3 leading-snug">
            Joinery is scoped and ordered at the start of the project, not left until the final weeks
          </td>
        </tr>
        <tr>
          <td className="p-2 sm:p-3 font-semibold text-[#caa193] border-r border-gray-800 leading-snug">
            Skipping the mall's specific material list
          </td>
          <td className="p-2 sm:p-3 border-r border-gray-800 leading-snug">
            Some malls prohibit standard materials like basic ceramic tile outright
          </td>
          <td className="p-2 sm:p-3 leading-snug">
            We work from the current fit-out guide for your specific mall, not a generic materials list
          </td>
        </tr>
        <tr>
          <td className="p-2 sm:p-3 font-semibold text-[#caa193] border-r border-gray-800 leading-snug">
            Choosing the lowest quote without checking whether approvals are included
          </td>
          <td className="p-2 sm:p-3 border-r border-gray-800 leading-snug">
            A cheap quote that excludes NOC handling gets expensive fast once fees appear separately
          </td>
          <td className="p-2 sm:p-3 leading-snug">
            Every quote is a full bill of quantities, including approvals, nothing added later
          </td>
        </tr>
      </tbody>
    </table>
  </div>

</div>

 <div className="bg-black p-6 sm:p-10 rounded-xl border border-gray-800 space-y-8 text-left">
  
  {/* Header & Intro Section */}
  <div className="space-y-3">
    <h2 className="text-center text-xs sm:text-xl md:text-xl font-conthrax tracking-widest mb-6 uppercase text-[#caa193]">
      Materials &amp; Finishes for High-Footfall Retail
    </h2>
    <p className="text-sm sm:text-base text-white font-play leading-relaxed">
      Dubai retail spans everything from minimalist international-brand interiors to warmer, more established boutique environments, and the finishes we specify are chosen for durability under daily foot traffic as much as appearance.
    </p>
  </div>

  {/* 4-Column / 2-Column Grid for Finishes */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

    {/* 1. Flooring & Surfaces */}
    <div className="bg-[#111] p-5 sm:p-6 rounded-xl border border-gray-800 hover:border-[#caa193]/60 transition-all duration-300 space-y-3">
      <h3 className="font-conthrax text-[#caa193] text-sm sm:text-base tracking-wider">
        Flooring &amp; Surfaces 
      </h3>
      <p className="text-xs sm:text-sm font-play text-white leading-relaxed">
        Large-format porcelain and natural stone for high-traffic zones, with warm-toned timber accents where a boutique or heritage feel fits the brand better than a purely corporate one.
      </p>
    </div>

    {/* 2. Joinery & Display */}
    <div className="bg-[#111] p-5 sm:p-6 rounded-xl border border-gray-800 hover:border-[#caa193]/60 transition-all duration-300 space-y-3">
      <h3 className="font-conthrax text-[#caa193] text-sm sm:text-base tracking-wider">
        Joinery &amp; Display 
      </h3>
      <p className="text-xs sm:text-sm font-play text-white leading-relaxed">
        Bespoke display units, counters, and shelving built through our {' '}
                <b className="text-[#caa193]">
                  <a href="https://wedointerior.ae/joinery-company-dubai">
own joinery factory                </a>
                </b>{''}, finished to match each brand's identity rather than off-the-shelf retail fixtures.
      </p>
    </div>

    {/* 3. Glass & Storefront */}
    <div className="bg-[#111] p-5 sm:p-6 rounded-xl border border-gray-800 hover:border-[#caa193]/60 transition-all duration-300 space-y-3">
      <h3 className="font-conthrax text-[#caa193] text-sm sm:text-base tracking-wider">
        Glass &amp; Storefront 
      </h3>
      <p className="text-xs sm:text-sm font-play text-white leading-relaxed">
        Full-height shopfront glazing, frameless where possible, to maximise visibility and street presence.
      </p>
    </div>

    {/* 4. Lighting */}
    <div className="bg-[#111] p-5 sm:p-6 rounded-xl border border-gray-800 hover:border-[#caa193]/60 transition-all duration-300 space-y-3">
      <h3 className="font-conthrax text-[#caa193] text-sm sm:text-base tracking-wider">
        Lighting
      </h3>
      <p className="text-xs sm:text-sm font-play text-white leading-relaxed">
        Layered, merchandising-led lighting, accent lighting on product displays, softer ambient lighting through browsing areas, and increasingly, smart, app-controlled lighting scenes for different times of day.
      </p>
    </div>

  </div>

</div>

<div className="bg-black p-6 sm:p-10 rounded-xl border border-gray-800 space-y-8 text-left">
      
  {/* Top Row: Why Choose WE DO (Left Text, Right Image) */}
  <div className="space-y-6">
    <h2 className="text-center text-xs sm:text-xl md:text-xl font-conthrax tracking-widest mb-6 uppercase text-[#caa193]">
      Why Choose WE DO for Your Retail Renovation 
    </h2>

    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
      {/* Left Text */}
      <div className="lg:col-span-7 font-play text-sm sm:text-base text-white space-y-4">
        <p className="leading-relaxed text-white">
          WE DO Interior Design &amp; Fit-Out is the {' '}
                <b className="text-[#caa193]">
                  <a href="https://www.google.com/search?client=ms-android-transsion&hs=ABAB&biw=360&bih=680&sca_esv=f60e7a9ce4fdb122&sxsrf=APpeQnvYe0F56r81dHf4aT_6ncUqTGstUw:1787462837397&kgmid=/g/11pyc3sd1k&q=Interior+Design+Company+Dubai+-+WeDo+Interior+Design+%26+Fit+out&shem=epsd1,ltae,rimspwouoe&shndl=30&source=sh/x/loc/act/m1/2&kgs=f463156c24e93964&utm_source=epsd1,ltae,rimspwouoe,sh/x/loc/act/m1/2">
leading interior design company Dubai               </a>
                </b>{''}, has completed 250+ projects across Dubai's residential and commercial sectors, with 15+ years in the market, DED-registered, certified to ISO 9001:2015, ISO 14001:2015, and ISO 45001:2018, and a 2026 Luxury Lifestyle Awards win.
        </p>
        <p className="leading-relaxed text-white">
          For retail specifically, that means an in-house joinery factory building your display units and shopfront joinery to measure rather than fitting a stock piece, and an approvals team that already knows the difference between a mall's design-review process and a standalone Dubai Municipality submission, not learning it on your project. Our approvals relationships extend to Dubai Civil Defence, Dubai Municipality, and private developers, including Emaar and Damac.
        </p>
      </div>

      {/* Right Image */}
      <div className="lg:col-span-5 relative w-full h-64 sm:h-full min-h-[220px] rounded-xl overflow-hidden border border-[#caa193]/40 bg-black">
        <Image
          src="/images/clothing-display-wall-dubai-creek-harbour.png"
          alt="clothing-display-wall-dubai-creek-harbour"
          title="Clothing Display Wall Dubai Creek Harbour"
          fill
          sizes="(max-width: 1024px) 100vw, 40vw"
          className="object-cover"
        />
      </div>
    </div>

    {/* Bullets: Full Width */}
    <div className="font-play text-sm sm:text-base text-white space-y-4">
      <ul className="list-disc pl-5 space-y-2 leading-relaxed text-white w-full">
        <li>
          <span className="text-[#caa193] font-semibold">One contract, one team.</span> Design, approvals, and construction under a single accountable contract.
        </li>
        <li>
          <span className="text-[#caa193] font-semibold">Staged payments.</span> Paid in stages tied to milestones, never the full amount upfront.
        </li>
        <li>
          <span className="text-[#caa193] font-semibold">Fixed-price, written contracts.</span> Your bill of quantities is agreed upon before work starts.
        </li>
      </ul>
    </div>
  </div>

</div>

<div className="bg-black p-6 sm:p-10 rounded-xl border border-gray-800 space-y-8 text-left">
{/* 3. Retail Renovation vs. Retail Fit-Out Section */}
  <div className="space-y-6 ">
    <h2 className="text-center text-xs sm:text-xl md:text-xl font-conthrax tracking-widest mb-4 uppercase text-[#caa193]">
      Retail Renovation vs. Retail Fit-Out: What's the Difference?
    </h2>
    <p className="font-play text-sm sm:text-base text-white leading-relaxed">
      The two get used interchangeably, but they're different jobs with different budgets. Retail renovation works within your existing shop, with new flooring, joinery, lighting, and updated MEP, without touching the unit's core structure. Retail fit-out is more extensive, typically starting from a bare shell with entirely new partitions and MEP throughout.
    </p>

    {/* Comparison Table */}
    <div className="overflow-x-auto rounded-xl border border-gray-800 bg-[#111]">
      <table className="w-full text-left font-play text-xs sm:text-sm text-white border-collapse">
        <thead>
          <tr className="bg-black border-b border-gray-800 text-[#caa193] font-conthrax text-[10px] sm:text-xs">
            <th className="p-3 sm:p-4 border-r border-gray-800"></th>
            <th className="p-3 sm:p-4 border-r border-gray-800">Retail Renovation</th>
            <th className="p-3 sm:p-4">Retail Fit-Out</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-800">
          <tr>
            <td className="p-3 sm:p-4 font-semibold text-[#caa193] border-r border-gray-800">Starting point</td>
            <td className="p-3 sm:p-4 border-r border-gray-800 text-white">Existing trading shop</td>
            <td className="p-3 sm:p-4 text-white">Bare shell or fully reconfigured unit</td>
          </tr>
          <tr>
            <td className="p-3 sm:p-4 font-semibold text-[#caa193] border-r border-gray-800">Structural changes</td>
            <td className="p-3 sm:p-4 border-r border-gray-800 text-white">Minimal, works within the current layout</td>
            <td className="p-3 sm:p-4 text-white">Extensive, new partitions throughout</td>
          </tr>
          <tr>
            <td className="p-3 sm:p-4 font-semibold text-[#caa193] border-r border-gray-800">Average cost</td>
            <td className="p-3 sm:p-4 border-r border-gray-800 text-white">AED 100–800+ per sq ft</td>
            <td className="p-3 sm:p-4 text-white">AED 350–1,500+ per sq ft</td>
          </tr>
          <tr>
            <td className="p-3 sm:p-4 font-semibold text-[#caa193] border-r border-gray-800">Typical timeline</td>
            <td className="p-3 sm:p-4 border-r border-gray-800 text-white">2–14 weeks</td>
            <td className="p-3 sm:p-4 text-white">8–16+ weeks</td>
          </tr>
          <tr>
            <td className="p-3 sm:p-4 font-semibold text-[#caa193] border-r border-gray-800">Best for</td>
            <td className="p-3 sm:p-4 border-r border-gray-800 text-white">A shop that still trades but looks or performs poorly</td>
            <td className="p-3 sm:p-4 text-white">A new lease or a brand opening its first Dubai location</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Bottom Paragraphs */}
    <div className="font-play text-sm sm:text-base text-white space-y-4 leading-relaxed pt-2">
      <p className="text-white">
        If your layout still works but looks tired, retail renovation Dubai businesses choose this route because it's faster and cheaper than starting over, the same logic that applies to office and bathroom renovation, just with retail's own cost structure.
      
        If you're starting with a bare-shell unit instead, explore our {' '}
                <b className="text-[#caa193]">
                  <a href="https://wedointerior.ae/retail-interior-design-dubai">
retail interior design services in Dubai                  </a>
                </b>{' '} for the full design-to-handover process
      </p>
    </div>
  </div>
</div>

   <div className="bg-black p-6 sm:p-10 rounded-xl border border-gray-800 space-y-8 text-left">
  
  {/* Header Section */}
  <h2 className="text-center text-xs sm:text-xl md:text-xl font-conthrax tracking-widest mb-6 uppercase text-[#caa193]">
    Retail Renovation Trends in Dubai
  </h2>

  {/* Top Grid: Half Text next to Image */}
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
    
    {/* Image (Choti height - Left Side) */}
    <div className="lg:col-span-5 relative h-48 sm:h-64 w-full rounded-xl overflow-hidden border border-[#caa193]/40 shadow-lg bg-black">
      <Image
        src="/images/retail (4).jpeg"
        alt="retail (4)"
        
        fill
        className="object-cover"
      />
    </div>

    {/* Text Content (Upper Half - Right Side) */}
    <div className="lg:col-span-7 font-play text-sm sm:text-base text-white space-y-4 leading-relaxed">
      <p className="pb-1">
        A few shifts are showing up in almost every retail renovation brief we're seeing right now.
      </p>
      <p>
        <strong className="text-[#caa193] font-semibold">A distinctly local aesthetic.</strong> Geometric and arabesque-inspired detailing, hand-carved wood, and warm gold tones, drawing on Dubai's own cultural identity rather than a generic international-retail look, are showing up more in premium boutique renovations.
      </p>
      <p>
        <strong className="text-[#caa193] font-semibold">Biophilic elements.</strong> Living green walls and natural materials bring warmth into fashion and beauty retail, specifically, softening what would otherwise be a hard-surfaced, high-traffic space.
      </p>
    </div>

  </div>

  {/* Lower Text Content: Image ke nichay Full Width */}
  <div className="font-play text-sm sm:text-base text-white space-y-4 leading-relaxed pt-2">
    <p>
      <strong className="text-[#caa193] font-semibold">Smart renovation, retail technology.</strong> Digital displays, app-based lighting control, and increasingly contactless checkout integration are moving from flagship-only features to standard requests across smart retail renovation briefs.
    </p>
    <p>
      <strong className="text-[#caa193] font-semibold">Modular, flexible display systems.</strong> Movable partitions and reconfigurable fixtures that let a store change its layout for a new seasonal collection without a fresh renovation each time.
    </p>
    <p>
      <strong className="text-[#caa193] font-semibold">Sustainable renovation.</strong> Reusing an existing shell and upgrading its systems, rather than building new, is increasingly a real leasing consideration for landlords, not just good PR for the tenant.
    </p>
  </div>

</div>
        {/* Auto-Play Testimonials Carousel */}
        <div
          className="bg-black p-6 sm:p-10 rounded-xl border border-gray-800 space-y-6 relative overflow-hidden text-left"
          onMouseEnter={() => setIsPlaying(false)}
          onMouseLeave={() => setIsPlaying(true)}
        >
          <h2 className="text-center  text-xs sm:text-xl md:text-xl font-conthrax tracking-widest mb-6 uppercase text-[#caa193]">
            Testimonials
          </h2>

          <div className="relative min-h-[160px] sm:min-h-[120px] flex items-center justify-center">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className={`transition-all duration-500 absolute w-full ${
                  index === currentSlide
                    ? 'opacity-100 pointer-events-auto translate-x-0'
                    : 'opacity-0 pointer-events-none translate-x-8'
                }`}
              >
                <blockquote className="font-play text-sm sm:text-base text-white italic border-l-4 border-[#caa193] pl-4">
                  {item.quote}
                  <footer className="text-[#caa193] not-italic mt-2 text-sm sm:text-base">{item.author}</footer>
                </blockquote>
              </div>
            ))}
          </div>
        </div>

     {/* Section: Visit Us & CTA - Full Width */}
<div className="w-screen relative left-1/2 -translate-x-1/2 bg-[#f5ede5] py-10 px-6 sm:px-12 text-center space-y-4 text-black">
  <h3 className="text-xl sm:text-2xl font-conthrax text-[#111] uppercase">
    Ready to Renovate Your Store?
  </h3>

  <p className="text-sm sm:text-base font-play max-w-3xl mx-auto leading-relaxed">
    Whether it's a boutique that's due for a refresh or a mall unit that needs to clear approvals fast, tell us about your space, and we'll walk you through what it'll take, no pressure, no obligation to move forward.{" "}
    <a
      href="https://wedointerior.ae/contact-us"
      className="text-[#caa193] font-semibold hover:underline"
    >
      Get in Touch to Start Your Retail Renovation →
    </a>{" "}
    Office – WH-05 A, Jebel Ali Industrial 1, Dubai, UAE. Phone or WhatsApp +971 58 807 5603, Email{" "}
    <a
      href="mailto:info@wedointerior.ae"
      className="text-[#caa193] font-semibold hover:underline"
    >
      info@wedointerior.ae
    </a>
    .
  </p>

  {/* CTA Buttons */}
  <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
    <a
      href="https://wa.me/971588075603"
      target="_blank"
      rel="noopener noreferrer"
      className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-play text-sm sm:text-base rounded-lg shadow-md text-center transition-colors"
    >
      ✅ Request availability by WhatsApp
    </a>
    <a
      href="mailto:info@wedointerior.ae"
      className="px-6 py-3 bg-[#caa193] hover:bg-[#b88f81] text-white font-play text-sm sm:text-base rounded-lg shadow-md text-center transition-colors"
    >
      ✉️ Request availability by E-mail
    </a>
  </div>
</div>

      

        {/* Map Section - Full Width */}
        <div className="w-screen relative left-1/2 -translate-x-1/2 shadow-2xl border-t border-b border-gray-800" style={{ height: "450px" }}>
          <iframe
            src="https://maps.google.com/maps?q=Interior+Design+Company+Dubai+-+WeDo+Interior+Design+%26+Fit+out&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            title="Interior Design Company Dubai - WeDo Interior Design & Fit out Location"
          ></iframe>
        </div>

      {/* FAQs Section - Single Wrapper Div */}
<div className="bg-black p-6 sm:p-10 rounded-xl border border-gray-800 space-y-8 text-left">
  <h2 className="text-center text-xs sm:text-xl md:text-xl font-conthrax tracking-widest mb-6 uppercase text-[#caa193]">
    Frequently Asked Questions 
  </h2>

  <div className="space-y-6">
    <div>
      <h3 className="text-[#caa193] font-conthrax text-base sm:text-lg tracking-wider">
        How much does retail renovation cost in Dubai?
      </h3>
      <p className="font-play text-sm sm:text-base text-white pt-2 leading-relaxed">
        It depends on the scope and location type. As a rough guide, a cosmetic refresh averages around AED 100–250 per sq ft, a standard renovation roughly AED 250–450, and a full renovation with MEP approximately AED 450–800+. Mall units typically add 15–25% on top for guide-compliant materials and NOC costs. We provide an itemized quote once we've assessed your space.
      </p>
    </div>

    <div>
      <h3 className="text-[#caa193] font-conthrax text-base sm:text-lg tracking-wider">
        What's the difference between retail renovation and retail fit-out?
      </h3>
      <p className="font-play text-sm sm:text-base text-white pt-2 leading-relaxed">
        Renovation works within your existing shop, new flooring, joinery, and MEP, without touching the unit's core structure. Fit-out is more extensive, usually starting from a bare shell. If your shop is trading but looks dated, renovation is the faster, lower-cost route.
      </p>
    </div>

    <div>
      <h3 className="text-[#caa193] font-conthrax text-base sm:text-lg tracking-wider">
        Do I need mall approval to renovate a shop inside a shopping centre?
      </h3>
      <p className="font-play text-sm sm:text-base text-white pt-2 leading-relaxed">
        Yes. Major malls operate under their own fit-out guide covering approved materials, ceiling heights, and signage rules, plus a mall NOC process that can add 4–8 weeks before construction starts. Street-facing shops answer to Dubai Municipality and DCD directly, with no separate mall design-review layer.
      </p>
    </div>

    <div>
      <h3 className="text-[#caa193] font-conthrax text-base sm:text-lg tracking-wider">
        How long does a retail renovation take in Dubai?
      </h3>
      <p className="font-play text-sm sm:text-base text-white pt-2 leading-relaxed">
        Typically, 2–4 weeks for a cosmetic refresh, 4–8 for a standard renovation, and 8–14 for a full renovation with MEP. Mall units should add 4–8 weeks on top for the NOC process specifically, so the same-scope job takes noticeably longer inside a mall than on a high street.
      </p>
    </div>

    <div>
      <h3 className="text-[#caa193] font-conthrax text-base sm:text-lg tracking-wider">
        Can I keep my shop open during renovation?
      </h3>
      <p className="font-play text-sm sm:text-base text-white pt-2 leading-relaxed">
        In most cases, yes. Joinery and material sourcing happen off-site in parallel with approvals, and disruptive on-site work is scheduled around your trading hours wherever the space allows. Full closure is usually only needed for a major layout change, not a standard refresh.
      </p>
    </div>

    <div>
      <h3 className="text-[#caa193] font-conthrax text-base sm:text-lg tracking-wider">
        What's the biggest cost driver in a retail renovation?
      </h3>
      <p className="font-play text-sm sm:text-base text-white pt-2 leading-relaxed">
        Custom joinery display units, counters, and shopfront fixtures built to your brand's exact specification can run close to 40% of the total budget on higher-end projects. It's the line item most owners underestimate at the quotation stage, so it's worth pricing early rather than discovering it later.
      </p>
    </div>

    <div>
      <h3 className="text-[#caa193] font-conthrax text-base sm:text-lg tracking-wider">
        Do I need separate approval for shopfront signage?
      </h3>
      <p className="font-play text-sm sm:text-base text-white pt-2 leading-relaxed">
        Often, yes, signage and facade approval are frequently handled separately from the general renovation NOC, both for mall units and standalone shops. We coordinate this as part of the same project rather than leaving it for you to arrange separately.
      </p>
    </div>

    <div>
      <h3 className="text-[#caa193] font-conthrax text-base sm:text-lg tracking-wider">
        What's included in a retail renovation?
      </h3>
      <p className="font-play text-sm sm:text-base text-white pt-2 leading-relaxed">
        A typical retail renovation covers shopfront, flooring, joinery and display units, lighting, and signage, plus MEP upgrades where the scope requires them. It doesn't include structural changes to the building or a full reconfiguration from bare shell, which falls under a retail fit-out instead.
      </p>
    </div>

    <div>
      <h3 className="text-[#caa193] font-conthrax text-base sm:text-lg tracking-wider">
        Who is the best retail renovation company in Dubai?
      </h3>
      <p className="font-play text-sm sm:text-base text-white pt-2 leading-relaxed">
        Look for DED registration, ISO certification, a fixed-price written contract, and in-house joinery capability specifically, since joinery is usually the largest and highest-risk line item in a retail renovation. WE DO Interior Design &amp; Fit-Out meets all four, with 250+ completed projects and 15+ years in the Dubai market.
      </p>
    </div>
  </div>
</div>

      </div>
    </section>
  );
};

export default DProjects;