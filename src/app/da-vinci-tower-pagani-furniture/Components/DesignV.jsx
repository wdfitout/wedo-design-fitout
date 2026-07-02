'use client';

import React, { useEffect, useCallback, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';

const DesignV = () => {
  const [isClient, setIsClient] = useState(false);

  const autoplayOptions = {
    delay: 3000,
    stopOnInteraction: false,
  };

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
    <section className="py-5 px-6 bg-black">

      {/* ============================================================
          GET IN TOUCH CTA BAND
      ============================================================ */}

      <div className="bg-[#f5ede5] py-10 rounded-2xl text-center">
        <h3 className="text-xs sm:text-xl font-conthrax uppercase">
          Get In Touch With Us
        </h3>

        <p className="mt-3 text-sm sm:text-base font-play">
          We are located in the world&apos;s luxury city, Dubai
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6 px-4">
          <a
            href="https://wa.me/971588075603"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-green-500 text-white rounded"
          >
            Request a consultation
          </a>

          <a
            href="mailto:info@wedointerior.ae"
            className="px-6 py-3 bg-[#caa193] text-white rounded"
          >
            Request availability by E-mail
          </a>
        </div>
      </div>

    </section>
  );
};

export default DesignV;