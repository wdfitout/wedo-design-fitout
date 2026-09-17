"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    img: "/images/penth7.webp",
    alt: "Primo Tower penthouse interior design and renovation in Downtown Dubai by WE DO",
    title: "PRIMO TOWER PENTHOUSE",
    type: "PENTHOUSE",
    size: "[FILL-04] SQ FT",
    location: "BURJ KHALIFA",
    slug: "/ii-primo-penthouse",
  },
  {
    img: "/images/majanvilla (2).webp",
    alt: "Majan luxury villa interior design in Dubai by WE DO",
    title: "MAJAN VILLA",
    type: "VILLA",
    size: "[FILL-04] SQ FT",
    location: "MAJAN",
    outcome: "[FILL-04]",
    slug: "/majan-villa-design",
  },
  {
    img: "/images/bba8.webp",
    alt: "Business Bay apartment interior design by WE DO",
    title: "BUSINESS BAY APARTMENT",
    type: "APARTMENT",
    size: "[FILL-04] SQ FT",
    location: "BUSINESS BAY",
    outcome: "[FILL-04]",
    slug: "/business-bay-apartment",
  },
  {
    img: "/images/dtrest (8).webp",
    alt: "Commercial interior design and fit out project in Dubai by WE DO",
    title: "DOWNTOWN RESTAURANT",
    type: "RESTAURANT",
    size: "[FILL-04] SQ FT",
    location: "DOWNTOWN DUBAI",
    outcome: "[FILL-04]",
    slug: "/downtown-dubai-restaurant",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="
        relative
        bg-[url('/images/bg-sec-4-mobile.webp')]
        sm:bg-[url('/images/bg-sec-2.webp')]
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
          opacity-30
          pointer-events-none
        "
      />

      {/* Divider */}
      <div className="relative pt-6 sm:pt-8 flex justify-center">
        <Image
          src="/images/sec-dvd.webp"
          alt=""
          width={320}
          height={80}
          aria-hidden="true"
          className="h-auto w-24 sm:w-36"
        />
      </div>

      <div
        className="
          relative
          max-w-7xl
          mx-auto
          px-5
          sm:px-8
          lg:px-12
          pt-6
          pb-8
          sm:pt-8
          sm:pb-10
        "
      >
        {/* Heading */}
        <div className="mb-6 sm:mb-8">
          <div className="flex items-center gap-3">
            <span className="w-7 h-px bg-[#caa193]" />

            <p
              className="
                text-[#caa193]
                text-[8px]
                sm:text-[9px]
                tracking-[0.22em]
                font-conthrax
                uppercase
              "
            >
              SELECTED PROJECTS
            </p>
          </div>

          <div className="mt-2 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
            <div>
                    <h2 className="text-white mt-6 md:mt-10  text-[12px] sm:text-xl tracking-widest font-conthrax">
                RECENT INTERIOR DESIGN PROJECTS IN DUBAI
              </h2>

              <p
                className="
                  mt-2
                  text-gray-300
                  text-[10px]
                  sm:text-xs
                  leading-relaxed
                  font-play
                  max-w-xl
                "
              >
                Four of 250+ projects, each designed, made and built by our
                own team.
              </p>
            </div>

            <Link
              href="/gallery"
              className="
                self-start
                uppercase
                font-conthrax
                tracking-wide
                px-4
                py-2
                text-[8px]
                sm:text-[9px]
                text-[#caa193]
                border
                border-[#caa193]/60
                transition-all
                duration-300
                hover:bg-[#caa193]
                hover:text-black
                whitespace-nowrap
              "
            >
              VIEW ALL
            </Link>
          </div>
        </div>

        {/* 4 Project Grid */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-3
            lg:gap-4
          "
        >
          {projects.map((project, index) => (
            <Link
              href={project.slug}
              key={index}
              className="
                group
                relative
                overflow-hidden
                bg-black
                border
                border-white/10
                hover:border-[#caa193]/50
                transition-all
                duration-300
              "
            >
              {/* Image */}
<div className="relative aspect-[4/3] overflow-hidden">       
         <Image
                  src={project.img}
                  alt={project.alt}
                  fill
                  sizes="
                    (max-width: 640px) 100vw,
                    (max-width: 1024px) 50vw,
                    25vw
                  "
                  className="
                    object-cover
                    transition-transform
                    duration-500
                    group-hover:scale-105
                  "
                />

                {/* Image Overlay */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/80
                    via-black/10
                    to-transparent
                  "
                />

                {/* Number */}
                <span
                  className="
                    absolute
                    top-3
                    right-3
                    text-[#caa193]
                    text-[7px]
                    tracking-wider
                    font-conthrax
                  "
                >
                  0{index + 1}
                </span>
              </div>

              {/* Project Content */}
              <div className="bg-black/95">
                <div className="h-[2px] bg-gradient-to-r from-[#caa193] to-[#a0624d]" />

                <div className="px-3 py-3">
                  <p
                    className="
                      text-[#caa193]
                      text-[7px]
                      tracking-[0.15em]
                      font-conthrax
                      uppercase
                    "
                  >
                    {project.type}
                  </p>

                  <h3
                    className="
                      mt-1.5
                      text-[11px]
                      sm:text-xs
                      font-conthrax
                      tracking-wide
                      uppercase
                      leading-relaxed
                    "
                  >
                    {project.title}
                  </h3>

                  <div
                    className="
                      mt-2
                      flex
                      flex-wrap
                      items-center
                      gap-x-2
                      gap-y-1
                      text-[8px]
                      text-gray-400
                      font-play
                      uppercase
                    "
                  >
                    <span>{project.size}</span>

                    <span className="w-1 h-1 rounded-full bg-[#caa193]" />

                    <span>{project.location}</span>
                  </div>

                  {/* Award / Outcome */}
                  {index === 0 && (
                    <p
                      className="
                        mt-2
                        text-gray-400
                        text-[8px]
                        leading-relaxed
                        font-play
                        line-clamp-2
                      "
                    >
                      {project.outcome}
                    </p>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-7 flex justify-center">
          <a
            href="mailto:info@wedointerior.ae"
            className="
              uppercase
              font-conthrax
              tracking-wide
              px-6
              sm:px-10
              py-2.5
              text-[8px]
              sm:text-[9px]
              text-[#caa193]
              border
              border-[#caa193]/70
              transition-all
              duration-300
              hover:bg-[#caa193]
              hover:text-black
            "
          >
            SEND YOUR ENQUIRY
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;