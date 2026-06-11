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
             Burj Khalifa View Apartment Interior Design in Downtown Dubai
            </h2>
            <p className="text-sm sm:text-base leading-7 mb-4 font-play text-justify">
              There is a moment every visitor experiences when they walk into a Burj Khalifa view apartment for the first time. They stop. They look. And for a few seconds, nothing else exists. That moment is what you paid for when you bought in Downtown Dubai. The question is whether your interior honours it, or gets in the way of it. Most apartments with Burj Khalifa views are not designed around that view.
            </p>
             <p className="text-sm sm:text-base leading-7 mb-4 font-play text-justify">
              <b className="text-[#caa193]"><a href="/burj-khalifa-view-apartment-design">Burj Khalifa view apartment interior design</a></b> and luxury <b className="text-[#caa193]"><a href="/apartment-interior-design-downtown-dubai">apartment interior design Downtown Dubai</a></b> form our key specialties at WE DO Interior Design & Fitout. Our experience in projects such as Burj Vista, Address Boulevard, Act One Act Two, Forte Tower, The Residence, and Boulevard Point apartments, which all boast stunning views of Burj Khalifa, means that we are well-versed in creating interiors that maximize their potential and integrate the view into everyday life.
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