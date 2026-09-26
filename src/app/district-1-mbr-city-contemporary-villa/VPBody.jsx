"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const galleryImages = [
  {
    src: "/images/district-one-villa-home-office-green-wall.png",
    alt: "Home office with built-in oak shelving and LED lighting facing a green wall, District One villa, MBR City",
    title: "Home Office with Green Wall View, District One Villa",
    description: "Home office with built-in oak shelving and LED strip lighting, looking onto a green wall through full-height glazing"
  },
  {
    src: "/images/district-one-villa-utility-room-fitted-joinery.png",
    alt: "Laundry room with full-height fitted joinery and stacked washer-dryer, District One contemporary villa",
    title: "Laundry Room with Fitted Joinery, District One Villa",
    description: "Laundry area with full-height handleless joinery made in WE DO's in-house joinery factory"
  },
  {
    src: "/images/district-one-villa-master-bedroom-wall-panelling.png",
    alt: "Master bedroom with upholstered beige wall panelling and cove lighting, District One villa, MBR City",
    title: "Master Bedroom with Wall Panelling, District One Villa",
    description: "Master bedroom with upholstered wall panelling, cove lighting, a lounge chair and layered soft fabrics"
  },
  {
    src: "/images/district-one-villa-second-bedroom-tray-ceiling.png",
    alt: "Second bedroom with tray ceiling, cove lighting and garden view, District One contemporary villa",
    title: "Second Bedroom with Tray Ceiling, District One Villa",
    description: "Second bedroom with a tray ceiling, soft neutral tones and floor-to-ceiling windows onto the garden"
  },
  {
    src: "/images/district-one-villa-dining-pendant-lights.png",
    alt: "Dining area with glass table and cluster of pendant lights, District One contemporary villa, MBR City",
    title: "Dining Area with Pendant Lights, District One Villa",
    description: "Dining area beside the living room, with a glass dining table under a sculptural cluster of pendant lights"
  },
  {
    src: "/images/district-one-villa-double-height-living-glass-staircase.png",
    alt: "Double-height living room with glass staircase and low sectional sofa, District One villa, MBR City",
    title: "Double-Height Living Room with Glass Staircase, District One Villa",
    description: "Double-height living room with a glass staircase keeping the garden view open, a low sectional sofa and round coffee table"
  },
  {
    src: "/images/district-one-villa-skylit-entrance-corridor.png",
    alt: "Skylit entrance corridor with marble-look flooring and statement artwork, District One villa",
    title: "Skylit Entrance Corridor, District One Villa",
    description: "Entrance corridor lit by a skylight, with marble-look flooring and a single statement artwork leading to the foyer"
  },
  {
    src: "/images/district-one-villa-foyer-timber-slat-wall.png",
    alt: "Villa foyer with vertical timber slat wall and live-edge console table, District One, MBR City",
    title: "Foyer with Timber Slat Wall, District One Villa",
    description: "Foyer with a vertical timber slat wall, live-edge console and a sculptural pendant light"
  },
  {
    src: "/images/district-one-villa-kitchen-stone-island.png",
    alt: "Contemporary kitchen with stone-clad island, bar seating and handleless cabinetry, District One villa",
    title: "Kitchen with Stone-Clad Island, District One Villa",
    description: "Kitchen with a stone-clad island and integrated seating facing full-height handleless cabinetry"
  }
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

  // 🔄 Ensure scroll starts at top
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = 0;
    }
  }, []);

  // ⌨️ Keyboard navigation
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
        HOME &gt; PROJECTS &gt; DISTRICT 1 MBR CITY CONTEMPORARY VILLA
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
            2-Bedrooms Villa
          </p>

          <h1 className="text-sm sm:text-2xl md:text-3xl font-conthrax tracking-widest text-white mt-1">
           District One Contemporary Villa, <br /> MBR City
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
                WE DO Interior Design & Fit-Out created the interior design of this District One villa in Mohammed Bin Rashid City (MBR City) based on one concept: calm, warm minimalism that allows the architecture and the light to do the work. We have chosen a palette of light oak, soft beige and pale stone, so each room showcases as part of one theme rather than a bundle of various coloured spaces.
              </p>

              <p>
               This double-story living room acts as the focal point of this villa. With a glass stairwell, there is an uninterrupted view to the garden while keeping the seating low through a low-level sectional and a round table to keep the furniture grounded even with such a high ceiling. On the other side of the living room is the dining area which houses a glass table under pendant lights.
              </p>

              <p>
                The entrance is a skylit hallway with marble-like floors leading to the foyer. In the kitchen, a stone clad kitchen island with seating area is facing the handle-less cabinetry.
              </p>

              <p>
                The private rooms follow the same principle. Both bedrooms have upholstery wall panels, cove lighting, and layered textiles. The home office has access to the green wall with its tall windows and has in-built oak shelving and LED strip lighting. Even the laundry area has full-height fitted joinery.
              </p>

              <p>
                We manufactured all cabinetry, wall panelling, and shelving in
                WE DO&apos;s{" "}
                <b className="text-[#caa193]">
                  <a href="https://wedointerior.ae/joinery-company-dubai">
                    in-house joinery factory
                  </a>
                </b>
                . For more of our villa work, see our{" "}
                <b className="text-[#caa193]">
                  <a href="https://wedointerior.ae/villa-interior-design-dubai">
                    villa interior design services in Dubai
                  </a>
                </b>
                , or compare this project with our{" "}
                <b className="text-[#caa193]">
                  <a href="https://wedointerior.ae/district-one-contemporary-villa">
                    District One 3-bedroom contemporary villa
                  </a>
                </b>
                .
              </p>
            </div>
          </div>

          {/* Image */}
          <figure className="w-full lg:w-1/2">
            <Image
              src="/images/district-one-contemporary-villa-exterior-pool.png"
              alt="Luxury villa interior with white marble flooring and gold accents"
              title="Modern Villa Interior Design in Dubai"
              width={800}
              height={500}
              loading="lazy"
              className="w-full h-auto object-cover"
            />

            <figcaption className="sr-only">
              A spacious modern villa interior designed with elegant gold
              accents, large windows, and premium finishes.
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
          DISTRICT 1 MBR CITY CONTEMPORARY VILLA GALLERY
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