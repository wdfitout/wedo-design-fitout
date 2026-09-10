import Image from "next/image";
import Link from "next/link";

const VHeroSection = () => {
  const suggestions = [
    {
      title: "Traditional vs Modern Interior Design for Jumeirah Villas",
      age: "August 25, 2026",
      image: "/images/traditional-architecture-modern-jumeirah-villa-interior.webp",
      href: "/traditional-vs-modern-jumeirah-villa-design",
    },
    {
      title: "5 Differences Between Villa and Apartment Interiors in Dubai",
      age: "November 20, 2026",
      image: "/images/5_Differences_Between_Villa_and_Apartment_Interiors_in_Dubai.png",
      href: "/dubai-villa-vs-apartment-interior-design",
    },
    {
      title: "3-5-7 Rule in Interior Design Dubai",
      age: "April 29, 2026",
      image: "/images/Luxury modern Dubai living room interiors.png",
      href: "/3-5-7-rule-interior-design-dubai",
    },
    {
      title: "Villa Construction in Dubai - Leading Dubai Construction Company",
      age: "January 05, 2026",
      image: "/images/high-end-luxury-villa-interior-in-Dubai.png",
      href: "/complete-villa-construction-dubai",
    },
  ];

  // Helper class for uniform image dimensions and spacing
  const imageStyles = "rounded-md w-full aspect-video object-cover my-6";

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 text-white mt-20">
      <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-8">
        {/* Blog Content */}
        <div>
          <div className="text-sm mb-4 text-[#caa193]">
            <p>September 10, 2026</p>
          </div>

          <h1 className="text-[#caa193] text-3xl font-conthrax leading-tight py-5">
            Best Color Palettes for Beachfront Villas in Jumeirah
          </h1>

          {/* Image 1: Featured / Hero Image */}
          <Image
            src="/images/best-color-palettes-beachfront-villa-jumeirah.webp"
            title="Best Color Palettes for Beachfront Villas in Jumeirah"
            alt="Best color palettes for a beachfront villa in Jumeirah"
            width={800}
            height={450}
            className={imageStyles}
          />

          <div className="text-md leading-relaxed font-play">
            <p>
              Salt air. Sharp, reflected sunlight. Both change how color behaves on a villa this close to the water. A shade that looks perfect on a paint chip indoors can wash out completely against Jumeirah's light, and it can break down much faster on a wall that catches sea air every day. The right color palette for a beachfront villa in Jumeirah accounts for both: what looks right and what actually survives.
            </p>
            <p className="mt-4">
              This guide covers both sides. <strong>It covers the best palettes for a beachfront villa in Jumeirah</strong> and the paint choices built to last along Jumeirah Beach Road, Pearl Jumeirah, La Mer, and Jumeirah Bay Island. It's written by <b className="text-[#caa193]"><a href="https://wedointerior.ae/">WE DO Interior Design & Fit-Out</a></b>, an ISO 9001:2015, ISO 14001:2015, and ISO 45001:2018 certified <strong>Dubai interior design and fit-out company</strong> with 15+ years of experience and 250+ completed residential and commercial projects across the city. Still deciding between a traditional or modern base for the villa itself? The <b className="text-[#caa193]"><a href="https://wedointerior.ae/traditional-vs-modern-jumeirah-villa-design">Traditional vs Modern Interior Design for Jumeirah Villas guide</a></b> covers that in depth. This one picks up from there, focused specifically on <strong>color palettes for Jumeirah villas</strong>.
            </p>
          </div>

          <div className="text-md leading-relaxed font-play">
            <h2 className="text-[#caa193] text-2xl font-conthrax leading-tight py-5">
              Key Facts: Color Palettes for Jumeirah Beachfront Villas
            </h2>
            <ul className="list-disc pl-5">
              <li>
                Jumeirah's genuinely beachfront stretches sit along <strong>Jumeirah Beach Road, Pearl Jumeirah, La Mer, and Jumeirah Bay Island</strong>. Most of the wider district sits back on quiet residential streets.
              </li>
              <li>
                Warm white, greige, sand beige, taupe, and <strong>sage green</strong> are colors that UAE paint and design sources are pointing to for 2026, more in the trends section below.
              </li>
              <li>
                Salt air speeds up paint wear on exteriors facing the sea. Plan on repainting <strong>closer to every 3 years</strong> there in Dubai.
              </li>
              <li>
                Many Jumeirah homeowners lean toward a <strong>neutral base with one accent color</strong> instead of a fully saturated scheme, based on the pattern across current Dubai villa projects.
              </li>
              <li>
                A standalone exterior repaint commonly starts from <strong>around AED 2,500</strong> in labor, with more on cost below.
              </li>
            </ul>
          </div>

          <div className="text-md leading-relaxed font-play">
            <h2 className="text-[#caa193] text-2xl font-conthrax leading-tight py-5">
              Why Beachfront Villas in Jumeirah Need a Different Color Approach
            </h2>
            <p>
              Two things make color harder to get right this close to the water. First, light. Jumeirah's sun is intense and bounces off the sea. That can flatten warm tones and sharpen cool ones more than they'd read inland. Second, air. Salt carried on the sea breeze speeds up ordinary paint's breakdown, especially on exteriors and anything facing the water directly.
            </p>
            <p className="mt-4">
              Neither problem is solved by picking a "nice" color scheme. You solve it by pairing the right color with the right product. That's exactly where most generic color-palette advice stops short. It's also where the <b className="text-[#caa193]"><a href="https://wedointerior.ae/luxury-villa-interior-design-in-dubai">WE DO team's approach to luxury villa interior design</a></b>, a neutral base layered with warmer accents, tends to hold up better over time than a bolder, less climate-considered scheme.
            </p>
          </div>

          <div className="text-md leading-relaxed font-play">
            <h2 className="text-[#caa193] text-2xl font-conthrax leading-tight py-5">
              Best Color Palettes for Jumeirah Beachfront Villas
            </h2>
            <p>
              Six <strong>villa color palettes</strong>. Safest to boldest.
            </p>

            <div className="overflow-x-auto my-4">
              <table className="w-full text-left text-sm border-collapse border border-gray-700">
                <thead>
                  <tr className="bg-[#caa193]/20 text-[#caa193]">
                    <th className="p-2 border border-gray-700 font-conthrax">Palette</th>
                    <th className="p-2 border border-gray-700 font-conthrax">Key Colors</th>
                    <th className="p-2 border border-gray-700 font-conthrax">Best For</th>
                    <th className="p-2 border border-gray-700 font-conthrax">Maintenance</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  <tr className="border border-gray-700">
                    <td className="p-2 border border-gray-700 font-semibold align-top whitespace-nowrap">Sandy Neutral & Driftwood</td>
                    <td className="p-2 border border-gray-700 align-top">Beige, sand, ivory, grey-toned wood</td>
                    <td className="p-2 border border-gray-700 align-top">Any architecture; safest resale-friendly choice</td>
                    <td className="p-2 border border-gray-700 align-top">Low</td>
                  </tr>
                  <tr className="border border-gray-700">
                    <td className="p-2 border border-gray-700 font-semibold align-top whitespace-nowrap">Sage Green & Warm Wood</td>
                    <td className="p-2 border border-gray-700 align-top">Muted sage, oak, walnut</td>
                    <td className="p-2 border border-gray-700 align-top">Bedrooms, living areas</td>
                    <td className="p-2 border border-gray-700 align-top">Low–Medium</td>
                  </tr>
                  <tr className="border border-gray-700">
                    <td className="p-2 border border-gray-700 font-semibold align-top whitespace-nowrap">Greige & Charcoal</td>
                    <td className="p-2 border border-gray-700 align-top">Greige base, charcoal accent</td>
                    <td className="p-2 border border-gray-700 align-top">Contemporary, glass-forward villas</td>
                    <td className="p-2 border border-gray-700 align-top">Low</td>
                  </tr>
                  <tr className="border border-gray-700">
                    <td className="p-2 border border-gray-700 font-semibold align-top whitespace-nowrap">Sea-Glass Blue & Ivory</td>
                    <td className="p-2 border border-gray-700 align-top">Desaturated blue-green, ivory, stone</td>
                    <td className="p-2 border border-gray-700 align-top">Feature walls and accents</td>
                    <td className="p-2 border border-gray-700 align-top">Medium</td>
                  </tr>
                  <tr className="border border-gray-700">
                    <td className="p-2 border border-gray-700 font-semibold align-top whitespace-nowrap">Terracotta & Warm White</td>
                    <td className="p-2 border border-gray-700 align-top">Burnt clay, soft white</td>
                    <td className="p-2 border border-gray-700 align-top">Villas leaning into Jumeirah's desert-meets-sea identity</td>
                    <td className="p-2 border border-gray-700 align-top">Medium</td>
                  </tr>
                  <tr className="border border-gray-700">
                    <td className="p-2 border border-gray-700 font-semibold align-top whitespace-nowrap">Monochrome Stone</td>
                    <td className="p-2 border border-gray-700 align-top">Travertine, limestone, bleached oak</td>
                    <td className="p-2 border border-gray-700 align-top">Quiet-luxury, minimal interiors</td>
                    <td className="p-2 border border-gray-700 align-top">Low</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Image 2: Six Palettes Overview */}
            <Image
              src="/images/jumeirah-villa-color-palettes-sandy-neutral-sage-greige.webp"
              alt="Six color palette ideas for Jumeirah beachfront villas"
              title="Jumeirah Villa Color Palette Ideas"
              width={800}
              height={450}
              className={imageStyles}
            />

            <div className="space-y-6 my-4">
              <div>
                <h3 className="text-[#caa193] text-lg font-conthrax mb-2">
                  Sandy Neutral & Driftwood
                </h3>
                {/* Image 3: Sandy Neutral & Driftwood */}
                <Image
                  src="/images/sandy-neutral-driftwood-jumeirah-villa-interior.webp"
                  alt="Sandy neutral and driftwood color palette in a Jumeirah villa interior"
                  title="Sandy Neutral and Driftwood Villa Palette"
                  width={800}
                  height={450}
                  className={imageStyles}
                />
                <p>
                  Beige, sand, and warm ivory walls, paired with driftwood-grey furniture and pale timber accents. It's the safest choice on this list, and the one most <b className="text-[#caa193]"><a href="https://wedointerior.ae/villa-interior-design-dubai">Dubai villa interior designers</a></b> reach for first. It works with almost any architecture and doesn't fight the sunlight. Want a palette that won't need rethinking in five years? This is it.
                </p>
              </div>

              <div>
                <h3 className="text-[#caa193] text-lg font-conthrax mb-2">
                  Sage Green & Warm Wood
                </h3>
                {/* Image 4: Sage Green & Warm Wood */}
                <Image
                  src="/images/sage-green-warm-wood-jumeirah-villa-bedroom.webp"
                  alt="Sage green and warm wood color palette for a Jumeirah villa bedroom"
                  title="Sage Green and Warm Wood Bedroom"
                  width={800}
                  height={450}
                  className={imageStyles}
                />
                <p>
                  A muted, greyed-down sage green against warm oak or walnut. Calm rather than bold. That's why it suits bedrooms and living areas facing the water particularly well. Pair it with brass or bronze fixtures instead of chrome; the warmth carries through better.
                </p>
              </div>

              <div>
                <h3 className="text-[#caa193] text-lg font-conthrax mb-2">
                  Greige & Charcoal
                </h3>
                {/* Image 5: Greige & Charcoal */}
                <Image
                  src="/images/greige-charcoal-contemporary-jumeirah-villa.webp"
                  alt="Greige and charcoal color palette in a contemporary Jumeirah villa"
                  title="Greige and Charcoal Villa Interior"
                  width={800}
                  height={450}
                  className={imageStyles}
                />
                <p>
                  Greige, the beige-grey hybrid used widely across contemporary Dubai villa exteriors, paired with charcoal accents on doors, window frames, or a single feature wall. Charcoal works better here as an accent than full coverage. A fully dark exterior simply absorbs more heat than this climate rewards.
                </p>
              </div>

              <div>
                <h3 className="text-[#caa193] text-lg font-conthrax mb-2">
                  Sea-Glass Blue & Ivory
                </h3>
                {/* Image 6: Sea-Glass Blue & Ivory */}
                <Image
                  src="/images/sea-glass-blue-ivory-jumeirah-villa-interior.webp"
                  alt="Sea-glass blue and ivory color palette for a Jumeirah villa"
                  title="Sea-Glass Blue and Ivory Palette"
                  width={800}
                  height={450}
                  className={imageStyles}
                />
                <p>
                  A soft, desaturated blue-green, sea glass, not swimming-pool blue, against ivory walls and natural stone. This is the palette that leans most directly into "beachfront" without tipping into anything nautical or themed. Use it as an accent: a feature wall, soft furnishings, a joinery detail. Strong blue across an entire room can read cold under harsh midday light.
                </p>
              </div>

              <div>
                <h3 className="text-[#caa193] text-lg font-conthrax mb-2">
                  Terracotta & Warm White
                </h3>
                {/* Image 7: Terracotta & Warm White */}
                <Image
                  src="/images/terracotta-warm-white-jumeirah-villa-interior.webp"
                  alt="Terracotta and warm white color palette for a Jumeirah villa"
                  title="Terracotta and Warm White Villa Palette"
                  width={800}
                  height={450}
                  className={imageStyles}
                />
                <p>
                  Warm terracotta or burnt-clay accents against a soft white base. This isn't a palette borrowed from beach-house content elsewhere. It pairs the Gulf's own warm, earthy tones with the lighter base a coastal villa needs, acknowledging Jumeirah's desert setting as much as its coastline.
                </p>
              </div>

              <div>
                <h3 className="text-[#caa193] text-lg font-conthrax mb-2">
                  Monochrome Stone
                </h3>
                {/* Image 8: Monochrome Stone */}
                <Image
                  src="/images/monochrome-stone-jumeirah-villa-interior.webp"
                  alt="Monochrome stone color palette in a luxury Jumeirah villa"
                  title="Monochrome Stone Villa Interior"
                  width={800}
                  height={450}
                  className={imageStyles}
                />
                <p>
                  Travertine, limestone, and bleached-oak tones, kept within a tight, near-monochromatic range. No accent color competing for attention. Just variation in texture and material, suited to a villa aiming for restraint over a strong color statement. Want to see how WE DO apply these principles in completed <b className="text-[#caa193]"><a href="https://wedointerior.ae/interior-design-jumeirah-dubai">Jumeirah interiors</a></b>? Explore the <b className="text-[#caa193]"><a href="https://wedointerior.ae/gallery">WE DO residential and villa project gallery</a></b>.
                </p>
              </div>
            </div>
          </div>

          <div className="text-md leading-relaxed font-play">
            <h2 className="text-[#caa193] text-2xl font-conthrax leading-tight py-5">
              Exterior and Facade Colors for a Beachfront Villa
            </h2>
            <p>
              A beachfront villa's exterior gets seen more than most: from the street, from neighboring properties, from the water itself. Several Dubai renovation specialists treat facade color as a value decision as much as an aesthetic one. A dated or mismatched exterior can undersell a well-designed interior.
            </p>

            {/* Image 9: Exterior & Facade Colors */}
            <Image
              src="/images/beachfront-villa-exterior-colors-jumeirah-dubai.webp"
              alt="Beachfront villa exterior colors in Jumeirah Dubai"
              title="Beachfront Villa Exterior Colors in Jumeirah"
              width={800}
              height={450}
              className={imageStyles}
            />

            <p className="mt-4">
              A light neutral across the main wall surfaces remains the safest, most heat-reflective choice. Warm white, sand beige, or greige. Stone grey works similarly and pairs naturally with glass and metal detailing. Darker tones still have a place as an accent, on balcony frames, vertical lines, structural borders, just not as full coverage. Natural stone and plaster finishes like travertine and honed stone are increasingly used as facade materials in their own right, and read particularly well against Jumeirah's coastal light.
            </p>
          </div>

          <div className="text-md leading-relaxed font-play">
            <h2 className="text-[#caa193] text-2xl font-conthrax leading-tight py-5">
              Room-by-Room Color Guidance
            </h2>

            <div className="space-y-6 my-4">
              <div>
                <h3 className="text-[#caa193] text-lg font-conthrax mb-2">
                  Living Room and Majlis
                </h3>
                <p>
                  <b className="text-[#caa193]"><a href="https://wedointerior.ae/living-room-interior-design-jumeirah-dubai">Living room</a></b> and majlis spaces get the most daily light, so this is where a neutral base earns its keep. Save color for one wall, the joinery, or the upholstery. Not all three. A majlis specifically benefits from a warmer accent, terracotta, sage, or a deep gold, to keep its sense of occasion.
                </p>
              </div>

              <div>
                <h3 className="text-[#caa193] text-lg font-conthrax mb-2">
                  Bedrooms
                </h3>
                <p>
                  Sage green, soft blues, and muted lilac tend to work best for <b className="text-[#caa193]"><a href="https://wedointerior.ae/bedroom-interior-design-jumeirah-dubai">bedroom interiors in Jumeirah</a></b>. Anything calming and slightly desaturated. Skip high-gloss finishes; matte or eggshell suits a room meant for rest and holds color truer as light changes through the day.
                </p>
              </div>

              <div>
                <h3 className="text-[#caa193] text-lg font-conthrax mb-2">
                  Kitchens
                </h3>
                <p>
                  Two-tone <b className="text-[#caa193]"><a href="https://wedointerior.ae/kitchen-interior-design-jumeirah-dubai">kitchen cabinetry</a></b> is the current move: white or cream uppers with a navy, sage, or charcoal lower run. Countertops and splashbacks are a good place for a stone or marble tone that ties back into the villa's main palette.
                </p>
              </div>

              <div>
                <h3 className="text-[#caa193] text-lg font-conthrax mb-2">
                  <a href="https://wedointerior.ae/landscape-design-dubai" className="hover:underline">Outdoor Terraces and Pool Decks</a>
                </h3>
                {/* Image 10: Outdoor Terrace and Pool Deck */}
                <Image
                  src="/images/jumeirah-villa-outdoor-terrace-pool-deck-colors.webp"
                  alt="Jumeirah villa terrace with sandy stone and natural wood colors"
                  title="Jumeirah Villa Terrace and Pool Deck"
                  width={800}
                  height={450}
                  className={imageStyles}
                />
                <p>
                  Given how much of daily life in a Jumeirah villa happens outdoors, terrace and pool-deck color deserves the same attention as any interior room. Sandy stone tones and driftwood-toned furniture are usually enough. The sea, sky, and sand tend to supply better color than anything applied over them.
                </p>
              </div>
            </div>
          </div>

          <div className="text-md leading-relaxed font-play">
            <h2 className="text-[#caa193] text-2xl font-conthrax leading-tight py-5">
              Choosing Paint That Survives Jumeirah's Coastal Climate
            </h2>
            <p>
              This is the part most color-palette guides skip. It matters more here than the color choice itself. Salt in the sea air works into exterior masonry and paint over time, speeding up blistering and breakdown, especially on walls facing the water directly.
            </p>

            <ul className="list-disc pl-5 space-y-4 my-4">
              <li>
                <strong className="text-[#caa193]">
                  Finish matters as much as color.
                </strong>{" "}
                Satin or eggshell holds up better than flat or heavily textured finishes in a dusty, humid environment.
              </li>
              <li>
                <strong className="text-[#caa193]">
                  Ask about coastal-rated products specifically.
                </strong>{" "}
                Several UAE paint suppliers offer lines formulated for salt and humidity resistance. For villas that need more than a repaint, WE DO also handles <b className="text-[#caa193]"><a href="https://wedointerior.ae/villa-renovation-dubai">villa renovation in Dubai</a></b>, including painting, finishes and related upgrade work.
              </li>
              <li>
                <strong className="text-[#caa193]">
                  Timing matters.
                </strong>{" "}
                October to April is the practical window for exterior painting in Dubai. Paint doesn't cure properly in peak summer heat.
              </li>
              <li>
                <strong className="text-[#caa193]">
                  Budget the shorter repaint cycle from the start.
                </strong>{" "}
                Closer to 3 years for direct sea-air exposure.
              </li>
            </ul>
          </div>

          <div className="text-md leading-relaxed font-play">
            <h2 className="text-[#caa193] text-2xl font-conthrax leading-tight py-5">
              Cost of Color Consultation and Repainting for a Jumeirah Villa
            </h2>
            <p>
              Color and paint costs vary more than a single number can capture, because scope changes so much from one villa to the next.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full text-left border-collapse border border-gray-700">
                <thead>
                  <tr className="bg-[#caa193]/20 text-[#caa193]">
                    <th className="p-3 border border-gray-700 font-conthrax">Scope</th>
                    <th className="p-3 border border-gray-700 font-conthrax">Reference Figure</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border border-gray-700">
                    <td className="p-3 border border-gray-700 font-semibold">Standalone exterior repaint</td>
                    <td className="p-3 border border-gray-700">Labor commonly starts from around AED 2,500 for a standard villa, before materials</td>
                  </tr>
                  <tr className="border border-gray-700">
                    <td className="p-3 border border-gray-700 font-semibold">Color as part of a full interior design and fit-out project</td>
                    <td className="p-3 border border-gray-700">Folded into the overall project cost rather than billed as its own line item</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mt-4">
              The repaint figure is a general market reference, not a fixed quote. The real number moves with villa size, how much surface preparation the existing paint needs, and which product tier goes on the wall, a villa needing paint stripped back to bare masonry costs more than one getting a straightforward recoat.
            </p>
            <p className="mt-4">
              A full interior color scheme costs more than a repaint, and for good reason: it usually spans multiple rooms, feature walls, and joinery finishes rather than a simple refresh. There isn't a reliable standalone figure for "color consultation" as its own line item, because in practice it's rarely priced separately. Most Dubai interior design companies, including WE DO, fold color selection into the broader interior design and fit-out project.
            </p>
          </div>

          <div className="text-md leading-relaxed font-play">
            <h2 className="text-[#caa193] text-2xl font-conthrax leading-tight py-5">
              How to Choose the Right Palette for Your Villa
            </h2>

            <ol className="list-decimal pl-5 space-y-4 my-4">
              <li>
                <strong className="text-[#caa193]">
                  Check which walls actually face the sea.
                </strong>{" "}
                Direct exposure needs a coastal-rated exterior product regardless of which palette you choose.
              </li>
              <li>
                <strong className="text-[#caa193]">
                  Pick your base first, accent second.
                </strong>{" "}
                Every palette above starts from a neutral or near-neutral base. Settle that before choosing the accent.
              </li>
              <li>
                <strong className="text-[#caa193]">
                  Test the color in Jumeirah's actual light.
                </strong>{" "}
                A swatch that reads warm indoors can look different against reflected coastal sunlight. Test on-site, at midday and late afternoon.
              </li>
              <li>
                <strong className="text-[#caa193]">
                  Match the finish to the room, not just the color.
                </strong>{" "}
                Matte for bedrooms and ceilings, satin for living spaces, a coastal-rated finish for exteriors.
              </li>
              <li>
                <strong className="text-[#caa193]">
                  Plan the repaint cycle into your budget from the start.
                </strong>{" "}
                Don't treat it as a later surprise.
              </li>
              <li>
                <strong className="text-[#caa193]">
                  Work with a designer who knows this specific climate.
                </strong>{" "}
                <b className="text-[#caa193]"><a href="https://wedointerior.ae/villa-projects">WE DO's villa project portfolio</a></b> is a reasonable place to see what's actually been built in Dubai's conditions, not just general inspiration from elsewhere.
              </li>
            </ol>
          </div>

          <div className="text-md leading-relaxed font-play">
            <h2 className="text-[#caa193] text-2xl font-conthrax leading-tight py-5">
              2026 Color Trends for Jumeirah Villas
            </h2>

            <div className="space-y-6 my-4">
              <div>
                <h3 className="text-[#caa193] text-lg font-conthrax mb-2">
                  Warm Neutrals Are the New Base
                </h3>
                <p>
                  Stark white is losing ground. UAE paint and design sources are pointing to warm white, greige, sand beige, taupe, and sage green as the colors gaining the most ground for 2026, a softer, warmer version of "neutral" than Dubai villas leaned on a few years ago. This is a single trend read, worth treating as directional rather than settled fact, but it lines up with the broader shift toward warm minimalism already showing up across <b className="text-[#caa193]"><a href="https://wedointerior.ae/villa-interior-design-jumeirah-dubai">Jumeirah villa interiors</a></b> generally.
                </p>
              </div>

              <div>
                <h3 className="text-[#caa193] text-lg font-conthrax mb-2">
                  Richer Accents Are Making a Careful Return
                </h3>
                <p>
                  Some UAE designers are reintroducing bolder tones this year: umber, ochre, a controlled burgundy or pistachio. Always used sparingly, as one piece of furniture or one artwork, never a whole room. Jumeirah's light amplifies saturated color fast, so this works as a small layer on top of a neutral base, not a replacement for one.
                </p>
              </div>

              <div>
                <h3 className="text-[#caa193] text-lg font-conthrax mb-2">
                  Color Is Following Material
                </h3>
                <p>
                  Travertine, limestone, and bleached oak aren't just materials anymore. They're becoming color decisions in their own right, with paint and paler finishes chosen to match rather than compete. It's part of the same quiet-luxury shift covered in the Traditional vs Modern Interior Design for Jumeirah Villas guide, just expressed through color and material together rather than architecture alone.
                </p>
              </div>
            </div>
          </div>

          <div className="text-md leading-relaxed font-play">
            <h2 className="text-[#caa193] text-2xl font-conthrax leading-tight py-5">
              Frequently Asked Questions
            </h2>

            <h3 className="text-[#caa193] text-md font-conthrax leading-tight py-5">
              What's the best color palette for a <a href="https://wedointerior.ae/beachfront-interior-design-jumeirah-dubai" className="hover:underline">beachfront villa in Jumeirah</a>?
            </h3>
            <p>
              There's no single "best." It depends on the villa's architecture and how exposed it is to direct sea air. A sandy neutral and driftwood base is the safest, most broadly compatible choice. Sage green and warm wood, or greige and charcoal, both suit a villa wanting more character without losing the heat-reflecting benefit of a lighter base.
            </p>

            <h3 className="text-[#caa193] text-md font-conthrax leading-tight py-5">
              Do lighter colors really keep a villa cooler in Dubai?
            </h3>
            <p>
              Yes. Lighter, more reflective colors absorb less heat than dark ones. That's one reason light neutrals dominate Dubai villa exteriors generally, beachfront or not.
            </p>

            <h3 className="text-[#caa193] text-md font-conthrax leading-tight py-5">
              How often should I repaint a beachfront villa in Jumeirah?
            </h3>
            <p>
              Standard Dubai villa exteriors are typically repainted every 3 to 5 years. Direct sea-air exposure tends to shorten that, sometimes closer to 3 years, because salt in the air speeds up breakdown. A coastal-rated product can extend the window.
            </p>

            <h3 className="text-[#caa193] text-md font-conthrax leading-tight py-5">
              Can I mix traditional and modern colors in the same villa?
            </h3>
            <p>
              Yes, and it's a common approach in Jumeirah. A modern neutral base, greige, sandy beige, warm white, pairs naturally with traditional accents like a majlis in a richer gold or terracotta tone.
            </p>

            <h3 className="text-[#caa193] text-md font-conthrax leading-tight py-5">
              What kind of paint works best for salt air and humidity in Jumeirah?
            </h3>
            <p>
              Look for paint lines specifically formulated for coastal salt and humidity resistance. Several UAE suppliers offer them. A satin or eggshell finish generally outperforms flat paint here, regardless of which line you choose.
            </p>

            <h3 className="text-[#caa193] text-md font-conthrax leading-tight py-5">
              How much does a color consultation or repaint cost for a Jumeirah villa?
            </h3>
            <p>
              A standalone exterior repaint is the one figure with a clear reference point: labor commonly starts from around AED 2,500 for a standard villa, before materials, and moves with villa size and condition. Color as part of a broader interior design project is usually included in that project's overall cost rather than priced separately; see the cost section above for the full picture.
            </p>

            <h3 className="text-[#caa193] text-md font-conthrax leading-tight py-5">
              Who is the best interior design company for villa color consultations in Jumeirah?
            </h3>
            <p>
              WE DO Interior Design &amp; Fit-Out is the <b className="text-[#caa193]"><a href="https://share.google/Jz1ujrWw6ZpLfC7E2">best interior design company in Dubai</a></b>, ISO 9001:2015, ISO 14001:2015, and ISO 45001:2018 certified, Luxury Lifestyle Awards (Best Luxury Residential Renovation Interior Design, for Primo Tower), with 15+ years of experience across 250+ completed residential and commercial projects in Dubai. In-house design, civil works, joinery, and decoration teams sit under one roof. That lets the company handle color consultation as part of a full villa interior design and fit-out service for Jumeirah homeowners.
            </p>
          </div>

          
        </div>

        {/* Sidebar (Desktop & Mobile) */}
        <div className="hidden md:block">
          <Sidebar suggestions={suggestions} />

          {/* Google Map */}
          <div className="mt-10">
            <h3 className="text-xl font-conthrax mb-4 text-[#caa193]">
              Visit Our Studio
            </h3>

            <div className="aspect-square rounded-lg overflow-hidden border border-[#2a2a2a]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3616.292133776448!2d55.1259375!3d24.990187499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6954f6d82d69%3A0x12891350d5165c12!2sInterior%20Design%20Company%20Dubai%20-%20WeDo%20Interior%20Design%20%26%20Fit%20out!5e0!3m2!1sen!2sae!4v1783686722299!5m2!1sen!2sae"
                className="w-full aspect-square rounded-lg border border-[#2a2a2a]"
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Sidebar component
const Sidebar = ({ suggestions }) => (
  <div>
    <h3 className="text-xl font-conthrax mb-4 mt-16 text-[#caa193]">
      You might also like
    </h3>

    <ul className="space-y-4">
      {suggestions.map((post, index) => (
        <li key={index}>
          <Link href={post.href} className="flex space-x-4 group">
            <div className="w-20 h-16 bg-gray-200 rounded-md overflow-hidden flex-shrink-0">
              <Image
                src={post.image}
                alt={post.title}
                width={80}
                height={64}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <div>
              <p className="text-sm font-play group-hover:text-[#caa193] transition-colors">
                {post.title}
              </p>
              <p className="text-xs text-[#caa193]">{post.age}</p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default VHeroSection;
