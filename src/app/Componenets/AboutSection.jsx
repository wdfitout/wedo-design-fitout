"use client";

import Image from "next/image";
import React from "react";

const features = [
  {
    title: "INDUSTRY-LEADING EXPERTISE",
    description:
      "Our skilled interior designers in Dubai specialize in luxury villa interior design, corporate office spaces, premium retail outlets, and prime fit-outs. We stay ahead with the latest interior design trends in Dubai, ensuring modern elegance with timeless appeal.",
  },
  {
    title: "CREATIVE & INNOVATIVE DESIGN",
    description:
      "We don’t just follow interior design trends—we set them. Whether it’s modern apartment design, luxury villa interiors, bedroom ceiling design, joinery works, or statement pieces, our attention to details transforms every space into a masterpiece.",
  },
  {
    title: "CLIENT-CENTRIC APPROACH",
    description:
      "Your vision is our priority. We are always ready to listen to you and take the time to understand your lifestyle and preferences. Creating custom interior design solutions that reflect your personality and enhance functionality—it’s all about bringing your vision to life.",
  },
  {
    title: "TURN KEY SOLUTIONS",
    description:
      "From initial concept to final execution of design, we provide end-to-end interior design and fit-out services in Dubai. Whether you need a complete villa transformation or a high-end commercial interior, we handle everything with precision.",
  },
];

const AboutSection = () => {
  return (
    <section id="about-us" className="bg-[url('/images/bg-sec-3.webp')] bg-cover bg-center bg-no-repeat text-white overflow-hidden">
      {/* Top Intro Text */}
      <div className="px-4 sm:px-6 md:px-12 lg:px-20 xl:px-28 pt-12 text-start text-sm sm:text-base max-w-6xl mx-auto text-gray-300 font-play">
        <h2 className="text-white text-lg lg:text-4xl font-bold text-center mb-6">
          DESIGNING DREAMS, CRAFTING REALITY – INTERIOR DESIGN DUBAI, UAE
        </h2>
        <p>
          Are you looking for the best interior design company in Dubai, UAE? At <b>Interior Design Company Dubai - WeDo Design & Fitout</b>, we specialize in high-end interiors and <a href="https://wedointerior.ae/fitout-company-dubai" target="_blank"><b>fit-out services</b></a> that fuse creativity, precision, and style. From residential villas to commercial spaces, we craft designs that reflect luxury lifestyles and refined workplaces.
        </p>
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
      <div className="relative px-4 sm:px-6 md:px-12 lg:px-20 xl:px-28 py-12 bg-no-repeat bg-cover bg-[url('/images/mobile-wire.svg')] lg:bg-[url('/images/desktop-wire.svg')]">

        {/* Arrow */}
        <div className="flex py-4 justify-center">
          <Image
            src="/images/sec-dvd.webp"
            alt="Scroll down arrow"
            width={320}
            height={80}
            className="h-auto w-48 sm:w-64"
          />
        </div>

        {/* Why Choose WEDO */}
        <div className="text-center mb-8">
          <h2 className="text-sm sm:text-xl text-white tracking-widest font-conthrax py-5">
            WHY CHOOSE WEDO INTERIOR?
          </h2>
          <p className="max-w-6xl mx-auto mt-4 text-sm sm:text-base text-gray-300 py-6 font-play">
            As one of the top interior design companies in Dubai, our team offers more than 10 years of expertise in residential and commercial interior design. We focus on elegance, functionality, and personalized client service to turn your dream space into reality.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-sm sm:text-base mt-10 mb-10 sm:mb-20">
          {features.map((feature, index) => (
            <div key={index} className="space-y-3 px-2 text-start">
              <h3 className="text-[#caa193] font-conthrax uppercase tracking-wide text-center">
                {feature.title}
              </h3>
              <p className="text-gray-300 leading-relaxed font-play">
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
