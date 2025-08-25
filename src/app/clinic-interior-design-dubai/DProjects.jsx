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
          Stylish & Functional Clinic Interior Design Dubai
        </h2>
 <div className="space-y-4 text-sm sm:text-base font-play text-white text-left">
  <p>
    A clinic should be something more than just a treatment space, it should not only provide treatments to the patients, but also comfort, safety and efficiency. At WE DO Interior Design & Fitout we are specialized in providing stylish & functional clinic interior design in Dubai by blending modern trends with  medical practicality. Our clinic interior designers focus on details like:
  </p>

  <ul className="list-disc list-inside space-y-1">
    <li>Hygienic materials like easy-to-clean surfaces and antimicrobial flooring</li>
    <li>Strategic lighting by LED lamps and natural light to develop warm atmospheres.</li>
    <li>Smart storage arrangements for the medical equipment, keeping clinics clutter-free.</li>
    <li>Acoustics and soundproofing to ensure a quiet environment that is stress-reducing.</li>
    <li>Integrated advanced technology such as telemedicine facilities and smart climate control.</li>
  </ul>
  <p>We design everything from skin clinic interior design in Dubai, private clinic design, and medical centers to hospitals and diagnostic facilities. Each project is crafted with healing architecture and soothing color palettes, creating healing interior design that promotes well-being.
