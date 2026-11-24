
"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const galleryImages = [
  {
    src: "/images/6cl-1.png",
    alt: "Dubai Marina Family Clinic interior design - Gallery 1",
    title: "Dubai Marina Family Clinic Interior Gallery 1",
    description:
      "Contemporary family medical clinic interior design concept in Dubai Marina.",
  },
  {
    src: "/images/6cl-2.png",
    alt: "Premium family clinic interior design Dubai Marina - Gallery 2",
    title: "Dubai Marina Family Clinic Interior Gallery 2",
    description:
      "Patient-centered healthcare interior design for the Dubai Marina Family Clinic.",
  },
  {
    src: "/images/6cl-3.png",
    alt: "Modern family medical center interior Dubai - Gallery 3",
    title: "Dubai Marina Family Clinic Interior Gallery 3",
    description:
      "Modern family healthcare interior design emphasizing patient comfort.",
  },
  {
    src: "/images/6cl-4.png",
    alt: "Dubai Marina healthcare clinic interior design - Gallery 4",
    title: "Dubai Marina Family Clinic Interior Gallery 4",
    description:
      "Contemporary medical clinic design for a family-oriented healthcare environment.",
  },
  {
    src: "/images/6cl-5.png",
    alt: "Premium medical clinic interiors Dubai Marina - Gallery 5",
    title: "Dubai Marina Family Clinic Interior Gallery 5",
    description:
      "Refined healthcare interiors designed around comfort and clinical functionality.",
  },
  {
    src: "/images/6cl-6.png",
    alt: "Family healthcare center interior design Dubai - Gallery 6",
    title: "Dubai Marina Family Clinic Interior Gallery 6",
    description:
      "Contemporary medical center interior design for family healthcare.",
  },
  {
    src: "/images/6cl-7.png",
    alt: "Dubai Marina modern clinic interior design - Gallery 7",
    title: "Dubai Marina Family Clinic Interior Gallery 7",
    description:
      "Modern healthcare interior concept emphasizing accessibility and privacy.",
  },
  {
    src: "/images/6cl-8.png",
    alt: "Family medical clinic interior fit-out Dubai Marina - Gallery 8",
    title: "Dubai Marina Family Clinic Interior Gallery 8",
    description:
      "Medical clinic interior design and fit-out concept in Dubai Marina.",
  },
  {
    src: "/images/6cl-9.png",
    alt: "Patient-centered family clinic design Dubai - Gallery 9",
    title: "Dubai Marina Family Clinic Interior Gallery 9",
    description:
      "Premium healthcare interior design combining welcoming aesthetics and functionality.",
  },
  {
    src: "/images/6cl-10.png",
    alt: "Dubai Marina Family Clinic premium interior design - Gallery 10",
    title: "Dubai Marina Family Clinic Interior Gallery 10",
    description:
      "Family medical clinic interior design concept in Dubai Marina, Dubai.",
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
        HOME &gt; PROJECTS &gt; DUBAI MARINA FAMILY CLINIC
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
            CREATING COMFORTABLE FAMILY HEALTHCARE SPACES:
          </p>

          <h1 className="text-sm sm:text-2xl md:text-3xl font-conthrax tracking-widest text-white mt-1">
            DUBAI MARINA FAMILY CLINIC
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
                <strong>Dubai Marina Family Clinic</strong>{" "}
                design concept, exploring a contemporary
                approach to family medical clinic interior
                design in one of Dubai's most vibrant
                waterfront communities. Known for its
                luxury residential towers, cosmopolitan
                lifestyle, and diverse international
                population, Dubai Marina provides an
                appealing setting for a modern family
                healthcare facility. Our design philosophy
                emphasizes welcoming medical environments
                that combine professional functionality,
                contemporary aesthetics, and exceptional
                patient comfort. The concept focuses on
                thoughtful spatial planning, refined
                finishes, balanced lighting, and an
                inviting atmosphere suitable for
                patients of different ages. By
                integrating modern healthcare design
                principles with comfortable interior
                environments, we aim to create a
                family-friendly clinic that supports
                a reassuring experience for adults,
                children, and accompanying family
                members throughout their visit.
              </p>

              <p>
                As a specialist in{" "}
                <b className="text-[#caa193]">
                  <a href="https://wedointerior.ae/clinic-interior-design-dubai">
                    medical clinic interior design in Dubai
                  </a>
                </b>
                , WE DO recognizes that family healthcare
                facilities require a thoughtful balance
                between clinical efficiency and a
                welcoming patient experience. The
                Dubai Marina Family Clinic design
                direction considers comfortable
                reception and registration areas,
                family-friendly waiting lounges,
                private doctor consultation rooms,
                practical medical examination
                spaces, and dedicated treatment
                facilities. Family healthcare
                environments benefit from
                accessible circulation routes,
                comfortable seating for parents
                and children, clear wayfinding,
                and carefully planned patient
                privacy. Where appropriate,
                designated children's waiting
                areas can introduce calming
                design features, durable
                furnishings, and age-conscious
                interior details. Our approach
                also considers the needs of
                elderly patients and individuals
                with reduced mobility, supporting
                an inclusive healthcare setting.
                Carefully coordinated furniture,
                lighting, architectural finishes,
                and functional room arrangements
                contribute to a professional
                environment that feels
                comfortable and reassuring
                for the entire family.
              </p>

              <p>
                Designing a modern family
                medical clinic requires
                specialized attention to
                hygiene, patient safety,
                accessibility, and efficient
                clinical operations. Through
                our comprehensive{" "}
                <b className="text-[#caa193]">
                  <a href="https://wedointerior.ae/fit-out-company-dubai">
                    medical clinic interior fit-out services in Dubai
                  </a>
                </b>
                , WE DO approaches healthcare
                environments through integrated
                space planning, architectural
                design, bespoke joinery,
                appropriate material selection,
                and technical coordination.
                Family clinics benefit from
                hygienic and easily maintained
                interior finishes, durable
                flooring, practical medical
                cabinetry, and comfortable
                patient seating. Doctor
                consultation and examination
                rooms require carefully
                planned layouts, appropriate
                lighting, convenient
                handwashing facilities,
                and suitable provisions
                for medical equipment.
                Treatment areas may require
                additional consideration
                for infection prevention,
                ventilation, medical
                storage, and safe workflows.
                Accessible washrooms,
                appropriately sized
                corridors, and safe
                circulation routes also
                contribute to a family-
                friendly clinical setting.
                Our approach recognizes
                the importance of
                coordinating mechanical,
                electrical, and plumbing
                systems with applicable
                healthcare authority
                requirements and
                building regulations.
              </p>

              <p>
                Whether you are planning
                a family medical clinic
                in Dubai Marina,
                developing a contemporary
                primary healthcare center,
                renovating an established
                medical facility, or
                searching for experienced
                clinic interior designers
                and fit-out contractors
                in Dubai, WE DO offers
                tailored design solutions.
                Our healthcare interior
                design approach considers
                family-friendly reception
                areas, comfortable patient
                waiting rooms, private
                doctor consultation spaces,
                general examination rooms,
                dedicated treatment
                facilities, laboratory
                areas, clinical corridors,
                and accessible patient
                amenities. From initial
                design concepts and
                functional space planning
                to custom medical cabinetry,
                coordinated interior
                finishes, lighting,
                and technical fit-out
                planning, our focus is
                on creating welcoming
                healthcare environments
                that balance contemporary
                aesthetics with practical
                clinical requirements.
                By combining thoughtful
                design, quality
                craftsmanship, and
                attention to patient
                experience, we help
                healthcare developers
                and medical operators
                establish professional
                family clinic spaces
                that support efficient
                care delivery and
                complement the modern
                residential lifestyle
                of Dubai Marina.
              </p>
            </div>
          </div>

          {/* Image */}
          <figure className="w-full lg:w-1/2">
            <Image
              src="/images/6cl-2.png"
              alt="Dubai Marina Family Clinic premium healthcare interior design concept"
              title="Dubai Marina Family Clinic Interior Design"
              width={800}
              height={500}
              loading="lazy"
              className="w-full h-auto object-cover"
            />

            <figcaption className="sr-only">
              Dubai Marina Family Clinic interior
              design concept exploring welcoming
              family healthcare environments,
              patient-centered medical spaces,
              and contemporary clinical
              interiors in Dubai Marina.
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
          DUBAI MARINA FAMILY CLINIC INTERIOR GALLERY
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
