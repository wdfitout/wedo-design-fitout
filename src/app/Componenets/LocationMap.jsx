"use client";

import React from "react";
import Image from "next/image";

const LocationMap = () => {
  return (
    <>
      {/* Google Map Section */}
      <section className="w-full">
        <div className="w-full h-[400px] sm:h-[500px] lg:h-[600px] overflow-hidden">
          <iframe
            title="WEDO Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3616.291991389708!2d55.12336257488395!3d24.990192340055007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6954f6d82d69%3A0x12891350d5165c12!2sInterior%20Design%20Company%20Dubai%20-%20WeDo%20Interior%20Design%20%26%20Fit%20out!5e0!3m2!1sen!2sae!4v1749312842818!5m2!1sen!2sae"
            width="100%"
            height="100%"
            className="border-0 w-full h-full"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      {/* Vision At Work Section */}
      <section className="bg-[#fdf3ed] py-20 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 text-black relative overflow-hiden">
        <div className="w-full max-w-4xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 relative z-10">
          {/* Text Content */}
          <div className="flex-1 z-10">
            <div>
              <h2 className="text-center md:text-start font-bold text-lg sm:text-xl md:text-2xl lg:text-5xl font- tracking-wide text-black mb-4 font-penrise">
                Vision <br></br>At Work
              </h2>
            </div>
            <p className="text-center md:text-start text-sm sm:text-base leading-relaxed text-black mb-4 font-conthrax">
              Ready to take your Dubai interiors to the next level with the best <br />interior
              designing company Dubai? <br />
              <span>Transform your space now.</span>
            </p>
            <p className="text-center md:text-start text-sm sm:text-base font-play leading-relaxed text-black">
              Contact Us Today! <br />
              The first step is your vision—and explore how we can transform your space into a<br />
              masterpiece.
            </p>
          </div>
        </div>

        {/* Right Positioned Blueprint Image */}
      <div className="absolute inset-y-0 right-0 w-[50%]">
  <div className="h-full w-full bg-cover bg-center bg-no-repeat bg-[url('/images/loc-bg-m.webp')] lg:bg-[url('/images/blueprint-bg.webp')]" />
</div>

      </section>
    </>
  );
};

export default LocationMap;
