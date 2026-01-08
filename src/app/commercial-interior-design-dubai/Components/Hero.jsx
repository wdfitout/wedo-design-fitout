
import React from "react";

const Hero = () => {
  return (
    <section className="relative w-full h-[350px] md:h-[400px] lg:h-[500px] xl:h-[600px]">
      
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/office-reception-interior-design-dubai.webp')" }}
      ></div>

      <div className="px-2 absolute inset-0 bg-opacity-50 bg-black flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-2xl md:text-2xl lg:text-5xl xl:text-6xl font-bold mb-4 mt-16">
          
            COMMERCIAL INTERIOR DESIGN DUBAI
          </h1>
          <p className="text-sm lg:text-xl xl-text-2xl text-left">
          First impressions matter. Let We Do Interiors create a commercial space that reflects your brand's identity and inspires your clients. Our interior designers Dubai Team specializes in designing interiors that optimize your business operations .Contact us today to discuss your project.							
          </p>
        </div>
      </div>
    </section>
  );
};   
export default Hero;
