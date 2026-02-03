'use client';

import React, { useEffect, useCallback, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';

const images = [

  '/images/02-masbr-02.jpg',
  '/images/06-masbathroom-01.jpg',
  '/images/01-living-08.jpg',
];

const DesignV = () => {
  const [isClient, setIsClient] = useState(false);
  const autoplayOptions = { delay: 3000, stopOnInteraction: false };
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [Autoplay(autoplayOptions)]
  );

  useEffect(() => {
    setIsClient(true);
  }, []);

  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);

  return (
    <section className="py-10 px-6 bg-black-200">
      <h2 className="text-center text-white text-xs sm:text-xl md:text-xl font-conthrax tracking-widest mb-6 uppercase">
        We Do Apartment Design Related Services
      </h2>

      {/* Desktop Grid */}
      <div className="hidden lg:grid grid-cols-3 gap-6 mb-10">
        {images.map((src, index) => (
          <div key={index} className="relative aspect-square overflow-hidden">
            <Image
              src={src}
              alt={`service ${index + 1}`}
              width={600}
              height={600}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>

      {/* Mobile Carousel with Autoplay */}
      {isClient && (
        <div className="lg:hidden mb-10">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4">
              {images.map((src, index) => (
                <div
                  className="min-w-full relative aspect-[4/3] overflow-hidden"
                  key={index}
                >
                  <Image
                    src={src}
                    alt={`slide ${index + 1}`}
                    width={800}
                    height={600}
                    className="object-cover w-full h-full"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Optional Arrows */}
          <div className="flex justify-center mt-4 gap-4">
            <button onClick={scrollPrev}>⟵</button>
            <button onClick={scrollNext}>⟶</button>
          </div>
        </div>
      )}

      {/* Bottom CTA Section */}
      <div className="bg-[#f5ede5] py-10 text-center space-y-4">
        <h3 className="text-xs sm:text-xl font-conthrax uppercase">
          Get In Touch With Us
        </h3>
        <p className="text-sm sm:text-base font-play">
          We are located in the world's luxury city, Dubai
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4 px-4">
          <a
            href="https://wa.me/971588075603"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-green-500 text-white font-play text-sm rounded w-full sm:w-auto text-center"
          >
            ✅ Request availability by WhatsApp
          </a>
          <a
            href="mailto:info@example.com"
            className="px-6 py-3 bg-[#caa193] text-white font-play text-sm rounded w-full sm:w-auto text-center"
          >
            ✉️ Request availability by E-mail
          </a>
        </div>
      </div>
    </section>
  );
};

export default DesignV;
