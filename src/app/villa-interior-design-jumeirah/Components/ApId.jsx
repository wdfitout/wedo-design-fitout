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
             Villa Interior Design Jumeirah
            </h2>
            <p className="text-sm sm:text-base leading-7 mb-4 font-play text-justify">
              Jumeirah is more than a single neighbourhood. This consists of a number of existing and upcoming residential neighborhoods, such as Jumeirah 1, Jumeirah 2, Jumeirah 3, Pearl Jumeirah, Jumeirah Bay Island, La Mer, and Umm Suqeim.
              </p>
             <p className="text-sm sm:text-base leading-7 mb-4 font-play text-justify">
              At WE DO Interior Design & Fitout, we offer villa interior design services in Jumeirah, luxury villa interior designs in Dubai, as well as custom villa interiors in Dubai to residents of all these neighborhoods.
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