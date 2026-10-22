"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const galleryImages = [
  {
    src: "/images/1ofc-1.png",
    alt: "Business Bay Minimalist Office interior design gallery, view one",
    title: "Business Bay Minimalist Office Interior Design — View 01",
    description: "Minimalist office interior design project in Business Bay, Dubai; gallery perspective 1 of 11."
  },
  {
    src: "/images/1ofc-2.png",
    alt: "Minimalist commercial workspace project in Business Bay, Dubai, view two",
    title: "Business Bay Minimalist Office Interior Design — View 02",
    description: "Minimalist office interior design project in Business Bay, Dubai; gallery perspective 2 of 11."
  },
  {
    src: "/images/1ofc-3.png",
    alt: "Third interior design perspective from Business Bay Minimalist Office",
    title: "Business Bay Minimalist Office Interior Design — View 03",
    description: "Minimalist office interior design project in Business Bay, Dubai; gallery perspective 3 of 11."
  },
  {
    src: "/images/1ofc-4.png",
    alt: "Business Bay Minimalist Office project gallery, fourth perspective",
    title: "Business Bay Minimalist Office Interior Design — View 04",
    description: "Minimalist office interior design project in Business Bay, Dubai; gallery perspective 4 of 11."
  },
  {
    src: "/images/1ofc-5.png",
    alt: "Fifth view of the minimalist office design project in Business Bay",
    title: "Business Bay Minimalist Office Interior Design — View 05",
    description: "Minimalist office interior design project in Business Bay, Dubai; gallery perspective 5 of 11."
  },
  {
    src: "/images/1ofc-6.png",
    alt: "Business Bay Minimalist Office commercial interior, view six",
    title: "Business Bay Minimalist Office Interior Design — View 06",
    description: "Minimalist office interior design project in Business Bay, Dubai; gallery perspective 6 of 11."
  },
  {
    src: "/images/1ofc-7.png",
    alt: "Seventh image in the Business Bay Minimalist Office project gallery",
    title: "Business Bay Minimalist Office Interior Design — View 07",
    description: "Minimalist office interior design project in Business Bay, Dubai; gallery perspective 7 of 11."
  },
  {
    src: "/images/1ofc-8.png",
    alt: "Minimalist workspace design in Business Bay, Dubai, gallery view eight",
    title: "Business Bay Minimalist Office Interior Design — View 08",
    description: "Minimalist office interior design project in Business Bay, Dubai; gallery perspective 8 of 11."
  },
  {
    src: "/images/1ofc-9.png",
    alt: "Ninth project perspective from Business Bay Minimalist Office",
    title: "Business Bay Minimalist Office Interior Design — View 09",
    description: "Minimalist office interior design project in Business Bay, Dubai; gallery perspective 9 of 11."
  },
  {
    src: "/images/1ofc-10.png",
    alt: "Business Bay Minimalist Office interior design, tenth gallery image",
    title: "Business Bay Minimalist Office Interior Design — View 10",
    description: "Minimalist office interior design project in Business Bay, Dubai; gallery perspective 10 of 11."
  },
  {
    src: "/images/1ofc-11.png",
    alt: "Eleventh view of the Business Bay Minimalist Office project",
    title: "Business Bay Minimalist Office Interior Design — View 11",
    description: "Minimalist office interior design project in Business Bay, Dubai; gallery perspective 11 of 11."
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
        HOME &gt; PROJECTS &gt; BUSINESS BAY MINIMALIST OFFICE
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
            SIMPLICITY THAT SUPPORTS PRODUCTIVITY:
          </p>
          <h1 className="text-sm sm:text-2xl md:text-3xl font-conthrax tracking-widest text-white mt-1">
           BUSINESS BAY MINIMALIST OFFICE
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
                Business Bay Minimalist Office explores a more considered approach
                to workplace design in Dubai's Business Bay district. The concept
                centres on visual clarity, clean lines and purposeful space planning,
                creating a contemporary office setting where simplicity works in
                harmony with everyday business needs. Rather than relying on
                decorative excess, the design direction focuses on balance, comfort
                and an uncluttered professional atmosphere.
              </p>
              <p>
                At WE DO Interior Design &amp; Fitout, we shape commercial interiors
                around how people work, collaborate and welcome visitors. For this
                minimalist office project, the emphasis is on practical layouts,
                restrained detailing and a cohesive workplace identity. Explore our{' '}
                <a
                  href="https://wedointerior.ae/office-interior-design-business-bay"
                  className="font-semibold underline underline-offset-2"
                >
                  office interior design services in Business Bay
                </a>{' '}
                to discover how thoughtful design and fit-out planning can help
                businesses create efficient, contemporary work environments in Dubai.
              </p>
            </div>
          </div>

          {/* Image */}
          <figure className="w-full lg:w-1/2">
            <Image
              src="/images/1ofc-2.png"
              alt="Minimalist office interior design project at Business Bay, Dubai"
              title="Business Bay Minimalist Office — Commercial Interior Design Dubai"
              width={800}
              height={500}
              loading="lazy"
              className="w-full h-auto object-cover"
            />
            <figcaption className="sr-only">
              Project image from WE DO Interior Design &amp; Fitout's minimalist commercial office concept in Business Bay, Dubai.
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
          BUSINESS BAY MINIMALIST OFFICE INTERIOR DESIGN GALLERY
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