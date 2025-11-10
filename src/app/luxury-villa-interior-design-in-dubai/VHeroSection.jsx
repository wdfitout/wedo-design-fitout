// VHeroSection.jsx
import Image from "next/image";
import Link from "next/link";

const VHeroSection = () => {
  // Each suggestion now REQUIRES a manual href (no auto-slugs).
  const suggestions = [
    {
      title: "5 Modern Apartment Interior Design",
      age: "1 years ago",
      image: "/images/high-end-dubai-apartment-interior-design-in-dubai.png",
      href: "/modern-apartment-interior-design", // manual internal route
    },
    {
      title: "6 Interior Design Styles Dubai 2025",
      age: "1 years ago",
      image: "/images/six-best-interior-design-trends-dubai-2025.png",
      href: "/interior-design-styles-dubai-2025", // example external link
    },
    {
      title: "Tips For Luxury Villa Interior Design in Dubai",
      age: "1 year ago",
      image: "/images/district-one-contemporary-villa-interior-luxury-villa-interior-design-in-dubai.png",
      href: "/luxury-villa-interior-design-in-dubai", // manual internal route
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 text-white mt-20">
      {/* Responsive layout: blog on left, sidebar on right for desktop */}
      <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-8">
        {/* Blog Content */}
        <div>
          <div className="text-sm mb-4 text-[#caa193]">
            <p>Oct 28, 2025 • No Comments</p>
          </div>

          <h1 className="text-[#caa193] text-3xl font-conthrax leading-tight py-10">
            Tips For Luxury Villa Interior Design in Dubai
          </h1>

          <div className="text-sm leading-relaxed font-play">
            <p>
              The architectural landscape of Dubai is a home to the most luxurious villas in the world. At WE DO Interior Design &amp; Fitout, we know that{" "}
              <b className="text-[#caa193]">
                <a href="https://wedointerior.ae/villa-interior-design-dubai">luxury villa interior design in Dubai</a>
              </b>{" "}
              is not only about beauty, but also creating a lifestyle for people that matches the vibe of this city.
            </p>
            <br />
            <p>
              From modern villas in District 1 MBR City to family-oriented homes in Majan and classic Al Manara villas, our designs consist of comfort, craftsmanship and
              creativity which transforms ordinary villa design into extraordinary living experience.
            </p>
            <br />
          </div>

          <div className="space-y-6">
            <Image
              src="/images/luxurious-modern-dubai-villa-interior-luxury-villa-interior-design-in-dubai.png"
              alt="Modern apartment Room interior Design Dubai"
              width={800}
              height={600}
              className="rounded-md w-full object-cover"
            />
            <div className="text-sm leading-relaxed font-play">
              <p></p>
              <h2 className="text-[#caa193] text-2xl font-conthrax leading-tight py-5">The Essence of Villa Living in Dubai</h2>
              <p>
                The Villa interior Design in Dubai lies between balancing luxury with practicality. Our{" "}
                <b className="text-[#caa193]">
                  <a href="https://wedointerior.ae/al-manara-luxury-villa">Al Manara luxury villa interior project</a>
                </b>{" "}
                is an example in which every corner of this villa tells a story about client personality, modern minimalism and sophistication. Villas Interior Designs across
                District 1 MBR City and Majan consist of high ceilings, open layouts and expansive terraces. Our interior design and fit out team in Dubai integrates intelligent
                lighting, natural materials and soft textures to bring style and comfort.
              </p>
            </div>

            <Image
              src="/images/serene-villa-living-room-in-al-manara-dubai-luxury-villa-interior-design-in-dubai.png"
              alt="Modern Laundry Room Design 2"
              width={800}
              height={600}
              className="rounded-md w-full object-cover"
            />
          </div>

          <div className="text-sm leading-relaxed font-play">
            <h2 className="text-[#caa193] text-2xl font-conthrax leading-tight py-3">Key Trends in Luxury Villa Interior Design in Dubai</h2>
            <p>
              Staying at the forefront of design evolution, WE DO Interior Design &amp; Fitout keeps track of the latest trends in luxury villa interior design in Dubai from
              architectural innovation to high-end finishes.
            </p>
            <br />

            <h3 className="text-[#caa193] text-md font-conthrax leading-tight py-3">Modern Luxury and Minimalism</h3>
            <p>
              Dubai’s elite homeowners and our beloved clients prefer serene and uncluttered spaces with clean lines and neutral palettes.{" "}
              <b className="text-[#caa193]">
                <a href="https://wedointerior.ae/district-one-contemporary-villa">The District One Contemporary Villa</a>
              </b>{" "}
              is an example of our best villa interior design featuring soft beige tones, marble floors, and seamless spatial flow that reflect refined modern living of Dubai,
              United Arab Emirates.
            </p>
            <br />
            <Image
              src="/images/district-one-contemporary-villa-interior-luxury-villa-interior-design-in-dubai.png"
              alt="Modern Laundry Room Design 2"
              width={800}
              height={600}
              className="rounded-md w-full object-cover"
            />

            <h3 className="text-[#caa193] text-md font-conthrax leading-tight py-3">Indoor-Outdoor Harmony</h3>
            <p>
              Villa interior designs in Dubai now pay attention to outdoor connection. Shaded patios, courtyards, and poolside lounges become natural extensions of indoor
              living areas which are perfect for the Dubai luxury lifestyle and weather changes.
            </p>
            <br />
            <Image
              src="/images/luxury-dubai-villa-with-glass-walls-opening-luxury-villa-interior-design-in-dubai.png"
              alt="Modern Laundry Room Design 2"
              width={800}
              height={600}
              className="rounded-md w-full object-cover"
            />

            <h3 className="text-[#caa193] text-md font-conthrax leading-tight py-3">Smart Home Integration</h3>
            <p>
              As everybody knows, technology enhances comfort. Automated lighting, security, and climate systems are now a very important element of modern villa design
              specially in Dubai, providing both functionality and sophistication.
            </p>
            <br />
            <Image
              src="/images/modern-villa-interior-with-smart-home-technology-luxury-villa-interior-design-in-dubai.png"
              alt="Modern Laundry Room Design 2"
              width={800}
              height={600}
              className="rounded-md w-full object-cover"
            />

            <h3 className="text-[#caa193] text-md font-conthrax leading-tight py-3">Sustainability and Natural Materials</h3>
            <p>
              Luxury in today's era means mindful and smart living. Our villa projects in Majan and Al Manara use eco-friendly materials, efficient lighting, and water-saving
              solutions which merge sustainability with elegance.
            </p>
            <br />
            <Image
              src="/images/eco-friendly-villa-interior-in-dubai-luxury-villa-interior-design-in-dubai.png"
              alt="Modern Laundry Room Design 2"
              width={800}
              height={600}
              className="rounded-md w-full object-cover"
            />

            <h3 className="text-[#caa193] text-md font-conthrax leading-tight py-3">Customization and Bespoke Interior Design</h3>
            <p>
              Every villa has its personality. From custom-made furniture to statement chandeliers and art pieces, personalization defines bespoke villa interior design in
              Dubai.
            </p>
            <br />
            <Image
              src="/images/custom-luxury-villa-interior-in-dubai-luxury-villa-interior-design-in-dubai.png"
              alt="Modern Laundry Room Design 2"
              width={800}
              height={600}
              className="rounded-md w-full object-cover"
            />
          </div>

          <div className="text-sm leading-relaxed font-play">
            <h2 className="text-[#caa193] text-2xl font-conthrax leading-tight py-5">Layout and Space Planning Excellence</h2>
            <p>
              One of the main parts of residential interior design in Dubai is all about space planning. Our team ensures that every square meter adds purpose and comfort to
              your home. In District 1 MBR City, we designed a luxury villa interior emphasizing spatial flow between the living room, dining area, and terrace creating a
              continuous experience of openness and elegance.
            </p>
            <br />

            <Image
              src="/images/luxury-villa-layout-with-connected-living-luxury-villa-interior-design-in-dubai.png"
              alt="Modern Laundry Room Design 2"
              width={800}
              height={600}
              className="rounded-md w-full object-cover"
            />
            <br />

            <p>
              Our Majan villa Interior Design project represents the value of family oriented villas: public areas for gatherings, private quarters for relaxation, and
              multi-functional rooms adaptable to daily life. This detailed planning with sophisticated materials and natural light, results in timeless luxury and practical
              living.
            </p>
          </div>

          <div className="text-sm leading-relaxed font-play">
            <h2 className="text-[#caa193] text-2xl font-conthrax leading-tight py-5">Dubai Villa Interior Design Styles</h2>
            <p>
              Villa interior designs in Dubai are deeply influenced by a blend of international and regional design philosophies of interior design and fitout. As one of the
              top interior fit-out companies in Dubai, WE DO Interior Design &amp; Fitout crafts designs that reflect clients’ lifestyles.
            </p>
            <br />
            <p>
              <b className="text-[#caa193]">Modern Interior Design: </b> Prefer simplicity, form, and technology. Perfect Design for villas in District One Contemporary
              communities in Dubai.
            </p>
            <br />
            <p>
              <b className="text-[#caa193]"> Contemporary Interior Design:</b> Fluid and Dynamic that evolves with trends and innovations in time.
            </p>
            <br />
            <p>
              <b className="text-[#caa193]">Classic Luxury:</b> Ornate detailing, warm tones, and classical furniture for those who value heritage and grandeur and 90’s
              aesthetics.
            </p>
            <p></p>
          </div>

          <div className="text-sm leading-relaxed font-play">
            <h2 className="text-[#caa193] text-2xl font-conthrax leading-tight py-5">Selection Of Materials, Colors, and Décor</h2>
            <p>
              The most important and prominent factor of luxury villa designs in Dubai is the selection of colours, textures, and materials. Our team of interior designers in
              Dubai prefer a neutral palette of beiges, whites, and greys which are layered with accents like gold, bronze, and deep wood tones to prominent the warmth and
              richness. For example, the Al Manara Villa interior design uses soft beige tones and gold accents to create a calm yet glamorous aesthetic. In contrast, our
              District 1 MBR City villa interior consists of cool marble, matte black fixtures, and natural wood.
            </p>
            <br />
            <Image
              src="/images/luxury-villa-interior-design-in-dubai-close-up-marble-materials.png"
              alt="Modern Laundry Room Design 2"
              width={800}
              height={600}
              className="rounded-md w-full object-cover"
            />
            <br />
          </div>

          <div className="text-sm leading-relaxed font-play">
            <h2 className="text-[#caa193] text-2xl font-conthrax leading-tight py-5">Practical Tips for Villa Interior Design in Dubai</h2>
            <p>
              Whether its a{" "}
              <b className="text-[#caa193]">
                <a href="https://wedointerior.ae/villa-construction-dubai">villa renovation in Dubai or a Villa construction in Dubai</a>
              </b>
              , keep these things in mind:
            </p>
            <br />
            <p>
              <b className="text-[#caa193]">1- Choose the right materials — </b>Go for heat-resistant, durable finishes that are according to the climate of Dubai.
            </p>
            <br />
            <p>
              <b className="text-[#caa193]">2- Layer your lighting — </b>Use ambient, accent, and task lighting to shape atmosphere and highlight features of your interior
              design.
            </p>
            <br />
            <p>
              <b className="text-[#caa193]">3- Integrate outdoor areas — </b>Extend your living spaces to terraces, courtyards, and pool decks.
            </p>
            <br />
            <p>
              <b className="text-[#caa193]">4- Prioritize comfort —</b> Incorporate ergonomic furniture, cozy textures, and smart yet intelligent layouts.
            </p>
            <br />
            <p>
              <b className="text-[#caa193]">5- Work with professionals — </b>Partner with experienced interior decoration companies in Dubai like WE DO Interior Design &amp;
              Fitout for seamless design-to-build execution.
            </p>
            <br />
          </div>

          <div className="text-sm leading-relaxed font-play">
            <h2 className="text-[#caa193] text-2xl font-conthrax leading-tight py-5">District 1 Contemporary Villa Project by WE DO Interior Design &amp; Fitout</h2>
            <p>
              Our{" "}
              <b className="text-[#caa193]">
                <a href="https://wedointerior.ae/district-1-mbr-city-contemporary-villa"> District 1 Contemporary Villa project</a>
              </b>{" "}
              shows the perfect blend of modern aesthetics and personalized Dubai luxury. WEDO designed open spaces with floor-to-ceiling glass, custom-made furnishings, and
              minimalist detailing — resulting in a serene environment that exudes sophistication. Through our turnkey renovation and fit-out execution, the MBR villa was
              transformed into a sanctuary of light, luxury, and comfort while representing the bespoke villa interior design in Dubai.
            </p>
            <br />
            <Image
              src="/images/modern-villas-in-district-1-mbr-city-luxury-villa-interior-design-in-dubai.png"
              alt="Modern Laundry Room Design 2"
              width={800}
              height={600}
              className="rounded-md w-full object-cover"
            />
            <br />
            <h2 className="text-[#caa193] text-2xl font-conthrax leading-tight py-5">Why Choose WE DO Interior Design &amp; Fitout</h2>
            <p>
              As one of the top 10 interior fit-out companies in Dubai, WE DO Interior Design &amp; Fitout specializes in transforming villas across high end areas such as Al
              Manara, District 1 MBR City, and Majan.
            </p>
            <br />
            <ul className="list-disc pl-5">
              <li>Luxury villa interior design Dubai</li>
              <li>Turnkey interior fit-out Dubai projects</li>
              <li>Residential interior design Dubai services</li>
              <li>Custom décor and design-build execution</li>
              <li>Villa Construction In Dubai</li>
              <li>Villa Renovation services in Dubai</li>
            </ul>
            <br />
            <h2 className="text-[#caa193] text-2xl font-conthrax leading-tight py-5">Summary</h2>
            <p>
              Luxury villa interior design in Dubai is more than aesthetic appeal it’s a statement of lifestyle and individuality. Every villa we design tells a story of
              craftsmanship, creativity, and modern comfort. From the classic charm of Al Manara villas to the modern minimalism of District 1 MBR City, WE DO Interior Design
              &amp; Fitout continues to set benchmarks among interior design firms in Dubai and interior fit-out contractors Dubai for bespoke villa creations.
            </p>
          </div>

          {/* Sidebar (Mobile View) */}
          <div className="mt-12 md:hidden">
            <Sidebar suggestions={suggestions} />
          </div>
        </div>

        {/* Sidebar (Desktop View) */}
        <div className="hidden md:block">
          {/* Make the sidebar sticky on desktop.
              Adjust top spacing to match your header height. */}
          <div className="md:sticky md:top-24 md:max-h-[calc(100vh-6rem)] md:overflow-y-auto">
            <Sidebar suggestions={suggestions} />
          </div>
        </div>
      </div>
    </div>
  );
};

const isExternal = (url) => /^https?:\/\//i.test(url);

// Sidebar component
const Sidebar = ({ suggestions }) => {
  return (
    <div>
      <h3 className="text-xl font-conthrax mb-4 mt-16 text-[#caa193]">You might also like</h3>
      <ul className="space-y-4">
        {suggestions.map((post, index) => {
          const content = (
            <div className="group flex space-x-4 items-center">
              <div className="w-20 h-16 bg-gray-200 rounded-md overflow-hidden shrink-0">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={80}
                  height={64}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div>
                <p className="text-sm font-play group-hover:underline">{post.title}</p>
                <p className="text-xs text-[#caa193]">{post.age}</p>
              </div>
            </div>
          );

          return (
            <li key={index}>
              {isExternal(post.href) ? (
                <a
                  href={post.href}
                  aria-label={`Read: ${post.title}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex space-x-4 items-center"
                >
                  {content}
                </a>
              ) : (
                <Link
                  href={post.href}
                  aria-label={`Read: ${post.title}`}
                  className="group flex space-x-4 items-center"
                >
                  {content}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default VHeroSection;
