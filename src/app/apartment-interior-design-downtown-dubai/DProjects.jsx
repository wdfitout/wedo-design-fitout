'use client';

import React from 'react';
import Image from 'next/image';

const textImage = {
  src: '/images/mgapt-2 (10).jpg',
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
  quote: "Our Burj Vista apartment was completely standard when we bought it. After WE DO finished, it looked like a different place entirely, but it still felt like us. The apartment interior design Downtown Dubai team completely transformed the space. Our rental yield went up by over 30 percent. Worth every dirham.",
  author: "S. Al Mazrouei, Investor, Burj Vista ⭐⭐⭐⭐⭐",
},
{
  quote: " I was nervous about the process, especially the approvals. WE DO handled everything from design to apartment fitout Downtown Dubai approvals, making the entire project stress-free",
  author: "M. Thompson, Owner-Occupier, Act One Act Two ⭐⭐⭐⭐⭐",
},
{
  quote: "Our Airbnb went from around 70 percent occupancy to consistently above 90 percent after the redesign. The apartment renovation Downtown Dubai project exceeded our expectations and guests constantly mention the interiors in their reviews. The smart home system was a great call, guests loved it.",
  author: "P. & R. Nair, Airbnb Owners, Address Boulevard ⭐⭐⭐⭐⭐",
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
  <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#caa193] uppercase">
   What Makes Downtown Dubai Different From Every Other Market
  </h2>
  <div className="space-y-4 text-sm sm:text-base font-play text-white text-left">
    <p className="text-justify">
      Downtown Dubai is not your average residential market. The people renting and buying here have usually lived in great apartments before, in London, Singapore, New York, or Hong Kong. They have a reference point. They know immediately when a space has been properly designed versus when someone just bought furniture and called it done.
    </p>
    <p className="text-justify">
      That matters for two reasons.<br/>
1- If you live here, you deserve a home that genuinely fits your life, not a generic interior that could belong to anyone.<br/>
2- If you are an investor, your competition is serious. Tenants and short-term guests in Downtown Dubai have real choices. A well-designed apartment commands a 20 to 40 percent rental premium over a developer-standard unit in the same building. That is not a small number when you calculate it over a year.<br/>
As a specialist <b className="text-[#caa193]"><a href="/interior-design-downtown-dubai">residential interior design Downtown Dubai company</a></b>, WE DO designs apartments with both of these realities in mind, beautiful spaces that also make financial sense.
    </p>
    
  </div>
</div>

      {/* Split Row – Text + Top Right Image */}
      <div className="max-w-7xl mx-auto">
  <h2 className="text-center text-3xl font-conthrax text-white py-12 uppercase">
    Buildings We Know Well in Downtown Dubai
  </h2>

  {/* Section 1: Text Left, Image Right */}
  <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
    
<div className="text-center">
         
          <p className="font-play text-sm sm:text-base text-white text-justify py-2 leading-relaxed">
            We have delivered <b className="text-[#caa193]"><a href="/modern-apartment-interior-design"> apartment interior design</a></b> Downtown Dubai projects across Burj Vista Tower 1 and 2, Address Boulevard, Act One Act Two, The Residence, Boulevard Point, Vida Downtown, 29 Boulevard, and Standpoint Towers.<br/>
This matters because every building is different. Different HOA rules. Different building management teams. Different structural considerations. Our experience across these buildings means we handle approvals faster, avoid common delays, and know exactly what is and is not possible in each one.By anticipating building-specific challenges before they arise, we streamline the entire fit-out process and ensure a seamless transformation that perfectly respects the building's infrastructure.
          </p>
        </div>
    <div className="rounded-lg overflow-hidden shadow-md">
      <Image
        src="/images/mgapt-2 (10).jpg"
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
    Who We Work With
  </h2>

  {/* Section 1: Text Left, Image Right */}
  <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
    <div className="space-y-6 text-white font-play">
      <p className="text-justify">
        People who live here full time and want a home that genuinely feels like theirs through bespoke home interior design Downtown Dubai solutions.<br/>
Buy-to-let investors who understand that better design means better returns. Our residential interior designer Downtown Dubai team always considers rental yield in their designs, not just how it is presented in pictures.<br/>
Airbnb and holiday home owners who are looking for consistent five-star reviews and maximum rent every night. We consider the guest experience, photogenic elements, durability, smart technology, and that extra finishing touch that guarantees great reviews from guests.<br/>
Off-plan buyers who want to hit the ground running. We start the design process before your handover so the moment you get your keys, we are ready to build.
      </p>
      
    
    </div>

    <div className="rounded-lg overflow-hidden shadow-md">
      <Image
        src="/images/mgapt-2 (14).jpg"
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
        <h2 className="text-center text-3xl font-conthrax text-white uppercase"> What We Do For Your Apartment </h2>
<div className="space-y-6 text-white font-play">
      <p className="text-justify">
      We handle everything from the first sketch to the last cushion. As a fully integrated apartment fitout company Downtown Dubai clients trust, our design and construction teams work together under one roof, which means no gaps, no finger-pointing, and no nasty surprises on site.
    </p>
      <ul className="list-decimal pl-5 space-y-4 text-[#caa193]">
        <li>
          <h3 className="font-play font-bold text-base text-justify">Getting the Layout Right First</h3>
          <p className="text-white font-play text-sm sm:text-base text-justify"> Before we talk about materials or furniture, we talk about how you actually use your space. Where do you eat? Do you work from home? Do you host often? For investor clients, what kind of tenant are you targeting and what do they need?<br/>
These answers shape the layout. We develop full 3D visuals before anything is built so you can see exactly what you are getting. No guesswork, no surprises.
</p>
        </li>
        
        <li>
          <h3 className="font-play font-bold text-base text-justify">Apartment Kitchen Design</h3>
          <p className="text-white font-play text-sm sm:text-base text-justify">In many apartment renovation Downtown Dubai projects, the kitchen is often the most important space for improving both lifestyle and property value. It is the first thing a serious buyer or tenant looks at. A well-designed kitchen, proper joinery, quality stone countertops, integrated appliances, can single-handedly justify a higher rent or a stronger asking price.<br/>
As a trusted <b className="text-[#caa193]"><a href="/apartment-interior-design-dubai">luxury apartment interior design Downtown Dubai</a></b> specialist, we design kitchens that look exceptional and work properly in daily use. Both things matter equally.
</p>
        </li>
        <li>
          <h3 className="font-play font-bold text-base text-justify">Living Area & View Framing</h3>
          <p className="text-white font-play text-sm sm:text-base text-justify"> If you can see the Burj Khalifa from your apartment or enjoy the magnificent sight of the Dubai Fountain, then this view must be the focal point of your space.Our space planning will ensure that everything in your home, whether it’s your furniture, lighting, or window dressing, will highlight this view in an appropriate manner. This is always something that our bespoke apartment interior design Dubai clients never fail to notice once they lay eyes on their final product.</p>
        </li>
        <li>
          <h3 className="font-play font-bold text-base text-justify">Bedrooms & Wardrobes</h3>
          <p className="text-white font-play text-sm sm:text-base text-justify">A master bedroom in a Downtown apartment should feel like a proper retreat. Calm. Considered. A room is much more than just a place where there’s a bed. Our bedrooms have layered lighting, functional wardrobes, and materials which give the space warmth while remaining light.</p>
        </li>
        <li>
          <h3 className="font-play font-bold text-base text-justify">Bathrooms</h3>
          <p className="text-white font-play text-sm sm:text-base text-justify">Bathroom quality plays a key role in getting high ratings on Airbnbs and choosing to rent your apartment. Having a spa-like bathroom, great stone, frameless glass, and proper lighting sends a message to tenants that you care for your entire apartment. We design bathrooms that earn their own compliments.</p>
        </li>
        <li>
          <h3 className="font-play font-bold text-base text-justify">Smart Home & Technology</h3>
          <p className="text-white font-play text-sm sm:text-base text-justify">Lighting scenes you control from your phone. Climate that adjusts automatically. Motorised blinds that open with the sunrise. For short-term rental apartments, smart access control means no key handovers. WE DO integrate all of this from the design stage, not bolted on at the end.</p>
        </li>
         <li>
          <h3 className="font-play font-bold text-base text-justify">Furniture, Styling & Final Finishing</h3>
          <p className="text-white font-play text-sm sm:text-base text-justify">We source and install everything, every piece of furniture, every light fitting, every decorative object. When we hand over your apartment it is genuinely move-in or guest-ready. Not a project site with a shopping list attached.</p>
        </li>
      </ul>
    </div>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="rounded-lg overflow-hidden shadow-md">
            <Image
              src="/images/mgapt-2 (15).jpg"
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
   <div >
    <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#caa193] uppercase">
      Why Clients Choose WE DO
    </h2>
    
    <div className="space-y-4 text-sm sm:text-base font-play text-white text-left">
      
      
      <p className="text-justify pt-2 text-white">
        Not just the neighbourhood, the actual buildings. The HOA rules, the loading bay schedules, the building manager's requirements. This saves time and money on every single project.  Design, approvals, construction, furniture, styling, all under one roof. You get a fully itemised quote before work starts. Every line explained. No additions halfway through. No surprises at handover. Snagging, adjustments, questions, we are still here and still accountable after the keys are handed over.
      </p>
    </div>
  </div>

  <div className="space-y-6">
    <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#caa193] uppercase">
      How The Process Works
    </h2>
    
    <div className="space-y-4 text-sm sm:text-base font-play text-white text-left">
      <ul className="space-y-4 text-[#caa193]">
        <li>
          <h3 className="font-play font-bold text-base text-justify">Step 1 — Free Consultation (Week 1)</h3>
          <p className="text-white font-play text-sm sm:text-base text-justify">We visit your apartment, listen to your brief, discuss your budget, and give you an honest initial assessment. No charge, no obligation.</p>
        </li>
        <li>
          <h3 className="font-play font-bold text-base text-justify">Step 2 – Concept Design (Week 2 – 3)</h3>
          <p className="text-white font-play text-sm sm:text-base text-justify">Full 3D visuals, material selections, furniture direction, and a detailed cost plan. You see exactly what you are getting before we build anything.</p>
        </li>
        <li>
          <h3 className="font-play font-bold text-base text-justify">Step 3 – Building Approvals (Week 3 – 6)</h3>
          <p className="text-white font-play text-sm sm:text-base text-justify">We handle all building management submissions, HOA approvals, and developer NOC requirements. You do not have to deal with any of it.</p>
        </li>
        <li>
          <h3 className="font-play font-bold text-base text-justify">Step 4 – Construction (Week 6 – 12)</h3>
          <p className="text-white font-play text-sm sm:text-base text-justify">Our project manager runs the site. Weekly updates to you. We hold every contractor to the same standard we hold ourselves.</p>
        </li>
        <li>
          <h3 className="font-play font-bold text-base text-justify">Step 5 – Styling & Finishing (Week 12 – 13)</h3>
          <p className="text-white font-play text-sm sm:text-base text-justify">Furniture goes in, art goes up, finishing touches go on. This is where the apartment comes to life.</p>
        </li>
        <li>
          <h3 className="font-play font-bold text-base text-justify">Step 6 – Handover (Week 13 – 14)</h3>
          <p className="text-white font-play text-sm sm:text-base text-justify">Walkthrough together, snagging signed off, smart home orientation done. Your apartment is ready.</p>
        </li>
      </ul>
      
      <p className="text-justify pt-2 text-white">
        Full renovations typically take 12 to 16 weeks. Smaller scope projects finish in 6 to 10 weeks.
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
  How much does apartment interior design cost in Downtown Dubai?
</h3>
<p className="text-sm sm:text-base text-white text-justify font-play">
  It ranges from AED 600 per sqm for targeted renovations up to AED 4,000+ per sqm for a full luxury fitout. A typical two-bedroom apartment full renovation lands between AED 180,000 and AED 400,000 all in, design, construction, furniture, and approvals. We give you a fully itemised breakdown after the first site visit, at no cost.
</p>

<h3 className="text-base md:text-sm font-conthrax text-[#caa193] pt-2 text-justify">
 How long does it take?
</h3>
<p className="text-sm sm:text-base text-white text-justify font-play">
  Full renovations take 12 to 16 weeks from design sign-off. Partial projects take 6 to 10 weeks. We recommend starting conversations at least 3 months before your target move-in or handover date.
</p>

<h3 className="text-base md:text-sm font-conthrax text-[#caa193] pt-2 text-justify">
  Do you handle the building approvals?
</h3>
<p className="text-sm sm:text-base text-white text-justify font-play">
   Yes, completely. Building management, HOA, developer NOC. We know the process in every major Downtown building and we manage all of it. You do not need to chase anyone.
</p>

<h3 className="text-base md:text-sm font-conthrax text-[#caa193] pt-2 text-justify">
 Can you design for maximum rental yield?
 </h3>
<p className="text-sm sm:text-base text-white text-justify font-play pb-6">
  Yes. It is one of our specialities as an apartment interior design company Downtown Dubai investors trust. We understand what Downtown tenants and Airbnb guests respond to, and we design accordingly.
</p>
<h3 className="text-base md:text-sm font-conthrax text-[#caa193] pt-2 text-justify">
 Which buildings have you worked in? 
 </h3>
<p className="text-sm sm:text-base text-white text-justify font-play pb-6">
  Burj Vista, Address Boulevard, Act One Act Two, The Residence, Boulevard Point, Vida Downtown, 29 Boulevard, and Standpoint Towers, among others.
</p>
<h3 className="text-base md:text-sm font-conthrax text-[#caa193] pt-2 text-justify">
 What makes you different? 
 </h3>
<p className="text-sm sm:text-base text-white text-justify font-play pb-6">
  The biggest difference is that your designer and builder work as one integrated team. Most clients who have used separate design and fitout companies before come to us after a bad experience of the two not talking to each other properly. We remove that problem completely.
</p>
          {/* Final Closing Content */}
          <div className="pt-6 border-t border-gray-800">
            <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#caa193] mb-2 text-justify">
             Let's Talk About Your Apartment

            </h2>
            <p className="text-sm sm:text-base text-white text-justify font-play">
              You already made a great decision when you chose Downtown Dubai. Now make the next one.<br/>
Whether you want a home that genuinely feels like yours, an investment property that tops the market, or a holiday apartment that earns five-star reviews, WE DO Interior Design & Fitout will make it happen.<br/>
Book your free site visit today. We will come to you, see the space, understand what you need, and give you a fully itemised estimate with no vague numbers and no obligation.

            </p>
          </div>
        </div>
      </div>

    </section>
  );
};

export default DProjects;