</p>
</div>

      </div>

      {/* Split Row – Text + Top Right Image */}
      <div className="lg:max-w-[60%] mx-auto flex flex-col lg:flex-row items-start gap-6 mb-12">
        <div className="w-full lg:w-2/3 space-y-4">
          <h3 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#caa193]">
          Leading Healthcare Interior Design Company in Dubai
          </h3>
          <p className="text-sm sm:text-base text-white font-play">
           WE DO Interior Design & Fitout is recognized as the #1 medical clinic interior design company in Dubai. We have successfully executed medical clinic interiors, hospital projects, and healthcare centers across the UAE. As a clinic interior design company in Dubai and a healthcare interior design company in the UAE, we deliver professional hospital interior designers with the right blend of creativity, compliance, and technical expertise.

          </p>
          <p className="text-sm sm:text-base text-white font-play">
          Our expertise in interior design  include medical clinics set up in Dubai,designing healthcare interior design in Dubai and clinic interior fit-outs for both public and private healthcare providers in Dubai. Every step from concept to completion, we offer end-to-end clinic interior design services which include  custom fit-out design,  bespoke furniture  and specialized cabinetry.
          </p>
          <p className="text-sm sm:text-base text-white font-play">
          We at WEDO partner with the most reliable contractors and suppliers in Dubai while ensuring that each project meets the standards of DHA approval,HSE guidelines  and local rules compliance.  As a reputable clinic interior fit-out provider in Dubai, we are committed to providing patient-friendly aesthetics,durable materials and seamless project delivery.</p>
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
          Our Healthcare Interior Design & Fit-Out Services in Dubai
        </h2>

        {/* Section 1: Text Left, Image Right */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          <div className="space-y-6 text-white font-play">
            <h2 className="text-xl font-conthrax text-[#caa193] mb-4">
              Healthcare Interior Design & Fit-Out
            </h2>
            <p>
            We provide comprehensive fit-out services for hospitals and clinics across Dubai and the UAE. Our specialized services include:</p>
            
            <ul className="list-decimal pl-5 space-y-2 text-[#caa193]">
            
            <li>
            <h3 className='font-play'>Medical Clinic Set Up in Dubai</h3>
             <p className='text-white font-play'> Complete design and build of new medical centers and private clinics.</p>
            </li>

             <li>
            <h3 className='font-'>Clinic Interior Fit-Out & Renovation</h3>
             <p className='text-white font-play'> Transforming old buildings into modern clinics in Dubai.</p>
            </li>

             <li>
            <h3 className='font-play'>Hospital Interior Design & Fit-Out</h3>
             <p className='text-white font-play'>Designing large-scale healthcare facilities to international standards.</p>
            </li>

            <li>
            <h3 className='font-play'>Interior Design Services for Medical Centers</h3>
             <p className='text-white font-play'>Planning layouts, patient-centric spaces, and staff-effective designs.</p>
            </li>
             
             <li>
            <h3 className='font-play'>Skin Clinic Interior Design Dubai</h3>
             <p className='text-white font-play'> Luxury bespoke designs for cosmetic and dermatology clinics.</p>
            </li>

            <li>
            <h3 className='font-play'>Private Clinic Design</h3>
             <p className='text-white font-play'> Branding-inspired custom interiors in Dubai that are functional and compliant.</p>
            </li>

            <li>
            <h3 className='font-play'>Bespoke Furniture & Custom Fit-Out Design</h3>
             <p className='text-white font-play'> Tailored cabinetry, ergonomic seating, and brand-integrated furniture. </p>
            </li>

            <li>
            <h3 className='font-play'>Healing Architecture & Biophilic Design</h3>
             <p className='text-white font-play'> Incorporating natural elements, sustainable processes, and calming environments.</p>
            </li>
            </ul>
            
            <p>
           Every design is centered on smarter healthcare design—prioritizing functionality, hygiene, efficiency, and regulatory compliance. </p>
           
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
              Our Process – From Design to Delivery
            </h2>
            
            <ul className="list-disc list-inside font-play text-sm sm:text-base text-white">
             <li> <b>Clinic Interior Design Consultation – </b>Understanding your goals, medical specialty, and brand requirements.</li>
             <li><b>Concept & Space Planning –</b> Efficient layouts that maximize both patient comfort and staff productivity.</li>
             <li><b>3D Visualization & Approval – </b>Preview your medical clinic interiors before execution.</li>
             <li><b>Clinic Interior Fit-Out Execution – </b>Complete build with hygienic materials, specialized cabinetry, and durable finishes.</li>
             <li><b>Compliance & Handover – </b>Delivery of DHA-compliant, patient-ready clinics on time and within budget.</li>
            <li><b>Result-</b> Enhanced patient comfort, elevated brand identity, and seamless functionality.</li>
          </ul>

          </div>
        </div>
      </div>

           {/* last paragraph */}
           <div className="lg:max-w-[60%] mx-auto bg-black p-6 sm:p-10 rounded shadow space-y-6 mb-12">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-conthrax text-[#caa193] mb-2">
            Why Choose Us as Your Clinic Interior Fit-Out Partner?
          </h2>
          
          <p className="font-play text-sm sm:text-base text-white text-start py-2">
          Choosing a right  clinic interior fit-out partner in Dubai is very important for your healthcare space that enhances both staff efficiency and patient care. At WE DO Interior Design & Fitout, we work beyond the standards of Interior design in Dubai by offering DHA compliance,handling all necessary approvals to ensure your clinic meets DHA regulations without delays. We employ hygienic materials such as easy-to-clean finishes, antimicrobial floors and  hygiene-compliant finishes without compromising durability and safety. </p>
           <p className="font-play text-sm sm:text-base text-white text-start py-2">
          Our interior designs are developed through the fusion of intelligent technology like optimized sound, strategic lighting and patient-centric beauty with healing architecture and the adoption of technology integration like telemedicine suites and intelligent climate control systems to develop smarter health environments.All our projects are customized to enhance patient comfort, patient experience, and personalized brand identity, capturing the unique personality of your clinic.  </p>
         <p className="font-play text-sm sm:text-base text-white text-start py-2"> From waiting areas, treatment rooms, labs, lobbies, fitness areas, to administrative offices, we provide turnkey solutions that deliver both style and compliance. This makes us not only clinic interior designers but also trusted providers of clinic interior design consultation and clinic interior fit-out services in Dubai.</p>
         </div>

        {/* Section 2 */}
        <div>
          <h3 className="text-xl font-conthrax text-[#caa193] mb-4">
           Areas We Serve

          </h3>
          
       <p className="font-play text-sm sm:text-base text-white"> Our expertise spans across Dubai and the UAE. Whether you are launching a medical clinic set up in Dubai Healthcare City, expanding a facility in Business Bay, renovating near Dubai Marina, or opening a clinic in Jumeirah, Al Wasl, or Sheikh Zayed Road, our team ensures your project benefits from clinic interior design near me services.
         As a trusted clinic interior design company in the UAE, we also provide services in Abu Dhabi, Sharjah, and other Emirates, delivering turnkey fit-out for medical facilities wherever you are located. </p>
        </div>

        {/* Section 3 */}
        <div>
          <h3 className="text-xl font-conthrax text-[#caa193] mb-4">
           Get Started with Dubai’s Leading Clinic Interior Design Company

          </h3>
          <p className="font-play text-sm sm:text-base text-white">
          As Dubai’s trusted clinic interior design company, we create creative and innovative clinic interior designs that prioritize patient safety, staff efficiency, and brand identity. Whether you need a medical clinic set up in Dubai, a clinic interior fit-out, or a hospital interior design & fit-out company in Dubai, our team delivers excellence every step of the way.
</p>
         
        </div>
      </div>
    </section>
  );
};



export default DProjects;
