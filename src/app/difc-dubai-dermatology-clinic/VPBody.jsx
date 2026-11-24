
"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const galleryImages = [
  {
    src: "/images/3cl-1.png",
    alt: "DIFC Dubai Dermatology Clinic interior design - Gallery 1",
    title: "DIFC Dubai Dermatology Clinic Interior Gallery 1",
    description:
      "Luxury dermatology clinic interior design concept in DIFC, Dubai.",
  },
  {
    src: "/images/3cl-2.png",
    alt: "Premium dermatology clinic interior design DIFC Dubai - Gallery 2",
    title: "DIFC Dubai Dermatology Clinic Interior Gallery 2",
    description:
      "Contemporary medical and dermatology clinic interior design in DIFC.",
  },
  {
    src: "/images/3cl-3.png",
    alt: "DIFC dermatology medical clinic interior Dubai - Gallery 3",
    title: "DIFC Dubai Dermatology Clinic Interior Gallery 3",
    description:
      "Sophisticated dermatology clinic interiors emphasizing patient comfort.",
  },
  {
    src: "/images/3cl-4.png",
    alt: "Luxury skin care clinic interior design Dubai - Gallery 4",
    title: "DIFC Dubai Dermatology Clinic Interior Gallery 4",
    description:
      "Premium skin care and medical clinic interior design concept.",
  },
  {
    src: "/images/3cl-5.png",
    alt: "DIFC Dubai premium dermatology clinic design - Gallery 5",
    title: "DIFC Dubai Dermatology Clinic Interior Gallery 5",
    description:
      "Modern healthcare interior design for a specialist dermatology clinic.",
  },
  {
    src: "/images/3cl-6.png",
    alt: "Contemporary skin clinic interior design DIFC - Gallery 6",
    title: "DIFC Dubai Dermatology Clinic Interior Gallery 6",
    description:
      "Contemporary dermatology clinic interior concept in Dubai.",
  },
  {
    src: "/images/3cl-7.png",
    alt: "Luxury dermatology healthcare interior Dubai - Gallery 7",
    title: "DIFC Dubai Dermatology Clinic Interior Gallery 7",
    description:
      "Patient-centered dermatology clinic interior design with refined aesthetics.",
  },
  {
    src: "/images/3cl-8.png",
    alt: "DIFC dermatology clinic interior fit-out Dubai - Gallery 8",
    title: "DIFC Dubai Dermatology Clinic Interior Gallery 8",
    description:
      "Specialist medical clinic design and fit-out concept for DIFC Dubai.",
  },
  {
    src: "/images/3cl-9.png",
    alt: "Premium aesthetic dermatology clinic interior - Gallery 9",
    title: "DIFC Dubai Dermatology Clinic Interior Gallery 9",
    description:
      "Modern dermatology clinic interior design focused on privacy and clinical functionality.",
  },
  {
    src: "/images/3cl-10.png",
    alt: "DIFC Dubai Dermatology Clinic luxury interior design - Gallery 10",
    title: "DIFC Dubai Dermatology Clinic Interior Gallery 10",
    description:
      "Luxury dermatology clinic interior design concept in Dubai International Financial Centre.",
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
        HOME &gt; PROJECTS &gt; DIFC DUBAI DERMATOLOGY CLINIC
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
            ELEVATING LUXURY DERMATOLOGY &amp; HEALTHCARE DESIGN:
          </p>

          <h1 className="text-sm sm:text-2xl md:text-3xl font-conthrax tracking-widest text-white mt-1">
            DIFC DUBAI DERMATOLOGY CLINIC
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
                <strong>DIFC Dubai Dermatology Clinic</strong>{" "}
                design concept, exploring a sophisticated
                approach to luxury dermatology and
                specialist medical clinic interior design
                in Dubai International Financial Centre.
                Known for its prestigious business
                environment, contemporary architecture,
                premium residences, and exclusive
                lifestyle destinations, DIFC provides
                an inspiring setting for a modern
                dermatology clinic. Our design
                philosophy focuses on creating a
                refined healthcare environment
                where contemporary luxury, patient
                privacy, and medical functionality
                come together. The concept
                emphasizes sophisticated interior
                finishes, calm architectural
                detailing, thoughtfully planned
                consultation spaces, and a
                welcoming atmosphere. By combining
                hospitality-inspired elegance
                with appropriate healthcare
                design principles, we aim to
                create an exclusive dermatology
                clinic environment that promotes
                patient confidence, comfort,
                and a professional experience.
              </p>

              <p>
                As a specialist in{" "}
                <b className="text-[#caa193]">
                  <a href="https://wedointerior.ae/clinic-interior-design-dubai">
                    luxury clinic interior design in Dubai
                  </a>
                </b>
                , WE DO understands that specialist
                dermatology facilities require
                carefully coordinated spaces
                for medical consultations,
                skin assessments, and
                treatment procedures.
                The DIFC Dubai Dermatology
                Clinic design direction
                considers sophisticated
                reception and registration
                areas, comfortable patient
                waiting lounges, private
                dermatologist consultation
                rooms, and dedicated skin
                examination facilities.
                Depending on the clinic's
                approved scope of services,
                specialized treatment rooms
                may also accommodate
                aesthetic dermatology,
                laser-based procedures,
                or other skin treatments.
                Such areas require
                thoughtful planning
                for patient privacy,
                appropriate equipment
                positioning, clinical
                circulation, and
                professional workflows.
                Color-accurate examination
                lighting, comfortable
                treatment furnishings,
                and organized medical
                storage can support
                effective clinical
                assessments. Our
                design approach balances
                these practical needs
                with refined materials,
                contemporary interiors,
                and a calm atmosphere
                suited to a premium
                dermatology practice
                in DIFC.
              </p>

              <p>
                Creating an exceptional
                dermatology clinic requires
                specialized attention to
                hygiene, technical
                infrastructure, patient
                safety, and long-term
                operational performance.
                Through our comprehensive{" "}
                <b className="text-[#caa193]">
                  <a href="https://wedointerior.ae/fit-out-company-dubai">
                    medical clinic interior fit-out services in Dubai
                  </a>
                </b>
                , WE DO approaches
                specialist healthcare
                environments through
                coordinated architectural
                planning, bespoke joinery,
                appropriate material
                selection, and technical
                design considerations.
                Dermatology consultation
                and examination areas
                benefit from hygienic
                surfaces, durable flooring,
                easily maintained medical
                cabinetry, and carefully
                planned examination
                lighting. Clinical
                treatment rooms may
                require specialized
                electrical connections,
                handwashing facilities,
                ventilation, and
                dedicated equipment
                provisions. Where laser
                systems or other
                specialist technologies
                are proposed, room
                design must address
                the applicable equipment
                safety specifications
                and clinical requirements.
                Patient confidentiality,
                acoustic privacy,
                accessible circulation,
                medical waste management,
                and infection prevention
                also form important
                parts of the design.
                Final medical facilities
                must be planned and
                constructed in accordance
                with relevant healthcare
                regulations, applicable
                safety standards, and
                authority approvals.
              </p>

              <p>
                Whether you are developing
                a premium dermatology
                clinic in DIFC,
                establishing an exclusive
                skin health center,
                renovating an existing
                medical practice,
                or searching for
                experienced dermatology
                clinic interior
                designers and fit-out
                contractors in Dubai,
                WE DO offers tailored
                interior design
                solutions for specialist
                healthcare environments.
                Our design approach
                considers elegant
                medical reception
                areas, comfortable
                patient waiting spaces,
                private dermatology
                consultation rooms,
                skin examination
                facilities, dedicated
                treatment environments,
                practical storage,
                clinical corridors,
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
                healthcare interiors
                that communicate
                professionalism,
                privacy, and refined
                architectural character.
                Through quality
                craftsmanship and
                thoughtful design,
                we help healthcare
                developers and
                medical operators
                shape distinctive
                dermatology clinic
                environments that
                support clinical
                efficiency, patient
                comfort, and a
                premium healthcare
                experience within
                Dubai International
                Financial Centre.
              </p>
            </div>
          </div>

          {/* Image */}
          <figure className="w-full lg:w-1/2">
            <Image
              src="/images/3cl-2.png"
              alt="DIFC Dubai Dermatology Clinic luxury medical interior design concept"
              title="DIFC Dubai Dermatology Clinic Interior Design"
              width={800}
              height={500}
              loading="lazy"
              className="w-full h-auto object-cover"
            />

            <figcaption className="sr-only">
              DIFC Dubai Dermatology Clinic
              interior design concept exploring
              luxury healthcare interiors,
              specialist dermatology facilities,
              patient consultation environments,
              and contemporary medical
              clinic design in Dubai.
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
          DIFC DUBAI DERMATOLOGY CLINIC INTERIOR GALLERY
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
