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
            Interior Design Services in <br /> Downtown Dubai
          </h1>

          {/* Subheading - Updated for Downtown */}
          <p className="font-play mt-6 max-w-2xl text-gray-200">
            WE DO offers high-end <a href="/interior-design-downtown-dubai" className="font-bold hover:underline text-[#b98877]">
  interior design Downtown Dubai 
</a> services specific for contemporary living and quality commercial spaces. WE DO is a reliable interior design company in Downtown Dubai, experts in designing elegant interiors that showcase contemporary living styles, brand personality, and practicality.
          </p>
          <p className="font-play mt-6 max-w-2xl text-gray-200">
           WE DO is renowned as one of the best interior design companies in Dubai, our professionals blend elegance, innovative expertise, and flawless completion. If you are seeking interior design companies in Downtown, interior designers in Downtown Dubai, or leading interior fit-out companies in Dubai, we offer full well-structured services.
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