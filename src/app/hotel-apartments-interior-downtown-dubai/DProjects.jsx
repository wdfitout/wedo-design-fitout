'use client';

import React from 'react';
import Image from 'next/image';

const textImage = {
  src: '/images/blpph (9).png',
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
  quote: "WE DO completely transform our Address Downtown unit. The new interior elevated the guest experience immediately. Guests now describe it as better than the hotel itself. Best hotel apartment interior design Downtown Dubai has delivered for our portfolio.",
  author: "M. Al Suwaidi, Investor, Address Downtown ⭐⭐⭐⭐⭐",
},
{
  quote: "We hired WE DO for a complete Vida Downtown apartment interior design project. The redesign helped improve the overall presentation of our property and guest experience. The smart home integration and photography-ready styling made an immediate difference to our listing performance on every platform.",
  author: "S. & P. Thompson, Property Investors, Vida Downtown ⭐⭐⭐⭐⭐",
},
{
  quote: "Their expertise in short term rental interior design Dubai helped us reposition our Forte Tower apartment in a completely different pricing category. The upgraded interior helped position our apartment more competitively within the market. WE DO genuinely the interior fitout hotel apartment Dubai investors actually recommend to each other.",
  author: "R. Mehta, Holiday Home Investor, Forte Tower ⭐⭐⭐⭐⭐",
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
    What Our Hotel Apartment Clients Say
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
  <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#caa193] uppercase">
   Why Hotel Apartment Design Is a Different Challenge Entirely
  </h2>
  <div className="space-y-4 text-sm sm:text-base font-play text-white ">
    <p className="text-justify">
       Designing a hotel apartment is not like designing a home. Your personal taste is completely irrelevant. The key is the guest, their identity, what they need, and what makes them give you that five-star rating and keep coming back. Most booking decisions happen in seconds, based on listing photographs. Better photographs drive more clicks, more enquiries, and more bookings. This is why effective Airbnb interior design Downtown Dubai is as much about photography performance as it is about physical comfort. Daily cleaning cycles. Constant use of furniture, flooring, and kitchen surfaces.. As specialist hotel apartment fitout Downtown Dubai designers, WE DO specifies materials that perform commercially, not just aesthetically. That distinction saves our investor clients significant money over time.
    Keyless entry, automated lighting, climate control, and integrated charging, guests in Downtown Dubai expect these features as standard. Properties that offer them get better reviews and attract higher-quality guests consistently.

    </p>
     
    
    <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#caa193] uppercase">
  Our Hotel Apartment Interior Design Services in Downtown Dubai
</h2>
<p className="text-justify">
  As a fully integrated <b className="text-[#caa193]"><a href="/apartment-interior-design-dubai">serviced apartment interior design Dubai</a></b> company, WE DO manages your entire project from concept to handover,design, approvals, construction, smart home integration, furniture sourcing, and professional styling all under one roof. One team, one point of accountability, no gaps.
</p>
<ul className="list-decimal pl-5 space-y-4 text-[#caa193]">
  <li>
    <h3 className="font-play font-bold text-base text-justify">Concept Design & Guest Experience Strategy</h3>
    <p className="text-white font-play text-sm sm:text-base text-justify">Every hotel apartment interior design Downtown Dubai project starts with understanding your investment goals. Who is your target guest, business traveller, family, couple, long-stay professional? What platforms are you listing on? What nightly rate are you targeting and what competition are you facing?<br/>
These answers shape a design concept built specifically around guest experience and financial performance. This strategic foundation is what separates successful luxury serviced apartment design Dubai projects from interiors that look good but do not actually perform.</p>
  </li>
  <li>
    <h3 className="font-play font-bold text-base text-justify">Space Planning for Rental Optimisation</h3>
    <p className="text-white font-play text-sm sm:text-base text-justify">Intelligent space planning is one of the most effective tools in short term rental interior design Dubai, and one of the most commonly overlooked. Small apartments feel bigger when they are planned properly. WE DO optimize room flow, furniture placement, and circulation to make every square metre work harder for guests.</p>
  </li>
  <li>
    <h3 className="font-play font-bold text-base text-justify">Kitchen Design — Durable and Guest-Ready</h3>
    <p className="text-white font-play text-sm sm:text-base text-justify">Guests in Downtown hotel apartments want a proper kitchen, clean lines, quality stone surfaces, integrated appliances, practical storage, and finishes that clean easily after every checkout. As a specialist in holiday home interior design Dubai, WE DO designs kitchens that guests genuinely enjoy using.</p>
  </li>
  <li>
    <h3 className="font-play font-bold text-base text-justify">Bedroom Design — Hotel-Standard Finish</h3>
    <p className="text-white font-play text-sm sm:text-base text-justify">The bedroom closes the deal on a five-star review, or loses it. Premium bed frame, quality mattress, layered lighting guests can actually control, blackout solutions that work properly, and wardrobe space that makes sense for a short stay. We design bedrooms that feel like a proper hotel room, calm, comfortable, and completely finished.</p>
  </li>
  <li>
    <h3 className="font-play font-bold text-base text-justify">Bathroom Design — Spa Feel, Practical Reality</h3>
    <p className="text-white font-play text-sm sm:text-base text-justify">Guests remember bathrooms. Good stone, frameless glass, proper lighting, and quality fittings earn comments in reviews. Outdated tiles and cheap fixtures earn complaints. As a leading <b className="text-[#caa193]"><a href="/fit-out-company-dubai">premium apartment fitout Downtown Dubai</a></b> specialist, WE DO designs bathrooms that feel genuinely luxurious while surviving high-turnover hospitality use without constant maintenance.</p>
  </li>
  <li>
    <h3 className="font-play font-bold text-base text-justify">Smart Home & Keyless Entry Integration</h3>
    <p className="text-white font-play text-sm sm:text-base text-justify">Smart locks, automated lighting, climate control, and integrated charging stations all improve the guest experience and reduce operational headaches for owners. WE DO integrate all of this from the design stage, never retrofitted at the end when it becomes expensive and disruptive. This is now a standard expectation in any serious investor apartment interior design Dubai project.</p>
  </li>
  <li>
    <h3 className="font-play font-bold text-base text-justify">Photography-Ready Styling & FF&E</h3>
    <p className="text-white font-play text-sm sm:text-base text-justify">Furniture, fixtures, artwork, cushions, plants, and table accessories, the styling layer that makes an apartment look magazine-ready in listing photographs. WE DO sources and install every piece as part of our complete service. When we hand over your apartment, it is listing-ready. Not a project site with a shopping list attached. This complete approach is what our interior fitout hotel apartment Dubai clients consistently highlight as the most valuable part of the service.</p>
  </li>
  <li>
    <h3 className="font-play font-bold text-base text-justify">Building Management & Developer Approvals</h3>
    <p className="text-white font-play text-sm sm:text-base text-justify">Address Downtown, Vida Downtown, Forte Tower, every building has its own approval requirements and management protocols. WE DO handle all of this on your behalf. Submissions, follow-ups, inspections, and sign-offs, most of our investor clients never have to interact with a building management team directly throughout the entire project.</p>
  </li>
</ul>
  </div>
</div>

      {/* Split Row – Text + Top Right Image */}
      <div className="max-w-7xl mx-auto">
  <h2 className="text-center text-3xl font-conthrax text-white py-12 uppercase">
  Buildings We Work In — Downtown Dubai
  </h2>

  {/* Section 1: Text Left, Image Right */}
  <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
    <div className="space-y-6 text-white font-play">
      <p>Our hotel apartment renovation Downtown Dubai team has delivered projects across Downtown's most prestigious hospitality-residential developments.</p>
      <ul className="list-decimal pl-5 space-y-4 text-[#caa193]">
        <li>
          <h3 className="font-play font-bold text-base text-justify">Address Downtown & Address Boulevard</h3>
          <p className="text-white font-play text-sm sm:text-base text-justify">Guests expect an Address-level experience. It is our mission to design to such standards, materials, finishes, and styles that support the brand identity of Address Hotels while representing your unique establishment. As far as our design philosophy goes, it revolves around designing spaces that meet the high-end guests’ expectations.</p>
        </li>
        <li>
          <h3 className="font-play font-bold text-base text-justify">Vida Downtown</h3>
          <p className="text-white font-play text-sm sm:text-base text-justify">Vida guests are lifestyle-focused, design-aware, and vocal on review platforms. Our Vida Downtown apartment interior design approach creates contemporary, visually strong interiors that appeal to this audience and perform exceptionally in listing photography.</p>
        </li>
        <li>
          <h3 className="font-play font-bold text-base text-justify">Forte Tower 1 & 2</h3>
          <p className="text-white font-play text-sm sm:text-base text-justify">One of Downtown Dubai's popular short-term rental developments, where interior quality plays an important role in guest experience and overall property presentation. Every Forte Tower apartment interior design Dubai project we deliver is built around investor performance, guest comfort, listing photography, and long-term durability.</p>
        </li>
        <li>
          <h3 className="font-play font-bold text-base text-justify">Act One Act Two</h3>
          <p className="text-white font-play text-sm sm:text-base text-justify">Prime Burj Khalifa views positions that deserve interiors designed specifically to frame and celebrate that view. These apartments benefit from exceptional views and layouts that can be enhanced through thoughtful interior planning and styling.</p>
        </li>
        <li>
          <h3 className="font-play font-bold text-base text-justify">Boulevard Point & Other Downtown Developments</h3>
          <p className="text-white font-play text-sm sm:text-base text-justify">Whatever the building, our approach is the same, understand the guest profile, design for their experience, and specify for long-term commercial performance. As an experienced <b className="text-[#caa193]"><a href="https://wedointerior.ae/">residential interior design Downtown Dubai</a></b> team that understands both hospitality and investment, we bring consistent results across every Downtown address.</p>
        </li>
      </ul>
      
    </div>

    <div className="rounded-lg overflow-hidden shadow-md">
      <Image
        src="/images/fvapt (7).png"
        alt="Round luxury bed with fairy lights"
        width={600}
        height={400}
        className="w-full h-auto object-cover"
      />
    </div>
  </div>
</div>

      {/* Gallery Heading */}
      {/* <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-lg font-conthrax text-white py-12">
          restaurant Projects in Business Bay
        </h2>
      </div> */}

      {/* Gallery Grid with Hover Effects */}
      {/* <div className="lg:max-w-[50%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 max-w-6xl mx-auto mb-10">
        {galleryImages.map(({ src, link, title }, i) => (
          <a href={link} key={i} className="group block relative overflow-hidden rounded shadow">
            <Image
              src={src}
              alt={title}
              width={400}
              height={400}
              className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-sm sm:text-base font-conthrax text-center">
                {title}
              </p>
            </div>
          </a>
        ))}
      </div> */}

      {/* Emaar Fit-Out Approvals Section */}
      <div className="max-w-7xl mx-auto">
  <h2 className="text-center text-3xl font-conthrax text-white py-12 uppercase">
  Why Downtown Hotel Apartment Investors Choose WE DO
  </h2>

  {/* Section 1: Text Left, Image Right */}
  <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
    <div className="space-y-6 text-white font-play">
      <p className="text-justify">
        Choosing the right design partner for your hotel apartment is one of the most important investment decisions you will make. The wrong choice costs you time, money, and months of lost rental income. The right choice pays for itself many times over.<br/>
At WE DO, we think like investors first and designers second. Every material we specify, every layout we plan, and every technology system we recommend is selected with guest comfort, functionality, and long-term value in mind. This investor-first mindset is what separates us from interior designers who create beautiful spaces that do not actually perform in the short-term rental market.  Durability is built into every decision we make. Hotel apartments experience more wear and tear in one month than a private residence sees in a year.
      </p>
      <p className="text-justify">
        Design, building approvals, construction, smart home integration, furniture sourcing, and final styling, one point of contact, one accountable team, no gaps between agencies and no excuses when something needs resolving. We focus on efficient project management and timely project delivery. And our commitment does not end at handover, adjustments, smart home questions, and any issues that arise in the first months of trading, we remain accountable and we remain available. Your apartment performs exactly as designed from the very first guest night onwards.
      </p>
      
    
    </div>

    <div className="rounded-lg overflow-hidden shadow-md">
      <Image
        src="/images/fvapt (6).png"
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

      {/* Why restaurant Owners Choose Us & Testimonial Section */}
      <div className="lg:max-w-[90%] mx-auto bg-black p-6 sm:p-10 rounded shadow space-y-6 mb-12 mt-12">
        

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="rounded-lg overflow-hidden shadow-md">
            <Image
              src="/images/fvapt (5).png"
              alt="Elegant blue bedroom interior"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Testimonial Block */}
        {/* Testimonial Carousel Block */}
