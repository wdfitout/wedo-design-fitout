
"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const galleryImages = [
  {
    src: "/images/4hl-1.png",
    alt: "Business Bay Business Hotel interior design Dubai - Gallery 1",
    title: "Business Bay Business Hotel Interior Gallery 1",
    description:
      "Contemporary hospitality interior design for a business hotel in Business Bay, Dubai.",
  },
  {
    src: "/images/4hl-2.png",
    alt: "Modern business hotel interior in Business Bay Dubai - Gallery 2",
    title: "Business Bay Business Hotel Interior Gallery 2",
    description:
      "Premium hotel interior design combining corporate elegance with contemporary hospitality.",
  },
  {
    src: "/images/4hl-3.png",
    alt: "Luxury corporate hotel interior design Business Bay - Gallery 3",
    title: "Business Bay Business Hotel Interior Gallery 3",
    description:
      "Modern hospitality interior design for the Business Bay Business Hotel project.",
  },
  {
    src: "/images/4hl-4.png",
    alt: "Business hotel interior design project in Dubai - Gallery 4",
    title: "Business Bay Business Hotel Interior Gallery 4",
    description:
      "Refined hotel interior design emphasizing comfort, functionality, and modern aesthetics.",
  },
  {
    src: "/images/4hl-5.png",
    alt: "Contemporary hospitality interior Business Bay Dubai - Gallery 5",
    title: "Business Bay Business Hotel Interior Gallery 5",
    description:
      "Sophisticated interior design for a premium business hospitality environment.",
  },
  {
    src: "/images/4hl-6.png",
    alt: "Premium business hotel interior design Dubai - Gallery 6",
    title: "Business Bay Business Hotel Interior Gallery 6",
    description:
      "Elegant commercial hospitality interior design in Dubai's Business Bay district.",
  },
  {
    src: "/images/4hl-7.png",
    alt: "Business Bay luxury business hotel interior - Gallery 7",
    title: "Business Bay Business Hotel Interior Gallery 7",
    description:
      "Contemporary business hotel interior showcasing refined hospitality design.",
  },
  {
    src: "/images/4hl-8.png",
    alt: "Hotel interior fit-out and design Business Bay Dubai - Gallery 8",
    title: "Business Bay Business Hotel Interior Gallery 8",
    description:
      "Modern business hospitality interiors created with a focus on comfort and efficiency.",
  },
  {
    src: "/images/4hl-9.png",
    alt: "Business Bay Business Hotel hospitality interior Dubai - Gallery 9",
    title: "Business Bay Business Hotel Interior Gallery 9",
    description:
      "Premium hotel interior design project located in Business Bay, Dubai.",
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
        HOME &gt; PROJECTS &gt; BUSINESS BAY BUSINESS HOTEL
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
            REDEFINING BUSINESS HOSPITALITY SPACES:
          </p>

          <h1 className="text-sm sm:text-2xl md:text-3xl font-conthrax tracking-widest text-white mt-1">
            BUSINESS BAY BUSINESS HOTEL
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
                WE DO Interior Design & Fitout presents the{" "}
                <strong>Business Bay Business Hotel</strong> project,
                reflecting our approach to creating sophisticated
                hospitality environments in one of Dubai's most
                prominent commercial districts. Located in the
                heart of Business Bay, this project brings together
                contemporary elegance, functional space planning,
                and modern business hospitality design. Our vision
                focuses on developing welcoming hotel interiors
                that respond to the expectations of corporate
                travelers, business professionals, and guests
                seeking comfort and convenience in Dubai.
              </p>

              <p>
                As a specialist in{" "}
                <b className="text-[#caa193]">
                  <a href="https://wedointerior.ae/hotel-interior-design-dubai">
                    hotel interior design in Dubai
                  </a>
                </b>
                , WE DO understands the importance of balancing
                refined aesthetics with the practical requirements
                of business hospitality. The Business Bay Business
                Hotel project reflects this philosophy through
                a design approach centered on efficiency, comfort,
                and architectural sophistication. From welcoming
                reception environments and stylish guest rooms to
                executive lounges, meeting facilities, and shared
                hospitality spaces, thoughtful planning helps
                establish a professional atmosphere while
                enhancing the guest experience.
              </p>

              <p>
                Our approach to{" "}
                <b className="text-[#caa193]">
                  <a href="https://wedointerior.ae/fit-out-company-dubai">
                    hotel interior fit-out in Dubai
                  </a>
                </b>{" "}
                combines innovative design thinking with technical
                expertise and attention to detail. We prioritize
                carefully selected materials, comfortable layouts,
                coordinated lighting, bespoke joinery, and durable
                interior finishes suited to high-traffic hospitality
                environments. For a business hotel in Dubai's
                dynamic commercial center, these elements are
                essential to creating interiors that support
                day-to-day hotel operations while maintaining
                a distinctive and welcoming visual identity.
              </p>

              <p>
                Whether you are developing a new business hotel
                in Business Bay, renovating an existing hospitality
                property, or searching for experienced hotel
                fit-out contractors in Dubai, WE DO provides
                tailored interior design and fit-out solutions.
                Our hospitality design services consider the
                needs of hotel operators, corporate guests,
                and modern travelers. Through a commitment to
                craftsmanship, functionality, and timeless
                design, we help create business hotel interiors
                that communicate professionalism, improve
                guest comfort, and deliver lasting value
                across Dubai's competitive hospitality market.
              </p>
            </div>
          </div>

          {/* Image */}
          <figure className="w-full lg:w-1/2">
            <Image
              src="/images/4hl-2.png"
              alt="Business Bay Business Hotel interior design and hospitality project in Dubai"
              title="Business Bay Business Hotel Interior Design Dubai"
              width={800}
              height={500}
              loading="lazy"
              className="w-full h-auto object-cover"
            />

            <figcaption className="sr-only">
              Business Bay Business Hotel hospitality interior
              design project located in Dubai's Business Bay district.
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
          BUSINESS BAY BUSINESS HOTEL GALLERY
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
