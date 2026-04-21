"use client";

import React from "react";
import Image from "next/image";

const PHeroSection = () => {
  return (
    <div className="relative w-full h-[300px] sm:h-[300px] md:h-[3500px] lg:h-[400px] xl:h-[500px] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/penth3.webp"
        alt="interior design"
        fill
        priority
        className="object-cover"
      />

    {/* Gradient Overlay Behind Text */}
  <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-black/90 to-transparent z-0" />

  {/* Overlay Text Content */}
  <div className="absolute inset-x-0 bottom-2 sm:bottom-10 text-center px-4 text-white z-10">
    <h1 className="text-md sm:text-3xl font-penrise">
      Interior Design Dubai – Areas We Serve
    </h1>
    <p className="text-[12px] sm:text-base md:text-lg mt-2 font-play px-0 sm:px-16">
   WE DO Interior Design & Fitout is one of the leading Interior Design Companies in Dubai, UAE, providing quality interior design services in Dubai, while focusing on functionality and style. We offer you comprehensive interior design & fit-out services ranging from residential interior designs to commercial fit-out. We serve in all major locations of Dubai, such as Creek Harbour, Downtown Dubai, Business Bay, and Jumeirah </p>
  </div>
    </div>
  );
};

export default PHeroSection;
