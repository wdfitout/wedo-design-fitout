'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const textImage = {
  src: '/images/apartment-materials-finishes-dubai.webp',
  alt: 'Apartment renovation materials and finishes in Dubai',
  title: 'Apartment Renovation Materials & Finishes Dubai'
};

const galleryImages = [
  {
    src: '/images/apartment-kitchen-renovation-dubai.webp',
    alt: 'Modern apartment kitchen renovation in Dubai',
    title: 'Apartment Kitchen Renovation Dubai'
  },
  {
    src: '/images/apartment-open-plan-living-dubai.webp',
    alt: 'Open-plan apartment living room renovation in Dubai',
    title: 'Open-Plan Apartment Living Renovation Dubai'
  },
  {
    src: '/images/apartment-custom-wardrobe-joinery-dubai.webp',
    alt: 'Custom built-in wardrobe and joinery in a Dubai apartment',
    title: 'Custom Apartment Wardrobe & Joinery Dubai'
  },
  {
    src: '/images/apartment-bathroom-vanity-fitout-dubai.webp',
    alt: 'Custom bathroom vanity fit-out in a Dubai apartment',
    title: 'Apartment Bathroom Vanity Fit-Out Dubai'
  },
  {
    src: '/images/apartment-lighting-false-ceiling-dubai.webp',
    alt: 'False ceiling and recessed lighting in a renovated Dubai apartment',
    title: 'Apartment False Ceiling & Lighting Renovation Dubai'
  },
  {
    src: '/images/apartment-balcony-renovation-dubai.webp',
    alt: 'Luxury apartment balcony renovation in Dubai',
    title: 'Apartment Balcony Renovation Dubai'
  }
];

