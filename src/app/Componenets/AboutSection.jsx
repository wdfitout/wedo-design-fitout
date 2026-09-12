"use client";

import Image from "next/image";
import React from "react";

const features = [
  {
    title: "ONE ROOF, ALL SOLUTIONS",
    description:
      "Interior design, architectural design, landscape design, smart home automation, joinery and fit-out are all delivered by our own teams. That means one bill of quantities instead of four, and no variation order because two firms read the same drawing differently.",
  },
  {
    title: "OWN DESIGNERS AND FACTORY",
    description:
      "Our Own Designers and Factory Our interior designers produce your layouts, 3D visuals and a VR walkthrough, so you can stand inside the design before anything is built. Kitchens, wardrobes and wall panelling are then made in our own joinery factory from those approved drawings, with quality checked during production rather than after delivery.",
  },
  {
    title: "APPROVALS HANDLED FOR YOU",
    description:
      "Our approvals team prepares and submits packages to Dubai Civil Defence, Dubai Municipality and developers such as Emaar and Damac. Approval delays are one of the most common reasons Dubai projects miss handover, and chasing them is never your job.",
  },
  {
    title: "CERTIFIED AND AWARD-WINNING",
    description:
      "We hold ISO 9001:2015, ISO 14001:2015 and ISO 45001:2018, each externally audited rather than self-declared. Our Primo Tower apartment won Best Luxury Residential Renovation Interior Design at the Luxury Lifestyle Awards",
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
    overflow-hidden"
>
      {/* Top Intro Text */}
      <div className="px-4 sm:px-6 md:px-12 lg:px-20 xl:px-28 pt-6 text-center text-[12px] sm:text-base max-w-6xl mx-auto text-gray-300 font-play">
        <p>
       Good interior design should look the same on handover day as it did in the render. At WE DO Interior Design & Fit out, the interior designers who plan your space work alongside our own joinery factory, fit-out crews and approvals team, so nothing gets lost between the drawing and the build. Since 2015 we have delivered 250+ homes and commercial spaces across Dubai, from villas and apartments to offices, clinics and restaurants.
        </p>
      </div>

      {/* Wireframe and Content Section */}
      <div className="relative px-4 sm:px-6 md:px-12 lg:px-20 xl:px-28 py-4 md:py-12 bg-no-repeat bg-cover bg-[url('/images/mobile-wire.svg')] lg:bg-[url('/images/desktop-wire.svg')]">

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
          <h2 className="text-[12px] sm:text-xl text-white tracking-widest font-conthrax py-0 md:py-5">
            WHY CHOOSE WEDO INTERIOR INTERIOR COMPANY?
          </h2>
          <p className="max-w-6xl mx-auto mt-0 text-[12px] sm:text-base text-gray-300 py-2 md:py-6 font-play">
         There is no shortage of interior design companies in Dubai. When a project slips
past its budget or its handover date, the cause is usually the gap between the company
that drew the design and the contractor who built it. We built WE DO to close that gap.
Design, joinery, fit-out and approvals all sit inside one company, under one project
manager, so there is never a question about who owns the result.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-sm sm:text-base mt-10 mb-6 sm:mb-0">
          {features.map((feature, index) => (
            <div key={index} className="space-y-3 px-2 text-start">
              <h3 className="text-[#caa193] text-[12px] font-conthrax uppercase tracking-wide text-center">
                {feature.title}
              </h3>
              <p className="text-white text-[10px] sm:text-sm leading-relaxed font-play">
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