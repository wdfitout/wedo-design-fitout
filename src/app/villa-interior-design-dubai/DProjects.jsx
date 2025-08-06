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
          Why Choose WE DO for Your Villa Interior Design in Dubai?
        </h2>
 <div className="space-y-4 text-sm sm:text-base font-play text-white text-left">
  <p>
    We know that choosing the right interior design and fitout company for your villa interior design dubai is very important
     and at WEDO we work by combining innovation with quality and style with a client-focused approach. Our team of luxury
     interior designers pay detailed attention to understand the way of your living and your vision.
 </p>

  <p>
    As one of the best interior fitout companies in Dubai, WEDO offers complete in-house services which includes concept design,
    planning, project execution, and delivery. Our use of VR/AR design previews, smart home technologies, and sustainable materials
    keeps us ahead of the curve and adds value beyond what typical firms offer.Our use of VR/AR design previews, smart home
    technologies, and sustainable materials keeps us ahead of the curve and adds value beyond what typical firms offer.
  </p>
 <p>Moreover, our transparent process of working, timely delivery of projects and our strong commitment has helped us in earning 
  the reputation as one of the best interior design companies in Dubai.
</p>
  
</div>

      </div>

      {/* Split Row – Text + Top Right Image */}
      <div className="lg:max-w-[60%] mx-auto flex flex-col lg:flex-row items-start gap-6 mb-12">
        <div className="w-full lg:w-2/3 space-y-4">
          <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#caa193]">
          What is Luxury Villa Interior Design in Modern Style?
          </h2>
          <p className="text-sm sm:text-base text-white font-play">
           Luxury villa interior design in modern style is achieved by minimal clutter,clean lines, functional 
           spaces and aesthetics. In Dubai, luxury modern Dubai house design is so high in demand, so we ensure that
            every project by WEDO must be focused on spaciousness,natural light and elegant materials like marble, wood, and glass.

          </p>
           <p className="text-sm sm:text-base text-white font-play">Our Work is mostly focused on the location like we design Arabic
            style villas in Emirates Hills which reflects cultural richness while embracing the best of modern design in Dubai.From
            expansive living areas to opulent bedrooms and serene outdoor landscapes, we bring balance, style, and comfort to your
            villa.</p>
          
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
          Bespoke Villa Interior Design Dubai, Crafted for Luxury Living
        </h2>

        {/* Section 1: Text Left, Image Right */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          <div className="space-y-6 text-white font-play">
            <h2 className="text-xl font-conthrax text-[#caa193] mb-4">
              Our Interior Villa Design Services in Dubai
            </h2>
            <p>
            Our villa interior design services are tailored to fit your specific needs and preferences. Whether you are designing 
             new villa or renovating an existing one, our services ensure luxury and comfort at every step.
             </p>
            <p>
             Our Featured Services:
            </p>
            <ul className="list-decimal pl-5 space-y-2 text-[#caa193]">
            
            <li>
             <p className='text-white font-play'> <b> Architectural Design – </b>Thoughtful layouts for luxury and practicality</p>
            </li>

             <li>
             <p className='text-white font-play'> <b>Landscape Design –</b> Luxury villa landscape design service Dubai creating harmony between indoor and outdoor spaces</p>
            </li>

             <li>
             <p className='text-white font-play'> <b>Electrical & Plumbing Design – </b>Efficient, safe systems integrated for modern living</p>
            </li>

             <li>
             <p className='text-white font-play'> <b>Furniture & Decor Selection –</b> Curated, custom-made pieces for a refined interior look</p>
            </li>
            <li>
             <p className='text-white font-play'><b> Interior Fit Out in Dubai – </b>Complete premium fit-out in Dubai, ensuring perfect execution of design vision </p>
            </li>
            <li>
             <p className='text-white font-play'> <b>Smart Home Integration –</b> Advanced home automation for lighting, climate, and security</p>
            </li>
            </ul>
            
            <p>
             We rank among one of the best villa  interior design companies in several areas of Dubai and we have completed our
              projects like <b><a href="https://wedointerior.ae/al-manara-luxury-villa"></a>Al Manara luxury Villa</b>, 
              <b><a href="https://wedointerior.ae/majan-villa-design">Majan Villa Interior Design</a></b> and 
              <b><a href="https://wedointerior.ae/district-1-mbr-city-contemporary-villa">District one MBR (Muhammad Bin Rashid) City Villa </a></b>etc
            </p>           
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
              Residential Interior Design Dubai Trends in 2025 
            </h2>
            <p>
             As one of the emerging  villa interior design companies in Dubai,we stand at the forefront of residential interior 
             design trends in 2025 in Dubai.The future of villa interiors revolves around sustainability,wellness and intelligent
              living. Key trends include the integration of home offices, biophilic design (bringing nature indoors), and the use 
              of eco-friendly materials to reduce environmental impact while enhancing luxury.</p>
            <p>
              In the era of 2025, the demand for Smart home integration continues to grow. We use voice-activated systems,  
              climate control  and advanced lighting for fully automated living experience in Dubai.
              </p>
          </div>
        </div>
      </div>

           {/* last paragraph */}
           <div className="lg:max-w-[60%] mx-auto bg-black p-6 sm:p-10 rounded shadow space-y-6 mb-12">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-conthrax text-[#caa193] mb-2">
            Our 3-Step Process for Villa Design Services in Dubai
          </h2>
          
          <p className="font-play text-sm sm:text-base text-white text-start py-2">
          To ensure a seamless experience, we follow a clear 3-step process for our villa design services in Dubai: </p>
          
        </div>

        {/* Section 2 */}
        <div>
        
       <h3 className="font-conthrax uppercase text-[#caa193]">Consultation & Site Visit</h3>
        <p className="font-play text-sm sm:text-base text-white text-start py-2"> We initiate by 
          understanding your vision and evaluating your space. This includes discussing your style preferences, functionality 
          needs, and budget.</p>
          <h3 className="font-conthrax uppercase text-[#caa193]">Design Proposal </h3>
       <p className="font-play text-sm sm:text-base text-white"> Our team presents detailed concepts,
         including mood boards, 3D visuals, and material samples. We do offer VR previews so you can walk through your 
         villa before execution.</p>
         <h3 className="font-conthrax uppercase text-[#caa193]">Execution & Handover</h3>
       <p className="font-play text-sm sm:text-base text-white"> Once approved, we proceed with premium 
        fitout in Dubai, managing all aspects—from construction to final decor touches. You receive a fully realized, bespoke 
        villa ready to enjoy.
</p>

        </div>

        {/* Section 3 */}
        <div>
          <h3 className="text-xl font-conthrax text-[#caa193] mb-4">
            Let’s Create Your Dream Villa in Dubai
          </h3>
          <p className="font-play text-sm sm:text-base text-white">
          So, are you ready to transform your villa into a true masterpiece? <b><a href="https://wedointerior.ae/contact-us">Contact WE DO Interior Design & Fitout </a></b>for a
           free consultation and take the first step toward your dream villa design dubai. Give us a chance to show you why 
           we are considered the best interior design company in Dubai for bespoke interiors.</p>
          
        </div>
      </div>
    </section>
  );
};



export default DProjects;
