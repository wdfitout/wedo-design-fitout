import React from "react";
import { FaMobileScreen } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#121212]-800 text-white py-4 px-2 ">
      <div className="container mx-auto flex flex-col md:flex-row md:justify-between md:items-center">
        <div className="flex flex-col items-center md:flex-row md:items-center mb-5">
        <Link href={"/"} className="flex items-center"><Image src="/images/logo.webp" alt="Logo" className="h-18 mb-4 md:mb-0" width={190} height={5} />
        </Link>
          <nav className="flex flex-wrap md:flex-nowrap md:ml-4 space-x-3">
            
            <a href="/" className="hover:text-[#c38d90]">Home</a>
            <a href="/#about-us" className="hover:text-[#c38d90]">About Us</a>
            <a href="/#projects" className="hover:text-[#c38d90]">Projects</a>
            <a href="/#features" className="hover:text-[#c38d90]">Features</a>
            <a href="/#areas" className="hover:text-[#c38d90]">Areas</a>
            <a href="/#services" className="hover:text-[#c38d90]">Services</a>
            <a href="/#contact" className="hover:text-[#c38d90]">Contact Us</a>
          </nav>
        </div>
        <div className="flex flex-col md:flex-row items-center md:items-end">
          <div className="mr-8 mb-4 md:mb-0">
          <div className="flex items-center mb-2">
      <FaMobileScreen className="h-4 w-4 mr-2 text-[#c38d90]" /> 
      <p>+971 58 807 5603</p>
    </div>
    <div className="flex items-center mb-2">
      <FaPhone className="h-4 w-4 mr-2 text-[#c38d90]" /> 
      <p>+971 42 762 520</p>
    </div>
    <div className="flex items-center mb-2">
      <IoIosMail className="h-4 w-4 mr-2 text-[#c38d90]" /> 
      <p>INFO@WEDOINTERIOR.AE</p>
    </div>
    <div className="flex items-start mb-2">
  <IoLocationSharp className="h-4 w-4 mr-2 text-[#c38d90]" />
  <p className="inline-block">OFFICE - WH-05 A | JABEL ALI INDUSTRIAL 1 | DUBAI, UAE</p>
</div>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-4 text-center">
        <p>We Do &copy; {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;