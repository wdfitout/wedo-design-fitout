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
      "Elevating spaces to artistry as a top Design and Build service provider in Dubai. We turn your vision into an inspiring reality through architectural excellence and interior finesse.",
  },
  {
    href: "/villa-construction-dubai",
    icon: "/images/ico2.svg",
    title: "VILLA CONSTRUCTION",
    desc:
      "We are among the best villa construction companies in Dubai—building bespoke residences with quality materials, expert engineering, and elegant finishing.",
  },
  {
    href: "/fit-out-company-dubai",
    icon: "/images/ico3.svg",
    title: "FITOUT",
    desc:
      "One of the most trusted fit-out companies in Dubai, we offer turnkey interior fitout solutions—combining design, MEP, and precision execution for luxurious environments.",
  },
  {
    href: "/joinery-company-dubai",
    icon: "/images/ico4.svg",
    title: "JOINERY & MANUFACTURING",
    desc:
      "Custom-made joinery and woodwork crafted by expert artisans. From luxury wardrobes to reception counters, we manufacture premium fittings for every space.",
  },
];

const Services = () => {
  return (
    <section id="services" className="bg-black py-4 md:py-10
        bg-[url('/images/bg-svc-m.webp')] 
    sm:bg-[url('/images/bg-svc-d.webp')] 
    bg-cover 
    bg-center 
    bg-no-repeat 
    text-white 
    overflow-hidden">
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
        <h2 className="text-white mt-10 mb-10 text-[12px] sm:text-xl tracking-widest font-conthrax text-center">
          SERVICES WE PROVIDE
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Link href={service.href} key={index}>
              <div className="group p-4 h-full flex flex-col items-center text-center hover:bg-[#1a1a1a] transition duration-300 rounded-xl cursor-pointer shadow-lg">
                {/* Icon */}
                <Image
                  src={service.icon}
                  alt={`${service.title} icon`}
                  width={60}
                  height={60}
                  className="mb-6"
                />

                {/* Title */}
                <h3 className="text-xs font-conthrax uppercase mb-3 text-white tracking-wide">
                  <span className="text-[#daa796]">{service.title}</span>
                </h3>

                {/* Description */}
                <p className="text-sm text-white leading-relaxed font-play">
                  {service.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
