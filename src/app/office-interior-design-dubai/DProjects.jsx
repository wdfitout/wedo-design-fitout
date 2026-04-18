'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const textImage = {
  src: '/images/x.learning (11).webp',
  link: '/dubai-knowledge-park-office-fit-out',
  title: 'DUBAI KNOWLEDGE PARK OFFICE FIT OUT'
};

const galleryImages = [
  { src: '/images/x-learn.png', link: '/dubai-knowledge-park-office-fit-out', title: 'DUBAI KNOWLEDGE PARK OFFICE FIT-OUT' },
  { src: '/images/startech (10).webp', link: '/business-bay-office-fit-out', title: 'START TECH BUSINESS BAY OFFICE FIT-OUT' },
  { src: '/images/sns (1).webp', link: '/dubai-office-interior', title: 'SNS DUBAI OFFICE INTERIOR' },
  { src: '/images/nest-finders.png', link: '/al-safa-real-estate-office', title: 'AL SAFA REAL ESTATE OFFICE' },
  { src: '/images/meby (6).webp', link: '/business-bay-travel-agency', title: 'MEBY BUSINESS BAY TRAVEL AGENCY' },
 
];

const DProjects = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    { q: "What is office interior design Dubai?", a: "It is the process of crafting practical and elegant workspaces that elevate functionality and efficiency." },
    { q: "How to design an office interior?", a: "It includes styling layouts, quality materials, and integrating branding to design a sophisticated workspace." },
    { q: "What are the requirements for office interior design?", a: "The primary requirements for a business are space design, ergonomics in furniture, lighting, and legal issues." },
    { q: "How long does it take to carry out an office fit-out in Dubai?", a: "Most office interior fit-out projects take 4–12 weeks based on size and complexity." },
    { q: "How much will office interior design cost in Dubai?", a: "Depends on quality of materials and project size." },
    { q: "Do you handle office fit-out approvals in Dubai?", a: "Yes, we handle all approvals needed for office fit-out companies in Dubai projects." },
    { q: "Can you design small office spaces?", a: "Yes, we are experts in compact and exclusive layouts for startups and small offices." }
  ];

  return (
    <section className="px-6 py-10 bg-black-200">
      
      {/* 1. Introduction & 2. Why Office Interior Design Dubai Matters */}
      <div className="lg:max-w-[60%] mx-auto bg-black p-6 sm:p-10 rounded shadow text-center space-y-6 mb-12">
        
        <div className="space-y-4 text-sm sm:text-base font-play text-white text-left">
         
          <h2 className="text-[#caa193] font-conthrax text-lg pt-4 uppercase">Why Office Interior Design Dubai Matters</h2>
          <p>
            The design of<b> Office Interiors Dubai</b> plays a vital role in improving the productivity of both the employees and the organization itself. Good interior designs make the employees happy, reduce stress, and improve their collaboration skills. As someone who appreciates ambience, your office represents your entire business. Hiring a competent firm for<b> office interior design</b> ensures that your space communicates professionalism. High-end layouts are also crucial. With rising commercial costs, integrating space through <b>interior office fit-out</b> strategies makes sure maximum usability without compromising luxury. Additionally, <b>corporate office interior design</b> matches your workspace with your brand personality, crafting a consistent and memorable experience.
          </p>
        </div>
      </div>

      {/* 3. Our Office Interior Design Services in Dubai */}
      <div className="lg:max-w-[80%] mx-auto flex flex-col lg:flex-row items-start  gap-6 mb-12">
        <div className="w-full lg:w-3/3 space-y-4">
          <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#caa193] uppercase">
            Our Office Interior Design Services in Dubai
          </h2>
          <p className="text-sm sm:text-base text-white font-play">
            We are one of the best <b> office interior fit out companies in Dubai</b>, offering full services specific to each business.
          </p>
          <div className="text-white space-y-4 font-play">
            <p><b className="text-[#caa193]">a. Space Planning & Layout Design:</b> We are experts in thoughtful layouts for office interiors in Dubai, managing open-plan workspaces with private offices. Our professionals ensure exclusive zoning for departments, making us the best office interior company for contemporary businesses.</p>
            <p><b className="text-[#caa193]">b. Office Fit-Out Services:</b> Our personalized office interior fit-out solutions cover each and everything from ideation to completion. As reliable Dubai office fit-out contractors, we also manage approvals, making your space flawless and compliant.</p>
            <p><b className="text-[#caa193]">c. Custom Office Furniture Design:</b> We design ergonomic and stylish furniture services, from workstations to executive desks. Our personalized designs enhance practicality and aesthetics, creating us one of the best office interior design Dubai offers for personalized spaces.</p>
            <p><b className="text-[#caa193]">d. Lighting Design:</b> We curate lighting systems that handle natural and artificial sources, making sure a productive and luxurious work ambiance.</p>
            <p><b className="text-[#caa193]">e. Branding & Corporate Identity Integration:</b> We include brand elements into interiors, offering elegant office interior design Dubai services that showcase your company identity.</p>
          </div>
        </div>

       
</div>

{/* 4. Types of Office Spaces We Design (Gallery Grid) */}
<h2 className="font-conthrax text-center text-xs sm:text-xl md:text-xl font-bold tracking-widest mb-6 uppercase text-[#caa193]">
  OUR OFFICE INTERIOR DESIGN PROJECTS IN DUBAI
</h2>
<div className="lg:max-w-[60%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto mb-10">
        {galleryImages.map(({ src, link, title }, i) => (
          <a href={link} key={i} className="group block relative overflow-hidden rounded shadow">
            <Image src={src} alt={title} width={400} height={400} className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4">
              <p className="text-white text-xs sm:text-sm font-conthrax text-center">{title}</p>
            </div>
          </a>
        ))}
      </div>

      {/* Extra Space Descriptions from Section 4 */}
      {/* 4. Types of Office Spaces We Design (Descriptive Section) */}
      <div className="lg:max-w-[60%] mx-auto mb-16 px-4">
        <h2 className="text-xl sm:text-2xl font-conthrax text-[#caa193] mb-8 text-center uppercase">
          Types of Office Spaces We Design
        </h2>
        
        <p className="text-white font-play text-sm sm:text-base text-center mb-10">
          We are one of the top office interior design companies in Dubai, we craft a comprehensive workspaces specific to different business requirements:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 text-white font-play text-sm sm:text-base">
          <div className="space-y-6">
            <div>
            <h3 className='font-play font-bold'> <strong className="text-[#caa193] uppercase block mb-1">Corporate Offices –</strong> </h3> 
              Professional and scalable ambiances crafted for large teams, showcasing strong corporate office interior design Dubai standards.
            </div>
            <div>
             <h3 className='font-play font-bold'><strong className="text-[#caa193] uppercase block mb-1">Co-Working Spaces –</strong> </h3>
              Advanced and thoughtfully designed offices perfect for collaborative working environments and companies in today's world.
            </div>
            <div>
             <h3 className='font-play font-bold'> <strong className="text-[#caa193] uppercase block mb-1">Boardrooms and Meeting Rooms –</strong> </h3>
              Properly designed offices featuring good designs suitable for presentations, meetings, and decisions.
            </div>
            <div>
             <h3 className='font-play font-bold'> <strong className="text-[#caa193] uppercase block mb-1">Reception and Waiting Areas –</strong> </h3>
              High-end entrance spaces that craft lasting first impressions, match your brand identity.
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className='font-play font-bold'> <strong className="text-[#caa193] uppercase block mb-1">Private Cabins and Manager Rooms –</strong> </h3>
              Practical and luxurious enclosed spaces for leadership and focused work.
            </div>
            <div>
              <h3 className='font-play font-bold'> <strong className="text-[#caa193] uppercase block mb-1">Lounge and Pantry Spaces –</strong> </h3>
              Peaceful zones crafted to elevate employee wellbeing and informal interactions.
            </div>
            <div>
             <h3 className='font-play font-bold'>  <strong className="text-[#caa193] uppercase block mb-1">Startups & Small Offices –</strong> </h3>
              Smart and exclusive layouts for compact spaces, best for businesses seeking interior offices near me or cost-effective services.
            </div>
            <div>
             <h3 className='font-play font-bold'>  <strong className="text-[#caa193] uppercase block mb-1">Executive Offices –</strong> </h3>
              Quality and elegant interiors specific for top management, blending luxury with practicality.
            </div>
          </div>
        </div>

        {/* Prime Locations Highlight */}
        <div className="mt-12 p-6 bg-zinc-900/50 border-l-4 border-[#caa193] rounded-r-lg">
          <p className="text-white font-play text-sm leading-relaxed italic">
            <strong className="text-[#caa193] not-italic">Commercial Offices in Prime Locations –</strong> 
            We offer full office interior fit-out Dubai services. Our projects are located in significant business districts like 
            <strong> Business Bay, Downtown Dubai, Dubai Marina, and JLT</strong>, together with other surrounding areas such as 
            <strong> Sheikh Zayed Road, Al Wasl, DIFC, and Al Quoz</strong>.
          </p>
        </div>
      </div>

      {/* Iske baad aapka Bottom CTA Section (Get In Touch With Us) shuru hoga */}

      {/* Bottom CTA Section */}
      <div className="bg-[#f5ede5] py-10 text-center space-y-4">
        <h3 className="text-xs sm:text-xl font-conthrax uppercase text-black">Get In Touch With Us</h3>
        <p className="text-sm sm:text-base font-play text-black">We are located in the world's luxury city, Dubai</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4 px-4">
          <a href="https://wa.me/971588075603" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-green-500 text-white font-play text-sm rounded w-full sm:w-auto text-center">✅ Request availability by WhatsApp</a>
          <a href="mailto:info@wedointerior.ae" className="px-6 py-3 bg-[#caa193] text-white font-play text-sm rounded w-full sm:w-auto text-center">✉️ Request availability by E-mail</a>
        </div>
      </div>

      {/* 5. Trends & 6. Process Section */}
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-3xl font-conthrax text-white py-12 uppercase">Office Interior Design Trends & Process</h2>
        
        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          <div className="space-y-6 text-white font-play">
            <h2 className="text-xl font-conthrax text-[#caa193] mb-4 uppercase"> <b className="text-[#caa193]"
            ><a href="https://wedointerior.ae/office-interior-design-trends-in-business-bay">Office Interior Design Trends</a></b>  in Dubai</h2>
            <p>Contemporary office interior design companies in Dubai are elevating elegant aesthetics that promote accuracy and attention. <b className="text-[#caa193]"
           ><a href="https://wedointerior.ae/office-interior-elements-business-bay">Office Interior Elements</a></b> from biophilic interior design, such as plants, are employed to increase the productivity of employees.</p>
            
            <h2 className="text-xl font-conthrax text-[#caa193] mt-8 mb-4 uppercase">Our Office Design Process</h2>
            <p>WE DO is a reliable <b> office interior design company in Dubai </b>, we follow a well-planned concept to offer flawless office interior fit-out and design services:
            </p>
            <ul className="list-decimal pl-5 space-y-2 text-[#caa193]">
              <li><h3 className='font-play font-bold'>Site Visit and Measurement</h3><p className='text-white'> We start with a detailed site inspection to understand the space, needs, and technical aspects for your office interior design in Dubai space.</p></li>
              <li><h3 className='font-play font-bold'>Zoning and Space Planning</h3><p className='text-white'>Our specialization crafts exclusive layouts that maximize practicality and workflow, making sure smart utilization of your office interiors in Dubai.</p></li>
              <li><h3 className='font-play font-bold'>Development of Concepts and Visualization in 3D </h3><p className='text-white'>We provide visionary ideas and supply realistic 3D visuals so that you can get an idea of what the end result will be even before completing the project.</p></li>
              <li><h3 className='font-play font-bold'>Selection of Furniture, Lighting, and Material</h3><p className='text-white'> We smartly choose the right materials, furniture, and lighting services to suit your brand identity and budget.</p></li>
              <li><h3 className='font-play font-bold'>Execution and Management of Projects</h3><p className='text-white'>Being professional contractors in Dubai office fit-out services, we ensure the successful completion of your project.</p></li>
              <li><h3 className='font-play font-bold'>Final Handover and Aftercare</h3><p className='text-white'>We ensure a flawless handover and offer ongoing support, creating us one of the best office fit out companies in Dubai for timeless partnerships. </p></li>
            </ul>
          </div>
          <div className="rounded-lg overflow-hidden shadow-md">
            <Image src="/images/office-interior.png" alt="Office Process" width={600} height={400} className="w-full h-auto object-cover" />
          </div>
        </div>

        {/* 7. Regulations & Why Choose WE DO (Why Choose unchanged as requested) */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          <div className="rounded-lg overflow-hidden shadow-md">
            <Image src="/images/modern-office-interiors.png" alt="Office Regulations" width={600} height={400} className="w-full h-auto object-cover" />
          </div>
          <div className="space-y-6 text-white font-play">
            <h2 className="text-xl font-conthrax text-[#caa193] mb-4 uppercase">Office Fit-Out Regulations in Dubai</h2>
            <p>Each <b className="text-[#caa193]"><a href="https://wedointerior.ae/commercial-interior-fit-out">commercial interior fit-out in business bay</a> </b> space must comply with Dubai legalities. Approvals from accurate authorities are important before completion. As professionals, we manage all approvals, making sure compliance with elegant standards. This makes us a reliable partner for <b> interior architect office </b> level spaces and large-scale fit-outs.</p>
            
            <div className="space-y-6 text-white font-play"> <h2 className="text-xl font-conthrax text-[#caa193] mb-4"> Why Choose WE DO Interior Design & Fitout for Your Office Project </h2> <p> Creating an office interior  design that maximizes productivity and embodies your brand is at the very center of our endeavors at WE DO Interior Design & Fitout. As one of the top office interior design companies in Dubai, we are experts in office interior fit-out, office refurbishment, and office renovation with emphasis on creativity, functionality, and accuracy. Our highly acclaimed office fit-out and interior design services in Dubai cover high-end business districts such as Jumeirah lake towers, DIFC, Business Bay, and Dubai Media City, with unparalleled performance for both luxury fit-out and refurbishment schemes and contemporary commercial interiors. </p> <p> As one of the top Dubai office fit-out contractors, we combine smart solutions and ergonomic fittings to design intelligent workplaces for today's employees. With a long history of delivering excellence across Sheikh Zayed Road, Dubai South, and more, our on-time delivery guarantee makes us the preferred partner for businesses looking for office interior designers in Dubai who deliver excellence every time. </p> </div></div>
        </div>

        {/* 8. FAQs Section */}
        <div className="mb-20">
          <h2 className="text-center text-3xl font-conthrax text-[#caa193] mb-10 uppercase">8. Frequently Asked Questions (FAQs)</h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-[#caa193]/30 rounded-lg overflow-hidden">
                <button 
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full text-left p-4 bg-black text-white font-play flex justify-between items-center"
                >
                  <span className="font-bold">{faq.q}</span>
                  <span>{openFaq === index ? '-' : '+'}</span>
                </button>
                {openFaq === index && (
                  <div className="p-4 bg-zinc-900 text-zinc-300 font-play border-t border-[#caa193]/30">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 9. Call to Action */}
        <div className="text-center bg-black p-10 rounded-xl border-2 border-[#caa193] mb-10">
          <h2 className="text-2xl font-conthrax text-[#caa193] mb-6 uppercase">9. Call to Action</h2>
          <p className="text-white font-play max-w-3xl mx-auto mb-8">
           Are you on the lookout for the most outstanding <b> office interior design agency in Dubai </b> to give your office space a whole new meaning? <b> WE DO Interior Design & Fitout </b> is your top choice for complete <b> office interior design and fitout services in Dubai </b>, tailored to meet your business needs. Whether you want a complete redesign of your office space, an uplift in your work environment, or a completely new office design, our team is here for you. Contact us now for a consultation and work with one of the most reliable <b> office interior design companies in Dubai</b>.
</p>
          <a href="/contact-us" className="inline-block px-10 py-4 bg-[#caa193] text-black font-bold font-conthrax rounded-full hover:bg-white transition-colors">
            CONTACT US NOW
          </a>
        </div>
      </div>
    </section>
  );
};

export default DProjects;