"use client";

import React from "react";
import Image from "next/image";

const BHeroSection = () => {
  return (
    <div className="relative w-full h-[300px] sm:h-[300px] md:h-[3500px] lg:h-[400px] xl:h-[500px] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/no-1-house-interior-design-dubai.webp"
        alt="interior design"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay Text Content */}
      <div className="absolute inset-x-0 bottom-10 text-center px-4 text-white z-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
          WORK AT VISION
        </h1>
        <p className="text-sm sm:text-base md:text-lg mt-2">
          some lines are great
        </p>
      </div>
    </div>
  );
};

export default BHeroSection;
