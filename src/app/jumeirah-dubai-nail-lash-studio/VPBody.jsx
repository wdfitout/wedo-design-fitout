
"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const galleryImages = [
  {
    src: "/images/7sl-1.png",
    alt: "Jumeirah Dubai Nail and Lash Studio luxury interior design - Gallery 1",
    title: "Jumeirah Dubai Nail & Lash Studio Interior Gallery 1",
    description:
      "Luxury nail and eyelash studio interior design project in Jumeirah, Dubai.",
  },
  {
    src: "/images/7sl-2.png",
    alt: "Premium nail and lash salon interior design Jumeirah - Gallery 2",
    title: "Jumeirah Dubai Nail & Lash Studio Interior Gallery 2",
    description:
      "Contemporary nail and lash studio interior design in Jumeirah, Dubai.",
  },
  {
    src: "/images/7sl-3.png",
    alt: "Jumeirah luxury nail and eyelash beauty studio design - Gallery 3",
    title: "Jumeirah Dubai Nail & Lash Studio Interior Gallery 3",
    description:
      "Sophisticated nail and eyelash studio design emphasizing comfort and elegance.",
  },
  {
    src: "/images/7sl-4.png",
    alt: "Luxury nail and lash studio interior Jumeirah Dubai - Gallery 4",
    title: "Jumeirah Dubai Nail & Lash Studio Interior Gallery 4",
    description:
      "Refined beauty salon interior design for a premium nail and lash studio.",
  },
  {
    src: "/images/7sl-5.png",
    alt: "Modern nail and eyelash studio interior design Dubai - Gallery 5",
    title: "Jumeirah Dubai Nail & Lash Studio Interior Gallery 5",
    description:
      "Modern nail and lash studio design combining beauty, privacy, and functionality.",
  },
  {
    src: "/images/7sl-6.png",
    alt: "Jumeirah premium nail salon interior design - Gallery 6",
    title: "Jumeirah Dubai Nail & Lash Studio Interior Gallery 6",
    description:
      "Premium beauty studio interior design with a contemporary luxury approach.",
  },
  {
    src: "/images/7sl-7.png",
    alt: "Luxury lash and eyebrow studio design Jumeirah - Gallery 7",
    title: "Jumeirah Dubai Nail & Lash Studio Interior Gallery 7",
    description:
      "Specialized beauty studio interior design for nail, lash, and brow services.",
  },
  {
    src: "/images/7sl-8.png",
    alt: "Jumeirah nail and lash beauty salon fit-out Dubai - Gallery 8",
    title: "Jumeirah Dubai Nail & Lash Studio Interior Gallery 8",
    description:
      "Contemporary nail and lash salon interior design focused on customer comfort.",
  },
  {
    src: "/images/7sl-9.png",
    alt: "Elegant nail and eyelash extension studio interior - Gallery 9",
    title: "Jumeirah Dubai Nail & Lash Studio Interior Gallery 9",
    description:
      "Luxury beauty studio interior concept for professional nail and eyelash treatments.",
  },
  {
    src: "/images/7sl-10.png",
    alt: "Jumeirah Dubai Nail and Lash Studio premium interior design - Gallery 10",
    title: "Jumeirah Dubai Nail & Lash Studio Interior Gallery 10",
    description:
      "Luxury nail and lash studio interior design project in Jumeirah, Dubai.",
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
        HOME &gt; PROJECTS &gt; JUMEIRAH DUBAI NAIL &amp; LASH STUDIO
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
            CREATING EXCLUSIVE NAIL &amp; LASH BEAUTY SPACES:
          </p>

          <h1 className="text-sm sm:text-2xl md:text-3xl font-conthrax tracking-widest text-white mt-1">
            JUMEIRAH DUBAI NAIL &amp; LASH STUDIO
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
                <strong>Jumeirah Dubai Nail & Lash Studio</strong>{" "}
                project, exploring a sophisticated approach
                to luxury nail salon and eyelash studio
                interior design in one of Dubai's most
                prestigious residential and lifestyle
                destinations. Jumeirah, known for its
                elegant villas, established neighborhoods,
                exclusive beauty establishments, and
                refined lifestyle experiences, offers
                an inspiring setting for a premium
                nail and lash studio. Our design
                philosophy focuses on creating a
                sophisticated beauty environment
                where contemporary elegance, personal
                comfort, and specialized beauty
                treatments come together.
                Through thoughtful space planning,
                carefully selected furnishings,
                and coordinated architectural details,
                the design approach establishes
                a welcoming atmosphere while
                addressing the functional needs
                of professional nail, eyelash,
                and eyebrow treatment services.
              </p>

              <p>
                As a specialist in{" "}
                <b className="text-[#caa193]">
                  <a href="https://wedointerior.ae/beauty-salon-interior-design-dubai">
                    luxury beauty salon interior design in Dubai
                  </a>
                </b>
                , WE DO understands that specialized
                nail and lash studios require a
                different approach from conventional
                beauty salons. The Jumeirah Dubai
                Nail & Lash Studio design direction
                considers elegant manicure
                workstations, comfortable pedicure
                seating, dedicated eyelash extension
                treatment beds, and private eyebrow
                styling areas. Each treatment
                environment benefits from careful
                spatial arrangements that promote
                customer comfort and professional
                efficiency. For eyelash extension
                services, ergonomic reclining
                treatment beds, adjustable
                precision lighting, organized
                beauty tools, and comfortable
                technician seating play an
                important role. Manicure and
                pedicure areas benefit from
                practical work surfaces,
                accessible equipment storage,
                and appropriate task lighting.
                By coordinating these specialized
                areas within a cohesive luxury
                interior design, our approach
                creates an inviting beauty
                studio atmosphere that supports
                privacy, relaxation, and
                personalized customer care.
              </p>

              <p>
                Creating a premium nail and
                eyelash studio demands careful
                attention to hygiene, lighting,
                technical infrastructure, and
                everyday operational requirements.
                Through our comprehensive{" "}
                <b className="text-[#caa193]">
                  <a href="https://wedointerior.ae/fit-out-company-dubai">
                    beauty salon interior fit-out services in Dubai
                  </a>
                </b>
                , WE DO integrates architectural
                design, bespoke joinery, premium
                interior finishes, and specialized
                beauty equipment requirements.
                Professional nail treatment
                areas benefit from suitable
                ventilation, localized dust
                extraction, hygienic surfaces,
                and well-positioned electrical
                connections. Eyelash and
                eyebrow treatment areas
                require comfortable beds,
                adjustable neutral-white
                precision lighting, organized
                storage, and sufficient
                circulation for technicians.
                Our design considerations
                also include acoustic privacy,
                ergonomic furniture,
                plumbing requirements,
                durable materials, and
                efficient service workflows.
                These essential elements
                help create beauty environments
                that balance refined
                architectural aesthetics
                with practical performance,
                customer comfort, and
                long-term operational
                functionality.
              </p>

              <p>
                Whether you are developing
                a luxury nail and lash
                studio in Jumeirah,
                opening a specialized
                eyelash extension salon,
                planning a premium
                manicure and pedicure
                studio, or renovating
                an existing beauty
                establishment, WE DO
                offers tailored interior
                design and fit-out
                solutions across Dubai.
                Our expertise supports
                the planning of elegant
                nail care workstations,
                private lash treatment
                rooms, eyebrow styling
                areas, comfortable
                reception lounges,
                bespoke product displays,
                and functional storage
                environments. From
                initial interior
                concepts and space
                planning to custom
                furniture, lighting
                coordination, joinery,
                and detailed fit-out
                solutions, our focus
                is on developing
                distinctive spaces
                that express each
                beauty brand's identity.
                By combining quality
                craftsmanship, refined
                aesthetics, and
                professional functionality,
                we help beauty business
                owners create memorable
                nail and lash studio
                environments that
                encourage relaxation,
                enhance customer
                satisfaction, and
                complement the
                exclusive lifestyle
                of Jumeirah, Dubai.
              </p>
            </div>
          </div>

          {/* Image */}
          <figure className="w-full lg:w-1/2">
            <Image
              src="/images/7sl-4.png"
              alt="Jumeirah Dubai Nail and Lash Studio luxury beauty salon interior design project"
              title="Jumeirah Dubai Nail & Lash Studio Interior Design"
              width={800}
              height={500}
              loading="lazy"
              className="w-full h-auto object-cover"
            />

            <figcaption className="sr-only">
              Jumeirah Dubai Nail and Lash Studio
              interior design project exploring
              premium nail care environments,
              eyelash and eyebrow treatment
              spaces, and contemporary luxury
              beauty salon interiors in Dubai.
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
          JUMEIRAH DUBAI NAIL &amp; LASH STUDIO INTERIOR GALLERY
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
