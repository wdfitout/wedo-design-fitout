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
            <p>Sep 23, 2025 • No Comments</p>
          </div>

          <h1 className="text-[#caa193] text-3xl font-conthrax leading-tight py-10">
            Interior Design Styles Dubai 2025: 6 Must-Know Trends
          </h1>

          <div className="text-sm leading-relaxed font-play">
            <p>
              Whenever designing a new interior design in Dubai, one common question often comes in our minds is
              <b className="text-[#caa193]"><a href="https://wedointerior.ae/interior-design-styles-dubai-2025"> how many interior design styles are there?</a></b>
              {" "}The reality is that there are dozens—each with its own history, character, and philosophy of design. But to simplify, we’ve reduced it to the 6 most popular and versatile styles that continue to influence elegant homes and business spaces of Dubai in 2025.
            </p>
            <br />
          </div>

          <div className="space-y-6">
            <Image
              src="/images/six-best-interior-design-trends-dubai-2025.png"
              alt="Six best interior design trends in Dubai"
              width={800}
              height={600}
              className="rounded-md w-full object-cover"
            />

            <div className="text-sm leading-relaxed font-play">
              <p>
                Whether you lean toward clean lines, warm textures, or graphic statements, knowing these core styles helps you shape a personal aesthetic and make informed decisions. Let’s explore the 6 interior styles with WE DO Interior Design & Fitout that define stunning homes and spaces.
              </p>
              <h2 className="text-[#caa193] text-2xl font-conthrax leading-tight py-5">6 Must-Know Interior Design Styles in 2025</h2>
              <p>
                What is modern design? It’s a classic style characterized by simple lines, efficient layouts, and minimal ornamentation.
                <b className="text-[#caa193]"><a href="https://wedointerior.ae/modern-apartment-interior-design"> Modern interior design in Dubai</a></b>
                {" "}embraces straightforwardness, simplicity, and natural elements such as stone, wood, and glass. In 2025, the top ideas include built-ins, open spaces, and subtle contrasts with black or metallic accents. Mixing in mid-century modern features (clean lines, iconic furniture, warm tones) adds personality without losing simplicity.
              </p>
            </div>

            <Image
              src="/images/mid-century-modern-interior-design-features.png"
              alt="Mid-century modern interior design features in Dubai"
              width={800}
              height={600}
              className="rounded-md w-full object-cover"
            />
          </div>

          <div className="text-sm leading-relaxed font-play">
            <h2 className="text-[#caa193] text-2xl font-conthrax leading-tight py-5">Traditional Interior Design Style In Dubai</h2>
            <p>
              Rooted in 18th–19th century European design, Traditional style celebrates symmetry, rich wood tones, and luxurious detail. Today’s Dubai take balances formality with lighter palettes and simplified patterns for timeless comfort.
            </p>
            <br />
            <Image
              src="/images/traditional-classic-interior-design-dubai.png"
              alt="Traditional classic interior design in Dubai"
              width={800}
              height={600}
              className="rounded-md w-full object-cover"
            />
          </div>

          <div className="text-sm leading-relaxed font-play">
            <h2 className="text-[#caa193] text-2xl font-conthrax leading-tight py-5">Minimalistic Interior Design in Dubai</h2>
            <p>
              Minimalism thrives in Palm Jumeirah, Dubai Marina, and Business Bay. Expect clean lines, uncluttered rooms, and neutral palettes. Layer muted textures, large-format floor tiles, and curated monochrome art for warmth and refinement. WE DO Interior Design & Fitout—the
              <b className="text-[#caa193]"><a href="https://wedointerior.ae/contact-us"> best Interior Design company in Dubai</a></b>
              —helps clients shape serene, sophisticated retreats.
            </p>
            <br />
            <Image
              src="/images/modern-interior-design-dubai-dubai-marina.png"
              alt="Modern interior design in Dubai Marina"
              width={800}
              height={600}
              className="rounded-md w-full object-cover"
            />
          </div>

          <div className="text-sm leading-relaxed font-play">
            <h2 className="text-[#caa193] text-2xl font-conthrax leading-tight py-5">Bohemian (Boho) Interior Design in UAE</h2>
            <p>
              Boho style is eclectic and globally inspired—think layered textures, pattern play, and lived-in warmth. In the UAE, sun-washed neutrals meet jewel tones (emerald, ruby, sapphire), kilim rugs, macramé, and woven throws for inviting atmosphere.
            </p>
            <br />
            <Image
              src="/images/bohemian-boho-interior-design-dubai.png"
              alt="Bohemian interior design in Dubai"
              width={800}
              height={600}
              className="rounded-md w-full object-cover"
            />
            <br />
            <p>
              Mix woods, rattan, and metal; incorporate vintage pieces and travel mementos. The secret is thoughtful layering—textiles, greenery, art, and lighting—for a personal, textured space.
            </p>
          </div>

          <div className="text-sm leading-relaxed font-play">
            <h2 className="text-[#caa193] text-2xl font-conthrax leading-tight py-5">Transitional Interior Design In Dubai</h2>
            <p>
              Transitional design marries traditional warmth with modern clarity, perfect for luxury hotels, resorts, and residences. Expect statement lighting, sleek metals, and a soothing mix of straight and curved lines.
            </p>
            <br />
            <Image
              src="/images/6-interior-design-styles-2025-business-bay-dubai.png"
              alt="Six interior design styles for 2025 in Business Bay, Dubai"
              width={800}
              height={600}
              className="rounded-md w-full object-cover"
            />
            <br />
            <p>
              Whether a grand lobby or a cozy suite, Transitional interiors feel both inviting and impeccably tailored.
            </p>
          </div>

          <div className="text-sm leading-relaxed font-play">
            <h2 className="text-[#caa193] text-2xl font-conthrax leading-tight py-5">Scandinavian Interior Design Style</h2>
            <p>
              Scandinavian design excels in light, functionality, and calm. Use simple lines, light woods, and tactile textiles (linen, wool). Palettes lean white, pale gray, beige, and soft pastels for an airy, peaceful feel.
            </p>
            <br />
            <Image
              src="/images/scandinavian-interior-design-uae.png"
              alt="Scandinavian interior design in the UAE"
              width={800}
              height={600}
              className="rounded-md w-full object-cover"
            />
            <br />
            <p>
              From cozy living rooms to minimalist kitchens, every piece is intentional—balancing warmth with simplicity for modern Dubai homes.
            </p>
            <br />
          </div>

          <div className="text-sm leading-relaxed font-play">
            <h2 className="text-[#caa193] text-2xl font-conthrax leading-tight py-5">Frequently asked questions (FAQs)</h2>
            <h3 className="text-[#caa193] text-sm font-conthrax leading-tight py-5">1- What are the different types of interior design?</h3>
            <p>
              Interior design spans many styles. Popular types include:
            </p>
            <ul className="list-disc pl-5">
              <li><b className="text-[#caa193]">Modern —</b> minimal ornamentation, clean lines, open layouts.</li>
              <li><b className="text-[#caa193]">Minimalist —</b> simplicity, functionality, uncluttered spaces.</li>
              <li><b className="text-[#caa193]">Scandinavian —</b> soft tones, airy, cozy, functional pieces.</li>
              <li><b className="text-[#caa193]">Contemporary —</b> fluid, trend‑forward, always evolving.</li>
              <li><b className="text-[#caa193]">Industrial —</b> raw brick, metal, concrete; urban aesthetic.</li>
            </ul>

            <h3 className="text-[#caa193] text-sm font-conthrax leading-tight py-5">2- What are the 7 basics of interior design in Dubai?</h3>
            <p>Seven fundamentals ensure balance and harmony:</p>
            <ul className="list-disc pl-5">
              <li><b className="text-[#caa193]">Space —</b> how areas are used and divided.</li>
              <li><b className="text-[#caa193]">Line —</b> directs the eye (horizontal, vertical, dynamic).</li>
              <li><b className="text-[#caa193]">Form —</b> shapes of furniture, architecture, décor.</li>
              <li><b className="text-[#caa193]">Light —</b> natural + artificial; affects mood and function.</li>
              <li><b className="text-[#caa193]">Color —</b> sets tone, defines zones, adds personality.</li>
              <li><b className="text-[#caa193]">Texture —</b> depth via fabrics, finishes, materials.</li>
              <li><b className="text-[#caa193]">Pattern —</b> rhythm through repeating elements.</li>
            </ul>

            <h3 className="text-[#caa193] text-sm font-conthrax leading-tight py-5">3- What is the most popular interior style in Dubai?</h3>
            <p>
              Modern design remains most requested for its clean lines and timeless appeal. Contemporary, Minimalist, and Scandinavian are also highly popular in 2025 for urban simplicity and smart sophistication.
            </p>
          </div>

          {/* Sidebar (Mobile View) */}
          <div className="mt-12 md:hidden">
            <Sidebar suggestions={suggestions} />
          </div>
        </div>

        {/* Sidebar (Desktop View) */}
        <div className="hidden md:block">
          {/* Sticky sidebar on desktop */}
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
              {post.href && isExternal(post.href) ? (
                <a
                  href={post.href}
                  aria-label={`Read: ${post.title}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex space-x-4 items-center"
                >
                  {content}
                </a>
              ) : post.href ? (
                <Link
                  href={post.href}
                  aria-label={`Read: ${post.title}`}
                  className="group flex space-x-4 items-center"
                >
                  {content}
                </Link>
              ) : (
                <div className="opacity-70 cursor-not-allowed">{content}</div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default VHeroSection;
