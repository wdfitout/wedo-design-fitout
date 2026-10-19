"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
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
  FaPlay,
  FaArrowLeft,
  FaArrowRight,
  FaTimes,
} from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";

// Add your own YouTube links and custom thumbnail images here.
// Thumbnail files belong in public/images/videos/.
// The video player activates when a valid YouTube URL or video ID is provided.
const latestVideos = [
  {
    title: "Business Bay: Da Vinci Tower Penthouse Interior Design & Fit-Out",
    thumbnail: "/images/da-vinci-tower-4.webp",
    youtubeUrl: "",
  },
  {
    title: "Emaar Beachfront: Bleu Tower Penthouse Project.",
    thumbnail: "/images/bt-6.jpg",
    youtubeUrl: "",
  },
  {
    title: "Dubai Marina: Luxury Apartment Interior Design & Fit-Out",
    thumbnail: "/images/ma-7.jpg",
    youtubeUrl: "",
  },
  {
    title: "Downtown Dubai: ii-Primo Penthouse Interior Design",
    thumbnail: "/images/penth19.webp",
    youtubeUrl: "",
  },
  {
    title: "Dubai Marina: Princess Tower Apartment Interior Design & Fit-Out",
    thumbnail: "/images/pt-4.jpg",
    youtubeUrl: "",
  },
    {
    title: "Palm Jumeirah: Atlantis The Royal Duplex Apartment Interior Design",
    thumbnail: "/images/ATRD (28).webp",
    youtubeUrl: "",
  },
  {
    title: "Palm Jumeirah: Atlantis the Palm Apartment Project.",
    thumbnail: "/images/Residential (1).webp",
    youtubeUrl: "",
  },
];

const getYouTubeId = (value) => {
  if (!value) return null;

  const input = value.trim();
  const validId = /^[a-zA-Z0-9_-]{11}$/;
  if (validId.test(input)) return input;

  try {
    const url = new URL(input);
    const host = url.hostname.toLowerCase().replace(/^(www\.|m\.)/, "");
    let id = null;

    if (host === "youtu.be") {
      id = url.pathname.split("/")[1];
    } else if (host === "youtube.com" || host === "youtube-nocookie.com") {
      const path = url.pathname.split("/").filter(Boolean);
      if (path[0] === "watch") id = url.searchParams.get("v");
      if (["shorts", "embed", "live"].includes(path[0])) id = path[1];
    }

    return id && validId.test(id) ? id : null;
  } catch {
    return null;
  }
};

