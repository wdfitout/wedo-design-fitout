"use client";

import React, { useState } from "react";
import Link from "next/link";

const faqs = [
  {
    question: " What does an interior designer actually do?",
    answer:
      "An interior designer plans how a space looks and works: the layout, lighting, materials, storage, furniture and the technical drawings a contractor builds from. At WE DO the same company then makes the joinery, handles the approvals and carries out the fit-out, so the design survives the build.",
  },
  {
    question: "What is the difference between interior design and fit-out?",
    answer:
      "Interior design is the plan: layout, lighting, materials and drawings. Fit-out is the work that turns those drawings into a finished space. Many Dubai companies do one and subcontract the other. We do both with our own teams.",
  },
  {
    question: "How do I choose an interior design company in Dubai?",
    answer: (
      <>
        <p>
          If you are comparing the top 10 interior design companies in Dubai,
          four questions separate them quickly:
        </p>

        <ul className="mt-3 space-y-2 pl-4 list-disc marker:text-[#caa193]">
          <li>
            Are the designers and the builders the same company?
          </li>
          <li>
            Is the joinery made in-house or bought in?
          </li>
          <li>
            Who prepares the approvals?
          </li>
          <li>
            Are the certifications externally audited?
          </li>
        </ul>

        <p className="mt-3">
          At WE DO, the answers are yes, in-house, our own team, and ISO 9001,
          14001 and 45001.
        </p>

        <p className="mt-3">
          When the guide is live, see our{" "}
          <Link
            href="/interior-designcompanies-dubai"
            className="
              text-[#caa193]
              underline
              underline-offset-2
              hover:text-white
              transition-colors
            "
          >
            interior design companies in Dubai
          </Link>{" "}
          guide.
        </p>
      </>
    ),
  },
  {
    question: "Do I need approvals for an interior fit-out in Dubai?",
    answer:
      "Most fit-outs do. The permit comes from the authority for your area: Dubai Municipality in most mainland areas, or a zone authority such as DDA, DIFC or Trakhees. Work affecting fire and life-safety systems also needs Dubai Civil Defence approval, and developers such as Emaar and Damac run their own process. Our approvals team prepares and submits the package.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="
        relative
        bg-black
        text-white
        overflow-hidden
      "
    >
      {/* Subtle background detail */}
      <div
        className="
          absolute
          inset-0
          pointer-events-none
          opacity-20
          bg-[url('/images/desktop-wire.svg')]
          bg-cover
          bg-center
          bg-no-repeat
        "
      />

      <div
        className="
          relative
          max-w-[1200px]
          mx-auto
          px-5
          sm:px-8
          lg:px-10
          py-10
          sm:py-14
          lg:py-16
        "
      >
        {/* Heading */}
        <div className="mb-7 sm:mb-9">
          <div className="flex items-center gap-3">
            <span className="w-7 h-px bg-[#caa193]" />

            <p
              className="
                text-[#caa193]
                text-[8px]
                sm:text-[9px]
                tracking-[0.22em]
                font-conthrax
                uppercase
              "
            >
              FAQ
            </p>
          </div>

         <h2
            className="
              text-[12px]
              sm:text-xl
              text-white
              tracking-widest
              font-conthrax
              py-0
              md:py-5
            "
          >
            INTERIOR DESIGN QUESTIONS, ANSWERED
          </h2>

          <p
            className="
              mt-2
              max-w-2xl
              text-[10px]
              sm:text-xs
              leading-relaxed
              text-gray-400
              font-play
            "
          >
            Straight answers about interior design, fit-out, approvals and
            choosing an interior design company in Dubai.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="border-t border-white/10">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="border-b border-white/10"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className="
                    w-full
                    flex
                    items-center
                    justify-between
                    gap-6
                    py-4
                    sm:py-5
                    text-left
                    group
                  "
                >
                  <div className="flex items-start gap-4">
                    <span
                      className="
                        pt-0.5
                        text-[8px]
                        sm:text-[9px]
                        tracking-wider
                        text-[#caa193]
                        font-conthrax
                      "
                    >
                      0{index + 1}
                    </span>

                    <h3
                      className="
                        text-[11px]
                        sm:text-xs
                        md:text-sm
                        leading-relaxed
                        font-conthrax
                        uppercase
                        tracking-wide
                        text-white
                        group-hover:text-[#caa193]
                        transition-colors
                      "
                    >
                      {faq.question}
                    </h3>
                  </div>

                  <span
                    className="
                      flex
                      shrink-0
                      items-center
                      justify-center
                      w-6
                      h-6
                      border
                      border-[#caa193]/50
                      text-[#caa193]
                      text-sm
                      font-light
                      transition-transform
                      duration-300
                    "
                    style={{
                      transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                    }}
                  >
                    +
                  </span>
                </button>

                <div
                  className={`
                    grid
                    transition-[grid-template-rows]
                    duration-300
                    ease-in-out
                    ${
                      isOpen
                        ? "grid-rows-[1fr]"
                        : "grid-rows-[0fr]"
                    }
                  `}
                >
                  <div className="overflow-hidden">
                    <div
                      className="
                        pb-5
                        pl-8
                        sm:pl-9
                        pr-8
                        sm:pr-12
                        text-[10px]
                        sm:text-[11px]
                        leading-[1.8]
                        text-gray-400
                        font-play
                        max-w-4xl
                      "
                    >
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

