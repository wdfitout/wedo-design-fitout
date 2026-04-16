"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";

const services = [
  {
    title: "Villa Interior Design In Jumeirah",
    description: "Premium luxury villa interiors, space planning, and architectural fit-outs in the heart of Jumeirah.",
    bgImage: "/images/pjapt (1).webp",
    link: "/villa-interior-design-jumeirah",
  },
  {
    title: "Apartment Interior Design In Jumeirah",
    description: "Elegant apartment renovations and modern interior solutions for coastal living.",
    bgImage: "/images/pjapt (2).webp",
    link: "/apartment-interior-design-jumeirah",
  },
  {
    title: "Retail & Boutique Design In Jumeirah",
    description: "Exclusive retail store fit-outs and boutique interiors designed to enhance brand prestige.",
    bgImage: "/images/pjapt (3).webp",
    link: "/retail-interior-design-jumeirah",
  },
  {
    title: "Restaurant Interior Design In Jumeirah",
    description: "Bespoke hospitality and cafe interior styling for the elite Jumeirah dining scene.",
    bgImage: "/images/pjapt (4).webp",
    link: "/restaurant-interior-design-jumeirah",
  },
];

const jumeirahProjects = [
  {
    title: "Luxury Jumeirah Villa",
    category: "Residential Villa - Jumeirah 1",
    image: "/images/pjapt (5).webp",
    link: "/jumeirah-villa-project",
  },
  {
    title: "Coastal Apartment Interior",
    category: "Modern Apartment - Jumeirah Beach",
    image: "/images/pjapt (6).webp",
    link: "/jumeirah-apartment-project",
  },
  {
    title: "Elite Boutique Fit-Out",
    category: "Retail Store - Jumeirah Road",
    image: "/images/pjapt (7).webp",
    link: "/jumeirah-retail-project",
  },
  {
    title: "High-End Cafe Design",
    category: "Hospitality - Jumeirah 3",
    image: "/images/pjapt (8).webp",
    link: "/jumeirah-cafe-project",
  },
];

