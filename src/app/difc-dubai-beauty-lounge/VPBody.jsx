
"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const galleryImages = [
  {
    src: "/images/3sl-1.png",
    alt: "DIFC Dubai Beauty Lounge luxury interior design - Gallery 1",
    title: "DIFC Dubai Beauty Lounge Interior Gallery 1",
    description:
      "Luxury beauty lounge interior design project in Dubai International Financial Centre.",
  },
  {
    src: "/images/3sl-2.png",
    alt: "Premium beauty lounge interior design DIFC Dubai - Gallery 2",
    title: "DIFC Dubai Beauty Lounge Interior Gallery 2",
    description:
      "Contemporary luxury beauty lounge interior design in DIFC.",
  },
  {
    src: "/images/3sl-3.png",
    alt: "DIFC luxury beauty salon interior Dubai - Gallery 3",
    title: "DIFC Dubai Beauty Lounge Interior Gallery 3",
    description:
      "Sophisticated beauty salon interior design for a premium DIFC beauty lounge.",
  },
  {
    src: "/images/3sl-4.png",
    alt: "Elegant beauty lounge interior design DIFC - Gallery 4",
    title: "DIFC Dubai Beauty Lounge Interior Gallery 4",
    description:
      "Refined luxury beauty lounge interior design in Dubai's financial district.",
  },
  {
    src: "/images/3sl-5.png",
    alt: "DIFC Dubai premium beauty lounge interior - Gallery 5",
    title: "DIFC Dubai Beauty Lounge Interior Gallery 5",
    description:
      "Contemporary beauty lounge design combining elegance, privacy, and comfort.",
  },
  {
    src: "/images/3sl-6.png",
    alt: "Luxury beauty salon design Dubai International Financial Centre - Gallery 6",
    title: "DIFC Dubai Beauty Lounge Interior Gallery 6",
    description:
      "Premium beauty salon interior design with a sophisticated architectural approach.",
  },
  {
    src: "/images/3sl-7.png",
    alt: "Modern beauty lounge interior design DIFC Dubai - Gallery 7",
    title: "DIFC Dubai Beauty Lounge Interior Gallery 7",
    description:
      "Elegant contemporary beauty lounge interior concept for DIFC Dubai.",
  },
  {
    src: "/images/3sl-8.png",
    alt: "DIFC luxury beauty salon fit-out interior - Gallery 8",
    title: "DIFC Dubai Beauty Lounge Interior Gallery 8",
    description:
      "Luxury beauty lounge interior design emphasizing aesthetics and functionality.",
  },
  {
    src: "/images/3sl-9.png",
    alt: "Exclusive beauty lounge interior design Dubai DIFC - Gallery 9",
    title: "DIFC Dubai Beauty Lounge Interior Gallery 9",
    description:
      "Sophisticated beauty and personal care interior design in DIFC Dubai.",
  },
  {
    src: "/images/3sl-10.png",
    alt: "DIFC Dubai Beauty Lounge premium interior design - Gallery 10",
    title: "DIFC Dubai Beauty Lounge Interior Gallery 10",
    description:
      "Luxury beauty lounge interior design project in Dubai International Financial Centre.",
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
        HOME &gt; PROJECTS &gt; DIFC DUBAI BEAUTY LOUNGE
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
            ELEVATING LUXURY BEAUTY LOUNGE INTERIORS:
          </p>

          <h1 className="text-sm sm:text-2xl md:text-3xl font-conthrax tracking-widest text-white mt-1">
            DIFC DUBAI BEAUTY LOUNGE
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
                <strong>DIFC Dubai Beauty Lounge</strong>{" "}
                project, exploring a sophisticated approach
                to luxury beauty salon interior design
                in the heart of Dubai International
                Financial Centre. Recognized for its
                premium commercial developments,
                world-class dining, contemporary
                architecture, and exclusive lifestyle
                destinations, DIFC provides an ideal
                setting for an elegant beauty lounge.
                Our design philosophy focuses on
                creating refined environments that
                combine modern luxury, personal
                comfort, and professional functionality.
                Through thoughtful space planning,
                carefully coordinated materials,
                and distinctive architectural details,
                the project demonstrates how a
                premium beauty lounge can establish
                a memorable identity while offering
                a calm and welcoming experience
                within Dubai's dynamic financial district.
              </p>

              <p>
                As a specialist in{" "}
                <b className="text-[#caa193]">
                  <a href="https://wedointerior.ae/beauty-salon-interior-design-dubai">
                    luxury beauty salon interior design in Dubai
                  </a>
                </b>
                , WE DO understands the importance of
                creating spaces that reflect the
                expectations of a discerning clientele.
                The DIFC Dubai Beauty Lounge design
                direction emphasizes understated
                elegance, carefully considered
                lighting, premium furniture, and
                cohesive interior finishes.
                Our approach considers sophisticated
                reception areas, comfortable styling
                stations, elegant beauty treatment
                environments, and private service
                areas. Each zone requires a balance
                of visual appeal and practical
                functionality. Thoughtful spatial
                arrangements help ensure seamless
                customer movement, comfortable
                waiting experiences, and efficient
                workflows for beauty professionals.
                These design principles contribute
                to an exclusive atmosphere where
                privacy, convenience, and
                personalized beauty services
                remain central to the
                customer experience.
              </p>

              <p>
                Creating an exclusive beauty lounge
                requires detailed attention to
                architectural design, technical
                planning, and premium finishing.
                Through our comprehensive{" "}
                <b className="text-[#caa193]">
                  <a href="https://wedointerior.ae/fit-out-company-dubai">
                    beauty salon interior fit-out services in Dubai
                  </a>
                </b>
                , WE DO integrates creative interior
                design expertise with bespoke joinery,
                coordinated lighting solutions,
                quality materials, and practical
                construction requirements.
                Premium beauty environments benefit
                from ergonomic treatment stations,
                custom storage cabinetry, refined
                product displays, hygienic surfaces,
                and carefully planned service areas.
                Specialized lighting plays an
                important role in supporting
                professional beauty treatments
                while maintaining a comfortable
                atmosphere. Equally important
                are appropriate ventilation,
                electrical coordination, plumbing
                provisions, acoustic comfort,
                and efficient circulation.
                Our integrated approach considers
                these essential requirements
                alongside sophisticated aesthetics,
                helping establish interiors
                designed for both an exceptional
                customer experience and
                long-term operational efficiency.
              </p>

              <p>
                Whether you are developing a
                premium beauty lounge in DIFC,
                opening an exclusive hair and
                beauty salon, renovating an existing
                beauty studio, or searching for
                experienced salon fit-out contractors
                in Dubai, WE DO provides tailored
                interior design solutions.
                Our expertise supports the design
                of elegant reception environments,
                sophisticated hair styling areas,
                manicure and pedicure zones,
                private beauty treatment rooms,
                and luxury customer lounges.
                From initial design concepts
                and space planning to bespoke
                furniture, custom joinery,
                lighting, and detailed
                fit-out coordination, we focus
                on creating distinctive
                environments that reflect
                each beauty brand's identity.
                By combining refined aesthetics,
                quality craftsmanship, and
                functional planning, we help
                beauty business owners develop
                sophisticated spaces that
                enhance customer satisfaction
                and complement the exclusive
                lifestyle of Dubai International
                Financial Centre.
              </p>
            </div>
          </div>

          {/* Image */}
          <figure className="w-full lg:w-1/2">
            <Image
              src="/images/3sl-4.png"
              alt="DIFC Dubai Beauty Lounge luxury beauty salon interior design project"
              title="DIFC Dubai Beauty Lounge Interior Design"
              width={800}
              height={500}
              loading="lazy"
              className="w-full h-auto object-cover"
            />

            <figcaption className="sr-only">
              DIFC Dubai Beauty Lounge interior design
              project exploring sophisticated beauty
              salon environments and contemporary
              luxury interiors in Dubai International
              Financial Centre.
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
          DIFC DUBAI BEAUTY LOUNGE INTERIOR GALLERY
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
