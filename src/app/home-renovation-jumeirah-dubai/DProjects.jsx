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
      quote: "We'd been putting off doing anything to the house for years because the thought of multiple projects over multiple years felt exhausting. WE DO took on the whole thing at once, kitchen, all the bathrooms, the living areas, and honestly, going through it once was so much easier than what we'd been dreading. Best home renovation Jumeirah Dubai decision we made.",
      author: "K. Al Marri, Villa Owner, Jumeirah 1 ⭐⭐⭐⭐⭐",
    },
    {
      quote: "Our villa had been updated in bits over the years by previous owners and it never felt like one house. The villa renovation Jumeirah Dubai team brought everything together with one consistent feel throughout, it finally feels like our home rather than someone else's leftovers.",
      author: "R. Forsythe, Villa Owner, Jumeirah 3 ⭐⭐⭐⭐⭐",
    },
    {
      quote: "We renovated to prepare the villa for rental and the difference in interest from tenants afterwards was immediate. The team understood exactly what mattered for that purpose without over-spending on things that wouldn't add value. Genuinely the best renovation company Dubai could have sent us.",
      author: "M. Devereux, Investment Property Owner, Umm Suqeim ⭐⭐⭐⭐⭐",
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
          Why It Makes More Sense to Go With the Whole Villa Renovation
        </h2>
        
        <div className="space-y-4 text-sm sm:text-base font-play text-white text-left">
          <p className="text-justify">
            Many of the villas in Jumeirah were built 10, 15, even 20 years ago. During those years, chances are the owners have made alterations here and there; some of them may have remodeled their kitchens, changed out flooring, or updated their bathrooms.
          
            Nothing wrong with any of that individually. But put it all together and you often end up with a house that feels like several different decades stitched together.
          </p>
          <p className="text-justify">
            There's also the disruption side of things. Renovating one room means living through dust and noise once. Renovating five rooms over five separate years means living through it five times. For a lot of families, one properly planned period of disruption, even if it's longer, ends up being far easier to live with than constant smaller projects dragging on for years.
         
            And then there's the practical stuff. Plumbing, electrics, structural work, when these things are planned together across the whole house, it's simply more efficient than doing them piecemeal, where the same contractor ends up coming back to the same wall three times for three different projects.
          </p>
          <p className="text-justify">
            That said, villa renovation Jumeirah Dubai doesn't always mean gutting everything. Sometimes it's a cosmetic refresh across every room. Sometimes it's structural, knocking through walls, opening up the layout. Sometimes it's somewhere in between. The starting point is always the same conversation: what's actually not working in this house, and what would make it work better.
          </p>
        </div>
      </div>

      {/* Split Row – Text + Top Right Image */}
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-3xl font-conthrax text-white py-12 uppercase">
          Signs Your Home Might Be Ready
        </h2>
        
        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          <div className="space-y-6 text-white font-play">
            <p className="text-justify">
              A few things tend to come up again and again when families first get in touch.
           
              The layout doesn't really suit how you live anymore. And sometimes it's the boring stuff, old plumbing that keeps causing issues, electrics that can't keep up with how much technology a modern household actually uses, flooring that's seen better days.
           
              Everything seems old-fashioned, not in an appealing vintage sense, but simply out of date and run-down. Outdated tiles, outdated kitchen fittings, bathrooms that have not been renovated in over ten years.
            </p>
            <p className="text-justify">
              There is no connection between indoor and outdoor space, despite the outdoor area being very nice and having a garden or pool area that could add value to the property if incorporated into its design. Each room looks like it was renovated by someone else at another time, giving the home a disjointed look.
           
              Any one of these on its own might just need a small fix. A few of them together is usually a sign it's worth stepping back and looking at the whole picture.
            </p>
          </div>

          <div className="rounded-lg overflow-hidden shadow-md">
            <Image
              src="/images/renovation (5).jpeg"
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
          Our Home Renovation Services in Jumeirah
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          <div className="space-y-6 text-white font-play">
            <p className="text-justify">
              We cover the full scope, from structural changes right through to the last cushion on the sofa.
            </p>
            <p className="text-justify">
              <b className="text-[#caa193]">Whole-Villa Renovation & Remodelling</b><br />
              A complete rethink of the home, room by room, but designed as one connected project rather than separate jobs. Everything works towards one overall feel, rather than each room doing its own thing.
            </p>
            <p className="text-justify">
              <b className="text-[#caa193]">Layout Reconfiguration & Structural Changes</b><br />
              Sometimes the biggest improvement to a home isn't new finishes, it's changing how the rooms relate to each other. Opening up a closed kitchen, removing a wall between two underused rooms, rethinking how the entrance flows into the rest of the house. As part of our broader villa interior design Jumeirah approach, we assess what's structurally possible early on, so the design and the reality line up from the start.
            </p>
            <p className="text-justify">
              <b className="text-[#caa193]">Kitchen & Bathroom Renovation</b><br />
              Usually the rooms with the most impact and the most practical work involved plumbing, electrics, layout, finishes, all planned properly rather than worked around.
            </p>
            <p className="text-justify">
              <b className="text-[#caa193]">Living Spaces & Bedroom Renovation</b><br />
              Living rooms, majlis areas, master suites, kids' rooms, each designed with its own purpose in mind, but consistent with the overall feel of the home. If you've looked at our other pages, you'll know we go into a lot more detail on these individually, but as part of a full home renovation Jumeirah Dubai project, they're planned together from day one.
            </p>
            <p className="text-justify">
              <b className="text-[#caa193]">Flooring, Walls & Ceiling Finishes Throughout</b><br />
              One of the things that makes a home feel cohesive rather than patchwork is consistency in materials and finishes from room to room, even when each space has its own character.
            </p>
            <p className="text-justify">
              <b className="text-[#caa193]">Electrical, Plumbing & MEP Upgrades</b><br />
              The unglamorous part, but often the most important. Old wiring, outdated plumbing, and ventilation that hasn't kept pace with how the home is used now, all addressed properly as part of the wider project rather than as separate emergencies later.
            </p>
            <p className="text-justify">
              <b className="text-[#caa193]">Outdoor & Garden-Facing Spaces</b><br />
              For a lot of Jumeirah villas, the relationship between indoors and outdoors is part of the renovation conversation, whether that's better flow from a living room onto a terrace, or simply making sure the inside doesn't feel disconnected from a garden that's actually being used.
            </p>
            <p className="text-justify">
              <b className="text-[#caa193]">Smart Home Integration Across the Property</b><br />
              Lighting, climate, security, blinds, when these are planned across the whole house rather than room by room, the systems actually work together properly, instead of feeling like separate add-ons in different parts of the home.
            </p>
            <p className="text-justify">
              <b className="text-[#caa193]">Furniture, Styling & Final Handover</b><br />
              Step four involves creating cohesion through the inclusion of furniture and stylistic elements that create harmony between all the rooms in the house.
            </p>
          </div>

          <div className="rounded-lg overflow-hidden shadow-md">
            <Image
              src="/images/renovation (6).jpeg"
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
        <h2 className="text-center text-3xl font-conthrax text-white uppercase">Why Jumeirah Homeowners Choose WE DO for Renovation</h2>
        <div className="space-y-6 text-white font-play">
          <p className="text-justify">
            Villas in this part of Dubai aren't all the same age or built the same way, and a renovation company that's actually worked across a range of Jumeirah properties tends to spot things, structural quirks, older plumbing layouts, electrical systems that need more thought than people expect, before they become problems halfway through a project rather than after. Everything runs through one team. Design, structural planning, MEP coordination, construction, and final styling are all handled in-house, which means nothing gets lost between different companies pointing fingers at each other when something needs adjusting. You get one itemised quote at the start, and that's what you work from, no surprise additions creeping in along the way. We also know that renovating a home you're living in is genuinely disruptive, however well it's planned. We talk honestly about what living through the work will actually be like, plan phasing where it helps, and try to make sure you always know what's happening and roughly when. And once it's done, we don't just leave, if something needs a small adjustment in the weeks afterwards, we're still around for that.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="rounded-lg overflow-hidden shadow-md">
            <Image
              src="/images/renovation (7).jpeg"
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
            
            {/* How Our Design and Build Process Works */}
            <div className="pt-8 border-t border-gray-800 space-y-6">
              <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#caa193] uppercase">
                How a Complete Home Renovation Process Is Done
              </h2>
              
              <div className="space-y-4 text-sm sm:text-base font-play text-white text-left">
                <p className="text-justify">
                  The initial phase involves coming up with a single design theme for the entire house rather than having five different briefs for five different rooms. This does not mean that the design of each individual room will be identical; rather, there should be a unifying element present throughout the entire house. Construction is normally done in phases. Some families prefer to do everything in one go and move out temporarily. Others prefer room-by-room phasing so they can stay in place. Both are completely workable, and we'll talk through what makes sense for your situation. Throughout, it's one project team and one timeline, not separate contractors for the kitchen, the bathrooms, and the living areas, each with their own schedule and their own idea of when things should happen. And anything structural, approvals, plumbing, electrical planning, gets coordinated together from the start, rather than each trade discovering the others' work after the fact.
                </p>
              </div>
            </div>

            {/* Who We Deliver Fitout Projects For */}
            <div className="pt-8 border-t border-gray-800 space-y-6">
              <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#caa193] uppercase">
                Renovation Styles We Deliver
              </h2>
              
              <div className="space-y-4 text-sm sm:text-base font-play text-white text-left">
                <p className="text-justify">
                  <b className="text-[#caa193]">Contemporary Family Home —</b> Practical, comfortable, and built around how a family actually lives day to day. Durable materials, sensible layouts, and a look that doesn't feel precious about everyday life.
                </p>
                <p className="text-justify">
                  <b className="text-[#caa193]">Classic Villa Renovation —</b> Working with a home's existing character rather than against it, richer materials, more traditional detailing, updated for how people live now.
                </p>
                <p className="text-justify">
                  <b className="text-[#caa193]">Modern Open Plan Living —</b> Reworking layouts to create connected, flowing spaces, particularly popular for ground floors where kitchen, dining, and living areas can work as one.
                </p>
                <p className="text-justify">
                  <b className="text-[#caa193]">Modern Arabic Fusion —</b> Geometric detail and warm materials woven through a contemporary layout, a style that feels rooted without feeling traditional.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#caa193] uppercase">
              Types of Renovation Projects We Deliver in Jumeirah
            </h2>
            <p className="text-sm sm:text-base text-white text-justify font-play">
              <b className="text-[#caa193]">Full Villa Renovation — Complete Transformation.</b> Every room is addressed as part of one project, from structural changes through to final styling.
            </p>
            <p className="text-sm sm:text-base text-white text-justify font-play">
              <b className="text-[#caa193]">Partial Renovation — Multiple Rooms, Defined Scope.</b> Maybe it's the whole ground floor, or every bedroom, or the kitchen plus two bathrooms, a defined set of rooms tackled together, planned with the rest of the house in mind even if it's not all happening at once.
            </p>
            <p className="text-sm sm:text-base text-white text-justify font-play">
              <b className="text-[#caa193]">Layout Reconfiguration — Opening Up Living Spaces.</b> Where the main goal is changing how rooms connect to each other, rather than just refreshing finishes.
            </p>
            <p className="text-sm sm:text-base text-white text-justify font-play">
              <b className="text-[#caa193]" >Investment Property Renovation — Refresh for Resale or Rental.</b> For owners preparing a property for the market, a renovation focused on what makes the biggest difference to value and appeal.
            </p>
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
                  How much does a home renovation cost in Jumeirah?
                </h3>
                <p className="text-justify text-gray-300">
                  It depends entirely on scope, a full villa renovation is a very different project from updating a handful of rooms. We'll give you a proper itemised estimate after seeing the property and talking through what you want, and that initial visit is free.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-conthrax text-[#caa193] text-sm sm:text-base">
                  Can we live in the house while it's being renovated?
                </h3>
                <p className="text-justify text-gray-300">
                  Often, yes, particularly with phased projects where work moves through the house room by room or section by section. For larger structural projects, some families choose to move out temporarily for part of the process. We'll talk through what makes sense for your situation honestly.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-conthrax text-[#caa193] text-sm sm:text-base">
                  Do you handle structural changes and approvals?
                </h3>
                <p className="text-justify text-gray-300">
                  Yes. Where walls are coming down or layouts are changing, we assess feasibility early and manage any approvals needed as part of the overall project.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-conthrax text-[#caa193] text-sm sm:text-base">
                  Can we renovate room by room instead of all at once?
                </h3>
                <p className="text-justify text-gray-300">
                  Yes, and this is actually quite common. The difference with planning it as one overall project, even if construction happens in phases, is that everything works towards a consistent feel rather than each room being designed in isolation.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-conthrax text-[#caa193] text-sm sm:text-base">
                  What's included in a full renovation versus a partial one?
                </h3>
                <p className="text-justify text-gray-300">
                  A full renovation covers the entire home, every room, structural changes where needed, all MEP work, and full styling throughout. A partial renovation focuses on a defined set of rooms or areas, but is still planned with the rest of the house in mind so it doesn't feel disconnected from everything else.
                </p>
              <div className="pt-6 border-t border-gray-800">
            <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#caa193] mb-2 text-justify">
             Ready to Stop Patching and Start Properly Renovating?
            </h2>
            <p className="text-sm sm:text-base text-white text-justify font-play">
              If your house has reached that point, not falling apart, just not quite working for you anymore, room by room adding up to something that needs more than another small fix, that's exactly the conversation we're happy to have.
WE DO Interior Design & Fitout has worked on villas and apartments across Jumeirah, from single-room refreshes through to complete top-to-bottom transformations. We know these homes, we know what tends to need attention, and we know how to plan a project that doesn't take over your life more than it needs to.
Get in touch for a free home visit. We'll walk through the property with you, talk honestly about what's worth doing and what isn't, and put together a clear, itemised proposal.
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