"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const cardData = [
  {
    title: "VILLA INTERIOR DESIGN",
    img: "/images/high-end-luxury-villa-interior-in-Dubai.png",
    desc: "Layout, joinery, lighting and landscape planned as one scheme for villas in Emirates Hills, Al Barari and Arabian Ranches.",
    link: "/villa-interior-design-dubai",
  },
  {
    title: "APARTMENT INTERIOR DESIGN",
    img: "/images/dubai-interior-design-companies-apartment-sitting-area.webp",
    desc: "Apartments and penthouses planned around building management rules and service-lift access in Dubai Marina, Business Bay and Downtown.",
    link: "/apartment-interior-design-dubai",
  },
  {
    title: "LANDSCAPE DESIGN DUBAI",
    img: "/images/luxury-villa-landscape-design-dubai.png",
    desc: "Gardens, pool decks and majlis terraces designed inhouse as an extension of the interior, and built to handle a Dubai summer.",
    link: "/landscape-design-dubai",
  },
  {
    title: "RESTAURANT INTERIOR DESIGN",
    img: "/images/crazymask (6).webp",
    desc: "Front-of-house atmosphere and a kitchen that still works on a busy night, with food-safety layout and approvals built into the drawings.",
    link: "/restaurant-interior-design",
  },
  {
    title: "OFFICE INTERIOR DESIGN",
    img: "/images/x.learning (7).webp",
    desc: "Workspaces in DIFC, Business Bay and Dubai Silicon Oasis, with acoustics, planning and landlord rules resolved before pricing.",
    link: "/office-interior-design-dubai",
  },
  {
    title: "BEAUTY SALON DESIGNS",
    img: "/images/dhfs (1).webp",
    desc: "Salon and spa interiors planned around wet-service plumbing, ventilation and the journey from reception chair to treatment room.",
    link: "/beauty-salon-interior-design-dubai",
  },
  {
    title: "CAFE INTERIOR DESIGN",
    img: "/images/karakna (10).webp",
    desc: "Designed around your brand and your real footfall, with a counter layout that holds up in the morning rush.",
    link: "/cafe-interior-design-dubai",
  },
  {
    title: "CLINICS INTERIOR DESIGN",
    img: "/images/modern clinic design in Dubai.png",
    desc: "Medical interiors meeting DHA layout and hygiene requirements, with waiting areas that feel calm rather than clinical.",
    link: "/clinic-interior-design-dubai",
  },
  {
    title: "HOTEL INTERIOR DESIGN",
    img: "/images/Hotel Interior Designs Dubai.png",
    desc: "Guest rooms, lobbies and F&B spaces specified for the wear a hotel actually takes.",
    link: "/hotel-interior-design-dubai",
  },
  {
    title: "BOUTIQUE DESIGNS",
    img: "/images/manalajaj (6).webp",
    desc: "Retail interiors built around sightlines, display density and the fitting-room moment that closes the sale.",
    link: "/boutique-interior-design-dubai",
  },
];

const Features = () => {
  return (
    <section id="features" className="bg-black py-0 md:py-4
     bg-[url('/images/bg-f-m.webp')] 
    sm:bg-[url('/images/bg-f-d.webp')] 
    bg-cover 
    bg-center 
    bg-no-repeat 
    text-white 
    overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Arrow image */}
        <div className="mt-0 sm:mt-10 flex justify-center">
          <Image
            src="/images/sec-dvd.webp"
            alt="Scroll down arrow"
            width={320}
            height={80}
            className="h-auto w-32 sm:w-64"
          />
        </div>

        {/* Section Heading */}
        <h2 className="text-white mt-6 md:mt-10  text-[12px] sm:text-xl tracking-widest font-conthrax text-center">
          INTERIOR DESIGN SERVICES IN DUBAI
        </h2>
         <p className="max-w-6xl mx-auto mt-0 text-[12px] text-center sm:text-base text-gray-300 py-2 md:py-6 font-play">Ten specialisations, each led by designers who work on that type of space every week. </p>
    
        {/* Grid */}
        {/* Grid */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-10">
  {cardData.map((card, index) => (
    <Link href={card.link} key={index}>
      <div className="text-left group cursor-pointer">
        {/* Title */}
        <h3 className="text-white text-[12px] md:text-sm font-conthrax uppercase tracking-wide mb-2">
          {card.title}
        </h3>

        {/* Gradient line */}
        <div className="w-72 h-[2px] bg-gradient-to-r from-[#caa193] to-[#a0624d] mb-4" />

        {/* Image with hover effect */}
        <div className="overflow-hidden mb-4 rounded-lg">
          <Image
            src={card.img}
            alt={card.title}
            title={card.title}
            width={600}
            height={360}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            quality={70}
            className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Paragraph */}
        <p className="text-gray-300 text-[12px] md:text-sm font-play leading-relaxed">
          {card.desc}
        </p>
      </div>
    </Link>
  ))}

  {/* CTA beside the final card */}
 {/* CTA beside the final card */}
<div className="flex items-center justify-center md:justify-start">
  <Link
    href="/commercial-interior-design-dubai"
    className="group relative flex min-h-[260px] w-full max-w-[380px] flex-col justify-between overflow-hidden rounded-lg border border-[#caa193]/60 bg-[#111] p-7 transition-all duration-500 hover:border-[#caa193] hover:bg-[#171717]"
  >
    {/* Decorative corner */}
    <span className="absolute top-0 left-0 h-12 w-12 border-t border-l border-[#caa193] transition-all duration-500 group-hover:h-16 group-hover:w-16" />

    {/* Small label */}
    <span className="font-conthrax text-[10px] tracking-[0.2em] text-[#caa193]">
      COMMERCIAL SPACES
    </span>

    {/* Main text */}
    <div className="mt-8">
      <span className="block max-w-[280px] font-conthrax text-lg leading-relaxed text-white md:text-xl">
        See all commercial interior design
      </span>
    </div>

    {/* Arrow */}
    <div className="mt-8 flex items-center justify-between">
      <span className="h-px flex-1 bg-gradient-to-r from-[#caa193] to-transparent" />

      <span className="ml-5 flex h-12 w-12 items-center justify-center rounded-full border border-[#caa193] text-xl text-[#caa193] transition-all duration-500 group-hover:translate-x-2 group-hover:bg-[#caa193] group-hover:text-black">
        →
      </span>
    </div>
  </Link>
</div>
</div>
      </div>
    </section>
  );
};

export default Features;