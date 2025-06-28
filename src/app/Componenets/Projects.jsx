"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    img: "/images/manara villa (33).webp",
    alt: "Home Interior Design",
    title: "VILLA PROJECTS",
    desc: "Elevate your living experience with our premier home interior design services in Dubai. As a top interior design company, we transform residences into.",
    slug: "home-interior-design-dubai",
  },
  {
    img: "/images/modern-apartment-interior-design-in-dubai.webp",
    alt: "Modern Apartment Interior Design",
    title: "APARTMENT PROJECTS",
    desc: "Our apartment interior designs blend comfort and sophistication. Whether it's Downtown Dubai or Palm Jumeirah, we turn your apartment into haven.",
    slug: "home-interior-design-dubai",
  },
  {
    img: "/images/dubai-interior-design-company-restaurant-counter.webp",
    alt: "Restaurant Interior Design",
    title: "RESTAURANT PROJECTS",
    desc: "Create unforgettable dining ambience with our luxury restaurant interior design services. From fine dining spaces to cafés, our designs evoke.",
    slug: "restaurant-interior-design-dubai",
  },
  {
    img: "/images/x.learning (3).webp",
    alt: "Office Interior Design",
    title: "OFFICE PROJECTS",
    desc: "Transform your workspace into a high-performing environment. Our commercial interiors promote productivity through modern, aesthetic design.",
    slug: "commercial-interior-design-dubai",
  },
  {
    img: "/images/beauty-salon-spa-retail-interior-design.webp",
    alt: "Retail Interior Design",
    title: "RETAIL PROJECTS",
    desc: "Enhance your boutique, salon, or spa with immersive retail interiors. We bring elegance and purpose to retail design in Dubai’s most vibrant shopping.",
    slug: "retail-interior-design-dubai",
  },
  {
    img: "/images/villa-construction-dubai.webp",
    alt: "Villa Construction",
    title: "VILLA CONSTRUCTION",
    desc: "From foundation to finishing, our villa construction services in Dubai deliver excellence. We combine architecture, interiors, and fit-outs.",
    slug: "villa-construction-dubai",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-[url('/images/bg-sec-2.webp')] bg-cover bg-center bg-no-repeat text-white"
    >
      {/* Arrow icon */}
      <div className="mt-16 flex justify-center">
        <Image
          src="/images/sec-dvd.webp"
          alt="Scroll down arrow"
          width={320}
          height={80}
          className="h-auto w-48 sm:w-64"
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-16 py-6 sm:py-16">
        {/* Section Title + Button */}
        <div className="relative mb-12">
          <h2 className="text-lg sm:text-xl font-conthrax tracking-wider text-center">
            OUR PROJECTS IN DUBAI
          </h2>
          <div className="mt-4 md:mt-0 md:absolute right-0 top-1/2 transform md:-translate-y-1/2 flex justify-center md:justify-end">
            <Link
              href="/gallery"
              className="uppercase font-conthrax tracking-wide px-6 py-1 text-sm text-[#a0624d] bg-transparent transition duration-300 hover:bg-[#caa193]/10 border border-transparent"
              style={{
                borderImage: "linear-gradient(to right, #caa193, #a0624d)",
                borderImageSlice: 1,
              }}
            >
              GALLERY
            </Link>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Link
              href={`/${project.slug}`}
              key={index}
              className="relative overflow-hidden group block h-full"
            >
              <Image
                src={project.img}
                alt={project.alt}
                width={800}
                height={600}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 w-full bg-black/80 z-10">
                <div className="w-full h-[3px] bg-gradient-to-r from-[#caa193] to-[#a0624d]" />
                <div className="p-1">
                  <h3 className="text-white font-conthrax text-lg text-start tracking-wider">
                    {project.title}
                  </h3>
                  <p className="text-sm leading-relaxed font-play text-white">
                    {project.desc}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-12 flex justify-center">
          <a
            href="mailto:info@wedointerior.ae"
            className="block font-conthrax tracking-wide px-6 py-2 text-xs md:px-16 md:py-3.5 md:text-sm text-[#a0624d] bg-transparent transition duration-300 hover:bg-[#caa193]/10 border border-transparent"
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

export default Projects;
