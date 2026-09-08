"use client";

import Image from "next/image";
import React from "react";

const features = [
  {
    title: "INDUSTRY-LEADING EXPERTISE",
    description:
      "Our team of expert engineers and interior designers in Dubai has delivered large-scale commercial fit-out and residential interiors across major districts like DIFC, Business Bay, and Palm Jumeirah. From smart office interior to luxury villa renovations in Emirates Hills, we ensure compliance, speed, and style.Our award-winning renovation at Primo Tower covered selective demolition, MEP upgrades, custom joinery, luxury parquet flooring and complete fit-out across the entrance corridor, living areas, four bedrooms, walk-in closets and kitchen.",
  },
  {
    title: "CREATIVE & INNOVATIVE DESIGN",
    description:
      "WE DO doesn’t follow trends—we lead them. From bold retail interior design in Downtown to visionary corporate fitouts in DIFC, we deliver environments that are beautiful, brand-aligned, and adaptive. Every project is visualised in 3D before construction starts, so you approve a picture rather than a description. Changes at that stage cost nothing. Changes on site cost weeks. Whether it’s restaurant interior design Dubai or F&B fitout in DFC, we transform spaces into unforgettable experiences",
  },
  {
    title: "CLIENT-CENTRIC APPROACH",
    description:
      "Each project begins by attentively and deeply understanding your brand, goals, and lifestyle. Whether we are designing a residential interior in Palm Jumeirah, implementing a restaurant fitout in Business Bay, or developing a bespoke corporate interior fit-out in Downtown Dubai, we ensure clarity, innovation, and full control over the project. You deal with one project manager from the first site visit to handover. Fixed-scope quote, staged payments against milestones, and a written workmanship warranty starting at handover.",
  },
  {
    title: "TURNKEY SOLUTIONS WITH PRECISION",
    description:
      "A single turnkey contract closes the gap where most fit-out budgets get blown: the handoff between designer and contractor. Our in-house team carries every project from 3D concept through MEP engineering, joinery fabrication, and site execution under one point of responsibility, so the drawing you approve is the space you actually get. One contract, one team, from authority approvals to final snagging — no subcontractor blame-shifting, no surprise variations mid-build.",
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
       WE DO Interior Design & Fit-Out delivers turnkey interior design, renovation and fit-out services for residential and commercial spaces in dubai. Design, MEP, joinery and site execution under one contract. In 2026 we won Best Luxury Residential Renovation Interior Design, Dubai UAE at the Luxury Lifestyle Awards, for a four-bedroom renovation at Primo Tower by Emaar in Downtown Dubai. Our recent work includes apartments at Marina Gate 2, Business Bay, Atlantis The Royal, Emaar Beach Front and Acacia in Dubai Hills, and villas in District One and Al Manara. 
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
        <div className="text-center mb-0 md:mb-8">
          <h2 className="text-[12px] sm:text-xl text-white tracking-widest font-conthrax py-0 md:py-5">
            WHY CHOOSE WEDO INTERIOR?
          </h2>
          <p className="max-w-6xl mx-auto mt-0 md:mt-4 text-[12px] sm:text-base text-gray-300 py-2 md:py-6 font-play">
          In a landscape filled with fit out companies in Dubai, WE DO Interior Design & Fit-Out stands apart through consistency, design excellence, and reliability. Whether it's a corporate HQ in Business Bay, a boutique in Palm Jumeirah, or a flagship venue in Dubai Festival City (DFC), we treat every space as an opportunity to innovate.One contract covers design, approvals, construction and joinery. Our own team handles every stage, so there's no gap between the designer who drew it and the contractor who builds it. DED-registered and certified to ISO 9001 (quality), ISO 14001 (environmental) and ISO 45001 (health and safety). Developer NOCs, DEWA submissions and Dubai Municipality approvals are prepared and filed by us.
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