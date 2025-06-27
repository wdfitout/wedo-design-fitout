"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const cardData = [
  {
    title: "RESIDENTIAL",
    img: "/images/serv1.webp",
    desc: "Luxury interior design tailored for villa architecture and grandeur aesthetics in Dubai.",
    link: "/villa-interior-design-dubai",
  },
  {
    title: "COMMERCIAL",
    img: "/images/serv2.webp",
    desc: "Smart, elegant and space-optimized apartment interiors crafted for modern city life.",
    link: "/apartment-interior-design-dubai",
  },
   {
    title: "FIT OUT",
    img: "/images/serv3.webp",
    desc: "Create unforgettable dining spaces with ambiance that enhances the culinary experience.",
    link: "/landscape-design-dubai",
  },
];

const IdServices = () => {
  return (
    <section className="bg-black text-white py-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

           {/* Arrow image */}
                <div className="mt-0 flex justify-center">
                  <Image
                    src="/images/sec-dvd.webp"
                    alt="Scroll down arrow"
                    width={320}
                    height={80}
                    className="h-auto w-48 sm:w-64"
                  />
                </div>
        
                {/* Section Heading */}
                <h2 className="text-white mt-10 mb-10 text- sm:text-xl tracking-widest font-conthrax text-center">
                  STATE OF THE ART DESIGN SERVICE
                </h2>
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {cardData.map((card, index) => (
            <Link href={card.link} key={index}>
              <div className="text-left">
                {/* Title */}
                <h3 className="text-white text-sm font-conthrax uppercase tracking-wide mb-2">
                  {card.title}
                </h3>

                {/* Gradient line - now left-aligned */}
                <div className="w-32 h-[2px] bg-gradient-to-r from-[#caa193] to-[#a0624d] mb-4" />

                {/* Image */}
                <div className="overflow-hidden mb-4">
                  <Image
                    src={card.img}
                    alt={card.alt}
                    title={card.title}
                    width={500}
                    height={300}
                    className="w-full h-64 object-cover"
                  />
                </div>

                {/* Paragraph */}
                <p className="text-gray-300 text-sm font-play leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IdServices;
