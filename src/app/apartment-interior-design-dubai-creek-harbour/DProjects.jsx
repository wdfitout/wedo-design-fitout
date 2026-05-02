'use client';

import React from 'react';
import Image from 'next/image';

const textImage = {
  src: '/images/contemporary-and-modern-office-interior-design.png',
  link: '/office-interior-design-trends-in-business-bay',
  title: 'Interior Design Trends In Business Bay'
};

const galleryImages = [
  { 
  src: '/images/dbckapt1.webp', 
  link: '/dubai-creek-2-bedroom-apartment', 
  title: 'DUBAI CREEK 2 BEDROOM APARTMENT INTERIOR' 
},
{ 
  src: '/images/address-harbour-point-master-bedroom-interior-design-dubai-creek-harbour.png', 
  link: '/emaar-harbour-point-apartment-dubai', 
  title: 'EMAAR HARBOUR POINT APARTMENT' 
},
 
  
];

const DProjects = () => {
  return (
    <section className="px-6 py-5 bg-black-200">
      
      {/* Top Content Block */}
      <div className="lg:max-w-[80%] mx-auto bg-black p-6 sm:p-10 rounded shadow text-center space-y-6 mb-12">
        <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#caa193]">
         Why Apartment Interior Design in Dubai Creek Harbour Matters?
        </h2>
 <div className="space-y-4 text-sm sm:text-base font-play text-white text-left">
  <p>
   Designing an apartment interior design in Dubai Creek Harbour is more about planning than just designing; the right planning can do wonders not only for your apartment but also for your lifestyle. These apartments are renowned for their spacious designs, fabulous views, and modern architectural style; therefore, <a href="/apartment-interior-design-dubai" className="text-[#caa193]">
     apartment interior design in Dubai </a>  is essential for getting the best out of them.
  </p>

  <p>
   An effective interior  will ensure efficient use of natural light, smooth transition between indoors and outdoors, and a modern style. WE DO is one of the best interior design companies in UAE, understands how to match interior designs with Industry trends while adding a distinctive touch. Our Professional Interior Design Dubai Creek Harbour Dubai services in Dubai make sure that each apartment showcases luxury, practicality, and timeless value.
  </p>
  </div>

      </div>

      {/* Split Row – Text + Top Right Image */}
      <div className="lg:max-w-[90%] mx-auto flex flex-col lg:flex-row items-start gap-6 mb-12">
        <div className="w-full lg:w-2/3 space-y-4">
          <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#caa193]">
          Our Apartment Interior Design Services in Dubai Creek Harbour
          </h2>
          <ul className=" space-y-2 text-[#caa193]">
            
            <li>
            <h3 className='font-play'>Luxury Apartment Interior Design</h3>
             <p className='text-white font-play'> Our apartment interior services focus on quality materials, textures, and bespoke detailing. Our interior in Dubai provide <a href="/modern-apartment-interior-design" className="text-[#caa193]">
     luxury apartment interior design ideas in Dubai </a>  with fine finishing, including marble and warm lighting options.</p>
            </li>

             <li>
            <h3 className='font-'>Small Apartment Space Optimization</h3>
             <p className='text-white font-play'> For studio apartment interior design , we craft intelligent storage services and multifunctional spaces. Our concept makes sure that even smaller apartments feel open, exclusive, and inspiring.</p>
            </li>

             <li>
            <h3 className='font-play'>Turnkey Interior Fit-Out Services</h3>
             <p className='text-white font-play'>WE DO is one of the top <a href="/fit-out-company-dubai" className="text-[#caa193]">
     fit out companies in dubai,</a>  offering full turn-key apartment interior design services, from ideation to completion. Our services cover design, material sourcing, and full project finishings.</p>
            </li>

             <li>
            <h3 className='font-play'>Custom Furniture & Joinery</h3>
             <p className='text-white font-play'> We design and fabricate custom-made wardrobes, kitchens, and furniture to fit each location. Our team of experts, Dubai Apartment Interior Design Contractors, guarantees precision and excellence in all details.</p>
            </li>
         
            </ul>
         
          
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
          Our Interior Design Projects In Dubai Creek Harbour
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
         Our Design Approach
        </h2>

        {/* Section 1: Text Left, Image Right */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          <div className="space-y-6 text-white font-play">
            
           
           
            <ul className="list-decimal pl-5 space-y-2 text-[#caa193]">
            
            <li>
            <h3 className='font-play'> Consultation & Space Evaluation</h3>
             <p className='text-white font-play'> The first step we undertake in every apartment interior design project is consulting extensively to determine the idea and needs of the client. During this stage, we conduct an intelligent assessment of the layout of the Dubai Creek Harbour Apartment to find ways to improve the project.</p>
            </li>

             <li>
            <h3 className='font-'>Concept Development & Mood Boards</h3>
             <p className='text-white font-play'> Once the needs are clear, we jump into idea development. Here, we craft layout styling, well-structured strategies, and mood boards that explain the artistic direction of the modern apartment design interior. This phase makes sure clarity and alignment before stepping forward.</p>
            </li>

             <li>
            <h3 className='font-play'>3D Visualization & Design Preview</h3>
             <p className='text-white font-play'>WE DO craft high-quality 3D visualizations that deliver the apartment interior design Dubai Creek Harbour vision to real life. Clients can explore their future space in a realistic format, giving them permission to check design elements before finishing begins.</p>
            </li>

             <li>
            <h3 className='font-play'> Material Selection & Finishing Choices</h3>
             <p className='text-white font-play'> Material selection is a crucial phase where we craft finishes based on elegance, durability, and practicality. Each choice matches the quality apartment interior design in Dubai standards to make sure timeless sophistication and quality.</p>
            </li>

             <li>
            <h3 className='font-play'> Fit-Out Execution & Construction</h3>
             <p className='text-white font-play'> We are one of the best <a href="/apartment-interior-design-dubai-creek-harbour" className="text-[#caa193]">
     residential fit out companies in dubai,</a>  we handle full Fit Out Works of Apartment in dubai with accuracy. Our professionals ensure seamless completion, quality craftsmanship, and strict adherence to space timelines.</p>
            </li>

             <li>
            <h3 className='font-play'> Styling & Final Handover</h3>
             <p className='text-white font-play'> The last phase involves integrating and detailing, where furniture should be placed, lighting, and décor elements are elegantly arranged. Each Creek Harbour Residential Apartment is offered fully elegant, ready for immediate use.</p>
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
          Designing for Dubai Creek Harbour Lifestyle
          </h2>
          
          <p className="font-play text-sm sm:text-base text-white text-start py-2">
        Dubai Creek Harbour showcases a living style that is defined by sophistication, nature, and urban elegance. Crafting interiors here needs a deep knowledge of its ambiances and architectural identity. Our concept of interior for apartments gives attention to integrating waterfront elements into the design.
</p>
 <p className="font-play text-sm sm:text-base text-white text-start py-2">
         Large windows are raised without many details to deal with view issues, while color schemes are mesmerized by natural colors and the skyline.  Outdoor spaces like the balcony are made to be extensions of the living spaces, creating perfect indoor-outdoor flow experiences. Whether it’s an overcrowded dubai living room or a tranquil bedroom, all elements are perfectly chosen to show the environment.
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
             Types of Apartments We Design
            </h2>
            
              <h3 className="text-sm font-conthrax text-[#caa193] mt-2 mb-2">Studio Apartments</h3> 
             <p>Our studio apartment interior design services give attention to maximizing space while handling style. Elegant designs and functional furniture create a perfect and unique ambience.</p>
           <h3 className="text-sm font-conthrax text-[#caa193]  mt-2 mb-2 ">One Bedroom Apartments </h3>
           <p>In One Bedroom Apartments, our interiors combine luxury and functionality. The designs are specific to cater for the needs of modern living.</p>
            <h3 className="text-sm font-conthrax text-[#caa193]  mt-2 mb-2">Two Bedrooms and Three Bedrooms Apartments</h3>
            <p>  <a href="/dubai-creek-2-bedroom-apartment" className="text-[#caa193]">
     Two Bedrooms and Three Bedrooms Apartments</a>  give us more flexibility in designing interiors. We craft well-structured zones for living, dining, and relaxation, making sure a flawless flow overall the space.</p>
            <h3 className="text-sm font-conthrax text-[#caa193]  mt-2 mb-2">Luxury Waterfront Apartments</h3>
            <p>Quality Apartment at Dubai Creek Harbour projects are crafted with high-end completion and personalized elements. These interiors showcase meticulous design and sophistication at each level.</p>
             
          </div>
          
        </div>
        
      </div>
       <div className="lg:max-w-[80%] mx-auto flex flex-col lg:flex-row items-start gap-6 mb-12">
        <div className="w-full  space-y-4">
          <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#caa193]">
         Popular Buildings and Communities in Dubai Creek Harbour
          </h2>
          <p className="text-sm sm:text-base text-white text-justify font-play">
         Dubai Creek Harbour is a comfort place to some of the most iconic residential developments. We have many years of experience including crafting apartments in communities such as Address Harbour Point, Creek Rise, Creek Edge, Harbour Views, and The Cove.
          </p>
           <p className="text-sm sm:text-base text-white text-justify font-play">
         Each of these developments features contemporary architecture and quality living standards, creating them ideal for personalized apartment interior design ideas. Our interior design matches the best characteristics of each building while managing a consistent level of exclusivity.
                   </p>
                   <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#caa193]">
        Why Choose WE DO Interior Design & Fitout
          </h2>
          <p className="text-sm sm:text-base text-white text-justify font-play">
        WE DO is reputed as one of the best interior companies near me by delivering a combination of elegance, technical expertise, and client-focused services. Our specialization in apartment interior design in Dubai gives us permission to offer spaces that are both visually striking and highly practical.
          </p>
           <p className="text-sm sm:text-base text-white text-justify font-play">
         We are among the <a href="/apartment-interior-design-dubai-creek-harbour" className="text-[#caa193]">
     leading interior design firms in Dubai.</a>  We offer full services ensuring that our clients have an impeccable experience. Our interior design solutions are not based on templates but are rather tailored according to individual preference and needs.
With a high reputation among fit out companies in dubai, we give importance to quality, accuracy, and timely handover. From ideation to finishings, our approach is to exceed expectations and craft interiors that truly reputed.
                   </p>
         
         
  <h2 className="text-lg md:text-xl font-conthrax text-[#caa193]">
    FAQs 
  </h2>

  <h3 className="text-base md:text-sm font-conthrax text-[#caa193]">
    What is the cost of designing an apartment interior in Dubai Creek Harbour?
  </h3>
  <p p className="text-sm sm:text-base text-white text-justify font-play">
    It differs based on the dimensions, level of intricacy of the design, and materials to be used. Projects that are luxurious and those that offer a turn-key apartment interior design services demand more money.
      </p>

  <h3 className="text-base md:text-sm font-conthrax text-[#caa193]">
    What is the duration of the fit-out process?
  </h3>
  <p p className="text-sm sm:text-base text-white text-justify font-play">
   
It is dependent on the extent of the work involved. The usual duration of Fit Out Works of Apartment in dubai can range from a few weeks to a few months.
  </p>

  <h3 className="text-base md:text-sm font-conthrax text-[#caa193]">
    Do you offer turn-key solutions?
  </h3>
  <p p className="text-sm sm:text-base text-white text-justify font-play">
    Certainly. We offer turn-key apartment interior design services, covering design, execution, and final handover.
      </p>

  <h3 className="text-base md:text-sm font-conthrax text-[#caa193]">
    Can you effectively design small apartments?
  </h3>
  <p p className="text-sm sm:text-base text-white text-justify font-play">
    Definitely. Our skills in studio apartment interior design ensure maximum utilization of space.
      </p>

  <h3 className="text-base md:text-sm font-conthrax text-[#caa193]">
   Do you take care of approvals?
  </h3>
  <p p className="text-sm sm:text-base text-white text-justify font-play">
    Yes, as experienced Dubai Apartment Interior Design Contractors, we manage all necessary approvals and compliance requirements.
  </p>
</div>
        </div>
    </section>
  );
};



export default DProjects;