<TestimonialCarousel />
        </div>
      </div>

      {/* Serving Areas & FAQs Section */}
      <div className="lg:max-w-[80%] mx-auto flex flex-col lg:flex-row items-start gap-6 mb-12">
        <div className="w-full space-y-4">
          <div className="space-y-8">
  

 <div className="pt-6 border-t border-gray-800 space-y-6">
  <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#caa193] uppercase">
    Our Hotel Apartment Design Process
  </h2>
  
  <div className="space-y-4 text-sm sm:text-base font-play text-white text-left">
    <ul className="space-y-4 text-[#caa193]">
      <li>
        <h3 className="font-play font-bold text-base text-justify">Week 1 — Free Consultation</h3>
        <p className="text-white font-play text-sm sm:text-base text-justify">Site visit, investment brief, target guest profile, rental strategy, and budget discussion. No charge, no obligation, just an honest conversation about what your apartment could achieve.</p>
      </li>
      <li>
        <h3 className="font-play font-bold text-base text-justify">Weeks 2 to 3 — Concept Design</h3>
        <p className="text-white font-play text-sm sm:text-base text-justify">Full design concept, 3D visualisations of key spaces, material and finish selections, furniture direction, smart home strategy, and detailed project plan. You see and approve everything before we build anything.</p>
      </li>
      <li>
        <h3 className="font-play font-bold text-base text-justify">Weeks 3 to 5 — Approvals</h3>
        <p className="text-white font-play text-sm sm:text-base text-justify">Building management submissions and developer NOC where required, all managed entirely by WE DO. Most clients never deal with a building management team directly.</p>
      </li>
      <li>
        <h3 className="font-play font-bold text-base text-justify">Weeks 5 to 10 — Construction & Fitout</h3>
        <p className="text-white font-play text-sm sm:text-base text-justify">Dedicated project manager runs the site. Weekly updates. Zero-tolerance quality standards. Construction sequenced to minimise building disruption throughout.</p>
      </li>
      <li>
        <h3 className="font-play font-bold text-base text-justify">Weeks 10 to 11 — Styling & Photography Preparation</h3>
        <p className="text-white font-play text-sm sm:text-base text-justify">Furniture installed, accessories placed, styling completed, and apartment fully prepared for professional listing photography.</p>
      </li>
      <li>
        <h3 className="font-play font-bold text-base text-justify">Week 12 — Handover</h3>
        <p className="text-white font-play text-sm sm:text-base text-justify">Full walkthrough, snagging signed off, smart home orientation completed, and post-handover support begins. Your apartment is guest-ready.</p>
      </li>
    </ul>
    
    <p className="text-justify pt-2 text-white">
      Most Downtown hotel apartment projects complete in 8 to 12 weeks. Refresh and targeted upgrade projects deliver in 4 to 6 weeks.
    </p>
  
  </div>
