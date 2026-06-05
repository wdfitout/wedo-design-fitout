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
            <h2 className="text-sm sm:text-xl md:text-xl font-conthrax tracking-widest text-[#caa193] py-2">
            Custom Furniture & Joinery in Dubai Creek Harbour
            </h2>
            <p className="text-sm sm:text-base leading-7 mb-4 font-play">
             Custom Furniture & Joinery in Dubai Creek Harbour well-planned personalization service crafted for the homes and businesses of one of Dubai's most iconic waterfront communities. At WE DO Interior Design & Fitout, we are a reliable Woodwork Company in Dubai offering high-end bespoke in-house joinery Dubai services from the first design vision to the final completion for Creek Harbour's apartments, penthouses, cafes, restaurants, and retail spaces.
</p>
           <p className="text-sm sm:text-base leading-7 mb-4 font-play">
          If you want to get custom made furniture in Dubai for your luxury home or require a full custom furniture and joinery fit-out for your commercial space, our professionals bring the craftsmanship, creativity, and project management specialist to make it happen on time, within budget, and to the highest finish standard.
            </p>
           

            {/* Highlight Box */}
            <div className="bg-[#caa193] text-white text-xs sm:text-base font-play rounded px-6 py-4 mt-6 w-fit">
              15 Years of Experience
            </div>
          </div>

         
        </div>
      </div>
    </section>
  );
};

export default ApId;
