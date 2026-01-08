'use client';

import Image from "next/image";
import { useState, useEffect } from "react";
import { FaPlay } from "react-icons/fa";

const VPBody = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [current, setCurrent] = useState(0);
  const [videoLoaded, setVideoLoaded] = useState(false);

  const openImage = (index) => {
    setCurrent(index);
    setIsOpen(true);
  };

  const closeImage = () => setIsOpen(false);

  const nextImage = () => {
    setCurrent((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrent((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  useEffect(() => {
    const handleKey = (e) => {
      if (!isOpen) return;
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "Escape") closeImage();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen]);

  return (
    <section className="bg-black text-white px-6 sm:px-10 md:px-16 lg:px-28 xl:px-40 py-10 sm:py-20 font-sans">
      {/* Breadcrumb */}
      <p className="text-xs text-[#caa193] uppercase tracking-widest mb-4 font-conthrax">
        HOME &gt; ABOUT-US
      </p>

      {/* Heading + Paragraph + Video */}
      <div className="mb-0">
        {/* Headings */}
        <div className="mb-6">
          <p className="text-xs sm:text-base font-conthrax tracking-wide uppercase text-white">
            ABOUT US
          </p>
          <h1 className="text-sm sm:text-2xl md:text-3xl font-conthrax tracking-widest text-white mt-1">
            WE DO INTERIOR DESIGN & FIT OUT
          </h1>
          <div className="w-30 sm:w-96 h-[2px] bg-[#caa193] mt-2" />
        </div>

        {/* Row: Static Text + Video */}
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Simple Static Text */}
          <div className="w-full lg:w-1/2 space-y-4 text-sm sm:text-lg leading-6 text-white/90 font-play">
            <p>
              We Do design is a top-notch company that was established in 2015 by Hamza Jamal Alatta. The company manufactures and delivers the best services of interior designing products at an affordable price. We offer the best interior designing services throughout the UAE.
            </p>
            <p>
              We have a highly qualified staff that is available 24/7 for you. Our professionals can turn your normal-looking interior into a modern, aesthetic, and luxurious one by doing a few modifications. We provide the services of interior designing of commercial, institutional, residential, and other architectural projects.
            </p>
            <p>
              We offer our Dubai villa design services in various places so that every project we get can have a unique vision put into it. Our expert team designs beautifully designed splendour villas that make customers feel unmatched charm, comfort, and luxury.
            </p>
            <p>
              WE DO Interior Design and Fitout is one of the best villa interior design companies in Dubai, transforming private villas into personalized havens. As a luxury villa interior design company and bespoke high-end designer, we specialize in the design of modern luxury villas embodying both elegance and innovation.
            </p>
          </div>

          {/* Video Section */}
          <div className="w-full lg:w-1/2 flex flex-col items-center space-y-6">
            {!videoLoaded ? (
              <div
                className="relative w-full aspect-video bg-black cursor-pointer group overflow-hidden rounded-lg"
                onClick={() => setVideoLoaded(true)}
              >
                <Image
                  src="/images/atlantis (2).webp"
                  alt="Watch our company video"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/30 flex items-center justify-center backdrop-blur-sm transition group-hover:scale-110">
                    <FaPlay className="text-white text-xl sm:text-2xl ml-1" />
                  </div>
                </div>
              </div>
            ) : (
              <div className="w-full aspect-video">
                <iframe
                  className="w-full h-full rounded-lg shadow-lg"
                  src="https://www.youtube.com/embed/yNeCQLpYvww?autoplay=1&mute=1"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            )}

            <a
              href="/projects"
              className="inline-block px-6 py-3 bg-[#caa193] text-white text-sm font-semibold tracking-wider rounded hover:bg-[#b48773] transition"
            >
              View Our Projects
            </a>
          </div>
        </div>
      </div>

    </section>
  );
};

export default VPBody;
