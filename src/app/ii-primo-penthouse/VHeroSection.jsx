"use client";

import React from "react";
import Image from "next/image";

const VHeroSection = () => {
  return (
    <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/penth14.webp"
        alt="Luxury penthouse lounge interior design"
        fill
        priority
        className="object-cover"
      />

      {/* Optional overlay (for text or dark filter) */}
      {/* <div className="absolute inset-0 bg-black/30" /> */}
    </div>
  );
};

export default VHeroSection;
