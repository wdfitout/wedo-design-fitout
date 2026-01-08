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
         Leading Landscape Company in Dubai for Premium Landscape Design services
        </h2>
     <div className="space-y-4 text-sm sm:text-base font-play text-white text-left">
   <p>
    At Wedo Interior, we pride ourselves on delivering quality landscaping services in Dubai. 
    From gardening residential homes to sprawling gardens in the urban area, our services range 
    from automatic irrigation systems, garden maintenance, and even bespoke swimming pools that 
    blend naturally with the landscape of Dubai. 

    </p>
         <h3 className=" tracking-widest font-conthrax text-[#caa193]">
            Swimming pool & Jacuzzi design
        </h3>
    <p>
   We DO as a trusted landscape consultant in Dubai, offers full-service solutions tailored for both
    residential landscaping in Dubai and commercial projects. Our services include pool design and
     construction, regular maintenance, sealants, tile work, and plumbing.

    </p>

  
        <h3 className=" tracking-widest font-conthrax text-[#caa193]">
           Bespoke Garden Landscape Design Dubai
        </h3>
    <p>
   WeDo interior Landscapes beautiful garden spaces in Dubai by combining lush softscape design with 
   sophisticated hardscape design in Dubai to create dramatic and functional alfresco retreats perfect
    for villas landscape in Dubai as well as residences. 
    </p>
    <h3 className=" tracking-widest font-conthrax text-[#caa193]">
            Stylish Structures & Cozy Corners for Your Garden
        </h3>
    <p>
   We provide outdoor spaces that are a perfect blend of functionality, comfort, and aesthetics. Our 
   skilled landscape designers in Dubai design personalized pergolas, gazebos, and fire pit areas. 
   From residential landscaping to full-home landscaping in Dubai, we design each feature keeping 
   the climate and lifestyle of Dubai in mind. 
    </p>
     <h3 className=" tracking-widest font-conthrax text-[#caa193]">
           Irrigation & maintenance
        </h3>
    <p>
  As one of the trusted landscape design companies in Dubai, we install smart irrigation systems that
   utilize water conservation while maintaining your garden healthy and green throughout the year. 
   From landscape design to luxury villas, our  irrigation and maintenance services range from automated 
   drip irrigation systems, sprinkler systems, to planned maintenance to keep plants healthy and your landscape beautiful.
    </p>
</div>

      </div>

      {/* Split Row – Text + Top Right Image */}
      <div className="lg:max-w-[60%] mx-auto flex flex-col lg:flex-row items-start gap-6 mb-12">
        <div className="w-full lg:w-2/3 space-y-4">
          <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#caa193]">
          Why Choose Us For your Landscape Design Dubai
          </h2>
            <p className="text-white font-play">
          If you're looking to upgrade your home or office exterior, hiring WE DO Interior Design & Fitout 
          for your landscape job is a wise move.As one of the leading landscape design companies in Dubai, 
          our team of professionals possesses vast experience and imagination in each project—guaranteeing 
          your area is not just practical but also aesthetically pleasing. We've perfected the technicalities
           of landscape design in Dubai, from concept and implementation to site problem-solving with accuracy.
          </p>
         
          <p className="text-white font-play">
        Ready to Transform Your Outdoor Space with the Best Company To Go for Landscape Design In Dubai?
         Book a Free Consultation Today and let our experts bring your landscaping vision to life.
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
          How We Create Your Perfect Landscape Design in Dubai
        </h2>

        {/* Section 1: Text Left, Image Right */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          <div className="space-y-6 text-white font-play">
             <h2 className="text-xl font-conthrax text-[#caa193] mb-4">
            Our Steps to achieve exceptional landscape design Dubai
             </h2>
          <p>
           From concept to completion, we follow a detailed process to bring your ideal landscape to life. Our Process includes:
          </p>
           
          <h3 className=" tracking-widest font-conthrax text-[#caa193]">
           Consultation & concept
          </h3>
            <p>
            We start with consultation & concept, working closely with you to understand your vision and design custom 
            landscaping concepts that suit your taste and type of property. As a leading landscape consultant in Dubai,
             we create initial concepts that are both aesthetically pleasing and functional.
            </p>
             <h3 className=" tracking-widest font-conthrax text-[#caa193]">
           Design & 3D visualization

          </h3>
            <p>
            Next comes design & 3D visualization, where our landscape designers in Dubai bring your concept to life with 
            immersive renderings—perfect for visualizing every detail of your villa or home garden design.

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
            
             <h3 className=" tracking-widest font-conthrax text-[#caa193]">
           Design & 3D visualization

          </h3>
            <p>
            Next comes design & 3D visualization, where our landscape designers in Dubai bring your concept to life with 
            immersive renderings—perfect for visualizing every detail of your villa or home garden design.

            </p>
           <h3 className=" tracking-widest font-conthrax text-[#caa193]">
           Build & installation

          </h3>
            <p>
            In the installation & build phase, our landscape team executes the plan on high-quality materials and 
            professional craftsmanship. From residential landscaping to pergolas, water features, or lighting, 
            we make sure each aspect is perfectly carried out in accordance with luxury Dubai landscape design requirements.

            </p>
          
           <h3 className=" tracking-widest font-conthrax text-[#caa193]">
           Handover & aftercare

          </h3>
            <p>
             We ensure a smooth handover & aftercare of your bespoke landscape in Dubai, complete with clear guidance
              on irrigation and maintenance. Our aftercare service guarantees that your outdoor space stays vibrant and 
              well-maintained, with expert support just a call away whenever you need it.

            </p>
            

          </div>
        </div>
      </div>

          
    </section>
  );
};



export default DProjects;
