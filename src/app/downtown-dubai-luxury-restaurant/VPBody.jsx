
"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/* ======================================================================
 * 01 - DOWNTOWN DUBAI LUXURY RESTAURANT GALLERY
 * ====================================================================== */

const galleryImages = [
  {
    src: "/images/2rs-1.png",
    alt: "Downtown Dubai luxury restaurant interior design - project view 1",
  },
  {
    src: "/images/2rs-2.png",
    alt: "Luxury restaurant dining interior in Downtown Dubai - project view 2",
  },
  {
    src: "/images/2rs-3.png",
    alt: "Contemporary restaurant interior design in Downtown Dubai - project view 3",
  },
  {
    src: "/images/2rs-4.png",
    alt: "High-end hospitality interior design in Downtown Dubai - project view 4",
  },
  {
    src: "/images/2rs-5.png",
    alt: "Elegant luxury dining restaurant design in Downtown Dubai - project view 5",
  },
  {
    src: "/images/2rs-6.png",
    alt: "Premium restaurant interior design in Downtown Dubai - project view 6",
  },
  {
    src: "/images/2rs-7.png",
    alt: "Sophisticated commercial restaurant interior in Downtown Dubai - project view 7",
  },
  {
    src: "/images/2rs-8.png",
    alt: "Contemporary luxury hospitality design in Downtown Dubai - project view 8",
  },
  {
    src: "/images/2rs-9.png",
    alt: "Upscale restaurant interior design in Downtown Dubai - project view 9",
  },
  {
    src: "/images/2rs-10.png",
    alt: "Downtown Dubai luxury restaurant architecture and interior design - project view 10",
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
      (prev) => (prev - 1 + galleryImages.length) % galleryImages.length
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
        HOME &gt; PROJECTS &gt; DOWNTOWN DUBAI LUXURY RESTAURANT
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
            CONTEMPORARY URBAN LUXURY:
          </p>

          <h1 className="text-sm sm:text-2xl md:text-3xl font-conthrax tracking-widest text-white mt-1">
            DOWNTOWN DUBAI LUXURY RESTAURANT
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
                Situated in the vibrant heart of Downtown
                Dubai, this luxury restaurant interior
                design project presents a sophisticated
                interpretation of contemporary urban
                hospitality. Inspired by the area's
                architectural character, cosmopolitan
                lifestyle and prestigious dining scene,{" "}
                <b>
                  <a href="https://wedointerior.ae/">
                    WE DO Interior Design &amp; Fit-Out
                  </a>
                </b>{" "}
                explores a refined approach to restaurant
                design that combines modern elegance,
                carefully considered spatial arrangements
                and an inviting atmosphere. The concept
                focuses on creating a distinctive
                hospitality environment where luxury
                aesthetics and the comfort of guests
                come together to elevate the overall
                dining experience.
              </p>

              <p>
                The restaurant's interior design concept
                emphasizes architectural harmony,
                sophisticated material combinations
                and an engaging visual identity.
                Thoughtfully organized dining spaces,
                comfortable seating arrangements and
                welcoming reception areas create a
                seamless experience for guests.
                Contemporary decorative details,
                carefully coordinated finishes and
                layered ambient lighting help establish
                a warm yet refined atmosphere that
                complements the energy of Downtown
                Dubai. From intimate dining settings
                to social gathering areas, the design
                approach balances visual appeal with
                functionality, reflecting the
                expectations of premium restaurant
                interior design in one of Dubai's
                most recognized destinations.
              </p>

              <p>
                Beyond its visual character, the
                restaurant design philosophy prioritizes
                hospitality functionality, thoughtful
                circulation and a memorable guest
                experience. Attention to spatial
                proportions, lighting composition
                and interior detailing creates a
                cohesive relationship between the
                restaurant's individual areas.
                A contemporary design language and
                considered material palette contribute
                to an environment that feels both
                luxurious and welcoming. This
                Downtown Dubai luxury restaurant
                project reflects the creative vision
                of WE DO Interior Design &amp; Fit-Out,
                bringing together innovative hospitality
                planning, sophisticated commercial
                interior design and modern architectural
                elegance to express the dynamic
                character of luxury dining in
                Downtown Dubai.
              </p>
            </div>
          </div>

          {/* Featured Project Image */}
          <figure className="w-full lg:w-1/2">
            <Image
              src="/images/2rs-2.png"
              alt="Downtown Dubai luxury restaurant project showcasing contemporary high-end hospitality interior design"
              title="Downtown Dubai Luxury Restaurant Interior Design | WE DO"
              width={800}
              height={500}
              loading="lazy"
              className="w-full h-auto object-cover"
            />

            <figcaption className="sr-only">
              Downtown Dubai luxury restaurant interior
              design project showcasing a contemporary
              approach to elegant dining environments,
              sophisticated hospitality architecture
              and premium commercial interior design
              by WE DO Interior Design and Fit-Out.
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
          DOWNTOWN DUBAI LUXURY RESTAURANT GALLERY
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
              "Downtown Dubai luxury restaurant interior design"
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
