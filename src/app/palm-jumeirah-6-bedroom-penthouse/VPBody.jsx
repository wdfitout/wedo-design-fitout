"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const galleryImages = [
  {
    src: "/images/6w-residence (4).webp",
    alt: "Elegant villa living room with ambient lighting",
    title: "Villa Interior Gallery Image 1",
    description: "Spacious living area with beige tones and gold accents"
  },
    {
    src: "/images/6w-residence (5).webp",
    alt: "Elegant villa living room with ambient lighting",
    title: "Villa Interior Gallery Image 1",
    description: "Spacious living area with beige tones and gold accents"
  },
    {
    src: "/images/6w-residence (6).webp",
    alt: "Elegant villa living room with ambient lighting",
    title: "Villa Interior Gallery Image 1",
    description: "Spacious living area with beige tones and gold accents"
  },
  {
    src: "/images/6w-residence (7).webp",
    alt: "Elegant villa living room with ambient lighting",
    title: "Villa Interior Gallery Image 1",
    description: "Spacious living area with beige tones and gold accents"
  },
    {
    src: "/images/6w-residence (8).webp",
    alt: "Elegant villa living room with ambient lighting",
    title: "Villa Interior Gallery Image 1",
    description: "Spacious living area with beige tones and gold accents"
  },
    {
    src: "/images/6w-residence (9).webp",
    alt: "Elegant villa living room with ambient lighting",
    title: "Villa Interior Gallery Image 1",
    description: "Spacious living area with beige tones and gold accents"
  },
  {
    src: "/images/6w-residence (10).webp",
    alt: "Elegant villa living room with ambient lighting",
    title: "Villa Interior Gallery Image 1",
    description: "Spacious living area with beige tones and gold accents"
  },
    {
    src: "/images/6w-residence (11).webp",
    alt: "Elegant villa living room with ambient lighting",
    title: "Villa Interior Gallery Image 1",
    description: "Spacious living area with beige tones and gold accents"
  },
    {
    src: "/images/6w-residence (12).webp",
    alt: "Elegant villa living room with ambient lighting",
    title: "Villa Interior Gallery Image 1",
    description: "Spacious living area with beige tones and gold accents"
  },
  {
    src: "/images/6w-residence (13).webp",
    alt: "Elegant villa living room with ambient lighting",
    title: "Villa Interior Gallery Image 1",
    description: "Spacious living area with beige tones and gold accents"
  },
    {
    src: "/images/6w-residence (14).webp",
    alt: "Elegant villa living room with ambient lighting",
    title: "Villa Interior Gallery Image 1",
    description: "Spacious living area with beige tones and gold accents"
  },
    {
    src: "/images/6w-residence (15).webp",
    alt: "Elegant villa living room with ambient lighting",
    title: "Villa Interior Gallery Image 1",
    description: "Spacious living area with beige tones and gold accents"
  },
  {
    src: "/images/6w-residence (16).webp",
    alt: "Elegant villa living room with ambient lighting",
    title: "Villa Interior Gallery Image 1",
    description: "Spacious living area with beige tones and gold accents"
  },
    {
    src: "/images/6w-residence (17).webp",
    alt: "Elegant villa living room with ambient lighting",
    title: "Villa Interior Gallery Image 1",
    description: "Spacious living area with beige tones and gold accents"
  },
    {
    src: "/images/6w-residence (18).webp",
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
        HOME &gt; PROJECTS &gt; PALM JUMEIRAH 6 BEDROOM PENTHOUSE
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
            PALM JUMEIRAH 6 BEDROOM PENTHOUSE
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
          <p> < b className="text-[#caa193]" ><a href="https://wedointerior.ae/palm-jumeirah-6-bedroom-penthouse">The Palm Jumeirah 6 Bedroom Penthouse Project </a></b> 
            by WE DO Interior Design & Fitout is a true symbol of bespoke luxury Dubai Living in Palm Jumeirah. This luxury penthouse in Palm Jumeirah shows our expertise in creating timeless spaces 
            which combine elegance, functionality and identity. As one of the leading interior design companies in Palm Jumeirah, 
            we are skilled in crafting the residential spaces that reflect the aura of iconic destinations of Dubai.
         </p>

         <p>Our design for this Palm Jumeirah 6 Bedroom Penthouse sets a benchmark for luxury interior design for penthouses in Palm 
          Jumeirah. From the grand living room interior in Palm Jumeirah to the serene bedroom interior design in Palm Jumeirah, 
          every element is designed with perfection. The use of modern designs, natural light, and custom finishes transformed 
          this place into a true expression of sophistication.
         </p>

         <p>Recognized as the best interior design Dubai company, WE DO Interior brings luxury interior design solutions to life 
          for clients who expect the finest. Whether it’s penthouse interior design in Dubai or exclusive villas, our projects 
          embody style and innovation. For homeowners seeking refined living, our <b className="text-[#caa193]"><a href="https://wedointerior.ae/palm-jumeirah-2-bedroom-penthouse"> 
           expertise in Palm Jumeirah penthouse interiors</a></b> ensures a one-of-a-kind lifestyle that defines modern luxury.
        </p>

        <p>Awarded the top interior design Dubai company, WE DO Interior realizes luxury interior design solutions for discerning 
          clients who demand the best. Whether it's Dubai penthouse interior design or private villas, our work exhibits style and 
          innovation. For residents looking for sophistication in living, our experience in Palm Jumeirah penthouse interiors gives 
          a unique lifestyle that epitomizes contemporary luxury.
        </p>
            </div>
          </div>

          {/* Image */}
          <figure className="w-full lg:w-1/2">
            <Image
              src="/images/6w-residence (3).webp"
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
          PALM JUMEIRAH 6 BEDROOM PENTHOUSE GALLERY
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
