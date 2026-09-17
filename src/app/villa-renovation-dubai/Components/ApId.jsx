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
          <div className="flex w-full flex-col justify-start lg:w-1/2">
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
                - Hardcoded "400+" and "15+ years" now come from brand-facts.
            */}
            <p className="mb-4 font-play text-sm leading-7 sm:text-base">
              <Link href="/" className="font-bold text-[#caa193]">
                WE DO Interior Design &amp; Fit-Out
              </Link>{' '}
              delivers full and room-by-room villa renovation across Dubai — from
              Emirates Hills to Green Community — covering MEP upgrades, cosmetic
              layout refreshes, and interior fit-out under one project team. WE DO
              is a DED-registered interior design and fit-out company based in
              Jebel Ali, serving villa owners, landlords, and property managers
              across the UAE. With {VILLA_PROJECTS} completed and {EXPERIENCE_YEARS}{' '}
              in the Dubai market, we manage everything from Dubai Municipality
              approvals to final styling. Most renovation projects involve villas
              built between the early 2000s and 2015, where MEP systems and
              finishes are now 10–25 years old and due for replacement regardless
              of any cosmetic preference.
            </p>

            {/*
              ⚠️ REMOVED: the "interior design and fit-out company based in
              Jebel Ali" text was linked to a Google local-search URL stuffed
              with session parameters (sca_esv, sxsrf, kgs, utm_source…).

              Linking out to a Google SERP does nothing for you: it passes no
              equity anywhere useful, the session tokens expire, and it sends
              a visitor who is already on your landing page back into search
              results where your competitors are bidding. If the intent was
              entity association, the right vehicle is `sameAs` in the
              Organization schema plus a link to the GBP short URL — not a
              body link out of a paid landing page.

              If you want the GBP link back, use the clean short form:
              https://maps.app.goo.gl/<your-code>
            */}

            <div className="mt-6 w-fit rounded bg-[#a0624d] px-6 py-4 font-play text-sm text-white sm:text-base">
              {EXPERIENCE_BADGE}
            </div>
          </div>

          {/* Video Column */}
          <div className="flex w-full flex-col items-start justify-center space-y-6 lg:w-1/2">
            <h2 className="font-conthrax text-base tracking-widest text-gray-200 sm:text-xl">
              See how a villa renovation runs, start to finish
            </h2>

            {!videoLoaded ? (
              /*
                FIXED: this was a <div> with onClick. That means it is not
                reachable by keyboard, not announced as interactive, and cannot
                be triggered with Enter or Space. Now a real <button>, which
                gets all of that for free.

                The click-to-load facade pattern itself is good and I'm keeping
                it — no YouTube request fires until the user actually plays, so
                the embed costs nothing on initial load.

                Also switched the embed to youtube-nocookie.com with
                autoplay=1, so the video starts on the click that loaded it
                rather than requiring a second click.
              */
              <button
                type="button"
                onClick={() => setVideoLoaded(true)}
                aria-label="Play the WE DO villa renovation video"
                className="group relative aspect-video w-full cursor-pointer overflow-hidden rounded-lg border-4 border-[#caa193] bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#caa193]"
              >
                <Image
                  src="/images/villa-renovation-mep-dubai.png"
                  // FIXED: alt was "Watch our company video", which describes
                  // the button, not the image. The image is MEP work.
                  alt="MEP rewiring and repiping during a villa renovation in Dubai"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
                <span className="absolute inset-0 flex items-center justify-center bg-black/40">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/30 backdrop-blur-sm transition group-hover:scale-110 sm:h-20 sm:w-20">
                    <FaPlay className="ml-1 text-xl text-white sm:text-2xl" aria-hidden="true" />
                  </span>
                </span>
              </button>
            ) : (
              <div className="aspect-video w-full overflow-hidden rounded-lg border-4 border-[#caa193]">
                <iframe
                  className="h-full w-full"
                  src={VIDEO_EMBED_URL}
                  title="Villa renovation in Dubai by WE DO Interior Design & Fit-Out"
                  style={{ border: 0 }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            )}

            <Link
              href="/contact-us"
              className="mt-6 w-fit rounded border border-[#caa193] px-6 py-2 font-play text-sm uppercase transition-all duration-200 hover:bg-[#caa193] hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#caa193] sm:text-base"
            >
              Get your quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApId;

