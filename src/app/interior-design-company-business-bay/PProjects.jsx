"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";

const services = [
  {
    title: "Luxury Interior Design",
    description:
      "Bespoke residential & villa design tailored to your lifestyle and vision.",
    bgImage: "/images/bba.png",
  },
  {
    title: "Turnkey Fit-Out Solutions",
    description:
      "High-quality fit-out services ensuring seamless execution from start to finish.",
    bgImage: "/images/01-living-07.jpg",
  },
  {
    title: "3D Visualization & VR",
    description:
      "Interactive 3D & VR previews to visualize your space before execution.",
    bgImage: "/images/ATRD (2).webp",
  },
  {
    title: "Custom Furniture & Styling",
    description:
      "Bespoke furniture and styling solutions crafted for elegance & function.",
    bgImage: "/images/adbr (6).png",
  },
];

const AboutSection = () => {
  return (
    <section className="bg-[#f8f8f8] py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-8 lg:px-16">

        {/* Image + Content Row */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          

          <div className="w-full  text-center ">
            <h2 className="text-[#c68b4e] text-2xl  font-conthrax mb-4 leading-tight">
            PROFESSIONAL INTERIOR DESIGN SERVICES IN BUSINESS BAY
           </h2>
            <p className="text-justify text-gray-700 text-base sm:text font-play mb-6 leading-relaxed">
              As a leading interior design company in Business Bay, we offer services for both commercial 
              and residential projects. Our services related to office interior design Business Bay help 
              the businesses in designing a modern and productive space. For commercial businesses, our 
              services of commercial interior design Business Bay, such as retail outlets, restaurants, 
              and hotels, ensure that every project is visually attractive and functional.
              <br /><br />
               <h3 className="text-[#c68b4e] text-md font-conthrax mb-4 leading-tight">
                COMPREHENSIVE SOLUTIONS FOR HOMES AND BUSINESSES
             </h3>
              For our residential clients, our apartment interior design Business Bay services helps in 
              designing homes that are comfortable, stylish and modern. We combine custom furniture and 
              luxurious materials to suit the lifestyle of our clients. Our renovation services in 
              Business Bay upgrade or renovate the existing spaces with minimal disturbance.
              With our creative and technical skills, we are known as one of the best interior fit 
              out contractors Business Bay and interior design and fit out companies in Dubai, with 
              projects that reflect quality, style, and attention to detail.
            </p>
             
              <section className="bg-[#f8f8f8] py-10">
              <div className="container mx-auto flex flex-col lg:flex-row items-center px-4 sm:px-8 lg:px-16 gap-10">
                {/* Left Side - Image */}
                <div className="w-full lg:w-1/2">
                 <Image
                    src="/images/startech (3).webp"
                    alt="Office Interior Design in Business Bay Dubai"
                    width={800}
                    height={600}
                    className="w-full h-100 rounded-lg shadow-md"
                   />
                  </div>

      

        {/* Right Side - Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-[#c68b4e] text-2xl sm:text-2xl font-conthrax mb-4 leading-tight">
            Office Interior Design and Fit-Out in Business Bay

          </h2>

          <p className="text-gray-700 text-sm sm:text-base font-play mb-4">
            The commercial towers in Business Bay have the most splendid offices, startups, and multinational companies in Dubai. Our office interior design Business Bay services are based on delivering spaces that are functional,motivating and matching with the standard corporate environment in Dubai.
          </p>
         <h3 className="text-[#c68b4e] text-md font-conthrax mb-4 leading-tight">
                COMPREHENSIVE SOLUTIONS FOR HOMES AND BUSINESSES
             </h3>
          <p className="text-gray-700 text-sm sm:text-base mb-4 font-play">
            We oversee all the details involved in office fit-outs, such as space planning, furniture, lighting design, and technology. As professional offices fit out contractors in Dubai, we also handle DCD approvals and authority approvals Dubai to ensure that everything goes smoothly. 
            Other than  Business Bay, our office interior design projects also cover the nearby areas of DIFC and Downtown Dubai, which means that all businesses in the main commercial areas of Dubai get to enjoy our expertise. 
          </p>


          {/* Buttons */}
       <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
  <Link href="/gallery">
    <button className="border border-black px-6 py-3 text-black font-medium hover:bg-[#193c38] hover:text-white transition">
      See Our Projects
    </button>
  </Link>

  <Link href="/contact-us">
    <button className="border border-black px-6 py-3 text-black font-medium hover:bg-[#193c38] hover:text-white transition">
      Free Consultation
    </button>
  </Link>
</div>
        </div>
      </div>
       {/* Services Section */}
        <div className="text-center mt-10 mb-12">
           <h2 className="text-[#c68b4e] text-2xl font-conthrax mb-4 leading-tight">
            Our Interior Services in Business Bay
          </h2>
        </div>
        

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="relative h-[340px] rounded-2xl overflow-hidden group shadow-lg"
            >
              {/* Background Image */}
              <Image
                src={service.bgImage}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition" />

              {/* Content */}
              <div className="absolute inset-0 z-10 flex flex-col justify-end p-6 text-white">
                <h4 className="text-md font-conthrax mb-2">
                  {service.title}
                </h4>
                <p className="text-sm text-gray-200 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
            
          ))}
        </div>
      <div className="text-center mt-10">
         <h2 className="text-[#c68b4e] text-2xl  font-conthrax mb-4 leading-tight">
            Turnkey Fit-Out and Design & Build Solutions
          </h2>
          <p className=" text-center max-w-6xl mx-auto mt-0 md:mt-4 text-[12px] sm:text-base text-black-300 py-2 md:py-6 font-play">
          At WE DO Interior Design & Fitout, we offer full-service turnkey fit out Business Bay services for our clients who are looking for all in one experience. As a reputable design and build company Dubai, we oversee all aspects of the process, from the first consultation and design concept to the approvals from the authorities Dubai, through to completion and delivery. Our end-to-end process ensures a smooth, efficient, and high-quality experience at all times. Our clients can take advantage of our knowledge in interior design and fit out companies in Dubai.

            </p>
        </div>
    </section>
            
            <section className="bg-[#f8f8f8] py-10">
      <div className="container mx-auto flex flex-col lg:flex-row items-center px-4 sm:px-8 lg:px-16 gap-10">
       

      

        {/* Right Side - Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-[#c68b4e] text-2xl sm:text-2xl font-conthrax mb-4 leading-tight">
            Apartment and Luxury Interior Design in Business Bay

          </h2>

          <p className="text-gray-700 text-sm sm:text-base font-play mb-4">
            Business Bay is known for its luxury residential properties, and our apartment interior design in Business Bay Dubai services are designed to provide you with luxurious, comfortable, and contemporary living spaces. We are experts in luxury interior design Dubai and provide homes that are a perfect blend of beauty and functionality</p>
         <h3 className="text-[#c68b4e] text-md font-conthrax mb-4 leading-tight">
               ELEGANT RESIDENTIAL SPACES TAILORED TO YOUR LIFESTYLE
             </h3>
          <p className="text-gray-700 text-sm sm:text-base mb-4 font-play">
           We also undertake projects in other nearby locations like  Executive Towers and the Vision Tower in Business Bay. Whether it is a small apartment or a waterfront penthouse, our interior design in Business Bay Dubai is a perfect blend of elegance, innovation, and functionality.</p>


          {/* Buttons */}
       <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
  <Link href="/gallery">
    <button className="border border-black px-6 py-3 text-black font-medium hover:bg-[#193c38] hover:text-white transition">
      See Our Projects
    </button>
  </Link>

  <Link href="/contact-us">
    <button className="border border-black px-6 py-3 text-black font-medium hover:bg-[#193c38] hover:text-white transition">
      Free Consultation
    </button>
  </Link>
  
