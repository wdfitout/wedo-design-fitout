'use client';

import React from 'react';
import Image from 'next/image';

const textImage = {
  src: '/images/dtrest (5).webp',
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
  quote: "The fixture layout planning changed how our store performs completely. Guests now move through the space the way we always intended but could never quite achieve. The difference in dwell time was noticeable within the first week of trading.",
  author: "Fashion Boutique Owner, Downtown Dubai ⭐⭐⭐⭐⭐",
},
{
  quote: "WE DO understand the brand before they put a single line on paper. The finished space communicates exactly what we needed it to, and it photographs in a way that has genuinely improved our social media presence without us doing anything differently.",
  author: " Lifestyle Brand, Souk Al Bahar ⭐⭐⭐⭐⭐",
},
{
  quote: "Managing building approvals on our previous fitout cost us six weeks and significant abortive work. Handing that entirely to WE DO this time was one of the better decisions we made on the project.",
  author: "Retail Investor, Boulevard Crescent ⭐⭐⭐⭐⭐",
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
   What Our Retail Clients Say
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
   The Retail Challenge Downtown Dubai Actually Presents
  </h2>
  <div className="space-y-4 text-sm sm:text-base font-play text-white ">
    <p className="text-justify">
       Fitting out a retail store in Downtown Dubai is not the same as fitting out one anywhere else in the city. The environment creates specific pressures that most general fitout companies are not set up to handle. Every retail fitout in Downtown Dubai we take on starts with the question of what this space looks like from the outside before we discuss what happens inside. 
    </p>
     <p className="text-justify">
       Where clients look when they enter, which products they reach first, how long they stay, and what they interact with before reaching the till, all of this is a design outcome.  Retail units across Downtown, whether within Emaar-managed properties or street-level developments, each carry their own fitout requirements.  WE DO handle all of this as a standard part of our service.    </p>
    
    <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#caa193] uppercase">
  Downtown Dubai Retail Environments We Understand
</h2>
<p className="text-justify">
  Our team is familiar with the guest profiles, footfall patterns, and approval requirements across Downtown Dubai's main retail locations. Our team understands the unique retail dynamics of Mohammed Bin Rashid Boulevard, Souk Al Bahar, Boulevard Crescent, and other key retail destinations across Downtown Dubai.
  </p>
<ul className="list-decimal pl-5 space-y-4 text-[#caa193]">
  <li>
    <h3 className="font-play font-bold text-base text-justify">Boulevard Crescent and Surrounding Developments</h3>
    <p className="text-white font-play text-sm sm:text-base text-justify">Mixed-use retail within Downtown's residential developments serves a regular, repeat customer base. Brand consistency and a space that improves with familiarity matter more here than in higher-footfall tourist-facing locations.</p>
  </li>
  <li>
    <h3 className="font-play font-bold text-base text-justify">Showrooms and Destination Retail</h3>
    <p className="text-white font-play text-sm sm:text-base text-justify">Furniture, interiors, and lifestyle showrooms require a fundamentally different approach from transactional retail. We design showroom environments across Downtown that create conditions for considered, high-value purchases, spaces where guests feel comfortable spending time and returning before deciding.</p>
  </li>
  <li>
    <h3 className="font-play font-bold text-base text-justify">Independent Boutiques</h3>
    <p className="text-white font-play text-sm sm:text-base text-justify">Fashion boutiques, jewellery stores, and speciality concept stores across Downtown's street-level retail units. Often the most creatively interesting briefs and, given the proximity to strong competition, the ones where design quality makes the most measurable difference.</p>
  </li>
  
</ul>
  </div>
</div>

      {/* Split Row – Text + Top Right Image */}
      <div className="max-w-7xl mx-auto">
  <h2 className="text-center text-3xl font-conthrax text-white py-12 uppercase">
   Retail Fitout Services in Downtown Dubai
  </h2>

  {/* Section 1: Text Left, Image Right */}
  <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
    <div className="space-y-6 text-white font-play">
      <p className=" text-justify">WE DO provides complete retail fitout services in Downtown Dubai including concept design, authority approvals, custom joinery, lighting design, shopfront development, construction, merchandising support, and final styling. As an experienced <b className="text-[#caa193]"><a href="https://wedointerior.ae/"> retail fitout company Dubai</a></b> and provide the best commercial interior design Dubai, businesses rely on, we deliver turnkey retail environments designed to improve customer experience, strengthen brand presence, and support long-term commercial performance.</p>
      <ul className="list-decimal pl-5 space-y-4 text-[#caa193]">
        <li>
          <h3 className="font-play font-bold text-base text-justify">Owner-Occupiers</h3>
          <p className="text-white font-play text-sm sm:text-base text-justify">who want a home that genuinely celebrates the reason they chose Downtown Dubai. Not just a nice apartment, a space where the Burj Khalifa is part of daily life in every room.</p>
        </li>
        <li>
          <h3 className="font-play font-bold text-base text-justify">Buy-to-Let Investors</h3>
          <p className="text-white font-play text-sm sm:text-base text-justify">who understand that a Burj Khalifa view is their strongest commercial asset. As a specialist <b className="text-[#caa193]"><a href="https://www.google.com/search?sca_esv=4a455b0f3ad2390b&hl=en&authuser=0&sxsrf=ANbL-n6muCiBTqmYJI3egRWGafsfhG2Seg:1781075806187&kgmid=/g/11pyc3sd1k&q=Interior+Design+Company+Dubai+-+WeDo+Interior+Design+%26+Fit+out&shem=rimspwouohc&shndl=30&source=sh/x/loc/uni/m1/1&kgs=9a27409f3b5b70a4&utm_source=rimspwouohc,sh/x/loc/uni/m1/1"> residential interior design Downtown Dubai</a></b> team focused on investor outcomes, WE DO designs to maximise both nightly rates and long-term rental yield, with the view as the centrepiece of the listing.</p>
        </li>
        <li>
          <h3 className="font-play font-bold text-base text-justify">Airbnb & Holiday Home Owners</h3>
          <p className="text-white font-play text-sm sm:text-base text-justify">We design apartments that showcase the view beautifully, creating memorable arrival experiences and encouraging positive guest reviews that result in better bookings in future.</p>
        </li>
        <li>
          <h3 className="font-play font-bold text-base text-justify">Off-plan buyers</h3>
          <p className="text-white font-play text-sm sm:text-base text-justify"> who want a complete interior design concept ready for execution immediately after developer handover.</p>
        </li>
      </ul>
      <p>WE DO start the design process before your keys arrive, so there is no gap between handover and the apartment going live.
</p>
    </div>

    <div className="rounded-lg overflow-hidden shadow-md">
      <Image
        src="/images/dtrest (6).webp"
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
  Why Retail Operators in Downtown Choose WE DO
  </h2>

  {/* Section 1: Text Left, Image Right */}
  <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
    <div className="space-y-6 text-white font-play">
      <p className="text-justify">
        Choosing a fitout partner for a retail space in Downtown Dubai is a decision that affects your store's performance for the entire life of the fit out, not just the opening week. As the leading retail design company Dubai, we think commercially before we think creatively. We build the commercial logic into the design from the first meeting, not after the fact. Concept design, joinery specification, construction management, lighting design, and final styling all run through the same team.
      </p>
      <p className="text-justify">
        We select finishes, fixtures, and flooring that look genuinely premium and survive years of daily commercial use without constant repair. Delays in retail fitouts often come from poor approval management, poor construction sequencing, or poor coordination between trades. All three are within our control and all three are areas where we apply consistent processes across every project.
      </p>
      
    
    </div>

    <div className="rounded-lg overflow-hidden shadow-md">
      <Image
        src="/images/dtrest (7).webp"
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
              src="/images/dtrest (8).webp"
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
    How a Retail Fitout Project Works With WE DO
  </h2>
  
  <div className="space-y-4 text-sm sm:text-base font-play text-white text-left">
    <ul className="space-y-4 text-[#caa193]">
      <li>
        <h3 className="font-play font-bold text-base text-justify">Week 1 — Free Site Visit and Brand Brief</h3>
        <p className="text-white font-play text-sm sm:text-base text-justify">We visit the space, understand your brand positioning and target customer, discuss your budget honestly, and identify any building-specific approval requirements that will affect the programme.</p>
      </li>
      <li>
        <h3 className="font-play font-bold text-base text-justify">Weeks 2 to 3 — Space Planning</h3>
        <p className="text-white font-play text-sm sm:text-base text-justify">Customer flow plan, design concept with material and finish direction, fixture design strategy, and 3D visualisations of key areas. Everything approved before any construction begins.</p>
      </li>
      <li>
        <h3 className="font-play font-bold text-base text-justify">Weeks 3 to 5 — Authority and Landlord Submissions</h3>
        <p className="text-white font-play text-sm sm:text-base text-justify">Landlord design guide submissions, authority approvals, and materials sign-offs all managed by WE DO. We track every submission and follow up until written approval is confirmed.</p>
      </li>
      <li>
        <h3 className="font-play font-bold text-base text-justify">Weeks 5 to 9 — End-to-end management</h3>
        <p className="text-white font-play text-sm sm:text-base text-justify">A single site manager directs all daily operations.</p>
      </li>
      <li>
        <h3 className="font-play font-bold text-base text-justify">Weeks 9 to 10 — Merchandise Staging and Final Styling</h3>
        <p className="text-white font-play text-sm sm:text-base text-justify">Fixtures in place, lighting calibrated, and space fully prepared for product merchandising and opening day photography before the first customer arrives.</p>
      </li>
      <li>
        <h3 className="font-play font-bold text-base text-justify">Week 10 to 11 — Project Handover & Support</h3>
        <p className="text-white font-play text-sm sm:text-base text-justify">Includes a final site inspection, complete snag rectification, and verified post-handover care. Typical <b className="text-[#caa193]"><a href="https://www.google.com/search?sca_esv=9ec4349fd935a51d&hl=en&authuser=0&sxsrf=ANbL-n4Cuy6eq3WcFV1NnVFIsXTn15wSww:1781182374814&kgmid=/g/11pyc3sd1k&q=Interior+Design+Company+Dubai+-+WeDo+Interior+Design+%26+Fit+out&shem=rimspwouohc&shndl=30&source=sh/x/loc/uni/m1/1&kgs=00373f4ce1397ec9&utm_source=rimspwouohc,sh/x/loc/uni/m1/1"> Downtown Dubai retail fit-outs</a></b> require 8–10 weeks from design sign-off, with smaller projects fully completed in 4–6 weeks.</p>
      </li>
    </ul>
    
    
  
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
  Do you manage building submissions and landlord approvals?
</h3>
<p className="text-sm sm:text-base text-white text-justify font-play">
  Yes, Design guide submissions, materials approvals, signage restrictions, and inspection coordination are all handled by WE DO. Most clients do not need to engage with building management directly at any point during the project.
</p>

<h3 className="text-base md:text-sm font-conthrax text-[#caa193] pt-2 text-justify">
  Can you work within an existing brand identity?
</h3>
<p className="text-sm sm:text-base text-white text-justify font-play">
  Yes. Where brand guidelines already exist we design within them. Where they are loose or incomplete, we work with you to develop a spatial interpretation that is consistent with your brand direction without being rigidly constrained by incomplete documentation.
</p>

<h3 className="text-base md:text-sm font-conthrax text-[#caa193] pt-2 text-justify">
  What retail formats do you design?
</h3>
<p className="text-sm sm:text-base text-white text-justify font-play">
  Fashion boutiques, jewellery stores, lifestyle and homewares retail, speciality food retail, showrooms, and concept stores. We also provide luxury retail interior design Dubai services for premium brands, boutiques, and destination retail concepts.
</p>

<h3 className="text-base md:text-sm font-conthrax text-[#caa193] pt-2 text-justify">
  Do you design the shopfront and interior together?
</h3>
<p className="text-sm sm:text-base text-white text-justify font-play">
  Yes, always. Facade, signage, window display, and interior design are developed as a single coordinated project. Separating them, as many operators do by briefing a sign maker independently, almost always produces a result that is less coherent than designing both together from the start.
</p>

<h3 className="text-base md:text-sm font-conthrax text-[#caa193] pt-2 text-justify">
  What is the cost of a retail fit-out in Downtown Dubai?
</h3>
<p className="text-sm sm:text-base text-white text-justify font-play pb-6">
  Final pricing depends on your square footage, bespoke joinery, material choices, and any necessary structural or MEP modifications. Following our initial site inspection, we deliver a fully itemized, fixed quote. We provide exact numbers, not fluctuating estimates, so you can budget with total confidence from day one.
</p>
          {/* Final Closing Content */}
          <div className="pt-6 border-t border-gray-800">
            <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#caa193] mb-2 text-justify">
             Get a free on-site inspection
            </h2>
            <p className="text-sm sm:text-base text-white text-justify font-play">
             Whether you are taking over a raw, empty shell in a new development, planning a complete renovation of an established storefront, or entirely repositioning an existing brand for a highly competitive demographic, committing to a design direction prematurely can be a costly misstep. We respect your time and capital. That is why our team provides a fully itemized, comprehensive estimate. There is absolutely no obligation, no drawn-out sales pitches, and no hidden fees, just a direct, highly practical, and collaborative conversation about the incredible commercial potential your retail space holds.            </p>
          </div>
        </div>
      </div>

    </section>
  );
};

export default DProjects;