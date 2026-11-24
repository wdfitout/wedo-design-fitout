
"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const galleryImages = [
  {
    src: "/images/8cl-1.png",
    alt: "Palm Jumeirah Luxury Clinic interior design Dubai - Gallery 1",
    title: "Palm Jumeirah Luxury Clinic Interior Gallery 1",
    description:
      "Luxury medical clinic interior design concept on Palm Jumeirah, Dubai.",
  },
  {
    src: "/images/8cl-2.png",
    alt: "Premium luxury clinic interior design Palm Jumeirah - Gallery 2",
    title: "Palm Jumeirah Luxury Clinic Interior Gallery 2",
    description:
      "Contemporary healthcare interior design for a premium Palm Jumeirah clinic.",
  },
  {
    src: "/images/8cl-3.png",
    alt: "Palm Jumeirah premium medical clinic design - Gallery 3",
    title: "Palm Jumeirah Luxury Clinic Interior Gallery 3",
    description:
      "Sophisticated medical clinic interiors focused on patient comfort and privacy.",
  },
  {
    src: "/images/8cl-4.png",
    alt: "Luxury healthcare interior design Palm Jumeirah Dubai - Gallery 4",
    title: "Palm Jumeirah Luxury Clinic Interior Gallery 4",
    description:
      "Modern healthcare interior concept combining contemporary elegance and functionality.",
  },
  {
    src: "/images/8cl-5.png",
    alt: "High-end medical clinic interior design Dubai - Gallery 5",
    title: "Palm Jumeirah Luxury Clinic Interior Gallery 5",
    description:
      "Premium clinic interior design with a patient-centered architectural approach.",
  },
  {
    src: "/images/8cl-6.png",
    alt: "Palm Jumeirah contemporary clinic interiors - Gallery 6",
    title: "Palm Jumeirah Luxury Clinic Interior Gallery 6",
    description:
      "Contemporary luxury medical clinic interior design in Dubai.",
  },
  {
    src: "/images/8cl-7.png",
    alt: "Premium healthcare clinic interior Palm Jumeirah - Gallery 7",
    title: "Palm Jumeirah Luxury Clinic Interior Gallery 7",
    description:
      "Sophisticated healthcare interior design balancing clinical functionality and aesthetics.",
  },
  {
    src: "/images/8cl-8.png",
    alt: "Palm Jumeirah medical clinic interior fit-out - Gallery 8",
    title: "Palm Jumeirah Luxury Clinic Interior Gallery 8",
    description:
      "Premium medical clinic design and fit-out concept for Palm Jumeirah.",
  },
  {
    src: "/images/8cl-9.png",
    alt: "Luxury medical healthcare interior design Dubai - Gallery 9",
    title: "Palm Jumeirah Luxury Clinic Interior Gallery 9",
    description:
      "Contemporary healthcare interior concept emphasizing patient comfort and efficient planning.",
  },
  {
    src: "/images/8cl-10.png",
    alt: "Palm Jumeirah Luxury Clinic premium interior design - Gallery 10",
    title: "Palm Jumeirah Luxury Clinic Interior Gallery 10",
    description:
      "Luxury clinic interior design concept on Palm Jumeirah, Dubai.",
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
        HOME &gt; PROJECTS &gt; PALM JUMEIRAH LUXURY CLINIC
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
            REDEFINING LUXURY HEALTHCARE INTERIORS:
          </p>

          <h1 className="text-sm sm:text-2xl md:text-3xl font-conthrax tracking-widest text-white mt-1">
            PALM JUMEIRAH LUXURY CLINIC
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
                <strong>Palm Jumeirah Luxury Clinic</strong>{" "}
                design concept, exploring a sophisticated
                approach to premium medical clinic interior
                design in one of Dubai's most prestigious
                waterfront destinations. Palm Jumeirah,
                internationally recognized for its
                luxury residential developments,
                exclusive hospitality properties,
                and refined lifestyle, provides an
                inspiring setting for an exceptional
                healthcare environment. Our design
                philosophy focuses on creating
                welcoming medical interiors that
                combine architectural elegance,
                patient comfort, privacy, and
                practical clinical functionality.
                The concept emphasizes contemporary
                design, carefully considered
                spatial planning, refined material
                selections, and a calm atmosphere.
                By bringing together hospitality-
                inspired aesthetics and essential
                healthcare design principles,
                we aim to create an environment
                where patients feel comfortable,
                reassured, and professionally
                cared for throughout their visit.
              </p>

              <p>
                As a specialist in{" "}
                <b className="text-[#caa193]">
                  <a href="https://wedointerior.ae/clinic-interior-design-dubai">
                    luxury clinic interior design in Dubai
                  </a>
                </b>
                , WE DO understands that a premium
                healthcare facility requires
                thoughtful coordination between
                architectural design, clinical
                workflows, and patient experience.
                The Palm Jumeirah Luxury Clinic
                design direction considers
                sophisticated reception and
                registration areas, comfortable
                patient waiting lounges,
                private doctor consultation
                rooms, medical examination
                areas, and dedicated treatment
                facilities. Each space requires
                appropriate planning to support
                efficient movement, patient
                confidentiality, accessibility,
                and professional healthcare
                operations. Carefully selected
                neutral palettes, contemporary
                furniture, organized storage,
                and balanced lighting can help
                establish a welcoming atmosphere
                without compromising clinical
                requirements. Our approach
                emphasizes clear circulation,
                intuitive wayfinding, appropriate
                room separation, and thoughtful
                interior details that contribute
                to a comfortable and reassuring
                healthcare experience.
              </p>

              <p>
                Developing a luxury medical
                clinic requires specialized
                attention to hygiene,
                safety, accessibility,
                technical infrastructure,
                and long-term operational
                performance. Through our{" "}
                <b className="text-[#caa193]">
                  <a href="https://wedointerior.ae/fit-out-company-dubai">
                    medical clinic interior fit-out services in Dubai
                  </a>
                </b>
                , WE DO approaches healthcare
                environments through integrated
                space planning, technical
                coordination, bespoke joinery,
                and carefully considered
                material selection.
                Medical interiors benefit
                from cleanable surfaces,
                durable flooring, practical
                cabinetry, appropriate
                ventilation, and coordinated
                mechanical, electrical,
                and plumbing systems.
                Specialized examination
                and treatment rooms may
                require additional planning
                for clinical equipment,
                handwashing facilities,
                medical storage, lighting,
                and infection prevention.
                Patient corridors, accessible
                washrooms, and circulation
                areas must also be considered
                as part of the overall
                healthcare design strategy.
                Where applicable, detailed
                planning and construction
                must meet relevant healthcare
                authority requirements,
                building regulations,
                and technical approvals.
                These principles help
                support a functional,
                maintainable, and
                professionally organized
                medical environment.
              </p>

              <p>
                Whether you are planning
                a luxury medical clinic
                on Palm Jumeirah,
                developing an exclusive
                specialist healthcare
                center, renovating an
                existing medical facility,
                or searching for experienced
                clinic interior designers
                and fit-out contractors
                in Dubai, WE DO offers
                customized design solutions
                tailored to your requirements.
                Our healthcare interior
                design approach addresses
                premium reception areas,
                patient waiting lounges,
                private consultation rooms,
                medical examination spaces,
                treatment facilities,
                diagnostic environments,
                clinical corridors,
                and accessible patient
                amenities. From initial
                design concepts and
                functional space planning
                to bespoke cabinetry,
                coordinated finishes,
                lighting, and technical
                fit-out planning, our
                focus is on creating
                distinctive healthcare
                environments that balance
                comfort, professionalism,
                and operational efficiency.
                By combining thoughtful
                design principles,
                quality craftsmanship,
                and attention to patient
                experience, we help
                healthcare developers
                and clinic operators
                shape medical spaces
                that reflect a premium
                brand identity while
                respecting the essential
                demands of clinical care.
              </p>
            </div>
          </div>

          {/* Image */}
          <figure className="w-full lg:w-1/2">
            <Image
              src="/images/8cl-2.png"
              alt="Palm Jumeirah Luxury Clinic premium medical interior design concept in Dubai"
              title="Palm Jumeirah Luxury Clinic Interior Design Dubai"
              width={800}
              height={500}
              loading="lazy"
              className="w-full h-auto object-cover"
            />

            <figcaption className="sr-only">
              Palm Jumeirah Luxury Clinic interior
              design concept exploring sophisticated
              healthcare spaces, contemporary
              medical interiors, patient comfort,
              and functional clinic design in Dubai.
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
          PALM JUMEIRAH LUXURY CLINIC INTERIOR GALLERY
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
