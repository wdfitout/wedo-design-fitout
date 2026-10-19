"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// Place the original project JPGs in public/images/princess-tower/.
// The image filenames are transcribed from the supplied screenshot.
const imageFolder = "/images/princess-tower";

const galleryImages = [
  {src: "/images/pt-1.jpg"},
  {src: "/images/pt-2.jpg"},
  {src: "/images/pt-3.jpg"},
  {src: "/images/pt-4.jpg"},
  {src: "/images/pt-5.jpg"},
  {src: "/images/pt-6.jpg"},
  {src: "/images/pt-7.jpg"},
  {src: "/images/pt-8.jpg"},
  {src: "/images/pt-9.jpg"},
  {src: "/images/pt-10.jpg"},
  {src: "/images/pt-11.jpg"},
  {src: "/images/pt-12.jpg"},
  {src: "/images/pt-13.jpg"},
  {src: "/images/pt-14.jpg"},
 
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
  const nextImage = () => setCurrent((prev) => (prev + 1) % galleryImages.length);
  const prevImage = () => setCurrent((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = 0;
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e) => {
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "Escape") closeImage();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen]);

  const currentImg = galleryImages[current] || {};
  const currentAlt = currentImg.alt || "Princess Tower penthouse interior design photograph";
  const currentTitle = currentImg.title || "Princess Tower Penthouse Interior";

  return (
    <section className="bg-black text-white px-6 sm:px-10 md:px-16 lg:px-28 xl:px-40 py-10 sm:py-20 font-sans">
      {/* Breadcrumb */}
      <p className="text-xs text-[#caa193] uppercase tracking-widest mb-4 font-conthrax">
        HOME &gt; PROJECTS &gt; PRINCESS TOWER PENTHOUSE
      </p>

      {/* Heading, project description and main image */}
      <div className="relative pl-4 sm:pl-6 mb-20">
        <div className="absolute top-0 left-0 h-full w-[1px] bg-gray-400 z-0 hidden lg:block" />
        <motion.div
          className="absolute left-[-4px] top-[104px] w-2 h-2 rounded-full bg-[#caa193] z-10 hidden lg:block"
          style={{ y: dotY }}
        />
        <div
          className="absolute top-0 left-0 w-[1px] bg-gray-400 z-0 block lg:hidden"
          style={{ height: "calc(104px + 360px)" }}
        />

        <div className="mb-6">
          <p className="text-xs sm:text-base font-conthrax tracking-wide uppercase text-white">
            REFINED PENTHOUSE LIVING IN DUBAI MARINA:
          </p>
          <h1 className="text-sm sm:text-2xl md:text-3xl font-conthrax tracking-widest text-white mt-1">
            PRINCESS TOWER PENTHOUSE
          </h1>
          <div className="w-30 sm:w-96 h-[2px] bg-[#caa193] mt-2" />
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          <div className="w-full lg:w-1/2">
            <div
              ref={scrollRef}
              className="max-h-[360px] overflow-y-auto scroll-smooth text-sm leading-6 text-white/90 space-y-4 pr-2 font-play"
              style={{ scrollbarWidth: "none" }}
            >
              <p>
                Located in Princess Tower, Dubai Marina, this luxury penthouse showcases the
                contemporary residential design approach of{" "}
                <b>
                  <a href="https://wedointerior.ae/">WE DO Interior Design &amp; Fit-Out</a>
                </b>.
                The open-plan living and dining spaces balance soft ivory seating and warm timber
                flooring with deep navy-blue bespoke joinery, bold feature walls and sculptural
                lighting. Carefully layered neutral textures create a welcoming atmosphere, while
                dark architectural details give the interior a distinctive modern character.
              </p>
              <p>
                The dining area features a generous table, upholstered chairs and integrated
                display shelving, bringing comfort and sophistication to everyday entertaining.
                In the lounge, an elegant media feature with a linear fireplace complements the
                curved sofas, contemporary coffee tables and curated artwork. From the refined
                furniture selections to the detailed cabinetry, this Princess Tower project
                illustrates how luxury penthouse interior design in Dubai Marina can unite
                thoughtful functionality, timeless materials and a cohesive aesthetic.
              </p>
            </div>
          </div>

          <figure className="w-full lg:w-1/2">
            <Image
              src="/images/pt-10.jpg"
              alt="Luxury Princess Tower penthouse living room with curved cream sofas, dark feature furniture and sculptural lighting"
              title="Princess Tower Penthouse Interior Design in Dubai Marina"
              width={800}
              height={500}
              loading="lazy"
              className="w-full h-auto object-cover"
            />
            <figcaption className="sr-only">
              Contemporary Princess Tower penthouse lounge with cream seating, statement furnishings and sculptural lighting.
            </figcaption>
          </figure>
        </div>
      </div>

      {/* Project gallery */}
      <div className="mt-10">
        <div className="mt-10 flex justify-center">
          <Image
            src="/images/sec-dvd.webp"
            alt="Continue to the Princess Tower penthouse photo gallery"
            width={320}
            height={80}
            className="h-auto w-48 sm:w-64"
          />
        </div>

        <h2 className="text-white mt-10 mb-10 text-sm sm:text-xl tracking-widest font-conthrax text-center">
          PRINCESS TOWER PENTHOUSE GALLERY
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((img, idx) => (
            <figure key={img.src} className="cursor-pointer overflow-hidden rounded-md">
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

      {/* Lightbox: retains original click and keyboard navigation */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center" role="dialog" aria-modal="true" aria-label="Princess Tower penthouse photo gallery">
          <button
            onClick={closeImage}
            className="absolute top-4 right-6 text-white text-3xl font-bold"
            aria-label="Close gallery"
          >
            &times;
          </button>
          <button
            onClick={prevImage}
            className="absolute left-4 text-white text-4xl"
            aria-label="Previous image"
          >
            &#8592;
          </button>
          <Image
            src={currentImg.src}
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
            aria-label="Next image"
          >
            &#8594;
          </button>
        </div>
      )}
    </section>
  );
};

export default VPBody;