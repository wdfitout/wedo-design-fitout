"use client";

import React from "react";
import Image from "next/image";

const PHeroSection = () => {
  return (
    <div className="relative w-full h-[300px] sm:h-[300px] md:h-[3500px] lg:h-[400px] xl:h-[500px] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/penth2.webp"
        alt="interior design"
        fill
        priority
        className="object-cover"
      />

    {/* Gradient Overlay Behind Text */}
  <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-black/90 to-transparent z-0" />

  {/* Overlay Text Content */}
  <div className="absolute inset-x-0 bottom-2 sm:bottom-10 text-center px-4 text-white z-10">
    <h1 className="text-md sm:text-3xl font-penrise">
      PENTHOUSE PROJECTS DUBAI
    </h1>
    <p className="text-[12px] sm:text-base md:text-lg mt-2 font-play px-0 sm:px-16">
    Elevate luxury living with bespoke Penthouse Design & Fit-Out by WE DO Interior Design & Fit-Out. Serving Palm Jumeirah, Dubai Marina, Business Bay, Downtown Dubai, we specialize in high-end penthouse spaces, custom design and build solutions, and premium finishes. As a trusted Penthouse Fit-Out Company in Dubai, we craft sophisticated interiors that reflect elegance, exclusivity, and modern living. </p>
  </div>
    </div>
  );
};

export default PHeroSection;
