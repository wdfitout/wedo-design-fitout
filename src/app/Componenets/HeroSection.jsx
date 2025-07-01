"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

const images = [
  "/images/luxury-interior-design-home-design-dubai.webp",
  "/images/dubai-interior-design-companies-apartment-sitting-area.webp",
  "/images/dubai-restaurant-interior-design-best-company.webp",
  "/images/luxury-apartment-dinning-experience.webp",
  "/images/office-reception-interior-design-dubai.webp",
  "/images/dubai-atlantis-the-royal-luxury-apartment.webp",
  "/images/retaurant-interior-design-dubai.webp",
  "/images/dubai-interior-design-companies-luxury-villa.webp",
  "/images/best-retaurant-interior-design-dubai.webp",
  "/images/palm-jumeirah-luxury-apartment-living-room-interior-design-dubai.webp",
  "/images/dubai-luxury-home-interior-design-company.webp",
  "/images/dubai-interior-design-company-luxury-villa-sitting-room.webp",
  "/images/no-1-house-interior-design-dubai.webp",
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
    <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] overflow-hidden">
      {/* Background Image Slider */}
      {images.map((src, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-[3000ms] ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={src}
            alt="interior design"
            fill
            priority
            className="object-cover"
          />
        </div>
      ))}

      {/* Black transparent gradient overlay (bottom to mid) */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 to-transparent z-10" />

      {/* Overlay Text Content */}
      <div className="absolute inset-x-0 bottom-4 md:bottom-10 text-center px-4 text-white z-20">
        <h1 className="text-lg sm:text-xl md:text-4xl lg:text-5xl font-penrise -tracking-normal">
          VISION AT WORK
        </h1>
        <p className="text-[10px] sm:text-lg md:text-2xl md:mt-2 font-play tracking-wider">
          DESIGN & CRAFTING LUXURY SPACES IN DUBAI
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
