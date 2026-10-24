
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Interior Design Business Bay",
    description: "Premium apartment interiors and office fit-outs.",
    bgImage: "/images/da-vinci-tower-dining-area-furniture-business-bay.webp",
    link: "/interior-design-company-business-bay",
  },
  {
    title: "Interior Design Downtown Dubai",
    description: "Premium apartment interiors and office fit-outs.",
    bgImage: "/images/downtown-restaurant.png",
    link: "/interior-design-downtown-dubai",
  },
  {
    title: "Interior Design Dubai Creek Harbour",
    description: "Premium apartment interiors and office fit-outs.",
    bgImage: "/images/Modern waterfront apartment living room in Dubai Creek Harbour.png",
    link: "/interior-design-dubai-creek-harbour",
  },
  {
    title: "Interior Design Jumeirah",
    description: "Premium apartment interiors and office fit-outs.",
    bgImage: "/images/Jumeirah.jpeg",
    link: "/interior-design-jumeirah-dubai",
  },
  {
    title: "Interior Design Dubai Hills",
    description: "Premium apartment interiors and office fit-outs.",
    bgImage: "/images/dubai-hills-modern-luxury-peaceful-bedroom.webp",
    link: "/interior-design-companies-near-dubai-hills",
  },
  {
    title: "Interior Design Palm Jumeirah",
    description: "Premium apartment interiors and office fit-outs.",
    bgImage: "/images/palm-jumeirah-apartment-interior-design.png",
    link: "/interior-design-companies-palm-jumeirah-dubai",
  },
  {
    title: "Interior Design Dubai Marina",
    description: "Premium apartment interiors and office fit-outs.",
    bgImage: "/images/dmapt (29).webp",
    link: "/best-interior-design-company-in-dubai-marina",
  },
  {
    title: "Interior Design Royal Atlantis",
    description: "Premium apartment interiors and office fit-outs.",
    bgImage: "/images/atlantis (7).webp",
    link: "/royal-atlantis-dubai-interior-design-company",
  },
];

const PProjects = () => {
  return (
    <section
      id="projects"
      className="bg-[url('/images/p-bg.webp')] bg-cover bg-center bg-no-repeat text-white"
    >
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
        <div className="relative mb-6 sm:mb-12">
          <h2 className="text-lg sm:text-xl font-conthrax tracking-wider text-center">
            AREAS WE SERVICE IN DUBAI
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((card, index) => (
            <Link
              key={index}
              href={card.link}
              className="relative aspect-[4/3] overflow-hidden group w-full block"
            >
              <Image
                src={card.bgImage}
                alt={card.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />

              <div className="absolute bottom-0 left-0 w-full bg-black/80 z-10">
                <div className="w-full h-[3px] bg-gradient-to-r from-[#caa193] to-[#a0624d]" />

                <div className="p-2">
                  <h3 className="text-white text-sm font-paly text-center">
                    {card.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>

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
