"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";

const logos = [
  "/images/slider2 (1).png",
  "/images/slider2 (2).png",
  "/images/slider2 (3).png",
  "/images/slider2 (4).png",
  "/images/slider2 (5).png",
  "/images/slider2 (6).png",
  "/images/slider2 (7).png",
  "/images/slider2 (8).png",
  "/images/slider2 (9).png",
  "/images/slider2 (10).png",
  "/images/slider2 (11).png",
  "/images/slider2 (12).png",
  "/images/slider2 (13).png",
  "/images/slider2 (14).png",
  "/images/slider2 (15).png",
  "/images/slider2 (16).png",
  "/images/slider2 (17).png",
  "/images/slider2 (18).png",
  "/images/slider2 (19).png",
  "/images/slider2 (20).png",
];

const OurClients = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center" },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  const [prevEnabled, setPrevEnabled] = useState(false);
  const [nextEnabled, setNextEnabled] = useState(false);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevEnabled(emblaApi.canScrollPrev());
    setNextEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  return (
    <section className="py-10 px-4 sm:px-8 lg:px-16 text-center bg-white text-black">
      {/* Scroll Arrow and Heading */}
      <div className="mb-8">
     
        <h2 className="mt-10 text-sm sm:text-xl tracking-widest font-conthrax">
          SOME OF OUR CLIENTS
        </h2>
      </div>

      {/* Carousel */}
      <div className="relative max-w-6xl mx-auto">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-4 sm:gap-8">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[33.33%] sm:w-[30%] md:w-[25%] lg:w-[20%] flex items-center justify-center"
              >
                <Image
                  src={logo}
                  alt={`Client logo ${index + 1}`}
                  width={120}
                  height={80}
                  className="object-contain w-full h-auto"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={scrollPrev}
          className="absolute -left-4 sm:-left-8 lg:-left-12 top-1/2 -translate-y-1/2 text-black text-4xl p-1 hover:text-[#a16848] z-10"
          aria-label="Scroll Previous"
          disabled={!prevEnabled}
        >
          <HiOutlineChevronLeft />
        </button>
        <button
          onClick={scrollNext}
          className="absolute -right-4 sm:-right-8 lg:-right-12 top-1/2 -translate-y-1/2 text-black text-4xl p-1 hover:text-[#a16848] z-10"
          aria-label="Scroll Next"
          disabled={!nextEnabled}
        >
          <HiOutlineChevronRight />
        </button>
      </div>
    </section>
  );
};

export default OurClients;
