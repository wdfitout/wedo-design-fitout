"use client";

import React from "react";
import Image from "next/image";

const VHeroSection = () => {
  return (
    <div className="relative w-full h-[300px] sm:h-[300px] md:h-[3500px] lg:h-[400px] xl:h-[500px] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/district-one-3-bedroom-contemporary-villa-exterior.webp"
        alt="Contemporary three-bedroom villa exterior in District One Dubai"
        fill
        priority
        className="object-cover"
      />

   
    </div>
  );
};

export default VHeroSection;
