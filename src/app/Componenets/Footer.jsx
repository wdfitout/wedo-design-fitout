"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaTiktok,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
  FaFacebook,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";

const socialLinks = [
  {
    icon: <FaInstagram />,
    href: "https://www.instagram.com/we.do.uae/",
    label: "Instagram",
  },
  {
    icon: <FaLinkedin />,
    href: "https://www.linkedin.com/company/wedointeriors/",
    label: "LinkedIn",
  },
  {
    icon: <FaPinterest />,
    href: "https://www.pinterest.com/wedo_interior/",
    label: "Pinterest",
  },
  {
    icon: <FaFacebook />,
    href: "https://www.facebook.com/wedofitout",
    label: "Facebook",
  },
  {
    icon: <FaTiktok />,
    href: "https://www.tiktok.com/@wedo_interior",
    label: "TikTok",
  },
];

const navLinks = [
  { title: "Home", path: "/" },
  { title: "Services", path: "/services" },
  { title: "Gallery", path: "/gallery" },
  { title: "Blogs", path: "/blogs" },
  { title: "About Us", path: "/about-us" },
  { title: "Contact Us", path: "/contact-us" },
];

const certificates = [
  {
    src: "/images/iso-1.webp",
    alt: "ISO Health and Safety Management System",
  },
  {
    src: "/images/iso-2.webp",
    alt: "ISO Quality Management System",
  },
  {
    src: "/images/iso-3.webp",
    alt: "ISO Environmental Management System",
  },
];

const Footer = () => {
  return (
    <footer className="w-full overflow-hidden text-white">
      {/* Black upper footer bar */}
      <div className="bg-black">
        <div className="mx-auto flex min-h-[48px] max-w-[1600px] flex-col items-center justify-between gap-4 px-5 py-4 sm:px-8 lg:flex-row lg:px-16 lg:py-0">
          {/* Social and contact */}
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-5">
            <div className="flex items-center gap-3 text-sm">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="text-white/90 transition-colors duration-300 hover:text-[#d69a87]"
                >
                  {item.icon}
                </a>
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 text-[11px] font-light tracking-wide sm:text-xs">
              <a
                href="tel:+971588075603"
                className="flex items-center gap-1.5 text-white/90 transition-colors hover:text-[#d69a87]"
              >
                <FaPhoneAlt className="text-[10px]" />
                +971 58 807 5603
              </a>

              <a
                href="https://wa.me/971588075603"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-white/90 transition-colors hover:text-[#d69a87]"
              >
                <FaWhatsapp className="text-xs" />
                +971 58 807 5603
              </a>
            </div>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden items-center gap-6 lg:flex xl:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.title}
                href={link.path}
                className="text-[11px] font-light uppercase tracking-wide text-white/90 transition-colors duration-300 hover:text-[#d69a87]"
              >
                {link.title}
              </Link>
            ))}
          </nav>

          {/* Mobile navigation */}
          <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3 lg:hidden">
            {navLinks.map((link) => (
              <Link
                key={link.title}
                href={link.path}
                className="text-[10px] font-light uppercase tracking-wide text-white/80 transition-colors hover:text-[#d69a87]"
              >
                {link.title}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Copper certification footer */}
      <div className="bg-gradient-to-r from-[#b87560] via-[#c68c79] to-[#d5a99b]">
        <div className="mx-auto grid max-w-[1600px] grid-cols-1 items-center gap-8 px-4 py-7 sm:px-8 md:py-8 lg:grid-cols-[1fr_auto_1.25fr] lg:gap-10 lg:px-6">
          {/* Contact information */}
          <div className="flex items-center justify-center gap-4 lg:justify-start">
            <div className="space-y-2 text-[10px] uppercase tracking-wide text-white sm:text-[11px]">
              <a
                href="mailto:info@wedointerior.ae"
                className="flex items-center gap-2 transition-opacity hover:opacity-75"
              >
                <IoIosMail className="shrink-0 text-base text-black/70" />
                <span>Info@wedointerior.ae</span>
              </a>

              <p className="flex items-start gap-2 leading-5">
                <IoLocationSharp className="mt-0.5 shrink-0 text-sm text-black/70" />

                <span>
                  Office – WH-05 A, Jebel Ali Industrial 1,
                  <br className="hidden sm:block" />
                  Dubai, UAE
                </span>
              </p>
            </div>
          </div>

          {/* Logo and copyright */}
          <div className="flex min-w-[230px] flex-col items-center justify-center text-center">
            <Link href="/" aria-label="WE DO homepage">
              <Image
                src="/images/logo-s-Black.png"
                alt="WE DO Design and Build"
                width={260}
                height={65}
                className="h-auto w-[170px] sm:w-[200px] lg:w-[215px]"
              />
            </Link>

            <p className="mt-4 text-[9px] uppercase tracking-wide text-white/90 sm:text-[10px]">
              © WE DO {new Date().getFullYear()} All Rights Reserved
            </p>
          </div>

          {/* Award and ISO certificates */}
          <div className="flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-4 lg:justify-end">
            {/* ISO certificates:
                second on mobile
                first on tablet and desktop
            */}
            <div className="order-2 flex items-center justify-center gap-2 sm:order-1 sm:gap-2">
              {certificates.map((certificate) => (
                <Image
                  key={certificate.src}
                  src={certificate.src}
                  alt={certificate.alt}
                  width={91}
                  height={78}
                  className="h-auto w-[72px] object-contain sm:w-[82px] xl:w-[90px]"
                />
              ))}
            </div>

            {/* Luxury award:
                first on mobile
                second on tablet and desktop
            */}
            <Image
              src="/images/luxury-h.webp"
              alt="Luxury Lifestyle Awards Winner 2026"
              width={380}
              height={155}
              className="order-1 h-auto w-[270px] object-contain sm:order-2 sm:w-[220px] lg:w-[240px] xl:w-[220px]"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;