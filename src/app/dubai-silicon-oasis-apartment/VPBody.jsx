"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const galleryImages = [
  {
    src: "/images/apartment-master-bedroom-interior-design-dubai-silicon-oasis.png",
    alt: "Elegant apartment living room with ambient lighting",
    title: "apartment Interior design in Dubai",
    description: "Spacious living area with beige tones and gold accents"
  },
  {
    src: "/images/minimal-modern-apartment-interior-dubai-silicon-oasis.png",
    alt: "Modern apartment design with marble countertops",
    title: "apartment Interior design DSO",
    description: "Modern apartment interior desing services in DUBAi silicon oAsis"
  },
  {
    src: "/images/apartment-dining-area-interior-design-dubai-silicon-oasis.png",
    alt: "Luxury dining with golden fixtures",
    title: "Apartment Dining Area Interior Design in DSO",
    description: "Stylish Dining Area of an apartment interior design"
  },
  {
    src: "/images/minimal-modern-apartment-kitchen-design-dubai-silicon-oasis.png",
    alt: "kitchen interior with neutral tones and wall paneling in Dubai",
    title: "Modern Kitchen Interior design in Dubai SIlicon Oasis",
    description: "Modern apartment Kitchen Interior design in Dubai SIlicon Oasis"
  },
  {
    src: "/images/modern-bathroom-interior-design-in-Dubai-Silicon-oasis.png",
    alt: "modern bathroom interior design of an apartment in DSO",
    title: "modern bathroom interior design Dubai",
    description: "modern bathroom interior design Dubai in DSO"
  },
  {
    src: "/images/interior-design-service-in-silicon-oasis-dubai.png",
    alt: "Private lounge with artistic wall décor and leather seating",
    title: "Apartment Interior services in Dubai Silicon Oasis",
    description: "Best apartment Interior Dubai Silicon Oasis"
  },
    {
    src: "/images/luxury-minimal-master-bedroom-interior-dubai-silicon-oasis.png",
    alt: "master Bedroom interior of apartment in DSO",
    title: "master Bedroom interior of apartment in DSO",
    description: "Master bedroom showcasing custom wood paneling and luxury bedding"
  },
  {
    src: "/images/luxury-walk-in-closet-dubai-apartment.png",
    alt: "walk in closet of apartment Interior in Dubai Silicon oasis",
    title: "walk in closet of apartment Interior in Dubai Silicon oasis",
    description: "walk in closet interior of apartment in Dubai Silicon oasis"
  },
  {
    src: "/images/luxury-apartment-balcony-dubai-modern.png",
    alt: "Balcony of apartment Interior Design project in DSO",
    title: "apartment Interior Design Balcony Image",
    description: "Balcony with sofas and beautiful terrace view in DSO Dubai"
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
        HOME &gt; PROJECTS &gt; DSO APARTMENT
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
            TRANSFORMING LUXURY LIVING:
          </p>
          <h1 className="text-sm sm:text-2xl md:text-3xl font-conthrax tracking-widest text-white mt-1">
          DUBAI SILICON OASIS APARTMENT
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
               In this <b className="text-[#caa193]"><a href="https://wedointerior.ae/apartment-interior-design-dubai">apartment interior design </a></b>project of DSO, we provided Interior Design Service in Silicon Oasis, Dubai. This apartment 
               is Designed and executed by WE DO interiors which is one of the best interior companies in Dubai. Neutral tones,
               custom furniture, marbles flooring and many other factors combine together creating a sophisticated environment. 
               As part of our interior design services, the apartment layout was planned in such a way that it aligns perfectly 
               with Interior Design Dubai standards in UAE.</p>
              <p>
               Known as a Best <b className="text-[#caa193]"><a href="https://wedointerior.ae/">Interior Fit Out Company in Dubai Silicon Oasis</a></b>, Dubai, this project represents our expertise in 
               residential interior design services in Dubai. Our skilled team implemented custom joinery, integrated storage, a 
               feature TV wall with sleek finishes, and quality to place us among the trusted interior fit-out companies in Dubai. 
               Every detail was customized to suit apartment living style in Dubai Silicon Oasis, demonstrating how professional 
               interior design services can enhance residential places through detailed planning, premium materials, and seamless 
               fit-out execution.</p>
            
              
            </div>
          </div>

          {/* Image */}
          <figure className="w-full lg:w-1/2">
            <Image
              src="/images/minimal-modern-apartment-interior-dubai-silicon-oasis.png"
              alt="Luxury aparmment interior with white marble flooring and gold accents"
              title="Modern apartment Interior Design in Dubai Silicon Oasis"
              width={800}
              height={500}
              loading="lazy"
              className="w-full h-auto object-cover"
            />
            <figcaption className="sr-only">
              A spacious modern apartmet interior designed with elegant gold accents, large windows, and premium finishes.
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
         DUBAI SILICON OASIS APARTMENT INTERIOR GALLERY
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
