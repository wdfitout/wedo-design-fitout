'use client';

import React, { useEffect, useCallback, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import Link from 'next/link';

const images = [
  {
    src: '/images/nestfinder (5).webp',
    alt: 'nestfinder5',
    title: 'Office Interior Design Dubai',
    href: '/office-interior-design-dubai'
  },
  {
    src: '/images/contemporary-and-modern-office-interior-design.png',
    alt: 'contemporary-and-modern-office-interior-design',
    title: 'Office Interior Design in Business Bay',
    href: '/office-interior-design-business-bay'
  },
  {
    src: '/images/bespoke-and-boutique-style-office-interiors-in-business-bay.png',
    alt: 'bespoke-and-boutique-style-office-interiors-in-business-bay',
    title: 'Bespoke And Boutique Style Office Interiors In Business Bay',
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
    <section className="py-10 px-4 sm:px-6 bg-black-200 overflow-hidden">
      <h2 className="text-center text-white text-xs sm:text-xl md:text-xl font-conthrax tracking-widest mb-6 uppercase">
        Office Renovation Dubai Services We Provide
      </h2>

      {/* Desktop Grid */}
      <div className="hidden lg:grid grid-cols-3 gap-6 mb-10">
        {images.map((img, index) => (
          <Link
            key={index}
            href={img.href || '#'}
            className="relative aspect-square overflow-hidden group rounded-lg block"
          >
            <Image
              src={img.src}
              alt={img.alt}
              title={img.title}
              width={600}
              height={600}
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <p className="text-white text-xs font-conthrax">{img.title}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* Mobile Carousel with Autoplay */}
      {isClient && (
        <div className="lg:hidden mb-10">
          <div className="overflow-hidden rounded-lg" ref={emblaRef}>
            <div className="flex gap-4">
              {images.map((img, index) => (
                <Link
                  key={index}
                  href={img.href || '#'}
                  className="min-w-full relative aspect-[4/3] overflow-hidden block"
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
                </Link>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-4 gap-4 text-white">
            <button onClick={scrollPrev} aria-label="Previous Slide">⟵</button>
            <button onClick={scrollNext} aria-label="Next Slide">⟶</button>
          </div>
        </div>
      )}

      {/* CTA Section 1 - Full Width */}
      <div className="w-screen relative left-1/2 -translate-x-1/2 bg-[#f5ede5] py-8 sm:py-10 px-4 sm:px-12 text-center space-y-4 text-black">
        <h3 className="text-lg sm:text-2xl font-conthrax uppercase text-black">
          Get In Touch With Us
        </h3>
        <p className="text-sm sm:text-base font-play text-gray-800 max-w-3xl mx-auto">
          Ready to plan your Office renovation? Contact WE DO for a free site visit and itemized quote.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 mt-6">
          <a
            href="https://wa.me/971588075603"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-play text-sm sm:text-base rounded-lg shadow-md text-center transition-colors"
          >
            ✅ Request availability by WhatsApp
          </a>
          <a
            href="mailto:info@wedointerior.ae"
            className="w-full sm:w-auto px-6 py-3 bg-[#caa193] hover:bg-[#b88f81] text-white font-play text-sm sm:text-base rounded-lg shadow-md text-center transition-colors"
          >
            ✉️ Request availability by E-mail
          </a>
        </div>
      </div>
    </section>
  );
};

export default DesignV;