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
             Restaurant Interior Design in Downtown Dubai
            </h2>
            <p className="text-sm sm:text-base leading-7 mb-4 font-play text-justify">
             In Downtown Dubai, first impressions matter. Guests often decide whether to walk into a restaurant within seconds of seeing it. A visitor strolling down Mohammed Bin Rashid Boulevard has encountered several places long before they reach your establishment, including bars and terraces in hotels. The choice of whether to enter or pass by takes just three seconds. What they see through your window decides. This is the reality of <b className="text-[#caa193]"><a href="/restaurant-interior-design">restaurant interior design in Downtown Dubai</a></b>. <br/>
WE DO Interior Design & Fitout is a leading restaurant fit out company in Downtown Dubai, specialising in restaurant interior design in Downtown Dubai, café design, restaurant renovation, and hospitality fitout projects.             
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