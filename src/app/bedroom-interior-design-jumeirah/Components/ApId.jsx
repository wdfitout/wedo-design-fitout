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
             Bedroom Interior Design in Jumeirah Dubai
            </h2>
            <p className="text-sm sm:text-base leading-7 mb-4 font-play text-justify">
              Bedrooms are expected to be the most comfortable room in a home, yet they are often the most overlooked. In many homes, the living room receives the investment, the kitchen gets renovated, and the bedroom ends up becoming an afterthought.
That gap is exactly what bedroom interior design in Jumeirah is meant to close. Not just making a room look nice in photos, but making it a space that actually helps you switch off at the end of the day and feel ready to start the next one.
                          </p>
            <p className="text-sm sm:text-base leading-7 mb-4 font-play text-justify">
              At WE DO Interior Design & Fitout we have renovated various rooms of different types of villas, apartments, master rooms, guest rooms, kids’ rooms, but their specification never changes. It is not enough for customers to have their rooms attractive. What they require is rooms that are comfortable and properly arranged.
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