"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  FaTiktok,
  FaInstagram,
  FaPinterest,
  FaLinkedin,
  FaFacebook,
  FaWhatsapp,
  FaPhoneAlt,
} from "react-icons/fa";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { HiChevronDown, HiChevronRight } from "react-icons/hi";
import Image from "next/image";

const navLinks = [
  { title: "Home", path: "/" },
  {
    title: "Services",
    path: "/",
    submenu: [
      {
        title: "COMMERCIAL",
        path: "/commercial-interior-design-dubai",
        children: [
          {
            title: "BEAUTY SALON",
            path: "/beauty-salon-interior-design-dubai",
          },
          {
            title: "OFFICE",
            path: "/office-interior-design-dubai",
          },
          {
            title: "BARBER",
            path: "/commercial-interior-design-dubai",
          },
          {
            title: "HOTEL",
            path: "/hotel-interior-design-dubai",
          },
          {
            title: "LANDSCAPE",
            path: "/landscape-design-dubai",
          },
          {
            title: "RESTAURANT",
            path: "/restaurant-interior-design",
          },
        ],
      },
      {
        title: "RESIDENTIAL",
        path: "/villa-interior-design-dubai",
        children: [
          {
            title: "VILLA",
            path: "/villa-interior-design-dubai",
          },
          {
            title: "APARTMENT",
            path: "/apartment-interior-design-dubai",
          },
          {
            title: "BEDROOM",
            path: "/villa-interior-design-dubai",
          },
          {
            title: "LIVING ROOM",
            path: "/villa-interior-design-dubai",
          },
          {
            title: "KITCHEN",
            path: "/villa-interior-design-dubai",
          },
          {
            title: "MAJLIS",
            path: "/villa-interior-design-dubai",
          },
        ],
      },
      {
        title: "RENOVATION",
        path: "/apartment-interior-design-dubai",
        children: [
          {
            title: "VILLA RENOVATION",
            path: "/villa-renovation-dubai",
          },
          {
            title: "APARTMENT RENOVATION",
            path: "/apartment-interior-design-dubai",
          },
          {
            title: "OFFICE RENOVATION",
            path: "/apartment-interior-design-dubai",
          },
          {
            title: "RETAIL RENOVATION",
            path: "/apartment-interior-design-dubai",
          },
          {
            title: "KITCHEN RENOVATION",
            path: "/apartment-interior-design-dubai",
          },
          {
            title: "BATHROOM RENOVATION",
            path: "/apartment-interior-design-dubai",
          },
        ],
      },
      {
        title: "FURNITURE",
        path: "/da-vinci-tower-pagani-furniture",
      },
    ],
  },
  {
    title: "Gallery",
    path: "/gallery",
  },
  {
    title: "Blogs",
    path: "/blogs",
  },
  {
    title: "About Us",
    path: "/about-us",
  },
  {
    title: "Contact Us",
    path: "/contact-us",
  },
];

