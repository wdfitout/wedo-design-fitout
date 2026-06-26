"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const services = [
  {
    title: "Kitchen Interior Design in Jumeirah Dubai",
    bgImage: "/images/carnistore (4).webp",
    link: "/kitchen-interior-design-jumeirah-dubai",
  },
  {
    title: "Bedroom Interior Design in Jumeirah Dubai",
    bgImage: "/images/cnpkapt (4).png",
    link: "/bedroom-interior-design-jumeirah-dubai",
  },
  {
    title: "Living Room Interior Design in Jumeirah Dubai",
    bgImage: "/images/living (6).jpeg",
    link: "/living-room-interior-design-jumeirah-dubai",
  },
  {
    title: "Home Renovation in Jumeirah Dubai",
    bgImage: "/images/renovation.jpeg",
    link: "/home-renovation-jumeirah-dubai",
  },
  {
    title: "Beachfront Interior Design in Jumeirah Dubai",
    bgImage: "/images/beachfront (25).webp",
    link: "/beachfront-interior-design-jumeirah-dubai",
  },
  {
    title: "Beachfront Hospitality Interior Design in Jumeirah Dubai",
    bgImage: "/images/hospitality.jpeg",
    link: "/beachfront-hospitality-interior-jumeirah-dubai",
  },
  {
    title: "Apartment Interior Design in Jumeirah",
    bgImage: "/images/2wresidence (4).webp",
    link: "/apartment-interior-design-jumeirah",
  },
  {
    title: "Retail Interior Design in Jumeirah Dubai",
    bgImage: "/images/retail (2).jpeg",
    link: "/retail-interior-design-jumeirah",
  },
];

const jumeirahProjects = [
  {
    title: "Peaky Blinders",
    category: "Barber Retail - Palm Jumeirah",
    image: "/images/peakyblinders (5).webp",
    link: "/palm-jumeirah-barber-shop",
  },
  {
    title: "Tess Avenue Salon",
    category: "Salon - Jumeirah 1",
    image: "/images/tabs (10).webp",
    link: "/jumeirah-1-beauty-salon",
  },
  {
    title: "Haagen Das Cafe",
    category: "Hospitality - Palm Jumeirah",
    image: "/images/haagen (4).webp",
    link: "/palm-jumeirah-f&b",
  },
  {
    title: "Apartment",
    category: "Apartment - Palm Jumeirah",
    image: "/images/pjapt (5).webp",
    link: "/palm-jumeirah-apartment",
  },
];

const testimonials = [
  {
    name: "Layla A.",
    location: "Jumeirah 2",
    text: `"WE DO understand exactly how we wanted our home to feel. The result feels elegant but still practical for family life."`
  },
  {
    name: "James T.",
    location: "Umm Suqeim",
    text: `"We compared several Top interior designers of Jumeirah Dubai and felt WE DO had the strongest understanding of residential living."`
  },
  {
    name: "Emma W.",
    location: "Jumeirah Villa Owner",
    text: `"The communication and delivery process made everything easier than expected and the final result exceeded expectations."`
  }
];

const AboutSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto carousel script running every 4 seconds for text only
  useEffect(() => {
    const textTimer = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(textTimer);
  }, []);

  return (
    <section className="bg-[#000000] py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-8 lg:px-16">

        {/* Image + Content Row */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full text-center ">
            <h2 className="text-[#b98877] text-2xl font-conthrax mb-4 leading-tight uppercase">
              Why Interior Design in Jumeirah Requires a Different Approach
            </h2>
            <p className="text-justify text-white text-base font-play mb-6 leading-relaxed">
              The interior design of Jumeirah Dubai is not just about trends. The houses located in Jumeirah tend to be spacious and better suited to be lived in by families for years to come, which means that interior designing is more planned and should be comfortable. Unlike the apartments located in the city, these houses have plenty of space both inside and outside, which means that the interior of such a house should be comfortable.
              
              The quality of the interior becomes obvious in Jumeirah because it is made of materials, lighting, finishes, and joinery. Being an experienced interior designer in Jumeirah Dubai, we offer you customized interiors in Jumeirah, Umm Suqeim, Al Wasl, La Mer, City Walk, and nearby neighborhoods.
            </p>
             
            <section className="bg-[#000000] py-10">
              <div className="container mx-auto flex flex-col lg:flex-row items-center px-4 sm:px-8 lg:px-16 gap-10">
                <div className="w-full lg:w-1/2">
                  <Image
                    src="/images/pjapt (9).webp"
                    alt="Luxury Interior Design in Jumeirah"
                    width={800}
                    height={600}
                    className="w-full h-100 rounded-lg shadow-md"
                  />
                </div>

                <div className="w-full lg:w-1/2 text-center lg:text-left">
                  <h2 className="text-[#b98877] text-2xl font-conthrax mb-4 leading-tight">
                    Our Interior Design Services in Jumeirah Dubai
                  </h2>
                  <p className="text-white text-sm sm:text-base font-play mb-4 text-justify">
                    WE DO provides complete Home interior design Jumeirah Dubai services for homeowners who want interiors that feel elevated but practical.
                  </p>
                  
                  <div className="space-y-4 text-white text-sm sm:text-base font-play text-left mb-6">
                    <p className="text-justify"><b className="text-[#b98877]">Bedroom Interior Design Jumeirah</b> — Sleeping areas need to encourage sleep without making us feel isolated from the remainder of the home. The <b className="text-[#caa193]"><a href="https://wedointerior.ae/bedroom-interior-design-jumeirah-dubai">  interior design of our bedrooms </a></b> is achieved by designing better layouts, lighting, wardrobe systems, custom joinery, furnishing design, and finishes which create a more relaxed atmosphere.</p>
                    <p className="text-justify"><b className="text-[#b98877]"><b className="text-[#caa193]"><a href="https://wedointerior.ae/kitchen-interior-design-jumeirah-dubai">  Kitchen Interior Design Jumeirah </a></b></b> — The kitchen has become one of the most used spaces in modern homes. Our kitchens are based on functionality, efficiency, materiality, and coherence without compromising the luxury residential atmosphere. Many homeowners combine kitchen upgrades with wider Interior design and renovation Jumeirah projects.</p>
                    <p className="text-justify"><b className="text-[#b98877]">Living Room Interior Design Jumeirah</b> — <b className="text-[#caa193]"><a href="https://wedointerior.ae/living-room-interior-design-jumeirah-dubai">  Living room interiors </a></b> are commonly made the focal point of any home. WE DO designs living rooms based on principles of comfort, scale, motion, and human interaction such that each space feels inviting all year round and not just for special occasions.</p>
                    <p className="text-justify"><b className="text-[#b98877]">Home Renovation Jumeirah Dubai</b> — Where people appreciate where they are but need more from their home experience,our <b className="text-[#caa193]"><a href="https://wedointerior.ae/home-renovation-jumeirah-dubai">  home renovation in Jumeirah </a></b> can make the greatest difference. We redesign layouts, improve functionality, update finishes, and modernise interiors while preserving the identity of the property.</p>
                    <p className="text-justify"><b className="text-[#b98877]">Beachfront Interior Design Jumeirah</b> — Properties closer to the coastline require a different approach to materials and natural light. Our <b className="text-[#caa193]"><a href="https://wedointerior.ae/beachfront-interior-design-jumeirah-dubai">  beachfront interiors </a></b> focus on creating calm, bright environments that feel connected to outdoor living.</p>
                    <p className="text-justify"><b className="text-[#b98877]"><b className="text-[#caa193]"><a href="https://wedointerior.ae/retail-interior-design-jumeirah">  Retail Interior Design Jumeirah </a></b></b> — Alongside residential work, WE DO also delivers premium retail and customer-facing interiors across Jumeirah and surrounding locations.</p>
                  </div>

                  <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                    <Link href="/gallery">
                      <button className="bg-[#b98877] hover:bg-[#b88f83] text-black font-conthrax px-6 py-3 rounded-md transition duration-300">
                        See Our Projects
                      </button>
                    </Link>
                    <Link href="/contact-us">
                      <button className="bg-[#b98877] hover:bg-[#b88f83] text-black font-conthrax px-6 py-3 rounded-md transition duration-300">
                        Free Consultation
                      </button>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="text-center mt-10 mb-12">
                <h2 className="text-[#b98877] text-2xl font-conthrax mb-4 leading-tight uppercase">
                  Our Interior Services in Jumeirah
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
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
                        <h3 className="text-md font-conthrax mb-2 text-left">{service.title}</h3>
                        <p className="text-sm text-gray-200 leading-relaxed text-left">{service.description}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="text-center mt-14">
                <h2 className="text-[#b98877] text-2xl font-conthrax mb-4 leading-tight uppercase">
                  What Makes Interior Design in Jumeirah Different From Other Areas
                </h2>
                <p className="text-center max-w-6xl mx-auto text-sm sm:text-base text-white  font-play text-justify sm:text-center">
                   Interior design in Jumeirah is influenced by the way homes are built and used. Larger layouts, stronger natural light, and outdoor living spaces create different design requirements compared to many other areas in Dubai. Interiors need better space flow, balanced proportions, and materials that perform well over time.
                
                At WE DO Interior Design & Fitout, our Luxury interior design Jumeirah Dubai approach focuses on creating connected, comfortable spaces through thoughtful layouts, finish selection, and functional Interior fitout Jumeirah Dubai solutions that support modern family living.
                </p>
              </div>
            </section>
          </div>
        </div>

        <section className="bg-[#000000] ">
          <div className="container mx-auto flex flex-col lg:flex-row items-center px-4 sm:px-8 lg:px-16 gap-10">
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h2 className="text-[#b98877] text-2xl font-conthrax mb-4 leading-tight uppercase">
              Our Interior Design Process in Jumeirah Dubai  
              </h2>
              <p className="text-white text-sm sm:text-base font-play mb-4 text-justify">
                             At <b className="text-[#caa193]"><a href="https://wedointerior.ae/">  WE DO Interior Design & Fitout </a></b>, our approach keeps design decisions clear, communication organised, and execution aligned from beginning to end. Whether the project involves Residential interior design Jumeirah, complete renovation, or full Interior fitout Jumeirah Dubai, every stage is planned carefully.
              </p>

              <div className="space-y-4 text-white text-sm sm:text-base font-play text-left mt-6 mb-6">
                <p className="text-justify"><b className="text-[#b98877]">Discovery & Consultation</b> — Every project begins with an analysis of the home and its inhabitants. The team meets to discuss lifestyles, needs, design considerations, time frames, and the functional role of each space. Site visits help us appreciate proportions, conditions on site, and possibilities at hand. This stage creates the foundation for successful Interior design Jumeirah Dubai projects.</p>
                <p className="text-justify"><b className="text-[#b98877]">Concept Development & Space Planning</b> — Once requirements are clear, WE DO develop the design direction. Layouts are elegant, circulations are enhanced, and ideas start to emerge in initial form. At this point, issues of materials, finish, furniture direction, and language become relevant considerations. In larger Villa interior design Jumeirah projects, it will ensure continuity within different parts of the home.</p>
                <p className="text-justify"><b className="text-[#b98877]">Design Development & Material Selection</b> — After the vision is approved, the design moves into greater detail. Our professionals develop arts, finish schedules, joinery ideas, lighting concepts, and material selections to make sure each element supports the overall interior. This phase is especially important for clients looking for Luxury interior design Jumeirah Dubai where finish quality influences the end experience.</p>
                <p className="text-justify"><b className="text-[#b98877]">Interior Fitout & Project Coordination</b> — Once designs are finalised, execution begins. WE DO coordinate fitout activities, installation sequencing, contractor communication, and site progress to maintain consistency between design intent and delivery. Since we work as both an Interior design company Jumeirah Dubai and fitout contractors, we provide clients with reduced delays and increased coordination.</p>
                <p className="text-justify"><b className="text-[#b98877]">Styling, Completion and Handover</b> — This stage deals with completing the process. It involves positioning furniture, finishing touches, inspection and quality control, among others, prior to handover. From Home interior design Jumeirah Dubai to interior design and renovation Jumeirah, WE DO ensure a sense of completeness and comfortability in our interiors.</p>
              </div>

              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <Link href="/gallery">
                  <button className="bg-[#b98877] hover:bg-[#b88f83] text-black font-conthrax px-6 py-3 rounded-md transition duration-300">
                    See Our Projects
                      </button>
                </Link>
                <Link href="/contact-us">
                  <button className="bg-[#b98877] hover:bg-[#b88f83] text-black font-conthrax px-6 py-3 rounded-md transition duration-300">
                    Free Consultation
                      </button>
                </Link>
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <Image
                src="/images/pjapt (10).webp"
                alt="Jumeirah Home Interior"
                width={800}
                height={600}
                className="w-full h-100 rounded-lg shadow-md"
              />
            </div>
          </div>

          <div className="text-center mt-14">
            <h2 className="text-[#b98877] text-2xl font-conthrax mb-4 leading-tight uppercase">
              Why Jumeirah Residents Choose WE DO
            </h2>
            <p className="text-center max-w-6xl mx-auto text-sm sm:text-base text-white py-4 font-play text-justify sm:text-center">
              WE DO is one of the finest firms for interior design and fit-out in Dubai. WE DO is the choice of homeowners due to our combination of creativity and implementation skills. Our knowledge of local residential interior design and renovation challenges and the high expectations that accompany premium interiors enables us to simplify the process and be consistent in the implementation of the project. Our clients prefer us because of our ability to produce interiors which are personal and timeless.
            </p>
          </div>
        </section>

        {/* Dynamic Testimonials Carousel replacing the static image */}
        <div className="relative mb-12 transition-transform duration-500 hover:scale-[1.01] overflow-hidden rounded-xl bg-black">
          <div className="relative h-[300px] sm:h-[330px] w-full">
            
            {/* Single Static Background Image */}
            <Image
              src="/images/pjapt (11).webp"
              alt="Elite Interior Design Jumeirah"
              fill
              priority
              className="object-cover w-full h-full"
            />

            {/* Dark Mask Content Overlay Panel */}
            <div className="absolute inset-y-0 right-0 w-full sm:w-1/2 md:w-5/12 bg-black/85 p-6 sm:p-8 flex flex-col justify-center z-20">
              <h2 className="text-xs sm:text-sm text-[#b98877] font-conthrax uppercase mb-3 tracking-wider border-b border-[#b98877]/20 pb-2">
                What Our Jumeirah Clients Say
              </h2>
              
              {/* Active Auto Changing Text Frame */}
              <div className="min-h-[140px] flex flex-col justify-between">
                
                {testimonials.map((slide, idx) => (
                  <div
                    key={idx}
                    className={`transition-all duration-700 space-y-2 ${
                      idx === activeIndex 
                        ? "opacity-100 block translate-x-0" 
                        : "opacity-0 hidden -translate-x-2"
                    }`}
                  >
                    <div className="text-amber-400 text-xs sm:text-sm tracking-wide">⭐⭐⭐⭐⭐</div>
                    <p className="text-[12px] sm:text-[14px] leading-relaxed text-gray-200 font-play italic">
                      {slide.text}
                    </p>
                    <div className="pt-2">
                      <p className="text-[10px] sm:text-[11px] font-conthrax text-[#caa193] tracking-wider">
                        — {slide.name}
                      </p>
                      <p className="text-[9px] sm:text-[10px] text-gray-400 font-play">
                        {slide.location}
                      </p>
                    </div>
                  </div>
                ))}

              </div>

              {/* Bullet Points/Dots Indicator panel */}
              <div className="flex gap-1.5 mt-4">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      activeIndex === idx ? "w-5 bg-[#b98877]" : "w-1.5 bg-gray-600"
                    }`}
                    aria-label={`Slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Vertical Border Highlight */}
          <div className="hidden md:block absolute top-0 left-1/3 w-[2px] h-full bg-gradient-to-r from-[#caa193] to-[#a0624d] z-30" />
        </div>

        <section className="bg-[#000000] py-16">
          <div className="container mx-auto px-4 sm:px-8 lg:px-16">
            <div className="text-center mb-12">
              <h2 className="text-[#b98877] text-3xl font-conthrax mb-4 leading-tight uppercase">
                Our Projects in Jumeirah
              </h2>
              <p className="text-gray-300 max-w-3xl mx-auto font-play">
                Explore our portfolio of interior fit-outs and elite residential designs in Jumeirah.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {jumeirahProjects.map((project, index) => (
                <Link key={index} href={project.link} className="block group">
                  <div className="relative overflow-hidden rounded-2xl shadow-lg cursor-pointer">
                    <div className="relative h-[320px]">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition duration-300" />
                    </div>
                    <div className="absolute inset-0 flex flex-col justify-end p-6 z-10 text-white">
                      <h3 className="text-lg font-conthrax mb-1 text-left">{project.title}</h3>
                      <p className="text-sm text-gray-300 text-left">{project.category}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Areas We Cover Section */}
        <div className="mt-14 mb-6 text-left font-play text-white">
          <h2 className="text-[#b98877] text-2xl font-conthrax leading-tight uppercase mb-4">
            Areas We Cover Within Jumeirah
          </h2>
          <p className="text-gray-300 text-sm sm:text-base ">
            WE DO provides Interior design near Jumeirah Dubai across Jumeirah 1, Jumeirah 2, Jumeirah 3, Umm Suqeim 1, Umm Suqeim 2, Umm Suqeim 3, Al Wasl, La Mer, City Walk, Box Park area, Al Safa, and surrounding residential communities.
          </p>
        </div>

        {/* FAQs Section */}
        <div className="text-left text-sm leading-relaxed font-play text-white">
          <h2 className="text-[#b98877] text-2xl font-conthrax leading-tight py-5 uppercase">
            Frequently Asked Questions
          </h2>
          <h3 className="text-[#b98877] text-md font-conthrax leading-tight py-3">
            What interior design services do you offer in Jumeirah?
          </h3>
          <p>We provide a wide range of interior design services including renovation, fitout, room redesign, and complete home transformation services.</p>

          <h3 className="text-[#b98877] text-md font-conthrax leading-tight py-3">
            Do you work in villas and apartments?
          </h3>
          <p>Yes. WE DO provides the best villa and apartment interior design and also delivers projects across both residential property types.</p>

          <h3 className="text-[#b98877] text-md font-conthrax leading-tight py-3">
            Can selected rooms be redesigned instead of the full house?
          </h3>
          <p>Absolutely. Projects can range from individual spaces to full-home redesigns.</p>

          <h3 className="text-[#b98877] text-md font-conthrax leading-tight py-3">
            Do you provide fitout after design approval?
          </h3>
          <p>Yes. WE DO Interior Design & fitout manages both interior design and fit-out execution.</p>

          <h3 className="text-[#b98877] text-md font-conthrax leading-tight py-3">
            Can you modernise older Jumeirah homes?
          </h3>
          <p>Yes. We are one of the leading renovation companies in Dubai, we provide renovation and interior upgrades form a major part of our work.</p>

          <h3 className="text-[#b98877] text-md font-conthrax leading-tight py-3">
            Do you support approvals where required?
          </h3>
          <p>Yes. Our team assists with approvals coordination where applicable.</p>
        </div>

        {/* Footer Promo Section */}
        <div className="text-left text-sm leading-relaxed font-play text-white">
          <h2 className="text-sm sm:text-lg text-[#b98877] font-conthrax uppercase mb-2 mt-10">
            Ready to Transform Your Jumeirah Home?
          </h2>
          <p className="text-[11px] sm:text-[15px] leading-relaxed text-gray-300 font-play ">
            The right interior changes more than appearance. It changes how a home feels every day. Whether you are planning a villa renovation dubai, redesigning key spaces, upgrading your apartment, or creating a completely new home experience, WE DO brings design expertise, fitout capability, and local knowledge together under one trusted team. Book your free consultation today and discover how WE DO can create a home in Jumeirah that feels refined, practical, and genuinely yours.
          </p>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;