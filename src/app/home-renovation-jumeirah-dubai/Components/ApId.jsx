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
             Home Renovation in Jumeirah Dubai
            </h2>
            <p className="text-sm sm:text-base leading-7 mb-4 font-play text-justify">
              There's a particular moment a lot of homeowners reach. Well, you don't exactly dislike your home, you just find that it has remained unchanged for many years. The kitchen looks a little outdated, the unfinished renovation work from the last time left the bathroom undone, the children have outgrown their rooms, and somewhere down the line your home no longer represents your present self.
                                        </p>
            <p className="text-sm sm:text-base leading-7 mb-4 font-play text-justify">
              This is when home renovation in Jumeirah Dubai becomes part of your discussion, not to mention any single issue in particular but all the changes at once.
At WE DO Interior Design & Fitout, this is genuinely one of our favourite types of project. Not necessarily because it's a huge task, which in some cases it is, but because of the difference between constantly piecing together a house for years and taking the time to think through all aspects of it correctly, only one time.
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