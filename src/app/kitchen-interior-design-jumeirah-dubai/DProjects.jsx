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
      quote: "Our kitchen was the one room in the villa we always avoided showing people. WE DO completely change that. The new layout makes so much more sense, the storage is incredible, and the lighting makes it feel like a completely different room in the evening. Genuinely the best kitchen interior design Jumeirah has given us.",
      author: "R. Al Falasi, Villa Owner, Jumeirah 1 ⭐⭐⭐⭐⭐",
    },
    {
      quote: "We had a closed-off kitchen that made the whole ground floor feel small. WE DO open it up into our living area and the difference is honestly hard to describe, the house feels bigger, brighter, and we actually spend time there now as a family. Their approach to open plan kitchen design Jumeirah was exactly what we needed.",
      author: "T. Mitchell, Villa Owner, Jumeirah 3 ⭐⭐⭐⭐⭐",
    },
    {
      quote: "From the first meeting, the team understood exactly what we wanted, a kitchen that looked premium but that we would not be afraid to actually cook in every day. The cabinetry quality is outstanding and everything has held up perfectly. Best kitchen renovation Jumeirah Dubai experience we could have asked for.",
      author: "A. Khoury, Villa Owner, Umm Suqeim ⭐⭐⭐⭐⭐",
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
          
           Our Kitchen Interior Design Services in Jumeirah
        </h2>
        
        <div className="space-y-4 text-sm sm:text-base font-play text-white text-left">
<p className="text-justify">
              We manage the entire project, from the first conversation about how you live, through to the day you cook your first meal in the finished space. Design, construction, and installation all handled by one team.
            </p>
            <p className="text-justify">
              <b className="text-[#caa193]">Kitchen Layout & Space Planning</b><br />
              We first understand the space, its dimensions, natural light, plumbing and electrical layout, and how it connects with the rest of the home. Then we talk about you. How many people cook? Do you entertain guests often? Is this a kitchen for quick weekday meals, weekend feasts, or both? From there we create layout options, often working within the existing footprint, sometimes suggesting changes that open the space up more effectively. Each kitchen renovation Jumeirah Dubai project, we begin with getting this foundation right, because no amount of sophisticated cabinetry fixes a layout that does not function well.
            </p>
            <p className="text-justify">
              <b className="text-[#caa193]">Custom Cabinetry & Joinery</b><br />
              Off-the-shelf cabinets are crafted for an average kitchen that does not exist. Your kitchen has its own requirements and constraints and its own storage requirements. Bespoke cabinetry means each inch of your kitchen is used efficiently, corner units that do not waste space, drawers sized for what actually goes in them, and finishes that match the entire home. WE DO is a reliable name in bespoke kitchen design Dubai, we work as joinery expert who curate cabinetry specifically for your space, soft-close mechanisms, and finishes ranging from matte lacquer to natural timber veneer.
            </p>
            <p className="text-justify">
              <b className="text-[#caa193]">Countertop & Surface Selection</b><br />
              The countertop is the surface your hands touch each single day. It requires to look elegant and it needs to be functional. We direct clients through the realistic differences between natural stone, engineered quartz, and other surface quality materials, not just how they visually look, but how they age, how they manage heat and stains, and what maintenance they realistically want in a Jumeirah villa kitchen that gets used every day.
            </p>
            <p className="text-justify">
              <b className="text-[#caa193]">Kitchen Lighting Design</b><br />
              We craft lighting in layers, ambient light for general use, task lighting placed exactly where you require to see clearly, and feature lighting that gives the kitchen environment when it is not just a workspace anymore. For kitchens that open onto living or dining areas, lighting design also has to consider how the kitchen looks as part of that larger space in the evening.
            </p>
            <p className="text-justify">
              <b className="text-[#caa193]">Appliance Integration & Technology</b><br />
              Built-in ovens, integrated fridges, hidden extraction systems, and stylish appliances that joint to your phone, all planned into the design from the beginning so nothing looks like an afterthought. For clients interested in functional home features, WE DO also integrate lighting controls and climate considerations specific to the kitchen ambiances.
            </p>
            <p className="text-justify">
              <b className="text-[#caa193]">Open Plan Kitchen & Living Design</b><br />
              Mostly Jumeirah villas have kitchens that were originally crafted as individual, enclosed rooms, a layout that feels increasingly at odds with how families actually want to live. Open plan kitchen design Jumeirah projects include structural considerations, careful styling of sightlines, and a material palette that ties the kitchen visually to the living and dining spaces it now joints to. Done well, this kind of conversion often change not just the kitchen but the whole ground floor of a home.
            </p>
            <p className="text-justify">
              <b className="text-[#caa193]">Pantry & Storage Solutions</b><br />
              A well-planned pantry, whether a luxurious room or an integrated cabinet system, keeps the main kitchen clutter-free and genuinely practical. We craft pantry storage that works with your shopping habits, your appliance collection, and the realities of stocking a household kitchen in Dubai.
            </p>
            <p className="text-justify">
              <b className="text-[#caa193]">Ventilation & Performance</b><br />
              Because of Cooking heat, steam, and smells produce, and a kitchen that does not handle these accurately is never going to feel as good as it looks. We work with MEP experts and design extraction and ventilation solutions that are effective and quiet, accurately integrated into the cabinetry and ceiling design rather than bolted on as an afterthought.
            </p>


         
        </div>
      </div>

      {/* Split Row – Text + Top Right Image */}
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-3xl font-conthrax text-white py-12 uppercase">
          Why Jumeirah Residents Choose WE DO for Kitchen Design
        </h2>
        
        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          <div className="space-y-6 text-white font-play">
            <p className="text-justify">
              We’ve done so many villas at Jumeirah that we can confidently say that each one is unique, and we always begin our work by getting to know the property and the people who live there first.
            </p>
            <p className="text-justify">
              From designing through to plumbing, electrics, joinery, and styling, everything is done in house, meaning that you get exactly what you see in your visual presentation when we hand the property over to you. We also make sure that every project begins with a full itemized quote; no guesswork, no surprises.
            </p>
            <p className="text-justify">
              We understand that a kitchen renovation in an occupied villa is disruptive by nature, and we plan around that with realistic timelines and regular updates. And once your kitchen is finished, we do not disappear, if anything needs adjusting in the weeks after completion, we are still there.
            </p>
          </div>

          <div className="rounded-lg overflow-hidden shadow-md">
            <Image
              src="/images/carnistore (5).webp"
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
         What Actually Separates a Good Kitchen From a Great One
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          <div className="space-y-6 text-white font-play">
             <p className="text-justify">
            It is rarely about how expensive the finishes are. We have seen kitchens with budget materials that work brilliantly, and kitchens with the most expensive stone in Dubai that feel awkward to cook in. The difference comes down to a few things that are easy to overlook.
          </p>
          <p className="text-justify">
             <b className="text-[#caa193]" >The layout has to make sense for how you actually cook.</b> Not how a showroom kitchen looks in a magazine, how your household genuinely uses the space. Where does the bin go? How far is the fridge from the prep area? Can two people work in the kitchen at once without bumping into each other? These questions matter more than almost anything else, and they are the questions most renovations skip entirely.
          </p>
          <p className="text-justify">
           <b className="text-[#caa193]" > Storage has to be planned, not squeezed in afterwards. </b> Every kitchen we design starts with an honest conversation about what actually needs to live in this kitchen, appliances, crockery, pantry items, cookware, cleaning supplies. Good kitchen interior design Jumeirah projects build storage around real life, not around what looks neat in a 3D render.
          </p>
          <p className="text-justify">
            <b className="text-[#caa193]" >Lighting changes everything. </b> A kitchen with one light in the centre of the room has to work harder than it should. Task lighting under cabinets so you can easily see what you are chopping. Pendant lighting over an island that crafts atmosphere in the evening. Lighting that creates the space feel warm at 9pm and practical at 7am, not the same flat light doing both jobs badly.
          </p>
          <p className="text-justify">
           <b className="text-[#caa193]" > Material choices need to survive real cooking. </b> Stone surfaces that manage hot pans and red wine spills. Cabinet finishes that do not show every fingerprint. Flooring that copes with water, oil, and constant foot traffic. As a specialist in luxury kitchen design Dubai, we have learned which materials photograph beautifully on day one and which ones still look beautiful five years later, and they are not always the same materials.
          </p>
          </div>

          <div className="rounded-lg overflow-hidden shadow-md">
            <Image
              src="/images/carnistore (6).webp"
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
              src="/images/carnistore (7).webp"
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
            
            {/* Kitchen Design Styles We Deliver */}
            <div className="pt-8 border-t border-gray-800 space-y-6">
              <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#caa193] uppercase">
                Kitchen Design Styles We Deliver
              </h2>
              
              <div className="space-y-4 text-sm sm:text-base font-play text-white text-left">
                <p className="text-justify">
                  <b className="text-[#caa193]">Modern Minimalist Kitchen —</b> Slide cabinetry, neat lines, and a restrained material palette. This style relies on accuracy, every gap, each join, every surface has to be integrated correctly because there is nowhere for imperfections to hide. Famous among Jumeirah clients who want a kitchen that feels sophisticated and uncluttered.
                </p>
                <p className="text-justify">
                  <b className="text-[#caa193]">Classic Luxury Kitchen —</b> Shaker-style cabinetry, natural stone, brass or bronze hardware, and a warmer overall feel. This interior suits Jumeirah's big villa kitchens elegantly, there is enough space for detail and craftsmanship to genuinely show.
                </p>
                <p className="text-justify">
                  <b className="text-[#caa193]">Open Plan Family Kitchen —</b> Designed as the social heart of the home. Larger islands, informal seating, durable materials that handle daily family life, and a layout that keeps the cook connected to whatever else is happening in the room.
                </p>
                <p className="text-justify">
                  <b className="text-[#caa193]">Chef-Style Professional Kitchen —</b> For clients who actually cook seriously. Commercial-grade appliances, generous prep space, and layouts based on how professional kitchens accurately work, practical, exclusive, and built for real use rather than just visually appealing.
                </p>
              </div>
            </div>

            {/* Types of Kitchen Projects We Deliver */}
            <div className="pt-8 border-t border-gray-800 space-y-6">
              <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#caa193] uppercase">
                Types of Kitchen Projects We Deliver in Jumeirah
              </h2>
              
              <div className="space-y-4 text-sm sm:text-base font-play text-white text-left">
                <p className="text-justify">
                  <b className="text-[#caa193]">Villa Kitchen Renovations — Full Remodel.</b> Complete transformations from layout through to final styling. This is where we do our most rewarding work, taking a kitchen that no longer fits how a family lives and rebuilding it around how they actually want to live now.
                </p>
                <p className="text-justify">
                  <b className="text-[#caa193]">Open Plan Kitchen & Living Conversions.</b> Removing walls, opening sightlines, and creating the connected living spaces that so many Jumeirah families are looking for in older villa layouts.
                </p>
                <p className="text-justify">
                  <b className="text-[#caa193]">Apartment Kitchen Upgrades.</b> Working within the tighter footprints typical of apartment kitchens, creating every centimetre count through stylish cabinetry and layout decisions.
                </p>
                <p className="text-justify">
                  <b className="text-[#caa193]">Outdoor & Secondary Kitchens.</b> Jumeirah's outdoor living culture means many villas advantage from a secondary kitchen space for entertaining, crafted to handle Dubai's climate and outdoor cooking needs.
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
                  Can you change my kitchen layout, or just update the finishes?
                </h3>
                <p className="text-justify text-gray-300">
                  Both. Some clients want a complete layout change, moving the sink, relocating the island, opening up the space. Others simply want their existing layout updated with new cabinetry, surfaces, and lighting. We design around whatever makes sense for your home and your budget.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-conthrax text-[#caa193] text-sm sm:text-base">
                  Do you handle plumbing and electrical changes?
                </h3>
                <p className="text-justify text-gray-300">
                  Yes. Any kitchen renovation that includes moving a sink, relocating appliances, or transforming the lighting layout needs plumbing and electrical work, and we coordinate this as part of the entire project, designed properly from the first stage rather than managed with as problems arise on site.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-conthrax text-[#caa193] text-sm sm:text-base">
                  Can you change my kitchen to an open plan layout?
                </h3>
                <p className="text-justify text-gray-300">
                  In many cases, yes. This usually covers assessing whether walls can be removed structurally, and then crafting the kitchen and adjoining space as one connected area, with a layout, lighting, and quality material palette that work together. We will understand feasibility during your initial site visit.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-conthrax text-[#caa193] text-sm sm:text-base">
                  Do you design outdoor kitchens for villas?
                </h3>
                <p className="text-justify text-gray-300">
                  Yes. Outdoor and secondary kitchens are popular additions in Jumeirah villas, particularly for entertaining. These are designed with materials and equipment suited to outdoor use and Dubai's climate.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-conthrax text-[#caa193] text-sm sm:text-base">
                  Do you work in occupied villas?
                </h3>
                <p className="text-justify text-gray-300">
                  Yes, many of our kitchen projects take place in homes where families are still living. We design the construction sequence to minimise disruption as much as possible and keep you updated throughout so you know what to expect at each stage.
                </p>
                <div className="pt-6 border-t border-gray-800">
            <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#caa193] mb-2 text-justify">
             Ready to Transform Your Kitchen?
            </h2>
            <p className="text-sm sm:text-base text-white text-justify font-play">
             If your kitchen has stopped working for the way you actually live, too small, too closed off, too tired, or simply not built for how your family uses it now, that is exactly the kind of project we love taking on.
WE DO Interior Design & Fitout has been transforming kitchens across Jumeirah, one villa and one apartment at a time, for years. We know what works in this area, we understand the realities of renovating an occupied home, and we genuinely care about getting the details right.
Book your free site visit today. We will come to your home, take a proper look at your kitchen, listen to what you need, and give you a fully itemised estimate.
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