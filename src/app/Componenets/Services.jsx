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
        <h2 className="text-white mt-10 text-[12px] sm:text-xl tracking-widest font-conthrax text-center">
         Design, Build and Interior Fit-Out in Dubai
        </h2>
    <p className="max-w-6xl mx-auto mt-0 text-[12px] text-center sm:text-base text-gray-300 py-2 md:py-6 font-play">Design is only half the job. Our own fit-out crews turn approved drawings into finished spaces: partitions, ceilings, flooring, <br /> joinery and decoration, coordinated with MEP works and authority approvals. That makes us a designer and a fit-out <br />contractor in one, so what you approve in 3D is what you get on handover day. </p>
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
