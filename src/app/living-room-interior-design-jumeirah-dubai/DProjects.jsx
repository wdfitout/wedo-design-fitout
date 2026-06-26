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
      quote: "Our living room had good bones but never felt right, too much furniture, in the wrong spots. WE DO rethought the whole layout and the lighting, and honestly it's the room we spend the most time in now. The best living room design Dubai could've given us.",
      author: "N. Haddad, Villa Owner, Jumeirah 2 ⭐⭐⭐⭐⭐",
    },
    {
      quote: "We wanted our majlis to feel properly traditional without looking dated. The majlis interior design Jumeirah Dubai team nailed that balance, formal when we have guests, comfortable the rest of the time.",
      author: "A. Al Suwaidi, Villa Owner, Jumeirah 1 ⭐⭐⭐⭐⭐",
    },
    {
      quote: "Our living room opens onto the garden but never felt connected to it before. After the redesign, the flow between the two makes the whole downstairs feel bigger. Their open plan living room design Dubai work was exactly what the house needed.",
      author: "C. Bennett, Villa Owner, Umm Suqeim ⭐⭐⭐⭐⭐",
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
          
           Our Living Room Interior Design Services in Jumeirah
        </h2>
        
        <div className="space-y-4 text-sm sm:text-base font-play text-white text-left">
<p className="text-justify">
              We take care of the whole thing, layout, furniture, lighting, the styling that ties it all together at the end.
            </p>
            <p className="text-justify">
              <b className="text-[#caa193]">Space Planning & Furniture Layout</b><br />
              First we look at how the room gets used now, and how you'd actually like to use it. Family space most of the time, formal on occasion, both? From there we plan proper zones, somewhere to talk, somewhere for the TV, maybe a quieter reading corner, instead of one big arrangement trying to cover everything at once.
            </p>
            <p className="text-justify">
              <b className="text-[#caa193]"><b className="text-[#caa193]"><a href="https://wedointerior.ae/joinery-company-dubai">Custom Furniture & Joinery</a></b></b><br />
              Built-in shelving, media units, storage that's actually sized for what you own and the room you have. This is part of our wider villa interior design Jumeirah work, custom joinery tends to solve storage far better than freestanding pieces, especially in bigger rooms where loose furniture can end up looking scattered around.
            </p>
            <p className="text-justify">
              <b className="text-[#caa193]">Lighting That Actually Changes the Room</b><br />
              This is probably the single biggest difference we make on most projects. Ambient light for everyday use, accent lighting on artwork or features, softer lighting for evenings, layered properly so the room can shift from bright and practical in the afternoon to warm and relaxed by night.
            </p>
            <p className="text-justify">
              <b className="text-[#caa193]">Feature Walls & Focal Points</b><br />
              Every living room needs somewhere for your eye to land, a textured wall, a fireplace, art with proper lighting on it. Without that, furniture defaults to facing the TV, which honestly isn't the most interesting choice most of the time.
            </p>
            <p className="text-justify">
              <b className="text-[#caa193]">Majlis & Formal Sitting Area Design</b><br />
              Plenty of Jumeirah villas have a majlis separate from the main family space. These rooms have their own rules, more traditional seating, designed with bigger gatherings in mind. With majlis <b className="text-[#caa193]"><a href="https://www.google.com/search?sca_esv=878d6b3e4de82b13&hl=en&authuser=0&sxsrf=APpeQnuKjyVOnjgjctu9_9cDFGctyMk4tw:1782218241091&kgmid=/g/11pyc3sd1k&q=Interior+Design+Company+Dubai+-+WeDo+Interior+Design+%26+Fit+out&shem=epsd1,ltac,rimspwouohc&shndl=30&source=sh/x/loc/uni/m1/1&kgs=366763fdac7b9f3b&utm_source=epsd1,ltac,rimspwouohc,sh/x/loc/uni/m1/1">interior design Jumeirah Dubai</a></b>, the trick is keeping it formal enough for guests while still being comfortable enough that it doesn't sit unused most of the year.
            </p>
            <p className="text-justify">
              <b className="text-[#caa193]">Open Plan Living & Outdoor Connection</b><br />
              If the living room adjoins a garden, patio, or swimming pool, it’s something that must be considered from day one and cannot be simply added as an afterthought. How the floors meet, what can be seen, and the placement of the furniture adjacent to the sliding doors are all critical elements to consider. This is often a major factor when designing the open plan living room Dubai way.
            </p>
            <p className="text-justify">
              <b className="text-[#caa193]">Soft Furnishings & Styling</b><br />
              It's the cushioning, rugs, curtains, throws, the stuff that makes the room inviting. We select fabrics for our designs that work well with the Dubai environment, can handle real-life use, and create cosiness without becoming precious pieces of decor.
            </p>
            <p className="text-justify">
              <b className="text-[#caa193]">Smart Home Integration</b><br />
              Lighting scenes, automated blinds, AV setups that don't leave cables and three remotes lying around. As an established <b className="text-[#caa193]"><a href="https://wedointerior.ae/interior-design-jumeirah-dubai"> interior design company Jumeirah Dubai </a></b>, we plan all of this in from the start, much easier than retrofitting it once the room's finished.
            </p>



          
        </div>
      </div>

      {/* Split Row – Text + Top Right Image */}
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-3xl font-conthrax text-white py-12 uppercase">
          Why Jumeirah Residents Choose WE DO for Living Room Design
        </h2>
        
        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          <div className="space-y-6 text-white font-play">
            <p className="text-justify">
              There are rarely any blank pages in designing living rooms; there is always existing furniture, an existing configuration of pieces of furniture, as well as a family which has its say concerning the way it wants the room designed and that's great. It is at this stage that we listen to their opinion instead of imposing our vision on them. The final effect of our work would be a room where one could feel the better self rather than a room where other people feel good.
            </p>
            <p className="text-justify">
              Everything we design comes from the same team, so the room which appears in your plan will be identical to the one we have designed. All our projects begin with a detailed quotation which includes everything we plan to do.
            
              Most of this work happens in homes where people are still living their normal lives, and we plan around that. Once it's done, we don't disappear either, if something needs tweaking a few weeks later, we're still around to sort it out.
            </p>
          </div>

          <div className="rounded-lg overflow-hidden shadow-md">
            <Image
              src="/images/living (7).jpeg"
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
         Why Living Rooms Feel "Off" and Nobody Can Say Why
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          <div className="space-y-6 text-white font-play">
            <p className="text-justify">
            A few things come up again and again.
         The seating doesn't actually work for talking to each other. Sofa, two chairs, TV on the wall, looks fine in theory, but if people can't sit comfortably and have a conversation, the room just becomes somewhere you pass through. Good <b className="text-[#caa193]"><a href="https://wedointerior.ae/home-renovation-jumeirah-dubai">living room renovation Jumeirah Dubai</a></b> work starts with how your family actually wants to sit together, not just where the screen goes.
Then there's lighting, one ceiling light doing a job that needs three or four. Either the room's too bright to relax in or too dim to read in, and it's rarely right for either. Right living room lighting designs something that will make a huge difference in the way the space feels according to the time of day.
          </p>
          <p className="text-justify">
            Size of the furniture poses challenges for homeowners in Jumeirah villas all the time due to the fact that the space is usually larger than expected. The items that may suit the smaller room are easily outgrown by the space, making everything appear less full.
          
            But then the connectivity issue. A lot of villa living rooms sit between the entrance, the dining area, and sometimes the garden, but nobody's ever really thought about how those spaces talk to each other. Design the living room as its own little island and the whole downstairs can end up feeling disconnected.
          </p>
          </div>

          <div className="rounded-lg overflow-hidden shadow-md">
            <Image
              src="/images/living (5).jpeg"
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
          We are located in the world's luxury city, Dubai        </p>
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
                <div className="space-y-6 text-white font-play">
          
        </div>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="rounded-lg overflow-hidden shadow-md">
            <Image
              src="/images/living (4).jpeg"
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
            
            {/* Living Room Design Styles We Deliver */}
            <div className="pt-8 border-t border-gray-800 space-y-6">
              <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#caa193] uppercase">
                Living Room Design Styles We Deliver
              </h2>
              
              <div className="space-y-4 text-sm sm:text-base font-play text-white text-left">
                <p className="text-justify">
                  <b className="text-[#caa193]">Contemporary Family Living —</b> Comfortable, durable, built for real life. Comfortable seating arrangements, use of materials that can withstand some abuse, and a layout that can accommodate a quiet evening at home or a gathering of children.
                </p>
                <p className="text-justify">
                  <b className="text-[#caa193]">Majlis Traditional —</b> A traditional seating arrangement but with the use of more elegant materials, fitting for formal spaces where the act of hospitality takes place.
                </p>
                <p className="text-justify">
                  <b className="text-[#caa193]">Open Plan Modern —</b> Clean lines and colors to blend seamlessly with the dining area or outside patio to create a seamless ground level experience.
                </p>
                <p className="text-justify">
                  <b className="text-[#caa193]">Minimalism with Warmth —</b> Minimal furnishings, all selected for their quality, with warmth achieved through textures and lighting as opposed to abundance.
                </p>
              </div>
            </div>

            {/* Types of Living Room Projects We Deliver */}
            <div className="pt-8 border-t border-gray-800 space-y-6">
              <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#caa193] uppercase">
                Types of Living Room Projects We Deliver in Jumeirah
              </h2>
              
              <div className="space-y-4 text-sm sm:text-base font-play text-white text-left">
                <p className="text-justify">
                  <b className="text-[#caa193]">Full Villa Living Room Redesign —</b> Layout, furniture, lighting, styling, all together. Often the project that changes how a family actually uses the house day to day.
                </p>
                <p className="text-justify">
                  <b className="text-[#caa193]">Majlis & Formal Reception Areas —</b> Dedicated spaces for hosting, with seating and finishes built for longer gatherings.
                </p>
                <p className="text-justify">
                  <b className="text-[#caa193]">Open Plan Living-Dining Conversions —</b> Rethinking how the living room connects to dining and kitchen areas for better flow.
                </p>
                <p className="text-justify">
                  <b className="text-[#caa193]">Apartment Living Room Upgrades —</b> Smart layout and furniture choices that stop smaller spaces feeling cramped.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full rounded-lg overflow-hidden my-4" style={{ height: "350px" }}>
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
                  How much does living room interior design cost in Jumeirah?
                </h3>
                <p className="text-justify text-gray-300">
                  Depends on scope, a full redesign with new furniture and lighting costs more than a styling refresh using what's already there. We'll give you a proper itemised quote after seeing the space, and the visit itself is free.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-conthrax text-[#caa193] text-sm sm:text-base">
                  How long does a living room renovation take?
                </h3>
                <p className="text-justify text-gray-300">
                  Most projects run 4 to 6 weeks. If it's mainly styling and the furniture's staying, it can move quicker than that.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-conthrax text-[#caa193] text-sm sm:text-base">
                  Can you design a majlis separately from the main living room?
                </h3>
                <p className="text-justify text-gray-300">
                  Yes, majlis and formal areas are often their own thing, with their own style and seating, even when there's other work happening alongside.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-conthrax text-[#caa193] text-sm sm:text-base">
                  Do you handle open plan conversions involving the living room?
                </h3>
                <p className="text-justify text-gray-300">
                  Yes, where structural changes are needed, opening onto a dining area or garden, for example, we plan and manage that as part of the design.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-conthrax text-[#caa193] text-sm sm:text-base">
                  Can you work in an occupied villa?
                </h3>
                <p className="text-justify text-gray-300">
                  Yes, most of our projects are. We plan around your everyday life and keep you updated as things move along.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-conthrax text-[#caa193] text-sm sm:text-base">
                  Do you include furniture and styling, or just the design?
                </h3>
                <p className="text-justify text-gray-300">
                  Both. We design the layout, then source, supply, and install the furniture, lighting, and styling, so what you get is a finished room, not just drawings.
                </p>
                 <div className="pt-6 border-t border-gray-800">
            <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#caa193] mb-2 text-justify">
             Your Living Room Deserves Better Than "It'll Do"
            </h2>
            <p className="text-sm sm:text-base text-white text-justify font-play">
            If you look around your living room and think it's fine, just fine, nothing more, that's worth paying attention to. A room you spend this much time in should feel like somewhere you actually want to be.
<b className="text-[#caa193]"><a href="https://wedointerior.ae/">WE DO Interior Design & Fitout</a></b> has spent years turning living rooms across Jumeirah villas and apartments from "it'll do" into rooms people genuinely look forward to coming home to.
Book your complimentary site visit and see how your living room could work better for everyday family life, entertaining, and everything in between.
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