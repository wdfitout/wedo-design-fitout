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
              Apartment Interior Design in Downtown Dubai | WE DO Interior Design & Fitout
            </h2>
            <p className="text-sm sm:text-base leading-7 mb-4 font-play text-justify">
              The reality is that most apartments in Downtown Dubai look very similar when handed over. Same tiles. Same kitchen. Same bathroom fixtures. The developer standard is designed to be neutral, not remarkable. But you did not buy Burj Vista, Address Boulevard, or Act One Act Two to live in a neutral space. You chose Downtown Dubai because you want the best. Your interior should reflect that same decision.
            </p>
            <p className="text-sm sm:text-base leading-7 mb-4 font-play text-justify">
              At WE DO Interior Design & Fitout, we have been transforming Downtown Dubai apartments for years through bespoke interior design, renovation, and <b className="text-[#caa193]"><a href="/fit-out-company-dubai">fitout services in Downtown Dubai</a></b>, for families who live here full time, for investors who want better rental returns, and for holiday home owners who want five-star reviews every single time. We know these buildings. We know what works in this market. And we know how to take a developer-finish apartment and turn it into something people remember. If you are looking for apartment interior design in Downtown Dubai that actually delivers, not just looks good in a presentation, you are in the right place.
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