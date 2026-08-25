'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const testimonials = [
  {
    quote: `" I have worked with WeDo Interior Design & Fit Out on several projects, and I have consistently been impressed by the quality of their work. Beyond the execution phase, their support does not stop once the works are completed, which is a rare and valuable quality. Overall, a reliable and committed partner, and I would definitely recommend their services."`,
    author: "— Carine Landrieux"
  },
  {
    quote: `"Working with WeDo Interior Design has been an absolute pleasure from start to finish. Their team is creative, professional, and truly understands how to bring a space to life. From the initial consultation to the final touches, every detail was handled with care and precision."`,
    author: "— Mohammad Alchekh Asaad"
  }
];

const stagesData = [
  { id: 1, title: "Demolition & Strip-Out", imageSrc: "/images/bathroom-demolition-strip-out-dubai.webp", imageAlt: "Bathroom demolition and strip-out during a Dubai renovation", imageTitle: "Bathroom Demolition Dubai", desc: "Full removal of existing tiles, fixtures, sanitaryware, and fittings, with debris cleared before any new work begins. In an occupied building, this stage also covers protecting the lift, corridors, and any shared walls the work passes through, something worth confirming with your contractor before day one, since it's usually a building-management requirement, not an optional extra." },
  { id: 2, title: "Waterproofing", imageSrc: "/images/bathroom-waterproofing-dubai.webp", imageAlt: "Bathroom waterproofing membrane installed before tiling in Dubai", imageTitle: "Bathroom Waterproofing Dubai", desc: "The stage that determines whether the renovation lasts, covered in full detail below. Nothing else on this list happens until this passes." },
  { id: 3, title: "Tiling — Walls & Floor", imageSrc: "/images/large-format-bathroom-tiling-dubai.webp", imageAlt: "Large-format bathroom tiles being installed in a Dubai villa renovation", imageTitle: "Bathroom Tiling Dubai – Large Format Tiles", desc: "Full-height wall tiling and floor tiling, including adhesive, levelling, grouting, edge trims, and anti-slip flooring in the wet zone. Grout choice matters more here than in a dry room; epoxy grout costs more than standard cement grout but resists moisture and mould significantly better, which is why WE DO specify it for shower walls and floors as standard rather than an upgrade." },
  { id: 4, title: "Vanity, Storage & Mirrors", imageSrc: "/images/custom-bathroom-vanity-dubai.webp", imageAlt: "Custom oak floating bathroom vanity and rounded mirror in Dubai", imageTitle: "Custom Bathroom Vanity Dubai", desc: <>Custom vanity units built through our {' '}<b className="text-[#caa193]"><a href="https://wedointerior.ae/joinery-company-dubai">own joinery factory</a></b>{' '}, with mirror and lighting options to match. Because it's built to your exact measurements rather than adjusted from a stock unit, this is also where we solve real storage-space problems in smaller {' '}<b className="text-[#caa193]"><a href="https://wedointerior.ae/business-bay-apartment-design">apartment bathrooms</a></b>{' '}, soft-close drawers, concealed cistern units, and vertical storage that a standard vanity can't offer.</> },
  { id: 5, title: "Shower & Bathtub Conversion", imageSrc: "/images/bathtub-to-walk-in-shower-dubai.webp", imageAlt: "Dubai apartment bathroom converted from bathtub to walk-in shower", imageTitle: "Bathtub to Walk-In Shower Conversion Dubai", desc: "Bathtub-to-walk-in-shower conversion, wet rooms, and shower enclosures, including drainage repositioning where the layout requires it, one of the most common single requests we get on this page. Linear drains are increasingly the preferred option for conversions, since they sit flush with the floor rather than needing a raised tray." },
  { id: 6, title: "Plumbing, Electrical & Lighting", imageSrc: "/images/bathroom-plumbing-electrical-dubai.webp", imageAlt: "Plumbing and electrical work during a Dubai bathroom renovation", imageTitle: "Bathroom Plumbing and Electrical Dubai", desc: "Pipe rerouting, drainage adjustment, mixer valve installation, and lighting circuits, downlights, and exhaust fans wired to Dubai standards, with all wet-zone electrical points properly IP-rated for moisture exposure, a genuine safety requirement near water, not just a specification detail." },
  { id: 7, title: "Sanitaryware & Glass", imageSrc: "/images/premium-bathroom-sanitaryware-dubai.webp", imageAlt: "Wall-hung toilet, basin and frameless shower glass in a Dubai bathroom", imageTitle: "Premium Bathroom Sanitaryware Dubai", desc: "Wall-hung or floor-mounted WC, basin, and bath installation, plus frameless, semi-frameless, or framed shower glass in your choice of hardware finish; see the Materials section below for the finish options we work with." },
  { id: 8, title: "Snagging & Handover", imageSrc: "/images/bathroom-renovation-snagging-dubai.webp", imageAlt: "Final snagging inspection of a newly renovated Dubai bathroom", imageTitle: "Bathroom Renovation Snagging Dubai", desc: "A full inspection against the agreed scope before handover documentation is issued, water pressure and drainage tested, grout and sealant lines checked for gaps, and every door, drawer, and electrical point tested before you sign off. Anything found here gets fixed before the final invoice, not after." },
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
    Is Bathroom Renovation Right for You?
  </h2>
  
  <p className="leading-relaxed">
    If you’re remodeling any number of existing bathrooms in an apartment or villa but not building your home from the ground up or remodelling your entire home, then this page is for you. This would include anything ranging from remodeling a powder room to remodeling your master bathroom, including apartment bathrooms and villa bathrooms.
Remodeling your entire apartment, not just the bathroom? Our {' '}
                <b className="text-[#caa193]">
                  <a href="https://wedointerior.ae/apartment-renovation-dubai">
                    apartment renovation services
                  </a>
                </b>{' '} cover {' '}
                <b className="text-[#caa193]">
                  <a href="https://wedointerior.ae/kitchen-renovation-dubai">
                    kitchens
                  </a>
                </b>{' '}, flooring, and every other room alongside the bathroom. If you want to design your apartment, visit our {' '}
                <b className="text-[#caa193]">
                  <a href="https://wedointerior.ae/apartment-interior-design-dubai">
                    apartment interior design services
                  </a>
                </b>{' '} for more details.
  </p>

  {/* Grid: Key Facts (Left) & Image (Right) - Image ends at border line */}
  <div className="pt-6 border-t border-gray-800 grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
    
    {/* Left Side: Key Facts Only */}
    <div className="space-y-4">
      <h3 className="font-conthrax text-[#caa193] text-sm sm:text-base tracking-wider ">
        Key Facts
      </h3>
      <ul className="list-disc pl-5 space-y-2 leading-relaxed">
        <li>Service: demolition, waterproofing, tiling, vanity, plumbing, electrical, and sanitaryware for one bathroom, priced per bathroom, not per sq ft</li>
        <li>Cost: typically around AED 15,000–140,000+ per bathroom on average, depending on tier</li>
        <li>Timeline: typically 7–25+ working days depending on tier</li>
        <li>Approvals: scope-dependent, building management sign-off for simple swaps; Dubai Municipality and a developer NOC (Emaar, Damac) for demolition, plumbing, or drainage changes</li>
        <li>Contract model: one fixed-price contract, one accountable team, staged payments, never full payment upfront</li>
        <li>Areas served: Business Bay, DIFC, Dubai Marina, Palm Jumeirah, Downtown Dubai, Dubai Hills, JLT, Al Quoz</li>
      </ul>
    </div>

    {/* Right Side: Image (Height strictly aligned with Key Facts list) */}
    <div className="relative w-full min-h-[280px] h-full rounded-lg overflow-hidden border border-[#caa193]/40 bg-black">
      <Image
        src="/images/modern-apartment-bathroom-renovation-dubai.webp"
        alt="Modern minimalist bathroom renovation in a Dubai apartment"
        title="Modern Apartment Bathroom Renovation Dubai"
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
      Get in Touch to Start Your Bathroom Renovation
      <span className="transform transition-transform duration-200 group-hover:translate-x-1">→</span>
    </a>
  </div>

</div>

       <div className="bg-black p-6 sm:p-10 rounded-xl border border-gray-800 space-y-8 text-left">
      {/* Section Header & Intro */}
      <div className="space-y-3">
        <h2 className="text-center text-xs sm:text-xl md:text-xl font-conthrax tracking-widest mb-6 uppercase text-[#caa193]">
          Bathroom Renovation Cost & Timeline in Dubai
        </h2>
        <p className="text-sm sm:text-base text-white font-play leading-relaxed">
          Bathroom pricing runs by tier, not by square footage the way a full apartment or office job does a small powder room and a mid-size ensuite can land in the same cost band if the actual scope of work is similar. The ranges below are indicative Dubai market figures, not a quotation. Your final cost depends on the existing condition, scope, materials, and layout changes required.
        </p>
      </div>

      {/* Single Medium Image */}
      <div className="relative h-64 sm:h-80 rounded-xl overflow-hidden border border-[#caa193]/40 bg-black mx-auto max-w-2xl">
        <Image
          src="/images/bathroom-renovation-consultation-dubai.webp"
          alt="Serene modern bathroom interior for a Dubai renovation consultation"
          title="Bathroom Renovation Consultation Dubai"
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
              <th className="p-4 border-r border-gray-800">Average Cost (AED per bathroom)</th>
              <th className="p-4">Typical Timeline</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800">
            <tr>
              <td className="p-4 font-semibold text-[#caa193] border-r border-gray-800">Powder Room / Refresh</td>
              <td className="p-4 border-r border-gray-800">Fixtures, tiling touch-ups, vanity, mirror, lighting, no waterproofing redo</td>
              <td className="p-4 border-r border-gray-800">15,000 – 25,000</td>
              <td className="p-4">7–10 working days</td>
            </tr>
            <tr>
              <td className="p-4 font-semibold text-[#caa193] border-r border-gray-800">Standard Full Renovation</td>
              <td className="p-4 border-r border-gray-800">Full strip-out, waterproofing, tiling, vanity, WC, shower, ceiling & lighting</td>
              <td className="p-4 border-r border-gray-800">30,000 – 50,000</td>
              <td className="p-4">10–14 working days</td>
            </tr>
            <tr>
              <td className="p-4 font-semibold text-[#caa193] border-r border-gray-800">Premium Renovation</td>
              <td className="p-4 border-r border-gray-800">Premium tiles, custom vanity, concealed WC, shower glass, full MEP</td>
              <td className="p-4 border-r border-gray-800">50,000 – 85,000</td>
              <td className="p-4">18–25 working days</td>
            </tr>
            <tr>
              <td className="p-4 font-semibold text-[#caa193] border-r border-gray-800">Luxury / Bespoke</td>
              <td className="p-4 border-r border-gray-800">Large-format stone, bespoke vanity, premium sanitaryware, layout changes</td>
              <td className="p-4 border-r border-gray-800">85,000 – 140,000+</td>
              <td className="p-4">Confirmed after site visit</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Closing Note */}
      <p className="text-sm sm:text-base text-white font-play leading-relaxed">
        The biggest swing between quotes at the same tier is usually waterproofing quality and tile specification, not labour. Every WE DO quote is a full bill of quantities, not a lump sum, so you can see exactly where the budget goes before you sign.
      </p>
    </div>

        {/* CTA Section 1 - Full Width */}
        <div className="w-screen relative left-1/2 -translate-x-1/2 bg-[#f5ede5] py-10 px-6 sm:px-12 text-center space-y-4 text-black">
          <h3 className="text-lg sm:text-2xl font-conthrax  text-black">
            Get In Touch With Us
          </h3>
          <p className="text-sm sm:text-base font-play text-gray-800 max-w-3xl mx-auto">
            Ready to plan your Bathroom renovation? Contact WE DO for a free site visit and itemized quote.
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
        Signs Your Bathroom Needs Renovating
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Text Content (Left Side) */}
        <div className="lg:col-span-6 text-sm sm:text-base font-play text-white leading-relaxed space-y-4">
          <p>
            Not every dated bathroom requires full renovation, and not every problem is urgent, but a few signs are worth taking seriously rather than living with for another year.
          </p>
          <p>
            The grout that keeps cracking, staining, or developing mold despite repeated cleanings suggests that its surface seal has deteriorated rather than you being unskilled at your cleaning duties. Loose or hollow-sounding tiles can indicate problems with the tile installation or the substrate underneath and should be inspected before further renovation work. The smell of mildew, which cannot be fully masked with air fresheners, is a result of poor ventilation rather than poor cleaning. Reduced water pressure and aging fixtures would probably be the least pressing reasons for your renovation.
          </p>
          <p>
            One sign is different from the rest: a water stain on the ceiling of the room below. That's not a "renovate when you get around to it" situation; it means water is already getting where it shouldn't, and the longer it's left, the more it costs to fix. Everything else on this list can wait for the right time. That one can't.
          </p>
        </div>

        {/* Image (Right Side) */}
        <div className="lg:col-span-6 relative h-80 sm:h-[28rem] w-full rounded-xl overflow-hidden border border-[#caa193]/40 shadow-lg bg-black">
          <Image
            src="/images/signs-bathroom-needs-renovation-dubai.webp"
            alt="Dated Dubai apartment bathroom showing signs that renovation is needed"
            title="Signs Your Bathroom Needs Renovation Dubai"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>

       <div className="bg-black p-6 sm:p-10 rounded-xl border border-gray-800 space-y-8 text-left">
      
      <h2 className="text-center text-xs sm:text-xl md:text-xl font-conthrax tracking-widest mb-6 uppercase text-[#caa193]">
        Where Bathroom Design Is Heading in Dubai
      </h2>

      {/* Top Grid: Image Left, Bullets Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Image: Bathroom Design Trends (Left Side) */}
        <div className="lg:col-span-6 relative h-80 sm:h-[28rem] w-full rounded-xl overflow-hidden border border-[#caa193]/40 shadow-lg bg-black">
          <Image
            src="/images/Luxury Bathroom Design in Dubai.png"
            alt="Luxury Bathroom Design in Dubai"
            title="Luxury Bathroom Design in Dubai"
            
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        {/* Bullet List (Right Side) */}
        <div className="lg:col-span-6 text-sm sm:text-base font-play text-white leading-relaxed">
          <ul className="list-disc pl-5 space-y-3">
            <li>
              <strong>Spa-style bathrooms.</strong> Freestanding tubs, rainfall showers, and natural stone are moving from villa master suites into apartment bathrooms too; the appeal isn't just the look, it's a few minutes of genuine calm built into a routine that doesn't usually have room for it.
            </li>
            <li>
              <strong>Large-format tiles.</strong> Fewer grout lines mean a cleaner, more seamless look, and they're increasingly the default rather than the upgrade.
            </li>
            <li>
              <strong>Smart fixtures.</strong> LED mirrors with built-in lighting and demist functions, and sensor taps, are showing up in a growing share of briefs.
            </li>
            <li>
              <strong>Bold hardware.</strong> Brushed gold and matte black finishes are replacing standard chrome as the default premium choice.
            </li>
            <li>
              <strong>Better ventilation planned from the start.</strong> Stronger extraction protects tiling, joinery, and paintwork from Dubai's humidity over the long term, rather than being an afterthought.
            </li>
          </ul>
        </div>

      </div>

      {/* Full Width Paragraph (Below Image and Bullets) */}
      <div className="w-full text-sm sm:text-base font-play text-white leading-relaxed pt-2">
        <p>
          If you live in Dubai Creek Harbour and want to explore the latest luxury bathroom design trends specifically for homes in the area, read our guide to {' '}
                <b className="text-[#caa193]">
                  <a href="https://wedointerior.ae/bathroom-design-trends-dubai-creek-harbour">
                   luxury bathroom design trends in Dubai Creek Harbour homes.
                  </a>
                </b>{' '}.
        </p>
      </div>

    </div>

