'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const testimonials = [
  {
    quote: `"Working with WeDo Interior Design has been an absolute pleasure from start to finish. Their team is creative, professional, and truly understands how to bring a space to life. From the initial consultation to the final touches, every detail was handled with care and precision."`,
    author: "— Mohammad Alchekh Asaad"
  },
  {
    quote: `"Amazing team, good energy, and they listen well. They go the extra mile to make sure you are happy with their service. Highly recommended."`,
    author: "— Ahmed Alawadhi"
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
    <section className="px-4 sm:px-6 py-10 bg-black-200">

      {/* Top Content Block */}
      <div className="lg:max-w-[70%] mx-auto bg-black p-6 sm:p-10 rounded shadow text-left space-y-6 mb-12">
        <h2 className="text-lg sm:text-xl md:text-2xl tracking-widest font-conthrax text-[#caa193] text-center">
          The WE DO Difference for Your Kitchen
        </h2>
        
        <div className="space-y-6 text-sm sm:text-base font-play text-white text-left">
          <p className="leading-relaxed">
            A kitchen renovation touches plumbing, electrical, cabinetry, and appliances all in one room; more can go wrong here than in almost any other part of an apartment, which is exactly the gap this kitchen renovation company Dubai owners keep running into when comparing quotes.
          </p>

          {/* Certifications & Track Record Section */}
          <div className="space-y-2">
            <h3 className="font-conthrax text-[#caa193] text-xs sm:text-sm tracking-wider uppercase">
              Certifications & Track Record
            </h3>
            <p className="leading-relaxed">
              We are ISO 45001:2018, ISO 14001:2015, and ISO 9001:2015 certified formal systems for safety, environment, and quality management, which can be checked together with winning the Luxury Style Awards 2026. All of it comes along with our DED registration and more than 250 successfully finished projects both for residential and commercial areas in Dubai, something one could actually check.
            </p>
          </div>

          {/* One Team, One Kitchen, One Contract Section */}
          <div className="space-y-2">
            <h3 className="font-conthrax text-[#caa193] text-xs sm:text-sm tracking-wider uppercase">
              One Team, One Kitchen, One Contract
            </h3>
            <p className="leading-relaxed">
              Our company handles all aspects of design, cabinetmaking, and installation from within one fixed-price contract, without the need to worry about coordinating with separate carpenters, electricians, and plumbers if things aren’t working together properly. Appliance selection and electrical requirements have been determined before the design phase, and nothing is ordered without on-site verification of every dimension.
            </p>
          </div>

          {/* Visual Grid for Key Facts & Who This Page Is For */}
          <div className="pt-6 border-t border-gray-800 grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            
            {/* Key Facts Section */}
            <div className="bg-[#111] p-5 rounded-lg border border-gray-800 space-y-3">
              <h3 className="font-conthrax text-[#caa193] text-xs sm:text-sm tracking-wider uppercase mb-2">
                Key Facts
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-white text-left text-sm sm:text-base leading-relaxed">
                <li>15+ years of hands-on industry experience, <b className="text-[#caa193]"><a href="https://wedointerior.ae/gallery" className="hover:underline"> 250+ completed projects </a></b> across residential and commercial categories in Dubai</li>
                <li>ISO 45001:2018, ISO 14001:2015, and ISO 9001:2015 certified; Luxury Style Awards 2026 winner</li>
                <li>DED-registered interior fit-out contractor</li>
                <li>Kitchen renovations completed as part of full apartment projects in Business Bay, Dubai Marina, and Palm Jumeirah</li>
                <li>In-house team handles design, cabinetry, and installation under one contract</li>
                <li>Kitchen renovation packages average around AED 15,000-180,000+ depending on scope, an approximate market range, not a fixed price</li>
                <li>Based in Jebel Ali Industrial, Dubai, serving communities across the city</li>
              </ul>
            </div>

            {/* Who This Page Is For Section */}
            <div className="bg-[#111] p-5 rounded-lg border border-gray-800 space-y-4 flex flex-col justify-between">
              <div>
                <h3 className="font-conthrax text-[#caa193] text-xs sm:text-sm tracking-wider uppercase mb-2">
                  Who This Page Is For
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-white text-left text-sm sm:text-base leading-relaxed">
                  <li>Owners unsure whether their kitchen needs refacing or a full replacement</li>
                  <li>Owners deciding between an open-plan and a closed kitchen layout</li>
                  <li>Owners renovating a small or studio-apartment kitchen</li>
                  <li>Landlords upgrading a kitchen between tenancies</li>
                </ul>
              </div>

              {/* Adjusted Image Placement */}
              <div className="relative h-48 w-full rounded-md overflow-hidden border border-[#caa193]/30 group mt-auto">
                <Image
                  src="/images/l-shaped-kitchen-design-dubai.webp"
                  alt="L-shaped kitchen design Dubai"
                  title="L-Shaped Kitchen Design Dubai"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                />
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Kitchen Decision Block */}
      <div className="lg:max-w-[70%] mx-auto bg-black p-6 sm:p-10 rounded-lg border border-gray-800 space-y-6 mb-12 text-left">
        
        {/* Section Header & Intro */}
        <div className="space-y-3">
          <h2 className="text-lg sm:text-xl md:text-2xl tracking-widest font-conthrax text-[#caa193] text-center sm:text-left">
            Start Here: Vinyl Wrap, Refacing, or Full Replacement?
          </h2>
          <p className="text-sm sm:text-base text-white font-play leading-relaxed">
            This is the first real decision in any kitchen remodeling project in Dubai, and it comes before color, style, or cabinet brand: how much of the existing kitchen is actually worth keeping. There are three levels, not two, and WE DO scopes and prices each one separately rather than defaulting you to the most expensive option.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto rounded-lg border border-gray-800 bg-[#111]">
          <table className="w-full text-left text-sm sm:text-base font-play text-white border-collapse">
            <thead>
              <tr className="bg-black border-b border-gray-800 text-[#caa193] font-conthrax text-xs sm:text-sm">
                <th className="p-3 sm:p-4">Factor</th>
                <th className="p-3 sm:p-4">Vinyl Wrapping</th>
                <th className="p-3 sm:p-4">Kitchen Refacing</th>
                <th className="p-3 sm:p-4">Kitchen Replacement</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              <tr>
                <td className="p-3 sm:p-4 font-semibold text-[#caa193]">What changes</td>
                <td className="p-3 sm:p-4">Vinyl film applied over existing cabinet doors</td>
                <td className="p-3 sm:p-4">Doors, drawer fronts, hardware, countertop</td>
                <td className="p-3 sm:p-4">Entire cabinet boxes, configuration, countertop</td>
              </tr>
              <tr>
                <td className="p-3 sm:p-4 font-semibold text-[#caa193]">Layout changes</td>
                <td className="p-3 sm:p-4">Not possible</td>
                <td className="p-3 sm:p-4">Not possible; sink and appliance positions stay fixed</td>
                <td className="p-3 sm:p-4">Possible, full redesign</td>
              </tr>
              <tr>
                <td className="p-3 sm:p-4 font-semibold text-[#caa193]">Typical timeline</td>
                <td className="p-3 sm:p-4">1-3 days</td>
                <td className="p-3 sm:p-4">Days to about a week</td>
                <td className="p-3 sm:p-4">2-4 weeks</td>
              </tr>
              <tr>
                <td className="p-3 sm:p-4 font-semibold text-[#caa193]">Relative cost</td>
                <td className="p-3 sm:p-4">Lowest</td>
                <td className="p-3 sm:p-4">Lower</td>
                <td className="p-3 sm:p-4">Higher</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Bottom Grid: Guidelines + Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-2">
          
          <div className="bg-[#111] p-5 rounded-lg border border-gray-800 space-y-3">
            <h3 className="font-conthrax text-[#caa193] text-xs sm:text-sm tracking-wider uppercase">
              How to tell which one you need:
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-white font-play leading-relaxed">
              <li>
                Cabinet boxes and doors in good condition, just want a fast color or finish change → <span className="text-[#caa193] font-semibold">Vinyl Wrapping</span>.
              </li>
              <li>
                Cabinet boxes dry, square, and structurally sound, and the layout already works, but doors and hardware are dated → <span className="text-[#caa193] font-semibold">Refacing</span>.
              </li>
              <li>
                Boxes swollen, water-damaged, or you want to change where the sink or hob sits → <span className="text-[#caa193] font-semibold">Replacement</span>.
              </li>
              <li>
                Converting between an open and closed layout → <span className="text-[#caa193] font-semibold">Replacement</span>, since plumbing and walls move with it.
              </li>
            </ul>
            <p className="text-sm sm:text-base text-white font-play pt-2 italic">
              A site visit settles this in minutes; wrapping or refacing a box that&apos;s warped from a slow leak under the sink just delays the real fix by a year.
            </p>
          </div>

          <div className="relative min-h-[220px] rounded-lg overflow-hidden border border-[#caa193]/30 group">
            <Image
              src="/images/small-kitchen-renovation-dubai.webp"
              alt="Small kitchen renovation Dubai apartment"
              title="Small Kitchen Renovation Dubai"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
            />
          </div>

        </div>
      </div>

      {/* Bottom CTA Section */}
      <div className="bg-[#f5ede5] py-10 text-center space-y-4 mb-16 rounded-lg">
        <h3 className="text-base sm:text-xl font-conthrax uppercase text-black">
          Get In Touch With Us
        </h3>
        <p className="text-sm sm:text-base font-play text-gray-800">
          Ready to plan your Kitchen renovation? Contact WE DO for a free site visit and itemized quote.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4 px-4">
          <a
            href="https://wa.me/971588075603"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-play text-sm sm:text-base rounded w-full sm:w-auto text-center transition-colors"
          >
            ✅ Request availability by WhatsApp
          </a>
          <a
            href="mailto:info@wedointerior.ae"
            className="px-6 py-3 bg-[#caa193] hover:bg-[#b88f81] text-white font-play text-sm sm:text-base rounded w-full sm:w-auto text-center transition-colors"
          >
            ✉️ Request availability by E-mail
          </a>
        </div>
      </div>

      {/* Section: Choosing Your Kitchen Layout */}
      <div className="lg:max-w-[70%] mx-auto bg-black p-6 sm:p-10 rounded-lg border border-gray-800 mb-12 text-left">
        
        <h2 className="text-lg sm:text-xl md:text-2xl tracking-widest font-conthrax text-[#caa193] mb-6 text-center sm:text-left">
          Choosing Your Kitchen Layout
        </h2>

        {/* Top Floating Image Block */}
        <div className="overflow-hidden mb-6">
          <div className="float-none sm:float-right sm:ml-6 mb-4 w-full sm:w-72 h-56 sm:h-72 relative rounded-lg overflow-hidden border border-[#caa193]/30 shadow-lg">
            <Image
              src="/images/studio-kitchen-renovation-dubai.webp"
              alt="Studio kitchen renovation Dubai"
              title="Studio Kitchen Renovation Dubai"
              fill
              className="object-cover"
            />
          </div>

          <div className="text-sm sm:text-base font-play text-white leading-relaxed space-y-4">
            <p>
              Open kitchen vs closed kitchen is the biggest configuration call after the wrap-reface-replace decision, and it&apos;s as much cultural as architectural. Older buildings across areas like Bur Dubai, Karama, and Al Qusais were typically built with closed, walled-off kitchens that better contain smell and noise, still preferred by households that cook daily with strong spices.
            </p>
            <p>
              Newer developments, especially in JVC and JLT, lean toward open-plan kitchens that blend into the living space, making smaller units feel larger. As a <b className="text-[#caa193]"><a href="https://www.google.com/search?client=ms-android-transsion&hs=2lMq&sca_esv=7e07767bf3a02bf7&hl=en-US&cs=1&sxsrf=APpeQntHxeIx8-P0-gLZlow3YhlNMTysCw:1785601304835&kgmid=/g/11pyc3sd1k&q=Interior+Design+Company+Dubai+-+WeDo+Interior+Design+%26+Fit+out&shem=epsd1,ltae,rimspwouoe&shndl=30&source=sh/x/loc/act/m1/4&kgs=3b09368701ef2f3b&utm_source=epsd1,ltae,rimspwouoe,sh/x/loc/act/m1/4" className="hover:underline"> luxury interior design company in Dubai </a></b>, WE DO scope this decision at the first site visit, since it changes the electrical and plumbing plan before anything else is designed.
            </p>
            <p>
              Neither is objectively better. A semi-open arrangement, a glass or sliding partition, open during light use and closed during heavy cooking, comes up often as a middle ground between the two.
            </p>
          </div>
        </div>

        <div className="clear-both">
          {/* Table */}
          <div className="overflow-x-auto rounded-lg border border-gray-800 bg-[#111] my-8">
            <table className="w-full text-left text-sm sm:text-base font-play text-white border-collapse">
              <thead>
                <tr className="bg-black border-b border-gray-800 text-[#caa193] font-conthrax text-xs sm:text-sm">
                  <th className="p-3 sm:p-4">Factor</th>
                  <th className="p-3 sm:p-4">Closed Kitchen</th>
                  <th className="p-3 sm:p-4">Open Kitchen</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                <tr>
                  <td className="p-3 sm:p-4 font-semibold text-[#caa193]">Smell &amp; noise control</td>
                  <td className="p-3 sm:p-4">Contained</td>
                  <td className="p-3 sm:p-4">Spreads to living areas</td>
                </tr>
                <tr>
                  <td className="p-3 sm:p-4 font-semibold text-[#caa193]">Feels larger in small units</td>
                  <td className="p-3 sm:p-4">No</td>
                  <td className="p-3 sm:p-4">Yes</td>
                </tr>
                <tr>
                  <td className="p-3 sm:p-4 font-semibold text-[#caa193]">Natural light reach</td>
                  <td className="p-3 sm:p-4">Limited</td>
                  <td className="p-3 sm:p-4">Better</td>
                </tr>
                <tr>
                  <td className="p-3 sm:p-4 font-semibold text-[#caa193]">Wall storage</td>
                  <td className="p-3 sm:p-4">More</td>
                  <td className="p-3 sm:p-4">Less</td>
                </tr>
                <tr>
                  <td className="p-3 sm:p-4 font-semibold text-[#caa193]">Structural work to convert</td>
                  <td className="p-3 sm:p-4">—</td>
                  <td className="p-3 sm:p-4">Removing a wall needs NOC</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="space-y-6 pt-2">
            <div className="space-y-2">
              <h3 className="font-conthrax text-[#caa193] text-xs sm:text-sm tracking-wider uppercase">
                Kitchen Shape: L-Shape, U-Shape, Galley &amp; Island
              </h3>
              <p className="font-play text-sm sm:text-base text-white leading-relaxed">
                L-shape kitchen Dubai layout is ideal for small and medium-sized kitchens and maintains an optimal work triangle. The U-shape kitchen Dubai layout is best suited for large kitchens since it makes use of the maximum possible counter and storage spaces. Single wall or galley kitchen layout is the most space-saving design suitable for studio and 1-bedroom apartments.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-conthrax text-[#caa193] text-xs sm:text-sm tracking-wider uppercase">
                Small &amp; Studio Kitchens
              </h3>
              <p className="font-play text-sm sm:text-base text-white leading-relaxed">
                The small kitchen renovation Dubai and the studio kitchen renovation Dubai are projects that work best when they follow the galley kitchen layout or the single wall kitchen layout, and where appliances used are slimline with vertical storage as opposed to the use of wide base cabinets. The addition of an extension of the countertop can also help in increasing the amount of space while maintaining it as a temporary feature.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-conthrax text-[#caa193] text-xs sm:text-sm tracking-wider uppercase">
                Dual Kitchens
              </h3>
              <p className="font-play text-sm sm:text-base text-white leading-relaxed">
                Larger apartments and penthouses sometimes include a &quot;show kitchen&quot;, open, for light use and guests, paired with a separate working kitchen behind it for heavier cooking. It&apos;s a real option, but only where the unit has the floor area to support two kitchen zones. For a standard 1-3 bedroom apartment, one well-planned kitchen almost always serves better.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Section: Designing the Details */}
      <div className="lg:max-w-[70%] mx-auto bg-black p-6 sm:p-10 rounded-lg border border-gray-800 mb-12 text-left">
        
        <h2 className="text-lg sm:text-xl md:text-2xl tracking-widest font-conthrax text-[#caa193] mb-6 text-center sm:text-left">
          Designing the Details
        </h2>

        <div className="overflow-hidden mb-6">
          <div className="float-none sm:float-left sm:mr-6 mb-4 w-full sm:w-72 h-56 sm:h-72 relative rounded-lg overflow-hidden border border-[#caa193]/30 shadow-lg">
            <Image
              src="/images/custom-kitchen-cabinets-dubai.webp"
              alt="Custom kitchen cabinets Dubai"
              title="Custom Kitchen Cabinets Dubai"
              fill
              className="object-cover"
            />
          </div>

          <div className="text-sm sm:text-base font-play text-white leading-relaxed space-y-4">
            <div>
              <h3 className="font-conthrax text-[#caa193] text-xs sm:text-sm tracking-wider uppercase mb-2">
                Cabinets
              </h3>
              <p>
                Kitchen cabinets Dubai use MDF material covered in laminate or acrylic, or solid-wood veneers for a more upscale appearance. Regarding design, the most popular choices are a handle-free, minimalistic German kitchen Dubai design, an Italian kitchen style Dubai, or a completely customized design, regardless of whether it is available at any particular showroom brand name.
              </p>
            </div>

            <div>
              <h3 className="font-conthrax text-[#caa193] text-xs sm:text-sm tracking-wider uppercase mb-2">
                Storage
              </h3>
              <p>
                Prioritizing kitchen storage solutions Dubai includes pull-out pantry cabinets, carousel corner shelves, and soft-closing drawer organizers. These will have much more impact on usability than the number of cabinets you have.
              </p>
            </div>
          </div>
        </div>

        <div className="clear-both pt-2 space-y-6">
          <div className="space-y-1">
            <h3 className="font-conthrax text-[#caa193] text-xs sm:text-sm tracking-wider uppercase">
              Countertops &amp; Backsplash
            </h3>
            <p className="font-play text-sm sm:text-base text-white leading-relaxed">
              Granite or quartz is the default countertop material, while the backsplash will usually be tiled with ceramic, glass, or porcelain tiles.
            </p>
          </div>

          <div className="space-y-1">
            <h3 className="font-conthrax text-[#caa193] text-xs sm:text-sm tracking-wider uppercase">
              Appliances
            </h3>
            <p className="font-play text-sm sm:text-base text-white leading-relaxed">
              Most Dubai apartments use electric or induction hobs for cooking rather than gas, which affects the electrical load calculation before cabinetry is ordered. Appliance selection should happen before the cabinetry design is finalized, not after; reversing that order is one of the most common causes of rework.
            </p>
          </div>

          <div className="space-y-1">
            <h3 className="font-conthrax text-[#caa193] text-xs sm:text-sm tracking-wider uppercase">
              Lighting
            </h3>
            <p className="font-play text-sm sm:text-base text-white leading-relaxed">
              Good kitchen lighting uses three layers: under-cabinet task lighting for the countertop, a pendant or two over an island or breakfast bar, and ambient ceiling lighting for the rest of the room. Task lighting is the one most kitchens skip, and then regret.
            </p>
          </div>

          <div className="space-y-1">
            <h3 className="font-conthrax text-[#caa193] text-xs sm:text-sm tracking-wider uppercase">
              Ventilation
            </h3>
            <p className="font-play text-sm sm:text-base text-white leading-relaxed">
              Kitchen ventilation in Dubai means an extractor hood matched to the kitchen&apos;s size and layout, non-negotiable in a closed kitchen, where cooking heat and smell have nowhere else to go. Ducted extraction performs better than recirculating filters for regular, daily cooking.
            </p>
          </div>
        </div>
      </div>

      {/* Section: What's Shaping Dubai Kitchens Right Now */}
      <div className="lg:max-w-[70%] mx-auto bg-black p-6 sm:p-10 rounded-lg border border-gray-800 mb-12 text-left">
        
        <h2 className="text-lg sm:text-xl md:text-2xl tracking-widest font-conthrax text-[#caa193] mb-6 text-center sm:text-left">
          What&apos;s Shaping Dubai Kitchens Right Now
        </h2>

        <div className="overflow-hidden mb-6">
          <div className="float-none sm:float-right sm:ml-6 mb-4 w-full sm:w-72 h-56 sm:h-72 relative rounded-lg overflow-hidden border border-[#caa193]/30 shadow-lg">
            <Image
              src="/images/Two-Tone Kitchen Cabinets Dubai.webp"
              alt="Two tone kitchen cabinets Dubai"
              title="Two-Tone Kitchen Cabinets Dubai"
              fill
              className="object-cover"
            />
          </div>

          <div className="text-sm sm:text-base font-play text-white leading-relaxed space-y-4">
            <p>
              A few kitchen renovation trends keep showing up across current Dubai kitchen briefs, beyond the standard cabinet-and-countertop choices covered above.
            </p>

            <div>
              <h3 className="font-conthrax text-[#caa193] text-xs sm:text-sm tracking-wider uppercase mb-1">
                Handle-Less, Minimalist Fronts
              </h3>
              <p>
                Push-to-open or integrated-channel handles now come up more often than visible hardware. The line reads cleaner, and it&apos;s easier to keep free of grease marks.
              </p>
            </div>

            <div>
              <h3 className="font-conthrax text-[#caa193] text-xs sm:text-sm tracking-wider uppercase mb-1">
                Two-Tone Cabinetry
              </h3>
              <p>
                Upper and lower cabinets in two different finishes, often a lighter upper and darker lower, is a popular way to add visual interest without the cost of a fully custom design.
              </p>
            </div>
          </div>
        </div>

        <div className="clear-both pt-2 space-y-6">
          <div className="space-y-1">
            <h3 className="font-conthrax text-[#caa193] text-xs sm:text-sm tracking-wider uppercase">
              Mixed-Material Islands
            </h3>
            <p className="font-play text-sm sm:text-base text-white leading-relaxed">
              Pairing a stone or quartz countertop with a contrasting wood-finish island base is a consistent request, adding warmth to what&apos;s otherwise a hard-surface-heavy room.
            </p>
          </div>

          <div className="space-y-1">
            <h3 className="font-conthrax text-[#caa193] text-xs sm:text-sm tracking-wider uppercase">
              Integrated, Panel-Ready Appliances
            </h3>
            <p className="font-play text-sm sm:text-base text-white leading-relaxed">
              Refrigerators and dishwashers finished with a matching cabinet panel, rather than visible stainless steel, are a common request at the design stage now. Adding one later usually means replacing the whole appliance rather than fitting a panel to it.
            </p>
          </div>

          <div className="space-y-1">
            <h3 className="font-conthrax text-[#caa193] text-xs sm:text-sm tracking-wider uppercase">
              Touchless &amp; Smart Fixtures
            </h3>
            <p className="font-play text-sm sm:text-base text-white leading-relaxed">
              The incorporation of touchless faucets and sensor ovens, along with the installation of smart home wiring, is often discussed in the design process since retrofitting them later is more expensive than installing them from the beginning.
            </p>
          </div>

          <div className="space-y-1">
            <h3 className="font-conthrax text-[#caa193] text-xs sm:text-sm tracking-wider uppercase">
              Sustainable, Low-VOC Materials
            </h3>
            <p className="font-play text-sm sm:text-base text-white leading-relaxed">
              Using low-VOC finishes and local products, especially in cabinetry and countertops, has become an initiative that is brought up by the clients without us suggesting it.
            </p>
          </div>
        </div>
      </div>

      {/* Section: Kitchen Renovation Cost in Dubai */}
      <div className="lg:max-w-[70%] mx-auto bg-black p-6 sm:p-10 rounded shadow space-y-6 mb-12 text-left">
        
        <h2 className="text-lg sm:text-xl md:text-2xl font-conthrax text-[#caa193] text-center">
          Kitchen Renovation Cost in Dubai
        </h2>

        <p className="font-play text-sm sm:text-base text-white leading-relaxed">
          Kitchen renovation cost Dubai depends on cabinetry extent, countertop material, appliance integration, and whether the configuration changes, rather than kitchen size alone. These figures are approximate market ranges, not a fixed quote for any specific kitchen:
        </p>

        <div className="pt-2 overflow-x-auto">
          <table className="w-full text-left text-white font-play text-sm sm:text-base border border-[#caa193]">
            <thead>
              <tr className="text-[#caa193] bg-neutral-900/60">
                <th className="p-3 border border-[#caa193] font-conthrax text-xs sm:text-sm uppercase">Scope</th>
                <th className="p-3 border border-[#caa193] font-conthrax text-xs sm:text-sm uppercase">What&apos;s Included</th>
                <th className="p-3 border border-[#caa193] font-conthrax text-xs sm:text-sm uppercase">Approximate Cost (AED)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border border-[#caa193] text-[#caa193] font-semibold">
                  Budget Kitchen Renovation Dubai
                </td>
                <td className="p-3 border border-[#caa193]">
                  Cabinet refacing, new countertop, same configuration
                </td>
                <td className="p-3 border border-[#caa193] whitespace-nowrap">
                  around 15,000 – 35,000
                </td>
              </tr>
              <tr>
                <td className="p-3 border border-[#caa193] text-[#caa193] font-semibold">
                  Mid-Range Remodel
                </td>
                <td className="p-3 border border-[#caa193]">
                  New cabinetry, countertops, backsplash, appliances, same configuration
                </td>
                <td className="p-3 border border-[#caa193] whitespace-nowrap">
                  around 40,000 – 80,000
                </td>
              </tr>
              <tr>
                <td className="p-3 border border-[#caa193] text-[#caa193] font-semibold">
                  Luxury Kitchen Renovation Dubai
                </td>
                <td className="p-3 border border-[#caa193]">
                  Configuration change, premium materials, island, full electrical &amp; plumbing
                </td>
                <td className="p-3 border border-[#caa193] whitespace-nowrap">
                  around 90,000 – 180,000+
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="font-play text-sm sm:text-base text-white pt-2 leading-relaxed">
          Kitchens typically account for a disproportionate share of a <b className="text-[#caa193]"><a href="https://wedointerior.ae/apartment-renovation-dubai" className="hover:underline"> full apartment renovation </a></b> budget relative to their floor area, since cabinetry, plumbing, and appliances are all concentrated in one room.
        </p>

      </div>

      {/* Section: How the Renovation Happens */}
<div className="lg:max-w-[70%] mx-auto bg-black p-6 sm:p-10 rounded-lg border border-gray-800 space-y-8 mb-12 text-left">
  
  {/* Section Header */}
  <div className="text-center space-y-2">
    <h2 className="text-lg sm:text-xl md:text-2xl font-conthrax text-[#caa193]">
      How the Renovation Happens
    </h2>
    <p className="font-play text-sm sm:text-base text-gray-300">
      Every kitchen renovation process engagement with WE DO runs through three structured phases.
    </p>
  </div>

  {/* Phases Container */}
  <div className="space-y-8 font-play text-sm sm:text-base text-white">
    
    {/* Step 1: Image Left, Content Right */}
    <div className="bg-[#111] p-5 sm:p-6 rounded-lg border border-gray-800 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
      
      {/* Image Block (Left) */}
      <div className="lg:col-span-5 relative h-56 sm:h-64 rounded-lg overflow-hidden border border-[#caa193]/30 shadow-lg">
        <Image
          src="/images/kitchen-renovation-in-progress-dubai.webp"
          alt="Kitchen Planning and Design Phase Dubai"
          title="Kitchen Planning and Design"
          fill
          className="object-cover"
        />
      </div>

      {/* Content Block (Right) */}
      <div className="lg:col-span-7 space-y-3">
        <div className="flex items-center space-x-3">
          
          <h3 className="text-[#caa193] font-conthrax text-sm sm:text-base tracking-wider uppercase">
            Planning &amp; Design
          </h3>
        </div>
        <p className="leading-relaxed text-gray-200">
          It starts with a site visit, measurements, a layout assessment, and the refacing-vs-replacement decision, worked through with you on the spot. The visit itself carries no upfront charge, and the cost is waived entirely once you confirm you&apos;re moving ahead with WE DO. From there, cabinetry layout, materials, and appliance placement are finalized and visualized before anything is ordered; appliance selection happens at this stage specifically, since it determines the electrical load the cabinetry design has to work around. Where the layout changes or a wall is affected, we prepare and submit the building management NOC in parallel with design work, rather than after it.
        </p>
      </div>

    </div>

    {/* Step 2: Content Left, Image Right */}
    <div className="bg-[#111] p-5 sm:p-6 rounded-lg border border-gray-800 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
      
      {/* Content Block (Left on Large Screens) */}
      <div className="lg:col-span-7 space-y-3 order-2 lg:order-1">
        <div className="flex items-center space-x-3">
          
          <h3 className="text-[#caa193] font-conthrax text-sm sm:text-base tracking-wider uppercase">
            Construction
          </h3>
        </div>
        <p className="leading-relaxed text-gray-200">
          Old cabinetry and fixtures come out first, with plumbing and electrical points capped safely, worth doing properly, since water and power lines run close together in a kitchen. New circuits and water points go in to match the finalized layout before any cabinetry is installed, since rerouting either one afterward means undoing finished work rather than adding to it. Units, countertops, and backsplash are fitted once electrical and plumbing work is complete and inspected.
        </p>
      </div>

      {/* Image Block (Right on Large Screens) */}
      <div className="lg:col-span-5 relative h-56 sm:h-64 rounded-lg overflow-hidden border border-[#caa193]/30 shadow-lg order-1 lg:order-2">
        <Image
          src="/images/Kitchen Cabinet Installation Dubai.webp"
          alt="Kitchen cabinet installation Dubai"
          title="Kitchen Cabinet Installation Dubai"
          fill
          className="object-cover"
        />
      </div>

    </div>

    {/* Step 3: Image Left, Content Right */}
    <div className="bg-[#111] p-5 sm:p-6 rounded-lg border border-gray-800 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
      
      {/* Image Block (Left) */}
      <div className="lg:col-span-5 relative h-56 sm:h-64 rounded-lg overflow-hidden border border-[#caa193]/30 shadow-lg">
        <Image
          src="/images/completed-kitchen-renovation-dubai.webp"
          alt="Completed kitchen renovation Dubai"
          title="Completed Kitchen Renovation Dubai"
          fill
          className="object-cover"
        />
      </div>

      {/* Content Block (Right) */}
      <div className="lg:col-span-7 space-y-3">
        <div className="flex items-center space-x-3">
          
          <h3 className="text-[#caa193] font-conthrax text-sm sm:text-base tracking-wider uppercase">
            Handover
          </h3>
        </div>
        <p className="leading-relaxed text-gray-200">
          Every appliance is tested, a snagging check covers the full kitchen, and your workmanship warranty begins from this date. A basic refresh typically takes under 2 weeks from start to finish; a full custom kitchen with a layout change runs 4-6 weeks, longer if imported materials are involved. This kitchen renovation timeline Dubai guide is a starting point, confirmed exactly once your scope is locked in.
        </p>
      </div>

    </div>

  </div>

</div>

      {/* Section: Five Kitchen Renovation Mistakes to Avoid */}
      <div className="lg:max-w-[70%] mx-auto bg-black p-6 sm:p-10 rounded shadow space-y-6 mb-12 text-left">
        <h2 className="text-lg sm:text-xl md:text-2xl font-conthrax text-[#caa193] text-center">
          Five Kitchen Renovation Mistakes to Avoid
        </h2>

        <div className="overflow-hidden">
          <div className="float-none sm:float-right sm:ml-6 mb-4 w-full sm:w-72 h-56 sm:h-72 relative rounded-lg overflow-hidden border border-[#caa193]/30 shadow-lg">
            <Image
              src="/images/kitchen-renovation-craftsmanship-dubai.webp"
              alt="Kitchen renovation craftsmanship Dubai"
              title="Kitchen Renovation Craftsmanship Dubai"
              fill
              className="object-cover"
            />
          </div>

          <div className="font-play text-sm sm:text-base text-white space-y-4 leading-relaxed">
            <p>
              <b className="text-[#caa193] font-conthrax block text-base sm:text-lg mb-1">
                1. Ordering cabinetry before confirming appliance dimensions.
              </b>
              Appliances and cabinetry need to be sized together; ordering boxes first often means a fridge or oven that doesn&apos;t actually fit the gap left for it.
            </p>

            <p>
              <b className="text-[#caa193] font-conthrax block text-base sm:text-lg mb-1">
                2. Not checking electrical load capacity before finalizing the design.
              </b>
              Electric and induction cooking draw more power than gas; confirm the circuit can handle it before the kitchen is built around it.
            </p>

            <p>
              <b className="text-[#caa193] font-conthrax block text-base sm:text-lg mb-1">
                3. Refacing a cabinet box that&apos;s actually water-damaged.
              </b>
              New doors on a swollen or rotting box look fine for a few months, then fail. If there&apos;s been a leak, replacement is the only real fix.
            </p>

            <p>
              <b className="text-[#caa193] font-conthrax block text-base sm:text-lg mb-1">
                4. Removing a kitchen wall without confirming it isn&apos;t load-bearing.
              </b>
              Opening up a closed kitchen needs a structural check and a building management NOC; skip this and the wall, or the approval, can become a real problem.
            </p>

            <p>
              <b className="text-[#caa193] font-conthrax block text-base sm:text-lg mb-1">
                5. Underestimating ventilation, especially in a closed kitchen.
              </b>
              Poor extraction means grease buildup, lingering smell, and extra strain on the AC trying to clear the heat; cheaper to size the hood correctly the first time.
            </p>

            <p className="pt-2 italic border-t border-gray-800 mt-4 text-sm sm:text-base">
              WE DO&apos;s process is built to catch all five before construction starts: appliance selection and electrical load confirmed at the design stage, structural checks before any wall comes down, and ventilation sized to the actual kitchen, not a generic default.
            </p>
          </div>
        </div>
      </div>

      {/* Auto-Play Testimonials Carousel */}
      <div
        className="lg:max-w-[70%] mx-auto bg-black p-6 sm:p-10 rounded shadow space-y-6 mb-12 relative overflow-hidden text-left"
        onMouseEnter={() => setIsPlaying(false)}
        onMouseLeave={() => setIsPlaying(true)}
      >
        <h2 className="text-lg sm:text-xl md:text-2xl font-conthrax text-[#caa193] text-center mb-2">
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

      {/* Section: Visit Us & CTA */}
      <div className="bg-[#f5ede5] py-10 text-center space-y-4 mb-12 text-black rounded-lg">
        <h2 className="text-lg sm:text-xl md:text-2xl font-conthrax uppercase text-[#111]">
          Visit Us
        </h2>

        <p className="text-sm sm:text-base font-play max-w-3xl mx-auto px-4 leading-relaxed">
          <strong>WE DO Interior Design &amp; Fit-Out</strong>
          <br />
          WH-05 A, Jebel Ali Industrial 1, Dubai, UAE
          <br />
          Phone/WhatsApp: +971 58 807 5603 | Email: info@wedointerior.ae
          <br />
          Book Your Consultation Online:{" "}
          <a
            href="https://wedointerior.ae/contact-us"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#caa193] font-semibold hover:underline"
          >
            https://wedointerior.ae/contact-us
          </a>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6 px-4">
          <a
            href="https://wa.me/971588075603"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-play text-sm sm:text-base rounded w-full sm:w-auto text-center transition-colors"
          >
            ✅ Request availability by WhatsApp
          </a>
          <a
            href="mailto:info@wedointerior.ae"
            className="px-6 py-3 bg-[#caa193] hover:bg-[#b88f81] text-white font-play text-sm sm:text-base rounded w-full sm:w-auto text-center transition-colors"
          >
            ✉️ Request availability by E-mail
          </a>
        </div>
      </div>

      {/* Map Section */}
      <div className="w-full rounded-lg overflow-hidden my-12 shadow-lg" style={{ height: "450px" }}>
        <iframe
          src="https://maps.google.com/maps?q=X4RG%2B39W+Jebel+Ali+Industrial+1+Dubai&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          title="Interior Design Company Dubai - WeDo Interior Design & Fit out Location"
        ></iframe>
      </div> 

      {/* FAQs Section */}
      <div className="lg:max-w-[70%] mx-auto bg-black p-6 sm:p-10 rounded shadow space-y-6 mb-12 text-left">
        <h2 className="text-lg sm:text-xl md:text-2xl font-conthrax text-[#caa193] text-center">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          <div>
            <h3 className="font-conthrax text-[#caa193] text-xs sm:text-sm uppercase">
              How much will remodeling your kitchen cost in Dubai?
            </h3>
            <p className="font-play text-sm sm:text-base text-white py-1 leading-relaxed">
              For a budget refresh, it will cost about AED 15,000-35,000; a mid-level kitchen remodel with cabinetry and countertops will be between AED 40,000-80,000, and for complete custom kitchen remodels including layout, it will range from AED 90,000-180,000. The above prices are estimated market prices, and you should ask for a written, fixed price.
            </p>
          </div>

          <div>
            <h3 className="font-conthrax text-[#caa193] text-xs sm:text-sm uppercase">
              Which is the best kitchen remodeling company in Dubai?
            </h3>
            <p className="font-play text-sm sm:text-base text-white py-1 leading-relaxed">
              You need to check a DED-licensed kitchen renovation company that offers you a written fixed price, shows actual projects and not renders, and also provides design, cabinetry, and installation under one contract. WE DO Interior Design &amp; Fit-Out fits all these criteria, and it has done several kitchen projects in Dubai.
            </p>
          </div>

          <div>
            <h3 className="font-conthrax text-[#caa193] text-xs sm:text-sm uppercase">
              Is it worth renovating the kitchen when planning to lease out an apartment in Dubai?
            </h3>
            <p className="font-play text-sm sm:text-base text-white py-1 leading-relaxed">
              Yes, it is generally worth it if the kitchen is old-fashioned, as this room is one of the first that potential tenants evaluate. However, the level of renovation should correspond to the category of the future rental income, because an over-specified luxurious kitchen will hardly pay off in the middle-income rental housing market.
            </p>
          </div>

          <div>
            <h3 className="font-conthrax text-[#caa193] text-xs sm:text-sm uppercase">
              What type of kitchen should I go for in my Dubai apartment? Open or closed?
            </h3>
            <p className="font-play text-sm sm:text-base text-white py-1 leading-relaxed">
              It depends on the frequency of your cooking and on how many people live in your family. Closed kitchens are better for containing smells and noises, as well as for cooking every day using spicy products. Open kitchens make small apartments bigger and brighter.
            </p>
          </div>

          <div>
            <h3 className="font-conthrax text-[#caa193] text-xs sm:text-sm uppercase">
              Kitchen refacing or remodeling, which one should I go for?
            </h3>
            <p className="font-play text-sm sm:text-base text-white py-1 leading-relaxed">
              If your cabinets&apos; boxes are sturdy and the kitchen layout is fine, then you will need refacing, which is more economical and less time-consuming. In case your cabinets are damaged by water or you require a change in your kitchen layout, you should go for remodeling.
            </p>
          </div>

          <div>
            <h3 className="font-conthrax text-[#caa193] text-xs sm:text-sm uppercase">
              Which is the most common mistake made during kitchen renovation in Dubai?
            </h3>
            <p className="font-play text-sm sm:text-base text-white py-1 leading-relaxed">
              Making cabinetry orders before verifying the dimensions and electrical load requirements of your appliances, like a fridge or oven that cannot fit in a certain space and vice versa.
            </p>
          </div>

          <div>
            <h3 className="font-conthrax text-[#caa193] text-xs sm:text-sm uppercase">
              How long does it take to remodel a kitchen?
            </h3>
            <p className="font-play text-sm sm:text-base text-white py-1 leading-relaxed">
              A basic refresh takes under 2 weeks. A full custom kitchen with a layout change typically runs 4-6 weeks, longer with imported materials.
            </p>
          </div>

          <div>
            <h3 className="font-conthrax text-[#caa193] text-xs sm:text-sm uppercase">
              Do I need approval to renovate my kitchen in Dubai?
            </h3>
            <p className="font-play text-sm sm:text-base text-white py-1 leading-relaxed">
              Cosmetic changes like refacing usually don&apos;t need approval. Removing or adding a wall, or major electrical and plumbing changes, needs a building management NOC, and sometimes Dubai Municipality approval.
            </p>
          </div>

          <div>
            <h3 className="font-conthrax text-[#caa193] text-xs sm:text-sm uppercase">
              Can I convert my closed kitchen to an open layout?
            </h3>
            <p className="font-play text-sm sm:text-base text-white py-1 leading-relaxed">
              Generally yes, if the wall is not bearing, but it requires a NOC from the building management, as well as sometimes an engineering assessment, first.
            </p>
          </div>

          <div>
            <h3 className="font-conthrax text-[#caa193] text-xs sm:text-sm uppercase">
              What is a modular kitchen?
            </h3>
            <p className="font-play text-sm sm:text-base text-white py-1 leading-relaxed">
              It is the one made from pre-engineered units put together on site and not custom built from scratch, normally quicker and cheaper to install.
            </p>
          </div>

          <div>
            <h3 className="font-conthrax text-[#caa193] text-xs sm:text-sm uppercase">
              Do I need a dual (show + working) kitchen for my small apartment?
            </h3>
            <p className="font-play text-sm sm:text-base text-white py-1 leading-relaxed">
              No, dual kitchens can only be justified in cases when the floor area is big enough for two kitchen zones; that is normally associated with large apartments or penthouses. For a regular 1-3 bedroom apartment, one good kitchen is better than dual kitchen space.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DProjects;