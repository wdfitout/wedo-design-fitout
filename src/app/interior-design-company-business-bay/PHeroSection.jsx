"use client";

import React from "react";
import Image from "next/image";

const PHeroSection = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      
      {/* Background Image */}
      <Image
        src="/images/adbr (9).png"
        alt="Luxury Interior Design Dubai"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent z-10" />

      {/* Content */}
      <div className="relative z-20 flex items-center h-full">
        <div className="max-w-6xl px-6 md:px-16 text-white">
          
          

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-5xl md:text-4xl font-conthrax leading-tight">
           Interior Design Company in <br /> Business Bay, Dubai
          </h1>

          {/* Subheading */}
          <p className="font-play mt-6  max-w-2xl text-gray-200">
            WE DO Interior Design & Fitout is a leading Interior Design Company in Business Bay, Dubai, and 
            provides the best interior design services for residential, commercial, and retail projects. 
            Business Bay is one of the most prominent areas of Dubai as it is famous for its luxurious 
            waterfront residential apartments, signature commercial buildings, and thriving business centers.</p>

          {/* CTA Button */}
          <div className="mt-8">
            <button className="bg-[#b98877] hover:bg-[#b88f83] text-black font-conthrax px-6 py-3 rounded-md transition duration-300">
              Our Business Bay Projects
            </button>
          </div>

        </div>
      </div>

      

    </section>
  );
};

export default PHeroSection;
