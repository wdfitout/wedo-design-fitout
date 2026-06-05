'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const textImage = {
  src: '/images/contemporary-and-modern-office-interior-design.png',
  link: '/office-interior-design-trends-in-business-bay',
  title: 'Interior Design Trends In Business Bay'
};



const testimonials = [
  {
    stars: '⭐⭐⭐⭐⭐',
    text: '"WE DO transformed our Creek Harbour apartment with stunning built-in wardrobes and a bespoke kitchen. The craftsmanship is exceptional and the team was professional throughout."',
    author: '— Creek Harbour Resident, Apartment Fit-Out'
  },
  {
    stars: '⭐⭐⭐⭐⭐',
    text: '"We used WE DO for the full joinery fit-out of our cafe. The counter, shelving, and seating were all custom built and look incredible. Delivered on time and exactly as designed."',
    author: '— F&B Investor, Creek Harbour'
  },
  {
    stars: '⭐⭐⭐⭐⭐',
    text: '"Outstanding quality and service. Our custom wardrobe and TV unit are exactly what we envisioned. I will definitely use WE DO again for our next project."',
    author: '— Penthouse Owner, Dubai'
  }
];

const DProjects = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-play for Testimonials Carousel (Every 5 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="px-6 py-5 bg-black-200">
      
      {/* Top Content Block */}
      <div className="lg:max-w-[80%] mx-auto bg-black p-6 sm:p-10 rounded shadow text-center space-y-6 mb-12">
        <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#caa193]">
          Why Creek Harbour Properties Need Custom Furniture & Joinery
        </h2>
        <div className="space-y-4 text-sm sm:text-base font-play text-white text-left">
          <p>
            Dubai Creek Harbour is not a high-end residential or commercial community. It is an Emaar-built, iconic and masterplanned waterfront destination where property values, final expectations, and living style standards are among the best in Dubai. In this ambiance, off-the-shelf furniture simply does not belong. Custom furniture for apartments Dubai Creek Harbour makes sense for one fundamental reason Creek Harbour units are designed with precision. Floor-to-ceiling windows, open-plan living areas, and premium base finishes all demand furniture and interior in Dubai solutions that are built specifically for the space, not adapted to fit it.
          </p>

          <p>
            For residential owners, custom made furniture in Dubai protects and enhances the value of your Creek Harbour property. A penthouse fitted with bespoke in-house joinery Dubai craftsmanship commands significantly higher rental returns and resale value than one furnished from a standard showroom. For business owners, custom woodworks in Dubai are a commercial necessity. Cafes, restaurants, and retail shops in Creek Harbour compete in one of the most visually appealing F&B and retail markets in the UAE. Your joinery, your counters, your shelving, your seating is part of your brand. It needs to be built to reflect that.
            At WE DO, we deliver custom made furniture in Dubai solutions that work for both audiences, with the same commitment to quality across every project.
          </p>
        </div>
      </div>

      {/* Split Row – Text + Top Right Image */}
      <div className="lg:max-w-[90%] mx-auto flex flex-col lg:flex-row items-start gap-6 mb-12">
        <div className="w-full lg:w-2/3 space-y-4">
          <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#caa193]">
            Our Custom Furniture & Joinery Services in Dubai Creek Harbour
          </h2>
          <p className="text-sm sm:text-base text-white text-justify font-play">
            We offer a complete range of custom furniture in Dubai Creek Harbour services, covering every room, every space, and every application — residential and commercial.
          </p>

          {/* Service 1 */}
          <h3 className="text-sm sm:text-lg font-conthrax text-[#caa193] tracking-wide">
            Custom Wardrobes & Built-in Storage
          </h3>
          <p className="text-sm sm:text-base text-white text-justify font-play">
            Our custom wardrobes Dubai Creek Harbour solutions are designed to make the most of every square metre in your apartment or penthouse. Walk-in wardrobes, sliding door systems, functional storage units, and concealed cabinetry — all fabricated in our bespoke in-house joinery Dubai workshop to the exact dimensions of your space. No gaps, no compromises, no off-the-shelf proportions.
          </p>

          {/* Service 2 */}
          <h3 className="text-sm sm:text-lg font-conthrax text-[#caa193] tracking-wide">
            Kitchen Cabinetry & Joinery
          </h3>
          <p className="text-sm sm:text-base text-white text-justify font-play">
            Custom kitchen cabinets Dubai Creek Harbour crafted around your cooking habits, your storage requirements, and your elegance. From functional modern kitchens to warm, traditional cabinetry, our kitchen joinery Dubai solutions cover each detail — island units, pantry storage, overhead cabinets, and integrated appliance housing — all completed to elegance.
          </p>

          {/* Service 3 */}
          <h3 className="text-sm sm:text-lg font-conthrax text-[#caa193] tracking-wide">
            Custom TV Units & Wall Panelling
          </h3>
          <p className="text-sm sm:text-base text-white text-justify font-play">
            Feature walls, entertainment units, fluted wall panels, and bespoke shelving — our custom TV unit Dubai and wall panelling service transforms the focal points of your Creek Harbour living space. In Creek Harbour penthouses and fancy apartments, these pieces really stand out, instantly making a room special.
          </p>

          {/* Service 4 */}
          <h3 className="text-sm sm:text-lg font-conthrax text-[#caa193] tracking-wide">
            Bespoke Dining & Living Room Furniture
          </h3>
          <p className="text-sm sm:text-base text-white text-justify font-play">
            Get customized furniture services across all locations — personalized tables, sideboards, and stylish coffee tables. They also do cool display units and amazing shelving, great choices for any home. Every piece of bespoke furniture Dubai we design is crafted to complement your interior design scheme and built to outlast anything you would find in a standard furniture showroom.
          </p>

          {/* Service 5 */}
          <h3 className="text-sm sm:text-lg font-conthrax text-[#caa193] tracking-wide">
            Custom Office Furniture for Dubai Creek Harbour
          </h3>
          <p className="text-sm sm:text-base text-white text-justify font-play">
            Custom office furniture for Dubai Creek Harbour residents and businesses — workstations, home office units, built-in desk solutions, reception counters, and executive storage systems. With the rise of work-from-home professionals in Creek Harbour's premium apartments, a well-designed home office is no longer optional. Our custom made furniture in Dubai services change spare rooms and awkward corners into highly practical, elegantly finished workspaces.
          </p>

          {/* Service 6 */}
          <h3 className="text-sm sm:text-lg font-conthrax text-[#caa193] tracking-wide">
            Doors, Frames & Architectural Joinery
          </h3>
          <p className="text-sm sm:text-base text-white text-justify font-play">
            We do complete architectural joinery for full fit-out projects — internal doors, frames, skirting boards, architraves, and decorative timber elements. Our full-service joinery company Dubai Creek Harbour handles your entire joinery needs under one contract. It's all managed by one team with just one person to contact, making things easier for you.
          </p>
        </div>

        {/* Top Right Image with Hover Effects */}
        <div className="w-full lg:w-1/3 group relative overflow-hidden rounded-lg shadow-lg">
          <a href={textImage.link} className="block">
            <Image
              src={textImage.src}
              alt={textImage.title}
              width={500}
              height={400}
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
        
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-3xl font-conthrax text-white py-12">
          Custom Joinery for Creek Harbour Homes & Businesses
        </h2>

        {/* Section 1: Text Left, Image Right */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          <div className="space-y-6 text-white font-play">
            <p className="text-justify">
              Our custom furniture in Dubai Creek Harbour services are designed to serve two distinct audiences equally well.
            </p>

            {/* Residential & Commercial Table */}
            <div className="grid grid-cols-2 gap-4">
              {/* Residential */}
              <div>
                <h3 className="text-sm sm:text-lg font-conthrax text-[#caa193] tracking-wide mb-2">
                  Residential
                </h3>
                <ul className="list-disc pl-5 space-y-1 text-white text-sm font-play">
                  <li>Apartments & Penthouses</li>
                  <li>Custom wardrobes & built-in storage</li>
                  <li>Bespoke kitchen cabinetry</li>
                  <li>Living & dining furniture</li>
                  <li>Custom TV units & wall panels</li>
                  <li>Home office solutions</li>
                </ul>
              </div>

              {/* Commercial */}
              <div>
                <h3 className="text-sm sm:text-lg font-conthrax text-[#caa193] tracking-wide mb-2">
                  Commercial
                </h3>
                <ul className="list-disc pl-5 space-y-1 text-white text-sm font-play">
                  <li>Cafes & Coffee Shops</li>
                  <li>Bar counters & service stations</li>
                  <li>Restaurant seating & table joinery</li>
                  <li>Retail display units & shelving</li>
                  <li>Custom office furniture & reception</li>
                  <li>Architectural joinery & fit-out</li>
                </ul>
              </div>
            </div>

            <p className="text-justify">
              Whether you are a homeowner looking to get
              custom made furniture in Dubai for
              your Creek Harbour apartment, or a business owner fitting out a new
              commercial space, our team delivers the same level of precision,
              quality, and craftsmanship on every single project.
               We are proud to be the
              furniture and interior in Dubai
              partner that Creek Harbour residents and investors trust for both the
              spaces they live in and the businesses they build.
            </p>

           
          </div>

          <div className="rounded-lg overflow-hidden shadow-md">
            <Image
              src="/images/startech (2).webp"
              alt="Custom Joinery Dubai Creek Harbour"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>

      {/* Bottom CTA Section */}
      <div className="bg-[#f5ede5] py-10 text-center space-y-4">
        <h3 className="text-xs sm:text-xl font-conthrax uppercase">
          Get In Touch With Us
        </h3>
        <p className="text-sm sm:text-base font-play">
          We are located in the world's luxury city, Dubai
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

      {/* last paragraph */}
      <div className="lg:max-w-[90%] mx-auto bg-black p-6 sm:p-10 rounded shadow space-y-6 mb-12 mt-12">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-conthrax text-[#caa193] mb-2">
            Premium Materials & Finishes for Creek Harbour Joinery
          </h2>

          <p className="font-play text-sm sm:text-base text-white text-justify py-2">
            The quality of your custom woodworks in Dubai is
            only as excellent as the materials behind it. At WE DO, we get high-end materials
            perfect for Dubai's climate, as well as the design style of Creek Harbour, and the
            needs of both homes and businesses.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="rounded-lg overflow-hidden shadow-md">
            <Image
              src="/images/meby (7).webp"
              alt="Premium Materials & Finishes Custom Joinery Dubai Creek Harbour"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="text-white font-play">
            <h3 className="text-sm font-conthrax text-[#caa193] mt-2 mb-2">
              Wood & Board Materials
            </h3>
            <p className="text-justify">
              We use solid oak, walnut, and teak for making statement pieces. For things like
              cabinets and built-ins, moisture-resistant MDF and plywood work awesome. When it
              comes to commercial spaces that see a lot of wear and tear, high-density boards
              are the top choice.
            </p>

            <h3 className="text-sm font-conthrax text-[#caa193] mt-2 mb-2">
              Surface Finishes
            </h3>
            <p className="text-justify">
              You can get lacquer in matte, satin, or high-gloss. There's wood veneer in
              natural or stained finishes, along with a smooth, durable PU paint surface.
              Laminate is great for commercial joinery because it's cost-effective and
              long-lasting.
            </p>

            <h3 className="text-sm font-conthrax text-[#caa193] mt-2 mb-2">
              Hardware & Fittings
            </h3>
            <p className="text-justify">
              Blum's soft-close mechanisms and concealed hinges really shine, plus there are
              functional-open systems. For handles and fittings, you can go with brass, brushed
              gold, or stainless steel. LED strips add style too — great for wardrobe lighting
              and display shelves.
            </p>

            <h3 className="text-sm font-conthrax text-[#caa193] mt-2 mb-2">
              Sustainable Options
            </h3>
            <p className="text-justify">
              WE DO provide FSC-certified timber, low-VOC lacquers, and sustainable boards for
              clients wanting eco-friendly in-house joinery in Dubai. This way, you meet
              sustainability standards while keeping quality and looks intact.
              Each material choice is made for lasting beauty and to stand up to Dubai's
              climate. So, your joinery will look amazing not just on day one, but for years
              afterward.
            </p>

            
          </div>
        </div>
      </div>

      <div className="lg:max-w-[80%] mx-auto flex flex-col lg:flex-row items-start gap-6 mb-12">
        <div className="w-full space-y-4">
          <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#caa193]">
            How We Deliver Your Custom Furniture in Dubai Creek Harbour
          </h2>
          <p className="text-sm sm:text-base text-white text-justify font-play">
            Our proven process has been refined over 15 years of delivering
            custom joinery Dubai projects across the
            city. This is how it works:
          </p>

          <h3 className="text-sm sm:text-lg font-conthrax text-[#caa193] tracking-wide mt-2">
            Step 1 — Consultation & Site Measurement
          </h3>
          <p className="text-sm sm:text-base text-white text-justify font-play">
            We head to your Creek Harbour place for consultation and site measurement.
            We measure each space accurately and talk about your lifestyle, what you
            like aesthetically, and your budget too. It's all about understanding your
            needs.
          </p>

          <h3 className="text-sm sm:text-lg font-conthrax text-[#caa193] tracking-wide mt-2">
            Step 2 — Design & Material Selection
          </h3>
          <p className="text-sm sm:text-base text-white text-justify font-play">
            Our designers use that info to create custom layouts. They even show you
            samples of materials, finishes, and hardware for your pick. It's all
            customized just for you. You see exactly what you are getting before any
            fabrication begins.
          </p>

          <h3 className="text-sm sm:text-lg font-conthrax text-[#caa193] tracking-wide mt-2">
            Step 3 — 3D Visualisation & Approval
          </h3>
          <p className="text-sm sm:text-base text-white text-justify font-play">
            Every custom furniture Dubai Creek Harbour
            project includes photorealistic 3D renders of each joinery piece in your
            actual space. You approve the design in full dimensions, finishes, materials,
            and hardware before a single cut is made in our workshop.
          </p>

          <h3 className="text-sm sm:text-lg font-conthrax text-[#caa193] tracking-wide mt-2">
            Step 4 — In-House Workshop Fabrication
          </h3>
          <p className="text-sm sm:text-base text-white text-justify font-play">
            All joinery is fabricated in our own bespoke
           in-house joinery Dubai workshop. We don't
            outsource to third-party manufacturers, giving us total quality control,
            faster turnaround times, and direct accountability from our team to yours.
          </p>

          <h3 className="text-sm sm:text-lg font-conthrax text-[#caa193] tracking-wide mt-2">
            Step 5 — On-Site Installation
          </h3>
          <p className="text-sm sm:text-base text-white text-justify font-play">
            We are expert in taking care of everything including on-site installation,
            keeping your Creek Harbour property protected and making sure everything
            finished just right.
          </p>

          <h3 className="text-sm sm:text-lg font-conthrax text-[#caa193] tracking-wide mt-2">
            Step 6 — Handover & Snagging
          </h3>
          <p className="text-sm sm:text-base text-white text-justify font-play">
            After we install everything, we do a complete handover with a thorough
            snagging inspection. You get to check each detail with us, and we'll fix
            any touch-ups required. Plus, we make sure all the work is completed
            perfectly before we're done. We do not consider a project finished until
            you are completely satisfied.
          </p>

          <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#caa193]">
            Our Custom Furniture & Joinery Projects in Dubai
          </h2>
          <p className="text-sm sm:text-base text-white text-justify font-play">
            We work on custom furniture and joinery
            projects in Dubai's top areas, like
            
              Downtown Dubai, Dubai Marina, Palm Jumeirah, Business Bay, and JBR. Every project shows our dedication to precision, craftsmanship, personal
            design, and finishing on time.
             We are a
            Turkish Furniture Contractor in Dubai with
            deep understanding in high-end woodworking tradition, blending Old World
            craftsmanship with contemporary CNC fabrication technology to provide joinery
            that is both elegant and long-lasting.
We are actively delivering
           custom furniture in Dubai Creek Harbour
            projects right now — yours could be featured here next.
          </p>
          
{/* Portfolio Link Added Below */}
          <div className="pt-2">
            <a 
              href="https://wedointerior.ae/gallery" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block text-sm sm:text-base font-conthrax text-[#caa193] hover:text-white transition-colors duration-300 border-b border-[#caa193] hover:border-white pb-1 tracking-wider"
            >
              View Our Full Portfolio →
            </a>
            </div>
          <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#caa193]">
            Why Creek Harbour Clients Choose WE DO for Custom Furniture & Joinery
          </h2>
          <p className="text-sm sm:text-base text-white text-justify font-play">
            As a leading furniture and interior in Dubai
            company with over 15 years of experience, WE DO Interior Design & Fitout
            brings a level of capability and reliability that sets us apart:
          </p>

          {/* Table */}
          <div className="overflow-x-auto mt-4">
            <table className="w-full text-sm font-play border-collapse">
              <thead>
                <tr>
                  <th className="text-left font-conthrax text-[#caa193] border border-[#caa193] px-4 py-2">
                    What We Offer
                  </th>
                  <th className="text-left font-conthrax text-[#caa193] border border-[#caa193] px-4 py-2">
                    Why It Matters
                  </th>
                </tr>
              </thead>
              <tbody className="text-white">
                <tr>
                  <td className="border border-[#caa193]/40 px-4 py-2">
                    <b className="text-[#caa193]">In-House Joinery Workshop</b>
                  </td>
                  <td className="border border-[#caa193]/40 px-4 py-2">
                    No outsourcing — full quality control from design to delivery
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#caa193]/40 px-4 py-2">
                    <b className="text-[#caa193]">15+ Years Experience</b>
                  </td>
                  <td className="border border-[#caa193]/40 px-4 py-2">
                    Residential and commercial joinery across all Dubai communities
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#caa193]/40 px-4 py-2">
                    <b className="text-[#caa193]">End-to-End Service</b>
                  </td>
                  <td className="border border-[#caa193]/40 px-4 py-2">
                    Design, fabrication, and installation under one roof
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#caa193]/40 px-4 py-2">
                    <b className="text-[#caa193]">Dual Residential & Commercial Expertise</b>
                  </td>
                  <td className="border border-[#caa193]/40 px-4 py-2">
                    We serve homeowners and business owners equally
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#caa193]/40 px-4 py-2">
                    <b className="text-[#caa193]">Turkish Furniture Contractor in Dubai</b>
                  </td>
                  <td className="border border-[#caa193]/40 px-4 py-2">
                    Premium craftsmanship tradition combined with modern production
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#caa193]/40 px-4 py-2">
                    <b className="text-[#caa193]">Dubai Municipality Compliant</b>
                  </td>
                  <td className="border border-[#caa193]/40 px-4 py-2">
                    All materials and installations meet local regulatory standards
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#caa193]/40 px-4 py-2">
                    <b className="text-[#caa193]">On-Time Delivery</b>
                  </td>
                  <td className="border border-[#caa193]/40 px-4 py-2">
                    Strict project timelines because every delayed day costs you money
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#caa193]/40 px-4 py-2">
                    <b className="text-[#caa193]">Warranty on All Work</b>
                  </td>
                  <td className="border border-[#caa193]/40 px-4 py-2">
                    Every joinery piece backed by our quality guarantee
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#caa193]/40 px-4 py-2">
                    <b className="text-[#caa193]">Get Customized Furniture Services Across All Locations</b>
                  </td>
                  <td className="border border-[#caa193]/40 px-4 py-2">
                    We serve Creek Harbour and all Dubai communities
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
  {/* ========================================== */}
          {/*          TESTIMONIALS CAROUSEL             */}
          {/* ========================================== */}
          <h2 className="text-lg md:text-xl font-conthrax text-[#caa193] pt-6">
            What Our Clients Say
          </h2>
          
          <div className="relative w-full max-w-4xl mx-auto bg-black/40 border border-[#caa193]/30 rounded-lg p-6 sm:p-10 min-h-[220px] flex flex-col justify-between overflow-hidden">
            {/* Slides Loop */}
            {testimonials.map((slide, index) => (
              <div
                key={index}
                className={`transition-all duration-500 ease-in-out ${
                  index === currentSlide ? 'block opacity-100 scale-100' : 'hidden opacity-0 scale-95'
                } space-y-4 font-play text-white`}
              >
                <div className="text-xl sm:text-2xl text-yellow-500 tracking-wider">
                  {slide.stars}
                </div>
                <p className="text-sm sm:text-base italic text-zinc-200 leading-relaxed text-justify">
                  {slide.text}
                </p>
                <p className="text-xs sm:text-sm font-conthrax text-[#caa193] tracking-wide pt-2">
                  {slide.author}
                </p>
              </div>
            ))}

            {/* Carousel Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, dotIndex) => (
                <button
                  key={dotIndex}
                  onClick={() => setCurrentSlide(dotIndex)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    dotIndex === currentSlide ? 'w-6 bg-[#caa193]' : 'w-2 bg-zinc-600'
                  }`}
                  aria-label={`Go to slide ${dotIndex + 1}`}
                />
              ))}
            </div>
          </div>

          {/* ========================================== */}
          {/*        LIVE GOOGLE MAP EMBED SECTION       */}
          {/* ========================================== */}
          <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#caa193] pt-6">
            Serving Dubai Creek Harbour & All Emaar Waterfront Communities
          </h2>
          
          <div className="w-full h-64 sm:h-[400px] rounded-lg border border-[#caa193]/30 overflow-hidden shadow-lg my-4 relative">
            <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28879.625769385028!2d55.3708!3d25.2048!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f679fadfb563d%3A0x15e90d8fe66e02f2!2sRas%20Al%20Khor%20-%20Dubai%20Creek%20Harbour%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1779287470131!5m2!1sen!2s" 
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps - Dubai Creek Harbour"
                ></iframe>
          </div>

          <p className="text-sm sm:text-base text-white text-justify font-play">
            We feel proud in offering custom furniture in Dubai Creek Harbour and across all Emaar waterfront communities Creek Harbour, Emaar Beachfront, Dubai Creek Residences, Harbour Views, and beyond.
          </p>
          <h2 className="text-lg md:text-xl font-conthrax text-[#caa193] mt-6">
            Frequently Asked Questions About Custom Furniture in Dubai Creek Harbour
          </h2>

          {/* FAQ 1 */}
          <h3 className="text-base md:text-sm font-conthrax text-[#caa193]">
            How much does personalized furniture cost in Dubai Creek Harbour?
          </h3>
          <p className="text-sm sm:text-base text-white text-justify font-play">
            Custom joinery costs in Dubai vary based on quality materials, complexity,
            and scope. As a general guide, fitted wardrobes begin from
            AED 3,000, personalized kitchens from
            AED 15,000, and complete apartment joinery
            packages from AED 30,000 upwards. Connect
            with us for a detailed quote specific to your Creek Harbour space.
          </p>

          {/* FAQ 2 */}
          <h3 className="text-base md:text-sm font-conthrax text-[#caa193]">
            How long does custom joinery take in Dubai?
          </h3>
          <p className="text-sm sm:text-base text-white text-justify font-play">
            A standard custom furniture project takes
            3–6 weeks from design sign-off to
            installation, depending on the scope. Full apartment joinery fit-outs
            typically take 4–8 weeks. We provide a
            detailed project timeline at the start of every engagement.
          </p>

          {/* FAQ 3 */}
          <h3 className="text-base md:text-sm font-conthrax text-[#caa193]">
            Is custom furniture better than ready-made furniture in Dubai?
          </h3>
          <p className="text-sm sm:text-base text-white text-justify font-play">
            For Creek Harbour properties, yes — without question.
            Custom made furniture in Dubai fits your
            exact space, matches your exact finish specification, and is built to a
            quality standard that ready-made furniture cannot match. It also adds
            measurable value to your property.
          </p>

          {/* FAQ 4 */}
          <h3 className="text-base md:text-sm font-conthrax text-[#caa193]">
            Can you match my existing interior finishes and design?
          </h3>
          <p className="text-sm sm:text-base text-white text-justify font-play">
            Absolutely. Our professionals conduct a full site visit and material analysis
            before any design work starts. We match existing colour palettes, finishes,
            hardware, and design styles precisely — making sure your new joinery feels
            like it was always part of the space.
          </p>

          {/* FAQ 5 */}
          <h3 className="text-base md:text-sm font-conthrax text-[#caa193]">
            Do you make joinery for both homes and businesses in Creek Harbour?
          </h3>
          <p className="text-sm sm:text-base text-white text-justify font-play">
            Yes. We are one of the few
           joinery company Dubai Creek Harbour
            specialists who serve both residential and commercial clients with equal
            depth. From apartments and penthouses to cafes, restaurants, and retail
            shops — we cover it all.
          </p>

          {/* FAQ 6 */}
          <h3 className="text-base md:text-sm font-conthrax text-[#caa193]">
            Do you offer 3D visualisation before fabrication starts?
          </h3>
          <p className="text-sm sm:text-base text-white text-justify font-play">
            Yes — always. Every project includes full
            3D render before a single piece is
            fabricated. You witness your joinery in your actual space before any money
            is spent on production.
          </p>

          {/* FAQ 7 */}
          <h3 className="text-base md:text-sm font-conthrax text-[#caa193]">
            What materials do you use for personalized wardrobes in Dubai?
          </h3>
          <p className="text-sm sm:text-base text-white text-justify font-play">
            We work with solid hardwoods, moisture-resistant MDF, high-end plywood, and
            a full range of lacquer, veneer, and laminate finishes. All materials are
            selected for Dubai's climate and your specific design needs.
          </p>

        

          {/* ========================================== */}
          {/*         FINAL CALL TO ACTION SECTION       */}
          {/* ========================================== */}
          <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#caa193] pt-6">
            Start Your Custom Furniture Project in Dubai Creek Harbour Today
          </h2>
          
          <p className="text-sm sm:text-base text-white text-justify font-play">
            Creek Harbour needs furniture and joinery built for it not picked off a showroom floor. If you are furnishing your home or fitting out a business, our professionals are ready to design, fabricate, and install a space that showcases the high-end standard of this area. WE DO Interior Design & Fitout your trusted Woodwork Company in Dubai for custom furniture & joinery in Dubai Creek Harbour.
          </p>

        </div>
      </div>
    </section>
  );
};

export default DProjects;