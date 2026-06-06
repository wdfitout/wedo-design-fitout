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
              Penthouse Interior Design in Business Bay Dubai
            </h2>
            <p className="text-sm sm:text-base leading-7 mb-4 font-play text-justify">
             Your Business Bay penthouse is much more than just a location. You live on top of everything. Your interior must follow the same approach but unfortunately many penthouses in Dubai are left unexploited from within due to lack of proper planning or interior designing techniques.
            </p>
            <p className="text-sm sm:text-base leading-7 mb-4 font-play text-justify">
              At WE DO Interior Design & Fitout, we specialise in <b className="text-[#caa193]"><a href="/penthouse-interior-design-business-bay">penthouse interior design in Business Bay</a></b> for clients who do not compromise on quality. We bring together smart design ideas and practical solutions to create better spaces, knowledge of high-quality materials, and work experience in top-notch residential areas of Business Bay. If what you are looking for is luxury penthouse interior design Business Bay which will change not only your perception of it but also the way you live, feel, and maintain it, then look no further.
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