</div>
</div>
          {/* Map Embed */}

          <div className="space-y-4">
    <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#caa193] uppercase">
      Serving Downtown & Surrounding Areas
    </h2>
   
  </div>
<div className="w-full rounded-lg overflow-hidden my-4" style={{ height: "350px" }}>
 <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14440.673856272559!2d55.26781254344073!3d25.197514782057277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43348a67e24b%3A0xff45e502e1ceb7e2!2sDowntown%20Dubai%20-%20Dubai!5e0!3m2!1sen!2sae!4v1717680000000!5m2!1sen!2sae"
  width="100%"
  height="100%"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
></iframe>
  </div>
         <h2 className="text-lg md:text-xl font-conthrax text-[#caa193] pt-6 uppercase">
  Frequently Asked Questions
</h2>

<h3 className="text-base md:text-sm font-conthrax text-[#caa193] pt-2 text-justify">
  What is the duration of hotel apartment fit-out in Downtown Dubai? 
</h3>
<p className="text-sm sm:text-base text-white text-justify font-play">
  It usually takes between 8 and 12 weeks after design approval. For refurbishment and upgrade works, the duration is between 4 and 6 weeks.Your hotel apartment in Downtown Dubai is located within one of the most sought-after zip codes in the world. Location is on your side, now make your interiors do the same work for you too. We recommend starting conversations at least 3 months before your target listing date to allow time for approvals.
