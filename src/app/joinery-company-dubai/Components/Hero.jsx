import React from "react";

const Hero = () => {
  return (
    <section className="relative w-full h-[350px] md:h-[400px] lg:h-[500px] xl:h-[600px]">
      
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/joinery-manufacturing-in-interior-design.webp')" }}
      ></div>

      <div className="px-2 absolute inset-0 bg-opacity-50 bg-black flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-xl md:text-2xl lg:text-5xl xl:text-6xl font-bold mb-4 mt-16">
          
          Expert Joinery Services in Dubai
          </h1>
          <p className="text-sm lg:text-xl xl-text-2xl text-left">
          Enhance your spaces with bespoke joinery solutions from WeDo Interiors. Our skilled craftsmen bring your vision to life with precision and artistry.</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;


