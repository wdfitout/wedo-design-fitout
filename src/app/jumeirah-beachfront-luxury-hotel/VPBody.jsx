
"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const galleryImages = [
  {
    src: "/images/6hl-1.png",
    alt: "Jumeirah Beachfront Luxury Hotel interior design Dubai - Gallery 1",
    title: "Jumeirah Beachfront Luxury Hotel Interior Gallery 1",
    description:
      "Luxury beachfront hospitality interior design project along the Jumeirah coastline in Dubai.",
  },
  {
    src: "/images/6hl-2.png",
    alt: "Luxury beachfront hotel interior in Jumeirah Dubai - Gallery 2",
    title: "Jumeirah Beachfront Luxury Hotel Interior Gallery 2",
    description:
      "Premium hotel interior design inspired by the elegance of Jumeirah's coastal environment.",
  },
  {
    src: "/images/6hl-3.png",
    alt: "Jumeirah beachfront hospitality interior design - Gallery 3",
    title: "Jumeirah Beachfront Luxury Hotel Interior Gallery 3",
    description:
      "Contemporary luxury hospitality interior design for a beachfront hotel in Jumeirah.",
  },
  {
    src: "/images/6hl-4.png",
    alt: "Luxury coastal hotel interior design Jumeirah Dubai - Gallery 4",
    title: "Jumeirah Beachfront Luxury Hotel Interior Gallery 4",
    description:
      "Refined coastal hospitality design emphasizing relaxation and understated luxury.",
  },
  {
    src: "/images/6hl-5.png",
    alt: "Premium beachfront hotel interiors Jumeirah - Gallery 5",
    title: "Jumeirah Beachfront Luxury Hotel Interior Gallery 5",
    description:
      "Sophisticated hotel interior design for the Jumeirah Beachfront Luxury Hotel project.",
  },
  {
    src: "/images/6hl-6.png",
    alt: "Jumeirah luxury resort hotel interior design - Gallery 6",
    title: "Jumeirah Beachfront Luxury Hotel Interior Gallery 6",
    description:
      "Luxury resort-inspired hospitality interior design along Dubai's Jumeirah beachfront.",
  },
  {
    src: "/images/6hl-7.png",
    alt: "Exclusive beachfront hospitality interior Dubai - Gallery 7",
    title: "Jumeirah Beachfront Luxury Hotel Interior Gallery 7",
    description:
      "Contemporary hotel design combining coastal refinement and premium guest comfort.",
  },
  {
    src: "/images/6hl-8.png",
    alt: "Jumeirah beachfront luxury hotel fit-out interior - Gallery 8",
    title: "Jumeirah Beachfront Luxury Hotel Interior Gallery 8",
    description:
      "Elegant luxury hotel interior concept focused on sophisticated beachfront hospitality.",
  },
  {
    src: "/images/6hl-9.png",
    alt: "Jumeirah Beachfront Luxury Hotel interior Dubai - Gallery 9",
    title: "Jumeirah Beachfront Luxury Hotel Interior Gallery 9",
    description:
      "Premium beachfront hotel interior design project in Jumeirah, Dubai.",
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
        HOME &gt; PROJECTS &gt; JUMEIRAH BEACHFRONT LUXURY HOTEL
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
            CREATING EXCLUSIVE COASTAL HOSPITALITY:
          </p>

          <h1 className="text-sm sm:text-2xl md:text-3xl font-conthrax tracking-widest text-white mt-1">
            JUMEIRAH BEACHFRONT LUXURY HOTEL
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
                <strong>Jumeirah Beachfront Luxury Hotel</strong>{" "}
                project, exploring an exclusive approach to
                luxury hospitality interior design along
                Dubai's prestigious Jumeirah coastline.
                Renowned for its beautiful beaches,
                distinguished residential neighborhoods,
                and world-class hospitality destinations,
                Jumeirah provides an exceptional setting
                for sophisticated beachfront retreats.
                Our design philosophy draws inspiration
                from the tranquility of the Arabian Gulf,
                combining understated elegance, natural
                textures, and thoughtfully composed
                interiors. The vision centers on
                creating a peaceful and exclusive
                hospitality atmosphere where
                contemporary architecture, relaxation,
                and personalized guest experiences
                come together harmoniously.
              </p>

              <p>
                As a specialist in{" "}
                <b className="text-[#caa193]">
                  <a href="https://wedointerior.ae/hotel-interior-design-dubai">
                    luxury hotel interior design in Dubai
                  </a>
                </b>
                , WE DO approaches beachfront hospitality
                through a careful balance of architectural
                sophistication and natural coastal
                inspiration. The Jumeirah Beachfront
                Luxury Hotel design direction emphasizes
                warm neutral palettes, elegant
                finishes, carefully considered lighting,
                and interiors that encourage a sense
                of privacy and relaxation. From
                welcoming hotel reception areas
                and refined lobby concepts to
                elegant guest suites, exclusive
                lounges, wellness-inspired spaces,
                and intimate dining environments,
                our approach considers how every
                interior element contributes to
                the overall atmosphere. Thoughtful
                space planning and cohesive design
                create opportunities for seamless
                transitions between hospitality,
                leisure, and relaxation.
              </p>

              <p>
                Developing luxury beachfront
                hospitality interiors requires
                specialized attention to material
                performance, environmental conditions,
                guest comfort, and long-term
                functionality. Through our comprehensive{" "}
                <b className="text-[#caa193]">
                  <a href="https://wedointerior.ae/fit-out-company-dubai">
                    hotel interior fit-out services in Dubai
                  </a>
                </b>
                , WE DO combines creative design
                expertise with technical planning,
                bespoke joinery, premium finishes,
                and coordinated interior solutions.
                For coastal properties, appropriate
                material selection is essential
                to address humidity, salt exposure,
                and everyday hospitality operations.
                Our design considerations also
                include acoustic comfort, efficient
                circulation, guest privacy,
                functional lighting, and durable
                surfaces. These principles help
                establish elegant interiors that
                support operational requirements
                without compromising the exclusive
                character of a premium beachfront
                hotel.
              </p>

              <p>
                Whether you are planning a private
                beachfront hotel in Jumeirah,
                transforming an existing luxury
                resort, or developing a distinctive
                coastal hospitality destination,
                WE DO offers tailored interior
                design and fit-out solutions.
                Our expertise covers luxury hotel
                rooms, premium guest suites,
                refined reception spaces, exclusive
                lounges, restaurants, wellness
                facilities, and sophisticated
                hospitality environments.
                With an emphasis on craftsmanship,
                timeless aesthetics, and functional
                excellence, we help hotel owners
                and hospitality developers shape
                memorable destinations that
                celebrate the natural beauty
                of Jumeirah, strengthen brand
                identity, and deliver an
                exceptional guest experience
                within Dubai's competitive
                luxury hospitality sector.
              </p>
            </div>
          </div>

          {/* Image */}
          <figure className="w-full lg:w-1/2">
            <Image
              src="/images/6hl-2.png"
              alt="Jumeirah Beachfront Luxury Hotel interior design project in Dubai"
              title="Jumeirah Beachfront Luxury Hotel Interior Design"
              width={800}
              height={500}
              loading="lazy"
              className="w-full h-auto object-cover"
            />

            <figcaption className="sr-only">
              Jumeirah Beachfront Luxury Hotel interior
              design project inspired by the exclusive
              coastal lifestyle and refined hospitality
              atmosphere of Jumeirah, Dubai.
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
          JUMEIRAH BEACHFRONT LUXURY HOTEL GALLERY
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
