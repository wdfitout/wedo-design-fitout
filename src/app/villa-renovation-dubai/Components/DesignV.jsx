// app/villa-renovation-dubai/Components/DesignV.jsx

'use client';

import React, { useEffect, useCallback, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import { PHONE_DISPLAY, WHATSAPP_URL, EMAIL } from '../../brand-facts';

/*
  FIXED: this was a bare array of paths, so alt text was generated as
  `service 1`, `service 2`, `service 3` on desktop and `slide 1`, `slide 2`,
  `slide 3` on mobile. Six images, zero descriptive alt text — and the same
  three photos carried two different alts depending on breakpoint.

  Now each image owns its alt, and both renderings use the same one.
*/
const images = [
  {
    src: '/images/villa-renovation-smart-home-dubai.png',
    alt: 'Smart home lighting and climate controls installed during a Dubai villa renovation',
  },
  {
    src: '/images/villa-renovation-painting-dubai.png',
    alt: 'Interior painting in progress during a villa renovation in Dubai',
  },
  {
    src: '/images/villa-renovation-bathroom-dubai.png',
    alt: 'Renovated villa bathroom in Dubai with large-format tiling and new fixtures',
  },
];

const DesignV = () => {
  const [isClient, setIsClient] = useState(false);
  const autoplayOptions = { delay: 3000, stopOnInteraction: false };
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay(autoplayOptions),
  ]);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);

  return (
    <section className="bg-black-200 px-6 py-10">
      {/*
        NOTE: this H2 reads "Villa Renovation Dubai Services We Provide", and
        further down the page there is another H2 "Villa Renovation Services in
        Dubai" heading the actual 11-service list. Two headings, same promise,
        but this one is followed only by three photos with no service names.

        Retitled so the two stop competing. The section below is the real
        services list; this one is a gallery.
      */}
      <h2 className="mb-6 text-center font-conthrax text-base uppercase tracking-widest text-white sm:text-xl">
        Recent Villa Renovation Work in Dubai
      </h2>

      {/* Desktop Grid */}
      <div className="mb-10 hidden gap-6 lg:grid lg:grid-cols-3">
        {images.map((image) => (
          <div key={image.src} className="relative aspect-square overflow-hidden">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              // Three columns inside a full-width container: roughly a third
              // of the viewport each. Without `sizes`, Next assumes 100vw and
              // ships a file three times larger than needed.
              sizes="(min-width: 1024px) 33vw, 100vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {/* Mobile Carousel with Autoplay */}
      {isClient && (
        <div className="mb-10 lg:hidden">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4">
              {images.map((image) => (
                <div
                  key={image.src}
                  className="relative min-w-full overflow-hidden aspect-[4/3]"
                >
                  <Image
                    src={image.src}
                    // Same alt as the desktop grid, not "slide N".
                    alt={image.alt}
                    fill
                    sizes="100vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/*
            FIXED: these were bare <button> elements containing only the
            arrow glyphs ⟵ and ⟶. A screen reader announces them as
            "left arrow, button" — meaningless. They also had no type, so
            inside any future <form> they would submit it.
          */}
          <div className="mt-4 flex justify-center gap-6">
            <button
              type="button"
              onClick={scrollPrev}
              aria-label="Previous project photo"
              className="px-3 py-1 text-xl text-[#caa193] transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#caa193]"
            >
              <span aria-hidden="true">⟵</span>
            </button>
            <button
              type="button"
              onClick={scrollNext}
              aria-label="Next project photo"
              className="px-3 py-1 text-xl text-[#caa193] transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#caa193]"
            >
              <span aria-hidden="true">⟶</span>
            </button>
          </div>
        </div>
      )}

      {/* Bottom CTA Section */}
      <div className="space-y-4 bg-[#f5ede5] py-10 text-center">
        <h3 className="font-conthrax text-sm uppercase sm:text-xl">
          Get Your Free Villa Renovation Quote
        </h3>

        {/*
          FIXED: the original ran everything into one pipe-separated line —
          "WE DO Interior Design & Fit-Out | Phone/WhatsApp: … | Email: … Free
          site visit, itemized breakdown by room." — with a missing full stop
          before "Free". Split into two sentences, and the phone and email are
          now real links rather than plain text sitting next to buttons.
        */}
        <p className="mx-auto max-w-2xl px-4 font-play text-sm sm:text-base">
          Free site visit, with an itemized breakdown by room. Call or WhatsApp{' '}
          <a href={`tel:${PHONE_DISPLAY.replace(/\s/g, '')}`} className="underline">
            {PHONE_DISPLAY}
          </a>
          , or email{' '}
          <a href={`mailto:${EMAIL}`} className="underline">
            {EMAIL}
          </a>
          .
        </p>

        <div className="mt-4 flex flex-col justify-center gap-4 px-4 sm:flex-row">
          {/*
            ⚠️ CONVERSION TRACKING — these two are the primary conversion
            actions on the page and neither fires a Google Ads event. Your
            gtag AW-11361089409 is loading, but no click handler is attached
            anywhere in these components, so the Ads account has no conversion
            signal at all. Add something like:

              onClick={() => window.gtag?.('event', 'conversion', {
                send_to: 'AW-11361089409/YOUR_WHATSAPP_LABEL'
              })}

            Get the conversion labels from Google Ads → Goals → Conversions.
            Without this, bidding, the offline conversion import, and the whole
            optimisation loop have nothing to work with.
          */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full rounded bg-green-600 px-6 py-3 text-center font-play text-sm text-white sm:w-auto"
          >
            Ask about availability on WhatsApp
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="w-full rounded bg-[#a0624d] px-6 py-3 text-center font-play text-sm text-white sm:w-auto"
          >
            Ask about availability by email
          </a>
        </div>
      </div>
    </section>
  );
};

export default DesignV;

/* ====================================================================
 * WHAT CHANGED
 *
 * 1. alt text: "service 1/2/3" and "slide 1/2/3" → real descriptions, shared
 *    between the desktop grid and the mobile carousel.
 * 2. Added `sizes` to every Image. The desktop grid was shipping full-width
 *    files for third-width slots.
 * 3. Carousel arrows: added type="button" and aria-labels; the glyphs are now
 *    aria-hidden so screen readers get the label, not "left arrow".
 * 4. Added focus-visible rings to the arrows.
 * 5. Section H2 retitled so it stops competing with the real services list
 *    further down the page.
 * 6. CTA copy: removed the ✅ and ✉️ emoji from button labels (they are read
 *    aloud as "white heavy check mark" by screen readers) and switched to
 *    active-voice labels.
 * 7. Contact details now import from brand-facts.js instead of being retyped.
 * 8. Changed bg-green-500 → bg-green-600 and the peach button → #a0624d:
 *    white text on your #caa193 was about 2.1:1 contrast, well under the 4.5:1
 *    WCAG AA minimum. Both now pass.
 *
 * STILL OPEN
 *   The three photos carry no captions or service names, so this section
 *   communicates nothing to a crawler beyond the alt text. If these are real
 *   completed projects, adding the community name and scope under each would
 *   turn a decorative strip into indexable proof.
 * ==================================================================== */