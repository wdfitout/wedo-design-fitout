"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const projects = [
     {
    img: "/images/apartment-dining-area-interior-design-dubai-silicon-oasis.png",
    alt: "Apartment Interior Design DSO",
    title: "Dubai Silicon Oasis Apartment in Dubai",
    href: "/dubai-silicon-oasis-apartment",
  },
  {
    img: "/images/primo-sitting.jpg",
    alt: "Apartment Interior Design",
    title: "ii PRIMO PENTHOUSE",
    href: "/ii-primo-penthouse",
  },
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
    img: "/images/pjapt (5).webp",
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
    img: "/images/dtrest (2).webp",
    alt: "Home Interior Design",
    title: "DOWNTOWN DUBAI RESTAURANT",
    href: "/downtown-dubai-restaurant",
  },
  {
    img: "/images/Residential (1).webp",
    alt: "Apartment Interior Design",
    title: "ROYAL ATLANTIS APARTMENT",
    href: "/royal-atlantis-apartment",
  },
  {
    img: "/images/lila-milano (1).webp",
    alt: "Restaurant Interior Design",
    title: "AL QUOZ CAFE INTERIOR",
    href: "/al-quoz-cafe-interior",
  },
    {
    img: "/images/Residential (2).webp",
    alt: "Home Interior Design",
    title: "EMAAR BEACH FRONT MARINA VISTA APARTMENT",
    href: "/emaar-beach-front-marina-vista-apartment",
  },
  {
    img: "/images/restaurant (1).webp",
    alt: "Apartment Interior Design",
    title: "AL QUOZ CENTRAL KITCHEN",
    href: "/al-quoz-central-kitchen",
  },
  {
    img: "/images/Residential (3).webp",
    alt: "Restaurant Interior Design",
    title: "AL MANARA LUXURY VILLA",
    href: "/al-manara-luxury-villa",
  },
    {
    img: "/images/restaurant (2).webp",
    alt: "Home Interior Design",
    title: "AL BARSHA LOUNGE",
    href: "/al-barsha-lounge",
  },
  {
    img: "/images/magapt (10).png",
    alt: "Apartment Interior Design",
    title: "MARINA GATE PENTHOUSE",
    href: "/marina-gate-penthouse",
  },
  {
    img: "/images/restaurant (3).webp",
    alt: "Restaurant Interior Design",
    title: "JBR RESTAURANT INTERIOR",
    href: "/jbr-restaurant-interior",
  },
    {
    img: "/images/Residential (4).webp",
    alt: "Home Interior Design",
    title: "PALM JUMEIRAH 2 BEDROOM PENTHOUSE",
    href: "/palm-jumeirah-2-bedroom-penthouse",
  },
  {
    img: "/images/mjapt (9).png",
    alt: "Apartment Interior Design",
    title: "MADINAT JUMEIRAH LIVING ASAYEL APARTMENT",
    href: "/madinat-jumeirah-living-asayel-apartment",
  },
  {
    img: "/images/luxury-facial-studio-design-in-dubai-hills-mall.webp",
    alt: "Restaurant Interior Design",
    title: "DUBAI HILLS MALL FACIAL STUDIO",
    href: "/dubai-hills-mall-facial-studio",
  },
    {
    img: "/images/commercial-office-reception-interior-design-dubai.webp",
    alt: "Home Interior Design",
    title: "DUBAI KNOWLEDGE PARK OFFICE FIT OUT",
    href: "/dubai-knowledge-park-office-fit-out",
  },
  {
    img: "/images/restaurant (4).webp",
    alt: "Restaurant Interior Design",
    title: "PALM JUMEIRAH F&B",
    href: "/palm-jumeirah-f&b",
  },
    {
    img: "/images/restaurant (5).webp",
    alt: "Home Interior Design",
    title: "AL SAFA CAFE DESIGN",
    href: "/al-safa-cafe-design",
  },
  {
    img: "/images/fvapt (1).png",
    alt: "Apartment Interior Design",
    title: "FOUNTAIN VIEWS APARTMENT",
    href: "/fountain-views-apartment",
  },
    {
    img: "/images/tess-avenue-beauty-salon-elegant-interior-design-jumeirah-1-dubai.webp",
    alt: "Home Interior Design",
    title: "JUMEIRAH 1 BEAUTY SALON",
    href: "/jumeirah-1-beauty-salon",
  },
  {
    img: "/images/dbckapt (5).png",
    alt: "Apartment Interior Design",
    title: "DUBAI CREEK 2 BEDROOM APARTMENT",
    href: "/dubai-creek-2-bedroom-apartment",
  },
  {
    img: "/images/startech (1).webp",
    alt: "Restaurant Interior Design",
    title: "BUSINESS BAY OFFICE FIT OUT",
    href: "/business-bay-office-fit-out",
  },
    {
    img: "/images/d1villa (1).webp",
    alt: "Home Interior Design",
    title: "DISTRICT ONE CONTEMPORARY VILLA",
    href: "/district-one-contemporary-villa",
  },
  {
    img: "/images/restaurant (6).webp",
    alt: "Apartment Interior Design",
    title: "WORLD TRADE CENTER RESTAURANT",
    href: "/world-trade-center-restaurant",
  },
  {
    img: "/images/restaurant (7).webp",
    alt: "Restaurant Interior Design",
    title: "BUSINESS BAY RESTAURANT",
    href: "/business-bay-restaurant",
  },
    {
    img: "/images/d1mbr (1).png",
    alt: "Home Interior Design",
    title: "DISTRICT 1 MBR CITY CONTEMPORARY VILLA",
    href: "/district-1-mbr-city-contemporary-villa",
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
    img: "/images/barber-shop-interior-design-in-palm-jumeirah-dubai.webp",
    alt: "Home Interior Design",
    title: "PALM JUMEIRAH BARBER SHOP",
    href: "/palm-jumeirah-barber-shop",
  },
  {
    img: "/images/sns (1).webp",
    alt: "Apartment Interior Design",
    title: "DUBAI OFFICE INTERIOR",
    href: "/dubai-office-interior",
  },
  {
    img: "/images/ctwkapt (1).png",
    alt: "Restaurant Interior Design",
    title: "CITY WALK 2 BEDROOM APARTMENT",
    href: "/city-walk-2-bedroom-apartment",
  },
    {
    img: "/images/restaurant (8).webp",
    alt: "Home Interior Design",
    title: "DOWNTOWN CAFE DESIGN",
    href: "/downtown-cafe-design",
  },
  {
    img: "/images/restaurant (9).webp",
    alt: "Apartment Interior Design",
    title: "AL SUFOUH ESPRESSO BAR",
    href: "/al-sufouh-espresso-bar",
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
    img: "/images/classyym (1).webp",
    alt: "Apartment Interior Design",
    title: "AL WASL CLOTHING STORE",
    href: "/al-wasl-clothing-store",
  },
  {
    img: "/images/blapt (4).PNG",
    alt: "Restaurant Interior Design",
    title: "BULGARI 3 BEDROOM APARTMENT",
    href: "/bulgari-3-bedroom-apartment",
  },
    {
    img: "/images/commercial (4).webp",
    alt: "Home Interior Design",
    title: "AL SAFA REAL ESTATE OFFICE",
    href: "/al-safa-real-estate-office",
  },
  {
    img: "/images/restaurant (10).webp",
    alt: "Apartment Interior Design",
    title: "BLUEWATERS CAFE INTERIOR",
    href: "/bluewaters-cafe-interior",
  },
  {
    img: "/images/blpph (1).png",
    alt: "Restaurant Interior Design",
    title: "BOULEVARD POINT PENTHOUSE",
    href: "/boulevard-point-penthouse",
  },
    {
    img: "/images/restaurant (11).webp",
    alt: "Home Interior Design",
    title: "BUSINESS BAY CAFE INTERIOR",
    href: "/business-bay-cafe-interior",
  },
  {
    img: "/images/arth (1).png",
    alt: "Apartment Interior Design",
    title: "ARABELLA 2 BEDROOM TOWNHOUSE",
    href: "/arabella-2-bedroom-townhouse",
  },
  {
    img: "/images/Residential (8).webp",
    alt: "Restaurant Interior Design",
    title: "MAJAN VILLA DESIGN",
    href: "/majan-villa-design",
  },
    {
    img: "/images/boutique-interior-design-in-umm-suqeim-dubai.webp",
    alt: "Home Interior Design",
    title: "UMM SUQEIM BOUTIQUE",
    href: "/umm-suqeim-boutique",
  },
  {
    img: "/images/adskv (3).png",
    alt: "Apartment Interior Design",
    title: "ADDRESS SKYVIEW 3 BEDROOM APARTMENT",
    href: "/address-skyview-3-bedroom-apartment",
  },
  {
    img: "/images/commercial (5).webp",
    alt: "Restaurant Interior Design",
    title: "BUSINESS BAY TRAVEL AGENCY",
    href: "/business-bay-travel-agency",
  },
    {
    img: "/images/xaima (5).webp",
    alt: "Home Interior Design",
    title: "DUBAI RESTAURANT INTERIOR FIT OUT",
    href: "/dubai-restaurant-interior-fit-out",
  },
  {
    img: "/images/adbr (1).png",
    alt: "Apartment Interior Design",
    title: "ADDRESS BEACH RESORT APARTMENT",
    href: "/address-beach-resort-apartment",
  },
  {
    img: "/images/restaurant (13).webp",
    alt: "Restaurant Interior Design",
    title: "DUBAI MALL RESTAURANT",
    href: "/dubai-mall-restaurant",
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
            OUR PROJECTS IN DUBAI
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
