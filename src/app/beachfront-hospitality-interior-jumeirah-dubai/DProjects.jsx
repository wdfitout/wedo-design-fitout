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
      quote: "WE DO delivered a complete Beachfront Hospitality Interior Jumeirah concept that transformed our venue. Guests now stay longer and consistently comment on the experience.",
      author: "Ahmed R. — Beach Club Operator, Jumeirah ⭐⭐⭐⭐⭐",
    },
    {
      quote: "Their understanding of Hospitality fitout Jumeirah Dubai allowed us to create a venue that performs operationally and still feels premium.",
      author: "Sarah M. — Hospitality Brand Director, Dubai ⭐⭐⭐⭐⭐",
    },
    {
      quote: "From design through execution, the team created a hospitality environment that reflects our beachfront identity perfectly.",
      author: "Omar K. — Boutique Hotel Owner, Jumeirah ⭐⭐⭐⭐⭐",
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
        <h2 className="text-center text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#caa193] uppercase">
          Beachfront Hospitality Is a Different Kind of Design Challenge
        </h2>
        
        <div className="space-y-4 text-sm sm:text-base font-play text-white text-left">
          <p className="text-justify">
            The hospitality industry in Jumeirah is faced with an extremely competitive situation because of the very visible market. Guests will find plenty of options, including beach clubs, top-notch restaurants, lounges by the water, and luxurious hotels a few meters from each other.
          </p>
          <p className="text-justify">
            To ensure the success of a Beachfront hospitality interior design project in Jumeirah, Dubai, it must create varied experiences yet maintain visual continuity.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-justify">
  <li>
    The morning visitors expect light, comfort, and openness.
  </li>
  <li>
    The afternoon visitors seek shade, social comfort zones, and unobstructed ocean views.
  </li>
  <li>
    The evening needs atmosphere, warmth, layers of lighting, and increased guest interaction.
  </li>
  <li>
    But on top of that, the facility needs to be able to survive harsh weather conditions.
  </li>
  <li>
    The salt air might decrease the life span of the finishes.
  </li>
  <li>
    Continuous sunlight affects colours and textures.
  </li>
  <li>
    Sand impacts maintenance and durability.
  </li>
  <li>
    Heavy foot traffic challenges furniture and flooring performance.
  </li>
</ul>
          <p className="text-justify">
            That is why hospitality design for beachfront environments requires a completely different strategy.
          
            Indoor and outdoor areas must feel connected. Service circulation must remain invisible to guests. Seating zones should maximise ocean-facing views while maintaining operational efficiency.
          
            Across Jumeirah’s beachfront hospitality destinations, success often comes down to one question:
          
            Does the venue feel effortless to guests while working efficiently behind the scenes?
          
            That balance is where great hospitality interiors are created.
          </p>
        </div>
      </div>

      {/* Split Row – Text + Top Right Image */}
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-3xl font-conthrax text-white py-12 uppercase">
          What Makes Beachfront Hospitality Interiors Work
        </h2>
        
        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          <div className="space-y-6 text-white font-play">
            <p className="text-justify">
              Creating a memorable hospitality destination involves more than selecting premium furniture or adding luxury finishes.
            </p>
            <p className="text-justify">
              A successful Beachfront Hospitality Interior Jumeirah environment creates emotion while supporting daily business performance.
            </p>
            <p className="text-justify">
              <b className="text-[#caa193]">Day-to-Night Transformation</b><br />
              Beachfront venues experience different audiences throughout the day. Guests who visit in daylight expect openness and energy. Evening visitors expect atmosphere and intimacy. We design layered environments that transition naturally through lighting, textures, layouts, and mood changes without losing brand identity.
            </p>
            <p className="text-justify">
              <b className="text-[#caa193]">Material Performance Without Compromising Style</b><br />
              Luxury appearance matters. But durability matters even more. Commercial beachfront interiors require carefully selected finishes that maintain visual quality under coastal exposure. This creates spaces that continue looking premium despite weather conditions and daily operations.
            </p>
            <p className="text-justify">
              <b className="text-[#caa193]">Sea Views as a Design Feature</b><br />
              The view is already there. Good design makes sure guests experience it. Furniture positioning, circulation planning, focal points, and visual framing all contribute to stronger guest engagement.
            </p>
            <p className="text-justify">
              <b className="text-[#caa193]">Social Visibility Matters</b><br />
              Hospitality marketing increasingly happens through guest content. People photograph arrivals, seating areas, food presentation, bars, and sunset moments. Designing these moments intentionally improves visibility and organic reach.
            </p>
            <p className="text-justify">
              <b className="text-[#caa193]">Strong Brand Identity</b><br />
              A venue should remain recognisable in daylight, at sunset, and after dark. Our design process ensures hospitality brands maintain a strong visual identity across every guest interaction.
            </p>
          </div>

          <div className="rounded-lg overflow-hidden shadow-md">
            <Image
              src="/images/hospitality (5).jpeg"
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
          Our Beachfront Hospitality Interior Design Services
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          <div className="space-y-6 text-white font-play">
            <p className="text-justify">
              <b className="text-[#caa193]">Concept Design & Brand Identity for Beachfront Venues</b><br />
              Every successful venue starts with a clear concept. We translate hospitality goals into complete spatial and visual experiences that support operations and guest engagement. Our concepts establish atmosphere, identity, positioning, and customer expectations.
            </p>
            <p className="text-justify">
              <b className="text-[#caa193]">Space Planning — Indoor, Outdoor & Transitional Zones</b><br />
              Beachfront hospitality depends heavily on movement. Guests transition continuously between entrances, lounges, dining areas, bars, terraces, and beachfront seating. We organise these spaces to improve comfort while supporting smooth operations.
            </p>
            <p className="text-justify">
              <b className="text-[#caa193]">Material Specification for Coastal Commercial Use</b><br />
              Material performance becomes critical in beachfront environments. Our specifications support durability while preserving premium visual standards required for Commercial beachfront fitout Dubai projects.
            </p>
            <p className="text-justify">
              <b className="text-[#caa193]">Lighting Design — Day, Sunset & Evening Scenes</b><br />
              Lighting creates an atmosphere. Our hospitality lighting strategies adapt throughout the day and support changing moods without requiring complete environmental changes.
            </p>
            <p className="text-justify">
              <b className="text-[#caa193]">Bar & F&B Service Area Design</b><br />
              The service environment directly affects operational efficiency. Our team develops layouts that improve staff movement while enhancing guest interaction and visibility.
            </p>
            <p className="text-justify">
              <b className="text-[#caa193]">Furniture & Outdoor Seating Solutions</b><br />
              Furniture selections influence both comfort and commercial performance. We develop seating strategies suited for hospitality use and beachfront conditions.
            </p>
            <p className="text-justify">
              <b className="text-[#caa193]">Shade Structures & Climate Management</b><br />
              Comfort extends guest stay. Integrated shade and environmental strategies improve usability without sacrificing openness.
            </p>
            <p className="text-justify">
              <b className="text-[#caa193]">Dubai Municipality & Beachfront Approvals</b><br />
              Commercial hospitality projects require structured planning. We support project teams through design coordination and approval requirements.
            </p>
          </div>

          <div className="rounded-lg overflow-hidden shadow-md">
            <Image
              src="/images/hospitality (6).jpeg"
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
        <h2 className="text-center text-3xl font-conthrax text-white uppercase">Why Jumeirah Hospitality Operators Choose WE DO</h2>
        <div className="space-y-6 text-white font-play">
          <p className="text-justify">
            Hospitality operators <b className="text-[#caa193]"><a href="https://wedointerior.ae/"> choose WE DO </a></b> because beachfront commercial environments demand specialised thinking. We understand how coastal conditions influence material choices, how guest movement affects operations, and how hospitality spaces must adapt throughout the day.
          
            Our team combines concept creation, interior design, fitout coordination, approvals support, and execution under one process to simplify delivery. Every design decision balances aesthetics with performance so venues continue creating memorable experiences long after opening day.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="rounded-lg overflow-hidden shadow-md">
            <Image
              src="/images/hospitality (7).jpeg"
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
            
            {/* Types of Beachfront Hospitality Venues We Design */}
            <div className="pt-8 border-t border-gray-800 space-y-6">
              <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#caa193] uppercase">
                Types of Beachfront Hospitality Venues We Design
              </h2>
              
              <div className="space-y-4 text-sm sm:text-base font-play text-white text-left">
                <p className="text-justify">
                  <b  className="text-[#caa193]">Beach Clubs — Full Concept & Fitout</b><br />
                  Our Beach club interior design Dubai services focus on creating immersive environments that encourage longer stays and stronger guest engagement. From arrival experiences to entertainment zones and premium seating layouts, every detail supports performance.
                </p>
                <p className="text-justify">
                  <b  className="text-[#caa193]">Beachfront Restaurants & Dining Venues</b><br />
                  Exceptional Beachfront <b className="text-[#caa193]"><a href="https://wedointerior.ae/restaurant-interior-design"> restaurant interior design Jumeirah </a></b> creates memorable dining experiences while improving operational flow. Layouts, atmosphere, service paths, and sea visibility all work together.
                </p>
                <p className="text-justify">
                  <b  className="text-[#caa193]">Beach Lounges & Sunset Bars</b><br />
                  We design premium Beach lounge interior design Jumeirah spaces that transform naturally from relaxed daytime environments into vibrant evening destinations.
                </p>
                <p className="text-justify">
                  <b  className="text-[#caa193]">Boutique Hotels & Resort Interiors</b><br />
                  Our team delivers elevated Boutique hotel interior design Dubai, premium Beach resort interior design Dubai, and complete Hotel interior design Jumeirah Dubai environments focused on guest experience and long-term hospitality value.
                </p>
              </div>
            </div>

            {/* How Design Drives Performance for Beachfront Venues */}
            <div className="pt-8 border-t border-gray-800 space-y-6">
              <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#caa193] uppercase">
                How Design Drives Performance for Beachfront Venues
              </h2>
              
              <div className="space-y-4 text-sm sm:text-base font-play text-white text-left">
                <p className="text-justify">
                  Hospitality interiors influence measurable business outcomes. Thoughtful layouts increase guest dwell time. Comfort and atmosphere encourage additional spending. Visual moments generate social media visibility. Consistent experiences improve customer loyalty. Operational planning supports staff efficiency.
                </p>
                <p className="text-justify">
                  Most importantly, excellent hospitality design allows venues to perform across multiple trading periods without requiring major changes. This flexibility becomes a major advantage in beachfront hospitality environments.
                </p>
              </div>
            </div>
          </div>

          
          <div className="w-full rounded-lg overflow-hidden my-4" style={{ height: "350px" }}>
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

          <h2 className="text-lg md:text-xl font-conthrax text-[#caa193] pt-6 uppercase">
            Frequently Asked Questions
          </h2>

          <h3 className="text-base md:text-sm font-conthrax text-[#caa193] pt-2 text-justify">
            How is beachfront hospitality design different from inland restaurant design?
          </h3>
          <p className="text-sm sm:text-base text-white text-justify font-play pb-6">
            Beachfront projects must consider climate exposure, guest movement, indoor-outdoor integration, and multiple operating atmospheres.
          </p>

          <h3 className="text-base md:text-sm font-conthrax text-[#caa193] pt-2 text-justify">
            What materials survive sand, salt, and sun in a commercial setting?
          </h3>
          <p className="text-sm sm:text-base text-white text-justify font-play pb-6">
            Commercial-grade finishes, treated metals, specialist coatings, and hospitality-grade materials are typically selected.
          </p>

          <h3 className="text-base md:text-sm font-conthrax text-[#caa193] pt-2 text-justify">
            Do you design for both day and night trading?
          </h3>
          <p className="text-sm sm:text-base text-white text-justify font-play pb-6">
            Yes. We develop adaptable environments that perform across changing operating periods.
          </p>

          <h3 className="text-base md:text-sm font-conthrax text-[#caa193] pt-2 text-justify">
            How long does a beachfront venue fitout take?
          </h3>
          <p className="text-sm sm:text-base text-white text-justify font-play pb-6">
            Project timelines vary depending on size, approvals, scope, and complexity.
          </p>

          <h3 className="text-base md:text-sm font-conthrax text-[#caa193] pt-2 text-justify">
            Do you handle Dubai Municipality approvals for beachfront properties?
          </h3>
          <p className="text-sm sm:text-base text-white text-justify font-play pb-6">
            Yes. We support hospitality projects through planning and approval coordination.
          </p>

          <h3 className="text-base md:text-sm font-conthrax text-[#caa193] pt-2 text-justify">
            Can you design outdoor and indoor areas as one concept?
          </h3>
          <p className="text-sm sm:text-base text-white text-justify font-play pb-6">
            Absolutely. Integrated experiences are central to successful beachfront hospitality design.
          </p>
          <div className="space-y-4">
            <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#caa193] uppercase">
              Ready to Build a Beachfront Venue Guests Will Remember?
            </h2>
            <p className="text-sm sm:text-base text-white text-justify font-play">
              Your location may attract guests once. Your experience brings them back.
Create a destination that performs commercially, photographs beautifully, and becomes part of Jumeirah’s hospitality landscape.

              <b className="text-[#caa193]"><a href="https://wedointerior.ae/contact-us"> Book your free site visit today </a></b> and receive an itemised project estimate from WE DO Interior Design & Fitout.

            </p>
            
          </div>
        </div>
      </div>

    </section>
  );
};

export default DProjects;