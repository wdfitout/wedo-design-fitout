"use client";

import React, { useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { FaStar } from "react-icons/fa";


const testimonials = [
  {
    name: "Ghanshyam Nishad",
    location: "BUSINESS BAY, DUBAI - UAE",
    image: "/images/sobha.png", 
    message:
     " I worked with we do interior design company for my office for out in business bay Dubai. It was a nice experience. I was just looking for a premium for out solution for my office space. From 3D design to execution everythingwas aligned with my vision. For my commercialspace I can see something nicer than before. Highly recommended for interior design.",
  },

  {
    name: "Hasnain ALI Jabbar",
    location: "GREEN COMMUNITY, DUBAI - UAE",
     image: "/images/2.png", 
    message:
      "Working with WE DO on our villa renovation in Green Community was a great experience. They completely transformed the space while keeping our lifestyle and preferences in mind. We especially appreciated their attention to detail, creative ideas and the way the team managed the project from design through execution. The finished villa feels modern, comfortable and truly personal to us.",
  },

  {
    name: "Burhan Udeen",
    location: "DOWNTOWN DUBAI, DUBAI - UAE",
    image: "/images/3.png",
    message:
      "I was looking for my penthouse in Downtown Dubai and we do interior design handled the whole thing from design concept through to handover. The 3D visuals were the part that sold me. They looked so natural and real that I knew exactly what I was getting before anything started and the finished home matched them. Execution was excellent and the management and delivery were exactly as promised. I would work with them again and would recommend them to anyone who is looking for an interior design company especially in Downtown Dubai.",
  },

  {
    name: "zahid afridi",
    location: "BUSINESS BAY, DUBAI - UAE",
    image: "/images/4.png",
    message:
      "We hired We Do interior Design for the complete interior design of our apartment in Business Bay, Dubai and result is outstanding. They handled it as proper turnkey solution, concept design, 3D visuals, material and finish selection, joinery, MEP and full site execution. So we never had to run behind multiple contractors. What impressed me most was the balance between looks and practicality. The space planning made the apartment feel noticeably longer, the finishes are premium and the quality of workmanship shows in the small details. The team kept the schedule kept the site clean and communicated clearly at every stage. If you are looking for a reliable interior design company for apartment interior design, especially in Business Bay, I highly recommend them. Very happy with the experience.",
  },

  {
    name: "MUDDASSIR ALI",
    location: "BUSINESS BAY, DUBAI - UAE",
      image: "/images/5.png",
  message: "We worked with WE DO for our apartment interior design in Business Bay, and the experience was excellent. The team helped us rethink the layout and created a modern, refined interior that suits our lifestyle. They were attentive throughout the process and took care of the details that made a real difference. We are very pleased with how the apartment turned out.",
  },

  {
    name: "Muhammad Imran",
    location: "PALM JUMEIRAH, DUBAI - UAE",
    image: "/images/6.png",
    message:
      "Working with WE DO on our apartment in Palm Jumeirah was an exceptional experience. They transformed the space into a modern and luxurious home while keeping our personal preferences at the centre of the design. From the layout to the final finishes, the team showed great attention to detail and creativity. We are extremely happy with the finished interior and the overall quality of the work.",
  },
];



const Testimonials = () => {
  const autoplayOptions = {
    delay: 4000,
    stopOnInteraction: false,
    stopOnMouseEnter: false,
  };

  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      containScroll: "trimSnaps",
      speed: 5,
    },
    [Autoplay(autoplayOptions)]
  );

  return (
    <section id="testimonials" className="bg-black py-10
     bg-[url('/images/testi-bg-m.webp')] 
    sm:bg-[url('/images/')] 
    bg-cover 
    bg-center 
    bg-no-repeat 
    text-white 
    overflow-hidden">
      <div className="w-[90%] sm:w-[85%] md:w-[80%] lg:w-[70%] mx-auto">
        {/* Section Heading */}
        <div className="flex flex-col items-center ">
          <Image
          src="/images/sec-dvd.webp"
         alt="Scroll down arrow"
         width={320}
         height={80}
        className="h-auto w-48 sm:w-64"
          />
          <h2 className="text-white mt-10 mb-10 text-sm sm:text-xl tracking-widest font-conthrax text-center">
          WHAT OUR CLIENTS SAY
          </h2>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-1 pl-1 pr-1 min-w-0">
            {testimonials.map((item, idx) => {
              const [expanded, setExpanded] = useState(false);
              const maxLength = 250;
              const isLong = item.message.length > maxLength;

              return (
                <div
                  key={idx}
                  className="flex flex-col justify-between flex-shrink-0 basis-full sm:basis-1/2 lg:basis-1/3 text-sm text-gray-300 p-4"
                >
                  {/* Quote Box */}
                  <div className="relative p-4 flex flex-col flex-grow">
                    <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#caa193]" />
                    <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#caa193]" />

                    {/* Message */}
                    <p
                      className={`z-10 relative leading-relaxed ${
                        !expanded && isLong ? "line-clamp-4" : ""
                      }`}
                    >
                      “{item.message}”
                    </p>

                    <div className="flex-grow" />

                    {/* Read More / Less aligned right */}
                    {isLong && (
                      <button
                        onClick={() => setExpanded(!expanded)}
                        className="mt-2 text-[#caa193] underline text-xs ml-auto block text-right"
                      >
                        {expanded ? "Read less" : "Read more"}
                      </button>
                    )}
                  </div>

                  {/* Client Info */}
                  <div className="flex items-center gap-4 mt-6">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={50}
                      height={50}
                      className="rounded-full object-cover"
                    />
                    <div>
                      <h3 className="text-white font-semibold text-sm">
                        {item.name}
                      </h3>
                      <p className="text-xs text-gray-400">{item.location}</p>
                      <div className="flex text-yellow-400 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <FaStar key={i} className="h-3 w-3" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
