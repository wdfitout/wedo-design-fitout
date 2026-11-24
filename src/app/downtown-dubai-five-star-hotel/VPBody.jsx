
"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const galleryImages = [
  {
    src: "/images/8hl-1.png",
    alt: "Downtown Dubai Five Star Hotel luxury interior design - Gallery 1",
    title: "Downtown Dubai Five Star Hotel Interior Gallery 1",
    description:
      "Luxury hospitality interior design for the Downtown Dubai Five Star Hotel project.",
  },
  {
    src: "/images/8hl-2.png",
    alt: "Five star hotel interior design Downtown Dubai - Gallery 2",
    title: "Downtown Dubai Five Star Hotel Interior Gallery 2",
    description:
      "Premium five-star hospitality interior design in Downtown Dubai.",
  },
  {
    src: "/images/8hl-3.png",
    alt: "Luxury hospitality interior design Downtown Dubai - Gallery 3",
    title: "Downtown Dubai Five Star Hotel Interior Gallery 3",
    description:
      "Contemporary luxury hotel interior design in Dubai's Downtown district.",
  },
  {
    src: "/images/8hl-4.png",
    alt: "Downtown Dubai premium hotel interior project - Gallery 4",
    title: "Downtown Dubai Five Star Hotel Interior Gallery 4",
    description:
      "Sophisticated hospitality interior design for a luxury hotel project.",
  },
  {
    src: "/images/8hl-5.png",
    alt: "Five star luxury hotel hospitality design Dubai - Gallery 5",
    title: "Downtown Dubai Five Star Hotel Interior Gallery 5",
    description:
      "High-end hotel interior design with a focus on guest comfort and elegance.",
  },
  {
    src: "/images/8hl-6.png",
    alt: "Luxury hotel interior architecture Downtown Dubai - Gallery 6",
    title: "Downtown Dubai Five Star Hotel Interior Gallery 6",
    description:
      "Contemporary interior design for a premium hospitality environment in Dubai.",
  },
  {
    src: "/images/8hl-7.png",
    alt: "Downtown Dubai five star hospitality interior - Gallery 7",
    title: "Downtown Dubai Five Star Hotel Interior Gallery 7",
    description:
      "Refined luxury hospitality design for the Downtown Dubai hotel project.",
  },
  {
    src: "/images/8hl-8.png",
    alt: "Premium five star hotel fit-out interior Dubai - Gallery 8",
    title: "Downtown Dubai Five Star Hotel Interior Gallery 8",
    description:
      "Luxury hotel interior design emphasizing sophisticated hospitality spaces.",
  },
  {
    src: "/images/8hl-9.png",
    alt: "Downtown Dubai Five Star Hotel interior design - Gallery 9",
    title: "Downtown Dubai Five Star Hotel Interior Gallery 9",
    description:
      "Premium interior design for a five-star hotel in Downtown Dubai.",
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
        HOME &gt; PROJECTS &gt; DOWNTOWN DUBAI FIVE STAR HOTEL
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
            ELEVATING FIVE-STAR HOSPITALITY DESIGN:
          </p>

          <h1 className="text-sm sm:text-2xl md:text-3xl font-conthrax tracking-widest text-white mt-1">
            DOWNTOWN DUBAI FIVE STAR HOTEL
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
                WE DO Interior Design & Fitout introduces the{" "}
                <strong>Downtown Dubai Five Star Hotel</strong>{" "}
                project, reflecting our vision for exceptional
                luxury hospitality interiors in one of the
                world's most prestigious urban destinations.
                Located in Downtown Dubai, a district celebrated
                for its iconic architecture, world-class
                attractions, and luxury lifestyle, this project
                emphasizes the relationship between sophisticated
                interior design and memorable guest experiences.
                Our approach to five-star hotel design brings
                together architectural elegance, contemporary
                comfort, and refined hospitality aesthetics,
                creating an environment that complements the
                expectations of international luxury travelers.
              </p>

              <p>
                As a specialist in{" "}
                <b className="text-[#caa193]">
                  <a href="https://wedointerior.ae/hotel-interior-design-dubai">
                    luxury hotel interior design in Dubai
                  </a>
                </b>
                , WE DO understands that exceptional hospitality
                begins with thoughtful spatial planning and
                attention to detail. The Downtown Dubai Five Star
                Hotel project embraces a design philosophy
                centered on elegance, comfort, and a distinctive
                sense of arrival. From grand hotel lobby
                concepts and sophisticated reception areas to
                luxury guest suites, executive lounges, fine
                dining environments, and exclusive hospitality
                facilities, our design approach considers every
                aspect of the guest journey. Carefully coordinated
                materials, ambient lighting, architectural
                features, and bespoke interior elements help
                establish a cohesive five-star atmosphere.
              </p>

              <p>
                Delivering high-end hospitality interiors requires
                an understanding of both aesthetic excellence
                and the technical requirements of hotel
                environments. Through our comprehensive{" "}
                <b className="text-[#caa193]">
                  <a href="https://wedointerior.ae/fit-out-company-dubai">
                    hotel fit-out services in Dubai
                  </a>
                </b>
                , WE DO combines creative design expertise
                with practical construction and interior
                finishing solutions. Our approach incorporates
                premium material selection, custom joinery,
                carefully planned lighting, detailed ceiling
                treatments, and durable architectural finishes.
                Considerations such as acoustics, circulation,
                maintenance, and guest privacy are equally
                important in achieving interiors that support
                efficient hotel operations while maintaining
                the refined appearance expected of luxury
                five-star hospitality spaces.
              </p>

              <p>
                Whether you are developing a five-star hotel
                in Downtown Dubai, upgrading an established
                luxury property, or planning a premium
                hospitality destination elsewhere in the city,
                WE DO provides tailored interior design and
                fit-out solutions. Our expertise covers luxury
                hotel renovations, bespoke guest suite
                interiors, hotel lobby design, hospitality
                lounges, restaurants, and other premium
                guest facilities. With an emphasis on quality
                craftsmanship, functional planning, and
                timeless aesthetics, we help hotel owners
                and developers create distinctive hospitality
                environments that reflect their brand identity,
                elevate guest satisfaction, and contribute
                lasting value to Dubai's luxury hotel market.
              </p>
            </div>
          </div>

          {/* Image */}
          <figure className="w-full lg:w-1/2">
            <Image
              src="/images/8hl-2.png"
              alt="Downtown Dubai Five Star Hotel luxury hospitality interior design project"
              title="Downtown Dubai Five Star Hotel Interior Design"
              width={800}
              height={500}
              loading="lazy"
              className="w-full h-auto object-cover"
            />

            <figcaption className="sr-only">
              Downtown Dubai Five Star Hotel interior design
              project featuring premium luxury hospitality
              design in Downtown Dubai.
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
          DOWNTOWN DUBAI FIVE STAR HOTEL GALLERY
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
