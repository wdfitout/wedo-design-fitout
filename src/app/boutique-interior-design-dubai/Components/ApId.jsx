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
              Boutique Interior Design in Dubai
            </h2>
            <p className="text-sm sm:text-base leading-7 mb-4 font-play text-justify">
              A boutique is not just a small retail shop. People do not visit boutiques for endless product choices or fast transactions. They come looking for something more curated, a unique product, a stronger brand connection, and a retail experience that feels personal. The experience of a boutique starts not while dealing with the products; it starts right from the entrance till the lighting, materials, design, displays, changing rooms, and even customers' movements in the shop. This is why boutique design needs another perspective entirely. WE DO offers unique <b className="text-[#caa193]"><a href="https://wedointerior.ae/boutique-interior-design-dubai"> Boutique interior design Dubai services </a></b> to fashion brands, concept shops, independent brands, lifestyle retailers, and boutiques that require an interior with an individualistic touch rather than an ordinary retail solution.
             </p>
            <p className="text-sm sm:text-base leading-7 mb-4 font-play text-justify">
              Whether you have a need to open a new boutique, refurbish your retail space, introduce your luxury concept, or expand your brand into the highly competitive Dubai market, our team will handle all processes right from conception to delivery of the fitout. As it is with boutique retailing, clients are always observant of every detail.
           </p>
            

            {/* Highlight Box */}
            <div className="bg-[#caa193] text-white text-xs sm:text-base font-play rounded px-6 py-4 mt-6 w-fit">
              15 Years of Experience
            </div>
          </div>

          {/* Video Column */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center items-start space-y-6">
            <h2 className="text-xs sm:text-xl md:text-xl font-conthrax tracking-widest text-gray-200">
              Get Best Spa & Beauty Salon Design Dubai
            </h2>

          

            {/* Video */}
            {!videoLoaded ? (
              <div
                className="relative w-full aspect-video bg-black cursor-pointer group overflow-hidden rounded-lg border-4 border-[#caa193]"
                onClick={() => setVideoLoaded(true)}
              >
             <Image
              src="/images/boutique (8).jpeg"
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
                  src="https://media.istockphoto.com/id/1219824796/video/happy-customers-are-loyal-customers.mp4?s=mp4-640x640-is&k=20&c=ZkjFu_2a7BIxiVKSsrH2xzUgqKRrCWKC_yKnkhlYeeI="
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
