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
          Our Approach to Office Interior Design Dubai
        </h2>
 <div className="space-y-4 text-sm sm:text-base font-play text-white text-left">
  <p>
    As Expert Interior Designers in Dubai, we have a visible and proven track record, we deliver customized Office 
    Fit-Out Solutions that reflect your business values, identity and vision while increasing efficiency.
  </p>

  <ul className="list-disc list-inside space-y-1">
    <li> <b>Design Philosophy </b>– We blend aesthetics,functionality and brand identity to create office interior designs that inspire productivity and reflect our client’s company culture.</li>
    <li><b>End-to-End Process</b> – From consultation to concept development, 3D visualizations, precise execution, and final handover, we handle every step.</li>
    <li><b>Customization </b>– From sleek corporate headquarters in DIFC to creative co-working spaces in Dubai Marina or Dubai Media City, we customize every detail to your business desires and needs.</li>
    <li><b>Expertise & Solutions</b> – As one of the top Office Interior Design Companies in Dubai, we provide high end Office Fit-Out Solutions that combine style with practical efficiency.</li>
  </ul>
</div>

      </div>

      {/* Split Row – Text + Top Right Image */}
      <div className="lg:max-w-[60%] mx-auto flex flex-col lg:flex-row items-start gap-6 mb-12">
        <div className="w-full lg:w-2/3 space-y-4">
          <h3 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#caa193]">
         Our Office Fit-Out & Build Services
          </h3>
          <p className="text-sm sm:text-base text-white font-play">
          As one of Top Interior Design & Office Fit-Out Companies in Dubai, we turn blank or vacant spaces into 
          fully functional, visually impressive workplaces. We offer glass partitions, ceilings, flooring, lighting,
          custom-designed furniture, and more in our fit-out services.
          </p>
          <p className="text-sm sm:text-base text-white">
          We offer turnkey solutions meeting Dubai's building regulations to ensure projects in DIFC, Business Bay, 
          and Dubai Marina achieve the best safety and quality standards. Our emphasis on time efficiency and cost
           control helps deliver results on time and without sacrificing design excellence.
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
          Types of Office Interior Design Services We Offer
        </h2>

        {/* Section 1: Text Left, Image Right */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          <div className="space-y-6 text-white font-play">
            <h2 className="text-xl font-conthrax text-[#caa193] mb-4">
              Our Office Interior Design Services in Dubai
            </h2>
            <p>
            At WE DO Interior Design & Fitout, we specialize in providing office interior design services in Dubai 
            that combine functionality, style, aesthetics  and brand identity. From corporate headquarters to creative
            start-ups, our expert team creates spaces that inspire productivity and leave a lasting impression on 
            everyone who visits you.

            </p>
           
            <ul className="list-decimal pl-5 space-y-2 text-[#caa193]">
            
            <li>
            <h3 className='font-play'>Corporate Headquarters Design</h3>
             <p className='text-white font-play'> Perfect for luxury offices in DIFC or Downtown Dubai, our designs reflect Status and Elite professionalism</p>
            </li>

             <li>
            <h3 className='font-'>Co-working Spaces </h3>
             <p className='text-white font-play'>Flexible, collaborative interiors for hubs in Dubai Marina, <b><a href="https://wedointerior.ae/al-safa-real-estate-office">real estate office interior in Al Safa </a></b>,JLT, or Tecom.</p>
            </li>

             <li>
            <h3 className='font-play'>Start-up Offices </h3>
             <p className='text-white font-play'>  Stylish layouts ideal for emerging companies in Dubai South or Jumeirah Village Circle (JVC).</p>
            </li>

             <li>
            <h3 className='font-play'>Meeting Rooms & Boardrooms</h3>
             <p className='text-white font-play'>Professional, smart spaces designed for productivity in locations like <b><a href="https://wedointerior.ae/business-bay-office-fit-out">office fit out for Business Bay</a></b>, Motor city or Dubai Internet City.</p>
            </li>
             <li>
            <h3 className='font-play'>Reception & Waiting Areas </h3>
             <p className='text-white font-play'>  Strong first impressions for corporate towers in Sheikh Zayed Road or Dubai Media City.</p>
            </li>
             <li>
            <h3 className='font-play'>Breakout & Recreational Areas </h3>
             <p className='text-white font-play'>  Wellness-focused interior designs for companies in Al Quoz or <b><a href="https://wedointerior.ae/dubai-knowledge-park-office-fit-out">Dubai Knowledge Park office fitout</a></b>.</p>
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
              Why Choose WE DO Interior Design & Fitout for Your Office Project
            </h2>
            <p>
            Creating an office interior  design that maximizes productivity and embodies your brand is at the very center
            of our endeavors at WE DO Interior Design & Fitout. As one of the top office interior design companies in Dubai,
            we are experts in office interior fit-out, office refurbishment, and office renovation with emphasis on creativity,
            functionality, and accuracy. Our highly acclaimed office fit-out and interior design services in Dubai cover 
            high-end business districts such as Jumeirah lake towers, DIFC, Business Bay, and Dubai Media City, with
            unparalleled performance for both luxury fit-out and refurbishment schemes and contemporary commercial interiors. 
           </p>
            <p>
            As one of the top Dubai office fit-out contractors, we combine smart solutions and ergonomic fittings to design
            intelligent workplaces for today's employees. With a long history of delivering excellence across Sheikh Zayed Road,
            Dubai South, and more, our on-time delivery guarantee makes us the preferred partner for businesses looking for 
            office interior designers in Dubai who deliver excellence every time.
           </p>
          </div>
        </div>
      </div>
    </section>
  );
};



export default DProjects;
