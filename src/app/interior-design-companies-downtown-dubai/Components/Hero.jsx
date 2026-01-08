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
            "url('/images/dtrest (8).webp')",
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
        <div className="text-center">
          <h1 className="text-xl text-[#b89564] font-bold mb-4">
          BEST INTERIOR DESIGN & FITOUT COMPANY DOWNTOWN DUBAI, UAE
          </h1>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          Downtown Dubai, best known for its Burj Khalifa, Dubai Mall, and The Dubai Fountain, the epitome of luxury and living, is a hub for downtown luxury living, upscale residence, commercial, and hospitality spaces such as hotel apartments, villas, restaurants, cafes, and bars that Downtown Dubai has in place. At WE DO Interior Design & Fitout, interior design and architecture are developed to transform spaces with unmatched elegance and functionality that is unique to each requirement. From modern bedroom interior designs and sophisticated office interiors, to vibrant restaurant interior design, and luxurious villa exterior designs, the services redefine Downtown Dubai interiors. A seamless mix of style and practicality forms the bases of our approach as we strive to become one of the best interior design companies in Dubai. Here, we would enhance or refine hotel apartments in Downtown Dubai, perfect spas, and gyms, design kitchen and room designs to perfection, and much more. Trust our expertise to elevate your space into a masterpiece of modern interior design.
          </p>
          <h2 className="text-lg text-start text-[#9c733c] font-bold mt-2 mb-2">
            RESIDENTIAL INTERIOR DESIGN SERVICES IN DOWNTOWN DUBAI
          </h2>
          <h3 className="text-lg text-start text-[#b89564] font-bold mt-2 mb-2">
            LUXURY APARTMENTS
          </h3>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          Downtown Dubai’s luxury apartments and penthouses deserve interiors as iconic as their skyline views of the Burj Khalifa and The Dubai Fountain. At WE DO Interior Design & Fitout, we specialize in creating elegant, functional spaces that blend modern aesthetics with timeless luxury. From room interior designs to kitchen interior designs, every detail is tailored to enhance the living experience, ensuring Downtown Dubai apartments exude sophistication and style
          </p>
          <h3 className="text-lg text-start text-[#9c733c] font-bold mt-2 mb-2">
            FAMILY FRIENDLY SPACES
          </h3>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          For families living in Downtown Dubai, we craft inviting and comfortable interiors that balance practicality and elegance. Our designs incorporate child-friendly elements while maintaining the refined charm expected of Downtown Dubai interiors, from bedroom interior designs to vibrant living spaces
          </p>
          <h3 className="text-lg text-start text-[#9c733c] font-bold mt-2 mb-2">
            CUSTOMIZATION
          </h3>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          We believe in personalization - the use of bespoke interior designs, one that mirrors the life and personality of every homeowner. So, if you look for modern bedroom interior designs or fashionable kitchen designs, it's only through this approach that each space of your Downtown Dubai apartment or hotel would truly reflect the persona that is you
          </p>
          <h2 className="text-lg text-start text-[#9c733c] font-bold mt-2 mb-2">
            COMMERCIAL INTERIOR DESIGN SERVICES IN DOWNTOWN DUBAI
          </h2>
          <h3 className="text-lg text-start text-[#b89564] font-bold mt-2 mb-2">
            CORPORATE OFFICES
          </h3>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          WE DO Interior Design & Fitout is a place in Downtown Dubai where we help deliver modern office designs. Productivity and innovation blossom inside our designs, providing a perfect balance of aesthetic as well as functionality-ideal for one of the best office interior design companies in Dubai. We have developed specialist skills in open layout spaces, interior design offices in dubai, and collaborative working space tailored to meet a myriad corporate needs. Our designs for employees enhance their well-being while establishing a cohesive corporate identity, with a focus on ergonomics and incorporating branding elements. From startups to established firms, we redefine the interiors of Downtown Dubai with style and efficiency.
          </p>
          <h3 className="text-lg text-start text-[#9c733c] font-bold mt-2 mb-2">
            RETAIL SPACES & BOUTIQUES
          </h3>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          At WE DO Interior Design & Fitout, we create engaging retail interior design dubai that enhance customer experiences and optimize product displays. We specialize in the Downtown Dubai interiors for Dubai boutique, showroom interior design, and specialty stores with concepts that are tailored to deliver the best of functionality with luxurious aesthetics. Our designs will focus on creating spaces that are visually appealing, communicating your brand identity while driving engagement and sales. From layout planning to intricate detailing, we turn retail spaces in Downtown Dubai into destinations of style and sophistication.
          </p>
          <h3 className="text-lg text-start text-[#9c733c] font-bold mt-2 mb-2">
            RESTAURANTS & CAFES
          </h3>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          At WE DO Interior Design & Fitout, we create unique dining experiences with exceptional restaurant interior design in Dubai. Aiming to specialize in downtown Dubai interiors, our designs focus on aesthetics, functionality, and ambiance to captivate guests of both indoor and outdoor spaces. Whether it's high-end fine dining interior spaces, snug cafés in Downtown Dubai, or chic lounge installations, we at this esteemed restaurant interior designer in Dubai bring innovation and refinement to every undertaking. Our comprehension of the concept of restaurant interior design in Dubai enables us to give restaurants in Downtown Dubai an aesthetic value while ensuring that functionality is also accomplished.
          </p>
          <h3 className="text-lg text-start text-[#9c733c] font-bold mt-2 mb-2">
            HOSPITALITY SPACES
          </h3>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          WE DO Interior Design & Fitout, is a hospitality interior design services in Downtown Dubai that specializes in hospitality interior design services and redefines luxury and comfort for hotels. From grand lobbies and opulent suites to inviting common areas, our designs focus on creating memorable guest experiences with a seamless blend of elegance and functionality. As hospitality interior designers, we make Downtown Dubai hotel apartments and hotels classy and modern, so that each space embodies the luxurious ambiance of the district. We bring innovation to Downtown Dubai interiors with our tailored approach, setting a new standard for excellence in Dubai interior design.
          </p>
          <h2 className="text-lg text-start text-[#9c733c] font-bold mt-2 mb-2">
            COMMERCIAL INTERIOR DESIGN SERVICES IN DOWNTOWN DUBAI
          </h2>
          <h3 className="text-lg text-start text-[#b89564] font-bold mt-2 mb-2">
            SPA & WELLNESS CENTERS
          </h3>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          At WE DO Interior Design & Fitout, we create relaxing and luxurious spas in Downtown Dubai that could be your perfect retreat into relaxation and rejuvenation. Our interior designs blend with calming color tones, gentle lighting, and natural material elements to uplift serenity and comfort in a room. As experienced designers for bespoke Downtown Dubai interiors, we transform the spa and wellness centers to become sanctuaries for peace as we combine elegance with functionality. Be it for stand-alone spas or within hotels in Downtown Dubai, we are one who specializes in delivering a classy, up-to-date wellness environment that benefits our clients with extraordinary places.
          </p>
          <h3 className="text-lg text-start text-[#9c733c] font-bold mt-2 mb-2">
            FITNESS CENTERS IN DOWNTOWN DUBAI
          </h3>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          WE DO Interior Design & Fitout is known to create gyms in Downtown Dubai that are not only functional but also stylish. Our interior designs focus on motivating, efficient spaces that blend perfectly with the luxury of the Downtown Dubai interiors. Whether it be fitness centers, standalone gyms, or luxurious wellness areas, our designs bring modern functionality together, creating a dynamic and energizing setting. Recognizing the influence ergonomics and branding make on a gym's interior, it is no surprise we lead the way with regards to fitness center interiors within Downtown Dubai.
          </p>
          <h3 className="text-lg text-start text-[#9c733c] font-bold mt-2 mb-2">
            3D VISULAIZATION & ARCHITECTURAL DESIGN IN DOWNTOWN DUBAI
          </h3>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          We give clear, detailed views to our clients on their projects through realistic 3D visualization and renders. We can help with accurate planning and decision-making to ensure all elements of the design reflect the client's vision. Our architectural design services work well together with interior designs and structural elements, and we give clients cohesive, useful results. Whether it is Downtown Dubai apartments, hotels, or retail spaces, our expert team uses advanced technology to make designs come to life by providing a comprehensive approach toward stunning, well-executed spaces.
          </p>
          <h2 className="text-lg text-start text-[#b89564] font-bold mt-2 mb-2">
            LUXURY VILLA & OUTDOOR DESIGN IN DOWNTOWN DUBAI
          </h2>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          WE DO Interior Design & Fitout: modern villa exterior design, villa exterior design in some of the most prestigious neighborhoods of Dubai. Luxury, ultra-modern homes, creative design, advanced technology, and a deep understanding of aesthetics are the keys to our creations. Whether it is a small house exterior design or a grand modern villa exterior design, we work closely with clients to bring their vision to life, ensuring every detail is meticulously planned.
          We specialize in landscape designs for villas and also classic villa exterior designs. Our landscape designs give external spaces a beauty and uniqueness which is as inviting as Downtown Dubai interiors. From lush gardens to spacious outdoor dining, we focus on every detail creating functional and breathtaking environments to complement the elegance of the indoors.</p>
          <h2 className="text-lg text-start text-[#b89564] font-bold mt-2 mb-2">
            OUR PROCESS AT WEDO DESIGN & FITOUT
          </h2>
          <ol className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
  <li>
    <strong className="text-[#9c733c]" >Consultation:</strong> We start by understanding your style, needs, and vision for the project, ensuring that every design reflects your personal preferences and objectives.
  </li>
  <li>
  <strong className="text-[#9c733c]" >Concept Creation:</strong> We present tailored design concepts, including mood boards and 3D renders, to give you a clear view of your space's transformation, whether it’s for modern villa exterior design, restaurant interior design, or any other project in Downtown Dubai.
  </li>
  <li>
  <strong className="text-[#9c733c]" >Execution:</strong> Our project management ensures a seamless process, using high-quality materials and finishes to deliver exceptional results, from office interior design to luxury apartment interiors.
  </li>
  <li>
  <strong className="text-[#9c733c]" >Delivery:</strong> We focus on exceeding your expectations, ensuring that the final result—whether a Downtown Dubai apartment, spa, or retail space—reflects your vision and the elegance of Dubai interior design.
  </li>
</ol>

        
        </div>
      </div>
    </section>
  );
};

export default Hero;
