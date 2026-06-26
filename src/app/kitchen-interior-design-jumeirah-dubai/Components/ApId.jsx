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
             Kitchen Interior Design in Jumeirah Dubai
            </h2>
            <p className="text-sm sm:text-base leading-7 mb-4 font-play text-justify">
              Ask anyone who has ever sold a house what room buyers walked into first. It is almost always the kitchen. Long before anyone cares about the bedrooms or the garden, they want to visit the kitchen, because the kitchen tells them something about how a home has been looked after.
In Jumeirah, this matters even more. Villas here are elegant, families entertain often, and kitchens are rarely tucked away, they open onto living and dining areas, sometimes the garden, sometimes both. A kitchen that looks outdated or feels stagnant does not just affect cooking. It affects how the whole ground floor feels.
                          </p>
            <p className="text-sm sm:text-base leading-7 mb-4 font-play text-justify">
              At WE DO Interior Design & Fitout, <b className="text-[#caa193]"><a href="https://wedointerior.ae/kitchen-interior-design-jumeirah-dubai">kitchen interior design in Jumeirah</a></b> is one of the projects we genuinely enjoy most. There is something satisfying about taking a kitchen that has become tired or impractical and turning it into the room everyone naturally gravitates towards. If you are thinking about a kitchen renovation, here is what we have learned over years of doing exactly this across Jumeirah's villas and apartments.
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