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
            "url('/images/dmapt (1).webp')",
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
           BEST INTERIOR DESIGN & FIT-OUT IN DUBAI MARINA 
          </h1>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          Dubai Marina is a haven for luxury lifestyle, fine dining, and luxury retail. Therefore, it is perfect for stylish interior design Dubai. WE DO Interior Design and Fit-Out specializes in providing Interior Design and Fit-Out Solutions in Dubai Marina. It offers personalized services for residential and commercial spaces. We are among the  top interior design companies in Dubai, offering premium Dubai Marina interior design services with a focus on elegance and quality. Put your trust in one of Dubai's leading top interior fit out companies in Dubai and our skilled Dubai Marina interior designers to turn your area into something truly unique.
          </p>
          
          <h2 className="text-left text-xl text-[#b89564] font-bold mt-2 mb-2">
          LUXURY APARTMENT INTERIOR DESIGN</h2>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          Our specialty at WE DO Interior Design and Fitout, situated in Dubai Marina, is designing elegant and practical living areas that will elevate the comfort and luxury of your house. The most discriminating clients looking for high-end materials, custom furnishings, and the smooth integration of smart home technology for a contemporary, automated lifestyle are served by our luxury penthouse design services
          </p>
          <h3 className="text-left text-lg font-bold mt-2 mb-2">
            PENTHOUSE DESIGN 
          </h3>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          Bold, bespoke design ideas that enhance your living area are the main emphasis of our luxury penthouses dubai marina. We use the best materials and customize every element to fit your unique style. We make sure every area is maximized with unique joinery and furniture fittings that combine style and functionality, whether you're designing a large penthouse or a luxury penthouse in Dubai Marina. Our skilled team of joiners and carpenters is committed to creating upscale, personalized pieces that enhance the overall atmosphere of your penthouse and represent your distinct style.
          </p>
          <h3 className="text-left text-lg font-bold mt-2 mb-2">
            APARTMENT DESIGN IN DUBAI MARINA 
          </h3>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          We are specialized in compact apartment fit-out in Dubai, maximising space and comfort, to those who require it for their Dubai Marina apartment. Our team has been very keen on designing studios and 1-bedroom apartments using multifunctional furniture and intelligent layouts that maximise every inch. We Do interior design company in UAE strive to make our spaces stylish yet practical to give a luxurious feel to your apartment in Dubai Marina.
          </p>
          <h3 className="text-left text-lg font-bold mt-2 mb-2">
            BALCONY & TERRACE DESIGN 
          </h3>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          Our balcony design services convert outdoor space into a further extension of your home. We create functionality along with style by offering you solutions for designing balcony and terrace apartments in Dubai Marina. It can include modern seating, lush greenery, and ambiance lighting that gives your Dubai Marina terrace the perfect outdoor retreat where you can have your morning coffee or gather your loved ones.
          </p>
          <h2 className="text-left text-xl text-[#b89564] font-bold mt-2 mb-2">
          VILLA INTERIOR DESIGN
          </h2>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          At WE DO Interior Design and Fitout in Dubai Marina, we specialize in villa interior design in Dubai, creating sleek, luxurious spaces for modern and contemporary villas in prestigious waterfront communities like JBR and Palm Jumeirah. Our designs incorporate bespoke joinery works and expert carpentry to elevate every room with premium finishes.
          </p>
          <h3 className="text-left text-lg font-bold mt-2 mb-2">
            FAMILY-ORIENTED SPACES 
          </h3>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          We create large, practical, and visually beautiful living areas, kitchens, and entertainment areas that are ideal for families. Your villa's functional and aesthetic worth can be improved with our kitchen design and kitchen cabinet design.
          </p>
          <h3 className="text-left text-lg font-bold mt-2 mb-2">
            ECO-FRIENDLY INTERIORS
          </h3>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          Our designs include eco-friendly interiors using natural materials and biophilic components to create sustainable, energy-efficient living spaces. At WE DO Interior Design and Fitout, we put sustainability first without sacrificing luxury, so your villa interior design dubai is the ideal blend of comfort, style, and environmental awareness.
          </p>
          <h2 className="text-left text-xl text-[#b89564] font-bold mt-2 mb-2">
          RETAIL SPACE DESIGN
          </h2>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          At WE DO Interior Design and Fitout, we understand that well-designed dubai retail spaces make all the difference in how a brand is perceived and experienced. We offer dubai boutique stores and luxury showrooms. Comprehensive retail interior design dubai solutions blending creativity with practicality enhance both aesthetics and brand storytelling.
          </p>
          <h3 className="text-left text-lg font-bold mt-2 mb-2">
            BOUTIQUE STORE INTERIORS
          </h3>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          WE DO Interior Design and Fitout specialize in boutique interior design for retail spaces in Dubai. This ensures that the spaces become welcoming environments for fashion, lifestyle, and specialty stores. With years of experience, our expert retail design consultants dubai are dedicated to tailoring each space according to the brand's personality.
          </p>
          <h3 className="text-left text-lg font-bold mt-2 mb-2">
            LUXURY SHOWROOMS
          </h3>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          We design opulent showrooms with elegant branding and design to make high-end products appear even more upscale. Creating an upscale environment for every product is the main goal of our showroom interior design services. Being a leading boutique design agency, we make sure that your showroom becomes a space that impresses and engages.
          </p>
          <h2 className="text-left text-xl text-[#b89564] font-bold mt-2 mb-2">
          INTERIOR DESIGN & FIT-OUT FOR A DUBAI MARINA RESTAURANT
          </h2>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          At WE DO Interior Design and Fitout, we create restaurant interior design in dubai solutions that enhance the experience of dining. Our experts will customize interior designs for the most discerning and unique dining styles-from the upscale eatery to the quaintest café. Whether opening a new restaurant in Dubai Marina or renovating an existing space, we make sure that your design will capture both the heart of your brand and the energetic spirit of the restaurant Dubai marina.
          </p>
          <h3 className="text-left text-lg font-bold mt-2 mb-2">
          WATERFRONT DESIGNING SPACE
          </h3>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          We design beautiful and modern interiors that make the most of the stunning Marina views. Our dining area design for waterfront restaurants focuses on comfort combined with style, ensuring your guests have a memorable experience overlooking one of Dubai's most iconic landscapes. As one of the best restaurants in Dubai Marina, your design will feature premium finishes and thoughtful layouts that enhance the atmosphere.
          </p>
          <h3 className="text-left text-lg font-bold mt-2 mb-2">
            CAFE FIT-OUT
          </h3>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          For café interior design and Fit out, we come up with cozy chic spaces that appeal to the residents as well as the tourists. We focus on optimizing the space with a view of creating an inviting atmosphere, and no matter whether it is trendy or traditional, our designs make visitors stay and enjoy. As professional restaurant interior designer dubai, we ensure that your café in Dubai Marina perfectly fits into the vibrant culture of Dubai Marina.
          </p>
          <h2 className="text-left text-xl text-[#b89564] font-bold mt-2 mb-2">
          OFFICE FIT-OUT & DESIGN
          </h2>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          At WE DO Interior Design and Fitout, we specialize in office interior design that transforms workspaces into productive, inspiring environments. Being one of the top office fit-out companies in Dubai, we provide specific solutions for startups, corporate offices, and co-working spaces in commercial towers, ensuring our designs maximize functionality, enhance employee well-being, and reflect your company's identity.
          </p>
          <h3 className="text-left text-lg font-bold mt-2 mb-2">
            MODERN OFFICE INTERIORS
          </h3>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          Creating clean, contemporary workspaces that encourage collaboration and increase productivity is one of our office interior design services as one of the best office interior design companies in dubai. From private rooms to open-plan offices, we create environments that are both fashionable and functional. We guarantee that your office satisfies the greatest standards of style and functionality, whether you're planning a commercial office fit-out or a complete interior office fit-out.
          </p>
          <h3 className="text-left text-lg font-bold mt-2 mb-2">
            MEETING & COLLABORATION ZONES
          </h3>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          Our meeting room design services reach out to businesses that may need custom solutions for meeting rooms in Dubai. Whether it is for a large conference room or smaller private meeting pods, our designs create environments that communicate, inspire creativity, and ensure collaboration. From office reception design to flexible meeting spaces, we ensure every space in your office is designed to succeed.
          </p>

        </div>
      </div>
    </section>
  );
};

export default Hero;
