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
            <h2 className="text-sm sm:text-xl md:text-xl font-conthrax tracking-widest text-[#caa193] py-2">
               Why Apartment Interior Design in Business Bay Requires Expertise            
               </h2>
            <p className="text-sm sm:text-base leading-7 mb-4 font-play">
           Apartments in Business Bay need stylish space designing, high-end finishes, and unique design to align with the area’s contemporary living style. WE DO provide elegant apartment interior design and customized fit-out services in Business Bay, changing studios, 1-bedroom, and ordinary apartments into sophisticated, practical living spaces with full design, finishing, and project management</p>
           <p className="text-sm sm:text-base leading-7 mb-4 font-play">
          Crafting in Business Bay needs expert knowledge of high-end living, waterfront layouts, and luxurious residential standards. WE DO is one of Dubai’s exclusive districts, apartments here require pure elegance, unique space planning, and strict compliance with building regulations.
            </p>
           <h3 className="text-sm sm:text-md md:text-sm font-conthrax tracking-widest text-[#caa193] py-2">
               High-Rise Residential Towers & Prime Locations       
            </h3>
           <p className="text-sm sm:text-base leading-7 mb-4 font-play">So many modern apartments in Business Bay are located in masterpiece developments such as Executive Towers, close to Bay Avenue, and along the scenic Dubai Canal, close to Downtown Dubai. These premium communities have strict renovation policies, solution lift limitations, and technical needs. An expert interior design company in Business Bay makes sure that each interior design project is completed flawlessly within these structural and regulatory constraints.</p>

            <h3 className="text-sm sm:text-xl md:text-sm font-conthrax tracking-widest text-[#caa193] py-2">
             Compact Studios & Smart Space Planning         
            </h3>
           <p className="text-sm sm:text-base leading-7 mb-4 font-play">Studios and compact units in business bay Dubai reflect unique challenges. Limited layouts required thoughtful space planning, built-in storage, and practical design elements. Experienced apartment interior design Business Bay services elevate smart storage design, vertical integration, and flawless completion of living, dining, and sleeping zones to manage both luxury and style.</p>

            <h3 className="text-sm sm:text-xl md:text-sm font-conthrax tracking-widest text-[#caa193] py-2">
             Building Regulations & Professional Coordination         
            </h3>
           <p className="text-sm sm:text-base leading-7 mb-4 font-play">Premium apartments near Executive Towers and Bay Avenue need formal approvals before the renovation process. Specialized interior design and fit-out companies in Business Bay handle documentation, MEP coordination, and compliance efficiently. A well-structured design process makes sure on time execution while managing superior craftsmanship.</p>

            <h3 className="text-sm sm:text-xl md:text-sm font-conthrax tracking-widest text-[#caa193] py-2">
             Lighting & Waterfront Enhancements
        
            </h3>
           <p className="text-sm sm:text-base leading-7 mb-4 font-play">Lighting design is crucial in Modern Apartment Interior Fit-Out in Business Bay. Layered lighting upgrades depth, also balcony and waterfront layout enhancements maximize canal views. Through well-planned styling and attention to process, even compact apartments can be turned into sophisticated, contemporary interiors that align with the iconics of Business Bay.</p>
            {/* Highlight Box */}
            <div className="bg-[#caa193] text-white text-xs sm:text-base font-play rounded px-6 py-4 mt-6 w-fit">
              15 Years of Experience
            </div>
          </div>

         
        </div>
      </div>
    </section>
  );
};

export default ApId;
