
"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/* ======================================================================
 * 01 - JUMEIRAH ISLANDS VILLA GALLERY
 * ====================================================================== */

const galleryImages = [
  {
    src: "/images/5vl-1.png",
    alt: "Jumeirah Islands luxury villa design in Dubai - project view 1",
  },
  {
    src: "/images/5vl-2.png",
    alt: "Contemporary villa design at Jumeirah Islands - project view 2",
  },
  {
    src: "/images/5vl-4.png",
    alt: "Jumeirah Islands luxury residential interior design - project view 4",
  },
  {
    src: "/images/5vl-5.png",
    alt: "Elegant modern villa interior design in Jumeirah Islands - project view 5",
  },
  {
    src: "/images/5vl-6.png",
    alt: "Luxury villa architecture and interiors in Jumeirah Islands Dubai - project view 6",
  },
  {
    src: "/images/5vl-7.png",
    alt: "Sophisticated residential villa design at Jumeirah Islands - project view 7",
  },
  {
    src: "/images/5vl-8.png",
    alt: "Contemporary luxury villa interior in Jumeirah Islands Dubai - project view 8",
  },
  {
    src: "/images/5vl-9.png",
    alt: "Jumeirah Islands premium residential interior design - project view 9",
  },
  {
    src: "/images/5vl-10.png",
    alt: "High-end villa interior design at Jumeirah Islands Dubai - project view 10",
  },
  {
    src: "/images/5vl-3.png",
    alt: "Jumeirah Islands contemporary luxury villa design - project view 3",
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
        HOME &gt; PROJECTS &gt; JUMEIRAH ISLANDS VILLA
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
            CONTEMPORARY WATERFRONT LUXURY:
          </p>

          <h1 className="text-sm sm:text-2xl md:text-3xl font-conthrax tracking-widest text-white mt-1">
            JUMEIRAH ISLANDS VILLA
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
                Located within the exclusive Jumeirah Islands
                residential community in Dubai, this luxury
                villa project explores a sophisticated
                approach to contemporary interior design.
                Surrounded by the community's distinctive
                landscaped environment and tranquil lakes,
                the villa design concept embraces architectural
                elegance, refined proportions and an
                understated sense of luxury.{" "}
                <b>
                  <a href="https://wedointerior.ae/">
                    WE DO Interior Design &amp; Fit-Out
                  </a>
                </b>{" "}
                brings together modern design principles,
                carefully coordinated materials and a
                harmonious neutral palette to create an
                inviting residential setting that combines
                contemporary sophistication with the
                comfort of luxury family living.
              </p>

              <p>
                The interior design concept emphasizes
                fluid spatial arrangements, thoughtfully
                composed living areas and a balanced
                relationship between architectural
                detailing and everyday functionality.
                Elegant family lounges, welcoming guest
                reception spaces, contemporary dining
                environments and modern kitchen interiors
                form part of a cohesive residential
                experience. Refined finishes, subtle
                material contrasts, natural textures
                and carefully integrated lighting contribute
                to a sophisticated aesthetic. The
                emphasis on openness, comfort and visual
                continuity reflects the character of
                high-end villa interior design in Jumeirah
                Islands, where modern luxury complements
                a peaceful residential lifestyle.
              </p>

              <p>
                The villa's design language extends into
                private bedroom suites, dressing areas
                and outdoor entertaining spaces, maintaining
                consistency between the interior architecture
                and surrounding landscape. Thoughtful
                space planning, elegant furniture
                compositions and understated decorative
                elements help establish a sense of harmony
                throughout the residence. By balancing
                contemporary aesthetics with functional
                family living, this Jumeirah Islands villa
                project reflects the design philosophy
                of WE DO Interior Design &amp; Fit-Out.
                The result is a refined vision of luxury
                residential interior design that embraces
                timeless elegance, modern comfort and
                the distinctive lifestyle of one of
                Dubai's prestigious villa communities.
              </p>
            </div>
          </div>

          {/* Featured Project Image */}
          <figure className="w-full lg:w-1/2">
            <Image
              src="/images/5vl-4.png"
              alt="Jumeirah Islands luxury villa project showcasing contemporary residential interior design in Dubai"
              title="Jumeirah Islands Villa Interior Design | WE DO Dubai"
              width={800}
              height={500}
              loading="lazy"
              className="w-full h-auto object-cover"
            />

            <figcaption className="sr-only">
              Jumeirah Islands luxury villa interior
              design project in Dubai, presenting a
              contemporary approach to residential
              architecture, sophisticated materials
              and modern family living.
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
          JUMEIRAH ISLANDS VILLA GALLERY
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
              "Jumeirah Islands luxury villa interior design"
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
