
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const PHeroSection = () => {
  return (
    <section className="relative w-full min-h-[650px] h-screen max-h-[950px] overflow-hidden">

      {/* Hero Background Image */}
      <Image
        src="/images/dubai-marina-luxury-apartment-living-room-waterfront.webp"
        alt="Luxury Dubai Marina apartment living room with bespoke furniture and waterfront views"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/10 z-10" />

      {/* Hero Content */}
      <div className="relative z-20 flex items-center h-full">
        <div className="max-w-6xl px-6 md:px-16 text-white">

          <p className="text-[#caa193] text-xs uppercase tracking-[0.22em] font-play mb-5">
            WE DO Interior Design & Fit-Out
          </p>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-conthrax leading-tight max-w-3xl">
            Interior Design Company in
            <br />
            Dubai Marina
          </h1>

          <p className="font-play mt-6 max-w-2xl text-sm sm:text-base leading-7 text-gray-200">
            WE DO provides interior design services in Dubai Marina for
            apartments and penthouses that complement the views of the Marina.
            Our process starts with your design preferences and building
            requirements. Our in-house joinery, decoration and delivery teams
            then bring the design to life, taking your project from the first
            sketch to final styling.
          </p>

          {/* CTA */}
          <div className="mt-8">
            <Link
              href="/gallery"
              className="inline-flex bg-[#b98877] hover:bg-[#b88f83] text-black font-conthrax text-xs px-7 py-3.5 rounded-md transition duration-300"
            >
              Our Projects
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PHeroSection;
