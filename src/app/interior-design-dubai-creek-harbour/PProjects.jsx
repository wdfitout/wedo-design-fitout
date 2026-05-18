"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const services = [
  {
    title: "Apartment Interior Design In Dubai Creek Harbour",
    description:
      "Modern Apartment fit-out,  planning, and commercial interior design in Dubai.",
    bgImage: "/images/dbckapt (5).png",
    link: "/apartment-interior-design-dubai-creek-harbour",
  },
  {
    title: "Penthouse Interior Design In Dubai Creek Harbour",
    description:
      "High-quality fit-out services ensuring seamless execution from start to finish.",
    bgImage: "/images/01-living-07.jpg",
    link: "/penthouse-interior-design-dubai-creek-harbour",
  },
  {
    title: "Retail Interior Design In Dubai Creek Harbour",
    description:
      "Interactive 3D & VR previews to visualize your space before execution.",
    bgImage: "/images/retail (1).webp",
    link: "/retail-interior-design-dubai-creek-harbour",
  },
  {
    title: "Restaurant Interior Design In Dubai Creek Harbour",
    description:
      "Bespoke furniture and styling solutions crafted for elegance & function.",
    bgImage: "/images/restaurant (9).webp",
    link: "/restaurant-interior-design-dubai-creek-harbour",
  },
  {
    title: "Cafe Interior Design In Dubai Creek Harbour",
    description:
      "Modern Cafe fit-out,  planning, and commercial interior design in Dubai.",
    bgImage: "/images/karakna (9).webp",
    link: "/cafe-interior-design-dubai-creek-harbour",
  },
  {
    title: "Custom Furniture In Dubai Creek Harbour",
    description:
      "Modern Cafe fit-out,  planning, and commercial interior design in Dubai.",
    bgImage: "/images/joinery-furniture.webp",
    link: "/custom-furniture-joinery-dubai-creek-harbour",
  },
];

const creekProjects = [
  {
    title: "Dubai Creek Harbour Apartment Bedroom",
    category: "Apartment Interior - Dubai Creek Harbour",
    image: "/images/dbckapt (5).png",
    link: "/dubai-creek-2-bedroom-apartment",
  },
  {
    title: "EMAAR HARBOUR POINT APARTMENT",
    category: "Apartment Interior Design - Dubai Creek Harbour",
    image: "/images/address-harbour-point-master-bedroom-interior-design-dubai-creek-harbour.png",
    link: "/emaar-harbour-point-apartment-dubai",
  },
  {
    title: "Dubai Creek Harbour Apartment Dining Area",
    category: "Apartment Dining Area - Dubai Creek Harbour",
    image: "/images/dbckapt (8).png",
    link: "/dubai-creek-2-bedroom-apartment",
  },
  {
    title: "Dubai Creek Harbour Apartment Kitchen",
    category: "Apartment Kitchen - Dubai Creek Harbour",
    image: "/images/dbckapt (7).png",
    link: "/dubai-creek-2-bedroom-apartment",
  },
];

const testimonials = [
  {
    text: `"WE DO Interior Design & Fit-Out transformed our penthouse in The Cove into exactly what we had imagined and more. The team handled every detail from the Emaar approvals to the final styling, and kept us informed throughout. The result is a space that truly reflects the location and how we live. We would recommend WE DO to any penthouse owner in Creek Harbour without hesitation."`,
    author: "— A.K., The Cove Tower 1, Dubai Creek Harbour"
  },
  {
    text: `"WE DO Interior Design & Fit-Out delivered beyond our expectations in every way. From the initial concept to the final handover, the team was professional, transparent, and genuinely passionate about the project. Our apartment in Creek Rise now feels like a true home — warm, functional, and perfectly suited to the waterfront lifestyle. We couldn't be happier with the outcome."`,
    author: "— S.M., Creek Rise Tower 2, Dubai Creek Harbour"
  },
  {
    text: `"Choosing WE DO for our unit in Harbour Views was one of the best decisions we made. They navigated the Emaar fit-out requirements seamlessly and brought our vision to life with incredible attention to detail. Every finish, every fixture, every corner was considered. The team's communication was excellent from day one right through to completion."`,
    author: "— R.A., Harbour Views Tower 1, Dubai Creek Harbour"
  }
];

const AboutSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="bg-[#000000] py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-8 lg:px-16">
        
        {/* Main Content Section */}
        <div className="w-full text-center">
          <h2 className="text-[#b98877] text-2xl font-conthrax mb-4 leading-tight">
            Why Interior Design Dubai Creek Harbour Essential?
          </h2>
          <p className="text-justify text-white text-base font-play mb-6 leading-relaxed">
            Most Creek Harbour residential apartments are provided without full interiors, which makes professional design not just beneficial but exclusive for designing a livable and high-value space. Professional interior designers in Dubai ensure that everything is taken care of from the efficient layout designs of the modern residences in Dubai Creek Harbour. A well-structured interior also elevates the impact of waterfront views through smart styling and elegance, while significantly increasing both rental potential and resale value. This is exactly why property owners and investors actively search for interior companies near me and rely on reliable interior design companies in Dubai Creek Harbour to transform their apartments into fully optimized, ready-to-use spaces.
          </p>
          
          <h2 className="text-[#b98877] text-2xl font-conthrax mb-4 leading-tight">
            Hire Interior Designer Dubai – Commercial & Residential Experts
          </h2>
          <p className="text-justify text-white text-base font-play mb-6 leading-relaxed">
            Searching for an interior designer Dubai Creek Harbour means you need a reliable team that can handle both design creativity and full execution. WE DO is a reliable interior designers company delivering full services specific for residential apartments, elegant homes, and commercial spaces all over Dubai. We are reputed as one of the top interior design companies in Dubai and are often selected by customers looking for interior companies near me due to our professionalism, quality materials, and high-end project management concept.
          </p>
        </div>

        {/* Side-by-Side Image & Info Panel */}
        <div className="flex flex-col lg:flex-row items-center gap-10 py-10">
          {/* Left Side - Image */}
          <div className="w-full lg:w-1/2">
            <Image
              src="/images/dbckapt (9).png"
              alt="Office Interior Design in Dubai Creek Harbour"
              width={800}
              height={600}
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>

          {/* Right Side - Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h2 className="text-[#b98877] text-2xl font-conthrax mb-4 leading-tight text-justify">
              Why Choose WE DO Interior Design & Fitout in Creek Harbour
            </h2>
            <p className="text-white text-sm sm:text-base font-play mb-4 text-justify leading-relaxed">
              We are listed among the best interior design companies in Dubai due to its specialization in managing contemporary apartment layouts and offering full personalized services. Our professionals have knowledge about the unique needs of Dubai Creek Harbour residential apartment spaces, making sure each space is optimized for practicality and elegance.
              <br /><br />
              We offer fast-track completion for new handovers, placing us the top choice for investors and clients. If you are looking for an interior designer Dubai, a trusted fit out company Dubai Creek Harbour, or one of the top interior fit out companies in Dubai, our experienced craftsmen offer the best quality with specific solutions.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mt-6">
              <Link href="/gallery">
                <button className="bg-[#b98877] hover:bg-[#b88f83] text-black font-conthrax px-6 py-3 rounded-md transition duration-300 w-full sm:w-auto">
                  See Our Projects
                </button>
              </Link>
              <Link href="/contact-us">
                <button className="bg-[#b98877] hover:bg-[#b88f83] text-black font-conthrax px-6 py-3 rounded-md transition duration-300 w-full sm:w-auto">
                  Free Consultation
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Testimonials Carousel Section */}
        <div className="bg-[#111111] p-6 rounded-lg border-l-4 border-[#caa193] my-10 font-play text-white relative overflow-hidden">
          <h2 className="text-lg font-conthrax text-[#caa193] uppercase tracking-wider mb-4 text-justify">
            What Our Clients Say About Our Creek Harbour Work
          </h2>
          
          <div className="relative min-h-[180px] sm:min-h-[120px] flex flex-col justify-between">
            {testimonials.map((slide, index) => (
              <div
                key={index}
                className={`transition-opacity duration-500 space-y-2 ${
                  index === currentSlide ? "opacity-100 block" : "opacity-0 hidden"
                }`}
              >
                <p className="italic text-sm sm:text-base text-gray-300 text-justify leading-relaxed">
                  {slide.text}
                </p>
                <span className="block text-right text-xs font-conthrax text-[#caa193] mt-2">
                  {slide.author}
                </span>
              </div>
            ))}
          </div>

          {/* Carousel Action Buttons */}
          <div className="flex justify-end gap-3 mt-4">
            <button 
              onClick={prevSlide} 
              className="p-2 rounded bg-black/40 hover:bg-[#caa193] text-white hover:text-black transition-colors duration-300"
              aria-label="Previous testimonial"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
              </svg>
            </button>
            <button 
              onClick={nextSlide} 
              className="p-2 rounded bg-black/40 hover:bg-[#caa193] text-white hover:text-black transition-colors duration-300"
              aria-label="Next testimonial"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
              </svg>
            </button>
          </div>

          {/* Carousel Pagination Dots */}
          <div className="flex justify-center gap-2 mt-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 w-2 rounded-full transition-all duration-300 ${
                  index === currentSlide ? "bg-[#caa193] w-4" : "bg-gray-600"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Services Heading Grid */}
        <div className="text-center mt-12 mb-8">
          <h2 className="text-[#b98877] text-2xl font-conthrax mb-4 leading-tight">
            Our Interior Services in Dubai Creek Harbour
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          {services.map((service, idx) => (
            <Link key={idx} href={service.link} className="block group">
              <div className="relative h-[340px] rounded-2xl overflow-hidden shadow-lg cursor-pointer">
                <Image
                  src={service.bgImage}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition" />
                <div className="absolute inset-0 z-10 flex flex-col justify-end p-6 text-white">
                  <h3 className="text-md font-conthrax mb-2 text-justify">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-200 leading-relaxed text-justify">
                    {service.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-14">
          <h2 className="text-[#b98877] text-2xl font-conthrax mb-4 leading-tight">
            Our Interior Design Services in Dubai Creek Harbour
          </h2>
          <p className="text-justify max-w-6xl mx-auto mt-4 text-sm sm:text-base text-white py-4 font-play leading-relaxed">
            As one of the best interior design companies in UAE, we deliver complete residential and commercial solutions designed to meet modern lifestyle and investment needs in Dubai Creek Harbour. Due to the consistent growth in this area along with high demands for properties, many property owners are on the hunt for the best interior design Dubai Creek Harbour professionals that can provide elegance along with practical designs. WE DO Interior Design & Fitout is a top interior designers company delivering expert interior design services in Dubai, specific for apartment owners, investors, and commercial customers.
          </p>
        </div>

        {/* Segmented Detail Specifications */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 py-10">
          <div className="text-left space-y-6">
            <div>
              <h3 className="text-[#b98877] text-md font-conthrax mb-2 leading-tight">
                1- Apartment Interior Design in Creek Harbour Dubai
              </h3>
              <p className="text-white text-sm sm:text-base font-play text-justify leading-relaxed">
                WE DO professionals of Apartment Interior Design in Creek Harbour Dubai, focusing on modern designs, innovative planning, and individualized styling. Every residential apartment is planned keeping in mind unique space usage, effective layout design for both smaller and larger apartments, and individualized furniture solutions that deal with luxury.
              </p>
            </div>
            <div>
              <h3 className="text-[#b98877] text-md font-conthrax mb-2 leading-tight">
                2- Turnkey Interior Design & Fit-out Services
              </h3>
              <p className="text-white text-sm sm:text-base font-play text-justify leading-relaxed">
                WE DO is one of the most reliable interior design and fit out companies in Dubai, delivering full personalized services from idea development to finishings. Our services cover design, approvals, completion, and full project management. We are among the leading interior fit out companies in Dubai, providing high-end interiors.
              </p>
            </div>
            <div>
              <h3 className="text-[#b98877] text-md font-conthrax mb-2 leading-tight">
                3- Luxury Interior Design Dubai Creek Harbour
              </h3>
              <p className="text-white text-sm sm:text-base font-play text-justify leading-relaxed">
                We are professional in luxury interior design Dubai services are specific for high-end apartments and penthouses in Dubai Creek Harbour. WE DO use quality materials, personalized completion, and customized detailing to craft elegant interiors that elevate the value of each Dubai Creek Harbour residential apartment.
              </p>
            </div>
          </div>

          <div className="text-left space-y-6">
            <div>
              <h3 className="text-[#b98877] text-md font-conthrax mb-2 leading-tight">
                4- Furniture Packages & Airbnb Setup
              </h3>
              <p className="text-white text-sm sm:text-base font-play text-justify leading-relaxed">
                WE DO offers client-focused solutions covering flexible furniture packages, Airbnb furnishing setups, and planning designed for rental optimization. We offer the best service that is iconic for owners specifically for short-term rental income in modern residences in Dubai Creek Harbour, making sure faster occupancy and profitable returns.
              </p>
            </div>
            <div>
              <h3 className="text-[#b98877] text-md font-conthrax mb-2 leading-tight">
                5- Dubai Creek Harbour Apartment Renovation
              </h3>
              <p className="text-white text-sm sm:text-base font-play text-justify leading-relaxed">
                We provide full Dubai Creek Harbour Apartment Renovation solutions that cover layout elevates, interior modernization, and value enhancement. Our interior design and renovation concept gives attention to improving both elegance and ROI, creating older units competitive and valuable in the market.
              </p>
            </div>
            <div>
              <h3 className="text-[#b98877] text-md font-conthrax mb-2 leading-tight">
                6- Commercial Interior Design in Dubai Creek Harbour
              </h3>
              <p className="text-white text-sm sm:text-base font-play text-justify leading-relaxed">
                Seeking an expert interior designer Dubai commercial services? WE DO craft retail stores, cafés, restaurants, and office interior designs with a deep focus on branding and practicality. We are one of the top interior companies in Dubai, offering commercial spaces that are both visually appealing and operationally exclusive.
              </p>
            </div>
          </div>
        </div>

        {/* Types of Properties We Design Banner */}
        <div className="relative mb-12 transition-transform duration-500 hover:scale-[1.02] py-10">
          <div className="block relative h-[260px] sm:h-[360px] w-full rounded-xl overflow-hidden">
            <Image
              src="/images/dbckapt (4).png"
              alt="Residential Interior Design"
              fill
              className="object-cover w-full h-full"
            />
            {/* Context Overlay split content */}
            <div className="absolute inset-y-0 right-0 w-full md:w-1/2 bg-black/80 p-6 sm:p-10 flex flex-col justify-center z-10">
              <h2 className="text-lg text-[#b98877] font-conthrax uppercase mb-3">
                Types of Properties We Design
              </h2>
              <p className="text-sm leading-relaxed text-gray-300 font-play text-justify mb-2">
                Each Dubai Creek Harbour residential apartment is customized based on client needs. We design all property types, including:
              </p>
              <ul className="list-disc pl-5 text-sm leading-relaxed text-gray-300 font-play grid grid-cols-2 gap-1">
                <li>Studio Apartments</li>
                <li>1 Bed Units</li>
                <li>2–3 Bed Apartments</li>
                <li>Luxury Penthouses</li>
                <li>Waterfront Homes</li>
                <li>Serviced Suites</li>
                <li>Airbnb Setup Units</li>
              </ul>
            </div>
          </div>
        </div>

        {/* ================= Dubai Creek Harbour PROJECTS SECTION ================= */}
        <section className="py-5">
          <div className="text-center mb-12">
            <h2 className="text-[#b98877] text-3xl font-conthrax mb-4 leading-tight">
              Our Projects in Dubai Creek Harbour
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto font-play text-justify sm:text-center">
              Discover our completed interior design and fit-out projects in Creek Harbour, including commercial offices, luxury Dubai Creek Harbour apartment designs, restaurants, and turnkey solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {creekProjects.map((project, index) => (
              <Link key={index} href={project.link} className="block group">
                <div className="relative overflow-hidden rounded-2xl shadow-lg cursor-pointer h-[320px]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition duration-300" />
                  <div className="absolute inset-0 flex flex-col justify-end p-6 z-10 text-white">
                    <h3 className="text-md font-conthrax mb-1 text-justify">
                      {project.title}
                    </h3>
                    <p className="text-xs text-gray-300 text-justify">
                      {project.category}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/gallery">
              <button className="bg-[#b98877] hover:bg-[#a97463] text-black px-8 py-3 rounded-md font-conthrax transition duration-300">
                View All Projects
              </button>
            </Link>
          </div>
        </section>

        {/* ===== Interior Design for Best Buildings Section ===== */}
        <section className="py-10">
          <div className="flex flex-col lg:flex-row items-start gap-10">
            {/* LEFT SIDE CONTENT */}
            <div className="w-full lg:w-1/2 text-left space-y-4">
              <h2 className="text-[#b98877] text-2xl font-conthrax leading-tight">
                Interior Design for Best Buildings in Dubai Creek Harbour
              </h2>
              <p className="text-sm sm:text-base text-white font-play text-justify leading-relaxed">
                Our experience across top buildings in Dubai Creek positions us among the top interior design companies in Dubai Creek Harbour. We provide specialized services in the best buildings in Dubai Creek Harbour, including:
              </p>

              <ul className="list-disc pl-5 text-sm sm:text-base text-gray-300 font-play space-y-1">
                <li><strong className="text-[#b98877]">Creek Palace</strong> – Premium apartment interior design in Creek Palace</li>
                <li><strong className="text-[#b98877]">Moor at Creek Beach</strong> – Functional and stylish interiors</li>
                <li><strong className="text-[#b98877]">Creek Waters</strong> – High-end fit-out services in Creek Waters</li>
                <li><strong className="text-[#b98877]">Aeon Tower</strong> – Modern layouts for urban living</li>
                <li><strong className="text-[#b98877]">Address Residences</strong> – Luxury turnkey interiors</li>
              </ul>

              {/* PROCESS */}
              <h2 className="text-[#b98877] text-2xl font-conthrax leading-tight pt-4">
                Our Interior Design Process
              </h2>
              <p className="text-sm sm:text-base text-white font-play text-justify">
                Following structured process makes us one of the most reliable interior fit out companies in UAE.
              </p>

              <ul className="list-disc pl-5 text-sm sm:text-base text-gray-300 font-play space-y-1">
                <li>Consultation & Requirement Analysis</li>
                <li>Concept Design & Mood Boards</li>
                <li>Space Planning & Layout Design</li>
                <li>3D Visualization</li>
                <li>Material & Furniture Selection</li>
                <li>Authority Approvals</li>
                <li>Fit-out Execution</li>
                <li>Final Styling & Handover</li>
              </ul>
            </div>

            {/* RIGHT SIDE IMAGE */}
            <div className="w-full lg:w-1/2">
              <Image
                src="/images/dubai-creek.png"
                alt="Interior Design Dubai Creek Harbour"
                width={800}
                height={600}
                className="w-full h-[550px] object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <div className="text-sm leading-relaxed font-play text-white pt-10">
          <h2 className="text-[#b98877] text-2xl font-conthrax leading-tight mb-4">
            Frequently asked questions (FAQs)
          </h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-[#b98877] text-md font-conthrax leading-tight py-2">
                1- Do you provide interior design for Creek Palace and Creek Waters?
              </h3>
              <p className="text-justify text-gray-300">
                Yes, WE DO provides full design and fit-out solutions for all major projects in Creek Harbour.
              </p>
            </div>

            <div>
              <h3 className="text-[#b98877] text-md font-conthrax leading-tight py-2">
                2- Do you offer turnkey fit-out services in Dubai Creek Harbour?
              </h3>
              <p className="text-justify text-gray-300">
                Yes, WE DO is reputed as one of the top interior design and fit out companies in Dubai delivering turnkey services.
              </p>
            </div>

            <div>
              <h3 className="text-[#b98877] text-md font-conthrax leading-tight py-2">
                3- Can you furnish my apartment for Airbnb?
              </h3>
              <p className="text-justify text-gray-300">
                Yes, we provide full furnishing and interior renovation packages in apartment for Airbnb.
              </p>
            </div>

            <div>
              <h3 className="text-[#b98877] text-md font-conthrax leading-tight py-2">
                4- Do you handle complete design and execution?
              </h3>
              <p className="text-justify text-gray-300">
                Yes, from consultation to completion, everything is managed in-house by WE DO interior design & Fit-out.
              </p>
            </div>

            <div>
              <h3 className="text-[#b98877] text-md font-conthrax leading-tight py-2">
                5- Can you customize the interior design according to my style?
              </h3>
              <p className="text-justify text-gray-300">
                Absolutely, all of our designs are client-centric we listen your requirements and deliver fully customized projects.
              </p>
            </div>

            <div>
              <h3 className="text-[#b98877] text-md font-conthrax leading-tight py-2">
                6- How much does interior design cost in Dubai Creek Harbour?
              </h3>
              <p className="text-justify text-gray-300">
                The interior design cost in Dubai Creek Harbour varies depending on apartment size, material selection, customization level, and scope of work. We are one of the best interior design companies in Dubai, delivering transparent and competitive pricing.
              </p>
            </div>

            <div>
              <h3 className="text-[#b98877] text-md font-conthrax leading-tight py-2">
                7- How long does an interior design project take?
              </h3>
              <p className="text-justify text-gray-300">
                Fast-track options are available for urgent projects, making us one of the most efficient interior design and fit out companies in Dubai.
                <br />
                1- Studio Apartment: 3–5 weeks <br />
                2- 1–2 Bedroom Apartment: 5–8 weeks <br />
                3- Full Fit-out: 8–12 weeks
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;