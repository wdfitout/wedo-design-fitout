"use client";

import React from "react";
import Image from "next/image";

const VHeroSection = () => {
  return (
    <div className="relative w-full h-[300px] sm:h-[300px] md:h-[3500px] lg:h-[400px] xl:h-[500px] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/district-one-villa-home-office-green-wall.png"
        alt="Home office with built-in oak shelving and LED lighting facing a green wall, District One villa"
        fill
        priority
        className="object-cover"
      />

   
    </div>
  );
};

export default VHeroSection;
