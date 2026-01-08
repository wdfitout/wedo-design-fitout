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
            "url('/images/meby (1).webp')",
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
            BEST INTERIOR DESIGN & FITOUT COMPANY IN BUSINESS BAY DUBAI
          </h1>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          Business Bay, Dubai is a luxurious innovation, with several famous commercial and residential spaces in the entire region. Famous for its iconic skyline as well as for being vibrant, it hosts business people and individuals interested in high-end design as well as functionality.
WE DO Interior & Fitout, as the best interior design company in Business Bay, creates exceptional spaces by bringing together sophistication and practicality. The reputation of the best fitout company in Business Bay is built upon the delivery of tailored solutions for clients. Whether it is high-end interior fit-out work or efficient fit-out work for an office, retail space, or residence, we ensure seamless execution and outstanding results.
As the Best Interior Design Company in Business Bay Dubai, we work from detailed planning to flawless implementation of interior fit-out for every project we undertake. Be a part of the top interior design company in Business Bay Dubai and experience perfect harmony between style and functionality.

          </p>
          <h2 className="text-xl text-start text-[#b89564] font-bold mt-2 mb-2">
            CORPORATE OFFICE DESIGN & FIT-OUT
          </h2>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          Creating an excellent Office Space Design in Business Bay’s corporate office is about producing a productive environment, rather than just pretty pictures. As one of the leading fit out companies in Dubai, WE DO Interior & Fitout specializes in designing and executing premium corporate spaces tailored to your business requirements.
          </p>
          <h3 className="text-lg text-start font-bold mt-2 mb-2">
            EXECUTIVE OFFICES
          </h3>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          For executive rooms, we combine luxury and functionality by using premium materials and meticulous craftsmanship. Our designs reflect professionalism and sophistication in corporate offices, ensuring every office seems to be authoritative and prestigious.
          </p>
          <h3 className="text-lg text-start font-bold mt-2 mb-2">
            OPEN WORKSPACES
          </h3>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          Modern businesses thrive on collaboration, and our open workspace designs are there to encourage teamwork and creativity. As a trusted fit out company, we prioritize layouts that are functional and visually appealing, thereby fostering an engaging environment for employees.
          </p>
          <h3 className="text-lg text-start font-bold mt-2 mb-2">
            MEETING ROOMS INTERIORS
          </h3>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          A well-designed meeting room interior design is essential for seamless communication and decision-making. Our expertise in crafting meeting rooms Dubai ensures high-tech solutions and acoustic optimization for uninterrupted discussions and presentations.
          </p>
          <h3 className="text-lg text-start font-bold mt-2 mb-2">
            RECEPTION AREA DESIGN
          </h3>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          First impressions do matter, and our office reception designs are conceptualized to make a lasting impact. From sleek furniture pieces to innovative layouts, our reception designs are welcoming yet reflective of your brand identity.
Let's transform your corporate space into a hub of style and efficiency with WE DO Interior & Fitout, one of the top interior fit out companies in Dubai. We will elevate your workspace and make a lasting impression for both clients and employees.
          </p>
          <h2 className="text-xl text-start text-[#b89564] font-bold mt-2 mb-2">
            LUXURY RESIDENTIAL INTERIOR DESIGN BUSINESS BAY
          </h2>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          First impressions do matter, and our office reception designs are conceptualized to make a lasting impact. From sleek furniture pieces to innovative layouts, our reception designs are welcoming yet reflective of your brand identity.
Let's transform your corporate space into a hub of style and efficiency with WE DO Interior & Fitout, one of the top interior fit out companies in Dubai. We will elevate your workspace and make a lasting impression for both clients and employees.
          </p>
          <h3 className="text-lg text-start font-bold mt-2 mb-2">
            VILLA INTERIOR DESIGN 
          </h3>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          Our expertise in Dubai villa interior design and luxury villa interior design ensures that every villa becomes a masterpiece of architectural and interior design. Whether it's for a grand space or a cozy retreat, our villa interior design solutions are tailored to reflect your vision.
