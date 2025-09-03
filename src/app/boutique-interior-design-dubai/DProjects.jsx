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
          Boutique Interior Design Dubai for Luxury Retail Spaces
        </h2>
 <div className="space-y-4 text-sm sm:text-base font-play text-white text-left">
  <p>
    There is a story behind every boutique and in Dubai, where luxury and fashion dominate, Boutique interiors must
    reflect class and uniqueness. Our team of boutique interior designers in DIFC Dubai and across the city are
    skilled in designing spaces that balance elegance with functionality. From bridal boutique designs in Dubai
    Hills to jewelry boutique interiors in Palm Jumeirah, our interiors are built to showcase products with 
    precision while captivating customers.
  </p>

  <p>
   Whether it’s a designer boutique in JBR Dubai or a custom clothing boutique interior in Al Wasl, we ensure each
   project embodies the brand’s personality while maximizing retail potential.
  </p>

  <ul className=" list-inside space-y-1">
    <li> <b className='text-[#caa193]'>Fashion Boutique Interior Design</b> – Bespoke layouts in Dubai Marina, Jumeirah, and Downtown Dubai, designed to display collections beautifully while enhancing the shopping journey.</li>
    <li> <b className='text-[#caa193]'>Jewelry Boutique Interior Design </b>– Luxury-focused interiors in Palm Jumeirah and DIFC, integrating secure showcases,premium finishes and dramatic lighting</li>
    <li> <b className='text-[#caa193]'>Bridal Boutique Design Dubai</b>– Elegant interiors in  Al Wasl,Dubai Hills, and Jumeirah, with grand display areas,private fitting rooms and graceful detailing.</li>
    <li> <b className='text-[#caa193]'>Boutique Showroom Design </b>– From JBR to Downtown Dubai, we design modern boutique showrooms that enhance brand visibility and create client focused layouts.</li>
    <li> <b className='text-[#caa193]'>Boutique Fit-Out Services</b> – As the best boutique fit-out company in Dubai, we do interiors handle every stage of execution, from bespoke shelving in Al Wasl to premium lighting systems in Palm Jumeirah.</li>
  </ul>
</div>

      </div>

      {/* Split Row – Text + Top Right Image */}
      <div className="lg:max-w-[60%] mx-auto flex flex-col lg:flex-row items-start gap-6 mb-12">
        <div className="w-full lg:w-2/3 space-y-4">
          <h3 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#caa193]">
          Why Choose WE DO Interior Design & Fitout?
          </h3>
          <p className="text-sm sm:text-base text-white font-play">
          At WE DO Interior Design & Fitout, we are known among the best boutique interior design firms in Dubai, 
          reliable for providing bespoke interiors that reflect luxury. As a boutique renovation company helping 
          clients across DIFC, Dubai Hills,Jumeirah and Al Wasl, we are skilled in creating special spaces with 
          premium finishes from marble flooring in Downtown Dubai to elegant woodwork in Palm Jumeirah. Our
           expertise includes the whole journey in which we are offering everything from creative design concepts 
           in Dubai Marina to complete turnkey boutique fit-outs in JBR. With a skilled, motivated and dedicated 
           team of interior fit-out experts in Dubai, we ensure each project is executed smoothly, combining style,
           precision and brand-focused functionality.
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
              Retail & Commercial Interior Design Expertise
            </h2>
            <p>
           Beyond boutiques, our studio is trusted among the best retail interior design companies in Dubai. We deliver:
            </p>
            <p>
              Our Process Includes:
            </p>
            <ul className="list-decimal pl-5 space-y-2 text-[#caa193]">
            
            <li>
             <p className='text-white font-play'>Mall interior design in Dubai that transforms shopping centers into high-traffic destinations by increasing the number of visitors.</p>
            </li>

             <li>
             <p className='text-white font-play'> Retail & store interior design services in Dubai which ranges from concept boutiques in Jumeirah to flagship stores in Downtown Dubai.</p>
            </li>

             <li>
             <p className='text-white font-play'> Luxury retail boutique design in Palm Jumeirah and Dubai Marina, redesigning the future of commercial interior design in Dubai.</p>
            </li>
            </ul>
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
             Let’s Design Your Boutique Interior Design in Dubai

            </h2>
            <p>
             We know that your boutique deserves a space that is as unique and special as your brand. At WE DO Interior Design & Fit out, we create bespoke boutique interiors in Dubai that attract customers, enhance brand storytelling, and deliver retail success in your business. If you’re expanding into Dubai Hills, launching a luxury fashion boutique in DIFC or renovating an exclusive boutique in Business Bay, our team ensures a unique design journey. Are You Ready to Bring Your Vision to Life? Contact us today to explore our custom boutique interior design in Dubai and Get our services as we are the best boutique interior design company in Dubai.</p>
            
          </div>
        </div>
      </div>

           {/* last paragraph */}
        
    </section>
  );
};



export default DProjects;
