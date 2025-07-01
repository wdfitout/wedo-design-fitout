"use client";

import React, { useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Soha Saman",
    location: "FALCON CITY OF WONDERS, DUBAI - UAE",
    image: "/images/sobha.png",
    message:
      "WE DO Interior Design & Fitout brought our vision to life in Falconcity of Wonders with unmatched precision and creativity. As an experienced interior decoration company in Dubai, they specialize in luxury interior designs for homes, villas, and commercial spaces, and it truly shows. Their team handled everything as a full-service interior contracting company in Dubai, delivering flawless results. Whether it’s a fitout company in Dubai for residential spaces or expert solutions like office fitout and corporate fitout in Dubai, WE DO is among the top interior fitout companies near me worth trusting."},
  {
    name: "Hasnain ALI Jabbar",
    location: "GREEN COMMUNITY, DUBAI - UAE",
    image: "/images/2.png",
    message:
      "Working with WE DO Interior Design & Fitout for our villa renovation in Green Community Dubai was an incredible experience. Their team completely transformed our space with a beautiful modern interior design approach that perfectly suited our lifestyle. From the layout to the final touches in each room's interior design, everything was handled with care and creativity. As one of the top names for home interior design and a reliable interior fit out and design company in Dubai, they exceeded our expectations. If you're looking for a trusted teamfor a villa makeover in Green Community or high-end residential interior design in Dubai, WE DO is the company to choose."
},
  {
    name: "Muqadas Nadeem",
    location: "AL MAMZAR BEACH PARK, DUBAI - UAE",
    image: "/images/3.png",
    message:
     "WE DO Interior Design & Fitout transformed our space near Al Mamzar Beach Park with exceptional creativity and attention to detail. As a trusted interior design & fit-out company in Dubai & UAE, they delivered a perfect blend of comfort and elegance. Their experience as a commercial interior design & architecture company showed in every element of the design. Whether it's luxury villas and apartments in Al Mamzar or hotel apartments in Al Mamzar Dubai, WE DO stands out as the go-to Al Mamzar Beach interior company for high-end, personalized interiors."},
  {
    name: "Prinxess Sonia",
    location: "DUBAI INTERNET CITY, DUBAI - UAE",
    image: "/images/4.png",
    message:
      "WE DO Interior Design & Fitout delivered an exceptional transformation for our restaurant in Dubai Internet City. As a top-rated interior design company in Internet City, their expertise in F&B interior design in Dubai and seamless execution of restaurant fitout made a huge impact on our space. From layout planning to final finishes, they handled every detail with precision. Among the best interior design companies in Dubai Internet City, they also stand out as trusted interior fit out consultants and one of the top names for F&B fitout in Dubai. A reliable choice for any commercial fitout project in the area."},
  {
    name: "MUDDASSIR ALI",
    location: "BUSINESS BAY, DUBAI - UAE",
    image: "/images/5.png",
    message:
      "Working with WE DO Interior Design & Fitout for our apartment interior design in Business Bay was an outstanding experience. Their team beautifully transformed our living space with a sleek, modern design that complements the dynamic lifestyle of the area. From reimagining the layout to perfecting every room’s interior details, their work showcased thoughtful planning and creative flair. As one of Dubai’s leading interior design and fit-out companies, they went above and beyond our expectations. If you’re seeking a reliable team for apartment renovations or premium residential interior design in Business Bay or anywhere in Dubai, WE DO is the perfect choice."
    },
  {
    name: "Muhammad Imran",
    location: "PALM JUMEIRAH, DUBAI - UAE",
    image: "/images/6.png",
    message:
  "Working with WE DO Interior Design & Fitout for our apartment interior design in Palm Jumeirah was an exceptional experience. Their team transformed our home into a modern, luxurious space that perfectly aligns with our lifestyle and the elegance of the Palm. From optimizing the layout to refining every detail of each room’s design, their work reflected precision and creativity throughout. As one of Dubai’s top interior design and fit-out companies, they exceeded our expectations with their professionalism and aesthetic vision. If you're looking for a trusted team for apartment renovations or high-end residential interior design in Palm Jumeirah or across Dubai, WE DO is the company to rely on."
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
    <section id="testimonials" className="bg-black py-20
     bg-[url('/images/testi-bg-m.webp')] 
    sm:bg-[url('/images/')] 
    bg-cover 
    bg-center 
    bg-no-repeat 
    text-white 
    overflow-hidden">
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
