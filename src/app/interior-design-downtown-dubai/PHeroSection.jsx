"use client";

import React from "react";
import Image from "next/image";

const PHeroSection = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      
      {/* Background Image */}
      <Image
        src="/images/dtrest (2).webp"
        alt="Luxury Interior Design Downtown Dubai"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent z-10" />

      {/* Content */}
      <div className="relative z-20 flex items-center h-full">
        <div className="max-w-6xl px-6 md:px-16 text-white">
          
          {/* Main Heading - Updated for Downtown */}
          <h1 className="text-3xl sm:text-5xl md:text-4xl font-conthrax leading-tight">
            Interior Design Company in <br /> Downtown Dubai
          </h1>

          {/* Subheading - Updated for Downtown */}
          <p className="font-play mt-6 max-w-2xl text-gray-200">
            WE DO Interior Design & Fitout is a premier Interior Design Company in Downtown Dubai, 
            delivering world-class design solutions for luxury residences and prestigious corporate spaces. 
            Downtown Dubai is the heart of the city, home to the iconic Burj Khalifa and ultra-luxurious 
            penthouses that demand high-end aesthetics, sophisticated finishes, and timeless elegance.
          </p>

          {/* CTA Button - Updated link and text */}
          <div className="mt-8">
            <button className="bg-[#b98877] hover:bg-[#b88f83] text-black font-conthrax px-6 py-3 rounded-md transition duration-300">
              <a href="https://wedointerior.ae/gallery">Our Downtown Projects</a> 
            </button>
          </div>

        </div>
      </div>

    </section>
  );
};

export default PHeroSection;