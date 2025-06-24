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
            "url('/images/dubai-luxury-clinic-interior.webp')",
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
            CLINIC INTERIOR DESIGN DUBAI
          </h1>
          <p className="text-sm lg:text-base xl:text-lg leading-relaxed">
          In the healthcare industry, the interior design of a clinic plays a vital role in creating a welcoming and reassuring environment for patients. At WeDo Interior Design & Fitout, we specialize in designing modern, functional, and patient-centered clinics that align with Dubai’s high standards for healthcare facilities.
          </p>
          <h2 className="text-xl text-[#b89564] font-bold mt-2 mb-2">
            DESIGNING FOR COMFORT & CARE
          </h2>
          <p className="text-sm lg:text-base xl:text-lg leading-relaxed">
          A well-designed clinic is more than just visually appealing—it should promote efficiency, hygiene, and comfort. Our expert team combines aesthetics with practicality to create interiors that enhance patient experiences and streamline staff workflows. From private clinics to multi-specialty facilities, we tailor every project to your unique requirements.
          </p>
          <h2 className="text-xl text-[#b89564] font-bold mt-2 mb-2">
            CLINIC INTERIOR DESIGN & FITOUT SERVICES IN DUBAI
          </h2>
          <h3 className="text-start text-lg font-bold mt-2 mb-2">
            Reception
          </h3>
          <p className="text-sm lg:text-base xl:text-lg leading-relaxed">
          Inviting spaces with comfortable seating, calming color schemes, and smart layouts to ensure a positive first impression.
          </p>
          <h3 className="text-lg font-bold mt-2 mb-2">
            Consultation Rooms
          </h3>
          <p className="text-sm lg:text-base xl:text-lg leading-relaxed">
          Functional and private spaces designed for patient comfort and efficient consultations.
          </p>
        <h3 className="text-lg font-bold mt-2 mb-2">
            Treatment Rooms
          </h3>
          <p className="text-sm lg:text-base xl:text-lg leading-relaxed">
          Optimized for safety, hygiene, and operational efficiency while maintaining a soothing ambiance.
          </p>
        <h3 className="text-lg font-bold mt-2 mb-2">
            Lighting Design
          </h3>
          <p className="text-sm lg:text-base xl:text-lg leading-relaxed">
          Bright, even lighting for clinical precision, balanced with warm, ambient lighting in patient-focused areas.
          </p>
        <h3 className="text-lg font-bold mt-2 mb-2">
            Hygenic Materials
          </h3>
          <p className="text-sm lg:text-base xl:text-lg leading-relaxed">
          Durable, easy-to-clean surfaces that meet healthcare standards.
          </p>
        <h3 className="text-lg font-bold mt-2 mb-2">
            Space Planning
          </h3>
          <p className="text-sm lg:text-base xl:text-lg leading-relaxed">
          Efficient layouts that enhance patient flow and maximize staff productivity.
          </p>
          <h3 className="text-lg font-bold mt-2 mb-2">
            Branding Integration
          </h3>
          <p className="text-sm lg:text-base xl:text-lg leading-relaxed">
          Subtle branding elements to reflect your clinic’s identity and professionalism.
          </p>
        <h2 className="text-xl text-[#b89564] font-bold mt-2 mb-2">
            A Patient-Centered Design Process
          </h2>
        <h3 className="text-start text-lg font-bold mt-2 mb-2">
            Initial Consultation
          </h3>
          <p className="text-sm lg:text-base xl:text-lg leading-relaxed">
          Understanding your clinic’s services, patient demographics, and operational needs.
          </p>
          <h3 className="text-lg font-bold mt-2 mb-2">
            Design Development
          </h3>
          <p className="text-sm lg:text-base xl:text-lg leading-relaxed">
          Detailed plans, mood boards, and 3D renderings to bring your vision to life.
          </p>
          <h3 className="text-lg font-bold mt-2 mb-2">
            Execution
          </h3>
          <p className="text-sm lg:text-base xl:text-lg leading-relaxed">
          From sourcing high-quality materials to overseeing construction, we ensure timely and precise project delivery.
          </p>
          <h2 className="text-xl text-[#b89564] font-bold mt-2 mb-2">
            WHY CHOOSE US ?
          </h2>
          <p className="text-sm lg:text-base xl:text-lg leading-relaxed">
          Dubai’s healthcare industry demands world-class standards, and your clinic’s interior design should reflect that. With extensive experience designing healthcare facilities, we deliver innovative solutions that are functional, compliant with regulations, and aesthetically pleasing.
          </p>
          <h2 className="text-xl text-[#b89564] font-bold mt-2 mb-2">
            TRANSFORM YOUR CLINIC TODAY 
          </h2>
          <p className="text-sm lg:text-base xl:text-lg leading-relaxed">
          Elevate the experience for your patients and staff with a thoughtfully designed clinic. Whether you’re opening a new facility or upgrading an existing space, WeDo Interior Design & Fitout is here to create interiors that inspire trust and well-being.
          </p>
          <h2 className="text-xl text-[#b89564] font-bold mt-2 mb-2">
            CONTACT US TODAY
          </h2>
          <p className="text-sm lg:text-base xl:text-lg leading-relaxed">
          To start your clinic interior design project in Dubai!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
