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
             Retail Interior Design in Business Bay Dubai | WE DO Interiors
            </h2>
            <p className="text-sm sm:text-base leading-7 mb-4 font-play text-justify">
              Business Bay is not a neighbourhood of casual browsers. The people walking past your shopfront are corporate decision-makers, luxury residents, and high-net-worth professionals who have experienced the finest retail environments across London, Milan, and New York. They recognise quality instantly, and walk past everything that falls short.
            </p>
            <p className="text-sm sm:text-base leading-7 mb-4 font-play text-justify">
              <b className="text-[#caa193]"><a href="/retail-interior-design-business-bay">Retail interior design in Business Bay</a></b> is about creating a branded environment that builds trust, positions your product correctly, and converts footfall into loyal customers from the very first visit. At WE DO Interior Design & Fitout, we are the retail interior design company Business Bay Dubai operators trust when the standard cannot be compromised. As a leading interior design company, we have delivered retail fitout  projects across Bay Square, Bay Avenue, Executive Towers, and DAMAC retail strips, transforming bare shells into retail environments that perform from day one.
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