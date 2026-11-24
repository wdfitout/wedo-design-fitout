
"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const galleryImages = [
  {
    src: "/images/5sl-1.png",
    alt: "Dubai Hills Estate Beauty Salon luxury interior design - Gallery 1",
    title: "Dubai Hills Estate Beauty Salon Interior Gallery 1",
    description:
      "Luxury beauty salon interior design for the Dubai Hills Estate project.",
  },
  {
    src: "/images/5sl-2.png",
    alt: "Premium beauty salon interior design Dubai Hills Estate - Gallery 2",
    title: "Dubai Hills Estate Beauty Salon Interior Gallery 2",
    description:
      "Contemporary beauty salon interior design in Dubai Hills Estate.",
  },
  {
    src: "/images/5sl-3.png",
    alt: "Dubai Hills Estate luxury beauty salon interior - Gallery 3",
    title: "Dubai Hills Estate Beauty Salon Interior Gallery 3",
    description:
      "Sophisticated beauty salon design focused on comfort and elegance.",
  },
  {
    src: "/images/5sl-4.png",
    alt: "Modern beauty salon interior design Dubai Hills - Gallery 4",
    title: "Dubai Hills Estate Beauty Salon Interior Gallery 4",
    description:
      "Refined beauty salon interior design for a premium Dubai Hills environment.",
  },
  {
    src: "/images/5sl-5.png",
    alt: "Luxury beauty lounge interior Dubai Hills Estate - Gallery 5",
    title: "Dubai Hills Estate Beauty Salon Interior Gallery 5",
    description:
      "Contemporary luxury beauty salon interiors in Dubai Hills Estate.",
  },
  {
    src: "/images/5sl-6.png",
    alt: "Premium salon interior design Dubai Hills Dubai - Gallery 6",
    title: "Dubai Hills Estate Beauty Salon Interior Gallery 6",
    description:
      "Modern beauty and personal care interior design with a luxury approach.",
  },
  {
    src: "/images/5sl-7.png",
    alt: "Dubai Hills Estate contemporary beauty salon design - Gallery 7",
    title: "Dubai Hills Estate Beauty Salon Interior Gallery 7",
    description:
      "Sophisticated contemporary beauty salon interior design in Dubai.",
  },
  {
    src: "/images/5sl-8.png",
    alt: "Luxury beauty salon fit-out Dubai Hills Estate - Gallery 8",
    title: "Dubai Hills Estate Beauty Salon Interior Gallery 8",
    description:
      "Premium beauty salon interior design combining functionality and aesthetics.",
  },
  {
    src: "/images/5sl-9.png",
    alt: "Elegant beauty salon interior Dubai Hills Estate - Gallery 9",
    title: "Dubai Hills Estate Beauty Salon Interior Gallery 9",
    description:
      "Refined beauty salon interior concept for Dubai Hills Estate.",
  },
  {
    src: "/images/5sl-10.png",
    alt: "Dubai Hills Estate Beauty Salon premium interior design - Gallery 10",
    title: "Dubai Hills Estate Beauty Salon Interior Gallery 10",
    description:
      "Luxury beauty salon interior design project in Dubai Hills Estate, Dubai.",
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
        HOME &gt; PROJECTS &gt; DUBAI HILLS ESTATE BEAUTY SALON
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
            CREATING ELEGANT BEAUTY & LIFESTYLE SPACES:
          </p>

          <h1 className="text-sm sm:text-2xl md:text-3xl font-conthrax tracking-widest text-white mt-1">
            DUBAI HILLS ESTATE BEAUTY SALON
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
                <strong>Dubai Hills Estate Beauty Salon</strong>{" "}
                project, reflecting our approach to
                creating sophisticated beauty and
                personal care environments within one
                of Dubai's most desirable residential
                communities. Dubai Hills Estate is
                recognized for its contemporary
                architecture, landscaped surroundings,
                premium residential developments,
                and refined lifestyle amenities.
                Inspired by this setting, the beauty
                salon design direction emphasizes
                understated luxury, modern comfort,
                and welcoming interior spaces.
                Our philosophy focuses on establishing
                a harmonious relationship between
                elegant architectural details,
                functional beauty treatment areas,
                and a relaxing customer experience.
                The design approach brings together
                thoughtful space planning, refined
                materials, and contemporary aesthetics
                to create a beauty salon environment
                that complements the sophisticated
                lifestyle of Dubai Hills Estate.
              </p>

              <p>
                As a specialist in{" "}
                <b className="text-[#caa193]">
                  <a href="https://wedointerior.ae/beauty-salon-interior-design-dubai">
                    luxury beauty salon interior design in Dubai
                  </a>
                </b>
                , WE DO understands the importance
                of designing spaces that feel
                welcoming, comfortable, and
                efficient for everyday beauty
                services. The Dubai Hills Estate
                Beauty Salon design approach
                considers elegant reception
                counters, comfortable hair styling
                stations, refined manicure and
                pedicure areas, private beauty
                treatment spaces, and welcoming
                customer waiting lounges.
                Carefully considered furniture,
                coordinated interior finishes,
                and balanced lighting contribute
                to a cohesive architectural
                identity. Our design philosophy
                also recognizes the needs of
                clients who value privacy,
                convenience, and personalized
                beauty experiences close to
                their residential communities.
                By focusing on circulation,
                workstation arrangements,
                customer comfort, and
                professional service requirements,
                we aim to create interiors
                that combine a premium
                atmosphere with practical
                day-to-day functionality.
              </p>

              <p>
                Developing a premium beauty
                salon requires careful attention
                to architectural detailing,
                technical planning, and
                long-term operational performance.
                Through our comprehensive{" "}
                <b className="text-[#caa193]">
                  <a href="https://wedointerior.ae/fit-out-company-dubai">
                    beauty salon interior fit-out services in Dubai
                  </a>
                </b>
                , WE DO brings together
                interior design expertise,
                bespoke joinery, premium
                material selection, lighting
                coordination, and technical
                fit-out solutions. Our
                approach considers ergonomic
                styling stations, comfortable
                treatment furniture, custom
                cabinetry, organized beauty
                product storage, and
                easy-to-maintain finishes.
                Appropriate ventilation,
                electrical planning,
                plumbing connections, and
                functional lighting are
                essential for professional
                beauty environments.
                Dedicated treatment areas
                also benefit from acoustic
                comfort, privacy, hygienic
                surfaces, and carefully
                planned layouts that allow
                technicians to work
                efficiently. By considering
                these requirements alongside
                the overall interior design,
                we help create sophisticated
                beauty salons that are
                both visually appealing
                and practical for
                everyday business operations.
              </p>

              <p>
                Whether you are planning
                a luxury beauty salon in
                Dubai Hills Estate,
                developing an exclusive
                neighborhood beauty lounge,
                renovating an existing
                salon, or searching for
                experienced beauty salon
                fit-out contractors in Dubai,
                WE DO provides tailored
                interior design solutions.
                Our expertise covers premium
                hair styling areas, manicure
                and pedicure stations,
                facial treatment rooms,
                eyelash and eyebrow
                treatment spaces,
                sophisticated reception
                areas, and comfortable
                customer lounges.
                From initial design
                concepts and space planning
                to bespoke furniture,
                custom joinery, lighting,
                and detailed interior
                fit-out coordination,
                our focus is on creating
                environments that reflect
                each salon's individual
                identity. Through quality
                craftsmanship, functional
                planning, and contemporary
                luxury design, we help
                beauty business owners
                develop welcoming spaces
                that enhance customer
                satisfaction, encourage
                repeat visits, and
                complement the premium
                residential lifestyle
                of Dubai Hills Estate.
              </p>
            </div>
          </div>

          {/* Image */}
          <figure className="w-full lg:w-1/2">
            <Image
              src="/images/5sl-4.png"
              alt="Dubai Hills Estate Beauty Salon luxury interior design project in Dubai"
              title="Dubai Hills Estate Beauty Salon Interior Design"
              width={800}
              height={500}
              loading="lazy"
              className="w-full h-auto object-cover"
            />

            <figcaption className="sr-only">
              Dubai Hills Estate Beauty Salon interior
              design project exploring contemporary
              luxury beauty spaces, refined salon
              interiors, and functional beauty
              treatment environments in Dubai.
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
          DUBAI HILLS ESTATE BEAUTY SALON INTERIOR GALLERY
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
