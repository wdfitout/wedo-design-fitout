
"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/* ======================================================================
 * 01 - JUMEIRAH GOLF ESTATES VILLA GALLERY
 * ====================================================================== */

const galleryImages = [
  {
    src: "/images/3vl-1.png",
    alt: "Jumeirah Golf Estates luxury villa design in Dubai - project view 1",
  },
  {
    src: "/images/3vl-2.png",
    alt: "Jumeirah Golf Estates villa contemporary residential design - project view 2",
  },
  {
    src: "/images/3vl-3.png",
    alt: "Luxury villa interior design at Jumeirah Golf Estates Dubai - project view 3",
  },
  {
    src: "/images/3vl-4.png",
    alt: "Jumeirah Golf Estates elegant villa interior design - project view 4",
  },
  {
    src: "/images/3vl-5.png",
    alt: "Contemporary luxury residential design in Jumeirah Golf Estates - project view 5",
  },
  {
    src: "/images/3vl-7.png",
    alt: "Jumeirah Golf Estates high-end villa design in Dubai - project view 7",
  },
  {
    src: "/images/3vl-8.png",
    alt: "Sophisticated villa interior design at Jumeirah Golf Estates - project view 8",
  },
  {
    src: "/images/3vl-9.png",
    alt: "Luxury residential interior design in Jumeirah Golf Estates Dubai - project view 9",
  },
  {
    src: "/images/3vl-10.png",
    alt: "Jumeirah Golf Estates contemporary villa design details - project view 10",
  },
  {
    src: "/images/3vl-11.png",
    alt: "Jumeirah Golf Estates luxury villa architecture and interior design - project view 11",
  },
];

/* ======================================================================
 * 02 - PROJECT PAGE BODY
 * ====================================================================== */

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
    setCurrent(
      (prev) =>
        (prev - 1 + galleryImages.length) % galleryImages.length
    );

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = 0;
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const handleKey = (event) => {
      if (event.key === "ArrowRight") {
        setCurrent(
          (prev) => (prev + 1) % galleryImages.length
        );
      } else if (event.key === "ArrowLeft") {
        setCurrent(
          (prev) =>
            (prev - 1 + galleryImages.length) %
            galleryImages.length
        );
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
        HOME &gt; PROJECTS &gt; JUMEIRAH GOLF ESTATES VILLA
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
            SOPHISTICATED CONTEMPORARY LIVING:
          </p>

          <h1 className="text-sm sm:text-2xl md:text-3xl font-conthrax tracking-widest text-white mt-1">
            JUMEIRAH GOLF ESTATES VILLA
          </h1>

          <div className="w-30 sm:w-96 h-[2px] bg-[#caa193] mt-2" />
        </div>

        <div className="flex flex-col lg:flex-row gap-10">

          {/* Project Description */}
          <div className="w-full lg:w-1/2">
            <div
              ref={scrollRef}
              className="max-h-[360px] overflow-y-auto scroll-smooth text-sm leading-6 text-white/90 space-y-4 pr-2 font-play"
              style={{ scrollbarWidth: "none" }}
            >
              <p>
                Situated within the prestigious Jumeirah Golf
                Estates community in Dubai, this luxury villa
                project presents a sophisticated approach to
                contemporary residential interior design.
                Inspired by the elegance of its exclusive
                surroundings,{" "}
                <b>
                  <a href="https://wedointerior.ae/">
                    WE DO Interior Design &amp; Fit-Out
                  </a>
                </b>{" "}
                explores a harmonious combination of modern
                architectural principles, refined materials,
                balanced proportions and understated luxury.
                The design concept emphasizes timeless
                aesthetics while creating a comfortable and
                welcoming environment suited to upscale
                family living.
              </p>

              <p>
                The interior design approach focuses on
                establishing a seamless visual connection
                between the villa's principal living spaces.
                Elegant family lounges, formal reception
                areas, sophisticated dining arrangements and
                contemporary kitchen spaces are envisioned
                through a cohesive palette of warm neutral
                tones, natural textures and subtle material
                contrasts. Carefully considered architectural
                details, integrated lighting and refined
                furniture compositions enhance the sense of
                openness and sophistication, reflecting the
                expectations of luxury villa interior design
                in Jumeirah Golf Estates.
              </p>

              <p>
                Beyond the main living areas, the residential
                concept extends its refined character into
                private bedrooms, dressing spaces and outdoor
                living environments. An emphasis on functional
                planning, visual continuity and contemporary
                comfort helps create a balanced relationship
                between everyday practicality and high-end
                design. This Jumeirah Golf Estates villa
                project reflects the commitment of WE DO
                Interior Design &amp; Fit-Out to delivering
                thoughtful residential design concepts that
                celebrate architectural elegance, modern
                luxury and the distinctive lifestyle of
                Dubai's premium villa communities.
              </p>
            </div>
          </div>

          {/* Featured Project Image */}
          <figure className="w-full lg:w-1/2">
            <Image
              src="/images/3vl-4.png"
              alt="Jumeirah Golf Estates luxury villa project showcasing elegant contemporary residential interior design in Dubai"
              title="Jumeirah Golf Estates Villa Interior Design | WE DO Dubai"
              width={800}
              height={500}
              loading="lazy"
              className="w-full h-auto object-cover"
            />

            <figcaption className="sr-only">
              Contemporary luxury villa project at Jumeirah
              Golf Estates in Dubai, highlighting a refined
              approach to residential interior design,
              architectural sophistication and modern
              family living.
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
          JUMEIRAH GOLF ESTATES VILLA GALLERY
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((img, idx) => (
            <figure
              key={img.src}
              className="cursor-pointer overflow-hidden rounded-md"
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={400}
                height={300}
                loading="lazy"
                className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
                onClick={() => openImage(idx)}
              />

              <figcaption className="sr-only">
                {img.alt}
              </figcaption>
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
            alt={
              currentImg.alt ||
              "Jumeirah Golf Estates luxury villa interior design"
            }
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
