"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";

const services = [
  {
  title: "Serenia Living Interior Design & Fit-Out",
  description: "Full interior design, custom furniture, and in-house joinery fit-out for Serenia Living, Palm Jumeirah, one team, design to installation. Get a quote.",
  bgImage: "/images/SereniaH.jpeg",
  link: "/serenia-living-interior-design",
},
  {
    title: "Penthouse Interior Design Palm Jumeirah",
    description: "Exclusive penthouse fit-outs showcasing stunning Arabian Gulf vistas.",
    bgImage: "/images/6w-residence (5).webp",
    
    
  },
  {
    title: "Apartment Interior Design Palm Jumeirah",
    description: "Tailored luxury apartment interiors designed for Palm Jumeirah beachfront living.",
    bgImage: "/images/pjapt (5).webp",
    
  },
  {
    title: "Restaurant Interior Design Palm Jumeirah",
    description: "Bespoke dining and F&B concepts built to operational standards.",
    bgImage: "/images/restaurant (4).webp",
    
  },
  {
    title: "Cafe Interior Design Palm Jumeirah",
    description: "Inviting cafe layouts balancing aesthetic charm with high-volume flow.",
    bgImage: "/images/karakna (9).webp",
   
  },
  {
    title: "Custom Furniture In Palm Jumeirah",
    description: "Factory-direct CNC joinery and bespoke furniture pieces.",
    bgImage: "/images/joinery-furniture.webp",
    
  },
];

const creekProjects = [
  {
    title: "Palm Jumeirah Apartment Bedroom",
    category: "Apartment Interior - Palm Jumeirah",
    image: "/images/pjapt (5).webp",
    link: "/palm-jumeirah-apartment",
  },
  {
    title: "Palm Jumeirah F&B Restaurant",
    category: "Restaurant Interior Design - Palm Jumeirah",
    image: "/images/restaurant (4).webp",
    link: "/palm-jumeirah-f&b",
  },
  {
    title: "Palm Jumeirah 6-Bedroom Penthouse",
    category: "Penthouse Interior - Palm Jumeirah",
    image: "/images/6w-residence (5).webp",
    link: "/palm-jumeirah-6-bedroom-penthouse",
  },
  {
    title: "Palm Jumeirah Barber Shop",
    category: "Commercial Interior - Palm Jumeirah",
    image: "/images/peakyblinders (2).webp",
    link: "/palm-jumeirah-barber-shop",
  },
];

