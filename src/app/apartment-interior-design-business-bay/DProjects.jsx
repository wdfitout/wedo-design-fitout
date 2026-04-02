'use client';

import React from 'react';
import Image from 'next/image';

const textImage = {
  src: '/images/business-bay-apartment-space-planning-in-dubai.png',
  link: '/interior-design-companies-in-business-bay-dubai',
  title: 'Best Interior Design Companies In Business Bay'
};

const galleryImages = [
  { src: '/images/bba8.webp', link: '/business-bay-apartment', title: 'BUSINESS BAY APARTMENT' },
 
  
];

const DProjects = () => {
  return (
    <section className="px-6 py-5 bg-black-200">
      
      {/* Top Content Block */}
      <div className="lg:max-w-[80%] mx-auto bg-black p-6 sm:p-10 rounded shadow text-center space-y-6 mb-12">
        <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#caa193]">
        Our Apartment Interior Design Services in Business Bay
        </h2>
     <div className="space-y-4 text-sm sm:text-base font-play text-white text-left">
          <p>
            WE DO offer full apartment interior design Business Bay services specific for each type of luxury apartment in Business Bay. WE DO is the top Interior Design Company in Business Bay, specialist in crafting practical, elegant, and high quality living spaces through a well-planned design process and strong attention to details. Our experienced craftsmen deliver complete apartment interior design services in Dubai, making sure that each apartment interior design showcases elegance and modernity.
           </p>
            <h3 className="text-sm sm:text-xl md:text-sm font-conthrax tracking-widest text-[#caa193] py-2">
             Creative Design & Mood Board Creation
            </h3>
           <p className="text-sm sm:text-base leading-7 mb-4 font-play">We start each Business Bay Apartment Interior Design Dubai project with a deep artistic direction. Our experienced designers develop themes, material palettes, and cohesive colors and furniture approaches matched with your living style and the character of modern apartments in Business Bay.</p>

            <h3 className="text-sm sm:text-xl md:text-sm font-conthrax tracking-widest text-[#caa193] py-2">
            2D Layout & Space Planning
            </h3>
           <p className="text-sm sm:text-base leading-7 mb-4 font-play">
           Exclusive space planning is crucial in high-end living. We integrate each design space to enhance flow, practicality, and luxury while making sure layouts are practical and compliant within business bay dubai residential towers.
           </p>

           <h3 className="text-sm sm:text-xl md:text-sm font-conthrax tracking-widest text-[#caa193] py-2">
            3D Visualization & Material Selection
            </h3>
           <p className="text-sm sm:text-base leading-7 mb-4 font-play">
            Our 3D renderings give you permission to imagine your Modern Apartment Interiors before completion. This stage of the process refines finishes, textures, and overall design in Dubai standards, making sure clarity before going forward.
           </p>

           <h3 className="text-sm sm:text-xl md:text-sm font-conthrax tracking-widest text-[#caa193] py-2">
            Gypsum Ceilings & Lighting Design
            </h3>
           <p className="text-sm sm:text-base leading-7 mb-4 font-play">
            WE DO optimized layered lighting, ceiling features, and ambient illumination as part of our Modern Apartment Interior Fit-Out in Business Bay services. Proper lighting elevates spatial depth and upgrades the overall ambiance.
           </p>

           <h3 className="text-sm sm:text-xl md:text-sm font-conthrax tracking-widest text-[#caa193] py-2">
            Custom Joinery & Wardrobes
            </h3>
           <p className="text-sm sm:text-base leading-7 mb-4 font-play">
            We are a professional Interior Fitout Company in Business Bay, we offer personalized wardrobes, TV units, and storage services tailored to your layout. Accurate craftsmanship makes sure durability and pure execution
           </p>

           <h3 className="text-sm sm:text-xl md:text-sm font-conthrax tracking-widest text-[#caa193] py-2">
            Kitchen Design & Cabinetry
            </h3>
           <p className="text-sm sm:text-base leading-7 mb-4 font-play">
            Our kitchen interior design blends style and modernity. With stylish designs and customized cabinetry, we are improving practicality while keeping the level of sophistication in mind for Apartment interior design Dubai spaces.
           </p>

           <h3 className="text-sm sm:text-xl md:text-sm font-conthrax tracking-widest text-[#caa193] py-2">
            Bathroom Remodeling
            </h3>
           <p className="text-sm sm:text-base leading-7 mb-4 font-play">
            WE DO elevate bathrooms with high-end fittings, contemporary tiles, and well-structured layouts.Our Residential Interior Fit Out Design Dubai concept makes sure both modernity and functionality together.
           </p>
  
          <h3 className="text-sm sm:text-xl md:text-sm font-conthrax tracking-widest text-[#caa193] py-2">
            Smart Home Integration

            </h3>
           <p className="text-sm sm:text-base leading-7 mb-4 font-play">
            Technology plays a main role in Modern Apartment Interiors. We optimized lighting automation and technical controls to elevate convenience and exclusivity within your apartment.
           </p>
</div>

      </div>

      {/* Split Row – Text + Top Right Image */}
      <div className="lg:max-w-[90%] mx-auto flex flex-col lg:flex-row items-start gap-6 mb-12">
        <div className="w-full lg:w-2/3 space-y-4">
          <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#caa193]">
          Latest Apartment Interior Trends in Business Bay
          </h2>
          <p className="text-sm sm:text-base text-white text-justify font-play">
         In business bay dubai, modern apartments in Business Bay are elevating client's living style, interiors that merge luxury with practicality. Exclusive minimalism dominates, featuring clean lines, palettes with bold accents, and open kitchen visions that upgrade flow and practicality. Textured finishes such as fluted panels, marble & natural stone features, and floor-to-ceiling curtain styling add elegance, while smart lighting systems design environment and vibe efficiency. These trends showcase the modernity, urban, and waterfront living style of luxury apartments in Business Bay, making sure each apartment interior design Business Bay services project is both contemporary and long-lasting.


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
        <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-lg font-conthrax text-white py-12">
          Our Apartment Interior Design Projects In Business Bay
        </h2>
        </div>
      {/* Gallery Grid with Hover Effects */}
     
      <div className="lg:max-w-[50%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 max-w-6xl mx-auto mb-10   ">
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
          

            <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-3xl font-conthrax text-white py-12">
          Our Apartment Interior Design Process
         </h2>

        {/* Section 1: Text Left, Image Right */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          <div className="space-y-6 text-white font-play">
            
            <p>
          We are experts in apartment interior design Business Bay services and follow a well-planned design process to make sure high-end completion for luxury apartments in Business Bay and modern apartments in Business Bay.
         </p>
           
            <ul className="list-decimal pl-5 space-y-2 text-[#caa193]">
            
            <li>
            <h3 className='font-play'>Consultation & Site Evaluation</h3>
             <p className='text-white font-play'>WE DO start with a detailed site visit to acknowledge your apartment’s layout, natural light, and structural situations. This step of the process is exclusive for Business Bay Apartment Interior Design Dubai projects, giving us permission to assess the potential for space planning and practical enhancements.</p>
            </li>

             <li>
            <h3 className='font-'>Concept Development & Space Planning</h3>
             <p className='text-white font-play'>WE DO have experienced designers deliver an artistic vision matched with your living style. We craft each design space intelligently, integrating layouts for studios, 1-bedroom, 2-bedroom apartments, or luxury apartments in Business Bay. This makes sure both modernity and practicality are reflected together.</p>
            </li>

             <li>
            <h3 className='font-play'>3D Rendering & Material Approval
           </h3>
             <p className='text-white font-play'>We design detailed 3D visualizations of your modern apartment interiors. This gives permission to preview completion, colors and furniture, and layout options before moving to finishing. Each material choosing and curating element meets a high quality trend.</p>
            </li>

             <li>
            <h3 className='font-play'>Building Coordination & Documentation</h3>
             <p className='text-white font-play'>Working in business bay dubai, we cooperate with building authorities, manage approvals, and make sure compliance with all local regulations. Our professionals are among the leading interior design and fit-out companies in Business Bay, managing documentation for a seamless process.</p>
            </li>
           
            <h3 className='font-play'>Execution & Fit-Out Management</h3>
             <p className='text-white font-play'>Our specialist executes the project with accuracy, optimizing Modern Apartment Interior Fit-Out in Business Bay services, bespoke joinery, and luxury completion. From studio apartments in Executive Towers to penthouses close to the Dubai Canal, we handle each detail exclusively.</p>

             <h3 className='font-play'>Final Inspection & Handover</h3>
             <p className='text-white font-play'>When once the fit-out is finished, we do a thorough inspection to make sure each detail meets our standards. The final result is a turn-key apartment interior design ready for contemporary living, blending comfort, and practicality.
             </p>
            </ul>
              
          </div>

          <div className="rounded-lg overflow-hidden shadow-md">
            <Image
              src="/images/Our Apartment Interior Design Process.png"
              alt="Round luxury bed with fairy lights"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Section 2: Image Left, Text Right */}
        
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
           {/* last paragraph */}
           <div className="lg:max-w-[90%] mx-auto bg-black p-6 sm:p-10 rounded shadow space-y-6 mb-12">
        {/* Heading */}
       

       

        
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="rounded-lg overflow-hidden shadow-md">
            <Image
              src="/images/apartment-home-office-interior-design-business-bay.png"
              alt="Elegant blue bedroom interior"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="text-white font-play">
            <h2 className="text-xl font-conthrax text-[#caa193] mb-5">
               Why Choose WE DO for Apartment Interior Design in Business Bay
            </h2> 
            <p>
            We are the best interior design company in Business Bay, WE DO have experienced craftsmen who are skilled in Business Bay Apartment Interior Design Dubai. We deliver high quality modern apartment interiors for studios, 1- and 2-bedroom apartments, and luxury apartments in Business Bay, making sure each interior design project showcases luxury, practicality, and elegance attention to details. Our skilled designers also specialize in creating personalized layouts, hidden storage, and turn-key apartment interior design services specific to each client’s living style. 
         <br /><br />
          WE DO offer full design and build services, covering in-house joinery & carpentry, dedicated project completion, and flawless coordination with building management in business bay dubai. With a seamless finishing process and commitment to on time delivery, WE DO make sure that each apartment interior design Business Bay services project is completed meticulously, resulting in modern apartment interior fit-out in Business Bay that blends modernity, style, and innovation.</p>
              
          </div>
          
        </div>
        
      </div>
       <div className="lg:max-w-[80%] mx-auto flex flex-col lg:flex-row items-start gap-6 mb-12">
        <div className="w-full  space-y-4">
          <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#caa193]">
         Types of Apartments We Design in Business Bay
          </h2>
          <p className="text-sm sm:text-base text-white text-justify font-play">
         WE DO is a top Interior Design Company in Business Bay, offering the best apartment interior design Business Bay services for all types of apartments, from compact studios to modern penthouses. We have experienced interior designers specializing in designing Modern Apartment Interiors that blend practicality, and high quality craftsmanship all over business bay dubai.
          </p>

           <h3 className="text-sm sm:text-xl md:text-sm font-conthrax tracking-widest text-[#caa193] py-2">
          Studio Apartment Interior Design
          </h3>
          <p className="text-sm sm:text-base text-white text-justify font-play">
            Compact studio apartments, such as those in Executive Towers or The Horizon, need intelligent space planning. Our Apartment interior design Dubai vision makes sure that even the tiniest apartments feel welcoming, organized, and luxurious, without compromising functionality or elegance.
         </p>

           <h3 className="text-sm sm:text-xl md:text-sm font-conthrax tracking-widest text-[#caa193] py-2">
          1 Bedroom Apartment Interior Design
          </h3>
          <p className="text-sm sm:text-base text-white text-justify font-play">
          One-bedroom apartments close to Bay Avenue or Marina Gate desire a balance of privacy and sophistication. Using intelligent colors and furniture, functional storage, and exclusive layouts, we design Business Bay Apartment Interior Design Dubai services that are innovative yet modern.
         </p>

          <h3 className="text-sm sm:text-xl md:text-sm font-conthrax tracking-widest text-[#caa193] py-2">
          2 Bedroom Apartment Interior Design
          </h3>
          <p className="text-sm sm:text-base text-white text-justify font-play">
          Two-bedroom apartments, such as those in Executive Towers or Canal Residence, are ideal for families or experts. Our apartment interior design and renovation services in Dubai give attention to practical zoning, open living spaces, and well-structured bedroom spaces.
         </p>

          <h3 className="text-sm sm:text-xl md:text-sm font-conthrax tracking-widest text-[#caa193] py-2">
          Luxury & Penthouse Interior Design
          </h3>
          <p className="text-sm sm:text-base text-white text-justify font-play">
           Luxury apartments in Business Bay and penthouses, such as those in The Oberoi Residences, Bay Square Towers, or canal-facing high-rises near Dubai Canal, need elegant completion and personalized detailing. Our Turn-key Apartment Interior Design services cover marble accents, warm lighting, personalized joinery, and stylish home integration.
         </p>

  <h2 className="text-lg md:text-xl font-conthrax text-[#caa193]">
    FAQs – Apartment Interior Design in Business Bay
  </h2>

  <h3 className="text-base md:text-sm font-conthrax text-[#caa193]">
   What is covered in apartment interior design solutions in Business Bay?
  </h3>
  <p p className="text-sm sm:text-base text-white text-justify font-play">
     Apartment interior design Business Bay services exclusively cover idea development, 2D and 3D layouts, space planning, premium material selection, personalized joinery, kitchen and bathroom design, lighting, decorative execution, stylish home integration, and complete turn-key apartment interior design execution for studios, 1- and 2-bedroom apartments, and luxury apartments in Business Bay.
  </p>

  <h3 className="text-base md:text-sm font-conthrax text-[#caa193]">
    How long does an apartment interior fit out take?
  </h3>
  <p p className="text-sm sm:text-base text-white text-justify font-play">
    The duration of apartment interior fit out in Dubai varies, and different projects take about 6-12 weeks depending on the complexity of finishes.
  </p>

  <h3 className="text-base md:text-sm font-conthrax text-[#caa193]">
    Do apartments in Business Bay need renovation approvals?
  </h3>
  <p p className="text-sm sm:text-base text-white text-justify font-play">
    Yes, it is required, especially when making major renovations, as approvals from management are required. This is efficiently done through professional interior fit-out companies in Business Bay.
  </p>

  <h3 className="text-base md:text-sm font-conthrax text-[#caa193]">
    Can small studio apartments be fully customized?
  </h3>
  <p p className="text-sm sm:text-base text-white text-justify font-play">
    Yes, it is possible. This is achieved through effective space planning, furniture, and bespoke joinery, making even small modern studio apartments in Business Bay fully personalized and innovative spaces. </p>

  <h3 className="text-base md:text-sm font-conthrax text-[#caa193]">
   What styles of interior design are common in Business Bay apartments?
  </h3>
  <p p className="text-sm sm:text-base text-white text-justify font-play">
   They are modern, and luxury minimalist interiors are common, especially in interior designs for luxury apartments in Business Bay.</p>
</div>
        </div>
    </section>
  );
};



export default DProjects;
