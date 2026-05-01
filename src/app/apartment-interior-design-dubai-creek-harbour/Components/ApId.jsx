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
            <h1 className="text-sm sm:text-xl md:text-xl font-conthrax tracking-widest text-[#caa193] py-2">
            Apartment Interior Design in Dubai Creek Harbour
            </h1>
            <p className="text-sm sm:text-base leading-7 mb-4 font-play">
             WE DO provide a design concept for the <a href="/apartment-interior-design-dubai-creek-harbour" className="text-[#caa193]">
     Apartment Interior Design of Creek Harbour Dubai. </a>  Every Dubai Creek Harbour Apartment is designed according to an iconic living concept of waterfront living, where architecture combines with elegant living. We are a reliable interior designer Dubai, our specialization is in renovating the apartments into customized spaces that match with both modernism and functionality. Whether you opt for Modern Apartment in Dubai Creek Harbour projects or premium Creek Harbour Residential Apartment projects, our team  designs interior spaces to enhance the sophisticated nature of this destination. We are one of the top interior design companies in Dubai, WE DO offer specific services that enhance each Apartment at Dubai Creek Harbour into a statement of contemporary living.
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
