"use client";

import React, { useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "DAVID LINACRE",
    location: "COGNIC LLC, ABU DHABI - UAE",
    image: "/images/client2.webp",
    message:
      "I’m so impressed with the customer service from WeDo. After all the stress from moving to a new office, it's nice for something to be so easy. The operations team helped coordinate fit-out and the installation done. Thx for the service many times over!",
  },
  {
    name: "DEBRA ALBERT",
    location: "MARINA, DUBAI - UAE",
    image: "/images/client1.webp",
    message:
      "From the moment we signed up, until we completed the entire house, we felt pampered, loved, and appreciated. The decorators and people who work there are top-notch, highly skilled, and very professional.",
  },
  {
    name: "EVELYN HANSON",
    location: "BUSINESS BAY, DUBAI - UAE",
    image: "/images/client3.webp",
    message:
      "Let me start by saying, I love, love, love WeDo. Thanks for capturing my vision and elevating my space to brilliance! Every detail is beautiful, just like the rendering!",
  },
  {
    name: "MICHAEL STONE",
    location: "PALM JUMEIRAH, DUBAI - UAE",
    image: "/images/client4.webp",
    message:
      "Absolutely amazing team. The attention to detail, creativity, and professionalism made our home redesign stress-free and exciting. Highly recommend!",
  },
  {
    name: "SARA LOPEZ",
    location: "JLT, DUBAI - UAE",
    image: "/images/client5.webp",
    message:
      "The WeDo team transformed my clinic interior beyond expectations. Calm, elegant, and perfectly functional — they understood my needs completely.",
  },
  {
    name: "RAVI PATEL",
    location: "AL BARSHA, DUBAI - UAE",
    image: "/images/client6.webp",
    message:
      "Efficient, innovative, and super stylish. Our office renovation has not only boosted our image but also employee satisfaction. Brilliant execution!",
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
    <section id="testimonials" className="bg-black text-white py-20">
      <div className="w-[90%] sm:w-[85%] md:w-[80%] lg:w-[70%] mx-auto">
        {/* Section Heading */}
        <div className="flex flex-col items-center mb-10">
          <Image
          src="/images/sec-dvd.webp"
         alt="Scroll down arrow"
         width={320}
         height={80}
        className="h-auto w-48 sm:w-64"
          />
          <h2 className="text-white mt-10 mb-10 text-sm sm:text-xl tracking-widest font-conthrax text-center">
            TESTIMONIALS
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
                  className="flex flex-col justify-between flex-shrink-0 basis-full sm:basis-1/2 lg:basis-1/3 bg-black text-sm text-gray-300 p-4"
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
