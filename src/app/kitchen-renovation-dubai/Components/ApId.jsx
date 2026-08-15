'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FaPlay } from 'react-icons/fa';

const ApId = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <section className="bg-black text-white px-6 sm:px-10 md:px-16 lg:px-28 xl:px-40 py-10 sm:py-10 font-sans">
      <p>August 15, 2026</p>
      <div className="lg:max-w-[98%] mx-auto">
        
        <div className="flex flex-col lg:flex-row gap-12">
          
           <div className="text-sm mb-4 text-[#caa193]">
            
          </div>
          {/* Text Column */}
          <div className="w-full lg:w-1/2 flex flex-col justify-start">
            <h2 className="text-sm sm:text-xl md:text-xl font-conthrax tracking-widest text-[#caa193] py-2">
              Kitchen Renovation Dubai
            </h2>
            <p className="text-sm sm:text-base leading-7 mb-4 font-play text-justify">
             Not every kitchen needs new cabinets. <b className="text-[#caa193]"><a href="https://wedointerior.ae/"> WE DO Interior Design & Fit-Out</a></b> scopes every kitchen renovation Dubai project into one of three levels: a vinyl wrap, a refacing, or a full replacement, priced separately, so you're never quoted for more than your kitchen actually needs. From modular kitchen installations in Dubai to full custom remodels, our in-house team handles design, cabinetry, and installation under one contract for apartments across the city.
             </p>
           
            
            {/* Highlight Box */}
            <div className="bg-[#caa193] text-white text-xs sm:text-base font-play rounded px-6 py-4 mt-6 w-fit">
              15 Years of Experience
            </div>
          </div>

          {/* Video Column */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center items-start space-y-6">
            <h2 className="text-xs sm:text-xl md:text-xl font-conthrax tracking-widest text-gray-200">
              Get Best Kitchen Renovation Dubai
            </h2>

          

            {/* Video */}
            {!videoLoaded ? (
              <div
                className="relative w-full aspect-video bg-black cursor-pointer group overflow-hidden rounded-lg border-4 border-[#caa193]"
                onClick={() => setVideoLoaded(true)}
              >
                <Image
                  src="/images/dual-kitchen-show-working-dubai.webp"
                  alt="Dual show and working kitchen Dubai"
                  title="Dual Show and Working Kitchen Dubai"
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
              <div className="w-full aspect-video border-4 border-[#caa193] rounded-lg overflow-hidden">
                <iframe
  className="w-full h-full"
  src="https://www.youtube.com/embed/yNeCQLpYvww"
  title="WE DO Kitchen Renovation Dubai Video"
  style={{ border: 0 }}
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
></iframe>
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
