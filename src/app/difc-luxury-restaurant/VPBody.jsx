
"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/* ======================================================================
 * 01 - DIFC LUXURY RESTAURANT GALLERY
 * ====================================================================== */

const galleryImages = [
  {
    src: "/images/1rs-1.png",
    alt: "DIFC luxury restaurant interior design in Dubai - project view 1",
  },
  {
    src: "/images/1rs-2.png",
    alt: "Luxury dining restaurant interior in DIFC Dubai - project view 2",
  },
  {
    src: "/images/1rs-3.png",
    alt: "Contemporary restaurant design at Dubai International Financial Centre - project view 3",
  },
  {
    src: "/images/1rs-4.png",
    alt: "High-end hospitality interior design in DIFC Dubai - project view 4",
  },
  {
    src: "/images/1rs-5.png",
    alt: "Elegant luxury restaurant design in DIFC - project view 5",
  },
  {
    src: "/images/1rs-6.png",
    alt: "Premium restaurant interior design in Dubai International Financial Centre - project view 6",
  },
  {
    src: "/images/1rs-7.png",
    alt: "Sophisticated commercial restaurant interior in DIFC - project view 7",
  },
  {
    src: "/images/1rs-8.png",
    alt: "Contemporary luxury hospitality design in DIFC Dubai - project view 8",
  },
  {
    src: "/images/1rs-9.png",
    alt: "Upscale restaurant interior design at DIFC Dubai - project view 9",
  },
  {
    src: "/images/1rs-10.png",
    alt: "DIFC luxury restaurant architecture and interior design - project view 10",
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
        HOME &gt; PROJECTS &gt; DIFC LUXURY RESTAURANT
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
            SOPHISTICATED FINE DINING:
          </p>

          <h1 className="text-sm sm:text-2xl md:text-3xl font-conthrax tracking-widest text-white mt-1">
            DIFC LUXURY RESTAURANT
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
                Located in the prestigious Dubai International
                Financial Centre (DIFC), this luxury restaurant
                design project presents a sophisticated approach
                to contemporary hospitality interiors. Inspired
                by the district's cosmopolitan atmosphere and
                renowned dining culture,{" "}
                <b>
                  <a href="https://wedointerior.ae/">
                    WE DO Interior Design &amp; Fit-Out
                  </a>
                </b>{" "}
                explores a refined balance of architectural
                elegance, premium materials and carefully
                considered spatial planning. The concept
                combines contemporary aesthetics with an
                inviting dining environment, creating a
                distinctive restaurant interior that reflects
                the expectations of upscale hospitality
                in the heart of Dubai.
              </p>

              <p>
                The restaurant interior design concept focuses
                on delivering an immersive guest experience
                through harmonious proportions, thoughtfully
                arranged seating and a sophisticated visual
                identity. Elegant dining areas, welcoming
                reception spaces and carefully planned
                circulation contribute to a comfortable
                environment for both intimate dining and
                social gatherings. A coordinated approach
                to decorative finishes, atmospheric lighting,
                contemporary furniture and architectural
                detailing helps establish a refined ambiance.
                Every design consideration seeks to balance
                visual sophistication with the practical
                requirements of a modern luxury restaurant
                in DIFC, Dubai.
              </p>

              <p>
                Beyond aesthetics, the design philosophy
                emphasizes the relationship between guest
                comfort, hospitality functionality and a
                memorable dining atmosphere. Thoughtful
                space utilization, material coordination
                and subtle design contrasts contribute to
                a cohesive interior experience that supports
                the restaurant's premium positioning.
                This DIFC luxury restaurant project reflects
                the approach of WE DO Interior Design
                &amp; Fit-Out to high-end restaurant interior
                design in Dubai, where contemporary
                architectural expression and hospitality
                planning come together to create an
                elegant commercial environment suited to
                the distinctive lifestyle and professional
                community of Dubai International Financial
                Centre.
              </p>
            </div>
          </div>

          {/* Featured Project Image */}
          <figure className="w-full lg:w-1/2">
            <Image
              src="/images/1rs-2.png"
              alt="DIFC luxury restaurant project showcasing contemporary fine dining interior design in Dubai"
              title="DIFC Luxury Restaurant Interior Design | WE DO Dubai"
              width={800}
              height={500}
              loading="lazy"
              className="w-full h-auto object-cover"
            />

            <figcaption className="sr-only">
              DIFC luxury restaurant interior design
              project in Dubai International Financial
              Centre, presenting a sophisticated approach
              to contemporary hospitality architecture,
              elegant dining environments and refined
              commercial interior design.
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
          DIFC LUXURY RESTAURANT GALLERY
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
              "DIFC luxury restaurant interior design"
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
