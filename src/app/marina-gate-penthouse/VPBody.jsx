"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const galleryImages = [


    {
    src: "/images/magapt (4).png",
    alt: "Elegant villa living room with ambient lighting",
    title: "Villa Interior Gallery Image 1",
    description: "Spacious living area with beige tones and gold accents"
  },
{
    src: "/images/magapt (5).png",
    alt: "Elegant villa living room with ambient lighting",
    title: "Villa Interior Gallery Image 1",
    description: "Spacious living area with beige tones and gold accents"
  },
    {
    src: "/images/magapt (6).png",
    alt: "Elegant villa living room with ambient lighting",
    title: "Villa Interior Gallery Image 1",
    description: "Spacious living area with beige tones and gold accents"
  },
    {
    src: "/images/magapt (7).png",
    alt: "Elegant villa living room with ambient lighting",
    title: "Villa Interior Gallery Image 1",
    description: "Spacious living area with beige tones and gold accents"
  },
{
    src: "/images/magapt (8).png",
    alt: "Elegant villa living room with ambient lighting",
    title: "Villa Interior Gallery Image 1",
    description: "Spacious living area with beige tones and gold accents"
  },
    {
    src: "/images/magapt (9).png",
    alt: "Elegant villa living room with ambient lighting",
    title: "Villa Interior Gallery Image 1",
    description: "Spacious living area with beige tones and gold accents"
  },
    {
    src: "/images/magapt (10).png",
    alt: "Elegant villa living room with ambient lighting",
    title: "Villa Interior Gallery Image 1",
    description: "Spacious living area with beige tones and gold accents"
  },
{
    src: "/images/magapt (11).png",
    alt: "Elegant villa living room with ambient lighting",
    title: "Villa Interior Gallery Image 1",
    description: "Spacious living area with beige tones and gold accents"
  },
    {
    src: "/images/magapt (12).png",
    alt: "Elegant villa living room with ambient lighting",
    title: "Villa Interior Gallery Image 1",
    description: "Spacious living area with beige tones and gold accents"
  },
    {
    src: "/images/magapt (13).png",
    alt: "Elegant villa living room with ambient lighting",
    title: "Villa Interior Gallery Image 1",
    description: "Spacious living area with beige tones and gold accents"
  },
{
    src: "/images/magapt (2).png",
    alt: "Elegant villa living room with ambient lighting",
    title: "Villa Interior Gallery Image 1",
    description: "Spacious living area with beige tones and gold accents"
  },
    {
    src: "/images/magapt (3).png",
    alt: "Elegant villa living room with ambient lighting",
    title: "Villa Interior Gallery Image 1",
    description: "Spacious living area with beige tones and gold accents"
  },



];

