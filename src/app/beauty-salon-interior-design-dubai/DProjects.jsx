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
        Our Salon Interior Design & Fit-Out Services in Dubai
        </h2>
 <div className="space-y-4 text-sm sm:text-base font-play text-white text-left">
   <p>
    At WE DO, we provide complete Beauty Salon Dubai Design & Fit-Out services, positioning ourselves as a
    trusted Salon Interior Design Company in Dubai. From SPA interior design Dubai for luxury spaces to small 
    boutique salons, our solutions are tailored for every client.
   </p>
   <h3 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#caa193]">
    Salon Interior Design & Decoration
   </h3>
   <p className="text-sm sm:text-base text-white font-play">
    We specialize in creating inviting receptions, stylish waiting areas, and comfortable treatment rooms. 
    Every element of salon interior design and decoration is thoughtfully designed to align with your brand
    identity. By using luxury finishes, elegant textures, and striking colors, we transform ordinary spaces
    into extraordinary beauty destinations.
   </p>
   <h3 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#caa193]">
    Spa & Salon Interior Design Solutions
   </h3>
   <p className="text-sm sm:text-base text-white font-play">
    Our expertise extends beyond salons to spas.With our Spa & Salon Interior Design services, we create peaceful 
    spaces by adding relaxation with style.  From Spa Fit-Out solutions to interior design for luxury salons and spas,
     our team focuses on scent, lighting, sound and the private treatment zones, while ensuring a best experience for 
     your clients.

   </p>
   <h3 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#caa193]">
    Luxury Salon Fit-Out in Dubai
   </h3>
   <p className="text-sm sm:text-base text-white font-play">
    As the Top Salon and Spa Interior Design Company in Dubai, UAE,we carefully work on every aspect of luxury 
    salon fit-out in Dubai. From getting permits and planning layout to final execution, our approach guarantees
     perfection, efficiency and durability. Every detail is paid deep attention to provide elegance,functionality
      and flawless finish.

   </p>

  {/* <ul className="list-disc list-inside space-y-1">
    <li>Space-saving furniture layout planning</li>
    <li>Bedroom and living room integration</li>
    <li>Multi-functional furniture sourcing from Dubai’s top suppliers</li>
    <li>Personalized color palettes and lighting strategies</li>
  </ul> */}
