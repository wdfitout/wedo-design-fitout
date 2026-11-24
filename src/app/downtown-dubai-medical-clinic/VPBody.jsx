
"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const galleryImages = [
  {
    src: "/images/4cl-1.png",
    alt: "Downtown Dubai Medical Clinic premium interior design - Gallery 1",
    title: "Downtown Dubai Medical Clinic Interior Gallery 1",
    description:
      "Contemporary medical clinic interior design concept in Downtown Dubai.",
  },
  {
    src: "/images/4cl-2.png",
    alt: "Premium medical clinic interior design Downtown Dubai - Gallery 2",
    title: "Downtown Dubai Medical Clinic Interior Gallery 2",
    description:
      "Modern healthcare interior design for Downtown Dubai Medical Clinic.",
  },
  {
    src: "/images/4cl-3.png",
    alt: "Downtown Dubai luxury healthcare clinic design - Gallery 3",
    title: "Downtown Dubai Medical Clinic Interior Gallery 3",
    description:
      "Sophisticated medical clinic interior design emphasizing patient comfort.",
  },
  {
    src: "/images/4cl-4.png",
    alt: "Modern medical center interior design Dubai - Gallery 4",
    title: "Downtown Dubai Medical Clinic Interior Gallery 4",
    description:
      "Contemporary healthcare interior concept combining elegance and functionality.",
  },
  {
    src: "/images/4cl-5.png",
    alt: "Premium healthcare interiors Downtown Dubai - Gallery 5",
    title: "Downtown Dubai Medical Clinic Interior Gallery 5",
    description:
      "Refined medical clinic interior design focused on clinical efficiency.",
  },
  {
    src: "/images/4cl-6.png",
    alt: "Downtown Dubai contemporary clinic interior - Gallery 6",
    title: "Downtown Dubai Medical Clinic Interior Gallery 6",
    description:
      "Contemporary medical clinic design for a premium urban healthcare setting.",
  },
  {
    src: "/images/4cl-7.png",
    alt: "Luxury medical clinic design Downtown Dubai - Gallery 7",
    title: "Downtown Dubai Medical Clinic Interior Gallery 7",
    description:
      "Patient-centered healthcare interior design with a modern architectural approach.",
  },
  {
    src: "/images/4cl-8.png",
    alt: "Downtown Dubai medical clinic interior fit-out - Gallery 8",
    title: "Downtown Dubai Medical Clinic Interior Gallery 8",
    description:
      "Premium medical clinic interior design and fit-out concept in Dubai.",
  },
  {
    src: "/images/4cl-9.png",
    alt: "Professional healthcare interior design Dubai Downtown - Gallery 9",
    title: "Downtown Dubai Medical Clinic Interior Gallery 9",
    description:
      "Modern healthcare interior design emphasizing privacy and efficient planning.",
  },
  {
    src: "/images/4cl-10.png",
    alt: "Downtown Dubai Medical Clinic luxury interior design - Gallery 10",
    title: "Downtown Dubai Medical Clinic Interior Gallery 10",
    description:
      "Premium medical clinic interior design concept in Downtown Dubai.",
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
        HOME &gt; PROJECTS &gt; DOWNTOWN DUBAI MEDICAL CLINIC
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
            TRANSFORMING MODERN HEALTHCARE ENVIRONMENTS:
          </p>

          <h1 className="text-sm sm:text-2xl md:text-3xl font-conthrax tracking-widest text-white mt-1">
            DOWNTOWN DUBAI MEDICAL CLINIC
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
                <strong>Downtown Dubai Medical Clinic</strong>{" "}
                design concept, exploring a sophisticated
                approach to premium healthcare interior
                design in one of Dubai's most prominent
                urban destinations. Downtown Dubai,
                known for its iconic architecture,
                luxury residential towers, premium
                commercial developments, and
                international lifestyle, provides
                an inspiring setting for a
                contemporary medical facility.
                Our design philosophy focuses
                on creating professional
                healthcare environments
                that combine architectural
                refinement, patient comfort,
                and clinical functionality.
                The concept emphasizes modern
                interior finishes, carefully
                coordinated lighting, practical
                spatial planning, and
                welcoming architectural details.
                By balancing a sophisticated
                visual identity with the
                essential requirements of
                medical environments, we aim
                to establish a clinic atmosphere
                that feels calm, organized,
                and reassuring for patients
                and healthcare professionals.
              </p>

              <p>
                As a specialist in{" "}
                <b className="text-[#caa193]">
                  <a href="https://wedointerior.ae/clinic-interior-design-dubai">
                    medical clinic interior design in Dubai
                  </a>
                </b>
                , WE DO understands that
                successful healthcare spaces
                must support efficient clinical
                operations while delivering
                a comfortable patient experience.
                The Downtown Dubai Medical Clinic
                design direction considers
                sophisticated reception and
                registration areas, comfortable
                patient waiting lounges,
                private doctor consultation
                rooms, practical examination
                facilities, and specialized
                treatment environments.
                In a busy urban location,
                intuitive wayfinding,
                organized circulation,
                and efficient patient
                registration are important
                design considerations.
                Thoughtfully arranged
                consultation rooms
                help maintain confidentiality,
                while functional examination
                areas support the everyday
                requirements of healthcare
                professionals. Premium
                furnishings, neutral
                interior palettes,
                contemporary architectural
                detailing, and balanced
                illumination can contribute
                to a welcoming atmosphere.
                Our approach prioritizes
                accessibility, patient
                privacy, and clear
                relationships between
                public, consultation,
                and clinical service areas,
                helping create an organized
                medical environment
                suited to Downtown Dubai.
              </p>

              <p>
                Creating a premium medical
                clinic requires careful
                attention to hygiene,
                accessibility, technical
                infrastructure, and
                long-term operational
                performance. Through
                our comprehensive{" "}
                <b className="text-[#caa193]">
                  <a href="https://wedointerior.ae/fit-out-company-dubai">
                    medical clinic interior fit-out services in Dubai
                  </a>
                </b>
                , WE DO approaches
                healthcare environments
                through coordinated
                architectural planning,
                technical integration,
                bespoke joinery,
                and appropriate
                material selection.
                Medical clinic interiors
                benefit from durable,
                easily cleaned surfaces,
                hygienic finishes,
                practical medical
                cabinetry, and
                functional flooring.
                Doctor consultation
                and examination rooms
                require suitable
                lighting, organized
                equipment provisions,
                convenient handwashing
                facilities where needed,
                and carefully coordinated
                electrical connections.
                Clinical treatment
                areas may require
                specialized ventilation,
                infection prevention
                measures, dedicated
                storage, and appropriate
                plumbing infrastructure.
                Patient corridors,
                reception counters,
                and accessible washrooms
                must also support
                safe circulation and
                inclusive access.
                For medical facilities,
                detailed planning,
                construction, and
                technical coordination
                must follow applicable
                healthcare authority
                requirements, building
                regulations, and
                project-specific approvals.
              </p>

              <p>
                Whether you are developing
                a premium medical clinic
                in Downtown Dubai,
                establishing a specialist
                healthcare center,
                renovating an existing
                clinic, or seeking
                experienced medical
                interior designers
                and fit-out contractors
                in Dubai, WE DO offers
                customized design
                solutions tailored
                to your requirements.
                Our healthcare interior
                design approach considers
                modern reception areas,
                comfortable waiting
                spaces, private
                consultation rooms,
                medical examination
                facilities, dedicated
                treatment spaces,
                diagnostic environments,
                clinical corridors,
                and accessible
                patient amenities.
                From initial interior
                concepts and functional
                space planning to
                bespoke cabinetry,
                coordinated finishes,
                lighting, and technical
                fit-out planning,
                our focus is on
                creating professional
                medical environments
                that balance contemporary
                architecture with
                practical healthcare
                functionality.
                Through careful
                planning, refined
                material coordination,
                and quality craftsmanship,
                we help healthcare
                operators and developers
                create distinctive
                clinic environments
                that support patient
                confidence, professional
                operations, and
                a premium healthcare
                experience within
                Downtown Dubai.
              </p>
            </div>
          </div>

          {/* Image */}
          <figure className="w-full lg:w-1/2">
            <Image
              src="/images/4cl-2.png"
              alt="Downtown Dubai Medical Clinic premium healthcare interior design concept"
              title="Downtown Dubai Medical Clinic Interior Design"
              width={800}
              height={500}
              loading="lazy"
              className="w-full h-auto object-cover"
            />

            <figcaption className="sr-only">
              Downtown Dubai Medical Clinic
              interior design concept exploring
              premium healthcare environments,
              contemporary medical spaces,
              patient-centered design,
              and functional clinic interiors
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
          DOWNTOWN DUBAI MEDICAL CLINIC INTERIOR GALLERY
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
