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
  quote: "WE DO transformed our Burj Vista penthouse into something we genuinely could not have imagined from the developer handover condition. Every decision was right, the lighting, the materials, the way the layout frames the Burj Khalifa. As a luxury penthouse interior design Downtown Dubai specialist, their knowledge is in a completely different category.",
  author: "A. Al Rashidi, Penthouse Owner, Burj Vista ⭐⭐⭐⭐⭐",
},
{
  quote: "They knew the HOA rules, the building management team, the structural constraints of Address Boulevard, things that would have taken us months to figure out. Our fitout went through without a single approval delay. Best high end penthouse design Downtown Dubai has to offer, without question.",
  author: "M. & S. Al Farsi, Penthouse Owners, Address Boulevard ⭐⭐⭐⭐⭐",
},
{
  quote: "Three months after moving in, the penthouse still feels exactly as it did on handover day. Every material has held up perfectly. When guests walk through the door, the reaction is always the same. WE DO are genuinely the top interior designers Downtown Dubai penthouse owners recommend.",
  author: "J. Harrington, Penthouse Owner, Act One Act Two ⭐⭐⭐⭐⭐",
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
     What Our Penthouse Clients Say
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
   Why Downtown Penthouses Need a Specialist
  </h2>
  <div className="space-y-4 text-sm sm:text-base font-play text-white ">
    <p className="text-justify">
       A Downtown Dubai penthouse is not simply a larger apartment. It presents a completely different set of design challenges. The glass windows from floor to ceiling will require a lot of work with regard to solar heat gain and proper window coverings. Open plan layouts at penthouse scale need intelligent zoning, otherwise you end up with a space that feels impressive but does not actually work for daily life. Then there are building-specific considerations.  Every tower has its own HOA rules and structural constraints. Getting these wrong costs time and money. As a specialist luxury penthouse <b className="text-[#caa193]"><a href="/interior-design-companies-downtown-dubai">interior design Downtown Dubai company</a></b>, WE DO has navigated all of this across multiple buildings and multiple times. That experience matters when it is your penthouse on the line.
    </p>
    <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#caa193] uppercase">
  Our Penthouse Interior Design Services in Downtown Dubai
</h2>
<p className="text-justify">
  As a fully integrated<b className="text-[#caa193]"><a href="/interior-design-downtown-dubai"> interior design company Downtown Dubai</a></b> residents trust, we manage everything from concept to handover, design, approvals, construction, and styling under one roof.
</p>
<ul className="list-decimal pl-5 space-y-4 text-[#caa193]">
  <li>
    <h3 className="font-play font-bold text-base text-justify">Space Planning & Burj Khalifa View Framing</h3>
    <p className="text-white font-play text-sm sm:text-base text-justify"> The most important decision in any Downtown penthouse is how you relate to the view. Where does the seating face? How does the dining table sit relative to the window line? What treatments manage the Dubai sun without blocking the Burj Khalifa? We develop a complete spatial strategy before anything else. Full 3D visuals are produced so you see and approve the layout before a single wall is touched. This is where penthouse interior design in Downtown Dubai either gets it right or misses the opportunity entirely.</p>
  </li>
  <li>
    <h3 className="font-play font-bold text-base text-justify">Bespoke Joinery & Custom Furniture</h3>
    <p className="text-white font-play text-sm sm:text-base text-justify"> Nothing in a penthouse should look like it came from a showroom. Every piece of joinery, kitchen cabinetry, wardrobes, media walls, is designed specifically for your space. Materials are selected for how they perform at this scale, solid walnut, brushed brass, Venetian plaster, hand-stitched leather. As a trusted bespoke penthouse design Downtown Dubai specialist, we never reuse templates. Every penthouse is completely original.</p>
  </li>
  <li>
    <h3 className="font-play font-bold text-base text-justify">Smart Home & Automation</h3>
    <p className="text-white font-play text-sm sm:text-base text-justify"> Lighting scenes that shift automatically. Climate control room by room. Motorised blinds that respond to the sun. AV systems that disappear into the architecture. Smart access control for staff and guests. WE DO interiors  integrate all of this from the design stage, never retrofitted at the end when it becomes expensive and disruptive.</p>
  </li>
  <li>
    <h3 className="font-play font-bold text-base text-justify">Luxury Lighting Design</h3>
    <p className="text-white font-play text-sm sm:text-base text-justify"> Lighting in a Downtown penthouse has to do several things at once. During the day it works with natural light flooding through panoramic glass. In the evening it creates warmth without competing with the city lights outside. Our lighting designers layer ambient, task, and feature lighting, and for high end penthouse design Downtown Dubai projects, we design full lighting scenes controlled from a single panel or your phone.</p>
  </li>
  <li>
    <h3 className="font-play font-bold text-base text-justify">Premium Material Sourcing</h3>
    <p className="text-white font-play text-sm sm:text-base text-justify"> Calacatta marble from Italy. French oak flooring. Hand-blown Murano glass. Belgian linen. Custom stonework. As a leading premium penthouse fitout Downtown Dubai specialist, WE DO sources materials globally and specifies them correctly for Dubai's climate. We never choose something purely for an opening-day appearance. Beauty that lasts five years costs the same as beauty that fades in two, if you know what to specify.</p>
  </li>
  <li>
    <h3 className="font-play font-bold text-base text-justify">Art Curation & Final Styling</h3>
    <p className="text-white font-play text-sm sm:text-base text-justify"> The final touch on any excellent penthouse is the curating of artworks, collectibles, and furniture to bring a personal touch. We collaborate with existing regional and international galleries to obtain artworks that fit perfectly with the design and the occupants of the space. This is what separates a professionally designed fit out from an actual homely place.</p>
  </li>
</ul>
  </div>
</div>

      {/* Split Row – Text + Top Right Image */}
      <div className="max-w-7xl mx-auto">
  <h2 className="text-center text-3xl font-conthrax text-white py-12 uppercase">
    Design Styles We Deliver
  </h2>

  {/* Section 1: Text Left, Image Right */}
  <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
    <div className="space-y-6 text-white font-play">
      <ul className="list-decimal pl-5 space-y-4 text-[#caa193]">
        <li>
          <h3 className="font-play font-bold text-base text-justify">Contemporary Luxury</h3>
          <p className="text-white font-play text-sm sm:text-base text-justify"> Clean lines, restrained palette, statement materials. The most requested style among our luxury interior designers Downtown Dubai clients, confident and refined without ever feeling cold.</p>
        </li>
        <li>
          <h3 className="font-play font-bold text-base text-justify">Modern Arabic Fusion</h3>
          <p className="text-white font-play text-sm sm:text-base text-justify"> Regional identity through a contemporary lens. Geometric pattern, warm stone, and handcrafted detail woven into a thoroughly modern space. Rooted and genuinely original.</p>
        </li>
        <li>
          <h3 className="font-play font-bold text-base text-justify">Minimalist High-End</h3>
          <p className="text-white font-play text-sm sm:text-base text-justify"> Every surface considered. Every object is intentional. Luxury at its most refined, through restraint, when the only rival to the <b className="text-[#caa193]"><a href="/interior-design-companies-downtown-dubai">view from the Burj Khalifa</a></b> is the view itself.</p>
        </li>
        <li>
          <h3 className="font-play font-bold text-base text-justify">European Classic</h3>
          <p className="text-white font-play text-sm sm:text-base text-justify"> Decorative paneling, hardwood floors, polished brass, fine textiles that develop <b className="text-[#caa193]"><a href="/cafe-interior-design-dubai">patina</a></b>. Luxurious, complex, and destined to stand the test of time.</p>
        </li>
      </ul>
    </div>

    <div className="rounded-lg overflow-hidden shadow-md">
      <Image
        src="/images/blpph (8).png"
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
   Why Downtown Penthouse Owners Choose WE DO
  </h2>

  {/* Section 1: Text Left, Image Right */}
  <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
    <div className="space-y-6 text-white font-play">
      <p className="text-justify">
        Burj Vista, Address Boulevard, Act One Act Two, The Residence, Boulevard Point, we have worked in them. HOA rules, building management teams, structural realities, all known, all navigated before on your behalf. We never reuse a design. Every penthouse is conceived from scratch for the space, the views, and the people who live in it. This separates genuine residential interior design Downtown Dubai excellence from a template with expensive materials on top.We deliver when we say we will. For penthouse projects where moves are planned and life is on hold, this matters enormously. It is a standard that sets us apart from every other interior fitout contractor Downtown Dubai in the market.
      </p>
      
    
    </div>

    <div className="rounded-lg overflow-hidden shadow-md">
      <Image
        src="/images/blpph (10).png"
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
              src="/images/blpph (7).png"
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
    How The Process Works
  </h2>
  
  <div className="space-y-4 text-sm sm:text-base font-play text-white text-left">
    <ul className="space-y-4 text-[#caa193]">
      <li>
        <h3 className="font-play font-bold text-base text-justify">Week 1 — Free Consultation</h3>
        <p className="text-white font-play text-sm sm:text-base text-justify">We visit your penthouse, listen to your brief, understand your lifestyle and budget. No charge, no obligation.</p>
      </li>
      <li>
        <h3 className="font-play font-bold text-base text-justify">Weeks 2 to 4 — Concept Design</h3>
        <p className="text-white font-play text-sm sm:text-base text-justify">Photorealistic 3D visuals of every major space. Material selections. Furniture direction. Detailed cost plan. You approve everything before we build anything.</p>
      </li>
      <li>
        <h3 className="font-play font-bold text-base text-justify">Weeks 4 to 8 — Building Approvals</h3>
        <p className="text-white font-play text-sm sm:text-base text-justify">HOA submissions, building management approvals, and developer NOC — all handled by WE DO. You never have to deal with any approval authority directly.</p>
      </li>
      <li>
        <h3 className="font-play font-bold text-base text-justify">Weeks 8 to 18 — Construction & Fitout</h3>
        <p className="text-white font-play text-sm sm:text-base text-justify">Dedicated project manager runs the site. Weekly updates. Quality checks at every milestone.</p>
      </li>
      <li>
        <h3 className="font-play font-bold text-base text-justify">Weeks 18 to 20 — Styling & Finishing</h3>
        <p className="text-white font-play text-sm sm:text-base text-justify">Furniture installed. Art placed. Soft furnishings dressed. Every finishing detail attended to until the penthouse looks exactly as the visuals showed.</p>
      </li>
      <li>
        <h3 className="font-play font-bold text-base text-justify">Week 20 — Handover</h3>
        <p className="text-white font-play text-sm sm:text-base text-justify">Full walkthrough. Snagging signed off. Smart home orientation. Post-handover support begins immediately.</p>
      </li>
    </ul>
    
    <p className="text-justify pt-2 text-white">
      Most Downtown penthouse projects complete in 18 to 22 weeks. Smaller scope projects deliver in 12 to 16 weeks.
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
  How much does penthouse interior design cost in Downtown Dubai?
</h3>
<p className="text-sm sm:text-base text-white text-justify font-play">
  Full luxury fitouts range from AED 2,800 to AED 6,000+ per sqm. A complete fitout for a 400 sqm penthouse typically requires AED 1.2 million to AED 2.5 million including design, construction, smart home, and FF&E. WE DO provides a fully itemised cost plan after the initial site visit at no charge.
</p>

<h3 className="text-base md:text-sm font-conthrax text-[#caa193] pt-2 text-justify">
  How long does a penthouse project take in Downtown Dubai?
</h3>
<p className="text-sm sm:text-base text-white text-justify font-play">
  Most projects take 18 to 22 weeks from design sign-off. Smaller scope projects deliver in 12 to 16 weeks. We recommend engaging your design team at least five months before your intended move-in date.
</p>

<h3 className="text-base md:text-sm font-conthrax text-[#caa193] pt-2 text-justify">
  Do you handle HOA and building management approvals?
</h3>
<p className="text-sm sm:text-base text-white text-justify font-play">
  Yes, completely. We manage all HOA submissions, building management approvals, and developer NOC requirements. We have existing relationships with management teams across Downtown's major residential towers.
</p>

<h3 className="text-base md:text-sm font-conthrax text-[#caa193] pt-2 text-justify">
  How do you design around Burj Khalifa views?
</h3>
<p className="text-sm sm:text-base text-white text-justify font-play">
  The view becomes the anchor of the spatial strategy from the first sketch. Furniture placement, window treatments, lighting positions, and feature wall locations are all determined in relation to the view, protecting and framing it is the first rule of every Downtown penthouse project we take on.
</p>

<h3 className="text-base md:text-sm font-conthrax text-[#caa193] pt-2 text-justify">
  Can you work in an occupied building without disrupting other residents?
</h3>
<p className="text-sm sm:text-base text-white text-justify font-play">
  Absolutely. Controlled working hours, dust and noise management, coordinated deliveries, and regular building management communication are standard on every WE DO residential project.
</p>

<h3 className="text-base md:text-sm font-conthrax text-[#caa193] pt-2 text-justify">
  What makes WE DO different from other interior designers in Downtown Dubai?
</h3>
<p className="text-sm sm:text-base text-white text-justify font-play pb-6">
  Your designer and builder are the same team, working to the same brief, accountable to the same outcome. Add our specific Downtown building knowledge, transparent pricing, and delivery record, and you have a combination that is genuinely hard to find elsewhere in this market.
</p>
          {/* Final Closing Content */}
          <div className="pt-6 border-t border-gray-800">
            <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#caa193] mb-2 text-justify">
             Your Penthouse Is Above Everything. Its Interior Should Be Too.
            </h2>
            <p className="text-sm sm:text-base text-white text-justify font-play">
             You made an exceptional decision when you bought in Downtown Dubai. The location is extraordinary. The views are extraordinary. Now it is time for the interior to match.<br/>
WE DO Interior Design & Fitout delivers penthouse interior design in Downtown Dubai that is completely bespoke, beautifully executed, and built to the highest standard this address demands.<br/>
Book your free site visit today, we will come to your penthouse, listen to your vision, and hand you a fully itemised estimate. No vague numbers. No pressure. Just an honest conversation about what your penthouse could be.
            </p>
          </div>
        </div>
      </div>

    </section>
  );
};

export default DProjects;