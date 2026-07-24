"use client";

import React from "react";
import Image from "next/image";

const VHeroSection = () => {
  return (
    <div className="relative w-full h-[300px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[500px] overflow-hidden">
      <Image
        src="/images/01-living-03.jpg"
        alt="Luxury living room interior design by WE DO in Dubai"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-x-0 bottom-10 text-center px-4 text-white z-10">
        <p className="text-xl sm:text-xl md:text-4xl lg:text-5xl font-penrise">
          VISION AT WORK
        </p>
        <p className="text-xs sm:text-base md:text-sm mt-2 font-conthrax tracking-wider">
          DESIGN &amp; CRAFTING LUXURY SPACES IN DUBAI
        </p>
      </div>
    </div>
  );
};

export default VHeroSection;