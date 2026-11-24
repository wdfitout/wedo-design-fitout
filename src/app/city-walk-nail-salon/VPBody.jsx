
"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const galleryImages = [
  {
    src: "/images/2sl-1.png",
    alt: "City Walk Nail Salon luxury interior design Dubai - Gallery 1",
    title: "City Walk Nail Salon Interior Gallery 1",
    description:
      "Luxury nail salon interior design project in City Walk, Dubai.",
  },
  {
    src: "/images/2sl-2.png",
    alt: "Premium nail salon interior design City Walk Dubai - Gallery 2",
    title: "City Walk Nail Salon Interior Gallery 2",
    description:
      "Contemporary beauty salon interior design for the City Walk Nail Salon project.",
  },
  {
    src: "/images/2sl-3.png",
    alt: "City Walk luxury manicure and pedicure salon design - Gallery 3",
    title: "City Walk Nail Salon Interior Gallery 3",
    description:
      "Premium nail care salon design focused on comfort and contemporary elegance.",
  },
  {
    src: "/images/2sl-4.png",
    alt: "Luxury beauty and nail salon interior City Walk - Gallery 4",
    title: "City Walk Nail Salon Interior Gallery 4",
    description:
      "Refined luxury nail salon interior design in City Walk, Dubai.",
  },
  {
    src: "/images/2sl-5.png",
    alt: "Modern nail studio interior design Dubai - Gallery 5",
    title: "City Walk Nail Salon Interior Gallery 5",
    description:
      "Modern beauty salon interior design for a premium nail studio.",
  },
  {
    src: "/images/2sl-6.png",
    alt: "City Walk premium nail salon interior Dubai - Gallery 6",
    title: "City Walk Nail Salon Interior Gallery 6",
    description:
      "Sophisticated nail salon interior design with a focus on beauty and functionality.",
  },
  {
    src: "/images/2sl-7.png",
    alt: "Luxury nail care salon interior design City Walk - Gallery 7",
    title: "City Walk Nail Salon Interior Gallery 7",
    description:
      "Contemporary nail care studio design for a luxury beauty environment.",
  },
  {
    src: "/images/2sl-8.png",
    alt: "City Walk beauty salon interior fit-out Dubai - Gallery 8",
    title: "City Walk Nail Salon Interior Gallery 8",
    description:
      "Premium nail salon interior concept for City Walk, Dubai.",
  },
  {
    src: "/images/2sl-9.png",
    alt: "Elegant nail salon interior design Dubai City Walk - Gallery 9",
    title: "City Walk Nail Salon Interior Gallery 9",
    description:
      "Luxury nail salon interior design emphasizing aesthetics and customer comfort.",
  },
  {
    src: "/images/2sl-10.png",
    alt: "City Walk Nail Salon luxury beauty interior Dubai - Gallery 10",
    title: "City Walk Nail Salon Interior Gallery 10",
    description:
      "Premium nail salon interior design project in City Walk, Dubai.",
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
        HOME &gt; PROJECTS &gt; CITY WALK NAIL SALON
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
            REDEFINING LUXURY NAIL SALON INTERIORS:
          </p>

          <h1 className="text-sm sm:text-2xl md:text-3xl font-conthrax tracking-widest text-white mt-1">
            CITY WALK NAIL SALON
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
                <strong>City Walk Nail Salon</strong>{" "}
                project, reflecting our approach to
                sophisticated beauty salon interior design
                in one of Dubai's most fashionable lifestyle
                destinations. Located in City Walk, a
                contemporary shopping and leisure district
                known for its premium retail experiences,
                this nail salon design concept combines
                refined aesthetics with practical beauty
                service requirements. Our vision focuses
                on creating an elegant environment where
                luxury, comfort, and personalized nail
                care come together. Through thoughtful
                space planning, carefully selected
                materials, and contemporary architectural
                details, the design explores how a
                modern nail salon can express a distinctive
                brand identity while offering customers
                a relaxing and memorable experience.
              </p>

              <p>
                As a specialist in{" "}
                <b className="text-[#caa193]">
                  <a href="https://wedointerior.ae/beauty-salon-interior-design-dubai">
                    luxury beauty salon interior design in Dubai
                  </a>
                </b>
                , WE DO understands the specific
                requirements of modern nail care
                environments. The City Walk Nail
                Salon design direction emphasizes
                comfortable manicure stations,
                carefully planned pedicure seating,
                welcoming reception areas, and
                stylish customer waiting spaces.
                Every element is considered from
                the perspective of both customers
                and professional nail technicians.
                Ergonomic workstation arrangements,
                appropriate task lighting, convenient
                product storage, and coordinated
                furniture selections help support
                efficient beauty treatments.
                By combining a sophisticated
                interior atmosphere with practical
                layouts, we aim to create nail
                salon environments that encourage
                relaxation while maintaining
                the functionality required for
                premium manicure and pedicure services.
              </p>

              <p>
                Designing an exceptional nail salon
                requires attention to technical
                planning, hygiene, and long-term
                interior performance. Through our
                comprehensive{" "}
                <b className="text-[#caa193]">
                  <a href="https://wedointerior.ae/fit-out-company-dubai">
                    beauty salon interior fit-out services in Dubai
                  </a>
                </b>
                , WE DO integrates architectural
                design, bespoke joinery, premium
                finishes, and specialized beauty
                salon requirements. Nail care
                environments benefit from
                dedicated manicure tables,
                functional pedicure stations,
                organized product displays,
                easily maintained surfaces,
                and carefully coordinated
                lighting systems. Appropriate
                ventilation and dust extraction
                are particularly important
                for maintaining a comfortable
                working environment during
                professional nail treatments.
                Our approach also considers
                electrical connections,
                plumbing requirements,
                circulation, technician
                comfort, and practical storage
                solutions. These considerations
                help establish beauty salon
                interiors that are visually
                appealing, hygienic, and
                suitable for everyday operations.
              </p>

              <p>
                Whether you are developing a
                luxury nail salon in City Walk,
                opening a contemporary manicure
                and pedicure studio, renovating
                an existing beauty lounge,
                or searching for experienced
                nail salon fit-out contractors
                in Dubai, WE DO offers
                customized interior design
                solutions. Our expertise
                supports the planning of
                premium manicure workstations,
                comfortable pedicure areas,
                elegant reception counters,
                bespoke beauty product displays,
                and specialized treatment spaces.
                From initial interior concepts
                and space planning to custom
                furniture, joinery, lighting,
                and detailed fit-out coordination,
                our focus is on creating
                distinctive environments that
                reflect each salon's identity.
                By bringing together quality
                craftsmanship, modern aesthetics,
                and operational functionality,
                we help beauty business owners
                develop sophisticated nail
                salons that enhance customer
                satisfaction and complement
                the premium lifestyle
                experience of City Walk, Dubai.
              </p>
            </div>
          </div>

          {/* Image */}
          <figure className="w-full lg:w-1/2">
            <Image
              src="/images/2sl-4.png"
              alt="City Walk Nail Salon luxury manicure and pedicure salon interior design in Dubai"
              title="City Walk Nail Salon Interior Design Dubai"
              width={800}
              height={500}
              loading="lazy"
              className="w-full h-auto object-cover"
            />

            <figcaption className="sr-only">
              City Walk Nail Salon interior design
              project exploring premium manicure
              and pedicure salon interiors with
              a contemporary luxury design
              approach in Dubai.
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
          CITY WALK NAIL SALON INTERIOR GALLERY
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
