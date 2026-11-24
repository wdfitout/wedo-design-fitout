
"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const galleryImages = [
  {
    src: "/images/8sl-1.png",
    alt: "Palm Jumeirah Luxury Beauty Salon interior design Dubai - Gallery 1",
    title: "Palm Jumeirah Luxury Beauty Salon Interior Gallery 1",
    description:
      "Luxury beauty salon interior design project on Palm Jumeirah, Dubai.",
  },
  {
    src: "/images/8sl-2.png",
    alt: "Premium beauty salon interior design Palm Jumeirah - Gallery 2",
    title: "Palm Jumeirah Luxury Beauty Salon Interior Gallery 2",
    description:
      "Exclusive beauty salon interior design for a premium Palm Jumeirah setting.",
  },
  {
    src: "/images/8sl-3.png",
    alt: "Palm Jumeirah high-end beauty salon interiors - Gallery 3",
    title: "Palm Jumeirah Luxury Beauty Salon Interior Gallery 3",
    description:
      "Sophisticated beauty salon interior design emphasizing comfort and elegance.",
  },
  {
    src: "/images/8sl-4.png",
    alt: "Luxury beauty lounge interior Palm Jumeirah Dubai - Gallery 4",
    title: "Palm Jumeirah Luxury Beauty Salon Interior Gallery 4",
    description:
      "Refined luxury beauty salon interior design for Palm Jumeirah.",
  },
  {
    src: "/images/8sl-5.png",
    alt: "Exclusive beauty salon interior design Dubai - Gallery 5",
    title: "Palm Jumeirah Luxury Beauty Salon Interior Gallery 5",
    description:
      "Contemporary luxury beauty salon design focused on personalized client experiences.",
  },
  {
    src: "/images/8sl-6.png",
    alt: "Palm Jumeirah premium beauty lounge design - Gallery 6",
    title: "Palm Jumeirah Luxury Beauty Salon Interior Gallery 6",
    description:
      "Premium beauty lounge interior design combining privacy and contemporary luxury.",
  },
  {
    src: "/images/8sl-7.png",
    alt: "Elegant luxury beauty salon interiors Palm Jumeirah - Gallery 7",
    title: "Palm Jumeirah Luxury Beauty Salon Interior Gallery 7",
    description:
      "Sophisticated beauty salon design with an exclusive hospitality-inspired approach.",
  },
  {
    src: "/images/8sl-8.png",
    alt: "Palm Jumeirah luxury beauty salon fit-out Dubai - Gallery 8",
    title: "Palm Jumeirah Luxury Beauty Salon Interior Gallery 8",
    description:
      "Contemporary beauty salon interior design balancing elegance and functionality.",
  },
  {
    src: "/images/8sl-9.png",
    alt: "High-end beauty lounge interior design Palm Jumeirah - Gallery 9",
    title: "Palm Jumeirah Luxury Beauty Salon Interior Gallery 9",
    description:
      "Premium beauty salon interior concept for an exclusive island lifestyle destination.",
  },
  {
    src: "/images/8sl-10.png",
    alt: "Palm Jumeirah Luxury Beauty Salon premium interior design - Gallery 10",
    title: "Palm Jumeirah Luxury Beauty Salon Interior Gallery 10",
    description:
      "Luxury beauty salon interior design project in Palm Jumeirah, Dubai.",
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
        HOME &gt; PROJECTS &gt; PALM JUMEIRAH LUXURY BEAUTY SALON
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
            REDEFINING EXCLUSIVE BEAUTY &amp; LUXURY:
          </p>

          <h1 className="text-sm sm:text-2xl md:text-3xl font-conthrax tracking-widest text-white mt-1">
            PALM JUMEIRAH LUXURY BEAUTY SALON
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
                <strong>Palm Jumeirah Luxury Beauty Salon</strong>{" "}
                project, exploring an exclusive approach
                to high-end beauty salon interior design
                within one of Dubai's most prestigious
                island destinations. Palm Jumeirah,
                internationally recognized for its
                luxury waterfront residences,
                exclusive resorts, and sophisticated
                lifestyle, provides an exceptional
                setting for a premium beauty
                experience. Our design philosophy
                focuses on creating an elegant
                environment where architectural
                refinement, personalized beauty
                services, and exceptional comfort
                come together. Through thoughtful
                spatial planning, carefully selected
                materials, bespoke interior elements,
                and contemporary luxury aesthetics,
                the design approach establishes a
                distinctive beauty destination
                that complements the exclusive
                character of Palm Jumeirah.
                The vision emphasizes privacy,
                sophistication, and a relaxing
                atmosphere where every client
                can enjoy a premium salon experience.
              </p>

              <p>
                As a specialist in{" "}
                <b className="text-[#caa193]">
                  <a href="https://wedointerior.ae/beauty-salon-interior-design-dubai">
                    luxury beauty salon interior design in Dubai
                  </a>
                </b>
                , WE DO understands that premium
                beauty environments must offer
                much more than attractive
                furnishings and decorative
                finishes. The Palm Jumeirah
                Luxury Beauty Salon design
                direction prioritizes the
                relationship between elegance,
                personal comfort, and
                professional service.
                Our approach considers
                sophisticated reception
                environments, exclusive
                customer lounges, beautifully
                organized hair styling
                stations, comfortable manicure
                and pedicure areas, and
                private beauty treatment
                rooms. Dedicated VIP
                treatment environments
                can provide additional
                privacy for clients seeking
                personalized appointments.
                Thoughtful furniture
                arrangements, refined
                architectural details,
                balanced lighting, and
                cohesive material palettes
                contribute to a luxurious
                atmosphere. Each space is
                planned to support efficient
                service delivery while
                maintaining the tranquil
                and exclusive character
                expected from a premium
                beauty salon on Palm Jumeirah.
              </p>

              <p>
                Designing a luxury beauty
                salon requires careful
                attention to craftsmanship,
                technical planning, and
                long-term operational
                performance. Through our
                comprehensive{" "}
                <b className="text-[#caa193]">
                  <a href="https://wedointerior.ae/fit-out-company-dubai">
                    beauty salon interior fit-out services in Dubai
                  </a>
                </b>
                , WE DO integrates creative
                interior design expertise
                with bespoke joinery,
                premium materials,
                architectural detailing,
                and coordinated technical
                solutions. Luxury beauty
                environments benefit from
                ergonomic styling
                workstations, custom
                cabinetry, organized
                product displays,
                elegant reception
                counters, and comfortable
                treatment furniture.
                Specialized service areas
                require appropriate
                lighting, ventilation,
                plumbing provisions,
                and electrical connections.
                For premium waterfront
                environments such as
                Palm Jumeirah, careful
                consideration of material
                durability, moisture
                resistance, hygienic
                surfaces, and maintenance
                requirements is important.
                Our design approach also
                incorporates acoustic
                comfort, efficient
                circulation, treatment
                privacy, and practical
                service workflows.
                Together, these
                considerations support
                refined interiors that
                balance luxury aesthetics
                with the everyday demands
                of professional beauty
                salon operations.
              </p>

              <p>
                Whether you are developing
                an exclusive luxury beauty
                salon on Palm Jumeirah,
                opening a private VIP
                beauty lounge, renovating
                an established high-end
                salon, or searching for
                experienced beauty salon
                interior designers and
                fit-out contractors in
                Dubai, WE DO offers
                tailored solutions
                to meet your vision.
                Our expertise supports
                the design of sophisticated
                hair styling spaces,
                premium manicure and
                pedicure stations,
                private facial treatment
                rooms, dedicated eyelash
                and eyebrow areas,
                exclusive reception
                lounges, and bespoke
                beauty environments.
                From initial design
                concepts and functional
                space planning to custom
                furniture, joinery,
                lighting coordination,
                and detailed interior
                fit-out, our focus is
                on developing distinctive
                spaces that communicate
                exceptional quality
                and brand identity.
                By combining timeless
                luxury, thoughtful
                functionality, and
                professional craftsmanship,
                we help beauty business
                owners create memorable
                salon environments
                that enhance the client
                experience, support
                personalized services,
                and complement the
                exclusive lifestyle
                of Palm Jumeirah, Dubai.
              </p>
            </div>
          </div>

          {/* Image */}
          <figure className="w-full lg:w-1/2">
            <Image
              src="/images/8sl-4.png"
              alt="Palm Jumeirah Luxury Beauty Salon premium interior design project in Dubai"
              title="Palm Jumeirah Luxury Beauty Salon Interior Design"
              width={800}
              height={500}
              loading="lazy"
              className="w-full h-auto object-cover"
            />

            <figcaption className="sr-only">
              Palm Jumeirah Luxury Beauty Salon
              interior design project exploring
              exclusive beauty environments,
              premium treatment spaces,
              bespoke salon interiors, and
              sophisticated contemporary
              luxury design in Dubai.
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
          PALM JUMEIRAH LUXURY BEAUTY SALON INTERIOR GALLERY
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
