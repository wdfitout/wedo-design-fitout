"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const galleryImages = [
  {
    src: "/images/xaima (5).webp",
    alt: "Elegant villa living room with ambient lighting",
    title: "Villa Interior Gallery Image 1",
    description: "Spacious living area with beige tones and gold accents"
  },
  {
    src: "/images/xaima (6).webp",
    alt: "Modern kitchen design with marble countertops",
    title: "Villa Interior Gallery Image 2",
    description: "Open-plan kitchen featuring sleek white cabinetry and premium marble finishes"
  },
  {
    src: "/images/xaima (7).webp",
    alt: "Luxury bathroom with golden fixtures",
    title: "Villa Interior Gallery Image 3",
    description: "Stylish bathroom with gold fixtures and large mirrors"
  },
  {
    src: "/images/xaima (8).webp",
    alt: "Bedroom with neutral tones and wall paneling",
    title: "Villa Interior Gallery Image 4",
    description: "Master bedroom showcasing custom wood paneling and luxury bedding"
  },
  {
    src: "/images/xaima (9).webp",
    alt: "Villa staircase with chandelier and marble steps",
    title: "Villa Interior Gallery Image 5",
    description: "Architectural staircase design with high ceiling chandelier"
  },
  {
    src: "/images/xaima (10).webp",
    alt: "Private lounge with artistic wall décor and leather seating",
    title: "Villa Interior Gallery Image 6",
    description: "Bespoke lounge area with leather furniture and curated art pieces"
  },
    {
    src: "/images/xaima (11).webp",
    alt: "Bedroom with neutral tones and wall paneling",
    title: "Villa Interior Gallery Image 4",
    description: "Master bedroom showcasing custom wood paneling and luxury bedding"
  },
  {
    src: "/images/xaima (12).webp",
    alt: "Villa staircase with chandelier and marble steps",
    title: "Villa Interior Gallery Image 5",
    description: "Architectural staircase design with high ceiling chandelier"
  },
  {
    src: "/images/xaima (13).webp",
    alt: "Private lounge with artistic wall décor and leather seating",
    title: "Villa Interior Gallery Image 6",
    description: "Bespoke lounge area with leather furniture and curated art pieces"
  }
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
        HOME &gt; PROJECTS &gt; DUBAI RESTAURANT INTERIOR FIT OUT
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
            TRANSFORMING LUXURY DINING:
          </p>
          <h1 className="text-sm sm:text-2xl md:text-3xl font-conthrax tracking-widest text-white mt-1">
            DUBAI RESTAURANT INTERIOR FIT OUT
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
          <p>WE DO Interior Design & Fitout's Dubai Restaurant Interior Fit Out is an example of our ability to design wonderful 
            dining areas that are as functional as they are comfortable and pleasing to the eye. As one of the <b className="text-[#caa193]"><a href="https://wedointerior.ae/restaurant-interior-design">leading restaurant 
            fit-out companies</a></b> and Dubai contractors, we have specialized in providing bespoke restaurant fitout service in Dubai 
            that tells its own unique story for every brand.
          </p>

          <p>Our <b className="text-[#caa193]"><a href="https://wedointerior.ae/restaurant-projects">UAE-based expert restaurant interior designers</a></b> ensured that each aspect of this project from spatial planning to 
            material choice and lighting  was carefully designed to produce an atmosphere that is warm and welcoming. As a trusted 
            restaurant interior design and fit-out contractor in Dubai, we offer turnkey restaurant fit-out services overseeing 
            every phase of the process from initial concept to final delivery.
         </p>

         <p>This initiative showcases our capability to combine creative design with workable solutions, making it easy for 
          restaurant owners to operate. WE DO remains one of the top restaurant interior design companies in Dubai, 
          continually setting standards in restaurant interior fitout in Dubai, providing full restaurants & cafés 
          fitout services that enhance the culinary experience.</p>
            </div>
          </div>

          {/* Image */}
          <figure className="w-full lg:w-1/2">
            <Image
              src="/images/xaima (2).webp"
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
         DUBAI RESTAURANT INTERIOR FIT OUT GALLERY
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
