'use client';

import React from 'react';
import Image from 'next/image';

const textImage = {
  src: '/images/contemporary-and-modern-office-interior-design.png',
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
  quote: "We came to WE DO with a concept that existed only in our heads. They turned it into the Best restaurant interior design Dubai that has been reviewed in Timeout Dubai and has a four-week waiting list for weekend dinner. The entire process, from the first sketch to the handover keys, was managed with a professionalism we had not experienced with any other fitout company in Dubai.",
  author: " F&B Director, Business Bay Restaurant Group ",
},
{
  quote: "What separates WE DO from every other interior design company Business Bay has to offer is that they think like operators, not just designers. They asked questions about our service flow, our menu format, our peak hours, and the design reflected all of it. We opened two weeks ahead of schedule.",
  author: " Owner, Casual Dining Concept, Bay Square",
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
        What Our Restaurant Clients Say
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
    Our Restaurant Interior Design Services in Business Bay
  </h2>
  <div className="space-y-4 text-sm sm:text-base font-play text-white text-left">
    <p className="text-justify">
      As an interior design firm, we undertake all facets of the interior design process, from inception to completion. The design process happens at the same time as its implementation, without any disconnects, as everything is done within one organization.
    </p>
    <ul className="space-y-4 text-[#caa193]">
      <li>
        <h3 className="font-play font-bold text-base text-justify">Brand Concept & Identity Design of the Restaurant:</h3>
        <p className="text-white font-play text-sm sm:text-base text-justify">
          The entire team will have to fully understand the concept behind your business, before even one pencil mark is made. Who are your target customers? And how do you want them to feel as soon as they enter your restaurant?. This is where restaurant interior design Business Bay Dubai projects either develop a soul or become just another fitout.
        </p>
      </li>
      <li>
        <h3 className="font-play font-bold text-base text-justify">Space Planning & Guest Flow Optimisation:</h3>
        <p className="text-white font-play text-sm sm:text-base text-justify">
          Great restaurant smart layout is part art and part operational science. As specialists in restaurant interior design in Business Bay, We integrate your cover count without sacrificing comfort. We craft circulation paths that feel natural to guests and efficient for staff. We separate zones, bar, dining, private dining, waiting, in a way that crafts distinct atmospheres within a single space.
        </p>
      </li>
      <li>
        <h3 className="font-play font-bold text-base text-justify">Commercial Kitchen Design & Equipment Layout:</h3>
        <p className="text-white font-play text-sm sm:text-base text-justify">
          The kitchen is the engine room of your restaurant. Our team designs back-of-house environments that meet Dubai Municipality's full food establishment requirements while maximising your head chef's operational efficiency. WE DO is the <b className="text-[#caa193]"><a href="https://www.google.com/search?sca_esv=88256e003c9ebfca&hl=en&authuser=0&sxsrf=ANbL-n6x40KZFjzShcL22O9dq6i5o2pN_g:1780909017368&kgmid=/g/11pyc3sd1k&q=Interior+Design+Company+Dubai+-+WeDo+Interior+Design+%26+Fit+out&shem=rimspwouohc&shndl=30&source=sh/x/loc/uni/m1/1&kgs=8e4d020392eae419&utm_source=rimspwouohc,sh/x/loc/uni/m1/1">best interior fitout contractor Business Bay</a></b> designs commercial kitchens with operational efficiency and compliance at the core.
        </p>
      </li>
      <li>
        <h3 className="font-play font-bold text-base text-justify">Bar & Beverage Station Design:</h3>
        <p className="text-white font-play text-sm sm:text-base text-justify">
          In Business Bay's restaurant scene, the bar is increasingly a destination in its own right. WE DO delivers F&B Interior Design Business Bay, material choices, brushed brass, are made with both guest impact and maintenance reality in mind.
        </p>
      </li>
      <li>
        <h3 className="font-play font-bold text-base text-justify">Atmospheric Lighting Design:</h3>
        <p className="text-white font-play text-sm sm:text-base text-justify">
          Lighting is the single element that keeps powerful controls how a guest feels in your restaurant. For premium restaurant fitout Business Bay projects, we also design dynamic lighting scenes, lunch service, dinner service, late night, controlled from a single system.
        </p>
      </li>
      <li>
        <h3 className="font-play font-bold text-base text-justify">Acoustic Design & Sound Management:</h3>
        <p className="text-white font-play text-sm sm:text-base text-justify">
          A restaurant that is too loud loses tables. Guests cannot have conversations, discomfort sets in, and they do not return. These are the difficult acoustic conditions in Business Bay's usually tough, commercial space with hard shell construction, concrete ceilings, glass walls, and stone floors.
        </p>
      </li>
      <li>
        <h3 className="font-play font-bold text-base text-justify">Furniture, Fixtures & Equipment – FF&E:</h3>
        <p className="text-white font-play text-sm sm:text-base text-justify">
          We supply everything from the furniture to the lighting fittings and decorations for your restaurant. Our FF&E procurement service covers local and international sourcing, quality control, delivery management, and installation coordination. You receive a fully furnished, styled restaurant.
        </p>
      </li>
      <li>
        <h3 className="font-play font-bold text-base text-justify">Dubai Municipality Approvals & Fitout Compliance:</h3>
        <p className="text-white font-play text-sm sm:text-base text-justify">
          Every restaurant fitout Business Bay project requires approvals from Dubai Municipality for food establishment licensing, Civil Defence for fire safety compliance, DEWA for electrical connections, and your landlord or master developer for NOC. As an experienced <b className="text-[#caa193]"><a href="/fit-out-company-dubai">fitout company Business Bay Dubai</a></b> with a dedicated approvals team, we manage this entire process on your behalf.
        </p>
      </li>
    </ul>
  </div>
</div>

      {/* Split Row – Text + Top Right Image */}
      <div className="max-w-7xl mx-auto">
  <h2 className="text-center text-3xl font-conthrax text-white py-12 uppercase">
    Types of Restaurants We Design in Business Bay
  </h2>

  {/* Section 1: Text Left, Image Right */}
  <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
    <div className="space-y-6 text-white font-play">
      <ul className="list-decimal pl-5 space-y-4 text-[#caa193]">
        <li>
          <h3 className="font-play font-bold text-base text-justify">Fine Dining & Signature Restaurants</h3>
          <p className="text-white font-play text-sm sm:text-base text-justify"> Destination dining concepts where every detail, including the table itself down to the sounds within the private dining space, are thought through meticulously. We have designed fine dining restaurants for many of Business Bay’s premium tower podium sites.</p>
        </li>
        <li>
          <h3 className="font-play font-bold text-base text-justify">Casual Dining & All Day Bistros</h3>
          <p className="text-white font-play text-sm sm:text-base text-justify"> Essential elements to Business Bay's F&B offering, the restaurants which cater equally to morning coffees, corporate lunches, and neighborhood dinners. Creating a proper ambience throughout all operating hours involves intelligent zone planning and lighting design.</p>
        </li>
        <li>
          <h3 className="font-play font-bold text-base text-justify">Rooftop & Skyline Venue Concepts</h3>
          <p className="text-white font-play text-sm sm:text-base text-justify"> Business Bay's tower heights create extraordinary rooftop opportunities. Designing for open-air or semi-open environments in Dubai's climate requires specialist knowledge of materials, shade structures, and HVAC solutions that most interior fitout contractors Business Bay do not possess.</p>
        </li>
        <li>
          <h3 className="font-play font-bold text-base text-justify">Café-Restaurants & Brunch Concepts</h3>
          <p className="text-white font-play text-sm sm:text-base text-justify"> Brunch in Dubai is a significant commercial opportunity. We create <b className="text-[#caa193]"><a href="/cafe-interior-design-dubai">Cafe Interior Design in Business Bay</a></b> hybrids that are ready for social media posts, are highly efficient operations-wise, and are designed to work at the fast-paced level demanded by brunch.</p>
        </li>
        <li>
          <h3 className="font-play font-bold text-base text-justify">Cloud Kitchens & Delivery-First Concepts</h3>
          <p className="text-white font-play text-sm sm:text-base text-justify"> The fastest-growing segment in Business Bay's F&B market. We design delivery-optimised kitchen environments that meet all regulatory requirements while maximising throughput per sqm.</p>
        </li>
      </ul>
    </div>

    <div className="rounded-lg overflow-hidden shadow-md">
      <Image
        src="/images/sahelnom (11).webp"
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
    How Great Restaurant Design Drives Real Business Results
  </h2>

  {/* Section 1: Text Left, Image Right */}
  <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
    <div className="space-y-6 text-white font-play">
      <p className="text-justify">
        The <b className="text-[#caa193]"><a href="/interior-design-company-business-bay">best interior design company in Business Bay</a></b> does not just make beautiful spaces. It makes spaces that perform.Through smart furniture selection and efficient layout designing, we consistently achieve 10 to 15 percent more covers than clients expect from their footprint. Comfortable seats, beautiful lighting, and great acoustic ambiance all ensure a higher average sale price per customer. Restaurants designed for operational logic, clear sightlines for managers, efficient pass placement, logical back-of-house flow, run with lower labour costs and retain staff longer.
      </p>
      
    
    </div>

    <div className="rounded-lg overflow-hidden shadow-md">
      <Image
        src="/images/sahelnom (12).webp"
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
        <div className="text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-conthrax text-[#caa193] mb-2">
           Why Restaurant Owners in Business Bay Choose WE DO
          </h2>
          <p className="font-play text-sm sm:text-base text-white text-justify py-2 leading-relaxed">
            Design, approvals, and construction managed in-house by one accountable team. No coordination failures between a separate design studio and fitout contractor. As Business Bay F&B Specialists, we know Business Bay's building regulations, developer NOC requirements, and municipality expectations intimately. Every project begins with a fully itemised quote. Our approvals team has navigated DM food establishment licensing, Civil Defence compliance, and DEWA coordination on dozens of Business Bay projects. Once we hand over the keys, our commitment does not end there. The dedicated snagging phase and follow-up commitment ensure that the restaurant delivered remains exactly as promised, and any problems faced are sorted out without question.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="rounded-lg overflow-hidden shadow-md">
            <Image
              src="/images/sahelnom (10).webp"
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
          <h3 className="font-play font-bold text-base text-justify">Step 1 — Free Consultation (Week 1)</h3>
          <p className="text-white font-play text-sm sm:text-base text-justify">Site visit, brand brief, budget discussion, and initial feasibility assessment. No commitment required.</p>
        </li>
        <li>
          <h3 className="font-play font-bold text-base text-justify">Step 2 – Concept Design (Week 2 – 3)</h3>
          <p className="text-white font-play text-sm sm:text-base text-justify">Complete concept design process including 3D visualization, materials boards, alternative space planning layouts, and initial cost plan.</p>
        </li>
        <li>
          <h3 className="font-play font-bold text-base text-justify">Step 3 – Municipality Approval (Week 3 – 7)</h3>
          <p className="text-white font-play text-sm sm:text-base text-justify">Plans submitted to Dubai Municipality, Civil Defense Authority, DEWA, and landlord simultaneously while progressing with design.</p>
        </li>
        <li>
          <h3 className="font-play font-bold text-base text-justify">Step 4 – Construction (Week 7 – 14)</h3>
          <p className="text-white font-play text-sm sm:text-base text-justify">Site supervised by our assigned project manager with progress reports on a weekly basis.</p>
        </li>
        <li>
          <h3 className="font-play font-bold text-base text-justify">Step 5 – Snagging & Quality Control (Week 14 – 15)</h3>
          <p className="text-white font-play text-sm sm:text-base text-justify">Comprehensive snags list prepared and rectified followed by site walk through with the client.</p>
        </li>
        <li>
          <h3 className="font-play font-bold text-base text-justify">Step 6 – Handover (Week 15 – 16)</h3>
          <p className="text-white font-play text-sm sm:text-base text-justify">Handing over of keys. FF&E installed and styled. Staff orientation on systems. Post-handover support period begins.</p>
        </li>
      </ul>
      
      <p className="text-justify pt-2 text-white">
        The average time for delivery of Business Bay restaurant interiors is 12 to 16 weeks post design approval. In case of complex and elaborate ideas, 18 to 22 weeks may be necessary.
      </p>
    </div>
  </div>
</div>
          {/* Map Embed */}

          <div className="space-y-4">
    <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#caa193] uppercase">
      Serving Business Bay & Surrounding Areas
    </h2>
   
  </div>
<div className="w-full rounded-lg overflow-hidden my-4" style={{ height: "350px" }}>
 <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14441.876359555234!2d55.2642646648766!3d25.187346881779927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f683393961555%3A0xdbd206f47702875b!2sBusiness%20Bay%20-%20Dubai!5e0!3m2!1sen!2sae!4v1717680000000!5m2!1sen!2sae"
  width="100%"
  height="100%"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
></iframe>
  </div>
          <h2 className="text-lg md:text-xl font-conthrax text-[#caa193] pt-6 uppercase">
  Restaurant Interior Design Business Bay — Frequently Asked Questions
</h2>

<h3 className="text-base md:text-sm font-conthrax text-[#caa193] pt-2 text-justify">
  How expensive is it to design and fit out my restaurant in Business Bay?
</h3>
<p className="text-sm sm:text-base text-white text-justify font-play">
  For an average casual dining restaurant of 150 square meters, the complete cost (designing and constructing, FF&E) can range anywhere between AED 400,000 to 700,000. WE DO will give you a detailed and itemized budget proposal based on the first site visit and brief.
</p>

<h3 className="text-base md:text-sm font-conthrax text-[#caa193] pt-2 text-justify">
  How long does it take for a restaurant fitout in Business Bay?
</h3>
<p className="text-sm sm:text-base text-white text-justify font-play">
  A normal restaurant fitout in Business Bay will take between 12 and 16 weeks from designing approval. This period covers the designing process, parallel approvals at municipality, fitout, snagging and styling.
</p>

<h3 className="text-base md:text-sm font-conthrax text-[#caa193] pt-2 text-justify">
  Do you help me with Dubai Municipality Approvals for my restaurant fitout?
</h3>
<p className="text-sm sm:text-base text-white text-justify font-play">
  Yes, absolutely. The entire responsibility of getting you approved by the Municipality for operating your business comes under our umbrella.
</p>

<h3 className="text-base md:text-sm font-conthrax text-[#caa193] pt-2 text-justify">
  Have you completed restaurant fitout projects in Business Bay specifically?
</h3>
<p className="text-sm sm:text-base text-white text-justify font-play pb-6">
  Yes. WE DO has delivered multiple restaurant and F&B fitout projects across Business Bay including locations in Bay Square, Bay Avenue, Executive Towers podium, and Marasi Drive.
</p>
          {/* Final Closing Content */}
          <div className="pt-6 border-t border-gray-800">
            <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#caa193] mb-2 text-justify">
             Ready to Build a Restaurant That Business Bay Talks About?
            </h2>
            <p className="text-sm sm:text-base text-white text-justify font-play">
              Business Bay has extraordinary restaurants. The ones that succeed long-term are the ones that invested in design with the same seriousness they invested in their chef, their menu, and their team.
WE DO Interior Design & Fitout is the commercial fitout company Dubai restaurant operators trust when the stakes are high and the standard is non-negotiable. From your first consultation to your opening night, we are the single point of accountability for a restaurant fitout that performs in one of the world's most competitive dining markets.
Contact WE DO today for your free consultation and fully transparent project estimate.
            </p>
          </div>
        </div>
      </div>

    </section>
  );
};

export default DProjects;