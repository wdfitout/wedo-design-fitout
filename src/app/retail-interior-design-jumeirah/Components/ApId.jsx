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
            Retail Interior Design in Jumeirah Dubai
            </h2>
            <p className="text-sm sm:text-base leading-7 mb-4 font-play text-justify">
              Retail in Jumeirah goes beyond convenience. Customers choose brands for the experience as much as the products themselves. Before interacting with anything offered by the shop, the consumer will first get an experience of the environment, materials, lighting, packaging, and even the atmosphere that it provides.
A great retail environment results in trust, added value of the brand, more exploration, and loyalty from the consumers.
                          </p>
            <p className="text-sm sm:text-base leading-7 mb-4 font-play text-justify">
              We at WE DO offer top-notch <b className="text-[#caa193]"><a href="https://wedointerior.ae/retail-interior-design-jumeirah"> Retail interior design Jumeirah Dubai services </a></b> for clients who wish for their retail stores to be destinations. We provide designs that integrate aspects of branding, experience, and commercial success in order to create spaces that not only look amazing but function well on a day-to-day basis.
Whatever your project involves, whether you have just set up a luxury boutique, you wish to open a concept store, are renovating an old retail space or creating a new flagship space, we are here to provide you with designs that will truly impress your customers.
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