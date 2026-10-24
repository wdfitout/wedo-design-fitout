"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// Replace these existing file paths with the Grand Bleu Tower photo filenames if necessary.
// The reference provided was a collage and did not include individual asset filenames.
const galleryImages = [
  { src: "/images/bt-1.jpg" },
  { src: "/images/bt-2.jpg" },
  { src: "/images/bt-3.jpg" },
  { src: "/images/bt-4.jpg" },
  { src: "/images/bt-5.jpg" },
  { src: "/images/bt-6.jpg" },
  { src: "/images/bt-7.jpg" },
  { src: "/images/bt-8.jpg" },
  { src: "/images/bt-9.jpg" },
  { src: "/images/bt-10.jpg" },
  { src: "/images/bt-11.jpg" },
  { src: "/images/bt-12.jpg" },
  { src: "/images/bt-13.jpg" },
  { src: "/images/bt-14.jpg" },
  { src: "/images/bt-15.jpg" },
  { src: "/images/bt-16.jpg" },
  { src: "/images/bt-17.jpg" },
  
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
  const nextImage = () =>
    setCurrent((prev) => (prev + 1) % galleryImages.length);
  const prevImage = () =>
    setCurrent((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = 0;
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const handleKey = (event) => {
      if (event.key === "ArrowRight") {
        setCurrent((prev) => (prev + 1) % galleryImages.length);
      } else if (event.key === "ArrowLeft") {
        setCurrent((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
      } else if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen]);

  const currentImg = galleryImages[current] || {};

  return (
    <section className="bg-black text-white px-6 sm:px-10 md:px-16 lg:px-28 xl:px-40 py-10 sm:py-20 font-sans">
      {/* Breadcrumb */}
      <p className="text-xs text-[#caa193] uppercase tracking-widest mb-4 font-conthrax">
        HOME &gt; PROJECTS &gt; GRAND BLEU TOWER PENTHOUSE
      </p>

      {/* Intro */}
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
            CONTEMPORARY COASTAL LUXURY:
          </p>
          <h1 className="text-sm sm:text-2xl md:text-3xl font-conthrax tracking-widest text-white mt-1">
            GRAND BLEU TOWER PENTHOUSE
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
                Located at Grand Bleu Tower in Emaar Beachfront, Dubai, this
                penthouse showcases a calm, contemporary interpretation of
                coastal luxury. <b><a href="https://wedointerior.ae/">WE DO Interior Design &amp; Fit-Out</a></b> brings together a striking
                marble-patterned TV feature wall, dark fluted detailing,
                tailored low-level cabinetry and warm open shelving to give the
                living area a distinct yet understated character.
              </p>
              <p>
                The open-plan lounge and dining space is composed around soft
                ivory seating, a refined stone-textured dining table and
                sculptural gold-toned pendant lighting. Light polished floors
                and expansive glazing enhance the feeling of space, allowing
                natural daylight and the waterfront setting to become part of
                the interior experience.
              </p>
              <p>
                Thoughtful storage, balanced materials and subtle contrasts
                bring comfort and practicality to the overall design. From the
                carefully detailed entertainment wall to the coordinated
                furniture palette, this Grand Bleu Tower penthouse reflects
                the relaxed sophistication of luxury waterfront living at
                Emaar Beachfront.
              </p>
            </div>
          </div>

          <figure className="w-full lg:w-1/2">
            <Image
              src="/images/bt-6.jpg"
              alt="Grand Bleu Tower penthouse living area with marble-patterned TV wall, bespoke shelving and cream seating"
              title="Grand Bleu Tower Penthouse Interior Design | Emaar Beachfront Dubai"
              width={800}
              height={500}
              loading="lazy"
              className="w-full h-auto object-cover"
            />
            <figcaption className="sr-only">
              Contemporary penthouse interior at Emaar Beachfront, featuring
              a statement stone-look wall, integrated cabinetry, warm shelving
              and an elegant neutral palette.
            </figcaption>
          </figure>
        </div>
      </div>

      {/* Gallery */}
      <div className="mt-10">
        <div className="mt-10 flex justify-center">
          <Image
            src="/images/sec-dvd.webp"
            alt=""
            width={320}
            height={80}
            className="h-auto w-48 sm:w-64"
          />
        </div>

        <h2 className="text-white mt-10 mb-10 text-sm sm:text-xl tracking-widest font-conthrax text-center">
          GRAND BLEU TOWER PENTHOUSE GALLERY
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((img, idx) => (
            <figure key={img.src} className="cursor-pointer overflow-hidden rounded-md">
              <Image
                src={img.src}
                alt={img.alt}
                width={400}
                height={300}
                loading="lazy"
                className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
                onClick={() => openImage(idx)}
              />
              <figcaption className="sr-only">{img.alt}</figcaption>
            </figure>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">
          <button
            onClick={closeImage}
            className="absolute top-4 right-6 text-white text-3xl font-bold"
            aria-label="Close image gallery"
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
            src={currentImg.src || "/images/placeholder.jpg"}
            alt={currentImg.alt || "Grand Bleu Tower penthouse interior"}
            width={900}
            height={600}
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