import React from "react";

const Hero = () => {
  return (
    <section className="relative w-full h-[350px] md:h-[400px] lg:h-[500px] xl:h-[600px]">
      
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/interior-design-fitout-dubai.webp')" }}
      ></div>

      <div className="px-2 absolute inset-0 bg-opacity-50 bg-black flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-xl md:text-2xl lg:text-5xl xl:text-6xl font-bold mb-4 mt-16">
          
          Design and Build Services in Dubai
          </h1>
          <p className="text-sm lg:text-xl xl-text-2xl text-left">
          Experience seamless project delivery with WeDo Interiors' expert design and build services. From initial concept to final execution, we handle every detail to create spaces that inspire. Whether you're envisioning a modern oasis or a classic retreat, our team ensures your villa reflects your unique style and functional needs. Explore our portfolio and discover how we bring visions to life with precision and creativity.</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;


