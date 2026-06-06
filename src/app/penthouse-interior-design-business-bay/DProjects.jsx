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
  quote: "WE DO transformed our Executive Towers penthouse into something we genuinely did not believe was achievable within our timeline. The smart home integration alone changed how we experience the space every single day. Every detail, from the marble in the entrance hall to the custom joinery in the master suite, reflects exactly what we asked for and significantly more..",
  author: "A. Al Rashidi, Penthouse Owner, Executive Towers, Business Bay",
},
{
  quote: "What impressed us most was that the WE DO interior designers dubai asked questions no other designer ever asked, about how we actually use each room, at what time of day, and with what kind of light. The design they produced was not just beautiful. It was exactly right for how we live. Three months after moving in, it still feels perfect.",
  author: "M. & S. Karim, Penthouse Residents, DAMAC Towers, Business Bay",
},
{
  quote: "From the first concept presentation to the final styling walkthrough, everything was handled with complete professionalism. The team managed every contractor, every approval, every delivery. We did not have to chase anything once across the entire project. That level of interior design services is genuinely rare in Dubai.",
  author: "J. Harrington, Penthouse Owner, Marasi Drive, Business Bay",
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
  <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#caa193]">
    Our Penthouse Interior Design Services in Business Bay
  </h2>
  <div className="space-y-4 text-sm sm:text-base font-play text-white text-left">
    <p className="text-justify">
      With our complete design and fitout services, we coordinate all aspects of your penthouse build from initial conceptualization through to finishing touches. Your entire design and construction process will be managed by one team under one roof. Our <b className="text-[#caa193]"><a href="/interior-design-dubai"> interior design services Dubai </a></b> clients depend on cover every stage, from the first sketch to the final styled photograph.
    </p>
   
    <ul className="space-y-4 text-[#caa193]">
     
     
      
      <li>
        <h3 className="font-play font-bold text-base text-justify">Space Planning & Concept Design</h3>
        <p className="text-white font-play text-sm sm:text-base text-justify">
         Every penthouse interior design Business Bay Dubai project begins with a detailed concept development process. A comprehensive strategy is devised for the work flow within the penthouse, the way in which natural light will move throughout the space, and how each section interacts within itself exactly according to your needs and lifestyle. We create 3D visualizations of your penthouse, before the build process starts at all. All potential floor plans, all corridors secured, and all arrangements perfected until we find the most accurate solution.
        </p>
      </li>
      <li>
        <h3 className="font-play font-bold text-base text-justify">Custom Joinery & Furniture</h3>
        <p className="text-white font-play text-sm sm:text-base text-justify">
          Our <b className="text-[#caa193]"><a href="/joinery-company-dubai">custom joinery and furniture</a></b> services include everything from your kitchen joinery, wardrobes and built-ins, all the way down to unique entertainment centers, dining room tables and integrated storage systems. Every piece of custom furniture penthouse Business Bay clients receive from WE DO interiors is designed from scratch. We use high quality material, brushed brass and hand-sewn leather.
        </p>
      </li>
      <li>
        <h3 className="font-play font-bold text-base text-justify">Smart Home & Automation Integration</h3>
        <p className="text-white font-play text-sm sm:text-base text-justify">
          A premium penthouse fitout in Business Bay is incomplete without automation. WE DO Interior Design & Fitout integrate smart home systems from the design stage. Lighting scenes controlled from a single panel or your phone. Climate systems that adapt to occupancy and time of day. Motorised window treatments that respond to changing light levels. Disappearing audio visual systems that blend into the architecture only when called into service. For every smart home penthouse Business Bay project, WE DO selects automation partners whose technology has been tested.
        </p>
      </li>
      <li>
        <h3 className="font-play font-bold text-base text-justify">Luxury Lighting Design</h3>
        <p className="text-white font-play text-sm sm:text-base text-justify">
          Lighting determines how a penthouse feels at every hour of the day. Ambient light sets the overall mood. Task light supports daily function without visual intrusion. Feature lighting creates the architectural drama that signals a truly designed space. For penthouse lighting design Business Bay Dubai, we pay close attention to the relationship between interior lighting and the exterior skyline. 
          </p>
      </li>
      <li>
        <h3 className="font-play font-bold text-base text-justify">Premium Material Sourcing</h3>
        <p className="text-white font-play text-sm sm:text-base text-justify">
          Luxury penthouse interior design Business Bay requires the finest materials from around the globe as well as their proper specification for this unique location and climate.At WE DO,all materials are selected based on three basic characteristics, which include appearance, touch, and durability. Quality that deteriorates within five years is not an investment, it is an expense.
          </p>
      </li>
      <li>
        <h3 className="font-play font-bold text-base text-justify">Art Curation & Final Styling</h3>
        <p className="text-white font-play text-sm sm:text-base text-justify">
          In the design of any luxurious penthouse interior, the final step that adds the touch of personalization to the entire concept is the selection and placing of art pieces, objects, and furnishings within the interior to give it that personalized look. We collaborate with various renowned local and international galleries to select art pieces according to the design style and personality of the owners.It is the final chapter of what luxury home interior design Business Bay looks like when every detail has been considered.
        </p>
      </li>
    </ul>
  </div>
</div>

{/* Gallery Heading */}
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-lg font-conthrax text-white py-12">
          Penthouse Projects in Dubai Creek Harbour
        </h2>
      </div>

      {/* Gallery Grid with Hover Effects */}
      <div className="lg:max-w-[50%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 max-w-6xl mx-auto mb-10">
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
      </div>


      {/* Split Row – Text + Top Right Image */}
       <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-3xl font-conthrax text-white py-12">
         Our Signature Design Styles for Business Bay Penthouses
        </h2>

        {/* Section 1: Text Left, Image Right */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          <div className="space-y-6 text-white font-play">
           
            <ul className="list-decimal pl-5 space-y-4 text-[#caa193]">
              <li>
                <h3 className="font-play font-bold text-base text-justify">Contemporary Luxury penthouses</h3>
                <p className="text-white font-play text-sm sm:text-base text-justify"> Lines that are clean, a color scheme that is neutral but accented with bold finishes and artful touches. This is the design style of the most discerning residents of Business Bay, confident and elegant yet never feel cold or unfeeling.</p>
              </li>
              <li>
                <h3 className="font-play font-bold text-base text-justify">Modern Arabic Fusion</h3>
                <p className="text-white font-play text-sm sm:text-base text-justify"> Regional identity expressed through thoroughly contemporary form. Geometric pattern, warm natural stone, and handcrafted detail woven into a modern spatial experience that feels deeply rooted and genuinely original. A design approach that honours heritage without looking backwards.</p>
              </li>
              <li>
                <h3 className="font-play font-bold text-base text-justify">Minimalist High-End design</h3>
                <p className="text-white font-play text-sm sm:text-base text-justify">TRestraint as the ultimate luxury statement. Every surface considered, every object intentional, every material absolutely perfect. A penthouse that breathes,where negative space is as deliberately designed as every element within it.</p>
              </li>
              <li>
                <h3 className="font-play font-bold text-base text-justify">Classic European style</h3>
                <p className="text-white font-play text-sm sm:text-base text-justify"> Complex, thoughtful, and meant to stand the test of many years. Panelled walls, parquet floors, old brass fittings, and fabrics that grow in charm and gravitas with time. Truly timeless in its deepest meaning.</p>
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

      {/* Gallery Heading */}
      

     

      {/* Emaar Fit-Out Approvals Section */}
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-3xl font-conthrax text-white py-12">
          Penthouse Interior Design in Business Bay Dubai

        </h2>

       
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

      {/* Why Penthouse Owners Choose Us & Testimonial Section */}
      <div className="lg:max-w-[90%] mx-auto bg-black p-6 sm:p-10 rounded shadow space-y-6 mb-12 mt-12">
        <div className="text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-conthrax text-[#caa193] mb-2">
           Why Business Bay Penthouse Owners Choose WE DO
          </h2>
          <p className="font-play text-sm sm:text-base text-white text-justify py-2 leading-relaxed">
           We have designed and delivered penthouses across Business Bay's most prestigious towers. We understand the structural realities, HOA restrictions, and developer requirements of each building. No other residential interior designer Business Bay brings this level of building-specific knowledge to every project. Design, approvals, construction, and styling all managed in-house by one accountable team. Every project begins with a fully itemised quote. Every dirham explained before work begins. 
          </p>
           <p className="font-play text-sm sm:text-base text-white text-justify py-2 leading-relaxed">
          Every penthouse we design is specifically for the space, the views, and the people who will live within it. In a market where delays are the norm, <b className="text-[#caa193]"><a href="https://wedointerior.ae/">WE DO Interior Design & Fitout</a></b> deliver 94% of our projects on or before the agreed completion date. Our commitment does not end at handover. A dedicated snagging period and ongoing aftercare commitment means your penthouse remains exactly as delivered and any issue that arises is resolved promptly and without question.
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
{/* ========================================== */}
        {/*   OUR PENTHOUSE DESIGN PROCESS (ADDED HERE)*/}
        {/* ========================================== */}
        <div className="pt-10 border-t border-gray-800 space-y-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-conthrax text-[#caa193] text-center mb-6 uppercase tracking-wider">
            Our Penthouse Design Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-play text-white">
            <div className="p-5 rounded-lg bg-black-300 border border-[#caa193]/20 space-y-2">
              <h3 className="font-conthrax text-sm text-[#caa193] tracking-wide">Step 1 – Initial Consultation (Week 1):</h3>
              <p className="text-sm sm:text-base text-justify leading-relaxed">
                Visit to the site, brief on your current lifestyle, discussion regarding the budget, and assessment of initial design direction. You can leave at this point without any obligations whatsoever.
              </p>
            </div>
            <div className="p-5 rounded-lg bg-black-300 border border-[#caa193]/20 space-y-2">
              <h3 className="font-conthrax text-sm text-[#caa193] tracking-wide">Step 2 – Design Concepting (Weeks 2-4):</h3>
              <p className="text-sm sm:text-base text-justify leading-relaxed">
                Concept development, which includes creating photorealistic images in 3D software, creating mood boards for material finishes, creating furniture concepts, and initial cost plan.
              </p>
            </div>
            <div className="p-5 rounded-lg bg-black-300 border border-[#caa193]/20 space-y-2">
              <h3 className="font-conthrax text-sm text-[#caa193] tracking-wide">Step 3 – Design Development (Weeks 4-8):</h3>
              <p className="text-sm sm:text-base text-justify leading-relaxed">
                Technical Drawings completed, HOA & Building management submissions, contractor procurement. All happen concurrently to keep you on track with your time line.
              </p>
            </div>
            <div className="p-5 rounded-lg bg-black-300 border border-[#caa193]/20 space-y-2">
              <h3 className="font-conthrax text-sm text-[#caa193] tracking-wide">Step 4 — Construction & Fitout (Weeks 8 to 18):</h3>
              <p className="text-sm sm:text-base text-justify leading-relaxed">
                This is where premium interior fitout Dubai projects are won or lost, on-site management quality, daily decisions, and relentless attention to detail.
              </p>
            </div>
            <div className="p-5 rounded-lg bg-black-300 border border-[#caa193]/20 space-y-2">
              <h3 className="font-conthrax text-sm text-[#caa193] tracking-wide">Step 5 – Styling & Finishing (Weeks 18 to 20):</h3>
              <p className="text-sm sm:text-base text-justify leading-relaxed">
                Installation of all furniture, artwork, textiles and other stylistic elements.
              </p>
            </div>
            <div className="p-5 rounded-lg bg-black-300 border border-[#caa193]/20 space-y-2">
              <h3 className="font-conthrax text-sm text-[#caa193] tracking-wide">Step 6 – Handover (Week 20):</h3>
              <p className="text-sm sm:text-base text-justify leading-relaxed">
                For penthouses in Business Bay, most projects are completed between 18 and 22 weeks from design approval. Smaller renovation projects such as partial renovations or individual room upgrades typically take 10 to 14 weeks.
              </p>
            </div>
          </div>
        </div>

    
      {/* Serving Areas & FAQs Section */}
      <div className="lg:max-w-[80%] mx-auto flex flex-col lg:flex-row items-start gap-6 mb-12">
        <div className="w-full space-y-4">
          
           <h2 className="text-xl sm:text-2xl md:text-3xl font-conthrax text-[#caa193] text-center mt-6 uppercase tracking-wider">
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
          <h2 className="text-lg md:text-xl font-conthrax text-[#caa193] pt-6">
            Penthouse Interior Design Business Bay — Frequently Asked Questions
          </h2>

          <h3 className="text-base md:text-sm font-conthrax text-[#caa193] pt-2 text-justify">
            What is the price of penthouse interior designs in Business Bay?
          </h3>
          <p className="text-sm sm:text-base text-white text-justify font-play">
             The costs of penthouse interior designs in Business Bay vary according to the finishing quality, level of smart home system, and the materials used from AED 1,600 to AED 6,000+. A complete luxurious fit out of a 400 sqm penthouse normally takes an investment of about AED 1.2 to AED 2.5 million. WE DO provides a fully itemised cost plan following the initial site visit and brief at no charge.
          </p>

          <h3 className="text-base md:text-sm font-conthrax text-[#caa193] pt-2 text-justify">
           What is the estimated timeframe for penthouse interior design projects?
          </h3>
          <p className="text-sm sm:text-base text-white text-justify font-play">
             The overall time required for the design and fit-out of a whole penthouse in Business Bay is 18-22 weeks from concept approval until completion. However, partial redesign or refurbishment works on selected areas may be completed within 10-14 weeks. Engaging the <b className="text-[#caa193]"><a href="/interior-design-companies-in-business-bay-dubai">best interior design company Business Bay</a></b> early is the single most effective way to protect both your timeline and your budget.
          </p>

          <h3 className="text-base md:text-sm font-conthrax text-[#caa193] pt-2 text-justify">
            Do you handle HOA and building management approvals? 
          </h3>
          <p className="text-sm sm:text-base text-white text-justify font-play">
           Yes, completely. WE DO manages all building management submissions, HOA approvals, and any master developer NOC requirements specific to your Business Bay tower. We have established relationships with the management teams of Business Bay's major residential buildings and navigate this process efficiently on every project.
          </p>

          <h3 className="text-base md:text-sm font-conthrax text-[#caa193] pt-2 text-justify">
            Can you work in an occupied building without disrupting other residents?
          </h3>
          <p className="text-sm sm:text-base text-white text-justify font-play">
            Absolutely. Our site management protocols are specifically designed for occupied residential towers, strictly controlled working hours, comprehensive dust and noise management, coordinated materials delivery, and continuous communication with building management throughout.
          </p>

          <h3 className="text-base md:text-sm font-conthrax text-[#caa193] pt-2 text-justify">
           Do you give us 3D visualizations before construction starts?
          </h3>
          <p className="text-sm sm:text-base text-white text-justify font-play">
            Yes, We ensure that all our WE DO penthouses have photorealistic 3D visualizations to ensure you see everything about your interior before any work begins.
          </p>

          

          {/* Final Closing Content */}
          <div className="pt-6 border-t border-gray-800">
            <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#caa193] mb-2 text-justify">
             Ready to Transform Your Business Bay Penthouse?
            </h2>
            <p className="text-sm sm:text-base text-white text-justify font-play">
              Your penthouse sits above Dubai's most extraordinary skyline. Its interior should be equally extraordinary. We Deliver Your Dream Interior Design and Fit-Out specializes in penthouse interior designs in Business Bay. Our work in designing and fitting out your penthouse will be tailor-made to match your specifications and expectations. Our promise to you as your one-stop interior design partner is that we will deliver nothing but the best. As a trusted <b className="text-[#caa193]"><a href="https://www.google.com/search?sca_esv=9bf71fb085e6e221&hl=en&authuser=0&sxsrf=ANbL-n6W8aoiZOHSFFHCnz5nS6-Kj_d9kg:1780736318662&kgmid=/g/11pyc3sd1k&q=Interior+Design+Company+Dubai+-+WeDo+Interior+Design+%26+Fit+out&shem=rimspwouohc&shndl=30&source=sh/x/loc/uni/m1/1&kgs=c3496cf507034f55&utm_source=rimspwouohc,sh/x/loc/uni/m1/1">luxury fitout company Dubai</a></b> homeowners rely on for their most important spaces, WE DO brings the same dedication to every penthouse project regardless of scale. Contact WE DO today for your free consultation.
              </p>
          </div>
        </div>
      </div>

    </section>
  );
};

export default DProjects;