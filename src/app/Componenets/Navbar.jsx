"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import {
  FaTiktok,
  FaInstagram,
  FaPinterest,
  FaLinkedin,
  FaFacebook,
  FaWhatsapp,
  FaPhoneAlt,
} from "react-icons/fa";
import { HiBars3 } from "react-icons/hi2";
import { IoMdCloseCircleOutline } from "react-icons/io";
import MenuOverlay from "./MenuOverlay";
import NavLink from "./NavLink";
import Image from "next/image";

const navLinks = [
  { title: "Home", path: "/" },
  { title: "About Us", path: "/about-us" },
  { title: "Gallery", path: "/gallery" },
  { title: "Features", path: "/#features" },
  { title: "Design", path: "/#designs" },
  { title: "Services", path: "/#services" },
  { title: "Blogs", path: "/blogs" },
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
{/* Black Strip with logo + contact + icons */}
<div className="relative h-[50px] px-4 md:px-1 text-white">
  {/* Centered Logo */}
<div className="absolute inset-x-0 top-4 md:top-6 flex justify-center md:justify-start px-20 z-10">
  <Link href="/" className="flex items-center">
    <Image
      src="/images/logo.svg"
      alt="WE DO Logo"
      width={250}
      height={40}
      className="w-28 md:w-44 lg:w-44"
    />
  </Link>
</div>

  {/* Contact Info + bars.svg (Right Block) */}
  <div className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 flex flex-col items-end">
    {/* Contact and Socials */}
    <div className="flex items-center space-x-1 text-[11px] md:text-sm lg:text-base px-4">
      <span className="flex items-center space-x-1 hover:text-[#a0624d]">
        <FaPhoneAlt className="text-[6px] md:text-xs" />
        <a href="tel:+971588075603" className="text-[6px] md:text-xs">+971 58 807 5603</a>
      </span>
      <span className="flex items-center space-x-1 hover:text-[#97c38d]">
        <FaWhatsapp className="text-[6px] md:text-xs" />
        <a
          href="https://wa.me/971588075603"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[6px] md:text-xs"
        >
          +971 58 807 5603
        </a>
      </span>
      <div className="hidden md:flex space-x-2">
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

    {/* bars.svg below contact block */}
           {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="text-white"
          >
            {!navbarOpen ? (
               <Image
      src="/images/bars.svg"
      alt="Decorative Bars"
      width={80}
      height={10}
      className="w-8 h-6"
    />
            ) : (
              <IoMdCloseCircleOutline className="text-4xl" />
            )}
          </button>
        </div>
 
  </div>
</div>

      {/* Main Navbar */}
      <div className="relative flex items-center justify-between">
   

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center ml-auto">
          {navLinks.map((link, index) => (
            <div key={index} className="mr-10 group relative pb-1">
              <NavLink href={link.path} title={link.title} />
              <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-gradient-to-r from-[#caa193] to-[#a0624d] transition-all duration-300 group-hover:w-full"></span>
            </div>
          ))}
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
                className={`${social.hoverColor} transition-colors text-sm`}
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
