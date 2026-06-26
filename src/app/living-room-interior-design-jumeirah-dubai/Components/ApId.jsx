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
             Living Room Interior Design in Jumeirah Dubai
            </h2>
            <p className="text-sm sm:text-base leading-7 mb-4 font-play text-justify">
              Every other room in the house has a job. Kitchen, cooking. Bedroom, sleeping. The living room gets everything else. Family time, guests, movie nights, kids sprawled on the floor with homework, your aunt dropping by unannounced on a Friday evening.
Maybe that's why so many living rooms just feel a bit off. Not bad exactly,  just not quite right, and nobody can really say why.
                          </p>
            <p className="text-sm sm:text-base leading-7 mb-4 font-play text-justify">
              That's usually where <b className="text-[#caa193]"><a href="https://wedointerior.ae/living-room-interior-design-jumeirah-dubai">living room interior design in Jumeirah</a></b> starts for us, figuring out what this particular room needs to do for your particular family, and building from there. A lot of Jumeirah villas have living rooms with genuinely good bones too. High ceilings, decent natural light, sometimes a garden view right there, and none of it gets used properly because the room was never really planned around it in the first place.
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