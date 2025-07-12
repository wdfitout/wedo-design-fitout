"use client";

import React from "react";
import Image from "next/image";

const VHeroSection = () => {
  return (
 <div className="relative w-full h-[300px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[500px] overflow-hidden">
  {/* Background Image */}
  <Image
    src="/images/bba (2).jpg"
    alt="interior design"
    width={1920}
    height={1080}
    priority
    className="object-cover w-full h-full"
  />
</div>
  );
};

export default VHeroSection;
