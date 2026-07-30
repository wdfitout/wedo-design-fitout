"use client";

import React from "react";
import Image from "next/image";

const PHeroSection = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      
      {/* Background Image */}
      <Image
        src="/images/Jumeirah.jpeg"
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
           Interior Design Companies in <br />Palm Jumeirah, Dubai 
          </h1>

          {/* Subheading */}
          <p className="font-play mt-6  max-w-2xl text-gray-200">
          WE DO Interior Design & Fit-Out delivers residential and <b className= "text-[#caa193]"
          ><a href="https://wedointerior.ae/commercial-interior-design-dubai">commercial interior design</a></b>, renovation, and turnkey fit-out across Palm Jumeirah from Signature Villas and Garden Homes on the Fronds to apartments, penthouses, and F&B spaces on the Crescent. Every project runs through our own in-house design, civil works, decoration, and joinery teams, including an on-site joinery factory, so villa owners, apartment buyers, and business owners on the Palm get one point of contact from first concept through final handover.
 </p>

          {/* CTA Button */}
          <div className="mt-8">
            <button className="bg-[#b98877] hover:bg-[#b88f83] text-black font-conthrax px-6 py-3 rounded-md transition duration-300">
             <a href="https://wedointerior.ae/gallery">Our Creek Harbour Projects</a> 
            </button>
          </div>

        </div>
      </div>

      

    </section>
  );
};

export default PHeroSection;
