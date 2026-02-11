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
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
          <div className="w-full lg:w-1/2">
            <Image
              src="/images/adbr (5).png"
              alt="Interior Design Dubai"
              width={900}
              height={650}
              className="w-full rounded-xl shadow-lg object-cover"
            />
          </div>

          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h2 className="text-[#c68b4e] text-2xl  font-conthrax mb-4 leading-tight">
            Top Interior Design Firm for Apartments & Villas in Dubai
          </h2>
            <p className="text-justify text-gray-700 text-base sm:text-lg font-play mb-6 leading-relaxed">
              As one of the most trusted interior companies in Dubai, our expert designers
              and fit-out specialists deliver high-quality results from concept to completion —
              tailored to your lifestyle, vision, and modern living standards.
              <br /><br />
              As one of the most trusted interior companies in Dubai, our expert designers
              and fit-out specialists deliver high-quality results from concept to completion —
              tailored to your lifestyle, vision, and modern living standards.
            </p>
             

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <Link href="/gallery">
                <button className="border border-black px-6 py-3 font-medium hover:bg-[#193c38] hover:text-white transition">
                  See Our Projects
                </button>
              </Link>

              <Link href="/contact-us">
                <button className="border border-black px-6 py-3 font-medium hover:bg-[#193c38] hover:text-white transition">
                  Free Consultation
                </button>
              </Link>
            </div>
          </div>
        </div>
         <div className="text-center mb-0">
         <h2 className="text-[#c68b4e] text-2xl  font-conthrax mb-4 leading-tight">
            WHY CHOOSE WEDO INTERIOR?
          </h2>
          <p className="sm:text-lg text-center max-w-6xl mx-auto mt-0 md:mt-4 text-[12px] sm:text-base text-black-300 py-2 md:py-6 font-play">
          In a landscape filled with fit out companies in Dubai, WE DO Interior Design & Fit-Out stands apart through consistency, design excellence, and reliability. Whether it's a corporate HQ in Business Bay, a boutique in Palm Jumeirah, or a flagship venue in Dubai Festival City (DFC), we treat every space as an opportunity to innovate. Ranked among the top 10 interior design companies in Dubai, we combine global sensibility with local insight to execute projects that are both refined and future-ready.
        
 </p>
        </div>
        <div className="relative mt-12 mb-12 transition-transform duration-500 hover:scale-105">
                
                    <div className="block">
                      <Image
                        src="/images/adbr (3).png"
                      alt="Residential Interior Design"
                      width={1400}
                      height={600}
                      className="object-cover w-full h-[200px] sm:h-[330px]"
                      />
                      {/* Overlay */}
                      <div className="absolute inset-y-0 text-start right-0 w-1/2 md:w-1/3 bg-black/70 p-2 sm:p-10 flex flex-col justify-center">
                        
                        <h2 className="text-lg text-[#c38d90] font-conthrax uppercase">
                          COMMERCIAL INTERIOR DESIGN
                        </h2>
                        <p className="text-[15px]  leading-relaxed text-gray-300 font-play overflow-hidden max-h-30 md:max-h-none transition-all duration-300 ease-in-out">
                         WE DO Interior Design & Fit-Out is a leading commercial interior design company in Dubai, delivering tailored solutions for offices, retail stores, showrooms, cafes, and restaurants. Our commercial interior design services in Dubai blend functionality with aesthetics—ensuring each space supports business growth while reflecting your brand. From concept to execution, WE DO transforms commercial spaces into impactful, professional environments.
                        </p>
                      </div>
                    </div>
                  
                  {/* Vertical Line */}
                  <div className="hidden md:block absolute top-0 left-1/3 w-[2px] h-full bg-gradient-to-r from-[#caa193] to-[#a0624d]" />
                </div>

                <div className="text-center mb-0">
         <h2 className="text-[#c68b4e] text-2xl  font-conthrax mb-4 leading-tight">
            WHY CHOOSE WEDO INTERIOR?
          </h2>
          <p className="sm:text-lg text-center max-w-6xl mx-auto mt-0 md:mt-4 text-[12px] sm:text-base text-black-300 py-2 md:py-6 font-play">
          In a landscape filled with fit out companies in Dubai, WE DO Interior Design & Fit-Out stands apart through consistency, design excellence, and reliability. Whether it's a corporate HQ in Business Bay, a boutique in Palm Jumeirah, or a flagship venue in Dubai Festival City (DFC), we treat every space as an opportunity to innovate. Ranked among the top 10 interior design companies in Dubai, we combine global sensibility with local insight to execute projects that are both refined and future-ready.
       
 </p>
        </div>
        {/* Services Section */}
        <div className="text-center mb-12">
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

      </div>
      
    </section>
  );
};

export default AboutSection;
