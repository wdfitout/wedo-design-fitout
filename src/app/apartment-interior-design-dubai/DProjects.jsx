'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const textImage = {
  src: '/images/bba (2).jpg',
  link: '/business-bay-apartment',
  title: 'Business Bay Apartment'
};

const galleryImages = [
  { src: '/images/acacia-dubai-hills-2-bedroom-apartment.png', link: '/acacia-dubai-hills-2-bedroom-apartment', title: 'ACACIA DUBAI HILLS APARTMENT' },
  { src: '/images/dubai-marina-luxury-apartment.png', link: '/dubai-marina-luxury-apartment', title: 'DUBAI MARINA LUXURY APARTMENT' },
  { src: '/images/Residential (2).webp', link: '/emaar-beach-front-marina-vista-apartment', title: 'EMAAR BEACH FRONT MARINA VISTA APARTMENT' },
  { src: '/images/marina-gate-2-luxury-apartment.png', link: '/marina-gate-2-luxury-apartment', title: 'MARINA GATE 2 LUXURY APARTMENT' },
  { src: '/images/palm-jumeirah-apartment-interior-design.png', link: '/palm-jumeirah-apartment', title: 'PALM JUMEIRAH APARTMENT' },
  { src: '/images/madinat-jumeirah-living-asayel-apartment.png', link: '/madinat-jumeirah-living-asayel-apartment', title: 'MADINAT JUMEIRAH LIVING ASAYEL APARTMENT' },
];