const VPBody = () => {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({ container: scrollRef });
  const dotY = useTransform(scrollYProgress, [0, 1], [0, 360]);

  const [isOpen, setIsOpen] = useState(false);
  const [current, setCurrent] = useState(0);

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

  // 🔄 Ensure scroll starts at top
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = 0;
    }
  }, []);

  // ⌨️ Keyboard navigation
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
        HOME &gt; PROJECTS &gt; MARINA GATE PENTHOUSE
      </p>

      {/* Heading + Paragraph + Image */}
      <div className="relative pl-4 sm:pl-6 mb-20">
        {/* Scroll line */}
        <div className="absolute top-0 left-0 h-full w-[1px] bg-gray-400 z-0 hidden lg:block" />
        <motion.div
          className="absolute left-[-4px] top-[104px] w-2 h-2 rounded-full bg-[#caa193] z-10 hidden lg:block"
          style={{ y: dotY }}
        />
        <div
          className="absolute top-0 left-0 w-[1px] bg-gray-400 z-0 block lg:hidden"
          style={{ height: "calc(104px + 360px)" }}
        />

        {/* Headings */}
        <div className="mb-6">
          <p className="text-xs sm:text-base font-conthrax tracking-wide uppercase text-white">
            TRANSFORMING LUXURY LIVING:
          </p>
          <h1 className="text-sm sm:text-2xl md:text-3xl font-conthrax tracking-widest text-white mt-1">
            MARINA GATE PENTHOUSE
          </h1>
          <div className="w-30 sm:w-96 h-[2px] bg-[#caa193] mt-2" />
        </div>

        {/* Row: Paragraph + Image */}
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Paragraph */}
          <div className="w-full lg:w-1/2">
            <div
              ref={scrollRef}
              className="max-h-[360px] overflow-y-auto scroll-smooth text-sm leading-6 text-white/90 space-y-4 pr-2 font-play"
              style={{ scrollbarWidth: "none" }}
            >
              <p>
                At WE DO Interior Design & Fitout, we are so proud to show our luxury modern penthouse interior design at <b><a href="https://wedointerior.ae/marina-gate-2-luxury-apartment">The Residences at Marina Gate, Dubai.</a></b> This penthouse interior project presents our expertise in penthouse services in Dubai which combine functionality, elegance and luxury.
              </p>
              <p>
                Well known for its waterfront lifestyle, Dubai Marina is one of the most iconic places to live. Many clients ask us, “Which part of Dubai Marina is best to live in?” and Marina gates is the answer because of its prime location, luxurious amenities and breathtaking views. Our penthouse interior design in Dubai project here captures the essence of refined living, with layouts tailored to maximize both comfort and panoramic cityscapes
              </p>
              <p>
                As a leading name among interior design companies in Marina Gate, WEDO is expert in <b><a href="https://wedointerior.ae/palm-jumeirah-2-bedroom-penthouse">penthouse interior design & fit-out in Dubai</a></b>, delivering services that are both functional and stylish. From customized furniture and lighting to premium finishes, every corner of this penthouse shows our commitment to excellence.
              </p>
              <p>
                Renowned as the <b><a href="https://wedointerior.ae/">No.1 Interior Designers in UAE, </a></b>WE DO brings innovation and precision to every project. Our modern penthouse interior design Dubai services redefine luxury, making residences at Marina Gate a true benchmark of contemporary living.
              </p>
        
            </div>
          </div>

          {/* Image */}
          <figure className="w-full lg:w-1/2">
            <Image
              src="/images/magapt (2).png"
              alt="Luxury villa interior with white marble flooring and gold accents"
              title="Modern Villa Interior Design in Dubai"
              width={800}
              height={500}
              loading="lazy"
              className="w-full h-auto object-cover"
            />
            <figcaption className="sr-only">
              A spacious modern villa interior designed with elegant gold accents, large windows, and premium finishes.
            </figcaption>
          </figure>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="mt-10">
           {/* Arrow image */}
                <div className="mt-10 flex justify-center">
                  <Image
                    src="/images/sec-dvd.webp"
                    alt="Scroll down arrow"
                    width={320}
                    height={80}
                    className="h-auto w-48 sm:w-64"
                  /> 
                </div>
        
                {/* Section Heading */}
                <h2 className="text-white mt-10 mb-10 text-sm sm:text-xl tracking-widest font-conthrax text-center">
          MARINA GATE PENTHOUSE GALLERY
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((img, idx) => (
            <figure key={idx} className="cursor-pointer overflow-hidden rounded-md">
              <Image
                src={img.src}
                alt={img.alt}
                title={img.title}
                width={400}
                height={300}
                loading="lazy"
                className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
                onClick={() => openImage(idx)}
              />
              <figcaption className="sr-only">{img.description}</figcaption>
            </figure>
          ))}
        </div>
      </div>

      {/* Lightbox Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">
          <button
            onClick={closeImage}
            className="absolute top-4 right-6 text-white text-3xl font-bold"
          >
            &times;
          </button>
          <button
            onClick={prevImage}
            className="absolute left-4 text-white text-4xl"
          >
            &#8592;
          </button>
          <Image
            src={galleryImages[current].src}
            alt={galleryImages[current].alt}
            title={galleryImages[current].title}
            width={900}
            height={600}
            loading="lazy"
            className="rounded-md object-contain max-h-[90vh] max-w-[90vw]"
          />
          <button
            onClick={nextImage}
            className="absolute right-4 text-white text-4xl"
          >
            &#8594;
          </button>
        </div>
      )}
    </section>
  );
};

export default VPBody;