const VideoCard = ({ video, onPlay }) => {
  const [thumbnailFailed, setThumbnailFailed] = useState(false);
  const youtubeId = getYouTubeId(video.youtubeUrl);

  return (
    <article
      data-video-card
      className="w-[280px] shrink-0 snap-start sm:w-[180px] lg:w-[220px] xl:w-[320px]"
    >
      
      <button
        type="button"
        disabled={!youtubeId}
        onClick={() => onPlay({ id: youtubeId, title: video.title })}
        aria-label={`Play video: ${video.title}`}
        className="group relative block h-[175px] w-full overflow-hidden rounded-[22px] bg-[#9e7466] text-left disabled:cursor-default sm:h-[113px] lg:h-[138px] xl:h-[200px]"
      >
        {video.thumbnail && !thumbnailFailed ? (
          <Image
            src={video.thumbnail}
            alt={video.title}
            fill
            sizes="(min-width: 1280px) 320px, (min-width: 1024px) 220px, (min-width: 640px) 180px, 280px"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            onError={() => setThumbnailFailed(true)}
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-[#3b2925] via-[#906858] to-[#c99b86] text-white">
            <span className="text-3xl font-medium tracking-[0.22em]">WE DO</span>
            <span className="mt-2 text-[10px] tracking-[0.35em]">DESIGN & BUILD</span>
          </div>
        )}

        <span className="absolute inset-0 bg-black/10 transition-colors duration-300 group-hover:bg-black/25" />
        <span className="absolute left-1/2 top-1/2 flex h-[48px] w-[48px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-[#26211f] shadow-lg transition-transform duration-300 group-enabled:group-hover:scale-110 sm:h-[56px] sm:w-[56px]">
          <FaPlay className="ml-1 text-[16px] sm:text-[12px]" aria-hidden="true" />
        </span>
      </button>

      <h3 className="mt-5 pr-2 text-[16px] font-normal leading-relaxed text-[#4b4845] sm:text-[18px]">
        {video.title}
      </h3>
    </article>
  );
};

// Carousel timings: adjust these independently to fine-tune the feel.
const VIDEO_AUTOPLAY_DELAY = 4500; // Wait 6.5 seconds between auto-scroll starts.
const VIDEO_SCROLL_DURATION = 2000; // Each slide takes 2 seconds to move.

const VideoSection = () => {
  const trackRef = useRef(null);
  const animationFrameRef = useRef(null);
  const restoreScrollStylesRef = useRef(null);
  const [activeVideo, setActiveVideo] = useState(null);

  const stopScrollAnimation = useCallback(() => {
    if (animationFrameRef.current !== null) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }
    restoreScrollStylesRef.current?.();
    restoreScrollStylesRef.current = null;
  }, []);

  // Use a timed easing animation: the browser's native smooth scroll
  // does not let us control how long the movement lasts.
  const animateScrollTo = useCallback((requestedLeft) => {
    const track = trackRef.current;
    if (!track) return;

    stopScrollAnimation();

    const maxScroll = Math.max(0, track.scrollWidth - track.clientWidth);
    const targetLeft = Math.max(0, Math.min(requestedLeft, maxScroll));
    const startLeft = track.scrollLeft;
    const distance = targetLeft - startLeft;
    if (Math.abs(distance) < 1) return;

    const previousSnap = track.style.scrollSnapType;
    const previousBehavior = track.style.scrollBehavior;
    track.style.scrollSnapType = "none";
    track.style.scrollBehavior = "auto";

    const restoreStyles = () => {
      track.style.scrollSnapType = previousSnap;
      track.style.scrollBehavior = previousBehavior;
    };
    restoreScrollStylesRef.current = restoreStyles;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      track.scrollLeft = targetLeft;
      stopScrollAnimation();
      return;
    }

    let startedAt = null;
    const step = (now) => {
      if (startedAt === null) startedAt = now;
      const progress = Math.min((now - startedAt) / VIDEO_SCROLL_DURATION, 1);
      // Ease in and out gently (smooth acceleration and deceleration).
      const eased = (1 - Math.cos(Math.PI * progress)) / 2;
      track.scrollLeft = startLeft + distance * eased;

      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(step);
      } else {
        animationFrameRef.current = null;
        restoreStyles();
        restoreScrollStylesRef.current = null;
      }
    };

    animationFrameRef.current = requestAnimationFrame(step);
  }, [stopScrollAnimation]);

  const scrollVideos = (direction) => {
    const track = trackRef.current;
    if (!track) return;

    const firstCard = track.querySelector("[data-video-card]");
    if (!firstCard) return;

    const cardWidth = firstCard.getBoundingClientRect().width;
    const gap = parseFloat(getComputedStyle(track).gap) || 0;

    animateScrollTo(track.scrollLeft + direction * (cardWidth + gap));
  };

  // Advance one card, pause on hover or while the video popup is open.
  useEffect(() => {
    if (activeVideo || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const interval = setInterval(() => {
      const track = trackRef.current;
      if (!track || document.hidden || track.matches(":hover")) return;

      const firstCard = track.querySelector("[data-video-card]");
      if (!firstCard) return;

      const cardWidth = firstCard.getBoundingClientRect().width;
      const gap = parseFloat(getComputedStyle(track).gap) || 0;
      const maxScroll = track.scrollWidth - track.clientWidth;
      if (maxScroll <= 0) return;

      const targetLeft = track.scrollLeft >= maxScroll - 5
        ? 0
        : track.scrollLeft + cardWidth + gap;

      animateScrollTo(targetLeft);
    }, VIDEO_AUTOPLAY_DELAY);

    return () => clearInterval(interval);
  }, [activeVideo, animateScrollTo]);

  useEffect(() => {
    if (activeVideo) stopScrollAnimation();
  }, [activeVideo, stopScrollAnimation]);

  // Clean up any animation if the component unmounts.
  useEffect(() => () => stopScrollAnimation(), [stopScrollAnimation]);

  useEffect(() => {
    if (!activeVideo) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleEscape = (event) => {
      if (event.key === "Escape") setActiveVideo(null);
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleEscape);
    };
  }, [activeVideo]);

  return (
    <>
      <section
        aria-labelledby="latest-videos-heading"
        className="w-full overflow-hidden bg-[#f4f0ea] py-16 text-[#1d1c1a] sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-16">
          <div className="mb-10 flex items-end justify-between gap-6 sm:mb-12">
            <div>
              <p className="mb-7 flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#977447]">
                <span className="h-px w-10 bg-[#b5976c]" />
                Watch
              </p>
              <h2
                id="latest-videos-heading"
                className="text-[30px] font-conthrax leading-tight tracking-[-0.04em] sm:text-[54px] lg:text-[34px]"
              >
                Latest videos
              </h2>
            </div>

            <div className="flex shrink-0 items-center gap-3 pb-1">
              <button
                type="button"
                onClick={() => scrollVideos(-1)}
                aria-label="Scroll videos left"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#e3d8ca] bg-white text-[#242321] transition-colors hover:bg-[#eee4d9] sm:h-[48px] sm:w-[48px]"
              >
                <FaArrowLeft className="text-base sm:text-xs" />
              </button>
              <button
                type="button"
                onClick={() => scrollVideos(1)}
                aria-label="Scroll videos right"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#e3d8ca] bg-white text-[#242321] transition-colors hover:bg-[#eee4d9] sm:h-[48px] sm:w-[48px]"
              >
                <FaArrowRight className="text-base sm:text-xs" />
              </button>
            </div>
          </div>

          <div
            ref={trackRef}
            aria-label="Latest WE DO project videos"
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {latestVideos.map((video) => (
              <VideoCard
                key={video.title}
                video={video}
                onPlay={setActiveVideo}
              />
            ))}
          </div>
        </div>
      </section>

      {activeVideo && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeVideo.title}
          className="fixed inset-0 z-[9999] flex items-center justify-center px-4 py-14"
        >
          <button
            type="button"
            onClick={() => setActiveVideo(null)}
            aria-label="Close video"
            className="absolute inset-0 bg-black/85"
          />

          <div className="relative z-10 w-full max-w-[1080px]">
            <button
              type="button"
              onClick={() => setActiveVideo(null)}
              aria-label="Close video player"
              className="absolute -top-12 right-0 flex h-10 w-10 items-center justify-center rounded-full bg-white text-black transition-colors hover:bg-[#eadbd2]"
            >
              <FaTimes aria-hidden="true" />
            </button>

            <div className="relative aspect-video overflow-hidden rounded-xl bg-black shadow-2xl">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${activeVideo.id}?autoplay=1&rel=0`}
                title={activeVideo.title}
                className="absolute inset-0 h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const socialLinks = [
  {
    icon: <FaInstagram />,
    href: "https://www.instagram.com/we.do.uae/",
    label: "Instagram",
  },
  {
    icon: <FaLinkedin />,
    href: "https://www.linkedin.com/company/wedointerior/",
    label: "LinkedIn",
  },
  {
    icon: <FaPinterest />,
    href: "https://www.pinterest.com/wedo_interior/",
    label: "Pinterest",
  },
  {
    icon: <FaFacebook />,
    href: "https://www.facebook.com/wedointerior/",
    label: "Facebook",
  },
  {
    icon: <FaTiktok />,
    href: "https://www.tiktok.com/@wedo_interior",
    label: "TikTok",
  },
];

const navLinks = [
  { title: "Home", path: "#herosection" },
  { title: "Services", path: "#services" },
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
    <>
      <VideoSection />

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
                X4RG+39W Jabel Ali, Jabel Ali Industrial 1,
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
    </>
  );
};

export default Footer;