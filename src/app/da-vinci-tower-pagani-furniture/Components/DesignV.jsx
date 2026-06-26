'use client';

import React, { useEffect, useCallback, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import Link from 'next/link';

const images = [
 
  '/images/05-bedroom3-07.jpg',
   '/images/05-bedroom3-01.jpg',
  '/images/05-bedroom3-04.jpg',
];

// Section 07 — Bespoke furniture (keyword-integrated copy)
const capabilities = [
  {
    title: 'In-house Joinery',
    text:
      'Designed, built, and finished in our own workshop, so quality and timelines stay in our hands.',
  },
  {
    title: 'Marble Coordination',
    text:
      "Stone selected and matched to the apartment's existing surfaces for a continuous, intentional look.",
  },
  {
    title: 'Leather Detailing',
    text:
      'Considered leatherwork on seating, headboards, and feature pieces.',
  },
  {
    title: 'Integrated Pieces',
    text:
      'Furniture built into the architecture rather than placed against it.',
  },
];

// Section 05 — Collections
const collections = [
  {
    title: 'Warm Contemporary',
    mood: 'Comfort and ease.',
    palette: 'Warm woods, soft upholstery, brushed metals, layered lighting.',
    best: 'A home that feels lived-in from day one.',
  },
  {
    title: 'Italian Luxury',
    mood: 'Statement and presence.',
    palette: 'Marble, leather, sculptural furniture, polished detailing.',
    best: "Matching the building's design pedigree.",
  },
  {
    title: 'Minimal Modern',
    mood: 'Calm and clarity.',
    palette: 'Clean lines, pale stone, monochrome, concealed storage.',
    best: 'Letting the space and the view lead.',
  },
  {
    title: 'Collector Edition',
    mood: 'Rare and curated.',
    palette: 'Bespoke and limited pieces, specified materials, one-of-a-kind joinery.',
    best: 'Residences intended to be unique.',
  },
];


// Section 08 — Services included (with internal links)
const services = [
  {
    title: 'Furniture Supply',
    text:
      'Curated sourcing of quality home furniture and designer pieces, matched to your scheme.',
    href: '/furniture-supply-dubai',
  },
  {
    title: 'Custom Joinery',
    text:
      'Made-to-measure custom furniture and built-ins from our own workshop.',
    href: '/joinery-company-dubai',
  },
  {
    title: 'Interior Styling',
    text:
      'The final layer: art, textiles, lighting, and objet that complete a space.',
    href: '/apartment-interior-design-dubai',
  },
  {
    title: 'Space Planning',
    text: 'Layouts that make the architecture work for how you live.',
    href: '/apartment-interior-design-dubai',
  },
  {
    title: 'Outdoor & Terrace',
    text:
      'Outdoor furniture in Dubai built for canal-side balconies and the climate.',
    href: '/furniture-supply-dubai',
  },
  {
    title: 'Turnkey Furnishing',
    text: 'The whole journey, end to end, with one point of contact.',
    href: '/furniture-supply-dubai',
  },
];


// Section 10 — How it works
const processSteps = [
  {
    no: '01',
    title: 'Consultation',
    text:
      'We understand lifestyle, furnishing goals, and practical requirements — and set a clear, indicative budget.',
  },
  {
    no: '02',
    title: 'Design',
    text:
      'Layouts, furniture selections, materials, and visual concepts are developed around your apartment.',
  },
  {
    no: '03',
    title: 'Quotation',
    text:
      'Transparent, itemised pricing with clearly defined scope and timelines before production begins.',
  },
  {
    no: '04',
    title: 'Production',
    text:
      'Custom furniture is manufactured while sourced pieces are coordinated and quality checked.',
  },
  {
    no: '05',
    title: 'Installation',
    text:
      'Delivery, assembly, placement and styling completed for a fully finished residence.',
  },
];

// Section 11 — Timeline
const timelineSteps = [
  {
    when: 'Week 1',
    title: 'Discovery',
    text: 'Consultation, requirements, floor-plan review, and budget.',
  },
  {
    when: 'Week 2',
    title: 'Moodboards',
    text: 'Direction, selections, and visuals approved.',
  },
  {
    when: 'Weeks 3–6',
    title: 'Production',
    text: 'Bespoke pieces made; ready items sourced.',
  },
  {
    when: 'Week 7',
    title: 'Installation',
    text: 'Delivered, assembled, styled, complete.',
  },
];

// Section 12 — Gallery
const galleryProjects = [
{
image: '/images/penth7.webp',
project: 'II Primo Penthouse',
link: '/ii-primo-penthouse',
},

{
image: '/images/bba8.webp',
project: 'Business Bay Apartment',
link: '/business-bay-apartment',
},

{
image: '/images/pjapt (5).webp',
project: 'Business Bay Apartment',
link: '/palm-jumeirah-apartment',
},

{
image: '/images/6w-residence (2).webp',
project: '6W Residence',
link: '/palm-jumeirah-6-bedroom-penthouse',
},
];



const DesignV = () => {
  const [isClient, setIsClient] = useState(false);
  const [slider, setSlider] = useState(50);

  const autoplayOptions = {
    delay: 3000,
    stopOnInteraction: false,
  };

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [Autoplay(autoplayOptions)]
  );

  useEffect(() => {
    setIsClient(true);
  }, []);

  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x =
      ('touches' in e ? e.touches[0].clientX : e.clientX) - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSlider(percentage);
  };

  return (
    <section className="py-5 px-6 bg-black">

      {/* ============================================================
          HEADING IMAGE STRIP — Da Vinci Tower Apartment Furniture
      ============================================================ */}

      <h2 className="text-center text-white text-xs sm:text-xl font-conthrax tracking-widest mb-8 uppercase">
        Da Vinci Tower Apartment Furniture
      </h2>

      {/* DESKTOP GRID */}
      <div className="hidden lg:grid grid-cols-3 gap-6 mb-10">
        {images.map((src, index) => (
          <div
            key={index}
            className="relative aspect-square overflow-hidden rounded-xl"
          >
            <Image
              src={src}
              alt={`Da Vinci Tower apartment furniture by WE DO, Business Bay Dubai ${index + 1}`}
              width={700}
              height={700}
              className="object-cover w-full h-full hover:scale-105 duration-700"
            />
          </div>
        ))}
      </div>

      {/* MOBILE CAROUSEL */}
      {isClient && (
        <div className="lg:hidden mb-10">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4">
              {images.map((src, index) => (
                <div
                  key={index}
                  className="min-w-full relative aspect-[4/3] overflow-hidden rounded-xl"
                >
                  <Image
                    src={src}
                    alt={`Da Vinci Tower apartment furniture by WE DO, Business Bay Dubai ${index + 1}`}
                    width={800}
                    height={600}
                    className="object-cover w-full h-full"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-5 gap-5">
            <button onClick={scrollPrev} className="text-[#caa193]">⟵</button>
            <button onClick={scrollNext} className="text-[#caa193]">⟶</button>
          </div>
        </div>
      )}

     
      

    
      


      {/* ============================================================
          SECTION 07 — BESPOKE FURNITURE
      ============================================================ */}

      <section className="max-w-[1400px] mx-auto mt-16 mb-16">
        <div className="grid lg:grid-cols-[1.25fr_0.85fr] gap-10">

          {/* LEFT CONTENT */}
          <div>
            <p className="text-[#caa193] text-[10px] tracking-[3px] uppercase font-conthrax mb-3">
              Custom Furniture & Joinery
            </p>
            <h2 className="text-white text-xl sm:text-3xl font-conthrax leading-tight mb-6">
              Furniture That
              <br />
              Belongs To The Residence
            </h2>

            <div className="space-y-4">
              <p className="font-play text-white/75 leading-7 text-sm">
                In a residence finished to this standard, standard furniture
                rarely fits — not the dimensions, and not the level. Our
                advantage is that we manufacture. As a Dubai furniture
                manufacturing company with our own joinery, we produce
                custom-made furniture to your exact measurements and materials —
                designed to sit alongside the apartment&apos;s existing marble,
                leather, and detailing rather than compete with it. We are not
                only a furniture supplier in Dubai; we are the maker.
              </p>
              <p className="font-play text-white/55 leading-7 text-sm">
                Examples of custom furniture in Dubai: bespoke wardrobes ·
                feature walls · dining tables · media and TV units · console and
                occasional tables.
              </p>
              <div className="pt-1">
                <Link
                  href="/joinery-company-dubai"
                  className="text-[#caa193] text-[11px] uppercase font-conthrax"
                >
                  Explore our joinery →
                </Link>
              </div>
            </div>
          </div>

          {/* RIGHT VERTICAL FEATURES */}
          <div className="space-y-3">
            {capabilities.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl border border-[#caa193]/10 bg-[#121212] px-5 py-3 transition duration-300 hover:border-[#caa193]/25"
              >
                <div className="flex items-start gap-4">
                  <div className="text-[#caa193] font-conthrax text-[10px] tracking-[2px] mt-[2px] shrink-0">
                    0{index + 1}
                  </div>
                  <div>
                    <h3 className="font-conthrax text-[11px] uppercase text-[#caa193] mb-2">
                      {item.title}
                    </h3>
                    <p className="font-play text-white/60 text-xs leading-6">
                      {item.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 08 — TURNKEY FURNISHING SERVICES
      ============================================================ */}

      <section className="max-w-[1400px] mx-auto mt-16 mb-16">
        <div className="mb-10">
          <p className="text-[#caa193] text-[10px] tracking-[3px] uppercase font-conthrax mb-3">
            Turnkey Furnishing
          </p>
          <h2 className="text-white text-xl sm:text-3xl font-conthrax mb-5">
            Everything Delivered
              Through One Team
          </h2>
          <p className="font-play text-white/65 text-sm leading-7 max-w-5xl">
            Everything furnishing requires, handled by one partner — furniture
            suppliers and manufacturers under a single roof, so nothing falls
            between vendors and only we are accountable for the result.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
          {services.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="block rounded-2xl border border-[#caa193]/10 bg-[#111] p-5 hover:border-[#caa193]/25 transition"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-conthrax text-[12px] uppercase text-[#caa193] leading-5">
                  {item.title}
                </h3>
                <span className="text-white/25 text-[10px] font-conthrax">
                  0{index + 1}
                </span>
              </div>
              <p className="font-play text-white/60 text-sm leading-7">
                {item.text}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* ============================================================
          SECTION 09 — WHY OWNERS CHOOSE WE DO
      ============================================================ */}

      <section className="max-w-[1200px] mx-auto mt-16 mb-16">
        <p className="text-[#caa193] text-[10px] tracking-[3px] uppercase font-conthrax mb-3">
          Why Owners Choose WE DO
        </p>
        <h2 className="text-white text-xl sm:text-3xl font-conthrax mb-6">
          Experience, Control & A Better Furnishing Process
        </h2>

        <p className="font-play text-white/75 text-sm leading-8 max-w-5xl mb-8">
        Furnishing at this level is not only about selecting exceptional furniture — it is about how the entire process is delivered. Owners choose WE DO because we manufacture rather than simply resell, giving us direct control over quality, craftsmanship, materials, and timelines. With more than 15 years of experience delivering furnishing and interior projects across Dubai’s luxury residential market, we understand the standards expected in premium homes and execute with the level of precision those spaces demand. Our regular work across Business Bay also means smoother coordination, local familiarity, and a more efficient project experience.Everything is managed through one accountable team from concept through completion, eliminating the complexity of coordinating multiple suppliers and contractors. Our approach remains discreet, organised, and respectful of both privacy and daily life, with realistic schedules and dependable delivery throughout. The result is a furnishing process that feels calm from your side — decisions made once, handled properly, and delivered without the chasing.
        </p>
      </section>

      {/* ============================================================
          SECTION 10 — HOW IT WORKS
      ============================================================ */}

      <section className="max-w-[1400px] mx-auto mt-20 mb-20">
        <div className="mb-10 text-center">
          <p className="text-[#caa193] text-[10px] tracking-[3px] uppercase font-conthrax mb-3">
            How It Works
          </p>
          <h2 className="text-white text-xl sm:text-3xl font-conthrax mb-5">
            A Clear Path From First Conversation
            <br />
            To The Evening You Move In
          </h2>
          <p className="font-play text-white/70 text-sm leading-8 max-w-5xl mx-auto">
            A clear path from first conversation to the evening you move in with
            defined outputs at every stage, so you always know where things
            stand.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-4">
          {processSteps.map((step, index) => (
            <div
              key={step.no}
              className="relative rounded-2xl border border-[#caa193]/10 bg-[#111] p-5 hover:border-[#caa193]/25 transition"
            >
              {index !== processSteps.length - 1 && (
                <div className="hidden xl:block absolute top-8 -right-3 w-6 h-px bg-[#caa193]/20" />
              )}

              <span className="inline-flex mb-5 w-10 h-10 rounded-full border border-[#caa193]/20 items-center justify-center font-conthrax text-[#caa193] text-[11px]">
                {step.no}
              </span>
              <h3 className="font-conthrax text-[#caa193] text-[12px] uppercase mb-4">
                {step.title}
              </h3>
              <p className="font-play text-white/65 text-sm leading-7">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================
          SECTION 11 — TIMELINE
      ============================================================ */}

      <section id="timeline" className="max-w-[1400px] mx-auto mt-20 mb-20">
        <div className="mb-10">
          <p className="text-[#caa193] text-[10px] tracking-[3px] uppercase font-conthrax mb-3">
            Timeline
          </p>
          <h2 className="text-white text-xl sm:text-3xl font-conthrax mb-5">
            An Indicative Furnishing Timeline
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          {timelineSteps.map((step, index) => (
            <div
              key={index}
              className="relative rounded-2xl border border-[#caa193]/10 bg-[#111] p-5 hover:border-[#caa193]/25 transition"
            >
              {index !== timelineSteps.length - 1 && (
                <div className="hidden xl:block absolute top-8 -right-3 w-6 h-px bg-[#caa193]/20" />
              )}

              <span className="inline-flex mb-5 px-3 h-8 rounded-full border border-[#caa193]/20 items-center justify-center font-conthrax text-[#caa193] text-[10px] whitespace-nowrap">
                {step.when}
              </span>
              <h3 className="font-conthrax text-[#caa193] text-[12px] uppercase mb-4">
                {step.title}
              </h3>
              <p className="font-play text-white/65 text-sm leading-7">
                {step.text}
              </p>
            </div>
          ))}
        </div>

      
      </section>

      {/* ============================================================
          SECTION 12 — GALLERY
      ============================================================ */}

      <section id="gallery" className="max-w-[1400px] mx-auto mt-20 mb-20">
        <div className="mb-10">
          <p className="text-[#caa193] text-[10px] text-center  tracking-[3px] uppercase font-conthrax mb-3">
            Gallery
          </p>
          <h2 className="text-white text-center text-xl sm:text-3xl font-conthrax mb-5">
            Furnished Residences
           
            Across Dubai
          </h2>
         
        </div>
{/* PROJECTS */}

<div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5">

{galleryProjects.map((item, index) => (

<Link
  key={index}
  href={item.link}
  className="
    group
    block
    rounded-2xl
    overflow-hidden
    border
    border-[#caa193]/10
    bg-[#111]
    hover:border-[#caa193]/25
    transition
  "
>

  <div className="relative aspect-square">

    <Image
      src={item.image}
      alt={`${item.project} furnished apartment interior in Dubai by WE DO`}
      fill
      className="
        object-cover
        transition
        duration-700
        group-hover:scale-[1.04]
      "
    />

    {/* Overlay */}

    <div
      className="
        absolute
        inset-0
        bg-gradient-to-t
        from-black/90
        via-black/30
        to-transparent
      "
    />

    {/* Content */}

    <div
      className="
        absolute
        inset-x-0
        bottom-0
        p-6
      "
    >

      <h3
        className="
          font-conthrax
          text-[13px]
          text-white
          uppercase
          leading-6
        "
      >
        {item.project}
      </h3>

      <div
        className="
          mt-4
          text-[#caa193]
          text-[11px]
          uppercase
          tracking-[2px]
          font-conthrax
        "
      >
        View Project →
      </div>

    </div>

  </div>

</Link>


))}

</div>

        {/* BEFORE / AFTER */}
        <p className="text-[#caa193] mt-16 text-[10px] tracking-[3px] text-center uppercase font-conthrax mb-3">
          Before &amp; After
        </p>
        <h2 className="text-white text-center text-xl sm:text-3xl font-conthrax mb-5">
          From bare handover to fully furnished
        </h2>

      <div className="mt-8 w-full max-w-[900px] mx-auto bg-[#151515] border border-[#caa193]/10 p-5">

  <div
    className="
      relative
      overflow-hidden
      border
      border-[#caa193]/10
      aspect-[16/9]
      cursor-ew-resize
      select-none
      bg-black
    "
    onMouseMove={(e) => e.buttons === 1 && handleMove(e)}
    onClick={handleMove}
    onTouchMove={handleMove}
  >

```
{/* AFTER */}

<div className="absolute inset-0">

  <Image
    src="/images/testing image 1.png"
    alt="Da Vinci Tower apartment after furnishing by WE DO"
    fill
    className="object-contain"
  />

</div>

{/* BEFORE */}

<div
  className="absolute inset-0"
  style={{
    clipPath: `inset(0 ${100 - slider}% 0 0)`
  }}
>

  <Image
    src="/images/testing image 2.png"
    alt="Da Vinci Tower apartment before furnishing"
    fill
    className="object-contain"
  />

</div>

{/* HANDLE */}

<div
  className="absolute top-0 h-full w-[2px] bg-white"
  style={{ left: `${slider}%` }}
>

  <div
    className="
      absolute
      top-1/2
      left-1/2
      -translate-x-1/2
      -translate-y-1/2
      w-[60px]
      h-[60px]
      rounded-full
      bg-[#111]
      border
      border-[#caa193]
      flex
      items-center
      justify-center
      text-[#caa193]
      text-xl
    "
  >
    ↔
  </div>

</div>

{/* LABELS */}

<div className="absolute left-5 bottom-5 bg-[#caa193] px-4 py-2 rounded-full text-black text-xs">
  Before
</div>

<div className="absolute right-5 bottom-5 bg-black/50 px-4 py-2 rounded-full text-white text-xs">
  After
</div>


  </div>

</div>

      </section>

      {/* ============================================================
          GET IN TOUCH CTA BAND
      ============================================================ */}

      <div className="bg-[#f5ede5] py-10 rounded-2xl text-center">
        <h3 className="text-xs sm:text-xl font-conthrax uppercase">
          Get In Touch With Us
        </h3>
        <p className="mt-3 text-sm sm:text-base font-play">
          We are located in the world&apos;s luxury city, Dubai
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6 px-4">
          <a
            href="https://wa.me/971588075603"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-green-500 text-white rounded"
          >
            Request a consultation
          </a>
          <a
            href="mailto:info@wedointerior.ae"
            className="px-6 py-3 bg-[#caa193] text-white rounded"
          >
           Request availability by E-mail
          </a>
        </div>
      </div>

    </section>
  );
};

export default DesignV;
