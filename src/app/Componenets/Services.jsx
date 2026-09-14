"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    href: "/design-build-services-in-dubai",
    icon: "/images/ico1.svg",
    title: "DESIGN & BUILD",
    desc:
      "One contract for design, approvals, construction and fit-out, with faster pricing, no tender gap and single-point liability.",
  },
  {
    href: "/villa-construction-dubai",
    icon: "/images/ico2.svg",
    title: "VILLA CONSTRUCTION",
    desc:
      "Ground-up villa construction with structure, services and interiors coordinated from the same drawings, so the interior is designed in rather than fitted afterwards.",
  },
  {
    href: "/fit-out-company-dubai",
    icon: "/images/ico3.svg",
    title: "FITOUT",
    desc:
      "Turnkey interior fit-out for villas, apartments, offices, restaurants and retail, delivered by our own crews rather than subcontracted out.",
  },
  {
    href: "/joinery-company-dubai",
    icon: "/images/ico4.svg",
    title: "JOINERY & MANUFACTURING",
    desc:
      "Wardrobes, kitchens, panelling and furniture made in our own Dubai factory to your drawings, not adapted from a catalogue.",
  },
];

const processSteps = [
  "Consultation",
  "Mood Board",
  "3D & VR",
  "Drawings & BOQ",
  "Approvals",
  "Joinery & Fit-Out",
  "Snagging & Handover",
];

const Services = () => {
  return (
    <section
      id="services"
      className="
        bg-black
        py-4 md:py-5
        bg-[url('/images/bg-svc-m.webp')]
        sm:bg-[url('/images/bg-svc-d.webp')]
        bg-cover
        bg-center
        bg-no-repeat
        text-white
        overflow-hidden
      "
    >
      <div className="w-[90%] sm:w-[85%] md:w-[80%] lg:w-[80%] mx-auto mb-10">
        {/* Arrow image */}
        <div className="mt-20 md:mt-10 flex justify-center">
          <Image
            src="/images/sec-dvd.webp"
            alt="Scroll down indicator"
            width={320}
            height={80}
            className="h-auto w-32 sm:w-64"
          />
        </div>

        {/* Section Heading */}
        <h2
          className="
            text-white
            mt-10
            text-[12px]
            sm:text-xl
            tracking-widest
            font-conthrax
            text-center
          "
        >
          Design, Build and Interior Fit-Out in Dubai
        </h2>

        <p
          className="
            max-w-6xl
            mx-auto
            mt-0
            text-[12px]
            text-center
            sm:text-base
            text-gray-300
            py-2
            md:py-6
            font-play
          "
        >
          Design is only half the job. Our own fit-out crews turn approved
          drawings into finished spaces: partitions, ceilings, flooring,
          <br className="hidden md:block" />
          joinery and decoration, coordinated with MEP works and authority
          approvals. That makes us a designer and a fit-out
          <br className="hidden md:block" />
          contractor in one, so what you approve in 3D is what you get on
          handover day.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Link href={service.href} key={index}>
              <div
                className="
                  group
                  p-4
                  h-full
                  flex
                  flex-col
                  items-center
                  text-center
                  hover:bg-[#1a1a1a]
                  transition
                  duration-300
                  rounded-xl
                  cursor-pointer
                  shadow-lg
                "
              >
                {/* Icon */}
                <Image
                  src={service.icon}
                  alt={`${service.title} icon`}
                  width={60}
                  height={60}
                  className="mb-6"
                />

                {/* Title */}
                <h3
                  className="
                    text-xs
                    font-conthrax
                    uppercase
                    mb-3
                    text-white
                    tracking-wide
                  "
                >
                  <span className="text-[#daa796]">
                    {service.title}
                  </span>
                </h3>

                {/* Description */}
                <p className="text-sm text-white leading-relaxed font-play">
                  {service.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Process Strip */}
        <div className="mt-14 md:mt-10">
           <h2
          className="
            text-white
            mt-5
            mb-5
            text-[12px]
            sm:text-xl
            tracking-widest
            font-conthrax
            text-center
          "
        >
   Our Process        </h2>

          {/* Desktop Process */}
          <div className="hidden lg:flex items-stretch w-full border-y border-white/10">
            {processSteps.map((step, index) => (
              <div
                key={step}
                className={`
                  relative
                  flex-1
                  min-h-[90px]
                  flex
                  flex-col
                  items-center
                  justify-center
                  px-3
                  text-center
                  ${
                    index !== processSteps.length - 1
                      ? "border-r border-white/10"
                      : ""
                  }
                `}
              >
                <span
                  className="
                    text-[9px]
                    text-[#caa193]
                    font-conthrax
                    tracking-wider
                    mb-2
                  "
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span
                  className="
                    text-[9px]
                    xl:text-[10px]
                    uppercase
                    tracking-[0.08em]
                    text-white/80
                    font-conthrax
                    leading-relaxed
                  "
                >
                  {step}
                </span>
              </div>
            ))}
          </div>

          {/* Tablet / Mobile Process */}
          <div
            className="
              lg:hidden
              grid
              grid-cols-2
              sm:grid-cols-4
              border-y
              border-white/10
            "
          >
            {processSteps.map((step, index) => (
              <div
                key={step}
                className="
                  min-h-[80px]
                  flex
                  flex-col
                  items-center
                  justify-center
                  text-center
                  px-3
                  py-4
                  border-b
                  border-white/10
                  sm:border-r
                  last:border-r-0
                "
              >
                <span
                  className="
                    text-[9px]
                    text-[#caa193]
                    font-conthrax
                    tracking-wider
                    mb-1.5
                  "
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span
                  className="
                    text-[8px]
                    sm:text-[9px]
                    uppercase
                    tracking-[0.08em]
                    text-white/80
                    font-conthrax
                    leading-relaxed
                  "
                >
                  {step}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;