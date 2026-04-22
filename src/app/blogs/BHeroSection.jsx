'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import Link from 'next/link';
import Image from 'next/image';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

const blogs = [
 {
    id: 1,
    slug: 'bathroom-design-trends-dubai-creek-harbour',
    title: 'Luxury Bathroom Design Trends in Dubai Creek Harbour',
    image: '/images/Luxury Bathroom Design Trends in Dubai Creek Harbour Homes.png',
    date: '2026-04-21',
    tag: 'Blog',
  },
  {
    id: 2,
    slug: 'living-room-interior-business-bay',
    title: 'High-End Living Room interior Design in Business Bay Dubai',
    image: '/images/Luxury interior material focus Dubai living room.png',
    date: '2026.04.18',
    tag: 'Blog',
  },
  {
    id: 3,
    slug: 'commercial-interior-fit-out',
    title: 'Commercial Interior Fit-out in Business Bay Dubai ',
    image: '/images/Commercial Interior Fit-out in Business Bay Dubai.png',
    date: '2026-04-11',
    tag: 'Blog',
  },
  {
    id: 4,
    slug: 'office-interior-elements-business-bay',
    title: 'Essential Office Interior Elements in Business bay',
    image: '/images/dubai-office-aesthetic-interior-design-in-business-bay.png',
    date: '2026-03-18',
    tag: 'Blog',
  },
  {
    id: 5,
    slug: 'business-bay-apartment-design',
    title: '5 Things to Consider When Designing Your Business Bay Apartment',
    image: '/images/business-bay-apartment-space-planning-in-dubai.png',
    date: '2026.03.03',
    tag: 'Blog',
  },
  {
    id: 6,
    slug: 'office-interior-design-trends-in-business-bay',
    title: 'Office Interior Design Trends in Business Bay 2026',
    image: '/images/smart-technology-integration-office-interior-business-bay.png',
    date: '2026-02-12',
    tag: 'Blog',
  },
    
  
 
  

];

export default function BHeroSection() {
  return (
    <div className="w-full px-0">
      <Swiper
        modules={[Autoplay]}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        centeredSlides={true}
        spaceBetween={0} // 🚫 No space between slides
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 1.2,
          },
          1024: {
            slidesPerView: 2.5, // ✅ Wider side slides
          },
        }}
        className="w-full"
      >
        {blogs.map((blog) => (
          <SwiperSlide key={blog.id} className="pb-0">
            <Link
              href={blog.slug.startsWith('/') ? blog.slug : `/${blog.slug}`}
              className="block h-[60vh] relative overflow-hidden shadow-lg transition-transform duration-3000 hover:scale-[1.05] bg-black"
              aria-label={`Read blog: ${blog.title}`}
            >
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                priority
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/10 flex flex-col justify-end p-5 sm:p-6 md:p-10 text-white">
                <span className="bg-gradient-to-br from-[#caa193] to-[#a0624d] text-xs px-3 py-1 rounded uppercase font-semibold w-fit">
                  {blog.tag}
                </span>
                <h2 className="text-lg sm:text-xl md:text-3xl lg:text-2xl font-conthrax mt-2 sm:mt-3">
                  {blog.title}
                </h2>
                <p className="text-xs sm:text-sm mt-1 text-[#a0624d]">
                  {dayjs(blog.date).fromNow()}
                </p>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
