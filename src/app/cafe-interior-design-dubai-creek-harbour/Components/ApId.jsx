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
             Cafe Interior Design in Dubai Creek Harbour
            </h2>
            <p className="text-sm sm:text-base leading-7 mb-4 font-play text-justify">
            <b className="text-[#caa193]"><a href="/cafe-interior-design-dubai-creek-harbour">Cafe Interior Design in Dubai Creek Harbour</a></b>  where waterfront elegance meets world-class hospitality design. At WE DO Interior Design & Fitout, we transform your cafe vision into a thriving, fully operational space that speaks to the lifestyle and expectations of Creek Harbour's premium clientele. Whether you are launching a waterfront café in Dubai Creek Harbour or reimagining an existing space, our team of expert <b className="text-[#caa193]"><a href="/restaurant-interior-design-dubai-creek-harbour">Restaurants & Café Interior Designers</a></b> delivers end-to-end design and fit-out solutions built to perform in one of Dubai's most competitive F&B destinations.
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
