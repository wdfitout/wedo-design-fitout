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
             Hotel Apartments Interior Design in Downtown Dubai
            </h2>
            <p className="text-sm sm:text-base leading-7 mb-4 font-play text-justify">
              Downtown Dubai attracts guests who have stayed in the best hotels in the world. They opt for your apartment over a hotel room since they desire privacy, spaciousness, and luxury. However, they still demand nothing but the very best from whatever they can touch and see. The majority of hotel apartments in Downtown Dubai fall short in this respect. Generic finishes by developers, furniture, lighting, interior designs that lack character and luxury, all translate to booking loss, poor reviews, and stagnant nightly prices.
            </p>
             <p className="text-sm sm:text-base leading-7 mb-4 font-play text-justify">
              WE DO Interior Design & Fitout focuses on hotel apartments interior design in Downtown Dubai. We cater to owners who realise that investing in a beautiful apartment means more profit. As professionals in the field, we have a solid understanding of hotel apartments in Downtown Dubai and guest requirements.  As a leading <b className="text-[#caa193]"><a href="/interior-design-companies-downtown-dubai">interior design company Downtown Dubai </a></b> investors trust, we bring together hospitality design expertise, deep local building knowledge, and a clear focus on financial performance, not just aesthetics.
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