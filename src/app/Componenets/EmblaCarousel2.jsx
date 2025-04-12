"use client";
import React from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export function EmblaCarousel2({ slideCount = 6 }) {
  const options = {
    loop: true,
    slidesToScroll: 1,
    containScroll: "trimSnaps", // Ensures proper alignment of slides
  };

  const [emblaRef] = useEmblaCarousel(options, [Autoplay({ delay: 4000 })]);

  return (
    <div className="embla w-screen overflow-hidden h-64" ref={emblaRef}>
      <div className="embla__container flex px-0"> {/* Removed gap classes */}
        {[...Array(slideCount)].map((_, index) => (
          <div
            key={index}
            className="embla__slide flex items-center justify-center flex-[0_0_100%] sm:flex-[0_0_50%] md:flex-[0_0_33.333%] lg:flex-[0_0_20%]"
          >
            <Image
              src={`/images/slider(1)-${index + 1}.webp`}
              alt={`Slide ${index + 1}`}
              loading="lazy"
              sizes="(max-width: 640px) 90vw, (max-width: 768px) 50vw, (min-width: 1024px) 25vw"
              width={200}
              height={200}
              placeholder="blur"
              blurDataURL="/images/placeholder.webp"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default EmblaCarousel2;
