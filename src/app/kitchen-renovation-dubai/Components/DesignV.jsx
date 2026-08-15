'use client';

import React, { useEffect, useCallback, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';

const images = [
  {
    src: '/images/closed-kitchen-design-dubai.webp',
    alt: 'Closed kitchen design Dubai apartment',
    title: 'Closed Kitchen Design Dubai'
  },
  {
    src: '/images/open-plan-kitchen-renovation-dubai.webp',
    alt: 'Open plan kitchen renovation Dubai',
    title: 'Open Plan Kitchen Renovation Dubai'
  },
  {
    src: '/images/u-shaped-kitchen-design-dubai.webp',
    alt: 'U-shaped kitchen design Dubai',
    title: 'U-Shaped Kitchen Design Dubai'
  },
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
        Kitchen Renovation Dubai Services We Provide
      </h2>

      {/* Desktop Grid */}
      <div className="hidden lg:grid grid-cols-3 gap-6 mb-10">
        {images.map((img, index) => (
          <div key={index} className="relative aspect-square overflow-hidden group rounded-lg">
            <Image
              src={img.src}
              alt={img.alt}
              title={img.title}
              width={600}
              height={600}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-black/40 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <p className="text-white text-xs font-conthrax">{img.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Carousel with Autoplay */}
      {isClient && (
        <div className="lg:hidden mb-10">
          <div className="overflow-hidden rounded-lg" ref={emblaRef}>
            <div className="flex gap-4">
              {images.map((img, index) => (
                <div
                  className="min-w-full relative aspect-[4/3] overflow-hidden"
                  key={index}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    title={img.title}
                    width={800}
                    height={600}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-black/60 p-2 text-center">
                    <p className="text-white text-xs font-conthrax">{img.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-4 gap-4 text-white">
            <button onClick={scrollPrev} aria-label="Previous Slide">⟵</button>
            <button onClick={scrollNext} aria-label="Next Slide">⟶</button>
          </div>
        </div>
      )}

      {/* Bottom CTA Section */}
      <div className="bg-[#f5ede5] py-10 text-center space-y-4 rounded-lg">
        <h3 className="text-xs sm:text-xl font-conthrax uppercase text-black">
          Get In Touch With Us
        </h3>
        <p className="text-sm sm:text-base font-play text-gray-800">
          Ready to plan your Kitchen renovation? Contact WE DO for a free site visit and itemized quote.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4 px-4">
          <a
            href="https://wa.me/971588075603"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-green-500 text-white font-play text-sm rounded w-full sm:w-auto text-center hover:bg-green-600 transition-colors"
          >
            ✅ Request availability by WhatsApp
          </a>
          <a
            href="mailto:info@wedointerior.ae"
            className="px-6 py-3 bg-[#caa193] text-white font-play text-sm rounded w-full sm:w-auto text-center hover:bg-[#b88e80] transition-colors"
          >
            ✉️ Request availability by E-mail
          </a>
        </div>
      </div>
    </section>
  );
};

export default DesignV;