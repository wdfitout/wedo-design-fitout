"use client";

import React from "react";
import Image from "next/image";

const VHeroSection = () => {
  return (
    <div className="relative w-full h-[300px] sm:h-[300px] md:h-[3500px] lg:h-[400px] xl:h-[500px] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/fvapt (1).png"
        alt="interior design"
        fill
        priority
        className="object-cover"
      />
           {/* Overlay Text Content */}
      <div className="absolute inset-x-0 bottom-10 text-center px-4 text-white z-10">
        <h1 className="text-xl sm:text-xl md:text-4xl lg:text-5xl font-penrise">
          VISION AT WORK
        </h1>
        <p className="text-xs sm:text-base md:text-sm mt-2 font-conthrax tracking-wider">
          DESIGN & CRAFTING LUXURY SPACES IN DUBAI
        </p>
      </div>
   
    </div>
  );
};

export default VHeroSection;
