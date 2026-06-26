'use client';

import React from 'react';
import Image from 'next/image';

const textImage = {
  src: '/images/2wresidence (5).webp',
  link: '/office-interior-design-trends-in-business-bay',
  title: 'Interior Design Trends In Business Bay'
};

const galleryImages = [
  { src: '/images/dbckapt (9).png', link: '/dubai-creek-2-bedroom-apartment', title: ' 2 BEDROOM APARTMENT DUBAI Business Bay' },
  { src: '/images/address-harbour-point-small-sitting-area-design-dubai-creek-harbour.png', link: '/emaar-harbour-point-apartment-dubai', title: 'EMAAR HARBOUR POINT APARTMENT FIT-OUT' },
];

const TestimonialCarousel = () => {
  const testimonials = [
    {
      quote: "WE DO delivered Joinery services Dubai that completely changed how our home feels. The finish quality and detailing exceeded expectations.",
      author: "Ahmed R. — Villa Owner, Dubai Hills ⭐⭐⭐⭐⭐",
    },
    {
      quote: "We compared multiple suppliers but their joinery company Dubai process felt more structured and the craftsmanship stood out immediately.",
      author: "Sara M. — Apartment Owner, Palm Jumeirah ⭐⭐⭐⭐⭐",
    },
    {
      quote: "Their Custom cabinetry Dubai work transformed our customer experience and created a more premium environment overall.",
      author: "Omar K. — Retail Business Owner ⭐⭐⭐⭐⭐",
    },
  ];

  const [idx, setIdx] = React.useState(0);
  const [slide, setSlide] = React.useState("in");

  const goTo = (newIdx) => {
    setSlide("out");
    setTimeout(() => {
      setIdx((newIdx + testimonials.length) % testimonials.length);
      setSlide("in");
    }, 500);
  };

  React.useEffect(() => {
    const timer = setInterval(() => {
      goTo(idx + 1);
    }, 6000);
    return () => clearInterval(timer);
  }, [idx]);

  return (
    <div className="bg-black-300 p-6 rounded-lg border-l-4 border-[#caa193] my-6 font-play text-white">
      <h2 className="text-lg font-conthrax text-[#caa193] uppercase tracking-wider mb-3 text-justify">
        What Our Clients Say
      </h2>

      <div
        style={{
          transition: "opacity 0.5s ease, transform 0.5s ease",
          opacity: slide === "in" ? 1 : 0,
          transform: slide === "in" ? "translateX(0px)" : "translateX(60px)",
          minHeight: "120px",
        }}
      >
        <p className="italic text-sm sm:text-base text-gray-300 text-justify">
          "{testimonials[idx].quote}"
        </p>
        <span className="block text-right text-xs font-conthrax text-[#caa193] mt-2">
          — {testimonials[idx].author}
        </span>
      </div>

      <div className="flex items-center justify-between mt-4">
        <button
          onClick={() => goTo(idx - 1)}
          className="w-8 h-8 rounded-full border border-[#caa193] text-[#caa193] flex items-center justify-center text-lg hover:bg-[#caa193] hover:text-black transition-colors"
        >
          ‹
        </button>
        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`w-2 h-2 rounded-full transition-colors ${
                i === idx ? "bg-[#caa193]" : "bg-gray-600"
              }`}
            />
          ))}
        </div>
        <button
          onClick={() => goTo(idx + 1)}
          className="w-8 h-8 rounded-full border border-[#caa193] text-[#caa193] flex items-center justify-center text-lg hover:bg-[#caa193] hover:text-black transition-colors"
        >
          ›
        </button>
      </div>
    </div>
  );
};

