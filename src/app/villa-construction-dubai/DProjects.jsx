'use client';

import React from 'react';
import Image from 'next/image';

const textImage = {
  src: '/images/pjapt (5).webp',
  link: '/office-interior-design-trends-in-business-bay',
  title: 'Interior Design Trends In Business Bay'
};

const TestimonialCarousel = () => {
  const testimonials = [
    {
      quote: "Choosing WE DO for our Villa construction Dubai project gave us confidence from planning to completion. The finished home feels exactly how we imagined.",
      author: "Ahmed R. — Homeowner, Dubai Hills ⭐⭐⭐⭐⭐",
    },
    {
      quote: "Their Villa building Dubai process created clarity throughout construction and removed the coordination challenges we expected.",
      author: " Sarah M. — Villa Owner, Jumeirah ⭐⭐⭐⭐⭐",
    },
    {
      quote: "Working with one Villa contractor Dubai team made delivery smoother and the overall experience significantly easier.",
      author: "Omar K. — Property Investor ⭐⭐⭐⭐⭐",
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
        What Our Villa Construction Clients Say
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
        <div className="space-y-4 text-sm sm:text-base font-play text-white ">
          <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#caa193] uppercase">
            Our Villa Construction Services in Dubai
          </h2>

          <ul className="list-decimal pl-5 space-y-4 text-[#caa193]">
            <li>
              <h3 className="font-play font-bold text-base text-justify">New Villa Construction — Full Build</h3>
              <p className="text-white font-play text-sm sm:text-base text-justify">Our New villa construction Dubai service supports homeowners developing completely new residential properties from empty plots through final handover. This process includes planning coordination, technical delivery, structural execution, finishing, and completion support. Every stage is designed to remain connected so the final home reflects the original intention.</p>
            </li>
            <li>
              <h3 className="font-play font-bold text-base text-justify">Custom Villa Design & Build</h3>
              <p className="text-white font-play text-sm sm:text-base text-justify">No two families live the same way. That is why our Custom villa construction Dubai and <b className="text-[#caa193]"><a href="https://wedointerior.ae/design-build-services-in-dubai"> Villa design and build Dubai services </a></b> focus on creating homes around individual lifestyles instead of standard formulas. Some homeowners prioritise entertainment spaces. Others focus on privacy, family living, natural light, wellness, or future flexibility. We build around those priorities.</p>
            </li>
            <li>
              <h3 className="font-play font-bold text-base text-justify">Structural & Civil Works</h3>
              <p className="text-white font-play text-sm sm:text-base text-justify">Strong homes begin below the surface. Structural quality influences longevity, stability, and performance. Our construction teams coordinate civil and structural execution with close attention to sequencing and technical standards.</p>
            </li>
            <li>
              <h3 className="font-play font-bold text-base text-justify">MEP — Mechanical, Electrical & Plumbing</h3>
              <p className="text-white font-play text-sm sm:text-base text-justify">Good homes feel effortless to live in. That experience depends heavily on systems homeowners rarely notice directly. Integrated MEP planning improves comfort, efficiency, and long-term functionality.</p>
            </li>
            <li>
              <h3 className="font-play font-bold text-base text-justify"><b className="text-[#caa193]"><a href="https://wedointerior.ae/villa-interior-design-dubai"> Interior Fitout & Finishing </a></b></h3>
              <p className="text-white font-play text-sm sm:text-base text-justify">Construction becomes a home through finishing. Material transitions, detailing, lighting integration, cabinetry, and final environments determine how the villa feels once occupied.</p>
            </li>
            <li>
              <h3 className="font-play font-bold text-base text-justify"><b className="text-[#caa193]"><a href="https://wedointerior.ae/landscape-design-dubai"> Landscaping & External Works Coordination </a></b></h3>
              <p className="text-white font-play text-sm sm:text-base text-justify">The experience of a villa begins before entering the front door. External areas create arrival moments and shape everyday living.</p>
            </li>
            <li>
              <h3 className="font-play font-bold text-base text-justify">Dubai Municipality Approvals & Permits</h3>
              <p className="text-white font-play text-sm sm:text-base text-justify">Approval coordination remains integrated into delivery planning to support smoother progress.</p>
            </li>
            <li>
              <h3 className="font-play font-bold text-base text-justify">Project Management — Start to Handover</h3>
              <p className="text-white font-play text-sm sm:text-base text-justify">Construction requires constant alignment between teams, schedules, and decisions. Our management process keeps everything moving in the same direction.</p>
            </li>
          </ul>
        </div>
      </div>

      {/* Split Row – Text + Top Right Image */}
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-3xl font-conthrax text-white py-12 uppercase">
          Building a Villa in Dubai — What You Need to Know First
        </h2>

        {/* Section 1: Text Left, Image Right */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          <div className="space-y-6 text-white font-play">
            <p className="text-justify">
              Building a villa in Dubai creates opportunities that very few property decisions can offer. You are not selecting from existing layouts or compromising around previous choices. Instead, you shape the home around your lifestyle, your priorities, and the way you want everyday life to work. That freedom also creates responsibility. Villa construction is rarely as straightforward as clients initially expect because the visible construction phase represents only part of the process. Before construction starts, decisions around planning, coordination, authority requirements, technical integration, design direction, and project sequencing already influence timelines and outcomes.
            </p>
            <p className="text-justify">
              Dubai’s residential market includes different development conditions depending on location, plot requirements, authority approvals, and project objectives. This means successful projects are rarely created through isolated decisions. Many villa projects encounter problems because the process becomes fragmented. A designer develops concepts. Technical drawings move elsewhere. Contractors interpret the information later. Site decisions begin changing the original vision. Eventually the homeowner becomes responsible for coordinating everyone. This approach often creates unnecessary complexity.
            </p>
            <p className="text-justify">
              As a specialist <b className="text-[#caa193]"><a href="https://wedointerior.ae/complete-villa-construction-dubai"> Villa construction company Dubai </a></b>, our process connects every stage under one delivery structure. Design teams understand construction realities. Execution teams understand design priorities. Approvals remain aligned. Communication becomes simpler. Clients receive one clear process instead of multiple disconnected conversations. For anyone planning to build a villa in Dubai, integration is often the difference between a stressful experience and a successful one.
            </p>
          </div>

          <div className="rounded-lg overflow-hidden shadow-md">
            <Image
              src="/images/construction (5).jpeg"
              alt="Luxury Villa Structure"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>

      {/* Why Villa Construction Needs More Than Just a Contractor */}
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-3xl font-conthrax text-white py-12 uppercase">
          Why Villa Construction Needs More Than Just a Contractor
        </h2>

        {/* Section 1: Text Left, Image Right */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          <div className="space-y-6 text-white font-play">
            <div className="space-y-4 text-sm sm:text-base font-play text-white text-left">
              <p className="text-justify">
                Many homeowners assume construction quality is mainly determined by who is on site. In reality, quality is often determined long before construction begins. Most problems appear when drawings and execution stop speaking the same language. Architectural concepts can look exceptional. But if technical coordination, construction sequencing, and finishing standards are not managed together, the final result starts moving away from the original intention. This is one of the biggest reasons homeowners feel disappointed after completion despite investing heavily.
              </p>
              <p className="text-justify">
                Construction becomes reactive. Decisions become rushed. Timelines extend. Finishes become inconsistent. The problem is rarely effort. The problem is separation. Our integrated Villa construction and design Dubai approach keeps the entire project connected. Design decisions are reviewed against practical delivery requirements. Construction planning happens with final outcomes in mind. Interior detailing is considered early. Approvals remain connected to scheduling. This structure reduces common project issues while creating stronger control over the final result. Another major challenge in Dubai residential construction is timing.
              </p>
              <p className="text-justify">
                Many villa delays happen because decisions are postponed until site work begins. When planning, coordination, and delivery operate together, projects move with more confidence. Quality also becomes easier to maintain. When one team owns both planning and execution, responsibility becomes clearer. That accountability creates better results.
              </p>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden shadow-md">
            <Image
              src="/images/construction (6).jpeg"
              alt="Villa Construction Site Execution"
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
           We are located in the world's luxury city, Dubai         </p>
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

      {/* Why Dubai Villa Owners Choose WE DO for Construction */}
      <div className="lg:max-w-[90%] mx-auto bg-black p-6 sm:p-10 rounded shadow space-y-6 mb-12 mt-12">
        <div className="space-y-6">
          <h2 className="text-center text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#caa193] uppercase">
            Why Dubai Villa Owners Choose WE DO for Construction
          </h2>
          
          <div className="space-y-4 text-sm sm:text-base font-play text-white text-left">
            <p className="text-justify">
              Villa owners choose WE DO because homes deserve more than disconnected project delivery. With our integrated approach, we are able to put together our design abilities, approvals knowledge, technical coordination skills, construction services, fitout services, and post-completion services all into one structure. Our aim is to build a project that remains consistent from the first point of contact to completion. The process becomes much easier for our clients. Our communication skills, dependability, and design ability are highly appreciated by our clients.
            </p>
            
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="rounded-lg overflow-hidden shadow-md">
            <Image
              src="/images/construction (7).jpeg"
              alt="Premium Villa Execution Finish"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Testimonial Block */}
          <TestimonialCarousel />
        </div>
      </div>

      {/* Serving Areas & FAQs Section */}
      <div className="lg:max-w-[80%] mx-auto flex flex-col lg:flex-row items-start gap-6 mb-12">
        <div className="w-full space-y-4">
          <div className="space-y-8">
            
            <div className="pt-6 border-t border-gray-800 space-y-6">
              <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#caa193] uppercase">
                Our Villa Construction Process
              </h2>
              
              <div className="space-y-4 text-sm sm:text-base font-play text-white text-left">
                <p className="text-justify">
                  Every villa begins differently but successful delivery follows a structured approach. The process starts with consultation and site assessment where project priorities, site opportunities, technical requirements, and expectations become clear. Once direction is established, design development begins. Layouts evolve. Technical integration starts. Approvals are coordinated. Construction planning becomes more detailed.
                </p>
                <p className="text-justify">
                  Structural works then move into execution with sequencing planned to support later stages. As construction progresses, service integration and interior planning continue in parallel. This reduces unnecessary interruptions later. Interior fitout transforms the structure into a complete living environment. Finishing details receive attention because this is where quality becomes visible. External works complete the experience. The final stage focuses on handover, final review, and post-completion support. Each villa timeline varies depending on scope, size, approvals, and complexity but structured planning creates more predictable delivery.
                </p>
              </div>
            </div>
{/* Types of Villa Construction Projects We Deliver Section */}
            <div className="pt-8 border-t border-gray-800 space-y-6">
              <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#caa193] uppercase text-justify">
                Types of Villa Construction Projects We Deliver:
              </h2>
              <div className="space-y-4 text-sm sm:text-base font-play text-white text-left">
               <p className="text-justify">
                  Every villa project starts with different priorities. Some clients begin with empty land. Others already own properties that need transformation. Our team supports custom-built villas developed from new plots, luxury residential environments designed around premium living standards, villa extensions that expand existing spaces while maintaining consistency, complete demolish-and-rebuild projects that replace older properties with entirely new homes, and investment-focused villa developments created to support resale or rental performance.
Our <b className="text-[#caa193]"><a href="https://wedointerior.ae/gallery"> Luxury villa construction Dubai projects </a></b> place equal attention on design quality and execution quality because one without the other never creates exceptional results.
                </p>
              </div>
            </div>
            {/* Dubai Areas We Build Villas In Section */}
            <div className="pt-8 border-t border-gray-800 space-y-6">
              <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#caa193] uppercase">
                Dubai Areas We Build Villas In
              </h2>
              <div className="space-y-4 text-sm sm:text-base font-play text-white text-left">
                <p className="text-justify">
                  Our villa construction experience extends across some of Dubai’s most established residential communities. We support projects in:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-[#caa193]">
                  <li className="text-white font-play text-sm sm:text-base">Jumeirah, Al Barsha, and Mirdif</li>
                  <li className="text-white font-play text-sm sm:text-base">Dubai Hills Estate</li>
                  <li className="text-white font-play text-sm sm:text-base">Arabian Ranches</li>
                  <li className="text-white font-play text-sm sm:text-base">Palm Jumeirah</li>
                  <li className="text-white font-play text-sm sm:text-base">Mohammed Bin Rashid City</li>
                  <li className="text-white font-play text-sm sm:text-base">Nad Al Sheba and Umm Suqeim</li>
                </ul>
                <p className="text-justify pt-2">
                  Each location creates different planning conditions, architectural expectations, and project requirements. Our process adapts accordingly while maintaining consistency in delivery standards.
                </p>
              </div>
            </div>
<div className="w-full rounded-lg overflow-hidden my-4" style={{ height: "350px" }}>
           <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d231011.6968037307!2d55.111943845625345!3d25.193245468798935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43348a6d4bc5%3A0x62a339193f0ac809!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sae!4v1719380000000!5m2!1sen!2sae"
  width="100%"
  height="100%"
  style={{ border: 0, minHeight: '450px' }} // minHeight layout maintain rakhne ke liye hai
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  title="WE DO Villa Construction Dubai Location"
></iframe>
          </div>
            {/* Frequently Asked Questions Section */}
            <div className="pt-8 border-t border-gray-800 space-y-6">
              <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#caa193] uppercase">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4 text-sm sm:text-base font-play text-white text-left">
                <ul className="space-y-4 text-[#caa193]">
                  <li>
                    <h3 className="font-play font-bold text-base text-justify">How long does villa construction take in Dubai?</h3>
                    <p className="text-white font-play text-sm sm:text-base text-justify">Project timelines depend on approvals, complexity, scale, and specification requirements.</p>
                  </li>
                  <li>
                    <h3 className="font-play font-bold text-base text-justify">How much does it cost to build a villa in Dubai?</h3>
                    <p className="text-white font-play text-sm sm:text-base text-justify">Investment varies depending on project size, finishes, site conditions, and overall scope.</p>
                  </li>
                  <li>
                    <h3 className="font-play font-bold text-base text-justify">Do you handle Dubai Municipality approvals for construction?</h3>
                    <p className="text-white font-play text-sm sm:text-base text-justify">Yes. Approval coordination forms part of our integrated process.</p>
                  </li>
                  <li>
                    <h3 className="font-play font-bold text-base text-justify">Can you build a villa from an existing architectural design?</h3>
                    <p className="text-white font-play text-sm sm:text-base text-justify">Yes. Existing concepts can be reviewed and developed for construction delivery.</p>
                  </li>
                  <li>
                    <h3 className="font-play font-bold text-base text-justify">What areas in Dubai do you build villas in?</h3>
                    <p className="text-white font-play text-sm sm:text-base text-justify">We support projects across major villa communities throughout Dubai.</p>
                  </li>
                  <li>
                    <h3 className="font-play font-bold text-base text-justify">What is included in a full villa construction project?</h3>
                    <p className="text-white font-play text-sm sm:text-base text-justify">Scope may include planning, approvals, construction, MEP coordination, fitout, finishing, and handover.</p>
                  </li>
                </ul>
              </div>
            </div>
<div className="pt-6 border-t border-gray-800">
            <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#caa193] mb-2 text-justify">
             Ready to Build Your Dream Villa in Dubai?
            </h2>
            <p className="text-sm sm:text-base text-white text-justify font-play">
            Your villa should not feel like a collection of contractors and decisions. It should feel like one clear vision delivered properly. Work with one team that manages the details, protects the design, and builds to the standard your home deserves.
Book your free consultation today and start your villa journey with WE DO Interior Design & Fitout.
            </p>
          </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default DProjects;