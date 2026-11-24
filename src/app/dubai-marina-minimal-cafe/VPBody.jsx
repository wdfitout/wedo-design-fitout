
"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const galleryImages = [
  {
    src: "/images/nl-1.png",
    alt: "Nolen minimalist cafe interior design in Jumeirah Dubai - View 1",
    title: "Nolen Jumeirah Minimal Cafe Interior Gallery 1",
    description:
      "Nolen cafe interior design project in Jumeirah, Dubai.",
  },
  {
    src: "/images/nl-2.png",
    alt: "Nolen contemporary cafe interior Jumeirah Dubai - View 2",
    title: "Nolen Jumeirah Minimal Cafe Interior Gallery 2",
    description:
      "Contemporary minimalist hospitality interior design for Nolen.",
  },
  {
    src: "/images/nl-3.png",
    alt: "Minimal cafe interior design Nolen Dubai - View 3",
    title: "Nolen Jumeirah Minimal Cafe Interior Gallery 3",
    description:
      "Minimal cafe interior design concept for the Nolen project.",
  },
  {
    src: "/images/nl-4.png",
    alt: "Nolen modern coffee shop interior Jumeirah - View 4",
    title: "Nolen Jumeirah Minimal Cafe Interior Gallery 4",
    description:
      "Modern cafe interior design for Nolen in Jumeirah.",
  },
  {
    src: "/images/nl-5.png",
    alt: "Nolen Jumeirah minimalist cafe design Dubai - View 5",
    title: "Nolen Jumeirah Minimal Cafe Interior Gallery 5",
    description:
      "Minimalist cafe design and hospitality interiors for Nolen.",
  },
  {
    src: "/images/nl-6.png",
    alt: "Luxury minimal cafe interior Nolen Jumeirah - View 6",
    title: "Nolen Jumeirah Minimal Cafe Interior Gallery 6",
    description:
      "Refined minimalist interior design for the Nolen cafe.",
  },
  {
    src: "/images/nl-7.png",
    alt: "Nolen cafe interior design project Dubai - View 7",
    title: "Nolen Jumeirah Minimal Cafe Interior Gallery 7",
    description:
      "Contemporary cafe design at Nolen in Jumeirah, Dubai.",
  },
  {
    src: "/images/nl-8.png",
    alt: "Jumeirah Nolen cafe contemporary interior - View 8",
    title: "Nolen Jumeirah Minimal Cafe Interior Gallery 8",
    description:
      "Modern hospitality interior design for the Nolen cafe project.",
  },
  {
    src: "/images/nl-9.png",
    alt: "Nolen minimalist coffee shop design Dubai - View 9",
    title: "Nolen Jumeirah Minimal Cafe Interior Gallery 9",
    description:
      "Minimalist coffee shop interior design in Jumeirah.",
  },
  {
    src: "/images/nl-10.png",
    alt: "Premium minimal cafe design Jumeirah Nolen - View 10",
    title: "Nolen Jumeirah Minimal Cafe Interior Gallery 10",
    description:
      "Premium minimalist cafe interior concept for Nolen.",
  },
  {
    src: "/images/nl-11.png",
    alt: "Nolen modern cafe interiors in Dubai - View 11",
    title: "Nolen Jumeirah Minimal Cafe Interior Gallery 11",
    description:
      "Modern interior design for Nolen cafe in Dubai.",
  },
  {
    src: "/images/nl-12.png",
    alt: "Jumeirah minimalist hospitality interior Nolen - View 12",
    title: "Nolen Jumeirah Minimal Cafe Interior Gallery 12",
    description:
      "Minimalist hospitality interior design for Nolen Jumeirah.",
  },
  {
    src: "/images/nl-13.png",
    alt: "Nolen cafe interior architecture Jumeirah - View 13",
    title: "Nolen Jumeirah Minimal Cafe Interior Gallery 13",
    description:
      "Contemporary cafe interior architecture and design.",
  },
  {
    src: "/images/nl-14.png",
    alt: "Nolen minimal coffee shop interior Dubai - View 14",
    title: "Nolen Jumeirah Minimal Cafe Interior Gallery 14",
    description:
      "Modern minimalist coffee shop interior for Nolen.",
  },
  {
    src: "/images/nl-15.png",
    alt: "Contemporary Nolen cafe design Jumeirah - View 15",
    title: "Nolen Jumeirah Minimal Cafe Interior Gallery 15",
    description:
      "Contemporary cafe interior design in Jumeirah, Dubai.",
  },
  {
    src: "/images/nl-16.png",
    alt: "Nolen cafe minimalist interior design - View 16",
    title: "Nolen Jumeirah Minimal Cafe Interior Gallery 16",
    description:
      "Minimalist cafe design for the Nolen hospitality project.",
  },
  {
    src: "/images/nl-17.png",
    alt: "Luxury minimalist cafe interior Jumeirah - View 17",
    title: "Nolen Jumeirah Minimal Cafe Interior Gallery 17",
    description:
      "Refined contemporary hospitality interiors in Jumeirah.",
  },
  {
    src: "/images/nl-18.png",
    alt: "Nolen Jumeirah cafe interior design Dubai - View 18",
    title: "Nolen Jumeirah Minimal Cafe Interior Gallery 18",
    description:
      "Nolen Jumeirah cafe interior design project.",
  },
  {
    src: "/images/nl-19.png",
    alt: "Modern minimalist cafe design Nolen Dubai - View 19",
    title: "Nolen Jumeirah Minimal Cafe Interior Gallery 19",
    description:
      "Modern minimal cafe interiors for the Nolen project.",
  },
  {
    src: "/images/nl-20.png",
    alt: "Nolen contemporary coffee shop interior - View 20",
    title: "Nolen Jumeirah Minimal Cafe Interior Gallery 20",
    description:
      "Contemporary coffee shop interior design in Jumeirah.",
  },
  {
    src: "/images/nl-21.png",
    alt: "Jumeirah minimal cafe interior Nolen - View 21",
    title: "Nolen Jumeirah Minimal Cafe Interior Gallery 21",
    description:
      "Jumeirah minimalist cafe interior design for Nolen.",
  },
  {
    src: "/images/nl-22.png",
    alt: "Nolen Dubai cafe interior design - View 22",
    title: "Nolen Jumeirah Minimal Cafe Interior Gallery 22",
    description:
      "Nolen cafe hospitality interior design in Dubai.",
  },
  {
    src: "/images/nl-23.png",
    alt: "Minimalist cafe design project Nolen Jumeirah - View 23",
    title: "Nolen Jumeirah Minimal Cafe Interior Gallery 23",
    description:
      "Modern minimal cafe interior design project in Jumeirah.",
  },
  {
    src: "/images/nl-24.png",
    alt: "Nolen premium cafe interior Dubai - View 24",
    title: "Nolen Jumeirah Minimal Cafe Interior Gallery 24",
    description:
      "Premium contemporary cafe interior design for Nolen.",
  },
  {
    src: "/images/nl-25.png",
    alt: "Nolen Jumeirah Minimal Cafe Interior Design - View 25",
    title: "Nolen Jumeirah Minimal Cafe Interior Gallery 25",
    description:
      "Nolen minimalist cafe interior design gallery in Jumeirah, Dubai.",
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
        HOME &gt; PROJECTS &gt; JUMEIRAH MINIMAL CAFE INTERIOR - NOLEN
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
            THE ART OF MINIMALIST CAFE DESIGN:
          </p>

          <h1 className="text-sm sm:text-2xl md:text-3xl font-conthrax tracking-widest text-white mt-1">
            JUMEIRAH MINIMAL CAFE INTERIOR - NOLEN
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
                WE DO Interior Design & Fitout presents{" "}
                <strong>NOLEN – Jumeirah Minimal Cafe Interior</strong>,
                a contemporary cafe design project inspired by the
                philosophy of simplicity, elegance, and purposeful
                space planning. Set within Jumeirah, one of Dubai's
                established lifestyle destinations, the project
                explores how minimalist design can create a
                distinctive and welcoming coffee shop environment.
                Our approach to modern cafe interior design
                emphasizes visual harmony, carefully considered
                proportions, and a refined architectural identity.
                Rather than relying on excessive decoration,
                minimalist hospitality design focuses on the
                relationship between space, materials, lighting,
                and human experience. Nolen represents a
                design direction where understated sophistication
                and everyday comfort become central elements
                of the cafe atmosphere.
              </p>

              <p>
                As a specialist in{" "}
                <b className="text-[#caa193]">
                  <a href="https://wedointerior.ae/cafe-interior-design-dubai">
                    cafe interior design in Dubai
                  </a>
                </b>
                , WE DO understands that an exceptional coffee
                shop is defined by much more than visual
                appearance. The Nolen cafe design approach
                considers the complete customer journey,
                from the entrance and ordering experience
                to seating arrangements, circulation,
                and the relationship between public and
                service areas. A minimalist design language
                offers the opportunity to introduce
                calm neutral tones, natural textures,
                carefully selected furnishings, and
                subtle architectural details without
                overwhelming the environment. Thoughtful
                lighting and balanced material combinations
                help establish a welcoming atmosphere,
                while functional layouts support both
                customer comfort and efficient cafe
                operations. The objective is a space
                that feels contemporary, memorable,
                and consistent with the Nolen identity.
              </p>

              <p>
                Successful minimalist cafe interiors
                require precision in detailing and
                an understanding of how individual
                design elements work together.
                Through our comprehensive{" "}
                <b className="text-[#caa193]">
                  <a href="https://wedointerior.ae/fit-out-company-dubai">
                    interior fit-out services in Dubai
                  </a>
                </b>
                , WE DO provides integrated solutions
                covering space planning, custom joinery,
                interior finishes, lighting coordination,
                and technical fit-out requirements.
                For contemporary coffee shops,
                particular attention is given to
                practical counter layouts, functional
                seating arrangements, customer
                circulation, maintenance, and
                appropriate material selection.
                Minimalist design places additional
                importance on craftsmanship because
                every visible detail contributes to
                the overall character of the space.
                Clean architectural lines,
                well-proportioned features, and
                carefully coordinated finishes
                help create interiors that are
                functional, aesthetically refined,
                and suitable for everyday
                hospitality operations.
              </p>

              <p>
                Whether you are planning a minimalist
                cafe in Jumeirah, developing a
                contemporary specialty coffee shop,
                or renovating an existing hospitality
                space, WE DO offers tailored cafe
                interior design and fit-out solutions
                across Dubai. Our services support
                the development of distinctive
                coffee counters, comfortable seating
                environments, bespoke furniture,
                interior architectural features,
                and cohesive brand-inspired spaces.
                The Nolen project illustrates the
                design potential of a minimalist
                approach, where simplicity
                becomes a defining expression
                of quality rather than a lack
                of detail. By combining
                thoughtful planning, refined
                aesthetics, and functional
                design principles, we help
                cafe owners create hospitality
                environments that encourage
                customers to relax, connect,
                and return for the experience.
              </p>
            </div>
          </div>

          {/* Image */}
          <figure className="w-full lg:w-1/2">
            <Image
              src="/images/nl-5.png"
              alt="Nolen minimalist cafe interior design project in Jumeirah Dubai"
              title="Nolen Jumeirah Minimal Cafe Interior Design"
              width={800}
              height={500}
              loading="lazy"
              className="w-full h-auto object-cover"
            />

            <figcaption className="sr-only">
              Nolen minimalist cafe interior design
              project in Jumeirah, Dubai, exploring
              contemporary coffee shop design and
              refined hospitality aesthetics.
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
          NOLEN JUMEIRAH MINIMAL CAFE INTERIOR GALLERY
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