</div>

        </div>
         {/* Left Side - Image */}
        <div className="w-full lg:w-1/2">
          <Image
            src="/images/bba.png"
            alt="Office Interior Design in Business Bay Dubai"
            width={800}
            height={600}
            className="w-full h-100 rounded-lg shadow-md"
          />
        </div>
      </div>
      
      <div className="text-center mt-10">
         <h2 className="text-[#c68b4e] text-2xl  font-conthrax mb-4 leading-tight">
            Why Choose WE DO Interior Design & Fitout in Business Bay

          </h2>
          <p className=" text-center max-w-6xl mx-auto mt-0 md:mt-4 text-[12px] sm:text-base text-black-300 py-2 md:py-6 font-play">
          Choosing the right interior design company in Business Bay is important to ensure that you achieve the  best results. At WE DO Interior Design & Fitout, we have managed to set ourselves away from the rest because of our commitment to excellence and passion for design. Our professional interior designers in Business Bay have good experience of working in commercial high-rise buildings, ensuring that the work is done in the most efficient manner possible while also adhering to the necessary regulations. Our clients trust us for our clear pricing, organized project management, and creative designs for residential as well as commercial projects.
          Our experience also includes the neighboring areas of Burlington Tower Dubai, The Prism Tower and Sheikh Zayed Road, making us the go-to choice for clients looking for the best interior design company in Business Bay.


            </p>
        </div>
    </section>
          </div>
        </div>
         
        <div className="relative  mb-12 transition-transform duration-500 hover:scale-105">
                
                    <div className="block">
                      <Image
                        src="/images/primo-sitting.jpg"
                      alt="Residential Interior Design"
                      width={1400}
                      height={600}
                      className="object-cover w-full h-[200px] sm:h-[330px]"
                      />
                      {/* Overlay */}
                      <div className="absolute inset-y-0 text-start right-0 w-1/2 md:w-1/3 bg-black/70 p-2 sm:p-10 flex flex-col justify-center">
                        
                        <h2 className="text-lg text-[#c38d90] font-conthrax uppercase">
                          START YOUR INTERIOR DESIGN PROJECT IN BUSINESS BAY TODAY
                        </h2>
                        <p className="text-[15px]  leading-relaxed text-gray-300 font-play overflow-hidden max-h-30 md:max-h-none transition-all duration-300 ease-in-out">
                        If you are looking for an experienced Interior Design Company in Business Bay, WE DO Interior Design & Fitout is your best partner. From office interiors and retail outlets to apartments, penthouses, and restaurants, we work with every kind of space. Contact us today to schedule a consultation or site visit and experience expert interior design in Business Bay Dubai, transforming your space into a stylish, functional, and high-end environment.
                        </p>
                      </div>
                    </div>
                  
                  {/* Vertical Line */}
                  <div className="hidden md:block absolute top-0 left-1/3 w-[2px] h-full bg-gradient-to-r from-[#caa193] to-[#a0624d" />
                </div>

                <div className="text-center mb-0">
         <h2 className="text-[#c68b4e] text-2xl  font-conthrax mb-4 leading-tight">
           Commercial Interior Design in Business Bay
          </h2>
          <p className=" text-center max-w-6xl mx-auto mt-0 md:mt-4 text-[12px] sm:text-base text-black-300 py-2 md:py-6 font-play">
          Our commercial interior design solutions include retail, restaurants, and hospitality. We know that design has a significant impact on customer experience, brand image, and efficiency. From retail fit out Business Bay projects to restaurant interior design Business Bay, we provide services in design, materials, lighting, and implementation. As a good reputed fit out company in Business Bay, we design interiors that are aesthetic, functional, and match with your brand identity. We have successfully completed our projects in the surrounding regions of Business Bay such as Sheikh Zayed Road and Bay Avenue. Our commercial designs are modern and elegant, making us one of the leading interior fit out companies in Dubai.

         </p>
        </div>
        
       {/* Services Section */}
        <div className="text-center mt-10 mb-12">
           <h2 className="text-[#c68b4e] text-2xl font-conthrax mb-4 leading-tight">
            Our Projects in Business Bay
          </h2>
        </div>
        

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="relative h-[340px] rounded-2xl overflow-hidden group shadow-lg"
            >
              {/* Background Image */}
              <Image
                src={service.bgImage}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition" />

              {/* Content */}
              <div className="absolute inset-0 z-10 flex flex-col justify-end p-6 text-white">
                <h4 className="text-md font-conthrax mb-2">
                  {service.title}
                </h4>
                <p className="text-sm text-gray-200 leading-relaxed">
                  {service.description}
                </p>
              </div>
             
            </div>
            
          ))}
        </div>
         <div className="text-left mt-10 mb-0">
         <h2 className="text-[#c68b4e] text-2xl  font-conthrax mb-4 leading-tight">
           Interior Renovation and Upgrade Services
          </h2>
          <p className=" text-left mx-auto mt-0 md:mt-4 text-[12px] sm:text-base text-black-300 py-2 md:py-6 font-play">
          Not only Interior Design, we also deliver our premium renovation services. Our team optimizes layouts, integrates smart systems, and upgrades finishes to provide best interior designs that enhance both aesthetics and functionality of your space. We provide full renovation services in Business Bay and nearby locations. Our team of experts works on layouts, smart systems, and finishes to provide high-end interior solutions that improve aesthetics and functionality.
          
         </p>
         <h2 className="text-[#c68b4e] text-2xl  font-conthrax mb-4 leading-tight">
           Local Expertise and Presence in Dubai
          </h2>
            <p className=" text-left mx-auto mt-0 md:mt-4 text-[12px] sm:text-base text-black-300 py-2 md:py-6 font-play">
              Although Business Bay is our main area of providing services, our knowledge and expertise extend throughout Dubai and the UAE. Being one of the best interior design companies in Dubai, we have successfully completed various projects including travel agency Office, Cafe Interiors, business bay restaurant and an apartment interior in different locations, always providing the best possible outcomes in luxury interior design Dubai, interior design in Dubai, and other upscale regions. <br /> <br />
              Through our services we make sure that clients from other areas are also able to take advantage of our professional interior design and fit-out solutions. Our status as one of the best interior design companies in Business is reinforced by a portfolio of satisfied clients across Dubai’s premium districts.

            </p>
        </div>
          <div className=" text-sm leading-relaxed font-play">
          
            <h2 class="text-[#c68b4e] text-2xl font-conthrax leading-tight py-5">
             Frequently asked questions (FAQs)
            </h2>
            <h3 class="text-[#c68b4e] text-md font-conthrax leading-tight py-5">
              1-  How long does an office fit-out in Business Bay take?
            </h3>
            <p>
            Office fit-outs usually take six to twelve weeks, depending on the size and complexity of the project. Our team takes care of all approvals from DCD and approvals from the authority in Dubai.
            </p>

            <h3 class="text-[#c68b4e] text-md font-conthrax leading-tight py-5">
             2-  Do you provide turnkey fit-out services?
            </h3>
            <p>
            Yes, our turnkey fit out services in Business Bay include all aspects, from design and approval to completion and delivery to our clients. </p>

            <h3 class="text-[#c68b4e] text-md font-conthrax leading-tight py-5">
             3- Can you design luxury apartments in Business Bay?
            </h3>
            <p>
             Yes, we can. At WEDO, we are experts in apartment interior design in Business Bay and luxury residential projects, designing homes that are both beautiful and functional.
            </p>

            <h3 class="text-[#c68b4e] text-md font-conthrax leading-tight py-5">
             4- Are you among the best interior design companies in Business Bay?
            </h3>
            <p>
             With our experience, quality work, and happy clients, WE DO Interior Design & Fitout is one of the best interior design companies in Business Bay.
            </p>

             
          </div>
      </div>
      
    </section>
  );
};

export default AboutSection;