</p>

<h3 className="text-base md:text-sm font-conthrax text-[#caa193] pt-2 text-justify">
  Do you design to Address or Vida brand standards? 
</h3>
<p className="text-sm sm:text-base text-white text-justify font-play">
  Yes. We understand the positioning and guest expectations of Address Downtown, Address Boulevard, Vida Downtown, and other premium Downtown developments. Our designs complement each building's brand identity while creating a distinctive, individually owned property.
</p>

<h3 className="text-base md:text-sm font-conthrax text-[#caa193] pt-2 text-justify">
  How do you make a hotel apartment Airbnb-ready? 
</h3>
<p className="text-sm sm:text-base text-white text-justify font-play">
  Our Airbnb interior design Downtown Dubai approach covers guest comfort, durable material specification, smart technology, practical layouts, photography-ready styling, and listing optimization support. When we hand over your apartment it is genuinely ready to list and start earning.
</p>

<h3 className="text-base md:text-sm font-conthrax text-[#caa193] pt-2 text-justify">
  Which Downtown hotel apartment buildings have you worked in? 
</h3>
<p className="text-sm sm:text-base text-white text-justify font-play">
  WE DO understands the hotel interior design Downtown Dubai projects requirements and approval processes commonly associated with developments such as Address Downtown, Address Boulevard, Vida Downtown, Forte Tower, Act One Act Two, and Boulevard Point. with full knowledge of each building's approval requirements and guest profiles.
