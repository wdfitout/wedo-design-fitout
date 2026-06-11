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
             Retail Interior Design in Downtown Dubai
            </h2>
            <p className="text-sm sm:text-base leading-7 mb-4 font-play text-justify">
              The challenge of opening a retail store in Downtown Dubai is unique. You are not competing with small independents, but with big names with well-designed stores. The customers who frequent your store have been doing this for a long time and understand the difference between a properly designed store and a poorly planned space. <b className="text-[#caa193]"><a href="/boutique-interior-design-dubai">Retail interior design in Downtown Dubai</a></b> operates inside that reality.             </p>
             <p className="text-sm sm:text-base leading-7 mb-4 font-play text-justify">
              As a leading <b className="text-[#caa193]"><a href="/fit-out-company-dubai">retail fitout company Dubai</a></b>, our retail spaces integrate both brand identity and commercial success to create an experience for the consumer. Our design and build services include fashion boutiques, jewelry shops, lifestyle centers, showrooms, and specialty retail spaces in Downtown Dubai and beyond.
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