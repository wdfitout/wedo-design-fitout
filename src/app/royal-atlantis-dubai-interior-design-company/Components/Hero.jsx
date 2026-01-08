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
            "url('/images/atlantis (2).webp')",
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
          INTERIOR DESIGN & FITOUT FOR ATLANTIS THE ROYAL DUBAI, UAE 
          </h1>
          <h2 className="text-left text-lg text-[#b89564] font-bold mt-2 mb-2">
          ELEVATING LUXURY LIVING AT ATLANTIS THE ROYAL
          </h2>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          Nestled on Dubai’s iconic Palm Jumeirah, Atlantis The Royal redefines luxury living with its world-class residences, hotels, and dining experiences. At WeDo Interior Design & Fitout , we specialize in providing bespoke interior design and fit-out services tailored to the unmatched grandeur and exclusivity of Atlantis The Royal.
          </p>
          
          <h2 className="text-left text-xl text-[#b89564] font-bold mt-2 mb-2">
          CREATING MASTERPIECES WITHIN THE MASTERPIECES</h2>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          The residences and suites at Atlantis The Royal demand interior designs that resonate with its architectural brilliance. Our team brings unparalleled creativity and craftsmanship to every project, transforming spaces into sophisticated sanctuaries that align with the luxurious ethos of this iconic destination.
          </p>

          <h2 className="text-left text-xl text-[#b89564] font-bold mt-2 mb-2">
          WE OFFER FOR ATLANTIS THE ROYAL DUBAI
          </h2>
          <h3 className="text-left text-lg font-bold mt-2 mb-2">
            TAILORED RESIDENTIAL DESIGNS 
          </h3>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          We create personalized interiors for apartments, penthouses, and villas, combining modern elegance with timeless luxury.
          </p>
          <h3 className="text-left text-lg font-bold mt-2 mb-2">
            CUSTOM FOT-OUT SOLUTIONS 
          </h3>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          From premium flooring and bespoke cabinetry to intricate ceiling designs, we deliver flawless execution. 
          </p>
          <h3 className="text-left text-lg font-bold mt-2 mb-2">
            LUXURY MATERIALS 
          </h3>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          High-quality finishes, marble, natural woods, and designer accents that reflect the opulence of Atlantis The Royal.
          </p>
          <h3 className="text-left text-lg font-bold mt-2 mb-2">
            LIGHTING & AUTIMATION 
          </h3>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          Smart lighting systems and state-of-the-art automation to elevate comfort and functionality.
          </p>
          <h3 className="text-left text-lg font-bold mt-2 mb-2">
            FURNISHING & DECOR 
          </h3>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          Bespoke furniture and decorative elements curated to enhance your living experience.
          </p>
          <h3 className="text-left text-lg font-bold mt-2 mb-2">
          SPA-LIKE BATHROOMS 
          </h3>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          Wellness-inspired designs with premium fittings, ambient lighting, and natural textures for ultimate relaxation.
          </p>

          <h2 className="text-left text-xl text-[#b89564] font-bold mt-2 mb-2">
            WHY CHOOSE "WeDo INTERIOR" FOR YOUR ATLANTIS THE ROYAL PROPERTY?  
          </h2>
          <h3 className="text-left text-lg font-bold mt-2 mb-2">
            EXPERTISE IN HIGH-END PROJECTS
          </h3>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          With extensive experience in luxury interior design across Dubai, we understand the standards expected by Atlantis The Royal’s discerning clientele.
          </p>
 
          <h3 className="text-left text-lg font-bold mt-2 mb-2">
            PREMIUM DESIGNS 
          </h3>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          Every project is tailored to the client’s preferences, ensuring a unique and personalized space.
          </p>
          <h3 className="text-left text-xl font-bold mt-2 mb-2">
            ATTENTION TO DETAIL 
          </h3>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          From initial concept to the final installation, our team ensures perfection in every element.
          </p>

          <h3 className="text-left text-lg  font-bold mt-2 mb-2">
            SEAMLESS PROCESS 
          </h3>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          We handle every aspect, from design consultation and material selection to project management and delivery.
          </p>
          <h2 className="text-left text-xl text-[#b89564] font-bold mt-2 mb-2">
            OUR DESIGN TO FIT-OUT PROCESS  
          </h2>
          <h3 className="text-left text-lg font-bold mt-2 mb-2">
            CONSULTATION
          </h3>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          Understanding your vision and lifestyle needs for your Atlantis The Royal property.
          </p>
 
          <h3 className="text-left text-lg font-bold mt-2 mb-2">
            CONCEPT DEVELOPMENT 
          </h3>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          Crafting detailed layouts and 3D renderings to showcase the potential of your space.
          </p>
          <h3 className="text-left text-xl font-bold mt-2 mb-2">
            EXECUTION 
          </h3>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          Implementing the design with precision, using the highest quality materials and craftsmanship.
          </p>
          <h2 className="text-left text-xl text-[#b89564] font-bold mt-2 mb-2">
            ELEVATE YOUR ATLANTIS THE ROYAL PROPERTY WITH EXCLUSIVE INTERIORS 
          </h2>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          As one of Dubai’s most prestigious destinations, Atlantis The Royal deserves interiors that match its grandeur. Whether you own a residence or operate a commercial space within this iconic development, WeDo Interior Design & Fitout is here to transform your vision into reality.
          </p>
          <h2 className="text-left text-xl text-[#b89564] font-bold mt-2 mb-2">
            CONTACT US TODAY 
          </h2>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          To discuss your interior design and fit-out project at Atlantis The Royal, Dubai. Let us create a space that reflects the unparalleled luxury and sophistication of your property.
          </p>
      
        </div>
      </div>
    </section>
  );
};

export default Hero;
