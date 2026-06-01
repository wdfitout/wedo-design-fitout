"use client";

import React from "react";

const LocationMap = () => {
  return (
    <section className="w-full relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
        {/* Map Section */}
        <div className="order-1 lg:order-2 relative w-full h-[400px] lg:h-auto min-h-[500px] overflow-hidden">
          <iframe
            title="WEDO Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3616.291991389708!2d55.12336257488395!3d24.990192340055007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6954f6d82d69%3A0x12891350d5165c12!2sInterior%20Design%20Company%20Dubai%20-%20WeDo%20Interior%20Design%20%26%20Fit%20out!5e0!3m2!1sen!2sae!4v1749312842818!5m2!1sen!2sae"
            width="100%"
            height="100%"
            className="border-0 w-full h-full"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Vision Section */}
        <div className="order-2 lg:order-1 relative flex items-center px-4 sm:px-8 md:px-16 lg:px-24 py-16 lg:py-20 overflow-hidden bg-[#f5f0e6]">
          {/* Mirrored Blueprint Background */}
          <div className="absolute inset-0 bg-[url('/images/loc-bg-m.webp')] lg:bg-[url('/images/blueprint-bg.webp')] bg-cover bg-center bg-no-repeat scale-x-[-1] opacity-45" />

          {/* Soft Overlay */}
          <div className="absolute inset-0 bg-[#f6ede5]/20" />

          {/* Content */}
          <div className="relative z-10 max-w-xl">
            <h2 className="font-penrise text-black text-3xl sm:text-2xl lg:text-4xl leading-tight tracking-wide mb-6">
              Vision <br /> At Work
            </h2>

            <p className="font-conthrax text-black text-sm sm:text-base leading-relaxed mb-6">
              Ready to take your Dubai interiors to the next level with the
              best
              <br className="hidden sm:block" />
              interior designing company Dubai? <br />
              Transform your space now.
            </p>

            <p className="font-play text-black text-sm sm:text-base leading-relaxed">
              Contact Us Today! <br />
              The first step is your vision—and explore how we can transform
              your space into a
              <br className="hidden sm:block" />
              masterpiece.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;