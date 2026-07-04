"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const images = [
  "/images/da-vinci-tower-1.webp",
  "/images/da-vinci-tower-2.webp",
  "/images/da-vinci-tower-3.webp",
  "/images/da-vinci-tower-4.webp",
  "/images/da-vinci-tower-5.webp",
];

const Hero = () => {
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
    <div className="relative w-full h-[600px] sm:h-[550px] md:h-[550px] lg:h-[400px] xl:h-[600px] overflow-hidden">
      
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
            alt="Pagani Inspired Furniture for Da Vinci Tower Business Bay"
            fill
            priority={index === 0}
            className="object-cover"
          />
        </div>
      ))}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30 z-[1]" />

      {/* Overlay Content */}
      <div className="absolute left-2 sm:left-4 bottom-6 z-10 bg-black/50 p-4 rounded-lg text-white max-w-[700px]">
        <h1 className="text-md md:text-2xl lg:text-4xl font-conthrax mb-2">
          Pagani-Inspired Furniture for Da Vinci Tower, Business Bay
        </h1>

        <p className="text-sm sm:text-base leading-8 mb-4 font-play text-white/85">
          Luxury Furniture <br />
          Starting from AED 500K
        </p>

        <div className="flex gap-4 flex-wrap">
          <Link
            href="/contact-us"
            className="bg-[#caa193] text-black px-3 py-2 text-xs font-semibold uppercase rounded hover:bg-gray-200 transition"
          >
            Send an Inquiry
          </Link>

          <Link
            href="/gallery"
            className="border border-[#caa193] px-3 py-2 text-xs font-semibold uppercase rounded hover:bg-[#caa193] hover:text-black transition"
          >
            Our Projects
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;