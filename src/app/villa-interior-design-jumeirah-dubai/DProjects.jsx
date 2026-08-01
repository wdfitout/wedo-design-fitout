'use client';

import React from 'react';
import Image from 'next/image';

const textImage = {
  src: '/images/2wresidence (5).webp',
  link: '/office-interior-design-trends-in-business-bay',
  title: 'Interior Design Trends In Business Bay'
};

const galleryImages = [
  { src: '/images/dbckapt (9).png', link: '/dubai-creek-2-bedroom-apartment', title: ' 2 BEDROOM APARTMENT DUBAI Business Bay' },
  { src: '/images/address-harbour-point-small-sitting-area-design-dubai-creek-harbour.png', link: '/emaar-harbour-point-apartment-dubai', title: 'EMAAR HARBOUR POINT APARTMENT FIT-OUT' },
];

const TestimonialCarousel = () => {
  const testimonials = [
    
    {
      quote: "I have worked with WeDo Interior Design & Fit Out on several projects, and I have consistently been impressed by the quality of their work. Their teams demonstrate a high level of professionalism, attention to detail, and genuine responsiveness throughout the entire process. What I particularly appreciate is their ability to listen and adapt, ensuring that all expectations are properly addressed. Beyond the execution phase, their support does not stop once the works are completed, which is a rare and valuable quality. The relationship is built on mutual trust, and their flexibility has been greatly appreciated. Overall, a reliable and committed partner, and I would definitely recommend their services.",
      author: "by Carine landrieux ⭐⭐⭐⭐⭐",
    },
  ];

  const [idx, setIdx] = React.useState(0);
  const [slide, setSlide] = React.useState("in");

  const goTo = (newIdx) => {
    setSlide("out");
    setTimeout(() => {
      setIdx((newIdx + testimonials.length) % testimonials.length);
      setSlide("in");
    }, 500);
  };

  React.useEffect(() => {
    const timer = setInterval(() => {
      goTo(idx + 1);
    }, 6000);
    return () => clearInterval(timer);
  }, [idx]);

  return (
    <div className="bg-black-300 p-6 rounded-lg border-l-4 border-[#caa193] my-6 font-play text-white">
      <h2 className="text-lg font-conthrax text-[#caa193] uppercase tracking-wider mb-3 text-justify">
        What Our Clients Say
      </h2>

      <div
        style={{
          transition: "opacity 0.5s ease, transform 0.5s ease",
          opacity: slide === "in" ? 1 : 0,
          transform: slide === "in" ? "translateX(0px)" : "translateX(60px)",
          minHeight: "120px",
        }}
      >
        <p className="italic text-sm sm:text-base text-gray-300 text-justify">
          "{testimonials[idx].quote}"
        </p>
        <span className="block text-right text-xs font-conthrax text-[#caa193] mt-2">
          — {testimonials[idx].author}
        </span>
      </div>

      <div className="flex items-center justify-between mt-4">
        <button
          onClick={() => goTo(idx - 1)}
          className="w-8 h-8 rounded-full border border-[#caa193] text-[#caa193] flex items-center justify-center text-lg hover:bg-[#caa193] hover:text-black transition-colors"
        >
          ‹
        </button>
        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`w-2 h-2 rounded-full transition-colors ${
                i === idx ? "bg-[#caa193]" : "bg-gray-600"
              }`}
            />
          ))}
        </div>
        <button
          onClick={() => goTo(idx + 1)}
          className="w-8 h-8 rounded-full border border-[#caa193] text-[#caa193] flex items-center justify-center text-lg hover:bg-[#caa193] hover:text-black transition-colors"
        >
          ›
        </button>
      </div>
    </div>
  );
};

