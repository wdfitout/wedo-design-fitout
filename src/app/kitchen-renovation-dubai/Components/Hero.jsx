"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative w-full h-[350px] sm:h-[350px] md:h-[350px] lg:h-[400px] xl:h-[500px] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/kitchen-renovation-dubai-modern-design.webp"
        alt="Kitchen renovation Dubai with modern cabinetry and stone countertops"
        title="Modern Kitchen Renovation Dubai"
        fill
        priority
        /* object-cover ke sath custom percentage settings */
        className="object-cover object-[center_85%]" 
      />

      {/* Overlay Content Box */}
      <div className="absolute left-2 sm:left-4 bottom-6 z-10 bg-black/50 p-4 rounded-lg max-w-auto text-white">
        <h1 className="text-md md:text-2xl lg:text-4xl font-conthrax mb-2">
          Kitchen Renovation Dubai
        </h1>
        <h2 className="text-md md:text-2xl lg:text-4xl font-play mb-2">
          Best Kitchen Renovation Company in Dubai
        </h2>

        <div className="flex gap-4 flex-wrap">
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

export default Hero;