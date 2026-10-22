"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const galleryImages = [
  {
    src: "/images/1ofc-1.png",
    alt: "Dubai Marina Real Estate Office commercial interior design project, gallery view one",
    title: "Dubai Marina Real Estate Office - Interior Design View 01",
    description: "Project gallery perspective for Dubai Marina Real Estate Office, a client-oriented commercial workplace."
  },
  {
    src: "/images/1ofc-2.png",
    alt: "Real estate workplace interior in Dubai Marina, project gallery view two",
    title: "Dubai Marina Real Estate Office - Interior Design View 02",
    description: "A second visual perspective on the Dubai Marina real estate office design concept."
  },
  {
    src: "/images/1ofc-3.png",
    alt: "Dubai Marina property agency office interior design, gallery view three",
    title: "Dubai Marina Real Estate Office - Interior Design View 03",
    description: "Project image illustrating the professional design direction for a Dubai Marina property office."
  },
  {
    src: "/images/1ofc-4.png",
    alt: "Commercial interior design for Dubai Marina real estate business, gallery view four",
    title: "Dubai Marina Real Estate Office - Interior Design View 04",
    description: "A further gallery image from the commercial real estate workplace project."
  },
  {
    src: "/images/1ofc-5.png",
    alt: "Dubai Marina Real Estate Office interior design, project gallery view five",
    title: "Dubai Marina Real Estate Office - Interior Design View 05",
    description: "Design portfolio view from the Dubai Marina Real Estate Office commercial project."
  },
  {
    src: "/images/1ofc-6.png",
    alt: "Professional property consultancy workplace in Dubai Marina, gallery view six",
    title: "Dubai Marina Real Estate Office - Interior Design View 06",
    description: "Project perspective presenting a workplace intended for real estate professionals and clients."
  },
  {
    src: "/images/1ofc-7.png",
    alt: "Dubai Marina commercial real estate office design, project gallery view seven",
    title: "Dubai Marina Real Estate Office - Interior Design View 07",
    description: "Another view of the Dubai Marina Real Estate Office interior design project."
  },
  {
    src: "/images/1ofc-8.png",
    alt: "Real estate client-facing office interior in Dubai Marina, gallery view eight",
    title: "Dubai Marina Real Estate Office - Interior Design View 08",
    description: "Gallery perspective from a professional property-sector commercial workspace."
  },
  {
    src: "/images/1ofc-9.png",
    alt: "Dubai Marina property office commercial interior, project gallery view nine",
    title: "Dubai Marina Real Estate Office - Interior Design View 09",
    description: "Commercial design portfolio image for the Dubai Marina Real Estate Office project."
  },
  {
    src: "/images/1ofc-10.png",
    alt: "WE DO real estate office interior design in Dubai Marina, gallery view ten",
    title: "Dubai Marina Real Estate Office - Interior Design View 10",
    description: "An additional project perspective from WE DO Interior Design & Fitout."
  },
  {
    src: "/images/1ofc-11.png",
    alt: "Dubai Marina Real Estate Office design project, final gallery view eleven",
    title: "Dubai Marina Real Estate Office - Interior Design View 11",
    description: "Final portfolio gallery image from the Dubai Marina Real Estate Office project."
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
        HOME &gt; PROJECTS &gt; DUBAI MARINA REAL ESTATE OFFICE
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
            DESIGNED TO INSPIRE CLIENT CONFIDENCE:
          </p>
          <h1 className="text-sm sm:text-2xl md:text-3xl font-conthrax tracking-widest text-white mt-1">
           DUBAI MARINA REAL ESTATE OFFICE
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
                Dubai Marina Real Estate Office brings a client-focused
                perspective to commercial interior design in one of Dubai&apos;s
                prominent waterfront business districts. In real estate, an
                office is more than a place to work: it sets the tone for
                introductions, conversations and important property decisions.
                The design narrative therefore prioritises a welcoming first
                impression, an organised professional identity and a balance
                between client interaction and focused daily work.
              </p>
              <p>
                For this Dubai Marina project, WE DO Interior Design &amp;
                Fitout explores how a real estate workplace can support
                property consultations, confidential discussions and team
                coordination within a cohesive commercial setting. Clear
                spatial planning, comfortable client experiences and a
                considered visual character inform the approach, without
                sacrificing practical usability. Explore our{' '}
                <a
                  href="https://wedointerior.ae/office-interior-design-dubai"
                  className="font-semibold underline underline-offset-2"
                >
                  office interior design services in Dubai
                </a>{' '}
                to learn how we shape workplaces around different businesses.
              </p>
            </div>
          </div>

          {/* Image */}
          <figure className="w-full lg:w-1/2">
            <Image
              src="/images/1ofc-2.png"
              alt="Dubai Marina Real Estate Office commercial interior design project for a property business"
              title="Dubai Marina Real Estate Office - Commercial Workplace Design"
              width={800}
              height={500}
              loading="lazy"
              className="w-full h-auto object-cover"
            />
            <figcaption className="sr-only">
              A project image from the Dubai Marina Real Estate Office commercial interior design gallery by WE DO Interior Design &amp; Fitout.
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
          DUBAI MARINA REAL ESTATE OFFICE INTERIOR DESIGN GALLERY
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