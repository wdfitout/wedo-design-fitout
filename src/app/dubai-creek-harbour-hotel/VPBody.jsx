
"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const galleryImages = [
  {
    src: "/images/1hl-1.png",
    alt: "Dubai Creek Harbour Hotel luxury interior design - Gallery 1",
    title: "Dubai Creek Harbour Hotel Interior Gallery 1",
    description:
      "Luxury hospitality interior design for the Dubai Creek Harbour Hotel project.",
  },
  {
    src: "/images/1hl-2.png",
    alt: "Luxury waterfront hotel interior design Dubai Creek Harbour - Gallery 2",
    title: "Dubai Creek Harbour Hotel Interior Gallery 2",
    description:
      "Contemporary hotel interior design inspired by Dubai Creek Harbour's waterfront setting.",
  },
  {
    src: "/images/1hl-3.png",
    alt: "Dubai Creek Harbour luxury hospitality interior - Gallery 3",
    title: "Dubai Creek Harbour Hotel Interior Gallery 3",
    description:
      "Premium hospitality interior design for a luxury hotel in Dubai Creek Harbour.",
  },
  {
    src: "/images/1hl-4.png",
    alt: "Modern hotel interior design Dubai Creek Harbour - Gallery 4",
    title: "Dubai Creek Harbour Hotel Interior Gallery 4",
    description:
      "Contemporary hotel interior design emphasizing comfort and sophisticated aesthetics.",
  },
  {
    src: "/images/1hl-5.png",
    alt: "Luxury hotel interior design project Dubai Creek Harbour - Gallery 5",
    title: "Dubai Creek Harbour Hotel Interior Gallery 5",
    description:
      "Refined hospitality interior design for the Dubai Creek Harbour Hotel.",
  },
  {
    src: "/images/1hl-6.png",
    alt: "Premium waterfront hospitality design Dubai - Gallery 6",
    title: "Dubai Creek Harbour Hotel Interior Gallery 6",
    description:
      "Luxury hotel interior concept combining contemporary elegance and hospitality comfort.",
  },
  {
    src: "/images/1hl-7.png",
    alt: "Dubai Creek Harbour Hotel premium interior design - Gallery 7",
    title: "Dubai Creek Harbour Hotel Interior Gallery 7",
    description:
      "Modern hospitality interior design within Dubai Creek Harbour.",
  },
  {
    src: "/images/1hl-8.png",
    alt: "Luxury hospitality interior fit-out Dubai Creek Harbour - Gallery 8",
    title: "Dubai Creek Harbour Hotel Interior Gallery 8",
    description:
      "Sophisticated hotel interior design with a focus on contemporary hospitality.",
  },
  {
    src: "/images/1hl-9.png",
    alt: "Dubai Creek Harbour Hotel interior design Dubai - Gallery 9",
    title: "Dubai Creek Harbour Hotel Interior Gallery 9",
    description:
      "Luxury hospitality design for a hotel project in Dubai Creek Harbour.",
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
        HOME &gt; PROJECTS &gt; DUBAI CREEK HARBOUR HOTEL
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
            REIMAGINING WATERFRONT HOSPITALITY:
          </p>

          <h1 className="text-sm sm:text-2xl md:text-3xl font-conthrax tracking-widest text-white mt-1">
            DUBAI CREEK HARBOUR HOTEL
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
                <strong>Dubai Creek Harbour Hotel</strong>{" "}
                project, exploring a refined approach to
                luxury hospitality interior design within
                one of Dubai's most exciting waterfront
                destinations. Surrounded by contemporary
                architecture, waterfront promenades, and
                a distinctive urban landscape, Dubai Creek
                Harbour provides an exceptional setting
                for modern hotel experiences. Our interior
                design philosophy brings together understated
                luxury, thoughtful spatial planning, and
                contemporary elegance to create hospitality
                environments that complement the character
                of this prestigious destination while
                prioritizing guest comfort and functionality.
              </p>

              <p>
                As a specialist in{" "}
                <b className="text-[#caa193]">
                  <a href="https://wedointerior.ae/hotel-interior-design-dubai">
                    luxury hotel interior design in Dubai
                  </a>
                </b>
                , WE DO focuses on creating memorable
                spaces through carefully considered
                architectural details, sophisticated
                material palettes, and balanced lighting.
                The Dubai Creek Harbour Hotel design
                direction draws inspiration from the
                surrounding waterfront environment,
                emphasizing openness, natural light,
                and seamless transitions between
                different hospitality spaces. From
                welcoming hotel lobbies and stylish
                reception areas to elegant guest suites,
                premium lounges, and dining environments,
                the design approach seeks to establish
                a cohesive atmosphere of relaxation,
                sophistication, and modern luxury.
              </p>

              <p>
                Creating exceptional hotel interiors
                requires more than visual appeal.
                It demands an understanding of guest
                expectations, operational efficiency,
                and the technical requirements of
                modern hospitality properties.
                Through our comprehensive{" "}
                <b className="text-[#caa193]">
                  <a href="https://wedointerior.ae/fit-out-company-dubai">
                    hotel interior fit-out services in Dubai
                  </a>
                </b>
                , WE DO brings together creative
                design expertise, bespoke joinery,
                premium material selection, technical
                coordination, and detailed finishing
                solutions. Our approach considers
                essential hospitality requirements
                such as guest circulation, acoustics,
                privacy, lighting, and durability.
                These elements help create
                environments that are visually
                sophisticated, comfortable, and
                practical for long-term hotel operations.
              </p>

              <p>
                Whether you are developing a luxury
                waterfront hotel in Dubai Creek Harbour,
                renovating an established hospitality
                property, or seeking experienced hotel
                interior designers and fit-out contractors
                in Dubai, WE DO provides customized
                solutions tailored to your vision.
                Our hospitality design expertise covers
                hotel lobbies, luxury guest rooms,
                premium suites, restaurants, lounges,
                reception areas, and exclusive guest
                facilities. With a commitment to
                craftsmanship, contemporary design,
                and functional excellence, we help
                hotel owners and developers create
                distinctive hospitality destinations
                that express their brand identity,
                enhance guest experiences, and deliver
                lasting value in Dubai's competitive
                luxury hotel market.
              </p>
            </div>
          </div>

          {/* Image */}
          <figure className="w-full lg:w-1/2">
            <Image
              src="/images/1hl-1.png"
              alt="Dubai Creek Harbour Hotel luxury hospitality interior design project"
              title="Dubai Creek Harbour Hotel Interior Design Dubai"
              width={800}
              height={500}
              loading="lazy"
              className="w-full h-auto object-cover"
            />

            <figcaption className="sr-only">
              Dubai Creek Harbour Hotel luxury
              hospitality interior design project
              inspired by contemporary waterfront
              architecture in Dubai.
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
          DUBAI CREEK HARBOUR HOTEL GALLERY
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
