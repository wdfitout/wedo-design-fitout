
"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const galleryImages = [
  {
    src: "/images/5hl-1.png",
    alt: "DIFC Boutique Hotel luxury interior design Dubai - Gallery 1",
    title: "DIFC Boutique Hotel Interior Gallery 1",
    description:
      "Boutique hospitality interior design project in Dubai International Financial Centre.",
  },
  {
    src: "/images/5hl-2.png",
    alt: "Luxury boutique hotel interior in DIFC Dubai - Gallery 2",
    title: "DIFC Boutique Hotel Interior Gallery 2",
    description:
      "Contemporary boutique hotel interior design with a focus on refined hospitality.",
  },
  {
    src: "/images/5hl-3.png",
    alt: "Premium hotel interior design Dubai International Financial Centre - Gallery 3",
    title: "DIFC Boutique Hotel Interior Gallery 3",
    description:
      "Luxury hospitality interior design for the DIFC Boutique Hotel project.",
  },
  {
    src: "/images/5hl-4.png",
    alt: "DIFC luxury boutique hospitality interior design - Gallery 4",
    title: "DIFC Boutique Hotel Interior Gallery 4",
    description:
      "Boutique hotel design emphasizing distinctive character and guest comfort.",
  },
  {
    src: "/images/5hl-5.png",
    alt: "Elegant boutique hotel interior design DIFC Dubai - Gallery 5",
    title: "DIFC Boutique Hotel Interior Gallery 5",
    description:
      "Refined hospitality interior design for a boutique hotel in DIFC.",
  },
  {
    src: "/images/5hl-6.png",
    alt: "Modern luxury hotel interiors Dubai DIFC - Gallery 6",
    title: "DIFC Boutique Hotel Interior Gallery 6",
    description:
      "Contemporary boutique hospitality design in Dubai's financial district.",
  },
  {
    src: "/images/5hl-7.png",
    alt: "Bespoke boutique hotel interior design in Dubai - Gallery 7",
    title: "DIFC Boutique Hotel Interior Gallery 7",
    description:
      "Distinctive boutique hotel interior concept for a premium hospitality environment.",
  },
  {
    src: "/images/5hl-8.png",
    alt: "DIFC Boutique Hotel interior fit-out Dubai - Gallery 8",
    title: "DIFC Boutique Hotel Interior Gallery 8",
    description:
      "Boutique hospitality interior design combining modern aesthetics and functionality.",
  },
  {
    src: "/images/5hl-9.png",
    alt: "Luxury hospitality interior design DIFC Boutique Hotel - Gallery 9",
    title: "DIFC Boutique Hotel Interior Gallery 9",
    description:
      "Premium boutique hotel interior design project in DIFC, Dubai.",
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
        HOME &gt; PROJECTS &gt; DIFC BOUTIQUE HOTEL
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
            CREATING DISTINCTIVE BOUTIQUE HOSPITALITY:
          </p>

          <h1 className="text-sm sm:text-2xl md:text-3xl font-conthrax tracking-widest text-white mt-1">
            DIFC BOUTIQUE HOTEL
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
                <strong>DIFC Boutique Hotel</strong> project,
                reflecting our passion for creating distinctive
                luxury hospitality environments in Dubai
                International Financial Centre. Situated within
                one of Dubai's most prestigious financial and
                lifestyle destinations, this boutique hotel
                concept embraces contemporary elegance,
                individuality, and sophisticated design.
                Unlike conventional large-scale hotels,
                boutique hospitality places greater emphasis
                on personalized experiences, intimate
                environments, and a unique architectural
                identity. Our design approach focuses on
                balancing these qualities with modern
                comfort and functional excellence.
              </p>

              <p>
                As an experienced{" "}
                <b className="text-[#caa193]">
                  <a href="https://wedointerior.ae/hotel-interior-design-dubai">
                    hotel interior design company in Dubai
                  </a>
                </b>
                , WE DO understands how thoughtful interior
                design contributes to the atmosphere and
                identity of a boutique hospitality property.
                For the DIFC Boutique Hotel, the design
                direction emphasizes carefully considered
                spatial relationships, sophisticated material
                palettes, architectural details, and
                balanced lighting. From inviting reception
                areas and elegant guest accommodation to
                exclusive lounges and intimate hospitality
                spaces, our design philosophy prioritizes
                a cohesive visual experience that feels
                both luxurious and welcoming.
              </p>

              <p>
                Boutique hotel interiors require a careful
                balance between visual sophistication,
                operational efficiency, and lasting quality.
                Through our comprehensive{" "}
                <b className="text-[#caa193]">
                  <a href="https://wedointerior.ae/fit-out-company-dubai">
                    interior fit-out services in Dubai
                  </a>
                </b>
                , WE DO brings together creative design,
                technical planning, premium material
                selection, bespoke joinery, and detailed
                finishing solutions. Our approach considers
                circulation, privacy, acoustics, lighting,
                and the practical needs of hospitality
                operations. These elements help create
                boutique hotel environments that express
                an individual character while supporting
                a comfortable and memorable guest stay.
              </p>

              <p>
                Whether you are developing a luxury boutique
                hotel in DIFC, upgrading an existing hotel
                property, or seeking experienced hospitality
                interior designers in Dubai, WE DO offers
                tailored design and fit-out solutions.
                From boutique guest suites and luxury hotel
                lobbies to reception areas, restaurants,
                and private lounges, we approach every
                hospitality space with creativity and
                attention to detail. Our commitment to
                craftsmanship, functionality, and timeless
                aesthetics helps hotel owners and developers
                establish distinctive destinations that
                reflect their brand identity and meet
                the expectations of modern luxury travelers.
              </p>
            </div>
          </div>

          {/* Image */}
          <figure className="w-full lg:w-1/2">
            <Image
              src="/images/5hl-2.png"
              alt="DIFC Boutique Hotel luxury hospitality interior design project in Dubai"
              title="DIFC Boutique Hotel Interior Design Dubai"
              width={800}
              height={500}
              loading="lazy"
              className="w-full h-auto object-cover"
            />

            <figcaption className="sr-only">
              DIFC Boutique Hotel interior design project
              showcasing luxury boutique hospitality design
              in Dubai International Financial Centre.
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
          DIFC BOUTIQUE HOTEL GALLERY
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
