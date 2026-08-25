import Image from "next/image";
import Link from "next/link";

const VHeroSection = () => {
  const suggestions = [
    {
      title: "How to Design Apartment in Dubai Creek Harbour",
      age: "June 06, 2026",
      image: "/images/luxury high-rise apartment in Dubai Creek Harbour.png",
      href: "/creek-harbour-apartment-design",
    },
    {
      title: "Guide to Dubai Creek Harbour Waterfront",
      age: "May 25, 2026",
      image: "/images/Modern waterfront apartment living room in Dubai Creek Harbour.png",
      href: "/creek-harbour-waterfront-apartment-design",
    },
    {
      title: "3-5-7 Rule in Interior Design Dubai",
      age: "April 29, 2026",
      image: "/images/Luxury modern Dubai living room interiors.png",
      href: "/3-5-7-rule-interior-design-dubai",
    },
    {
      title: "Luxury Bathroom Design Trends in Dubai Creek Harbour Homes",
      age: "April 21, 2026",
      image: "/images/Luxury Bathroom Design Trends in Dubai Creek Harbour Homes.png",
      href: "/bathroom-design-trends-dubai-creek-harbour",
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
            <p>August 25, 2026</p>
          </div>

          <h1 className="text-[#caa193] text-3xl font-conthrax leading-tight py-5">
            Traditional vs Modern Interior Design for Jumeirah Villas
          </h1>

          {/* Image 1: Main Hero Banner */}
          <Image
            src="/images/traditional-architecture-modern-jumeirah-villa-interior.webp"
            title="Transitional interior adapting traditional Jumeirah villa architecture"
            alt="Traditional Architecture with Modern Jumeirah Villa Interior"
            width={800}
            height={450}
            className={imageStyles}
          />

          <div className="text-md leading-relaxed font-play">
            <p>
              Jumeirah's villa streets hold two design instincts side by side. On one plot, a decades-old villa opens onto a shaded courtyard through a carved mashrabiya screen and an arched majlis doorway. Next door, a rebuilt home reads as glass, stone, and an open floor plan from the street. Traditional interior design favors ornament, craftsmanship, and cultural symbolism, while modern interior design favors restraint, light, and function. The right choice for a Jumeirah villa depends on the property itself, not just personal taste.
            </p>
          </div>

          <div className="space-y-6">
            {/* Image 2: Intro Section */}
            <Image
              src="/images/traditional-arabic-majlis-jumeirah-villa-interior.webp"
              title="Traditional Arabic-inspired majlis interior in a Jumeirah villa"
              alt="Traditional Jumeirah Villa Interior with Majlis"
              width={800}
              height={450}
              className={imageStyles}
            />
            <div className="text-md leading-relaxed font-play">
              <p>
                This guide compares both styles across Jumeirah, looking at how each works with different villa architectures, what each typically costs, and why many homeowners choose to blend the two. It's written by <b className="text-[#caa193]"><a href="https://wedointerior.ae/">WE DO Interior Design & Fit-Out</a></b> an ISO 9001, 14001, and 45001-certified Dubai interior design and fit-out company with 15+ years of experience and 250+ completed residential and commercial projects across the city.
              </p>
            </div>
          </div>

          <div className="text-md leading-relaxed font-play">
            <h2 className="text-[#caa193] text-2xl font-conthrax leading-tight py-5">
              Key Facts: Traditional vs Modern in Jumeirah
            </h2>
            <ul className="list-disc pl-5">
              <li>
                Jumeirah is a low-rise coastal area consisting of Jumeirah, which have mostly villa-style residential streets.
              </li>
              <li>
                Traditional interior design focuses on the majlis, mashrabiya screens, arched entrances, and the use of a luxurious gold, burgundy, and jewel-tone color palette.
              </li>
              <li>
                Modern interior design in 2026 is moving beyond minimalist white. Open-plan layouts, floor-to-ceiling windows, and quiet luxury colour palettes are becoming increasingly popular.
              </li>
              <li>
                A complete <b className="text-[#caa193]"><a href="https://wedointerior.ae/villa-interior-design-jumeirah-dubai">villa interior design and fit-out project in Dubai</a></b> can cost around AED 250,000 to AED 2,000,000+, depending on the villa size, scope of work, materials, and quality level.
              </li>
              <li>
                A typical project takes around 3–6 months.
              </li>
              <li>
                Most Jumeirah villa owners nowadays opt for a transitional design style that combines both styles.
              </li>
            </ul>

            {/* Image 3: Key Facts */}
            <Image
              src="/images/modern-open-plan-jumeirah-villa-interior.webp"
              alt="Modern open-plan interior of a luxury Jumeirah villa"
              title="Modern Jumeirah Villa Interior Design"
              width={800}
              height={450}
              className={imageStyles}
            />
          </div>

          <div className="text-md leading-relaxed font-play">
            <h2 className="text-[#caa193] text-2xl font-conthrax leading-tight py-5">
              Traditional Interior Design: Key Features and Characteristics
            </h2>
            <p>
              Traditional villa interiors in Jumeirah often draw on Arabic, Gulf, and Mediterranean influences, an approach that can be incorporated into a broader <b className="text-[#caa193]"><a href="https://wedointerior.ae/interior-design-jumeirah-dubai">interior design in Jumeirah</a></b> strategy.
            </p>

            {/* Image 4: Traditional Features */}
            <Image
              src="/images/luxury-traditional-majlis-dubai-villa.webp"
              alt="Luxury traditional majlis seating in a Dubai villa"
              title="Traditional Majlis Interior Design Dubai Villa"
              width={800}
              height={450}
              className={imageStyles}
            />

            <div className="space-y-6 my-4">
              <div>
                <h3 className="text-[#caa193] text-lg font-conthrax mb-2">
                  The Majlis as the Anchor Room
                </h3>
                <p>
                  The majlis is a traditional reception area in Gulf homes and often serves as the main space for welcoming guests. It typically features low seating arranged around the room, carved wood details, and a formal, welcoming atmosphere.
                </p>
              </div>

              <div>
                <h3 className="text-[#caa193] text-lg font-conthrax mb-2">
                  Mashrabiya Screens and Arched Openings
                </h3>
                {/* Image 5: Mashrabiya Detail */}
                <Image
                  src="/images/mashrabiya-screen-arched-opening-jumeirah-villa.webp"
                  alt="Mashrabiya-inspired screen and arched doorway in Jumeirah villa"
                  title="Mashrabiya Screens and Arched Openings"
                  width={800}
                  height={450}
                  className={imageStyles}
                />
                <p>
                  Woodwork is often seen in lattice screens, arches, and window details. These features help control sunlight and airflow while adding visual interest to the interior.
                </p>
              </div>

              <div>
                <h3 className="text-[#caa193] text-lg font-conthrax mb-2">
                  Ornate Ceilings and Geometric Patterns
                </h3>
                <p>
                  Layered gypsum ceilings often feature centre medallions, arabesques, and geometric patterns inspired by Islamic architecture. These patterns can also appear on walls, screens, and soft furnishings.
                </p>
              </div>

              <div>
                <h3 className="text-[#caa193] text-lg font-conthrax mb-2">
                  Rich Palettes and Luxurious Materials
                </h3>
                <p>
                  Traditional Jumeirah interiors often use rich colours such as gold, deep red, blue, and terracotta against ivory or sand tones. Luxurious materials such as silk, velvet, and brocade are commonly used for furniture and soft furnishings. Carved wood, marble, and stone inlays can add further detail and texture.
                </p>
              </div>
            </div>
          </div>

          <div className="text-md leading-relaxed font-play">
            <h2 className="text-[#caa193] text-2xl font-conthrax leading-tight py-5">
              Modern Interior Design: Key Features and Characteristics
            </h2>
            <p>
              Modern interior design focuses on clean lines, natural light, and high-quality materials. In Dubai, villa interiors in 2026 are shifting towards warm neutrals rather than stark white.
            </p>

            {/* Image 6: Modern Features */}
            <Image
              src="/images/2026-jumeirah-villa-interior-design-trends.webp"
              alt="2026 quiet luxury and warm minimalism in a Jumeirah villa"
              title="2026 Jumeirah Villa Interior Design Trends"
              width={800}
              height={450}
              className={imageStyles}
            />

            <div className="space-y-6 my-4">
              <div>
                <h3 className="text-[#caa193] text-lg font-conthrax mb-2">
                  Open-Plan Living and Floor-to-Ceiling Glazing
                </h3>
                <p>
                  Open-plan layouts connect the kitchen, dining, and living areas into one spacious environment. Large glass doors and floor-to-ceiling windows create a seamless connection between the interior and outdoor areas, such as gardens and swimming pools.
                </p>
              </div>

              <div>
                <h3 className="text-[#caa193] text-lg font-conthrax mb-2">
                  Warm Minimalism Over Stark Minimalism
                </h3>
                <p>
                  In 2026, warm minimalism is becoming more popular than stark minimalism. Neutral shades such as beige, sand, taupe, and soft grey are replacing the traditional white and chrome palette.
                </p>
              </div>

              <div>
                <h3 className="text-[#caa193] text-lg font-conthrax mb-2">
                  Clean Architectural Lines
                </h3>
                <p>
                  Minimal ornamentation, handleless cabinetry, and simple geometric forms create a clean architectural look. Texture, materials, and layered lighting add visual interest without relying on heavy patterns.
                </p>
              </div>

              <div>
                <h3 className="text-[#caa193] text-lg font-conthrax mb-2">
                  Integrated Technology and Biophilic Elements
                </h3>
                <p>
                  Smart technology is becoming an important part of modern villa interiors. Lighting, temperature, security, and entertainment systems can be controlled through integrated smart-home systems. Natural stone, indoor plants, and water features also bring a softer feel to modern spaces and create a stronger connection with nature.
                </p>
              </div>
            </div>
          </div>

          <div className="text-md leading-relaxed font-play">
            <h2 className="text-[#caa193] text-2xl font-conthrax leading-tight py-5">
              How Traditional and Modern Styles Fit Jumeirah's Architecture and Lifestyle
            </h2>
            <p>
              Jumeirah is home to a mix of older and newer villas, which is reflected in its architecture. Older villas in Jumeirah 1, 2, and 3 often feature courtyards, shaded walls, and Arabic or Mediterranean influences. These features were designed to support traditional cooling techniques suited to the Gulf climate before modern air conditioning became common. Newer villas in the same areas increasingly feature contemporary architecture.
            </p>
            <p className="mt-4">
              This mix matters for more than aesthetics. Several factors specific to Jumeirah can influence which interior style works best for a particular villa.
            </p>

            {/* Image 7: Architecture Fit */}
            <Image
              src="/images/climate-responsive-indoor-outdoor-jumeirah-villa.webp"
              alt="Indoor-outdoor living area designed for Dubai villa climate"
              title="Climate-Responsive Indoor-Outdoor Jumeirah Villa Design"
              width={800}
              height={450}
              className={imageStyles}
            />

            <div className="space-y-6 my-4">
              <div>
                <h3 className="text-[#caa193] text-lg font-conthrax mb-2">
                  <a href="https://wedointerior.ae/villa-renovation-dubai" className="hover:underline">The Existing Architectural Shell</a>
                </h3>
                <p>
                  An original Jumeirah 1–3 villa with arches, a courtyard, or traditional structural details often suits a traditional or transitional interior. If these existing features need to be altered rather than simply redesigned, <b className="text-[#caa193]"><a href="https://wedointerior.ae/villa-renovation-dubai">villa renovation in Dubai</a></b> may also be required.
                </p>
              </div>

              <div>
                <h3 className="text-[#caa193] text-lg font-conthrax mb-2">
                  Dubai's Climate
                </h3>
                <p>
                  Dubai summers can regularly exceed 45°C, making climate an important consideration in villa design. Traditional courtyards and shaded facades help reduce heat naturally. Modern villas use features such as insulated glazing, deep overhangs, and efficient HVAC systems to maintain comfort while allowing more glass exposure.
                </p>
              </div>

              <div>
                <h3 className="text-[#caa193] text-lg font-conthrax mb-2">
                  Jumeirah's Hosting Culture
                </h3>
                <p>
                  Jumeirah's larger villas and private residential setting make it well suited to families and multigenerational households. A dedicated majlis for formal guest hosting is still genuinely used here, more so than in high-rise apartment communities elsewhere in Dubai.
                </p>
              </div>

              <div>
                <h3 className="text-[#caa193] text-lg font-conthrax mb-2">
                  Tenure and Everyday Lifestyle
                </h3>
                <p>
                  Jumeirah 1-3 is mostly leasehold and not freehold, except for the newer freehold zones around Port de La Mer and Jumeirah Bay Island. Long term leases tend to opt for interior design that lasts a lifetime instead of following fleeting trends, and that suits the traditional or transitional styles best. There are the Burj Al Arab, Jumeirah Mosque, and Kite Beach near Jumeirah villas, with tranquil and green residential roads behind them, Jumeirah villas support a slower, more private pace of living than newer master-planned communities.
                </p>
              </div>
            </div>
          </div>

          <div className="text-md leading-relaxed font-play">
            <h2 className="text-[#caa193] text-2xl font-conthrax leading-tight py-5">
              Benefits and Drawbacks: Traditional vs Modern for Jumeirah Villa Living
            </h2>

            <div className="overflow-x-auto my-4">
              <table className="w-full text-left text-sm border-collapse border border-gray-700">
                <thead>
                  <tr className="bg-[#caa193]/20 text-[#caa193]">
                    <th className="p-2 border border-gray-700 font-conthrax">Aspect</th>
                    <th className="p-2 border border-gray-700 font-conthrax">Traditional Interior Design</th>
                    <th className="p-2 border border-gray-700 font-conthrax">Modern Interior Design</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  <tr className="border border-gray-700">
                    <td className="p-2 border border-gray-700 font-semibold align-top whitespace-nowrap">Color palette</td>
                    <td className="p-2 border border-gray-700 align-top">Gold, burgundy, deep blue, terracotta</td>
                    <td className="p-2 border border-gray-700 align-top">Beige, sand, taupe, soft grey</td>
                  </tr>
                  <tr className="border border-gray-700">
                    <td className="p-2 border border-gray-700 font-semibold align-top whitespace-nowrap">Layout</td>
                    <td className="p-2 border border-gray-700 align-top">Defined rooms; majlis as a distinct formal space</td>
                    <td className="p-2 border border-gray-700 align-top">Open-plan living, dining, and kitchen</td>
                  </tr>
                  <tr className="border border-gray-700">
                    <td className="p-2 border border-gray-700 font-semibold align-top whitespace-nowrap">Signature materials</td>
                    <td className="p-2 border border-gray-700 align-top">Carved solid wood, brass, marble inlay, rich textiles</td>
                    <td className="p-2 border border-gray-700 align-top">Engineered stone, glass, matte marble, natural oak</td>
                  </tr>
                  <tr className="border border-gray-700">
                    <td className="p-2 border border-gray-700 font-semibold align-top whitespace-nowrap">Furniture</td>
                    <td className="p-2 border border-gray-700 align-top">Low majlis seating, carved wood, silk/velvet upholstery</td>
                    <td className="p-2 border border-gray-700 align-top">Streamlined silhouettes, handleless cabinetry</td>
                  </tr>
                  <tr className="border border-gray-700">
                    <td className="p-2 border border-gray-700 font-semibold align-top whitespace-nowrap">Lighting</td>
                    <td className="p-2 border border-gray-700 align-top">Statement chandeliers, lanterns, warm ambient glow</td>
                    <td className="p-2 border border-gray-700 align-top">Layered lighting: recessed, pendant, concealed LED</td>
                  </tr>
                  <tr className="border border-gray-700">
                    <td className="p-2 border border-gray-700 font-semibold align-top whitespace-nowrap">Best suited for</td>
                    <td className="p-2 border border-gray-700 align-top">Formal entertaining, multigenerational homes</td>
                    <td className="p-2 border border-gray-700 align-top">Young families, minimalist lifestyles</td>
                  </tr>
                  <tr className="border border-gray-700">
                    <td className="p-2 border border-gray-700 font-semibold align-top whitespace-nowrap">Maintenance</td>
                    <td className="p-2 border border-gray-700 align-top">Higher, detailed surfaces and fabrics need regular care</td>
                    <td className="p-2 border border-gray-700 align-top">Lower, simpler surfaces, easier daily upkeep</td>
                  </tr>
                  <tr className="border border-gray-700">
                    <td className="p-2 border border-gray-700 font-semibold align-top whitespace-nowrap">Climate response</td>
                    <td className="p-2 border border-gray-700 align-top">Courtyards, shaded facades, natural ventilation</td>
                    <td className="p-2 border border-gray-700 align-top">Insulated glazing, smart climate control</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Image 8: Table / Comparison */}
            <Image
              src="/images/custom-joinery-premium-jumeirah-villa-interiors.webp"
              alt="Custom carved joinery and premium finishes in a Jumeirah villa"
              title="Custom Joinery and Premium Villa Interior Finishes"
              width={800}
              height={450}
              className={imageStyles}
            />

            <div className="space-y-6 my-4">
              <div>
                <h3 className="text-[#caa193] text-lg font-conthrax mb-2">
                  Traditional Design: Strengths and Trade-Offs
                </h3>
                <p>
                  The strengths of conventional design are cultural context, the authentic feeling of occasion provided by the majlis, and timelessness, which means that the interior won't feel outdated like trend-based ones. However, there are some drawbacks, <b className="text-[#caa193]"><a href="https://wedointerior.ae/joinery-company-dubai">custom joinery</a></b> and fabrics increase both the price and need for maintenance, and too much detailing may become a burden for a small space.
                </p>
              </div>

              <div>
                <h3 className="text-[#caa193] text-lg font-conthrax mb-2">
                  Modern Design: Strengths and Trade-Offs
                </h3>
                <p>
                  The benefits of the modern style include less maintenance, better integration of smart home systems, and increased universal resale value. The drawback is that a pure modern-style villa interior may seem too generic and impersonal when set against the backdrop of a community built around its culture, which explains why most people in Jumeirah choose a compromise.
                </p>
              </div>
            </div>
          </div>

          <div className="text-md leading-relaxed font-play">
            <h2 className="text-[#caa193] text-2xl font-conthrax leading-tight py-5">
              Cost of Traditional vs Modern Interior Design in a Jumeirah Villa
            </h2>
            <p>
              Cost is one of the most practical differences between the two styles, and it scales with project scope rather than being a single fixed number. Dubai villa interior design and fit-out projects generally fall into a few broad tiers, and traditional detailing tends to sit toward the higher end of each one.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full text-left border-collapse border border-gray-700">
                <thead>
                  <tr className="bg-[#caa193]/20 text-[#caa193]">
                    <th className="p-3 border border-gray-700 font-conthrax">Project Tier</th>
                    <th className="p-3 border border-gray-700 font-conthrax">Approximate AED Range</th>
                    <th className="p-3 border border-gray-700 font-conthrax">What It Typically Includes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border border-gray-700">
                    <td className="p-3 border border-gray-700 font-semibold">Cosmetic refresh</td>
                    <td className="p-3 border border-gray-700">AED 80,000 – 250,000</td>
                    <td className="p-3 border border-gray-700">Paint, soft furnishings, select joinery — no full room overhaul</td>
                  </tr>
                  <tr className="border border-gray-700">
                    <td className="p-3 border border-gray-700 font-semibold">Mid-range</td>
                    <td className="p-3 border border-gray-700">AED 250,000 – 600,000</td>
                    <td className="p-3 border border-gray-700">Full room-by-room design, standard joinery and finishes</td>
                  </tr>
                  <tr className="border border-gray-700">
                    <td className="p-3 border border-gray-700 font-semibold">Luxury turnkey</td>
                    <td className="p-3 border border-gray-700">AED 600,000 – 2,000,000</td>
                    <td className="p-3 border border-gray-700">Custom joinery throughout, premium materials, full villa scope</td>
                  </tr>
                  <tr className="border border-gray-700">
                    <td className="p-3 border border-gray-700 font-semibold">Ultra-luxury</td>
                    <td className="p-3 border border-gray-700">AED 2,000,000+</td>
                    <td className="p-3 border border-gray-700">Bespoke carved detailing, imported textiles and stone, full structural and interior overhaul</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Image 9: Cost Tiers (Unique file name fixed) */}
            <Image
              src="/images/custom-joinery-premium-jumeirah-villa-interior.webp"
              alt="Premium villa design and custom joinery fit-out in Dubai"
              title="Premium Villa Design in Dubai"
              width={800}
              height={450}
              className={imageStyles}
            />

            <p className="mt-4">
              They are market averages and not exact quotes. Traditionally styled interiors will always be on the expensive side of the range due to hand-carved joinery, costly fabrics, and expensive ceiling treatments, whereas modern interiors may be provided at much lower costs within the same range due to simple construction and details. For Dubai villa interior finishing costs on a square foot basis, the majority of them fall into the AED 250 - 2,000+ price range.
            </p>
          </div>

          <div className="text-md leading-relaxed font-play">
            <h2 className="text-[#caa193] text-2xl font-conthrax leading-tight py-5">
              How to Choose Between Traditional and Modern Design
            </h2>
            <p>
              <strong className="text-[#caa193]">
                Start from where you’re at in reality —
              </strong>{" "}
              If you frequently host majlises in your house and want a traditional design for the space, it will suit even if the whole villa has a contemporary theme. If you lead an easygoing and family-centric lifestyle, open spaces would be better for you.
            </p>

            <ul className="space-y-4 my-4">
              <li>
                <strong className="text-[#caa193]">
                  Check the current framework of the villa —
                </strong>{" "}
                before making any decisions on the finishing elements. A plot from Jumeirah 1-3 with existing archways and a courtyard would match if you want to go for a traditional or transitional design.
              </li>
              <li>
                <strong className="text-[#caa193]">
                  Set a budget and time frame right at the outset —
                </strong>{" "}
                Classic style villas with carved woodwork and imported fabrics are more often than not on the pricier side of the roughly AED 250,000-2,000,000+ range that most villas cost to fit out in Dubai, and most villas take roughly 3-6 months to complete.
              </li>

              {/* Image 10: Unique Image inserted */}
              <Image
                src="/images/warm-minimalist-jumeirah-villa-interior.webp"
                alt="Warm minimalist living room in a luxury Dubai villa"
                title="Warm Minimalism in Jumeirah Villa Interiors"
                width={800}
                height={450}
                className={imageStyles}
              />

              <li>
                <strong className="text-[#caa193]">
                  Design around Dubai's climate from day one —
                </strong>{" "}
                It's about shade, glass, and ventilation; otherwise you're spending the rest of the year living in an uncomfortable villa.
              </li>
              <li>
                <strong className="text-[#caa193]">
                  Consider a transitional blend before committing to one pure style —
                </strong>{" "}
                A contemporary shell with clean walls and an open plan, along with a neutral color palette, combined with traditional elements such as a carved console, a screen with a mashrabiya influence, and a majlis-like space is the most popular combination for Jumeirah home owners.
              </li>
              <li>
                <strong className="text-[#caa193]">
                  Work with a designer experienced in <b className="text-[#caa193]"><a href="https://wedointerior.ae/villa-interior-design-jumeirah-dubai">Jumeirah villa interior design</a></b> who can show real work in both styles —
                </strong>{" "}
                The two design languages require different skill sets in joinery/pattern making vs. spatial planning/material selection, so have them provide references from completed villas built in both traditions.
              </li>
            </ul>
          </div>

          <div className="text-md leading-relaxed font-play">
            <h2 className="text-[#caa193] text-2xl font-conthrax leading-tight py-5">
              2026 Interior Design Trends Shaping Jumeirah's Luxury Villas
            </h2>

            <p>
              There has been an evident change in the Dubai villa interior industry in 2026, and the trend is almost equally balanced between traditional and contemporary, emphasizing how the combined approach is effective for this place.
            </p>

            <ul className="space-y-4 my-4">
              <li>
                <strong className="text-[#caa193] block text-lg font-conthrax">
                  Quiet Luxury
                </strong>{" "}
                Subtle sophistication has replaced overt opulence: muted palettes, natural textures, and clean silhouettes rather than glossy surfaces and oversized statement pieces.
              </li>
              <li>
                <strong className="text-[#caa193] block text-lg font-conthrax">
                  Warm Minimalism
                </strong>{" "}
                Instead of using pure white color, modern architecture has embraced beige, sand, taupe, and other earthy browns, which make up a part of the visual bridge to the warmth of traditional architecture.
              </li>

              {/* Image 11: Unique Image inserted */}
              <Image
                src="/images/traditional-vs-modern-jumeirah-villa-interior-design.webp"
                alt="Traditional and modern interior design blended in a luxury Jumeirah villa"
                title="Traditional vs Modern Jumeirah Villa Interior Design"
                width={800}
                height={450}
                className={imageStyles}
              />

              <li>
                <strong className="text-[#caa193] block text-lg font-conthrax">
                  Biophilic Design
                </strong>{" "}
                Living walls, natural stone, indoor water features, and floor-to-ceiling garden views are increasingly appearing in luxury villa interiors.
              </li>
              <li>
                <strong className="text-[#caa193] block text-lg font-conthrax">
                  Curved and Organic Forms
                </strong>{" "}
                Sofas that are rounded in shape, doorways that are arched in design, and kitchen islands that have curves are becoming more common to soften the rigid shapes found in previous villa interiors.
              </li>
              <li>
                <strong className="text-[#caa193] block text-lg font-conthrax">
                  Expanded Use of Marble
                </strong>{" "}
                Marble book-matched walls and marble-faced cabinets are making appearances in both traditional and contemporary Jumeirah villas.
              </li>
              <li>
                <strong className="text-[#caa193] block text-lg font-conthrax">
                  Indoor-Outdoor Living
                </strong>{" "}
                Outdoor relaxation areas are being designed in the style of indoor living rooms, creating an updated form of the traditional Gulf architectural concept of the courtyard.
              </li>
            </ul>
          </div>

          <div className="text-md leading-relaxed font-play">
            <h2 className="text-[#caa193] text-2xl font-conthrax leading-tight py-5">
              Frequently Asked Questions
            </h2>

            <h3 className="text-[#caa193] text-md font-conthrax leading-tight py-5">
              What defines traditional vs modern interior design?
            </h3>
            <p>
              Traditional interior design in Dubai reflects an Arabic and Mediterranean influence through such elements as the Majlis sofa, Mashrabiya lattice window panels, arches and openings, as well as bright colors like gold and jewels. Modern interior design emphasizes clean lines, unobstructed spaces, neutral colors, and simplicity. The main distinction lies between details and simplicity.
            </p>

            {/* Image 12: Unique Image inserted */}
            <Image
              src="/images/traditional-vs-modern-villa-interior-comparison.webp"
              alt="Traditional and modern interior styles compared in a luxury villa"
              title="Traditional vs Modern Villa Interior Comparison"
              width={800}
              height={450}
              className={imageStyles}
            />

            <h3 className="text-[#caa193] text-md font-conthrax leading-tight py-5">
              Which style is better suited for Jumeirah Villas?
            </h3>
            <p>
              The choice of style is not necessarily one being more superior to the other because this is determined by the villa itself. Those older plots of Jumeirah 1, 2 and 3 that have their courtyards and arched fronts are suitable for interior designs which are transitional or traditional, whereas new reconstructions that have large windows are conducive to modern designs. Most Jumeirah homeowners today choose a blend of both rather than either extreme.
            </p>

            <h3 className="text-[#caa193] text-md font-conthrax leading-tight py-5">
              How do I blend traditional and modern elements effectively?
            </h3>
            <p>
              Maintain the architectural structure with the modern, clean walls and open space, neutral color scheme with traditional furniture like wooden console table, mesh screen inspired from mashrabiya style, and majlis seating area. Keep ornate elements to just one or two main parts of the design so that it doesn’t become cluttered.
            </p>

            <h3 className="text-[#caa193] text-md font-conthrax leading-tight py-5">
              What are the cost considerations for each style in a luxury Jumeirah villa?
            </h3>
            <p>
              Interior design and fit-out projects in Dubai villas typically range from around AED 250,000, which is mid-level renovation to AED 2,000,000 and above, which is for luxurious turnkey projects, or approximately between AED 250 and 2,000 and above per square foot. The figures mentioned above are only market averages, not set prices; traditional interior design projects tend to be on the higher side due to intricate wood carving and custom-made ceiling work, while modern interiors tend to be affordable.
            </p>

            <h3 className="text-[#caa193] text-md font-conthrax leading-tight py-5">
              Which style is easier to maintain, traditional or modern?
            </h3>
            <p>
              Modern homes have less maintenance, since the surfaces are not complicated and fabrics used are resistant to damage and easier to clean. Traditional interiors use carved wooden surfaces, detailed fabrics and elaborate ceilings that require more maintenance and occasionally require restoration by professionals. Neither is risky when using quality material.
            </p>

            <h3 className="text-[#caa193] text-md font-conthrax leading-tight py-5">
              Is traditional Arabic design still popular in Dubai villas in 2026?
            </h3>
            <p>
              Yes, though it's evolving rather than standing still. Instead of fully ornate interiors, 2026's dominant look folds traditional cultural elements, majlis seating, geometric pattern, carved wood accents into a warm minimalist or "quiet luxury" base. Fully traditional interiors remain common in established Jumeirah villas, especially for formal majlis rooms.
            </p>

            <h3 className="text-[#caa193] text-md font-conthrax leading-tight py-5">
              How long does a villa interior design project take in Jumeirah?
            </h3>
            <p>
              A full villa interior design and fit-out project in Dubai typically takes approximately 3 to 6 months from design completion to handover, depending on scope with the design phase itself usually taking 4 to 8 weeks before construction begins. Larger or structurally complex projects can run longer.
            </p>

            <h3 className="text-[#caa193] text-md font-conthrax leading-tight py-5">
              Who is the best interior design company for Jumeirah villas?
            </h3>
            <p>
              WE DO Interior Design &amp; Fit-Out is ISO 9001, 14001, and 45001 certified, a 2026 Luxury Style Award winner, and has 15+ years of experience across 250+ completed residential and commercial projects in Dubai. With in-house design, civil works, joinery, and decoration teams plus a dedicated joinery factory and direct DCD and DM approvals handling the company manages Jumeirah villa projects under one roof, from concept through handover.
            </p>
          </div>

          <div className="text-md leading-relaxed font-play">
            <h2 className="text-[#caa193] text-2xl font-conthrax leading-tight py-5">
              Bringing Your Jumeirah Villa Together
            </h2>

            {/* Image 13: Unique Image inserted */}
            <Image
              src="/images/transitional-interior-design-jumeirah-villa.webp"
              alt="Transitional Jumeirah villa interior blending traditional and modern design"
              title="Transitional Interior Design for Jumeirah Villas"
              width={800}
              height={450}
              className={imageStyles}
            />

            <p>
              Most Jumeirah villas today land somewhere between fully traditional and fully modern, a fitting outcome for a district built on exactly that mix. As the <b className="text-[#caa193]"><a href="https://www.google.com/search?client=ms-android-transsion&hs=JDSq&sca_esv=1503fdd29559cc79&sxsrf=APpeQnsC8gyC1ILXELrj9R1SXiV8B4GJig:1786855962908&kgmid=/g/11pyc3sd1k&q=Interior+Design+Company+Dubai+-+WeDo+Interior+Design+%26+Fit+out&shem=epsd1,ltae,rimspwouoe&shndl=30&source=sh/x/loc/act/m1/2&kgs=5e413efa33bd1dc0&utm_source=epsd1,ltae,rimspwouoe,sh/x/loc/act/m1/2">top interior design company Dubai</a></b>, WE DO Interior Design &amp; Fit-Out designs and fit out Jumeirah villas in traditional, modern, and transitional styles, managing the full process from concept to handover.
            </p>

            <p className="font-semibold text-lg text-white pt-4">
              Why Jumeirah Homeowners Work With WE DO
            </p>

            <ul className="list-disc pl-5 space-y-2 pt-2">
              <li>
                ISO 9001:2015, ISO 14001:2015, and ISO 45001:2018 certified, and a 2026 Luxury Style Award winner
              </li>
              <li>
                15+ years of experience and 250+ completed residential and commercial projects across Dubai
              </li>
              <li>
                In-house design, civil works, joinery, and decoration teams, plus a dedicated joinery factory, all under one roof
              </li>
              <li>
                Direct approvals handling with Dubai Civil Defence (DCD) and Dubai Municipality (DM) the authorities relevant to Jumeirah's villa streets as well as private developers including Emaar and Damac elsewhere in Dubai
              </li>
            </ul>

            {/* Image 14: Unique Image inserted */}
            <Image
              src="/images/transitional-interior-design-jumeirah-villas.webp"
              alt="WE DO Interior Design Jumeirah villa fit-out consultation"
              title="Jumeirah Villa Fit-Out Consultation"
              width={800}
              height={450}
              className={imageStyles}
            />

            <p className="font-semibold text-lg text-white pt-4">
              Ready to start your Jumeirah villa project?
            </p>
            <p className="pt-4">
              <b className="text-[#caa193]"><a href="https://wedointerior.ae/contact-us">Contact WE DO Interior Design & Fit-Out</a></b> today the team offers a complimentary site visit to your villa once you confirm you'd like to move forward.
            </p>

            <div className="pt-4 space-y-1">
              <p>WE DO Interior Design &amp; Fit-Out WH-05 A, Jebel Ali Industrial 1, Dubai, UAE</p>
              <p>
                Phone / WhatsApp:{" "}
                <a href="https://wa.me/971588075603" className="text-[#caa193] hover:underline" target="_blank" rel="noopener noreferrer">
                  +971 58 807 5603
                </a>
              </p>
              <p>
                Email:{" "}
                <a href="mailto:info@wedointerior.ae" className="text-[#caa193] hover:underline">
                  info@wedointerior.ae
                </a>
              </p>
            </div>
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