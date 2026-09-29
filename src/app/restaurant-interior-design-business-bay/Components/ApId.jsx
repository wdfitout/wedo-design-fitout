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
              Restaurant Interior Design in Business Bay
            </h2>
            <p className="text-sm sm:text-base leading-7 mb-4 font-play text-justify">
              Business Bay does not forgive mediocrity. This is a neighbourhood where corporate executives take client lunches, where residents expect the same standard in their local bistro as they do in their penthouse, and where a restaurant's interior is reviewed just as critically as its menu. In this environment, <b className="text-[#caa193]"><a href="/restaurant-interior-design">restaurant interior design in Business Bay</a></b> is not a finishing touch, it is the foundation of your entire business case.
            </p>
            <p className="text-sm sm:text-base leading-7 mb-4 font-play text-justify">
              At WE DO Interior Design & Fitout, we have built our reputation as a leading restaurant design company Business Bay Dubai, because we understand that a great restaurant interior is a revenue engine, not a decoration budget. Whether you are launching a fine dining destination on Marasi Drive, a casual all-day café-restaurant in Bay Square, or a rooftop concept above the Business Bay skyline, our team delivers premium restaurant fitout Business Bay projects that open on time, perform from day one, and grow in reputation over years.
            </p>
            

            {/* Highlight Box */}
            <div className="bg-[#caa193] text-white text-xs sm:text-base font-play rounded px-6 py-4 mt-6 w-fit text-justify">
              11+ Years of Experience
            </div>
          </div>

         
        </div>
      </div>
    </section>
  );
};

export default ApId;