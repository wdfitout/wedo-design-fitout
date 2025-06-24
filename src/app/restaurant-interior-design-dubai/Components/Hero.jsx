
import React from "react";

const Hero = () => {
  return (
<section className="relative w-full h-[350px] md:h-[400px] lg:h-[500px] xl:h-[600px]">
      
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/restaurant (3).webp')" }}
      ></div>

      <div className="px-2 absolute inset-0 bg-opacity-50 bg-black flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-2xl md:text-2xl lg:text-5xl xl:text-6xl font-bold mb-4 mt-16">
          
          RESTAURANT INTERIOR DESIGN DUBAI
          </h1>
          <p className="text-sm lg:text-xl xl-text-2xl text-left">
          Ready to take your Dubai bar or restaurant to the next level with the best interior designing company Dubai? Transform your Restaurant & Bar Interior Design Dubai. Contact We Do Interiors today! We are The Let's discuss your vision and explore how we can transform your space into a masterpiece.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;