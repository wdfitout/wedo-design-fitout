import React from "react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    img: "/images/commercial-office-reception-interior-design-dubai.webp",
    alt: "Dubai Knowledge Park Office Fit Out",
    title: "DUBAI KNOWLEDGE PARK OFFICE FIT OUT",
    href: "/dubai-knowledge-park-office-fit-out",
  },
  {
    img: "/images/commercial (2).webp",
    alt: "Dubai Office Interior",
    title: "DUBAI OFFICE INTERIOR",
    href: "/dubai-office-interior",
  },
  {
    img: "/images/commercial (3).webp",
    alt: "Al Wasl Clothing Store",
    title: "AL WASL CLOTHING STORE",
    href: "/al-wasl-clothing-store",
  },
  {
    img: "/images/commercial (4).webp",
    alt: "Al Safa Real Estate Office",
    title: "AL SAFA REAL ESTATE OFFICE",
    href: "/al-safa-real-estate-office",
  },
  {
    img: "/images/commercial (5).webp",
    alt: "Business Bay Travel Agency",
    title: "BUSINESS BAY TRAVEL AGENCY",
    href: "/business-bay-travel-agency",
  },
];

const CommercialProjects = () => {
  return (
    <section
      id="projects"
      className="bg-black bg-[url('/images/p-bg.webp')] bg-cover bg-center bg-no-repeat text-white"
    >
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-20 lg:px-16">
        <div className="mb-10 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#caa193]">
            Portfolio
          </p>

          <h2 className="text-2xl font-semibold uppercase tracking-wide sm:text-3xl">
            Our Commercial Projects in Dubai
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Link
              key={project.title}
              href={project.href}
              className="group block overflow-hidden bg-[#111]"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={project.img}
                  alt={project.alt}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                <div className="absolute inset-0 bg-black/15 transition group-hover:bg-black/35" />
              </div>

              <div className="border-t border-[#caa193]/70 bg-black/80 px-4 py-4">
                <h3 className="text-center text-sm font-semibold uppercase leading-snug tracking-wide text-white">
                  {project.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="mailto:info@wedointerior.ae"
            className="border border-[#caa193] px-10 py-4 text-sm font-semibold uppercase tracking-wide text-[#caa193] transition duration-300 hover:bg-[#caa193] hover:text-black sm:px-16"
          >
            Send Your Enquiry Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default CommercialProjects;