const DProjects = () => {
  return (
    <section className="px-6 py-10 bg-black-200">
      
      {/* Top Content Block */}
      <div className="lg:max-w-[80%] mx-auto bg-black p-2 sm:p-10 rounded shadow text-center space-y-6 mb-12">
        <h2 className="text-sm sm:text-xl md:text-xl  font-conthrax text-[#caa193]">
          Smart Apartment Interior Design in Dubai for Urban Living
        </h2>
 <div className="space-y-4 text-sm sm:text-base font-play text-white text-left">
  <p>
    Creating a Modern apartment interior in Dubai isn’t just about looks — it’s about functionality 
    in limited space, comfort in rental settings, and optimizing every detail for modern city life.
     At WE DO Interior Design & Fit out, we specialize in designing small and mid-sized apartments 
     that feel spacious, stylish, and truly personal — even if it’s a studio or <b className="text-[#caa193]"> <a href="https://wedointerior.ae/royal-atlantis-2-bedroom-apartment">2-bedroom apartment 
     in Atlantis The Royal</a></b> or Downtown.

  </p>

  <p>
    We carefully balance modern furnishings with regional design cues to reflect Dubai’s unique
    cultural blend. Our apartment design solutions include:
  </p>

  <ul className="list-disc list-inside space-y-1">
    <li>Space-saving furniture layout planning</li>
    <li>Bedroom and living room integration</li>
    <li>Multi-functional furniture sourcing from Dubai’s top suppliers</li>
    <li>Personalized color palettes and lighting strategies</li>
  </ul>
  <p><strong>Our mission:</strong> turn every apartment into a welcoming, livable space that feels
      like home — not a hotel room. Whether you're a tenant or investor, we help elevate your
      property's comfort and appeal.</p>
</div>

      </div>

      {/* Split Row – Text + Top Right Image */}
      <div className="lg:max-w-[80%] mx-auto flex flex-col lg:flex-row items-start gap-6 mb-12">
        <div className="w-full lg:w-2/3 space-y-4">
          <h3 className="text-sm sm:text-xl md:text-xl font-conthrax text-[#caa193]">
          Complete Your Apartment Interior Design in Dubai With Bold Loft-Inspired Concepts
          </h3>
          <p className="text-sm sm:text-base text-white font-play">
           As apartment layouts in Dubai evolve toward open-plan living, 
           loft-inspired interiors have become a favorite for homeowners 
           seeking modern minimalism with character. At WE DO Interior Design & Fit out, we integrate 
           industrial-chic elements — like exposed metal frames, rustic oak textures, 
           and matte black accents — to create interiors that are bold yet cozy.
          </p>
          <p className="text-sm sm:text-base font-play text-white">
          Whether you're designing a <b className="text-[#caa193]"><a href="https://wedointerior.ae/acacia-dubai-hills-2-bedroom-apartment">2-bedroom apartment in Dubai Hills </a></b>or a studio in 
          Business Bay, our design philosophy blends vintage aesthetics with Dubai’s 
          modern urban vibe. These curated touches, paired with custom lighting and smart 
          layouts, give your space a striking identity without sacrificing comfort.
          </p>
          <p className="text-sm sm:text-base font-play text-white">
          <strong>Browse below to explore some of our most recent apartment transformations that 
          embrace this timeless loft appeal.</strong></p>
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

      {/* Gallery Grid with Hover Effects */}
      <div className="lg:max-w-[60%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto mb-10   ">
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

            <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-3xl font-conthrax 
        text-white py-12">
          Luxury Dubai Interiors, Seamless Execution
        </h2>

        {/* Section 1: Text Left, Image Right */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          <div className="space-y-6 text-white font-play">
            <h2 className="text-xl font-conthrax text-[#caa193] mb-4">
              Luxury Apartment Interior Fitout in Dubai 
            </h2>
            <p>
            At WE DO Interior Design & Fit out, we believe luxury should be personal, practical, and seamless. That’s why we offer
             complete turnkey apartment interior solutions that include not just design, but procurement, 
             documentation, execution, and supervision — all under one roof.
            </p>
            <p>
              Our Process Includes:
            </p>
            <ul className="list-decimal pl-5 space-y-2 text-[#caa193]">
            
            <li>
            <h3 className='font-play'>Concept Development</h3>
             <p className='text-white font-play'> Style discovery, space analysis, and mood boards
               tailored to your vision.</p>
            </li>

             <li>
            <h3 className='font-play'>Material & Furniture Curation</h3>
             <p className='text-white font-play'> We collaborate with Dubai’s top suppliers to handpick furnishings, fabrics, and décor that align with your taste and lifestyle.</p>
            </li>

             <li>
            <h3 className='font-play'>Project Documentation</h3>
             <p className='text-white font-play'> Every layout, lighting plan, and color specification is documented for accuracy and transparency.</p>
            </li>

             <li>
            <h3 className='font-play'>On-Site Supervision & Execution</h3>
             <p className='text-white font-play'> Our project managers oversee every phase of implementation — from painting to furnishing — ensuring flawless results.</p>
            </li>
            </ul>
            
            <p>
            Whether you're aiming for a contemporary loft, a classic modern style, or a customized luxury palette, we handle the entire transformation — efficiently and with meticulous care.
            </p><p>
            <strong>Our promise</strong>: Elegant, space-optimized, functional interiors — delivered on time, within budget, and with zero compromise.</p>
          </div>

          <div className="rounded-lg overflow-hidden shadow-md">
            <Image
              src="/images/pentv3.webp"
              alt="Round luxury bed with fairy lights"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Section 2: Image Left, Text Right */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="rounded-lg overflow-hidden shadow-md">
            <Image
              src="/images/bba (6).jpg"
              alt="Elegant blue bedroom interior"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="space-y-6 text-white font-play">
            <h2 className="text-xl font-conthrax text-[#caa193] mb-4">
            Simple, Cost-Effective Apartment Interior Design in Dubai
            </h2>
            <p>
              Your home should be a perfect combination of your personal style and thoughtful design. At <a href="https://wedointerior.ae/">WE DO Interior Design & Fit out</a>, our professional designers help you create apartment interiors that are elegant, efficient, and personalized — no matter your budget.
            </p>
            <p>
              With our modern online design collaboration process, working with our team is smooth, engaging, and fully transparent — from bedroom concepts to lounge furniture selection.
            </p>
          </div>
        </div>
      </div>

           {/* last paragraph */}
           <div className="lg:max-w-[80%] mx-auto bg-black p-6 sm:p-10 rounded shadow space-y-6 mb-12">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-conthrax text-[#caa193] mb-2">
            Furnishing Your Dubai Apartment — With Precision, Personality, and Purpose
          </h2>
          
          <p className="font-play text-sm sm:text-base text-white text-start py-2">
          Choosing the right furniture for apartment interior design in Dubai is about more than just style — it’s about fitting function into form. At WE DO Interior Design & Fit out, we understand the challenges of urban living: tight corners, open layouts, awkward niches, and the need for maximum storage in minimal space.
          </p>
           <p className="font-play text-sm sm:text-base text-white text-start py-2">
          That’s why we curate and source multi-functional furniture that’s not only beautiful but also custom-fit for your apartment’s layout. Whether it’s a slimline console that fits between walls, floating shelves that maximize vertical space, or extendable dining tables that double as workstations — our solutions are always tailored, durable, and spatially smart.
          </p>
        </div>

        {/* Section 2 */}
        <div>
          <h3 className="text-xl font-conthrax text-[#caa193] mb-4">
            Creative Use of Space = Smarter Interiors
          </h3>
          <h3 className="font-play text-sm sm:text-base text-[#caa193]">
          We design with purpose :</h3>
       <ul className="list-disc list-inside font-play text-sm sm:text-base text-white">
  <li>Mirrors that expand perceived space in compact rooms</li>
  <li>Wall-mounted lighting that frees up floor area</li>
  <li>Built-in wardrobes and concealed cabinetry</li>
  <li>Accent pieces that add personality without crowding</li>
</ul>

       <p className="font-play text-sm sm:text-base text-white"> 💡 TIP: Dark walls? <br></br>We use mirrored panels and uplighting to create visual depth — a proven strategy in our Dubai Marina and Downtown projects.
        </p>
        </div>

        {/* Section 3 */}
        <div>
          <h3 className="text-xl font-conthrax text-[#caa193] mb-4">
            Personalized Touches That Matter
          </h3>
          <p className="font-play text-sm sm:text-base text-white">
          Your apartment should reflect your story. We help you style shelves with curated souvenirs, art, travel books, and personal photos — ensuring your space feels not just furnished, but lived in and loved.
          </p>
          <p className="font-play text-sm sm:text-base text-white">
          From industrial-chic coffee tables to minimalistic wall-mounted desks, we select pieces that blend modern elegance with Dubai’s fast-paced lifestyle. And yes — we always prioritize functionality, durability, and visual harmony.
          </p>
        </div>
      </div>
      
{/* Premium Apartment Interior Design FAQs */}
<section
  id="apartment-faqs"
  className="bg-black py-8 sm:py-10 px-5 sm:px-8"
>
  <div className="max-w-5xl mx-auto">

    {/* FAQ Heading */}
    <div className="text-center mb-6 sm:mb-8">
      <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#caa193] font-play">
        Frequently Asked Questions
      </span>

      <h2 className="text-lg sm:text-2xl font-conthrax text-white mt-2">
        Apartment Interior Design Dubai
      </h2>

      <p className="text-xs sm:text-sm text-white/55 font-play mt-2">
        Find answers about apartment design costs, fit-out timelines,
        approvals and our interior design services in Dubai.
      </p>
    </div>

    {/* All FAQs Visible */}
    <div className="border-t border-[#caa193]/25">
      {[
        {
          question: 'How much does apartment interior design cost in Dubai?',
          answer: (
            <>
              Apartment interior design and fit-out in Dubai typically costs around AED 80–150 per sq ft, from about AED 40,000 for a studio to AED 300,000+ for a 3-bedroom or larger apartment, with penthouses quoted on scope. The price depends on size, scope (design-only or turnkey), materials, custom joinery and approvals. WE DO provides a detailed quotation after an on-site meeting, with mood boards and 3D visualisation.
            </>
          ),
        },
        {
          question: 'How long does an apartment interior design and fit-out take in Dubai?',
          answer: (
            <>
              A turnkey apartment fit-out in Dubai typically takes 3–5 weeks for a studio, 6–9 weeks for a 1-bedroom, 8–12 weeks for a 2-bedroom and 10–16 weeks for a 3-bedroom or larger apartment, with design and building approvals adding time before work starts. Penthouses with bespoke joinery or imported materials can take longer. Our in-house joinery factory keeps production on schedule.
            </>
          ),
        },
        {
          question: 'Do I need approvals to renovate or fit out my apartment in Dubai?',
          answer: (
            <>
              Yes, most apartment fit-outs in Dubai need approval before work starts. This usually means a building NOC from building management and, depending on the scope, developer approval (such as Emaar or Damac) and authority approvals from Dubai Municipality or Dubai Civil Defence. WE DO’s dedicated approvals team prepares and submits these for you.
            </>
          ),
        },
        {
          question: 'Should I hire one company for both design and fit-out?',
          answer: (
            <>
              For most apartments, yes. One company handling both design and fit-out gives you a single point of responsibility, a design that is costed and buildable from day one, and no handovers between contractors. WE DO delivers both under one roof, with in-house designers, civil works and decoration teams, and its own joinery factory.
            </>
          ),
        },
        {
          question: 'What types of apartments do you design?',
          answer: (
            <>
              WE DO designs and fits out studios, 1–3 bedroom apartments and penthouses across Dubai. Recent apartment projects include Atlantis The Royal, Marina Gate 2, Acacia Dubai Hills, Emaar Beachfront Marina Vista and a Palm Jumeirah penthouse, ranging from compact city apartments to fully bespoke luxury residences.
            </>
          ),
        },
        {
          question: 'Which Dubai buildings and communities have you worked in?',
          answer: (
            <>
              WE DO has completed apartment interiors at Atlantis The Royal, Marina Gate 2, Emaar Beachfront Marina Vista, Acacia Dubai Hills, Madinat Jumeirah Living, Palm Jumeirah and Business Bay. Our Primo Tower apartment by Emaar won the Luxury Lifestyle Awards 2026 for Best Luxury Residential Renovation Interior Design. We work across Downtown Dubai, Business Bay, Dubai Marina, Palm Jumeirah, Dubai Hills Estate and DIFC.
            </>
          ),
        },
        {
          question: 'What’s included in a turnkey apartment package, and can it be move-in ready?',
          answer: (
            <>
              A turnkey package covers everything from concept to handover: space planning, mood boards, 3D visualisation and VR/AR walkthroughs, building approvals, civil and decoration works, custom joinery from our own factory, furniture and décor sourcing, on-site supervision and final styling. Yes, the apartment is handed over furnished and ready to move into.
            </>
          ),
        },
        {
          question: 'Can I stay in my apartment during the works?',
          answer: (
            <>
              It depends on the scope. For lighter works such as furnishing, styling or joinery installation, you can usually stay in the apartment while working. For full fit-outs involving flooring, kitchens, bathrooms, or MEP works, we recommend that our clients move out, as dust, noise, and building working-hour rules make living there impractical.
            </>
          ),
        },
        {
          question: 'Can you renovate an apartment that’s rented out or between tenants?',
          answer: (
            <>
              Yes. Most of our clients in Dubai are investors, and they are upgrading apartments to increase rental value. The best time is between tenancies, when works can run without disruption. If the apartment is occupied, we coordinate access with the tenant and building management, and schedule works to keep disruption to a minimum.
            </>
          ),
        },
      ].map((faq, index) => (
        <div
          key={faq.question}
          className="py-3 sm:py-4 border-b  border-[#caa193]/15"
        >
          <h3 className="flex items-start gap-3 text-xs sm:text-sm font-conthrax text-white leading-6">
            <span className="text-[10px] sm:text-xs text-[#caa193] font-play shrink-0 pt-1">
              {String(index + 1).padStart(2, '0')}
            </span>

            <span>{faq.question}</span>
          </h3>

          <div className="mt-2 ml-7 text-xs sm:text-sm leading-6 font-play text-white/65">
            {faq.answer}
          </div>
        </div>
      ))}
    </div>

    {/* Contact CTA */}
    <div className="mt-6 text-center">
      <p className="text-xs sm:text-sm text-white/60 font-play mb-3">
        Have a specific apartment project in mind?
      </p>

      <div className="flex flex-wrap justify-center gap-3">
        <a
          href="https://wa.me/971588075603"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2.5 bg-[#caa193] text-black text-[10px] sm:text-xs font-semibold tracking-wider uppercase hover:bg-[#d8b5a8] transition-colors duration-300"
        >
          Discuss Your Project
        </a>

        <a
          href="mailto:info@wedointerior.ae"
          className="px-5 py-2.5 border border-[#caa193]/50 text-[#caa193] text-[10px] sm:text-xs font-semibold tracking-wider uppercase hover:bg-[#caa193]/10 transition-colors duration-300"
        >
          Email Our Team
        </a>
      </div>
    </div>

  </div>
</section>
    </section>
    
  );
};



export default DProjects;
