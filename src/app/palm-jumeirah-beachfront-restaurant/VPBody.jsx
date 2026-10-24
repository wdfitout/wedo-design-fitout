
"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/* ======================================================================
 * 01 - PALM JUMEIRAH BEACHFRONT RESTAURANT GALLERY
 * ====================================================================== */

const galleryImages = [
  {
    src: "/images/3rs-1.png",
    alt: "Palm Jumeirah beachfront restaurant interior design in Dubai - project view 1",
  },
  {
    src: "/images/3rs-2.png",
    alt: "Luxury beachfront restaurant dining interior in Palm Jumeirah Dubai - project view 2",
  },
  {
    src: "/images/3rs-3.png",
    alt: "Contemporary coastal restaurant interior design at Palm Jumeirah - project view 3",
  },
  {
    src: "/images/3rs-4.png",
    alt: "Premium beachfront hospitality interior design in Palm Jumeirah Dubai - project view 4",
  },
  {
    src: "/images/3rs-5.png",
    alt: "Elegant luxury restaurant design at Palm Jumeirah beachfront - project view 5",
  },
    {
    src: "/images/3rs-6.png",
    alt: "Elegant luxury restaurant design at Palm Jumeirah beachfront - project view 5",
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
        HOME &gt; PROJECTS &gt; PALM JUMEIRAH BEACHFRONT RESTAURANT
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
            REFINED COASTAL DINING LUXURY:
          </p>

          <h1 className="text-sm sm:text-2xl md:text-3xl font-conthrax tracking-widest text-white mt-1">
            PALM JUMEIRAH BEACHFRONT RESTAURANT
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
                Set within the iconic beachfront destination
                of Palm Jumeirah, Dubai, this luxury restaurant
                interior design project explores an elegant
                interpretation of contemporary coastal
                hospitality. Inspired by the island's
                distinctive seaside atmosphere, exclusive
                lifestyle and world-class dining culture,{" "}
                <b>
                  <a href="https://wedointerior.ae/">
                    WE DO Interior Design &amp; Fit-Out
                  </a>
                </b>{" "}
                presents a sophisticated design concept
                that harmonizes architectural refinement,
                welcoming interiors and the relaxed
                character of beachfront living. The
                approach celebrates understated luxury,
                thoughtful spatial planning and an
                inviting dining atmosphere, creating
                a memorable hospitality environment
                suited to the prestigious setting
                of Palm Jumeirah.
              </p>

              <p>
                The beachfront restaurant interior design
                concept centers on establishing a seamless
                relationship between elegant dining
                spaces, guest comfort and the surrounding
                coastal environment. Carefully composed
                seating arrangements, refined furniture
                selections and contemporary architectural
                detailing contribute to a distinctive
                yet welcoming visual identity. A balanced
                palette inspired by natural coastal
                textures, sophisticated material finishes
                and thoughtfully layered ambient lighting
                creates an atmosphere of relaxed elegance.
                From intimate dining arrangements to
                welcoming social spaces, the design
                direction emphasizes comfort,
                functionality and visual harmony,
                reflecting the expectations of luxury
                restaurant interior design in
                Palm Jumeirah, Dubai.
              </p>

              <p>
                Beyond its aesthetic appeal, the restaurant
                design philosophy prioritizes the complete
                guest experience through efficient space
                planning, carefully considered circulation
                and cohesive interior detailing. A refined
                architectural language creates continuity
                between dining environments while allowing
                the restaurant to maintain its own
                distinctive hospitality identity.
                Contemporary furnishings, understated
                decorative elements and harmonious
                finishes contribute to a sophisticated
                setting that complements the exclusivity
                of beachfront dining. This Palm Jumeirah
                beachfront restaurant project reflects
                the creative approach of WE DO Interior
                Design &amp; Fit-Out, bringing together
                contemporary restaurant interior design,
                sophisticated hospitality planning
                and coastal-inspired luxury to celebrate
                the exceptional dining lifestyle
                associated with one of Dubai's
                most recognizable waterfront destinations.
              </p>
            </div>
          </div>

          {/* Featured Project Image */}
          <figure className="w-full lg:w-1/2">
            <Image
              src="/images/3rs-2.png"
              alt="Palm Jumeirah beachfront restaurant project showcasing contemporary luxury hospitality interior design in Dubai"
              title="Palm Jumeirah Beachfront Restaurant Interior Design | WE DO Dubai"
              width={800}
              height={500}
              loading="lazy"
              className="w-full h-auto object-cover"
            />

            <figcaption className="sr-only">
              Palm Jumeirah beachfront restaurant interior
              design project in Dubai, presenting a refined
              approach to contemporary coastal hospitality,
              luxury dining environments and sophisticated
              commercial interior design by WE DO
              Interior Design and Fit-Out.
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
          PALM JUMEIRAH BEACHFRONT RESTAURANT GALLERY
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
              "Palm Jumeirah beachfront restaurant interior design"
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
