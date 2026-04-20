"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";

const services = [
  {
    title: "Office Interior Design In Dubai Creek Harbour",
    description:
      "Modern office fit-out, workspace planning, and commercial interior design in Dubai.",
    bgImage: "/images/turnkey-fit-out-solutions-in-business-bay.png",
    link: "/office-interior-design-business-bay",
  },
  {
    title: "Apartment Interior Design In Dubai Creek Harbour",
    description:
      "High-quality fit-out services ensuring seamless execution from start to finish.",
    bgImage: "/images/01-living-07.jpg",
    link: "/apartment-interior-design-business-bay",
  },
  {
    title: "Villa Interior Design In Dubai Creek Harbour",
    description:
      "Interactive 3D & VR previews to visualize your space before execution.",
    bgImage: "/images/ATRD (2).webp",
    link: "/villa-interior-design-business-bay",
  },
  {
    title: "Restaurant Interior Design In Dubai Creek Harbour",
    description:
      "Bespoke furniture and styling solutions crafted for elegance & function.",
    bgImage: "/images/adbr (6).png",
    link: "/restaurant-interior-design-business-bay",
  },
];
const creekProjects = [
  {
    title: "Dubai Creek Harbour Apartment Bedroom",
    category: "Apartment Interior - Dubai Creek Harbour",
    image: "/images/dbckapt (5).png",
    link: "/dubai-creek-2-bedroom-apartment",
  },
   {
    title: "Dubai Creek Harbour Apartment Entrance",
    category: "partment Entrance - Dubai Creek Harbour",
    image: "/images/dbckapt (2).png",
    link: "/dubai-creek-2-bedroom-apartment",
  },
   {
    title: "Dubai Creek Harbour Apartment Dining Area",
    category: "Apartment Dining Area - Dubai Creek Harbour",
    image: "/images/dbckapt (8).png",
    link: "/dubai-creek-2-bedroom-apartment",
  },
   {
    title: "Dubai Creek Harbour Apartment Kitchen",
    category: "Apartment Kitchen - Dubai Creek Harbour",
    image: "/images/dbckapt (7).png",
    link: "/dubai-creek-2-bedroom-apartment",
  },
];
const AboutSection = () => {
  return (
    <section className="bg-[#000000] py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-8 lg:px-16">

        {/* Image + Content Row */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          

          <div className="w-full  text-center ">
            <h2 className="text-[#b98877] text-2xl  font-conthrax mb-4 leading-tight">
           Why Interior Design Dubai Creek Harbour Essential?
           </h2>
            <p className="text-justify text-white text-base sm:text font-play mb-6 leading-relaxed">
              Most Creek Harbour residential apartments are provided without full interiors, which makes professional design not just beneficial but exclusive for designing a livable and high-value space. Professional interior designers in Dubai ensure that everything is taken care of from the efficient layout designs of the modern residences in Dubai Creek Harbour. A well-structured interior also elevates the impact of waterfront views through smart styling and elegance, while significantly increasing both rental potential and resale value. This is exactly why property owners and investors actively search for interior companies near me and rely on reliable interior design companies in Dubai Creek Harbour to transform their apartments into fully optimized, ready-to-use spaces.</p>
               <h2 className="text-[#b98877] text-2xl  font-conthrax mb-4 leading-tight">
                Hire Interior Designer Dubai – Commercial & Residential Experts
             </h2>
           <p className="text-justify text-white text-base sm:text font-play mb-6 leading-relaxed">Searching for an interior designer Dubai Creek Harbour means you need a reliable team that can handle both design creativity and full execution. WE DO is a reliable interior designers company delivering full services specific for residential apartments, elegant homes, and commercial spaces all over Dubai. We are reputed as one of the top interior design companies in Dubai and are often selected by customers looking for interior companies near me due to our professionalism, quality materials, and high-end project management concept.
            </p>
             
              <section className="bg-[#000000] py-10">
              <div className="container mx-auto flex flex-col lg:flex-row items-center px-4 sm:px-8 lg:px-16 gap-10">
                {/* Left Side - Image */}
                <div className="w-full lg:w-1/2">
                 <Image
                    src="/images/dbckapt (9).png"
                    alt="Office Interior Design in Dubai Creek Harbour"
                    width={800}
                    height={600}
                    className="w-full h-100 rounded-lg shadow-md"
                   />
                  </div>

      

        {/* Right Side - Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-[#b98877] text-2xl sm:text-2xl font-conthrax mb-4 leading-tight">
            Why Choose WE DO Interior Design & Fitout in Creek Harbour
          </h2>

          <p className="text-white text-sm sm:text-base font-play mb-4">
           We are listed among the best interior design companies in Dubai due to its specialization in managing contemporary apartment layouts and offering full personalized services. Our professionals have knowledge about the unique needs of Dubai Creek Harbour residential apartment spaces, making sure each space is optimized for practicality and elegance. <br /><br />
          We offer fast-track completion for new handovers, placing us the top choice for investors and clients. If you are looking for an interior designer Dubai, a trusted fit out company Dubai Creek Harbour, or one of the top interior fit out companies in Dubai, our experienced craftsmen offer the best quality with specific solutions.
          </p>
    


          {/* Buttons */}
       <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
  <Link href="/gallery">
   <button className="bg-[#b98877] hover:bg-[#b88f83] text-black font-conthrax px-6 py-3 rounded-md transition duration-300">
              See Our Projects
            </button>
  </Link>

  <Link href="/contact-us">
    <button className="bg-[#b98877] hover:bg-[#b88f83] text-black font-conthrax px-6 py-3 rounded-md transition duration-300">
              Free Consultation
            </button>
  </Link>
</div>
        </div>
      </div>
       {/* Services Section */}
        <div className="text-center mt-10 mb-12">
           <h2 className="text-[#b98877] text-2xl font-conthrax mb-4 leading-tight">
            Our Interior Services in Dubai Creek Harbour
          </h2>
        </div>
        

       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
  {services.map((service, idx) => (
    <Link key={idx} href={service.link} className="block group">
      <div className="relative h-[340px] rounded-2xl overflow-hidden shadow-lg cursor-pointer">
        
        <Image
          src={service.bgImage}
          alt={service.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition" />

        <div className="absolute inset-0 z-10 flex flex-col justify-end p-6 text-white">
          <h3 className="text-md font-conthrax mb-2">
            {service.title}
          </h3>
          <p className="text-sm text-gray-200 leading-relaxed">
            {service.description}
          </p>
        </div>

      </div>
    </Link>
  ))}
</div>
      <div className="text-center mt-10">
         <h2 className="text-[#b98877] text-2xl  font-conthrax mb-4 leading-tight">
            Our Interior Design Services in Dubai Creek Harbour
          </h2>
          <p className=" text-center max-w-6xl mx-auto mt-0 md:mt-4 text-[12px] sm:text-base text-white py-2 md:py-6 font-play">
         As one of the best interior design companies in UAE, we deliver complete residential and commercial solutions designed to meet modern lifestyle and investment needs in Dubai Creek Harbour. Due to the consistent growth in this area along with high demands for properties, many property owners are on the hunt for the best interior design Dubai Creek Harbour professionals that can provide elegance along with practical designs. WE DO Interior Design & Fitout is a top interior designers company delivering expert interior design services in Dubai, specific for apartment owners, investors, and commercial customers. 
</p>
        </div>
    </section>
            
            <section className="bg-[#000000]">
      <div className="container mx-auto flex flex-col lg:flex-row items-center px-4 sm:px-8 lg:px-16 gap-10">
       
        {/* Right Side - Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
         <h3 className="text-[#b98877] text-md font-conthrax mb-4 leading-tight">
             1- Apartment Interior Design in Creek Harbour Dubai
             </h3>
          <p className="text-white text-sm sm:text-base mb-4 font-play">
           WE DO professionals of Apartment Interior Design in Creek Harbour Dubai, focusing on modern designs, innovative planning, and individualized styling. Every residential apartment is planned keeping in mind unique space usage, effective layout design for both smaller and larger apartments, and individualized furniture solutions that deal with luxury.
          </p>
             <h3 className="text-[#b98877] text-md font-conthrax mb-4 leading-tight">
             2- Turnkey Interior Design & Fit-out Services
             </h3>
              <p className="text-white text-sm sm:text-base mb-4 font-play">WE DO is one of the most reliable interior design and fit out companies in Dubai, delivering full personalized services from idea development to finishings. Our services cover design, approvals, completion, and full project management. We are among the leading interior fit out companies in Dubai, providing high-end interiors.</p>
              <h3 className="text-[#b98877] text-md font-conthrax mb-4 leading-tight">3- uxury Interior Design Dubai Creek Harbour</h3>
              <p className="text-white text-sm sm:text-base mb-4 font-play">We are professional in luxury interior design Dubai services are specific for high-end apartments and penthouses in Dubai Creek Harbour. WE DO use quality materials, personalized completion, and customized detailing to craft elegant interiors that elevate the value of each Dubai Creek Harbour residential apartment.</p>
              
        

        </div>
        
       <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h3 className="text-[#b98877] text-md font-conthrax mb-4 leading-tight">4- Furniture Packages & Airbnb Setup</h3>
              <p className="text-white text-sm sm:text-base mb-4 font-play">WE DO offers client-focused solutions covering flexible furniture packages, Airbnb furnishing setups, and planning designed for rental optimization. We offer the best service that is iconic for owners specifically for short-term rental income in modern residences in Dubai Creek Harbour, making sure faster occupancy and profitable returns.</p>
              <h3 className="text-[#b98877] text-md font-conthrax mb-4 leading-tight">5- Dubai Creek Harbour Apartment Renovation</h3>
              <p className="text-white text-sm sm:text-base mb-4 font-play">We provide full Dubai Creek Harbour Apartment Renovation solutions that cover layout elevates, interior modernization, and value enhancement. Our interior design and renovation concept gives attention to improving both elegance and ROI, creating older units competitive and valuable in the market.</p> 
              <h3 className="text-[#b98877] text-md font-conthrax mb-4 leading-tight"> 6- Commercial Interior Design in Dubai Creek Harbour</h3>
              <p className="text-white text-sm sm:text-base mb-4 font-play">Seeking an expert interior designer Dubai commercial services? WE DO craft retail stores, cafés, restaurants, and office interior designs with a deep focus on branding and practicality. We are one of the top interior companies in Dubai, offering commercial spaces that are both visually appealing and operationally exclusive.</p>
        </div>
      </div>
           
      
    </section>
          </div>
        </div>
         
        <div className="relative  mb-12 transition-transform duration-500 hover:scale-105 py-10">
                
                    <div className="block">
                      <Image
                        src="/images/dbckapt (4).png"
                      alt="Residential Interior Design"
                      width={1400}
                      height={600}
                      className="object-cover w-full h-[200px] sm:h-[330px]"
                      />
                      {/* Overlay */}
                      <div className="absolute inset-y-0 text-start right-0 w-1/2 md:w-1/3 bg-black/70 p-2 sm:p-10 flex flex-col justify-center">
                        
                        <h2 className="text-lg text-[#b98877] font-conthrax uppercase">
                         Types of Properties We Design
                        </h2>
                        <p className="text-[15px]  leading-relaxed text-gray-300 font-play overflow-hidden max-h-30 md:max-h-none transition-all duration-300 ease-in-out">
                       Each Dubai Creek Harbour residential apartment is customized based on client needs.We design all property types, including: <br />
                         <ul className="list-disc pl-5 text-[15px] leading-relaxed text-gray-300 font-play overflow-hidden max-h-30 md:max-h-none transition-all duration-300 ease-in-out">
                          <li>Studio Apartments</li>
                            <li>1 Bedroom Apartments</li>
                            <li>2–3 Bedroom Apartments</li>
                            <li>Luxury Penthouses</li>
                            <li>Waterfront Residences</li>
                            <li>Serviced Apartments</li>
                            <li>Short-Term Rental Units</li>
                          </ul>
                           

                        </p>
                      </div>
                    </div>
                  
                  {/* Vertical Line */}
                  <div className="hidden md:block absolute top-0 left-2/3 w-[2px] h- bg-gradient-to-r from-[#caa193] to-[#a0624d" />
                </div>

        {/* ================= Dubai Creek Harbour PROJECTS SECTION ================= */}
<section className="bg-[#000000] py-5">
  <div className="container mx-auto px-4 sm:px-8 lg:px-16">

    {/* Section Heading */}
    <div className="text-center mb-12">
      <h2 className="text-[#b98877] text-3xl font-conthrax mb-4 leading-tight">
        Our Projects in Dubai Creek Harbour
      </h2>
      <p className="text-gray-300 max-w-3xl mx-auto font-play">
        Discover our completed interior design and fit-out projects in Creek Harbour,
        including commercial offices, luxury Dubai Creek Harbour apartment designs, restaurants, and turnkey solutions.
      </p>
    </div>

    {/* Projects Grid */}
 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
  {creekProjects.map((project, index) => (
    <Link key={index} href={project.link} className="block group">
      <div className="relative overflow-hidden rounded-2xl shadow-lg cursor-pointer">

        <div className="relative h-[320px]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition duration-300" />
        </div>

        <div className="absolute inset-0 flex flex-col justify-end p-6 z-10 text-white">
          <h3 className="text-lg font-conthrax mb-1">
            {project.title}
          </h3>
          <p className="text-sm text-gray-300">
            {project.category}
          </p>
        </div>

      </div>
    </Link>
  ))}
</div>
    {/* Bottom CTA */}
    <div className="text-center mt-12">
      <Link href="/gallery">
        <button className="bg-[#b98877] hover:bg-[#a97463] text-black px-8 py-3 rounded-md font-conthrax transition duration-300">
          View All Projects
        </button>
      </Link>
    </div>

  </div>
</section>

{/* ================= END Creek Harbour PROJECTS SECTION ================= */}
       
        {/* ===== Interior Design for Best Buildings Section (UPDATED WITH IMAGE) ===== */}
<section className="bg-[#000000] py-10">
  <div className="container mx-auto px-4 sm:px-8 lg:px-16">
    
    <div className="flex flex-col lg:flex-row items-center gap-10">

      {/* LEFT SIDE CONTENT */}
      <div className="w-full lg:w-1/2 text-left">
        
        <h2 className="text-[#b98877] text-2xl font-conthrax leading-tight">
          Interior Design for Best Buildings in Dubai Creek Harbour
        </h2>

        <p className="mt-4 text-[12px] sm:text-base text-white font-play">
          Our experience across top buildings in Dubai Creek positions us among the top interior design companies in Dubai Creek Harbour. We provide specialized services in the best buildings in Dubai Creek Harbour, including:
        </p>

        <ul className="list-disc pl-5 mt-3 text-[15px] leading-relaxed text-gray-300 font-play">
          <li><strong className="text-[#b98877]">Creek Palace</strong> – Premium apartment interior design in Creek Palace</li>
          <li><strong className="text-[#b98877]">Moor at Creek Beach</strong> – Functional and stylish interiors</li>
          <li><strong className="text-[#b98877]">Creek Waters</strong> – High-end fit-out services in Creek Waters</li>
          <li><strong className="text-[#b98877]">Aeon Tower</strong> – Modern layouts for urban living</li>
          <li><strong className="text-[#b98877]">Address Residences</strong> – Luxury turnkey interiors</li>
        </ul>

        {/* PROCESS */}
        <h2 className="text-[#b98877] text-2xl mt-6 font-conthrax leading-tight">
          Our Interior Design Process
        </h2>

        <p className="mt-2 text-[12px] sm:text-base text-white font-play">
          Following structured process makes us one of the most reliable interior fit out companies in UAE.
        </p>

        <ul className="list-disc pl-5 mt-3 text-[15px] leading-relaxed text-gray-300 font-play">
          <li>Consultation & Requirement Analysis</li>
          <li>Concept Design & Mood Boards</li>
          <li>Space Planning & Layout Design</li>
          <li>3D Visualization</li>
          <li>Material & Furniture Selection</li>
          <li>Authority Approvals</li>
          <li>Fit-out Execution</li>
          <li>Final Styling & Handover</li>
        </ul>

      </div>

      {/* RIGHT SIDE IMAGE */}
      <div className="w-full lg:w-1/2">
        <Image
          src="/images/dubai-creek.png" // 🔁 replace with your actual image
          alt="Interior Design Dubai Creek Harbour"
          width={800}
          height={600}
          className="w-full h-[600px] object-cover rounded-lg shadow-md"
        />
      </div>

    </div>
  </div>
</section>
        
          <div className=" text-sm leading-relaxed font-play text-white">
          
            <h2 class="text-[#a366b9887752] text-2xl font-conthrax leading-tight py-5">
             Frequently asked questions (FAQs)
            </h2>
            <h3 class="text-[#b98877] text-md font-conthrax leading-tight py-5">
              1-  Do you provide interior design for Creek Palace and Creek Waters?
            </h3>
            <p>
            Yes, WE DO provides full design and fit-out solutions for all major projects in Creek Harbour.
            </p>

            <h3 class="text-[#b98877] text-md font-conthrax leading-tight py-5">
             2-  Do you offer turnkey fit-out services in Dubai Creek Harbour?
            </h3>
            <p>
            Yes, WE DO is reputed as one of the top interior design and fit out companies in Dubai delivering turnkey services.</p>

            <h3 class="text-[#b98877] text-md font-conthrax leading-tight py-5">
             3- Can you furnish my apartment for Airbnb?
            </h3>
            <p>
             Yes, we provide full furnishing and interior renovation packages in apartment for Airbnd.
            </p>

            <h3 class="text-[#b98877] text-md font-conthrax leading-tight py-5">
             4- Do you handle complete design and execution?
            </h3>
            <p>
            Yes, from consultation to completion, everything is managed in-house by We DO interior design & Fit-out.
            </p>
             <h3 class="text-[#b98877] text-md font-conthrax leading-tight py-5">
             5- Can you customize the interior design according to my style?
            </h3>
            <p>
             Absolutely, all of our designs are client-centric  we listen your requirements and deliver fully customized projects.
            </p>
             <h3 class="text-[#b98877] text-md font-conthrax leading-tight py-5">
             6- How much does interior design cost in Dubai Creek Harbour?
            </h3>
            <p>
             The interior design cost in Dubai Creek Harbour varies depending on apartment size, material selection, customization level, <br />scope of work. We are one of the best interior design companies in Dubai, delivering transparent and competitive pricing.
            </p>
             <h3 class="text-[#b98877] text-md font-conthrax leading-tight py-5">
             7- How long does an interior design project take?
            </h3>
            <p>
              Fast-track options are available for urgent projects, making us one of the most efficient interior design and fit out companies in Dubai. <br />
              1- Studio Apartment: 3–5 weeks <br />
              2- 1–2 Bedroom Apartment: 5–8 weeks <br />
              3- Full Fit-out: 8–12 weeks <br />

            </p>

             
          </div>
      </div>
      
    </section>
  );
};

export default AboutSection;