const testimonials = [
  {
    quote: `"Incredible transformation of my apartment near Dubai Marina by We Do Interior Design & fit-out. Stylish, functional, and exactly as I envisioned. Their staff is very professional and creative. I highly recommend them for anyone seeking the best renovation services in Dubai!"`,
    author: "— Moeez"
  },
  {
    quote: `"Working with WE DO Interior Design & Fitout for our apartment renovation in Palm Jumeirah was an exceptional experience. They exceeded our expectations with their professionalism and aesthetic vision. If you're looking for a trusted team for apartment renovations or interior design services across Dubai, this is the company to rely on."`,
    author: "— Mohammad Emran"
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
    <section className="bg-black-200 w-full py-12 px-[2in]">

      {/* Top Content Block */}
      <div className="w-full mx-auto bg-black p-6 sm:p-10 rounded shadow text-center space-y-6 mb-16">
        <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#caa193]">
          Why Dubai Apartment Owners Choose WE DO
        </h2>
        <div className="space-y-4 text-sm sm:text-base font-play text-white text-justify">
          <p>
            Plenty of contractors can quote a price. Fewer put it all under one roof, in writing, backed by a track record you can actually check; that&apos;s the gap this apartment renovation company Dubai owners keep running into when they compare quotes.
          </p>

          <ul className="list-disc pl-5 space-y-2 text-white-300 text-justify">
            <li>ISO 45001:2018, ISO 14001:2015, and ISO 9001:2015 certified, formal safety, environmental, and quality management systems, not just a claim</li>
            <li>DED-registered, with 250+ completed projects across residential and commercial categories in Dubai</li>
            <li>Design, approvals, and construction under one contract, no subcontractor handoffs to manage yourself</li>
            <li>Luxury Style Awards 2026 winner</li>
            <li>Fixed-price, written contracts with staged payments, never full payment upfront</li>
          </ul>
        
          {/* Visual Grid for Key Facts & Who This Page Is For */}
          <div className="pt-6 border-t border-gray-800 grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            
            {/* Key Facts Section */}
            <div className="bg-[#111] p-5 rounded-lg border border-gray-800 space-y-3">
              <h3 className="font-conthrax text-[#caa193] text-xs sm:text-sm tracking-wider uppercase mb-2">
                Key Facts
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-white text-justify text-xs sm:text-sm">
                <li>15+ years of hands-on industry experience, 250+ completed projects across residential and commercial categories in Dubai</li>
                <li>ISO 45001:2018, ISO 14001:2015, and ISO 9001:2015 certified; Luxury Style Awards 2026 winner</li>
                <li>Completed apartment renovations in Business Bay, Dubai Marina, Dubai Hills, Palm Jumeirah, and Madinat Jumeirah Living</li>
                <li>In-house team handles design, approvals, and construction under one contract, no subcontractor handoffs</li>
                <li>DED-registered interior fit-out contractor</li>
                <li>Comprehensive fit-outs average around AED 80-150 per sq ft, or approximately AED 40,000-300,000+ overall; these are approximate market ranges, not fixed prices</li>
                <li>Based in Jebel Ali Industrial, Dubai, serving communities across the city</li>
              </ul>
            </div>

            {/* Who This Page Is For Section */}
            <div className="bg-[#111] p-5 rounded-lg border border-gray-800 space-y-3 flex flex-col justify-between">
              <div>
                <h3 className="font-conthrax text-[#caa193] text-xs sm:text-sm tracking-wider uppercase mb-2">
                  Who This Page Is For
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-white text-justify text-xs sm:text-sm">
                  <li>Owners planning a renovation before moving in or re-letting the unit</li>
                  <li>Landlords preparing an apartment for new tenants or to raise rental value</li>
                  <li>Tenants who want to know what they&apos;re allowed to renovate in a rented unit</li>
                  <li>Buyers of older or outdated apartments assessing renovation scope before or after purchase</li>
                </ul>
              </div>

              {/* Unique Visual Card for Context */}
              <div className="relative h-44 w-full rounded-md overflow-hidden mt-4 border border-[#caa193]/30 group">
                <Image
                  src={galleryImages[1].src}
                  alt={galleryImages[1].alt}
                  fill
                  className="object-cover "
                />
                
              </div>

            </div>

          </div>
        </div>
      </div>

      {/* Split Row – Text + Top Right Image */}
      <div className="w-full mx-auto flex flex-col lg:flex-row items-center gap-6 mb-16"> 
        {/* Text Column - 50% Width */}
        <div className="w-full lg:w-1/2 space-y-4">
          <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#caa193]">
            Materials &amp; Finishes We Work With
          </h2>
          <ul className="list-disc pl-5 text-sm sm:text-base text-white font-play text-justify">
            <li><span className="text-[#caa193]">Flooring:</span> Large-sized porcelain floor tiles, engineered wood, and SPC (rigid vinyl) floor</li>
            <li><span className="text-[#caa193]">Counters:</span> Quartz and granite for kitchens and bathrooms</li>
            <li><span className="text-[#caa193]">Furniture &amp; joinery:</span> MDF with laminate or acrylic finishes, or wood veneer options depending on the design and specification</li>
            <li><span className="text-[#caa193]">Finishes on walls:</span> Low-VOC paint that is suitable for the climate of Dubai</li>
            <li><span className="text-[#caa193]">Bathroom surfaces:</span> Ceramic and porcelain tiles on a waterproof layer</li>
            <li><span className="text-[#caa193]">Hardware:</span> Soft-close hinges and drawer runners will be installed in every cabinet</li>
          </ul>
          <p className="text-sm sm:text-base text-white font-play text-justify">
            Exact brands and finish options are confirmed with you during the design stage, based on your budget and preferences.
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
              className="w-full "
            />
            
          </a>
        </div>
      </div>

      {/* Bottom CTA Section */}
      <div className="w-screen relative left-1/2 -translate-x-1/2 bg-[#f5ede5] py-10 px-6 sm:px-12 text-center space-y-4 text-black mb-16">
        <h3 className="text-xs sm:text-xl font-conthrax uppercase">
          Get In Touch With Us
        </h3>
        <p className="text-sm sm:text-base font-play">
          Ready to plan your Apartment renovation? Contact WE DO for a free site visit and itemized quote.
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

      {/* Section: Do You Need Approval */}
      <div className="w-full mx-auto bg-black p-6 sm:p-10 rounded shadow space-y-6 mb-16 text-justify">
        <h2 className="text-xl sm:text-2xl font-conthrax text-[#caa193] text-center">
          Do You Need Approval to Renovate Your Apartment in Dubai?
        </h2>
        
        <p className="font-play text-sm sm:text-base text-white">
          Almost every apartment renovation NOC Dubai project needs some form of approval before work starts; the main exception is purely cosmetic work, like repainting in a similar tone. Two approvals typically apply, and they are not the same thing.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#111] p-5 rounded-lg border border-gray-800 space-y-2">
            <h3 className="font-conthrax text-[#caa193] text-base sm:text-lg text-left">
              Building Management &amp; Municipality Approvals
            </h3>
            <p className="font-play text-sm sm:text-base text-white py-1 text-left">
              Your building or community management, Emaar, Nakheel, DAMAC, and others, each run their own process, issuing a No Objection Certificate for renovation work, usually alongside a refundable security deposit. Depending on the scope of work, additional approvals or submissions to the relevant authorities may be required.
            </p>
          </div>

          <div className="bg-[#111] p-5 rounded-lg border border-gray-800 space-y-2">
            <h3 className="font-conthrax text-[#caa193] text-base sm:text-lg text-left">
              Renovating a Rented Apartment
            </h3>
            <p className="font-play text-sm sm:text-base text-white py-1 text-left">
              If you are a tenant, you must obtain written consent from the landlord for any renovations along with consent from the building management; otherwise, one alone is not sufficient. Rental agreements may restrict structural alterations, so tenants should review their agreement and obtain written permission before starting work. Therefore, it would be better to look at the agreement first.
            </p>
          </div>
        </div>
      </div>

      {/* What's Included Section */}
      <div className="w-full mx-auto bg-black p-6 sm:p-10 rounded shadow space-y-6 mb-16 text-justify">
        <div className="text-center">
          <h2 className="text-xl sm:text-2xl font-conthrax text-[#caa193] mb-2">
            What&apos;s Included in a Full Apartment Renovation in Dubai
          </h2>
          <p className="font-play text-sm sm:text-base text-white text-start py-2">
            Apartment renovation Dubai-wide is construction-level work, changing what a space is physically made of, not just how it looks. That&apos;s different from styling or furniture placement, which doesn&apos;t touch walls, floors, or systems. WE DO is the <b className="text-[#caa193]"><a href="https://www.google.com/search?client=ms-android-transsion&hs=wh1&sca_esv=d95100246291a85d&sxsrf=APpeQnv4B1LkTKMJKefmLem8TFA9V8R3UQ:1785509026181&kgmid=/g/11pyc3sd1k&q=Interior+Design+Company+Dubai+-+WeDo+Interior+Design+%26+Fit+out&shem=epsd1,ltae,rimspwouoe&shndl=30&source=sh/x/loc/act/m1/2&kgs=0cce9bb78d14dbf6&utm_source=epsd1,ltae,rimspwouoe,sh/x/loc/act/m1/2">top interior design company Dubai</a></b>, scoping every renovation into four categories, priced and scheduled separately, so nothing gets bundled into a vague &quot;full renovation&quot; quote[cite: 20].
          </p>
          <p className="font-play text-sm sm:text-base text-white text-start py-1">
            Looking for furniture, decor, and styling only, with no construction work? See our <b className="text-[#caa193]"><a href="https://wedointerior.ae/apartment-interior-design-dubai">apartment interior design service</a></b> instead[cite: 20].
          </p>
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
            <div className="lg:col-span-2">
              <h3 className="font-conthrax text-[#caa193] text-base sm:text-lg">
                Kitchen Renovation: Cabinetry, Countertops &amp; Electric Cooking Layouts
              </h3>
              <p className="font-play text-sm sm:text-base text-white py-2">
                Kitchen renovation Dubai includes things like installing new cabinets or refinishing them, improving countertops and backsplashes, appliance arrangement, and repositioning of the sink, cooker, and electrical points when the kitchen layout has to be altered.
              </p>
              <p className="font-play text-sm sm:text-base text-[#caa193]">
                Full detail: <b className="text-[#caa193]"><a href="https://wedointerior.ae/kitchen-renovation-dubai">kitchen renovation in Dubai</a></b>[cite: 20]
              </p>
            </div>
            <div className="relative h-48 w-full rounded-lg overflow-hidden border border-[#caa193]/30">
              <Image 
                src={galleryImages[0].src} 
                alt={galleryImages[0].alt}
                fill 
                className="object-cover"
              />
            </div>
          </div>

          <div>
            <h3 className="font-conthrax text-[#caa193] text-base sm:text-lg mb-2">
              Kitchen Refacing vs. Kitchen Replacement
            </h3>
            <p className="font-play text-sm sm:text-base text-white py-2">
              Kitchen remodeling may not always be needed for all kitchens; it all depends on whether the current cabinets are still in good condition.
            </p>

            {/* Comparison Table */}
            <div className="overflow-x-auto my-4">
              <table className="w-full text-left text-white font-play text-sm sm:text-base border border-[#caa193]">
                <thead>
                  <tr className="text-[#caa193]">
                    <th className="p-2 border border-[#caa193]">Factor</th>
                    <th className="p-2 border border-[#caa193]">Kitchen Refacing</th>
                    <th className="p-2 border border-[#caa193]">Kitchen Replacement</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-2 border border-[#caa193] text-[#caa193]">What changes</td>
                    <td className="p-2 border border-[#caa193]">Doors, drawer fronts, hardware, and countertop</td>
                    <td className="p-2 border border-[#caa193]">Entire cabinet boxes, layout, and countertop</td>
                  </tr>
                  <tr>
                    <td className="p-2 border border-[#caa193] text-[#caa193]">Layout changes</td>
                    <td className="p-2 border border-[#caa193]">Not possible; sink and appliance positions stay fixed</td>
                    <td className="p-2 border border-[#caa193]">Possible, full layout redesign</td>
                  </tr>
                  <tr>
                    <td className="p-2 border border-[#caa193] text-[#caa193]">Typical timeline</td>
                    <td className="p-2 border border-[#caa193]">A few days to around 1 week</td>
                    <td className="p-2 border border-[#caa193]">2-4 weeks, as part of the wider renovation</td>
                  </tr>
                  <tr>
                    <td className="p-2 border border-[#caa193] text-[#caa193]">Best suited to</td>
                    <td className="p-2 border border-[#caa193]">Cabinet boxes still structurally sound, layout works fine</td>
                    <td className="p-2 border border-[#caa193]">Water-damaged boxes, or the layout needs to change</td>
                  </tr>
                  <tr>
                    <td className="p-2 border border-[#caa193] text-[#caa193]">Relative cost</td>
                    <td className="p-2 border border-[#caa193]">Lower</td>
                    <td className="p-2 border border-[#caa193]">Higher</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="font-play text-sm sm:text-base text-white py-2 italic">
              A site visit tells you which one your kitchen actually needs: refacing a box that&apos;s warped from water damage just delays the real fix.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
            <div className="relative h-48 w-full rounded-lg overflow-hidden border border-[#caa193]/30 order-2 lg:order-1">
              <Image 
                src={galleryImages[3].src} 
                alt={galleryImages[3].alt}
                fill 
                className="object-cover"
              />
            </div>
            <div className="lg:col-span-2 order-1 lg:order-2">
              <h3 className="font-conthrax text-[#caa193] text-base sm:text-lg">
                Bathroom Renovation: Waterproofing, Re-Tiling &amp; Fixture Upgrades
              </h3>
              <p className="font-play text-sm sm:text-base text-white py-2">
                Bathroom renovation apartment Dubai projects include total tiling and waterproofing, as well as replacement of sanitaryware and fixtures and modifications like changing a tub into a shower. The waterproofing is checked before the tiling process, which is the most often overlooked process by unlicensed renovators and the most costly one to correct later.
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-conthrax text-[#caa193] text-base sm:text-lg">
              Flooring, Electrical &amp; Plumbing: The Work Behind the Walls
            </h3>
            <p className="font-play text-sm sm:text-base text-white py-2">
              The floor finishes will be installed by laying porcelain floor tiles, engineered hardwood floor, or SPC/Vinyl floor planks. Both electrical and plumbing works will be pre-installed prior to wall installation since it would be much easier and cheaper to move them around.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
            <div className="lg:col-span-2">
              <h3 className="font-conthrax text-[#caa193] text-base sm:text-lg">
                Built-In Joinery &amp; Custom Wardrobes: Built for Your Layout
              </h3>
              <p className="font-play text-sm sm:text-base text-white py-2">
                Bespoke wardrobes, TV units, and storage walls, measured and built for your required apartment rather than off-the-shelf. Usually the last trade on site, once flooring and paint are done.
              </p>
            </div>
            <div className="relative h-48 w-full rounded-lg overflow-hidden border border-[#caa193]/30">
              <Image 
                src={galleryImages[2].src} 
                alt={galleryImages[2].alt}
                fill 
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Apartment Renovation Cost Section */}
      <div className="w-full mx-auto bg-black p-6 sm:p-10 rounded shadow space-y-6 mb-16 text-justify">
        <div className="text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-conthrax text-[#caa193] mb-2">
            Apartment Renovation Cost in Dubai
          </h2>
          <p className="font-play text-sm sm:text-base text-white text-start py-2">
            WE DO&apos;s comprehensive apartment renovation cost in Dubai averages around AED 80 to AED 150 per square foot, or approximately AED 40,000 to AED 300,000+ overall, depending on the unit&apos;s size, scope of work, and level of customization. These are approximate market ranges based on typical projects, not a fixed price for any specific apartment. As a general guide by unit size:
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-white font-play text-sm sm:text-base border border-[#caa193]">
            <thead>
              <tr className="text-[#caa193]">
                <th className="p-2 border border-[#caa193]">Unit Size (approx.)</th>
                <th className="p-2 border border-[#caa193]">Approximate Cost Range</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border border-[#caa193] text-[#caa193]">Studio (~500 sq ft)</td>
                <td className="p-2 border border-[#caa193]">around AED 40,000 – 75,000</td>
              </tr>
              <tr>
                <td className="p-2 border border-[#caa193] text-[#caa193]">1-Bedroom (~800 sq ft)</td>
                <td className="p-2 border border-[#caa193]">around AED 65,000 – 120,000</td>
              </tr>
              <tr>
                <td className="p-2 border border-[#caa193] text-[#caa193]">2-Bedroom (~1,200 sq ft)</td>
                <td className="p-2 border border-[#caa193]">around AED 95,000 – 180,000</td>
              </tr>
              <tr>
                <td className="p-2 border border-[#caa193] text-[#caa193]">3-Bedroom+ (~2,000 sq ft)</td>
                <td className="p-2 border border-[#caa193]">around AED 160,000 – 300,000+</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="font-play text-sm sm:text-base text-white text-start py-2">
          This table applies your AED 80-150/sq ft rate to typical Dubai unit sizes; the sq ft figures are illustrative, not a confirmed measurement of any specific unit. Make sure you get a solid quote that&apos;s put into writing according to the real measurements of your apartment. The degree of customization, the use of imported products, change of layouts, and better joinery make a project fall into the upper price range; simple scopes lie in the lower part of the spectrum.
        </p>
      </div>

      {/* Registered Fit-Out Company vs Hiring Separate Tradespeople Section */}
      <div className="w-full mx-auto bg-black p-6 sm:p-10 rounded shadow space-y-6 mb-16 text-justify">
        <h2 className="text-xl sm:text-2xl font-conthrax text-[#caa193] text-center">
          Registered Fit-Out Company vs. Hiring Separate Tradespeople Yourself
        </h2>
        
        <p className="font-play text-sm sm:text-base text-white">
          Both types of renovation process operate in Dubai: either through one registered company that handles everything, or by the owner hiring the painter, electrician, and carpenter individually to reduce the cost of markup. Hiring separate trades can sometimes reduce the initial contractor markup, but it also means you are responsible for coordinating schedules, quality and different warranties. This is the core question behind how to choose an apartment renovation company Dubai owners keep coming back to.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-white font-play text-sm sm:text-base border border-[#caa193]">
            <thead>
              <tr className="text-[#caa193]">
                <th className="p-2 border border-[#caa193]">Factor</th>
                <th className="p-2 border border-[#caa193]">Registered Fit-Out Company (WE DO)</th>
                <th className="p-2 border border-[#caa193]">Hiring Separate Tradespeople Yourself</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border border-[#caa193] text-[#caa193]">Accountability</td>
                <td className="p-2 border border-[#caa193]">One contract, one point of contact</td>
                <td className="p-2 border border-[#caa193]">You coordinate and are liable for each trade separately</td>
              </tr>
              <tr>
                <td className="p-2 border border-[#caa193] text-[#caa193]">Contract</td>
                <td className="p-2 border border-[#caa193]">Written, itemized, fixed-price</td>
                <td className="p-2 border border-[#caa193]">Often verbal or informal per tradesperson</td>
              </tr>
              <tr>
                <td className="p-2 border border-[#caa193] text-[#caa193]">Payment structure</td>
                <td className="p-2 border border-[#caa193]">Staged against milestones</td>
                <td className="p-2 border border-[#caa193]">Frequently full or majority payment upfront per trade</td>
              </tr>
              <tr>
                <td className="p-2 border border-[#caa193] text-[#caa193]">Approvals &amp; NOC</td>
                <td className="p-2 border border-[#caa193]">Handled in-house as part of the project</td>
                <td className="p-2 border border-[#caa193]">Usually falls to you to arrange separately</td>
              </tr>
              <tr>
                <td className="p-2 border border-[#caa193] text-[#caa193]">Warranty</td>
                <td className="p-2 border border-[#caa193]">Workmanship warranty in writing</td>
                <td className="p-2 border border-[#caa193]">Rarely offered, and hard to enforce across multiple parties</td>
              </tr>
              <tr>
                <td className="p-2 border border-[#caa193] text-[#caa193]">Portfolio verification</td>
                <td className="p-2 border border-[#caa193]">Real, named completed projects</td>
                <td className="p-2 border border-[#caa193]">Often no verifiable track record</td>
              </tr>
              <tr>
                <td className="p-2 border border-[#caa193] text-[#caa193]">Project management</td>
                <td className="p-2 border border-[#caa193]">Single schedule, single team</td>
                <td className="p-2 border border-[#caa193]">You manage sequencing and scheduling conflicts yourself</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="space-y-4 pt-4 border-t border-[#caa193]/30">
          <p className="font-play text-sm sm:text-base text-white font-semibold">
            Before you hire anyone, five questions separate a registered company from a risk:
          </p>
          <ol className="list-decimal pl-5 space-y-2 font-play text-sm sm:text-base text-white">
            <li>
              <strong className="text-[#caa193]">Do they hold a valid DED trade license?</strong> A registered company will show it without hesitation.
            </li>
            <li>
              <strong className="text-[#caa193]">Is payment staged, not upfront?</strong> A fair structure ties payment to milestones: site start, mid-project, completion.
            </li>
            <li>
              <strong className="text-[#caa193]">Is there a written, itemized contract?</strong> Scope, materials, and price belong on paper.
            </li>
            <li>
              <strong className="text-[#caa193]">Can they show real, completed projects?</strong> Renders and mood boards aren&apos;t proof of past work.
            </li>
            <li>
              <strong className="text-[#caa193]">What does the warranty cover, and how long does it last?</strong> Get the terms in writing.
            </li>
          </ol>
        </div>

        <p className="font-play text-sm sm:text-base text-white italic">
          WE DO answers all five: DED-registered, staged payments, written fixed-price contracts, a real project portfolio across Business Bay, Dubai Marina, and Palm Jumeirah, and a workmanship warranty in writing.
        </p>
      </div>

      {/* Five Mistakes Section */}
      <div className="w-full mx-auto bg-black p-6 sm:p-10 rounded shadow space-y-6 mb-16 text-justify">
        <h2 className="text-xl sm:text-2xl font-conthrax text-[#caa193] text-center">
          Five Mistakes Apartment Owners Make Before Renovating
        </h2>

        <ul className="space-y-4 font-play text-sm sm:text-base text-white list-disc pl-5">
          <li>
            <strong className="text-[#caa193]">Skipping approvals before work starts:</strong> Structural, electrical, or plumbing changes without a building management NOC and sometimes Dubai Municipality approval risk fines and can force completed work to be undone.
          </li>
          <li>
            <strong className="text-[#caa193]">Choosing the cheapest quote without checking the basics:</strong> A very low quote should prompt you to check exactly what is included, whether the company is properly registered, and whether important work such as waterproofing, MEP, and approvals has been included.
          </li>
          <li>
            <strong className="text-[#caa193]">Paying the full amount upfront:</strong> In case of non-performance by a contractor, once he has been paid fully, there is no bargaining power left. Milestone-based payment keeps all things balanced.
          </li>
          <li>
            <strong className="text-[#caa193]">Rushing bathroom or kitchen construction without waterproofing:</strong> This is the one step that is usually skipped due to saving time and is the hardest thing to undo after tiling has been done.
          </li>
          <li>
            <strong className="text-[#caa193]">Relying on old floor plan or brochure measurements instead of the actual unit:</strong> As-built dimensions can differ from the original brochure; especially in older buildings, cabinetry ordered against the wrong measurements has to be remade.
          </li>
        </ul>

        <p className="font-play text-sm sm:text-base text-white pt-2 border-t border-gray-800 italic">
          WE DO&apos;s process is built to avoid all five: DED-registered, written fixed-price contracts, staged payments, waterproofing inspected before any tiling, and every measurement confirmed on-site before production starts.
        </p>
      </div>

      {/* Apartment Renovation Trends Section */}
      <div className="w-full mx-auto bg-black p-6 sm:p-10 rounded shadow space-y-6 mb-16 text-justify">
        <div className="text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-conthrax text-[#caa193] mb-2">
            Apartment Renovation Trends in Dubai
          </h2>
          <p className="font-play text-sm sm:text-base text-white text-start py-2">
            A few directions keep showing up across current apartment renovation trends in Dubai, from Business Bay towers to Dubai Marina waterfront units.
          </p>
        </div>

        {/* Visual Card Grid Transformation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#111] p-5 rounded-lg border border-gray-800 space-y-2">
            <h3 className="font-conthrax uppercase text-[#caa193] text-sm sm:text-base text-left">
              Open-Plan Kitchen Conversions
            </h3>
            <p className="font-play text-sm sm:text-base text-white text-start py-2">
              Removing the wall or pass-through from the closed kitchen to the living space is the most common renovation request in Dubai flats, as traditionally the kitchen was constructed as an independent room in such properties.
            </p>
          </div>

          <div className="bg-[#111] p-5 rounded-lg border border-gray-800 space-y-2">
            <h3 className="font-conthrax uppercase text-[#caa193] text-sm sm:text-base text-left">
              Walk-In Shower Conversions
            </h3>
            <p className="font-play text-sm sm:text-base text-white text-start py-2">
              The installation of a walk-in shower and glass partition in place of the existing bath-and-shower combination is an ongoing request when renovating bathrooms, particularly those that still have their existing bathtubs installed on take-over.
            </p>
          </div>

          <div className="bg-[#111] p-5 rounded-lg border border-gray-800 space-y-2">
            <h3 className="font-conthrax uppercase text-[#caa193] text-sm sm:text-base text-left">
              Smart-Home Wiring at Renovation Stage
            </h3>
            <p className="font-play text-sm sm:text-base text-white text-start py-2">
              These elements of lighting controls, climate controls, and security locking systems are increasingly becoming part of the MEP design process and not additions after the design because installation of additional cables after the wall coverings is considerably expensive.
            </p>
          </div>

          <div className="bg-[#111] p-5 rounded-lg border border-gray-800 space-y-2">
            <h3 className="font-conthrax uppercase text-[#caa193] text-sm sm:text-base text-left">
              Warm, Neutral Material Palettes
            </h3>
            <p className="font-play text-sm sm:text-base text-white text-start py-2">
              Beige, warm white and taupe shades with textured wood and stone are the most popular choice at the moment for renovations, as they look good on camera when marketing for sale or rental, and age well compared to something more trendy.
            </p>
          </div>

          <div className="bg-[#111] p-5 rounded-lg border border-gray-800 space-y-2">
            <h3 className="font-conthrax uppercase text-[#caa193] text-sm sm:text-base text-left">
              Home Office &amp; Flex Room Conversions
            </h3>
            <p className="font-play text-sm sm:text-base text-white text-start py-2 ">
              Converting a spare bedroom or underused space into a home office is now a common option for apartment owners working from home.
            </p>
          </div>

          <div className="bg-[#111] p-5 rounded-lg border border-gray-800 space-y-2">
            <h3 className="font-conthrax uppercase text-[#caa193] text-sm sm:text-base text-left">
              Built-In Joinery Over Freestanding Furniture
            </h3>
            <p className="font-play text-sm sm:text-base text-white text-start py-2">
              Custom, built-to-the-wall wardrobes and storage are increasingly chosen over freestanding furniture, since they make better use of an apartment&apos;s smaller footprint than a villa has to work with.
            </p>
          </div>
        </div>

        {/* Feature Image Insert */}
        <div className="relative h-60 w-full rounded-lg overflow-hidden border border-[#caa193]/30 mt-6">
          <Image
            src={galleryImages[4].src}
            alt={galleryImages[4].alt}
            fill
            className="object-cover object-[center_100%]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent flex items-center p-6">
            <p className="text-white font-conthrax text-lg max-w-sm">
              Contemporary Dubai Apartment Trends Built to Perfection
            </p>
          </div>
        </div>
      </div>

      {/* Apartment Renovation Process Section */}
      <div className="w-full mx-auto bg-black p-6 sm:p-10 rounded shadow space-y-6 mb-16">
        <h2 className="text-xl sm:text-2xl font-conthrax text-[#caa193] text-center">
          Our Apartment Renovation Process, From Site Visit to Handover
        </h2>
        
        <p className="font-play text-sm sm:text-base text-white text-justify">
          Every WE DO apartment renovation project follows seven stages, from the initial site inspection through approvals, construction, snagging, and handover. Skipping steps, starting demolition before approvals are confirmed, for example, is the most common cause of delays and disputes in Dubai renovation projects.
        </p>

        <ol className="list-decimal pl-5 space-y-4 text-[#caa193] text-justify">
          <li>
            <p className="text-white font-play">
              <b className="text-[#caa193]">Step 1: Site Visit &amp; Consultation – </b>
              The first step is a site visit where we inspect and measure the apartment and discuss your requirements and budget. This is even more important in the case of older apartments, where we differentiate between what is just cosmetic and what is related to the structure. The visit will be complimentary after you decide to go with WE DO.
            </p>
          </li>
          <li>
            <p className="text-white font-play">
              <b className="text-[#caa193]">Step 2: Design &amp; 3D Preview – </b>
              Layout, materials, and finishes are finalized and visualized before any work begins, so you&apos;re approving a clear picture of the finished apartment, not an abstract description. Changes at this stage are quick and free; changes after materials are ordered aren&apos;t.
            </p>
          </li>
          <li>
            <p className="text-white font-play">
              <b className="text-[#caa193]">Step 3: Approvals &amp; NOC – </b>
              We handle building management documentation and Dubai Municipality submissions where required, on your behalf. This runs in parallel with design finalization rather than waiting for it to finish, since approvals, not construction itself, are the most common source of delay on a Dubai renovation.
            </p>
          </li>
          <li>
            <p className="text-white font-play">
              <b className="text-[#caa193]">Step 4: Demolition &amp; Preparation – </b>
              The old finishings will be stripped away from the site, and precautions will be taken for dust protection in addition to protecting neighboring units, which is an issue that needs to be considered in apartments and not in villas for the simple reason that sharing walls and corridors is a concern here.
            </p>
          </li>
          <li>
            <p className="text-white font-play">
              <b className="text-[#caa193]">Step 5: MEP &amp; Structural Work – </b>
              Electrical, plumbing, and any layout changes are done before walls get sealed up. Poorly coordinated electrical or plumbing work can become costly to correct once tiling and cabinetry are installed.
            </p>
          </li>
          <li>
            <p className="text-white font-play">
              <b className="text-[#caa193]">Step 6: Finishes &amp; Joinery – </b>
              Flooring, painting, tiling, and cabinetry are all fitted. Joinery will always be the last trade on the building site because wardrobes, TV units, and storage items are measured up and fitted after everything else has been done.
            </p>
          </li>
          <li>
            <p className="text-white font-play">
              <b className="text-[#caa193]">Step 7: Final Inspection &amp; Handover – </b>
              A full snagging walkthrough covers every room before keys go back to you, and your workmanship warranty begins from this date. Any items flagged during snagging are corrected before the project is considered complete, not left as a follow-up.
            </p>
          </li>
        </ol>

        {/* Timeline & Scope Breakdown Table */}
        <div className="pt-4 overflow-x-auto">
          <table className="w-full text-left text-white font-play text-sm sm:text-base border border-[#caa193]">
            <thead>
              <tr className="text-[#caa193]">
                <th className="p-2 border border-[#caa193]">Apartment Size</th>
                <th className="p-2 border border-[#caa193]">Typical Scope</th>
                <th className="p-2 border border-[#caa193]">Typical Timeline</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border border-[#caa193] text-[#caa193]">Studio</td>
                <td className="p-2 border border-[#caa193]">Cosmetic to standard</td>
                <td className="p-2 border border-[#caa193]">3-5 weeks</td>
              </tr>
              <tr>
                <td className="p-2 border border-[#caa193] text-[#caa193]">1-Bedroom</td>
                <td className="p-2 border border-[#caa193]">Standard to full</td>
                <td className="p-2 border border-[#caa193]">6-9 weeks</td>
              </tr>
              <tr>
                <td className="p-2 border border-[#caa193] text-[#caa193]">2-Bedroom</td>
                <td className="p-2 border border-[#caa193]">Standard to full</td>
                <td className="p-2 border border-[#caa193]">8-12 weeks</td>
              </tr>
              <tr>
                <td className="p-2 border border-[#caa193] text-[#caa193]">3-Bedroom+</td>
                <td className="p-2 border border-[#caa193]">Full renovation</td>
                <td className="p-2 border border-[#caa193]">10-16 weeks</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="font-play text-xs sm:text-sm text-white text-justify italic">
          Projects involving imported materials or custom joinery with long lead times can extend beyond these ranges, confirmed once material selections are locked in. This apartment renovation timeline Dubai guide is a starting point, not a fixed promise.
        </p>
      </div>

      {/* Cosmetic Renovation vs. Full Renovation */}
      <div className="w-full mx-auto bg-black p-6 sm:p-10 rounded shadow space-y-6 mb-16">
        <h3 className="text-xl sm:text-2xl font-conthrax text-[#caa193] text-center">
          Cosmetic Renovation vs. Full Renovation: Which Do You Need?
        </h3>
        <p className="font-play text-sm sm:text-base text-white text-justify">
          Not every apartment needs a full renovation; sometimes a cosmetic refresh is the right call, and knowing the difference upfront saves both time and budget.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-white font-play text-sm sm:text-base border border-[#caa193]">
            <thead>
              <tr className="text-[#caa193]">
                <th className="p-2 border border-[#caa193]">Factor</th>
                <th className="p-2 border border-[#caa193]">Cosmetic Renovation</th>
                <th className="p-2 border border-[#caa193]">Full Renovation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border border-[#caa193] text-[#caa193]">What&apos;s involved</td>
                <td className="p-2 border border-[#caa193]">Paint, flooring refresh, fixture and lighting swaps</td>
                <td className="p-2 border border-[#caa193]">Layout changes, structural work, kitchen &amp; bathroom remodeling, MEP</td>
              </tr>
              <tr>
                <td className="p-2 border border-[#caa193] text-[#caa193]">Approvals needed</td>
                <td className="p-2 border border-[#caa193]">Usually none</td>
                <td className="p-2 border border-[#caa193]">Building management NOC, sometimes Dubai Municipality</td>
              </tr>
              <tr>
                <td className="p-2 border border-[#caa193] text-[#caa193]">Typical timeline</td>
                <td className="p-2 border border-[#caa193]">1-3 weeks</td>
                <td className="p-2 border border-[#caa193]">6-16 weeks, depending on size</td>
              </tr>
              <tr>
                <td className="p-2 border border-[#caa193] text-[#caa193]">Typical cost</td>
                <td className="p-2 border border-[#caa193]">Approximately AED 40,000-75,000</td>
                <td className="p-2 border border-[#caa193]">Approximately AED 150,000-300,000+</td>
              </tr>
              <tr>
                <td className="p-2 border border-[#caa193] text-[#caa193]">Best for</td>
                <td className="p-2 border border-[#caa193]">A well-maintained apartment before re-renting or moving in</td>
                <td className="p-2 border border-[#caa193]">Outdated units, a layout that no longer works, or post-handover units needing structural upgrades</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Auto-Play Testimonials Carousel with Pause-on-Hover */}
      <div
        className="w-full mx-auto bg-black p-6 sm:p-10 rounded shadow space-y-6 mb-16 relative overflow-hidden text-justify"
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
      </div>

      {/* CTA & Visit Us Section */}
      <div className="w-screen relative left-1/2 -translate-x-1/2 bg-[#f5ede5] py-10 px-6 sm:px-12 text-center space-y-4 text-black mb-16">
        <h2 className="text-xl sm:text-2xl font-conthrax uppercase">
          Visit Us
        </h2>
        
        <h3 className="text-xs sm:text-xl font-conthrax uppercase">
          Get Your Free Apartment Renovation Quote
        </h3>

        <p className="text-sm sm:text-base font-play max-w-3xl mx-auto px-4">
          <strong>WE DO Interior Design &amp; Fit-Out</strong><br />
          WH-05 A, Jebel Ali Industrial 1, Dubai, UAE<br />
          Phone/WhatsApp: +971 58 807 5603 | Email: info@wedointerior.ae<br />
          Ready to plan your apartment renovation? Contact WE DO for a free site visit and itemized quote.
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

      {/* Map Section */}
      <div className="w-screen relative left-1/2 -translate-x-1/2 shadow-2xl border-t border-b border-gray-800 mb-16" style={{ height: "450px" }}>
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

      {/* FAQs Section */}
      <div className="w-full mx-auto bg-black p-6 sm:p-10 rounded shadow space-y-6 text-justify">
        <h2 className="text-xl sm:text-2xl font-conthrax text-[#caa193] text-center">
          Frequently Asked Questions
        </h2>

        <div>
          <h3 className="font-conthrax text-[#caa193]">What is the cost of apartment renovation in Dubai?</h3>
          <p className="font-play text-sm sm:text-base text-white py-2">
            The estimated cost of the complete apartment renovation service provided by WE DO varies from about AED 80-150 per square foot, or approximately AED 40,000-AED 300,000+. This price is based on the size of the apartment as well as the complexity of work involved.
          </p>
        </div>

        <div>
          <h3 className="font-conthrax text-[#caa193]">Which is the best apartment renovation company in Dubai?</h3>
          <p className="font-play text-sm sm:text-base text-white py-2">
            The best company will be DED registered and provide you with a fixed price contract. In addition, it will pay the contractor according to the completion of each stage of work and not ask for total payment before work begins. It will have some actual examples of its completed apartment renovation projects in Dubai.
          </p>
        </div>

        <div>
          <h3 className="font-conthrax text-[#caa193]">How long does apartment renovation take in Dubai?</h3>
          <p className="font-play text-sm sm:text-base text-white py-2">
            A studio takes 3-5 weeks, 1-bedroom 6-9 weeks, 2-bedroom 8-12 weeks and full renovation including structural changes or custom joinery could take 16 weeks or even more. The delays are usually caused not by construction but by getting approvals.
          </p>
        </div>

        <div>
          <h3 className="font-conthrax text-[#caa193]">Do I need approval to renovate my apartment in Dubai?</h3>
          <p className="font-play text-sm sm:text-base text-white py-2">
            Yes, in almost every case. Cosmetic work like repainting rarely needs approval, but kitchen and bathroom remodeling, layout changes, and electrical or plumbing work require a building management NOC, and sometimes Dubai Municipality approval too. A registered renovation company handles this documentation for you.
          </p>
        </div>

        <div>
          <h3 className="font-conthrax text-[#caa193]">Can I renovate an apartment I&apos;m renting in Dubai?</h3>
          <p className="font-play text-sm sm:text-base text-white py-2">
            Without written approval from your landlord, along with building management&apos;s approval, you must have both approvals, not one of the two. Even with permission from your landlord, most typical tenancy agreements forbid structural alterations. Make sure you have your landlord&apos;s written approval prior to any renovations.
          </p>
        </div>

        <div>
          <h3 className="font-conthrax text-[#caa193]">What is the difference between apartment renovation and apartment interior design?</h3>
          <p className="font-play text-sm sm:text-base text-white py-2">
            Apartments&apos; renovation is structural construction: remodeling of the kitchen and bathrooms, installation of floors, electricity, plumbing, and layout alterations. Interior design is decorating with furniture and fixtures within the already constructed layout, without altering walls or systems. In many cases, both renovations are needed: you renovate and then design interiors.
          </p>
        </div>

        <div>
          <h3 className="font-conthrax text-[#caa193]">Am I allowed to live in the apartment during the renovation process?</h3>
          <p className="font-play text-sm sm:text-base text-white py-2">
            Yes, if it&apos;s only interior or single room renovation, but if you need a complete renovation including kitchen, bathrooms, or structures, most landlords prefer to move out for the duration of the renovation because of noise, dust, and safety reasons.
          </p>
        </div>

        <div>
          <h3 className="font-conthrax text-[#caa193]">How do I know if a renovation contractor in Dubai is trustworthy?</h3>
          <p className="font-play text-sm sm:text-base text-white py-2">
            Check for a valid DED trade license, a written itemized contract, staged rather than upfront payment, and verifiable completed projects rather than renders alone. A written workmanship warranty is yet another indication of reliability.
          </p>
        </div>

        <div>
          <h3 className="font-conthrax text-[#caa193]">Is it worth renovating my apartment before renting it out in Dubai?</h3>
          <p className="font-play text-sm sm:text-base text-white py-2">
            Yes, for the most part, a renovated apartment would be easier to rent out and would command a higher rental price. It is important to prioritize kitchen and bathroom renovation since these elements would matter the most for your future tenant. You should schedule renovation work between tenancies not to interfere with the existing tenant&apos;s comfort.
          </p>
        </div>

        <div>
          <h3 className="font-conthrax text-[#caa193]">I have an older apartment that has not been renovated since handover, where do I begin?</h3>
          <p className="font-play text-sm sm:text-base text-white py-2">
            It is necessary to conduct a site inspection to differentiate structural elements from cosmetic items (wiring, plumbing, waterproofing vs paint and fixtures) because even if everything looks fine, there may be a need to upgrade some elements (electricity and plumbing). This is what we offer in our consultation service and you get a quotation that is based on your particular case.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DProjects;