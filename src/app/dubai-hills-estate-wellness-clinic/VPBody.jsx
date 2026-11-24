
"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const galleryImages = [
  {
    src: "/images/5cl-1.png",
    alt: "Dubai Hills Estate Wellness Clinic interior design - Gallery 1",
    title: "Dubai Hills Estate Wellness Clinic Interior Gallery 1",
    description:
      "Premium wellness clinic interior design concept in Dubai Hills Estate.",
  },
  {
    src: "/images/5cl-2.png",
    alt: "Luxury wellness clinic interior design Dubai Hills - Gallery 2",
    title: "Dubai Hills Estate Wellness Clinic Interior Gallery 2",
    description:
      "Contemporary healthcare and wellness interior design in Dubai Hills Estate.",
  },
  {
    src: "/images/5cl-3.png",
    alt: "Dubai Hills Estate premium wellness center design - Gallery 3",
    title: "Dubai Hills Estate Wellness Clinic Interior Gallery 3",
    description:
      "Sophisticated wellness clinic interiors emphasizing comfort and tranquility.",
  },
  {
    src: "/images/5cl-4.png",
    alt: "Modern wellness healthcare interior design Dubai - Gallery 4",
    title: "Dubai Hills Estate Wellness Clinic Interior Gallery 4",
    description:
      "Contemporary wellness-focused healthcare interior design concept.",
  },
  {
    src: "/images/5cl-5.png",
    alt: "Dubai Hills luxury medical wellness clinic - Gallery 5",
    title: "Dubai Hills Estate Wellness Clinic Interior Gallery 5",
    description:
      "Premium clinic interior design combining calming aesthetics and functionality.",
  },
  {
    src: "/images/5cl-6.png",
    alt: "Contemporary wellness clinic interior Dubai Hills Estate - Gallery 6",
    title: "Dubai Hills Estate Wellness Clinic Interior Gallery 6",
    description:
      "Modern wellness and healthcare interior concept for Dubai Hills Estate.",
  },
  {
    src: "/images/5cl-7.png",
    alt: "Premium wellness center interior design Dubai - Gallery 7",
    title: "Dubai Hills Estate Wellness Clinic Interior Gallery 7",
    description:
      "Refined medical wellness center design with a patient-centered approach.",
  },
  {
    src: "/images/5cl-8.png",
    alt: "Dubai Hills Estate wellness clinic fit-out design - Gallery 8",
    title: "Dubai Hills Estate Wellness Clinic Interior Gallery 8",
    description:
      "Premium healthcare interior design and wellness clinic fit-out concept.",
  },
  {
    src: "/images/5cl-9.png",
    alt: "Luxury wellness healthcare interiors Dubai Hills - Gallery 9",
    title: "Dubai Hills Estate Wellness Clinic Interior Gallery 9",
    description:
      "Contemporary wellness clinic interior design emphasizing privacy and comfort.",
  },
  {
    src: "/images/5cl-10.png",
    alt: "Dubai Hills Estate Wellness Clinic premium interior - Gallery 10",
    title: "Dubai Hills Estate Wellness Clinic Interior Gallery 10",
    description:
      "Luxury wellness clinic interior design concept in Dubai Hills Estate, Dubai.",
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
        HOME &gt; PROJECTS &gt; DUBAI HILLS ESTATE WELLNESS CLINIC
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
            CREATING CALMING LUXURY WELLNESS ENVIRONMENTS:
          </p>

          <h1 className="text-sm sm:text-2xl md:text-3xl font-conthrax tracking-widest text-white mt-1">
            DUBAI HILLS ESTATE WELLNESS CLINIC
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
                <strong>Dubai Hills Estate Wellness Clinic</strong>{" "}
                design concept, exploring an elegant
                approach to premium wellness and
                healthcare interior design in one
                of Dubai's most desirable residential
                communities. Known for its landscaped
                surroundings, contemporary architecture,
                luxury residences, and lifestyle
                amenities, Dubai Hills Estate
                provides an inspiring setting
                for a modern wellness clinic.
                Our design philosophy focuses
                on creating a peaceful medical
                environment where contemporary
                aesthetics, patient comfort,
                and professional healthcare
                functionality come together.
                The concept emphasizes calm
                interior palettes, carefully
                considered lighting, refined
                architectural finishes, and
                thoughtfully organized spaces.
                By combining wellness-inspired
                design principles with practical
                clinical requirements, we aim
                to establish a welcoming
                atmosphere that supports
                privacy, relaxation, and
                a reassuring patient experience.
              </p>

              <p>
                As a specialist in{" "}
                <b className="text-[#caa193]">
                  <a href="https://wedointerior.ae/clinic-interior-design-dubai">
                    luxury clinic interior design in Dubai
                  </a>
                </b>
                , WE DO understands that wellness
                facilities benefit from interior
                environments that reflect
                a holistic approach to comfort
                while supporting professional
                healthcare operations.
                The Dubai Hills Estate Wellness
                Clinic design direction
                considers welcoming reception
                and registration areas,
                relaxing patient waiting
                lounges, private wellness
                consultation rooms,
                comfortable medical
                examination spaces, and
                dedicated treatment facilities.
                Thoughtful design can help
                create a less intimidating
                clinical environment through
                refined furnishings,
                coordinated natural-looking
                materials, comfortable seating,
                and balanced illumination.
                Carefully planned circulation
                routes, intuitive wayfinding,
                and private consultation areas
                support a more organized
                patient journey. Our approach
                also considers functional
                room arrangements and
                practical healthcare workflows,
                helping create medical
                environments that feel
                professional, comfortable,
                and consistent with the
                refined lifestyle of
                Dubai Hills Estate.
              </p>

              <p>
                Creating a premium wellness
                clinic requires careful
                attention to both architectural
                refinement and specialized
                healthcare requirements.
                Through our comprehensive{" "}
                <b className="text-[#caa193]">
                  <a href="https://wedointerior.ae/fit-out-company-dubai">
                    medical clinic interior fit-out services in Dubai
                  </a>
                </b>
                , WE DO approaches healthcare
                environments through
                integrated space planning,
                bespoke joinery, appropriate
                material selection,
                and coordinated technical
                solutions. Wellness clinics
                with medical treatment
                facilities require hygienic
                and easily maintained
                surfaces, durable flooring,
                practical medical storage,
                and suitable ventilation.
                Private consultation and
                examination rooms benefit
                from appropriate lighting,
                acoustic privacy, efficient
                circulation, and convenient
                access to essential equipment.
                Where clinically required,
                dedicated treatment spaces
                must also consider handwashing
                facilities, infection
                prevention, and specialized
                mechanical, electrical,
                and plumbing provisions.
                Patient accessibility,
                comfortable waiting spaces,
                and functional washrooms
                form important parts of
                the overall design.
                All medical fit-out
                solutions must be developed
                in accordance with applicable
                healthcare regulations,
                technical requirements,
                and building approvals.
              </p>

              <p>
                Whether you are planning
                a wellness clinic in
                Dubai Hills Estate,
                developing a preventive
                healthcare center,
                renovating an existing
                medical facility,
                or seeking experienced
                healthcare interior
                designers and fit-out
                contractors in Dubai,
                WE DO offers tailored
                interior design solutions.
                Our approach supports
                the planning of premium
                reception areas,
                peaceful waiting lounges,
                private wellness
                consultation rooms,
                examination facilities,
                dedicated treatment
                environments, clinical
                corridors, and accessible
                patient amenities.
                From initial design
                concepts and functional
                space planning to custom
                cabinetry, coordinated
                interior finishes,
                lighting, and technical
                fit-out planning, we
                focus on creating
                professional environments
                that balance luxury
                aesthetics with
                healthcare functionality.
                By combining thoughtful
                design principles,
                quality craftsmanship,
                and attention to patient
                comfort, we help
                healthcare operators
                shape wellness-focused
                spaces that communicate
                professionalism,
                support efficient
                service delivery,
                and complement the
                sophisticated residential
                character of
                Dubai Hills Estate.
              </p>
            </div>
          </div>

          {/* Image */}
          <figure className="w-full lg:w-1/2">
            <Image
              src="/images/5cl-2.png"
              alt="Dubai Hills Estate Wellness Clinic premium healthcare interior design concept"
              title="Dubai Hills Estate Wellness Clinic Interior Design"
              width={800}
              height={500}
              loading="lazy"
              className="w-full h-auto object-cover"
            />

            <figcaption className="sr-only">
              Dubai Hills Estate Wellness Clinic
              interior design concept exploring
              refined healthcare spaces,
              calming medical environments,
              patient-centered wellness
              interiors, and contemporary
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
          DUBAI HILLS ESTATE WELLNESS CLINIC INTERIOR GALLERY
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
