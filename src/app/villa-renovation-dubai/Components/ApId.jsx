'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FaPlay } from 'react-icons/fa';

const ApId = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <section className="bg-black text-white px-6 sm:px-10 md:px-16 lg:px-28 xl:px-40 py-10 sm:py-10 font-sans">
      <p>July 13, 2026</p>
      <div className="lg:max-w-[80%] mx-auto">
        
        <div className="flex flex-col lg:flex-row gap-12">
          
           <div className="text-sm mb-4 text-[#caa193]">
            
          </div>
          {/* Text Column */}
          <div className="w-full lg:w-1/2 flex flex-col justify-start">
            <h2 className="text-sm sm:text-xl md:text-xl font-conthrax tracking-widest text-[#caa193] py-2">
              Villa Renovation Dubai
            </h2>
            <p className="text-sm sm:text-base leading-7 mb-4 font-play text-justify">
             <b className="text-[#caa193]"><a href="https://wedointerior.ae/">WE DO Interior Design & Fit-Out</a></b> delivers full and room-by-room villa renovation across Dubai  from Emirates Hills to Green Community while covering MEP upgrades, cosmetic layout refreshes, and interior fit-out under one project team. WE DO is a DED-registered<b className="text-[#caa193]"><a href="https://www.google.com/search?sca_esv=a58e26e22b62a0d5&hl=en&authuser=0&sxsrf=APpeQnvQGVXzgJZUEqVgRNy_v0Zt8TS3Jw:1783669942906&kgmid=/g/11pyc3sd1k&q=Interior+Design+Company+Dubai+-+WeDo+Interior+Design+%26+Fit+out&shem=epsd1,ltae,rimspwouohc&shndl=30&source=sh/x/loc/uni/m1/1&kgs=dd4c6d5af8be62d6&utm_source=epsd1,ltae,rimspwouohc,sh/x/loc/uni/m1/1"> interior design and fit-out company based in Jebel Ali</a></b>, serving villa owners, landlords, and property managers across the UAE. With 400+ completed villa renovations and 15+ years in the Dubai market, we manage everything from Dubai Municipality approvals to final styling. Most renovation projects involve villas built between the early 2000s and 2015, where MEP systems and finishes are now 10-25 years old and due for replacement regardless of any cosmetic preference.            </p>
           
            
            {/* Highlight Box */}
            <div className="bg-[#caa193] text-white text-xs sm:text-base font-play rounded px-6 py-4 mt-6 w-fit">
              15 Years of Experience
            </div>
          </div>

          {/* Video Column */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center items-start space-y-6">
            <h2 className="text-xs sm:text-xl md:text-xl font-conthrax tracking-widest text-gray-200">
              Get Best Villa Renovation Dubai
            </h2>

          

            {/* Video */}
            {!videoLoaded ? (
              <div
                className="relative w-full aspect-video bg-black cursor-pointer group overflow-hidden rounded-lg border-4 border-[#caa193]"
                onClick={() => setVideoLoaded(true)}
              >
                <Image
                  src="/images/villa-renovation-mep-dubai.png"
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
              <div className="w-full aspect-video border-4 border-[#caa193] rounded-lg overflow-hidden">
                <iframe
  className="w-full h-full"
  src="https://www.youtube.com/embed/yNeCQLpYvww"
  title="WE DO Villa Renovation Dubai Video"
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
