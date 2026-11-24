
"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const galleryImages = [
  {
    src: "/images/7hl-1.png",
    alt: "Dubai Marina Waterfront Hotel luxury interior design - Gallery 1",
    title: "Dubai Marina Waterfront Hotel Interior Gallery 1",
    description:
      "Luxury hospitality interior design for the Dubai Marina Waterfront Hotel project.",
  },
  {
    src: "/images/7hl-2.png",
    alt: "Waterfront hotel interior design Dubai Marina - Gallery 2",
    title: "Dubai Marina Waterfront Hotel Interior Gallery 2",
    description:
      "Contemporary hotel interior design inspired by the sophisticated waterfront lifestyle of Dubai Marina.",
  },
  {
    src: "/images/7hl-3.png",
    alt: "Dubai Marina luxury hospitality interior design - Gallery 3",
    title: "Dubai Marina Waterfront Hotel Interior Gallery 3",
    description:
      "Premium hospitality interior design for a luxury waterfront hotel in Dubai Marina.",
  },
  {
    src: "/images/7hl-4.png",
    alt: "Modern luxury hotel interior Dubai Marina - Gallery 4",
    title: "Dubai Marina Waterfront Hotel Interior Gallery 4",
    description:
      "Contemporary waterfront hospitality design emphasizing comfort and architectural sophistication.",
  },
  {
    src: "/images/7hl-5.png",
    alt: "Dubai Marina Waterfront Hotel premium interior - Gallery 5",
    title: "Dubai Marina Waterfront Hotel Interior Gallery 5",
    description:
      "Refined luxury hotel interior design for the Dubai Marina Waterfront Hotel project.",
  },
  {
    src: "/images/7hl-6.png",
    alt: "Luxury marina hotel interior design Dubai - Gallery 6",
    title: "Dubai Marina Waterfront Hotel Interior Gallery 6",
    description:
      "Elegant hospitality interiors combining modern aesthetics and luxury hotel design.",
  },
  {
    src: "/images/7hl-7.png",
    alt: "Premium waterfront hospitality interior Dubai Marina - Gallery 7",
    title: "Dubai Marina Waterfront Hotel Interior Gallery 7",
    description:
      "Sophisticated interior design for a contemporary hotel in Dubai Marina.",
  },
  {
    src: "/images/7hl-8.png",
    alt: "Dubai Marina luxury hotel interior fit-out - Gallery 8",
    title: "Dubai Marina Waterfront Hotel Interior Gallery 8",
    description:
      "Modern hotel interior design focused on refined hospitality and guest comfort.",
  },
  {
    src: "/images/7hl-9.png",
    alt: "Dubai Marina Waterfront Hotel hospitality interior - Gallery 9",
    title: "Dubai Marina Waterfront Hotel Interior Gallery 9",
    description:
      "Luxury waterfront hotel interior design project in Dubai Marina.",
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
        HOME &gt; PROJECTS &gt; DUBAI MARINA WATERFRONT HOTEL
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
            ELEVATING MARINA WATERFRONT HOSPITALITY:
          </p>

          <h1 className="text-sm sm:text-2xl md:text-3xl font-conthrax tracking-widest text-white mt-1">
            DUBAI MARINA WATERFRONT HOTEL
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
                <strong>Dubai Marina Waterfront Hotel</strong>{" "}
                project, reflecting a sophisticated approach
                to luxury hospitality interior design in
                one of Dubai's most vibrant waterfront
                destinations. Known for its impressive
                skyline, luxury yachts, marina promenades,
                and cosmopolitan lifestyle, Dubai Marina
                provides a distinctive setting for premium
                hospitality experiences. Our design
                philosophy takes inspiration from this
                dynamic environment, combining contemporary
                elegance, refined architectural details,
                and thoughtful spatial planning. The
                result is a design direction focused on
                creating welcoming hotel interiors that
                complement the waterfront lifestyle
                while offering comfort, sophistication,
                and a memorable guest experience.
              </p>

              <p>
                As a specialist in{" "}
                <b className="text-[#caa193]">
                  <a href="https://wedointerior.ae/hotel-interior-design-dubai">
                    luxury hotel interior design in Dubai
                  </a>
                </b>
                , WE DO understands the importance of
                establishing a distinctive visual identity
                for waterfront hospitality properties.
                The Dubai Marina Waterfront Hotel design
                approach emphasizes elegant material
                combinations, contemporary architectural
                features, carefully balanced lighting,
                and a seamless connection between
                different guest environments. From
                impressive hotel lobby concepts and
                welcoming reception areas to elegant
                guest suites, exclusive lounges,
                and sophisticated dining spaces,
                our hospitality design philosophy
                considers every stage of the guest
                journey. Each space is approached
                with an emphasis on comfort,
                functionality, and the refined
                atmosphere expected from luxury
                hotels in Dubai Marina.
              </p>

              <p>
                Designing a premium waterfront hotel
                requires a careful balance between
                architectural character, operational
                efficiency, and long-term durability.
                Through our comprehensive{" "}
                <b className="text-[#caa193]">
                  <a href="https://wedointerior.ae/fit-out-company-dubai">
                    hotel interior fit-out services in Dubai
                  </a>
                </b>
                , WE DO combines creative interior
                design expertise with technical
                coordination, bespoke joinery,
                premium finishes, and practical
                construction solutions. Our design
                considerations include efficient
                circulation, guest privacy,
                acoustic comfort, functional
                lighting, and materials suitable
                for high-traffic hospitality
                environments. Attention to
                detail is particularly important
                in luxury waterfront properties,
                where interiors must balance
                a welcoming resort-like
                atmosphere with the practical
                requirements of modern hotel
                operations and maintenance.
              </p>

              <p>
                Whether you are planning a luxury
                waterfront hotel in Dubai Marina,
                renovating an existing hospitality
                property, or seeking professional
                hotel interior designers and
                fit-out contractors in Dubai,
                WE DO provides customized
                hospitality design solutions
                tailored to your project
                requirements. Our expertise
                encompasses hotel lobby design,
                luxury guest room interiors,
                premium suites, reception areas,
                restaurants, lounges, and
                exclusive hospitality facilities.
                With a commitment to quality
                craftsmanship, innovative
                design, and functional excellence,
                we help developers and hotel
                operators establish distinctive
                hospitality environments that
                enhance guest satisfaction,
                express a strong brand identity,
                and deliver lasting value in
                Dubai Marina's competitive
                luxury hospitality market.
              </p>
            </div>
          </div>

          {/* Image */}
          <figure className="w-full lg:w-1/2">
            <Image
              src="/images/7hl-2.png"
              alt="Dubai Marina Waterfront Hotel luxury hospitality interior design project"
              title="Dubai Marina Waterfront Hotel Interior Design Dubai"
              width={800}
              height={500}
              loading="lazy"
              className="w-full h-auto object-cover"
            />

            <figcaption className="sr-only">
              Dubai Marina Waterfront Hotel luxury
              hospitality interior design project
              inspired by the modern waterfront
              lifestyle of Dubai Marina.
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
          DUBAI MARINA WATERFRONT HOTEL GALLERY
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
