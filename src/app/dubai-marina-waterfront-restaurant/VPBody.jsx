
"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/* ======================================================================
 * 01 - DUBAI MARINA WATERFRONT RESTAURANT GALLERY
 * ====================================================================== */

const galleryImages = [
  {
    src: "/images/4rs-1.png",
    alt: "Dubai Marina waterfront restaurant interior design - project view 1",
  },
  {
    src: "/images/4rs-2.png",
    alt: "Luxury waterfront dining restaurant interior in Dubai Marina - project view 2",
  },
  {
    src: "/images/4rs-3.png",
    alt: "Contemporary restaurant interior design in Dubai Marina - project view 3",
  },
  {
    src: "/images/4rs-4.png",
    alt: "Premium waterfront hospitality interior design in Dubai Marina - project view 4",
  },
  {
    src: "/images/4rs-5.png",
    alt: "Elegant waterfront restaurant design in Dubai Marina - project view 5",
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
        HOME &gt; PROJECTS &gt; DUBAI MARINA WATERFRONT RESTAURANT
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
            CONTEMPORARY WATERFRONT DINING:
          </p>

          <h1 className="text-sm sm:text-2xl md:text-3xl font-conthrax tracking-widest text-white mt-1">
            DUBAI MARINA WATERFRONT RESTAURANT
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
                Set within the vibrant waterfront destination
                of Dubai Marina, this luxury restaurant
                interior design project explores a refined
                approach to contemporary hospitality and
                elevated dining experiences. Inspired by
                the area's distinctive marina lifestyle,
                modern architecture and sophisticated
                social atmosphere,{" "}
                <b>
                  <a href="https://wedointerior.ae/">
                    WE DO Interior Design &amp; Fit-Out
                  </a>
                </b>{" "}
                presents a restaurant design concept that
                balances architectural elegance, inviting
                interiors and thoughtful spatial planning.
                The design direction celebrates contemporary
                luxury while creating a welcoming environment
                suited to the dynamic waterfront dining
                culture of Dubai Marina.
              </p>

              <p>
                The restaurant interior design concept
                emphasizes the relationship between refined
                dining spaces, guest comfort and the
                distinctive character of its waterfront
                setting. Carefully considered seating
                arrangements, elegant furniture compositions
                and harmonious architectural detailing
                establish a sophisticated visual identity.
                A balanced combination of contemporary
                materials, subtle decorative textures
                and layered ambient lighting contributes
                to a warm and memorable dining atmosphere.
                The design approach considers the transition
                between welcoming reception areas,
                intimate dining settings and social
                gathering spaces, creating a cohesive
                hospitality experience that reflects
                the expectations of premium restaurant
                interior design in Dubai Marina.
              </p>

              <p>
                Beyond its contemporary aesthetic, the
                restaurant design philosophy focuses
                on functionality, atmosphere and the
                overall guest journey. Thoughtful space
                utilization, comfortable circulation
                and coordinated interior finishes help
                establish a seamless relationship between
                the restaurant's individual environments.
                The waterfront-inspired design language
                combines understated elegance with
                the energy of Dubai Marina, expressing
                a modern approach to luxury hospitality.
                This Dubai Marina waterfront restaurant
                project reflects the vision of WE DO
                Interior Design &amp; Fit-Out, bringing
                together sophisticated commercial
                interior design, practical hospitality
                planning and contemporary architectural
                expression to create a distinctive
                dining environment within one of
                Dubai's most celebrated waterfront
                destinations.
              </p>
            </div>
          </div>

          {/* Featured Project Image */}
          <figure className="w-full lg:w-1/2">
            <Image
              src="/images/4rs-2.png"
              alt="Dubai Marina waterfront restaurant project showcasing contemporary luxury hospitality interior design"
              title="Dubai Marina Waterfront Restaurant Interior Design | WE DO Dubai"
              width={800}
              height={500}
              loading="lazy"
              className="w-full h-auto object-cover"
            />

            <figcaption className="sr-only">
              Dubai Marina waterfront restaurant interior
              design project presenting a sophisticated
              approach to contemporary dining environments,
              luxury hospitality architecture and refined
              commercial interior design by WE DO
              Interior Design and Fit-Out in Dubai.
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
          DUBAI MARINA WATERFRONT RESTAURANT GALLERY
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
              "Dubai Marina waterfront restaurant interior design"
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
