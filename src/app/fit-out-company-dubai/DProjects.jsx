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
      quote: "Choosing WE DO as our Fitout company Dubai made the process significantly easier. Communication stayed organised and the finished quality matched expectations.",
      author: "Faraz R. — Villa Owner, Jumeirah ⭐⭐⭐⭐⭐",
    },
    {
      quote: "We wanted an Interior fitout company in Dubai that understood both design and execution. The final result felt aligned from start to finish.",
      author: "Laraib M. — Retail Business Owner, Downtown Dubai ⭐⭐⭐⭐⭐",
    },
    {
      quote: "Their approach felt more structured than previous experiences. Working with one Professional fitout company Dubai team removed a lot of complexity.",
      author: "Affan K. — Hospitality Operator, Business Bay ⭐⭐⭐⭐⭐",
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
        What Our Fitout Clients Say
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
          What to Look For in a Dubai Fitout Company
        </h2>
        
        <div className="space-y-4 text-sm sm:text-base font-play text-white text-left">
          <p className="text-justify">
            Dubai offers many fitout providers. On paper, several may appear similar. But once projects begin, the differences become obvious. The first thing to understand is that a fitout company and an interior design company are not always the same thing. Interior designers often focus on concept creation, layouts, aesthetics, and presentation.
          </p>
          <p className="text-justify">
            Fitout delivery transforms those ideas into physical environments. When those two parts remain disconnected, projects often become more difficult than expected. A designer creates the vision. A contractor interprets it. The client becomes responsible for aligning both. That is why more clients today prefer working with a Fitout company in Dubai that combines design thinking with delivery capability.
          </p>
          <p className="text-justify">
            The second factor is accountability. A reliable Fitout contractor Dubai should have a structured process, clear communication, realistic timelines, and practical experience handling approvals and execution. Many problems appear when companies underestimate coordination. Projects begin with optimism but become delayed because responsibilities are unclear.
          </p>
          <p className="text-justify">
            There are several questions worth asking before appointing a fitout team. 
           
                      </p>
          <ul className="list-disc pl-6 space-y-1 text-justify">
    <li>How is project communication handled?</li>
    <li>Who manages approvals?</li>
    <li>Who coordinates suppliers?</li>
    <li>Who controls quality?</li>
    <li>What happens after handover?</li>
  </ul>
          <p className="text-justify">
           
           
            These answers often reveal more than the quotation itself. Clients should also pay attention to warning signs. Extremely vague proposals, unrealistic schedules, limited local experience, and no clear approval strategy usually create complications later. The Best fitout company Dubai is rarely the one promising the fastest completion. It is usually the one creating the strongest process.
          </p>
        </div>
      </div>

      {/* Split Row – Text + Top Right Image */}
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-3xl font-conthrax text-white py-12 uppercase">
          What Makes WE DO Different as a Fitout Company in Dubai
        </h2>
        
        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          <div className="space-y-6 text-white font-play">
            <p className="text-justify">
              At WE DO, our approach starts with one belief:
              Great interiors are created when design and delivery remain connected. We operate as a fully integrated <b className="text-[#caa193]"><a href="https://wedointerior.ae/"> Fitout and interior design company Dubai</a></b>, bringing planning, approvals, execution, and coordination together from day one. This system eliminates many of the challenges faced by our clients with respect to conventional forms of project execution.
            </p>
            <p className="text-justify">
              Instead of working with numerous consultants and contractors, our client deals with only one team who is accountable for the entire process. The scope of approvals includes items such as Dubai Municipality, Civil Defense, DEWA Coordination, Landlord Approvals, and Project Compliance.
            
              As the process of approval affects the schedules in ways not expected by many people, its integration will make the process much easier.
            </p>
            <p className="text-justify">
              Having more than 15 years of experience and completing more than 200 projects, we have experience working in different conditions, both residential, commercial, retail, and hospitality, in Dubai. Our delivery philosophy focuses on preparation. When projects are planned properly, execution becomes easier. That approach has helped us maintain a strong delivery record while continuing support after completion.
            
              For many clients, this is why WE DO becomes more than an Interior fitout company Dubai. We become the team that protects the final outcome.
            </p>
          </div>

          <div className="rounded-lg overflow-hidden shadow-md">
            <Image
              src="/images/x.learning (8).webp"
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
          Our Fitout Services in Dubai
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          <div className="space-y-6 text-white font-play">
            <p className="text-justify">
              <b className=" text-[#caa193]">Residential Fitout — Villas, Apartments, Penthouses</b><br />
              Residences need to have a personal feel. The Residential fitouts Dubai solutions that our company offers concentrate on designing living spaces that can facilitate comfortable and convenient lifestyles. From villa transformations to the completion of penthouses and the upgrade of apartments, we integrate planning with implementation. Each one of these projects is based on the way people really live within their homes.
            </p>
            <p className="text-justify">
              <b className=" text-[#caa193]">Commercial Fitout — Offices, Retail, Showrooms</b><br />
              Commercial interiors directly influence performance. Customers respond to environments. Teams work differently depending on layout. Brands become stronger through physical experience. Our Commercial fitout company Dubai services support offices, retail environments, showrooms, and customer-facing spaces designed around both operations and experience.
            </p>
            <p className="text-justify">
              <b className=" text-[#caa193]">Hospitality Fitout — Restaurants, Cafes, Hotels</b><br />
              Hospitality projects require balance. Spaces must feel inviting while operating efficiently. Front-of-house experience and back-of-house functionality need equal attention. Our hospitality fitout process focuses on atmosphere, flow, and long-term durability.
            </p>
            <p className="text-justify">
              <b className=" text-[#caa193]">Renovation Fitout — Existing Spaces, New Vision</b><br />
              Existing spaces often hold untapped potential. Rather than relocating, many clients choose renovation to improve how environments perform. We manage upgrades, transformations, and repositioning projects with minimal disruption.
            </p>
            <p className="text-justify">
              <b className=" text-[#caa193]">Turnkey Fitout — Complete Delivery, Move-In Ready</b><br />
              Our turnkey delivery model allows clients to work with one integrated team. From planning and approvals to installation and completion, everything remains connected. This approach is especially valuable for clients seeking a Luxury fitout company Dubai experience without unnecessary complexity.
            </p>
            <p className="text-justify">
              <b className=" text-[#caa193]">Cat A & Cat B Commercial Fitout</b><br />
              Commercial environments often require different levels of completion. We support both foundational fitout requirements and fully customised workplace delivery.
            </p>
            <p className="text-justify">
              <b className=" text-[#caa193]">FF&E Procurement & Installation</b><br />
              Furniture and finishing selections strongly influence final quality. Our team coordinates procurement and installation to maintain consistency.
            </p>
            <p className="text-justify">
              <b className=" text-[#caa193]">Dubai Municipality Approvals & Compliance</b><br />
              Approvals are built into our workflow rather than treated as a separate stage. This creates better coordination and smoother progress.
            </p>
          </div>

          <div className="rounded-lg overflow-hidden shadow-md">
            <Image
              src="/images/x.learning (9).webp"
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

      {/* Why Families Choose Us & Testimonial Section */}
      <div className="lg:max-w-[90%] mx-auto bg-black p-6 sm:p-10 rounded shadow space-y-6 mb-12 mt-12">
        <h2 className="text-center text-3xl font-conthrax text-white uppercase">Why Dubai Clients Choose WE DO as Their Fitout Company</h2>
        <div className="space-y-6 text-white font-play">
          <p className="text-justify">
            Why us? Clients pick WE DO due to the fact that fitout services call for more than construction skills. It calls for planning, know-how regarding permissions, co-ordination of engineering aspects, delivery and the ability to sustain high quality right throughout the process. The integration process at WE DO eliminates the extra steps and adds order to the whole process for clients all over Dubai. Communication, execution, delivery and support after delivery is what we believe in, since good spaces are not just about aesthetics.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="rounded-lg overflow-hidden shadow-md">
            <Image
              src="/images/x.learning (10).webp"
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
      <div className="lg:max-w-[80%] mx-auto flex flex-col lg:flex-row items-start gap-6 mb-12">
        <div className="w-full space-y-4">
          <div className="space-y-8">
            
            {/* Our Fitout Process — How We Work */}
            <div className="pt-8 border-t border-gray-800 space-y-6">
              <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#caa193] uppercase">
                Our Fitout Process — How We Work
              </h2>
              
              <div className="space-y-4 text-sm sm:text-base font-play text-white text-left">
                <p className="text-justify">
                  Every project starts with understanding. During the initial consultation stage, we define objectives, timelines, priorities, and expectations. Once direction is clear, design concepts and visuals translate ideas into practical environments. Detailed planning follows. Materials, technical coordination, and execution requirements are developed to reduce unnecessary surprises during construction. Approvals management then supports compliance and project progression. After approvals move forward, construction and fitout begin under structured supervision. Throughout delivery, quality inspections remain active.
                </p>
                <p className="text-justify">
                  The objective is not simply completion. It is consistent. The final stage focuses on handover and aftercare. Because handing over the keys should not mean ending support. Timeline expectations depend on project type. Residential projects, hospitality spaces, commercial environments, and turnkey fitouts each require different levels of coordination. We focus on controlled delivery rather than rushed completion.
                </p>
              </div>
            </div>

            {/* Who We Deliver Fitout Projects For */}
            <div className="pt-8 border-t border-gray-800 space-y-6">
              <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#caa193] uppercase">
                Who We Deliver Fitout Projects For
              </h2>
              
              <div className="space-y-4 text-sm sm:text-base font-play text-white text-left">
                <p className="text-justify">
                  We are relied upon by homeowners to provide fitouts for villas and apartments according to their lifestyle and functionality. Businesses opt for our services to create a commercial space that enhances the customer experience and operational efficiency. 
                </p>
                <p className="text-justify">
                  The restaurant and café operators partner with us in creating spaces that offer efficiency and ambiance. Developers choose turnkey delivery to simplify execution across multiple units and project phases. Because every project may look different, but the need for reliable delivery stays the same.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#caa193] uppercase">
              Areas We Deliver Fitout Projects Across Dubai
            </h2>
            <p className="text-sm sm:text-base text-white text-justify font-play">
              Our team delivers projects across major <b className="text-[#caa193]"><a href="https://wedointerior.ae/interior-design-dubai"> residential and commercial locations </a></b> including Downtown Dubai, Business Bay, DIFC, Jumeirah, Dubai Marina, JBR, Palm Jumeirah, Al Barsha, Dubai Hills, Deira, and Bur Dubai. Each location creates different design expectations, authority requirements, and operational needs.
            </p>
            <p className="text-sm sm:text-base text-white text-justify font-play">
              That local understanding helps us adapt while maintaining consistent standards. Clients searching for a Fitout company near me Dubai often discover that experience across multiple communities creates better results than working only within one niche.
            </p>
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
  
></iframe>
          </div>

          <h2 className="text-lg md:text-xl font-conthrax text-[#caa193] pt-6 uppercase">
            Frequently Asked Questions
          </h2>

          <h3 className="text-base md:text-sm font-conthrax text-[#caa193] pt-2 text-justify">
            What is a fitout company and what do they do?
          </h3>
          <p className="text-sm sm:text-base text-white text-justify font-play">
            A fitout company transforms a space into a finished, functional environment through planning, execution, coordination, and completion.
          </p>

         <h3 className="text-base md:text-sm font-conthrax text-[#caa193] pt-2 text-justify">
            How much does a fitout cost in Dubai?
          </h3>
           <p className="text-sm sm:text-base text-white text-justify font-play">
            Project requirements vary depending on scope, finishes, approvals, and complexity.
          </p>

          <h3 className="text-base md:text-sm font-conthrax text-[#caa193] pt-2 text-justify">
            How long does a fitout project take in Dubai?
          </h3>
           <p className="text-sm sm:text-base text-white text-justify font-play">
            Timelines depend on project type and delivery requirements.
          </p>

         <h3 className="text-base md:text-sm font-conthrax text-[#caa193] pt-2 text-justify">
            Do you handle all approvals as part of the fitout service?
          </h3>
           <p className="text-sm sm:text-base text-white text-justify font-play">
            Yes. Approval coordination is included within our process.
          </p>
          
          <h3 className="text-base md:text-sm font-conthrax text-[#caa193] pt-2 text-justify">
            What types of fitout projects do you specialise in?
          </h3>
           <p className="text-sm sm:text-base text-white text-justify font-play">
            Residential, commercial, hospitality, renovation, and turnkey interiors.
          </p>

          <h3 className="text-base md:text-sm font-conthrax text-[#caa193] pt-2 text-justify">
            What areas in Dubai do you cover?
          </h3>
           <p className="text-sm sm:text-base text-white text-justify font-play">
            We deliver projects across major communities throughout Dubai.
          </p>

          <h3 className="text-base md:text-sm font-conthrax text-[#caa193] pt-2 text-justify">
            What is the difference between Cat A and Cat B fitout?
          </h3>
          <p className="text-sm sm:text-base text-white text-justify font-play">
            Cat A focuses on base preparation while Cat B includes customised fitout.
          </p>

          <h3 className="text-base md:text-sm font-conthrax text-[#caa193] pt-2 text-justify">
            How do I choose the right fitout company in Dubai?
          </h3>
           <p className="text-sm sm:text-base text-white text-justify font-play">
            Look for integrated delivery, approvals knowledge, project experience, and transparent communication.
          </p>

          {/* Final Closing Content */}
          <div className="pt-6 border-t border-gray-800">
            <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#caa193] mb-2 text-justify">
              Ready to Work With Dubai's Most Trusted Fitout Company?
            </h2>
            <p className="text-sm sm:text-base text-white text-justify font-play">
              Your project deserves more than separate teams trying to coordinate. Work with one team that plans carefully, builds responsibly, and stays accountable from first conversation to final handover.
            
              Book your free consultation today and <b className="text-[#caa193]"><a href="https://wedointerior.ae/contact-us"> start your project with WE DO Interior Design & Fitout </a></b>.
            </p>
          </div>
        </div>
      </div>

    </section>
  );
};

export default DProjects;