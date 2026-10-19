"use client";

import React from "react";
import Image from "next/image";

const projects = [
  {
    img: "/images/luxury-villa-design-dubai-hills-estate.webp",
    alt: "Luxury villa interior design in Dubai Hills Estate",
    title: "DUBAI HILLS ESTATE",
  },
  {
    img: "/images/luxury-panthouse-design-palm-jumeirah.webp",
    alt: "Luxury penthouse interior design in Palm Jumeirah",
    title: "INTERIOR DESIGN COMPANIES IN PALM JUMEIRAH DUBAI",
  },
  {
    img: "/images/minimalist-villa-design-emirates-hills.webp",
    alt: "Minimalist luxury villa interior design in Emirates Hills",
    title: "EMIRATES HILLS",
  },
];

const PProjects = () => {
  return (
    <section
      id="projects"
      className="bg-[url('/images/p-bg.webp')] bg-cover bg-center bg-no-repeat text-white"
    >
      {/* Arrow image */}
      <div className="mt-10 sm:mt-16 flex justify-center">
        <Image
          src="/images/sec-dvd.webp"
          alt="Scroll down arrow"
          width={320}
          height={80}
          className="h-auto w-48 sm:w-64"
          loading="lazy"
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-16 py-6 sm:py-16">

        {/* Section Title */}
        <div className="relative mb-6 sm:mb-12">
          <h2 className="text-lg sm:text-xl font-conthrax tracking-wider text-center">
            AREAS WE SERVICE IN DUBAI
          </h2>
        </div>

        {/* Project Cards - Non Clickable, Hover Only */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((card, index) => (
            <div
              key={index}
              className="relative aspect-[4/3] overflow-hidden group w-full"
            >
              {/* Background Image */}
              <Image
                src={card.img}
                alt={card.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />

              {/* Bottom Title Overlay */}
              <div className="absolute bottom-0 left-0 w-full bg-black/80 z-10">

                {/* Gradient Line */}
                <div className="w-full h-[3px] bg-gradient-to-r from-[#caa193] to-[#a0624d]" />

                {/* Card Title */}
                <div className="p-2">
                  <h3 className="text-white text-sm font-paly text-center">
                    {card.title}
                  </h3>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-12 flex justify-center">
          <a
            href="mailto:info@wedointerior.ae"
            className="uppercase font-semibold tracking-wide px-20 py-3.5 text-sm text-[#a0624d] bg-transparent transition duration-300 hover:bg-[#caa193]/10 border border-transparent"
            style={{
              borderImage: "linear-gradient(to right, #caa193, #a0624d)",
              borderImageSlice: 1,
            }}
          >
            SEND YOUR ENQUIRY NOW
          </a>
        </div>

      </div>
    </section>
  );
};

export default PProjects;