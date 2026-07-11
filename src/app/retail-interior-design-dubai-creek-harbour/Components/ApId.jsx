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
            <h2 className="text-sm sm:text-xl md:text-xl font-conthrax tracking-widest text-[#caa193] py-2 uppercase">
  Retail Interior Design Dubai Creek Harbour
</h2>

<p className="text-sm sm:text-base leading-7 mb-4 font-play text-white text-justify">
  
    Bespoke retail design and fit-out for boutiques, showrooms, and flagship stores along Dubai's new waterfront downtown. WE DO Interior Design & Fit-Out, delivering <b className='text-[#caa193]'><a href="https://wedointerior.ae/boutique-interior-design-dubai">retail interior design</a></b>  Dubai Creek Harbour brands trust to translate identity into space. From boutique storefronts along Creek Marina to flagship podium retail at The Address Grand Creek Harbour and Vida Creek Harbour, we design and build interiors that pull footfall, hold attention, and convert visitors into customers.
 
  With 15+ years shaping interiors of retail centers in Dubai and in-house design, MEP, and joinery teams under one roof we handle every retail project end-to-end without subcontracting the parts that matter most.
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
