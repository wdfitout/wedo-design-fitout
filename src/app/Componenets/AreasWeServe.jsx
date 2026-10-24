"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const areas = [
  {
    title: "Interior Design Business Bay",
    description: "Premium apartment interiors and office fit-outs.",
    bgImage: "/images/da-vinci-tower-custom-joinery-console-business-bay.webp",
    link: "/interior-design-company-business-bay",
  },
  
   {
    title: "Interior Design Dubai Creek Harbour",
    description: "Premium apartment interiors and office fit-outs.",
    bgImage: "/images/Modern waterfront apartment living room in Dubai Creek Harbour.png",
    link: "/interior-design-dubai-creek-harbour",
  },
  {
    title: "Interior Design Jumeirah",
    description: "Premium apartment interiors and office fit-outs.",
    bgImage: "/images/monochrome-stone-jumeirah-villa-interior.webp",
    link: "/interior-design-jumeirah-dubai",
  },
 
  
];

const AreasWeServe = () => {
  return (
    <section className="bg-black">
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

        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-white mt-10 text-[12px] sm:text-xl tracking-widest font-conthrax">
            Areas We Serve
          </h2>

          <p className="max-w-6xl mx-auto mt-5 text-[12px] text-center sm:text-base text-gray-300 py-2 md:py-3 font-play">
            Every Dubai community has its own developer rules, service-lift
            bookings and approval route. Our base in Dubai keeps Business Bay,
            <br />
            Downtown Dubai, Palm Jumeirah, Dubai Design District, Mohammed Bin
            Rashid City (MBR City), Jumeirah Golf Estates, Jumeirah Park
            <br />
            and Emirates Hills within easy reach, and we work across the city.
          </p>
        </div>

        {/* Areas Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {areas.map((item) => {
            const cardContent = (
              <div className="relative h-[320px] rounded-lg overflow-hidden shadow-lg">
                {/* Background Image */}
                <Image
                  src={item.bgImage}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-colors duration-300" />

                {/* Card Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white z-10">
                  <h3 className="text-md font-conthrax mb-2">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-300 font-play">
                    {item.description}
                  </p>
                </div>
              </div>
            );

            return item.link ? (
              <Link
                key={item.title}
                href={item.link}
                className="group block rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#caa193]"
                aria-label={`Explore ${item.title}`}
              >
                {cardContent}
              </Link>
            ) : (
              <div key={item.title} className="group block">
                {cardContent}
              </div>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="mt-10 flex justify-center">
          <Link
            href="/interior-design-dubai"
            className="inline-block bg-gradient-to-br from-[#caa193] to-[#a0624d] text-black font-conthrax px-8 py-3 rounded hover:scale-105 transition-transform duration-300 tracking-wider uppercase"
          >
            VIEW MORE
          </Link>
        </div>

      </div>
    </section>
  );
};

export default AreasWeServe;
