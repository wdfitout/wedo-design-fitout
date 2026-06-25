"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const galleryImages = [
  { src: "/images/penth2.webp", alt: "Elegant villa living room with ambient lighting", title: "Villa Interior Gallery Image 1", description: "Spacious living area with beige tones and gold accents" },
  { src: "/images/penth3.webp", alt: "Elegant villa living room with ambient lighting" },
  { src: "/images/penth4.webp", alt: "Elegant villa living room with ambient lighting" },
  { src: "/images/penth5.webp", alt: "Elegant villa living room with ambient lighting" },
  { src: "/images/penth6.webp", alt: "Elegant villa living room with ambient lighting" },
  { src: "/images/penth7.webp", alt: "Elegant villa living room with ambient lighting" },
  { src: "/images/penth8.webp", alt: "Elegant villa living room with ambient lighting" },
  { src: "/images/penth9.webp", alt: "Elegant villa living room with ambient lighting" },
  { src: "/images/penth10.webp", alt: "Elegant villa living room with ambient lighting" },
  { src: "/images/penth11.webp", alt: "Elegant villa living room with ambient lighting" },
  { src: "/images/penth13.webp", alt: "Elegant villa living room with ambient lighting" },
  { src: "/images/penth14.webp", alt: "Elegant villa living room with ambient lighting" },
  { src: "/images/penth15.webp", alt: "Elegant villa living room with ambient lighting" },
  { src: "/images/penth16.webp", alt: "Elegant villa living room with ambient lighting" },
  { src: "/images/penth17.webp", alt: "Elegant villa living room with ambient lighting" },
  { src: "/images/penth18.webp", alt: "Elegant villa living room with ambient lighting" },
  { src: "/images/penth19.webp", alt: "Elegant villa living room with ambient lighting" },
  { src: "/images/penth20.webp", alt: "Elegant villa living room with ambient lighting" },
  { src: "/images/pentv1.webp", alt: "Master bedroom with ambient lighting" },
  { src: "/images/pentv2.webp", alt: "Master bedroom with ambient lighting" },
  { src: "/images/pentv3.webp", alt: "Master bedroom with ambient lighting" },
  { src: "/images/pentv4.webp", alt: "Master bedroom with ambient lighting" },
  { src: "/images/pentv5.webp", alt: "Master bedroom with ambient lighting" },
  { src: "/images/pentv6.webp", alt: "Master bedroom with ambient lighting" },
  { src: "/images/pentv7.webp", alt: "Master bedroom with ambient lighting" },
  { src: "/images/pentv8.webp", alt: "Stair lobby with ambient lighting" },
  { src: "/images/pentv9.webp", alt: "Stair lobby with ambient lighting" },
  { src: "/images/pentv10.webp", alt: "Stair lobby with ambient lighting" },
  { src: "/images/pentv11.webp", alt: "Bedroom 2 with warm palette" },
  { src: "/images/pentv12.webp", alt: "Bedroom 2 with warm palette" },
  { src: "/images/pentv13.webp", alt: "Bedroom 2 with warm palette" },
  { src: "/images/pentv14.webp", alt: "Bedroom 2 with warm palette" },
  { src: "/images/pentv15.webp", alt: "Bedroom 2 with warm palette" },
  { src: "/images/pentv16.webp", alt: "Bedroom 2 with warm palette" },
  { src: "/images/pentv17.webp", alt: "Bedroom 3 with neutral tones" },
  { src: "/images/pentv18.webp", alt: "Bedroom 3 with neutral tones" },
  { src: "/images/pentv20.webp", alt: "Bedroom 3 with neutral tones" },
  { src: "/images/pentv21.webp", alt: "Bedroom 3 with neutral tones" },
  { src: "/images/pentv22.webp", alt: "Bedroom 3 with neutral tones" },
  { src: "/images/pentv23.webp", alt: "Bedroom 3 with neutral tones" },
  { src: "/images/pentv24.webp", alt: "Bedroom 3 with neutral tones" },
  { src: "/images/pentv25.webp", alt: "Master bathroom with marble finishes" },
  { src: "/images/pentv26.webp", alt: "Master bathroom with marble finishes" },
  { src: "/images/pentv27.webp", alt: "Master bathroom with marble finishes" },
  { src: "/images/pentv28.webp", alt: "Bathroom with premium fixtures" },
  { src: "/images/pentv29.webp", alt: "Bathroom with premium fixtures" },
  { src: "/images/pentv30.webp", alt: "Bathroom with premium fixtures" },
  { src: "/images/pentv31.webp", alt: "Bathroom with premium fixtures" },
  { src: "/images/pentv32.webp", alt: "Bathroom with premium fixtures" },
  { src: "/images/pentv33.webp", alt: "Bathroom with premium fixtures" },
  { src: "/images/pentv34.webp", alt: "Bathroom with premium fixtures" },
  { src: "/images/pentv35.webp", alt: "Bathroom with premium fixtures" },
  { src: "/images/pentv36.webp", alt: "Bathroom with premium fixtures" },
  { src: "/images/pentv37.webp", alt: "Bathroom with premium fixtures" },
  { src: "/images/pentv38.webp", alt: "Bathroom with premium fixtures" },
  { src: "/images/pentv39.webp", alt: "Bathroom with premium fixtures" },
  { src: "/images/pentv40.webp", alt: "Stair lobby with ambient lighting" },
  { src: "/images/pentv41.webp", alt: "Bedroom 2 with warm palette" },
  { src: "/images/pentv42.webp", alt: "Bedroom 2 with warm palette" },
  { src: "/images/pentv43.webp", alt: "Bedroom 2 with warm palette" },
  { src: "/images/pentv44.webp", alt: "Bedroom 2 with warm palette" },
  { src: "/images/pentv45.webp", alt: "Bedroom 2 with warm palette" },
  { src: "/images/pentv46.webp", alt: "Bedroom 2 with warm palette" },
  { src: "/images/pentv47.webp", alt: "Bedroom 3 with neutral tones" },
  { src: "/images/pentv48.webp", alt: "Bedroom 3 with neutral tones" },
  { src: "/images/pentv49.webp", alt: "Bedroom 3 with neutral tones" },
  { src: "/images/pentv50.webp", alt: "Bedroom 3 with neutral tones" },
  { src: "/images/pentv51.webp", alt: "Bedroom 3 with neutral tones" },
  { src: "/images/pentv52.webp", alt: "Bedroom 3 with neutral tones" },
  { src: "/images/pentv53.webp", alt: "Bedroom 3 with neutral tones" },
  { src: "/images/pentv54.webp", alt: "Master bathroom with marble finishes" },
  { src: "/images/pentv55.webp", alt: "Master bathroom with marble finishes" },
  { src: "/images/pentv56.webp", alt: "Master bathroom with marble finishes" },
  { src: "/images/pentv57.webp", alt: "Bathroom with premium fixtures" },
  { src: "/images/pentv58.webp", alt: "Bathroom with premium fixtures" },
  { src: "/images/pentv59.webp", alt: "Bathroom with premium fixtures" },
  { src: "/images/pentv60.webp", alt: "Bathroom with premium fixtures" },
  { src: "/images/pentv61.webp", alt: "Bathroom with premium fixtures" },
  { src: "/images/pentv62.webp", alt: "Bathroom with premium fixtures" },
  { src: "/images/pentv63.webp", alt: "Bathroom with premium fixtures" },
  { src: "/images/pentv64.webp", alt: "Bathroom with premium fixtures" },
  { src: "/images/pentv65.webp", alt: "Bathroom with premium fixtures" },
  { src: "/images/pentv66.webp", alt: "Bathroom with premium fixtures" },
  { src: "/images/pentv67.webp", alt: "Bathroom with premium fixtures" },
  { src: "/images/pentv68.webp", alt: "Bathroom with premium fixtures" },
  { src: "/images/pentv69.webp", alt: "Bathroom with premium fixtures" },
  { src: "/images/pentv70.webp", alt: "Bathroom with premium fixtures" },
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
              src="/images/penth1.webp"
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
