
"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const galleryImages = [
  {
    src: "/images/1sl-1.png",
    alt: "Bluewaters Island Spa Salon luxury interior design Dubai - Gallery 1",
    title: "Bluewaters Island Spa Salon Interior Gallery 1",
    description:
      "Luxury beauty salon and spa interior design project on Bluewaters Island, Dubai.",
  },
  {
    src: "/images/1sl-2.png",
    alt: "Luxury spa and beauty salon interior Bluewaters Dubai - Gallery 2",
    title: "Bluewaters Island Spa Salon Interior Gallery 2",
    description:
      "Premium beauty and wellness interior design for Bluewaters Island Spa Salon.",
  },
  {
    src: "/images/1sl-3.png",
    alt: "Bluewaters Island premium beauty salon design - Gallery 3",
    title: "Bluewaters Island Spa Salon Interior Gallery 3",
    description:
      "Contemporary luxury spa and beauty salon interior design in Dubai.",
  },
  {
    src: "/images/1sl-4.png",
    alt: "Bluewaters Island Spa Salon luxury beauty interior - Gallery 4",
    title: "Bluewaters Island Spa Salon Interior Gallery 4",
    description:
      "Refined beauty salon interior design for a premium wellness environment.",
  },
  {
    src: "/images/1sl-5.png",
    alt: "Luxury wellness and spa salon interior Dubai - Gallery 5",
    title: "Bluewaters Island Spa Salon Interior Gallery 5",
    description:
      "Sophisticated spa and salon interior design on Bluewaters Island.",
  },
  {
    src: "/images/1sl-6.png",
    alt: "Bluewaters Island beauty salon interior design - Gallery 6",
    title: "Bluewaters Island Spa Salon Interior Gallery 6",
    description:
      "Modern luxury beauty salon design combining comfort and elegance.",
  },
  {
    src: "/images/1sl-7.png",
    alt: "Premium spa salon interior design Bluewaters Dubai - Gallery 7",
    title: "Bluewaters Island Spa Salon Interior Gallery 7",
    description:
      "High-end beauty and wellness interior design for a luxury salon in Dubai.",
  },
  {
    src: "/images/1sl-8.png",
    alt: "Bluewaters Island luxury beauty and wellness interiors - Gallery 8",
    title: "Bluewaters Island Spa Salon Interior Gallery 8",
    description:
      "Contemporary spa salon interior concept focused on refined hospitality and relaxation.",
  },
  {
    src: "/images/1sl-9.png",
    alt: "Luxury beauty salon and spa fit-out Bluewaters Island - Gallery 9",
    title: "Bluewaters Island Spa Salon Interior Gallery 9",
    description:
      "Premium salon interior design and fit-out concept for Bluewaters Island.",
  },
  {
    src: "/images/1sl-10.png",
    alt: "Bluewaters Island Spa Salon interior design Dubai - Gallery 10",
    title: "Bluewaters Island Spa Salon Interior Gallery 10",
    description:
      "Luxury spa and beauty salon interior design project in Bluewaters Island, Dubai.",
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
        HOME &gt; PROJECTS &gt; BLUEWATERS ISLAND SPA SALON
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
            CREATING EXCLUSIVE BEAUTY & WELLNESS SPACES:
          </p>

          <h1 className="text-sm sm:text-2xl md:text-3xl font-conthrax tracking-widest text-white mt-1">
            BLUEWATERS ISLAND SPA SALON
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
                <strong>Bluewaters Island Spa Salon</strong>{" "}
                project, reflecting a refined approach to luxury
                beauty and wellness interior design in one of
                Dubai's most exclusive waterfront destinations.
                Located on Bluewaters Island, a prestigious
                lifestyle destination known for its contemporary
                architecture and premium hospitality experiences,
                this spa and salon design concept embraces
                sophistication, relaxation, and modern elegance.
                Our design philosophy focuses on creating
                a welcoming environment where beauty treatments,
                personal wellness, and architectural refinement
                come together. Through thoughtful spatial
                planning, carefully coordinated materials,
                and a distinctive luxury aesthetic, the
                project explores how an upscale beauty salon
                can offer an exclusive experience while
                maintaining practical functionality for
                professional beauty and wellness services.
              </p>

              <p>
                As a specialist in{" "}
                <b className="text-[#caa193]">
                  <a href="https://wedointerior.ae/beauty-salon-interior-design-dubai">
                    luxury beauty salon interior design in Dubai
                  </a>
                </b>
                , WE DO understands that an exceptional
                spa and salon environment requires more
                than attractive decoration. The Bluewaters
                Island Spa Salon design direction emphasizes
                an atmosphere of calm, privacy, and
                understated luxury. Our approach considers
                elegant reception areas, comfortable beauty
                treatment stations, sophisticated hair
                styling zones, manicure and pedicure areas,
                and private wellness treatment rooms.
                Thoughtfully selected furnishings,
                refined interior finishes, balanced
                lighting, and coordinated architectural
                features help establish a harmonious
                design identity. By carefully considering
                the movement of clients and technicians,
                waiting areas, treatment privacy,
                and professional equipment requirements,
                we aim to create beauty salon interiors
                that feel luxurious while supporting
                efficient daily operations.
              </p>

              <p>
                Creating a premium spa and beauty salon
                demands close attention to both
                aesthetics and technical performance.
                Through our comprehensive{" "}
                <b className="text-[#caa193]">
                  <a href="https://wedointerior.ae/fit-out-company-dubai">
                    salon interior fit-out services in Dubai
                  </a>
                </b>
                , WE DO brings together interior design
                expertise, bespoke joinery, premium
                material selection, lighting coordination,
                and practical construction solutions.
                Specialized beauty and wellness
                environments require appropriate
                ventilation, moisture-resistant
                materials, hygienic surfaces, organized
                storage, and carefully positioned
                electrical and plumbing connections.
                Treatment areas also benefit from
                adjustable task lighting, acoustic
                comfort, and functional layouts
                that support professional services.
                Our integrated approach considers
                these essential requirements alongside
                the overall architectural character,
                helping create environments that
                combine refined luxury with
                practical salon functionality
                and long-term durability.
              </p>

              <p>
                Whether you are planning a luxury
                spa salon on Bluewaters Island,
                developing a premium beauty lounge,
                renovating an established salon,
                or seeking experienced beauty
                salon fit-out contractors in Dubai,
                WE DO provides tailored interior
                design solutions for your business.
                Our services address the requirements
                of sophisticated hair salons,
                nail studios, eyelash and eyebrow
                treatment areas, facial rooms,
                and exclusive wellness environments.
                From initial space planning and
                interior concepts to custom furniture,
                bespoke cabinetry, detailed finishes,
                and technical fit-out coordination,
                we focus on delivering environments
                that reflect the individual identity
                of each beauty brand. Our commitment
                to craftsmanship, comfort, and
                functional design helps salon
                owners develop memorable spaces
                that enhance the customer experience
                and complement the luxury lifestyle
                of Bluewaters Island, Dubai.
              </p>
            </div>
          </div>

          {/* Image */}
          <figure className="w-full lg:w-1/2">
            <Image
              src="/images/1sl-4.png"
              alt="Bluewaters Island Spa Salon luxury beauty and wellness interior design in Dubai"
              title="Bluewaters Island Spa Salon Interior Design Dubai"
              width={800}
              height={500}
              loading="lazy"
              className="w-full h-auto object-cover"
            />

            <figcaption className="sr-only">
              Bluewaters Island Spa Salon interior
              design project exploring luxury
              beauty and wellness spaces with
              a refined contemporary design
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
          BLUEWATERS ISLAND SPA SALON INTERIOR GALLERY
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
