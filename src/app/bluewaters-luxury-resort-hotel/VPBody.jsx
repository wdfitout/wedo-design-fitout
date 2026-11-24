
"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const galleryImages = [
  {
    src: "/images/3hl-1.png",
    alt: "Bluewaters Luxury Resort Hotel interior design Dubai - Gallery 1",
    title: "Bluewaters Luxury Resort Hotel - Interior Gallery 1",
    description:
      "Luxury hospitality interior design at Bluewaters Island, Dubai.",
  },
  {
    src: "/images/3hl-2.png",
    alt: "Luxury resort hotel interior at Bluewaters Island Dubai - Gallery 2",
    title: "Bluewaters Luxury Resort Hotel - Interior Gallery 2",
    description:
      "Premium interior design for the Bluewaters Luxury Resort Hotel project.",
  },
  {
    src: "/images/3hl-3.png",
    alt: "Bluewaters Island luxury hotel interior design - Gallery 3",
    title: "Bluewaters Luxury Resort Hotel - Interior Gallery 3",
    description:
      "Contemporary hospitality interior design at Bluewaters Island.",
  },
  {
    src: "/images/3hl-4.png",
    alt: "Luxury hotel interior design project in Bluewaters Dubai - Gallery 4",
    title: "Bluewaters Luxury Resort Hotel - Interior Gallery 4",
    description:
      "Hotel interior design showcasing the Bluewaters resort project.",
  },
  {
    src: "/images/3hl-5.png",
    alt: "Bluewaters resort hospitality interior design Dubai - Gallery 5",
    title: "Bluewaters Luxury Resort Hotel - Interior Gallery 5",
    description:
      "Luxury hospitality design at Bluewaters Island in Dubai.",
  },
  {
    src: "/images/3hl-6.png",
    alt: "Premium resort hotel interior Bluewaters Island - Gallery 6",
    title: "Bluewaters Luxury Resort Hotel - Interior Gallery 6",
    description:
      "Interior design view from the Bluewaters Luxury Resort Hotel.",
  },
  {
    src: "/images/3hl-7.png",
    alt: "Luxury hospitality interior design Bluewaters Dubai - Gallery 7",
    title: "Bluewaters Luxury Resort Hotel - Interior Gallery 7",
    description:
      "Hospitality interior design for a luxury resort hotel in Dubai.",
  },
  {
    src: "/images/3hl-8.png",
    alt: "Bluewaters Luxury Resort Hotel Dubai interior - Gallery 8",
    title: "Bluewaters Luxury Resort Hotel - Interior Gallery 8",
    description:
      "Refined interior design for the Bluewaters resort hotel project.",
  },
  {
    src: "/images/3hl-9.png",
    alt: "Luxury hotel interior design Bluewaters Island Dubai - Gallery 9",
    title: "Bluewaters Luxury Resort Hotel - Interior Gallery 9",
    description:
      "Resort hospitality interior design on Bluewaters Island, Dubai.",
  },
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

  const nextImage = () => {
    setCurrent((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrent(
      (prev) => (prev - 1 + galleryImages.length) % galleryImages.length
    );
  };

  // Ensure scroll starts at top
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = 0;
    }
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (!isOpen) return;
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "Escape") closeImage();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen]);

  return (
    <section className="bg-black text-white px-6 sm:px-10 md:px-16 lg:px-28 xl:px-40 py-10 sm:py-20 font-sans">
      {/* Breadcrumb */}
      <p className="text-xs text-[#caa193] uppercase tracking-widest mb-4 font-conthrax">
        HOME &gt; PROJECTS &gt; BLUEWATERS LUXURY RESORT HOTEL
      </p>

      {/* Heading + Paragraph + Image */}
      <div className="relative pl-4 sm:pl-6 mb-20">
        {/* Scroll line */}
        <div className="absolute top-0 left-0 h-full w-[1px] bg-gray-400 z-0 hidden lg:block" />

        <motion.div
          className="absolute left-[-4px] top-[104px] w-2 h-2 rounded-full bg-[#caa193] z-10 hidden lg:block"
          style={{ y: dotY }}
        />

        <div
          className="absolute top-0 left-0 w-[1px] bg-gray-400 z-0 block lg:hidden"
          style={{ height: "calc(104px + 360px)" }}
        />

        {/* Headings */}
        <div className="mb-6">
          <p className="text-xs sm:text-base font-conthrax tracking-wide uppercase text-white">
            REDEFINING LUXURY HOSPITALITY SPACES:
          </p>

          <h1 className="text-sm sm:text-2xl md:text-3xl font-conthrax tracking-widest text-white mt-1">
            BLUEWATERS LUXURY RESORT HOTEL
          </h1>

          <div className="w-30 sm:w-96 h-[2px] bg-[#caa193] mt-2" />
        </div>

        {/* Row: Paragraph + Image */}
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Paragraph */}
          <div className="w-full lg:w-1/2">
            <div
              ref={scrollRef}
              className="max-h-[360px] overflow-y-auto scroll-smooth text-sm leading-6 text-white/90 space-y-4 pr-2 font-play"
              style={{ scrollbarWidth: "none" }}
            >
              <p>
                WE DO Interior Design & Fitout brings a distinctive
                approach to luxury hospitality interiors through the{" "}
                <strong>Bluewaters Luxury Resort Hotel</strong> project,
                located on the prestigious Bluewaters Island in Dubai.
                Combining contemporary elegance, refined materials,
                and guest-focused design, the project reflects our
                vision of creating sophisticated hospitality environments
                that balance visual appeal, comfort, and functionality.
                Our approach to luxury resort interior design considers
                both the guest experience and the operational requirements
                of modern hotels.
              </p>

              <p>
                As a specialist in{" "}
                <b className="text-[#caa193]">
                  <a href="https://wedointerior.ae/hotel-interior-design-dubai">
                    hotel interior design in Dubai
                  </a>
                </b>
                , WE DO focuses on creating memorable environments
                through thoughtful space planning, architectural
                detailing, carefully selected finishes, and bespoke
                interior elements. From welcoming hotel lobbies and
                elegant guest suites to sophisticated lounges, dining
                areas, and hospitality facilities, every design
                decision aims to establish a consistent identity
                while enhancing comfort and the overall guest journey.
              </p>

              <p>
                The Bluewaters Luxury Resort Hotel project highlights
                the importance of combining refined aesthetics with
                the practical demands of luxury hospitality.
                Through our comprehensive{" "}
                <b className="text-[#caa193]">
                  <a href="https://wedointerior.ae/fit-out-company-dubai">
                    hotel interior fit-out solutions in Dubai
                  </a>
                </b>
                , we bring together interior design expertise,
                custom joinery, material selection, lighting concepts,
                and technical coordination. Our focus is on creating
                beautiful, durable, and functional spaces that
                support hotel operations while delivering an
                exceptional guest experience.
              </p>

              <p>
                Whether you are planning a luxury resort hotel
                on Bluewaters Island, renovating an existing
                hospitality property, or developing a premium
                hotel anywhere in Dubai, WE DO offers tailored
                hospitality interior design and fit-out services.
                Our design philosophy combines innovation,
                craftsmanship, and attention to detail to create
                distinctive hotel environments that complement
                their location, express their brand identity,
                and leave a lasting impression on every guest.
              </p>
            </div>
          </div>

          {/* Image */}
          <figure className="w-full lg:w-1/2">
            <Image
              src="/images/3hl-2.png"
              alt="Bluewaters Luxury Resort Hotel interior design project on Bluewaters Island Dubai"
              title="Bluewaters Luxury Resort Hotel Interior Design Dubai"
              width={800}
              height={500}
              loading="lazy"
              className="w-full h-auto object-cover"
            />

            <figcaption className="sr-only">
              Bluewaters Luxury Resort Hotel hospitality interior
              design project on Bluewaters Island, Dubai.
            </figcaption>
          </figure>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="mt-10">
        {/* Arrow image */}
        <div className="mt-10 flex justify-center">
          <Image
            src="/images/sec-dvd.webp"
            alt="Scroll down arrow"
            width={320}
            height={80}
            className="h-auto w-48 sm:w-64"
          />
        </div>

        {/* Section Heading */}
        <h2 className="text-white mt-10 mb-10 text-sm sm:text-xl tracking-widest font-conthrax text-center">
          BLUEWATERS LUXURY RESORT HOTEL GALLERY
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((img, idx) => (
            <figure
              key={idx}
              className="cursor-pointer overflow-hidden rounded-md"
            >
              <Image
                src={img.src}
                alt={img.alt}
                title={img.title}
                width={400}
                height={300}
                loading="lazy"
                className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
                onClick={() => openImage(idx)}
              />

              <figcaption className="sr-only">
                {img.description}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      {/* Lightbox Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">
          <button
            onClick={closeImage}
            className="absolute top-4 right-6 text-white text-3xl font-bold"
          >
            &times;
          </button>

          <button
            onClick={prevImage}
            className="absolute left-4 text-white text-4xl"
          >
            &#8592;
          </button>

          <Image
            src={galleryImages[current].src}
            alt={galleryImages[current].alt}
            title={galleryImages[current].title}
            width={900}
            height={600}
            loading="lazy"
            className="rounded-md object-contain max-h-[90vh] max-w-[90vw]"
          />

          <button
            onClick={nextImage}
            className="absolute right-4 text-white text-4xl"
          >
            &#8594;
          </button>
        </div>
      )}
    </section>
  );
};

export default VPBody;
