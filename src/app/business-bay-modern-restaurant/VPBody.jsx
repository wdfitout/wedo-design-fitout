
"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/* ======================================================================
 * 01 - BUSINESS BAY MODERN RESTAURANT GALLERY
 * ====================================================================== */

const galleryImages = [
  {
    src: "/images/5rs-1.png",
    alt: "Business Bay modern restaurant interior design in Dubai - project view 1",
  },
  {
    src: "/images/5rs-2.png",
    alt: "Contemporary restaurant dining interior in Business Bay Dubai - project view 2",
  },
  {
    src: "/images/5rs-3.png",
    alt: "Modern hospitality interior design in Business Bay - project view 3",
  },
  {
    src: "/images/5rs-4.png",
    alt: "Business Bay restaurant commercial interior design - project view 4",
  },
  {
    src: "/images/5rs-5.png",
    alt: "Sophisticated modern restaurant design in Business Bay Dubai - project view 5",
  },
  {
    src: "/images/5rs-6.png",
    alt: "Contemporary dining restaurant interior at Business Bay - project view 6",
  },
  {
    src: "/images/5rs-7.png",
    alt: "Premium restaurant interior design in Business Bay Dubai - project view 7",
  },
  {
    src: "/images/5rs-8.png",
    alt: "Business Bay modern restaurant hospitality design - project view 8",
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
        HOME &gt; PROJECTS &gt; BUSINESS BAY MODERN RESTAURANT
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
            CONTEMPORARY URBAN DINING:
          </p>

          <h1 className="text-sm sm:text-2xl md:text-3xl font-conthrax tracking-widest text-white mt-1">
            BUSINESS BAY MODERN RESTAURANT
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
                Located in the vibrant commercial and
                residential district of Business Bay,
                Dubai, this modern restaurant interior
                design project explores a sophisticated
                interpretation of contemporary urban
                hospitality. Inspired by the district's
                dynamic business environment, modern
                architecture and evolving dining culture,{" "}
                <b>
                  <a href="https://wedointerior.ae/">
                    WE DO Interior Design &amp; Fit-Out
                  </a>
                </b>{" "}
                presents a refined restaurant design
                concept that balances modern aesthetics,
                inviting dining environments and
                thoughtful commercial space planning.
                The approach emphasizes architectural
                simplicity, contemporary elegance
                and the creation of a distinctive
                hospitality atmosphere suited to
                the cosmopolitan lifestyle of
                Business Bay, Dubai.
              </p>

              <p>
                The restaurant interior design concept
                focuses on developing a harmonious
                relationship between comfortable dining
                arrangements, architectural detailing
                and a cohesive visual identity.
                Thoughtfully composed seating areas,
                contemporary furniture selections
                and carefully considered circulation
                contribute to a welcoming environment
                for casual dining, business meetings
                and social gatherings. A sophisticated
                combination of modern finishes,
                subtle textural contrasts and layered
                ambient lighting helps establish
                a refined yet approachable atmosphere.
                The design direction considers
                both visual appeal and practical
                hospitality requirements, reflecting
                the growing demand for modern
                restaurant interior design and
                commercial fit-out solutions
                in Business Bay.
              </p>

              <p>
                Beyond its contemporary appearance,
                the restaurant design philosophy
                prioritizes guest comfort, operational
                functionality and an engaging dining
                experience. Efficient spatial
                organization, balanced proportions
                and coordinated interior finishes
                support a seamless relationship
                between reception, dining and
                hospitality service areas.
                Carefully considered design elements
                contribute to a distinctive
                environment that complements the
                modern urban character of the district.
                This Business Bay modern restaurant
                project reflects the design approach
                of WE DO Interior Design &amp; Fit-Out,
                bringing together contemporary
                restaurant interior design, thoughtful
                hospitality planning and refined
                commercial aesthetics to express
                the sophisticated dining culture
                of one of Dubai's most prominent
                business destinations.
              </p>
            </div>
          </div>

          {/* Featured Project Image */}
          <figure className="w-full lg:w-1/2">
            <Image
              src="/images/5rs-3.png"
              alt="Business Bay modern restaurant project featuring contemporary commercial and hospitality interior design in Dubai"
              title="Business Bay Modern Restaurant Interior Design | WE DO Dubai"
              width={800}
              height={500}
              loading="lazy"
              className="w-full h-auto object-cover"
            />

            <figcaption className="sr-only">
              Business Bay modern restaurant interior
              design project in Dubai, presenting a
              contemporary approach to sophisticated
              dining environments, commercial
              hospitality planning and modern
              restaurant interior design by
              WE DO Interior Design and Fit-Out.
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
          BUSINESS BAY MODERN RESTAURANT GALLERY
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
              "Business Bay modern restaurant interior design"
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
