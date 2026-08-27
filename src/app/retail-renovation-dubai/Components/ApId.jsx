'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FaPlay } from 'react-icons/fa';

const ApId = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <section className="bg-black text-white px-6 sm:px-10 md:px-16 lg:px-28 xl:px-40 py-10 sm:py-10 font-sans">
      <p>August 27, 2026</p>
      <div className="lg:max-w-[98%] mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:items-start">
          
          {/* Text Column */}
          <div className="w-full lg:w-1/2 flex flex-col">
           <div>
  <h2 className="text-sm sm:text-xl md:text-xl font-conthrax tracking-widest text-[#caa193] mt-4 sm:mt-12 mb-6">
    Retail Renovation In Dubai
  </h2>
  <p className="text-sm sm:text-base font-medium text-[#caa193] font-play">
   Reimagine Your Retail with Our Renovation Expertise
  </p>
  <p className="text-sm sm:text-base leading-7 mb-8 sm:mb-10 font-play ">
   A customer forms an opinion of a shop in the first few seconds inside it, and a store that's been trading for a few years starts losing that first impression before anything else about the business changes. Retail renovation upgrades the shop you already have: shopfront, flooring, joinery, lighting, and MEP, without closing for a full rebuild. {' '}
                <b className="text-[#caa193]">
                  <a href="https://wedointerior.ae/">
                    WE DO Interior Design & Fit-Out
                  </a>
                </b>{' '} is a DED-registered contractor renovating retail spaces across Dubai, from standalone shop renovations on high streets to units in major malls, for boutiques, showrooms, and independent stores alike, priced per square foot under one fixed-price contract from start to handover.
  </p>
</div>

            {/* Highlight Box & Button Grouped Together */}
            <div className="flex flex-wrap items-center gap-4 mt-2">
              <div className="bg-[#caa193] text-white text-xs sm:text-base font-play rounded px-6 py-4 w-fit">
                15 Years of Experience
              </div>

              <Link
                href="https://wedointerior.ae/contact-us"
                className="border border-[#caa193] text-xs sm:text-base font-play px-6 py-4 w-fit uppercase rounded hover:bg-[#caa193] hover:text-black transition-all duration-200"
              >
                GET YOUR QUOTE
              </Link>
            </div>
          </div>

          {/* Video Column */}
          <div className="w-full lg:w-1/2 flex flex-col space-y-4">
            <h2 className="text-xs sm:text-xl md:text-xl font-conthrax tracking-widest text-gray-200 py-2 mt-10">
              Get Best Retail Renovation Dubai
            </h2>

            {/* Video / Image Container */}
            {!videoLoaded ? (
              <div
                className="relative w-full aspect-video bg-black cursor-pointer group overflow-hidden rounded-lg border-4 border-[#caa193]"
                onClick={() => setVideoLoaded(true)}
              >
                <Image
                  src="/images/luxury-retail-renovation-details-dubai.webp"
                  alt="Luxury retail renovation detail with bespoke shelving and warm architectural lighting"
                 title="Luxury Retail Renovation Details Dubai"
                  width={1280}
                  height={720}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/30 flex items-center justify-center backdrop-blur-sm transition group-hover:scale-110">
                    <FaPlay className="text-white text-xl sm:text-2xl ml-1" />
                  </div>
                </div>
              </div>
            ) : (
              <div className="w-full aspect-video border-4 border-[#caa193] rounded-lg overflow-hidden">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/yNeCQLpYvww"
                  title="WE DO Retail Renovation Dubai Video"
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