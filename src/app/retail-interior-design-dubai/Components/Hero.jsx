
import React from "react";

const Hero = () => {
  return (
  <section className="relative w-full h-[350px] md:h-[400px] lg:h-[500px] xl:h-[600px]">
      
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/retail (1).webp')" }}
        ></div>
  
        <div className="px-2 absolute inset-0 bg-opacity-50 bg-black flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-2xl md:text-2xl lg:text-5xl xl:text-6xl font-bold mb-4 mt-16">
            
            RETAIL INTERIOR DESIGN
            </h1>
            <p className="text-sm lg:text-xl xl-text-2xl text-left">
            Discover exceptional retail interior design in Dubai with We Do Interiors. Transform your retail space into a captivating brand experience. Our interior designer Dubai team create stunning shops like the classy YM retail shop, Peaky Blinder Barber shop and Manal AJAJ. Contact us today!
            </p>
          </div>
        </div>
      </section>
    );
  };
  


export default Hero;