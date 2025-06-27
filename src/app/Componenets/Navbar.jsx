"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import {
  FaBars,
  FaTiktok,
  FaInstagram,
  FaPinterest,
  FaLinkedin,
  FaFacebook,
  FaWhatsapp,
  FaPhoneAlt,
} from "react-icons/fa";
import { IoMdCloseCircleOutline } from "react-icons/io";
import MenuOverlay from "./MenuOverlay";
import NavLink from "./NavLink";
import Image from "next/image";

const navLinks = [
  { title: "Home", path: "/" },
  { title: "About Us", path: "/about-us" },
  { title: "Gallery", path: "/projects" },
  { title: "Features", path: "/#features" },
  { title: "Design", path: "/#designs" },
  { title: "Services", path: "/#services" },
  { title: "Blogs", path: "/#blogs" },
  { title: "Testimonials", path: "/#testimonials" },
  { title: "Contact Us", path: "/contact-us" },
];

const socialLinks = [
  { icon: <FaInstagram />, href: "https://www.instagram.com/we.do.uae/", hoverColor: "hover:text-pink-500" },
  { icon: <FaLinkedin />, href: "https://www.linkedin.com/company/wedointeriors/", hoverColor: "hover:text-blue-600" },
  { icon: <FaPinterest />, href: "https://www.pinterest.com/wedo_interior/", hoverColor: "hover:text-red-500" },
  { icon: <FaFacebook />, href: "https://www.facebook.com/wedofitout", hoverColor: "hover:text-blue-500" },
  { icon: <FaTiktok />, href: "https://www.tiktok.com/@wedo_interior", hoverColor: "hover:text-teal-500" },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || navbarOpen ? "bg-[#121212] bg-opacity-90 shadow-md" : "bg-transparent"}`}>
      {/* Top Pink Strip */}
      <div className="bg-gradient-to-r from-[#caa193] to-[#a0624d] h-1 w-full"></div>

      {/* Black Strip with contact & icons */}
      <div className="text-white text-xs md:text-sm px-4 py-2 flex justify-end items-center space-x-6 sm:mr-0 lg:mr-14">
        <span className="flex items-center space-x-1 hover:text-[#a0624d]">
          <FaPhoneAlt /> <a href="tel:+971502758210">+971 50 275 8210</a>
        </span>
        <span className="flex items-center space-x-1 hover:text-[#97c38d]">
          <FaWhatsapp />
          <a href="https://wa.me/971508079604" target="_blank" rel="noopener noreferrer">
            +971 50 807 9604
          </a>
        </span>
        <div className="hidden md:flex space-x-3 text-white">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${social.hoverColor} transition-colors`}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Main Navbar */}
      <div className="relative flex items-center justify-between px-8 mb-2">
        {/* Logo: center on mobile, left-aligned on desktop */}
        <div className="flex justify-center md:justify-start md:pl-10 w-full md:w-auto">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.svg"
              alt="WE DO Logo"
              width={250}
              height={50}
              className="w-24 md:w-44 lg:w-34 xl:w-52"
            />
          </Link>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center ml-auto">
          {navLinks.map((link, index) => (
            <div key={index} className="mr-10 group relative pb-1">
              <NavLink href={link.path} title={link.title} />
              <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-gradient-to-r from-[#caa193] to-[#a0624d] transition-all duration-300 group-hover:w-full"></span>
            </div>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden ml-auto">
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="text-white"
          >
            {!navbarOpen ? (
              <FaBars className="text-4xl" />
            ) : (
              <IoMdCloseCircleOutline className="text-4xl" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {navbarOpen && (
        <MenuOverlay links={navLinks}>
          <div className="mt-6 flex justify-center space-x-5 text-white">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${social.hoverColor} transition-colors text-xl`}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </MenuOverlay>
      )}
    </nav>
  );
};

export default Navbar;