const DProjects = () => {
  return (
    <section className="px-6 py-5 bg-black-200">
      
     {/* New Section: Why Jumeirah Villas Need a Different Design Approach */}
<div className="lg:max-w-[80%] mx-auto bg-[#111111] border border-[#caa193]/20 p-6 sm:p-10 rounded shadow space-y-8 mb-12 text-left">
  
  {/* H2 Section */}
  <div className="space-y-4">
    <h2 className="text-xl sm:text-2xl md:text-3xl font-conthrax text-[#caa193] uppercase">
      Why Jumeirah Villas Need a Different Design Approach
    </h2>
    <p className="text-sm sm:text-base font-play text-white text-justify leading-relaxed">
      Two things set a Jumeirah villa project apart from almost anywhere else in Dubai. The first is age: layouts and finishes from the 1990s and 2000s rarely match how a family lives today, and wiring from that era predates any concept of a smart home. The second is plot size, Jumeirah villas typically sit on larger plots than newer communities, so gardens, pools, and multiple living zones are part of the brief far more often than on an apartment or townhouse project.
    </p>
  </div>

  {/* H3 Section */}
  <div className="space-y-4 pt-8 border-t border-gray-800">
    <h3 className="text-lg sm:text-xl font-conthrax text-[#caa193] uppercase">
      Interior Design vs. Renovation: Where the Line Sits
    </h3>
    <p className="text-sm sm:text-base font-play text-white text-justify leading-relaxed">
      One distinction worth making clear up front: interior design, the focus of this page, covers layout, materials, furniture, lighting, and styling. Renovation means structural work: moving plumbing or electrical points, removing walls, extensions. If your villa needs the structural side, our <b className="text-[#caa193]"><a href="https://wedointerior.ae/villa-renovation-dubai">Villa Renovation Dubai</a></b> page covers that directly. Many Jumeirah projects need both, and because our civil works and design teams work from the same brief in-house, that becomes one coordinated job instead of two separate hires.
    </p>
  </div>

  {/* Comparison Table Section */}
  <div className="pt-8 border-t border-gray-800">
    <h3 className="text-base sm:text-lg font-conthrax text-white uppercase mb-4">
      What You're Deciding
    </h3>
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse text-xs sm:text-sm font-play text-white">
        <thead>
          <tr className="bg-[#1a1a1a] text-[#caa193] font-conthrax">
            <th className="p-3 border border-gray-800">Feature</th>
            <th className="p-3 border border-gray-800">Interior Design (this page)</th>
            <th className="p-3 border border-gray-800">Renovation</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-800">
          <tr>
            <td className="p-3 border border-gray-800 font-semibold text-[#caa193]">What changes</td>
            <td className="p-3 border border-gray-800 text-gray-300">Layout, materials, furniture, lighting, styling</td>
            <td className="p-3 border border-gray-800 text-gray-300">Structure, plumbing, electrical, walls, extensions</td>
          </tr>
          <tr>
            <td className="p-3 border border-gray-800 font-semibold text-[#caa193]">Best fit</td>
            <td className="p-3 border border-gray-800 text-gray-300">New-build or recently refreshed villas</td>
            <td className="p-3 border border-gray-800 text-gray-300">Established villas (15+ years) with outdated systems or layouts</td>
          </tr>
          <tr>
            <td className="p-3 border border-gray-800 font-semibold text-[#caa193]">Garden & outdoor work</td>
            <td className="p-3 border border-gray-800 text-gray-300">Furnishing, planting, and styling only</td>
            <td className="p-3 border border-gray-800 text-gray-300">Hardscaping, pool structure, and drainage changes</td>
          </tr>
          <tr>
            <td className="p-3 border border-gray-800 font-semibold text-[#caa193]">Majlis changes</td>
            <td className="p-3 border border-gray-800 text-gray-300">Restyling within the existing footprint</td>
            <td className="p-3 border border-gray-800 text-gray-300">Reconfiguring or enlarging the room itself</td>
          </tr>
          <tr>
            <td className="p-3 border border-gray-800 font-semibold text-[#caa193]">Approval needed</td>
            <td className="p-3 border border-gray-800 text-gray-300">Sometimes (cosmetic changes are usually exempt)</td>
            <td className="p-3 border border-gray-800 text-gray-300">Almost always, DCD/DM and, where applicable, developer NOC</td>
          </tr>
          <tr>
            <td className="p-3 border border-gray-800 font-semibold text-[#caa193]">Handled in-house by</td>
            <td className="p-3 border border-gray-800 text-gray-300">Our design & decoration teams</td>
            <td className="p-3 border border-gray-800 text-gray-300">Our civil works team</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

</div>

   {/* Established vs. New-Build Villas Block */}
<div className="max-w-7xl mx-auto space-y-6">
  <h2 className="text-center text-3xl font-conthrax text-white py- uppercase">
    Established vs. New-Build Villas: Where Your Project Starts
  </h2>
  
  <p className="text-sm sm:text-base font-play text-white text-justify leading-relaxed">
    Age, not size, is the first thing WE DO Interior Design & Fit-Out weighs when scoping a Jumeirah villa design project.
  </p>

  <div className="grid md:grid-cols-2 gap-10 items-center mb-12">
    {/* Left Column - Equal Spacing with space-y-6 */}
    <div className="space-y-6 text-white font-play">
      
      <div className="space-y-2">
        <h3 className="text-lg sm:text-xl font-conthrax text-[#caa193] uppercase">
          Established Jumeirah Villas (Roughly 15–30+ Years Old)
        </h3>
        <p className="text-sm sm:text-base font-play text-white text-justify leading-relaxed">
          Concentrated in Jumeirah 1, Jumeirah 2, and parts of Jumeirah 3 and Umm Suqeim. These usually need more than a styling refresh: original layouts that predate open-plan living, finishes and fixtures dated to the villa's original handover, and electrical or plumbing infrastructure that often needs a full condition assessment before design starts. That assessment is what saves real money later, and it's also where our team checks interior design approvals Dubai requirements against DCD and Dubai Municipality rules, before anything gets priced.
        </p>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg sm:text-xl font-conthrax text-[#caa193] uppercase">
          Recently Rebuilt or New-Build Villas
        </h3>
        <p className="text-sm sm:text-base font-play text-white text-justify leading-relaxed">
          More common in newer pockets of Al Wasl, La Mer, and areas near City Walk. Layout and systems are already current, so the scope narrows to a design and furnishing project.
        </p>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg sm:text-xl font-conthrax text-[#caa193] uppercase">
          How Villa Size Shapes the Brief
        </h3>
        <p className="text-sm sm:text-base font-play text-white text-justify leading-relaxed">
          Villa size shapes the brief within either category: 3–4 bedroom villas are the most common footprint across Jumeirah 2 and Jumeirah 3; 5 bedroom villas are common in Jumeirah 1 and on larger Al Wasl plots; and 6+ bedroom or compound-style villas are usually on the older, larger plots, sometimes with separate staff quarters and multiple living areas.
        </p>
      </div>

    </div>

    {/* Right Column - Image */}
    <div className="rounded-lg overflow-hidden shadow-md">
      <Image
        src="/images/VillaInterior (5).jpeg"
        alt="Round luxury bed with fairy lights"
        width={600}
        height={400}
        className="w-full h-auto object-cover"
      />
    </div>
  </div>
</div>
     

      {/* Bottom CTA Section */}
      <div className="bg-[#f5ede5] py-10 text-center space-y-4 mb-12">
        <h3 className="text-xs sm:text-xl font-conthrax uppercase text-black">
          Get In Touch With Us
        </h3>
        <p className="text-sm sm:text-base font-play text-black text-center">
          We are located in the world's luxury city, Dubai        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4 px-4">
          <a
            href="https://wa.me/971588075603"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-green-500 text-white font-play text-sm rounded w-full sm:w-auto text-center"
          >
            ✅ Request availability by WhatsApp
          </a>
          <a
            href="mailto:info@wedointerior.ae"
            className="px-6 py-3 bg-[#caa193] text-white font-play text-sm rounded w-full sm:w-auto text-center"
          >
            ✉️ Request availability by E-mail
          </a>
        </div>
      </div>

      {/* Why Families Choose Us & Testimonial Section */}
      <div className="lg:max-w-[90%] mx-auto bg-black p-6 sm:p-10 rounded shadow space-y-6 mb-12 mt-12">
                <div className="space-y-6 text-white font-play">
          
        </div>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="rounded-lg overflow-hidden shadow-md">
            <Image
              src="/images/VillaInterior (6).jpeg"
              alt="VillaInterior"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
          <TestimonialCarousel />
        </div>
      </div>

      {/* Serving Areas & FAQs Section */}
      <div className="lg:max-w-[80%] mx-auto flex flex-col lg:flex-row items-start gap-6 mb-12">
        <div className="w-full space-y-4">
          <div className="space-y-8">
            
          {/* Room-by-Room, Jumeirah Style */}
<section className="max-w-7xl mx-auto mb-12 px-4 sm:px-6 space-y-16">
  <div className="pt-8 border-t border-gray-800 space-y-8">
    <div className="space-y-4">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-conthrax text-[#caa193] uppercase tracking-wide">
        Room-by-Room, Jumeirah Style
      </h2>
      <p className="text-sm sm:text-base font-play text-white text-justify leading-relaxed">
        A villa's real advantage over an apartment is separation: every room can serve one purpose instead of doubling up. Here's how one of the <b className="text-[#caa193]"><a href="https://www.google.com/search?client=ms-android-transsion&hs=CFgV&sca_esv=46c74ef3a37b7673&sxsrf=APpeQnsGiWcxfBEi3LmISPgtFkViXYyStA:1785325285405&kgmid=/g/11pyc3sd1k&q=Interior+Design+Company+Dubai+-+WeDo+Interior+Design+%26+Fit+out&shem=epsd1,ltae,rimspwouoe&shndl=30&source=sh/x/loc/act/m1/2&kgs=0425a26d984e7c56&utm_source=epsd1,ltae,rimspwouoe,sh/x/loc/act/m1/2">best interior design companies</a></b>, WE DO Interior Design & Fit-Out, typically brings each room together, style included:
      </p>
    </div>

    <div className="space-y-8 text-white font-play">
      {/* Living Room */}
      <div className="space-y-2">
        <h3 className="text-lg sm:text-xl font-conthrax text-[#caa193] uppercase">
          Living Room
        </h3>
        <p className="text-sm sm:text-base text-justify leading-relaxed">
          Usually where the most statement materials go; a neutral base of beige, white, and grey layered with gold, bronze, or deep wood accents is the most requested direction in <b className="text-[#caa193]"><a href="https://wedointerior.ae/living-room-interior-design-jumeirah-dubai">living room interior design in Jumeirah</a></b> specifically, since it photographs well and ages better than a fully trend-led scheme.
        </p>
      </div>

      {/* Majlis */}
      <div className="space-y-2">
        <h3 className="text-lg sm:text-xl font-conthrax text-[#caa193] uppercase">
          Majlis
        </h3>
        <p className="text-sm sm:text-base text-justify leading-relaxed">
          The formal reception room found in most Jumeirah villas, kept traditionally separate from the family living room. Majlis interior design Jumeirah projects follow different rules than a Western-style living room: majlis seating design Dubai typically favors perimeter or facing arrangements over the centered sofa layout used in a living room, geometric patterning and richer, warmer palettes suit the room even inside an otherwise modern villa, and ceiling or wall detailing usually goes further here, in keeping with its more formal role. Majlis styling in Jumeirah is one of the most frequently requested single-room briefs, separate from a full-villa project.
        </p>
      </div>

      {/* Master Bedroom & Bedrooms */}
      <div className="space-y-2">
        <h3 className="text-lg sm:text-xl font-conthrax text-[#caa193] uppercase">
          Master Bedroom & Bedrooms
        </h3>
        <p className="text-sm sm:text-base text-justify leading-relaxed">
          A private retreat styled apart from guest-facing rooms, with wardrobes built into the room rather than freestanding.
        </p>
      </div>

      {/* Kitchen & Dining */}
      <div className="space-y-2">
        <h3 className="text-lg sm:text-xl font-conthrax text-[#caa193] uppercase">
          Kitchen & Dining
        </h3>
        <p className="text-sm sm:text-base text-justify leading-relaxed">
          Many Jumeirah villas run both a show kitchen and a separate working "wet" kitchen; design has to account for both, not just the one guests see.
        </p>
      </div>

      {/* Home Office */}
      <div className="space-y-2">
        <h3 className="text-lg sm:text-xl font-conthrax text-[#caa193] uppercase">
          Home Office
        </h3>
        <p className="text-sm sm:text-base text-justify leading-relaxed">
          A request that has grown steadily since 2020, often converted from an underused formal room.
        </p>
      </div>

      {/* Maid's Room */}
      <div className="space-y-2">
        <h3 className="text-lg sm:text-xl font-conthrax text-[#caa193] uppercase">
          Maid's Room
        </h3>
        <p className="text-sm sm:text-base text-justify leading-relaxed">
          A genuine, common requirement in Dubai villas, and one we treat as a properly designed room rather than an afterthought.
        </p>
      </div>

      {/* Outdoor Living, Garden & Pool Area */}
      <div className="space-y-2">
        <h3 className="text-lg sm:text-xl font-conthrax text-[#caa193] uppercase">
          Outdoor Living, Garden & Pool Area
        </h3>
        <p className="text-sm sm:text-base text-justify leading-relaxed">
          The space most apartments simply don't have. Outdoor living design Dubai for a Jumeirah villa typically covers seating and shade suited to year-round outdoor use, an outdoor kitchen or barbecue area where the plot allows, and planting chosen to hold up against Dubai's heat, styled modern or classic-luxury to match the rest of the villa.
        </p>
      </div>
    </div>
  </div>

  {/* Materials We Work With & Project Types Section */}
  <div className="pt-8 border-t border-gray-800 space-y-8">
    <div className="space-y-4">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-conthrax text-[#caa193] uppercase tracking-wide">
        Materials We Work With
      </h2>
      <p className="text-sm sm:text-base font-play text-white text-justify leading-relaxed">
        Our joinery, wardrobes, kitchen cabinetry, built-in storage, comes out of our own factory rather than a third-party supplier, which is the difference between picking a material off a mood board and actually controlling how it turns out once installed. It's also what separates a design-only service from genuine villa fit-out Jumeirah delivery, where the finished product matches what was actually specified.
      </p>
    </div>

    <div className="space-y-6 text-white font-play">
      {/* Marble, Stone & Flooring */}
      <div className="space-y-2">
        <h3 className="text-lg sm:text-xl font-conthrax text-[#caa193] uppercase">
          Marble, Stone & Flooring
        </h3>
        <p className="text-sm sm:text-base text-justify leading-relaxed">
          Natural and engineered marble, chosen for how it holds up under Dubai's heat and daily villa use, not just for how it photographs, used across floors in living, dining, and reception areas, kitchen islands and countertops, and feature walls in the majlis or living room.
        </p>
      </div>

      {/* Bespoke Joinery */}
      <div className="space-y-2">
        <h3 className="text-lg sm:text-xl font-conthrax text-[#caa193] uppercase">
          Bespoke Joinery
        </h3>
        <p className="text-sm sm:text-base text-justify leading-relaxed">
          Bespoke joinery Dubai produced in-house, so a design detail agreed on a mood board actually matches what gets installed, wardrobes and dressing-room storage, kitchen cabinetry, and built-in storage or TV units, all made to the room's exact dimensions rather than adapted from a standard size.
        </p>
      </div>

      {/* Lighting & Textiles */}
      <div className="space-y-2">
        <h3 className="text-lg sm:text-xl font-conthrax text-[#caa193] uppercase">
          Lighting & Textiles
        </h3>
        <p className="text-sm sm:text-base text-justify leading-relaxed">
          Designer lighting is treated as a room's focal point rather than an afterthought, with statement fixtures reserved for living rooms and majlis spaces. Premium textiles, linen, bouclé, performance velvet are chosen with Dubai's climate and dust levels in mind, not just color and texture.
        </p>
      </div>

      {/* Smart-Home Wiring & Sustainable Choices */}
      <div className="space-y-2">
        <h3 className="text-lg sm:text-xl font-conthrax text-[#caa193] uppercase">
          Smart-Home Wiring & Sustainable Choices
        </h3>
        <p className="text-sm sm:text-base text-justify leading-relaxed">
          Smart home interior design Dubai is increasingly specified at concept stage rather than added later, since retrofitting after joinery is installed typically costs more, app-controlled lighting scenes, zoned climate control, and motorized blinds or integrated security all go into the plan from day one. Sustainable choices, locally-sourced materials, energy-efficient LED layouts, water-saving fixtures, get the same up-front planning.
        </p>
      </div>
    </div>
  </div>
</section>
          </div>
<section className="max-w-7xl mx-auto mb-12 px-4 sm:px-6 space-y-16">
 
  {/* Villa Interior Design Process Section */}
  <div className="pt-8 border-t border-gray-800 space-y-8">
    <div className="space-y-4">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-conthrax text-[#caa193] uppercase tracking-wide">
        Our Villa Interior Design Process, Step by Step
      </h2>
      <p className="text-sm sm:text-base font-play text-white text-justify leading-relaxed">
        A Jumeirah villa interior design project runs through six stages, start to finish.
      </p>
    </div>

    <div className="space-y-6 text-white font-play">
      {/* Step 1 */}
      <div className="space-y-2">
        <h3 className="text-lg sm:text-xl font-conthrax text-[#caa193] uppercase">
          Step 1: Discovery & Site Walkthrough
        </h3>
        <p className="text-sm sm:text-base text-justify leading-relaxed">
          Our team walks the entire villa room by room, noting existing layouts, finishes, and the condition of wiring and plumbing, especially important on an established Jumeirah villa where the original systems can be 15-30 years old. We also flag early whether DCD, Dubai Municipality, or developer approval is likely to apply, so it's factored into the budget and timeline from day one instead of surfacing as a surprise later. You leave this stage with a clear picture of what the villa actually needs, not just how it looks on the surface.
        </p>
      </div>

      {/* Step 2 */}
      <div className="space-y-2">
        <h3 className="text-lg sm:text-xl font-conthrax text-[#caa193] uppercase">
          Step 2: Concept & Mood Board
        </h3>
        <p className="text-sm sm:text-base text-justify leading-relaxed">
          We develop 2-3 distinct design directions covering the whole villa, room by room, not one mood board stretched thin across every space. Each direction sets out material references, a color and finish palette, and how the majlis, living areas, and bedrooms will read as one coherent home rather than disconnected rooms. You review and refine at this stage, before anything moves into sourcing, so changes happen on paper, not after materials are already ordered.
        </p>
      </div>

      {/* Step 3 */}
      <div className="space-y-2">
        <h3 className="text-lg sm:text-xl font-conthrax text-[#caa193] uppercase">
          Step 3: Material & Furniture Curation
        </h3>
        <p className="text-sm sm:text-base text-justify leading-relaxed">
          Once a direction is approved, materials and furniture move into sourcing and production through our own joinery factory and supplier network, marble, textiles, lighting, and bespoke cabinetry all specified against the approved concept, not chosen loosely afterward. Custom and imported pieces typically carry their own lead time, often 12-20 weeks depending on origin and complexity, which is why this stage starts as early in the project as possible. Anything needing approval documentation runs in parallel with this stage rather than waiting for it to finish first.
        </p>
      </div>

      {/* Step 4 */}
      <div className="space-y-2">
        <h3 className="text-lg sm:text-xl font-conthrax text-[#caa193] uppercase">
          Step 4: Documentation & Approvals
        </h3>
        <p className="text-sm sm:text-base text-justify leading-relaxed">
          Where DCD, Dubai Municipality, or a private developer's NOC applies, our dedicated approvals team prepares and submits the documentation on your behalf, you're not the one chasing paperwork or translating requirements. Processing typically runs about 2-8 weeks depending on the approval type and community, and we build this into the overall project timeline rather than treating it as a separate, disconnected step. You get visibility into where each approval stands, without needing to manage the relationship with DCD or DM yourself.
        </p>
      </div>

      {/* Step 5 */}
      <div className="space-y-2">
        <h3 className="text-lg sm:text-xl font-conthrax text-[#caa193] uppercase">
          Step 5: Execution & On-Site Supervision
        </h3>
        <p className="text-sm sm:text-base text-justify leading-relaxed">
          Our own civil works, decoration, and joinery teams execute on site, coordinated by one supervisor who's accountable for the whole job, not four separate crews each reporting to no one in particular. This is where having every trade in-house genuinely matters: a joinery adjustment or a lighting change mid-installation gets resolved the same day, instead of waiting on a subcontractor to be re-briefed and rescheduled. You get regular progress updates through this stage rather than silence until handover.
        </p>
      </div>

      {/* Step 6 */}
      <div className="space-y-2">
        <h3 className="text-lg sm:text-xl font-conthrax text-[#caa193] uppercase">
          Step 6: Styling & Handover
        </h3>
        <p className="text-sm sm:text-base text-justify leading-relaxed">
          Our styling team finishes every room, furniture placement, soft furnishings, art, and final lighting adjustments, so the villa is genuinely move-in ready, not just structurally complete. We then walk the entire property with you room by room before handover, addressing anything that needs a final touch. Aftercare support continues afterward, for the practical issues that only show up once a family is actually living in the space.
        </p>
      </div>
    </div>
  </div>
</section>
<section className="max-w-7xl mx-auto mb-12 px-4 sm:px-6 space-y-16">
  {/* Villa Interior Design Trends Section */}
  <div className="pt-8 border-t border-gray-800 space-y-8">
    <div className="space-y-4">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-conthrax text-[#caa193] uppercase tracking-wide">
        Villa Interior Design Trends in Jumeirah Right Now
      </h2>
      <p className="text-sm sm:text-base font-play text-white text-justify leading-relaxed">
        A few directions keep showing up across current Jumeirah villa briefs, and together they're shaping what a modern villa interior design Jumeirah project looks like in 2026.
      </p>
    </div>

    <div className="space-y-6 text-white font-play">
      {/* Trend 1 */}
      <div className="space-y-2">
        <h3 className="text-lg sm:text-xl font-conthrax text-[#caa193] uppercase">
          Warm Minimalism Over Stark Minimalism
        </h3>
        <p className="text-sm sm:text-base text-justify leading-relaxed">
          Neutral bases (beige, warm white, taupe) paired with textured wood, woven fabrics, and stone, rather than the colder all-white schemes popular a few years ago.
        </p>
      </div>

      {/* Trend 2 */}
      <div className="space-y-2">
        <h3 className="text-lg sm:text-xl font-conthrax text-[#caa193] uppercase">
          Indoor-Outdoor Continuity
        </h3>
        <p className="text-sm sm:text-base text-justify leading-relaxed">
          Matching flooring, sightlines, and material tones between the living areas and the garden or pool deck, so the outdoor space reads as a genuine extension of the home rather than a separate zone.
        </p>
      </div>

      {/* Trend 3 */}
      <div className="space-y-2">
        <h3 className="text-lg sm:text-xl font-conthrax text-[#caa193] uppercase">
          A Modern Update for the Majlis, Without Losing Formality
        </h3>
        <p className="text-sm sm:text-base text-justify leading-relaxed">
          Geometric detailing and richer accent colors layered onto cleaner, more contemporary furniture shapes.
        </p>
      </div>

      {/* Trend 4 */}
      <div className="space-y-2">
        <h3 className="text-lg sm:text-xl font-conthrax text-[#caa193] uppercase">
          Smart-Home Systems Specified From Day One
        </h3>
        <p className="text-sm sm:text-base text-justify leading-relaxed">
          Lighting scenes, zoned climate control, and security built into the concept stage rather than retrofitted, since Jumeirah's older villa stock makes late additions more disruptive.
        </p>
      </div>

      {/* Trend 5 */}
      <div className="space-y-2">
        <h3 className="text-lg sm:text-xl font-conthrax text-[#caa193] uppercase">
          Locally-Sourced and Sustainable Materials
        </h3>
        <p className="text-sm sm:text-base text-justify leading-relaxed">
          Increasingly a client-led request rather than a design-team suggestion, particularly for timber, stone, and lighting.
        </p>
      </div>

      {/* Trend 6 */}
      <div className="space-y-2">
        <h3 className="text-lg sm:text-xl font-conthrax text-[#caa193] uppercase">
          Statement Lighting as a Room's Anchor Piece
        </h3>
        <p className="text-sm sm:text-base text-justify leading-relaxed">
          A shift away from lighting as a last-minute addition, especially in living rooms and majlis spaces.
        </p>
      </div>
    </div>
  </div>

  {/* Villa Interior Design Costs Section */}
  <div className="pt-8 border-t border-gray-800 space-y-8">
    <div className="space-y-4">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-conthrax text-[#caa193] uppercase tracking-wide">
        What Villa Interior Design Costs in Jumeirah
      </h2>
      <p className="text-sm sm:text-base font-play text-white text-justify leading-relaxed">
        Cost scales with villa size, age, and finish level more than with the exact sub-community. Based on current, independently published Dubai market data, the cost of villa interior design in Jumeirah with WE DO Interior Design & Fit-Out falls roughly into these approximate ranges, from a standard finish up to a full luxury villa interior design Jumeirah Dubai brief with imported materials and bespoke joinery throughout.
      </p>
    </div>

    {/* Cost by Villa Size Boxed Table (Key Facts Style) */}
    <div className="bg-black border border-[#caa193] text-white rounded-lg p-6 w-full font-play shadow-xl space-y-4">
      <h3 className="font-conthrax text-base md:text-lg uppercase text-[#caa193] tracking-wider border-b border-[#caa193]/30 pb-2">
        Cost by Villa Size
      </h3>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse text-xs sm:text-sm text-gray-200">
          <thead>
            <tr className="border-b border-[#caa193]/30 text-[#caa193] font-conthrax uppercase tracking-wider">
              <th className="pb-3 pr-4">Villa Size / Scope</th>
              <th className="pb-3 px-4">Approximate Dubai Market Range (AED)</th>
              <th className="pb-3 pl-4">Typically Includes</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#caa193]/20">
            <tr>
              <td className="py-3 pr-4 font-semibold text-white">3–4 Bedroom Villa, standard finish</td>
              <td className="py-3 px-4 text-[#caa193]">around 80,000 – 250,000</td>
              <td className="py-3 pl-4 text-gray-300">Furniture, styling, lighting, standard joinery</td>
            </tr>
            <tr>
              <td className="py-3 pr-4 font-semibold text-white">5+ Bedroom Villa</td>
              <td className="py-3 px-4 text-[#caa193]">around 150,000 – 400,000</td>
              <td className="py-3 pl-4 text-gray-300">Full furnishing, custom joinery, kitchen and majlis upgrade</td>
            </tr>
            <tr>
              <td className="py-3 pr-4 font-semibold text-white">Fully Bespoke / Luxury Turnkey Villa</td>
              <td className="py-3 px-4 text-[#caa193]">around 600,000 – 2,000,000+</td>
              <td className="py-3 pl-4 text-gray-300">Imported marble, full custom joinery, premium lighting, smart home layer</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    {/* Approval & NOC Costs Boxed Table (Key Facts Style) */}
    <div className="bg-black border border-[#caa193] text-white rounded-lg p-6 w-full font-play shadow-xl space-y-4">
      <h3 className="font-conthrax text-base md:text-lg uppercase text-[#caa193] tracking-wider border-b border-[#caa193]/30 pb-2">
        Approval & NOC Costs
      </h3>
      <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
        Approval costs sit on top of design and fit-out, and are typically separate:
      </p>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse text-xs sm:text-sm text-gray-200">
          <thead>
            <tr className="border-b border-[#caa193]/30 text-[#caa193] font-conthrax uppercase tracking-wider">
              <th className="pb-3 pr-4">Approval Item</th>
              <th className="pb-3 pl-4">Typical Range / Time</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#caa193]/20">
            <tr>
              <td className="py-3 pr-4 font-semibold text-white">NOC application</td>
              <td className="py-3 pl-4 text-[#caa193]">around AED 1,500 – 5,000</td>
            </tr>
            <tr>
              <td className="py-3 pr-4 font-semibold text-white">Structural modification permit</td>
              <td className="py-3 pl-4 text-[#caa193]">around AED 3,000 – 15,000+</td>
            </tr>
            <tr>
              <td className="py-3 pr-4 font-semibold text-white">Permit processing time</td>
              <td className="py-3 pl-4 text-[#caa193]">2 – 8 weeks</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="pt-3 border-t border-[#caa193]/30 text-xs sm:text-sm text-gray-300 leading-relaxed">
        Our approvals team manages this rather than leaving you to navigate DCD, DM, or developer paperwork alone. These are Dubai-market ranges, not a fixed quote, book a walkthrough for an exact number in writing.
      </div>
    </div>
  </div>

  {/* Common Mistakes Section */}
  <div className="pt-8 border-t border-gray-800 space-y-8">
    <div className="space-y-4">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-conthrax text-[#caa193] uppercase tracking-wide">
        Common Mistakes That Change the Budget
      </h2>
      <p className="text-sm sm:text-base font-play text-white text-justify leading-relaxed">
        The gap between a smooth villa design project in Jumeirah and an expensive one usually comes down to the same handful of decisions:
      </p>
    </div>

    <ul className="list-disc list-inside space-y-3 text-sm sm:text-base font-play text-white leading-relaxed">
      <li>Not confirming whether DCD, DM, or developer approval is needed before budgeting — especially common on established Jumeirah villas where the original permit history isn't always on hand</li>
      <li>Treating the majlis like an ordinary living room — getting seating and material expectations wrong here is one of the more visible mistakes in a Jumeirah villa</li>
      <li>Leaving the outdoor or garden brief as an afterthought — often the single most-used space on the property</li>
      <li>Agreeing verbally instead of getting a fixed, written quote — still the single most common cause of cost overruns</li>
      <li>Coordinating a designer, civil contractor, decorator, and joinery workshop separately — four parties to manage, and no one accountable if something goes wrong</li>
      <li>Wiring smart-home features in after joinery is installed — a retrofit that typically costs noticeably more than planning for it up front</li>
    </ul>
  </div>

  {/* Why Jumeirah Villa Owners Choose We Do Section */}
  <div className="pt-8 border-t border-gray-800 space-y-8">
    <div className="space-y-4">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-conthrax text-[#caa193] uppercase tracking-wide">
        Why Jumeirah Villa Owners Choose We Do
      </h2>
      <p className="text-sm sm:text-base font-play text-white text-justify leading-relaxed">
        One distinction drives most of what's above: one roof, every trade in-house.
      </p>
    </div>

    <div className="space-y-6 text-white font-play">
      {/* Certifications & Recognition */}
      <div className="space-y-2">
        <h3 className="text-lg sm:text-xl font-conthrax text-[#caa193] uppercase">
          Certifications & Recognition
        </h3>
        <p className="text-sm sm:text-base text-justify leading-relaxed">
          ISO 45001:2018, ISO 14001:2015, and ISO 9001:2015 certified, formal health & safety, environmental, and quality management systems, not just a claim, plus a Luxury Style Awards 2026 win.
        </p>
      </div>

      {/* One Team, One Contract */}
      <div className="space-y-2">
        <h3 className="text-lg sm:text-xl font-conthrax text-[#caa193] uppercase">
          One Team, One Contract
        </h3>
        <p className="text-sm sm:text-base text-justify leading-relaxed">
          In practice, that means four things: design, civil works, decoration, and joinery under one contract; a dedicated approvals team handling DCD, Dubai Municipality, and private-developer sign-off across Emaar, Damac, and other communities; our own joinery factory instead of an outsourced one; and a fixed, written quote before work starts.
        </p>
      </div>
    </div>

    {/* Comparison Table (Key Facts Style) */}
    <div className="bg-black border border-[#caa193] text-white rounded-lg p-6 w-full font-play shadow-xl space-y-4">
      <h3 className="font-conthrax text-base md:text-lg uppercase text-[#caa193] tracking-wider border-b border-[#caa193]/30 pb-2">
        Comparison Matrix
      </h3>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse text-xs sm:text-sm text-gray-200">
          <thead>
            <tr className="border-b border-[#caa193]/30 text-[#caa193] font-conthrax uppercase tracking-wider">
              <th className="pb-3 pr-4">Aspect</th>
              <th className="pb-3 px-4">Separate Vendors</th>
              <th className="pb-3 pl-4">We Do — One Roof</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#caa193]/20">
            <tr>
              <td className="py-3 pr-4 font-semibold text-white">Design, civil works, decoration, joinery</td>
              <td className="py-3 px-4 text-gray-400">Four separate companies to coordinate</td>
              <td className="py-3 pl-4 text-[#caa193] font-bold">One team, one contract</td>
            </tr>
            <tr>
              <td className="py-3 pr-4 font-semibold text-white">Approvals (DCD/DM/developer)</td>
              <td className="py-3 px-4 text-gray-400">Usually your responsibility to chase</td>
              <td className="py-3 pl-4 text-[#caa193] font-bold">Handled by our dedicated approvals team</td>
            </tr>
            <tr>
              <td className="py-3 pr-4 font-semibold text-white">Custom furniture production</td>
              <td className="py-3 px-4 text-gray-400">Outsourced, variable quality control</td>
              <td className="py-3 pl-4 text-[#caa193] font-bold">Produced in our own factory</td>
            </tr>
            <tr>
              <td className="py-3 pr-4 font-semibold text-white">Accountability if something goes wrong</td>
              <td className="py-3 px-4 text-gray-400">Passed between vendors</td>
              <td className="py-3 pl-4 text-[#caa193] font-bold">One point of contact throughout</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

  

    {/* Footer paragraph */}
    <p className="text-sm sm:text-base font-play text-white text-justify leading-relaxed">
      Our project work spans Jumeirah 1, Jumeirah 2, Jumeirah 3, Umm Suqeim, Al Wasl, La Mer, and areas near City Walk. Weighing villa design against apartment design for a property elsewhere in Dubai? Our <b className="text-[#caa193]"><a href="https://wedointerior.ae/dubai-villa-vs-apartment-interior-design">Villa vs. Apartment Interior Design</a></b> guide covers that comparison directly.
    </p>
  </div>
</section>
         {/* Embedded Map Container */}
  <div className="pt-8 border-t border-gray-800 space-y-6 max-w-7xl mx-auto px-4 sm:px-6 font-play mb-12">
  {/* Contact & Address Details Box */}
  <div className="bg-black border border-[#caa193] text-white rounded-lg p-6 shadow-xl space-y-4">
    <h2 className="text-lg sm:text-xl md:text-2xl font-conthrax text-[#caa193] uppercase tracking-wider border-b border-[#caa193]/30 pb-2">
      Visit Us
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-gray-200">
      <div className="space-y-1">
        <p className="font-semibold text-[#caa193]">Office & Workshop Address:</p>
        <p className="text-gray-300">
          WE DO Interior Design & Fit-Out — WH-05 A, Jebel Ali Industrial 1, Dubai, UAE
        </p>
      </div>

      <div className="space-y-1">
        <p className="font-semibold text-[#caa193]">Direct Contact:</p>
        <p className="text-gray-300">
          WhatsApp / Call:{' '}
          <a href="https://wa.me/971588075603" className="hover:underline text-white">
            +971 58 807 5603
          </a>
        </p>
        <p className="text-gray-300">
          Email:{' '}
          <a href="mailto:info@wedointerior.ae" className="hover:underline text-white">
            info@wedointerior.ae
          </a>
        </p>
      </div>
    </div>

    <div className="pt-2 border-t border-[#caa193]/30">
      <a
        href="https://maps.app.goo.gl/sfnhBArtQGHhpDq3A"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-xs sm:text-sm text-[#caa193] hover:text-white transition-colors duration-200 underline font-semibold"
      >
        Get directions on Google Maps &rarr;
      </a>
    </div>
  </div>

 
</div>

          {/* FAQ Section */}
          <div className="w-full pt-8 border-t border-gray-800">
            <h2 className="text-lg md:text-xl font-conthrax text-[#caa193] uppercase mb-6">
              Frequently Asked Questions
            </h2>
            
           
              

  {/* Villa Interior Design FAQs */}
  <div className="border-t border-[#caa193]/30 pt-8 space-y-6">
    <div className="space-y-2">
      <h3 className="font-conthrax text-[#caa193] text-sm sm:text-base uppercase tracking-wide">
        How much does villa interior design cost in Jumeirah?
      </h3>
      <p className="text-justify text-gray-300 text-sm sm:text-base leading-relaxed">
        Standard 3–4 bedroom villas typically run somewhere around AED 80,000–250,000, larger 5+ bedroom villas around AED 150,000–400,000, and fully bespoke luxury projects upward of AED 600,000, depending on finish level and scope. Book a walkthrough for an exact quote rather than a broad estimate.
      </p>
    </div>

    <div className="space-y-2">
      <h3 className="font-conthrax text-[#caa193] text-sm sm:text-base uppercase tracking-wide">
        Who is the best villa interior design company in Jumeirah?
      </h3>
      <p className="text-justify text-gray-300 text-sm sm:text-base leading-relaxed">
        That depends on what matters most to you. As a villa interior design company Jumeirah owners increasingly compare against separate vendor setups, WE DO Interior Design & Fit-Out stands out for being ISO 45001, 14001, and 9001 certified, a Luxury Style Awards 2026 winner, and running design, civil works, decoration, and joinery entirely in-house, which suits owners who want one accountable team rather than several separate vendors.
      </p>
    </div>

    <div className="space-y-2">
      <h3 className="font-conthrax text-[#caa193] text-sm sm:text-base uppercase tracking-wide">
        How long does villa interior design take in Jumeirah?
      </h3>
      <p className="text-justify text-gray-300 text-sm sm:text-base leading-relaxed">
        Most villa projects run several months from concept to handover, longer than an apartment, given the larger scope and room count. Imported custom furniture can add roughly 12–20 weeks of lead time on its own, and approval processing, where required, typically adds around 2–8 weeks running alongside design work rather than after it.
      </p>
    </div>

    <div className="space-y-2">
      <h3 className="font-conthrax text-[#caa193] text-sm sm:text-base uppercase tracking-wide">
        Do I need DCD, Dubai Municipality, or developer approval to design my villa?
      </h3>
      <p className="text-justify text-gray-300 text-sm sm:text-base leading-relaxed">
        Cosmetic and furniture changes usually don't need approval. Structural changes, plumbing, electrical relocation, wall removal, almost always do, and several private developer communities require their own NOC on top of DCD/DM sign-off. Our approvals team handles this as part of the process.
      </p>
    </div>

    <div className="space-y-2">
      <h3 className="font-conthrax text-[#caa193] text-sm sm:text-base uppercase tracking-wide">
        Can one company handle both design and renovation work on my villa?
      </h3>
      <p className="text-justify text-gray-300 text-sm sm:text-base leading-relaxed">
        Yes, our in-house civil works, decoration, and joinery teams work from the same brief, so a project needing both structural renovation and design doesn't need two separate companies.
      </p>
    </div>

    <div className="space-y-2">
      <h3 className="font-conthrax text-[#caa193] text-sm sm:text-base uppercase tracking-wide">
        What's the difference between designing a villa and an apartment in Jumeirah?
      </h3>
      <p className="text-justify text-gray-300 text-sm sm:text-base leading-relaxed">
        A villa gives you full separation of space, a majlis distinct from the living room, a private garden, bedrooms designed differently for different family members, where an apartment usually needs multi-functional furniture to do more with less floor area.
      </p>
    </div>

    <div className="space-y-2">
      <h3 className="font-conthrax text-[#caa193] text-sm sm:text-base uppercase tracking-wide">
        Can you design just the majlis, or one room, instead of the whole villa?
      </h3>
      <p className="text-justify text-gray-300 text-sm sm:text-base leading-relaxed">
        Yes, room-by-room and partial-villa projects are common, and the majlis specifically is one of the most frequently requested single-room briefs we get.
      </p>
    </div>

    <div className="space-y-2">
      <h3 className="font-conthrax text-[#caa193] text-sm sm:text-base uppercase tracking-wide">
        What are the current villa interior design trends in Jumeirah?
      </h3>
      <p className="text-justify text-gray-300 text-sm sm:text-base leading-relaxed">
        Warm minimalist palettes, indoor-outdoor continuity between living areas and the garden, smart-home systems planned from the concept stage, and locally-sourced or sustainable materials are the directions coming up most often in current Jumeirah briefs.
      </p>
    </div>

    <div className="space-y-2">
      <h3 className="font-conthrax text-[#caa193] text-sm sm:text-base uppercase tracking-wide">
        Is it worth redesigning an established Jumeirah villa instead of buying newer elsewhere?
      </h3>
      <p className="text-justify text-gray-300 text-sm sm:text-base leading-relaxed">
        For many owners, yes, Jumeirah's location and plot sizes are difficult to replace, and a full interior redesign typically costs a fraction of relocating. It's a personal and financial decision specific to each property, not something with a single right answer.
      </p>
                <div className="pt-8 border-t border-gray-800">
            <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#caa193] mb-2 text-justify">
             Start Your Villa Project
            </h2>
            <p className="text-sm sm:text-base text-white text-justify font-play">
            Book a walkthrough with WE DO Interior Design & Fit-Out, you get a real room-by-room plan and a written quote, and the consultation cost is waived once you confirm your project with us. WhatsApp +971 58 807 5603, call, or <b className="text-[#caa193]"><a href="https://wedointerior.ae/contact-us">get in touch</a></b> to book yours.
            </p>
          </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DProjects;