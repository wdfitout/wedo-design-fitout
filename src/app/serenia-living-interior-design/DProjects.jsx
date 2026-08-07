'use client';

import React from 'react';
import Image from 'next/image';



const TestimonialCarousel = () => {
  const testimonials = [
  {
    quote:
      "Since we live outside the UAE, we needed a company we could trust to manage everything remotely. WE DO handled the entire process through video meetings, 3D renders, and regular progress updates. We arrived in Dubai just before completion and were genuinely impressed by the quality of the workmanship and attention to detail. ",
    author: "Olivia Richard",
  },
  {
    quote:
      "We were looking for a warm contemporary design for our family home at Serenia Living. WE DO balanced practicality with luxury perfectly. The custom wardrobes and living room joinery were beautifully finished, and the project was delivered exactly as promised.",
    author: "Tarek Hamdallah",
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
  q: "Who is the best interior design company near Serenia Living, Palm Jumeirah?",
  a: (
    <>
      WE DO Interior Design &amp; Fit-Out is a UAE-based interior design &amp; fit-out company with over 15 years of experience and 250+ completed projects in{" "}
      <a 
        href="https://wedointerior.ae/interior-design-company-business-bay" 
        className="text-[#caa193] font-bold hover:underline"
      >
        Business Bay
      </a>{" "}
      and throughout Palm Jumeirah. WE DO does everything from design to custom joinery, furniture, and installation, all with one crew and one contract for Serenia Living owners, instead of coordinating separate designers and contractors.
    </>
  ),
},
  {
    q: "What is included in a Serenia Living interior fit-out service?",
    a: "An entire fit-out by WE DO means designing the concept and 3D rendering, selecting materials and furniture, in-house custom joinery, installation, and styling everything from an empty handed-over developer unit into a finished, furnished unit. The scope is agreed and quoted before work begins, under a single contract.",
  },
  {
    q: "How much does interior fit-out cost for a Serenia Living apartment?",
    a: "Cost depends on unit size, scope of work, and material and furniture selections, so WE DO provides a fixed quote after an initial consultation rather than a flat rate. Full fit-outs across Dubai typically fall within a broad AED-per-square-foot range depending on finish level; Serenia Living's larger floor plates and higher finish level place it toward the upper end of that range. Contact WE DO for a project-specific quote.",
  },
  {
    q: "How long does a Serenia Living apartment interior fit-out take?",
    a: "Timeline is dependent on unit size and scale: a fit-out for a 2–3-bedroom apartment takes less time than the fit-out for a penthouse or Sky Mansion unit, and joinery involves production time, which is not involved in the case of ready-made furniture. WE DO provides a project timeline after the completion of the design sign-off phase.",
  },
  {
    q: "Can I customize my Serenia Living apartment after handover?",
    a: "Yes. Developer handover finishes at Serenia Living cover the shell flooring, walls, and, outside The Reserve, a standard kitchen but not furniture or custom joinery. WE DO designs and fits out apartments after handover, working around any developer snagging that's still in progress, so customization isn't limited to a pre-handover window.",
  },
  {
    q: "Can WE DO manage my Serenia Living interior design if I live abroad?",
    a: "Yes. WE DO runs remote-friendly projects for Dubai owners based abroad, using video consultations, 3D visualization for design sign-off, and progress updates through installation. An owner doesn't need to be in Dubai for any stage of the process, and can review and approve every decision online before it's built.",
  },
  {
    q: "What interior design style suits a Serenia Living Sky Mansion?",
    a: "Sky Mansions have double-height ceilings (roughly 8.5m), 18,500–25,000 sq ft of floor area, and private pools, which suit fewer, larger-scale design gestures over dense decoration—feature walls, statement lighting, and open sightlines toward the sea. WE DO develops a bespoke concept per Sky Mansion rather than applying one fixed style, since only four exist and each has a different layout.",
  },
  {
    q: "Do I need a separate joinery company, or does one company handle everything?",
    a: "No, WE DO's interior design, joinery, and fit-out designers work under one company and one contract. Bespoke wardrobes, kitchen units, and cabinetry are manufactured at WE DO's own joinery factory rather than outsourced, so there's a single point of contact for design changes, manufacturing, and installation, without coordinating between separate vendors.",
  },
  {
    q: "How do I get a fit-out quote for my Serenia Living unit?",
    a: "WE DO should be contacted for quotations with your type of unit, whether apartment, penthouse, Reserve residence, or Sky Mansion; size of unit; and phase, whether before handover, just handover, or snagged. After assessing the proposal from you, a site visit or floor plan may be requested, after which a set quote will be returned.",
  },
];
  return (
    <section className="px-6 py-5 bg-black-200">

      {/* Testimonial + Image Section */}
      <div className="lg:max-w-[90%] mx-auto bg-black p-6 sm:p-10 rounded shadow space-y-6 mb-12 mt-12">
        <div className="grid md:grid-cols-2 gap-10 items-center">

          <div className="rounded-lg overflow-hidden shadow-md">
            <Image
              src="/images/SereniaT.jpeg"
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

{/* CALL TO ACTION */}
<div className="mt-12 border border-[#caa193]/20 bg-[#111] p-8 text-center">
  <p className="text-[#caa193] text-xs tracking-[3px] uppercase font-conthrax mb-3">
    Get a Free Quote
  </p>

  <h2 className="text-xl text-white lg:text-2xl font-conthrax mb-5">
    Ready to start your Serenia Living interior design and fit-out project?
  </h2>

  <p className="font-play text-[15px] text-white/80 leading-7 max-w-3xl mx-auto">
    Send us your floor plan for a free quote and 3D render. Call or WhatsApp +971 58 807 5603, or email info@wedointerior.ae. WE DO Interior Design &amp; Fit-Out, WH-05 A, Jebel Ali Industrial 1, Dubai.
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