"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const galleryImages = [
  {
    src: "/images/dhfs (1).webp",
    alt: "Elegant salon living room with ambient lighting",
    title: "beauty salon Interior Gallery Image 1",
    description: "Spacious living area with beige tones and gold accents"
  },
  {
    src: "/images/dhfs (2).webp",
    alt: "Modern kitchen design with marble countertops",
    title: "facial studio Interior Gallery Image 2",
    description: "Open-plan kitchen featuring sleek white cabinetry and premium marble finishes"
  },
  {
    src: "/images/dhfs (3).webp",
    alt: "Luxury bathroom with golden fixtures",
    title: "facial studio Interior Gallery Image 3",
    description: "Stylish bathroom with gold fixtures and large mirrors"
  },
  {
    src: "/images/dhfs (4).webp",
    alt: "Bedroom with neutral tones and wall paneling",
    title: "facial studio Interior Gallery Image 4",
    description: "Master bedroom showcasing custom wood paneling and luxury bedding"
  },
  {
    src: "/images/dhfs (5).webp",
    alt: "facial studio staircase with chandelier and marble steps",
    title: "facial studio Interior Gallery Image 5",
    description: "Architectural staircase design with high ceiling chandelier"
  },
  {
    src: "/images/dhfs (6).webp",
    alt: "Private lounge with artistic wall décor and leather seating",
    title: "facial studio Interior Gallery Image 6",
    description: "Bespoke lounge area with leather furniture and curated art pieces"
  },
    {
    src: "/images/dhfs (7).webp",
    alt: "Bedroom with neutral tones and wall paneling",
    title: "facial studio Interior Gallery Image 4",
    description: "Master bedroom showcasing custom wood paneling and luxury bedding"
  },
  {
    src: "/images/dhfs (8).webp",
    alt: "facial studio staircase with chandelier and marble steps",
    title: "facial studio Interior Gallery Image 5",
    description: "Architectural staircase design with high ceiling chandelier"
  },
  {
    src: "/images/dhfs (9).webp",
    alt: "Private lounge with artistic wall décor and leather seating",
    title: "facial studio Interior Gallery Image 6",
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
        HOME &gt; PROJECTS &gt; DUBAI HILLS MALL FACIAL STUDIO
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
            TRANSFORMING COMMERCIAL SPACES:
          </p>
          <h1 className="text-sm sm:text-2xl md:text-3xl font-conthrax tracking-widest text-white mt-1">
            DUBAI HILLS MALL FACIAL STUDIO
          </h1>
          <div className="w-30 sm:w-96 h-[2px] bg-[#caa193] mt-2" />
        </div>

        {/* Row: Paragraph + Image */}
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Paragraph */}
          <div className="w-full lg:w-1/2">
            <div
              ref={scrollRef}
              className="max-h-[600px] overflow-y-auto scroll-smooth text-sm leading-6 text-white/90 space-y-4 pr-2 font-play"
              style={{ scrollbarWidth: "none" }}
            >
         <p>The Dubai Hills Mall Facial Studio interior design is a project that reflects how functionality and beauty can blend 
          smoothly. At WE DO Interior Design & Fitout, we approached this space with the goal of redefining what a modern self-care 
          studio should look like in Dubai 2025.</p>

        <p>When we worked on the Facial Studio Interior Design in Dubai Hills Mall, our main idea was simply to create a place that 
          feels modern, calm and luxurious all at once. At WE DO Interior Design & Fitout, each member knows that beauty spaces 
          aren’t just about looks; they’re about the full experience.
        </p>
        
        <p>This Dubai Hills Mall Facial Studio project gave us the chance to show our creativity and bring <b className="text-[#caa193]"
><a href="https://wedointerior.ae/dubai-mall-restaurant">luxury interior design 
          in Dubai Hills Mall </a></b>to life by using stylish décor, soft colors and lighting. Every corner from the reception area to 
          the treatment rooms was designed in such a way that it makes our clients feel comfortable and welcomed.
        </p>
        
        <p>As one of the leading interior design companies in Dubai Hills, we always focus on combining beauty with functionality. 
          For this studio, we carefully planned the layout so staff could work efficiently, while clients enjoy a seamless flow 
          through the space.
        </p>

        <p>Whether it’s a beauty salon Dubai design & fit-out or a full-scale project, our approach stays the same—we mix creativity 
          with precision. That’s why many consider us the go-to choice for the best interior design in Dubai Hills Mall and for 
          <b className="text-[#caa193] "><a href="https://wedointerior.ae/beauty-salon-interior-design-dubai"> beauty salon interior design services in Dubai</a></b>.
        </p>

            </div>
          </div>

          {/* Image */}
          <figure className="w-full lg:w-1/2">
            <Image
              src="/images/dhfs (4).webp"
              alt="Luxury Salon interior with white marble flooring and gold accents"
              title="Modern Salon Interior Design in Dubai"
              width={800}
              height={500}
              loading="lazy"
              className="w-full h-auto object-cover"
            />
            <figcaption className="sr-only">
              A spacious modern salon interior designed with elegant gold accents, large windows, and premium finishes.
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
          FACIAL STUDIO INTERIOR GALLERY
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
