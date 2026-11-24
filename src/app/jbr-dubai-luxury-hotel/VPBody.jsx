
"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const galleryImages = [
  {
    src: "/images/6hl-1.png",
    alt: "JBR Dubai Luxury Hotel beachfront hospitality interior design - Gallery 1",
    title: "JBR Dubai Luxury Hotel Interior Gallery 1",
    description:
      "Luxury hotel interior design project in Jumeirah Beach Residence, Dubai.",
  },
  {
    src: "/images/6hl-2.png",
    alt: "Luxury beachfront hotel interior design JBR Dubai - Gallery 2",
    title: "JBR Dubai Luxury Hotel Interior Gallery 2",
    description:
      "Premium hospitality interior design inspired by the coastal lifestyle of JBR.",
  },
  {
    src: "/images/6hl-3.png",
    alt: "Jumeirah Beach Residence luxury hotel interior - Gallery 3",
    title: "JBR Dubai Luxury Hotel Interior Gallery 3",
    description:
      "Contemporary hospitality interior design for the JBR Dubai Luxury Hotel.",
  },
  {
    src: "/images/6hl-4.png",
    alt: "Modern luxury hospitality interior design JBR - Gallery 4",
    title: "JBR Dubai Luxury Hotel Interior Gallery 4",
    description:
      "Refined luxury hotel interiors designed around comfort and contemporary elegance.",
  },
  {
    src: "/images/6hl-5.png",
    alt: "JBR Dubai premium beachfront hotel design - Gallery 5",
    title: "JBR Dubai Luxury Hotel Interior Gallery 5",
    description:
      "Sophisticated hospitality design for a premium hotel in Jumeirah Beach Residence.",
  },
  {
    src: "/images/6hl-6.png",
    alt: "Luxury coastal hotel interior design Dubai JBR - Gallery 6",
    title: "JBR Dubai Luxury Hotel Interior Gallery 6",
    description:
      "Contemporary coastal-inspired hospitality interior design in Dubai.",
  },
  {
    src: "/images/6hl-7.png",
    alt: "Premium luxury hotel interiors Jumeirah Beach Residence - Gallery 7",
    title: "JBR Dubai Luxury Hotel Interior Gallery 7",
    description:
      "Elegant hotel interior design for a luxury beachfront hospitality environment.",
  },
  {
    src: "/images/6hl-8.png",
    alt: "JBR luxury hotel interior fit-out Dubai - Gallery 8",
    title: "JBR Dubai Luxury Hotel Interior Gallery 8",
    description:
      "Premium hotel interior design emphasizing sophisticated hospitality spaces.",
  },
  {
    src: "/images/6hl-9.png",
    alt: "JBR Dubai Luxury Hotel hospitality interior design - Gallery 9",
    title: "JBR Dubai Luxury Hotel Interior Gallery 9",
    description:
      "Luxury beachfront hospitality interior design project in JBR Dubai.",
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
        HOME &gt; PROJECTS &gt; JBR DUBAI LUXURY HOTEL
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
            REDEFINING LUXURY BEACHFRONT HOSPITALITY:
          </p>

          <h1 className="text-sm sm:text-2xl md:text-3xl font-conthrax tracking-widest text-white mt-1">
            JBR DUBAI LUXURY HOTEL
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
                <strong>JBR Dubai Luxury Hotel</strong>{" "}
                project, reflecting our vision for refined
                beachfront hospitality in the heart of
                Jumeirah Beach Residence. Known for its
                beautiful coastline, luxury lifestyle,
                vibrant beachfront attractions, and
                premium hospitality destinations, JBR
                offers an inspiring setting for
                contemporary hotel interior design.
                Our approach combines coastal elegance,
                modern architectural character, and
                carefully considered spatial planning
                to create a welcoming atmosphere.
                The design philosophy emphasizes
                relaxation, sophistication, and
                comfort while capturing the distinctive
                character of Dubai's beachfront
                hospitality experience.
              </p>

              <p>
                As a specialist in{" "}
                <b className="text-[#caa193]">
                  <a href="https://wedointerior.ae/hotel-interior-design-dubai">
                    luxury hotel interior design in Dubai
                  </a>
                </b>
                , WE DO recognizes the importance of
                creating distinctive hospitality
                environments that complement their
                surroundings. For the JBR Dubai
                Luxury Hotel, the design direction
                embraces contemporary coastal
                sophistication through balanced
                material palettes, architectural
                details, ambient lighting, and
                comfortable interior layouts.
                From elegant hotel lobby concepts
                and welcoming reception areas to
                luxury guest suites, premium lounges,
                beachfront-inspired dining spaces,
                and exclusive relaxation facilities,
                our approach considers the complete
                guest experience. Every element
                contributes to a cohesive design
                identity that communicates comfort,
                exclusivity, and modern hospitality.
              </p>

              <p>
                Luxury beachfront properties require
                thoughtful interior solutions that
                combine exceptional aesthetics with
                practical performance. Through our
                comprehensive{" "}
                <b className="text-[#caa193]">
                  <a href="https://wedointerior.ae/fit-out-company-dubai">
                    hotel interior fit-out services in Dubai
                  </a>
                </b>
                , WE DO integrates creative design
                expertise, technical coordination,
                bespoke joinery, premium finishes,
                and carefully selected materials.
                Our design considerations include
                efficient guest circulation, acoustic
                comfort, privacy, lighting, durability,
                and ease of maintenance. In coastal
                hospitality environments such as JBR,
                appropriate material selection and
                finishing solutions are particularly
                important for supporting long-term
                performance. These considerations
                help achieve interiors that maintain
                a luxurious appearance while meeting
                the operational requirements of
                modern hotel properties.
              </p>

              <p>
                Whether you are developing a luxury
                beachfront hotel in Jumeirah Beach
                Residence, renovating an established
                hospitality property, or searching
                for experienced hotel interior
                designers and fit-out contractors
                in Dubai, WE DO provides customized
                solutions tailored to your vision.
                Our hospitality interior design
                services cover luxury guest rooms,
                premium suites, hotel reception
                areas, elegant lobbies, restaurants,
                executive lounges, and exclusive
                leisure facilities. With a focus on
                quality craftsmanship, functional
                planning, and timeless design,
                we help developers and hospitality
                operators create distinctive
                beachfront environments that
                enhance guest comfort, reinforce
                brand identity, and deliver
                lasting value in Dubai's
                luxury hospitality market.
              </p>
            </div>
          </div>

          {/* Image */}
          <figure className="w-full lg:w-1/2">
            <Image
              src="/images/6hl-2.png"
              alt="JBR Dubai Luxury Hotel beachfront hospitality interior design project"
              title="JBR Dubai Luxury Hotel Interior Design"
              width={800}
              height={500}
              loading="lazy"
              className="w-full h-auto object-cover"
            />

            <figcaption className="sr-only">
              JBR Dubai Luxury Hotel interior design
              project inspired by the sophisticated
              beachfront lifestyle of Jumeirah Beach
              Residence in Dubai.
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
          JBR DUBAI LUXURY HOTEL GALLERY
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
