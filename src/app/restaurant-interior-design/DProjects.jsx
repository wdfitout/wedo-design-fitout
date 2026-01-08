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
      
      
      {/* Split Row – Text + Top Right Image */}
      <div className="lg:max-w-[60%] mx-auto flex flex-col lg:flex-row items-start gap-6 mb-12">
        <div className="w-full lg:w-2/3 space-y-4">
          <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#caa193]">
          Why Restaurant Interior Design Matters in Dubai?
          </h2>
          <p className="text-sm sm:text-base text-white font-play">
           The restaurant interior design plays a very important role in attracting the customers in the Food & beverage
           industry of Dubai.  A beautifully designed space not only impresses the customers but also leaves a long lasting
            impression on the people which automatically results in repetitive visits and social engagement for the business. 
            It boosts the working and creativity of staff and guest satisfaction rate. That’s why choosing a trusted restaurant
             interior design and fit-out company in Dubai is essential for success.
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
          Luxury Restaurant Interiors in Dubai, Delivered with Seamless Execution
        </h2>

        {/* Section 1: Text Left, Image Right */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          <div className="space-y-6 text-white font-play">
            <h2 className="text-xl font-conthrax text-[#caa193] mb-4">
             Our Process: From Concept to Completion
            </h2>
            <p>
            At WE DO Interior Design & Fitout, our approach to restaurant interior design in Dubai is fully turnkey crafted 
            to deliver seamless results across JBR, Downtown, Dubai Marina, and beyond. Here’s how we bring your vision to life:
            </p>
            <p>
            </p>
            <ul className="list-decimal pl-5 space-y-2 text-[#caa193]">
            
            <li>
            <h3 className='font-play'> Concept Consultation</h3>
             <p className='text-white font-play'> 
              In the beginning we understand your brand story, cuisine, business goals 
              and  targeted audience to generate a restaurant concept for you.
              </p>
            </li>

             <li>
            <h3 className='font-'>Interior Design Development</h3>
             <p className='text-white font-play'> 
              Our team creates layout plans, mood boards and 3D visualization which align 
              functionality with aesthetics, ensuring that your space is a combination of both efficient and  inviting.
            </p>
            </li>

             <li>
            <h3 className='font-play'>Restaurant Fit-Out Execution </h3>
             <p className='text-white font-play'> 
              As experienced restaurant fit-out contractors in Dubai, we handle all construction, MEP coordination, and custom furniture production with precision and speed.
            </p>
            </li>

             <li>
            <h3 className='font-play'>Styling & Final Handover </h3>
             <p className='text-white font-play'> After finishing and quality checks, we hand over a brand aligned restaurant 
              interior which is fully functional and ready to welcome your customers.
            </p>
            </li>
            </ul>
            
            <p>
            From  large-scale dining venues to boutique cafés, we provide bespoke  restaurant fit-out services in Dubai and 
            its areas like Barsha heights, Dubai Creek Harbour etc.

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
              What Is Restaurant Interior Design In Dubai?

            </h2>
            <p>
              The Restaurant Interior design and fitout in Dubai is the way of shaping the dining places in such a way 
              that they reflect your brand identity, increase the comfort of customers and optimize space flow. In the 
              competitive food & beverage (F&B) industry of Dubai, restaurant design is more than just aesthetics - 
              In fact, it is about creating beautiful and memorable experiences for your customers that align with your 
              cuisine, Target Diners, and goals. </p>
            <p>
              No matter if you're launching your new cafe in Al Safa, a good dining venue in Downtown or an open sky 
              lounge in Dubai Marina, our best services restaurant interior design in Dubai blends visual aesthetics,
               ambiance and functionality to boost your brand and business profit.
               </p>
          </div>
        </div>
      </div>

           {/* last paragraph */}
           <div className="lg:max-w-[60%] mx-auto bg-black p-6 sm:p-10 rounded shadow space-y-6 mb-12">
        {/* Heading */}
        <div className="text-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-conthrax text-[#caa193] mb-2">
            Types of Restaurant Interior Design We Specialize In
        </h2>
          
        <p className="font-play text-sm sm:text-base text-white text-start py-2">
         As a best interior fit-out design company for restaurants in UAE, we are skilled in creating unique environments 
         according to your concept, interest and location. Our expertise across full spectrum of the F&B industry, including:
         </p>
          
        </div>

        {/* Section 2 */}
        <div>
          <h3 className="text-xl font-conthrax text-[#caa193] mb-4">
            Types of Restaurants Interiors We Design in Dubai
          </h3>
       <ul className="list-disc list-inside font-play text-sm sm:text-base text-white">
  <li> <b> Fine Dining Restaurants </b>– High-end layouts, immersive ambience and premium finishes that reflect elegance and exclusivity</li>
  <li> <b> Cafés & Coffee Shops </b> – Warm, inviting spaces with a balance of creativity and comfort are perfect for casual and frequent visits.</li>
  <li> <b>Rooftop Lounges & Beachfront Venues </b> – Open-air concepts with striking views and luxurious materials and ambient lighting for a standout experience.</li>
  <li> <b> Fast Casual & QSRs</b>- Smart space planning, brand forward design and long lasting materials are ideal for high customer turnover.</li>
  <li> <b> Themed & Concept Restaurants </b>– From vintage to ultra-modern, WE DO interiors build immersive dining environments that bring your unique story to life.</li>
</ul>
<br />
      <p className="font-play text-sm sm:text-base text-white"> Whether you're opening in DIFC, Jumeirah Bay, or Business Bay, 
        we deliver bespoke restaurant interiors in Dubai which are  designed to impress and perform.
</p>
        </div>

        {/* Section 3 */}
        <div>
          <h3 className="text-xl font-conthrax text-[#caa193] mb-4">
           Why Choose Us for Restaurant Interior Design in Dubai

          </h3>
          <p className="font-play text-sm sm:text-base text-white">
          With deep-rooted expertise in the Dubai F&B industry, WE DO Interior Design & Fitout is trusted by restaurants, cafés, 
          and hospitality brands across Dubai International City, Downtown, Dubai Marina, and beyond. We offer turnkey restaurant 
          interior design and fit-out services—handling everything from concept and approvals to final styling. Our team ensures 
          fast execution of work with full compliance to local regulations, including DEWA and municipality approvals. As one of 
          the best interior design companies in Dubai for restaurants, we prioritize quality, transparency and on-time delivery
           earning the long-term trust of our clients through every project we complete.
         </p>
          <p className="font-play text-sm sm:text-base text-white">
         Ready to create a standout space for your Restaurant? Tap the button below to discuss your bespoke restaurant interior 
         design and fit‑out anywhere in Dubai, UAE.
      </p>
        </div>
      </div>
    </section>
  );
};



export default DProjects;
