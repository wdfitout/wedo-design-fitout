"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const galleryImages = [
  {
    src: "/images/1ofc-1.png",
    alt: "Jumeirah Lake Towers consultancy office interior design project, image 1",
    title: "Jumeirah Lake Towers Consultancy Office - Interior Design View 01",
    description: "First portfolio view of the Jumeirah Lake Towers consultancy office project in Dubai."
  },
  {
    src: "/images/1ofc-2.png",
    alt: "Consultancy workplace interior at Jumeirah Lakes Towers Dubai, image 2",
    title: "Jumeirah Lake Towers Consultancy Office - Interior Design View 02",
    description: "Another perspective from the client-facing consultancy workplace project gallery."
  },
  {
    src: "/images/1ofc-3.png",
    alt: "Commercial consultancy office design in JLT Dubai, image 3",
    title: "Jumeirah Lake Towers Consultancy Office - Interior Design View 03",
    description: "Project gallery view documenting the consultancy office interior design concept."
  },
  {
    src: "/images/1ofc-4.png",
    alt: "Jumeirah Lake Towers professional office interior project, image 4",
    title: "Jumeirah Lake Towers Consultancy Office - Interior Design View 04",
    description: "Additional interior view from the consultancy office project in Jumeirah Lakes Towers."
  },
  {
    src: "/images/1ofc-5.png",
    alt: "Consultancy business workplace design in Jumeirah Lakes Towers, image 5",
    title: "Jumeirah Lake Towers Consultancy Office - Interior Design View 05",
    description: "Portfolio image relating to the professional setting of the consultancy workspace."
  },
  {
    src: "/images/1ofc-6.png",
    alt: "JLT Dubai consultancy office interior design portfolio, image 6",
    title: "Jumeirah Lake Towers Consultancy Office - Interior Design View 06",
    description: "Further design perspective from the Jumeirah Lake Towers consultancy office gallery."
  },
  {
    src: "/images/1ofc-7.png",
    alt: "Dubai consultancy office commercial interior project, image 7",
    title: "Jumeirah Lake Towers Consultancy Office - Interior Design View 07",
    description: "Gallery image presenting another perspective on the consultancy office project."
  },
  {
    src: "/images/1ofc-8.png",
    alt: "Professional consulting workplace interior in JLT Dubai, image 8",
    title: "Jumeirah Lake Towers Consultancy Office - Interior Design View 08",
    description: "Commercial office portfolio view featuring the Jumeirah Lake Towers project."
  },
  {
    src: "/images/1ofc-9.png",
    alt: "Jumeirah Lake Towers consultancy office design gallery, image 9",
    title: "Jumeirah Lake Towers Consultancy Office - Interior Design View 09",
    description: "Interior project image for the JLT consultancy workplace design concept."
  },
  {
    src: "/images/1ofc-10.png",
    alt: "WE DO consultancy office design Jumeirah Lakes Towers, image 10",
    title: "Jumeirah Lake Towers Consultancy Office - Interior Design View 10",
    description: "Design portfolio view from the consultancy office project by WE DO Interior Design & Fitout."
  },
  {
    src: "/images/1ofc-11.png",
    alt: "Jumeirah Lake Towers consultancy office project in Dubai, image 11",
    title: "Jumeirah Lake Towers Consultancy Office - Interior Design View 11",
    description: "Final gallery view documenting the professional consultancy office design project."
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
        HOME &gt; PROJECTS &gt; JUMEIRAH LAKE TOWERS CONSULTANCY OFFICE
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
            SPACES BUILT AROUND TRUST AND EXPERTISE:
          </p>
          <h1 className="text-sm sm:text-2xl md:text-3xl font-conthrax tracking-widest text-white mt-1">
           JUMEIRAH LAKE TOWERS CONSULTANCY OFFICE
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
                Jumeirah Lake Towers Consultancy Office presents a considered
                approach to professional workplace design in Jumeirah Lakes Towers
                (JLT), Dubai. For a consultancy, the office plays an important
                role in both daily operations and the client experience. The
                project concept balances a composed business identity with the
                different demands of focused work, collaborative thinking and
                purposeful advisory conversations.
              </p>
              <p>
                WE DO Interior Design &amp; Fitout approaches this commercial
                interior with attention to practical office planning, clear
                movement through the workplace and a welcoming atmosphere for
                visitors. The design direction considers how consultants meet
                clients, exchange ideas and carry out independent work while
                maintaining a cohesive professional character. Explore our{' '}
                <a
                  href="https://wedointerior.ae/office-interior-design-dubai"
                  className="font-semibold underline underline-offset-2"
                >
                  office interior design services in Dubai
                </a>{' '}
                to learn more about our approach to tailored work environments.
              </p>
            </div>
          </div>

          {/* Image */}
          <figure className="w-full lg:w-1/2">
            <Image
              src="/images/1ofc-2.png"
              alt="Jumeirah Lake Towers Consultancy Office commercial interior design project in JLT Dubai"
              title="Jumeirah Lake Towers Consultancy Office - Professional Workplace Design"
              width={800}
              height={500}
              loading="lazy"
              className="w-full h-auto object-cover"
            />
            <figcaption className="sr-only">
              A project gallery image for Jumeirah Lake Towers Consultancy Office by WE DO Interior Design &amp; Fitout.
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
          JUMEIRAH LAKE TOWERS CONSULTANCY OFFICE INTERIOR DESIGN GALLERY
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