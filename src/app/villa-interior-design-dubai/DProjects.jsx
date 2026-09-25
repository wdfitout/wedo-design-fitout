'use client';

import React from 'react';
import Image from 'next/image';



const TestimonialCarousel = () => {
  const testimonials = [
  {
    quote:
      "We Do Interior Design & Fitout is a good choice for villa interior design in Dubai, especially in Emirates Hills. Their design team is highly professional and knows how to make your place stylish and comfortable. They created my luxury villa dream into a reality. I love their work! Highly recommended for interior design and fit-out projects in Emirates Hills.",
    author: " Amelia Parker, Emirates Hills",
  },
  {
    quote:
      "We had a great experience with WE DO for our villa in District One. The team understood our requirements, helped with the design and finishes, and paid close attention to the details. Very happy with how everything turned out.",
    author: "Omar Khalid, District One",
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
    q: "Who is the best villa interior design company in Dubai?",
    a: " It depends on what you need, but WE DO Interior Design & Fit-Out is a strong fit for villa owners who want design and construction under one contract: 11+ years' experience, 250+ completed projects, ISO 9001/14001/45001 certification, an in-house joinery factory, and direct approval relationships with Dubai Civil Defence, Dubai Municipality, Emaar and Damac.",
  },
  {
    q: "How much does villa interior design cost in Dubai? ",
    a: "Villa interior design and fit-out in Dubai typically ranges from approximately AED 80,000-150,000 for partial projects to AED 250,000-1,000,000+ for a full design-and-fit-out, depending on villa size, finish level and scope. WE DO provides a fixed, itemized quote after an initial site visit rather than a flat price list.",
  },
  {
    q: "What's the difference between an interior designer and a fit-out company?",
    a: "An interior designer plans the look and layout, furniture, materials, and colour schemes. A fit-out company executes the physical build: joinery, MEP, flooring, and installation. WE DO combines both in-house, so the same team that designs your villa also builds it, under one contract and one point of contact.",
  },
  {
    q: "Can WE DO handle Dubai municipality and developer approvals? ",
    a: "Yes. WE DO works directly with Dubai Civil Defence (DCD) and Dubai Municipality (DM) on interior design and fit-out approvals, and coordinates directly with developers including Emaar and Damac, useful for villa owners handling a post-handover fit-out on a new-build property.",
  },
  {
    q: "How long does a villa interior design and fit-out project take? ",
    a: " Timelines depend on villa size and scope. A design proposal typically takes 2-4 weeks after the initial site visit; full execution and handover for a mid-to-large villa generally runs several months. WE DO confirms an exact timeline as part of the fixed quote.",
  },
  {
    q: "Which Dubai villa communities does WE DO design for?",
    a: "WE DO has completed villa interior design projects in Emirates Hills, MBR City/District One, Majan and Al Manara. WE DO also takes on villa interior design projects across other established Dubai communities, including Dubai Hills Estate, Arabian Ranches, Palm Jumeirah, Jumeirah and Al Barsha, on request.",
  },
  {
    q: "How do I choose a villa interior design company in Dubai?",
    a: "Among the many villa interior design companies in Dubai, look for three things: whether design and fit-out run under one contract or two, real certifications (ISO, DED licensing) rather than marketing claims, and a completed-project portfolio in villas similar to yours. Ask for a fixed, itemized quote rather than a per-square-foot estimate alone.",
  },
  
];
  return (
    <section className="px-6 py-5 bg-black-200">

      {/* Testimonial + Image Section */}
      <div className="lg:max-w-[90%] mx-auto bg-black p-6 sm:p-10 rounded shadow space-y-6 mb-12 mt-12">
        <div className="grid md:grid-cols-2 gap-10 items-center">

          <div className="rounded-lg overflow-hidden shadow-md">
            <Image
              src="/images/majanvilla (11).webp"
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

<h2 className="mt-10 text-lg lg:text-xl font-conthrax text-[#caa193] mb-5">
 Ready to Start Your Villa Project?

</h2>
<p className="font-play text-sm leading-7 text-white/85">WE DO Interior Design & Fit-Out handles villa interior design and fit-out in Dubai <br />under one contract, from the first site visit to final handover, no separate designer <br /> and contractor to coordinate yourself.
</p>
<div className="border border-[#caa193]/10 bg-black/30 p-2">

  <p className="font-play text-sm leading-7 text-white/85">
    <strong className="text-white">WE DO Interior Design &amp; Fit-Out</strong>
  </p>

  <p className="mt-2 font-play text-sm leading-7 text-white/80">
    Dubai - X4RG+39W Jabel Ali, Jabel Ali Industrial 1 - Dubai
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


        </div>
      </div>
    </section>
  );
};

export default DProjects;