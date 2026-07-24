"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const galleryImages = [
  {
    src: "/images/acacia-dubai-hills-walk-in-wardrobe.png",
    alt: "Custom walk-in wardrobe with bespoke cabinetry and integrated lighting at Acacia Dubai Hills 2-bedroom apartment, Dubai",
    title: "Luxury Walk-in Wardrobe Design Acacia Dubai Hills Apartment",
    description: "Custom walk-in wardrobe featuring floor-to-ceiling cabinetry, integrated lighting, and premium storage solutions for a luxury 2-bedroom apartment at Acacia Dubai Hills."
  },
  {
    src: "/images/acacia-dubai-hills-dining-room.png",
    alt: "Modern dining room interior design for a 2-bedroom apartment at Acacia Dubai Hills, Dubai",
    title: "Modern Dining Room Interior Acacia Dubai Hills Apartment",
    description: "Elegant dining room with bespoke wooden furniture, pendant lighting, and contemporary finishes designed for a luxury apartment in Acacia Dubai Hills."
  },
  {
    src: "/images/acacia-dubai-hills-balcony.png",
    alt: "Luxury balcony seating area with panoramic Dubai skyline view at Acacia Dubai Hills 2-bedroom apartment",
    title: "Luxury balcony seating area Acacia Dubai Hills",
    description: "Contemporary outdoor balcony with premium seating, timber decking, and panoramic views of the Dubai skyline."
  },
  {
    src: "/images/acacia-dubai-hills-bathroom.png",
    alt: "Luxury bathroom interior with marble walls, floating vanity, and premium fixtures at Acacia Dubai Hills apartment",
    title: "Luxury Bathroom Interior Acacia Dubai Hills Apartment",
    description: "Premium bathroom featuring marble finishes, floating vanity, backlit mirrors, and modern fixtures for a sophisticated apartment interior."
  },
  {
    src: "/images/acacia-dubai-hills-master-bedroom-modern.png",
    alt: "Modern master bedroom interior featuring bespoke joinery at Acacia Dubai Hills 2-bedroom apartment, Dubai",
    title: "Modern Master Bedroom Design Acacia Dubai Hills Apartment",
    description: "Contemporary master bedroom with bespoke headboard, ambient lighting, custom joinery, and elegant neutral finishes."
  },
  {
    src: "/images/acacia-dubai-hills-master-bedroom-luxury.png",
    alt: "Luxury master bedroom interior design for a 2-bedroom apartment at Acacia Dubai Hills, Dubai",
    title: "Luxury Master Bedroom Interior | Acacia Dubai Hills Apartment",
    description: "Elegant master bedroom with decorative wall panels, statement chandelier, ambient lighting, and custom furnishings."
  },
    {
    src: "/images/acacia-dubai-hills-kitchen.png",
    alt: "Modern open-plan kitchen with marble island and bespoke cabinetry at Acacia Dubai Hills apartment, Dubai",
    title: "Contemporary Kitchen Design | Acacia Dubai Hills Apartment",
    description: "Open-plan kitchen with marble island, custom cabinetry, integrated appliances, and luxury finishes overlooking the Dubai skyline."
  },
  {
    src: "/images/acacia-dubai-hills-living-room.png",
    alt: "Luxury living room interior with custom furniture and panoramic city views at Acacia Dubai Hills apartment",
    title: "Luxury Living Room Interior | Acacia Dubai Hills Apartment",
    description: "Spacious living room featuring custom furniture, panoramic windows, premium finishes, and contemporary interior styling."
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
        HOME &gt; PROJECTS &gt; ACACIA DUBAI HILLS 2 BEDROOM APARTMENT
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
            TRANSFORMING LUXURY APARTMENTS:
          </p>
          <h1 className="text-sm sm:text-2xl md:text-3xl font-conthrax tracking-widest text-white mt-1">
           ACACIA DUBAI HILLS BEDROOM APARTMENT
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
           <p>Our  Acacia Dubai Hills <b><a href="https://wedointerior.ae/royal-atlantis-2-bedroom-apartment">2 Bedroom Apartment project 
           highlights the modern living of Dubai </a></b>with a refined two-bedroom apartment design in Dubai. As a full-service interior design firm, WE DO Interior Design & Fitout provides a minimalist
             modern apartment interior design that enhances the space, light and comfort. This project shows our expertise as one
             of the leading interior design companies in Dubai Hills, specializing in bespoke services according to our client’s
             lifestyle.
           </p>
           <p>Every step from concept to completion, our team managed the <b><a href="https://wedointerior.ae/apartment-interior-design-dubai">fitout service of apartment interior design Dubai </a></b> while 
            ensuring that every element we used in the design is functional and stylish.Whether for a two-bedroom or duplex 
            apartment, or through our role as a trusted apartment renovation company in Dubai, we bring unique value to Dubai 
            Hills Apartments with innovative design solutions.
           </p>
            
            </div>
          </div>

          {/* Image */}
          <figure className="w-full lg:w-1/2">
            <Image
              src="/images/acdh (4).png"
              alt="Luxury villa interior with white marble flooring and gold accents"
              title="Modern Villa Interior Design in Dubai"
              width={800}
              height={500}
              loading="lazy"
              className="w-full h-auto object-cover"
            />
            <figcaption className="sr-only">
              A spacious modern villa interior designed with elegant gold accents, large windows, and premium finishes.
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
          ACACIA DUBAI HILLS APARTMENT INTERIOR DESIGN GALLERY
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
