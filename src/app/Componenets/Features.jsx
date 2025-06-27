"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const cardData = [
  {
    title: "VILLA INTERIOR DESIGN",
    img: "/images/serv1.webp",
    desc: "Luxury interior design tailored for villa architecture and grandeur aesthetics in Dubai.",
    link: "/villa-interior-design-dubai",
  },
  {
    title: "APARTMENT INTERIOR DESIGN",
    img: "/images/serv2.webp",
    desc: "Smart, elegant and space-optimized apartment interiors crafted for modern city life.",
    link: "/apartment-interior-design-dubai",
  },
  {
    title: "LANDSCAPE DESIGN",
    img: "/images/serv3.webp",
    desc: "Create unforgettable dining spaces with ambiance that enhances the culinary experience.",
    link: "/landscape-design-dubai",
  },
  {
    title: "RESTAURANT INTERIOR DESIGN",
    img: "/images/serv3.webp",
    desc: "Create unforgettable dining spaces with ambiance that enhances the culinary experience.",
    link: "/restaurant-interior-design",
  },
  {
    title: "OFFICE INTERIOR DESIGN",
    img: "/images/serv4.webp",
    desc: "Transform workspaces with elegant and efficient layouts tailored to modern productivity.",
    link: "/office-interior-design-dubai",
  },
  {
    title: "BEAUTY SALON DESIGNS",
    img: "/images/serv5.webp",
    desc: "Create calming and professional clinical environments focused on patient comfort and functionality.",
    link: "/beauty-salon-interior-design-dubai",
  },
  {
    title: "CAFE INTERIOR DESIGN",
    img: "/images/serv6.webp",
    desc: "Design immersive wellness spaces that radiate relaxation and luxury for spa experiences.",
    link: "/cafe-interior-design-dubai",
  },
  {
    title: "CLINICS INTERIOR DESIGN",
    img: "/images/serv7.webp",
    desc: "Enhance product appeal with visually optimized and customer-friendly retail interiors.",
    link: "/clinic-interior-design-dubai",
  },
  {
    title: "HOTEL INTERIOR DESIGN",
    img: "/images/serv8.webp",
    desc: "Showcase collections in high-impact environments that blend functionality and brand identity.",
    link: "/hotel-interior-design-dubai",
  },
  {
    title: "BOUTIQUE DESIGNS",
    img: "/images/serv9.webp",
    desc: "Create cozy and visually appetizing spaces that invite customers to relax and return.",
    link: "/boutique-interior-design-dubai",
  },
];

const Features = () => {
  return (
    <section id="features" className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Arrow image */}
        <div className="mt-0 sm:mt-10 flex justify-center">
          <Image
            src="/images/sec-dvd.webp"
            alt="Scroll down arrow"
            width={320}
            height={80}
            className="h-auto w-48 sm:w-64"
          />
        </div>

        {/* Section Heading */}
        <h2 className="text-white mt-10 mb-10 text-sm sm:text-xl tracking-widest font-conthrax text-center">
          INTERIOR DESIGN FEATURES
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {cardData.map((card, index) => (
            <Link href={card.link} key={index}>
              <div className="text-left group cursor-pointer">
                {/* Title */}
                <h3 className="text-white text-sm font-conthrax uppercase tracking-wide mb-2">
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
                    width={500}
                    height={300}
                    className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-105"
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

export default Features;