const DProjects = () => {
  return (
    <section className="px-6 py-5 bg-black-200">
      
      {/* Top Content Block */}
      <div className="lg:max-w-[80%] mx-auto bg-black p-6 sm:p-10 rounded shadow text-center space-y-6 mb-12">
        <h2 className="text-center text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#caa193] uppercase">
          What Joinery Actually Means — And Why It Matters So Much
        </h2>
        
        <div className="space-y-4 text-sm sm:text-base font-play text-white text-left">
          <p className="text-justify">
            Joinery is one of those words many clients hear during an interior project without fully understanding what it includes. Most assume it means woodwork. Joinery, however, turns out to be far more than that. Joinery implies unique interior components, which are crafted specially for the particular space.
          
            These include cabinet works, wardrobe units, fitted furniture, panelled walls, storage systems, kitchen units, shelving, furniture, and all kinds of other architectural components. In contrast to mass-produced furniture pieces, joinery integrates directly into the space. It is crafted in a way to perfectly match the space requirements.
          </p>
          <p className="text-justify">
            That is why joinery can be a key element distinguishing a mediocre interior from an outstanding one. Also, joinery happens to be the most frequently used component in the projects.
          
            Joinery becomes part of everyday life. You use it constantly, opening doors, storing belongings, moving through spaces, and interacting with it without even noticing. That is why quality becomes visible very quickly. One of the strongest advantages of working with a professional <b className="text-[#caa193]"><a href="https://wedointerior.ae/"> Joinery company Dubai </a></b> is control.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-justify">
            <li>Control over proportions.</li>
            <li>Control over materials.</li>
            <li>Control over storage.</li>
            <li>Control over visual consistency.</li>
          </ul>
          <p className="text-justify">
            Instead of selecting furniture that almost works, custom joinery creates solutions that fit naturally from the beginning.
          </p>
        </div>
      </div>

      {/* Split Row – Text + Top Right Image */}
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-3xl font-conthrax text-white py-12 uppercase">
          Why Custom Joinery Outperforms Ready-Made Furniture
        </h2>
        
        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          <div className="space-y-6 text-white font-play">
            <p className="text-justify">
              Ready-made furniture serves a purpose. But custom joinery exists because standard dimensions rarely reflect real spaces. No two homes are identical. No two retail stores operate the same way. No two businesses use interiors in exactly the same manner.That difference creates opportunities.
            </p>
            <p className="text-justify">
              Our Custom joinery Dubai approach starts by understanding how the space needs to perform before deciding how it should look. Instead of compromising around fixed products, we build around actual requirements. One of the biggest advantages is spatial efficiency.Custom joinery uses dimensions intentionally. Dead corners become storage. Walls become functional. Layouts feel cleaner.
            </p>
            <p className="text-justify">
              The result is not necessarily more furniture. It is smarter furniture. Another major advantage is material flexibility with mass production, decisions are already made. Bespoke joinery Dubai, clients choose materials, textures, detailing, hardware, finishes, and internal configurations. Durability improves too. Custom fabrication allows stronger construction methods and higher attention to detail than many standard products.
            </p>
            <p className="text-justify">
              This becomes particularly valuable in kitchens, wardrobes, retail spaces, and commercial environments with daily use. Our Furniture joinery Dubai projects also allow stronger design continuity.
            </p>
          </div>

          <div className="rounded-lg overflow-hidden shadow-md">
            <Image
              src="/images/joinery (7).jpeg"
              alt="Round luxury bed with fairy lights"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>

      {/* Areas and Building Types Section */}
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-3xl font-conthrax text-white py-12 uppercase">
          Our Joinery Services in Dubai
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
         <div className="space-y-6 text-white font-play">
  <div>
    <h3 className="text-[#caa193] font-conthrax text-base mb-1 uppercase tracking-wide">
      Custom Kitchen Cabinetry
    </h3>
    <p className="text-justify text-sm sm:text-base">
      The kitchen is one of the most aesthetically pleasing and functional rooms of all. The cabinets, the storage, ease of access, appliances, and the finishes are all factors that contribute to everyday living. We specialize in producing effortless yet elegant kitchens through our Kitchen Joinery Dubai services.
    </p>
  </div>

  <div>
    <h3 className="text-[#caa193] font-conthrax text-base mb-1 uppercase tracking-wide">
      Bespoke Wardrobes & Walk-In Closets
    </h3>
    <p className="text-justify text-sm sm:text-base">
      Storage should simplify routines. Our Wardrobe joinery Dubai solutions include built-in wardrobes, dressing spaces, integrated organisation systems, and premium closet environments designed around how people actually use them.
    </p>
  </div>

  <div>
    <h3 className="text-[#caa193] font-conthrax text-base mb-1 uppercase tracking-wide">
      Bathroom Vanities & Smart Storage
    </h3>
    <p className="text-justify text-sm sm:text-base">
      Bathrooms benefit from carefully designed cabinetry that improves organisation while maintaining visual simplicity.
    </p>
  </div>

  <div>
    <h3 className="text-[#caa193] font-conthrax text-base mb-1 uppercase tracking-wide">
      Living Room & Media Unit Joinery
    </h3>
    <p className="text-justify text-sm sm:text-base">
      Media units, shelving, display systems, and feature walls create stronger visual structure and better functionality.
    </p>
  </div>

  <div>
    <h3 className="text-[#caa193] font-conthrax text-base mb-1 uppercase tracking-wide">
      Reception Desks & Commercial Joinery
    </h3>
    <p className="text-justify text-sm sm:text-base">
      Commercial spaces need custom elements that support both operations and first impressions. Our Commercial joinery Dubai services include reception areas, meeting environments, and customer-facing installations.
    </p>
  </div>

  <div>
    <h3 className="text-[#caa193] font-conthrax text-base mb-1 uppercase tracking-wide">
      Retail Display & Merchandising Joinery
    </h3>
    <p className="text-justify text-sm sm:text-base">
      Retail presentation directly affects customer engagement. We create custom systems designed around flexibility and visual clarity.
    </p>
  </div>

  <div>
    <h3 className="text-[#caa193] font-conthrax text-base mb-1 uppercase tracking-wide">
      Bar & F&B Counter Joinery
    </h3>
    <p className="text-justify text-sm sm:text-base">
      Hospitality joinery requires durable fabrication with strong detailing.
    </p>
  </div>

  <div>
    <h3 className="text-[#caa193] font-conthrax text-base mb-1 uppercase tracking-wide">
      Built-In Storage & Shelving Solutions
    </h3>
    <p className="text-justify text-sm sm:text-base">
      Integrated storage solutions create cleaner, more functional interiors.
    </p>
  </div>
</div>

          <div className="rounded-lg overflow-hidden shadow-md">
            <Image
              src="/images/joinery (6).jpeg"
              alt="Round luxury bed with fairy lights"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>

      {/* Bottom CTA Section */}
      <div className="bg-[#f5ede5] py-10 text-center space-y-4">
        <h3 className="text-xs sm:text-xl font-conthrax uppercase text-black">
          Get In Touch With Us
        </h3>
        <p className="text-sm sm:text-base font-play text-black text-center">
          We are located in the world's luxury city, Dubai
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4 px-4">
          <a
            href="https://wa.me/971588075603"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-green-500 text-white font-play text-sm rounded w-full sm:w-auto text-center"
          >
            ✅ Request availability by WhatsApp
          </a>
          <a
            href="mailto:info@wedointerior.ae"
            className="px-6 py-3 bg-[#caa193] text-white font-play text-sm rounded w-full sm:w-auto text-center"
          >
            ✉️ Request availability by E-mail
          </a>
        </div>
      </div>

      {/* Why Families Choose Us & Testimonial Section */}
      <div className="lg:max-w-[90%] mx-auto bg-black p-6 sm:p-10 rounded shadow space-y-6 mb-12 mt-12">
        <h2 className="text-center text-3xl font-conthrax text-white uppercase">Why Dubai Clients Choose WE DO for Joinery</h2>
        <div className="space-y-6 text-white font-play">
          <p className="text-justify">
            Clients choose WE DO because joinery quality is created long before installation day. Our process combines design understanding, material expertise, workshop precision, fabrication control, and careful installation into one connected workflow. Having an in-house approach allows stronger quality management and greater consistency across details that many suppliers overlook. Whether delivering standalone cabinetry or supporting full fitout environments, our goal remains the same, create joinery that looks exceptional, functions effortlessly, and continues performing beautifully over time.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="rounded-lg overflow-hidden shadow-md">
            <Image
              src="/images/joinery (8).jpeg"
              alt="Elegant blue bedroom interior"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
          <TestimonialCarousel />
        </div>
      </div>

      {/* Serving Areas & FAQs Section */}
      <div className="lg:max-w-[80%] mx-auto flex flex-col lg:flex-row items-start gap-6 mb-12">
        <div className="w-full space-y-4">
          <div className="space-y-8">
            
            {/* Our Fitout Process — How We Work */}
            <div className="pt-8 border-t border-gray-800 space-y-6">
              <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#caa193] uppercase">
                Our Joinery Process — From Design to Installation
              </h2>
              
              <div className="space-y-4 text-sm sm:text-base font-play text-white text-left">
                <p className="text-justify">
                  Every project begins with understanding. We start with consultation and site measurement to define goals and practical requirements. Design development follows. Layouts, storage logic, proportions, detailing, and material selections become clearer. Once approved, production moves into fabrication. Precision and consistency remain priorities throughout manufacturing. Quality reviews happen continuously. Installation is coordinated carefully to protect both workmanship and surrounding finishes. Final inspection confirms alignment before project completion. Our process is designed to make custom fabrication feel organised, not complicated.
                </p>
              </div>
            </div>

            {/* Who We Deliver Fitout Projects For */}
            <div className="pt-8 border-t border-gray-800 space-y-6">
              <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#caa193] uppercase">
                Materials & Finishes We Work With
              </h2>
              
              <div className="space-y-4 text-sm sm:text-base font-play text-white text-left">
                <p className="text-justify">
                  Materials influence not only appearance but also how joinery ages over time. We work across multiple finish categories depending on project goals. Solid timber including walnut, oak, and teak remains a preferred choice for premium warmth and timeless character. Natural veneer creates sophistication while offering consistency across larger installations. Lacquer finishes support cleaner and more contemporary interiors. Matte textures reduce visual noise while feeling refined. Laminate solutions remain valuable for commercial durability and easier maintenance. Metal accents including bronze and brass introduce depth and detail. Glass integration helps reduce visual weight while creating layered compositions. Material recommendations are always guided by performance, not trends.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#caa193] uppercase">
              Joinery for Every Type of Project
            </h2>
            <p className="text-sm sm:text-base text-white text-justify font-play">
              Residential Joinery — Villas & Apartments: Residential joinery focuses on making everyday living easier and more beautiful. We create integrated solutions across bedrooms, kitchens, living spaces, home offices, and storage environments.
            </p>
            <p className="text-sm sm:text-base text-white text-justify font-play">
              Commercial Joinery — Offices & Retail: Commercial environments need stronger durability and efficient installation. Our Joinery and carpentry Dubai capability supports modern business environments.
            </p>
            <p className="text-sm sm:text-base text-white text-justify font-play">
              Hospitality Joinery — Restaurants & Cafes: Hospitality interiors rely heavily on custom fabrication to create atmosphere and identity.
            </p>
            <p className="text-sm sm:text-base text-white text-justify font-play">
              Standalone Joinery Projects — Without Full Renovation: Not every improvement requires construction. Many clients choose standalone joinery upgrades to transform how spaces function.
            </p>
          </div>
          <div className="w-full rounded-lg overflow-hidden my-4" style={{ height: "350px" }}>
           <div className="w-full rounded-lg overflow-hidden my-4" style={{ height: "350px" }}>
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115485.2537554906!2d55.19504505973715!3d25.19656111440263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43348a6d1257%3A0x2c41616214533d30!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sae!4v1717800000000!5m2!1sen!2sae"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>
          </div>

          <h2 className="text-lg md:text-xl font-conthrax text-[#caa193] pt-6 uppercase">
            Frequently Asked Questions
          </h2>

          <h3 className="text-base md:text-sm font-conthrax text-[#caa193] pt-2 text-justify">
            What types of joinery projects do you take on?
          </h3>
          <p className="text-sm sm:text-base text-white text-justify font-play">
            We deliver residential, commercial, hospitality, retail, and standalone custom joinery projects across Dubai.
          </p>

          <h3 className="text-base md:text-sm font-conthrax text-[#caa193] pt-2 text-justify">
            Is custom joinery only suitable for large spaces?
          </h3>
          <p className="text-sm sm:text-base text-white text-justify font-play">
            No. Custom joinery often creates the biggest improvements in compact spaces because it maximises efficiency.
          </p>

          <h3 className="text-base md:text-sm font-conthrax text-[#caa193] pt-2 text-justify">
            Can joinery be designed around unusual layouts or existing architecture?
          </h3>
          <p className="text-sm sm:text-base text-white text-justify font-play">
            Yes. One of the biggest advantages of bespoke fabrication is adapting to challenging dimensions.
          </p>

          <h3 className="text-base md:text-sm font-conthrax text-[#caa193] pt-2 text-justify">
            Do you manufacture joinery locally in Dubai?
          </h3>
          <p className="text-sm sm:text-base text-white text-justify font-play">
            Our process includes controlled fabrication and installation to maintain consistency and quality.
          </p>

          <h3 className="text-base md:text-sm font-conthrax text-[#caa193] pt-2 text-justify">
            Can custom joinery include integrated lighting and accessories?
          </h3>
          <p className="text-sm sm:text-base text-white text-justify font-play">
            Yes. Joinery can incorporate lighting, display elements, storage accessories, and specialist hardware.
          </p>

          <h3 className="text-base md:text-sm font-conthrax text-[#caa193] pt-2 text-justify">
            What is the difference between carpentry and joinery?
          </h3>
          <p className="text-sm sm:text-base text-white text-justify font-play pb-6">
            Carpentry generally focuses on construction work, while joinery specialises in precision-built interior elements and custom fabrication.
          </p>
          
          <div className="pt-6 border-t border-gray-800">
            <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#caa193] mb-2 text-justify">
              Ready to Build Something That's Made to Last?
            </h2>
            <p className="text-sm sm:text-base text-white text-justify font-play">
              Beautiful interiors are easy to notice. Exceptional craftsmanship is what makes them worth living with. Create cabinetry that fits perfectly. Storage that works intelligently. Furniture that feels built for your life, not borrowed from a catalogue. Work with a team that combines design thinking, workshop precision, and installation excellence to create interiors that feel better every single day. Book your free consultation today and start creating bespoke joinery designed around your space, your lifestyle, and the details that make all the difference.
            </p>
          </div>
        </div>
      </div>

    </section>
  );
};

export default DProjects;