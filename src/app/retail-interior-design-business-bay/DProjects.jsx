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
  quote: "WE DO transformed our Bay Square boutique from a bare shell into the most striking retail environment in the building. WE DO handed over the keys three days ahead of schedule and we opened without a single snagging issue outstanding. For a regional rollout, that kind of reliability is everything. Best retail interior design Business Bay has delivered, without question.",
  author: " Boutique Owner, Bay Square",
},
{
  quote: "Completely on-brand, on budget, and handed over three days early. That operational intelligence shows in every design decision. The best interior fitout contractor Business Bay has recommended to us.",
  author: "Regional Retail Manager, Bay Avenue ",
},
{
  quote: "Municipality approvals, landlord NOC, signage, FF&E, all under one roof. As a retail interior design firm Business Bay brands genuinely trust, WE DO stand completely apart.",
  author: "Brand Director, Executive Towers Retail ",
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
        <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#caa193]">
          Why Retail Design in Business Bay Is a Brand Statement
        </h2>
        <div className="space-y-4 text-sm sm:text-base font-play text-white text-left">
          <p className="text-justify">
            Business Bay's retail customer is sophisticated, globally experienced, and unforgiving of environments that feel generic. A retail space without spatial narrative, considered lighting, and brand conviction will not generate the dwell time or repeat visits that justify Business Bay's premium rental rates.
          </p>
           <p className="text-justify">
           The best retail interior design Business Bay invests in design that influences customer behaviour, encourages product discovery, and increases purchase confidence. As a specialist commercial retail design company Business Bay, WE DO understands that great retail design is commercial strategy expressed through space. In a neighbourhood where top interior designers Business Bay Dubai raise the standard every year, the gap between a well-designed store and a struggling one comes down entirely to the quality of your interior environment.
          </p>
          
        </div>
      </div>

      {/* Split Row – Text + Top Right Image */}
       <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-3xl font-conthrax text-white py-12">
          Our Retail Interior Design Services in Business Bay
        </h2>

        {/* Section 1: Text Left, Image Right */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          <div className="space-y-6 text-white font-play">
            <p className="text-justify">
             As a fully integrated retail fitout company Business Bay Dubai, WE DO manages your entire retail project from brand concept to handover, design, approvals, construction, and FF&E under one roof.
              </p>
            <ul className="list-decimal pl-5 space-y-4 text-[#caa193]">
              <li>
                <h3 className="font-play font-bold text-base text-justify">Brand Concept & Visual Identity Translation</h3>
                <p className="text-white font-play text-sm sm:text-base text-justify">Every successful shop interior design Business Bay project begins with brand immersion. We spend our time learning about what makes your brand tick, who your customers are, and what emotional journey you wish for your visitors to experience. As a trusted <b className="text-[#caa193]"><a href="https://wedointerior.ae/">luxury retail interior design Dubai</a></b> specialist, we have delivered brand-specific environments across fashion, jewellery, beauty, and F&B retail, each one distinctly and unmistakably its own brand.</p>
              </li>
              <li>
                <h3 className="font-play font-bold text-base text-justify">Shopfront & Facade Design</h3>
                <p className="text-white font-play text-sm sm:text-base text-justify">Your shopfront decides whether customers enter or walk past. WE DO designs shopfronts that command attention through material quality, lighting strategy, and the visual relationship between your interior and the street. As an experienced interior fitout company Business Bay specialist, we navigate the building regulations, landlord requirements, and master developer guidelines of every major Business Bay retail address.</p>
              </li>
              <li>
                <h3 className="font-play font-bold text-base text-justify">Display, Merchandising & Material Specification</h3>
                <p className="text-white font-play text-sm sm:text-base text-justify">Great retail interior design Business Bay Dubai integrates display and merchandising logic into the architecture, never as an afterthought. As a specialist retail interior design firm Business Bay clients trust for long-term performance, WE DO selects finishes aligned with your brand and specified for Dubai's climate, meaning your store looks as good in year three as it did on opening day.</p>
              </li>
              <li>
                <h3 className="font-play font-bold text-base text-justify">Lighting, Technology & Signage</h3>
                <p className="text-white font-play text-sm sm:text-base text-justify">Lighting is the most powerful tool in retail design, it makes products irresistible and creates the moments customers photograph and share. For premium retail fitout Business Bay projects, we design dynamic lighting scenes optimised across all dayparts. Technology systems including POS, digital displays, security systems, and customer-facing screens are integrated into the design from the very beginning. WE DO also designs, produces, and installs complete signage and graphics packages as part of our integrated retail interior design service Business Bay offering.</p>
                              </li>
                               <li>
                <h3 className="font-play font-bold text-base text-justify">Beauty & Wellness Retail</h3>
                <p className="text-white font-play text-sm sm:text-base text-justify">Our <b className="text-[#caa193]"><a href="/boutique-interior-design-dubai">bespoke boutique interior design Dubai</a></b> approach creates beauty environments with testing stations, consultation zones, and sensory design elements that extend dwell time and deepen brand engagement.</p>
                              </li> 
                              <li>
                <h3 className="font-play font-bold text-base text-justify">Electronics, F&B & Specialty Retail</h3>
                <p className="text-white font-play text-sm sm:text-base text-justify">From clean tech showrooms to operationally efficient artisan F&B concepts, WE DO delivers specialist commercial fitout company Business Bay Dubai expertise across every retail category all F&B projects fully compliant with Dubai Municipality requirements.</p>
                              </li>
            </ul>
          </div>

          <div className="rounded-lg overflow-hidden shadow-md">
            <Image
              src="/images/startech (3).webp"
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
          retail Projects in Business Bay
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
        <h2 className="text-center text-3xl font-conthrax text-white py-12">
          How Smart Retail Design Increases Your Sales
        </h2>

        {/* Section 1: Text Left, Image Right */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          <div className="space-y-6 text-white font-play">
  <ul className="list-decimal pl-5 space-y-4 text-[#caa193]">
    <li>
      <h3 className="font-play font-bold text-base text-justify">Customer journey mapping increases conversion:</h3>
      <p className="text-white font-play text-sm sm:text-base text-justify"> We design the path through your store deliberately, entrance, discovery zones, point-of-sale, reducing friction and increasing purchase probability at every step.</p>
    </li>
    <li>
      <h3 className="font-play font-bold text-base text-justify">Dwell time correlates directly with spend:</h3>
      <p className="text-white font-play text-sm sm:text-base text-justify"> Engaging environments keep customers in-store longer and spending more at every visit.</p>
    </li>
    <li>
      <h3 className="font-play font-bold text-base text-justify">Lighting transforms product desirability:</h3>
      <p className="text-white font-play text-sm sm:text-base text-justify"> As a specialist retail interior designer Business Bay brands rely on, we treat lighting as a revenue tool, generating measurable uplift in product perception and transaction value.</p>
    </li>
    <li>
      <h3 className="font-play font-bold text-base text-justify">Social media moments drive acquisition:</h3>
      <p className="text-white font-play text-sm sm:text-base text-justify"> Every WE DO retail project includes intentional photography moments that generate earned social reach, organic visibility that paid advertising in Business Bay's market rarely matches.</p>
    </li>
  </ul>
</div>

          <div className="rounded-lg overflow-hidden shadow-md">
            <Image
              src="/images/startech (2).webp"
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

      {/* Why retail Owners Choose Us & Testimonial Section */}
      <div className="lg:max-w-[90%] mx-auto bg-black p-6 sm:p-10 rounded shadow space-y-6 mb-12 mt-12">
        <div className="text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-conthrax text-[#caa193] mb-2">
            Why Retail Brands in Business Bay Choose WE DO
          </h2>
          <p className="font-play text-sm sm:text-base text-white text-justify py-2 leading-relaxed">
            At WE DO Interior Design & fit-out, every design decision filtered through your brand brief. This separates luxury retail fitout Business Bay that builds equity from fitout that merely fills space.  We know Bay Square, Bay Avenue, Executive Towers, and DAMAC strips intimately. As a proven interior design firm Business Bay operators recommend, this local knowledge is a genuine commercial advantage for every client. As a trusted commercial fitout company Business Bay Dubai, we take complete ownership from day one to handover. Our delivery record means your store opens when planned, setting us apart from every other fitout contractor Business Bay in the market.  Our commitment does not end at handover. Dedicated snagging resolution and ongoing support ensure your retail environment performs exactly as delivered through the critical first months of trading.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="rounded-lg overflow-hidden shadow-md">
            <Image
              src="/images/meby (7).webp"
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
          <div className="pt-6 border-t border-gray-800 space-y-6">
  <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#caa193] uppercase">
    Our Retail Fitout Process
  </h2>
  
  <div className="space-y-4 text-sm sm:text-base font-play text-white text-left">
    <ul className="space-y-4 text-[#caa193]">
      <li>
        <h3 className="font-play font-bold text-base text-justify">Step 1 — Free Consultation (Week 1)</h3>
        <p className="text-white font-play text-sm sm:text-base text-justify">Site visit, brand brief, budget discussion. No obligations.</p>
      </li>
      <li>
        <h3 className="font-play font-bold text-base text-justify">Step 2 – Concept Design (Weeks 2-3)</h3>
        <p className="text-white font-play text-sm sm:text-base text-justify">Visualisation in 3 dimensions, materials boards, facade options, and basic cost estimate.</p>
      </li>
      <li>
        <h3 className="font-play font-bold text-base text-justify">Step 3 – Approvals (Weeks 3-6)</h3>
        <p className="text-white font-play text-sm sm:text-base text-justify">Approval from Dubai Municipality, Civil Defense, and landlord, all done in parallel to design process.</p>
      </li>
      <li>
        <h3 className="font-play font-bold text-base text-justify">Step 4 – Construction & Fitout (Weeks 6-12)</h3>
        <p className="text-white font-play text-sm sm:text-base text-justify">Project manager allocated. Regular weekly reports. Highest quality standards.</p>
      </li>
      <li>
        <h3 className="font-play font-bold text-base text-justify">Step 5 — Signage, Graphics & Technology (Week 11 to 12)</h3>
        <p className="text-white font-play text-sm sm:text-base text-justify">All signage, graphics, and technology integrated alongside the main fitout.</p>
      </li>
      <li>
        <h3 className="font-play font-bold text-base text-justify">Step 6 — Handover (Week 12)</h3>
        <p className="text-white font-play text-sm sm:text-base text-justify">Full walkthrough, snagging sign-off, and post-handover support begins.</p>
      </li>
    </ul>
    
    <p className="text-justify pt-2 text-white">
      Most Business Bay retail fitouts deliver in 10 to 14 weeks. Kiosk projects complete in 6 to 8 weeks.
    </p>
  </div>
</div>
          <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#caa193]">
            Serving Business Bay & Surrounding Areas
          </h2>
          
          {/* Map Embed */}
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
  Retail Interior Design Business Bay — Frequently Asked Questions
</h2>

<h3 className="text-base md:text-sm font-conthrax text-[#caa193] pt-2 text-justify">
  How much does retail interior design cost in Business Bay?
</h3>
<p className="text-sm sm:text-base text-white text-justify font-play">
  From AED 800 per sqm for standard formats to AED 5,000 per sqm for luxury boutiques. A typical 80 sqm premium fitout requires AED 150,000 to AED 350,000 including design, construction, signage, and approvals. WE DO provides a fully itemised estimate after your initial site visit at no charge.
</p>

<h3 className="text-base md:text-sm font-conthrax text-[#caa193] pt-2 text-justify">
  How long does a retail fitout take in Business Bay?
</h3>
<p className="text-sm sm:text-base text-white text-justify font-play">
  Standard retail fitouts take 10 to 14 weeks from design sign-off. Kiosk projects deliver in 6 to 8 weeks. Engage your fitout partner at least 3 months before your planned opening to protect against approval delays.
</p>

<h3 className="text-base md:text-sm font-conthrax text-[#caa193] pt-2 text-justify">
  Do you handle municipality and landlord approvals?
</h3>
<p className="text-sm sm:text-base text-white text-justify font-play">
  Yes, completely. As an experienced interior fitout contractor Business Bay clients trust, WE DO manages all DM submissions, Civil Defence compliance, and landlord NOC on every retail project.
</p>

<h3 className="text-base md:text-sm font-conthrax text-[#caa193] pt-2 text-justify">
  Can you translate our brand guidelines into a store design?
</h3>
<p className="text-sm sm:text-base text-white text-justify font-play">
  Absolutely. Brand translation is a core competency of our retail interior design firm Business Bay team, faithful to your identity and optimised for your specific location.
</p>

<h3 className="text-base md:text-sm font-conthrax text-[#caa193] pt-2 text-justify">
  Have you completed retail projects in Business Bay?
</h3>
<p className="text-sm sm:text-base text-white text-justify font-play">
  Yes. WE DO has delivered retail interior design Business Bay projects across Bay Square, Bay Avenue, Executive Towers, and DAMAC retail strips with full knowledge of each location's specific requirements.
</p>

<h3 className="text-base md:text-sm font-conthrax text-[#caa193] pt-2 text-justify">
  What makes WE DO different from other retail designers in Business Bay?
</h3>
<p className="text-sm sm:text-base text-white text-justify font-play pb-6">
  Your designer and builder are the same team, accountable to the same outcome. Combined with specialist retail expertise, cost transparency, and proven delivery, this is why Business Bay's most successful brands choose WE DO as their retail interior design company Business Bay Dubai partner.
</p>

          {/* Final Closing Content */}
          <div className="pt-6 border-t border-gray-800">
            <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#caa193] mb-2 text-justify">
              Ready to Build a Retail Space That Converts in Business Bay?
            </h2>
            <p className="text-sm sm:text-base text-white text-justify font-play">
              Business Bay rewards excellence and punishes mediocrity in equal measure. The brands that succeed here invest in environments that earn attention, build trust, and convert footfall into loyal customers, from opening day and every day after. WE DO Interior Design & Fitout is the <b className="text-[#caa193]"><a href="/interior-design-company-business-bay">interior design company Business Bay</a></b> brands trust when the standard is non-negotiable. From your first consultation to your opening day, we are your single point of accountability for a retail environment that truly performs.
Planning a retail fitout in Business Bay? Speak with our design team for a free site visit, concept discussion, and fully itemised project estimate. [Book Your Free Consultation].
            </p>
          </div>
        </div>
      </div>

    </section>
  );
};

export default DProjects;