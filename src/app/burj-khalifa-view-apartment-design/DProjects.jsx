'use client';

import React from 'react';
import Image from 'next/image';

const textImage = {
  src: '/images/ctwkapt (8).png',
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
  quote: "We bought in Burj Vista specifically for the Burj Khalifa view and then lived with a developer-standard interior for two years before calling WE DO. The difference is extraordinary. Every design decision they made was in service of that view, the furniture, the lighting, the window treatments. As a Burj Khalifa view interior design Dubai specialist, their spatial thinking is genuinely exceptional.",
  author: "K. Al Mansoori, Owner-Occupier, Burj Vista Tower 1 ⭐⭐⭐⭐⭐",
},
{
  quote: "Our Act One Act Two apartment is listed as a short-term rental. After WE DO redesigned it around the Burj Khalifa and fountain views, we noticed stronger guest engagement and improved listing performance and guests now specifically mention the interior in their reviews alongside the view. The best Downtown Dubai view apartment interior designer decision we made.",
  author: "F. & N. Hassan, Investor Clients, Act One Act Two ⭐⭐⭐⭐⭐",
},
{
  quote: "The 3D visuals WE DO produced before construction showed us exactly how the view would work with the new interior. Seeing the Burj Khalifa through the designed space before a single wall was touched gave us complete confidence. As a bespoke apartment design Burj Khalifa view specialist, their pre-build visualisation process is genuinely reassuring.",
  author: "D. Williamson, Owner-Occupier, Address Boulevard ⭐⭐⭐⭐⭐",
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
   Why Burj Khalifa View Apartment Interior Design Is Unique
  </h2>
  <div className="space-y-4 text-sm sm:text-base font-play text-white ">
    <p className="text-justify">
       Interior designers in Dubai usually think about a space from the perspective of 'what do we place in this room?' When it comes to a Burj Khalifa view apartment interior design project, this approach becomes completely irrelevant. The right question is, how does everything in this space serve the view?
    </p>
     <p className="text-justify">
       Furniture placement is the first consideration. Every primary seat, every sofa, every dining chair, every bed, should have a natural relationship with the window line. 
Window treatments are the second challenge. Dubai's sun is intense. Solar heat gain through floor-to-ceiling glass is a real comfort issue. But heavy curtains or dark tinting that solve the heat problem by eliminating the view have missed the point entirely. 
Lighting is the third element that most people get wrong. During the day, natural light is everything, interior lighting should complement it, not fight it. In the evening, the relationship reverses. The city lights up outside and your interior lighting needs to create warmth and intimacy without turning your windows into mirrors that reflect the room back at you.
    </p>
    <p className="text-justify">
       Material palette is the fourth consideration. Bright colors and elaborate designs clash with the exterior views. For the Burj Khalifa view apartment, material usage has to be very peaceful, making sure that the city gets its own spotlight through the window of this place. Materials such as stone, wood, soft textiles, and subdued colors can be used as a part of creating the luxurious look without taking away the attention from outside the window.
    </p>
    <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#caa193] uppercase">
  Our Burj Khalifa View Apartment Interior Design Services
</h2>
<p className="text-justify">
  As a fully integrated <b className="text-[#caa193]"><a href="/interior-design-companies-downtown-dubai"> interior design company Downtown Dubai</a></b> residents and investors rely on, we manage your entire project under one roof, concept, approvals, construction, smart home, and styling all managed by one accountable team.
</p>
<ul className="list-decimal pl-5 space-y-4 text-[#caa193]">
  <li>
    <h3 className="font-play font-bold text-base text-justify">Space Planning & View Corridor Protection</h3>
    <p className="text-white font-play text-sm sm:text-base text-justify">Every spatial decision in a Burj Khalifa view apartment interior design project is made with the view as the primary consideration. We map the view angles from every position in the apartment, standing, seated, lying down, and build the spatial strategy around those sightlines. Furniture zones are established. View corridors are protected. Full 3D visualisations are produced before anything is built. You see exactly how the apartment will look and feel, including the view, before a single wall is touched.</p>
  </li>
  <li>
    <h3 className="font-play font-bold text-base text-justify">Window Treatment & Solar Control Design</h3>
    <p className="text-white font-play text-sm sm:text-base text-justify">Managing Dubai's sun without losing the Burj Khalifa is a technical challenge. WE DO designs layered window treatment systems, solar film, sheer panels, and motorised blackout layers, that give you complete control over light, heat, and privacy at every time of day. Home automation works in that these home systems work automatically based on what time of day it is or through your phone’s remote control.</p>
  </li>
  <li>
    <h3 className="font-play font-bold text-base text-justify"><b className="text-[#caa193]"><a href="/joinery-company-dubai">Bespoke Joinery & Custom Furniture</a></b></h3>
    <p className="text-white font-play text-sm sm:text-base text-justify">No element within a view apartment should distract from the window. All joinery, kitchens, wardrobes, entertainment units, storage systems, must be created to disappear into the architecture, not compete with it. Custom furniture pieces are proportioned specifically for your space and your view angles. As a trusted <b className="text-[#caa193]"><a href="/modern-apartment-interior-design">bespoke apartment design</a></b> Burj Khalifa view specialist, WE DO designs everything from scratch, never from a catalogue.</p>
  </li>
  <li>
    <h3 className="font-play font-bold text-base text-justify">Lighting Design — Day & Night Scenarios</h3>
    <p className="text-white font-play text-sm sm:text-base text-justify">Our lighting designers create two distinct scenarios for every apartment with Burj Khalifa view interior design project, a daytime scheme that works with natural light, and an evening scheme that creates warmth and intimacy without competing with the city lights outside. Smart lighting control means these scenes shift automatically or at the touch of a button. The result is an apartment that feels completely right at every hour of the day.</p>
  </li>
  <li>
    <h3 className="font-play font-bold text-base text-justify">Kitchen & Bathroom Design</h3>
    <p className="text-white font-play text-sm sm:text-base text-justify">In a view apartment, even the kitchen deserves a relationship with the outside. Where layout allows, WE DO positions kitchen work surfaces and dining areas to maximise view access. Bathrooms, particularly master ensuites with city views, are designed as luxurious spa-inspired spaces, featuring freestanding tubs and vanity placement with the cityscape in view if possible. This strategy proves especially beneficial for luxury apartments in Dubai that require the very best in Downtown’s highest buildings.</p>
  </li>
  <li>
    <h3 className="font-play font-bold text-base text-justify">Smart Home Integration</h3>
    <p className="text-white font-play text-sm sm:text-base text-justify">Motorised blinds that respond to sunlight levels. Lighting scenes that shift from morning to evening automatically. Climate control that adjusts room by room. Smart access control. AV systems that disappear into the architecture. As a leading Downtown Dubai view apartment interior designer, WE DO integrates all of this from the design stage, so technology serves the view experience rather than complicating it.</p>
  </li>
  <li>
    <h3 className="font-play font-bold text-base text-justify">FF&E Sourcing & Professional Styling</h3>
    <p className="text-white font-play text-sm sm:text-base text-justify">We source and install every piece of furniture, every light fitting, and every decorative object in your apartment. The styling layer, cushions, artwork, plants, table accessories, is carefully selected to complement the view palette rather than compete with it. When we hand over your apartment, it is completely finished. Move-in ready or listing-ready from day one.</p>
  </li>
  <li>
    <h3 className="font-play font-bold text-base text-justify">Building Management & NOC Approvals</h3>
    <p className="text-white font-play text-sm sm:text-base text-justify">Every building in Downtown Dubai has its own approval requirements. Burj Vista, Address Boulevard, Act One Act Two, Forte Tower — we have existing relationships with the management teams of all of them. WE DO handle every submission, follow-up, and sign-off on your behalf. Most of our clients never have to interact with a building management team directly throughout the entire project.</p>
  </li>
</ul>
  </div>
</div>

      {/* Split Row – Text + Top Right Image */}
      <div className="max-w-7xl mx-auto">
  <h2 className="text-center text-3xl font-conthrax text-white py-12 uppercase">
   Who We Design Burj Khalifa View Apartments For
  </h2>

  {/* Section 1: Text Left, Image Right */}
  <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
    <div className="space-y-6 text-white font-play">
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
        src="/images/ctwkapt (7).png"
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
   Why Choose WE DO
  </h2>

  {/* Section 1: Text Left, Image Right */}
  <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
    <div className="space-y-6 text-white font-play">
      <p className="text-justify">
        At WE DO, we treat the Burj Khalifa view as the most valuable design element in the apartment , not as a backdrop to work around. Every spatial decision, material choice, and lighting scheme is made in direct relationship to that view. This view-first philosophy is not something every interior designer practices. Most approach a room and ask what to put in it. We ask how everything in the room serves what is outside it. That single difference in thinking produces fundamentally better outcomes for every client we work with. Our experience in <b className="text-[#caa193]"><a href="/apartment-interior-design-dubai"> high-end apartment interiors Dubai</a></b> projects allows us to create spaces that balance luxury, functionality, and long-term value.
      </p>
      <p className="text-justify">
       We never reuse a design. Every Burj Khalifa view apartment interior design project we take on is conceived from scratch for that specific apartment, that specific view angle, and the specific people who will live or stay in it. We deliver on time and we stay accountable after handover. We are committed to delivering projects on schedule while maintaining the highest standards of quality and workmanship. And when the keys are handed over, our support does not stop, snagging, adjustments, and any issues in the first months are resolved without hesitation.
      </p>
      
    
    </div>

    <div className="rounded-lg overflow-hidden shadow-md">
      <Image
        src="/images/ctwkapt (6).png"
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
              src="/images/ctwkapt (5).png"
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
    Our Design Process
  </h2>
  
  <div className="space-y-4 text-sm sm:text-base font-play text-white text-left">
    <ul className="space-y-4 text-[#caa193]">
      <li>
        <h3 className="font-play font-bold text-base text-justify">Week 1 — Free Consultation</h3>
        <p className="text-white font-play text-sm sm:text-base text-justify">We visit your apartment, assess the view positions and natural light conditions, listen to your brief, and give you an honest initial direction. No charge, no obligation.</p>
      </li>
      <li>
        <h3 className="font-play font-bold text-base text-justify">Weeks 2 to 3 — Concept Design</h3>
        <p className="text-white font-play text-sm sm:text-base text-justify">Full view-framing spatial strategy, photorealistic 3D visuals showing the Burj Khalifa from every major space, material and finish selections, window treatment strategy, lighting concept, and detailed cost plan.</p>
      </li>
      <li>
        <h3 className="font-play font-bold text-base text-justify">Weeks 3 to 6 — Building Approvals</h3>
        <p className="text-white font-play text-sm sm:text-base text-justify">HOA submissions, building management approvals, and developer NOC where required — all managed entirely by WE DO.</p>
      </li>
      <li>
        <h3 className="font-play font-bold text-base text-justify">Weeks 6 to 12 — Construction & Fitout</h3>
        <p className="text-white font-play text-sm sm:text-base text-justify">Dedicated project manager on site. Weekly client updates. Quality checks at every milestone.</p>
      </li>
      <li>
        <h3 className="font-play font-bold text-base text-justify">Weeks 12 to 13 — Styling & Finishing</h3>
        <p className="text-white font-play text-sm sm:text-base text-justify">Furniture installed, art placed, soft furnishings dressed, and every finishing detail attended to until the apartment looks exactly as the visuals showed.</p>
      </li>
      <li>
        <h3 className="font-play font-bold text-base text-justify">Week 13 to 14 — Handover</h3>
        <p className="text-white font-play text-sm sm:text-base text-justify">Full walkthrough, snagging signed off, smart home orientation, and post-handover support begins.</p>
      </li>
    </ul>
    
    <p className="text-justify pt-2 text-white">
      Most Burj Khalifa view apartment projects complete in 12 to 16 weeks. Partial renovations and refresh projects deliver in 6 to 10 weeks.
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
  How can you create a space around the Burj Khalifa view?
</h3>
<p className="text-sm sm:text-base text-white text-justify font-play">
  The view is your guiding point when making all decisions regarding the spatial layout starting with the sketching phase. Furniture layout, window treatments, lighting design, and material selections are all planned around protecting sightlines and enhancing the Burj Khalifa view.
</p>

<h3 className="text-base md:text-sm font-conthrax text-[#caa193] pt-2 text-justify">
  What are the apartment buildings with views from Dubai Downtown that have the best view of Burj Khalifa tower?
</h3>
<p className="text-sm sm:text-base text-white text-justify font-play">
  Some buildings, among others, with great views include Burj Vista Towers 1 and 2, Act One Act Two, Address Boulevard, Forte Tower, and The Residence. Boulevard Point and Standpoint Towers also offer excellent view positions. WE DO has delivered Burj Khalifa view apartment interior design projects across all of these buildings.
</p>

<h3 className="text-base md:text-sm font-conthrax text-[#caa193] pt-2 text-justify">
  How long does a Burj Khalifa view apartment renovation and fitout in Downtown Dubai take? 
</h3>
<p className="text-sm sm:text-base text-white text-justify font-play">
  Full renovation projects typically take 12 to 16 weeks from design sign-off. Partial renovations and targeted refresh projects deliver in 6 to 10 weeks. We recommend engaging your design team at least 3 months before your target completion date.
</p>

<h3 className="text-base md:text-sm font-conthrax text-[#caa193] pt-2 text-justify">
  Do you handle building management and HOA approvals?
</h3>
<p className="text-sm sm:text-base text-white text-justify font-play">
  Yes, completely. We manage all building management submissions, HOA approvals, and developer NOC requirements for your specific building. Our existing relationships with Downtown's major residential management teams mean this process runs smoothly and efficiently on every project.
</p>

<h3 className="text-base md:text-sm font-conthrax text-[#caa193] pt-2 text-justify">
  Can you redesign a furnished apartment without full renovation?
</h3>
<p className="text-sm sm:text-base text-white text-justify font-play">
  Absolutely. WE DO offers targeted upgrade services, furniture replacement, lighting redesign, window treatment upgrade, and professional restyling, that can dramatically improve both the interior quality and the view relationship without a full renovation. This is particularly popular with investor clients refreshing an existing rental property.
</p>

<h3 className="text-base md:text-sm font-conthrax text-[#caa193] pt-2 text-justify">
  What makes view framing different from standard interior design? 
</h3>
<p className="text-sm sm:text-base text-white text-justify font-play pb-6">
  Standard interior design fills a space. View framing designs around what is outside the space. Every decision, where furniture sits, how windows are treated, what colours and materials are chosen, how lighting behaves at night, is made in conscious relation to the Burj Khalifa view. It requires a different design philosophy, not just different furniture. This is what WE DO brings to every apartment with the Burj Khalifa view interior design project we take on.
</p>
          {/* Final Closing Content */}
          <div className="pt-6 border-t border-gray-800">
            <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#caa193] mb-2 text-justify">
             Your View Is Extraordinary. Make the Interior Match.
            </h2>
            <p className="text-sm sm:text-base text-white text-justify font-play">
             You came to Downtown Dubai for a purpose. And that amazing view of the Burj Khalifa is just one of the most fantastic views that you can behold from your own apartment anywhere in the world. WE DO Interior Design & Fitout delivers Burj Khalifa view apartment interior design, luxury apartment interior design Downtown Dubai, and <b className="text-[#caa193]"><a href="/fit-out-company-dubai">premium apartment fitout services</a></b> tailored to iconic residences. Bespoke, considered, and built specifically for your apartment, your view, and the life you want to live inside it.<br/>
Book your free site visit today. We will come to your apartment, assess your view positions, listen to your vision, and give you a fully itemised estimate.
            </p>
          </div>
        </div>
      </div>

    </section>
  );
};

export default DProjects;