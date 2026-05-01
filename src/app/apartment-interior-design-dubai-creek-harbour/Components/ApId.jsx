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
             Modern Office Interior Design for Business Bay Workspaces
            </h2>
            <p className="text-sm sm:text-base leading-7 mb-4 font-play">
             Office Interior Design in Business Bay Dubai gives attention to designing productive, modern, and visually appealing workplaces in one of the most iconic business districts of Dubai. Placed close to meticulous landmarks including the Burj Khalifa, Dubai Mall, and Dubai Canal, Business Bay is space for corporate headquarters, startups, financial companies, and global enterprises.</p>
           <p className="text-sm sm:text-base leading-7 mb-4 font-play">
           A well-structured <b className="text-[#caa193]"><a href="https://wedointerior.ae/office-interior-design-dubai">office interior design Dubai</a></b> concept helps businesses design environments that support development and brand identity. At WE DO Interior Design & Fitout, our professionals offer expert office interior fit out Dubai, well-planned, and Office Design & Commercial Fit-Out in Dubai to help firms change their spaces into efficient and mesmerizing environments.
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
