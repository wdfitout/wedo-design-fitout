
"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const galleryImages = [
  {
    src: "/images/1cf-1.png",
    alt: "Business Bay Minimal Cafe interior design Dubai - Gallery 1",
    title: "Business Bay Minimal Cafe Interior Gallery 1",
    description:
      "Contemporary minimalist cafe interior design concept in Business Bay, Dubai.",
  },
  {
    src: "/images/1cf-2.png",
    alt: "Minimalist coffee shop interior Business Bay Dubai - Gallery 2",
    title: "Business Bay Minimal Cafe Interior Gallery 2",
    description:
      "Modern coffee shop interior design exploring refined minimalist hospitality.",
  },
  {
    src: "/images/1cf-3.png",
    alt: "Modern minimal cafe interior design Dubai - Gallery 3",
    title: "Business Bay Minimal Cafe Interior Gallery 3",
    description:
      "Contemporary cafe interior concept emphasizing simplicity and functional design.",
  },
  {
    src: "/images/1cf-4.png",
    alt: "Business Bay contemporary cafe design Dubai - Gallery 4",
    title: "Business Bay Minimal Cafe Interior Gallery 4",
    description:
      "Minimalist hospitality interior design concept for a modern urban cafe.",
  },
  {
    src: "/images/1cf-5.png",
    alt: "Premium minimalist cafe interior Business Bay - Gallery 5",
    title: "Business Bay Minimal Cafe Interior Gallery 5",
    description:
      "Refined minimalist coffee shop interior design concept in Business Bay.",
  },
  {
    src: "/images/1cf-6.png",
    alt: "Business Bay specialty coffee shop interior design - Gallery 6",
    title: "Business Bay Minimal Cafe Interior Gallery 6",
    description:
      "Contemporary specialty cafe design balancing visual simplicity and comfort.",
  },
  {
    src: "/images/1cf-7.png",
    alt: "Minimal modern coffee shop interior Dubai - Gallery 7",
    title: "Business Bay Minimal Cafe Interior Gallery 7",
    description:
      "Modern minimalist cafe design with an emphasis on practical hospitality spaces.",
  },
  {
    src: "/images/1cf-8.png",
    alt: "Business Bay premium cafe interior design - Gallery 8",
    title: "Business Bay Minimal Cafe Interior Gallery 8",
    description:
      "Contemporary cafe interior concept for Dubai's business and residential community.",
  },
  {
    src: "/images/1cf-9.png",
    alt: "Minimalist cafe fit-out and interior design Dubai - Gallery 9",
    title: "Business Bay Minimal Cafe Interior Gallery 9",
    description:
      "Modern coffee shop interior design with thoughtful space planning.",
  },
  {
    src: "/images/1cf-10.png",
    alt: "Business Bay Minimal Cafe modern interior design - Gallery 10",
    title: "Business Bay Minimal Cafe Interior Gallery 10",
    description:
      "Premium minimalist cafe interior design concept in Business Bay, Dubai.",
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
        HOME &gt; PROJECTS &gt; BUSINESS BAY MINIMAL CAFE
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
            REDEFINING CONTEMPORARY MINIMALIST CAFE DESIGN:
          </p>

          <h1 className="text-sm sm:text-2xl md:text-3xl font-conthrax tracking-widest text-white mt-1">
            BUSINESS BAY MINIMAL CAFE
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
                WE DO Interior Design &amp; Fitout presents the{" "}
                <strong>Business Bay Minimal Cafe</strong>{" "}
                design concept, exploring a sophisticated
                approach to minimalist cafe interior
                design in one of Dubai's most dynamic
                business and residential districts.
                Known for its contemporary commercial
                towers, luxury residences, corporate
                offices, and vibrant urban lifestyle,
                Business Bay provides an inspiring
                setting for a modern specialty coffee
                destination. Our design philosophy
                focuses on creating a refined
                hospitality environment that
                combines architectural simplicity,
                functional space planning,
                and everyday comfort.
                The concept emphasizes clean
                lines, carefully balanced
                proportions, restrained
                material combinations,
                and thoughtful lighting.
                Rather than introducing
                unnecessary decorative
                features, the minimalist
                approach creates visual
                harmony through purposeful
                design decisions.
                The result is a contemporary
                cafe vision that complements
                Business Bay's professional
                atmosphere while offering
                customers a calm and
                welcoming space to enjoy
                quality coffee, informal
                meetings, and relaxed breaks.
              </p>

              <p>
                As a specialist in{" "}
                <b className="text-[#caa193]">
                  <a href="https://wedointerior.ae/cafe-interior-design-dubai">
                    modern cafe interior design in Dubai
                  </a>
                </b>
                , WE DO understands that a successful
                coffee shop must combine visual
                appeal with efficient daily
                operations and a comfortable
                customer experience.
                The Business Bay Minimal Cafe
                design direction considers
                an inviting entrance,
                a streamlined ordering counter,
                a well-organized barista station,
                practical takeaway collection
                areas, and flexible customer
                seating arrangements.
                In a busy commercial district,
                efficient service circulation
                is particularly important
                during morning coffee hours
                and lunchtime periods.
                Carefully positioned counters,
                clear customer pathways,
                and functional queue
                arrangements can support
                smooth service without
                compromising the cafe's
                architectural character.
                Seating areas may incorporate
                comfortable individual tables,
                small meeting arrangements,
                and selected lounge seating
                to accommodate professionals,
                nearby residents, and
                casual visitors.
                Refined neutral palettes,
                natural-looking textures,
                minimalist furnishings,
                and balanced neutral-white
                illumination contribute
                to a welcoming environment
                that feels contemporary,
                relaxed, and distinctive.
              </p>

              <p>
                Delivering a refined
                minimalist cafe requires
                careful attention to
                architectural detailing,
                craftsmanship, and
                practical hospitality
                infrastructure.
                Through our comprehensive{" "}
                <b className="text-[#caa193]">
                  <a href="https://wedointerior.ae/fit-out-company-dubai">
                    cafe interior fit-out services in Dubai
                  </a>
                </b>
                , WE DO brings together
                functional space planning,
                bespoke joinery,
                custom furniture,
                carefully selected
                materials, and coordinated
                technical solutions.
                Minimalist coffee shop
                interiors rely on
                precise construction
                details because every
                visible element contributes
                to the overall design.
                Cleanly finished walls,
                carefully coordinated
                cabinetry, practical
                counter surfaces, and
                thoughtfully integrated
                storage help establish
                a cohesive architectural
                identity.
                Coffee preparation areas
                require appropriate
                plumbing, drainage,
                electrical provisions,
                ventilation, and
                equipment clearances.
                Customer areas benefit
                from durable flooring,
                comfortable circulation,
                acoustic considerations,
                and practical maintenance
                solutions.
                Our approach recognizes
                that successful cafe
                design must balance
                minimalist aesthetics
                with the everyday
                demands of hospitality
                operations, helping
                create an environment
                that remains functional
                and attractive over time.
              </p>

              <p>
                Whether you are planning
                a minimalist cafe in
                Business Bay, opening
                a contemporary specialty
                coffee shop, developing
                a modern grab-and-go
                coffee concept, or
                renovating an existing
                hospitality establishment,
                WE DO offers tailored
                cafe interior design
                and fit-out solutions
                across Dubai.
                Our design approach
                supports the development
                of elegant coffee bars,
                functional service
                counters, comfortable
                seating environments,
                bespoke furniture,
                architectural feature
                walls, refined lighting,
                and cohesive branded
                hospitality spaces.
                From initial concept
                development and space
                planning to custom
                joinery, material
                coordination, lighting,
                and detailed interior
                fit-out planning,
                our focus is on
                creating distinctive
                spaces that express
                each cafe's identity.
                The Business Bay
                Minimal Cafe concept
                highlights how simplicity,
                thoughtful functionality,
                and quality detailing
                can create a sophisticated
                coffee shop experience.
                By combining contemporary
                aesthetics with efficient
                layouts and practical
                hospitality design,
                we help cafe owners
                shape inviting spaces
                suited to the professional
                and residential lifestyle
                of Business Bay, Dubai.
              </p>
            </div>
          </div>

          {/* Featured Image */}
          <figure className="w-full lg:w-1/2">
            <Image
              src="/images/1cf-5.png"
              alt="Business Bay Minimal Cafe contemporary coffee shop interior design concept in Dubai"
              title="Business Bay Minimal Cafe Interior Design"
              width={800}
              height={500}
              loading="lazy"
              className="w-full h-auto object-cover"
            />

            <figcaption className="sr-only">
              Business Bay Minimal Cafe interior
              design concept exploring minimalist
              coffee shop environments,
              contemporary hospitality
              architecture, refined materials,
              and functional cafe design
              in Business Bay, Dubai.
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
          BUSINESS BAY MINIMAL CAFE INTERIOR GALLERY
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
            aria-label="Close gallery"
          >
            &times;
          </button>

          <button
            onClick={prevImage}
            className="absolute left-4 text-white text-4xl"
            aria-label="Previous gallery image"
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
            aria-label="Next gallery image"
          >
            &#8594;
          </button>
        </div>
      )}
    </section>
  );
};

export default VPBody;
