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
  { icon: <FaInstagram />, href: "https://www.instagram.com/we.do.uae/" },
  { icon: <FaLinkedin />, href: "https://www.linkedin.com/company/wedointeriors/" },
  { icon: <FaPinterest />, href: "https://www.pinterest.com/wedo_interior/" },
  { icon: <FaFacebook />, href: "https://www.facebook.com/wedofitout" },
  { icon: <FaTiktok />, href: "https://www.tiktok.com/@wedo_interior" },
];

const navLinks = [
  { title: "Home", path: "/" },
  { title: "Services", path: "/" },
  { title: "Gallery", path: "/gallery" },
  { title: "Blogs", path: "/blogs" },
  { title: "About Us", path: "/about-us" },
  { title: "Contact Us", path: "/contact-us" },
];

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#a0624d] to-[#caa193] text-white">
      <div className="h-[2px] bg-gradient-to-r from-[#caa193] via-[#a0624d] to-[#caa193]" />

      <div className="bg-black px-4 sm:px-8 lg:px-20 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex flex-col md:flex-row items-center text-center md:text-left gap-3 md:gap-5">
          <div className="flex justify-center md:justify-start gap-3 text-lg">
            {socialLinks.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#caa193] transition-colors"
              >
                {item.icon}
              </a>
            ))}
          </div>

          <div className="flex flex-col md:flex-row items-center gap-2 text-xs lg:text-sm">
            <a
              href="tel:+971588075603"
              className="flex items-center gap-1 hover:text-[#caa193] transition-colors"
            >
              <FaPhoneAlt /> +971 58 807 5603
            </a>

            <a
              href="https://wa.me/971588075603"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-[#97c38d] transition-colors"
            >
              <FaWhatsapp /> +971 58 807 5603
            </a>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-4 lg:gap-6 font-light uppercase">
          {navLinks.map((link, idx) => (
            <Link
              key={idx}
              href={link.path}
              className="text-[11px] lg:text-[13px] tracking-wide hover:text-[#caa193] transition-colors"
            >
              {link.title}
            </Link>
          ))}
        </div>
      </div>

      <div className="md:hidden flex flex-wrap justify-center gap-4 py-4 px-4 font-light uppercase bg-black/95">
        {navLinks.map((link, idx) => (
          <Link
            key={idx}
            href={link.path}
            className="text-xs tracking-wide hover:text-[#caa193] transition-colors"
          >
            {link.title}
          </Link>
        ))}
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center px-4 sm:px-10 lg:px-20 py-5 md:py-7 gap-5 text-[11px] md:text-sm text-white">
        <div className="space-y-2 text-center md:text-left">
          <a
            href="mailto:INFO@WEDOINTERIOR.AE"
            className="flex items-center justify-center md:justify-start gap-2 hover:text-white/80 transition-colors"
          >
            <IoIosMail className="text-black/70" /> INFO@WEDOINTERIOR.AE
          </a>

          <p className="flex items-center justify-center md:justify-start gap-2">
            <IoLocationSharp className="text-black/70" />
            OFFICE - WH-05 A, JABEL ALI INDUSTRIAL 1, DUBAI, UAE
          </p>
        </div>

        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo-s-Black.png"
            alt="WE DO Logo"
            width={250}
            height={50}
            className="w-24 md:w-44 lg:w-52"
          />
        </Link>
      </div>

      <div className="text-center text-[10px] md:text-xs pb-4 uppercase">
        © WE DO {new Date().getFullYear()} All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;