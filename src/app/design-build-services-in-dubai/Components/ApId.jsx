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
             Design and Build in Dubai
            </h2>
            <p className="text-sm sm:text-base leading-7 mb-4 font-play text-justify">
              Every successful project starts with a clear vision. But in reality, many projects in Dubai become more complicated than they should be, not because of the idea itself, but because too many teams become involved in delivering it. One consultant develops the concept. Another prepares drawings. A contractor enters later. Approvals move separately. Questions multiply. Decisions slow down. The end product always ends up feeling somewhat different than what was initially thought of.
                          </p>
            <p className="text-sm sm:text-base leading-7 mb-4 font-play text-justify">
              At WE DO, we make the process easier through our <b className="text-[#caa193]"><a href="https://wedointerior.ae/design-build-services-in-dubai"> Design & Build Dubai service  </a></b> which ensures that everything remains consistent throughout the entire process.
Clients don't need to deal with various consultants, contractors, and suppliers but simply an all-inclusive team which will handle design, approvals, implementation, fit-out, and completion.
This implies improved communication, enhanced quality control, reduced delays, and a generally improved project experience.
In case the project entails conversion of the villa, renovation of the apartment, creation of the retail space, commercial fitout, or even design of an entirely new interior space, we ensure that everything remains on track.
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