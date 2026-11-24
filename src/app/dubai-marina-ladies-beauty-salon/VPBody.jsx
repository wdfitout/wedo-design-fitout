
"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const galleryImages = [
  {
    src: "/images/6sl-1.png",
    alt: "Dubai Marina Ladies Beauty Salon luxury interior design - Gallery 1",
    title: "Dubai Marina Ladies Beauty Salon Interior Gallery 1",
    description:
      "Luxury ladies beauty salon interior design project in Dubai Marina.",
  },
  {
    src: "/images/6sl-2.png",
    alt: "Premium ladies salon interior design Dubai Marina - Gallery 2",
    title: "Dubai Marina Ladies Beauty Salon Interior Gallery 2",
    description:
      "Contemporary beauty salon interior design for a premium ladies salon in Dubai Marina.",
  },
  {
    src: "/images/6sl-3.png",
    alt: "Dubai Marina luxury women's beauty lounge interior - Gallery 3",
    title: "Dubai Marina Ladies Beauty Salon Interior Gallery 3",
    description:
      "Sophisticated beauty lounge design emphasizing comfort, privacy, and contemporary elegance.",
  },
  {
    src: "/images/6sl-4.png",
    alt: "Luxury ladies beauty salon interior Dubai Marina - Gallery 4",
    title: "Dubai Marina Ladies Beauty Salon Interior Gallery 4",
    description:
      "Refined beauty salon interior design for the Dubai Marina Ladies Beauty Salon project.",
  },
  {
    src: "/images/6sl-5.png",
    alt: "Modern ladies salon interior design Dubai - Gallery 5",
    title: "Dubai Marina Ladies Beauty Salon Interior Gallery 5",
    description:
      "Modern ladies beauty salon design combining sophisticated aesthetics and functionality.",
  },
  {
    src: "/images/6sl-6.png",
    alt: "Dubai Marina premium women's salon interior - Gallery 6",
    title: "Dubai Marina Ladies Beauty Salon Interior Gallery 6",
    description:
      "Premium beauty salon interior design with a focus on customer comfort and relaxation.",
  },
  {
    src: "/images/6sl-7.png",
    alt: "Elegant ladies beauty salon design Dubai Marina - Gallery 7",
    title: "Dubai Marina Ladies Beauty Salon Interior Gallery 7",
    description:
      "Contemporary luxury salon interior concept for a women's beauty environment.",
  },
  {
    src: "/images/6sl-8.png",
    alt: "Luxury ladies beauty salon fit-out Dubai Marina - Gallery 8",
    title: "Dubai Marina Ladies Beauty Salon Interior Gallery 8",
    description:
      "Sophisticated ladies salon design exploring premium beauty and wellness interiors.",
  },
  {
    src: "/images/6sl-9.png",
    alt: "High-end ladies beauty lounge interior Dubai - Gallery 9",
    title: "Dubai Marina Ladies Beauty Salon Interior Gallery 9",
    description:
      "Elegant beauty lounge interior design inspired by Dubai Marina's luxury lifestyle.",
  },
  {
    src: "/images/6sl-10.png",
    alt: "Dubai Marina Ladies Beauty Salon premium interior design - Gallery 10",
    title: "Dubai Marina Ladies Beauty Salon Interior Gallery 10",
    description:
      "Luxury women's beauty salon interior design project in Dubai Marina, Dubai.",
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
        HOME &gt; PROJECTS &gt; DUBAI MARINA LADIES BEAUTY SALON
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
            DESIGNING EXCLUSIVE LADIES BEAUTY SPACES:
          </p>

          <h1 className="text-sm sm:text-2xl md:text-3xl font-conthrax tracking-widest text-white mt-1">
            DUBAI MARINA LADIES BEAUTY SALON
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
                <strong>Dubai Marina Ladies Beauty Salon</strong>{" "}
                project, exploring a sophisticated approach
                to luxury women's beauty salon interior
                design in one of Dubai's most prestigious
                waterfront communities. Known for its
                contemporary skyline, premium residential
                towers, luxury lifestyle destinations,
                and cosmopolitan atmosphere, Dubai Marina
                provides an inspiring setting for an
                exclusive ladies beauty salon.
                Our design philosophy focuses on
                creating a refined and welcoming
                environment where modern elegance,
                personal privacy, and professional
                beauty services come together.
                Through thoughtful spatial planning,
                carefully selected materials,
                sophisticated furnishings, and
                coordinated architectural details,
                the design approach seeks to
                establish a distinctive beauty
                destination that reflects the
                lifestyle and expectations of
                Dubai Marina's discerning clientele.
              </p>

              <p>
                As a specialist in{" "}
                <b className="text-[#caa193]">
                  <a href="https://wedointerior.ae/beauty-salon-interior-design-dubai">
                    luxury beauty salon interior design in Dubai
                  </a>
                </b>
                , WE DO understands the importance
                of designing ladies salons that
                prioritize customer comfort,
                privacy, and efficient beauty
                service operations. The Dubai
                Marina Ladies Beauty Salon design
                direction considers elegant hair
                styling stations, comfortable
                manicure and pedicure areas,
                private facial treatment rooms,
                specialized eyelash and eyebrow
                service zones, and sophisticated
                reception and waiting lounges.
                A carefully planned interior
                layout helps establish a clear
                relationship between public
                reception spaces and private
                treatment environments.
                Comfortable seating, refined
                mirrors, coordinated lighting,
                and beautifully detailed
                furniture contribute to a
                premium atmosphere. At the
                same time, attention to
                workstation spacing, customer
                movement, and professional
                equipment ensures that the
                salon can deliver an efficient
                and personalized beauty
                experience in a comfortable,
                well-organized setting.
              </p>

              <p>
                Designing an exclusive ladies
                beauty salon requires careful
                consideration of architectural
                detailing, operational efficiency,
                and specialized technical
                requirements. Through our
                comprehensive{" "}
                <b className="text-[#caa193]">
                  <a href="https://wedointerior.ae/fit-out-company-dubai">
                    beauty salon interior fit-out services in Dubai
                  </a>
                </b>
                , WE DO integrates creative
                interior design expertise,
                bespoke joinery, premium
                finishing materials, and
                coordinated technical solutions.
                Luxury beauty salons benefit
                from ergonomic styling
                workstations, professionally
                illuminated mirrors,
                comfortable hair-washing
                stations, dedicated nail
                care areas, and organized
                storage for beauty products
                and professional equipment.
                For ladies salons,
                thoughtfully designed
                partitions, private treatment
                rooms, discreet circulation
                routes, and appropriate
                window treatments can play
                an important role in
                maintaining customer privacy.
                Additional considerations
                include ventilation, acoustic
                comfort, hygienic surfaces,
                plumbing arrangements,
                electrical coordination,
                and durable finishes.
                These elements help establish
                beauty environments that
                combine refined architectural
                aesthetics with the practical
                requirements of modern
                salon operations.
              </p>

              <p>
                Whether you are developing
                a luxury ladies beauty salon
                in Dubai Marina, opening
                an exclusive women's beauty
                lounge, renovating an existing
                salon, or seeking experienced
                salon interior designers
                and fit-out contractors
                in Dubai, WE DO provides
                tailored design solutions
                to meet your business needs.
                Our expertise encompasses
                premium hair styling spaces,
                manicure and pedicure areas,
                private facial rooms,
                eyelash and eyebrow
                treatment stations,
                sophisticated reception
                counters, and comfortable
                customer lounges.
                From initial interior
                concepts and functional
                space planning to bespoke
                furniture, custom cabinetry,
                lighting coordination,
                and detailed interior
                fit-out, our approach
                emphasizes quality,
                comfort, and long-term
                functionality. By combining
                contemporary elegance,
                thoughtful privacy
                considerations, and
                professional craftsmanship,
                we help beauty business
                owners create distinctive
                ladies salon environments
                that strengthen brand
                identity, encourage
                customer loyalty, and
                complement the upscale
                lifestyle of Dubai Marina.
              </p>
            </div>
          </div>

          {/* Image */}
          <figure className="w-full lg:w-1/2">
            <Image
              src="/images/6sl-4.png"
              alt="Dubai Marina Ladies Beauty Salon luxury women's salon interior design project"
              title="Dubai Marina Ladies Beauty Salon Interior Design"
              width={800}
              height={500}
              loading="lazy"
              className="w-full h-auto object-cover"
            />

            <figcaption className="sr-only">
              Dubai Marina Ladies Beauty Salon
              interior design project exploring
              sophisticated women's beauty
              environments, private treatment
              spaces, and contemporary luxury
              salon interiors in Dubai Marina.
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
          DUBAI MARINA LADIES BEAUTY SALON INTERIOR GALLERY
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
