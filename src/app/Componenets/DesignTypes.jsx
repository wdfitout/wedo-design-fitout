"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const DesignProjects = () => {
  return (
    <section id="designs" className="bg-black text-white overflow-hidden">
      <div className="px-4 sm:px-6 md:px-12 lg:px-20 xl:px-28 py-16 max-w-7xl mx-auto">

        {/* Arrow image */}
        <div className="mt-0 sm:mt-10 flex justify-center">
          <Image
            src="/images/sec-dvd.webp"
            alt="Scroll down arrow"
            width={320}
            height={80}
            className="h-auto w-48 sm:w-64"
          />
        </div>

        {/* Section Heading */}
        <h2 className="text-white mt-10 mb-10 text- sm:text-xl tracking-widest font-conthrax text-center">
          INTERIOR DESIGN TYPES
        </h2>

        {/* RESIDENTIAL Block */}
        <div className="relative mt-8 transition-transform duration-500 hover:scale-105">
          
            <div className="block">
              <Image
                src="/images/sec3-img01.webp"
                alt="Residential Interior Design"
                width={1400}
                height={600}
                className="object-cover w-full h-full"
                priority
              />
              {/* Overlay */}
              <div className="absolute inset-y-0 left-0 w-1/2 md:w-1/3 bg-black/70 p-6 sm:p-10 flex flex-col justify-center">
                <h3 className="text-xs sm:text-base tracking-widest font-conthrax uppercase">
                  RESIDENTIAL
                </h3>
                <h2 className="text-xs sm:text-2xl text-[#c38d90] font-conthrax mb-4 uppercase">
                  INTERIOR DESIGN
                </h2>
                <p className="text-xs sm:text-sm leading-relaxed text-gray-300 font-play overflow-hidden max-h-24 md:max-h-none transition-all duration-300 ease-in-out">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                  laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                </p>
              </div>
            </div>
          

          {/* Vertical Line */}
          <div className="hidden md:block absolute top-0 left-1/3 w-[2px] h-full bg-gradient-to-r from-[#caa193] to-[#a0624d]" />
        </div>

        {/* COMMERCIAL Block */}
        <div className="relative mt-12 transition-transform duration-500 hover:scale-105">
        
            <div className="block">
              <Image
                src="/images/sec3-img02.webp"
                alt="Commercial Interior Design"
                width={1400}
                height={600}
                className="object-cover w-full h-full"
                priority
              />
              {/* Overlay */}
              <div className="absolute inset-y-0 right-0 w-1/2 md:w-1/3 bg-black/70 p-6 sm:p-10 flex flex-col justify-center text-right">
                <h3 className="text-xs sm:text-base tracking-widest font-conthrax uppercase">
                  COMMERCIAL
                </h3>
                <h2 className="text-xs sm:text-2xl text-[#c38d90] font-conthrax mb-4 uppercase">
                  INTERIOR DESIGN
                </h2>
                <p className="text-xs sm:text-sm leading-relaxed text-gray-300 font-play overflow-hidden max-h-24 md:max-h-none transition-all duration-300 ease-in-out">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                  laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                </p>
              </div>
            </div>
          


          {/* Vertical Line */}
          <div className="hidden md:block absolute top-0 left-1/3 w-[2px] h-full bg-gradient-to-r from-[#caa193] to-[#a0624d]" />
        </div>
      </div>
    </section>
  );
};

export default DesignProjects;
