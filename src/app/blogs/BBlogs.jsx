"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaPinterestP, FaWhatsapp, FaLink } from "react-icons/fa";

// Blog Data
const blogPosts = [
  
  {
    title: "Office Interior Design Trends in Business Bay",
    date: "Published: 12.02.2026",
    excerpt:
      "Explore the latest office interior design trends in Business Bay for 2026, including flexible layouts, biophilic design & luxury office fit-out solutions.",
    image: "/images/smart-technology-integration-office-interior-business-bay.png",
    link: "/office-interior-design-trends-in-business-bay",
  },

  {
   title: " 5 Differences Between Villa and Apartment Interiors in Dubai",
    date: "Published: 02.02.2026",
    excerpt:
      "Dubai's property market provides two unique ways of living: residences in villas and those in apartments.",
    image: "/images/5_Differences_Between_Villa_and_Apartment_Interiors_in_Dubai.png",
    link: "/dubai-villa-vs-apartment-interior-design",
  },
   {
   title: " Villa Construction in Dubai - Dubai Construction Company",
    date: "Published: 05.01.2026",
    excerpt:
      "Luxury villa construction in Dubai with complete construction execution, design & build, interior design and smart home systems.",
    image: "/images/luxury-villa-architectural-planning-and-design-dubai.png",
    link: "/complete-villa-construction-dubai",
  },
   
  {
   title: "Interior Design Companies in Business Bay",
    date: "Published: 15.12.2025",
    excerpt:
      "WE DO Interior Design & Fitout is a Dubai, based interior design studio providing functional design and premium solutions.",
    image: "/images/Villa_Interior_Design_in_Business_Bay_Dubai.png",
    link: "/interior-design-companies-in-business-bay-dubai",
  },
  
  {
    title: "6 Interior Design Styles Dubai 2025",
    date: "Published: 23.09.2025",
    excerpt:
      "Explore the top 6 interior design styles of 2025. From modern to boho, WE DO Interior Design & Fitout helps bring your vision to life in Dubai.",
    image: "/images/six-best-interior-design-trends-dubai-2025.png",
    link: "/interior-design-styles-dubai-2025",
  },
  {
   title: "5 Modern Apartment Interior Design",
    date: "Published: 11.09.2025",
    excerpt:
      "Discover modern apartment interior designs in 2025. Explore 5 trending styles in Dubai, from minimalism to boho, for elegant living spaces.",
    image: "/images/high-end-dubai-apartment-interior-design-in-dubai.png",
    link: "/modern-apartment-interior-design",
  },
 {
    title: "Tips For Luxury Villa Interior Design in Dubai",
    date: "Published: 25.05.2025",
    excerpt:
      " Discover bespoke villa interior design in Dubai. From Al Manara to District 1 MBR City, we redefine through design & turnkey fitout.",
    image: "/images/district-one-contemporary-villa-interior-luxury-villa-interior-design-in-dubai.png",
    link: "/luxury-villa-interior-design-in-dubai",
  },
];

const Blogs = () => {
  const copyLink = (link) => {
    navigator.clipboard.writeText(link);
    alert("Link copied to clipboard!");
  };

  const shareBlog = (platform, link) => {
    let url = "";
    switch (platform) {
      case "facebook":
        url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(link)}`;
        break;
      case "instagram":
        url = `https://www.instagram.com/?url=${encodeURIComponent(link)}`;
        break;
      case "pinterest":
        url = `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(link)}`;
        break;
      case "whatsapp":
        url = `https://wa.me/?text=${encodeURIComponent(link)}`;
        break;
    }
    window.open(url, "_blank");
  };

  return (
    <section className="bg-black text-white py-20 min-h-screen">
      <div className="w-[90%] sm:w-[85%] md:w-[80%] lg:w-[70%] mx-auto">
        <h1 className="text-center text-white text-xl sm:text-2xl mb-10 font-conthrax tracking-widest uppercase">
          All Blogs
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <Link href={post.link} key={index}>
              <div className="bg-gradient-to-br from-[#caa193] to-[#a0624d] p-[1px] rounded-md transition-transform duration-500 hover:scale-105 cursor-pointer">
                <div className="bg-black p-4 rounded-md flex flex-col h-full">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={500}
                    height={300}
                    className="rounded w-full h-auto object-cover"
                  />

                  <div className="mt-3 flex flex-col flex-grow">
                    {/* Header: Title + Published */}
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xs text-[#caa193] font-conthrax uppercase leading-snug w-[70%] break-words line-clamp-2">
                        {post.title}
                      </h3>

                      <div className="flex flex-col items-end w-[30%] text-xs text-white font-play ml-2">
                        <span className="opacity-70">Published:</span>
                        <span>{post.date.replace("Published: ", "")}</span>
                        <div className="mt-1">
                          <Image src="/images/blog-icon.svg" alt="Blog Icon" width={18} height={18} />
                        </div>
                      </div>
                    </div>

                    {/* Excerpt */}
                    <p className="text-sm text-gray-300 mb-4 leading-relaxed mt-1 font-play">
                      {post.excerpt}
                    </p>

                    {/* Read More */}
                    <div className="text-right mt-auto">
                      <span className="text-white text-sm font-play">
                        Read More <span className="text-base">{'\u00BB'}</span>
                      </span>
                    </div>
                  </div>

                  {/* Share + Copy */}
                  <div className="mt-6 pt-4 flex items-center justify-between text-xs">
                    <span
                      onClick={() => copyLink(post.link)}
                      className="text-[#caa193] flex items-center gap-2 font-conthrax cursor-pointer"
                    >
                      COPY LINK <FaLink className="bg-[#caa193] text-black rounded p-[2px]" />
                    </span>

                    <div className="flex items-center gap-2 text-[#caa193]">
                      <span className="font-conthrax">SHARE</span>
                      <FaFacebookF
                        size={14}
                        className="bg-[#caa193] text-black rounded p-[3px] cursor-pointer"
                        onClick={() => shareBlog("facebook", post.link)}
                      />
                      <FaInstagram
                        size={14}
                        className="bg-[#caa193] text-black rounded p-[3px] cursor-pointer"
                        onClick={() => shareBlog("instagram", post.link)}
                      />
                      <FaPinterestP
                        size={14}
                        className="bg-[#caa193] text-black rounded p-[3px] cursor-pointer"
                        onClick={() => shareBlog("pinterest", post.link)}
                      />
                      <FaWhatsapp
                        size={14}
                        className="bg-[#caa193] text-black rounded p-[3px] cursor-pointer"
                        onClick={() => shareBlog("whatsapp", post.link)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