const socialLinks = [
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/we.do.uae/",
    label: "Instagram",
    hoverColor: "hover:text-pink-500",
  },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/company/wedointeriors/",
    label: "LinkedIn",
    hoverColor: "hover:text-blue-600",
  },
  {
    icon: FaPinterest,
    href: "https://www.pinterest.com/wedo_interior/",
    label: "Pinterest",
    hoverColor: "hover:text-red-500",
  },
  {
    icon: FaFacebook,
    href: "https://www.facebook.com/wedofitout",
    label: "Facebook",
    hoverColor: "hover:text-blue-500",
  },
  {
    icon: FaTiktok,
    href: "https://www.tiktok.com/@wedo_interior",
    label: "TikTok",
    hoverColor: "hover:text-teal-500",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDesktopService, setActiveDesktopService] = useState(null);
  const [openMobileMenu, setOpenMobileMenu] = useState(null);
  const [openMobileChildMenu, setOpenMobileChildMenu] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!navbarOpen) {
      setOpenMobileMenu(null);
      setOpenMobileChildMenu(null);
    }
  }, [navbarOpen]);

  return (
    <nav
      aria-label="Primary navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || navbarOpen
          ? "bg-[#121212]/90 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div
        aria-hidden="true"
        className="bg-gradient-to-r from-[#caa193] to-[#a0624d] h-[2px] w-full"
      />

      <div className="relative h-[56px] md:h-[82px] px-4 md:px-6 text-white">
        {/* Desktop */}
        <div className="hidden md:grid grid-cols-[210px_1fr_auto] items-center h-full gap-5">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center"
            aria-label="WE DO homepage"
          >
            <Image
              src="/images/logo.svg"
              alt="WE DO Logo"
              width={250}
              height={40}
              className="w-36 lg:w-44"
              priority
            />
          </Link>

          {/* Desktop Navlinks */}
          <div className="flex items-center justify-center gap-5 lg:gap-7">
            {navLinks.map((link) => (
              <div
                key={link.title}
                className="relative group"
                onMouseLeave={() => {
                  if (link.title === "Services") {
                    setActiveDesktopService(null);
                  }
                }}
              >
                <Link
                  href={link.path}
                  className="flex items-center gap-1 py-7 text-white text-[11px] lg:text-[13px] uppercase tracking-wide transition-colors duration-300 hover:text-[#caa193]"
                >
                  {link.title}

                  {link.submenu?.length > 0 && (
                    <HiChevronDown
                      aria-hidden="true"
                      focusable="false"
                      className="text-sm text-[#caa193] transition-transform duration-300 group-hover:rotate-180"
                    />
                  )}
                </Link>

                <span
                  aria-hidden="true"
                  className="absolute left-0 bottom-5 h-[2px] w-0 bg-[#caa193] transition-all duration-300 group-hover:w-full"
                />

                {link.title === "Services" &&
                  link.submenu?.length > 0 && (
                    <div className="absolute left-0 top-full pt-3 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 z-50">
                      <div className="flex items-start">
                        <div className="w-[230px] bg-black/80 backdrop-blur-md overflow-hidden">
                          {link.submenu.map((item, subIndex) => (
                            <div
                              key={item.title}
                              onMouseEnter={() =>
                                setActiveDesktopService(subIndex)
                              }
                              className="flex items-center justify-between px-6 py-4 border-b border-[#caa193] cursor-pointer hover:bg-white/5 transition-all duration-300"
                            >
                              <Link
                                href={item.path}
                                className="text-white text-[12px] font-normal uppercase tracking-wide"
                              >
                                {item.title}
                              </Link>

                              {item.children?.length > 0 && (
                                <HiChevronRight
                                  aria-hidden="true"
                                  focusable="false"
                                  className="text-[#caa193] text-[12px] shrink-0"
                                />
                              )}
                            </div>
                          ))}
                        </div>

                        {activeDesktopService !== null &&
                          link.submenu[activeDesktopService]?.children
                            ?.length > 0 && (
                            <div className="w-[230px] bg-black/80 backdrop-blur-md overflow-hidden">
                              {link.submenu[
                                activeDesktopService
                              ].children.map((child) => (
                                <Link
                                  key={child.title}
                                  href={child.path}
                                  className="block px-6 py-4 text-white text-[12px] font-normal uppercase tracking-wide border-b border-[#caa193] hover:bg-white/5 transition-all duration-300"
                                >
                                  {child.title}
                                </Link>
                              ))}
                            </div>
                          )}
                      </div>
                    </div>
                  )}
              </div>
            ))}
          </div>

          {/* Desktop Contact + Socials */}
          <div className="flex items-center justify-end gap-3 text-[12px] lg:text-[14px] whitespace-nowrap">
            <a
              href="tel:+971588075603"
              aria-label="Call WE DO at +971 58 807 5603"
              className="flex items-center gap-1 hover:text-[#caa193] transition-colors"
            >
              <FaPhoneAlt
                aria-hidden="true"
                focusable="false"
                className="text-sm"
              />

              <span>+971 58 807 5603</span>
            </a>

            <a
              href="https://wa.me/971588075603"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with WE DO on WhatsApp"
              className="flex items-center gap-1 hover:text-[#97c38d] transition-colors"
            >
              <FaWhatsapp
                aria-hidden="true"
                focusable="false"
                className="text-sm"
              />

              <span>+971 58 807 5603</span>
            </a>

            <div
              className="flex items-center gap-2 text-sm lg:text-base"
              aria-label="WE DO social media links"
            >
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit WE DO on ${social.label}`}
                    className={`${social.hoverColor} transition-colors`}
                  >
                    <Icon
                      aria-hidden="true"
                      focusable="false"
                    />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile Header */}
        <div className="md:hidden flex items-center justify-between h-full">
          <Link
            href="/"
            className="flex items-center"
            aria-label="WE DO homepage"
          >
            <Image
              src="/images/logo.svg"
              alt="WE DO Logo"
              width={250}
              height={40}
              className="w-28"
              priority
            />
          </Link>

          <button
            type="button"
            onClick={() => setNavbarOpen((prev) => !prev)}
            className="text-white"
            aria-label={
              navbarOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={navbarOpen}
            aria-controls="mobile-navigation-menu"
          >
            {!navbarOpen ? (
              <Image
                src="/images/bars.svg"
                alt=""
                aria-hidden="true"
                width={80}
                height={10}
                className="w-8 h-6"
              />
            ) : (
              <IoMdCloseCircleOutline
                aria-hidden="true"
                focusable="false"
                className="text-4xl"
              />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {navbarOpen && (
        <div
          id="mobile-navigation-menu"
          className="md:hidden bg-black/95 backdrop-blur-md border-t border-white/10 max-h-[calc(100vh-58px)] overflow-y-auto"
        >
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link, index) => {
              const isOpen = openMobileMenu === index;
              const submenuId = `mobile-submenu-${index}`;

              return (
                <div
                  key={link.title}
                  className="border-b border-[#caa193]/50 pb-2 last:border-b-0"
                >
                  <div className="flex items-center justify-between gap-3">
                    <Link
                      href={link.path}
                      className="flex-1 py-3 text-white text-base uppercase tracking-wide"
                      onClick={() => setNavbarOpen(false)}
                    >
                      {link.title}
                    </Link>

                    {link.submenu?.length > 0 && (
                      <button
                        type="button"
                        onClick={() =>
                          setOpenMobileMenu(
                            isOpen ? null : index
                          )
                        }
                        className="p-2 text-white"
                        aria-label={`${
                          isOpen ? "Close" : "Open"
                        } ${link.title} submenu`}
                        aria-expanded={isOpen}
                        aria-controls={submenuId}
                      >
                        <HiChevronDown
                          aria-hidden="true"
                          focusable="false"
                          className={`text-xl transition-transform duration-300 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    )}
                  </div>

                  {isOpen && link.submenu?.length > 0 && (
                    <div
                      id={submenuId}
                      className="pl-3 pb-2"
                    >
                      {link.title === "Services" &&
                        link.submenu.map(
                          (item, subIndex) => {
                            const childKey = `${index}-${subIndex}`;

                            const isChildOpen =
                              openMobileChildMenu === childKey;

                            const childMenuId = `mobile-child-submenu-${index}-${subIndex}`;

                            return (
                              <div
                                key={item.title}
                                className="border-l border-[#caa193]/50 pl-3"
                              >
                                <div className="flex items-center justify-between gap-3">
                                  <Link
                                    href={item.path}
                                    className="flex-1 py-3 text-sm text-white uppercase tracking-wide"
                                    onClick={() =>
                                      setNavbarOpen(false)
                                    }
                                  >
                                    {item.title}
                                  </Link>

                                  {item.children?.length >
                                    0 && (
                                    <button
                                      type="button"
                                      onClick={() =>
                                        setOpenMobileChildMenu(
                                          isChildOpen
                                            ? null
                                            : childKey
                                        )
                                      }
                                      className="p-2 text-white/80"
                                      aria-label={`${
                                        isChildOpen
                                          ? "Close"
                                          : "Open"
                                      } ${item.title} submenu`}
                                      aria-expanded={
                                        isChildOpen
                                      }
                                      aria-controls={
                                        childMenuId
                                      }
                                    >
                                      <HiChevronDown
                                        aria-hidden="true"
                                        focusable="false"
                                        className={`text-lg transition-transform duration-300 ${
                                          isChildOpen
                                            ? "rotate-180"
                                            : ""
                                        }`}
                                      />
                                    </button>
                                  )}
                                </div>

                                {isChildOpen &&
                                  item.children?.length >
                                    0 && (
                                    <div
                                      id={childMenuId}
                                      className="pl-3 pb-2 border-l border-[#caa193]/50 space-y-1"
                                    >
                                      {item.children.map(
                                        (child) => (
                                          <Link
                                            key={
                                              child.title
                                            }
                                            href={
                                              child.path
                                            }
                                            className="block py-2 text-xs text-white/80 uppercase tracking-wide hover:text-white transition-colors"
                                            onClick={() =>
                                              setNavbarOpen(
                                                false
                                              )
                                            }
                                          >
                                            {
                                              child.title
                                            }
                                          </Link>
                                        )
                                      )}
                                    </div>
                                  )}
                              </div>
                            );
                          }
                        )}
                    </div>
                  )}
                </div>
              );
            })}

            <div className="pt-4 space-y-3">
              <a
                href="tel:+971588075603"
                aria-label="Call WE DO at +971 58 807 5603"
                className="flex items-center gap-2 text-sm text-white"
              >
                <FaPhoneAlt
                  aria-hidden="true"
                  focusable="false"
                  className="text-xs"
                />

                <span>+971 58 807 5603</span>
              </a>

              <a
                href="https://wa.me/971588075603"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with WE DO on WhatsApp"
                className="flex items-center gap-2 text-sm text-white"
              >
                <FaWhatsapp
                  aria-hidden="true"
                  focusable="false"
                  className="text-xs"
                />

                <span>+971 58 807 5603</span>
              </a>

              <div
                className="flex items-center gap-4 pt-2 text-white text-lg"
                aria-label="WE DO social media links"
              >
                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit WE DO on ${social.label}`}
                      className={`${social.hoverColor} transition-colors`}
                    >
                      <Icon
                        aria-hidden="true"
                        focusable="false"
                      />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;