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
             Joinery Services in Dubai
            </h2>
            <p className="text-sm sm:text-base leading-7 mb-4 font-play text-justify">
              People usually notice interiors as a whole. But what they remember is often something smaller. The wardrobe that closes perfectly. The kitchen cabinetry that feels effortless to use. The reception desk that instantly elevates the room. The built-in storage that makes the entire space feel organised. That level of detail rarely happens by accident.
                          </p>
            <p className="text-sm sm:text-base leading-7 mb-4 font-play text-justify">
              It happens through joinery. Joinery is one of the most critical yet often ignored aspects of any interior because it stands at the junction between interior design and its real-life application.
WE DO provides <b className="text-[#caa193]"><a href="https://wedointerior.ae/joinery-company-dubai"> premium joinery services Dubai </a></b> for residential projects, retail spaces, hospitality spaces, and commercial interiors with customized fabrication and impeccable installation.
                          </p>

                          <p className="text-sm sm:text-base leading-7 mb-4 font-play text-justify">
              While the approach adopted by others is to fit the space according to ready-made furniture, WE DO provides solutions which have been created for that particular space only. Custom Wardrobes, Kitchens, Feature Walls, Retail Displays, Reception Counters, Storage Systems and Bespoke Furniture are some of the products we provide. Because great interiors are never put together.
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