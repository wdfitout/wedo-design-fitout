"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const PHeroSection = () => {
  return (
    <div className="relative w-full h-[300px] sm:h-[300px] md:h-[3500px] lg:h-[400px] xl:h-[500px] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/adh (3).webp"
        alt="interior design"
        fill
        priority
        className="object-cover"
      />
      {/* Gradient Overlay Behind Text */}
  <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-black/90 to-transparent z-0" />
    {/* Overlay Content Box */}
      <div className="absolute bottom-6 z-10 p-4 rounded-lg text-white left-1/2 -translate-x-1/2">

        <h1 className="text-md md:text-2xl lg:text-4xl font-conthrax mb-2">
         Explore Our Residential & Commercial Design Projects</h1>
          <h2 className="text-md md:text-2xl lg:text-4xl font-play mb-2">  
           Luxury Interior Design Company in Dubai UAE</h2>
        

        <div className="flex gap-4 mt-5 flex-wrap">
          <Link
            href="/contact-us"
            className="bg-[#caa193] text-black px-2 py-2 text-xs font-semibold uppercase rounded hover:bg-gray-200 transition-all duration-200"
          >
            Send an Inquiry
          </Link>

          <Link
            href="/gallery"
            className="border border-[#caa193] px-2 py-2 text-xs font-semibold uppercase rounded hover:bg-[#caa193] hover:text-black transition-all duration-200"
          >
            Our Projects
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PHeroSection;
