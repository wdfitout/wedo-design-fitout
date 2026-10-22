"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const galleryImages = [
  {
    src: "/images/4ofc-1.png",
    alt: "Downtown Dubai Corporate Office interior design project, gallery view one",
    title: "Downtown Dubai Corporate Office Interior Design - View 01",
    description: "View 1 of 11 from the Downtown Dubai Corporate Office commercial interior design gallery by WE DO Interior Design & Fitout."
  },
  {
    src: "/images/4ofc-2.png",
    alt: "Corporate workspace interior design in Downtown Dubai, second gallery perspective",
    title: "Downtown Dubai Corporate Office Interior Design - View 02",
    description: "View 2 of 11 from the Downtown Dubai Corporate Office commercial interior design gallery by WE DO Interior Design & Fitout."
  },
  {
    src: "/images/4ofc-3.png",
    alt: "Downtown Dubai Corporate Office commercial interior project, gallery view three",
    title: "Downtown Dubai Corporate Office Interior Design - View 03",
    description: "View 3 of 11 from the Downtown Dubai Corporate Office commercial interior design gallery by WE DO Interior Design & Fitout."
  },
  {
    src: "/images/4ofc-4.png",
    alt: "Corporate office design concept in Downtown Dubai, fourth interior view",
    title: "Downtown Dubai Corporate Office Interior Design - View 04",
    description: "View 4 of 11 from the Downtown Dubai Corporate Office commercial interior design gallery by WE DO Interior Design & Fitout."
  },
  {
    src: "/images/4ofc-5.png",
    alt: "Downtown Dubai Corporate Office workplace interior, fifth gallery perspective",
    title: "Downtown Dubai Corporate Office Interior Design - View 05",
    description: "View 5 of 11 from the Downtown Dubai Corporate Office commercial interior design gallery by WE DO Interior Design & Fitout."
  },
  {
    src: "/images/4ofc-6.png",
    alt: "Commercial office interior design in Downtown Dubai, gallery view six",
    title: "Downtown Dubai Corporate Office Interior Design - View 06",
    description: "View 6 of 11 from the Downtown Dubai Corporate Office commercial interior design gallery by WE DO Interior Design & Fitout."
  },
  {
    src: "/images/4ofc-7.png",
    alt: "Downtown Dubai Corporate Office project, seventh interior design view",
    title: "Downtown Dubai Corporate Office Interior Design - View 07",
    description: "View 7 of 11 from the Downtown Dubai Corporate Office commercial interior design gallery by WE DO Interior Design & Fitout."
  },
  {
    src: "/images/4ofc-8.png",
    alt: "Corporate workplace design in Downtown Dubai, eighth gallery perspective",
    title: "Downtown Dubai Corporate Office Interior Design - View 08",
    description: "View 8 of 11 from the Downtown Dubai Corporate Office commercial interior design gallery by WE DO Interior Design & Fitout."
  },
  {
    src: "/images/4ofc-9.png",
    alt: "Downtown Dubai Corporate Office commercial project, ninth interior view",
    title: "Downtown Dubai Corporate Office Interior Design - View 09",
    description: "View 9 of 11 from the Downtown Dubai Corporate Office commercial interior design gallery by WE DO Interior Design & Fitout."
  },
  {
    src: "/images/4ofc-10.png",
    alt: "Professional office interior design in Downtown Dubai, gallery view ten",
    title: "Downtown Dubai Corporate Office Interior Design - View 10",
    description: "View 10 of 11 from the Downtown Dubai Corporate Office commercial interior design gallery by WE DO Interior Design & Fitout."
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
        HOME &gt; PROJECTS &gt; DOWNTOWN DUBAI CORPORATE OFFICE
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
            DESIGNED FOR THE WAY BUSINESS WORKS:
          </p>
          <h1 className="text-sm sm:text-2xl md:text-3xl font-conthrax tracking-widest text-white mt-1">
           DOWNTOWN DUBAI CORPORATE OFFICE
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
                Downtown Dubai Corporate Office explores a composed, professional
                approach to workplace interiors in one of the city&apos;s prominent
                business districts. The commercial design concept is guided by the
                everyday needs of a corporate team, balancing an organised working
                environment with a welcoming impression for clients and visitors.
                Clear spatial relationships and a consistent visual direction help
                define an office setting suited to focused work and collaboration.
              </p>
              <p>
                At WE DO Interior Design &amp; Fitout, we develop corporate
                workspaces around how businesses communicate, meet and operate.
                For this Downtown Dubai office project, the design narrative
                emphasises considered space planning, a coherent professional
                identity and a practical experience across the workplace.
                Discover our{' '}
                <a
                  href="https://wedointerior.ae/office-interior-design-dubai"
                  className="font-semibold underline underline-offset-2"
                >
                  office interior design services in Dubai
                </a>{' '}
                to explore our wider approach to commercial office design and fit-out.
              </p>
            </div>
          </div>

          {/* Image */}
          <figure className="w-full lg:w-1/2">
            <Image
              src="/images/4ofc-2.png"
              alt="Downtown Dubai Corporate Office commercial interior design project"
              title="Downtown Dubai Corporate Office - Commercial Workplace Design"
              width={800}
              height={500}
              loading="lazy"
              className="w-full h-auto object-cover"
            />
            <figcaption className="sr-only">
              Project image from WE DO Interior Design &amp; Fitout&apos;s Downtown Dubai Corporate Office interior design gallery.
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
          DOWNTOWN DUBAI CORPORATE OFFICE INTERIOR DESIGN GALLERY
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