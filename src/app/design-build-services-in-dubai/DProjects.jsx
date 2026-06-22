'use client';

import React from 'react';
import Image from 'next/image';

const textImage = {
  src: '/images/2wresidence (5).webp',
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
      quote: "Choosing WE DO for our Design and build Dubai project made the entire process easier to manage. The finished result stayed aligned with the original concept.",
      author: "Ahmed R. — Villa Owner, Dubai ★★★★★",
    },
    {
      quote: "Their Interior design and construction Dubai approach gave us confidence throughout delivery and reduced coordination challenges.",
      author: "Sarah M. — Retail Business Owner ★★★★★",
    },
    {
      quote: "Working with one Design and build contractor Dubai team removed unnecessary delays and improved communication from start to finish.",
      author: "Omar K. — Commercial Investor ★★★★★",
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
        What Our Build Clients Say
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
        <h2 className="text-center text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#caa193] uppercase">
          What Design and Build Actually Means
        </h2>
        
        <div className="space-y-4 text-sm sm:text-base font-play text-white text-left">
          <p className="text-justify">
            Many clients hear the phrase design and build but are not always sure how it works.The traditional construction model separates design and execution. A client hires a designer. Concepts and visuals are created. After approvals, contractors are invited to quote and build. Although this seems flexible, it creates handovers between teams at multiple stages. Small details get lost. Budgets change. Technical decisions affect original concepts. Responsibilities become unclear.
          </p>
          <p className="text-justify">
            The Design and build company Dubai model works differently. One integrated team manages the entire process. Design decisions happen with construction realities already considered. Construction planning starts earlier. Communication becomes faster. The approved concept remains protected throughout delivery. This creates better alignment between expectations and results. It also allows projects to move with greater consistency because fewer parties are involved.
         
            This approach works effectively across both Residential design and build Dubai and Commercial design and build Dubai environments. For homeowners, it reduces stress. For businesses, it reduces operational delays. For investors, it creates more predictable outcomes.
          </p>
        </div>
      </div>

      {/* Split Row – Text + Top Right Image */}
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-3xl font-conthrax text-white py-12 uppercase">
          Why Separate Design and Build Is Dubai's Most Common Renovation Mistake
        </h2>
        
        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          <div className="space-y-6 text-white font-play">
            <p className="text-justify">
              Many renovation problems start before construction begins. A common situation looks like this: A client develops a design. The visuals look impressive. A contractor joins later. Site realities create changes. Materials become unavailable. Details are simplified. Costs shift. Construction teams reinterpret the design. Eventually the final space no longer reflects the original vision. The issue is rarely the design. The issue is separation.
            </p>
            <p className="text-justify">
              <b className="text-[#caa193]">When design and execution are disconnected:</b>
            </p>
            <p className="text-justify">
              Communication becomes slower
            </p>
            <p className="text-justify">
              Design intent becomes diluted
            </p>
            <p className="text-justify">
              Multiple revisions become necessary
            </p>
            <p className="text-justify">
              Site decisions affect quality
            </p>
            <p className="text-justify">
              Approvals create additional delays
            </p>
            <p className="text-justify">
              Clients become project managers
            </p>
            <p className="text-justify">
              This is especially common in Dubai where project schedules move quickly and approvals influence timelines. Our Design and build services Dubai model removes this fragmentation. Designers, coordinators, technical teams, and construction specialists collaborate from the beginning. That means decisions happen earlier. Risks are reduced. Execution stays aligned. Most importantly, responsibility stays with one team.
            </p>
          </div>

          <div className="rounded-lg overflow-hidden shadow-md">
            <Image
              src="/images/design (5).jpeg"
              alt="Round luxury bed with fairy lights"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>

      {/* Areas and Building Types Section */}
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-3xl font-conthrax text-white py-12 uppercase">
          Our Design and Build Services in Dubai
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          <div className="space-y-6 text-white font-play">
            <p className="text-justify">
              <b className="text-[#caa193]">Single Point of Contact — Design Through to Handover</b><br />
              Projects become easier when communication becomes simpler. Clients receive one coordinated process rather than managing multiple parties. One team remains responsible throughout.
            </p>
            <p className="text-justify">
              <b className="text-[#caa193]">Residential Design and Build</b><br />
              Our Residential design and build Dubai services support villas, apartments, penthouses, extensions, and complete renovations. We create homes that balance aesthetics, usability, and long-term quality. From layouts and finishes to technical execution and final styling, everything remains connected.
            </p>
            <p className="text-justify">
              <b className="text-[#caa193]">Commercial Design and Build</b><br />
              Commercial projects require strong coordination. Our team delivers offices, hospitality spaces, retail environments, wellness concepts, and mixed-use interiors. Our Interior design and build Dubai process reduces interruptions and supports smoother project delivery.
            </p>
            <p className="text-justify">
              <b className="text-[#caa193]">Interior Fitout Design and Build</b><br />
              Our Design build fitout Dubai solutions combine design development, procurement, coordination, and execution into one streamlined system. This reduces unnecessary complexity.
            </p>
            <p className="text-justify">
              <b className="text-[#caa193]">Renovation Design and Build</b><br />
              Renovations involve additional challenges. Existing conditions often require flexible planning. We coordinate redesign, technical requirements, and implementation under one structure.
            </p>
            <p className="text-justify">
              <b className="text-[#caa193]">Approvals and Project Management</b><br />
              Approvals influence project timelines. Our team supports consultant coordination and Design and build project management Dubai requirements to improve project flow.
            </p>
            <p className="text-justify">
              <b className="text-[#caa193]">Post-Handover Support</b><br />
              Completion should not end the relationship. We continue supporting clients after delivery to maintain confidence and project quality.
            </p>
          </div>

          <div className="rounded-lg overflow-hidden shadow-md">
            <Image
              src="/images/design (6).jpeg"
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
        <h3 className="text-xs sm:text-xl font-conthrax uppercase text-[#caa193]">
          Get In Touch With Us
        </h3>
        <p className="text-sm sm:text-base font-play text-black text-center">
          We are located in the world's luxury city, Dubai        </p>
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

      {/* Why Families Choose Us & Testimonial Section */}
      <div className="lg:max-w-[90%] mx-auto bg-black p-6 sm:p-10 rounded shadow space-y-6 mb-12 mt-12">
        <h2 className="text-center text-3xl font-conthrax text-white uppercase">Why Clients Choose WE DO as Their Design and Build Partner</h2>
        <div className="space-y-6 text-white font-play">
          <p className="text-justify">
            Clients choose WE DO because projects succeed when design and delivery operate together. Our integrated process combines creative thinking, technical coordination, approvals expertise, fitout knowledge, and practical execution into one accountable structure. With experience across residential and commercial sectors throughout Dubai, we help clients reduce complexity while improving project quality. Transparent communication, coordinated planning, reliable timelines, and continued support after handover remain central to how we work.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="rounded-lg overflow-hidden shadow-md">
            <Image
              src="/images/design (7).jpeg"
              alt="Elegant blue bedroom interior"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
          <TestimonialCarousel />
        </div>
      </div>

      {/* Serving Areas & FAQs Section */}
      <div className="lg:max-w-[80%] mx-auto flex flex-col gap-12 mb-12">
        {/* Main Left Content Block (Styles & Properties) */}
        <div className="w-full space-y-12">
          
          {/* Beachfront Design Styles We Deliver */}
          <div className="pt-8 border-t border-gray-800 space-y-6">
            <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#caa193] uppercase">
              How Our Design and Build Process Works
            </h2>
            
            <div className="space-y-4 text-sm sm:text-base font-play text-white text-left">
              <p className="text-justify">
                <b className="text-[#caa193]">Brief & Consultation —</b> Every project starts with understanding goals. We identify expectations, operational requirements, design direction, and practical considerations.
              </p>
              <p className="text-justify">
                <b className="text-[#caa193]">Concept Design & Visuals —</b> Concept development transforms ideas into layouts and visual proposals. This stage aligns ambition with feasibility.
              </p>
              <p className="text-justify">
                <b className="text-[#caa193]">Detailed Design & Cost Planning —</b> Technical detailing and planning reduce uncertainty during construction. Selections and specifications are coordinated early.
              </p>
              <p className="text-justify">
                <b className="text-[#caa193]">Approvals —</b> Required approvals are incorporated into the delivery timeline.
              </p>
              <p className="text-justify">
                <b className="text-[#caa193]">Construction & Build —</b> Execution follows approved documentation while maintaining design integrity. Coordination continues throughout implementation.
              </p>
              <p className="text-justify">
                <b className="text-[#caa193]">Handover & Aftercare —</b> Final review, completion support, and transition planning ensure a smooth project closeout.
              </p>
              <div>
                <b className="text-[#caa193] block mb-2">Typical Timeline Expectations —</b>
                <ul className="list-disc pl-5 space-y-2 text-gray-300">
                  <li>Apartments — shorter delivery periods</li>
                  <li>Villas — staged implementation</li>
                  <li>Retail spaces — approval dependent</li>
                  <li>Commercial interiors — milestone based</li>
                  <li>Larger projects — phased execution</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Types of Beachfront Properties We Design */}
          <div className="pt-8 border-t border-gray-800 space-y-6">
            <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#caa193] uppercase">
              Who We Deliver Design and Build Projects For
            </h2>
            
            <div className="space-y-4 text-sm sm:text-base font-play text-white text-left">
              
              <p className="text-justify">
                <b className="text-[#caa193]">Homeowners — Villas & Apartments —</b> We create complete residential environments with simplified delivery and coordinated execution.
              </p>
              <p className="text-justify">
                <b className="text-[#caa193]">Business Owners — Commercial & Retail —</b> Businesses benefit from faster coordination and reduced operational disruption.
              </p>
              <p className="text-justify">
                <b className="text-[#caa193]">Investors — Residential & Commercial Properties —</b> Our integrated model supports efficient upgrades and improved presentation.
              </p>
              <p className="text-justify">
                <b className="text-[#caa193]">Developers — Fitout Packages —</b> Scalable delivery solutions support phased developments and multiple units.
              </p>
            </div>
          </div>
         
        </div>
{/* New Section: Design and Build vs Traditional Model */}
      <div className="lg:max-w-[80%] mx-auto bg-black p-6 sm:p-10 rounded shadow text-center space-y-6 mb-12">
        <h2 className="text-center text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#caa193] uppercase">
          Design and Build vs Traditional Model — The Real Difference
        </h2>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm sm:text-base font-play text-white border-collapse">
            <thead>
              <tr className="border-b border-gray-800 font-conthrax text-[#caa193] text-xs sm:text-sm uppercase">
                <th className="py-3 px-4">Category</th>
                <th className="py-3 px-4">Traditional Model</th>
                <th className="py-3 px-4">Design & Build</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              <tr>
                <td className="py-3 px-4 font-bold text-gray-300">Design Responsibility</td>
                <td className="py-3 px-4 text-gray-400">Separate</td>
                <td className="py-3 px-4  font-bold">Integrated</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-bold text-gray-300">Construction Coordination</td>
                <td className="py-3 px-4 text-gray-400">Separate</td>
                <td className="py-3 px-4  font-bold">Unified</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-bold text-gray-300">Communication</td>
                <td className="py-3 px-4 text-gray-400">Multiple Channels</td>
                <td className="py-3 px-4  font-bold">Single Contact</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-bold text-gray-300">Quality Ownership</td>
                <td className="py-3 px-4 text-gray-400">Shared</td>
                <td className="py-3 px-4  font-bold">One Team</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-bold text-gray-300">Delivery Process</td>
                <td className="py-3 px-4 text-gray-400">Fragmented</td>
                <td className="py-3 px-4  font-bold">Connected</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-bold text-gray-300">Decision Speed</td>
                <td className="py-3 px-4 text-gray-400">Slower</td>
                <td className="py-3 px-4  font-bold">Faster</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-bold text-gray-300">Outcome Consistency</td>
                <td className="py-3 px-4 text-gray-400">Variable</td>
                <td className="py-3 px-4  font-bold">Controlled</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <p className="text-justify text-sm sm:text-base font-play text-white pt-4 border-t border-gray-800">
          The advantage is not simply efficiency. It is accountability. One team owns the process and the outcome.
        </p>
      </div>
        {/* Map Container Block */}
        <div className="w-full rounded-lg overflow-hidden shadow-lg my-4" style={{ height: "350px" }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28882.11586523091!2d55.22557672152865!3d25.194273577322997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43da3ca3ffb7%3A0x6fb26207f2df47b3!2sJumeirah%20-%20Dubai!5e0!3m2!1sen!2sae!4v1717680000000!5m2!1sen!2sae"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* FAQ Section */}
        <div className="w-full pt-8 border-t border-gray-800">
          <h2 className="text-lg md:text-xl font-conthrax text-[#caa193] uppercase mb-6">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6 text-sm sm:text-base font-play text-white text-left">
            <div className="space-y-2">
              <h3 className="font-conthrax text-[#caa193] text-sm sm:text-base">
                What is design and build and how is it different?
              </h3>
              <p className="text-justify text-gray-300">
                It combines design and construction into one coordinated service model.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-conthrax text-[#caa193] text-sm sm:text-base">
                Is design and build more expensive than hiring separately?
              </h3>
              <p className="text-justify text-gray-300">
                Project requirements differ, but integrated planning often improves efficiency and coordination.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-conthrax text-[#caa193] text-sm sm:text-base">
                How long does a design and build project take in Dubai?
              </h3>
              <p className="text-justify text-gray-300">
                Timelines depend on project type, approvals, and delivery scope.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-conthrax text-[#caa193] text-sm sm:text-base">
                Do you handle all approvals as part of the design and build service?
              </h3>
              <p className="text-justify text-gray-300">
                Yes. Approval coordination forms part of our integrated process.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-conthrax text-[#caa193] text-sm sm:text-base">
                What types of projects do you take on?
              </h3>
              <p className="text-justify text-gray-300">
                Residential, commercial, fitout, renovation, and interior transformation projects.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-conthrax text-[#caa193] text-sm sm:text-base">
                How do I know the design won't change when construction starts?
              </h3>
              <p className="text-justify text-gray-300">
                Because planning and execution are developed together from the beginning, alignment remains stronger throughout delivery.
              </p>
            </div>
            
            <div className="pt-8 border-t border-gray-800 space-y-6">
              <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#caa193] uppercase">
                Ready to Transform Your Bedroom?
              </h2>
              <p className="text-justify">
            Your project should not depend on multiple teams trying to coordinate. Work with one partner that designs smarter, builds responsibly, and stays accountable from first consultation to final handover.
Book your free consultation today and receive a clear roadmap for your project with WE DO Interior Design & Fitout.
          </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DProjects;