<div className="bg-black p-6 sm:p-10 rounded-xl border border-gray-800 space-y-6 text-left">
  <h2 className="text-center text-xs sm:text-xl md:text-xl font-conthrax tracking-widest mb-4 uppercase text-[#caa193]">
    What's Included: Every Stage of a Bathroom Renovation
  </h2>

  <p className="text-sm sm:text-base font-play text-white leading-relaxed max-w-4xl mx-auto text-center">
    A bathroom touches more trades per square foot than almost any other room. If you want a full contemporary renovation or just the replacement of a few dated fixtures, here's what's typically covered.
  </p>

  {/* Grid Layout: Mobile me 1 column, Tablet me 2, Desktop me 4 columns */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full pt-4">
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
            className="object-cover "
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
      
      {/* Top Row: Waterproofing (Left Text, Right Image) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Text */}
        <div className="lg:col-span-7 space-y-4">
          <h2 className="text-center text-xs sm:text-xl md:text-xl font-conthrax tracking-widest mb-6 uppercase text-[#caa193]">
            Waterproofing: Why It's Non-Negotiable
          </h2>
          <div className="font-play text-sm sm:text-base text-white">
            <p className="leading-relaxed text-gray-200">
              Waterproofing is the one part of a bathroom renovation that determines whether it lasts 15 years or fails within months, and it's the step most commonly rushed by inexperienced contractors. Done properly, waterproofing means a membrane applied to the floor and every wet-area wall (up to at least 1.8m), sealed at every joint, corner, and pipe penetration, then tested, typically with a flood test held for 24–48 hours, before a single tile goes down. Skipping or rushing this step is the most common reason bathroom renovations fail in Dubai, and in an apartment building, a failed membrane doesn't just mean a leak in your own bathroom, it means water damage to the ceiling of the unit below. We don't tile over a membrane that hasn't been tested.
            </p>
          </div>
        </div>

        {/* Right Image (Text ki height ke sath align) */}
        <div className="lg:col-span-5 relative w-full h-full min-h-[220px] rounded-xl overflow-hidden border border-[#caa193]/40 bg-black">
          <Image
            src="/images/bathroom-waterproofing-flood-test-dubai.webp"
            alt="Bathroom waterproofing flood test before tiling in Dubai"
            title="Bathroom Waterproofing Flood Test Dubai"
            fill
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="object-cover"
          />
        </div>

      </div>

      {/* Bottom Row: Renovate Without Moving Plumbing (Full Width) */}
      <div className="space-y-4 pt-4 border-t border-gray-800/60">
        <h2 className="text-center text-xs sm:text-xl md:text-xl font-conthrax tracking-widest mb-6 uppercase text-[#caa193]">
          Can You Renovate a Bathroom Without Moving the Plumbing?
        </h2>
        <div className="font-play text-sm sm:text-base text-white">
          <p className="leading-relaxed text-gray-200">
            Yes, and it's usually the faster, lower-cost path. If your existing layout works (the shower, WC, and basin stay where they are), renovation is a matter of stripping back to the structure, re-waterproofing, and rebuilding with new tiles, vanity, and fixtures. Moving plumbing, repositioning a drain to convert a bathtub into a walk-in shower, for example, adds cost and time, because it touches drainage falls and concealed pipework, not just the visible finish. Both are common in Dubai bathrooms. The right choice depends on whether your current layout actually works for you, not on which is technically easier.
          </p>
        </div>
      </div>

    </div>

      <div className="bg-black p-6 sm:p-10 rounded-xl border border-gray-800 text-left">
      
      <h2 className="text-center text-xs sm:text-xl md:text-xl font-conthrax tracking-widest mb-6 uppercase text-[#caa193]">
        Materials That Hold Up in Dubai's Humidity
      </h2>

      {/* Top Row: H3 Sections 1, 2, 3 (Left Text, Right Image) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Text */}
        <div className="lg:col-span-7 font-play text-sm sm:text-base text-white space-y-4 leading-relaxed">
          <p>
            <b className="text-[#caa193] font-conthrax block text-base sm:text-lg mb-1">
              Tiling
            </b>
            Large-format porcelain (60x120cm and above), natural marble and stone feature walls, microcement, and anti-slip flooring specified for the wet zone. Larger tiles mean fewer grout lines overall, which is partly aesthetic and partly practical; grout lines are where mould gets a foothold first, so fewer of them is one less thing to maintain.
          </p>

          <p>
            <b className="text-[#caa193] font-conthrax block text-base sm:text-lg mb-1">
              Vanities &amp; Storage
            </b>
            Custom vanity units in quartz, porcelain, or marble tops, built through our own joinery factory, with concealed WC systems where space is tight, never MDF or standard particleboard in a wet zone, for the reason covered above.
          </p>

          <p>
            <b className="text-[#caa193] font-conthrax block text-base sm:text-lg mb-1">
              Fixtures &amp; Fittings
            </b>
            Sanitaryware and mixers in chrome, brushed nickel, brushed gold, or matte black finishes, sourced to your specification, from everyday reliable brands through to premium European names, depending on your budget and how much of the look rides on the hardware itself.
          </p>
        </div>

        {/* Right Image (Text height ke sath strictly fit) */}
        <div className="lg:col-span-5 relative w-full h-full min-h-[220px] rounded-xl overflow-hidden border border-[#caa193]/40 bg-black">
          <Image
            src="/images/luxury bathroom interior showcasing premium natural materials in Dubai Creek Harbour residence.png"
            alt="luxury bathroom interior showcasing premium natural materials in Dubai Creek Harbour residence"
            title="luxury bathroom interior showcasing premium natural materials in Dubai Creek Harbour residence"
            fill
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="object-cover"
          />
        </div>

      </div>

      {/* Bottom Row: H3 Section 4 (Same spacing, no border line) */}
      <div className="font-play text-sm sm:text-base text-white leading-relaxed mt-4">
        <p>
          <b className="text-[#caa193] font-conthrax block text-base sm:text-lg mb-1">
            Glass &amp; Hardware
          </b>
          Frameless, semi-frameless, or framed shower glass, with hardware finished to match your fixtures. Frameless glass reads as more open and lets more light reach the rest of the room, which matters more in a smaller Dubai apartment bathroom than a spacious villa ensuite.
        </p>
      </div>

    </div>

      <div className="bg-black p-6 sm:p-10 rounded-xl border border-gray-800 space-y-8 text-left">
      
      {/* 1. Header & Text Intro */}
      <div className="space-y-3">
        <h2 className="text-center text-xs sm:text-xl md:text-xl font-conthrax tracking-widest mb-6 uppercase text-[#caa193]">
          Bathroom Renovation Mistakes to Avoid in Dubai
        </h2>
        <p className="text-sm sm:text-base text-white font-play leading-relaxed">
          As an {' '}
                <b className="text-[#caa193]">
                  <a href="https://www.google.com/search?client=ms-android-transsion&hs=EpRq&sca_esv=0ba405510de268d2&sxsrf=APpeQnt-_zIc4L7zMQSK92Rw092nNQE5VA:1786766350878&kgmid=/g/11pyc3sd1k&q=Interior+Design+Company+Dubai+-+WeDo+Interior+Design+%26+Fit+out&shem=epsd1,ltae,rimspwouoe&shndl=30&source=sh/x/loc/act/m1/2&kgs=987e8ab316ef7d0f&utm_source=epsd1,ltae,rimspwouoe,sh/x/loc/act/m1/2">
                    interior design company in Dubai
                  </a>
                </b>{' '}, WE DO see the same mistakes repeatedly, usually on someone else's unfinished or already-failing renovation. Worth knowing before you start, and what we do differently on every project:
        </p>
      </div>

      

      {/* 3. Mistakes Table */}
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
                Skipping the flood test
              </td>
              <td className="p-2 sm:p-3 border-r border-gray-800 leading-snug">
                A waterproofing system that hasn't been properly tested before tiling can leave problems hidden until water reaches areas beneath the finished surfaces.
              </td>
              <td className="p-2 sm:p-3 leading-snug">
                Waterproofing is completed and tested in accordance with the agreed project specification before tiling.
              </td>
            </tr>
            <tr>
              <td className="p-2 sm:p-3 font-semibold text-[#caa193] border-r border-gray-800 leading-snug">
                Getting the drainage slope wrong
              </td>
              <td className="p-2 sm:p-3 border-r border-gray-800 leading-snug">
                Even a small error here leaves standing water near the shower, invisible until it isn't
              </td>
              <td className="p-2 sm:p-3 leading-snug">
                Drainage falls are checked at the site-assessment stage, before any layout is finalised
              </td>
            </tr>
            <tr>
              <td className="p-2 sm:p-3 font-semibold text-[#caa193] border-r border-gray-800 leading-snug">
                Using the wrong materials for the climate
              </td>
              <td className="p-2 sm:p-3 border-r border-gray-800 leading-snug">
                Standard MDF or untreated particleboard swells in Dubai's humidity
              </td>
              <td className="p-2 sm:p-3 leading-snug">
                Wet-zone joinery is built from genuinely moisture-rated materials only, never standard board
              </td>
            </tr>
            <tr>
              <td className="p-2 sm:p-3 font-semibold text-[#caa193] border-r border-gray-800 leading-snug">
                Starting without building management approval
              </td>
              <td className="p-2 sm:p-3 border-r border-gray-800 leading-snug">
                Demolition without a NOC can mean a stop-work order mid-project, worse once walls are open
              </td>
              <td className="p-2 sm:p-3 leading-snug">
                Approvals are confirmed and submitted before demolition begins, as a fixed step in our process
              </td>
            </tr>
            <tr>
              <td className="p-2 sm:p-3 font-semibold text-[#caa193] border-r border-gray-800 leading-snug">
                Choosing the lowest quote without asking what it excludes
              </td>
              <td className="p-2 sm:p-3 border-r border-gray-800 leading-snug">
                The cheapest bid usually means corners cut somewhere you can't see, most often the waterproofing
              </td>
              <td className="p-2 sm:p-3 leading-snug">
                Every quote is a full bill of quantities, so there's nothing hidden to cut later
              </td>
            </tr>
            <tr>
              <td className="p-2 sm:p-3 font-semibold text-[#caa193] border-r border-gray-800 leading-snug">
                Skipping the final snagging walkthrough
              </td>
              <td className="p-2 sm:p-3 border-r border-gray-800 leading-snug">
                Issues found before you pay the last invoice get fixed for free; issues found after usually don't
              </td>
              <td className="p-2 sm:p-3 leading-snug">
                Snagging happens before handover documentation and final payment, not after
              </td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
 <div className="bg-black p-6 sm:p-10 rounded-xl border border-gray-800 space-y-8 text-left">
  
  <h2 className="text-center text-xs sm:text-xl md:text-xl font-conthrax tracking-widest mb-6 uppercase text-[#caa193]">
    Bathroom Types WE DO Renovates
  </h2>

  {/* 3-Column Responsive Grid */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

    {/* 1. Master & Ensuite Bathrooms */}
    <div className="relative h-[280px] sm:h-[300px] rounded-xl overflow-hidden group border border-gray-800 hover:border-[#caa193]/60 transition-all duration-300 shadow-lg cursor-pointer">
      {/* Background Image */}
      <Image
        src="/images/luxury-master-ensuite-bathroom-dubai.webp"
        alt="Spacious Dubai villa master ensuite with double vanity, freestanding bathtub, walk-in shower and elegant brass detailing."
        title="Luxury Master Ensuite Bathroom Dubai"
        fill
        className="object-cover"
      />
      {/* Dark Overlay & Text Content (Fades out on Hover) */}
      <div className="absolute inset-0 bg-black/75 group-hover:opacity-0 transition-opacity duration-500 p-4 sm:p-5 flex flex-col justify-end space-y-2 overflow-y-auto custom-scrollbar">
        <h3 className="font-conthrax text-[#caa193] text-sm sm:text-base tracking-wider shrink-0">
          Master &amp; Ensuite Bathrooms
        </h3>
        <p className="text-xs sm:text-xs font-play text-white leading-relaxed">
          Typically the largest scope in a home, and the one worth treating like an actual retreat rather than just a bigger bathroom, double vanities, a walk-in shower, sometimes a freestanding bath, all under one BOQ instead of a patchwork of separate trades. Because it's the bathroom you use every day, this is also where spending a bit more on layered lighting and larger-format tile pays off most.
        </p>
      </div>
    </div>

    {/* 2. Family & Guest Bathrooms */}
    <div className="relative h-[280px] sm:h-[300px] rounded-xl overflow-hidden group border border-gray-800 hover:border-[#caa193]/60 transition-all duration-300 shadow-lg cursor-pointer">
      <Image
        src="/images/family-bathroom-renovation-dubai.webp"
        alt="Contemporary family bathroom renovation in a Dubai villa"
        title="Family Bathroom Renovation Dubai"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/75 group-hover:opacity-0 transition-opacity duration-500 p-4 sm:p-5 flex flex-col justify-end space-y-2 overflow-y-auto custom-scrollbar">
        <h3 className="font-conthrax text-[#caa193] text-sm sm:text-base tracking-wider shrink-0">
          Family &amp; Guest Bathrooms
        </h3>
        <p className="text-xs sm:text-xs font-play text-white leading-relaxed">
          Built for durability under daily use, practical layouts, easy-clean surfaces, and storage that works for more than one person without looking institutional. Durability matters more here than in a master bath: surfaces get more traffic, so we lean toward large-format porcelain over natural stone, which shows wear faster under everyday use.
        </p>
      </div>
    </div>

    {/* 3. Powder Rooms */}
    <div className="relative h-[280px] sm:h-[300px] rounded-xl overflow-hidden group border border-gray-800 hover:border-[#caa193]/60 transition-all duration-300 shadow-lg cursor-pointer">
      <Image
        src="/images/luxury-powder-room-dubai.webp"
        alt="Sophisticated Dubai villa powder room featuring dramatic stone, sculptural basin and warm brass detailing."
        title="Luxury Powder Room Dubai"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/75 group-hover:opacity-0 transition-opacity duration-500 p-4 sm:p-5 flex flex-col justify-end space-y-2 overflow-y-auto custom-scrollbar">
        <h3 className="font-conthrax text-[#caa193] text-sm sm:text-base tracking-wider shrink-0">
          Powder Rooms
        </h3>
        <p className="text-xs sm:text-xs font-play text-white leading-relaxed">
          No shower or bath to plan around, which makes this the fastest and lowest-cost tier, but it's also the one bathroom your guests actually see, so it carries more design weight per square foot than any other room in the house. A statement wall, a well-chosen mirror, and a good tap finish do more work here than in any other bathroom type, precisely because there's less square footage to spread the impression across.
        </p>
      </div>
    </div>

    {/* 4. Villa Bathrooms */}
    <div className="relative h-[280px] sm:h-[300px] rounded-xl overflow-hidden group border border-gray-800 hover:border-[#caa193]/60 transition-all duration-300 shadow-lg cursor-pointer">
      <Image
        src="/images/luxury-villa-bathroom-renovation-dubai.webp"
        alt="Spacious villa bathroom combining travertine, walnut, bronze fixtures, an arched shower and freestanding stone bathtub."
        title="Luxury Villa Bathroom Renovation Dubai"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/75 group-hover:opacity-0 transition-opacity duration-500 p-4 sm:p-5 flex flex-col justify-end space-y-2 overflow-y-auto custom-scrollbar">
        <h3 className="font-conthrax text-[#caa193] text-sm sm:text-base tracking-wider shrink-0">
          Villa Bathrooms
        </h3>
        <p className="text-xs sm:text-xs font-play text-white leading-relaxed">
          More freedom for layout changes and premium materials, since villa ownership structures generally mean fewer building-management restrictions than an apartment tower. That freedom also means more of the decision-making sits with you rather than a building's approval process, worth deciding early whether you want that flexibility or a faster, more standardized turnaround.
        </p>
      </div>
    </div>

    {/* 5. Apartment Bathrooms */}
    <div className="relative h-[280px] sm:h-[300px] rounded-xl overflow-hidden group border border-gray-800 hover:border-[#caa193]/60 transition-all duration-300 shadow-lg cursor-pointer">
      <Image
        src="/images/apartment-bathroom-renovation-dubai.webp"
        alt="Contemporary green and white bathroom renovation in a Dubai apartment"
        title="Apartment Bathroom Renovation Dubai"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/75 group-hover:opacity-0 transition-opacity duration-500 p-4 sm:p-5 flex flex-col justify-end space-y-2 overflow-y-auto custom-scrollbar">
        <h3 className="font-conthrax text-[#caa193] text-sm sm:text-base tracking-wider shrink-0">
          Apartment Bathrooms
        </h3>
        <p className="text-xs sm:text-xs font-play text-white leading-relaxed">
          Layout changes are possible, but they must go through building management and developer NOC processes; see the Approvals section below. Simple refreshes that don't touch plumbing or partitions usually clear much faster than a full layout change, since there's less for the building to review.
        </p>
      </div>
    </div>

  </div>

</div>

<div className="bg-black p-6 sm:p-10 rounded-xl border border-gray-800 space-y-8 text-left">
      
      {/* Top Row: Why Choose WE DO (Left Text, Right Image) */}
      <div className="space-y-6">
        <h2 className="text-center text-xs sm:text-xl md:text-xl font-conthrax tracking-widest mb-6 uppercase text-[#caa193]">
          Why Choose WE DO for Your Bathroom Renovation
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Text */}
          <div className="lg:col-span-7 font-play text-sm sm:text-base text-white space-y-4">
            <p className="leading-relaxed text-gray-200">
              A bathroom renovation lives or dies on two things most people can't actually see once it's finished: what's behind the tiles, and whether the vanity was built to fit your exact space or just adjusted to be close enough. That's where our own in-house teams matter: civil works, decoration, and a state-of-the-art joinery factory that builds every vanity to measure rather than fitting a stock piece on site. Nothing here gets subcontracted out and rushed.
            
              Fifteen-plus years and {' '}
                <b className="text-[#caa193]">
                  <a href="https://wedointerior.ae/gallery">
                   250+ completed projects
                  </a>
                </b>{' '} across Dubai's residential and commercial sectors back that up, alongside DED registration, ISO 9001:2015, ISO 14001:2015, and ISO 45001:2018 certification, and a 2026 Luxury Lifestyle Awards win.
            
            Three things make the process lower-risk than hiring separately for design, MEP, and construction:
          </p>
          </div>

          {/* Right Image (matched to intro text height only) */}
          <div className="lg:col-span-5 relative w-full h-64 sm:h-full min-h-[220px] rounded-xl overflow-hidden border border-[#caa193]/40 bg-black">
            <Image
              src="/images/dubai-bathroom-renovation-approvals.webp"
              alt="Bathroom renovation plans and approvals being reviewed in Dubai"
              title="Dubai Bathroom Renovation Approvals"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* Bullets: Full Width */}
        <div className="font-play text-sm sm:text-base text-white space-y-4">
          
          <ul className="list-disc pl-5 space-y-2 leading-relaxed text-gray-200 w-full">
            <li>
              <span className="text-[#caa193] font-semibold">One contract, one team.</span> Design, approvals, and construction sit under a single accountable contract, not coordinating between separate trades yourself.
            </li>
            <li>
              <span className="text-[#caa193] font-semibold">Staged payments.</span> You pay in stages tied to project milestones, never the full amount upfront.
            </li>
            <li>
              <span className="text-[#caa193] font-semibold">Fixed-price, written contracts.</span> Your bill of quantities is agreed before work starts, not adjusted as it goes.
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Row: Approvals for Bathroom Renovation (Full Width) */}
      <div className="space-y-4 pt-4 border-t border-gray-800/60">
        <h2 className="text-center text-xs sm:text-xl md:text-xl font-conthrax tracking-widest mb-6 uppercase text-[#caa193]">
          Approvals for Bathroom Renovation in Dubai
        </h2>
        <div className="font-play text-sm sm:text-base text-white">
          <p className="leading-relaxed text-gray-200">
            What approval you need depends on scope, not on the fact that you're renovating a bathroom at all. Fixture swaps and cosmetic refreshes, new tiles over an existing sound membrane, a new vanity, updated fixtures, typically only need sign-off from your building's management or owners' association. The moment you touch demolition, plumbing runs, or drainage, including converting a bathtub into a walk-in shower, you'll usually need a fit-out NOC from your developer (we work directly with Emaar and Damac) or, in Trakhees-governed communities like Palm Jumeirah, from Trakhees itself. Structural and waterproofing work follows Dubai Municipality technical guidelines, and DEWA governs the electrical and plumbing connections. We manage this process for you and confirm exactly what your building requires before work starts.
          </p>
        </div>
      </div>

    </div>


