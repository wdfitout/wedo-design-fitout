"use client";

import Image from "next/image";
import React from "react";

const MeetInteriorDesigners = () => {
  return (
    <section
      id="interior-designers"
      className="
        relative
        bg-[url('/images/bg-sec-3-mobile.webp')]
        sm:bg-[url('/images/bg-sec-3.webp')]
        bg-cover
        bg-center
        bg-no-repeat
        text-white
        overflow-hidden
      "
    >
      {/* Wireframe */}
      <div
        className="
          absolute
          inset-0
          bg-[url('/images/mobile-wire.svg')]
          lg:bg-[url('/images/desktop-wire.svg')]
          bg-cover
          bg-center
          bg-no-repeat
          opacity-60
        "
      />

      <div
        className="
          relative
          max-w-6xl
          mx-auto
          px-5
          sm:px-8
          lg:px-12
          py-10
          md:py-12
        "
      >
        {/* Heading */}
        <div className="mb-8 md:mb-10">
          <div className="flex items-center gap-4">
            <span className="w-10 h-px bg-[#caa193]" />

            <p
              className="
                text-[#caa193]
                text-[9px]
                sm:text-[10px]
                tracking-[0.25em]
                font-conthrax
                uppercase
              "
            >
              OUR FOUNDER
            </p>
          </div>

           <h2 className="text-white mt-6 md:mt-10  text-[12px] sm:text-xl tracking-widest font-conthrax">
            THE MIND BEHIND WE DO
          </h2>
        </div>

        {/* Founder */}
      {/* Founder */}
<div
  className="
    grid
    grid-cols-1
    md:grid-cols-[220px_1fr]
    lg:grid-cols-[250px_1fr]
    items-stretch
    max-w-5xl
  "
>
  {/* Image */}
  <div
    className="
      relative
      w-full
      max-w-[250px]
      aspect-[4/5]
      overflow-hidden
      bg-[#111]
      mx-auto
      md:mx-0
    "
  >
    <Image
      src="/images/hamzajamal.png"
      alt="Hamza Jamal Alatta, Founder of WE DO Interior Design & Fit Out"
      fill
      sizes="(max-width: 768px) 75vw, 250px"
      className="
        object-cover
        object-center
        transition-transform
        duration-700
        hover:scale-105
      "
    />
  </div>

  {/* Content */}
  <div
    className="
      bg-black/70
      border
      border-white/10
      md:border-l-0
      px-6
      sm:px-8
      md:px-10
      py-7
      md:py-9
      flex
      flex-col
      justify-center
    "
  >
    <p
      className="
        text-[#caa193]
        text-[9px]
        sm:text-[10px]
        tracking-[0.2em]
        font-conthrax
        uppercase
      "
    >
      FOUNDER · SINCE 2015
    </p>

    <h3
      className="
        mt-2
        text-xl
        sm:text-2xl
        md:text-3xl
        font-conthrax
        uppercase
        tracking-wide
      "
    >
      HAMZA JAMAL ALATTA
    </h3>

    <div className="w-12 h-px bg-[#caa193] mt-5 mb-5" />

    <p
      className="
        text-gray-300
        text-[11px]
        sm:text-sm
        leading-relaxed
        font-play
        max-w-xl
      "
    >
     I started WE DO with a clear vision: to create exceptional spaces where every detail is considered, from the first line of the design to the final piece of joinery. Luxury, to me, is not just how a space looks—it is the quality, craftsmanship and attention to detail behind every decision.
    </p>

    <p
      className="
        mt-5
        text-gray-400
        text-[10px]
        sm:text-xs
        leading-relaxed
        font-play
        max-w-xl
      "
    >
      Since 2015, WE DO has brought interior design, joinery and fit-out
      together under one team, creating a more coordinated way to deliver
      complete spaces.
    </p>
  </div>
</div>
</div>
    </section>
  );
};

export default MeetInteriorDesigners;