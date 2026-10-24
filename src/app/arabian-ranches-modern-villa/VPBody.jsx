
"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/* ======================================================================
 * 01 - ARABIAN RANCHES MODERN VILLA GALLERY
 * ====================================================================== */

const galleryImages = [
  {
    src: "/images/4vl-1.png",
    alt: "Arabian Ranches modern villa design in Dubai - project view 1",
  },
  {
    src: "/images/4vl-2.png",
    alt: "Contemporary Arabian Ranches villa interior design - project view 2",
  },
  {
    src: "/images/4vl-4.png",
    alt: "Modern luxury villa interior in Arabian Ranches Dubai - project view 4",
  },
  {
    src: "/images/4vl-5.png",
    alt: "Arabian Ranches contemporary residential design - project view 5",
  },
  {
    src: "/images/4vl-6.png",
    alt: "High-end villa interior design in Arabian Ranches - project view 6",
  },
  {
    src: "/images/4vl-7.png",
    alt: "Modern Arabian Ranches villa design and detailing - project view 7",
  },
  {
    src: "/images/4vl-8.png",
    alt: "Luxury residential interior design in Arabian Ranches Dubai - project view 8",
  },
  {
    src: "/images/4vl-9.png",
    alt: "Sophisticated modern villa interiors at Arabian Ranches - project view 9",
  },
  {
    src: "/images/4vl-10.png",
    alt: "Arabian Ranches villa architecture and contemporary design - project view 10",
  },
  {
    src: "/images/4vl-3.png",
    alt: "Elegant modern villa interior design in Arabian Ranches - project view 3",
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
        HOME &gt; PROJECTS &gt; ARABIAN RANCHES MODERN VILLA
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
            REFINED MODERN VILLA LIVING:
          </p>

          <h1 className="text-sm sm:text-2xl md:text-3xl font-conthrax tracking-widest text-white mt-1">
            ARABIAN RANCHES MODERN VILLA
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
                Set within the established residential community
                of Arabian Ranches, Dubai, this modern villa
                design project embraces a sophisticated balance
                of contemporary elegance, comfort and functional
                living.{" "}
                <b>
                  <a href="https://wedointerior.ae/">
                    WE DO Interior Design &amp; Fit-Out
                  </a>
                </b>{" "}
                presents a refined residential design approach,
                combining clean architectural lines, harmonious
                proportions, warm neutral palettes and carefully
                considered material combinations to establish
                an inviting environment suited to modern
                family lifestyles.
              </p>

              <p>
                The interior design concept prioritizes the
                relationship between open, welcoming communal
                spaces and intimate private areas. A thoughtful
                approach to the living room, family lounge,
                dining area and kitchen creates visual harmony
                while maintaining the individuality of each
                space. Contemporary furniture compositions,
                understated decorative elements, carefully
                integrated illumination and refined surface
                finishes contribute to a timeless aesthetic.
                The resulting design language celebrates
                simplicity without compromising the sense of
                luxury associated with high-end villa interiors
                in Dubai.
              </p>

              <p>
                Throughout the residential environment,
                attention to spatial planning, comfort and
                architectural continuity helps create a
                cohesive modern living experience. From
                elegant entertainment areas to peaceful
                bedroom interiors and complementary outdoor
                spaces, the Arabian Ranches modern villa
                concept reflects an appreciation for
                contemporary sophistication and practical
                family living. This project represents the
                design philosophy of WE DO Interior Design
                &amp; Fit-Out, bringing together modern villa
                interior design, thoughtful craftsmanship
                and enduring residential elegance in one
                of Dubai's well-known villa communities.
              </p>
            </div>
          </div>

          {/* Featured Project Image */}
          <figure className="w-full lg:w-1/2">
            <Image
              src="/images/4vl-4.png"
              alt="Arabian Ranches modern villa interior design featuring contemporary residential aesthetics in Dubai"
              title="Arabian Ranches Modern Villa Interior Design | WE DO Dubai"
              width={800}
              height={500}
              loading="lazy"
              className="w-full h-auto object-cover"
            />

            <figcaption className="sr-only">
              Arabian Ranches modern villa project in Dubai,
              showcasing contemporary residential interior
              design with an emphasis on refined architectural
              composition, modern aesthetics and functional
              luxury living.
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
          ARABIAN RANCHES MODERN VILLA GALLERY
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
              "Arabian Ranches modern villa interior design"
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
