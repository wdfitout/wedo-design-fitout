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
             Apartment Interior Design in Jumeirah
            </h2>
            <p className="text-sm sm:text-base leading-7 mb-4 font-play text-justify">
              Jumeirah is one of those places where people stay for many years, and not for brief stints. People make their homes there, establish patterns based on the schools, beaches, and quiet streets of Jumeirah, and start to understand that their home is much more than a place to sleep. This is when the discrepancy arises. Apartment interior design in Jumeirah is mostly about closing that gap. It is rarely about crafting something elegant or trend-driven.
                          </p>
            <p className="text-sm sm:text-base leading-7 mb-4 font-play text-justify">
              At WE DO Interior Design & Fitout, we provide apartment interior design in Jumeirah, luxury apartment interior design Dubai, and custom apartment interiors Dubai for homeowners, investors, and long-term residents. We have designed apartments across Jumeirah for families, returning residents, and property owners preparing units for new tenants.
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