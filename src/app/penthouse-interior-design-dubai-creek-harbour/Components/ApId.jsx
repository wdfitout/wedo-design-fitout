'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FaPlay } from 'react-icons/fa';

const ApId = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <section className="bg-black text-white px-6 sm:px-10 md:px-16 lg:px-28 xl:px-40 py-10 sm:py-10 font-sans">
      <div className="lg:max-w-[90%] mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* Text Column */}
          <div className="w-full flex flex-col justify-start">
            <h2 className="text-sm sm:text-xl md:text-xl font-conthrax tracking-widest text-[#caa193] py-2 text-justify">
              Penthouse Interior Design in Dubai Creek Harbour
            </h2>
            <p className="text-sm sm:text-base leading-7 mb-4 font-play text-justify">
              Dubai Creek Harbour by Emaar is its most ambitious waterfront concept, where the entire development centers on the magnificent views of the Creek, the yet-to-be-built Creek Tower, and the skyline, which matches that of Downtown. The <b className="text-[#caa193]"><a href="/penthouse-interior-design-dubai-creek-harbour">penthouse in Dubai Creek Harbour</a></b> are the crown jewels of this entire vision – sprawling, full-floor units with high ceiling spaces, floor-to-ceiling glass windows, and private outdoor terraces overlooking the most breathtaking views in the country.
            </p>
            <p className="text-sm sm:text-base leading-7 mb-4 font-play text-justify">
              WE DO Interior Design & Fit Out is renowned for providing luxury penthouse interior design in Dubai. We now offer the same expertise in Creek Harbour, which comes with our bespoke interior design services, joinery services, fit-out installation, and all necessary Emaar approval processes. Are you ready to start your project? Get a complimentary site visit today.
            </p>
            

            {/* Highlight Box */}
            <div className="bg-[#caa193] text-white text-xs sm:text-base font-play rounded px-6 py-4 mt-6 w-fit text-justify">
              15 Years of Experience
            </div>
          </div>

         
        </div>
      </div>
    </section>
  );
};

export default ApId;