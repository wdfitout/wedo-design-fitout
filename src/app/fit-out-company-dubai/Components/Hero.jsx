import React from "react";

const Hero = () => {
  return (
    <section className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px]">
      
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/fitout-hero.webp')" }}
      ></div>

      <div className="absolute inset-0 bg-opacity-50 bg-black flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-md md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-2 mt-20">
            WHAT IS A FITOUT ?
          </h1>
          <div className="text-center text-white">
          <p >A fit out is the process of transforming a space into a functional and pleasing environment. This process involves designing, constructing, and installing interior elements to meet the requirements, fit out work is typically for commercial or residential purposes.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
