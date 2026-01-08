"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";

const logos = [
    "/images/slider-(1)-1.png",
    "/images/slider-(1)-2.png",
    "/images/slider-(1)-3.png",
    "/images/slider-(1)-4.png",
    "/images/slider-(1)-5.png",
    "/images/slider-(1)-6.png",

];

const OurAuthorities = () => {
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
            <div className="flex justify-center">
              <Image
                src="/images/sec-dvd.webp"
                alt="Scroll down arrow"
                width={320}
                height={80}
                className="h-auto w-48 sm:w-64"
              />
            </div>
            <h2 className="mt-10 text-sm sm:text-xl tracking-widest font-conthrax">
              OUR AUTHORTIES
            </h2>
          </div>

      {/* Carousel */}
      <div className="relative max-w-6xl mx-auto">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-2 sm:gap-4">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[33.33%] sm:w-[25%] md:w-[20%] lg:w-[16.66%] flex items-center justify-center"
              >
                <Image
                  src={logo}
                  alt={`Authority logo ${index + 1}`}
                  width={120}
                  height={80}
                  className="object-contain w-full h-auto"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Arrows */}
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

export default OurAuthorities;