</p>

<h3 className="text-base md:text-sm font-conthrax text-[#caa193] pt-2 text-justify">
  Do you handle building management and developer approvals? 
</h3>
<p className="text-sm sm:text-base text-white text-justify font-play">
  Yes, completely. As an interior design firm Downtown Dubai developments, we manage all submissions, follow-ups, and sign-offs on your behalf.
</p>

<h3 className="text-base md:text-sm font-conthrax text-[#caa193] pt-2 text-justify">
  How can professional interior design improve a hotel apartment?
</h3>
<p className="text-sm sm:text-base text-white text-justify font-play pb-6">
  A professionally designed hotel apartment can improve guest experience, strengthen visual appeal in listing photos, and help a property stand out in a competitive market. Results vary depending on factors such as location, pricing strategy, occupancy levels, and property management.
</p>
          {/* Final Closing Content */}
          <div className="pt-6 border-t border-gray-800">
            <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#caa193] mb-2 text-justify">
             Ready to Maximise Your Hotel Apartment Returns?
            </h2>
            <p className="text-sm sm:text-base text-white text-justify font-play">
             Your Downtown Dubai hotel apartment already benefits from a world-class location. Now make sure the interior delivers the same premium experience. Location is on your side, now make your interiors do the same work for you too. WE DO Interior Design & Fitout delivers hotel apartments interior design in Downtown Dubai focused on guest comfort, premium presentation, functionality, and long-term asset value. Book your free site visit today. We will come to your apartment, review your current setup, understand your investment goals, and give you a fully itemised estimate, no vague numbers, no obligation.
            </p>
          </div>
        </div>
      </div>

    </section>
  );
};

export default DProjects;