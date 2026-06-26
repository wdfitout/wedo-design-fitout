"use client";

import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative w-full h-[350px] sm:h-[350px] md:h-[350px] lg:h-[400px] xl:h-[500px] overflow-hidden">

      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/Da-vinci-tower-by-pagani-business-bay-dubai.mp4" type="video/mp4" />
      </video>

      {/* Optional Dark Overlay */}
      <div className="absolute inset-0 bg-black/30 z-[1]" />

      {/* Overlay Content */}
      <div className="absolute left-2 sm:left-4 bottom-6 z-10 bg-black/50 p-4 rounded-lg text-white max-w-[700px]">

        <h1 className="text-md md:text-2xl lg:text-4xl font-conthrax mb-2">
          Furnishing & Furniture for Da Vinci Tower, Dubai
        </h1>

       
        <div className="flex gap-4 flex-wrap">

          <Link
            href="/contact-us"
            className="bg-[#caa193] text-black px-3 py-2 text-xs font-semibold uppercase rounded hover:bg-gray-200 transition"
          >
            Send an Inquiry
          </Link>

          <Link
            href="/gallery"
            className="border border-[#caa193] px-3 py-2 text-xs font-semibold uppercase rounded hover:bg-[#caa193] hover:text-black transition"
          >
            Our Projects
          </Link>

        </div>
      </div>

    </div>
  );
};

export default Hero;