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
             Fitout Company in Dubai
            </h2>
            <p className="text-sm sm:text-base leading-7 mb-4 font-play text-justify">
              A successful fitout is not just about choosing materials or filling up an empty space.
The best fitout is about knowing how people live, work, shop, and interact and providing them with interiors that cater to all of these aspects. This is especially true when it comes to fitouts in Dubai, where the client expects everything to be done well, from looking good to performing well. That is exactly why choosing the right fitout partner matters.
                          </p>
            <p className="text-sm sm:text-base leading-7 mb-4 font-play text-justify">
              At WE DO, we deliver <b className="text-[#caa193]"><a href="https://wedointerior.ae/fit-out-company-dubai"> complete Fitout company Dubai solutions </a></b> through one integrated team responsible for design coordination, approvals, project delivery, fitout execution, and final handover. We do not treat fitout as construction alone. It is seen as a transformation of possibility into an environment that functions perfectly in the real world.
                          </p>

                          <p className="text-sm sm:text-base leading-7 mb-4 font-play text-justify">
              Whatever it is that you may be doing, whether it involves transforming a villa, establishing a commercial space, redesigning a working environment, setting up an entertainment venue or even designing a complete turnkey interior solution, we cover the entire process for you. No fragmented communication. No disconnected contractors. No uncertainty about who owns the result. Just one team delivering one outcome.
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