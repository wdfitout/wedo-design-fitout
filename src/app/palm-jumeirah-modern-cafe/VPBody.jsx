
"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const galleryImages = [
  {
    src: "/images/2cf-1.png",
    alt: "Palm Jumeirah Modern Cafe interior design Dubai - Gallery 1",
    title: "Palm Jumeirah Modern Cafe Interior Gallery 1",
    description:
      "Contemporary cafe interior design concept for Palm Jumeirah, Dubai.",
  },
  {
    src: "/images/2cf-2.png",
    alt: "Luxury modern cafe design Palm Jumeirah - Gallery 2",
    title: "Palm Jumeirah Modern Cafe Interior Gallery 2",
    description:
      "Modern coffee shop interior design inspired by Palm Jumeirah's premium lifestyle.",
  },
  {
    src: "/images/2cf-3.png",
    alt: "Premium coffee shop interior design Dubai - Gallery 3",
    title: "Palm Jumeirah Modern Cafe Interior Gallery 3",
    description:
      "Refined hospitality interior design for a contemporary cafe in Dubai.",
  },
  {
    src: "/images/2cf-4.png",
    alt: "Palm Jumeirah contemporary cafe interiors - Gallery 4",
    title: "Palm Jumeirah Modern Cafe Interior Gallery 4",
    description:
      "Contemporary cafe design concept balancing aesthetics and functionality.",
  },
  {
    src: "/images/2cf-5.png",
    alt: "Modern luxury cafe interior Palm Jumeirah Dubai - Gallery 5",
    title: "Palm Jumeirah Modern Cafe Interior Gallery 5",
    description:
      "Premium modern cafe interior design for a luxury island destination.",
  },
  {
    src: "/images/2cf-6.png",
    alt: "Elegant cafe and coffee shop design Palm Jumeirah - Gallery 6",
    title: "Palm Jumeirah Modern Cafe Interior Gallery 6",
    description:
      "Elegant coffee shop interior concept emphasizing comfort and contemporary design.",
  },
  {
    src: "/images/2cf-7.png",
    alt: "Palm Jumeirah premium cafe interior design - Gallery 7",
    title: "Palm Jumeirah Modern Cafe Interior Gallery 7",
    description:
      "Premium hospitality interior design exploring modern cafe environments.",
  },
  {
    src: "/images/2cf-8.png",
    alt: "Luxury coffee shop interior design Palm Jumeirah - Gallery 8",
    title: "Palm Jumeirah Modern Cafe Interior Gallery 8",
    description:
      "Contemporary coffee shop design with a refined hospitality-inspired approach.",
  },
  {
    src: "/images/2cf-9.png",
    alt: "Modern cafe fit-out and interior design Dubai - Gallery 9",
    title: "Palm Jumeirah Modern Cafe Interior Gallery 9",
    description:
      "Modern cafe interior design concept emphasizing efficient space planning.",
  },
  {
    src: "/images/2cf-10.png",
    alt: "Palm Jumeirah Modern Cafe luxury interior design - Gallery 10",
    title: "Palm Jumeirah Modern Cafe Interior Gallery 10",
    description:
      "Premium modern cafe interior design concept on Palm Jumeirah, Dubai.",
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
        HOME &gt; PROJECTS &gt; PALM JUMEIRAH MODERN CAFE
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
            CREATING CONTEMPORARY WATERFRONT CAFE EXPERIENCES:
          </p>

          <h1 className="text-sm sm:text-2xl md:text-3xl font-conthrax tracking-widest text-white mt-1">
            PALM JUMEIRAH MODERN CAFE
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
                <strong>Palm Jumeirah Modern Cafe</strong>{" "}
                design concept, exploring a sophisticated
                approach to contemporary cafe interior
                design within one of Dubai's most
                prestigious island destinations.
                Internationally recognized for its
                luxury waterfront residences,
                exclusive resorts, premium dining
                destinations, and distinctive
                coastal lifestyle, Palm Jumeirah
                offers an inspiring setting for
                a beautifully designed modern
                coffee shop. Our design
                philosophy focuses on creating
                an inviting hospitality
                environment where contemporary
                architecture, refined aesthetics,
                and everyday customer comfort
                come together. The concept
                emphasizes balanced interior
                proportions, carefully selected
                materials, elegant furnishings,
                and thoughtful lighting.
                Inspired by the relaxed yet
                sophisticated atmosphere
                of Palm Jumeirah, the design
                direction seeks to establish
                a distinctive cafe experience
                that feels welcoming,
                contemporary, and memorable.
              </p>

              <p>
                As a specialist in{" "}
                <b className="text-[#caa193]">
                  <a href="https://wedointerior.ae/cafe-interior-design-dubai">
                    luxury cafe interior design in Dubai
                  </a>
                </b>
                , WE DO understands that a
                successful modern coffee
                shop must combine an
                attractive visual identity
                with an enjoyable and
                convenient customer journey.
                The Palm Jumeirah Modern
                Cafe design direction
                considers an inviting
                entrance, a professionally
                organized coffee bar,
                elegant pastry presentation,
                comfortable seating areas,
                and thoughtfully planned
                customer circulation.
                Carefully coordinated
                counter positions can
                support efficient ordering,
                takeaway collections,
                and barista operations.
                A variety of seating
                arrangements, from intimate
                tables to comfortable lounge
                settings, can accommodate
                different customer needs.
                Where the premises permit
                outdoor seating, a coordinated
                indoor-outdoor design can
                further complement Palm
                Jumeirah's relaxed lifestyle.
                Contemporary furnishings,
                refined surface finishes,
                and carefully balanced
                neutral-white lighting
                contribute to a cohesive
                atmosphere that supports
                casual meetings, relaxed
                coffee breaks, and
                extended dining experiences.
              </p>

              <p>
                Developing a premium
                cafe requires attention
                to both architectural
                presentation and
                practical hospitality
                operations. Through
                our comprehensive{" "}
                <b className="text-[#caa193]">
                  <a href="https://wedointerior.ae/fit-out-company-dubai">
                    cafe interior fit-out services in Dubai
                  </a>
                </b>
                , WE DO brings together
                functional space planning,
                bespoke joinery,
                custom furniture,
                carefully coordinated
                finishes, and technical
                fit-out considerations.
                Modern coffee bars
                require appropriately
                positioned worktops,
                durable counter surfaces,
                organized equipment
                connections, practical
                storage, and suitable
                electrical and plumbing
                provisions. Customer
                areas benefit from
                comfortable circulation,
                durable flooring,
                accessible seating,
                and thoughtfully
                positioned lighting.
                Service zones also
                require consideration
                for ventilation,
                hygiene, drainage,
                and efficient staff
                movement. Where
                applicable, outdoor
                hospitality environments
                demand appropriate
                material selection
                to withstand Dubai's
                climate and coastal
                exposure. Our approach
                focuses on creating
                cohesive interiors
                that balance elegant
                design with the
                durability and
                operational efficiency
                required for modern
                cafe businesses.
              </p>

              <p>
                Whether you are planning
                a modern cafe on
                Palm Jumeirah,
                establishing a premium
                specialty coffee shop,
                developing a boutique
                waterfront dining
                concept, or renovating
                an existing hospitality
                venue, WE DO offers
                tailored interior
                design and fit-out
                solutions across Dubai.
                Our approach supports
                the development of
                distinctive coffee
                bars, elegant customer
                lounges, comfortable
                dining arrangements,
                bespoke furniture,
                refined architectural
                features, and
                coordinated hospitality
                interiors. From
                initial design
                concepts and functional
                space planning to
                custom joinery,
                material selection,
                lighting coordination,
                and detailed fit-out
                planning, we focus
                on creating spaces
                that reflect each
                cafe's brand identity
                and commercial
                requirements.
                By combining
                contemporary aesthetics,
                functional layouts,
                quality craftsmanship,
                and thoughtful
                detailing, we help
                cafe owners shape
                inviting hospitality
                environments that
                encourage customers
                to relax, socialize,
                and return for
                memorable experiences
                within Palm Jumeirah,
                Dubai.
              </p>
            </div>
          </div>

          {/* Featured Image */}
          <figure className="w-full lg:w-1/2">
            <Image
              src="/images/2cf-5.png"
              alt="Palm Jumeirah Modern Cafe premium contemporary interior design concept"
              title="Palm Jumeirah Modern Cafe Interior Design"
              width={800}
              height={500}
              loading="lazy"
              className="w-full h-auto object-cover"
            />

            <figcaption className="sr-only">
              Palm Jumeirah Modern Cafe
              interior design concept
              exploring contemporary
              coffee shop environments,
              refined hospitality
              aesthetics, functional
              cafe planning, and
              premium modern interiors
              in Dubai.
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
          PALM JUMEIRAH MODERN CAFE INTERIOR GALLERY
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
