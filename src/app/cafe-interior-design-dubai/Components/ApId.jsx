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
              Café Interior Design in Dubai – Expert Fit-Out & Design Services
            </h2>
            <p className="text-sm sm:text-base leading-7 mb-4 font-play">
            Designing a perfect café interior in Dubai is not all about style, it's a combination of comfort, functionality and 
            ambiance to deliver a best customer experience. At WE DO Interior Design and Fitout, we are skilled in café interior 
            design in Dubai and we offer complete café fit-out design services that enhance casual cafés, coffee shops and modern
             commercial spaces. Whether you want a modern minimalist café design, custom café design in Dubai or a full 
             <b><a href="https://wedointerior.ae/restaurant-interior-design"> café and restaurant design in Dubai</a></b>, 
             our team of designers ensure that each and every detail of your cafe reflects your brand
              identity.
            </p>
           <p className="text-sm sm:text-base leading-7 mb-4 font-play">
            Among the leading interior companies in Dubai, we have 15+ years of experience in designing both hospitality interior 
            design projects and commercial interior design projects, making us the most well known café interior designers in UAE.
            From conceptual layouts to complete execution, we deliver high end customized café interior design services according 
            to your vision.
            </p>
          

            {/* Highlight Box */}
            <div className="bg-[#caa193] text-white text-xs sm:text-base font-play rounded px-6 py-4 mt-6 w-fit">
              15 Years of Experience
            </div>
          </div>

          {/* Video Column */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center items-start space-y-6">
            <h2 className="text-xs sm:text-xl md:text-xl font-conthrax tracking-widest text-gray-200">
              Get Best Cafe Interior Design Dubai
            </h2>

          

            {/* Video */}
            {!videoLoaded ? (
              <div
                className="relative w-full aspect-video bg-black cursor-pointer group overflow-hidden rounded-lg border-4 border-[#caa193]"
                onClick={() => setVideoLoaded(true)}
              >
             <Image
              src="/images/atlantis (2).webp"
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
                  src="https://www.youtube.com/embed/yNeCQLpYvww?autoplay=1&mute=1"
                  title="YouTube video player"
                  frameBorder="0"
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
