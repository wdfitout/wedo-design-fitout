"use client";

import React from "react";

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row w-full lg:mt-24 md:mt-24">
      {/* Image Section */}
      <div
        className="bg-cover bg-center h-[250px] sm:h-[300px] md:h-[450px] lg:h-[500px] xl:h-[600px] order-1 w-full md:w-7/12"
        style={{
          backgroundImage:
            "url('/images/pjapt (3).webp')",
        }}
      ></div>

      {/* Text Section */}
      <div
        className="bg-[#121212] text-white px-4 py-8 overflow-y-auto h-[400px] sm:h-[400px] md:h-[500px] lg:h-[550px] xl:h-[650px] order-2 w-full md:w-5/12"
        style={{
          scrollbarWidth: "thin", // Firefox-specific
          scrollbarColor: "silver #1a1a1a", // Firefox-specific
        }}
      >
        <style jsx>{`
          /* Custom Scrollbar Styling */
          div::-webkit-scrollbar {
            width: 10px; /* Set the width of the scrollbar */
          }
          div::-webkit-scrollbar-track {
            background-color: #1a1a1a; /* Dark background for the track */
          }
          div::-webkit-scrollbar-thumb {
            background: linear-gradient(
              to right,
              silver 25%,
              transparent 25%,
              transparent 75%,
              silver 75%
            );
            border-radius: 8px; /* Rounded edges for the thumb */
            border: 2px solid black; /* Thin black border around the thumb */
          }
          div::-webkit-scrollbar-thumb:hover {
            background: linear-gradient(
              to right,
              silver 15%,
              transparent 15%,
              transparent 85%,
              silver 85%
            );
            border-color: gray; /* Change border color on hover */
          }
          div::-webkit-scrollbar-thumb:active {
            background: linear-gradient(
              to right,
              silver 35%,
              transparent 35%,
              transparent 65%,
              silver 65%
            );
          }
        `}</style>
        <div className="text-start">
          <h1 className="text-xl text-[#b89564] font-bold mb-4">
            BEST INTERIOR DESIGN COMPANY IN THE PALM JUMEIRAH, DUBAI, UAE 
          </h1>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          Palm Jumeirah, Dubai, is an icon of luxury globally. At We Do Interior Design and Fitout, we provide excellent interior design in Palm Jumeirah, designed to the high elegance of this iconic destination. As one of the leading interior fit-out companies in Dubai, we offer solutions for residential and commercial areas, such as villa design in Marina Residences Palm Jumeirah and commercial design for businesses in Palm Jumeirah. From conceptualization to completion, our team provides exceptional output as a trusted interior fit-out contractor in Dubai delivering unique designs that reflect this destination's elegance. Hire us for high-class Palm Jumeirah interior design services and elevate your property in terms of style and functionality like never before.
          </p>
          
          <h2 className="text-left text-xl text-[#b89564] font-bold mt-2 mb-2">
            RESIDENTIAL INTERIOR DESIGN IN THE PALM JUMEIRAH 
          </h2>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          Our services of Residential Interior Design in Palm Jumeirah, bring forth luxurious and functional spaces designed according to your way of living. Our Villa Interior Design Services in Palm Jumeirah help create bespoke interiors where the elegance, comfort, and modernity blend together to create an oasis in your villa.
          </p>

          <h2 className="text-left text-xl text-[#b89564] font-bold mt-2 mb-2">
            VILLA INTERIOR DESIGN SERVICES IN THE PALM JUMEIRAH 
          </h2>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          At We Do Interior Design and Fitout, our expertise lies in creating elegant and practical environments for villas in Palm Jumeirah. By doing this, we establish new benchmarks for villa interior design in Dubai. Our Interior Design for Palm Jumeirah Villas emphasizes custom interiors that blend sophistication with contemporary style—from crafting stunning living rooms, bedrooms, and majlis to rethinking layouts for splendor villas in Dubai, our designs set the standard for villa interior design in the city. We broaden our skills beyond interiors by transforming outdoor areas with stunning landscape designs, vibrant gardens, and contemporary swimming pools, establishing a seamless blend of indoor and outdoor luxury. Within, we provide cutting-edge kitchens, luxurious bathrooms reminiscent of a spa, and expertly crafted joinery designed to satisfy the distinct requirements of Villas in Palm Jumeirah.
          </p>
          <h3 className="text-left text-xl text-[#b89564] font-bold mt-2 mb-2">
            PALM JUMEIRAH VILLA INTERIOR RENOVATION 
          </h3>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          Whether it is Palm Jumeirah villa interior renovation or or crafting a modern villa design, we make sure each and every element of design reflects the grandeur of  Palm Jumeirah villa interiors. Whether you have a villa in Palm Jumeirah, a splendor villa, or are just looking for inspiration for the villa Dubai, our designs are carefully crafted to make every home the epitome of sophistication and refined living. From contemporary to classic, all the Palm Jumeirah villas we create are epitomes of beauty with functionality, a new trend in Dubai villa interior designs. Whether you are seeking a villa near me, designing a villa that reflects grandeur, our services leave no stone unturned in delivering luxuries and style. 
          </p>
          <h3 className="text-left text-xl text-[#b89564] font-bold mt-2 mb-2">
            MAJLIS DESIGN FOR THE PALM JUMEIRAH VILLAS 
          </h3>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          At We Do Interior Design and Fitout, we specialize in creating elegant majlis design, blending traditional Arabic majlis design with modern touches. Our modern Arabic majlis design ensures functional, stylish spaces that are perfect for social gatherings, providing a warm and inviting atmosphere for family and friends.
          </p>

          <h2 className="text-left text-xl text-[#b89564] font-bold mt-2 mb-2">
            APARTMENT INTERIOR DESIGN FOR THE PALM JUMEIRAH RESIDENCES 
          </h2>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          We Do Interior Design and Fitout specializes in apartment interior design for Palm Jumeirah residences, providing creative apartment interior decor options that maximize available space and elevate contemporary living. We make sure that every element accentuates the beauty and grandeur of this esteemed location, whether we are designing interiors for Palm Jumeirah houses or creating opulent Interiors for Palm Jumeirah Apartments
          </p>
          <h3 className="text-left text-xl text-[#b89564] font-bold mt-2 mb-2">
            APARTMENT FIT-OUT SERVICES FOR THE PALM JUMEIRAH APARTMENTS 
          </h3>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          Apartments Palm Jumeirah are elevated to stylish and elegant residences due to our skill in apartment fit-out. From the first design to the final details, we carefully oversee every element of the project. Using cutting-edge CNC technology, we provide customized joinery solutions that guarantee accuracy and style in every element.
          Whether it is a sleek, modern apartment fit-out in Dubai or the full transformation of Apartments Palm Jumeirah, our designs are aimed to cater to today's lifestyle and elegance and functionality to be infused into your space. Let us give you the most beautiful and practical interior to create new standards for luxury living.
          </p>
 
          <h2 className="text-left text-xl text-[#b89564] font-bold mt-2 mb-2">
            BEACH FRONT APARTMENTS INTERIOR DESIGN 
          </h2>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          We Do Interior Design and Fitout is a specialist in designing beachfront apartments with breathtaking panoramic ocean views and abundant natural light. Our specialty is in creating spaces that enhance the beauty of the coastline, bringing the outdoors in for an unparalleled living experience. Open layouts and ocean-inspired themes ensure each beachfront villa in Dubai exudes serenity yet sophistication.
          </p>
          <h3 className="text-left text-xl text-[#b89564] font-bold mt-2 mb-2">
            SMART LIVING FOR BEACH FRONT VILLAS 
          </h3>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          Our designs are characterized by spaces that flow and feel very airy, thus harmoniously complementing the natural surroundings, making every moment here feel like a retreat. For ultimate convenience and living in the modern world, we seamlessly integrate smart home technology into our projects of Interior Design for Ocean House Palm Jumeirah.This includes smart outdoor view talk, door control, lighting, A/C, curtains, emergency systems, TV and sound, and home appliance management systems. This perfect amalgamation of innovation and style ensures your beachfront villa in Dubai looks not only great but also quite functional, providing luxury living connected with the future of smart living.
          We make sure that every project embodies the spirit of beachfront villa Dubai,  whether it's creating a gorgeous living area with broad ocean views or building a beachfront house. Count on us to use designs that combine style and creativity to create the ideal getaway by the sea
          </p>

          <h2 className="text-left text-xl text-[#b89564] font-bold mt-2 mb-2">
            COMMERCIAL INTERIOR DESIGN SERVICES 
          </h2>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          Our specialty at We Do Interior Design & Fitout is designing custom business spaces that capture the essence of your company. Our restaurant interior design in Palm Jumeirah offers an exquisite dining experience that harmonizes comfort, style, and practicality.
          </p>
          <h3 className="text-left text-xl text-[#b89564] font-bold mt-2 mb-2">
            RESTAURANT INTERIOR DESIGN IN THE PALM JUMEIRAH 
          </h3>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          As a best restaurant interior designer dubai, our specialty is producing outstanding restaurant interior design for restaurants in Palm Jumeirah and other locations. We ensure every element blends in with food and ambiance, whether a Palm Jumeirah restaurant or an opulent fine dining restaurant.We focus on designing areas that are aesthetically pleasing and practical, be it dining area design or modern bar interiors. Our proficiency in Restaurant Interior Design in Palm Jumeirah ensures that your eatery will rank among the best restaurants in Palm Jumeirah and provide a unique and welcoming dining experience.
          </p>
          <h3 className="text-left text-xl text-[#b89564] font-bold mt-2 mb-2">
            CAFE INTERIOR DESIGN DUBAI 
          </h3>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          We provide original café design ideas and creative café interior design to make every visit unforgettable. Whether you're starting a hip café or a modern  Dubai lounge, our goal is to design sophisticated, cozy areas that encourage visitors to unwind and have fun. Our designs guarantee that your café stands out as a premier destination by fusing contemporary beauty with utility. Furthermore, we are experts in kitchen design, from modern kitchen designs to kitchen cabinet designs, crafting functional and visually appealing areas that meet the operational requirements of any café
          </p>
         <h2 className="text-left text-xl text-[#b89564] font-bold mt-2 mb-2">
            HOSPITALITY INTERIOR DESIGN DUBAI 
          </h2>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          For hotels, resorts, and boutique lodgings, We Do Interior Design and Fitout specializes in providing opulent yet welcoming  hospitality interior design services. Whether creating a new resort idea or designing for Palm Jumeirah hotels, we make sure that every element captures the distinct spirit of  hospitality in Palm Jumeirah hotels, fusing comfort and style to provide a memorable visitor experience.
          Our skills also include retail concept design, where we create creative arrangements that preserve usability while boosting consumer interaction. Additionally, we are experts in luxury retail design, crafting upscale, eye-catching environments that draw in affluent customers, enhance your brand, and guarantee a remarkable shopping experience
          </p>
    

          
        </div>
      </div>
    </section>
  );
};

export default Hero;
