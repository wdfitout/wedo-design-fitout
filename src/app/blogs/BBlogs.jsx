"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaPinterestP, FaWhatsapp, FaLink } from "react-icons/fa";

// Blog Data
const blogPosts = [
 {
    title: "Luxury Bathroom Design Trends in Dubai Creek Harbour",
    date: "Published: 21.04.2026",
    excerpt:
      "Explore luxury bathroom trends in Dubai Creek Harbour with WE DO Interior Design: spa-layouts, smart tech, and premium finishes.",
    image: "/images/Luxury Bathroom Design Trends in Dubai Creek Harbour Homes.png",
    link: "/bathroom-design-trends-dubai-creek-harbour",
  },
  {
   title: "High-End Living Room interior Design in Business Bay Dubai",
    date: "Published: 18.04.2026",
    excerpt:
      "Discover how to design a luxury living room interior in Business Bay with modern interiors smart layouts, and expert tips from WE DO.",
    image: "/images/Luxury interior material focus Dubai living room.png",
    link: "/living-room-interior-business-bay",
  },
   {
    title: "Commercial Interior Fit-out in Business Bay Dubai",
    date: "Published: 11.04.2026",
    excerpt:
      " Expert modern commercial interior fit-out and luxury office design in Business Bay Dubai by leading WE DO Interior Design & Fitout.",
    image: "/images/Commercial Interior Fit-out in Business Bay Dubai.png",
    link: "/commercial-interior-fit-out",
  },
  {
    title: "Essential Office Interior Elements in Business bay",
    date: "Published: 18.03.2026",
    excerpt:
      "Explore essential office interior elements in Business Bay Dubai, including layout planning, lighting to create modern workspaces.",
    image: "/images/dubai-office-aesthetic-interior-design-in-business-bay.png",
    link: "/office-interior-elements-business-bay",
  },
  {
    title: "5 Things to Consider When Designing Your Business Bay Apartment",
    date: "Published: 03.03.2026",
    excerpt:
      "Discover 5 key tips for designing your Business Bay apartment with modern layouts, luxury finishes, and smart technology by WE DO.",
    image: "/images/business-bay-apartment-space-planning-in-dubai.png",
    link: "/business-bay-apartment-design",
  },
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
