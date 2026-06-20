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
            Beachfront Hospitality Interior Design in Jumeirah Dubai
            </h2>
            <p className="text-sm sm:text-base leading-7 mb-4 font-play text-justify">
              A beachfront hospitality venue is never judged only by its location. Guests may arrive because of the sea view, but what makes them stay, spend more, return again, and recommend the experience is the environment around them.
              </p>
            <p className="text-sm sm:text-base leading-7 mb-4 font-play text-justify">
              Through WE DO, we deliver a luxurious and high-quality offering of Hospitality Interior Jumeirah Beachfront ideas. These ideas integrate an appealing atmosphere, functionality, material quality, and guest experience in order to assist hospitality brands in creating a unique destination.
Whether it is a fashionable beach club, restaurant, boutique hospitality area, or resort setting, our interior design services provide a perfect solution.
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