<div className="bg-black p-6 sm:p-10 rounded-xl border border-gray-800 space-y-8 text-left">

  {/* Header + Intro */}
  <div className="space-y-3 text-center max-w-3xl mx-auto">
    <h2 className="text-xs sm:text-xl md:text-xl font-conthrax tracking-widest mb-4 uppercase text-[#caa193]">
      How We Sequence the Work
    </h2>
    <p className="font-play text-sm sm:text-base text-white leading-relaxed">
      Order matters more in a bathroom than almost any other room; waterproofing has to be done and tested before a single tile goes down, not worked around afterward.
    </p>
  </div>

  {/* Top Featured Section: Steps 1 & 2 + Image */}
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
    
    {/* Left Column: Steps 1 & 2 */}
    <div className="lg:col-span-7 flex flex-col justify-between gap-6">
      
      {/* Step 1 */}
      <div className="bg-[#111] border border-gray-800 p-6 rounded-xl relative group hover:border-[#caa193]/60 transition-all duration-300 flex-1 flex flex-col justify-center">
        
        <h3 className="text-[#caa193] font-conthrax text-sm sm:text-base tracking-wider uppercase mb-2 pr-20">
          Site Assessment &amp; Measurement
        </h3>
        <p className="font-play text-xs sm:text-sm text-white leading-relaxed">
          We walk the space, check the existing plumbing, drainage, and waterproofing condition, and take full measurements for tiles, vanity, and shower enclosures. This is also when we flag anything that could affect a layout change, like whether the building's drainage stack can actually support moving a shower drain.
        </p>
      </div>

      {/* Step 2 */}
      <div className="bg-[#111] border border-gray-800 p-6 rounded-xl relative group hover:border-[#caa193]/60 transition-all duration-300 flex-1 flex flex-col justify-center">
        
        <h3 className="text-[#caa193] font-conthrax text-sm sm:text-base tracking-wider uppercase mb-2 pr-20">
          Scope, Material Selection &amp; Fixed-Price Proposal
        </h3>
        <p className="font-play text-xs sm:text-sm text-white leading-relaxed">
          You confirm layout and material choices, and we issue an itemized bill of quantities, not a lump-sum estimate, before any work starts. Material lead times get locked in here too, since imported stone or custom-order fixtures are usually what stretches a timeline, not the labour itself.
        </p>
      </div>

    </div>

    {/* Right Column: Featured Image */}
    <div className="lg:col-span-5 relative w-full h-full min-h-[280px] rounded-xl overflow-hidden border border-[#caa193]/40 bg-black group shadow-lg">
      <Image
        src="/images/dubai-bathroom-renovation-process.webp"
        alt="Bathroom renovation planning and material selection in Dubai"
        title="Dubai Bathroom Renovation Process"
        fill
        sizes="(max-width: 1024px) 100vw, 40vw"
        className="object-cover "
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
    </div>

  </div>

  {/* Remaining Steps 3 to 6 Grid (2 Columns) */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

    {/* Step 3 */}
    <div className="bg-[#111] border border-gray-800 p-6 rounded-xl relative group hover:border-[#caa193]/60 transition-all duration-300 flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-center mb-3">
          
        </div>
        <h3 className="text-[#caa193] font-conthrax text-sm sm:text-base tracking-wider uppercase mb-2">
          Stripping Back to the Structure
        </h3>
        <p className="font-play text-xs sm:text-sm text-white leading-relaxed">
          Full removal of existing tiles, fixtures, and fittings, with the site cleared and prepared for new work, usually the fastest stage, but the one most likely to need coordinating around building-approved working hours in an occupied block.
        </p>
      </div>
    </div>

    {/* Step 4 */}
    <div className="bg-[#111] border border-gray-800 p-6 rounded-xl relative group hover:border-[#caa193]/60 transition-all duration-300 flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-center mb-3">
          
        </div>
        <h3 className="text-[#caa193] font-conthrax text-sm sm:text-base tracking-wider uppercase mb-2">
          Plumbing, Drainage &amp; Waterproofing
        </h3>
        <p className="font-play text-xs sm:text-sm text-white leading-relaxed">
          Pipe rerouting and drainage changes happen first, then the waterproof membrane is applied and held under a 24–48-hour flood test; see the dedicated section above before anything gets tiled. This is the one stage we won't compress to hit a deadline.
        </p>
      </div>
    </div>

    {/* Step 5 */}
    <div className="bg-[#111] border border-gray-800 p-6 rounded-xl relative group hover:border-[#caa193]/60 transition-all duration-300 flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-center mb-3">
          
        </div>
        <h3 className="text-[#caa193] font-conthrax text-sm sm:text-base tracking-wider uppercase mb-2">
          Tiling, Vanity &amp; Fixture Installation
        </h3>
        <p className="font-play text-xs sm:text-sm text-white leading-relaxed">
          Wall and floor tiling goes down first, then the vanity and fixtures are installed against it, carried out in sequence by our own civil works and decoration teams. Fitting the vanity before the tiling is finished almost always means redoing something later.
        </p>
      </div>
    </div>

    {/* Step 6 */}
    <div className="bg-[#111] border border-gray-800 p-6 rounded-xl relative group hover:border-[#caa193]/60 transition-all duration-300 flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-center mb-3">
          
        </div>
        <h3 className="text-[#caa193] font-conthrax text-sm sm:text-base tracking-wider uppercase mb-2">
          Final Inspection &amp; Sign-Off
        </h3>
        <p className="font-play text-xs sm:text-sm text-white leading-relaxed">
          A full inspection against the agreed design before handover finishes, fixtures, and fittings all checked before you move back in, with your warranty documentation issued at the same time, not as a separate follow-up.
        </p>
      </div>
    </div>

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
    Visit Us
  </h3>

  <p className="text-sm sm:text-base font-play max-w-3xl mx-auto leading-relaxed">
    Have a bathroom that's ready for an update?{" "}
    <a
      href="https://wedointerior.ae/contact-us"
      className="text-[#caa193] font-semibold hover:underline"
    >
      Get in Touch to Start Your Bathroom Renovation →
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

      {/* Districts We Serve Section */}
      <div className="lg:max-w-[70%] mx-auto bg-black p-6 sm:p-10 rounded-xl border border-gray-800 shadow text-center space-y-6 mb-12">
        <h3 className="font-conthrax text-[#caa193] text-sm sm:text-base tracking-wider uppercase">
          Districts We Serve
        </h3>

        <div className="flex flex-wrap justify-center gap-3">
          <a
            href="https://wedointerior.ae/interior-design-company-business-bay"
            className="px-4 py-2 rounded-full border border-[#caa193]/40 bg-[#111] text-[#caa193] font-play text-xs sm:text-sm font-semibold "
          >
            Business Bay
          </a>
          <span className="px-4 py-2 rounded-full border border-[#caa193]/40 bg-[#111] text-[#caa193] font-play text-xs sm:text-sm font-semibold">
            DIFC
          </span>
          <span className="px-4 py-2 rounded-full border border-[#caa193]/40 bg-[#111] text-[#caa193] font-play text-xs sm:text-sm font-semibold">
            Dubai Marina
          </span>
          <span className="px-4 py-2 rounded-full border border-[#caa193]/40 bg-[#111] text-[#caa193] font-play text-xs sm:text-sm font-semibold">
            Palm Jumeirah
          </span>
          <span className="px-4 py-2 rounded-full border border-[#caa193]/40 bg-[#111] text-[#caa193] font-play text-xs sm:text-sm font-semibold">
            Downtown Dubai
          </span>
          <a
            href="http://wedointerior.ae/interior-design-companies-near-dubai-hills"
            className="px-4 py-2 rounded-full border border-[#caa193]/40 bg-[#111] text-[#caa193] font-play text-xs sm:text-sm font-semibold "
          >
            Dubai Hills
          </a>
          <span className="px-4 py-2 rounded-full border border-[#caa193]/40 bg-[#111] text-[#caa193] font-play text-xs sm:text-sm font-semibold">
            JLT
          </span>
          <span className="px-4 py-2 rounded-full border border-[#caa193]/40 bg-[#111] text-[#caa193] font-play text-xs sm:text-sm font-semibold">
            Al Quoz
          </span>
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
        How much does bathroom renovation cost in Dubai?
      </h3>
      <p className="font-play text-sm sm:text-base text-white pt-2 leading-relaxed">
        It depends on tier more than bathroom size. As a rough guide: a powder room refresh averages around AED 15,000–25,000, a standard full renovation roughly AED 30,000–50,000, a premium renovation approximately AED 50,000–85,000, and a luxury or layout-change project around AED 85,000–140,000+. We provide an itemized quote once we've assessed your space in person.
      </p>
    </div>

    <div>
      <h3 className="text-[#caa193] font-conthrax text-base sm:text-lg tracking-wider">
        What's the most important part of a bathroom renovation?
      </h3>
      <p className="font-play text-sm sm:text-base text-white pt-2 leading-relaxed">
        Waterproofing. It’s the membrane that gets laid down on your floor and walls before tiling, and is tested before tiling, that will determine whether the job lasts 15 years or only months. In a building of apartments, failure of the membrane threatens not only your bathroom but the one downstairs.
      </p>
    </div>

    <div>
      <h3 className="text-[#caa193] font-conthrax text-base sm:text-lg tracking-wider">
        Can I renovate a bathroom without moving the plumbing?
      </h3>
      <p className="font-play text-sm sm:text-base text-white pt-2 leading-relaxed">
        Absolutely. And it is normally more efficient and inexpensive. If your shower, WC, and basin remain where they are, the process will involve stripping off, waterproofing and remodeling with new finishes. On the other hand, when plumbing needs to be moved during the renovation from bathtub to shower, then additional costs accrue.
      </p>
    </div>

    <div>
      <h3 className="text-[#caa193] font-conthrax text-base sm:text-lg tracking-wider">
        How long does a bathroom renovation take in Dubai?
      </h3>
      <p className="font-play text-sm sm:text-base text-white pt-2 leading-relaxed">
        Timelines scale with tier: roughly 7–10 working days for a powder room refresh, 10–14 for a standard full renovation, 18–25 for a premium renovation, and a confirmed timeline after site visit for luxury or layout-change projects, since those often involve longer lead times for imported stone or custom pieces.
      </p>
    </div>

    <div>
      <h3 className="text-[#caa193] font-conthrax text-base sm:text-lg tracking-wider">
        Do I need approval or an NOC to renovate my bathroom in Dubai?
      </h3>
      <p className="font-play text-sm sm:text-base text-white pt-2 leading-relaxed">
        This is dependent on the scale of the project. Fixture replacements will normally require approval from the property management building company. Any demolition works or water plumbing/ drainage alterations will normally require a developer NOC (we are directly dealing with Emaar and Damac) or Trakhees approval in places like Palm Jumeirah.
      </p>
    </div>

    <div>
      <h3 className="text-[#caa193] font-conthrax text-base sm:text-lg tracking-wider">
        Can you convert a bathtub into a walk-in shower?
      </h3>
      <p className="font-play text-sm sm:text-base text-white pt-2 leading-relaxed">
        Yes, this is one of the most common single requests on this page. It includes drainage repositioning, waterproofing, tiling, and shower glass installation, usually priced within our Standard or Premium renovation tiers depending on finish level. We also handle the reverse: reinstating a bathtub for owners preparing a unit for resale.
      </p>
    </div>

    <div>
      <h3 className="text-[#caa193] font-conthrax text-base sm:text-lg tracking-wider">
        Where do I shower during a bathroom renovation?
      </h3>
      <p className="font-play text-sm sm:text-base text-white pt-2 leading-relaxed">
        However, for homes that have more than one bathroom, we schedule our work such that you can use it during the entire process. But for homes that have only one bathroom, be prepared to be out of its use for 1–2 weeks during the demolition and tiling process.
      </p>
    </div>

    <div>
      <h3 className="text-[#caa193] font-conthrax text-base sm:text-lg tracking-wider">
        What warranty do you offer on bathroom renovation work?
      </h3>
      <p className="font-play text-sm sm:text-base text-white pt-2 leading-relaxed">
        With every WE DO bathroom renovation, workmanship and warranty terms are clearly defined in the fixed-price contract before work begins. After handover, WE DO remains your point of contact for any covered workmanship issues, with the applicable warranty period and terms set out in your agreement.
      </p>
    </div>

    <div>
      <h3 className="text-[#caa193] font-conthrax text-base sm:text-lg tracking-wider">
        Who is the best bathroom renovation company in Dubai?
      </h3>
      <p className="font-play text-sm sm:text-base text-white pt-2 leading-relaxed">
        The right choice depends on your priorities, but look for DED registration, ISO certification, a fixed-price written contract, and a contractor who shows you the waterproofing before it's tiled over. WE DO Interior Design &amp; Fit-Out meets all four, with 250+ completed projects and 15+ years in the Dubai market.
      </p>
    </div>
  </div>
</div>

      </div>
    </section>
  );
};

export default DProjects;