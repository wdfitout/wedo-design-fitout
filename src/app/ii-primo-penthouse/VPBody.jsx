"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const galleryImages = [
  { src: "/images/01-living-01.jpg", alt: "Elegant villa living room with ambient lighting", title: "Villa Interior Gallery Image 1", description: "Spacious living area with beige tones and gold accents" },
  { src: "/images/01-living-02.jpg", alt: "Elegant villa living room with ambient lighting" },
  { src: "/images/01-living-03.jpg", alt: "Elegant villa living room with ambient lighting" },
  { src: "/images/01-living-04.jpg", alt: "Elegant villa living room with ambient lighting" },
  { src: "/images/01-living-05.jpg", alt: "Elegant villa living room with ambient lighting" },
  { src: "/images/01-living-06.jpg", alt: "Elegant villa living room with ambient lighting" },
  { src: "/images/01-living-07.jpg", alt: "Elegant villa living room with ambient lighting" },
  { src: "/images/01-living-08.jpg", alt: "Elegant villa living room with ambient lighting" },
  { src: "/images/01-living-09.jpg", alt: "Elegant villa living room with ambient lighting" },
  { src: "/images/01-living-10.jpg", alt: "Elegant villa living room with ambient lighting" },
  { src: "/images/01-living-11.jpg", alt: "Elegant villa living room with ambient lighting" },
  { src: "/images/01-living-12.jpg", alt: "Elegant villa living room with ambient lighting" },
  { src: "/images/01-living-13.jpg", alt: "Elegant villa living room with ambient lighting" },
  { src: "/images/01-living-14.jpg", alt: "Elegant villa living room with ambient lighting" },
  { src: "/images/01-living-15.jpg", alt: "Elegant villa living room with ambient lighting" },
  { src: "/images/01-living-16.jpg", alt: "Elegant villa living room with ambient lighting" },
  { src: "/images/01-living-17.jpg", alt: "Elegant villa living room with ambient lighting" },
  { src: "/images/01-living-18.jpg", alt: "Elegant villa living room with ambient lighting" },
  { src: "/images/02-masbr-01.jpg", alt: "Master bedroom with ambient lighting" },
  { src: "/images/02-masbr-02.jpg", alt: "Master bedroom with ambient lighting" },
  { src: "/images/02-masbr-03.jpg", alt: "Master bedroom with ambient lighting" },
  { src: "/images/02-masbr-04.jpg", alt: "Master bedroom with ambient lighting" },
  { src: "/images/02-masbr-05.jpg", alt: "Master bedroom with ambient lighting" },
  { src: "/images/02-masbr-06.jpg", alt: "Master bedroom with ambient lighting" },
  { src: "/images/02-masbr-07.jpg", alt: "Master bedroom with ambient lighting" },
  { src: "/images/03-starea-01.jpg", alt: "Stair lobby with ambient lighting" },
  { src: "/images/03-starea-02.jpg", alt: "Stair lobby with ambient lighting" },
  { src: "/images/03-starea-03.jpg", alt: "Stair lobby with ambient lighting" },
  { src: "/images/04-bedroom2-01.jpg", alt: "Bedroom 2 with warm palette" },
  { src: "/images/04-bedroom2-02.jpg", alt: "Bedroom 2 with warm palette" },
  { src: "/images/04-bedroom2-03.jpg", alt: "Bedroom 2 with warm palette" },
  { src: "/images/04-bedroom2-04.jpg", alt: "Bedroom 2 with warm palette" },
  { src: "/images/04-bedroom2-05.jpg", alt: "Bedroom 2 with warm palette" },
  { src: "/images/04-bedroom2-06.jpg", alt: "Bedroom 2 with warm palette" },
  { src: "/images/05-bedroom3-01.jpg", alt: "Bedroom 3 with neutral tones" },
  { src: "/images/05-bedroom3-02.jpg", alt: "Bedroom 3 with neutral tones" },
  { src: "/images/05-bedroom3-03.jpg", alt: "Bedroom 3 with neutral tones" },
  { src: "/images/05-bedroom3-04.jpg", alt: "Bedroom 3 with neutral tones" },
  { src: "/images/05-bedroom3-05.jpg", alt: "Bedroom 3 with neutral tones" },
  { src: "/images/05-bedroom3-06.jpg", alt: "Bedroom 3 with neutral tones" },
  { src: "/images/05-bedroom3-07.jpg", alt: "Bedroom 3 with neutral tones" },
  { src: "/images/06-masbathroom-01.jpg", alt: "Master bathroom with marble finishes" },
  { src: "/images/06-masbathroom-02.jpg", alt: "Master bathroom with marble finishes" },
  { src: "/images/06-masbathroom-03.jpg", alt: "Master bathroom with marble finishes" },
  { src: "/images/07-bathrooms-01.jpg", alt: "Bathroom with premium fixtures" },
  { src: "/images/07-bathrooms-02.jpg", alt: "Bathroom with premium fixtures" },
  { src: "/images/07-bathrooms-03.jpg", alt: "Bathroom with premium fixtures" },
  { src: "/images/07-bathrooms-04.jpg", alt: "Bathroom with premium fixtures" },
  { src: "/images/07-bathrooms-05.jpg", alt: "Bathroom with premium fixtures" },
  { src: "/images/07-bathrooms-06.jpg", alt: "Bathroom with premium fixtures" },
  { src: "/images/07-bathrooms-07.jpg", alt: "Bathroom with premium fixtures" },
  { src: "/images/07-bathrooms-08.jpg", alt: "Bathroom with premium fixtures" },
  { src: "/images/07-bathrooms-09.jpg", alt: "Bathroom with premium fixtures" },
  { src: "/images/07-bathrooms-10.jpg", alt: "Bathroom with premium fixtures" },
  { src: "/images/07-bathrooms-11.jpg", alt: "Bathroom with premium fixtures" },
  { src: "/images/07-bathrooms-12.jpg", alt: "Bathroom with premium fixtures" },
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

  // Ensure scroll starts at top
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = 0;
    }
  }, []);

  // Keyboard navigation (only when modal open)
  useEffect(() => {
    const handleKey = (e) => {
      if (!isOpen) return;
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "Escape") closeImage();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen]); // (Keeping it simple for JSX; works fine)

  // Safe getters so we never pass undefined props to <Image>
  const currentImg = galleryImages[current] || {};
  const currentAlt = currentImg.alt || "Project image";
  const currentTitle = currentImg.title || "";

  return (
    <section className="bg-black text-white px-6 sm:px-10 md:px-16 lg:px-28 xl:px-40 py-10 sm:py-20 font-sans">
      {/* Breadcrumb */}
      <p className="text-xs text-[#caa193] uppercase tracking-widest mb-4 font-conthrax">
        HOME &gt; PROJECTS &gt; ii PRIMO PENTHOUSE
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
            ii PRIMO PENTHOUSE
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
                At ii primo penthouse in Downtown Dubai, <b><a href="https://wedointerior.ae/">WE DO interior design &amp; Fit out</a></b> has designed one of the most Luxury
                Penthouses in Downtown Dubai, showing sophistication, elegance and unparalleled comfort. Our expertise in Penthouse
                Interior Design Dubai can be seen in every detail, from bespoke layouts to the refined finishes that enhance the
                living experience. As a leading Penthouse interior design company in Dubai, we are skilled in creating Luxury
                Penthouse Interior Design &amp; Fit Out Dubai, blending modern aesthetics of Dubai with timeless luxury.
              </p>
              <p>
                This project highlights our dedication to offering penthouse interior design services with breathtaking views with
                functionality and style. Known as leading Penthouse interior designers in Dubai, we deliver interiors that set new
                standards for penthouse interiors in Dubai. With tailored Interior Design Services for a Penthouse, our team has
                transformed this residence into The Ultimate Dubai Penthouse, combining artistic vision with flawless execution.
              </p>
            </div>
          </div>

          {/* Image */}
          <figure className="w-full lg:w-1/2">
            <Image
              src="/images/primo-living.jpg"
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
          ii PRIMO PENTHOUSE GALLERY
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((img, idx) => (
            <figure key={img.src || idx} className="cursor-pointer overflow-hidden rounded-md">
              <Image
                src={img.src}
                alt={img.alt || "Project image"}
                title={img.title || ""}
                width={400}
                height={300}
                loading="lazy"
                className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
                onClick={() => openImage(idx)}
              />
              <figcaption className="sr-only">{img.description || img.title || ""}</figcaption>
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
            aria-label="Close"
          >
            &times;
          </button>
          <button
            onClick={prevImage}
            className="absolute left-4 text-white text-4xl"
            aria-label="Previous"
          >
            &#8592;
          </button>

          <Image
            src={currentImg.src || "/images/placeholder.jpg"}
            alt={currentAlt}
            title={currentTitle}
            width={900}
            height={600}
            loading="lazy"
            className="rounded-md object-contain max-h-[90vh] max-w-[90vw]"
          />

          <button
            onClick={nextImage}
            className="absolute right-4 text-white text-4xl"
            aria-label="Next"
          >
            &#8594;
          </button>
        </div>
      )}
    </section>
  );
};

export default VPBody;
