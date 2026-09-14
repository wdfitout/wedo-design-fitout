"use client";

import Image from "next/image";
import React from "react";

const trustItems = [
  {
    value: "2015",
    label: "Founded",
  },
  {
    value: "250+",
    label: "Projects Delivered",
  },
  {
    value: "ISO",
    label: "9001 · 14001 · 45001",
  },
  {
    value: "2026",
    label: "Luxury Lifestyle Awards",
  },
  {
    value: "IN-HOUSE",
    label: "Joinery Factory",
  },
];

const features = [
  {
    title: "ONE ROOF, ALL SOLUTIONS",
    description:
      "Interior design, architectural design, landscape design, smart home automation, joinery and fit-out are all delivered by our own teams. That means one bill of quantities instead of four, and no variation order because two firms read the same drawing differently.",
  },
  {
    title: "OWN DESIGNERS AND FACTORY",
    description:
      "Our interior designers produce your layouts, 3D visuals and a VR walkthrough, so you can stand inside the design before anything is built. Kitchens, wardrobes and wall panelling are then made in our own joinery factory from those approved drawings, with quality checked during production rather than after delivery.",
  },
  {
    title: "APPROVALS HANDLED FOR YOU",
    description:
      "Our approvals team prepares and submits packages to Dubai Civil Defence, Dubai Municipality and developers such as Emaar and Damac. Approval delays are one of the most common reasons Dubai projects miss handover, and chasing them is never your job.",
  },
  {
    title: "CERTIFIED AND AWARD-WINNING",
    description:
      "We hold ISO 9001:2015, ISO 14001:2015 and ISO 45001:2018, each externally audited rather than self-declared. Our Primo Tower apartment won Best Luxury Residential Renovation Interior Design at the Luxury Lifestyle Awards.",
  },
];

const AboutSection = () => {
  return (
    <section
      id="about-us"
      className="
        bg-[url('/images/bg-sec-3-mobile.webp')]
        sm:bg-[url('/images/bg-sec-3.webp')]
        bg-cover
        bg-center
        bg-no-repeat
        text-white
        overflow-hidden
      "
    >
      {/* Top Intro Text */}
      <div
        className="
          px-4
          sm:px-6
          md:px-12
          lg:px-20
          xl:px-28
          pt-6
          text-justify
          text-[12px]
          sm:text-base
          max-w-6xl
          mx-auto
          text-gray-300
          font-play
        "
      >
        <p>
          Good interior design should look the same on handover day as it did
          in the render. At WE DO Interior Design & Fit out, the interior
          designers who plan your space work alongside our own joinery factory,
          fit-out crews and approvals team, so nothing gets lost between the
          drawing and the build. Since 2015 we have delivered 250+ homes and
          commercial spaces across Dubai, from villas and apartments to
          offices, clinics and restaurants.
        </p>
      </div>

      {/* Luxury Credentials / Trust Bar */}
      <div
        className="
          px-4
          sm:px-6
          md:px-12
          lg:px-20
          xl:px-28
          mt-6
          md:mt-10
        "
      >
        <div
          className="
            max-w-7xl
            mx-auto
            grid
            grid-cols-2
            md:grid-cols-5
            border-y
            border-white/10
          "
        >
          {trustItems.map((item, index) => (
            <div
              key={item.label}
              className={`
                flex
                flex-col
                items-center
                justify-center
                text-center
                py-5
                md:py-7
                px-3
                ${
                  index < 4
                    ? "md:border-r md:border-white/10"
                    : ""
                }
                ${
                  index < 2
                    ? "border-b border-white/10 md:border-b-0"
                    : ""
                }
              `}
            >
              <span
                className="
                  text-[#caa193]
                  text-sm
                  sm:text-base
                  md:text-lg
                  font-conthrax
                  tracking-wide
                "
              >
                {item.value}
              </span>

              <span
                className="
                  mt-1.5
                  text-[8px]
                  sm:text-[9px]
                  md:text-[10px]
                  uppercase
                  tracking-[0.16em]
                  text-white/60
                  font-play
                "
              >
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Wireframe and Content Section */}
      <div
        className="
          relative
          px-4
          sm:px-6
          md:px-12
          lg:px-20
          xl:px-28
          py-4
          md:py-12
          bg-no-repeat
          bg-cover
          bg-[url('/images/mobile-wire.svg')]
          lg:bg-[url('/images/desktop-wire.svg')]
        "
      >
        {/* Arrow */}
        <div className="flex py-4 justify-center">
          <Image
            src="/images/sec-dvd.webp"
            alt="Scroll down arrow"
            width={320}
            height={80}
            className="h-auto w-32 sm:w-64"
          />
        </div>

        {/* Why Choose WEDO */}
        <div className="text-center mb-0 md:mb-5">
          <h2
            className="
              text-[12px]
              sm:text-xl
              text-white
              tracking-widest
              font-conthrax
              py-0
              md:py-5
            "
          >
            WHY CHOOSE WE DO INTERIOR DESIGN COMPANY?
          </h2>

          <p
            className="
              max-w-6xl
              mx-auto
              mt-0
              text-[12px]
              sm:text-base
              text-gray-300
              py-2
              md:py-6
              font-play
              text-align: justify;
                  text-justify: inter-word;
                   word-spacing: 0;
            "
          >
            There is no shortage of interior design companies in Dubai. When a
            project slips past its budget or its handover date, the cause is
            usually the gap between the company that drew the design and the
            contractor who built it. We built WE DO to close that gap. Design,
            joinery, fit-out and approvals all sit inside one company, under
            one project manager, so there is never a question about who owns
            the result.
          </p>
        </div>

        {/* Features */}
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-4
            gap-10
            text-sm
            sm:text-base
            mt-10
            mb-6
            sm:mb-0
          "
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="space-y-3 px-2 text-start"
            >
              <h3
                className="
                  text-[#caa193]
                  text-[12px]
                  font-conthrax
                  uppercase
                  tracking-wide
                  
                "
              >
                {feature.title}
              </h3>

              <p
                className="
                  text-white
                  text-[10px]
                  sm:text-sm
                  leading-relaxed
                  font-play
                  text-left
                
                "
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;