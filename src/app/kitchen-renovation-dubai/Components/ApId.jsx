'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FaPlay } from 'react-icons/fa';

const ApId = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <section className="bg-black text-white px-4 sm:px-10 md:px-16 lg:px-28 xl:px-40 py-10 font-sans overflow-x-hidden">
      <p className="text-sm sm:text-base">August 28, 2026</p>
      <div className="w-full lg:max-w-[98%] mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch lg:items-start">
          
          {/* Text Column */}
          <div className="w-full lg:w-1/2 flex flex-col">
            <div>
              <h2 className="text-sm sm:text-xl md:text-xl font-conthrax tracking-widest text-[#caa193] mt-4 sm:mt-12 mb-4 sm:mb-6">
                Kitchen Renovation Dubai
              </h2>
              <p className="text-sm sm:text-base leading-6 sm:leading-7 mb-6 sm:mb-10 font-play text-left sm:text-justify">
                Not every kitchen needs new cabinets.{' '}
                <b className="text-[#caa193]">
                  <a href="https://wedointerior.ae/" className="hover:underline">
                    WE DO Interior Design & Fit-Out
                  </a>
                </b>{' '}
                scopes every kitchen renovation Dubai project into one of three
                levels: a vinyl wrap, a refacing, or a full replacement, priced
                separately, so you're never quoted for more than your kitchen
                actually needs. From modular kitchen installations in Dubai to full
                custom remodels, our in-house team handles design, cabinetry, and
                installation under one contract for apartments across the city.
              </p>
            </div>

            {/* Highlight Box & Button Grouped Together */}
            <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-4 mt-2">
              <div className="bg-[#caa193] text-white text-xs sm:text-base font-play rounded px-6 py-4 w-full sm:w-fit text-center">
                15 Years of Experience
              </div>

              <Link
                href="/contact-us"
                className="border border-[#caa193] text-xs sm:text-base font-play px-6 py-4 w-full sm:w-fit text-center uppercase rounded hover:bg-[#caa193] hover:text-black transition-all duration-200"
              >
                GET YOUR QUOTE
              </Link>
            </div>
          </div>

          {/* Video Column */}
          <div className="w-full lg:w-1/2 flex flex-col space-y-4">
            <h2 className="text-xs sm:text-xl md:text-xl font-conthrax tracking-widest text-gray-200 py-2 mt-4">
              Get Best Kitchen Renovation Dubai
            </h2>

            {/* Video / Image Container */}
            {!videoLoaded ? (
              <div
                className="relative w-full aspect-video bg-black cursor-pointer group overflow-hidden rounded-lg border-2 sm:border-4 border-[#caa193]"
                onClick={() => setVideoLoaded(true)}
              >
                <Image
                  src="/images/kitchen-renovation-craftsmanship-dubai.webp"
                  alt="Kitchen renovation craftsmanship Dubai"
                  title="Kitchen Renovation Craftsmanship Dubai"
                  width={1280}
                  height={720}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="w-12 h-12 sm:w-20 sm:h-20 rounded-full bg-white/30 flex items-center justify-center backdrop-blur-sm transition group-hover:scale-110">
                    <FaPlay className="text-white text-lg sm:text-2xl ml-1" />
                  </div>
                </div>
              </div>
            ) : (
              <div className="w-full aspect-video border-2 sm:border-4 border-[#caa193] rounded-lg overflow-hidden">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/yNeCQLpYvww"
                  title="WE DO Kitchen Renovation Dubai Video"
                  style={{ border: 0 }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ApId;