"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const areas = [
  {
    title: "Interior Design Dubai Creek Harbour",
    description: "Waterfront apartment interiors across Emaar's Creek towers.",
    bgImage: "/images/dbckapt (5).png",
    link: "/interior-design-dubai-creek-harbour",
  },
  {
    
    title: "Interior Design Business Bay",
    description: "Premium apartment interiors and office fit-outs.",
    bgImage: "/images/adbr (9).png",
    link: "/interior-design-company-business-bay",
  },
  {
    
    title: "Interior Design Downtown Dubai",
    description: "High-end apartments and restaurants in the Burj Khalifa district.",
    bgImage: "/images/dtrest (2).webp",
    link: "/interior-design-downtown-dubai",
  },
  {
    title: "Interior Design Jumeirah Dubai",
    description: "Luxury villa interiors on Jumeirah's residential streets",
    bgImage: "/images/pjapt (5).webp",
    link: "/interior-design-jumeirah-dubai",
  },
];

const AreasWeServe = () => {
  return (
    <section className="bg-black ">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
            {/* Arrow image */}
                <div className="mt-20 md:mt-10 flex justify-center">
                  <Image
                    src="/images/sec-dvd.webp"
                    alt="Scroll down indicator"
                    width={320}
                    height={80}
                    className="h-auto w-32 sm:w-64"
                  />
                </div>

        <div className="text-center mb-12">
          <h2 className="text-white mt-10 text-[12px] sm:text-xl tracking-widest font-conthrax text-center">
            Areas We Serve
          </h2>
            <p className="max-w-6xl mx-auto mt-5 text-[12px] text-center sm:text-base text-gray-300 py-2 md:py-3 font-play">Every Dubai
community has its own developer rules, service-lift bookings and approval route. Our
base in Dubai keeps Business Bay, <br />Downtown Dubai, Palm Jumeirah, Dubai Design District, Mohammed Bin Rashid City (MBR City), Jumeirah Golf Estates, Jumeirah Park <br />and Emirates Hills within easy reach, and we work across the city. </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {areas.map((item, idx) => (
            <Link key={idx} href={item.link} className="group block">
              <div className="relative h-[320px] rounded-2xl overflow-hidden shadow-lg">

                <Image
                  src={item.bgImage}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition" />

                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white z-10">
                  <h3 className="text-md font-conthrax mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-300 font-play">
                    {item.description}
                  </p>
                </div>

              </div>
            </Link>
          ))}
        </div>
             {/* View All Button */}
        <div className="mt-10 flex justify-center">
          <Link href="/interior-design-dubai">
            <button className="bg-gradient-to-br from-[#caa193] to-[#a0624d] text-black font-conthrax px-8 py-3 rounded hover:scale-105 transition-transform duration-300 tracking-wider uppercase">
              VIEW MORE
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default AreasWeServe;