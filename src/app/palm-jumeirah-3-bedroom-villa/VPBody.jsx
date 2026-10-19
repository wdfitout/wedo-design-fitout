"use client";



import Image from "next/image";

import { useRef, useState, useEffect } from "react";

import { motion, useScroll, useTransform } from "framer-motion";



const galleryImages = [

  { src: "/images/md-1.png" },
  { src: "/images/md-2.png" },
  { src: "/images/md-3.png" },
  { src: "/images/md-4.png" },
  { src: "/images/md-5.png" },
  { src: "/images/md-6.png" },
  { src: "/images/md-7.png" },
  { src: "/images/md-8.png" },
  { src: "/images/md-9.png" },
  { src: "/images/md-10.png" },
  { src: "/images/md-11.png" },
  { src: "/images/md-12.png" },
  { src: "/images/md-13.png" },
  { src: "/images/md-14.png" },
  { src: "/images/md-15.png" },
  { src: "/images/md-16.png" },
  { src: "/images/md-17.png" },
  { src: "/images/md-18.png" },
  { src: "/images/md-19.png" },
  { src: "/images/md-20.png" },
  { src: "/images/md-21.png" },
  { src: "/images/md-22.png" },
  { src: "/images/md-23.png" },
  
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



  // Ensure scroll starts at top

  useEffect(() => {

    if (scrollRef.current) {

      scrollRef.current.scrollTop = 0;

    }

  }, []);



  // Keyboard navigation (only when modal open)

  useEffect(() => {

    const handleKey = (e) => {

      if (!isOpen) return;

      if (e.key === "ArrowRight") nextImage();

      if (e.key === "ArrowLeft") prevImage();

      if (e.key === "Escape") closeImage();

    };

    window.addEventListener("keydown", handleKey);

    return () => window.removeEventListener("keydown", handleKey);

  }, [isOpen]); // (Keeping it simple for JSX; works fine)



  // Safe getters so we never pass undefined props to <Image>

  const currentImg = galleryImages[current] || {};

  const currentAlt = currentImg.alt || "Project image";

  const currentTitle = currentImg.title || "";



  return (

    <section className="bg-black text-white px-6 sm:px-10 md:px-16 lg:px-28 xl:px-40 py-10 sm:py-20 font-sans">

      {/* Breadcrumb */}

      <p className="text-xs text-[#caa193] uppercase tracking-widest mb-4 font-conthrax">

        HOME &gt; PROJECTS &gt; PALM JUMEIRAH MODERN VILLA

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

            PALM JUMEIRAH MODERN VILLA

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

                Set on Palm Jumeirah, Dubai, this modern luxury villa embraces a warm, contemporary approach to

                residential living. <b><a href="https://wedointerior.ae/">WE DO Interior Design &amp; Fit-Out</a></b>

                brings together spacious living areas, clean architectural lines, floor-to-ceiling glazing and a carefully

                balanced palette of natural stone, warm timber and soft neutral tones. Tailored furnishings, subtle

                metallic details and integrated lighting give the interiors a refined, welcoming character.

              </p>

              <p>

                From the open-plan kitchen with its sculptural island and the elegant family lounges to the bespoke

                walk-in wardrobe, restful bedrooms and spa-inspired bathrooms, each space follows a cohesive modern

                design language. Generous natural light, thoughtful storage and premium finishes enhance everyday

                comfort without overwhelming the design. This Palm Jumeirah project reflects our approach to luxury

                villa interior design and fit-out in Dubai, where contemporary elegance meets practical family living.

              </p>

            </div>

          </div>



          {/* Image */}

          <figure className="w-full lg:w-1/2">

            <Image

              src="/images/md-6.png"

              alt="Modern luxury villa living room with expansive glazing and warm neutral finishes in Palm Jumeirah"

              title="Modern Villa Interior Design in Palm Jumeirah, Dubai"

              width={800}

              height={500}

              loading="lazy"

              className="w-full h-auto object-cover"

            />

            <figcaption className="sr-only">

              A light-filled modern villa living room with warm neutral furnishings, refined stone and timber finishes, and contemporary lighting.

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

          PALM JUMEIRAH MODERN VILLA GALLERY

        </h2>



        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {galleryImages.map((img, idx) => (

            <figure key={img.src || idx} className="cursor-pointer overflow-hidden rounded-md">

              <Image

                src={img.src}

                alt={img.alt || "Project image"}

                title={img.title || ""}

                width={400}

                height={300}

                loading="lazy"

                className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"

                onClick={() => openImage(idx)}

              />

              <figcaption className="sr-only">{img.description || img.title || ""}</figcaption>

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

            aria-label="Close"

          >

            &times;

          </button>

          <button

            onClick={prevImage}

            className="absolute left-4 text-white text-4xl"

            aria-label="Previous"

          >

            &#8592;

          </button>



          <Image

            src={currentImg.src || "/images/placeholder.jpg"}

            alt={currentAlt}

            title={currentTitle}

            width={900}

            height={600}

            loading="lazy"

            className="rounded-md object-contain max-h-[90vh] max-w-[90vw]"

          />



          <button

            onClick={nextImage}

            className="absolute right-4 text-white text-4xl"

            aria-label="Next"

          >

            &#8594;

          </button>

        </div>

      )}

    </section>

  );

};



export default VPBody;