const AboutSection = () => {
  return (
    <div className="bg-[#000000] text-white font-play overflow-hidden">
      {/* Container Wrapper */}
      <div className="container mx-auto px-4 sm:px-8 lg:px-16 py-12 sm:py-16 space-y-16 sm:space-y-20">
        
        {/* ================= KEY FACTS SECTION ================= */}
        <section className="bg-[#111111] p-6 sm:p-8 rounded-2xl border border-gray-800 shadow-xl">
          <h3 className="text-[#b98877] text-xl font-conthrax mb-6 text-left">
            Key facts:
          </h3>
          <ul className="list-disc pl-5 space-y-3 text-gray-300 text-sm sm:text-base text-left leading-relaxed">
            <li>
              <strong className="text-white">15+ Years of Excellence:</strong> Delivering premier interior design & fit-out solutions across Dubai, including Palm Jumeirah villas, apartments, and commercial spaces.
            </li>
            <li>
              <strong className="text-white">250+ Successful Projects:</strong> Completed residential and commercial fit-out projects delivered across high-profile developments in Dubai.
            </li>
            <li>
              <strong className="text-white">100% In-House Delivery:</strong> End-to-end execution covering design, civil works, decoration, and custom joinery powered by our own CNC-equipped manufacturing factory.
            </li>
            <li>
              <strong className="text-white">ISO Certified Quality:</strong> Certified in ISO 9001:2015, ISO 14001:2015, and ISO 45001:2018 for safety, quality, and environmental management.
            </li>
            <li>
              <strong className="text-white">Award-Winning Standard:</strong> Proud Winner of the Luxury Lifestyle Awards 2026.
            </li>
            <li>
              <strong className="text-white">Hassle-Free Approvals:</strong> Complete in-house handling of DCD, Dubai Municipality, and private developer permits including Emaar and Damac.
            </li>
          </ul>
          <p className="text-gray-300 text-sm sm:text-base font-play mt-6 pt-4 border-t border-gray-800/80">
            Book a free consultation to discuss your Palm Jumeirah villa, apartment, or commercial project.
          </p>
        </section>

        {/* ================= BEACHFRONT & WATERFRONT SECTION ================= */}
        <section className="space-y-8 text-left">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-[#b98877] text-xl sm:text-3xl font-conthrax mb-4 leading-tight">
              Beachfront &amp; Waterfront Apartment Interior Design
            </h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Waterfront apartments on the Crescent bring their own design brief, maximizing sea views, managing glare and heat from floor-to-ceiling glazing, and integrating technology cleanly into open-plan layouts.
            </p>
          </div>

        
            
              <h3 className="text-[#b98877] text-base sm:text-lg font-conthrax">
                Smart Home Technology for Beachfront Residences
              </h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                FFor beachfront apartments and penthouses, we integrate smart home systems covering lighting, air conditioning, curtains, audio-visual, and security into the interior design from the planning stage, rather than retrofitting them after finishes are installed. The goal is a waterfront home that reads calm and uncluttered while giving owners full control from a single interface.
              </p>
            

            
              <h3 className="text-[#b98877] text-base sm:text-lg font-conthrax">
                Interior Design for Serenia Living &amp; West Crescent Residences
              </h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                Serenia Living, Palma Holding's ultra-premium development at the tip of Palm Jumeirah's West Crescent next to Atlantis The Palm, was completed in February 2026, with handovers now underway across its 226 apartments, penthouses, and Sky Mansions. The development's four towers include half-floor and full-floor penthouses alongside amenities like an 88-metre pool and a dedicated wellness club. Interiors here need finishes and joinery built to match that standard, not a scaled-down version of villa-grade work. <br/>
              For owners receiving keys, many buying from overseas, we provide full interior design and fit-out from developer handover condition to move-in ready, including custom joinery for kitchens and wardrobes, furniture selection, and 3D visualization and mood boards so the design can be reviewed and approved remotely before work begins on site. We serve owners across Serenia Living and other West Crescent developments on the same turnkey basis.
              </p>
             
           
          
        </section>

        {/* ================= COMMERCIAL INTERIOR SECTION ================= */}
        <section className="flex flex-col lg:flex-row items-center gap-10 lg:gap-12">
          <div className="w-full lg:w-1/2">
            <div className="relative h-[300px] sm:h-[400px] w-full rounded-2xl overflow-hidden shadow-xl border border-gray-800">
              <Image
                src="/images/Jumeirah (3).jpeg"
                alt="Commercial Interior Design Palm Jumeirah"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="w-full lg:w-1/2 text-left space-y-6">
            <div>
              <h2 className="text-[#b98877] text-xl sm:text-2xl font-conthrax mb-3 leading-tight">
                Commercial Interior Design in Palm Jumeirah
              </h2>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                Palm Jumeirah's commercial mix runs from beach clubs and hotel F&B outlets to standalone restaurants and cafés, each with its own licensing and operational requirements.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-[#b98877] text-base sm:text-lg font-conthrax">
                Restaurant & Café Interior Design in Palm Jumeirah
              </h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                We design restaurant and café interiors for Palm Jumeirah's F&B scene, covering dining areas, bar design, kitchen layout, and back-of-house flow. Work spans casual café fit-outs to full-service restaurant interiors, with joinery, lighting, and custom furniture produced in-house to match each concept's brand.<br/>
Commercial F&B fit-out on the Palm carries its own approval process on top of standard DCD requirements, including food and beverage trade licensing, kitchen extraction, and grease-trap compliance among them. We coordinate these alongside the <b className= "text-[#caa193]"
          ><a href="https://wedointerior.ae/design-build-services-in-dubai">design and build</a></b> program rather than treating them as a separate track the operator has to manage.

              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link href="/gallery" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto bg-[#b98877] hover:bg-[#b88f83] text-black font-conthrax px-6 py-3.5 rounded-lg transition duration-300 text-sm">
                  See Our Projects
                </button>
              </Link>
              <Link href="/contact-us" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto border border-[#b98877] text-[#b98877] hover:bg-[#b98877] hover:text-black font-conthrax px-6 py-3.5 rounded-lg transition duration-300 text-sm">
                  Free Consultation
                </button>
              </Link>
            </div>
          </div>
        </section>

       {/* ================= SERVICES GRID SECTION (1 LINE OF 6 CARDS) ================= */}
<section className="space-y-8">
  <div className="text-center max-w-3xl mx-auto">
    <h2 className="text-[#b98877] text-2xl sm:text-3xl font-conthrax mb-3 leading-tight">
      Our Interior Services in Serenia Living
    </h2>
    <p className="text-gray-300 text-sm sm:text-base">
      Comprehensive interior design, renovation, and bespoke fit-out services tailored for Serenia Living properties.
    </p>
  </div>

  {/* 6 Grid columns for large screens */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 sm:gap-6">
    {services.map((service, idx) => (
      <Link 
        key={idx} 
        href={service.link || "#"} 
        className="block group cursor-pointer"
      >
        <div className="relative h-[260px] sm:h-[280px] rounded-2xl overflow-hidden shadow-lg border border-gray-800 transition duration-300 group-hover:border-[#b98877]">
          <Image
            src={service.bgImage}
            alt={service.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
          <div className="absolute inset-0 z-10 flex flex-col justify-end p-4 sm:p-5 text-white space-y-2">
            <h3 className="text-xs sm:text-sm font-conthrax text-[#caa193] group-hover:text-white transition leading-snug">
              {service.title}
            </h3>
            <p className="text-[11px] sm:text-xs text-gray-300 leading-relaxed line-clamp-3">
              {service.description}
            </p>
          </div>
        </div>
      </Link>
    ))}
  </div>
</section>

        {/* ================= RESIDENTIAL DETAILS SECTION ================= */}
        <section className="space-y-8">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-[#b98877] text-2xl sm:text-3xl font-conthrax mb-3 leading-tight">
              Residential Interior Design in Palm Jumeirah
            </h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              From Frond villas to Crescent apartments and penthouses, residential interiors on Palm Jumeirah call for different specifications at every property type. Below is how we approach each one.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-left">
            <div className="bg-[#111111]/40 p-6 sm:p-8 rounded-2xl border border-gray-800 space-y-6">
              <div className="space-y-2">
                <h3 className="text-[#b98877] text-base sm:text-lg font-conthrax">
                  1- Villa Interior Design & Renovation
                </h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  We design and renovate villa interiors across Palm Jumeirah's Fronds, including Signature Villas, Garden Homes, and Canal Cove Villas. Work covers living rooms, bedrooms, kitchens, and bathrooms alongside landscaping, gardens, and pool design, so indoor and outdoor spaces are planned as one project rather than handed to separate contractors. Custom joinery wardrobes, kitchen cabinetry, and built-in storage are produced at our own factory rather than outsourced to a third party.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-[#b98877] text-base sm:text-lg font-conthrax">
                  2- Majlis Design for Palm Jumeirah Villas
                </h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                 We design majlis spaces that pair traditional Arabic layout and seating with contemporary materials and lighting, built for both daily family use and formal gatherings. Joinery, upholstery, and lighting are produced and installed in-house, so the majlis matches the rest of the villa's material palette instead of being sourced as a one-off.
                </p>
              </div>
            </div>

            <div className="bg-[#111111]/40 p-6 sm:p-8 rounded-2xl border border-gray-800 space-y-6">
              <div className="space-y-2">
                <h3 className="text-[#b98877] text-base sm:text-lg font-conthrax">
                  3- Apartment & Penthouse Interior Design
                </h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  Beyond villas, we design apartment and penthouse interiors across Palm Jumeirah's Crescent developments, working within the layout and structural constraints specific to high-rise waterfront buildings. Projects range from single-room upgrades to full-unit interior design covering every room, finish, and piece of built-in storage.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-[#b98877] text-base sm:text-lg font-conthrax">
                  4- Apartment Fit-Out in Palm Jumeirah
                </h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  Our apartment fit-out service takes a unit from developer handover condition to a fully finished, styled home. Using CNC-produced custom joinery for kitchens, wardrobes, and media walls, we manage the full sequence design, approvals, civil and MEP work, joinery installation, and styling so owners aren't coordinating separate designers, contractors, and joinery suppliers themselves.
                </p>
              </div>
            </div>
          </div>
        </section>

        

        {/* ================= PROJECTS GALLERY SECTION ================= */}
        <section className="space-y-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-[#b98877] text-2xl sm:text-3xl font-conthrax mb-3 leading-tight">
              Our Projects in Palm Jumeirah
            </h2>
            <p className="text-gray-300 text-sm sm:text-base">
              Discover our completed interior design and fit-out projects across Palm Jumeirah, including luxury apartments, restaurants, and turnkey penthouses.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {creekProjects.map((project, index) => (
              <Link key={index} href={project.link} className="block group">
                <div className="relative h-[300px] rounded-2xl overflow-hidden shadow-lg border border-gray-800 transition duration-300 group-hover:border-[#b98877]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                  <div className="absolute inset-0 flex flex-col justify-end p-5 z-10 text-white space-y-1">
                    <h3 className="text-base font-conthrax text-white group-hover:text-[#caa193] transition">
                      {project.title}
                    </h3>
                    <p className="text-xs text-gray-300">
                      {project.category}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center pt-4">
            <Link href="/gallery">
              <button className="bg-[#b98877] hover:bg-[#a97463] text-black px-8 py-3.5 rounded-lg font-conthrax transition duration-300 text-sm">
                View All Projects
              </button>
            </Link>
          </div>
        </section>

        {/* ================= COMPARISON TABLE SECTION ================= */}
        <section className="bg-[#111111] p-6 sm:p-10 rounded-2xl border-l-4 border-[#b98877] border-y border-r border-gray-800 space-y-6">
          <div className="text-left space-y-2">
            <h2 className="text-xl sm:text-2xl font-conthrax text-[#b98877] uppercase tracking-wider">
              In-House Fit-Out vs. Multi-Contractor Fit-Out
            </h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Many interior projects on Palm Jumeirah involve separate firms for design, civil work, and custom joinery. WE DO keeps all of these under one roof.
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-gray-800 shadow-xl">
            <table className="w-full text-left text-sm sm:text-base text-gray-300 border-collapse">
              <thead className="bg-[#1a1a1a] text-[#b98877] font-conthrax text-xs sm:text-sm uppercase tracking-wider">
                <tr>
                  <th className="p-4 border-b border-r border-gray-800 min-w-[150px]">Feature</th>
                  <th className="p-4 border-b border-r border-gray-800 text-white min-w-[200px]">
                    WE DO (In-House Model)
                  </th>
                  <th className="p-4 border-b border-gray-800 text-gray-400 min-w-[200px]">
                    Typical Multi-Contractor Approach
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800 text-sm">
                <tr className="hover:bg-white/5 transition duration-200">
                  <td className="p-4 border-r border-gray-800 font-medium text-white">Design &amp; Civil Works</td>
                  <td className="p-4 border-r border-gray-800 text-[#caa193]">Same company, one contract</td>
                  <td className="p-4 text-gray-400">Separate designer + separate contractor</td>
                </tr>
                <tr className="hover:bg-white/5 transition duration-200">
                  <td className="p-4 border-r border-gray-800 font-medium text-white">Joinery &amp; Custom Furniture</td>
                  <td className="p-4 border-r border-gray-800 text-[#caa193]">Produced at our own factory</td>
                  <td className="p-4 text-gray-400">Outsourced to third-party suppliers</td>
                </tr>
                <tr className="hover:bg-white/5 transition duration-200">
                  <td className="p-4 border-r border-gray-800 font-medium text-white">Approvals (DCD, DM, developer)</td>
                  <td className="p-4 border-r border-gray-800 text-[#caa193]">Handled in-house</td>
                  <td className="p-4 text-gray-400">Managed separately by owner/consultant</td>
                </tr>
                <tr className="hover:bg-white/5 transition duration-200">
                  <td className="p-4 border-r border-gray-800 font-medium text-white">Point of Contact</td>
                  <td className="p-4 border-r border-gray-800 text-[#caa193]">One team, start to finish</td>
                  <td className="p-4 text-gray-400">Multiple vendors to coordinate</td>
                </tr>
                <tr className="hover:bg-white/5 transition duration-200">
                  <td className="p-4 border-r border-gray-800 font-medium text-white">Design Sign-off</td>
                  <td className="p-4 border-r border-gray-800 text-[#caa193]">3D visualization &amp; mood boards before work starts</td>
                  <td className="p-4 text-gray-400">Varies by contractor</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ================= HOSPITALITY & PROCESS SECTION ================= */}
        <section className="flex flex-col lg:flex-row items-center gap-10 lg:gap-12">
          <div className="w-full lg:w-1/2 text-left space-y-6">
            <div>
              <h2 className="text-[#b98877] text-xl sm:text-2xl font-conthrax leading-tight mb-3">
                Hospitality & Retail Interior Design in Palm Jumeirah
              </h2>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                For hotels, serviced residences, and boutique retail on Palm Jumeirah, we design guest rooms, lobbies, and public areas alongside retail concept design and shopfitting. Projects are managed under the same in-house design, civil works, and joinery structure used on residential work, giving hospitality and retail clients a single point of contact through fit-out and handover.<br/>
Hospitality fit-out on the Palm typically runs on tighter operational timelines than residential work, since public areas and guest rooms often need to be phased around an operating property. Our in-house joinery production gives us more control over that schedule than relying on third-party suppliers with their own lead times.

              </p>
            </div>

            <div>
              <h2 className="text-[#b98877] text-xl sm:text-2xl font-conthrax leading-tight mb-4">
                Our Palm Jumeirah Fit-Out Process
              </h2>
              <ul className="space-y-3 text-sm sm:text-base text-gray-300">
                <li className="flex gap-2">
                  <strong className="text-[#b98877] shrink-0">1.</strong>
                  <span><strong>Consultation &amp; Site Visit:</strong> in person for Dubai-based owners, over video call for owners still overseas.</span>
                </li>
                <li className="flex gap-2">
                  <strong className="text-[#b98877] shrink-0">2.</strong>
                  <span><strong>Design concept, 3D visualization, mood boards & quote:</strong> the design is reviewed and signed off before any on-site work starts.</span>
                </li>
                <li className="flex gap-2">
                  <strong className="text-[#b98877] shrink-0">3.</strong>
                  <span><strong>Approvals, civil works & in-house joinery production:</strong> DCD/DM/developer approvals, structural and MEP work, and joinery manufacturing run in parallel at our factory.</span>
                </li>
                <li className="flex gap-2">
                  <strong className="text-[#b98877] shrink-0">4.</strong>
                  <span><strong>Installation, styling & handover:</strong> final fit, furniture placement, and a walkthrough before keys are handed back to the owner.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="relative h-[350px] sm:h-[450px] w-full rounded-2xl overflow-hidden border border-gray-800 shadow-xl">
              <Image
                src="/images/Jumeirah (2).jpeg"
                alt="Palm Jumeirah Process and Fitout"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* ================= MAP & ADDRESS SECTION ================= */}
        <section className="text-center space-y-6  mx-auto pt-6 border-t border-gray-800/80">
          <div>
            <h3 className="text-[#b98877] text-lg font-conthrax uppercase tracking-wide mb-2">
              Visit Us
            </h3>
            <p className="text-gray-300 text-sm sm:text-base">
             <b className= "text-[#caa193]"
          ><a href="https://wedointerior.ae/">WE DO Interior Design & Fit-Out</a></b> WH-05 A, Jebel Ali Industrial 1, Dubai, UAE
            </p>
            <p className="text-gray-400 text-sm mt-2 space-x-2">
              <a href="tel:+971588075603" className="hover:text-[#b98877] transition">
                +971 58 807 5603
              </a>
              <span>&middot;</span>
              <a href="mailto:info@wedointerior.ae" className="hover:text-[#b98877] transition">
                info@wedointerior.ae
              </a>
            </p>
          </div>

          <div className="w-full rounded-2xl overflow-hidden border border-gray-800 shadow-lg h-[320px] sm:h-[380px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28901.815367671234!2d55.1189234!3d25.1124233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f1532f05a3967%3A0xb3a82dfbe027b4e9!2sPalm%20Jumeirah%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="WE DO Interior Design - Palm Jumeirah Location Map"
            ></iframe>
          </div>
        </section>

        {/* ================= FAQ SECTION ================= */}
        <section className="text-left space-y-6 pt-6 border-t border-gray-800/80">
          <h2 className="text-[#b98877] text-2xl font-conthrax leading-tight mb-6">
            Frequently asked questions (FAQs)
          </h2>

          <div className="space-y-6 text-sm sm:text-base text-gray-300">
            <div className="space-y-1">
              <h3 className="text-[#b98877] font-conthrax text-sm sm:text-base">
                1- Who is the best interior design company in Palm Jumeirah?
              </h3>
              <p className="leading-relaxed">
                WE DO Interior Design & Fit-Out has delivered 250+ residential and commercial projects across Dubai over 15+ years, including villas, apartments, and penthouses on Palm Jumeirah. Our in-house design, civil works, and joinery teams, plus ISO 9001, 14001, and 45001 certification, give clients one accountable team rather than several separate vendors.
              </p>
            </div>

            <div className="space-y-1">
              <h3 className="text-[#b98877] font-conthrax text-sm sm:text-base">
                2- How much does interior fit-out cost for a Palm Jumeirah villa or apartment?
              </h3>
              <p className="leading-relaxed">
                Cost depends on unit size, scope (single room vs. full interior), and finish level. A <b className= "text-[#caa193]"
          ><a href="https://wedointerior.ae/villa-renovation-dubai">Signature Villa renovation</a></b> and a two-bedroom apartment fit-out sit at very different budgets. Book a free consultation, and we'll walk the space (in person or over video for overseas owners) and provide a tailored quote.
              </p>
            </div>

            <div className="space-y-1">
              <h3 className="text-[#b98877] font-conthrax text-sm sm:text-base">
                3- Do you handle DCD and Dubai Municipality approvals for Palm Jumeirah properties?
              </h3>
              <p className="leading-relaxed">
                Our team manages DCD, Dubai Municipality, and private-developer approvals in-house, including for Emaar and Damac properties, so owners don't need a separate approvals consultant.
              </p>
            </div>

            <div className="space-y-1">
              <h3 className="text-[#b98877] font-conthrax text-sm sm:text-base">
                4- Can WE DO manage a full villa renovation, or only new-build interiors?
              </h3>
              <p className="leading-relaxed">
                Both. We handle full renovations of older Palm Jumeirah villas including structural and MEP changes as well as interior fit-out for newly handed-over villas and apartments.
              </p>
            </div>

            <div className="space-y-1">
              <h3 className="text-[#b98877] font-conthrax text-sm sm:text-base">
                5- Do you design for Palm Jumeirah apartments and penthouses, not just villas?
              </h3>
              <p className="leading-relaxed">
               Yes. Alongside villa work on the Fronds, we design and fit out apartments and penthouses in Crescent developments, including recently handed-over buildings like Serenia Living.
              </p>
            </div>

            <div className="space-y-1">
              <h3 className="text-[#b98877] font-conthrax text-sm sm:text-base">
                6- What's included in your Palm Jumeirah interior fit-out service?
              </h3>
              <p className="leading-relaxed">
                Design concept, 3D visualization and mood boards, civil and MEP coordination, custom joinery production, furniture and styling, and approvals handling, all delivered by our in-house teams under a single contract.
              </p>
            </div>

            <div className="space-y-1">
              <h3 className="text-[#b98877] font-conthrax text-sm sm:text-base">
                7- How long does a Palm Jumeirah apartment or villa fit-out typically take?
              </h3>
              <p className="leading-relaxed">
                Timelines vary with scope; a single-room refresh takes far less time than a full villa or penthouse fit-out. We confirm a project-specific timeline once we've scoped the unit.
              </p>
            </div>

            <div className="space-y-1">
              <h3 className="text-[#b98877] font-conthrax text-sm sm:text-base">
                8- Can you handle interior design remotely for overseas Palm Jumeirah property owners? 
              </h3>
              <p className="leading-relaxed">
                Yes. With international buyers making up a large share of Palm Jumeirah purchases, we run design approval through 3D visualization and mood boards, so owners can sign off on their interior from abroad before any on-site work begins.
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default AboutSection;
