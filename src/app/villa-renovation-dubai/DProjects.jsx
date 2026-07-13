'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const textImage = {
  src: '/images/villa-renovation-demolition-dubai.png',
  
  title: 'Tips For Renovate Your Villa in Dubai'
};

const galleryImages = [
 
  { src: '/images/villa-renovation-dubai-before-after.png',  title: 'VILLA RENOVATION DUBAI BEFORE AFTER' },
  { src: '/images/villa-renovation-extension-dubai.png',  title: 'VILLA RENOVATION EXTENSION DUBAI' },
  { src: '/images/villa-renovation-exterior-dubai.png',  title: 'VILLA RENOVATION EXTERIOR DUBAI' },
  { src: '/images/villa-renovation-flooring-dubai.png',  title: 'VILLA RENOVATION FLOORING DUBAI' },
  { src: '/images/villa-renovation-kitchen-dubai.png',  title: 'VILLA RENOVATION KITCHEN DUBAI' },
  { src: '/images/villa-renovation-pool-dubai.png',  title: 'VILLA RENOVATION POOL DUBAI' },

];

const testimonials = [
  {
    quote: `"WE DO completely transformed our villa into a modern, elegant home while preserving the character we loved. From the renovation planning to the final finishes, every detail was handled professionally. The team kept us informed throughout the project, completed the work on schedule, and delivered exceptional quality. We couldn't be happier with the results."`,
    author: "— Reem Al Muhairi, Arabian Ranches"
  },
  {
    quote: `"Renovating our villa felt like a huge decision, but WE DO made the entire process smooth and stress-free. Their designers understood exactly what we wanted, and the craftsmanship exceeded our expectations. The finished home is brighter, more functional, and beautifully finished. We highly recommend them to anyone planning a villa renovation in Dubai."`,
    author: "— Dana Al Kaabi, Palm Jumeirah"
  }
];

