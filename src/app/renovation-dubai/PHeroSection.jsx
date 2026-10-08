"use client";

import React from "react";
import Image from "next/image";

const PHeroSection = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      
      {/* Background Image */}
      <Image
        src="/images/renovation-company-dubai.webp"
        alt="Luxury villa renovation interior in Dubai"
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
         Renovation Company in Dubai

          </h1>

          {/* Subheading */}
          <p className="font-play mt-6  max-w-2xl text-gray-200">
           WE DO Interior Design & Fit-Out is a DED-registered renovation company in Dubai, working across villas, apartments, and offices. One team handles MEP upgrades, layout refreshes, kitchens, bathrooms, and full interior refits, instead of a separate designer, contractor, and approvals agent.
</p>

          {/* CTA Button */}
          <div className="mt-8">
            <button className="bg-[#b98877] hover:bg-[#b88f83] text-black font-conthrax px-6 py-3 rounded-md transition duration-300">
             <a href="https://wedointerior.ae/gallery">Our Projects</a> 
            </button>
          </div>

        </div>
      </div>

      

    </section>
  );
};

export default PHeroSection;
