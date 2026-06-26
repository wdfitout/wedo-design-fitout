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
             Villa Construction in Dubai
            </h2>
            <p className="text-sm sm:text-base leading-7 mb-4 font-play text-justify">
             The construction of a villa is one of those endeavors that take decisions that are far more important than one might imagine.
Even before the first wall goes up or any finishing is considered, the result of the project has been predetermined through planning, coordination, permits, and integration. An elegantly designed house can become worthless if the execution is poor. A well-built structure can still feel disappointing if the original vision disappears during construction. That is why villa construction should never be treated as separate design and contractor packages working independently.
</p>
            <p className="text-sm sm:text-base leading-7 mb-4 font-play text-justify">
             At WE DO, we deliver <b className="text-[#caa193]"><a href="https://wedointerior.ae/villa-construction-dubai"> premium Villa construction Dubai </a></b> through one integrated process that brings design thinking, approvals, construction delivery, fitout expertise, and project management under one team.
The objective is simple.
Build houses that exactly resemble their design concepts while making the entire process more systematic, clear, and easy for the owner of the house. No matter whether your objective is building a forever family house, developing an investment property, rebuilding an old villa or constructing an entirely new residential house, we handle every single step consistently. A villa is not measured only by square footage. It is measured by how it feels to live in.
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