const AboutSection = () => {
  return (
    <section className="bg-[#000000] py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-8 lg:px-16">

        {/* Image + Content Row */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full text-center ">
            <h2 className="text-[#b98877] text-2xl font-conthrax mb-4 leading-tight">
              PROFESSIONAL INTERIOR DESIGN SERVICES IN JUMEIRAH
            </h2>
            <p className="text-justify text-white text-base font-play mb-6 leading-relaxed">
              As a leading <b className="text-[#caa193]"><a href="https://wedointerior.ae/interior-design-companies-in-jumeirah-dubai">interior design company in Jumeirah</a></b>, we offer services for both high-end residential 
              and exclusive commercial projects. Our services for villa interior design Jumeirah help 
              homeowners in creating a timeless and luxurious living space. For commercial businesses, our 
              bespoke fit-out services ensure that retail outlets and boutiques reflect the prestigious 
              standard of the area.
              <br /><br />
              <h3 className="text-[#b98877] text-md font-conthrax mb-4 leading-tight">
                EXCLUSIVE SOLUTIONS FOR LUXURY LIVING
              </h3>
              For our residential clients, our <b className="text-[#caa193]"><a href="https://wedointerior.ae/jumeirah-apartment">Jumeirah interior design</a></b> services help in 
              crafting homes that are sophisticated and modern. We combine custom-made furniture and 
              premium materials to suit the elite lifestyle of our Jumeirah clients. Our renovation services in 
              Jumeirah upgrade existing villas and apartments with exceptional craftsmanship.
            </p>
             
            <section className="bg-[#000000] py-10">
              <div className="container mx-auto flex flex-col lg:flex-row items-center px-4 sm:px-8 lg:px-16 gap-10">
                <div className="w-full lg:w-1/2">
                  <Image
                    src="/images/pjapt (9).webp"
                    alt="Luxury Villa Interior Design in Jumeirah"
                    width={800}
                    height={600}
                    className="w-full h-100 rounded-lg shadow-md"
                  />
                </div>

                <div className="w-full lg:w-1/2 text-center lg:text-left">
                  <h2 className="text-[#b98877] text-2xl font-conthrax mb-4 leading-tight">
                    Villa Design and Luxury Fit-Out in Jumeirah
                  </h2>
                  <p className="text-white text-sm sm:text-base font-play mb-4">
                    Jumeirah is home to some of Dubai’s most magnificent villas and luxury estates. Our <b className="text-[#caa193]"><a href="#">luxury interior design Jumeirah</a></b> services are focused on delivering elegance and superior quality.
                  </p>
                  <h3 className="text-[#b98877] text-md font-conthrax mb-4 leading-tight">
                    PREMIUM RESIDENTIAL EXPERTISE
                  </h3>
                  <p className="text-white text-sm sm:text-base mb-4 font-play">
                    We manage every detail of villa fit-outs, from bespoke flooring to luxury lighting and landscape integration. As professional contractors, we handle all Jumeirah-specific authority approvals to ensure a seamless experience.
                  </p>

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
                <h2 className="text-[#b98877] text-2xl font-conthrax mb-4 leading-tight">
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
                        <h3 className="text-md font-conthrax mb-2">{service.title}</h3>
                        <p className="text-sm text-gray-200 leading-relaxed">{service.description}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="text-center mt-10">
                <h2 className="text-[#b98877] text-2xl font-conthrax mb-4 leading-tight">
                  Turnkey Design & Build for Jumeirah Estates
                </h2>
                <p className="text-center max-w-6xl mx-auto text-sm sm:text-base text-white py-6 font-play">
                  At <b className="text-[#caa193]"><a href="https://wedointerior.ae/">WE DO Interior Design & Fitout</a></b>, we offer full turnkey solutions for Jumeirah’s elite residents. From initial concept to Dubai Municipality approvals and final styling, we provide a stress-free transformation of your luxury property.
                </p>
              </div>
            </section>
          </div>
        </div>

        <section className="bg-[#000000] py-10">
          <div className="container mx-auto flex flex-col lg:flex-row items-center px-4 sm:px-8 lg:px-16 gap-10">
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h2 className="text-[#b98877] text-2xl font-conthrax mb-4 leading-tight">
                Luxury Apartment & Villa Refurbishment
              </h2>
              <p className="text-white text-sm sm:text-base font-play mb-4">
                Jumeirah is synonymous with luxury coastal living. Our interior services are designed to enhance your property’s value and aesthetic appeal through world-class design techniques.
              </p>
              <h3 className="text-[#b98877] text-md font-conthrax mb-4 leading-tight">
                TAILORED SPACES FOR ELITE LIFESTYLES
              </h3>
              <p className="text-white text-sm sm:text-base mb-4 font-play">
                From beachside villas in Jumeirah 1 to contemporary apartments, our designs blend innovation with elegance. We create functional yet artistic environments that reflect the unique personality of each client.
              </p>

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

          <div className="text-center mt-10">
            <h2 className="text-[#b98877] text-2xl font-conthrax mb-4 leading-tight">
              Why Choose WE DO Interiors in Jumeirah
            </h2>
            <p className="text-center max-w-6xl mx-auto text-sm sm:text-base text-white py-6 font-play">
              Choosing the right interior designer in Jumeirah is crucial for achieving high-end results. Our team understands the architectural nuances of the region and provides bespoke designs that respect the iconic Jumeirah landscape while offering modern comfort.
            </p>
          </div>
        </section>

        <div className="relative mb-12 transition-transform duration-500 hover:scale-105">
          <div className="block">
            <Image
              src="/images/pjapt (11).webp"
              alt="Elite Interior Design Jumeirah"
              width={1400}
              height={600}
              className="object-cover w-full h-[200px] sm:h-[330px]"
            />
            <div className="absolute inset-y-0 text-start right-0 w-1/2 md:w-1/3 bg-black/70 p-2 sm:p-10 flex flex-col justify-center">
              <h2 className="text-lg text-[#b98877] font-conthrax uppercase">
                START YOUR JUMEIRAH PROJECT TODAY
              </h2>
              <p className="text-[15px] leading-relaxed text-gray-300 font-play">
                Transform your Jumeirah villa or commercial space into a masterpiece. Contact us for a free site visit and expert consultation.
              </p>
            </div>
          </div>
          <div className="hidden md:block absolute top-0 left-1/3 w-[2px] h-full bg-gradient-to-r from-[#caa193] to-[#a0624d]" />
        </div>

        <section className="bg-[#000000] py-16">
          <div className="container mx-auto px-4 sm:px-8 lg:px-16">
            <div className="text-center mb-12">
              <h2 className="text-[#b98877] text-3xl font-conthrax mb-4 leading-tight">
                Our Projects in Jumeirah
              </h2>
              <p className="text-gray-300 max-w-3xl mx-auto font-play">
                Explore our portfolio of luxury villa fit-outs and elite residential designs in Jumeirah.
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
                      <h3 className="text-lg font-conthrax mb-1">{project.title}</h3>
                      <p className="text-sm text-gray-300">{project.category}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <div className="text-left mt-10 text-sm leading-relaxed font-play text-white">
          <h2 className="text-[#b98877] text-2xl font-conthrax leading-tight py-5">
            Frequently asked questions (FAQs)
          </h2>
          <h3 className="text-[#b98877] text-md font-conthrax leading-tight py-3">
            1- What is the typical timeline for a villa renovation in Jumeirah?
          </h3>
          <p>Depending on complexity, it takes 8 to 16 weeks, including all municipality approvals.</p>

          <h3 className="text-[#b98877] text-md font-conthrax leading-tight py-3">
            2- Do you handle authority approvals for Jumeirah properties?
          </h3>
          <p>Yes, we manage all paperwork for Dubai Municipality, Civil Defence, and Jumeirah-specific regulations.</p>

          <h3 className="text-[#b98877] text-md font-conthrax leading-tight py-3">
            3- Can you design modern interiors for traditional Jumeirah villas?
          </h3>
          <p>Absolutely. We specialize in blending modern luxury with the classic architecture found in Jumeirah.</p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;