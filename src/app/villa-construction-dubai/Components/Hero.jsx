import React from "react";

const Hero = () => {
  return (
    <section className="relative w-full h-[350px] md:h-[400px] lg:h-[500px] xl:h-[600px]">
      
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/villa-construction-by-luxury-interior-design-company-dubai.webp')" }}
      ></div>

      
            {/* Gradient Overlay Behind Text */}
  <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-black/90 to-transparent z-0" />

  {/* Overlay Text Content */}
  <div className="absolute inset-x-0 bottom-2 sm:bottom-10 text-center px-4 text-white z-10">
    <h1 className="text-md sm:text-3xl font-penrise">
      VILLA CONSTRUCTION DUBAI
    </h1>
    <p className="text-[12px] sm:text-base md:text-lg mt-2 font-play px-0 sm:px-16">
    We Do Interior Design & Fitout transforms visions for luxury villa into life. We Do Interior Design & Fitout is the Top villa construction company in Dubai. From Conception to completion, Our seasoned team ensures that every detail is crafted with perfection.</p>
  </div>
    
    </section>
  );
};

export default Hero;


