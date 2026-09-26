"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const galleryImages = [
  {
    src: "/images/district-one-3-bedroom-contemporary-villa-exterior.webp",
    alt: "Contemporary three-bedroom villa exterior in District One Dubai",
    title: "District One 3-Bedroom Contemporary Villa Exterior",
    description:
      "Contemporary two-storey villa exterior in District One with a travertine facade, private infinity pool and landscaped garden",
  },
  {
    src: "/images/district-one-3-bedroom-contemporary-villa-living-room.webp",
    alt: "Contemporary living room in a three-bedroom District One villa",
    title: "District One Contemporary Villa Living Room",
    description:
      "Double-height living room featuring a travertine feature wall, linear fireplace, walnut staircase and views toward the pool",
  },
  {
    src: "/images/district-one-3-bedroom-contemporary-villa-majlis.webp",
    alt: "Contemporary majlis in a District One villa",
    title: "District One Contemporary Villa Majlis",
    description:
      "Contemporary majlis with sand-colored seating, walnut wall panels, bronze detailing and a symmetrical reception layout",
  },
  {
    src: "/images/district-one-3-bedroom-contemporary-villa-dining-room.webp",
    alt: "Contemporary dining room in a District One villa",
    title: "District One Contemporary Villa Dining Room",
    description:
      "Elegant dining area with a solid walnut table, olive bouclé chairs, bronze pendant lighting and a travertine-topped sideboard",
  },
  {
    src: "/images/district-one-3-bedroom-contemporary-villa-kitchen.webp",
    alt: "Contemporary luxury kitchen in a District One villa",
    title: "District One Contemporary Villa Kitchen",
    description:
      "Contemporary villa kitchen with dark walnut cabinetry, a monolithic travertine island and integrated appliances",
  },
  {
    src: "/images/district-one-3-bedroom-contemporary-villa-master-bedroom.webp",
    alt: "Contemporary master bedroom in a District One villa",
    title: "District One Contemporary Villa Master Bedroom",
    description:
      "Luxury master bedroom with a full-width walnut headboard wall, sand linen bedding and views over the landscaped garden",
  },
  {
    src: "/images/district-one-3-bedroom-contemporary-villa-second-bedroom.webp",
    alt: "Contemporary second bedroom in a District One villa",
    title: "District One Contemporary Villa Second Bedroom",
    description:
      "Refined guest bedroom with a charcoal upholstered headboard, travertine bedside tables, walnut desk and bronze lighting",
  },
  {
    src: "/images/district-one-3-bedroom-contemporary-villa-third-bedroom.webp",
    alt: "Contemporary third bedroom in a District One villa",
    title: "District One Contemporary Villa Third Bedroom",
    description:
      "Contemporary children's bedroom with twin beds, custom walnut storage, a reading nook and muted olive and sand textiles",
  },
  {
    src: "/images/district-one-3-bedroom-contemporary-villa-master-bathroom.webp",
    alt: "Contemporary master bathroom in a District One villa",
    title: "District One Contemporary Villa Master Bathroom",
    description:
      "Luxury master bathroom featuring warm travertine surfaces, a freestanding stone bathtub, walnut vanity and brushed bronze fittings",
  },
  {
    src: "/images/district-one-3-bedroom-contemporary-villa-walk-in-wardrobe.webp",
    alt: "Contemporary walk-in wardrobe in a District One villa",
    title: "District One Contemporary Villa Walk-In Wardrobe",
    description:
      "Bespoke walk-in wardrobe with walnut cabinetry, bronze-framed glass doors, integrated LED lighting and a central travertine island",
  },
  {
    src: "/images/district-one-3-bedroom-contemporary-villa-entrance-foyer.webp",
    alt: "Double-height entrance foyer in a District One villa",
    title: "District One Contemporary Villa Entrance Foyer",
    description:
      "Double-height villa entrance with a dark walnut pivot door, travertine flooring, sculptural bronze console and skylight",
  },
  {
    src: "/images/district-one-3-bedroom-contemporary-villa-outdoor-terrace.webp",
    alt: "Contemporary outdoor terrace at a District One villa",
    title: "District One Contemporary Villa Outdoor Terrace",
    description:
      "Luxury pool terrace with a travertine deck, built-in outdoor seating, walnut-tone pergola and outdoor kitchen",
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
        HOME &gt; FEATURES &gt; VILLA INTERIOR DESIGN
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
            DISTRICT ONE CONTEMPORARY VILLA
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
            At WE DO Interior Design & Fitout, we recently completed a stunning District One villa interior design in Dubai, 
            our team transformed this <b className="text-[#caa193]"><a href="https://wedointerior.ae/district-1-mbr-city-contemporary-villa">District 1 contemporary villa, MBR City</a></b> into a most modern and comfortable space. Our 
            vision for this District 1 community of Mohammed Bin Rashid was to design the interiors that blend comfort, 
            functionality and elegance while reflecting the uniqueness and identity of Homeowners.
            </p>

            <p>
              As a <b className="text-[#caa193]"><a href="https://wedointerior.ae/villa-projects">leading provider of bespoke villa interior design in Dubai</a></b>, 
              we specialize in offering complete villa interior design services that cover every detail of the villas in MBR.
              This project puts light on our expertise in providing luxury interior design solutions for MBR City, featuring premium 
              materials, open layouts, seamless integration of modern technology and custom-made furniture.
            </p>

            <p>
              As a <b className="text-[#caa193]"><a href="https://wedointerior.ae/villa-construction-dubai">trusted interior fitout & villa construction company in Dubai</a></b>, UAE,  we also provide comprehensive fit-out and 
              villa construction services while ensuring the accuracy and quality in every step from initial to final. Known as 
              the best villa interior design company in Dubai, our skilled residential interior designers in Dubai continue to set 
              new standards in design excellence. Whether it’s working on MBR City District 1 villas or other villa interiors in 
              Dubai, our mission is to create timeless homes that perfectly combine luxury and lifestyle. Explore the full project 
              below:
            </p>
            </div>
          </div>

          {/* Image */}
          <figure className="w-full lg:w-1/2">
            <Image
              src="/images/district-one-3-bedroom-contemporary-villa-kitchen.webp"
              alt="Contemporary luxury kitchen in a District One villa"
              title="District One Contemporary Villa Kitchen"
              width={800}
              height={500}
              loading="lazy"
              className="w-full h-auto object-cover"
            />
            <figcaption className="sr-only">
             Contemporary villa kitchen with dark walnut cabinetry, a monolithic travertine island and integrated appliances.
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
                  DISTRICT ONE CONTEMPORARY VILLA GALLERY
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
