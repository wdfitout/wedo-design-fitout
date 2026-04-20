"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";

const services = [
  {
    title: "Apartment Interior Design In Creek Harbour Dubai",
    description: "Focusing on modern designs, innovative planning, and individualized styling for residential apartments.",
    bgImage: "/images/dbckapt (3).png",
    link: "/apartment-interior-design-creek-harbour",
  },
  {
    title: "Turnkey Interior Design & Fit-out Services",
    description: "Full personalized solutions from idea development to finishings, including approvals and project management.",
    bgImage: "/images/dbckapt (2).png",
    link: "/turnkey-fit-out-services",
  },
  {
    title: "Luxury Interior Design Dubai Creek Harbour",
    description: "Specific for high-end apartments and penthouses using quality materials and customized detailing.",
    bgImage: "/images/dbckapt (4).png",
    link: "/luxury-interior-design-creek-harbour",
  },
  {
    title: "Commercial Interior Design in Dubai Creek Harbour",
    description: "Expert design for retail stores, cafés, restaurants, and offices with focus on branding and practicality.",
    bgImage: "/images/dbckapt (6).png",
    link: "/commercial-interior-design-creek-harbour",
  },
];

const AboutSection = () => {
  return (
    <section className="bg-[#000000] py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-8 lg:px-16">
        
        {/* Section 2: Why Essential */}
        <div className="w-full text-center mb-16">
          <h2 className="text-[#b98877] text-3xl font-conthrax mb-6 leading-tight uppercase">
            2. Why Interior Design Dubai Creek Harbour Essential?
          </h2>
          <div className="max-w-5xl mx-auto space-y-6">
            <p className="text-justify text-white text-base font-play leading-relaxed">
              Most Creek Harbour residential apartments are provided without full interiors, which makes professional design not just beneficial but exclusive for designing a livable and high-value space. Professional interior designers in Dubai ensure that everything is taken care of from the efficient layout designs of the modern residences in Dubai Creek Harbour.
            </p>
            <p className="text-justify text-white text-base font-play leading-relaxed">
              A well-structured interior also elevates the impact of waterfront views through smart styling and elegance, while significantly increasing both rental potential and resale value. This is exactly why property owners and investors actively search for interior companies near me and rely on reliable interior design companies in Dubai Creek Harbour to transform their apartments into fully optimized, ready-to-use spaces.
            </p>
          </div>
        </div>


        {/* Featured Service Detail */}
        <div className="flex flex-col lg:flex-row items-center gap-10 mb-20">
          <div className="w-full lg:w-1/2">
            <Image
              src="/images/dbckapt (5).png"
              alt="Apartment Interior Design"
              width={800}
              height={600}
              className="w-full h-auto rounded-lg shadow-md object-cover"
            />
          </div>
          <div className="w-full lg:w-1/2 text-left">
           <h2 className="text-[#b98877] text-3xl font-conthrax mb-6 uppercase">
            3. Our Interior Design Services in Dubai Creek Harbour
          </h2>
          <p className="text-center text-white text-base font-play mb-10 leading-relaxed max-w-4xl mx-auto">
            As one of the best interior design companies in UAE, we deliver complete residential and commercial solutions designed to meet modern lifestyle and investment needs in Dubai Creek Harbour.
          </p>
            <div className="flex gap-4">
              <Link href="/contact-us" className="bg-[#b98877] text-black font-conthrax px-6 py-3 rounded-md text-sm hover:bg-[#a67a6b] transition">
                Get A Quote
              </Link>
            </div>
          </div>
        </div>
   
       

        {/* Detailed Service Descriptions */}
        <div className="space-y-16 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-[#111111] p-6 rounded-xl border border-[#b98877]/20">
              <h3 className="text-[#b98877] text-md font-conthrax mb-3 uppercase">Apartment Interior Design in Creek Harbour Dubai</h3>
              <p className="text-white font-play text-xs leading-relaxed text-justify">
               WE DO professionals of Apartment Interior Design in Creek Harbour Dubai, focusing on modern designs, innovative planning, and individualized styling. Every residential apartment is planned keeping in mind unique space usage, effective layout design for both smaller and larger apartments, and individualized furniture solutions that deal with luxury.
</p>
            </div>
            <div className="bg-[#111111] p-6 rounded-xl border border-[#b98877]/20">
              <h3 className="text-[#b98877] text-md font-conthrax mb-3 uppercase">Turnkey Interior Design & Fit-out Services</h3>
              <p className="text-white font-play text-xs leading-relaxed text-justify">
               WE DO is one of the most reliable interior design and fit out companies in Dubai, delivering full personalized solutions from idea development to finishings. Our services cover design, approvals, completion, and full project management, making sure iconic results. WE DO is one of the leading interior fit out companies in Dubai, providing flawless and high-end interiors without problem for the client.
</p>
            </div>
            <div className="bg-[#111111] p-6 rounded-xl border border-[#b98877]/20">
              <h3 className="text-[#b98877] text-md font-conthrax mb-3 uppercase">Luxury Interior Design Dubai Creek Harbour</h3>
              <p className="text-white font-play text-xs leading-relaxed text-justify">
               We are professional in luxury interior design Dubai services are specific for high-end apartments and penthouses in Dubai Creek Harbour. WE DO use quality materials, personalized completion, and customized detailing to craft elegant interiors that elevate the value of each Dubai Creek Harbour residential apartment.
</p>
            </div>
            <div className="bg-[#111111] p-6 rounded-xl border border-[#b98877]/20">
              <h3 className="text-[#b98877] text-md font-conthrax mb-3 uppercase">Furniture Packages & Airbnb Setup</h3>
              <p className="text-white font-play text-xs leading-relaxed text-justify">
               WE DO offers client-focused solutions covering flexible furniture packages, Airbnb furnishing setups, and planning designed for rental optimization. We offer the best service that is iconic for owners specifically for short-term rental income in modern residences in Dubai Creek Harbour, making sure faster occupancy and profitable returns.
</p>
            </div>
            <div className="bg-[#111111] p-6 rounded-xl border border-[#b98877]/20">
              <h3 className="text-[#b98877] text-md font-conthrax mb-3 uppercase">Dubai Creek Harbour Apartment Renovation</h3>
              <p className="text-white font-play text-xs leading-relaxed text-justify">
               We provide full Dubai Creek Harbour Apartment Renovation solutions that cover layout elevates, interior modernization, and value enhancement. Our interior design and renovation concept gives attention to improving both elegance and ROI, creating older units competitive and valuable in the market.
</p>
 </div>
            <div className="bg-[#111111] p-6 rounded-xl border border-[#b98877]/20">
              <h3 className="text-[#b98877] text-md font-conthrax mb-3 uppercase">Commercial Interior Design in Dubai Creek Harbour</h3>
              <p className="text-white font-play text-xs leading-relaxed text-justify">
               Seeking an expert interior designer Dubai commercial services? WE DO craft retail stores, cafés, restaurants, and office interior designs with a deep focus on branding and practicality. We are one of the top interior companies in Dubai, offering commercial spaces that are both visually appealing and operationally exclusive.
</p>
            </div>
          </div>
        </div>

        {/* Section 4 & 5: Buildings and Types */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 py-12 border-y border-[#b98877]/30 mb-20">
            <div>
              <div>
  <h2 className="text-[#b98877] text-2xl font-conthrax mb-6 uppercase">
    4. Interior Design for Best Buildings in Dubai Creek Harbour
  </h2>
  
  <p className="text-white font-play text-sm mb-4">
    We provide specialized services in the best buildings in Dubai Creek Harbour, including:
  </p>
  
  <ul className="text-white font-play space-y-3 text-sm mb-6">
    <li>• <strong className="text-[#b98877]">Creek Palace</strong> – Premium apartment interior design in Creek Palace</li>
    <li>• <strong className="text-[#b98877]">Moor at Creek Beach</strong> – Functional and stylish interiors</li>
    <li>• <strong className="text-[#b98877]">Creek Waters</strong> – High-end fit-out services in Creek Waters</li>
    <li>• <strong className="text-[#b98877]">Aeon Tower</strong> – Modern layouts for urban living</li>
    <li>• <strong className="text-[#b98877]">Address Residences</strong> – Luxury turnkey interiors</li>
  </ul>

  <p className="text-white font-play text-sm  ">
    Our experience across these projects positions us among the top interior design companies in Dubai Creek Harbour.
  </p>
</div>
            </div>
           <div>
  <h2 className="text-[#b98877] text-2xl font-conthrax mb-6 uppercase">
    5. Types of Properties We Design
  </h2>
  
  <div className="text-white font-play text-sm">
    {/* Pehli line full width */}
    <p className="mb-4">We design all property types, including:</p>
    
    {/* Grid sirf points ke liye */}
    <div className="grid grid-cols-2 gap-y-3 mb-6">
      <p>• Studio Apartments</p>
      <p>• 1 Bedroom Apartments</p>
      <p>• 2–3 Bedroom Apartments</p>
      <p>• Luxury Penthouses</p>
      <p>• Waterfront Residences</p>
      <p>• Serviced Apartments</p>
      <p>• Short-Term Rental Units</p>
    </div>
    
    {/* Last line full width niche */}
    <p>
      Each Dubai Creek Harbour residential apartment is customized based on client needs.
    </p>
  </div>
</div>
        </div>

        {/* Section 6 & 7: Hiring and Process */}
        <div className="mb-20">
           
          <h2 className="text-[#b98877] text-3xl font-conthrax mb-6 leading-tight uppercase">
            6. Hire Interior Designer Dubai – Commercial & Residential Experts
          </h2>
          <div className="max-w-5xl mx-auto space-y-6">
            <p className="text-justify text-white text-base font-play leading-relaxed">
              Searching for an interior designer Dubai Creek Harbour means you need a reliable team that can handle both design creativity and full execution. WE DO is a reliable interior designers company delivering full services specific for residential apartments, elegant homes, and commercial spaces all over Dubai.
            </p>
            <p className="text-justify text-white text-base font-play leading-relaxed">
             We are reputed as one of the top interior design companies in Dubai and are often selected by customers looking for interior companies near me due to our professionalism, quality materials, and high-end project management concept.
            </p>
          </div>
          </div>
          <div className="mb-20">
          <h2 className="text-[#b98877] text-2xl font-conthrax mb-8 uppercase text-center">7. Our Interior Design Process</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Consultation & Requirement Analysis", "Concept Design & Mood Boards", 
              "Space Planning & Layout Design", "3D Visualization", 
              "Material & Furniture Selection", "Authority Approvals", 
              "Fit-out Execution", "Final Styling & Handover"
              
            ].map((step, i) => (
              <div key={i} className="p-6 bg-[#111111] border border-[#b98877]/20 text-white font-play text-sm rounded-lg text-center hover:border-[#b98877] transition">
                <span className="text-[#b98877] block mb-2 font-conthrax">{i + 1}</span>
                {step}
              </div>
            ))}
          </div>
          <p className="text-white font-play text-justify leading-relaxed text-base mb-12">
           This structured process makes us one of the most reliable interior fit out companies in UAE.
          </p>
        </div>

        {/* Section 8: Why Choose Us */}
        <div className="bg-[#111111] p-10 rounded-2xl border border-[#b98877]/10 mb-20 text-center">
          <h2 className="text-[#b98877] text-2xl font-conthrax mb-6 uppercase">8. Why Choose WE DO Interior Design & Fitout</h2>
          <p className="text-white font-play text-justify md:text-center leading-relaxed max-w-5xl mx-auto">
           We are listed among the best interior design companies in Dubai due to its specialization in managing contemporary apartment layouts and offering full personalized services. Our professionals have knowledge about the unique needs of Dubai Creek Harbour residential apartment spaces, making sure each space is optimized for practicality and elegance.
          </p>
          <p className="text-white font-play text-justify md:text-center leading-relaxed max-w-5xl mx-auto">
          We offer fast-track completion for new handovers, placing us the top choice for investors and clients. If you are looking for an interior designer Dubai, a trusted fit out company Dubai Creek Harbour, or one of the top interior fit out companies in Dubai, our experienced craftsmen offer the best quality with specific solutions.
          </p>
        </div>

        {/* Section 9: FAQs */}
        <div className="mb-20">
          <h2 className="text-[#b98877] text-3xl font-conthrax mb-10 uppercase border-b border-[#b98877]/30 pb-4">9. FAQs</h2>
          <div className="grid grid-cols-1  gap-x-12 gap-y-8">
            {[
              { q: "Do you provide interior design for Creek Palace and Creek Waters?", a: "Yes, WE DO provides full design and fit-out solutions for all major projects in Creek Harbour." },
              { q: "Do you offer turnkey fit-out services in Dubai Creek Harbour?", a: "Yes, WE DO is reputed as one of the top interior design and fit out companies in Dubai delivering turnkey services." },
              { q: "Can you furnish my apartment for Airbnb?", a: "Yes, we provide full furnishing and styling packages." },
              { q: "Do you handle complete design and execution?", a: "Yes, from ideation to completion, everything is managed in-house." },
              { q: "Can you customize the interior design according to my style?", a: "Absolutely, all designs are fully customized." },
              { q: "How much does interior design cost in Dubai Creek Harbour?", a: "The interior design cost in Dubai Creek Harbour varies depending on apartment size, material selection, customization level, scope of work. We are one of the best interior design companies in Dubai, delivering transparent and competitive pricing." },
              { q: "How long does an interior design project take?", a: "Studio Apartment: 3–5 weeks | 1–2 Bedroom Apartment: 5–8 weeks | Full Fit-out: 8–12 weeks. Fast-track options are available for urgent projects, making us one of the most efficient interior design and fit out companies in Dubai." }
            ].map((faq, i) => (
              <div key={i} className="border-b border-[#ffffff]/10 pb-4">
                <h4 className="text-[#b98877] font-conthrax text-sm mb-2 uppercase">{faq.q}</h4>
                <p className="text-white font-play text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;