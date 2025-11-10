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
            <p>Sep 11, 2025 • No Comments</p>
          </div>

          <h1 className="text-[#caa193] text-3xl font-conthrax leading-tight py-10">
            Modern Apartment Interior Design in Dubai - 5 Essential Design Tips
          </h1>

          <div className="text-sm leading-relaxed font-play">
            <p>
              A Dubai apartment that is smartly designed with quality materials and a modern look naturally exudes elegance.
              <b className="text-[#caa193]">
                <a href="https://wedointerior.ae/apartment-interior-design-dubai"> Apartment Interior Design Dubai</a>
              </b>
              {" "}
              is vital since it makes the house appear wonderful and be comfortable. Good design enables the space to function effectively; it&apos;s the appropriate colors and a hint of luxury.
            </p>
            <br />
          </div>

          <div className="space-y-6">
            <Image
              src="/images/ultra-modern-dubai-apartment-interior-design.png"
              alt="Ultra modern Dubai apartment interior design"
              width={800}
              height={600}
              className="rounded-md w-full object-cover"
            />

            <div className="text-sm leading-relaxed font-play">
              <p>
                Besides, it also enhances lighting and furniture placement for providing a fashionable appearance. A
                <b className="text-[#caa193]"><a href="https://wedointerior.ae/"> professional Interior Design Company in Dubai</a></b>
                {" "}assists by selecting the most suitable designs, furniture, and decorations. They tailor every element to suit the owner&apos;s lifestyle. Any apartment can be easily transformed elegantly and luxuriously with professional assistance. These 5 essential design tips will help you create a home that reflects your personality while staying on-trend with Dubai home décor styles.
              </p>

              <h2 className="text-[#caa193] text-2xl font-conthrax leading-tight py-5">Optimizing Space and Natural Light</h2>
              <p>
                The greatest challenge of Dubai apartment interior design today is to optimize space. Begin with space-saving furniture—Dubai apartments are full of wall beds, folding dining tables, and nest coffee tables. The most intuitive configurations of furniture and the apartment planning create flow, circulation, and functionality. Natural light is also a big factor. Keep window treatments minimal—use sheer drapery, large mirrors, and glass dividers to bounce as much natural light around as possible.
              </p>
            </div>

            <Image
              src="/images/compact-dubai-bedroom-with-pace-saving-furniture-with-modern-interior.png"
              alt="Compact Dubai bedroom with space-saving furniture"
              width={800}
              height={600}
              className="rounded-md w-full object-cover"
            />
          </div>

          <div className="text-sm leading-relaxed font-play">
            <h2 className="text-[#caa193] text-2xl font-conthrax leading-tight py-5">Luxury Through Materials and Colors</h2>
            <p>
              To properly design
              <b className="text-[#caa193]"><a href="https://wedointerior.ae/apartment-projects"> luxurious apartment interiors</a></b>
              , be mindful of rich textures and high-quality materials. Consider marble countertops, velvet sofas, and spun metal finishes. Use a sophisticated palette—deep emerald, warm taupe, or terracotta.
            </p>
            <br />
            <p>
              Layer natural woods and stones to balance warmth and elegance. Even in minimalist Dubai apartments, premium finishes can dramatically elevate the space.
            </p>
            <br />
            <Image
              src="/images/high-end-dubai-apartment-interior-design-in-dubai.png"
              alt="High-end Dubai apartment interior"
              width={800}
              height={600}
              className="rounded-md w-full object-cover"
            />
          </div>

          <div className="text-sm leading-relaxed font-play">
            <h2 className="text-[#caa193] text-2xl font-conthrax leading-tight py-5">Contrasting Contemporary and Traditional Styles</h2>
            <p>
              Dubai’s cultural mix embraces blending contemporary interiors with Middle Eastern details. Combine modern furniture with Arabic patterns, Mashrabiya screens, and handcrafted décor to infuse character.
            </p>
            <br />
            <p>
              This fusion works beautifully across many apartment types—delivering a global aesthetic grounded in local context.
            </p>
            <br />
            <Image
              src="/images/fusion-style-dubai-apartment-interior-ivory.png"
              alt="Fusion style apartment interior in Dubai"
              width={800}
              height={600}
              className="rounded-md w-full object-cover"
            />
          </div>

          <div className="text-sm leading-relaxed font-play">
            <h2 className="text-[#caa193] text-2xl font-conthrax leading-tight py-5">Integrating Smart Home Features In Apartment</h2>
            <p>
              Elevate modern living with smart lighting, climate control, voice assistants, and security systems. These upgrades add comfort and can boost property value—especially in upscale areas.
            </p>
            <br />
            <Image
              src="/images/high-rise-dubai-marina-apartment-interior-design-dubai.png"
              alt="Smart features in Dubai Marina apartment"
              width={800}
              height={600}
              className="rounded-md w-full object-cover"
            />
          </div>

          <div className="text-sm leading-relaxed font-play">
            <h2 className="text-[#caa193] text-2xl font-conthrax leading-tight py-5">Highlighting Stunning Views and Statement Pieces</h2>
            <p>
              Many Dubai apartments showcase skyline or marina views. Keep furniture low near windows; use floor-to-ceiling curtains that frame (not block) the view. Add statement lighting, art, and sculptural pieces to express personality.
            </p>
            <br />
            <Image
              src="/images/dubai-high-rise-bedroom-with-floor-to-ceiling-modern-interior-design-dubai.png"
              alt="Dubai high-rise bedroom with panoramic windows"
              width={800}
              height={600}
              className="rounded-md w-full object-cover"
            />
          </div>

          <div className="text-sm leading-relaxed font-play">
            <h2 className="text-[#caa193] text-2xl font-conthrax leading-tight py-5">Design that Reflects Dubai Living</h2>
            <p>
              From compact living to high-end smart homes, modern apartment design in Dubai balances functionality and sophistication. Apply these five tips to craft a home that suits your lifestyle and enhances daily comfort.
            </p>
            <br />
            <Image
              src="/images/elegant-dubai-apartment-showcasing-open-living-room-interior-in-dubai.png"
              alt="Elegant open-plan Dubai apartment living room"
              width={800}
              height={600}
              className="rounded-md w-full object-cover"
            />
            <br />
            <p>
              Need expert assistance for your apartment? Our team will turn your vision into reality—blending beauty, technology, and functionality.
            </p>
          </div>

          <div className="text-sm leading-relaxed font-play">
            <h2 className="text-[#caa193] text-2xl font-conthrax leading-tight py-5">Frequently asked questions (FAQs)</h2>
            <h3 className="text-[#caa193] text-sm font-conthrax leading-tight py-5">1- How do I maximize space in a small Dubai apartment?</h3>
            <p>
              Combine multifunctional furniture with open layouts, mirrors, and glass to create visual expansion.
            </p>

            <h3 className="text-[#caa193] text-sm font-conthrax leading-tight py-5">2- What are the trending colours for apartments in Dubai?</h3>
            <p>
              For 2025: muted earthy tones, emerald green, warm neutrals, and desaturated pastels—perfect for a luxe modern vibe.
            </p>

            <h3 className="text-[#caa193] text-sm font-conthrax leading-tight py-5">3- Can I mix traditional and modern styles in a Dubai apartment?</h3>
            <p>
              Definitely. Pair contemporary furniture with local textures, patterns, and accents for depth and character.
            </p>

            <h3 className="text-[#caa193] text-sm font-conthrax leading-tight py-5">4- What smart home features are ideal for apartments?</h3>
            <p>
              Smart lighting, voice assistants, thermostats, and security systems are practical and impactful upgrades.
            </p>

            <h3 className="text-[#caa193] text-sm font-conthrax leading-tight py-5">5- How can I furnish my apartment balcony?</h3>
            <p>
              Opt for compact furnishings, hanging planters, warm lighting, and an outdoor rug to create a cozy oasis.
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
