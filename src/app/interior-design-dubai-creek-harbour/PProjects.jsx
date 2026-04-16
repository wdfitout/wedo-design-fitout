"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";

const services = [
  {
    title: "Office Interior Design In Creek Harbour",
    description:
      "Modern waterfront office fit-outs, smart workspace planning, and creative commercial interiors.",
    bgImage: "/images/dbckapt (2).png", // Replace with your image path
    link: "/office-interior-design-creek-harbour",
  },
  {
    title: "Apartment Interior Design In Creek Harbour",
    description:
      "Premium residential fit-outs designed for luxury living with panoramic skyline views.",
    bgImage: "/images/dbckapt (3).png", // Replace with your image path
    link: "/apartment-interior-design-creek-harbour",
  },
  {
    title: "Villa Interior Design In Creek Harbour",
    description:
      "Exclusive villa interiors blending contemporary architecture with personalized luxury.",
    bgImage: "/images/dbckapt (4).png", // Replace with your image path
    link: "/villa-interior-design-creek-harbour",
  },
  {
    title: "Restaurant Interior Design In Creek Harbour",
    description:
      "Innovative dining space designs that complement the vibrant lifestyle of the Harbour.",
    bgImage: "/images/dbckapt (6).png", // Replace with your image path
    link: "/restaurant-interior-design-creek-harbour",
  },
];

