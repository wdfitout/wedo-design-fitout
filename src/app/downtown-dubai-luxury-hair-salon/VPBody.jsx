
"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const galleryImages = [
  {
    src: "/images/4sl-1.png",
    alt: "Downtown Dubai Luxury Hair Salon interior design - Gallery 1",
    title: "Downtown Dubai Luxury Hair Salon Interior Gallery 1",
    description:
      "Luxury hair salon interior design project in Downtown Dubai.",
  },
  {
    src: "/images/4sl-2.png",
    alt: "Premium hair salon interior design Downtown Dubai - Gallery 2",
    title: "Downtown Dubai Luxury Hair Salon Interior Gallery 2",
    description:
      "Contemporary luxury hair salon interior design in Downtown Dubai.",
  },
  {
    src: "/images/4sl-3.png",
    alt: "Downtown Dubai premium beauty and hair salon design - Gallery 3",
    title: "Downtown Dubai Luxury Hair Salon Interior Gallery 3",
    description:
      "Sophisticated beauty and hair salon interior design with a modern luxury approach.",
  },
  {
    src: "/images/4sl-4.png",
    alt: "Luxury hair styling salon interior Downtown Dubai - Gallery 4",
    title: "Downtown Dubai Luxury Hair Salon Interior Gallery 4",
    description:
      "Refined luxury hair salon interior design project in the heart of Dubai.",
  },
  {
    src: "/images/4sl-5.png",
    alt: "Modern luxury hair salon interiors Dubai - Gallery 5",
    title: "Downtown Dubai Luxury Hair Salon Interior Gallery 5",
    description:
      "Contemporary hair salon design emphasizing elegance and customer comfort.",
  },
  {
    src: "/images/4sl-6.png",
    alt: "Downtown Dubai luxury beauty salon interior - Gallery 6",
    title: "Downtown Dubai Luxury Hair Salon Interior Gallery 6",
    description:
      "Premium beauty salon interior design for a luxury hair styling environment.",
  },
  {
    src: "/images/4sl-7.png",
    alt: "High-end hair salon interior design Dubai - Gallery 7",
    title: "Downtown Dubai Luxury Hair Salon Interior Gallery 7",
    description:
      "Sophisticated hair salon interior concept combining contemporary style and functionality.",
  },
  {
    src: "/images/4sl-8.png",
    alt: "Luxury hair salon interior fit-out Downtown Dubai - Gallery 8",
    title: "Downtown Dubai Luxury Hair Salon Interior Gallery 8",
    description:
      "Premium hair salon interior design and fit-out concept for Downtown Dubai.",
  },
  {
    src: "/images/4sl-9.png",
    alt: "Elegant premium hair salon design Dubai Downtown - Gallery 9",
    title: "Downtown Dubai Luxury Hair Salon Interior Gallery 9",
    description:
      "Contemporary luxury hair salon interior design focused on comfort and refined aesthetics.",
  },
  {
    src: "/images/4sl-10.png",
    alt: "Downtown Dubai Luxury Hair Salon interior design - Gallery 10",
    title: "Downtown Dubai Luxury Hair Salon Interior Gallery 10",
    description:
      "Luxury hair and beauty salon interior design project in Downtown Dubai.",
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
        HOME &gt; PROJECTS &gt; DOWNTOWN DUBAI LUXURY HAIR SALON
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
            ELEVATING LUXURY HAIR SALON INTERIORS:
          </p>

          <h1 className="text-sm sm:text-2xl md:text-3xl font-conthrax tracking-widest text-white mt-1">
            DOWNTOWN DUBAI LUXURY HAIR SALON
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
                <strong>Downtown Dubai Luxury Hair Salon</strong>{" "}
                project, exploring a sophisticated approach
                to high-end hair salon interior design
                in one of Dubai's most prestigious
                lifestyle destinations. Downtown Dubai,
                renowned for its iconic skyline,
                luxury residential developments,
                world-class hotels, and exclusive
                retail experiences, provides an
                inspiring setting for contemporary
                beauty establishments. Our design
                philosophy focuses on creating an
                elegant hair salon environment
                that combines architectural
                sophistication, modern beauty
                services, and personalized customer
                experiences. Through carefully
                considered spatial planning,
                refined material combinations,
                and distinctive interior details,
                the design concept explores how
                a premium hair salon can establish
                a strong visual identity while
                delivering comfort and functionality
                for both clients and professional
                hair stylists.
              </p>

              <p>
                As a specialist in{" "}
                <b className="text-[#caa193]">
                  <a href="https://wedointerior.ae/beauty-salon-interior-design-dubai">
                    luxury beauty salon interior design in Dubai
                  </a>
                </b>
                , WE DO understands that a premium
                hair salon requires a carefully
                balanced relationship between
                aesthetics, professional functionality,
                and customer comfort. The Downtown
                Dubai Luxury Hair Salon design
                direction considers elegant hair
                styling stations, professionally
                illuminated mirrors, comfortable
                shampoo and hair-washing areas,
                welcoming reception counters,
                and sophisticated customer lounges.
                Dedicated spaces for hair coloring,
                styling, and specialized treatments
                benefit from thoughtful arrangements
                that support an efficient service
                experience. Premium furnishings,
                coordinated architectural finishes,
                and well-planned lighting contribute
                to a refined atmosphere.
                By considering workstation spacing,
                client privacy, staff circulation,
                and convenient equipment storage,
                our approach seeks to create
                a harmonious environment where
                modern beauty services and
                luxury interior design
                complement one another.
              </p>

              <p>
                Creating exceptional hair salon
                interiors demands careful attention
                to technical requirements,
                professional equipment, and
                long-term operational efficiency.
                Through our comprehensive{" "}
                <b className="text-[#caa193]">
                  <a href="https://wedointerior.ae/fit-out-company-dubai">
                    beauty salon interior fit-out services in Dubai
                  </a>
                </b>
                , WE DO integrates creative
                architectural design with
                technical planning, bespoke
                joinery, premium materials,
                and specialized salon
                infrastructure. Luxury hair
                salons benefit from ergonomic
                styling workstations,
                comfortable backwash units,
                well-positioned electrical
                connections, plumbing provisions,
                and organized storage for
                professional hair products
                and styling equipment.
                Appropriate ventilation
                is especially important
                for hair coloring and
                chemical treatment areas,
                while balanced, color-accurate
                task lighting supports
                precision styling and
                professional hair services.
                Our approach also considers
                acoustic comfort,
                easy-to-maintain surfaces,
                efficient circulation,
                and durable finishes.
                Together, these elements
                support a sophisticated
                salon environment that
                meets both aesthetic
                expectations and daily
                operational requirements.
              </p>

              <p>
                Whether you are developing
                a luxury hair salon in
                Downtown Dubai, opening
                an exclusive hair styling
                studio, renovating an
                established beauty salon,
                or searching for experienced
                hair salon fit-out contractors
                in Dubai, WE DO offers
                tailored interior design
                solutions. Our expertise
                supports the planning of
                premium hair styling zones,
                dedicated washing stations,
                hair coloring areas,
                elegant reception desks,
                bespoke product displays,
                and comfortable client
                waiting lounges. From
                initial design concepts
                and space planning to
                custom furniture, joinery,
                lighting coordination,
                and detailed interior
                fit-out, we focus on
                developing distinctive
                spaces that reflect
                each salon's brand
                identity. By combining
                quality craftsmanship,
                thoughtful functionality,
                and contemporary luxury
                aesthetics, we help
                beauty business owners
                create memorable hair
                salon environments that
                enhance customer comfort,
                support professional
                services, and complement
                the premium lifestyle
                of Downtown Dubai.
              </p>
            </div>
          </div>

          {/* Image */}
          <figure className="w-full lg:w-1/2">
            <Image
              src="/images/4sl-4.png"
              alt="Downtown Dubai Luxury Hair Salon premium beauty salon interior design project"
              title="Downtown Dubai Luxury Hair Salon Interior Design"
              width={800}
              height={500}
              loading="lazy"
              className="w-full h-auto object-cover"
            />

            <figcaption className="sr-only">
              Downtown Dubai Luxury Hair Salon
              interior design project exploring
              sophisticated hair styling environments,
              premium beauty salon interiors,
              and contemporary luxury design
              in Downtown Dubai.
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
          DOWNTOWN DUBAI LUXURY HAIR SALON INTERIOR GALLERY
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
