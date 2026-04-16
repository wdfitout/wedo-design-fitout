'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FaPlay } from 'react-icons/fa';

const ApId = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <section className="bg-black text-white px-6 sm:px-10 md:px-16 lg:px-28 xl:px-40 py-10 sm:py-10 font-sans">
      <div className="lg:max-w-[80%] mx-auto">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Text Column */}
          <div className="w-full lg:w-1/2 flex flex-col justify-start">
            <h2 className="text-sm sm:text-xl md:text-xl font-conthrax tracking-widest text-[#caa193] py-2">
              Office Interior Fitout Companies in Dubai
            </h2>
            <p className="text-sm sm:text-base leading-7 mb-4 font-play">
           Dubai is famous as a business hub, the requirements for quality <b> office interior design Dubai </b> is increasing day by day as the companies are now giving attention to practicality, branding, and employee productivity. <b> WE DO Interior Design & Fitout </b> is well known as one of the top <b> office interior fit-out companies in Dubai</b>, delivering innovative workspaces according to contemporary business needs. We are a reliable <b> interior design & office fit-out company in Dubai </b>, our experienced designers blend their expertise with technical elegance in order to offer the best results.
           </p>
           
            {/* Highlight Box */}
            <div className="bg-[#caa193] text-white text-xs sm:text-base font-play rounded px-6 py-4 mt-6 w-fit">
              15 Years of Experience
            </div>
          </div>

          {/* Video Column */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center items-start space-y-6">
            <h2 className="text-xs sm:text-xl md:text-xl font-conthrax tracking-widest text-gray-200">
              Get Best Office Interior Design Dubai
            </h2>


            {/* Video */}
            {!videoLoaded ? (
              <div
                className="relative w-full aspect-video bg-black cursor-pointer group overflow-hidden rounded-lg border-4 border-[#caa193]"
                onClick={() => setVideoLoaded(true)}
              >
             <Image
              src="/images/nestfinder (10).webp"
              alt="Watch our company video"
              width={1280}
              height={720}
              className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/30 flex items-center justify-center backdrop-blur-sm transition group-hover:scale-110">
                    <FaPlay className="text-white text-xl sm:text-2xl ml-1" />
                  </div>
                </div>
              </div>
            ) : (
                    <div className="w-full border-4 border-[#caa193] rounded-lg overflow-hidden flex justify-center">
                       <blockquote
                        className="instagram-media"
                        data-instgrm-permalink="https://www.instagram.com/p/DI_-AXpuMt9/"
                        data-instgrm-version="14"
                        style={{ width: "100%", maxWidth: "540px" }}
                       ></blockquote>

                       <script async src="//www.instagram.com/embed.js"></script>
                   </div>



            )}

            {/* Optional Highlight or CTA */}
               <Link
            href="/contact-us"
            className="border border-[#caa193] text-xs sm:text-base font-play px-6 py-2 mt-6 w-fit  uppercase rounded hover:bg-[#caa193] hover:text-black transition-all duration-200"
          >
            GET YOUR QUOTE
          </Link>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ApId;
