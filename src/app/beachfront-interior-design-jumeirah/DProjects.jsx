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
      quote: "Our apartment in JBR had an incredible sea view that the previous layout completely wasted, the sofa had its back to the window. WE DO rethought the whole space around that view and it's transformed how the apartment feels. Genuinely the best sea view apartment interior design Jumeirah could have given us.",
      author: "F. Al Zaabi, Apartment Owner, JBR ⭐⭐⭐⭐⭐",
    },
    {
      quote: "We'd had issues before with finishes not lasting near the sea, things looking tired within a couple of years. The material choices this time round have held up brilliantly, and the place still looks the way it did on day one. Their beachfront villa interior design Dubai knowledge clearly comes from real experience.",
      author: "J. Whitfield, Villa Owner, Jumeirah Beachfront ⭐⭐⭐⭐⭐",
    },
    {
      quote: "Our terrace always felt separate from the living room even though they're right next to each other. After the redesign, it genuinely feels like one space, we use the terrace so much more now. Their approach to coastal interior design Dubai made all the difference.",
      author: "S. Mahmoud, Villa Owner, La Mer ⭐⭐⭐⭐⭐",
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
          What Actually Changes When You Design for a Beachfront Home
        </h2>
        
        <div className="space-y-4 text-sm sm:text-base font-play text-white text-left">
          <p className="text-justify">
            There are a few aspects that truly make the difference and have a hand in pretty much everything that you decide upon.
          </p>
          <p className="text-justify">
            <b className=" text-[#caa193] ">The light is more intense, and it moves differently.</b> Rooms that overlook the sea get a certain kind of natural lighting that is not seen elsewhere. They can be bright and sometimes even harsh at various times of the day.
          </p>
          <p className="text-justify">
            <b className=" text-[#caa193] ">The views deserve to be the main event.</b> If your living room or bedroom faces the sea, that view should be doing some of the work the room's design usually has to do alone. Furniture placement, window treatments, even where you put a mirror, all of it either supports that view or gets in the way of it.
          </p>
          <p className="text-justify">
            <b className=" text-[#caa193] ">Salt air is genuinely tough on materials.</b> This is the part people often don't think about until it's a problem. Certain metals, fabrics, and finishes that look beautiful inland can deteriorate noticeably faster in a beachfront property. A good beachfront villa interior design Dubai project accounts for this from the material selection stage, not after something's started showing wear.
          </p>
          <p className="text-justify">
            <b className=" text-[#caa193] ">Indoor and outdoor space tend to blur.</b> Balconies, terraces, beach access, all these do not exist on their own, but rather are merely an extension of the inside itself. This aspect is crucially important at this place above all others.
          </p>
        </div>
      </div>

      {/* Split Row – Text + Top Right Image */}
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-3xl font-conthrax text-white py-12 uppercase">
          Designing Around Sea Views and Natural Light
        </h2>
        
        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          <div className="space-y-6 text-white font-play">
            <p className="text-justify">
              This is really the heart of any sea view apartment interior design Jumeirah project, so it's worth talking through properly.
            </p>
            <p className="text-justify">
              Sightlines come first. Furniture, colour schemes, anything else, before all this, to where does one’s eye turn on entering the room? It must invariably be towards the sea, and that must be made possible through planning and not hindered through the presence of a cabinet or a back of a sofa that turns its back on the sea view.
            </p>
            <p className="text-justify">
              There is always a balance when it comes to window treatments.
              Seeing the view of the sea is the whole idea behind it, but Dubai sunshine through full height windows would be extremely strong and cause heat build-up by afternoon. With solar film, layers of sheers and motorised options, one can control both lighting and temperature while retaining the view, totally opposite of using thick curtains all day long.
            </p>
            <p className="text-justify">
             The materials should complement the surrounding environment, not be just photogenic.
              Neutral colors, texture that looks natural rather than too formal, materials that can withstand moisture and salt atmosphere with minimal maintenance efforts. This is where a lot of coastal interior design Dubai projects go wrong, they borrow the look of beach living without actually specifying for the conditions of it.
            </p>
            <p className="text-justify">
              And colour palettes work best when they sit alongside the sea rather than compete with it.
              Strong, saturated colours can look striking in photos but tend to feel at odds with a sea view day to day. Softer, more considered palettes tend to age better, and let the view do what it does best.
            </p>
          </div>

          <div className="rounded-lg overflow-hidden shadow-md">
            <Image
              src="/images/beachfront (26).webp"
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
          Our Beachfront Interior Design Services in Jumeirah
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          <div className="space-y-6 text-white font-play">
            <p className="text-justify">
              We handle the full project, from how the space is laid out around the view, through to the final styling.
            </p>
            <p className="text-justify">
              <b className="text-[#caa193]">Space Planning & Sea View Optimisation</b><br />
              We start by understanding exactly how the light and the view move through the space across the day. From there, layouts are planned so the best views are protected and furniture doesn't accidentally end up blocking what makes the room special in the first place.
            </p>
            <p className="text-justify">
              <b className="text-[#caa193]">Material Selection for Coastal Conditions</b><br />
              Choosing finishes and fabrics that genuinely hold up near the sea, not just on day one, but years down the line. As part of our wider luxury beachfront villa design Jumeirah work, this is one of the areas where experience really shows, because the wrong choice here often doesn't reveal itself until it's too late to fix easily.
            </p>
            <p className="text-justify">
              <b className="text-[#caa193]">Indoor-Outdoor Living & Terrace Design</b><br />
              Terraces, balconies, and outdoor spaces facing the beach that serve as a true extension to the interior space rather than an add-on after interior decoration is done. Seamless transitions between floors and furniture that can be used in both the exterior and interior spaces.
            </p>
            <p className="text-justify">
              <b className="text-[#caa193]">Custom Furniture & Joinery</b><br />
              Pieces sized and finished specifically for your space and your light conditions, built-in storage, media units, and furniture that's been chosen with the realities of a beachfront home in mind, not just picked from a catalogue designed for somewhere else entirely.
            </p>
            <p className="text-justify">
              <b className="text-[#caa193]">Lighting Design — Day & Evening by the Sea</b><br />
              Daytime in a beachfront home is often about working with the natural light already flooding in. Evening is a different story, lighting that creates warmth once the sun's gone down and the sea outside turns dark, without the windows turning into mirrors that reflect the room back at you.
            </p>
            <p className="text-justify">
              <b className="text-[#caa193]">Kitchen & Bathroom Design for Beachfront Homes</b><br />
              Where layout allows, kitchens and bathrooms get a relationship with the view too, particularly ensuite bathrooms with sea-facing positions, which can become some of the most enjoyed spaces in the whole home when designed properly.
            </p>
            <p className="text-justify">
              <b className="text-[#caa193]">Smart Home Integration</b><br />
              Automated shading that responds to sun position, climate control that handles the specific demands of a coastal property, and security systems suited to beachfront access points. As an experienced beachfront property interior designer Dubai, we plan all of this from the start.
            </p>
          </div>

          <div className="rounded-lg overflow-hidden shadow-md">
            <Image
              src="/images/beachfront (27).webp"
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
        <h3 className="text-xs sm:text-xl font-conthrax uppercase text-[#caa193]">
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
        <h2 className="text-center text-3xl font-conthrax text-white uppercase">Why Jumeirah Beachfront Owners Choose WE DO</h2>
        <div className="space-y-6 text-white font-play">
          <p className="text-justify">
            Beachfront homes come with a specific set of considerations that don't really apply anywhere else in Dubai, and getting those wrong tends to show up later, in materials that age badly, views that never quite get used properly, or interiors that look beautiful in photos but don't actually suit how the light and the setting work day to day. We've worked on enough of these properties to know what holds up and what doesn't, and that experience shapes every material and layout decision from the start.
          </p>
          <p className="text-justify">
            Design, material specification, construction, and styling all come from the same team, which matters particularly here, coordinating coastal-appropriate finishes with the build itself is much easier when it's one team thinking it through together, rather than a designer specifying something a separate contractor then has to work around. Every project starts with a clear, itemised quote, so there's nothing unexpected once work is underway.
          </p>
          <p className="text-justify">
            We also understand that most of these projects happen in homes people are living in day to day, often with a lifestyle built around being close to the beach that doesn't pause for renovation. We plan around that as much as possible, and once the work is finished, we're still around if anything needs a small adjustment afterwards.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="rounded-lg overflow-hidden shadow-md">
            <Image
              src="/images/beachfront (28).webp"
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
      <div className="lg:max-w-[80%] mx-auto flex flex-col gap-12 mb-12">
  {/* Main Left Content Block (Styles & Properties) */}
  <div className="w-full space-y-12">
    
    {/* Beachfront Design Styles We Deliver */}
    <div className="pt-8 border-t border-gray-800 space-y-6">
      <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#caa193] uppercase">
        Beachfront Design Styles We Deliver
      </h2>
      
      <div className="space-y-4 text-sm sm:text-base font-play text-white text-left">
        <p className="text-justify">
          <b className="text-[#caa193]">Coastal Contemporary —</b> Clean, light-filled, and relaxed without being themed. Natural materials and a palette that lets the sea view stay the focus.
        </p>
        <p className="text-justify">
          <b className="text-[#caa193]">Mediterranean Luxury —</b> Warmer tones, textured plasters, and a richer material palette that feels indulgent while still suiting a sea-facing home.
        </p>
        <p className="text-justify">
          <b className="text-[#caa193]">Modern Minimalist Beach House —</b> Pared back and calm, with restraint that makes the most of light and view rather than competing with either.
        </p>
        <p className="text-justify">
          <b className="text-[#caa193]">Resort-Inspired Living —</b> A more elevated, hospitality-influenced feel, for owners who want their home to feel like the best parts of a five-star beach resort, every day.
        </p>
      </div>
    </div>

    {/* Types of Beachfront Properties We Design */}
    <div className="pt-8 border-t border-gray-800 space-y-6">
      <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#caa193] uppercase">
        Types of Beachfront Properties We Design
      </h2>
      
      <div className="space-y-4 text-sm sm:text-base font-play text-white text-left">
        <p className="text-justify">
          <b className="text-[#caa193]">Beachfront Villas — Full Interior Design.</b> Complete projects covering every room, designed around the property's specific orientation and views.
        </p>
        <p className="text-justify">
          <b className="text-[#caa193]">Sea View Apartments — JBR & La Mer.</b> Working within apartment footprints to make the most of sea-facing rooms and balconies.
        </p>
        <p className="text-justify">
          <b className="text-[#caa193]">Holiday Homes & Second Residences.</b> Properties that need to feel special during the time you're there, and be genuinely easy to maintain when you're not.
        </p>
        <p className="text-justify">
          <b className="text-[#caa193]">Investment Properties — Beachfront Rentals.</b> Design that photographs beautifully for listings and holds up to the wear of frequent guest turnover, without losing the sense of place that makes a beachfront property desirable in the first place.
        </p>
      </div>
    </div>

    {/* Bottom Closing Statement */}
   
  </div>

  {/* Map Container Block */}
  <div className="w-full rounded-lg overflow-hidden shadow-lg my-4" style={{ height: "350px" }}>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28882.11586523091!2d55.22557672152865!3d25.194273577322997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43da3ca3ffb7%3A0x6fb26207f2df47b3!2sJumeirah%20-%20Dubai!5e0!3m2!1sen!2sae!4v1717680000000!5m2!1sen!2sae"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>

  {/* FAQ Section */}
  <div className="w-full pt-8 border-t border-gray-800">
    <h2 className="text-lg md:text-xl font-conthrax text-[#caa193] uppercase mb-6">
      Frequently Asked Questions
    </h2>
    
    <div className="space-y-6 text-sm sm:text-base font-play text-white text-left">
      <div className="space-y-2">
        <h3 className="font-conthrax text-[#caa193] text-sm sm:text-base">
          How is beachfront interior design different from regular villa design?
        </h3>
        <p className="text-justify text-gray-300">
          The main differences come down to light, views, and materials. Beachfront homes get more intense natural light, the sea view often becomes the central design consideration, and certain materials need to be chosen specifically for their resistance to salt air and humidity, considerations that simply don't apply to an inland property in the same way.
        </p>
      </div>

      <div className="space-y-2">
        <h3 className="font-conthrax text-[#caa193] text-sm sm:text-base">
          What materials work best for homes near the sea?
        </h3>
        <p className="text-justify text-gray-300">
          It varies by application, but generally materials with good resistance to humidity and salt exposure, certain stones, treated woods, specific metal finishes, and fabrics suited to coastal conditions. We'll guide you through the right choices for each part of your home during the design process.
        </p>
      </div>

      <div className="space-y-2">
        <h3 className="font-conthrax text-[#caa193] text-sm sm:text-base">
          How do you manage heat and glare from sea-facing windows?
        </h3>
        <p className="text-justify text-gray-300">
          Through a combination of solar films, layered window treatments, and in some cases motorised systems that adjust through the day, all designed to manage light and heat without sacrificing the view, which is the whole point of living here.
        </p>
      </div>

      <div className="space-y-2">
        <h3 className="font-conthrax text-[#caa193] text-sm sm:text-base">
          Can you design for both indoor and outdoor beachfront living spaces?
        </h3>
        <p className="text-justify text-gray-300">
          Yes, in fact, we'd say this should always be part of the conversation. Terraces, balconies, and outdoor areas work best when designed alongside the interior, not as a separate afterthought.
        </p>
      </div>

      <div className="space-y-2">
        <h3 className="font-conthrax text-[#caa193] text-sm sm:text-base">
          How long does a beachfront home renovation take?
        </h3>
        <p className="text-justify text-gray-300">
          This depends on scope, a single room or terrace project might take 4 to 8 weeks, while a full villa renovation could run several months. We'll give you a realistic timeline once we've seen the property and discussed what you're hoping to do.
        </p>
      </div>

      <div className="space-y-2">
        <h3 className="font-conthrax text-[#caa193] text-sm sm:text-base">
          Do you design for investment or rental beachfront properties?
        </h3>
        <p className="text-justify text-gray-300">
          Yes. For rental properties, we focus on designs that photograph well, hold up to guest turnover, and still capture what makes a beachfront property genuinely desirable, rather than a generic interior that happens to be near the sea.
        </p>
         <div className="pt-8 border-t border-gray-800 space-y-6">
      <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#caa193] uppercase">
        Your View Is the Sea. Your Interior Should Live Up to It.
      </h2>
      
      <div className="space-y-4 text-sm sm:text-base font-play text-white text-left">
        <p className="text-justify">
          If your home looks out onto the water but doesn't quite feel like it belongs to that setting, that's a fixable thing, and honestly, one of the most rewarding kinds of projects to work on.
       
          WE DO Interior Design & Fitout has designed beachfront homes across Jumeirah, JBR, and La Mer, and we understand what it actually takes to get a coastal property right, not just how it looks, but how it holds up and how it feels to live in, day after day.
      
          Get in touch for a free home visit. We'll come and see the space, talk through how the light and the view work across the day, and put together a clear, itemised proposal.
        </p>
      </div>
    </div>
      </div>
    </div>
  </div>
</div>

    </section>
  );
};

export default DProjects;