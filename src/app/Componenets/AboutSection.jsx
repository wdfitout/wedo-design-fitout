"use client";

import Image from "next/image";
import React from "react";

const features = [
  {
    title: "INDUSTRY-LEADING EXPERTISE",
    description:
      "Our team of expert engineers and interior designers in Dubai has delivered large-scale commercial fit-out and residential interiors across major districts like DIFC, Business Bay, and Palm Jumeirah. From smart office interior design Dubai to luxury villa renovations in Emirates Hills, we ensure compliance, speed, and style. Known as one of the top interior fit out companies in Dubai, our methodical project execution is trusted by both multinational firms and private homeowners.",
  },
  {
    title: "CREATIVE & INNOVATIVE DESIGN",
    description:
      "WE DO doesn’t follow trends—we lead them. From bold retail interior design Dubai in Downtown to visionary corporate fitouts in DIFC, we deliver environments that are beautiful, brand-aligned, and adaptive. Our design philosophy combines sustainability, technology, and custom craftsmanship—delivering interiors that inspire today and adapt tomorrow. Whether it’s restaurant interior design Dubai or F&B fitout in DFC, we transform spaces into unforgettable experiences",
  },
  {
    title: "CLIENT-CENTRIC APPROACH",
    description:
      "Each project begins by attentively and deeply understanding your brand, goals, and lifestyle. Whether we are designing a residential interior in Palm Jumeirah, implementing a restaurant fitout in Business Bay, or developing a bespoke corporate interior fit-out in Downtown Dubai, we ensure clarity, innovation, and full control over the project. It is this customized attention that makes WE DO one of the top interior design companies in Dubai according to business owners and property developers.",
  },
  {
    title: "TURNKEY SOLUTIONS WITH PRECISION",
    description:
      "Each project begins by attentively and deeply understanding your brand, goals, and lifestyle. Whether we are designing a residential interior in Palm Jumeirah, implementing a restaurant fitout in Business Bay, or developing a bespoke corporate interior fit-out in Downtown Dubai, we ensure clarity, innovation, and full control over the project. It is this customized attention that makes WE DO one of the top interior design companies in Dubai according to business owners and property developers.",
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
      <div className="px-4 sm:px-6 md:px-12 lg:px-20 xl:px-28 pt-2 text-center text-[12px] sm:text-base max-w-6xl mx-auto text-gray-300 font-play">
        <p>
        At WE DO Interior Design & Fit-Out, we deliver award-winning interior design Dubai services that redefine how commercial and residential spaces should feel and function. Popular among the best interior design companies in Dubai, we bring creativity, engineering precision, and site-tested execution to every project—whether it's a luxury villa interior design in Emirates Hills, a smart apartment interior design in Downtown Dubai, or a high-end office fitout in DIFC. With over 15 years of experience in industry, WEDO interior is among the leading interior companies in Dubai, shaping environments that reflect Dubai’s fast-paced, visionary culture.</p>
      </div>

      {/* Image Section */}
      <div className="w-full mt-5 px-4 sm:px-6 md:px-8">
        <div className="w-full max-w-[1200px] mx-auto">
          <Image
            src="/images/sec2-img1.webp"
            alt="Interior design Dubai"
            width={800}
            height={600}
            className="w-full h-auto"
          />
        </div>
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
          In a landscape filled with fit out companies in Dubai, WE DO Interior Design & Fit-Out stands apart through consistency, design excellence, and reliability. Whether it's a corporate HQ in Business Bay, a boutique in Palm Jumeirah, or a flagship venue in Dubai Festival City (DFC), we treat every space as an opportunity to innovate. Ranked among the top 10 interior design companies in Dubai, we combine global sensibility with local insight to execute projects that are both refined and future-ready.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-sm sm:text-base mt-10 mb-10 sm:mb-20">
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
