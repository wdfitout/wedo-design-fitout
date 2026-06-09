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
              Office Interior Design in Downtown Dubai
            </h2>
            <p className="text-sm sm:text-base leading-7 mb-4 font-play text-justify">
              WE DO Interior Design & Fit-out  provides office interior design and fitout services across Downtown Dubai.. As your client steps into your office in Boulevard Plaza, Emaar Square, or Burj Khalifa offices, their impression of you is made even before you open your mouth to greet them..
            </p>
            <p className="text-sm sm:text-base leading-7 mb-4 font-play text-justify">
             At WE DO Interior Design & Fitout, we are specialists in <b className="text-[#caa193]"><a href="/office-interior-design-dubai"> office interior design in Downtown Dubai</a></b> for companies who recognize that their working environment is a tool of their trade, not just an area to park some tables and chairs. WE DO provides complete office fitout Downtown Dubai solutions for businesses of every size.
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