const creekHarbourProjects = [
  {
    title: "Creek Rise Executive Office",
    category: "Corporate Office - Creek Harbour",
    image: "/images/dbckapt (7).png", 
    link: "/creek-harbour-office-project",
  },
  {
    title: "Harbour Views Penthouse",
    category: "Luxury Residential - Creek Harbour",
    image: "/images/dbckapt (8).png",
    link: "/creek-harbour-penthouse",
  },
  {
    title: "Waterfront Fine Dining",
    category: "Restaurant - Creek Harbour",
    image: "/images/dbckapt (9).png",
    link: "/creek-harbour-restaurant",
  },
  {
    title: "Creek Horizon Apartment",
    category: "Residential Suite - Creek Harbour",
    image: "/images/dbckapt (6).png",
    link: "/creek-harbour-apartment-fitout",
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
              PROFESSIONAL INTERIOR DESIGN SERVICES IN DUBAI CREEK HARBOUR
            </h2>
            <p className="text-justify text-white text-base font-play mb-6 leading-relaxed">
              As a leading <b className="text-[#caa193]"><a href="#">interior design company in Dubai Creek Harbour</a></b>, we offer premium services for both commercial and luxury residential projects. Our expertise in office interior design helps businesses in this futuristic hub create inspiring and tech-driven workspaces. For commercial entities, we ensure that retail outlets and restaurants reflect the high-end aesthetic of the Harbour.
              <br /><br />
              <h3 className="text-[#b98877] text-md font-conthrax mb-4 leading-tight">
                INNOVATIVE SOLUTIONS FOR WATERFRONT LIVING
              </h3>
              For our residential clients, our apartment interior design services transform high-rise living into a sanctuary of style. We combine smart home technology with bespoke furniture to match the iconic surroundings. As top fit-out contractors in Creek Harbour, our projects reflect the perfect harmony between the skyline views and indoor comfort.
            </p>
             
            <section className="bg-[#000000] py-10">
              <div className="container mx-auto flex flex-col lg:flex-row items-center px-4 sm:px-8 lg:px-16 gap-10">
                {/* Left Side - Image */}
                <div className="w-full lg:w-1/2">
                  <Image
                    src="/images/dbckapt (5).png" 
                    alt="Luxury Interior Design in Creek Harbour"
                    width={800}
                    height={600}
                    className="w-full h-100 rounded-lg shadow-md object-cover"
                  />
                </div>

                {/* Right Side - Content */}
                <div className="w-full lg:w-1/2 text-center lg:text-left">
                  <h2 className="text-[#b98877] text-2xl font-conthrax mb-4 leading-tight">
                    Futuristic Office Design & Fit-Out
                  </h2>
                  <p className="text-white text-sm sm:text-base font-play mb-4">
                    The modern towers of Dubai Creek Harbour represent the future of business. Our office interior design services focus on sustainability, natural light, and breathtaking views, ensuring a motivating environment for global startups and firms.
                  </p>
                  <h3 className="text-[#b98877] text-md font-conthrax mb-4 leading-tight">
                    SMART SPACES FOR A MODERN ERA
                  </h3>
                  <p className="text-white text-sm sm:text-base mb-4 font-play">
                    We manage every detail of the fit-out process, including space optimization and authority approvals. Beyond Creek Harbour, our projects also extend to Dubai Festival City and Meydan, providing seamless turnkey solutions for the city's evolving commercial landscape.
                  </p>

                  <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                    <Link href="/gallery">
                      <button className="bg-[#b98877] hover:bg-[#b88f83] text-black font-conthrax px-6 py-3 rounded-md transition duration-300">
                        View Projects
                      </button>
                    </Link>
                    <Link href="/contact-us">
                      <button className="bg-[#b98877] hover:bg-[#b88f83] text-black font-conthrax px-6 py-3 rounded-md transition duration-300">
                        Get A Quote
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            {/* Services Grid */}
            <div className="text-center mt-10 mb-12">
              <h2 className="text-[#b98877] text-2xl font-conthrax mb-4 leading-tight">
                Our Services in Dubai Creek Harbour
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
                    <div className="absolute inset-0 z-10 flex flex-col justify-end p-6 text-white text-left">
                      <h3 className="text-md font-conthrax mb-2 uppercase">
                        {service.title}
                      </h3>
                      <p className="text-sm text-gray-200 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center mt-10">
              <h2 className="text-[#b98877] text-2xl font-conthrax mb-4 leading-tight">
                Turnkey Design & Build for Creek Harbour
              </h2>
              <p className="text-center max-w-6xl mx-auto mt-0 md:mt-4 text-[12px] sm:text-base text-white py-2 md:py-6 font-play">
                At WE DO Interior Design & Fitout, we provide end-to-end turnkey services for our Creek Harbour clients. From initial concept to 3D visualization and final handover, we handle all authority approvals and construction phases, ensuring a stress-free experience for your waterfront property.
              </p>
            </div>
          </div>
        </div>

        <section className="bg-[#000000] py-10">
          <div className="container mx-auto flex flex-col lg:flex-row items-center px-4 sm:px-8 lg:px-16 gap-10">
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h2 className="text-[#b98877] text-2xl sm:text-2xl font-conthrax mb-4 leading-tight">
                Luxury Apartment Design at the Creek
              </h2>
              <p className="text-white text-sm sm:text-base font-play mb-4">
                Creek Harbour is synonymous with luxury. Our apartment designs focus on maximizing the panoramic views of the Dubai Creek and Burj Khalifa while providing a bespoke interior that reflects your unique personality.
              </p>
              <h3 className="text-[#b98877] text-md font-conthrax mb-4 leading-tight">
                SOPHISTICATED INTERIORS FOR AN ICONIC LIFESTYLE
              </h3>
              <p className="text-white text-sm sm:text-base mb-4 font-play">
                Whether it's a sleek minimalist apartment in Creek Rise or a lavish penthouse in Harbour Gate, we ensure every inch of your space is optimized for elegance and comfort.
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <Link href="/gallery">
                  <button className="bg-[#b98877] hover:bg-[#b88f83] text-black font-conthrax px-6 py-3 rounded-md transition duration-300">
                    See Projects
                  </button>
                </Link>
                <Link href="/contact-us">
                  <button className="bg-[#b98877] hover:bg-[#b88f83] text-black font-conthrax px-6 py-3 rounded-md transition duration-300">
                    Consultation
                  </button>
                </Link>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <Image
                src="/images/dbckapt (2).png"
                alt="Apartment Interior Design in Creek Harbour"
                width={800}
                height={600}
                className="w-full h-100 rounded-lg shadow-md object-cover"
              />
            </div>
          </div>
        </section>

        {/* Hero Banner Section */}
        <div className="relative mb-12 transition-transform duration-500 hover:scale-[1.02]">
          <div className="relative w-full h-[200px] sm:h-[330px] overflow-hidden">
            <Image
              src="/images/dbckapt (1).webp"
              alt="Creek Harbour Projects"
              fill
              className="object-cover"
            />
            <div className="absolute inset-y-0 text-start right-0 w-1/2 md:w-1/3 bg-black/70 p-4 sm:p-10 flex flex-col justify-center">
              <h2 className="text-lg text-[#b98877] font-conthrax uppercase">
                START YOUR PROJECT AT THE CREEK TODAY
              </h2>
              <p className="text-[12px] sm:text-[14px] leading-relaxed text-gray-300 font-play">
                Ready to transform your Creek Harbour space? Contact WE DO Interior Design & Fitout for expert solutions that blend high-end luxury with functional excellence.
              </p>
            </div>
          </div>
          <div className="hidden md:block absolute top-0 left-1/3 w-[2px] h-full bg-gradient-to-b from-[#caa193] to-transparent" />
        </div>

        {/* Projects Section */}
        <section className="bg-[#000000] py-16">
          <div className="text-center mb-12">
            <h2 className="text-[#b98877] text-3xl font-conthrax mb-4 uppercase">
              Featured Creek Harbour Projects
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto font-play">
              Explore our portfolio of successfully completed interior and fit-out works across the Dubai Creek Harbour district.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {creekHarbourProjects.map((project, index) => (
              <Link key={index} href={project.link} className="block group">
                <div className="relative h-[320px] overflow-hidden rounded-2xl shadow-lg">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition" />
                  <div className="absolute inset-0 flex flex-col justify-end p-6 z-10 text-white text-left">
                    <h3 className="text-lg font-conthrax mb-1">{project.title}</h3>
                    <p className="text-sm text-gray-300 font-play">{project.category}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Renovation & Upgrade */}
        <div className="text-left mt-10">
          <h2 className="text-[#b98877] text-2xl font-conthrax mb-4 uppercase">
            Creek Harbour Renovation & Upgrades
          </h2>
          <p className="text-white text-sm sm:text-base py-4 font-play leading-relaxed">
            We offer premium renovation services to refresh and modernize your existing properties in the Harbour. From kitchen upgrades to full smart home integration, our team ensures your space stays ahead of the design curve.
          </p>
          
          <h2 className="text-[#b98877] text-2xl font-conthrax mb-4 uppercase">
            Why Choose Us in Dubai Creek Harbour
          </h2>
          <p className="text-white text-sm sm:text-base py-4 font-play leading-relaxed">
            As specialists in high-end Dubai real estate, we understand the architectural nuances of Creek Harbour's master development. Our local expertise ensures that all designs comply with the district's standards while offering world-class luxury.
          </p>

          {/* FAQs */}
          <div className="mt-12">
            <h2 className="text-[#b98877] text-2xl font-conthrax uppercase py-5">
              Frequently Asked Questions (FAQs)
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-[#b98877] font-conthrax text-md">1- How long does an apartment fit-out at Creek Harbour take?</h3>
                <p className="text-white font-play mt-2 text-sm">Typically 8 to 14 weeks, depending on customization levels and authority approvals.</p>
              </div>
              <div>
                <h3 className="text-[#b98877] font-conthrax text-md">2- Do you handle Emaar approvals for Creek Harbour?</h3>
                <p className="text-white font-play mt-2 text-sm">Yes, we manage all developer and Dubai authority approvals (Emaar, DCD, DM) for a hassle-free process.</p>
              </div>
              <div>
                <h3 className="text-[#b98877] font-conthrax text-md">3- Can you design modern luxury kitchens?</h3>
                <p className="text-white font-play mt-2 text-sm">Absolutely. We specialize in bespoke, high-end kitchen renovations that match the Harbour’s luxury standards.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;