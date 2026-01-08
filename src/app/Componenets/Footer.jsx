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
  { icon: <FaTiktok />, href: "https://www.tiktok.com/@wedo_interior" },
  { icon: <FaInstagram />, href: "https://www.instagram.com/wedo_interior/" },
  { icon: <FaLinkedin />, href: "https://www.linkedin.com/company/wedointeriors/" },
  { icon: <FaPinterest />, href: "https://www.pinterest.com/wedo_interior/" },
  { icon: <FaFacebook />, href: "https://www.facebook.com/wedofitout" },
];

const navLinks = [
  "Home",
  "About Us",
  "Projects",
  "Features",
  "Areas",
  "Services",
  "Blogs",
  "Testimonials",
  "Contact Us",
];

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#a0624d] to-[#caa193] text-white text-[6px] md:text-sm">
      {/* Top Decorative Line */}
      <div className="h-[2px] bg-gradient-to-r from-[#caa193] via-[#a0624d] to-[#caa193]" />

      {/* Black Strip Section */}
      <div className="bg-black md:px-4 sm:px-8 lg:px-20 py-2 md:py-4 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Social Links and Contacts */}
        <div className="flex flex-col md:flex-row items-center text-center md:text-left gap-2 md:gap-4 text-sm">
          <div className="flex justify-center md:justify-start gap-3 text-lg">
            {socialLinks.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#C49B74] transition"
              >
                {item.icon}
              </a>
            ))}
          </div>
          <div className="flex flex-col md:flex-row items-center gap-2 text-xs md:ml-6">
            <span className="flex items-center gap-1">
              <FaPhoneAlt /> +971 42 762 520
            </span>
            <span className="flex items-center gap-1">
              <FaWhatsapp /> +971 58 807 5603
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-3 font-light uppercase">
          {navLinks.map((link, idx) => (
            <Link key={idx} href={`/#${link.toLowerCase().replace(/ /g, "-")}`}>
              <span className="hover:text-[#C49B74] transition">{link}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden flex flex-wrap justify-center gap-3 py-3 px-4 font-light uppercase">
        {navLinks.map((link, idx) => (
          <Link key={idx} href={`/#${link.toLowerCase().replace(/ /g, "-")}`}>
            <span className="hover:text-[#C49B74] transition">{link}</span>
          </Link>
        ))}
      </div>

      {/* Info Section */}
      <div className="flex flex-col md:flex-row justify-between items-center px-4 sm:px-10 lg:px-20 py-2 md:py-6 gap-4 text-[9px] md:text-sm text-white">
        <div className="md:space-y-2 text-center md:text-left">
          <p className="flex items-center gap-2">
            <IoIosMail className="text-[#c38d90]" /> INFO@WEDOINTERIOR.AE
          </p>
          <p className="flex items-center gap-2">
            <IoLocationSharp className="text-[#c38d90]" />
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

      {/* Footer Bottom Bar */}
      <div className="text-center text-[10px] md:text-xs pb-4">
        © WEDO {new Date().getFullYear()} ALL RIGHTS RESERVED
      </div>
    </footer>
  );
};

export default Footer;
