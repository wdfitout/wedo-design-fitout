"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const galleryImages = [
  {
    src: "/images/1ofc-1.png",
    alt: "Dubai Media City Creative Office interior design project - gallery image 1",
    title: "Dubai Media City Creative Office - Interior Design View 01",
    description: "An overview image from the Dubai Media City Creative Office project gallery."
  },
  {
    src: "/images/1ofc-2.png",
    alt: "Creative workplace interior design in Dubai Media City - gallery image 2",
    title: "Dubai Media City Creative Office - Interior Design View 02",
    description: "A portfolio perspective from a creative commercial office in Dubai Media City."
  },
  {
    src: "/images/1ofc-3.png",
    alt: "Dubai Media City modern creative office design - gallery image 3",
    title: "Dubai Media City Creative Office - Interior Design View 03",
    description: "Project image presenting the creative office interior design direction."
  },
  {
    src: "/images/1ofc-4.png",
    alt: "Commercial creative workspace in Dubai Media City - gallery image 4",
    title: "Dubai Media City Creative Office - Interior Design View 04",
    description: "A further interior portfolio image from the Dubai Media City office project."
  },
  {
    src: "/images/1ofc-5.png",
    alt: "Creative business office interior in Dubai Media City - gallery image 5",
    title: "Dubai Media City Creative Office - Interior Design View 05",
    description: "Project gallery view highlighting the creative workplace design theme."
  },
  {
    src: "/images/1ofc-6.png",
    alt: "Dubai Media City contemporary office interiors - gallery image 6",
    title: "Dubai Media City Creative Office - Interior Design View 06",
    description: "An additional perspective from the contemporary creative office design gallery."
  },
  {
    src: "/images/1ofc-7.png",
    alt: "Dubai Media City Creative Office commercial project - gallery image 7",
    title: "Dubai Media City Creative Office - Interior Design View 07",
    description: "Portfolio image from the Dubai Media City commercial interiors project."
  },
  {
    src: "/images/1ofc-8.png",
    alt: "Creative office environment in Dubai Media City - gallery image 8",
    title: "Dubai Media City Creative Office - Interior Design View 08",
    description: "Design gallery perspective showing the creative office project."
  },
  {
    src: "/images/1ofc-9.png",
    alt: "Dubai Media City office interior design portfolio - gallery image 9",
    title: "Dubai Media City Creative Office - Interior Design View 09",
    description: "A project image documenting the Dubai Media City creative workplace concept."
  },
  {
    src: "/images/1ofc-10.png",
    alt: "WE DO creative office design in Dubai Media City - gallery image 10",
    title: "Dubai Media City Creative Office - Interior Design View 10",
    description: "Portfolio perspective for the creative office project by WE DO Interior Design & Fitout."
  },
  {
    src: "/images/1ofc-11.png",
    alt: "Dubai Media City Creative Office project gallery - image 11",
    title: "Dubai Media City Creative Office - Interior Design View 11",
    description: "The final gallery image from the Dubai Media City Creative Office portfolio."
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
    setCurrent((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
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
        HOME &gt; PROJECTS &gt; DUBAI MEDIA CITY CREATIVE OFFICE
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
            A SPACE FOR IDEAS TO TAKE SHAPE:
          </p>
          <h1 className="text-sm sm:text-2xl md:text-3xl font-conthrax tracking-widest text-white mt-1">
           DUBAI MEDIA CITY CREATIVE OFFICE
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
                Dubai Media City Creative Office presents an expressive yet
                practical approach to commercial interior design for businesses
                built around ideas and communication. Set in Dubai Media City,
                the project explores how a creative workplace can support
                teamwork, focused tasks and a distinctive brand identity.
                Its design direction brings together a clear spatial concept
                and a contemporary professional character, creating an office
                narrative shaped by the needs of creative work.
              </p>
              <p>
                WE DO Interior Design &amp; Fitout approaches this Dubai Media
                City project with an emphasis on adaptable workspace planning,
                comfortable day-to-day use and a setting that encourages the
                exchange of ideas. The concept considers the relationship
                between collaboration, individual concentration and client
                interactions without losing a cohesive visual identity.
                Discover our{' '}
                <a
                  href="https://wedointerior.ae/office-interior-design-dubai"
                  className="font-semibold underline underline-offset-2"
                >
                  office interior design services in Dubai
                </a>{' '}
                for more on our approach to industry-specific workplaces.
              </p>
            </div>
          </div>

          {/* Image */}
          <figure className="w-full lg:w-1/2">
            <Image
              src="/images/1ofc-2.png"
              alt="Dubai Media City Creative Office commercial interior design project in Dubai"
              title="Dubai Media City Creative Office - Creative Workplace Design"
              width={800}
              height={500}
              loading="lazy"
              className="w-full h-auto object-cover"
            />
            <figcaption className="sr-only">
              A project gallery image for Dubai Media City Creative Office by WE DO Interior Design &amp; Fitout.
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
          DUBAI MEDIA CITY CREATIVE OFFICE INTERIOR DESIGN GALLERY
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((img, idx) => (
            <figure key={idx} className="cursor-pointer overflow-hidden rounded-md">
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
              <figcaption className="sr-only">{img.description}</figcaption>
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