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
             Restaurant Interior Design in Dubai Creek Harbour
            </h2>
                       <p className="text-sm sm:text-base leading-7 mb-4 font-play">
           Turnkey Restaurant interiors and fitouts for F&B concepts around The Creek from fine dining to café promenade.<br/>
           Over 15 years · Over 500 projects completed · Trakheesi, Dubai Municipality and Civil Defence approvals in house
            </p>
           
<h2 className="text-sm sm:text-xl md:text-xl font-conthrax tracking-widest text-[#caa193] py-2">
            Interior Design in Dubai Creek Harbour
          </h2>
          <div className="space-y-4 text-sm sm:text-base font-play text-white text-left">
            <p>
              The new Dubai Creek Harbour development is rapidly becoming the hot destination for F&B operators looking to open their restaurants in Dubai. With the waterfront views overlooking the Creek, the planned Dubai Creek Tower at its core, and the entire master planned community of Emaar Creek Harbour attracting visitors and residents from all over the city. Any new establishment opening its doors here already has a ready customer base.
            </p>
            <p>
              WE DO Interior Design & FitOut provides comprehensive interior design services for <b className="text-[#caa193]"><a href="/restaurant-interior-design-dubai-creek-harbour">restaurants interior design in Dubai Creek Harbour</a></b> including individual concepts on the beach front of the Creek Beach promenade and F&B establishments in the hotels such as The Palace Dubai Creek Harbour, Vida Creek Harbour and Address Grand Creek Harbour.
            </p>
              </div>
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
