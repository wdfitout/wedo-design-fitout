'use client';

import React from 'react';
import Image from 'next/image';



const TestimonialCarousel = () => {
  const testimonials = [
  {
    quote:
      "WE DO furnished our DaVinci Tower apartment exactly the way we imagined. The custom pieces fit perfectly and the team coordinated every detail from furniture selection to final styling.",
    author: "Da Vinci Tower Resident ",
  },
  {
    quote:
      "We wanted a furnished home without compromising on quality or individuality. WE DO handled sourcing, custom furniture, delivery, and installation smoothly from start to finish.",
    author: "Da Vinci Tower Furniture Client",
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
        What Clients Say
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
  const [activeFAQ, setActiveFAQ] = React.useState(null);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

const faqs = [
  {
    q: "Are Da Vinci Tower apartments delivered furnished?",
    a: "No — they’re handed over fitted with finishes, built-ins, and appliances, but without loose furniture. We supply and install everything from individual pieces to a complete home.",
  },
  {
    q: "Can you furnish only selected rooms?",
    a: "Yes — whether you need a single room, several spaces, or a complete residence furnished, we can tailor the scope accordingly.",
  },
  {
    q: "Do you provide custom furniture in Dubai?",
    a: "Yes — we design and manufacture custom-made furniture to your required dimensions, materials, finishes, and detailing through our own joinery production.",
  },
  {
    q: "Can furniture match the apartment’s existing finishes?",
    a: "Yes — furniture selections can be coordinated with existing stone, wood, metal, leather, and architectural finishes to maintain a cohesive look.",
  },
  {
    q: "How long does furnishing take?",
    a: "Typically 6–10 weeks depending on apartment size, furniture requirements, and production scope. Final timelines are confirmed in your quotation.",
  },
  {
    q: "Do you handle delivery and installation?",
    a: "Yes — our service includes white-glove delivery, assembly, placement, installation, and final styling from start to completion.",
  },
];

  return (
    <section className="px-6 py-5 bg-black-200">

      {/* Testimonial + Image Section */}
      <div className="lg:max-w-[90%] mx-auto bg-black p-6 sm:p-10 rounded shadow space-y-6 mb-12 mt-12">
        <div className="grid md:grid-cols-2 gap-10 items-center">

          <div className="rounded-lg overflow-hidden shadow-md">
            <Image
              src="/images/pjapt (8).webp"
              alt="Elegant interior"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>

          <TestimonialCarousel />
        </div>
      </div>

      {/* FAQ + Map Section */}
      <div className="lg:max-w-[80%] mx-auto flex flex-col lg:flex-row items-start gap-6 mb-12">

        <div className="w-full space-y-4">

          {/* Map Title */}
          <h2 className="text-sm sm:text-xl tracking-widest font-conthrax text-[#caa193] uppercase">
            Serving Da Vinci Tower By Pagani, Business Bay
          </h2>

          {/* Map */}
        <div
  className="w-full rounded-lg overflow-hidden my-4"
  style={{ height: "350px" }}
>
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.5132501242215!2d55.28065467483703!3d25.185908332158952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6982a5262a73%3A0x3a55757167d5d1ca!2sDa%20Vinci%20Tower%20Interiors%20by%20Pagani!5e0!3m2!1sen!2sae!4v1782456393117!5m2!1sen!2sae"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="strict-origin-when-cross-origin"
  />
</div>

         {/* FAQ Title */}
<h2 className="text-base md:text-lg font-conthrax text-[#caa193] pt-6 uppercase">
  Frequently Asked Questions
</h2>

{/* FAQ Accordion (Compact) */}
{faqs.map((item, index) => (
  <div key={index} className="border-b border-gray-800 py-2">

    <button
      onClick={() => toggleFAQ(index)}
      className="w-full flex justify-between items-center text-left"
    >
      <h3 className="text-sm md:text-base font-conthrax text-[#caa193]">
        {item.q}
      </h3>

      <span className="text-[#caa193] text-base leading-none">
        {activeFAQ === index ? "−" : "+"}
      </span>
    </button>

    <div
      className={`overflow-hidden transition-all duration-300 ease-in-out ${
        activeFAQ === index
          ? "max-h-24 opacity-100 mt-1"
          : "max-h-0 opacity-0"
      }`}
    >
      <p className="text-xs sm:text-sm text-white text-justify font-play">
        {item.a}
      </p>
    </div>
  </div>
))}
          {/* Closing Section */}
          <div className="pt-6 border-t border-gray-800">
            <h2 className="text-sm sm:text-xl tracking-widest font-conthrax text-[#caa193] mb-2">
           Furnish your Da Vinci Tower apartment the right way

            </h2>

            <p className="text-sm text-white text-justify font-play">
             Furnishing an Apartment of this calibre should feel effortless considered, discreet, and handled by one team in Business Bay. Tell us about your residence and we'll prepare a tailored proposal.
          

           
              Contact us today for a free consultation and design discussion.
            </p>
          </div>
          

        </div>
      </div>
    </section>
  );
};

export default DProjects;