
"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/* ======================================================================
 * 01 - AL BARARI MODERN VILLA GALLERY
 * ====================================================================== */

const galleryImages = [
  {
    src: "/images/2vl-1.png",
    alt: "Al Barari modern villa design in Dubai - project view 1",
  },
  {
    src: "/images/2vl-2.png",
    alt: "Contemporary villa design in Al Barari Dubai - project view 2",
  },
  {
    src: "/images/2vl-3.png",
    alt: "Al Barari luxury residential interior design - project view 3",
  },
  {
    src: "/images/2vl-4.png",
    alt: "Modern luxury villa interior at Al Barari Dubai - project view 4",
  },
  {
    src: "/images/2vl-5.png",
    alt: "Sophisticated contemporary villa design in Al Barari - project view 5",
  },
  {
    src: "/images/2vl-4.png",
    alt: "Modern luxury villa interior at Al Barari Dubai - project view 4",
  },
  {
    src: "/images/2vl-7.png",
    alt: "Al Barari modern villa residential design - project view 7",
  },
  {
    src: "/images/2vl-8.png",
    alt: "Luxury contemporary villa interior design in Al Barari - project view 8",
  },
  {
    src: "/images/2vl-9.png",
    alt: "Al Barari Dubai villa architectural design - project view 9",
  },
  {
    src: "/images/2vl-10.png",
    alt: "High-end residential villa design at Al Barari - project view 10",
  },
  {
    src: "/images/2vl-11.png",
    alt: "Al Barari modern villa luxury architecture and design - project view 11",
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
        setCurrent((prev) => (prev + 1) % galleryImages.length);
      } else if (event.key === "ArrowLeft") {
        setCurrent(
          (prev) =>
            (prev - 1 + galleryImages.length) % galleryImages.length
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
        HOME &gt; PROJECTS &gt; AL BARARI MODERN VILLA
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
            NATURE-INSPIRED MODERN LIVING:
          </p>

          <h1 className="text-sm sm:text-2xl md:text-3xl font-conthrax tracking-widest text-white mt-1">
            AL BARARI MODERN VILLA
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
                Set within the lush residential surroundings
                of Al Barari, Dubai, this modern villa design
                project presents a refined interpretation of
                contemporary luxury inspired by nature.
                Embracing the distinctive green character
                of the community,{" "}
                <b>
                  <a href="https://wedointerior.ae/">
                    WE DO Interior Design &amp; Fit-Out
                  </a>
                </b>{" "}
                explores the relationship between elegant
                interior architecture, natural materials
                and thoughtfully planned living spaces.
                The design concept combines clean
                architectural lines, warm neutral tones
                and understated detailing to create a
                peaceful residential atmosphere that
                celebrates sophistication, comfort
                and modern family living.
              </p>

              <p>
                The villa's interior design approach centers
                on creating a harmonious transition between
                indoor comfort and the surrounding landscaped
                environment. Open and welcoming family
                lounges, elegant guest reception areas,
                sophisticated dining spaces and contemporary
                kitchen arrangements contribute to a
                cohesive residential experience. Natural
                textures, refined stone-inspired surfaces,
                warm wood accents and carefully considered
                lighting establish a balanced visual
                language. The emphasis on simplicity,
                openness and material harmony reflects
                the character of luxury villa interior
                design in Al Barari, where contemporary
                architecture and nature-inspired living
                complement one another.
              </p>

              <p>
                Extending beyond the primary entertaining
                spaces, the residential design concept
                brings the same sense of calm and refinement
                into private bedrooms, dressing areas
                and outdoor living environments. Thoughtful
                space planning, cohesive finishes and
                understated decorative details help
                establish continuity throughout the villa,
                while the relationship with gardens and
                outdoor spaces enhances the overall living
                experience. This Al Barari modern villa
                project reflects the design philosophy
                of WE DO Interior Design &amp; Fit-Out,
                combining contemporary luxury, functional
                elegance and a connection with nature
                to express sophisticated residential
                living in Dubai.
              </p>
            </div>
          </div>

          {/* Featured Project Image */}
          <figure className="w-full lg:w-1/2">
            <Image
              src="/images/2vl-4.png"
              alt="Al Barari modern villa project featuring contemporary luxury residential design in Dubai"
              title="Al Barari Modern Villa Interior Design | WE DO Dubai"
              width={800}
              height={500}
              loading="lazy"
              className="w-full h-auto object-cover"
            />

            <figcaption className="sr-only">
              Al Barari modern villa design project in Dubai,
              presenting contemporary residential interior
              architecture and a nature-inspired approach
              to sophisticated luxury living.
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
          AL BARARI MODERN VILLA GALLERY
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((img, idx) => (
            <figure
              key={`${img.src}-${idx}`}
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
              "Al Barari modern luxury villa interior design"
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
