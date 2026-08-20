'use client';

import React, { useEffect, useCallback, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';

const images = [
  {
    src: '/images/l-shaped-kitchen-design-dubai.webp',
    alt: 'L-shaped kitchen design Dubai',
    title: 'L-Shaped Kitchen Design Dubai'
  },
  {
    src: '/images/semi-open-kitchen-design-dubai.webp',
    alt: 'Semi open kitchen design in Dubai',
    title: 'Semi-Open Kitchen Design Dubai'
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
      <div key={index} className="relative aspect-square overflow-hidden rounded-lg">
        <Image
          src={img.src}
          alt={img.alt}
          title={img.title}
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
      <div className="overflow-hidden rounded-lg" ref={emblaRef}>
        <div className="flex gap-4">
          {images.map((img, index) => (
            <div
              className="min-w-full relative aspect-[4/3] overflow-hidden rounded-lg"
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

  {/* CTA Section 1 - Full Width */}
  <div className="w-screen relative left-1/2 -translate-x-1/2 bg-[#f5ede5] py-10 px-6 sm:px-12 text-center space-y-4 text-black">
    <h3 className="text-lg sm:text-2xl font-conthrax uppercase text-black">
      Get In Touch With Us
    </h3>
    <p className="text-sm sm:text-base font-play text-gray-800 max-w-3xl mx-auto">
      Ready to plan your Kitchen renovation? Contact WE DO for a free site visit and itemized quote.
    </p>
    <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
      <a
        href="https://wa.me/971588075603"
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-play text-sm sm:text-base rounded-lg shadow-md text-center transition-colors"
      >
        ✅ Request availability by WhatsApp
      </a>
      <a
        href="mailto:info@wedointerior.ae"
        className="px-6 py-3 bg-[#caa193] hover:bg-[#b88f81] text-white font-play text-sm sm:text-base rounded-lg shadow-md text-center transition-colors"
      >
        ✉️ Request availability by E-mail
      </a>
    </div>
  </div>
</section>
  );
};

export default DesignV;