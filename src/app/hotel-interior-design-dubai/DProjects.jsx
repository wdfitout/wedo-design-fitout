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
      <div className="lg:max-w-[60%] mx-auto bg-black p-6 sm:p-10 rounded shadow space-y-6 mb-12">
        <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#caa193]">
          Hotels & Resorts Interior Design in Dubai

        </h2>
 <div className="space-y-4 text-sm sm:text-base font-play text-white text-left">
   <p>
    Dubai is the most well known city for the prestigious hotels and resorts. A large number of people from the whole world
    are visiting this city, so the competition for design excellence is getting stronger day by day. <b><a href="https://wedointerior.ae/">WE DO Interior</a></b> is 
    specialized in crafting interior designs that bring both functionality and luxury. Whether its a 5 Star Hotel interior 
    design, a resort lobby and guest rooms design or a boutique hotel renovation, our approach equals operational efficiency
    with elegance. Every project is customized to create the best hotel interior design dubai that attracts international 
    travelers while meeting the high standards of hospitality.
   </p>

     <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#caa193]">
      Why Choose WE DO – Setting New Standards in Hospitality Design
     </h2>

  <p>Our reputation as one of the best hotel interior design firms in Dubai is based on our ability and standards of delivering
     a turnkey hotel interior design service that transforms properties into destinations. We specialize in immersive hotel 
     design, modern Arabic-style hotel design Dubai and the echo friendly interior that align with the standards of Dubai. 
     By focusing on enhancing the guest experience through hotel design, we make sure that every lobby, bedroom, restaurant
     and wellness area reflects the both global and cultural trends of Dubai.</p>
</div>

      </div>

      {/* Split Row – Text + Top Right Image */}
      <div className="lg:max-w-[60%] mx-auto flex flex-col lg:flex-row items-start gap-6 mb-12">
        <div className="w-full lg:w-2/3 space-y-4">
          <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#caa193]">
          Turnkey Hotel Interior Fit-Out Dubai
          </h2>
          <p className="text-sm sm:text-base text-white font-play">
          As a trusted Dubai hotel design company, WE DO offers complete hotel interior fit-out Dubai solutions. 
          Our services range from concept development to procurement, installation, and delivery, making us a 
          single-source partner to developers and hoteliers. With the skills of hotel fit-out Dubai and hotel 
          interior turnkey solution, we cater to each detail from bespoke furniture to lighting systems with 
          effortless ease. This complete solution enables us to deliver award-winning hotel interior design 
          Dubai within timelines and budget.

          </p>
          
          <p className="text-sm sm:text-base text-white">
         Our services range from concept development to procurement, installation, and delivery, making us a single-source 
         partner to developers and hoteliers. With the skills of hotel fit-out Dubai and hotel interior turnkey solution, 
         we cater to each detail from bespoke furniture to lighting systems with effortless ease. This complete solution
          enables us to deliver award-winning hotel interior design Dubai within timelines and budget.
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
         Hotel Interior Design Services In Dubai By WEDO
        </h2>

        {/* Section 1: Text Left, Image Right */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          <div className="space-y-6 text-white font-play">
            <h2 className="text-xl font-conthrax text-[#caa193] mb-4">
              Our Hospitality Interior Design Services
            </h2>
            <p>
           At WE DO, our scope of services covers every aspect of hotel interior design in Dubai.
            </p>
           
            <ul className="list-decimal pl-5 space-y-2 text-[#caa193]">
            
            <li>
            <h3 className='font-play'>Hotel Lobby & Reception Design</h3>
             <p className='text-white font-play'> First impressions are everything. Our hotel lobby interior design Dubai and hotel reception interior design Dubai create welcoming spaces that blend grandeur with functionality. From hotel main lobby and reception design to guest waiting areas, we design layouts that inspire trust and comfort.</p>
            </li>

             <li>
            <h3 className='font-'>Hotel Room & Bathroom Interior Design</h3>
             <p className='text-white font-play'> We specialize in hotel room interior design dubai and hotel bathroom design that combine relaxation with functionality. Each guest's room is customized with bespoke finishes, optimized layouts and smart technology. Our Hotel bathroom interior design dubai complements the bedroom with durable, elegant and guest friendly features.</p>
            </li>

             <li>
            <h3 className='font-play'>Hotel Restaurants, Bars & Dining Spaces</h3>
             <p className='text-white font-play'> Our team creates exceptional hotel restaurant interior design in Dubai, whether casual or fine dining restaurant interior design. We also specialize in luxury hotel restaurant design Dubai and hotel bar interior design, ensuring each space provides a memorable culinary and social experience.</p>
            </li>

             <li>
            <h3 className='font-play'>Spa & Wellness Centre Design</h3>
             <p className='text-white font-play'> In Dubai’s competitive hospitality sector, wellness is a key differentiator. Our spa interior design Dubai and wellness center interior design Dubai offer serene spaces where guests can recharge, with biophilic design and premium material choices that create harmony and relaxation.</p>
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
              Our Hotel Interior Design Process
                </h2>
           
            <p>
              We believe successful projects require collaboration, creativity, and technical precision. </p>
              <ul className='list-decimal' >
                <li> <b className='text-[#caa193]'>Consultation & Briefing –</b> WEDO Interior understands your brand,operational needs and market positioning.</li>
                <li> <b className='text-[#caa193]'>Concept Development – </b>Our team Crafts  mood boards, layout and immersive hotel design themes.</li>
                <li><b className='text-[#caa193]'>Design Detailing & Approval –</b> We develop detailed drawings, FF&E selections and 3D renders.</li>
                <li> <b className='text-[#caa193]'>Fit-Out & Procurement –</b> We deliver seamless hotel fit-out Dubai with full supervision.</li>
                <li> <b className='text-[#caa193]'>Handover & Aftercare – </b>Our team ensure smooth operations with post-project support.</li>
              </ul>
          </div>
        </div>
      </div>

           {/* last paragraph */}
           <div className="lg:max-w-[60%] mx-auto bg-black p-6 sm:p-10 rounded shadow space-y-6 mb-12">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-conthrax text-[#caa193] mb-2">
           Why WE DO is the Best Hotel Interior Design Company in Dubai
          </h2>
          
          <p className="font-play text-sm sm:text-base text-white text-start py-2">
          As one of the best hotel interior design companies in Dubai, We Do connects cultural insight,creativity and operational expertise.
          We are known as a trusted partner for hotel interior design Dubai and this trust is built on several years of experience in 
          delivering  premium hotel interiors. Whether it’s luxury resorts, boutique hotel interior design Dubai  or business hotels in 
          Dubai, we are known for setting new standards in hospitality interior design Dubai. We ensure that your property stands out as 
          a hotel interior design project in Dubai by merging modern Arabic-style hotel design Dubai with global trends
         </p>
           <p className="font-play text-sm sm:text-base text-white text-start py-2">
          Are you ready to transform your property with luxury hotel interior design in Dubai? At WE DO Interior Design & Fitout, 
          we specialize in creating trend-setting hotel interiors that enhance brand identity and guest experience. Contact our 
          team today for a consultation and discover why we are the No.1 hospitality interior design company in Dubai.
          </p>
        </div>
      </div>
    </section>
  );
};



export default DProjects;
