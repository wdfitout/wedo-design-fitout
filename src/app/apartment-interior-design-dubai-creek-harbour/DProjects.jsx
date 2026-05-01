'use client';

import React from 'react';
import Image from 'next/image';

const textImage = {
  src: '/images/contemporary-and-modern-office-interior-design.png',
  link: '/office-interior-design-trends-in-business-bay',
  title: 'Interior Design Trends In Business Bay'
};

const galleryImages = [
  { src: '/images/meby (6).webp', link: '/business-bay-travel-agency', title: 'MEBY BUSINESS BAY TRAVEL AGENCY' },
  { src: '/images/startech (3).webp', link: '/business-bay-office-fit-out', title: 'STARTECH BUSINESS BAY OFFICE FIT-OUT' },
 
  
];

const DProjects = () => {
  return (
    <section className="px-6 py-5 bg-black-200">
      
      {/* Top Content Block */}
      <div className="lg:max-w-[80%] mx-auto bg-black p-6 sm:p-10 rounded shadow text-center space-y-6 mb-12">
        <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#caa193]">
         About Office Interior Design in Business Bay
        </h2>
 <div className="space-y-4 text-sm sm:text-base font-play text-white text-left">
  <p>
   The need for <b className="text-[#caa193]"><a href="https://wedointerior.ae/commercial-interior-design-dubai">commercial interior design Dubai</a></b> has developed significantly as more companies design offices in Business Bay. We are one of the most luxurious commercial hubs in Dubai, the area features premium towers, contemporary office buildings, and corporate headquarters that need experienced office interior fit out companies in Dubai to craft practical workspaces.
  </p>

  <p>
   Businesses compete not only in solutions but also in workplace expertise. This is why firms rely on professional interior design consultants in Business Bay and reliable interior fit out consultants in Dubai to design offices that showcase elegance and efficiency. Contemporary Office interior design UAE focuses on well-structured design, employee growth, and branding. If it is a corporate office, a startup hub, or a consulting company, a professional office interior decorator UAE makes sure that the work space elevates productivity and gives a strong impression on clients and employees.
  </p>
  <p> <b className="text-[#caa193]"><a href="https://wedointerior.ae/business-bay-travel-agency"></a></b>Premium office buildings in Business Bay require expert Building & Interior Design solutions, covering stylish layouts, collaborative zones, and contemporary design elements that match with global office standards.</p>
</div>

      </div>

      {/* Split Row – Text + Top Right Image */}
      <div className="lg:max-w-[90%] mx-auto flex flex-col lg:flex-row items-start gap-6 mb-12">
        <div className="w-full lg:w-2/3 space-y-4">
          <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#caa193]">
          Office Interior Design Trends in Business Bay
          </h2>
          <p className="text-sm sm:text-base text-white text-justify font-play">
          The contemporary space is developing continuously, and <b className="text-[#caa193]"><a href="https://wedointerior.ae/office-interior-design-trends-in-business-bay">Office Interior Design Trends in Business Bay</a></b> showcase this change. Companies today give attention to designing innovative and comfortable workspaces rather than cultural office layouts. Contemporary offices cover collaborative areas where colleagues can brainstorm and deliver ideas, along with peaceful spaces created for the best work. Eco-friendly materials and solutions are becoming most famous in commercial interior design Dubai, supporting businesses to remove environmental impact while balancing sophisticated aesthetics. A famous trend in Modern Office Interior Design is the addition of stylish technology, covering automated lighting, digital meeting rooms, and thoughtful workspace systems that enhance efficiency. Biophilic design, which integrates organic elements such as greenery and natural light, is also importantly used in office trends in Business Bay to enhance employee well-being and developments .
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
          Our Office Interior Design Projects In Business Bay
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
          Our Office Interior Design Services in Business Bay
        </h2>

        {/* Section 1: Text Left, Image Right */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          <div className="space-y-6 text-white font-play">
            
            <p>
            We are a <b className="text-[#caa193]"><a href="https://wedointerior.ae/">top interior design and fit-out company in Dubai</a></b>, WE DO Interior Design & Fitout offers full workspace redefining solutions for businesses.

            </p>
           
            <ul className="list-decimal pl-5 space-y-2 text-[#caa193]">
            
            <li>
            <h3 className='font-play'>Office Space Planning</h3>
             <p className='text-white font-play'> Exclusive planning is the base of premium office fit out design. Our experienced team analyzes process, departments, and office functions to design layouts that elevate productivity and space utilization in Business Bay’s work space towers.</p>
            </li>

             <li>
            <h3 className='font-'>Corporate Office Interior Design</h3>
             <p className='text-white font-play'> Our commercial office design in Dubai solutions focus on designing efficient workspaces, meeting rooms, reception areas, and collaborative zones that showcase your company’s brand personality.</p>
            </li>

             <li>
            <h3 className='font-play'>Office Fit-Out & Renovation</h3>
             <p className='text-white font-play'>We offer full office fitout in Dubai, including design, construction, and final handover. As many years of expertise in interior fit out contractors, we make sure each office project matches Dubai trends and regulations.</p>
            </li>

             <li>
            <h3 className='font-play'>Workspace Optimization</h3>
             <p className='text-white font-play'> Contemporary offices need usability and aesthetic ambiance. Our Fit-out Services for Office Work Space cover well-planned layouts, improving lighting, integrating collaborative zones, and creating smart office solutions.</p>
            </li>
         
            </ul>
               <p>Companies seeking office fit out Dubai, office interior fit out Dubai, or dubai fitout services based on our expertise to provide high-end results.</p>
          </div>

          <div className="rounded-lg overflow-hidden shadow-md">
            <Image
              src="/images/startech (2).webp"
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
        <div className="text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-conthrax text-[#caa193] mb-2">
           Office Design Styles for Business Bay Offices
          </h2>
          
          <p className="font-play text-sm sm:text-base text-white text-start py-2">
         Businesses presented in Business Bay operate across industries such as technology, real estate, and consulting, which means each commercial space needs a premium approach to office interior design Dubai. Experienced office interior design companies in Business Bay Dubai focus on designing environments that showcase a company’s brand personality while supporting development and collaboration. One of the important and popular concepts in Modern Office Interior Design is the contemporary corporate layout, which features pure architectural lines, warm color palettes, and open-plan layouts that enhance efficient work process and communication. Also a widely used approach in interior designs in Business Bay is minimalist commercial space design, where sophistication, practicality, and clutter-free layouts design calm and well-planned environments for workers. <br /> <br />
         Modern executive work spaces are tailored for corporate leaders and financial institutions. These spaces integrate high-end materials, personalized furniture, and flawless finishes that showcase expertise and authority. Various interior design consultants in Business Bay also craft aesthetic workspaces for startups and functional companies, adding structured layouts, collaborative areas, and premium design elements that mesmerize creativity. These evolving office interior design trends in Business Bay showcase the requirements of contemporary businesses, supporting companies to build enduring work ambiance through well-planned commercial interior design Dubai and strategic commercial designing.
</p>
          
        </div>

       

        
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="rounded-lg overflow-hidden shadow-md">
            <Image
              src="/images/meby (7).webp"
              alt="Elegant blue bedroom interior"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="text-white font-play">
            <h2 className="text-xl font-conthrax text-[#caa193]">
              Our Office Interior Design Process
            </h2>
            <p>
              As a reliable Fit-Out Company in Business Bay Dubai, our layouts process ensures flawless project execution from ideation to final execution.
            </p>
              <h3 className="text-sm font-conthrax text-[#caa193] mt-2 mb-2">Consultation</h3> 
             <p>We start by understanding your company’s requirements, office requirements, and brand concept.</p>
           <h3 className="text-sm font-conthrax text-[#caa193]  mt-2 mb-2 ">Concept Design </h3>
           <p>Our experienced designers design practical concepts and well-structured layouts for Modern Office Interior Design.</p>
            <h3 className="text-sm font-conthrax text-[#caa193]  mt-2 mb-2">3D Visualization</h3>
            <p>Exclusive 3D designs support space owners to visualize the complete workspace before construction starts.</p>
            <h3 className="text-sm font-conthrax text-[#caa193]  mt-2 mb-2">Material Selection</h3>
            <p>We choose premium materials and seamless finishes to make sure durability and elegance.</p>
             <h3 className="text-sm font-conthrax text-[#caa193]  mt-2 mb-2">Fit-Out Execution</h3>
             <p>Our professional interior fit out contractors manage the full interior fit out process.</p>
             <h3 className="text-sm font-conthrax text-[#caa193] mt-2 mb-2 ">Final Delivery</h3>
             <p>The completed workspace is offered ready for operations, aligning with all commercial standards.</p>
          </div>
          
        </div>
        
      </div>
       <div className="lg:max-w-[80%] mx-auto flex flex-col lg:flex-row items-start gap-6 mb-12">
        <div className="w-full  space-y-4">
          <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#caa193]">
          Why Businesses in Business Bay Choose Us
          </h2>
          <p className="text-sm sm:text-base text-white text-justify font-play">
         Businesses looking for <b className="text-[#caa193]"><a href="https://wedointerior.ae/interior-design-company-business-bay">interior design companies in Business Bay Dubai</a></b> or a <b className="text-[#caa193]"><a href="https://share.google/vaHSTzxMLd9gEt7A9">trusted office interior design company in Business Bay </a></b> select WE DO Interior Design & Fitout because of our experiences, dedication, and personalized solutions. Our experienced designers and skilled interior fit out consultants in Dubai who are expert in Office Design & Commercial Fit-Out in Dubai. We have knowledge about Dubai’s commercial regulations, building trends, and workspace needs, allowing us to offer exclusive projects for companies placed in Business Bay and nearby places. WE DO is one of the reliable business bay interior design companies, we offer full design and fit-out solutions from ideation to finishes, creating us the best  business bay office fit out Company in Dubai for contemporary commercial spaces.
          </p>
          <h3 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#caa193]">
         Nearby Areas We Serve
          </h3>
          <p className="text-sm sm:text-base text-white text-justify font-play">Our interior design services in Business Bay also goes beyond to several nearby workspace districts and key business places across Dubai. These cover Downtown Dubai, Dubai International Financial Centre, Dubai Design District, Al Wasl, Jumeirah, and Sheikh Zayed Road. Businesses seeking interior design companies in Sheikh Zayed Road, interior companies in Business Bay, or the best fit out companies in Business Bay can depend on our professional team to offer premium office design and fit-out solutions all over these iconic locations.
         </p>
         
  <h2 className="text-lg md:text-xl font-conthrax text-[#caa193]">
    FAQs – Office Interior Design in Business Bay
  </h2>

  <h3 className="text-base md:text-sm font-conthrax text-[#caa193]">
    How much does office interior design cost in Business Bay?
  </h3>
  <p p className="text-sm sm:text-base text-white text-justify font-play">
    The cost of office interior design Dubai varies on office areas, design difficulty, and premium materials used. Experienced office fit out Dubai projects typically cover design, planning, and construction costs.
  </p>

  <h3 className="text-base md:text-sm font-conthrax text-[#caa193]">
    How long does an office fit-out project take?
  </h3>
  <p p className="text-sm sm:text-base text-white text-justify font-play">
    Many <b className="text-[#caa193]"><a href="https://wedointerior.ae/business-bay-office-fit-out">Office Fit Outs in Business Bay</a></b>, Dubai take between 4 to 8 weeks relying on the process of the project.
  </p>

  <h3 className="text-base md:text-sm font-conthrax text-[#caa193]">
    Do you handle approvals for office fit-out in Dubai?
  </h3>
  <p p className="text-sm sm:text-base text-white text-justify font-play">
    Yes. As experienced interior fit out consultants in Dubai, we handle approvals, documentation, and compliance with building regulations.
  </p>

  <h3 className="text-base md:text-sm font-conthrax text-[#caa193]">
    Can you redesign small offices in Business Bay?
  </h3>
  <p p className="text-sm sm:text-base text-white text-justify font-play">
    Yes. Our commercial office design in Dubai solutions cover small office layouts, coworking spaces, and corporate headquarters.
  </p>

  <h3 className="text-base md:text-sm font-conthrax text-[#caa193]">
    Do you provide turnkey office fit-out services?
  </h3>
  <p p className="text-sm sm:text-base text-white text-justify font-play">
    Yes. We deliver full Office Design & Commercial Fit-Out in Dubai, including design, materials, construction, and final delivery.
  </p>
</div>
        </div>
    </section>
  );
};



export default DProjects;
