'use client';

import React from 'react';
import Image from 'next/image';

const textImage = {
  src: '/images/bba (2).jpg',
  link: '/business-bay-apartment',
  title: 'Business Bay Apartment'
};

const galleryImages = [
  { src: '/images/adh (7).webp', link: '/acacia-dubai-hills-2-bedroom-apartment', title: 'ACCACIA DUBAI HILLS APARTMENT' },
  { src: '/images/dmapt (9).webp', link: '/dubai-marina-luxury-apartment', title: 'DUBAI MARINA LUXURY APARTMENT' },
  { src: '/images/Residential (2).webp', link: '/emaar-beach-front-marina-vista-apartment', title: 'EMAAR BEACH FRONT MARINA VISTA APRTMENT' },
  { src: '/images/mg2-(1).webp', link: '/marina-gate-2-luxury-apartment', title: 'MARINA GATE 2 LUXURY APARTMENT' },
  { src: '/images/pjapt (5).webp', link: '/palm-jumeirah-apartment', title: 'PALM JUMEIRAH APARTMENT' },
  { src: '/images/mjapt (9).png', link: '/madinat-jumeirah-living-asayel-apartment', title: 'MADINAT JUMEIRAH LIVING ASAYEL APARTMENT' },
];

const DProjects = () => {
  return (
    <section className="px-6 py-10 bg-black-200">
      
      {/* Top Content Block */}
      <div className="lg:max-w-[60%] mx-auto bg-black p-6 sm:p-10 rounded shadow text-center space-y-6 mb-12">
        <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#caa193]">
          Smart Apartment Interior Design in Dubai for Urban Living
        </h2>
 <div className="space-y-4 text-sm sm:text-base font-play text-white text-left">
  <p>
    Creating a Modern apartment interior in Dubai isn’t just about looks — it’s about functionality 
    in limited space, comfort in rental settings, and optimizing every detail for modern city life.
     At WE DO Interior Design and Fitout, we specialize in designing small and mid-sized apartments 
     that feel spacious, stylish, and truly personal — even if it’s a studio or <b> <a href="https://wedointerior.ae/royal-atlantis-2-bedroom-apartment">2-bedroom apartment 
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
      <div className="lg:max-w-[60%] mx-auto flex flex-col lg:flex-row items-start gap-6 mb-12">
        <div className="w-full lg:w-2/3 space-y-4">
          <h3 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#caa193]">
          Complete Your Apartment Interior Design in Dubai With Bold Loft-Inspired Concepts
          </h3>
          <p className="text-sm sm:text-base text-white font-play">
           As apartment layouts in Dubai evolve toward open-plan living, 
           loft-inspired interiors have become a favorite for homeowners 
           seeking modern minimalism with character. At WE DO, we integrate 
           industrial-chic elements — like exposed metal frames, rustic oak textures, 
           and matte black accents — to create interiors that are bold yet cozy.
          </p>
          <p className="text-sm sm:text-base text-white">
          Whether you're designing a <b><a href="https://wedointerior.ae/acacia-dubai-hills-2-bedroom-apartment">2-bedroom apartment in Dubai Hills </a></b>or a studio in 
          Business Bay, our design philosophy blends vintage aesthetics with Dubai’s 
          modern urban vibe. These curated touches, paired with custom lighting and smart 
          layouts, give your space a striking identity without sacrificing comfort.
          </p>
          <p className="text-sm sm:text-base text-white">
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
        <h2 className="text-center text-3xl font-conthrax text-white py-12">
          Luxury Dubai Interiors, Seamless Execution
        </h2>

        {/* Section 1: Text Left, Image Right */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          <div className="space-y-6 text-white font-play">
            <h2 className="text-xl font-conthrax text-[#caa193] mb-4">
              Luxury Apartment Interior Fitout in Dubai 
            </h2>
            <p>
            At WE DO, we believe luxury should be personal, practical, and seamless. That’s why we offer
             complete turnkey apartment interior solutions that include not just design, but procurement, 
             documentation, execution, and supervision — all under one roof.
            </p>
            <p>
              Our Process Includes:
            </p>
            <ul className="list-decimal pl-5 space-y-2 text-[#caa193]">
            
            <li>
            <h3 className='font-play'>Material & Furniture Curation</h3>
             <p className='text-white font-play'> Style discovery, space analysis, and mood boards
               tailored to your vision.</p>
            </li>

             <li>
            <h3 className='font-'>Project Documentation</h3>
             <p className='text-white font-play'> We collaborate with Dubai’s top suppliers to handpick furnishings, fabrics, and décor that align with your taste and lifestyle.</p>
            </li>

             <li>
            <h3 className='font-play'>On-Site Supervision & Execution</h3>
             <p className='text-white font-play'> Every layout, lighting plan, and color specification is documented for accuracy and transparency.</p>
            </li>

             <li>
            <h3 className='font-play'>Personalized Design Development</h3>
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
              src="/images/pjapt (12).webp"
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
              src="/images/serv8.webp"
              alt="Elegant blue bedroom interior"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="space-y-6 text-white font-play">
            <h2 className="text-xl font-conthrax text-[#caa193] mb-4">
              The Best Interior Design In The Apartment Is Simple And Cost-Effective
            </h2>
            <p>
              Your home should be a perfect combination of your personal style and thoughtful design. At <a href="https://wedointerior.ae/">WE DO interior design and fitout</a>, our professional designers help you create apartment interiors that are elegant, efficient, and personalized — no matter your budget.
            </p>
            <p>
              With our modern online design collaboration process, working with our team is smooth, engaging, and fully transparent — from bedroom concepts to lounge furniture selection.
            </p>
          </div>
        </div>
      </div>

           {/* last paragraph */}
           <div className="lg:max-w-[60%] mx-auto bg-black p-6 sm:p-10 rounded shadow space-y-6 mb-12">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-conthrax text-[#caa193] mb-2">
            Furnishing Your Dubai Apartment — With Precision, Personality, and Purpose
          </h2>
          
          <p className="font-play text-sm sm:text-base text-white text-start py-2">
          Choosing the right furniture for apartment interior design in Dubai is about more than just style — it’s about fitting function into form. At WE DO, we understand the challenges of urban living: tight corners, open layouts, awkward niches, and the need for maximum storage in minimal space.
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
    </section>
  );
};



export default DProjects;
