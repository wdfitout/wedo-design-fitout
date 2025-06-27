"use client";

import React from "react";
import Image from "next/image";

const VHeroSection = () => {
  return (
    <div className="relative w-full h-[250px] sm:h-[200px] md:h-[250px] lg:h-[300px] xl:h-[350px] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/cnpkapt (6).png"
        alt="interior design"
        fill
        priority
        className="object-cover"
      />

      {/* Gradient overlay on bottom half */}
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent z-0" />

      {/* Overlay Text Content (position unchanged) */}
      <div className="absolute inset-x-0 bottom-10 text-center px-4 text-white z-10">
        <h1 className="text-xl sm:text-xl md:text-4xl lg:text-5xl font-penrise">
          Contact Us
        </h1>
      </div>
    </div>
  );
};

export default VHeroSection;
