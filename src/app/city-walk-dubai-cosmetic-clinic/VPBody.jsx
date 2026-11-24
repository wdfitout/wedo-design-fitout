
"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const galleryImages = [
  {
    src: "/images/2cl-1.png",
    alt: "City Walk Dubai Cosmetic Clinic luxury interior design - Gallery 1",
    title: "City Walk Dubai Cosmetic Clinic Interior Gallery 1",
    description:
      "Premium cosmetic clinic interior design concept in City Walk, Dubai.",
  },
  {
    src: "/images/2cl-2.png",
    alt: "Luxury cosmetic clinic interior design City Walk Dubai - Gallery 2",
    title: "City Walk Dubai Cosmetic Clinic Interior Gallery 2",
    description:
      "Contemporary aesthetic healthcare interior design for City Walk Dubai Cosmetic Clinic.",
  },
  {
    src: "/images/2cl-3.png",
    alt: "City Walk Dubai premium aesthetic clinic interior - Gallery 3",
    title: "City Walk Dubai Cosmetic Clinic Interior Gallery 3",
    description:
      "Sophisticated cosmetic clinic interior design emphasizing patient comfort and privacy.",
  },
  {
    src: "/images/2cl-4.png",
    alt: "Luxury aesthetic medicine clinic interior Dubai - Gallery 4",
    title: "City Walk Dubai Cosmetic Clinic Interior Gallery 4",
    description:
      "Refined aesthetic medical clinic interior design for a contemporary healthcare environment.",
  },
  {
    src: "/images/2cl-5.png",
    alt: "City Walk premium cosmetic medical clinic design - Gallery 5",
    title: "City Walk Dubai Cosmetic Clinic Interior Gallery 5",
    description:
      "Modern cosmetic healthcare interior concept combining elegance and functionality.",
  },
  {
    src: "/images/2cl-6.png",
    alt: "Contemporary aesthetic clinic interior design Dubai - Gallery 6",
    title: "City Walk Dubai Cosmetic Clinic Interior Gallery 6",
    description:
      "Contemporary cosmetic clinic interior design inspired by premium wellness aesthetics.",
  },
  {
    src: "/images/2cl-7.png",
    alt: "Luxury cosmetic healthcare interiors City Walk Dubai - Gallery 7",
    title: "City Walk Dubai Cosmetic Clinic Interior Gallery 7",
    description:
      "Patient-centered aesthetic clinic design with refined architectural detailing.",
  },
  {
    src: "/images/2cl-8.png",
    alt: "City Walk cosmetic clinic interior fit-out Dubai - Gallery 8",
    title: "City Walk Dubai Cosmetic Clinic Interior Gallery 8",
    description:
      "Premium cosmetic medical clinic interior design and fit-out concept in Dubai.",
  },
  {
    src: "/images/2cl-9.png",
    alt: "High-end cosmetic treatment clinic interior design - Gallery 9",
    title: "City Walk Dubai Cosmetic Clinic Interior Gallery 9",
    description:
      "Modern aesthetic clinic interior concept focused on privacy and professional functionality.",
  },
  {
    src: "/images/2cl-10.png",
    alt: "City Walk Dubai Cosmetic Clinic luxury interior design - Gallery 10",
    title: "City Walk Dubai Cosmetic Clinic Interior Gallery 10",
    description:
      "Luxury cosmetic clinic interior design concept in City Walk, Dubai.",
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
        HOME &gt; PROJECTS &gt; CITY WALK DUBAI COSMETIC CLINIC
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
            REDEFINING LUXURY COSMETIC &amp; AESTHETIC CLINICS:
          </p>

          <h1 className="text-sm sm:text-2xl md:text-3xl font-conthrax tracking-widest text-white mt-1">
            CITY WALK DUBAI COSMETIC CLINIC
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
                <strong>City Walk Dubai Cosmetic Clinic</strong>{" "}
                design concept, exploring a sophisticated
                approach to luxury cosmetic and aesthetic
                medical clinic interior design in one of
                Dubai's most fashionable lifestyle
                destinations. Known for its contemporary
                architecture, premium retail experiences,
                and vibrant urban atmosphere, City Walk
                provides an inspiring setting for an
                exclusive cosmetic healthcare environment.
                Our design philosophy focuses on creating
                a refined medical space where architectural
                elegance, personal privacy, patient
                comfort, and professional functionality
                come together. The concept emphasizes
                contemporary interior finishes,
                sophisticated architectural details,
                carefully coordinated lighting, and
                thoughtfully planned treatment spaces.
                By combining hospitality-inspired
                luxury with practical healthcare
                design principles, we aim to establish
                a welcoming cosmetic clinic environment
                that communicates professionalism,
                confidence, and personalized care.
              </p>

              <p>
                As a specialist in{" "}
                <b className="text-[#caa193]">
                  <a href="https://wedointerior.ae/clinic-interior-design-dubai">
                    luxury clinic interior design in Dubai
                  </a>
                </b>
                , WE DO recognizes that cosmetic
                and aesthetic medical facilities
                require carefully planned interiors
                that support both a premium patient
                experience and specialized clinical
                workflows. The City Walk Dubai
                Cosmetic Clinic design direction
                considers elegant reception and
                registration areas, comfortable
                patient waiting lounges, private
                aesthetic consultation rooms,
                dedicated facial treatment spaces,
                and specialized cosmetic procedure
                environments. Thoughtful spatial
                arrangements help establish a
                clear relationship between
                welcoming public areas and
                private clinical treatment zones.
                Comfortable treatment furniture,
                appropriate examination lighting,
                organized storage, and carefully
                coordinated finishes can create
                a calm and reassuring atmosphere.
                Where included in the clinic's
                approved medical services,
                dedicated rooms for non-surgical
                aesthetic procedures require
                additional consideration for
                clinical equipment, patient
                privacy, hygiene, and
                professional workflow.
                Our approach balances
                contemporary luxury with
                functional design to support
                a sophisticated cosmetic
                healthcare experience.
              </p>

              <p>
                Developing a premium cosmetic
                medical clinic requires
                specialized attention to
                infection prevention,
                patient safety, privacy,
                accessibility, and technical
                infrastructure. Through our
                comprehensive{" "}
                <b className="text-[#caa193]">
                  <a href="https://wedointerior.ae/fit-out-company-dubai">
                    medical clinic interior fit-out services in Dubai
                  </a>
                </b>
                , WE DO approaches specialist
                healthcare environments
                through coordinated
                architectural planning,
                bespoke joinery, premium
                yet practical materials,
                and technical design
                considerations. Cosmetic
                treatment areas benefit
                from hygienic, easily
                cleaned surfaces,
                durable flooring,
                organized medical cabinetry,
                and appropriate lighting.
                Depending on the approved
                procedures and equipment,
                specialist rooms may require
                dedicated electrical
                connections, handwashing
                facilities, ventilation,
                equipment clearances,
                and additional safety
                provisions. Patient
                confidentiality, acoustic
                privacy, accessible
                circulation, medical
                waste arrangements,
                and efficient clinical
                workflows are also
                important considerations.
                For any proposed laser
                or energy-based treatment
                systems, room requirements
                must be coordinated with
                the equipment specifications
                and applicable safety
                standards. Final clinic
                design and construction
                must follow relevant
                healthcare regulations
                and authority approvals.
              </p>

              <p>
                Whether you are planning
                a luxury cosmetic clinic
                in City Walk, developing
                an exclusive aesthetic
                medicine center,
                renovating an existing
                cosmetic healthcare
                facility, or searching
                for experienced clinic
                interior designers
                and fit-out contractors
                in Dubai, WE DO offers
                tailored interior
                design solutions.
                Our approach supports
                the planning of
                sophisticated reception
                environments, premium
                patient waiting lounges,
                private aesthetic
                consultation rooms,
                facial treatment areas,
                dedicated cosmetic
                procedure spaces,
                clinical corridors,
                medical storage,
                and accessible
                patient amenities.
                From initial design
                concepts and functional
                space planning to
                bespoke cabinetry,
                coordinated materials,
                specialized lighting,
                and technical fit-out
                planning, we focus
                on developing
                distinctive medical
                environments that
                reflect each clinic's
                brand identity.
                By combining refined
                architectural aesthetics,
                thoughtful functionality,
                and quality craftsmanship,
                we help healthcare
                developers and aesthetic
                clinic operators shape
                professional environments
                that support patient
                comfort, efficient
                clinical operations,
                and a premium healthcare
                experience within
                City Walk, Dubai.
              </p>
            </div>
          </div>

          {/* Image */}
          <figure className="w-full lg:w-1/2">
            <Image
              src="/images/2cl-2.png"
              alt="City Walk Dubai Cosmetic Clinic luxury aesthetic medical interior design concept"
              title="City Walk Dubai Cosmetic Clinic Interior Design"
              width={800}
              height={500}
              loading="lazy"
              className="w-full h-auto object-cover"
            />

            <figcaption className="sr-only">
              City Walk Dubai Cosmetic Clinic
              interior design concept exploring
              premium aesthetic healthcare spaces,
              private consultation environments,
              cosmetic treatment facilities,
              and contemporary luxury clinic
              design in Dubai.
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
          CITY WALK DUBAI COSMETIC CLINIC INTERIOR GALLERY
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
