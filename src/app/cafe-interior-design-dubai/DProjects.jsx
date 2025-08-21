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
          Café and Coffee Shop Design Services in Dubai
        </h2>
 <div className="space-y-4 text-sm sm:text-base font-play text-white text-left">
  <p>
    A cafe is more than a place to serve coffee - it is a community hub in Dubai where design plays a very important role in 
    attracting customers. Our café & coffee shop interior design in Dubai combines our creativity with your expertise to 
    transform the empty spaces into vibrant  hubs of conversation, culture and comfort.
  </p>

  <p>
    From restaurant and café space designs to boutique cafés in Dubai, we focus on seating, acoustics, lighting and circulation
    to ensure that the design flows seamlessly.  As a trusted café interior design company, we create unique concepts that 
    align with the brand identity and personality of the client.
    Our scope covers every aspect of design, including:
  </p>

  <ul className="list-disc list-inside space-y-1">
    <li>F&B Interior Design Dubai and F&B Fitout Dubai solutions for cafés and coffee shops</li>
    <li>Conceptual layouts, mood boards, and branding integration</li>
    <li>Functional café fit-out design services for kitchens, counters, and service areas</li>
    <li>Bespoke furniture and finishes for a distinctive identity</li>
    <li>End-to-end management as a restaurant interior design & fit out contractor in Dubai</li>
  </ul>
   
  </div>

      </div>

      {/* Split Row – Text + Top Right Image */}
      <div className="lg:max-w-[60%] mx-auto flex flex-col lg:flex-row items-start gap-6 mb-12">
        <div className="w-full lg:w-2/3 space-y-4">
          <h3 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#caa193]">
          Why Choose WE DO Interior Design & Fitout for Your Café?
          </h3>
          <p className="text-sm sm:text-base text-white font-play">
          When searching for interior design near me, café owners often struggle to find a company that balances creativity 
          with technical expertise. At WE DO Interior Design and Fitout, we are among the  top 10 interior fit out companies
          in Dubai with vast experience of  café interiors in Dubai.
          </p>
      
          <p className="text-sm sm:text-base text-white">
          As an experienced café interior design company in Dubai,  we are a team of expert designers, project managers
          and architects who understand the method of creating cafés that are not only appealing but also efficient.
          We provide complete café and restaurant design Dubai services that ensure the staff efficiency, customer 
          flow and a warm, welcoming environment.
         </p>
          <p className="text-sm sm:text-base text-white"> 
          Whether you need residential interior design for a home café concept, commercial interior design for a branded coffee
          shop chain, or hospitality interior design for a high-end venue, we offer specialized services under one roof.
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
         Expert Café Interior Designers in UAE
        </h2>

        {/* Section 1: Text Left, Image Right */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          <div className="space-y-6 text-white font-play">
            <h2 className="text-xl font-conthrax text-[#caa193] mb-4">
              Cafe Interior Design Company in Dubai
            </h2>
            <p>
            We believe that café interior designing should never follow a one-size-fits-all approach.Our expertise of  café interior
            designers in UAE lies in designing every according to the clients requirements. By studying customer behavior and 
            industry trends of Dubai, we ensure that every café has an atmosphere to increase customers and profit.
            </p>
            <p>
            Our role as a coffee shop interior company is to merge branding with functionality—creating spaces where customers 
            feel comfortable staying longer, and staff can work more efficiently. From café interiors in Dubai that focus on 
            modern minimalist café design to highly creative custom café design Dubai projects, we deliver inspiring and practical 
            results.
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
              Café Fit-Out Design Dubai – Complete Turnkey Solutions
            </h2>
            <p>
              Beyond design, execution is equally important. As a specialized café fit-out design company in Dubai, we take care
              of the entire process—from planning approvals to material selection and on-site execution. Our reputation as a 
              reliable interior fit out company in Dubai and restaurant interior design & fit out contractor in Dubai allows 
              us to deliver high-quality finishes on time and within budget.</p>
            <p>
              We at WEDO Interior use high quality materials, latest and advanced construction methods along with modern technology
              to bring lift to your concept. Every Cafe  project in Dubai is closely supervised, ensuring that your café is designed
              and built to meet the high standards of Dubai Landscape.
            </p>
          </div>
        </div>
      </div>

           {/* last paragraph */}
           <div className="lg:max-w-[60%] mx-auto bg-black p-6 sm:p-10 rounded shadow space-y-6 mb-12">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-conthrax text-[#caa193] mb-2">
            Café Interior Design Services – Tailored to Your Brand
          </h2>
          
          <p className="font-play text-sm sm:text-base text-white text-start py-2">
          Every café has a story, and our job as the best café interior design company in Dubai is to convert your story
          in an environment that your customers can easily connect with you. We focus on café interior designing that
          enhances customer experience, makes your brand strong and maximizes performance.From cozy coffee shops to large
          chains, our café interior design services include:
          </p>
        </div>

        {/* Section 2 */}
        <div>
       <ul className="list-disc list-inside font-play text-sm sm:text-base text-white">
       <li>Custom café and coffee shop design concepts</li>
       <li>End-to-end project management and fit-out execution</li>
       <li>Specialist solutions for restaurant and café space designs</li>
       <li>Integration of branding into interiors for a seamless experience</li>
      </ul>
        </div>

        {/* Section 3 */}
        <div>
        <p className="font-play text-sm sm:text-base text-white">
        At WE DO Interior Design and Fitout, we combine creativity, technical expertise, and deep knowledge of F&B spaces 
        to deliver expert café and restaurant design services in Dubai. Whether you are searching for café interior design
        in Dubai, café fit-out design services, or a complete café and coffee shop interior company, we provide solutions 
        that are elegant, functional, and built for success.
        </p>
        <br />

          <p className="font-play text-sm sm:text-base text-white">
          If you are ready to elevate your café’s atmosphere and create a space that inspires customers, trust one of the best
          interior fit out companies in Dubai— <b><a href="https://wedointerior.ae/">WE DO Interior Design and Fitout.</a></b>
         </p>
        </div>
      </div>
    </section>
  );
};



export default DProjects;
