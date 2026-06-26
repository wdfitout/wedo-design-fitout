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
             Beachfront Interior Design in Jumeirah Dubai
            </h2>
            <p className="text-sm sm:text-base leading-7 mb-4 font-play text-justify">
              There's a particular kind of morning that comes with living on the beach. The light is different. The air is different somehow. Then you step into a lounge room that looks as though it could exist anywhere, with thick curtains, dark wood, and finishes that seem completely out of place with the ocean just beyond the window.
              </p>
            <p className="text-sm sm:text-base leading-7 mb-4 font-play text-justify">
              This happens more frequently than one might expect. Many beachfront homes in Jumeirah were designed like inland villas, creating interiors that ignore their strongest feature: the sea. <b className="text-[#caa193]"><a href="https://wedointerior.ae/beachfront-interior-design-jumeirah-dubai">Beachfront interior design in Jumeirah</a></b> is, at its core, about closing that gap. The inclusion of sea shells and blue sofas does not necessarily constitute coastal living, at least not for us, but rather the design of a residence with consideration of the surrounding light, views, and way of life associated with such proximity to the coast. From a villa along the coastline of Jumeirah to an apartment in JBR or a house near La Mer, the sea should somehow factor into the entire ambiance of the dwelling.
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