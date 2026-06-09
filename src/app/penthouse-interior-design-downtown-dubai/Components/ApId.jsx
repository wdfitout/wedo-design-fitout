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
              Penthouse Interior Design in Downtown Dubai 
            </h2>
            <p className="text-sm sm:text-base leading-7 mb-4 font-play text-justify">
              Owning a penthouse in Downtown Dubai puts you in a very small category. You wake up to the Dubai Fountain. You have floor-to-ceiling glass framing one of the most recognisable skylines on earth. But a lot of Downtown penthouses are handed over in a condition that does not do justice to that view. Developer standard finishes in a space that deserves something genuinely extraordinary. At WE DO Interior Design & Fitout, we specialise in <b className="text-[#caa193]"><a href="/penthouse-interior-design-downtown-dubai">penthouse interior design in Downtown Dubai</a></b> for clients who refuse to settle. Experience gained at Burj Vista, Address Boulevard, Act One Act Two, and The Residence. That experience helps us create design solutions that suit the unique requirements of each building.
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