const DProjects = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const timeoutRef = useRef(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  // Auto Play Logic
  useEffect(() => {
    if (isPlaying) {
      timeoutRef.current = setTimeout(() => {
        nextSlide();
      }, 4000); // 4 Seconds Auto Change
    }
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [currentSlide, isPlaying]);

  return (
    <section className="px-6 py-10 bg-black-200">

      {/* Top Content Block */}
     <div className="lg:max-w-[60%] mx-auto bg-black p-6 sm:p-10 rounded shadow text-center space-y-6 mb-12">
        <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#caa193]">
          Why Choose WE DO for Villa Renovation Dubai
        </h2>
        <div className="space-y-4 text-sm sm:text-base font-play text-white text-justify">
          <p>
            WE DO has completed 400+ villa renovations across Dubai over 15+ years, with one project management team handling design, authority approvals, construction, and styling rather than handing you off between separate contractors for each phase. We're DED-registered and coordinate directly with Dubai Municipality, DEWA, and community management on your behalf, including projects across Emirates Hills, Green Community, Palm Jumeirah, Dubai Hills, Jumeirah, and Arabian Ranches.
          </p>

          <p>
            Every project is assigned a single point of contact from consultation through handover, so you're not re-explaining your brief to a new person at each phase. Material selection, budget tracking, and approval status are communicated at each milestone rather than left until the final walkthrough.
          </p>

          {/* Key Facts Section */}
          <div className="pt-4 border-t border-gray-800 space-y-3">
            <h3 className="font-conthrax text-[#caa193] text-xs sm:text-sm tracking-wider uppercase mb-2">
              Key Facts
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-justify">
              <li>400+ villa renovations completed across Dubai</li>
              <li>15+ years operating in the UAE market</li>
              <li>DED-registered interior design &amp; fit-out company</li>
              <li>Full villa renovation: typically 3-4 months for standard scope, 6-8 months for large or full-scope projects</li>
              <li>Free, itemized quote after a site visit — no lump-sum pricing</li>
              <li>One team manages design, approvals (DEWA, community NOC, Dubai Municipality where applicable), construction, and styling</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Split Row – Text + Top Right Image */}
  <div className="lg:max-w-[60%] mx-auto flex flex-col lg:flex-row items-center gap-6 mb-12"> 
  {/* Note: items-start ki jagah items-center use kiya hai taaki bade image ke sath text vertical center align ho jaye */}
  
  {/* Text Column - 50% Width */}
  <div className="w-full lg:w-1/2 space-y-4">
    <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#caa193]">
      Why Renovate Your Villa in Dubai?
    </h2>
    <p className="text-sm sm:text-base text-white font-play text-justify">
      Most renovation decisions come down to one of three triggers: the villa&apos;s systems are aging, the layout no longer
      fits how the family actually lives, or the finishes look dated next to newer developments nearby. Villas built between
      the early 2000s and 2015 make up a large share of Dubai&apos;s stock, and MEP systems typically need attention in that
      10-25 year window regardless of how the interior looks.
    </p>
    <p className="text-sm sm:text-base text-white font-play text-justify">
      Renovating an existing villa is also usually faster and less disruptive than relocating. You keep the plot, the school
      catchment, and the community you&apos;re already in, and only the scope of work you choose changes. A phased renovation
      lets you upgrade one priority area first, such as the kitchen, majlis, or MEP systems, rather than committing to a
      full-villa budget in one go.
    </p>
  </div>

  {/* Top Right Image - 50% Width */}
  <div className="w-full lg:w-1/2 group relative overflow-hidden rounded-lg shadow-lg">
    <a href={textImage.link} className="block">
      <Image
        src={textImage.src}
        alt={textImage.title}
        width={700}
        height={550}
        className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className="text-white text-sm sm:text-base font-conthrax text-center">
          {textImage.title}
        </p>
      </div>
    </a>
  </div>
</div>

      {/* Gallery Grid with Hover Effects */}
      <div className="lg:max-w-[60%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto mb-10">
        {galleryImages.map(({ src, link, title }, i) => (
          <a href={link} key={i} className="group block relative overflow-hidden rounded shadow">
            <Image
              src={src}
              alt={title}
              width={400}
              height={400}
              className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-sm sm:text-base font-conthrax text-center">
                {title}
              </p>
            </div>
          </a>
        ))}
      </div>

      {/* Bottom CTA Section */}
      <div className="bg-[#f5ede5] py-10 text-center space-y-4">
        <h3 className="text-xs sm:text-xl font-conthrax uppercase">
          Get In Touch With Us
        </h3>
        <p className="text-sm sm:text-base font-play">
          Ready to plan your villa renovation? Contact WE DO for a free site visit and itemized quote.
        </p>
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

     <div className="w-full max-w-[85%] mx-auto mb-16">
  <h2 className="text-center text-2xl sm:text-3xl font-conthrax text-white py-12">
    How it works, in short — Get Started in 3 Steps
  </h2>

  {/* Description Text Above Cards */}
  <p className="text-center max-w-3xl mx-auto text-sm sm:text-base text-white/80 font-play mb-12">
    From first call to final walkthrough, most villa renovations move through six stages. 
    Standard-scope projects complete in 3-4 months; large or full-scope renovations typically 
    take 6-8 months. Here&apos;s how it works, in short:
  </p>

  {/* 3-Step Cards Grid */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    
    {/* Card 1: Design */}
    <div className="bg-neutral-900/50 border border-neutral-800 p-6 rounded-xl space-y-3 shadow-lg hover:border-[#caa193]/50 transition-colors duration-300">
      <div className="flex items-center gap-3">
        <span className="font-conthrax text-2xl text-[#caa193]">01</span>
        <h3 className="font-conthrax text-lg text-[#caa193] tracking-wider">Design</h3>
      </div>
      <p className="text-sm sm:text-base text-white/90 font-play leading-relaxed">
        We turn your brief and villa layout into a concept.
      </p>
    </div>

    {/* Card 2: Preview */}
    <div className="bg-neutral-900/50 border border-neutral-800 p-6 rounded-xl space-y-3 shadow-lg hover:border-[#caa193]/50 transition-colors duration-300">
      <div className="flex items-center gap-3">
        <span className="font-conthrax text-2xl text-[#caa193]">02</span>
        <h3 className="font-conthrax text-lg text-[#caa193] tracking-wider">Preview</h3>
      </div>
      <p className="text-sm sm:text-base text-white/90 font-play leading-relaxed">
        You review the full design in 3D before any work begins.
      </p>
    </div>

    {/* Card 3: Build */}
    <div className="bg-neutral-900/50 border border-neutral-800 p-6 rounded-xl space-y-3 shadow-lg hover:border-[#caa193]/50 transition-colors duration-300">
      <div className="flex items-center gap-3">
        <span className="font-conthrax text-2xl text-[#caa193]">03</span>
        <h3 className="font-conthrax text-lg text-[#caa193] tracking-wider">Build</h3>
      </div>
      <p className="text-sm sm:text-base text-white/90 font-play leading-relaxed">
        We execute exactly what you approved, on the agreed timeline.
      </p>
    </div>

  </div>
</div>

        {/* Section 2: Image Left, Text Right */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="rounded-lg overflow-hidden shadow-md">
            <Image
              src="/images/villa-renovation-majlis-dubai.png"
              alt="villa-renovation-majlis-dubai"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="space-y-6 text-white font-play text-justify">
            <h2 className="text-xl font-conthrax text-[#caa193] mb-4">
              Villa Renovation Cost in Dubai
            </h2>
            <p>
              Villa renovation cost in Dubai depends on four main factors, there&apos;s no single flat rate, since a light cosmetic
              refresh and a full-scope renovation call for very different budgets:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-[#caa193]">
              <li><p className="text-white font-play"><b className="text-[#caa193]">Villa size –</b> built-up area is the single biggest cost driver</p></li>
              <li><p className="text-white font-play"><b className="text-[#caa193]">Scope –</b> cosmetic updates cost far less than layout- or MEP-heavy changes</p></li>
              <li><p className="text-white font-play"><b className="text-[#caa193]">Material grade –</b> locally sourced tile and standard cabinetry versus imported stone and custom joinery</p></li>
              <li><p className="text-white font-play"><b className="text-[#caa193]">Community –</b> premium communities and larger legacy villas typically carry higher renovation costs than newer, smaller developments</p>
              </li>
            </ul>
            <p>
              Kitchens and bathrooms are typically quoted per room rather than as a share of the villa total, cabinetry,
              countertop material, and tiling grade are the biggest swing factors in each. Your itemized quote typically
              includes design, materials, labor, and project management, but excludes furniture, appliances, and any developer
              NOC fees, which vary by community and are confirmed during the site visit. Styling guidance, layout, material,
              and furnishing recommendations are included as part of the design process; the furniture and accessories
              themselves are quoted and sourced separately.
            </p>
          </div>
        </div>
      

      {/* Cosmetic vs Structural */}
      <div className="lg:max-w-[70%] mx-auto bg-black p-6 sm:p-10 rounded shadow space-y-6 mb-12 mt-12 text-justify">
        <h2 className="text-xl sm:text-2xl font-conthrax text-[#caa193] text-center">
          Cosmetic vs. Structural: What&apos;s the Difference?
        </h2>
        <p className="font-play text-sm sm:text-base text-white">
          WE DO&apos;s villa renovation service is scoped around cosmetic and interior work; we don&apos;t undertake structural
          alterations directly. Here&apos;s the general distinction, so you know what falls inside our renovation scope and what doesn&apos;t:
        </p>
        <table className="w-full text-left text-white font-play text-sm sm:text-base border border-[#caa193]">
          <thead>
            <tr className="text-[#caa193]">
              <th className="p-2 border border-[#caa193]"></th>
              <th className="p-2 border border-[#caa193]">Cosmetic Renovation</th>
              <th className="p-2 border border-[#caa193]">Structural Changes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border border-[#caa193] text-[#caa193]">What&apos;s included</td>
              <td className="p-2 border border-[#caa193]">Flooring, paint, cabinetry fronts, fixtures — no layout changes</td>
              <td className="p-2 border border-[#caa193]">Moving walls, relocating plumbing/electrical, extensions, layout changes</td>
            </tr>
            <tr>
              <td className="p-2 border border-[#caa193] text-[#caa193]">Permit required?</td>
              <td className="p-2 border border-[#caa193]">Usually no</td>
              <td className="p-2 border border-[#caa193]">Yes — Dubai Municipality building permit</td>
            </tr>
            <tr>
              <td className="p-2 border border-[#caa193] text-[#caa193]">Structural engineer needed?</td>
              <td className="p-2 border border-[#caa193]">No</td>
              <td className="p-2 border border-[#caa193]">Yes</td>
            </tr>
            <tr>
              <td className="p-2 border border-[#caa193] text-[#caa193]">Typical timeline</td>
              <td className="p-2 border border-[#caa193]">3-6 weeks</td>
              <td className="p-2 border border-[#caa193]">3-8 months</td>
            </tr>
          </tbody>
        </table>
        <p className="font-play text-sm sm:text-base text-white">
          WE DO&apos;s renovation service covers the cosmetic side of this table in full. If your project also needs structural
          changes, we coordinate that through our <b className="text-[#caa193]"><a href="https://wedointerior.ae/villa-construction-dubai"> villa construction </a></b> team, so it&apos;s still managed under one point of contact.
        </p>
      </div>

      {/* Villa Renovation Materials in Dubai */}
      <div className="lg:max-w-[70%] mx-auto bg-black p-6 sm:p-10 rounded shadow space-y-6 mb-12 text-justify">
        <h2 className="text-xl sm:text-2xl font-conthrax text-[#caa193] text-center">
          Villa Renovation Materials in Dubai
        </h2>
        <p className="font-play text-sm sm:text-base text-white">
          Material grade is the single biggest lever on both cost and finish quality in a villa renovation; the same layout
          and square footage can land at very different price points depending on whether you specify locally sourced,
          standard-grade materials or imported, premium alternatives. It&apos;s common to mix both: premium materials in
          high-visibility areas like the kitchen island or majlis flooring, standard grade in secondary spaces, to balance
          the overall budget.
        </p>
        <table className="w-full text-left text-white font-play text-sm sm:text-base border border-[#caa193]">
          <thead>
            <tr className="text-[#caa193]">
              <th className="p-2 border border-[#caa193]">Element</th>
              <th className="p-2 border border-[#caa193]">Standard / Local Grade</th>
              <th className="p-2 border border-[#caa193]">Premium / Imported Grade</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border border-[#caa193] text-[#caa193]">Flooring</td>
              <td className="p-2 border border-[#caa193]">Porcelain tile</td>
              <td className="p-2 border border-[#caa193]">Natural stone, engineered hardwood</td>
            </tr>
            <tr>
              <td className="p-2 border border-[#caa193] text-[#caa193]">Kitchen Countertops</td>
              <td className="p-2 border border-[#caa193]">Locally sourced quartz</td>
              <td className="p-2 border border-[#caa193]">Imported marble or granite</td>
            </tr>
            <tr>
              <td className="p-2 border border-[#caa193] text-[#caa193]">Cabinetry &amp; Joinery</td>
              <td className="p-2 border border-[#caa193]">Standard cabinetry</td>
              <td className="p-2 border border-[#caa193]">Fully custom joinery</td>
            </tr>
            <tr>
              <td className="p-2 border border-[#caa193] text-[#caa193]">Bathroom Tiling &amp; Fixtures</td>
              <td className="p-2 border border-[#caa193]">Ceramic or porcelain tile, standard chrome fixtures</td>
              <td className="p-2 border border-[#caa193]">Large-format porcelain or natural stone, brushed brass or matte black fixtures</td>
            </tr>
            <tr>
              <td className="p-2 border border-[#caa193] text-[#caa193]">Exterior Cladding &amp; Coatings</td>
              <td className="p-2 border border-[#caa193]">Painted render, standard weatherproof coating</td>
              <td className="p-2 border border-[#caa193]">Stone or composite cladding, UV-rated protective coatings</td>
            </tr>
          </tbody>
        </table>
        <p className="font-play text-sm sm:text-base text-white">
          Material selection happens during the Design &amp; 3D Visualization stage, before any construction starts, you&apos;ll
          see exact material specifications and can adjust grade up or down before pricing is finalized, not after.
        </p>
      </div>

      {/* Steps Breakdown Summary */}
      <div className="lg:max-w-[70%] mx-auto bg-black p-6 sm:p-10 rounded shadow space-y-6 mb-12 mt-12 text-justify">
        <div className="text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-conthrax text-[#caa193] mb-2">
            Villa Renovation Services in Dubai
          </h2>
          <p className="font-play text-sm sm:text-base text-white text-start py-2">
            Every villa renovation is scoped around your specific layout, community requirements, and how much you're refreshing versus reconfiguring within your villa's existing footprint. Below are the services we handle most often, whether you're updating a single room or refreshing the full villa.
          </p>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="font-conthrax uppercase text-[#caa193] text-sm sm:text-base">Demolition &amp; Site Clearance</h3>
            <p className="font-play text-sm sm:text-base text-white text-start py-2">
              Demolition, non-structural partition removal, and site clearance ahead of construction stripping out old finishes, fixtures, and layouts to prepare for the new design. This typically runs alongside the early weeks of the Construction &amp; MEP phase rather than as its own separate timeline. Structural changes, like moving load-bearing walls, sit outside our renovation scope and are handled through our villa construction team instead.
            </p>
          </div>

          <div>
            <h3 className="font-conthrax uppercase text-[#caa193] text-sm sm:text-base">MEP Systems Renovation</h3>
            <p className="font-play text-sm sm:text-base text-white text-start py-2">
              Electrical rewiring, plumbing repiping, and HVAC/AC upgrades the MEP work most responsible for triggering a renovation decision in the first place, since villas built between the early 2000s and 2015 are now at or past the point where these need replacing regardless of finish preference. These MEP upgrades happen early in the build, before walls are closed up and finishes go in.
            </p>
          </div>

          <div>
            <h3 className="font-conthrax uppercase text-[#caa193] text-sm sm:text-base">Kitchen Renovation</h3>
            <p className="font-play text-sm sm:text-base text-white text-start py-2">
              Cabinetry, countertops, appliances, and layout changes including reconfiguring the kitchen footprint within the existing floor plan. Material choice drives most of the cost difference: locally sourced quartz and standard cabinetry sit at the affordable end, while imported stone countertops and fully custom joinery push a kitchen renovation toward the premium end of the range.
            </p>
          </div>

          <div>
            <h3 className="font-conthrax uppercase text-[#caa193] text-sm sm:text-base">Bathroom Renovation</h3>
            <p className="font-play text-sm sm:text-base text-white text-start py-2">
              Waterproofing, tiling, fixtures, and layout upgrades, handled with the plumbing and MEP coordination that bathroom work always needs. We recommend budgeting separately for waterproofing and ducting, since these are essential but easy to underestimate in an initial budget.
            </p>
          </div>

          <div>
            <h3 className="font-conthrax uppercase text-[#caa193] text-sm sm:text-base">Majlis &amp; Living Space Renovation</h3>
            <p className="font-play text-sm sm:text-base text-white text-start py-2">
              Majlis renovation is one of the most requested rooms in Dubai villa projects. We work with traditional and contemporary layouts, built-in seating, mashrabiya-inspired screening, and lighting design specific to how the space is used, whether for daily family life or formal hosting.
            </p>
          </div>

          <div>
            <h3 className="font-conthrax uppercase text-[#caa193] text-sm sm:text-base">Flooring, Ceiling &amp; Waterproofing</h3>
            <p className="font-play text-sm sm:text-base text-white text-start py-2">
              Hardwood, tile, and stone flooring replacement, roof and terrace waterproofing beneath new tiling, plus gypsum ceiling and lighting integration commonly paired with a full room refresh. Porcelain tile is the most common mid-range choice; natural stone and engineered hardwood sit at the premium end and typically add to both material cost and installation time.
            </p>
          </div>

          <div>
            <h3 className="font-conthrax uppercase text-[#caa193] text-sm sm:text-base">Smart Home &amp; Automation</h3>
            <p className="font-play text-sm sm:text-base text-white text-start py-2">
              Smart home automation for lighting, climate, and security, integrated during the renovation wiring and infrastructure are far easier to install while walls are open than to retrofit afterward, so this is typically scoped alongside MEP and electrical work rather than added at the end. Common additions include app-controlled lighting scenes, climate zoning, and video entry or security systems.
            </p>
          </div>

          <div>
            <h3 className="font-conthrax uppercase text-[#caa193] text-sm sm:text-base">Painting services</h3>
            <p className="font-play text-sm sm:text-base text-white text-start py-2">
              Whole-villa exterior and interior painting ,refreshing walls, ceilings, and trim with coatings suited to Dubai's heat, dust, and sun exposure. Usually scheduled alongside exterior façade work, since both need scaffolding and similar site access.
            </p>
          </div>

          <div>
            <h3 className="font-conthrax uppercase text-[#caa193] text-sm sm:text-base">Exterior &amp; Façade Renovation</h3>
            <p className="font-play text-sm sm:text-base text-white text-start py-2">
              Exterior finishes, façade cladding, and driveway or garden-adjacent hardscaping updates suited to Dubai's heat and dust exposure. Exterior work often runs alongside interior renovation phases rather than as a separate project, since scaffolding and site access overlap.
            </p>
          </div>

          <div>
            <h3 className="font-conthrax uppercase text-[#caa193] text-sm sm:text-base">Swimming Pool Renovation</h3>
            <p className="font-play text-sm sm:text-base text-white text-start py-2">
              Resurfacing, retiling, and filtration or equipment upgrades for existing swimming pools, a common request across communities like Emirates Hills, Palm Jumeirah, and Dubai Hills, where a private pool is typically part of the villa. Pool renovation work usually runs as a parallel workstream alongside interior renovation rather than blocking it, since the pool sits outside the main structure.
            </p>
          </div>

          <div>
            <h3 className="font-conthrax uppercase text-[#caa193] text-sm sm:text-base">Landscaping &amp; Garden Design</h3>
            <p className="font-play text-sm sm:text-base text-white text-start py-2">
              <b className="text-[#caa193]"><a href="https://wedointerior.ae/landscape-design-dubai"> Landscaping and garden design </a></b> planting, irrigation, and outdoor living areas, distinct from the driveway and hardscaping work covered under Exterior &amp; Façade Renovation. Often bundled with a pool or exterior renovation project, since access and site logistics overlap.
            </p>
             <p className="font-play text-sm sm:text-base text-white">
            Need to add square footage instead of reconfiguring within your villa's existing layout? Extensions require Dubai Municipality-approved structural drawings and a licensed structural sign-off outside our renovation scope, but coordinated through our villa construction team as part of the same single point of contact.
          </p>
          </div>
        </div>

        
         
        </div>
      

      {/* What Are the Steps Involved in Villa Renovation Detail */}
      <div className="lg:max-w-[70%] mx-auto bg-black p-6 sm:p-10 rounded shadow space-y-6 mb-12">
        <h2 className="text-xl sm:text-2xl font-conthrax text-[#caa193] text-center">
          What Are the Steps Involved in Villa Renovation?
        </h2>
        <p className="font-play text-sm sm:text-base text-white text-justify">
          From first call to final walkthrough, most villa renovations move through six stages. Standard-scope projects
          complete in 3-4 months; large or full-scope renovations typically take 6-8 months.
        </p>
        <ol className="list-decimal pl-5 space-y-2 text-[#caa193] text-justify">
          <li><p className="text-white font-play"><b className="text-[#caa193]">Consultation &amp; Site Visit –</b> we assess the villa&apos;s condition, your goals, and community requirements</p></li>
          <li><p className="text-white font-play"><b className="text-[#caa193]">Design &amp; 3D Visualization</b> (typically 4-8 weeks) – layout options, material selection, and a full design brief before anything is finalized</p></li>
          <li><p className="text-white font-play"><b className="text-[#caa193]">Approvals</b> (typically 4-8 weeks, often run alongside design) – DEWA approval for electrical and MEP changes, and community/developer NOC where applicable; a Dubai Municipality building permit only applies if structural work is separately commissioned through our construction team</p></li>
          <li><p className="text-white font-play"><b className="text-[#caa193]">Construction &amp; MEP Works</b> (typically 4-16 weeks depending on scope) – demolition, layout adjustments, plumbing and electrical rough-ins</p></li>
          <li><p className="text-white font-play"><b className="text-[#caa193]">Joinery, Finishes &amp; Styling</b> (typically 4-8 weeks) – custom carpentry, flooring, painting, and final material installation</p></li>
          <li><p className="text-white font-play"><b className="text-[#caa193]">Handover &amp; Final Walkthrough –</b> quality inspection and walkthrough before you move back in</p></li>
        </ol>
      </div>

      {/* Villa Renovation vs Villa Fit-Out */}
      <div className="lg:max-w-[70%] mx-auto bg-black p-6 sm:p-10 rounded shadow space-y-6 mb-12">
        <h2 className="text-xl sm:text-2xl font-conthrax text-[#caa193] text-center">
          Villa Renovation vs. Villa Fit-Out
        </h2>
        <p className="font-play text-sm sm:text-base text-white text-justify">
          These two terms get used interchangeably, but they cover different scopes and mixing them up leads to mismatched
          quotes, since a fit-out quote won&apos;t include structural work, and a renovation quote may include fit-out elements
          you don&apos;t need. If your project needs both, WE DO handles them as one continuous project with a single point of
          contact, rather than splitting the work across two separate teams and two separate contracts.
        </p>
        <table className="w-full text-left text-white font-play text-sm sm:text-base border border-[#caa193]">
          <thead>
            <tr className="text-[#caa193]">
              <th className="p-2 border border-[#caa193]"></th>
              <th className="p-2 border border-[#caa193]">Villa Renovation</th>
              <th className="p-2 border border-[#caa193]">Villa Fit-Out</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border border-[#caa193] text-[#caa193]">Scope</td>
              <td className="p-2 border border-[#caa193]">Cosmetic and interior changes to an existing, lived-in villa</td>
              <td className="p-2 border border-[#caa193]">Interior systems, joinery, and furnishing — typically shell-and-core or post-handover</td>
            </tr>
            <tr>
              <td className="p-2 border border-[#caa193] text-[#caa193]">Best for</td>
              <td className="p-2 border border-[#caa193]">Older villas needing cosmetic or interior updates</td>
              <td className="p-2 border border-[#caa193]">New villas or fully handed-over units needing interior build-out</td>
            </tr>
            <tr>
              <td className="p-2 border border-[#caa193] text-[#caa193]">Typical timeline</td>
              <td className="p-2 border border-[#caa193]">3-4 months (standard) / 6-8 months (large or full-scope) / 3-6 weeks (partial)</td>
              <td className="p-2 border border-[#caa193]">Varies by scope — confirm typical range</td>
            </tr>
            <tr>
              <td className="p-2 border border-[#caa193] text-[#caa193]">Approvals needed</td>
              <td className="p-2 border border-[#caa193]">DEWA, community NOC (Dubai Municipality permit only if structural work is separately commissioned)</td>
              <td className="p-2 border border-[#caa193]">Developer/community NOC, DEWA for MEP</td>
            </tr>
            <tr>
              <td className="p-2 border border-[#caa193] text-[#caa193]">Warranty</td>
              <td className="p-2 border border-[#caa193]"><b className="text-[#caa193]"><a href="https://wedointerior.ae/contact-us">Contact us for details</a></b></td>
              <td className="p-2 border border-[#caa193]">Contact us for details</td>
            </tr>
          </tbody>
        </table>
        <p className="font-play text-sm sm:text-base text-white mt-4">
          See our <b className="text-[#caa193]"><a href="https://wedointerior.ae/villa-interior-design-dubai">Villa Interior Design & Fit-Out page</a></b> for more information.
        </p>
      </div>

      {/* Auto-Play Testimonials Carousel with Pause-on-Hover */}
      <div
        className="lg:max-w-[70%] mx-auto bg-black p-6 sm:p-10 rounded shadow space-y-6 mb-12 relative overflow-hidden text-justify"
        onMouseEnter={() => setIsPlaying(false)}
        onMouseLeave={() => setIsPlaying(true)}
      >
        <h2 className="text-xl sm:text-2xl font-conthrax text-[#caa193] text-center mb-2">
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
                <footer className="text-[#caa193] not-italic mt-2">{item.author}</footer>
              </blockquote>
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center pt-4 border-t border-zinc-800 mt-4">
          <button
            onClick={prevSlide}
            className="text-[#caa193] hover:text-white transition-colors text-xs font-conthrax uppercase tracking-wider"
          >
            ← Prev
          </button>

          <div className="flex space-x-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`w-2 h-2 rounded-full transition-all ${
                  idx === currentSlide ? 'bg-[#caa193] w-4' : 'bg-zinc-600'
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="text-[#caa193] hover:text-white transition-colors text-xs font-conthrax uppercase tracking-wider"
          >
            Next →
          </button>
        </div>

        <h3 className="text-lg font-conthrax text-[#caa193]">Areas We Serve</h3>
        <p className="font-play text-sm sm:text-base text-white text-justify">
          We complete villa renovation projects across Dubai, including in Emirates Hills, Green Community, Palm Jumeirah,
          Dubai Hills, <b className="text-[#caa193]"><a href="https://wedointerior.ae/interior-design-jumeirah-dubai">Jumeirah</a></b>, and Arabian Ranches, with coverage extending to additional <b className="text-[#caa193]"><a href="https://wedointerior.ae/interior-design-dubai">communities across the city</a></b> — see
          our full list of areas we serve for locations beyond these.
        </p>
      </div>

      <div className="bg-[#f5ede5] py-10 text-center space-y-4 mb-12">
        <h3 className="text-xs sm:text-xl font-conthrax uppercase">
          Get Your Free Villa Renovation Quote
        </h3>
        <p className="text-sm sm:text-base font-play">
          WE DO Interior Design &amp; Fit-Out WH-05 A, Jebel Ali Industrial 1, Dubai, UAE Phone/WhatsApp: +971 58 807 5603 Email: info@wedointerior.ae<br/>
          Ready to plan your villa renovation? Contact WE DO for a free site visit and itemized quote.
        </p>
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

      <div className="w-full rounded-lg overflow-hidden my-12 shadow-lg" style={{ height: "450px" }}>
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3616.292133776448!2d55.1259375!3d24.990187499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6954f6d82d69%3A0x12891350d5165c12!2sInterior%20Design%20Company%20Dubai%20-%20WeDo%20Interior%20Design%20%26%20Fit%20out!5e0!3m2!1sen!2sae!4v1783940352669!5m2!1sen!2sae"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen={true}
    loading="lazy"
    referrerPolicy="strict-origin-when-cross-origin"
    title="Interior Design Company Dubai - WeDo Interior Design & Fit out Location"
  ></iframe>
</div>

      {/* FAQs */}
      <div className="lg:max-w-[70%] mx-auto bg-black p-6 sm:p-10 rounded shadow space-y-6 mb-12 text-justify">
        <h2 className="text-xl sm:text-2xl font-conthrax text-[#caa193] text-center">
          Frequently Asked Questions
        </h2>

        <div>
          <h3 className="font-conthrax text-[#caa193]">How much does villa renovation cost in Dubai?</h3>
          <p className="font-play text-sm sm:text-base text-white py-2">
            Villa renovation cost in Dubai depends on villa size, scope of work, material grade, and community, larger villas,
            premium communities, and MEP- or layout-heavy projects generally sit at the higher end. WE DO provides a detailed,
            itemized quote after a free site visit, so you&apos;re working from real numbers rather than a lump-sum estimate.
          </p>
        </div>

        <div>
          <h3 className="font-conthrax text-[#caa193]">Who is the best villa renovation company in Dubai?</h3>
          <p className="font-play text-sm sm:text-base text-white py-2">
            WE DO Interior Design &amp; Fit-Out has completed 400+ villa renovations across Dubai over 15+ years, managing
            design, approvals, and construction under one DED-registered team. &quot;Best&quot; depends on your villa&apos;s scope,
            community, and budget. We recommend comparing project portfolios, approval-handling experience, and whether pricing
            is itemized by room before deciding, rather than choosing on price alone.
          </p>
        </div>

        <div>
          <h3 className="font-conthrax text-[#caa193]">How long does a full villa renovation take?</h3>
          <p className="font-play text-sm sm:text-base text-white py-2">
            A full villa renovation in Dubai typically takes 3-4 months for standard-scope projects, extending to 6-8 months
            for large villas or extensive full-scope work like full MEP replacement. Partial renovations of a single kitchen
            or bathroom usually complete in 3-6 weeks. NOC approvals and imported material lead times most often extend these
            timelines.
          </p>
        </div>

        <div>
          <h3 className="font-conthrax text-[#caa193]">Do I need a permit or NOC to renovate my villa in Dubai?</h3>
          <p className="font-play text-sm sm:text-base text-white py-2">
            It depends on the work. Moving walls, adding rooms, or altering the roofline requires a Dubai Municipality building
            permit and, in gated communities, a No Objection Certificate, but that&apos;s structural work, which sits outside WE
            DO&apos;s renovation scope and is coordinated separately through our villa construction team. Purely cosmetic and
            interior work like repainting, flooring, or MEP upgrades usually doesn&apos;t require a Dubai Municipality permit,
            though DEWA approval or a community NOC may still apply. WE DO manages the approvals relevant to your project as
            part of the process.
          </p>
        </div>

        <div>
          <h3 className="font-conthrax text-[#caa193]">Can I live in my villa while it&apos;s being renovated?</h3>
          <p className="font-play text-sm sm:text-base text-white py-2">
            In most cases, yes — renovations are typically phased so one section of the villa is worked on while you continue
            living in another. For extensive, whole-villa renovations involving major MEP work, a short-term move-out of a few
            weeks is more practical for dust, noise, and safety. We advise on this during your site visit.
          </p>
        </div>

        <div>
          <h3 className="font-conthrax text-[#caa193]">What&apos;s the difference between villa renovation and villa fit-out?</h3>
          <p className="font-play text-sm sm:text-base text-white py-2">
            Villa renovation covers cosmetic and interior changes to an existing, lived-in villa — upgrading MEP systems,
            replacing finishes, refreshing layouts within the existing footprint. Villa fit-out typically refers to interior
            systems, joinery, and furnishing for a shell-and-core or newly handed-over space. Structural changes, like moving
            load-bearing walls or extending a villa&apos;s footprint, are handled separately through our villa construction
            team. Many projects combine renovation, fit-out, and structural work under one contract to avoid duplicated site
            visits.
          </p>
        </div>

        <div>
          <h3 className="font-conthrax text-[#caa193]">What&apos;s the difference between a cosmetic and a structural renovation?</h3>
          <p className="font-play text-sm sm:text-base text-white py-2">
            A cosmetic renovation updates surfaces and finishes — flooring, paint, cabinetry fronts — without changing the
            villa&apos;s layout, and usually needs no permit. Structural changes involve moving walls, relocating plumbing or
            electrical points, or extending the footprint, which requires Dubai Municipality approval and a licensed structural
            sign-off, and cost more and take longer. WE DO&apos;s renovation service covers the cosmetic side; structural work
            is handled through our villa construction team.
          </p>
        </div>

        <div>
          <h3 className="font-conthrax text-[#caa193]">Is it worth renovating an older villa in Dubai?</h3>
          <p className="font-play text-sm sm:text-base text-white py-2">
            Older villas (10-25+ years) often have outdated MEP systems, dated finishes, and layouts that no longer suit modern
            family life — renovating can address all three while avoiding the cost and disruption of relocating. Whether it&apos;s
            worth it depends on your villa&apos;s condition and how long you plan to stay; we assess this honestly during the
            initial consultation rather than upselling unnecessary work.
          </p>
        </div>

        <div>
          <h3 className="font-conthrax text-[#caa193]">Can I book just one service, like pool renovation or smart home automation, without a full villa renovation?</h3>
          <p className="font-play text-sm sm:text-base text-white py-2">
            Yes. Pool renovation, landscaping, smart home automation, painting, and waterproofing can all be booked as
            standalone projects — they don&apos;t require a full villa renovation around them. The exception is anything that
            touches walls or MEP mid-build, like wiring for smart home features, which is easier to install while walls are
            already open, so it&apos;s worth flagging upfront if you might want it later.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DProjects;
