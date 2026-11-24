
"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const galleryImages = [
  {
    src: "/images/1cl-1.png",
    alt: "Business Bay Dubai Healthcare Clinic interior design - Gallery 1",
    title: "Business Bay Dubai Healthcare Clinic Interior Gallery 1",
    description:
      "Contemporary healthcare clinic interior design concept in Business Bay, Dubai.",
  },
  {
    src: "/images/1cl-2.png",
    alt: "Premium medical clinic interior design Business Bay - Gallery 2",
    title: "Business Bay Dubai Healthcare Clinic Interior Gallery 2",
    description:
      "Premium healthcare interior design for Business Bay Dubai Healthcare Clinic.",
  },
  {
    src: "/images/1cl-3.png",
    alt: "Modern healthcare clinic interior Business Bay Dubai - Gallery 3",
    title: "Business Bay Dubai Healthcare Clinic Interior Gallery 3",
    description:
      "Modern medical clinic interior concept emphasizing patient comfort and functionality.",
  },
  {
    src: "/images/1cl-4.png",
    alt: "Business Bay professional medical center interior - Gallery 4",
    title: "Business Bay Dubai Healthcare Clinic Interior Gallery 4",
    description:
      "Contemporary medical center interior design focused on professional healthcare environments.",
  },
  {
    src: "/images/1cl-5.png",
    alt: "Luxury healthcare clinic interior design Dubai - Gallery 5",
    title: "Business Bay Dubai Healthcare Clinic Interior Gallery 5",
    description:
      "Premium healthcare interior concept combining refined aesthetics and clinical efficiency.",
  },
  {
    src: "/images/1cl-6.png",
    alt: "Business Bay contemporary medical clinic design - Gallery 6",
    title: "Business Bay Dubai Healthcare Clinic Interior Gallery 6",
    description:
      "Contemporary healthcare clinic design for a premium urban setting.",
  },
  {
    src: "/images/1cl-7.png",
    alt: "Premium medical healthcare interior Business Bay - Gallery 7",
    title: "Business Bay Dubai Healthcare Clinic Interior Gallery 7",
    description:
      "Patient-centered medical clinic interior design with a modern architectural approach.",
  },
  {
    src: "/images/1cl-8.png",
    alt: "Business Bay healthcare clinic interior fit-out Dubai - Gallery 8",
    title: "Business Bay Dubai Healthcare Clinic Interior Gallery 8",
    description:
      "Professional healthcare interior design and medical clinic fit-out concept.",
  },
  {
    src: "/images/1cl-9.png",
    alt: "Modern medical center interior design Business Bay - Gallery 9",
    title: "Business Bay Dubai Healthcare Clinic Interior Gallery 9",
    description:
      "Modern healthcare interior concept emphasizing privacy and efficient clinical planning.",
  },
  {
    src: "/images/1cl-10.png",
    alt: "Business Bay Dubai Healthcare Clinic premium interior - Gallery 10",
    title: "Business Bay Dubai Healthcare Clinic Interior Gallery 10",
    description:
      "Premium healthcare clinic interior design concept in Business Bay, Dubai.",
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
        HOME &gt; PROJECTS &gt; BUSINESS BAY DUBAI HEALTHCARE CLINIC
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
            DESIGNING MODERN &amp; EFFICIENT HEALTHCARE SPACES:
          </p>

          <h1 className="text-sm sm:text-2xl md:text-3xl font-conthrax tracking-widest text-white mt-1">
            BUSINESS BAY DUBAI HEALTHCARE CLINIC
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
                <strong>Business Bay Dubai Healthcare Clinic</strong>{" "}
                design concept, exploring a contemporary
                approach to premium healthcare interior
                design within one of Dubai's leading
                commercial and residential districts.
                Known for its modern office towers,
                high-rise residences, business activity,
                and proximity to Downtown Dubai,
                Business Bay provides an attractive
                setting for professionally designed
                medical facilities. Our design
                philosophy focuses on creating
                welcoming healthcare environments
                that balance architectural refinement,
                patient comfort, and efficient
                clinical functionality. The concept
                emphasizes organized spaces,
                contemporary materials, balanced
                lighting, and a calm atmosphere
                that supports confidence and trust.
                By combining sophisticated interior
                design with practical healthcare
                planning, we aim to create a
                medical environment suited to
                the expectations of working
                professionals, residents, and
                visitors seeking convenient
                healthcare services in Business Bay.
              </p>

              <p>
                As a specialist in{" "}
                <b className="text-[#caa193]">
                  <a href="https://wedointerior.ae/clinic-interior-design-dubai">
                    medical clinic interior design in Dubai
                  </a>
                </b>
                , WE DO understands that a modern
                urban healthcare facility must
                deliver an efficient patient
                experience without compromising
                privacy, comfort, or clinical
                functionality. The Business Bay
                Dubai Healthcare Clinic design
                direction considers professional
                reception and registration
                counters, comfortable waiting
                lounges, private doctor
                consultation rooms, practical
                medical examination areas,
                and dedicated treatment spaces.
                A well-organized reception
                and check-in arrangement helps
                guide patient movement,
                while clear circulation routes
                support convenient access
                between consultation and
                clinical service areas.
                Thoughtfully designed rooms
                also allow healthcare
                professionals to work
                efficiently while maintaining
                patient confidentiality.
                Comfortable seating,
                refined finishes, appropriate
                examination lighting,
                and intuitive wayfinding
                can contribute to a
                reassuring healthcare
                experience. Our approach
                prioritizes the relationship
                between efficient clinic
                operations and a welcoming
                environment appropriate for
                the fast-paced lifestyle
                of Business Bay.
              </p>

              <p>
                Delivering a premium healthcare
                environment requires careful
                coordination of architectural
                design, medical functionality,
                hygiene, accessibility, and
                building infrastructure.
                Through our comprehensive{" "}
                <b className="text-[#caa193]">
                  <a href="https://wedointerior.ae/fit-out-company-dubai">
                    medical clinic interior fit-out services in Dubai
                  </a>
                </b>
                , WE DO approaches healthcare
                projects through functional
                space planning, coordinated
                technical design, bespoke
                cabinetry, and appropriate
                material selection.
                Contemporary medical clinics
                benefit from durable and
                easily maintained finishes,
                hygienic surfaces, practical
                medical storage, and suitable
                ventilation. Doctor consultation
                and examination rooms require
                thoughtful furniture placement,
                appropriate lighting, convenient
                handwashing facilities where
                needed, and organized equipment
                connections. Depending on the
                facility's approved scope of
                services, dedicated treatment,
                diagnostic, or sample collection
                rooms may require additional
                planning for clinical equipment,
                infection prevention, medical
                waste handling, and technical
                services. Patient accessibility,
                acoustic privacy, safe
                circulation, and accessible
                washrooms are also essential
                considerations. All healthcare
                fit-out work must be coordinated
                with applicable medical
                regulations, technical
                specifications, and authority
                approvals.
              </p>

              <p>
                Whether you are planning
                a healthcare clinic in
                Business Bay, developing
                a modern outpatient medical
                center, renovating an existing
                healthcare facility, or
                searching for experienced
                medical clinic interior
                designers and fit-out
                contractors in Dubai,
                WE DO offers tailored
                design solutions.
                Our healthcare interior
                design approach considers
                contemporary reception
                spaces, organized patient
                waiting lounges, private
                consultation rooms, medical
                examination facilities,
                dedicated treatment spaces,
                diagnostic environments,
                clinical corridors, staff
                support areas, and accessible
                patient amenities.
                From initial interior
                concepts and functional
                space planning to custom
                cabinetry, coordinated
                materials, architectural
                lighting, and technical
                fit-out planning, our focus
                is on shaping medical
                environments that combine
                professional aesthetics
                with everyday operational
                efficiency. Through
                thoughtful design,
                quality craftsmanship,
                and careful technical
                coordination, we help
                healthcare developers
                and clinic operators
                create distinctive
                medical spaces that
                support patient comfort,
                efficient workflows,
                and a contemporary
                healthcare experience
                within Business Bay, Dubai.
              </p>
            </div>
          </div>

          {/* Image */}
          <figure className="w-full lg:w-1/2">
            <Image
              src="/images/1cl-2.png"
              alt="Business Bay Dubai Healthcare Clinic premium medical interior design concept"
              title="Business Bay Dubai Healthcare Clinic Interior Design"
              width={800}
              height={500}
              loading="lazy"
              className="w-full h-auto object-cover"
            />

            <figcaption className="sr-only">
              Business Bay Dubai Healthcare Clinic
              interior design concept exploring
              contemporary medical spaces,
              patient-centered healthcare
              environments, organized clinical
              planning, and premium clinic
              interiors in Dubai.
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
          BUSINESS BAY DUBAI HEALTHCARE CLINIC INTERIOR GALLERY
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
