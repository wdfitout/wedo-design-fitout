'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const testimonials = [
  {
    quote: `"WE DO Interior Design and Fitout delivered a top-notch office transformation in DIFC. Their team combines creativity with precision, making them one of the best interior fit-out companies in Dubai. Highly recommended for commercial interior design in UAE—professional, timely, and stylish results!"`,
    author: "— Usman Khan"
  },
  {
    quote: `"Hiring "We Do Interior Design and Fitout" for our office renovation in JLT, Dubai, was a success. The team was not only punctual, consistently arriving and completing phases of the project on time, but also demonstrated a high level of professionalism and craftsmanship. They were responsive and attentive, promptly addressing any concerns we had post-renovation, which speaks volumes about their commitment to customer satisfaction. I highly recommend "We Do” to anyone looking to transform their workspace. Their dedication and exceptional service make them a standout choice in the crowded field of Dubai's fitout services."`,
    author: "— Sanad Jumean"
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
    <section className="px-4 sm:px-12 md:px-20 lg:px-28 xl:px-36 py-8 sm:py-12 bg-black-200 max-w-full overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-8 sm:space-y-12">

       {/* Top Content Block / Hero */}
<div className="bg-black p-4 sm:p-10 rounded-xl border border-gray-800 shadow-xl text-left space-y-6 sm:space-y-8 font-play text-sm sm:text-base text-white">
  
  <h2 className="text-center text-xs sm:text-xl md:text-xl font-conthrax tracking-widest mb-4 sm:mb-6 uppercase text-[#caa193]">
    Is Office Renovation Right for You?
  </h2>
  
  <p className="leading-relaxed">
    This page is for Dubai businesses whose office is already built out and mostly working, but needs updating, not a business moving into a new unit or building an office from a bare shell. That covers SME and startup teams that have outgrown their original layout, corporate offices refreshing a space that's a few years old, and coworking operators upgrading common areas between tenancies. Moving into a new space instead, or starting from a bare shell? Our {' '}
    <b className="text-[#caa193]">
      <a href="https://wedointerior.ae/office-interior-design-dubai">
        office interior design services
      </a>
    </b>{' '} cover that from-scratch process; the next section shows exactly where the line sits.
  </p>

  {/* Grid: Key Facts (Left) & Image (Right) - Image ends at border line */}
  <div className="pt-6 border-t border-gray-800 grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
    
    {/* Left Side: Key Facts Only */}
    <div className="space-y-4">
      <h3 className="font-conthrax text-[#caa193] text-sm sm:text-base tracking-wider">
        Key Facts
      </h3>
      <ul className="list-disc pl-5 space-y-2 leading-relaxed">
        <li>Service: flooring, partitions, ceilings, lighting, joinery, and MEP upgrades to an existing office, not a from-shell fit-out</li>
        <li>Cost: typically around AED 80–800+ per sq ft on average, depending on scope</li>
        <li>Timeline: typically 4–12 weeks from signed scope to handover</li>
        <li>Approvals we manage: Dubai Municipality, Dubai Civil Defence, and DEWA, plus private master developers including Emaar and Damac, and free-zone authorities where applicable</li>
        <li>Contract model: one fixed-price contract, one accountable team, staged payments, never full payment upfront</li>
        <li>Areas served: Business Bay, DIFC, JLT, Dubai Marina, Downtown Dubai, Dubai Media City, Sheikh Zayed Road, Al Quoz</li>
      </ul>
    </div>

    {/* Right Side: Image (Height strictly aligned with Key Facts list) */}
    <div className="relative w-full min-h-[220px] sm:min-h-[280px] h-full rounded-lg overflow-hidden border border-[#caa193]/40 bg-black">
      <Image
        src="/images/dubai-office-renovation-project.webp"
        alt="Dubai office renovation project"
        title="Dubai Office Renovation Project"
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
      Get in Touch to Start Your Office Renovation
      <span className="transform transition-transform duration-200 group-hover:translate-x-1">→</span>
    </a>
  </div>

</div>

       {/* Office Renovation vs Fit-Out Decision Block */}
        <div className="bg-black p-4 sm:p-10 rounded-xl border border-gray-800 space-y-6 sm:space-y-8 text-left">

          {/* Section Header & Intro */}
          <div className="space-y-3">
            <h2 className="text-center text-xs sm:text-xl md:text-xl font-conthrax tracking-widest mb-4 sm:mb-6 uppercase text-[#caa193]">
              Office Renovation vs. Office Fit-Out: What&apos;s the Difference?
            </h2>
            <p className="text-sm sm:text-base text-white font-play leading-relaxed">
              Even though the two phrases are used interchangeably in Dubai, they actually refer to separate processes and have different cost estimates. In Office Renovation, all work is done based on your current layout, floors, partitions, ceiling, lighting, and new MEP, and there will be no alterations to the actual structure of the building. {' '}
                <b className="text-[#caa193]">
                  <a href="https://wedointerior.ae/fit-out-company-dubai">
                    Office Fit-Out
                  </a>
                </b>{' '} involves the use of a clean slate and the addition of completely new MEP.
            </p>
          </div>

          {/* Single Medium Image */}
          <div className="relative h-48 sm:h-80 rounded-xl overflow-hidden border border-[#caa193]/40 bg-black mx-auto max-w-2xl w-full">
            <Image
              src="/images/office-renovation-vs-fitout-dubai.webp"
              alt="Office renovation vs fit-out in Dubai"
              title="Office Renovation vs Fit-Out in Dubai"
              fill
              className="object-cover"
            />
          </div>

          {/* Comparison Table */}
          <div className="overflow-x-auto rounded-xl border border-gray-800 bg-[#111]">
            <table className="w-full text-left text-sm sm:text-base font-play text-white border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-black border-b border-gray-800 text-[#caa193] font-conthrax text-xs sm:text-sm">
                  <th className="p-3 sm:p-4"></th>
                  <th className="p-3 sm:p-4">Office Renovation</th>
                  <th className="p-3 sm:p-4">Office Fit-Out</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                <tr>
                  <td className="p-3 sm:p-4 font-semibold text-[#caa193]">Starting point</td>
                  <td className="p-3 sm:p-4">Existing, occupied office</td>
                  <td className="p-3 sm:p-4">Bare shell or fully reconfigured space</td>
                </tr>
                <tr>
                  <td className="p-3 sm:p-4 font-semibold text-[#caa193]">Structural/partition changes</td>
                  <td className="p-3 sm:p-4">Minimal, works within the current layout</td>
                  <td className="p-3 sm:p-4">Extensive, new partitions throughout</td>
                </tr>
                <tr>
                  <td className="p-3 sm:p-4 font-semibold text-[#caa193]">MEP scope</td>
                  <td className="p-3 sm:p-4">Targeted upgrades (lighting, AC, data)</td>
                  <td className="p-3 sm:p-4">Full new installation</td>
                </tr>
                <tr>
                  <td className="p-3 sm:p-4 font-semibold text-[#caa193]">Average cost</td>
                  <td className="p-3 sm:p-4">AED 80–800+ per sq ft</td>
                  <td className="p-3 sm:p-4">AED 350–1,500+ per sq ft</td>
                </tr>
                <tr>
                  <td className="p-3 sm:p-4 font-semibold text-[#caa193]">Typical timeline</td>
                  <td className="p-3 sm:p-4">4–12 weeks</td>
                  <td className="p-3 sm:p-4">8–16+ weeks</td>
                </tr>
                <tr>
                  <td className="p-3 sm:p-4 font-semibold text-[#caa193]">Best for</td>
                  <td className="p-3 sm:p-4">A layout that still works but looks or performs poorly</td>
                  <td className="p-3 sm:p-4">A new lease, relocation, or a business that has outgrown its space</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>

        {/* CTA Section 1 - Full Width */}
        <div className="w-screen relative left-1/2 -translate-x-1/2 bg-[#f5ede5] py-8 sm:py-10 px-4 sm:px-12 text-center space-y-4 text-black">
          <h3 className="text-lg sm:text-2xl font-conthrax text-black">
            Get In Touch With Us
          </h3>
          <p className="text-sm sm:text-base font-play text-gray-800 max-w-3xl mx-auto">
            Ready to plan your Office renovation? Contact WE DO for a free site visit and itemized quote.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 mt-6">
            <a
              href="https://wa.me/971588075603"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-play text-sm sm:text-base rounded-lg shadow-md text-center transition-colors"
            >
              ✅ Request availability by WhatsApp
            </a>
            <a
              href="mailto:info@wedointerior.ae"
              className="w-full sm:w-auto px-6 py-3 bg-[#caa193] hover:bg-[#b88f81] text-white font-play text-sm sm:text-base rounded-lg shadow-md text-center transition-colors"
            >
              ✉️ Request availability by E-mail
            </a>
          </div>
        </div>

        {/* Section: Signs It's Time to Renovate Your Office */}
<div className="bg-black p-4 sm:p-10 rounded-xl border border-gray-800 space-y-6 sm:space-y-8 text-left">
  
  <h2 className="text-center text-xs sm:text-xl md:text-xl font-conthrax tracking-widest mb-4 sm:mb-6 uppercase text-[#caa193]">
    Signs It&apos;s Time to Renovate Your Office
  </h2>

  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
    
    {/* Text Content (Left Side) */}
    <div className="lg:col-span-6 text-sm sm:text-base font-play text-white leading-relaxed space-y-4">
      <p>
        Not sure if your space actually needs work? These are the triggers we hear most often from Dubai businesses:
      </p>
      <ul className="list-disc pl-5 space-y-2">
        <li>The layout hasn&apos;t caught up with hybrid work, too many fixed desks, not enough collaboration or quiet space</li>
        <li>Finishes look dated next to the client-facing spaces your team visits elsewhere in the city</li>
        <li>Meeting rooms lack proper acoustic treatment or AV, so calls and presentations feel amateur</li>
        <li>Lighting is inconsistent or purely fluorescent-grid, with no layering between ambient, task, and feature</li>
        <li>The reception area doesn&apos;t reflect what your brand actually looks like today</li>
        <li>You&apos;re paying to heat, cool, and light space your team doesn&apos;t use efficiently</li>
      </ul>
      <p>
        If two or three of these sound familiar, renovation is usually the right fix.
      </p>
    </div>

    {/* Image: Office Renovation Signs (Right Side) */}
    <div className="lg:col-span-6 relative h-64 sm:h-80 lg:h-[28rem] w-full rounded-xl overflow-hidden border border-[#caa193]/40 shadow-lg bg-black">
      <Image
        src="/images/signs-office-needs-renovation-dubai.webp"
        alt="Signs your Dubai office needs renovation"
        title="Signs Your Dubai Office Needs Renovation"
        fill
        className="object-cover"
      />
    </div>

  </div>

</div>

       {/* Section: Benefits of Office Renovation in Dubai */}
<div className="bg-black p-4 sm:p-10 rounded-xl border border-gray-800 space-y-6 sm:space-y-8 text-left">
  
  <h2 className="text-center text-xs sm:text-xl md:text-xl font-conthrax tracking-widest mb-4 sm:mb-6 uppercase text-[#caa193]">
    Benefits of Office Renovation in Dubai
  </h2>

  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
    
    {/* Image: Office Renovation Benefits (Left Side) */}
    <div className="lg:col-span-6 relative h-64 sm:h-80 lg:h-[28rem] w-full rounded-xl overflow-hidden border border-[#caa193]/40 shadow-lg bg-black">
      <Image
        src="/images/benefits-office-renovation-dubai.webp"
        alt="Benefits of office renovation in Dubai"
        title="Benefits of Office Renovation in Dubai"
        fill
        sizes="(max-width: 1024px) 100vw, 50vw"
        className="object-cover"
      />
    </div>

    {/* Text Content (Right Side) */}
    <div className="lg:col-span-6 text-sm sm:text-base font-play text-white leading-relaxed space-y-4">
      <p>
        Renovating instead of relocating comes with advantages beyond the obvious cost savings.
      </p>
      <ul className="list-disc pl-5 space-y-2">
        <li>Lower cost, less disruption. You avoid double rent, relocation logistics, and the productivity hit of a full office move.</li>
        <li>Faster turnaround. Most renovations finish in weeks, not the months a relocation or ground-up fit-out typically takes.</li>
        <li>A stronger first impression. An updated reception and meeting rooms change how clients and candidates read your business the moment they walk in.</li>
        <li>Better use of the space you already have. Rezoning for how your team actually works now, more hybrid, less fixed-desk, often solves a capacity problem without adding a single square foot.</li>
        <li>A smaller environmental footprint. Reusing an existing structure and upgrading its systems, rather than building new, is consistently the more sustainable option, a genuine reason to renovate, not just a marketing line.</li>
      </ul>
      <p>
        These are why renovation is usually the first option worth pricing out before assuming you need to move.
      </p>
    </div>

  </div>

</div>

        {/* Section: What We Renovate: A Space-by-Space Breakdown */}
        <div className="bg-black p-4 sm:p-10 rounded-xl border border-gray-800 space-y-6 sm:space-y-8 text-left">
          
          <h2 className="text-center text-xs sm:text-xl md:text-xl font-conthrax tracking-widest mb-4 sm:mb-6 uppercase text-[#caa193]">
            What We Renovate: A Space-by-Space Breakdown
          </h2>

          <p className="text-sm sm:text-base font-play text-white leading-relaxed">
            Every zone in your office has different renovation priorities. Here&apos;s what we typically upgrade in each.
          </p>

          {/* Reception & Front-of-House */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center bg-[#111] p-4 sm:p-6 rounded-xl border border-gray-800">
            <div className="lg:col-span-7 text-sm sm:text-base font-play text-white leading-relaxed space-y-2">
              <h3 className="font-conthrax text-[#caa193] text-sm sm:text-base tracking-wider">
                Reception &amp; Front-of-House
              </h3>
              <p>
                First impression work: a feature wall refresh, a reception area renovation, flooring, and lighting that is planned for the room as opposed to just being put into it. If your brand has grown or changed since the building of your office, this is often the best place to begin.
              </p>
            </div>
            <div className="lg:col-span-5 relative h-48 sm:h-64 w-full rounded-xl overflow-hidden border border-[#caa193]/40 shadow-lg bg-black">
              <Image
                src="/images/office-reception-renovation-dubai.webp"
                alt="Renovated office reception in Dubai"
                title="Renovated Office Reception in Dubai"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Open Plan Workstations & Collaboration Spaces */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center bg-[#111] p-4 sm:p-6 rounded-xl border border-gray-800">
            <div className="lg:col-span-5 relative h-48 sm:h-64 w-full rounded-xl overflow-hidden border border-[#caa193]/40 shadow-lg bg-black order-2 lg:order-1">
              <Image
                src="/images/open-plan-office-renovation-dubai.webp"
                alt="Open-plan office renovation in Dubai"
                title="Open-Plan Office Renovation Dubai"
                fill
                className="object-cover"
              />
            </div>
            <div className="lg:col-span-7 text-sm sm:text-base font-play text-white leading-relaxed space-y-2 order-1 lg:order-2">
              <h3 className="font-conthrax text-[#caa193] text-sm sm:text-base tracking-wider">
                Open Plan Workstations &amp; Collaboration Spaces
              </h3>
              <p>
                Flooring renovation, ceiling, and lighting renovations, wiring of power and data at each workstation, and if your project brief requires it, reconfiguration of the zoning so there are distinct individual workspaces and collaboration spaces as opposed to one homogeneous floor.
              </p>
            </div>
          </div>

          {/* Meeting Rooms & Boardrooms */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center bg-[#111] p-4 sm:p-6 rounded-xl border border-gray-800">
            <div className="lg:col-span-7 text-sm sm:text-base font-play text-white leading-relaxed space-y-2">
              <h3 className="font-conthrax text-[#caa193] text-sm sm:text-base tracking-wider">
                Meeting Rooms &amp; Boardrooms
              </h3>
              <p>
                The focus of meeting room renovation includes sound treatment through fabric wall panels, acoustic ceiling tiles, or timber baffles, integration of AV &amp; video-conferencing, and renovation of glass or acoustic glass partition where both vision and sound separation are required.
              </p>
            </div>
            <div className="lg:col-span-5 relative h-48 sm:h-64 w-full rounded-xl overflow-hidden border border-[#caa193]/40 shadow-lg bg-black">
              <Image
                src="/images/meeting-room-renovation-dubai.webp"
                alt="Meeting room renovation in Dubai"
                title="Meeting Room Renovation Dubai"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Private Offices & Executive Cabins */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center bg-[#111] p-4 sm:p-6 rounded-xl border border-gray-800">
            <div className="lg:col-span-5 relative h-48 sm:h-64 w-full rounded-xl overflow-hidden border border-[#caa193]/40 shadow-lg bg-black order-2 lg:order-1">
              <Image
                src="/images/executive-office-renovation-dubai.jpeg"
                alt="Executive office renovation in Dubai"
                title="Executive Office Renovation Dubai"
                fill
                className="object-cover"
              />
            </div>
            <div className="lg:col-span-7 text-sm sm:text-base font-play text-white leading-relaxed space-y-2 order-1 lg:order-2">
              <h3 className="font-conthrax text-[#caa193] text-sm sm:text-base tracking-wider">
                Private Offices &amp; Executive Cabins
              </h3>
              <p>
                Joinery, lighting, and finish upgrades that match the standard of the rest of the renovation, plus partition and glazing work where cabins need to be resized within the existing footprint.
              </p>
            </div>
          </div>

          {/* Pantry, Breakout & Wellness Areas */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center bg-[#111] p-4 sm:p-6 rounded-xl border border-gray-800">
            <div className="lg:col-span-7 text-sm sm:text-base font-play text-white leading-relaxed space-y-2">
              <h3 className="font-conthrax text-[#caa193] text-sm sm:text-base tracking-wider">
                Pantry, Breakout &amp; Wellness Areas
              </h3>
              <p>
                Plumbing and cabinetry upgrades in pantries, plus the informal lounge, breakout, or quiet-room spaces more Dubai offices are adding as hybrid-work patterns change how the floor gets used.
              </p>
            </div>
            <div className="lg:col-span-5 relative h-48 sm:h-64 w-full rounded-xl overflow-hidden border border-[#caa193]/40 shadow-lg bg-black">
              <Image
                src="/images/office-pantry-breakout-renovation-dubai.webp"
                alt="Office pantry and breakout area renovation in Dubai"
                title="Office Pantry and Breakout Area Renovation"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Lighting, Power & MEP */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center bg-[#111] p-4 sm:p-6 rounded-xl border border-gray-800">
            <div className="lg:col-span-5 relative h-48 sm:h-64 w-full rounded-xl overflow-hidden border border-[#caa193]/40 shadow-lg bg-black order-2 lg:order-1">
              <Image
                src="/images/office-lighting-mep-renovation-dubai.webp"
                alt="Office lighting and MEP renovation in Dubai"
                title="Office Lighting and MEP Renovation Dubai"
                fill
                className="object-cover"
              />
            </div>
            <div className="lg:col-span-7 text-sm sm:text-base font-play text-white leading-relaxed space-y-2 order-1 lg:order-2">
              <h3 className="font-conthrax text-[#caa193] text-sm sm:text-base tracking-wider">
                Lighting, Power &amp; MEP
              </h3>
              <p>
                Updated lighting layouts, additional power and data points, and where the scope requires it, AC, ventilation, and electrical upgrades carried out to Dubai Civil Defence and DEWA standards.
              </p>
            </div>
          </div>

        </div>

        {/* Section: Materials & Finishes We Work With */}
        <div className="bg-black p-4 sm:p-10 rounded-xl border border-gray-800 space-y-6 sm:space-y-8 text-left">
          
          <h2 className="text-center text-xs sm:text-xl md:text-xl font-conthrax tracking-widest mb-4 sm:mb-6 uppercase text-[#caa193]">
            Materials &amp; Finishes We Work With
          </h2>

          <p className="font-play text-sm sm:text-base text-white leading-relaxed">
            Material choice affects first impression and running cost in equal measure. These are the finishes WE DO specify most often for Dubai office renovations.
          </p>

          {/* Flooring */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center bg-[#111] p-4 sm:p-6 rounded-xl border border-gray-800">
            <div className="lg:col-span-7 text-sm sm:text-base font-play text-white leading-relaxed space-y-2">
              <h3 className="font-conthrax text-[#caa193] text-sm sm:text-base tracking-wider">
                Flooring
              </h3>
              <p>
                Oak or walnut herringbone parquet floors for the reception and boardroom area; large-size natural stone or porcelain floors for high-traffic areas; and microcement or luxury carpet floors for the open office floor space.
              </p>
            </div>
            <div className="lg:col-span-5 relative h-48 sm:h-64 w-full rounded-xl overflow-hidden border border-[#caa193]/40 shadow-lg bg-black">
              <Image
                src="/images/office-herringbone-flooring-dubai.webp"
                alt="Herringbone flooring in a Dubai office renovation"
                title="Herringbone Office Flooring Dubai"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Partitions & Glass */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center bg-[#111] p-4 sm:p-6 rounded-xl border border-gray-800">
            <div className="lg:col-span-5 relative h-48 sm:h-64 w-full rounded-xl overflow-hidden border border-[#caa193]/40 shadow-lg bg-black order-2 lg:order-1">
              <Image
                src="/images/glass-partitions-office-renovation-dubai.webp"
                alt="Glass parti"
                title="Glass Partitions for Dubai Office Renovation"
                fill
                className="object-cover"
              />
            </div>
            <div className="lg:col-span-7 text-sm sm:text-base font-play text-white leading-relaxed space-y-2 order-1 lg:order-2">
              <h3 className="font-conthrax text-[#caa193] text-sm sm:text-base tracking-wider">
                Partitions &amp; Glass
              </h3>
              <p>
                Framed and frameless glass partitions, acoustic glass for meeting rooms, and switchable privacy glass for rooms that need to flip between open and private without a physical door.
              </p>
            </div>
          </div>

          {/* Wall Treatments */}
          <div className="bg-[#111] p-4 sm:p-5 rounded-lg border border-gray-800 space-y-1">
            <h3 className="font-conthrax text-[#caa193] text-sm sm:text-base tracking-wider">
              Wall Treatments
            </h3>
            <p className="font-play text-sm sm:text-base text-white leading-relaxed">
              Accent walls painted in the color of the brand, textured plaster walls, timber wall panels for warmth and acoustic effect, green living walls where applicable, and 3D branding on reception and boardroom walls.
            </p>
          </div>

          {/* Joinery & Storage */}
          <div className="bg-[#111] p-4 sm:p-5 rounded-lg border border-gray-800 space-y-1">
            <h3 className="font-conthrax text-[#caa193] text-sm sm:text-base tracking-wider">
              Joinery &amp; Storage
            </h3>
            <p className="font-play text-sm sm:text-base text-white leading-relaxed">
              Custom reception desks, floor-to-ceiling joinery walls, and built-in storage designed around your actual filing and equipment needs rather than generic office furniture, built through our own state-of-the-art {' '}
                <b className="text-[#caa193]">
                  <a href="https://wedointerior.ae/joinery-company-dubai">
                    joinery factory
                  </a>
                </b>{'. '}
            </p>
          </div>

          {/* Lighting & Ceilings */}
          <div className="bg-[#111] p-4 sm:p-5 rounded-lg border border-gray-800 space-y-1">
            <h3 className="font-conthrax text-[#caa193] text-sm sm:text-base tracking-wider">
              Lighting &amp; Ceilings
            </h3>
            <p className="font-play text-sm sm:text-base text-white leading-relaxed">
              Layered lighting that includes ambient, task, and feature lighting instead of one level of downlights, along with ceiling systems that are either acoustic or exposed-grid along with smart, sensor-operated controls where clients want lower operating expenses.
            </p>
          </div>

        </div>

      {/* Section: Why Choose WE DO & Office Renovation Trends */}
<div className="bg-black p-4 sm:p-10 rounded-xl border border-gray-800 space-y-6 sm:space-y-8 text-left">
  
  {/* Top Row: Why Choose WE DO (Left Text, Right Image) */}
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
    
    {/* Left Text */}
    <div className="lg:col-span-7 space-y-4">
      <h2 className="text-center text-xs sm:text-xl md:text-xl font-conthrax tracking-widest mb-4 sm:mb-6 uppercase text-[#caa193]">
        Why Choose WE DO for Your Office Renovation
      </h2>
      <div className="font-play text-sm sm:text-base text-white">
        <p className="leading-relaxed text-gray-200">
          WE DO Interior Design &amp; Fit-Out has completed 250+ projects across Dubai&apos;s residential and {' '}
          <b className="text-[#caa193]">
            <a href="https://wedointerior.ae/commercial-interior-design-dubai">
              commercial sectors
            </a>
          </b>{' '}, with 15+ years of experience in the market. We&apos;re DED-registered and certified to ISO 9001:2015 (quality), ISO 14001:2015 (environmental), and ISO 45001:2018 (health and safety), and we won the Luxury Lifestyle Awards in 2026.
          What sets the process apart is that almost nothing gets subcontracted out. Design, civil works, decoration, and joinery all sit with our own in-house teams, including our own state-of-the-art joinery factory, one roof, every stage, one point of accountability. Our approvals team works directly with Dubai Civil Defence (DCD) and Dubai Municipality (DM), and holds established relationships with major private developers including Emaar and Damac, alongside the free-zone authorities.
        </p>
      </div>
    </div>

    {/* Right Image */}
    <div className="lg:col-span-5 relative w-full aspect-square rounded-xl overflow-hidden border border-[#caa193]/40 bg-black">
      <Image
        src="/images/dubai-office-interiors-in-business-bay.png"
        alt="dubai-office-interiors-in-business-bay"
        fill
        sizes="(max-width: 1024px) 100vw, 40vw"
        className="object-cover"
      />
    </div>

  </div>

  {/* Bottom Row: Office Renovation Trends (Full Width) */}
  <div className="space-y-4 pt-4 border-t border-gray-800/60">
    <h2 className="text-center text-xs sm:text-xl md:text-xl font-conthrax tracking-widest mb-4 sm:mb-6 uppercase text-[#caa193]">
      Office Renovation Trends in Dubai
    </h2>
    <div className="font-play text-sm sm:text-base text-white">
      <p className="leading-relaxed text-gray-200">
        A few shifts are showing up in almost every renovation brief we&apos;re seeing right now. Reusing an existing structure and upgrading materials and MEP efficiency, rather than building new, is the lower-impact choice. Now sensor-controlled lighting systems, intelligent entry systems, and booking meeting rooms using apps have graduated from optional to mandatory features, particularly in Business Bay and DIFC towers. Activity-based working (ABW) design is characterized by fewer stationary workstations and more space allocated according to activities. Wellness-first layouts.
      </p>
    </div>
  </div>

</div>

       {/* Section: Our Office Renovation Process */}
<div className="bg-black p-4 sm:p-10 rounded-xl border border-gray-800 text-left">
  
  <h2 className="text-center text-xs sm:text-xl md:text-xl font-conthrax tracking-widest mb-4 sm:mb-6 uppercase text-[#caa193]">
    Our Office Renovation Process
  </h2>

  {/* Top Row: Intro & Steps 1, 2, 3 (Left Text, Right Image) */}
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
    
    {/* Left Text */}
    <div className="lg:col-span-7 font-play text-sm sm:text-base text-white space-y-4 leading-relaxed">
      <p>
        Renovating an occupied office is a different job from building one from an empty shell. As a {' '}
        <b className="text-[#caa193]">
          <a href="https://www.google.com/search?client=ms-android-transsion&hs=4vOq&sca_esv=7eb2debaf3275be8&biw=360&bih=680&sxsrf=APpeQnsXr6xg1s0kAGpuWc_khLZ9RjAgcw:1786099912072&kgmid=/g/11pyc3sd1k&q=Interior+Design+Company+Dubai+-+WeDo+Interior+Design+%26+Fit+out&shem=epsd1,ltae,rimspwouoe&shndl=30&source=sh/x/loc/act/m1/2&kgs=b0eecbe019b21364&utm_source=epsd1,ltae,rimspwouoe,sh/x/loc/act/m1/2">
            leading interior design company,
          </a>
        </b>{' '} our top priority is minimizing disruption to your team while the work happens around them.
      </p>

      <p>
        <b className="text-[#caa193] font-conthrax block text-base sm:text-lg mb-1">
          1. Site Inspection and Condition of Existing
        </b>
        We walk the space with you, document what&apos;s staying and what&apos;s changing, and flag any structural, electrical, or MEP limitations before design starts.
      </p>

      <p>
        <b className="text-[#caa193] font-conthrax block text-base sm:text-lg mb-1">
          2. Scope, Design &amp; Fixed-Price Proposal
        </b>
        You get a design concept from our own interior design team and an itemized bill of quantities, not a lump-sum estimate, so you can see exactly what you&apos;re paying for across materials, labor, and MEP before signing anything.
      </p>

      <p>
        <b className="text-[#caa193] font-conthrax block text-base sm:text-lg mb-1">
          3. Approvals &amp; Permits
        </b>
        We submit and track approvals with Dubai Municipality and Dubai Civil Defence, plus DEWA, private master developers including Emaar and Damac, or your free-zone authority, typically 1–3 weeks depending on scope, longer for structural or MEP-heavy work.
      </p>
    </div>

    {/* Right Image */}
    <div className="lg:col-span-5 relative w-full aspect-square rounded-xl overflow-hidden border border-[#caa193]/40 bg-black">
      <Image
        src="/images/office-fit-out-consultants-in-dubai.png"
        alt="office-fit-out-consultants-in-dubai"
        fill
        sizes="(max-width: 1024px) 100vw, 40vw"
        className="object-cover"
      />
    </div>

  </div>

  {/* Bottom Row: Steps 4 & 5 (Full Width with matching space-y-4) */}
  <div className="font-play text-sm sm:text-base text-white space-y-4 leading-relaxed mt-4">
    <p>
      <b className="text-[#caa193] font-conthrax block text-base sm:text-lg mb-1">
        4. Phased Construction &amp; Minimal-Disruption Scheduling
      </b>
      Demolition, MEP, joinery, and finishing happen in sequence through our own civil works and decoration teams, with noisy or disruptive work scheduled outside business hours wherever your building allows it, so your team can keep working through most of the project.
    </p>

    <p>
      <b className="text-[#caa193] font-conthrax block text-base sm:text-lg mb-1">
        5. Snagging &amp; Handover
      </b>
      Every detail gets inspected against the agreed design before handover: finishes, electrical fittings, joinery, so you&apos;re not the one finding the issues after move-in.
    </p>
  </div>

</div>

       {/* Section: Office Renovation Cost & Timeline in Dubai */}
<div className="bg-black p-4 sm:p-10 rounded-xl border border-gray-800 space-y-6 text-left">
  
  {/* Top Full Width Header & Intro */}
  <div className="space-y-4">
    <h2 className="text-center text-xs sm:text-xl md:text-xl font-conthrax tracking-widest mb-4 sm:mb-6 uppercase text-[#caa193]">
      Office Renovation Cost &amp; Timeline in Dubai
    </h2>

    <p className="font-play text-sm sm:text-base text-white leading-relaxed">
      Cost depends on scope more than on size. Here&apos;s a general picture based on current Dubai market rates; treat these as average, ballpark ranges rather than a fixed quote; your exact number is confirmed once our team has assessed your space.
    </p>
  </div>

  {/* Middle Grid: Left Image (Height matches Table) & Right Table */}
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
    
    {/* Left Side: Square Image matching Table height */}
    <div className="lg:col-span-4 relative w-full min-h-[220px] sm:min-h-[250px] rounded-xl overflow-hidden border border-[#caa193]/40 bg-black">
      <Image
        src="/images/modern-office-interior- Dubai-skyline.png"
        alt="modern-office-interior-Dubai-skyline"
        fill
        sizes="(max-width: 1024px) 100vw, 35vw"
        className="object-cover"
      />
    </div>

    {/* Right Side: Table */}
    <div className="lg:col-span-8 overflow-x-auto rounded-xl border border-[#caa193]">
      <table className="w-full text-left text-white font-play text-sm sm:text-base border-collapse min-w-[500px]">
        <thead>
          <tr className="text-[#caa193] bg-neutral-900">
            <th className="p-3 sm:p-4 border border-[#caa193] font-conthrax text-xs sm:text-sm">Scope</th>
            <th className="p-3 sm:p-4 border border-[#caa193] font-conthrax text-xs sm:text-sm">What&apos;s Included</th>
            <th className="p-3 sm:p-4 border border-[#caa193] font-conthrax text-xs sm:text-sm">Average Cost (AED/sq ft)</th>
            <th className="p-3 sm:p-4 border border-[#caa193] font-conthrax text-xs sm:text-sm">Typical Timeline</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-800">
          <tr>
            <td className="p-3 sm:p-4 border border-[#caa193] text-[#caa193] font-semibold">
              Cosmetic Refresh
            </td>
            <td className="p-3 sm:p-4 border border-[#caa193]">
              Paint, flooring, lighting
            </td>
            <td className="p-3 sm:p-4 border border-[#caa193] whitespace-nowrap">
              80 – 200
            </td>
            <td className="p-3 sm:p-4 border border-[#caa193] whitespace-nowrap">
              3–5 weeks
            </td>
          </tr>
          <tr>
            <td className="p-3 sm:p-4 border border-[#caa193] text-[#caa193] font-semibold">
              Standard Renovation
            </td>
            <td className="p-3 sm:p-4 border border-[#caa193]">
              + Partitions, ceilings, joinery
            </td>
            <td className="p-3 sm:p-4 border border-[#caa193] whitespace-nowrap">
              200 – 450
            </td>
            <td className="p-3 sm:p-4 border border-[#caa193] whitespace-nowrap">
              5–8 weeks
            </td>
          </tr>
          <tr>
            <td className="p-3 sm:p-4 border border-[#caa193] text-[#caa193] font-semibold">
              Full Renovation with MEP
            </td>
            <td className="p-3 sm:p-4 border border-[#caa193]">
              + Electrical, HVAC, plumbing upgrades
            </td>
            <td className="p-3 sm:p-4 border border-[#caa193] whitespace-nowrap">
              450 – 800+
            </td>
            <td className="p-3 sm:p-4 border border-[#caa193] whitespace-nowrap">
              8–12 weeks
            </td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>

  {/* Bottom Full Width Paragraph */}
  <p className="font-play text-sm sm:text-base text-white leading-relaxed pt-2">
    MEP work is the most common reason final costs run higher than the initial estimate, electrical, HVAC, and plumbing changes have to meet Dubai Municipality and Civil Defence standards, and that compliance cost is easy to underestimate from a rendering alone. Custom joinery and after-hours labor for occupied offices are the other two line items worth budgeting for upfront. Every WE DO quote is a full bill of quantities, so you can see where the budget goes before you sign.
  </p>

</div>

        {/* Auto-Play Testimonials Carousel */}
        <div
          className="bg-black p-4 sm:p-10 rounded-xl border border-gray-800 space-y-6 relative overflow-hidden text-left"
          onMouseEnter={() => setIsPlaying(false)}
          onMouseLeave={() => setIsPlaying(true)}
        >
          <h2 className="text-center text-xs sm:text-xl md:text-xl font-conthrax tracking-widest mb-4 sm:mb-6 uppercase text-[#caa193]">
            Testimonials
          </h2>

          <div className="relative min-h-[220px] sm:min-h-[160px] md:min-h-[120px] flex items-center justify-center">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className={`transition-all duration-500 absolute w-full ${
                  index === currentSlide
                    ? 'opacity-100 pointer-events-auto translate-x-0'
                    : 'opacity-0 pointer-events-none translate-x-8'
                }`}
              >
                <blockquote className="font-play text-sm sm:text-base text-white italic border-l-4 border-[#caa193] pl-3 sm:pl-4">
                  {item.quote}
                  <footer className="text-[#caa193] not-italic mt-2 text-sm sm:text-base">{item.author}</footer>
                </blockquote>
              </div>
            ))}
          </div>
        </div>

       {/* Section: Visit Us & CTA - Full Width */}
        <div className="w-screen relative left-1/2 -translate-x-1/2 bg-[#f5ede5] py-8 sm:py-10 px-4 sm:px-12 text-center space-y-4 text-black">
          <h2 className="text-xl sm:text-2xl font-conthrax text-[#111] uppercase">
            Visit Us
          </h2>

          <p className="text-sm sm:text-base font-play max-w-3xl mx-auto leading-relaxed">
            Office – WH-05 A, Jebel Ali Industrial 1, Dubai, UAE. Phone or WhatsApp +971 58 807 5603, or email{" "}
            <a
              href="mailto:info@wedointerior.ae"
              className="text-[#caa193] font-semibold hover:underline"
            >
              info@wedointerior.ae
            </a>
            .
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 mt-6">
            <a
              href="https://wa.me/971588075603"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-play text-sm sm:text-base rounded-lg shadow-md text-center transition-colors"
            >
              ✅ Request availability by WhatsApp
            </a>
            <a
              href="mailto:info@wedointerior.ae"
              className="w-full sm:w-auto px-6 py-3 bg-[#caa193] hover:bg-[#b88f81] text-white font-play text-sm sm:text-base rounded-lg shadow-md text-center transition-colors"
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
        <div className="bg-black p-4 sm:p-10 rounded-xl border border-gray-800 space-y-6 sm:space-y-8 text-left">
          <h2 className="text-center text-xs sm:text-xl md:text-xl font-conthrax tracking-widest mb-4 sm:mb-6 uppercase text-[#caa193]">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-[#caa193] font-conthrax text-base sm:text-lg tracking-wider">
                Office Renovation vs Office Fit-out – What is the difference?
              </h3>
              <p className="font-play text-sm sm:text-base text-white pt-2 leading-relaxed">
                Office Fit-Out is the more extensive process, typically starting from a shell space with completely new partitions and MEP. If your office layout is functional but outdated and you just want to modernize it, office renovation is the better choice, faster and less expensive than a full fit-out.
              </p>
            </div>

            <div>
              <h3 className="text-[#caa193] font-conthrax text-base sm:text-lg tracking-wider">
                Cost of Office Renovation in Dubai – How much will it cost me?
              </h3>
              <p className="font-play text-sm sm:text-base text-white pt-2 leading-relaxed">
                Depends on the scope, not on the size of your office. Simple interior decoration (painting, flooring, ceiling lighting) costs approximately AED 80-200 per sq ft. Basic renovation with partitions and ceilings costs AED 200-450 per sq ft, complete renovation with new MEP costs around AED 450-800+ per sq ft.
              </p>
            </div>

            <div>
              <h3 className="text-[#caa193] font-conthrax text-base sm:text-lg tracking-wider">
                How much time does office renovation take in Dubai?
              </h3>
              <p className="font-play text-sm sm:text-base text-white pt-2 leading-relaxed">
                In most cases, office renovation in Dubai takes between 4 to 12 weeks from the scope signed until handover. The fastest projects are cosmetic renovations, which take 3-5 weeks. Projects which involve MEP modifications or any government approvals take 8-12 weeks due to additional time required to obtain permits and perform inspections on top of construction.
              </p>
            </div>

            <div>
              <h3 className="text-[#caa193] font-conthrax text-base sm:text-lg tracking-wider">
                Do I need to get approval for office renovation in Dubai?
              </h3>
              <p className="font-play text-sm sm:text-base text-white pt-2 leading-relaxed">
                It depends on the scope of the project. Any cosmetic works such as painting and flooring normally do not require any approval. Once you start changing partitions, ceiling layout or electrical schematics, approvals will normally be required from Dubai Municipality, Dubai Civil Defence, DEWA, your building master developer (and we coordinate with both Emaar and Damac), or a free zone authority like TECOM, DMCC or DIFC.
              </p>
            </div>

            <div>
              <h3 className="text-[#caa193] font-conthrax text-base sm:text-lg tracking-wider">
                Can we continue our operations during the office renovation?
              </h3>
              <p className="font-play text-sm sm:text-base text-white pt-2 leading-relaxed">
                In most cases, yes. Renovation works are phased and done out of normal working hours where your building allows. The degree of disruption will depend on the magnitude of the renovations; a cosmetic renovation will cause minimum disruption compared to MEP renovation work.
              </p>
            </div>

            <div>
              <h3 className="text-[#caa193] font-conthrax text-base sm:text-lg tracking-wider">
                Is office renovation more economical than moving to another place?
              </h3>
              <p className="font-play text-sm sm:text-base text-white pt-2 leading-relaxed">
                If your current place and leasing terms fit your business, then it would be more economical to renovate rather than move offices. You save money that would have been spent on moving expenses, new lease arrangements, and disruptions. However, moving office premises might be the only way to solve the space issues.
              </p>
            </div>

            <div>
              <h3 className="text-[#caa193] font-conthrax text-base sm:text-lg tracking-wider">
                What are the services included in an office renovation?
              </h3>
              <p className="font-play text-sm sm:text-base text-white pt-2 leading-relaxed">
                An office renovation includes the installation of flooring, partitioning, ceilings, lighting, joinery, and painting, as well as MEP works depending on the scope of the project, including electrical, HVAC, or plumbing works.
              </p>
            </div>

            <div>
              <h3 className="text-[#caa193] font-conthrax text-base sm:text-lg tracking-wider">
                What guarantee do you give on your office renovation services?
              </h3>
              <p className="font-play text-sm sm:text-base text-white pt-2 leading-relaxed">
                All our office renovations come with a workmanship warranty that is provided in writing in a fixed-price contract. This is confirmed before the start of work. WE DO will be your single point of contact for any problems after handover, as the design, approvals, and construction processes are managed in-house.
              </p>
            </div>

            <div>
              <h3 className="text-[#caa193] font-conthrax text-base sm:text-lg tracking-wider">
                Which is the best office renovation company in Dubai?
              </h3>
              <p className="font-play text-sm sm:text-base text-white pt-2 leading-relaxed">
                Choosing the best company depends on your preferences but we recommend finding companies that are registered with DED, certified according to ISO, provide a written fixed-price contract, and have in-house project managers. WE DO Interior Design &amp; Fit-Out provides all four and has {' '}
                <b className="text-[#caa193]">
                  <a href="https://wedointerior.ae/gallery">
                    250+ completed projects
                  </a>
                </b>{' '}, 15+ years of experience in the Dubai market, and Luxury Lifestyle Awards 2026.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default DProjects;