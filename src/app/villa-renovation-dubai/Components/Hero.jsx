// app/villa-renovation-dubai/Components/Hero.jsx

import React from "react";
import Image from "next/image";
import Link from "next/link";

// NOTE: "use client" removed. This component has no state, no effects and no
// event handlers — it is pure markup. Keeping it as a client component ships
// unnecessary JS and, more importantly, pushes your LCP element into the
// client bundle. As a server component the hero image is in the initial HTML.

const Hero = () => {
  return (
    <section className="relative w-full h-[350px] lg:h-[400px] xl:h-[500px] overflow-hidden">
      {/*
        FIXED: was width={1920} height={1080} with `object-cover` but no
        w-full/h-full. That renders an <img> at its intrinsic 1920px width,
        overflowing the 350px-tall container and getting clipped top-left —
        so the image was never actually covering the box as intended.

        `fill` + `sizes="100vw"` makes it cover correctly AND lets Next serve a
        360px-wide file to phones instead of the 3840px one it currently ships.
        That alone is a large LCP win on mobile, which matters for both Core
        Web Vitals and Google Ads landing page experience.
      */}
      <Image
        src="/images/villa-renovation-majlis-dubai.png"
        alt="Renovated majlis with built-in seating in a Dubai villa by WE DO"
        fill
        sizes="100vw"
        priority
        className="object-cover"
      />

      {/* Overlay Content Box */}
      <div className="absolute left-2 sm:left-4 bottom-6 z-10 max-w-[92%] sm:max-w-xl rounded-lg bg-black/60 p-4 text-white">
        {/*
          FIXED: the original class was
            "text-md md:text-2xl lg:           text-4xl font-conthrax mb-2"
          The stray whitespace split "lg:" from "text-4xl", so Tailwind emitted
          a bare `text-4xl` with no breakpoint. The heading was rendering at
          text-4xl on ALL sizes, not just lg and up.

          Also note: `text-md` is not a real Tailwind class (the scale goes
          text-sm then text-base). It was silently doing nothing. Replaced with
          text-xl so the H1 is actually legible at 360px, where most of your
          paid traffic lands.
        */}
        <h1 className="mb-2 font-conthrax text-xl md:text-2xl lg:text-4xl">
          Villa Renovation Dubai
        </h1>

        {/*
          Kept as an H2 but reworded. It previously read "Best Villa Renovation
          Company in Dubai", which is a near-duplicate of the H1 and of the H2
          in ApId.jsx — three near-identical headings in the first screen.
          This version carries the scope and the proof instead of repeating the
          keyword, which is what an AI Overview actually extracts.
        */}
        <h2 className="mb-3 font-play text-base md:text-xl lg:text-2xl">
          MEP upgrades, kitchens, bathrooms and majlis refits under one team
        </h2>

        <div className="flex flex-wrap gap-3">
          {/*
            Added visible focus rings. Both links were keyboard-focusable but
            had no focus indicator, which is a WCAG 2.4.7 failure. Cheap fix,
            and accessibility issues are one of the things an Ads policy review
            can flag on a landing page.
          */}
          <Link
            href="/contact-us"
            className="rounded bg-[#caa193] px-3 py-2 text-xs font-semibold uppercase text-black transition-all duration-200 hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Send an Inquiry
          </Link>

          <Link
            href="/gallery"
            className="rounded border border-[#caa193] px-3 py-2 text-xs font-semibold uppercase transition-all duration-200 hover:bg-[#caa193] hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Our Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;

/* ====================================================================
 * WHAT CHANGED
 *
 * 1. alt "interior design" → describes the actual image. Your filenames are
 *    already excellent (villa-renovation-majlis-dubai.png); the alt now
 *    matches. This is the single cheapest image-search win on the page.
 * 2. Broken "lg:           text-4xl" class fixed.
 * 3. "text-md" (not a real Tailwind class) → "text-xl".
 * 4. Image switched to fill + sizes so it covers correctly and stops shipping
 *    a 3840px asset to phones.
 * 5. Dropped "use client" — no interactivity here.
 * 6. Added focus-visible rings to both CTAs.
 * 7. H2 reworded to stop triple-repeating the keyword above the fold.
 * 8. Removed the redundant sm:/md: height classes (all were 350px).
 * 9. <div> → <section> for the landmark.
 *
 * NOT DONE — needs your decision:
 *   The ISO certifications and the Luxury Lifestyle Award sit only in the
 *   global footer. On a paid landing page a compact trust strip belongs
 *   directly under this hero. I did not add one because it changes the visual
 *   design rather than fixing a defect — say the word and I'll build it.
 * ==================================================================== */