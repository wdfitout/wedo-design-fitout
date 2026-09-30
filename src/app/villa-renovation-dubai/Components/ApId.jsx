// app/villa-renovation-dubai/Components/ApId.jsx

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FaPlay } from 'react-icons/fa';
import {
  VILLA_PROJECTS,
  EXPERIENCE_YEARS,
  EXPERIENCE_BADGE,
  PAGE_UPDATED_ISO,
  PAGE_UPDATED_LABEL,
  VIDEO_EMBED_URL,
} from '../../brand-facts';

// NOTE: `useEffect` was imported and never used — removed.

const ApId = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <section className="bg-black px-6 py-10 font-sans text-white sm:px-10 md:px-16 lg:px-28 xl:px-40">
      {/*
        FIXED: this was a bare <p>July 13, 2026</p> floating above the intro
        with no label and no semantics — it read like a leftover blog field.

        An unlabelled date is confusing. A labelled, machine-readable one is a
        real freshness signal, and freshness is one of the things AI Overviews
        weight when choosing between competing sources. Now it says what it is
        and carries a <time dateTime> attribute.
      */}
      <p className="mb-6 font-play text-xs text-white/60">
        Last updated{' '}
        <time dateTime={PAGE_UPDATED_ISO}>{PAGE_UPDATED_LABEL}</time>
      </p>

      <div className="mx-auto lg:max-w-[80%]">
        <div className="flex flex-col gap-12 lg:flex-row">
          {/* REMOVED: an empty <div className="text-sm mb-4 text-[#caa193]" />
              that rendered nothing but added a flex child, throwing off the
              two-column layout it sits inside. */}

          {/* Text Column */}
          <div className="flex w-full flex-col justify-start lg:w-2/2">
            {/*
              FIXED: this H2 read "Villa Renovation Dubai" — identical to the
              H1 in Hero.jsx. Reworded so the page doesn't spend two of its
              three most important headings on the same string.
            */}
            <h2 className="py-2 font-conthrax text-base tracking-widest text-[#caa193] sm:text-xl">
              What a villa renovation with WE DO covers
            </h2>

            {/*
              Copy fixes in this paragraph:
                - "across Dubai  from Emirates Hills" — double space, missing
                  punctuation. Now an em dash.
                - "DED-registered<b>" — no space before the link, so it
                  rendered as "DED-registeredinterior design and fit-out
                  company".
                - Removed `text-justify`. Justified text on a 360px screen
                  creates rivers of whitespace and measurably hurts
                  readability; it was applied to every long paragraph on
                  the page.
                - Hardcoded "400+" and "11+ years" now come from brand-facts.
            */}
            <p className="mb-4 font-play text-sm leading-7 sm:text-base">
              <Link href="/" className="font-bold text-[#caa193]">
                WE DO Interior Design &amp; Fit-Out
              </Link>{' '}
              delivers full and room-by-room villa renovation across Dubai — from
              Emirates Hills to Green Community — covering MEP upgrades, cosmetic
              layout refreshes, and interior fit-out under one project team. WE DO
              is a DED-registered interior design and fit-out company based in
              Jabel Ali, serving villa owners, landlords, and property managers
              across the UAE. With {VILLA_PROJECTS} completed and {EXPERIENCE_YEARS}{' '}
              in the Dubai market, we manage everything from Dubai Municipality
              approvals to final styling. Most renovation projects involve villas
              built between the early 2000s and 2015, where MEP systems and
              finishes are now 10–25 years old and due for replacement regardless
              of any cosmetic preference.
            </p>

            <div className="mt-6 w-fit rounded bg-[#a0624d] px-6 py-4 font-play text-sm text-white sm:text-base">
              {EXPERIENCE_BADGE}
            </div>
          </div>

      
        </div>
      </div>
    </section>
  );
};

export default ApId;

