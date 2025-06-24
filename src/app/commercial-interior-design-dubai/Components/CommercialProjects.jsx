
import React from "react";
import Image from "next/image";
import Link from "next/link";

const projects = [
    {
    img: "/images/commercial-office-reception-interior-design-dubai.webp",
    alt: "Home Interior Design",
    title: "DUBAI KNOWLEDGE PARK OFFICE FIT OUT",
    href: "/dubai-knowledge-park-office-fit-out",
  },
  {
    img: "/images/commercial (2).webp",
    alt: "Apartment Interior Design",
    title: "DUBAI OFFICE INTERIOR",
    href: "/dubai-office-interior",
  },
  {
    img: "/images/commercial (3).webp",
    alt: "Apartment Interior Design",
    title: "AL WASL CLOTHING STORE",
    href: "/al-wasl-clothing-store",
  },
    {
    img: "/images/commercial (4).webp",
    alt: "Home Interior Design",
    title: "AL SAFA REAL ESTATE OFFICE",
    href: "/al-safa-real-estate-office",
  },
  {
    img: "/images/commercial (5).webp",
    alt: "Restaurant Interior Design",
    title: "BUSINESS BAY TRAVEL AGENCY",
    href: "/business-bay-travel-agency",
  },
];

const CommercialProjects = () => {
  return (
    <section
      id="projects"
      className="bg-[url('/images/p-bg.webp')] bg-cover bg-center bg-no-repeat text-white"
    >
      {/* Arrow image */}
      <div className="mt-10 sm:mt-16 flex justify-center">
        <Image
          src="/images/sec-dvd.webp"
          alt="Scroll down arrow"
          width={320}
          height={80}
          className="h-auto w-48 sm:w-64"
          loading="lazy"
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-16 py-6 sm:py-16">
        {/* Section Title */}
        <div className="relative mb-6 sm:mb-12">
          <h2 className="text-lg sm:text-xl font-semibold tracking-wider text-center">
            OUR COMMERCIAL PROJECTS IN DUBAI
          </h2>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((card, index) => (
            <Link key={index} href={card.href}>
              <div className="relative aspect-[4/3] overflow-hidden group cursor-pointer w-full">
                <Image
                  src={card.img}
                  alt={card.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 w-full bg-black/80 z-10">
                  <div className="w-full h-[3px] bg-gradient-to-r from-[#caa193] to-[#a0624d]" />
                  <div className="p-2">
                    <h3 className="text-white text-sm text-center">{card.title}</h3>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-12 flex justify-center">
          <a
            href="mailto:info@wedointerior.ae"
            className="uppercase font-semibold tracking-wide px-20 py-3.5 text-sm text-[#a0624d] bg-transparent transition duration-300 hover:bg-[#caa193]/10 border border-transparent"
            style={{
              borderImage: "linear-gradient(to right, #caa193, #a0624d)",
              borderImageSlice: 1,
            }}
          >
            SEND YOUR ENQUIRY NOW
          </a>
        </div>
      </div>
    </section>
  );
};

export default CommercialProjects;