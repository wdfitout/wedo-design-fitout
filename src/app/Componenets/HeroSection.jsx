"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

const images = [
  "/images/Bleu-17.webp",
  "/images/Bleu-27.webp",
  "/images/hm3.webp",
  "/images/hm1.webp",
  "/images/hm2.webp",
  "/images/hm4.webp",
  "/images/hm5.webp",
  "/images/hm6.webp",
  "/images/hm7.webp",
  "/images/hm8.webp",
  "/images/hm9.webp",
  "/images/dubai-interior-design-companies-apartment-sitting-area.webp",
  "/images/dubai-atlantis-the-royal-luxury-apartment.webp",
  "/images/palm-jumeirah-luxury-apartment-living-room-interior-design-dubai.webp",
  "/images/luxury-apartment-dinning-experience.webp",
  "/images/best-retaurant-interior-design-dubai.webp",
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] overflow-hidden bg-black">
      {/* Background image slider */}
      {images.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-[3000ms] ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={src}
            alt="Luxury interior design and fit-out project in Dubai"
            fill
            priority={index === 0}
            sizes="100vw"
            className="object-cover"
          />
        </div>
      ))}

      {/* Soft bottom gradient */}
      <div className="absolute inset-x-0 bottom-0 z-10 h-[55%] bg-gradient-to-t from-black/80 via-black/35 to-transparent" />

      {/* Luxury Lifestyle Awards badge */}
      <div className="absolute right-4 top-16 z-30 sm:right-6 sm:top-20 md:right-8 md:top-24 lg:right-12 lg:top-24 xl:right-16">
        <Image
          src="/images/luxury-v.webp"
          alt="Luxury Lifestyle Awards Winner 2026"
          width={180}
          height={240}
          priority
          className="h-auto w-[68px] drop-shadow-[0_8px_22px_rgba(0,0,0,0.45)] sm:w-[82px] md:w-[105px] lg:w-[125px] xl:w-[140px]"
        />
      </div>

      {/* Hero text */}
      <div className="absolute inset-x-0 bottom-5 z-20 px-4 text-center text-white sm:bottom-7 md:bottom-10">
        <p className="font-penrise text-xl tracking-wide sm:text-2xl md:text-4xl lg:text-5xl">
          VISION AT WORK
        </p>

        <h1 className="mt-2 font-play text-sm tracking-wider sm:text-lg md:text-2xl lg:text-3xl">
          Luxury Interior Design &amp; Fit-Out Company in Dubai
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;