At WE DO Interior & Fitout, we bring your dream home to life through our exceptional home interior design Dubai services. Discover unique home interior design ideas and let us create a space that is truly yours.
          </p>
          <h3 className="text-lg text-start font-bold mt-2 mb-2">
            APARTMENT INTERIOR DESIGN
          </h3>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          Our apartment interior design solutions transform urban homes into modern sanctuaries. With a focus on stylish layouts and premium materials, we enhance your living experience.
          </p>
          <h3 className="text-lg text-start font-bold mt-2 mb-2">
            PENTHOUSE DESIGN
          </h3>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          Take your luxury to new heights with our customized penthouse Dubai designs: the ultimate luxury, from dramatic views to lavish finishes, tailored to provide perfection in urban living.
          </p>
          <h3 className="text-lg text-start font-bold mt-2 mb-2">
            LIVING ROOMS DESIGN
          </h3>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          We specialize in creating elegant, functional living room designs. Whether you are searching “interior design ideas for living room” or want bespoke living room interior design, our team crafts spaces that feel warm, inviting, and visually stunning.
          </p>
          <h3 className="text-lg text-start font-bold mt-2 mb-2">
            BEDROOMS DESIGN
          </h3>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          Our expertise in bedroom design ensures that the spaces are relaxing as well as luxurious. We customize every detail from simple bedroom interior design to lavish luxury bedroom interior design.
          </p>
          <h3 className="text-lg text-start font-bold mt-2 mb-2">
            KITCHENS INTERIOR
          </h3>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          For a modern kitchen design, functionality meets aesthetics. Our kitchen interior design solutions include sleek layouts and high-quality materials to make cooking and dining a delightful experience.
          </p>
          <h3 className="text-lg text-start font-bold mt-2 mb-2">
            BATHROOMS INTERIOR DESIGN
          </h3>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          Let our bathroom interior design transform your space. Influenced by the serenity of a spa, our bathroom designs with luxury finishes provide the utmost in relaxation.
          </p>

          <h2 className="text-xl text-start text-[#b89564] font-bold mt-2 mb-2">
            RETAIL & SHOWROOM DESIGN
          </h2>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          At WE DO Interior & Fitout, we create extraordinary retail and showroom interiors that captivate customers and elevate brands. From high-end boutique interior design to functional showroom Dubai spaces, our expertise ensures designs that reflect innovation and elegance.
          </p>
          <h3 className="text-lg text-start font-bold mt-2 mb-2">
            BOUTIQUE DESIGN 
          </h3>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          Our boutique interior design services are bespoke luxury product layout designs emphasizing how to create uniqueness and interaction. We design environments that enhance customer experiences, but highlight your brand's exclusivity
          </p>
          <h3 className="text-lg text-start font-bold mt-2 mb-2">
            PRODUCT SHOWROOM
          </h3>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          We, of course, understand that products need to be well presented. Our showroom interior designs perfectly blend functionality with captivating aesthetics.
          </p>
          <h3 className="text-lg text-start font-bold mt-2 mb-2">
            GYMS AND FITNESS STUDIOS
          </h3>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          Turn workout spaces into sources of inspiration with our designs for gyms in Dubai. If you're planning a gym in Business Bay or somewhere else, our layouts will provide you with functionality, energy, and style that create a motivational fitness environment.
          </p>
          <h3 className="text-lg text-start font-bold mt-2 mb-2">
            SPA INTERIOR DESIGN
          </h3>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          Relaxation meets luxury with our spa interior design solutions. From tranquil color palettes to high-end finishes, we craft serene spaces for clients seeking the best spa in Dubai experience.
          </p>
          <h3 className="text-lg text-start font-bold mt-2 mb-2">
            SALON INTERIOR DESIGN
          </h3>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          Our salon interior design focuses on stylish layouts that prioritize the comfort of your clients and efficient workflows. We make sure, be it in a salon in Business Bay or elsewhere, that the insides should embellish the beauty experience.
          </p>
          <h3 className="text-lg text-start font-bold mt-2 mb-2">
            CLINIC INTERIOR DESIGN
          </h3>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          Modern healthcare interiors need a calming and professional atmosphere. The solutions of our clinic interior design focus on creating welcoming, hygienic, and patient-centric spaces. 
          </p>

          <h2 className="text-xl text-start text-[#b89564] font-bold mt-2 mb-2">
            HOSPITALITY & RESTAURANT INTERIORS BUSINESS BAY DUBAI
          </h2>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          At WE DO Interior & Fitout, we breathe life into creativity and functionality in the hospitality sector, bringing captivating interiors to restaurants, cafés, bars, and lounges. Our hospitality interior design services are specifically designed to create unforgettable dining and socializing experiences.
          </p>
          <h3 className="text-lg text-start font-bold mt-2 mb-2">
            CAFES INTERIOR DESIGN 
          </h3>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          We transform your café into a cozy, trendy haven with our expert cafe interior design solutions. From innovative cafe design ideas to functional layouts, we craft spaces that resonate with your brand and delight customers.
          </p>
          <h3 className="text-lg text-start font-bold mt-2 mb-2">
            BARS & LOUNGES DESIGN
          </h3>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          With sophistication, our modern bar interior and lounge designs bring into nightlife venues. Whether one's goal is to become one of the best lounges in Dubai or build a chic Dubai lounge, we combine style with comfort for a stand-out experience.
          </p>
          <h3 className="text-lg text-start font-bold mt-2 mb-2">
            FINE DINING RESTAURANTS
          </h3>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          Elevate your fine dining restaurant with luxurious, inviting interior designs. As experienced restaurant interior designers in Dubai, our team specialize in restaurant interior design that enhances the ambiance and reflects your vision. From elegant dining area designs to functional restaurant designs, we prioritize both style and efficiency.
          </p>
          <h3 className="text-lg text-start font-bold mt-2 mb-2">
            COMMERCIAL KITCHENS
          </h3>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          The heart of the restaurant is a well-thought-out kitchen. We design the most simple and modern kitchen designs keeping in mind that they not only look appealing but are also sanitary and efficient. Be it kitchen cabinet designs optimization or one of the unique kitchen design ideas, we excel at implementation.
          </p>
          <h3 className="text-lg text-start font-bold mt-2 mb-2">
            OUTDOOR DINING SPACES
          </h3>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          Enjoy unforgettable alfresco dining in our designs. Using weather-resistant materials and creative layouts, we can help ensure that your outdoor areas are inviting just like your interiors - perfectly suited for dine-out restaurants or casual eateries.
          </p>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