</div>

      </div>

      {/* Split Row – Text + Top Right Image */}
      <div className="lg:max-w-[60%] mx-auto flex flex-col lg:flex-row items-start gap-6 mb-12">
        <div className="w-full lg:w-2/3 space-y-4">
        <h3 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#caa193]">
         Why Beauty Salon Design in Dubai Matters?
        </h3>
        <p className="text-sm sm:text-base text-white font-play">
        In the beauty industry, first impressions are everything. A stunning salon interior design in Dubai can set your
        business apart and create lasting impressions on clients. More than just furniture and paint, interiors act as 
        silent marketing tools – sometimes even more powerful than advertising. With the right luxurious beauty salon
        designs, you give clients comfort, relaxation, and a sense of indulgence that keeps them returning. Ambience, 
        layout, and comfort zones are essential in building loyalty, making design a key factor in your salon’s success.
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
          Our Spa and Beauty Salon Interior Design & Fit-Out
        </h2>

        {/* Section 1: Text Left, Image Right */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          <div className="space-y-6 text-white font-play">
            <h2 className="text-xl font-conthrax text-[#caa193] mb-4">
             Our Design & Fit-Out Process
            </h2>
            <p>
           At WE DO, our success lies in a clear and structured process.
            </p>
            <ul className="list-decimal pl-5 space-y-2 text-[#caa193]">
            
            <li>
            <h3 className='font-play'>Space Planning & Concept Development</h3>
             <p className='text-white font-play'> Through careful space planning, we map out the flow of customers and allocate zones for different services.</p>
            </li>

             <li>
            <h3 className='font-'>Creative Design & Visualization</h3>
             <p className='text-white font-play'>Our team develops concepts, mood boards, and 3D renders during the designing stage to bring ideas to life.</p>
            </li>

             <li>
            <h3 className='font-play'>Material Selection & Detailing</h3>
             <p className='text-white font-play'> Every element, from flooring and walls to furniture and lighting, is finalized in the selection of materials.</p>
            </li>

             <li>
            <h3 className='font-play'>Salon Fit-Out & Furnishing</h3>
             <p className='text-white font-play'> We execute the project with precision, focusing on furnishing and finishes to achieve the highest standards.</p>
            </li>

              <li>
            <h3 className='font-play'>Final Styling & Handover</h3>
             <p className='text-white font-play'> Finally, our experts add the finishing touches – interior decoration, plants, artwork, and branding – before handing over a ready-to-use salon.</p>
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
              What Makes a Salon Fit-Out in Dubai Outstanding?
            </h2>
            <p>
              You may wonder: What makes a salon fit-out in Dubai outstanding? The answer lies in attention to detail and
              smart space planning. Being the best salon and spa interior design company in Dubai, we make every square
              meter count with flowing spaces from entrance to retail to treatment areas. The right lighting makes beauty 
              treatments shine, and custom furniture brings personality and comfort. Sustainability is also high on our
              agenda, with eco-friendly products that are both fashionable and responsible.
              </p>
              <h2 className="text-xl font-conthrax text-[#caa193] mb-4">
              Bespoke Design Styles for Every Beauty Salon Design in Dubai
            </h2>
            <p>
              Every salon has its own personality, and our designs reflect that. We craft the interiors of a modern and 
              vintage salon with a balance of charm and elegance, while the interiors of a modern and traditional spa 
              bring together timeless relaxation. For those who prefer sleek looks, modern or contemporary designs and 
              minimalist designs create clean, youthful spaces. If cultural luxury appeals to you, our Arabian designs 
              and Morocco-designs bring richness and grandeur. For the conscious business owner, we provide eco-friendly 
              designs that promote wellness and sustainability.
            </p>
           
          </div>
        </div>
      </div>

           {/* last paragraph */}
           <div className="lg:max-w-[60%] mx-auto bg-black p-6 sm:p-10 rounded shadow space-y-6 mb-12">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-conthrax text-[#caa193] mb-2">
            How Should a Beauty Salon Be Decorated?
          </h2>
          
          <p className="font-play text-sm sm:text-base text-white text-start py-2">
          Are you the one who thinks How should a beauty salon be decorated? The answer is that it depends on the environment 
          and the personality of Brand. The interior Design of a salon should be in such a way that it combines aesthetics and
          functionality. From a reception branding wall with your brand’s logo to a stylish and peaceful waiting area, every
          corner is important to us. Lighting and the mirrors play a very crucial role in increasing the beauty treatments,
          while top-notch interior design and decoration ensure that the salon gives an elegant and inviting look. Adding 
          calming palettes,ambient music and a retail display areas helps to create a warm and professional environment in
          your salon.</p>
           <h2 className="text-xl sm:text-2xl md:text-3xl font-conthrax text-[#caa193] mb-2">
           Why Choose WE DO Interior Design & Fitout?
          </h2>

           <p className="font-play text-sm sm:text-base text-white text-start py-2">
            Being the best Salon and Spa Interior Design Company in Dubai, UAE, WE DO has established itself as a hallmark
             of delivering the best. Our experts blend style with functionality, ensuring every design is both functional 
             and glamorous. We have successfully executed contemporary, minimalist, luxury, and green salons throughout Dubai, 
             making us the most preferred option for salon and spa business owners. With competitive pricing and turnkey delivery, 
             our customers rely on us to manage the lot from design to last fit-out.
          </p>
        </div>

        {/* Section 2 */}
        <div>
        </div>

        {/* Section 3 */}
        <div>
          <h3 className="text-xl font-conthrax text-[#caa193] mb-4">
           Start Your Salon Transformation Today
          </h3>
          
          <p className="font-play text-sm sm:text-base text-white">
          Your dream salon is just a consultation away. At WE DO Interior Design & Fitout, we specialize in salon interior design
           services in Dubai, offering bespoke Beauty Salon Dubai Design & Fit-Out solutions. Being the top Salon Interior Design 
           Company in Dubai, we aim to create an area that translates luxury, beauty and comfort. <b><a href="https://wedointerior.ae/contact-us">Get in touch with us today </a></b>to
            start your transformation and let us build a salon that reflects your brand and wins over your clients.</p>
        </div>
      </div>
    </section>
  );
};



export default DProjects;
