"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    img: "/images/bba (8).webp",
    alt: "Home Interior Design",
    title: "BUSINESS BAY APARTMENT",
    href: "/business-bay-apartment",
  },
  {
    img: "/images/mg2-(1).webp",
    alt: "Apartment Interior Design",
    title: "MARINA GATE 2 LUXURY APARTMENT",
    href: "/marina-gate-2-luxury-apartment",
  },
  {
    img: "/images/adh (7).webp",
    alt: "Restaurant Interior Design",
    title: "ACCACIA DUBAI HILLS 2 BEDROOM APARTMENT",
    href: "/acacia-dubai-hills-2-bedroom-apartment",
  },
    {
    img: "/images/premium-apartment-interior-design-palm-jumeirah-dubai.jpg",
    alt: "Home Interior Design",
    title: "PALM JUMEIRAH APARTMENT",
    href: "/palm-jumeirah-apartment",
  },
  {
    img: "/images/dmapt (9).webp",
    alt: "Apartment Interior Design",
    title: "DUBAI MARINA LUXURY APARTMENT",
    href: "/dubai-marina-luxury-apartment",
  },
  {
    img: "/images/ATRD (14.1).webp",
    alt: "ROYAL ATLANTIS DUPLEX APARTMENT",
    title: "ROYAL ATLANTIS 2 BEDROOM APARTMENT",
    href: "/royal-atlantis-2-bedroom-apartment",
  },

  {
    img: "/images/Residential (1).webp",
    alt: "Apartment Interior Design",
    title: "ROYAL ATLANTIS APARTMENT",
    href: "/royal-atlantis-apartment",
  },

    {
    img: "/images/Residential (2).webp",
    alt: "Home Interior Design",
    title: "EMAAR BEACH FRONT MARINA VISTA APARTMENT",
    href: "/emaar-beach-front-marina-vista-apartment",
  },



  {
    img: "/images/modern-apartment-interior-design-in-dubai.webp",
    alt: "Apartment Interior Design",
    title: "MARINA GATE PENTHOUSE",
    href: "/marina-gate-penthouse",
  },

    {
    img: "/images/Residential (4).webp",
    alt: "Home Interior Design",
    title: "PALM JUMEIRAH 2 BEDROOM PENTHOUSE",
    href: "/palm-jumeirah-2-bedroom-penthouse",
  },
  {
    img: "/images/modern-apartment-interior-design-in-dubai.webp",
    alt: "Apartment Interior Design",
    title: "MADINAT JUMEIRAH LIVING ASAYEL APARTMENT",
    href: "/madinat-jumeirah-living-asayel-apartment",
  },

  {
    img: "/images/modern-apartment-interior-design-in-dubai.webp",
    alt: "Apartment Interior Design",
    title: "ii PRIMO PENTHOUSE",
    href: "/ii-primo-penthouse",
  },


  {
    img: "/images/fvapt (1).png",
    alt: "Apartment Interior Design",
    title: "FOUNTAIN VIEWS APARTMENT",
    href: "/fountain-views-apartment",
  },

  {
    img: "/images/dbckapt (5).png",
    alt: "Apartment Interior Design",
    title: "DUBAI CREEK 2 BEDROOM APARTMENT",
    href: "/dubai-creek-2-bedroom-apartment",
  },


  {
    img: "/images/Residential (6).webp",
    alt: "Apartment Interior Design",
    title: "PALM JUMEIRAH 6 BEDROOM PENTHOUSE",
    href: "/palm-jumeirah-6-bedroom-penthouse",
  },
  {
    img: "/images/dhth (5).png",
    alt: "Restaurant Interior Design",
    title: "DAMAC HILLS 3 BEDROOM TOWNHOUSE",
    href: "/damac-hills-3-bedroom-townhouse",
  },

  {
    img: "/images/ctwkapt (1).png",
    alt: "Restaurant Interior Design",
    title: "CITY WALK 2 BEDROOM APARTMENT",
    href: "/city-walk-2-bedroom-apartment",
  },

  {
    img: "/images/cnpkapt (1).PNG",
    alt: "Restaurant Interior Design",
    title: "CENTRAL PARK TOWERS 2 BEDROOM APARTMENT",
    href: "/central-park-towers-2-bedroom-apartment",
  },
    {
    img: "/images/Residential (7).webp",
    alt: "Home Interior Design",
    title: "AL WASL APARTMENT",
    href: "/al-wasl-apartment",
  },

  {
    img: "/images/blapt (4).PNG",
    alt: "Restaurant Interior Design",
    title: "BULGARI 3 BEDROOM APARTMENT",
    href: "/bulgari-3-bedroom-apartment",
  },

  {
    img: "/images/dubai-interior-design-company-restaurant-counter.webp",
    alt: "Restaurant Interior Design",
    title: "BOULEVARD POINT PENTHOUSE",
    href: "/boulevard-point-penthouse",
  },

  {
    img: "/images/arth (1).png",
    alt: "Apartment Interior Design",
    title: "ARABELLA 2 BEDROOM TOWNHOUSE",
    href: "/arabella-2-bedroom-townhouse",
  },

  {
    img: "/images/modern-apartment-interior-design-in-dubai.webp",
    alt: "Apartment Interior Design",
    title: "ADDRESS SKYVIEW 3 BEDROOM APARTMENT",
    href: "/address-skyview-3-bedroom-apartment",
  },

  {
    img: "/images/modern-apartment-interior-design-in-dubai.webp",
    alt: "Apartment Interior Design",
    title: "ADDRESS BEACH RESORT APARTMENT",
    href: "/address-beach-resort-apartment",
  },

];

const PProjects = () => {
  return (
    <section
      id="projects"
      className="bg-[url('/images/p-bg.webp')] bg-cover bg-center bg-no-repeat text-white"
    >
      {/* Arrow image */}
      <div className="mt-10 sm:mt-16 flex justify-center">
        <Image
          src="/images/sec-dvd.webp"
          alt="Scroll down arrow"
          width={320}
          height={80}
          className="h-auto w-48 sm:w-64"
          loading="lazy"
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-16 py-6 sm:py-16">
        {/* Section Title */}
        <div className="relative mb-6 sm:mb-12">
          <h2 className="text-lg sm:text-xl font-conthrax tracking-wider text-center">
            APRTMENT PROJECTS IN DUBAI
          </h2>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((card, index) => (
            <Link key={index} href={card.href}>
              <div className="relative aspect-[4/3] overflow-hidden group cursor-pointer w-full">
                <Image
                  src={card.img}
                  alt={card.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 w-full bg-black/80 z-10">
                  <div className="w-full h-[3px] bg-gradient-to-r from-[#caa193] to-[#a0624d]" />
                  <div className="p-2">
                    <h3 className="text-white text-sm font-paly text-center">{card.title}</h3>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-12 flex justify-center">
          <a
            href="mailto:info@wedointerior.ae"
            className="uppercase font-semibold tracking-wide px-20 py-3.5 text-sm text-[#a0624d] bg-transparent transition duration-300 hover:bg-[#caa193]/10 border border-transparent"
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

export default PProjects;
