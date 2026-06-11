'use client';

import React from 'react';
import Image from 'next/image';

const textImage = {
  src: '/images/xaima (11).webp',
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
  quote: "The cover layout planning before anything else was drawn saved us a meaningful number of seats. That conversation at the start of the project justified the design fee many times over.",
  author: "F&B Operator, Mohammed Bin Rashid Boulevard ⭐⭐⭐⭐⭐",
},
{
  quote: "We had tried to manage DM approvals on a previous project ourselves. Handing the entire process to WE DO this time was a completely different experience. We opened on schedule and without the stress.",
  author: "Restaurant Group, Downtown Dubai ⭐⭐⭐⭐⭐",
},
{
  quote: "Guests specifically mention the atmosphere in their reviews, which started happening consistently after the redesign. That is what specialist café interior design in Dubai actually delivers.",
  author: "Independent Café Owner, Souk Al Bahar ⭐⭐⭐⭐⭐",
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
    What Operators Say About Working With WE DO
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
   Why Restaurants in Downtown Dubai Require a Different Approach
  </h2>
  <div className="space-y-4 text-sm sm:text-base font-play text-white ">
    <p className="text-justify">
       Every fitout contractor out there will tell you that they are good at doing restaurant projects. But only a select few can deliver a completed <b className="text-[#caa193]"><a href="/fit-out-company-dubai">restaurant fitout in Downtown Dubai</a></b> right from zero, including getting Dubai Municipality signoff, installing the right kitchen, setting up the correct MEP system, having a dining hall with the correct amount of covers, and designing a place that passes the scrutiny of Google Maps and TripAdvisor photographs. Guests comparing your restaurant to others in the area are not comparing you to similar independents, they are comparing you to hotel F&B outlets with international design budgets behind them. 
    </p>
     <p className="text-justify">
       Layout planning around maximum viable covers, without sacrificing guest comfort, is something that has to happen at the very start of the design process. Every restaurant fitout project we take on begins with a cover layout exercise before anything else is drawn. The majority of guests have already seen your space on Google Maps, Instagram, or a reservations platform before they decide to come. 
        </p>
    
    <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#caa193] uppercase">
  Our Restaurant and Café Design Services
</h2>
<p className="text-justify">
  WE DO manages restaurant and café fitout projects in Downtown Dubai from concept through to handover. Design, approvals, construction, kitchen coordination, lighting, and final styling all run through one team and one project manager. No handoff between a designer and a separate contractor. 
</p>
<ul className="list-decimal pl-5 space-y-4 text-[#caa193]">
  <li>
    <h3 className="font-play font-bold text-base text-justify">Vision Design</h3>
    <p className="text-white font-play text-sm sm:text-base text-justify">A restaurant interior design must fulfill two functions simultaneously; first, that of conveying your vision and second, that of making the guests feel instantly at home. We craft successful <b className="text-[#caa193]"><a href="https://www.google.com/search?sca_esv=9ec4349fd935a51d&hl=en&authuser=0&sxsrf=ANbL-n4Cuy6eq3WcFV1NnVFIsXTn15wSww:1781182374814&kgmid=/g/11pyc3sd1k&q=Interior+Design+Company+Dubai+-+WeDo+Interior+Design+%26+Fit+out&shem=rimspwouohc&shndl=30&source=sh/x/loc/uni/m1/1&kgs=00373f4ce1397ec9&utm_source=rimspwouohc,sh/x/loc/uni/m1/1">restaurant interior design in Downtown Dubai</a></b> in an environment tailored to your cuisine, pricing, and target clients.</p>
  </li>
  <li>
    <h3 className="font-play font-bold text-base text-justify">Cover Layout and Space Planning</h3>
    <p className="text-white font-play text-sm sm:text-base text-justify">We plan every floor layout around covers before anything else. Circulation paths, table configurations, bar seating, and service flow are all worked through before detailed design begins. </p>
  </li>
  <li>
    <h3 className="font-play font-bold text-base text-justify">Commercial Kitchen Design</h3>
    <p className="text-white font-play text-sm sm:text-base text-justify">A kitchen that does not work is the fastest way to damage a restaurant. We design back-of-house spaces to Dubai Municipality standards, coordinated with your menu's production requirements and the MEP infrastructure your space can support. Kitchen design and dining room design are planned together, not handed to separate teams who then have to reconcile their work at the end. This integrated approach is a key advantage when working with an experienced <b className="text-[#caa193]"><a href="https://wedointerior.ae/">restaurant fitout contractor in Downtown Dubai</a></b>.</p>
  </li>
  <li>
    <h3 className="font-play font-bold text-base text-justify">Lighting Design for Dining Spaces</h3>
    <p className="text-white font-play text-sm sm:text-base text-justify">Lighting is probably the most underinvested element in most <b className="text-[#caa193]"><a href="/cafe-interior-design-dubai"> café and restaurant interiors in Dubai</a></b>.  We treat lighting as a core design discipline on every project, not something resolved at the end with whatever the electrical contractor recommends. Effective lighting is one of the most important elements of hospitality interior design Dubai projects and plays a major role in shaping guest perception.</p>
  </li>
  <li>
    <h3 className="font-play font-bold text-base text-justify">Custom Joinery, Bar and Counter Design</h3>
    <p className="text-white font-play text-sm sm:text-base text-justify">In a region where visitors have come to expect hotel-level detailing, conventional <b className="text-[#caa193]"><a href="/joinery-company-dubai"> joinery and ready-made furniture</a></b> appear like quick fixes. It is those custom bar counter, host stand, booth, and shelving pieces that speak to your vision and are created specifically for you that separate good design from mere furniture placement.</p>
  </li>
  <li>
    <h3 className="font-play font-bold text-base text-justify">Terrace and Outdoor Dining Design</h3>
    <p className="text-white font-play text-sm sm:text-base text-justify">Outdoor dining in Downtown Dubai, particularly Boulevard-facing terraces, is some of the most valuable floor space an operator can have. We design outdoor areas as a continuation of the interior concept: shade structures, lighting, planting, and furniture all coordinated into an environment guests actively choose rather than settle for.</p>
  </li>
  <li>
    <h3 className="font-play font-bold text-base text-justify">Signage, Façade and Frontage Design</h3>
    <p className="text-white font-play text-sm sm:text-base text-justify">Your frontage is doing marketing work every hour you are open. In a high-footfall location like the Boulevard or around Souk Al Bahar, how your space reads from the street is part of the interior design brief. We design signage and façade elements as part of the overall concept, coordinated with landlord and municipality requirements from the start rather than resolved separately at the end.</p>
  </li>
  <li>
    <h3 className="font-play font-bold text-base text-justify">Dubai Municipality and Building Approvals</h3>
    <p className="text-white font-play text-sm sm:text-base text-justify">Every restaurant fitout in Downtown Dubai involves multiple approval layers, Dubai Municipality for the commercial kitchen, civil defence for fire and safety compliance, and the building's fitout management team for scope approvals and inspections. WE DO prepares all documentation, manages all submission and follow-up communication, and attends inspections.</p>
  </li>
</ul>
  </div>
</div>

      {/* Split Row – Text + Top Right Image */}
      <div className="max-w-7xl mx-auto">
  <h2 className="text-center text-3xl font-conthrax text-white py-12 uppercase">
   Locations and Venue Types We Work With
  </h2>

  {/* Section 1: Text Left, Image Right */}
  <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
    <div className="space-y-6 text-white font-play">
      <p>Our team is familiar with the approval requirements, building management processes, and guest profiles across Downtown Dubai's main F&B locations. We work with operators across the following environments:
      </p>
      <ul className="list-decimal pl-5 space-y-4 text-[#caa193]">
        <li>
          <h3 className="font-play font-bold text-base text-justify">Mohammed Bin Rashid Boulevard</h3>
          <p className="text-white font-play text-sm sm:text-base text-justify">Street-level dining along the Boulevard attracts hotel guests, residents, and tourists in roughly equal measure. Terrace presence and frontage design carry as much weight here as the interior itself.</p>
        </li>
        <li>
          <h3 className="font-play font-bold text-base text-justify">Souk Al Bahar</h3>
          <p className="text-white font-play text-sm sm:text-base text-justify">The guest experience has to work harder here because there is less foot traffic and fewer people. This is an area where quality design is more important than quantity, and the style of the building works well with interior design.</p>
        </li>
        <li>
          <h3 className="font-play font-bold text-base text-justify">Opera District & Dubai Opera Precinct</h3>
          <p className="text-white font-play text-sm sm:text-base text-justify">Guest services before and after the show create their own tempo and type of guest. Layouts and atmospheres need to be designed with that rhythm in mind.</p>
        </li>
        <li>
          <h3 className="font-play font-bold text-base text-justify">Emaar-Managed Properties</h3>
          <p className="text-white font-play text-sm sm:text-base text-justify">We are familiar with Emaar's fitout design guide requirements and work within them across their Downtown portfolio. Approval management for Emaar properties is handled as part of our standard service.</p>
        </li>
        <li>
          <h3 className="font-play font-bold text-base text-justify">Independent Street-Level Units</h3>
          <p className="text-white font-play text-sm sm:text-base text-justify">Across Downtown's residential and mixed-use blocks, independent café and restaurant spaces often have more design freedom and more complex approval paths than managed properties. We handle both.</p>
        </li>
      </ul>
      
    </div>

    <div className="rounded-lg overflow-hidden shadow-md">
      <Image
        src="/images/xaima (12).webp"
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
  
</div>
  {/* Section 1: Text Left, Image Right */}

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
              src="/images/xaima (13).webp"
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
    Our Restaurant Fitout Process
  </h2>
  
  <div className="space-y-4 text-sm sm:text-base font-play text-white text-left">
    <ul className="space-y-4 text-[#caa193]">
      <li>
        <h3 className="font-play font-bold text-base text-justify">Week 1 — Free Site Visit and Brief</h3>
        <p className="text-white font-play text-sm sm:text-base text-justify">We visit your space, review what you are working with, understand your concept and guest profile, and have a genuine conversation about budget and timeline.</p>
      </li>
      <li>
        <h3 className="font-play font-bold text-base text-justify">Weeks 2 to 3 — Concept and Layout</h3>
        <p className="text-white font-play text-sm sm:text-base text-justify">Cover layout options, design concept with material and finish direction, 3D visualisations of key spaces, and kitchen coordination brief. Everything is approved before construction begins.</p>
      </li>
      <li>
        <h3 className="font-play font-bold text-base text-justify">Weeks 3 to 5 — Permissions</h3>
        <p className="text-white font-play text-sm sm:text-base text-justify">DM submissions, civil defence coordination, and building management approvals. WE DO manage seamlessly. We track every submission and follow up until sign-off is confirmed.</p>
      </li>
      <li>
        <h3 className="font-play font-bold text-base text-justify">Weeks 5 to 10 — Construction and Design</h3>
        <p className="text-white font-play text-sm sm:text-base text-justify">We work dedicatedly from start to finish. Kitchen, MEP, joinery, lighting, and finishes all sequenced to avoid delays. Weekly progress updates throughout.</p>
      </li>
      <li>
        <h3 className="font-play font-bold text-base text-justify">Weeks 10 to 11 – Final Touches & Photography Prep</h3>
        <p className="text-white font-play text-sm sm:text-base text-justify">Style your space by placing furniture, adding decor, and perfecting the lighting. Everything is picture-perfect and ready for the camera before welcoming your first client.</p>
      </li>
      <li>
        <h3 className="font-play font-bold text-base text-justify">Week 12 – Handover</h3>
        <p className="text-white font-play text-sm sm:text-base text-justify">We’ve successfully completed the handover walkthrough, addressed every item on the snag list, and have post-handover support ready to go.</p>
      </li>
    </ul>
    
    <p className="text-justify pt-2 text-white">
      Most restaurant fit-outs in Downtown Dubai typically take 8 to 12 weeks to finish following design approval.
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
  How long does a restaurant fitout take in Downtown Dubai?
</h3>
<p className="text-sm sm:text-base text-white text-justify font-play">
  Most of the projects take between 8 to 12 weeks after design approval. For refresh/renovation fitouts, this may only take 4 to 6 weeks. 
</p>

<h3 className="text-base md:text-sm font-conthrax text-[#caa193] pt-2 text-justify">
  Do you handle Dubai Municipality commercial kitchen approvals? 
</h3>
<p className="text-sm sm:text-base text-white text-justify font-play">
  Yes, completely. The documentation process, DM submission, coordination of civil defence, and attendance at inspections are all included in our services; they are not additional services.
</p>

<h3 className="text-base md:text-sm font-conthrax text-[#caa193] pt-2 text-justify">
  Can you do both the dining room and the kitchen? 
</h3>
<p className="text-sm sm:text-base text-white text-justify font-play">
  Yes. The front-of-the-house and the back-of-the-house can be done in one coordinated design process for your restaurant design project since the kitchen design is integrated into our overall design process.
</p>

<h3 className="text-base md:text-sm font-conthrax text-[#caa193] pt-2 text-justify">
  Can you design cafés besides restaurants?
</h3>
<p className="text-sm sm:text-base text-white text-justify font-play">
  Yes. We design all types of food & beverage establishments, including cafés and fine dining.
</p>

<h3 className="text-base md:text-sm font-conthrax text-[#caa193] pt-2 text-justify">
  What kind of restaurants and cafes do you specialize in?
</h3>
<p className="text-sm sm:text-base text-white text-justify font-play">
  High-end restaurants, casual restaurants, cafe & coffees concepts, all day restaurants, brunch concepts, and license food and beverages operations. If your requirement involves guests eating or drinking in Downtown Dubai premises, we have the expertise in this.
</p>

<h3 className="text-base md:text-sm font-conthrax text-[#caa193] pt-2 text-justify">
  What is the cost involved in restaurant fit-out in Downtown Dubai? 
</h3>
<p className="text-sm sm:text-base text-white text-justify font-play pb-6">
  Costs will depend upon the size of the floor, the size of the kitchen area, material specifications, and the amount of structural/MEP work needed. We give you a fully detailed quote after our first meeting at your site.
</p>
          {/* Final Closing Content */}
          <div className="pt-6 border-t border-gray-800">
            <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#caa193] mb-2 text-justify">
             Book a Site Visit
            </h2>
            <p className="text-sm sm:text-base text-white text-justify font-play">
             If you own a restaurant or café in Downtown Dubai, be it an empty shell or full restaurant renovation Downtown Dubai, get in touch before making any commitments. We will conduct an assessment of your place, tell you the truth about its potential, and provide a detailed proposal after the site visit. No strings attached, nothing hidden, simply an honest discussion about what your restaurant can become.
                         </p>
          </div>
        </div>
      </div>

    </section>
  );
};

export default DProjects;