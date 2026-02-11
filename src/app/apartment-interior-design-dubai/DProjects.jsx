'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const heroImage = '/images/apartment-hero.webp';

const services = [
  {
    title: 'Luxury Apartment Interior Design',
    desc: 'Personalized apartment interiors that combine elegance, comfort, and smart space utilization.',
    image: '/images/services/luxury-design.jpg',
  },
  {
    title: 'Turnkey Fit-Out Solutions',
    desc: 'From approvals to execution, we manage every detail for a seamless interior journey.',
    image: '/images/services/turnkey-fitout.jpg',
  },
  {
    title: 'Custom Furniture & Joinery',
    desc: 'Bespoke wardrobes, kitchens, and storage designed to fit your apartment perfectly.',
    image: '/images/services/custom-furniture.jpg',
  },
  {
    title: 'Apartment Renovation',
    desc: 'Upgrade layouts, finishes, and functionality with cost-effective renovation solutions.',
    image: '/images/services/apartment-renovation.jpg',
  },
  {
    title: 'Lighting & Material Selection',
    desc: 'Mood-defining lighting and premium finishes curated by expert designers.',
    image: '/images/services/lighting-material.jpg',
  },
  {
    title: '3D Design & Space Planning',
    desc: 'Photorealistic 3D visuals and layout planning before execution begins.',
    image: '/images/services/3d-design.jpg',
  },
];

export default function ApartmentDesignDubaiPage() {
  return (
    <section className="bg-black text-white">

      {/* HERO SECTION */}
      <div className="relative h-[70vh] w-full">
        <Image
          src={heroImage}
          alt="Apartment Design Dubai"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <div className="text-center max-w-3xl px-6">
            <h1 className="text-2xl sm:text-4xl font-conthrax text-[#caa193] uppercase tracking-widest">
              Apartment Design Dubai
            </h1>
            <p className="mt-6 text-sm sm:text-base font-play text-gray-200">
              Contemporary apartment interior design solutions crafted for modern Dubai living.
            </p>
          </div>
        </div>
      </div>

      {/* INTRO CONTENT */}
      <div className="max-w-5xl mx-auto px-6 py-16 space-y-6 font-play">
        <p>
          Designing an apartment in Dubai requires a deep understanding of space,
          lifestyle, and architectural flow. At <b className="text-[#caa193]">WE DO Interior Design & Fitout</b>,
          we create interiors that are elegant, practical, and tailored to urban living.
        </p>
        <p>
          Whether it’s a studio, a 1-bedroom apartment, or a luxury penthouse,
          our apartment design services focus on maximizing comfort while reflecting
          your personal style.
        </p>
      </div>

      {/* SERVICES WITH FULL BACKGROUND IMAGES */}
      <div className="px-6 md:px-16 lg:px-24 py-20">
        <h2 className="text-center text-xl sm:text-2xl font-conthrax text-[#caa193] mb-12 uppercase">
          Our Apartment Interior Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item, index) => (
            <div
              key={index}
              className="relative h-[420px] rounded-xl overflow-hidden group"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${item.image})` }}
              />
              <div className="absolute inset-0 bg-black/65" />
              <div className="relative z-10 p-6 h-full flex flex-col justify-end">
                <h3 className="font-conthrax text-lg mb-2">
                  {item.title}
                </h3>
                <p className="font-play text-sm text-gray-200">
                  {item.desc}
                </p>
                <div className="mt-4 h-[2px] w-12 bg-[#caa193]" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CONTEMPORARY THEME SECTION (MUSE INSPIRED) */}
      <div className="bg-[#f5ede5] text-black py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-xl sm:text-2xl font-conthrax mb-6">
              Get Your Place a Contemporary Theme with Apartment Design Dubai
            </h2>
            <p className="font-play text-sm sm:text-base mb-4">
              Contemporary apartment design focuses on clean lines, neutral palettes,
              and functional layouts. Our designers blend modern aesthetics with Dubai’s
              cosmopolitan lifestyle to create spaces that feel open and inviting.
            </p>
            <p className="font-play text-sm sm:text-base">
              From smart storage solutions to subtle luxury finishes, we ensure your
              apartment reflects modern elegance without compromising comfort.
            </p>
          </div>

          <div className="rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/contemporary-apartment.webp"
              alt="Contemporary Apartment Design Dubai"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>

      {/* FINAL CTA */}
      <div className="py-20 text-center px-6">
        <h2 className="text-xl sm:text-2xl font-conthrax text-[#caa193] mb-4">
          Ready to Design Your Apartment?
        </h2>
        <p className="font-play text-sm sm:text-base text-gray-300 mb-8">
          Let’s transform your Dubai apartment into a refined, functional living space.
        </p>
        <Link
          href="/contact-us"
          className="inline-block border border-[#caa193] px-8 py-3 text-sm font-play uppercase tracking-widest hover:bg-[#caa193] hover:text-black transition"
        >
          Book Free Consultation
        </Link>
      </div>

    </section>
  );
}
