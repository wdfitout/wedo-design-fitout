
"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const galleryImages = [
  {
    src: "/images/7cl-1.png",
    alt: "Jumeirah Dubai Clinic premium medical interior design - Gallery 1",
    title: "Jumeirah Dubai Clinic Interior Gallery 1",
    description:
      "Contemporary medical clinic interior design concept in Jumeirah, Dubai.",
  },
  {
    src: "/images/7cl-2.png",
    alt: "Luxury clinic interior design Jumeirah Dubai - Gallery 2",
    title: "Jumeirah Dubai Clinic Interior Gallery 2",
    description:
      "Premium healthcare interior design for the Jumeirah Dubai Clinic.",
  },
  {
    src: "/images/7cl-3.png",
    alt: "Modern medical clinic interior Jumeirah - Gallery 3",
    title: "Jumeirah Dubai Clinic Interior Gallery 3",
    description:
      "Modern medical clinic interiors emphasizing patient comfort and functionality.",
  },
  {
    src: "/images/7cl-4.png",
    alt: "Jumeirah Dubai premium healthcare interior - Gallery 4",
    title: "Jumeirah Dubai Clinic Interior Gallery 4",
    description:
      "Refined healthcare interior design for a contemporary medical clinic.",
  },
  {
    src: "/images/7cl-5.png",
    alt: "Luxury medical clinic interior design Dubai - Gallery 5",
    title: "Jumeirah Dubai Clinic Interior Gallery 5",
    description:
      "Premium medical interior concept focused on patient privacy and well-being.",
  },
  {
    src: "/images/7cl-6.png",
    alt: "Jumeirah contemporary clinic interior design - Gallery 6",
    title: "Jumeirah Dubai Clinic Interior Gallery 6",
    description:
      "Contemporary clinic design balancing clinical functionality and aesthetics.",
  },
  {
    src: "/images/7cl-7.png",
    alt: "Premium healthcare clinic design Jumeirah Dubai - Gallery 7",
    title: "Jumeirah Dubai Clinic Interior Gallery 7",
    description:
      "Sophisticated healthcare interior design with a patient-centered approach.",
  },
  {
    src: "/images/7cl-8.png",
    alt: "Jumeirah medical clinic interior fit-out Dubai - Gallery 8",
    title: "Jumeirah Dubai Clinic Interior Gallery 8",
    description:
      "Premium medical clinic interior design and fit-out concept in Jumeirah.",
  },
  {
    src: "/images/7cl-9.png",
    alt: "Modern luxury healthcare interiors Jumeirah - Gallery 9",
    title: "Jumeirah Dubai Clinic Interior Gallery 9",
    description:
      "Modern healthcare interior concept emphasizing professional clinical environments.",
  },
  {
    src: "/images/7cl-10.png",
    alt: "Jumeirah Dubai Clinic luxury interior design - Gallery 10",
    title: "Jumeirah Dubai Clinic Interior Gallery 10",
    description:
      "Premium medical clinic interior design concept in Jumeirah, Dubai.",
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
        HOME &gt; PROJECTS &gt; JUMEIRAH DUBAI CLINIC
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
            DESIGNING PREMIUM PATIENT-CENTERED HEALTHCARE SPACES:
          </p>

          <h1 className="text-sm sm:text-2xl md:text-3xl font-conthrax tracking-widest text-white mt-1">
            JUMEIRAH DUBAI CLINIC
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
                <strong>Jumeirah Dubai Clinic</strong>{" "}
                design concept, reflecting a contemporary
                approach to premium medical clinic interior
                design in one of Dubai's most established
                residential and lifestyle communities.
                Known for its elegant neighborhoods,
                luxury villas, and convenient community
                amenities, Jumeirah provides an inspiring
                setting for modern healthcare facilities.
                Our design philosophy focuses on creating
                welcoming medical environments that
                combine architectural sophistication,
                patient comfort, and professional
                functionality. The concept emphasizes
                thoughtfully planned interiors, calm
                color combinations, practical spatial
                arrangements, and carefully coordinated
                architectural details. By incorporating
                elements of contemporary hospitality
                design within a healthcare setting,
                we aim to create an atmosphere that
                feels comfortable and reassuring
                while remaining appropriate for
                clinical operations and patient care.
              </p>

              <p>
                As a specialist in{" "}
                <b className="text-[#caa193]">
                  <a href="https://wedointerior.ae/clinic-interior-design-dubai">
                    medical clinic interior design in Dubai
                  </a>
                </b>
                , WE DO recognizes the importance
                of providing efficient, organized,
                and comfortable healthcare spaces.
                The Jumeirah Dubai Clinic design
                direction considers a welcoming
                patient reception and registration
                area, comfortable waiting lounges,
                private doctor consultation rooms,
                practical examination spaces,
                and dedicated medical treatment
                facilities. Thoughtful layouts
                support clear patient circulation,
                accessibility, confidentiality,
                and the daily requirements of
                healthcare professionals.
                Well-designed consultation rooms
                help establish privacy and
                effective communication between
                doctors and patients, while
                carefully planned treatment
                areas support clinical workflows.
                Coordinated lighting, refined
                interior finishes, comfortable
                seating, and intuitive wayfinding
                contribute to an environment
                that feels professional,
                calm, and welcoming.
                Our approach seeks to balance
                patient satisfaction with
                the operational needs of
                a contemporary medical clinic.
              </p>

              <p>
                Developing a premium medical
                clinic requires specialized
                attention to hygiene, safety,
                accessibility, technical
                infrastructure, and efficient
                clinical operations. Through
                our comprehensive{" "}
                <b className="text-[#caa193]">
                  <a href="https://wedointerior.ae/fit-out-company-dubai">
                    medical clinic interior fit-out services in Dubai
                  </a>
                </b>
                , WE DO approaches healthcare
                projects through coordinated
                architectural planning,
                bespoke joinery, appropriate
                material selection, and
                technical fit-out considerations.
                Clinical environments benefit
                from hygienic and easily
                maintained surfaces, durable
                flooring, practical storage
                cabinetry, suitable ventilation,
                and well-organized mechanical,
                electrical, and plumbing systems.
                Examination and treatment rooms
                may require dedicated handwashing
                facilities, medical equipment
                provisions, specialized lighting,
                and carefully planned service
                connections. Accessible patient
                washrooms, corridors, and
                registration areas also play
                an essential role in creating
                inclusive healthcare spaces.
                Appropriate infection prevention,
                safe circulation, and
                operational separation are
                important considerations
                throughout the design process.
                Final medical facilities must
                be planned and executed
                according to applicable
                healthcare regulations,
                authority requirements,
                and building approvals.
              </p>

              <p>
                Whether you are planning
                a modern medical clinic
                in Jumeirah, developing
                a specialist consultation
                center, renovating an
                existing healthcare facility,
                or searching for experienced
                clinic interior designers
                and fit-out contractors
                in Dubai, WE DO offers
                tailored interior design
                solutions. Our approach
                addresses medical reception
                areas, comfortable waiting
                lounges, doctor consultation
                rooms, examination spaces,
                dedicated treatment rooms,
                laboratory environments,
                diagnostic facilities,
                clinical corridors,
                and accessible patient
                amenities. From initial
                interior concepts and
                functional space planning
                to coordinated materials,
                custom cabinetry, lighting,
                and technical fit-out
                planning, our focus is
                on creating healthcare
                environments that balance
                modern aesthetics with
                clinical practicality.
                Through thoughtful design,
                attention to detail,
                and quality craftsmanship,
                we help healthcare
                developers and medical
                operators establish
                professional environments
                that support patient
                comfort, reinforce
                brand identity, and
                complement the premium
                residential character
                of Jumeirah, Dubai.
              </p>
            </div>
          </div>

          {/* Image */}
          <figure className="w-full lg:w-1/2">
            <Image
              src="/images/7cl-2.png"
              alt="Jumeirah Dubai Clinic premium medical and healthcare interior design"
              title="Jumeirah Dubai Clinic Interior Design"
              width={800}
              height={500}
              loading="lazy"
              className="w-full h-auto object-cover"
            />

            <figcaption className="sr-only">
              Jumeirah Dubai Clinic interior design
              concept exploring premium medical
              spaces, patient-centered healthcare
              environments, contemporary clinical
              interiors, and functional clinic
              design in Jumeirah, Dubai.
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
          JUMEIRAH DUBAI CLINIC INTERIOR GALLERY
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
