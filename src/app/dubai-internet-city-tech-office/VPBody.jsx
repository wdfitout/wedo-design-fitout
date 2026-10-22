"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const galleryImages = [
  {
    src: "/images/6ofc-1.png",
    alt: "Dubai Internet City Tech Office interior design, contemporary workspace project",
    title: "Dubai Internet City Tech Office - Interior Design View 01",
    description: "Overview of the Dubai Internet City Tech Office project, focused on contemporary commercial workplace design."
  },
  {
    src: "/images/6ofc-2.png",
    alt: "Technology office interior in Dubai Internet City, commercial design perspective",
    title: "Dubai Internet City Tech Office - Interior Design View 02",
    description: "Additional perspective on the technology-focused office interior concept in Dubai Internet City."
  },
  {
    src: "/images/6ofc-3.png",
    alt: "Dubai Internet City modern tech workspace, office interior design project",
    title: "Dubai Internet City Tech Office - Interior Design View 03",
    description: "Modern commercial workplace design for Dubai Internet City Tech Office, viewed from another angle."
  },
  {
    src: "/images/6ofc-4.png",
    alt: "Tech company office design in Dubai Internet City, project gallery image",
    title: "Dubai Internet City Tech Office - Interior Design View 04",
    description: "Project gallery image illustrating the design direction for a technology-sector office in Dubai."
  },
  {
    src: "/images/6ofc-5.png",
    alt: "Contemporary commercial office interiors in Dubai Internet City, tech workspace",
    title: "Dubai Internet City Tech Office - Interior Design View 05",
    description: "Commercial interior design view from the Dubai Internet City Tech Office project."
  },
  {
    src: "/images/6ofc-6.png",
    alt: "Dubai Internet City Tech Office, professional workplace interior perspective",
    title: "Dubai Internet City Tech Office - Interior Design View 06",
    description: "A project perspective highlighting the overall workplace character of Dubai Internet City Tech Office."
  },
  {
    src: "/images/6ofc-7.png",
    alt: "Workplace interior design for technology teams in Dubai Internet City",
    title: "Dubai Internet City Tech Office - Interior Design View 07",
    description: "Visual documentation of the commercial workspace design approach for a technology-focused office."
  },
  {
    src: "/images/6ofc-8.png",
    alt: "Dubai Internet City office project, modern technology workplace design",
    title: "Dubai Internet City Tech Office - Interior Design View 08",
    description: "Another gallery perspective from the contemporary Dubai Internet City Tech Office project."
  },
  {
    src: "/images/6ofc-9.png",
    alt: "Commercial office interior design at Dubai Internet City, technology workplace",
    title: "Dubai Internet City Tech Office - Interior Design View 09",
    description: "Gallery image from the Dubai Internet City technology workplace interior design project."
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
        HOME &gt; PROJECTS &gt; DUBAI INTERNET CITY TECH OFFICE
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
            WORKSPACES DESIGNED FOR INNOVATION:
          </p>
          <h1 className="text-sm sm:text-2xl md:text-3xl font-conthrax tracking-widest text-white mt-1">
           DUBAI INTERNET CITY TECH OFFICE
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
                Dubai Internet City Tech Office explores a future-focused
                approach to commercial workplace design in one of Dubai&apos;s
                established technology districts. The project narrative
                centres on the different ways digital teams work: independent
                concentration, informal exchange and purposeful collaboration.
                A clear contemporary design language brings these activities
                together, creating a professional setting that feels energetic
                without becoming visually distracting.
              </p>
              <p>
                For Dubai Internet City Tech Office, WE DO Interior Design
                &amp; Fitout places equal importance on workplace identity and
                everyday usability. Thoughtful zoning, intuitive circulation
                and a coherent interior direction guide the concept, with
                flexibility in mind as working patterns evolve. The result is
                a tech-oriented commercial design approach that values focus,
                connection and a sense of progress. Discover our{' '}
                <a
                  href="https://wedointerior.ae/office-interior-design-dubai"
                  className="font-semibold underline underline-offset-2"
                >
                  office interior design services in Dubai
                </a>{' '}
                for more on how we develop practical, distinctive workplaces.
              </p>
            </div>
          </div>

          {/* Image */}
          <figure className="w-full lg:w-1/2">
            <Image
              src="/images/6ofc-2.png"
              alt="Dubai Internet City Tech Office contemporary commercial workplace interior design"
              title="Dubai Internet City Tech Office - Technology Workplace Design"
              width={800}
              height={500}
              loading="lazy"
              className="w-full h-auto object-cover"
            />
            <figcaption className="sr-only">
              A project image from the Dubai Internet City Tech Office interior design gallery by WE DO Interior Design &amp; Fitout.
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
          DUBAI INTERNET CITY TECH OFFICE INTERIOR DESIGN GALLERY
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