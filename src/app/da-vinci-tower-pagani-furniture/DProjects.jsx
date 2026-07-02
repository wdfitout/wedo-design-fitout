'use client';

import React from 'react';
import Image from 'next/image';



const TestimonialCarousel = () => {
  const testimonials = [
  {
    quote:
      "We chose Da Vinci Tower for the design identity of the building, and we wanted our furniture to genuinely match that level. WE DO understand that immediately, every piece feels made for this specific apartment, not just placed inside it.",
    author: "Mr.Khalil, Da Vinci Tower, Business Bay ",
  },
  {
    quote:
      "What stood out was having one team responsible for everything. No chasing a furniture company while waiting on a separate joinery workshop. Everything arrived on the date we were promised.",
    author: "L.Petrov, Da Vinci Tower, Business Bay",
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


const faqs = [
  {
    q: "How much does it cost to furnish an apartment in Da Vinci Tower by Pagani?",
    a: "Through WE DO Interior, a full furniture package for a Da Vinci Tower unit starts around AED 500,000 for a 2-bedroom and scales up to AED 850,000 for larger 4-bedroom or duplex layouts, compared to AED 2-3 million for the developer's branded furniture package.",
  },
  {
    q: "Is your furniture the same as official Pagani Arte furniture?",
    a: "No, we are an independent fit-out company, not licensed by Pagani Automobili or DarGlobal. We source equivalent grade leather, marble, and carbon-fibre-finish materials and replicate the design language and craftsmanship, without the Pagani brand licensing or nameplate.",
  },
  {
    q: "What should I do first after taking handover of my Da Vinci Tower apartment?",
    a: "Complete snagging before anything else. Walk the unit and log any finishing issues before furniture moves in. Once snagging is cleared, confirm DEWA connection and building access approval, then start the furniture decision, since that typically takes 8-12 weeks from measurement to installation.",
  },
  {
    q: "Should I furnish through the developer's package or independently?",
    a: "It depends on your goal. If a fully Pagani-branded nameplate matters for resale, the developer package holds that value. If you're furnishing to live in the unit or rent it out, the AED 1.4-2.4 million saving from independent furnishing is significant capital freed up elsewhere.",
  },
  {
    q: "Do you handle snagging-related furniture adjustments after handover?",
    a: "Yes. We recommend furnishing only after snagging is resolved, and our team times delivery and installation around your building's access and loading bay schedule to avoid conflicts with any outstanding finishing work.",
  },
  {
    q: "Who is the best interior design company for Da Vinci Tower and Business Bay?",
    a: "WE DO Interior Design & Fit-Out has completed 500+ residential and commercial fit-out projects across Dubai over 15+ years, rated 4.9★ on Google, with an in-house joinery and upholstery workshop, one of the few companies able to recreate that premium material palette at scale without third-party contractor markups.",
  },
  {
    q: "Do you furnish Da Vinci Tower units for owners living outside the UAE?",
    a: "Yes. We run a fully remote process, floor plan review, 3D renders approval, material samples, and progress updates through installation — for international owners who won't be in Dubai during furnishing.",
  },
  {
    q: "How long does it take to furnish a Da Vinci Tower apartment after handover?",
    a: "A full apartment package typically takes 8-12 weeks from design approval to installation, once snagging is resolved, timed around Da Vinci Tower's specific building access and loading bay scheduling.",
  },
  {
    q: "Can you match the exact sofa, dining, and bedroom sets shown in Da Vinci Tower marketing?",
    a: "We can design and build pieces that closely match the silhouette, materials, and finish shown in Da Vinci Tower's marketing imagery. We don't reproduce trademarked Pagani branding or badging, but the visual result is built to the same standard.",
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
{/* VISIT US */}

<h3 className="mt-10 text-lg lg:text-xl font-conthrax text-[#caa193] mb-5">
  Visit Us
</h3>

<div className="border border-[#caa193]/10 bg-black/30 p-6">

  <p className="font-play text-sm leading-7 text-white/85">
    <strong className="text-white">WE DO Interior Design &amp; Fit-Out</strong>
  </p>

  <p className="mt-2 font-play text-sm leading-7 text-white/80">
    WH-05 A, Jebel Ali Industrial 1, Dubai, UAE
  </p>

  <p className="mt-2 font-play text-sm leading-7 text-white/80">
    +971 58 807 5603 | info@wedointerior.ae
  </p>

  <p className="mt-4">
    <a
      href="https://maps.google.com/?cid=1335620002385386514"
      target="_blank"
      rel="noopener noreferrer"
      className="font-conthrax text-[11px] uppercase tracking-[2px] text-[#caa193] hover:text-white transition-colors"
    >
      View Google Business Profile →
    </a>
  </p>

</div>

{/* MAP */}

<div className="mt-6 overflow-hidden border border-[#caa193]/10">
  <iframe
    src="https://maps.google.com/maps?q=24.9901875,55.1259375&z=15&output=embed"
    width="100%"
    height="350"
    style={{ border: 0 }}
    loading="lazy"
    title="WE DO Interior Design & Fit-Out — Jebel Ali, Dubai"
  />
</div>
      {/* FAQ + Map Section */}
      <div className="lg:max-w-[80%] mx-auto flex flex-col lg:flex-row items-start gap-6 mb-12">

        <div className="w-full space-y-4">

         <div className="space-y-3 mt-5">
  <p className="text-[#caa193] text-xs tracking-[3px] uppercase font-conthrax mb-3">
    FAQs
  </p>

  <h2 className="text-xl text-white lg:text-2xl font-conthrax mb-8">
    Frequently Asked Questions
  </h2>

  {faqs.map((item, index) => (

    <div
      key={index}
      className="border-l-2 border-[#caa193] pl-4 py-2"
    >

      <h3 className="text-[14px] md:text-[15px] font-conthrax text-[#caa193] mb-1 leading-6">
        {item.q}
      </h3>

      <p className="font-play text-[13px] md:text-[14px] text-white/75 leading-6">
        {item.a}
      </p>

    </div>

  ))}

</div>
         {/* CTA */}

<div className="mt-12  border border-[#caa193]/20 bg-[#111] p-8 text-center">

  <p className="text-[#caa193] text-xs tracking-[3px] uppercase font-conthrax mb-3">
    Get a Free Quote
  </p>

  <h2 className="text-xl text-white lg:text-2xl font-conthrax mb-5">
    Furnishing a unit in Da Vinci Tower?
  </h2>

  <p className="font-play text-[15px] text-white/80 leading-7 max-w-3xl mx-auto">
    Send us your floor plan for a free quote and 3D render. WhatsApp +971 58 807 5603 or email info@wedointerior.ae.
  </p>

  <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">

    <a
      href="https://wa.me/971588075603"
      target="_blank"
      rel="noopener noreferrer"
      className="px-7 py-3 rounded-md bg-[#caa193] text-black font-conthrax text-xs uppercase tracking-wider hover:bg-[#d8b2a5] transition-colors"
    >
      WhatsApp Us
    </a>

    <a
      href="mailto:info@wedointerior.ae"
      className="px-7 py-3 rounded-md border border-[#caa193] text-[#caa193] font-conthrax text-xs uppercase tracking-wider hover:bg-[#caa193] hover:text-black transition-colors"
    >
      Email Us
    </a>

  </div>

</div>

        </div>
      </div>
    </section>
  );
};

export default DProjects;