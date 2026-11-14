import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Apartment Interior Design in Dubai Marina",
    image: "/images/dubai-marina-apartment-interior-design.webp",
    link: "/apartment-interior-design-dubai",
  },
  {
    title: "Office Interior Design in Dubai Marina",
    image: "/images/dubai-marina-office-interior-fit-out.webp",
    link: "/office-interior-design-dubai",
  },
  {
    title: "Restaurant Interior Design in Dubai Marina",
    image: "/images/dubai-marina-restaurant-interior-design.webp",
    link: "/restaurant-interior-design",
  },
  {
    title: "Cafe Interior Design in Dubai Marina",
    image: "/images/dubai-marina-cafe-retail-interior-design.webp",
    link: "/cafe-interior-design-dubai",
  },
];

const dubaiMarinaProjects = [
  {
    title: "DUBAI MARINA APARTMENT",
    category: "Apartment - Dubai Marina",
    image: "/images/ma-1.jpg",
    link: "/dubai-marina-apartment",
  },
  {
    title: "DUBAI MARINA LUXURY APARTMENT",
    category: "Residential Apartment - Dubai Marina",
    image: "/images/dmaptt.png",
    link: "/dubai-marina-luxury-apartment",
  },
  {
    title: "MARINA VISTA APARTMENT",
    category: "Marina Vista Apartment - Emaar Beachfront",
    image: "/images/beachfront (24).webp",
    link: "/emaar-beach-front-marina-vista-apartment",
  },
  {
    title: "MARINA GATE LUXURY APARTMENT",
    category: "Apartment - Marina Gate",
    image: "/images/mgapt-2 (4).jpg",
    link: "/marina-gate-2-luxury-apartment",
  },
];

const facts = [
  ["What we design", "Apartments (studio to 4-bed), penthouses, holiday homes, Marina Walk cafes and offices"],
  ["Towers we design for", "Princess Tower, Cayan Tower, Marina Gate, DAMAC Heights, Emaar 6 Towers, Marina Promenade and more"],
  ["Design timeline", "3–6 weeks for concept to final drawings"],
  ["Preview before you commit", "Mood boards, 3D renders and VR walkthroughs"],
  ["Approvals", "Building NOCs and authority approvals handled by our in-house team"],
  ["Delivery", "In-house designers, joinery factory and site teams: one point of contact"],
];

const styles = [
  ["Contemporary Coastal", "Sand, sea-glass blue, light oak, linen, textured plaster", "Marina-facing apartments and holiday homes"],
  ["Warm Minimalist", "Oak, travertine, bouclé, hidden lighting", "Compact 1- and 2-bed homes that need calm"],
  ["Modern Luxury", "Calacatta marble, walnut, brushed brass, velvet", "Family apartments and investor-grade upgrades"],
  ["Classic Elegance", "Wall mouldings, marble, bronze, rich drapery", "Larger units and formal entertaining"],
  ["Statement Penthouse", "Book-matched stone, metallic finishes, feature lighting", "Duplex and full-floor penthouses"],
];

const rooms = [
  {
    title: "Living & Dining",
    text: "The apartment living room in Dubai Marina is arranged around the view outside. Seating is placed so it never blocks the window. Sheer curtains and motorised blinds tame afternoon glare, and dimmable lighting turns the room toward the skyline at night.",
    image: "/images/dubai-marina-living-dining-interior.webp",
    alt: "Dubai Marina apartment living and dining area arranged around the waterfront view",
  },
  {
    title: "Kitchen Design",
    text: "Kitchens are opened to the living space wherever feasible, islands are included for casual dining, and appliances are integrated into handleless cabinetry. Work surfaces are chosen with heat resistance in mind.",
    image: "/images/dubai-marina-bespoke-kitchen-interior.webp",
    alt: "Bespoke open-plan kitchen with island and handleless cabinetry in a Dubai Marina apartment",
  },
  {
    title: "Master Bedroom",
    text: "Blackout layers, upholstered headboards and acoustic softness create a quiet retreat above Dubai Marina's energy. Full-length built-in wardrobes keep the room clutter-free.",
    image: "/images/dubai-marina-master-bedroom-interior-design.webp",
    alt: "Dubai Marina master bedroom with upholstered headboard and full-length built-in wardrobes",
  },
  {
    title: "Bathrooms",
    text: "Hotel-style finishes, wall-hung fittings and warm light give Dubai Marina bathrooms a spa feel, with surfaces that are easy to clean.",
    image: "/images/dubai-marina-luxury-bathroom-interior.webp",
    alt: "Luxury Dubai Marina apartment bathroom with hotel-style finishes and warm lighting",
  },
];

const towers = [
  {
    title: "Princess Tower, Marina 101 & DAMAC Heights",
    text: "Some of Dubai Marina’s tallest residential towers, with high-floor apartments and spacious penthouses. The designs focus on making the most of the views, with large windows, statement lighting and furniture carefully planned to fit through the building’s service lifts.",
  },
  {
    title: "Cayan Tower & Ocean Heights",
    text: "Distinctive architecture with angled or curved glazing. We design custom joinery and furniture in our joinery factory in Dubai that fits the geometry.",
  },
  {
    title: "Marina Gate & Jumeirah Living Marina Gate",
    text: "Newer handovers with quality developer finishes. Most owners here want personalisation, with bespoke storage, lighting, furniture and art, rather than strip-out.",
  },
  {
    title: "Emaar's Marina Promenade, Emaar 6 Towers & Vida Residences",
    text: "Established waterfront towers including Aurora, Delphine, Attessa, Al Majara and Al Mesk. WE DO works through Emaar's approval process, which keeps the work timelines predictable.",
  },
  {
    title: "Marina Diamonds, Marina Crown, Le Reve & Elite Residence",
    text: "Popular with investors and young families. Compact layouts benefit most from storage-led design and durable, rental-ready finishes.",
  },
];

const process = [
  ["Free site visit and measurement.","Our team visits your site to measure every room, check light and views, confirm lift sizes and building access."],
  ["Brief and mood boards.", "We understand your design choices, then create mood boards with palette, materials and furniture directions."],
  ["Concept design and space planning.", "We show layouts, furniture, storage and lighting options to our clients so that they can see and compare before they choose."],
  ["3D renders and VR walkthrough.", "The realistic renders and a VR walkthrough let clients see the finished home and request changes before anything is built."],
  ["Detailed drawings, material schedule and quotation.", "Joinery drawings, lighting and finishes schedules, and a transparent itemised quote."],
  ["Approvals and execution.", "Our team handles NOC and authority approvals, then our in-house joinery, decoration and site teams deliver the design."],
  ["Styling, snagging and handover.", "Furniture, art and accessories are placed, every detail is checked, and your home is handed over move-in ready."],
];

const approvals = [
  ["Building management / owners association NOC:", "drawings and contractor documents submitted for approval."],
  ["Authority approvals:", "Dubai Municipality and Civil Defence (DCD) submissions where the scope requires them."],
  ["Developer requirements:", "experience with Emaar and DAMAC buildings, two of the Marina's largest developers."],
  ["Service-lift and delivery booking:", "furniture and joinery are sized and scheduled to the tower's lift and delivery windows."],
  ["Working hours and neighbour protection:", "noisy works are planned within permitted hours, with corridors and lifts protected."],
];

const costs = [
  ["Studio (450–650 sq ft)", "15,000 – 30,000", "70,000 – 150,000", "6–10 weeks"],
  ["1-bedroom (700–1,000 sq ft)", "25,000 – 45,000", "120,000 – 250,000", "8–12 weeks"],
  ["2-bedroom (1,100–1,600 sq ft)", "35,000 – 70,000", "200,000 – 420,000", "10–14 weeks"],
  ["3-bedroom (1,700–2,400 sq ft)", "50,000 – 95,000", "320,000 – 600,000", "12–16 weeks"],
  ["Penthouse (3,000+ sq ft)", "90,000+", "600,000 – 1,500,000+", "16–24 weeks"],
];

const comparison = [
  ["Concept, 3D and VR", "✓", "✓", "✓"],
  ["Bespoke joinery made in-house", "✗", "Varies", "✓"],
  ["Building approvals handled", "✗", "Varies", "✓"],
  ["One contract, one point of contact", "✗", "✗", "✓"],
  ["ISO-certified delivery", "Varies", "Varies", "✓"],
];

const faqs = [
  [
    "How much does interior design cost in Dubai Marina?",
    "Design-only packages at WE DO start from around AED 15,000 for a studio apartment. Fully delivered projects, including design, joinery, finishes and furniture, typically range from AED 120,000 for a 1-bedroom apartment to AED 600,000 or more for a penthouse. The exact cost depends on size, view, materials and joinery. We give you a written cost band after a free site visit.",
  ],
  [
    "How long does an interior design project take in Dubai Marina?",
    "Concept to final drawings usually takes 3–6 weeks. A fully delivered 1- or 2-bedroom apartment typically takes 8–14 weeks including building approvals, and penthouses 16–24 weeks. Furniture-and-styling-only projects can be completed faster.",
  ],
  [
    "Do you design apartments in my tower?",
    "Yes, our interior designers work in towers across Dubai Marina, including Princess Tower, Cayan Tower, Marina Gate, DAMAC Heights, Marina 101, Emaar 6 Towers, Marina Promenade, Marina Diamonds and Le Reve.",
  ],
  [
    "Do I need building approval for interior works in Dubai Marina?",
    "In most towers, yes. The works such as joinery installation, ceiling, electrical, AC or wet-area changes usually need a building management NOC, and some scopes need Dubai Municipality or Civil Defence approval. Our in-house approvals team prepares and submits everything for you.",
  ],
  [
    "What is the difference between design-only and turnkey interior design?",
    "Design-only gives you concepts, 3D renders, drawings and a materials schedule to use with your own contractor. Turnkey means WE DO also handles approvals, joinery, works, furniture and styling, with one contract and one point of contact until handover.",
  ],
  [
    "Can I see my Dubai Marina home in 3D before work starts?",
    "Yes. Every project includes mood boards and photoreal 3D renders, and you can walk through your future home in VR. Changes are made at this stage, before any money is spent on materials.",
  ],
  [
    "Do you design holiday homes and short-let apartments in Dubai Marina?",
    "Yes. We design rental-ready interiors with durable, easy-clean finishes, smart access, generous storage and photogenic styling, and can supply a full furniture package so the unit is ready to list on handover.",
  ],
  [
    "Can WE DO also carry out the works after the design?",
    "Yes. Because our civil, decoration and joinery teams are in-house, we can deliver everything the design needs, including fit-out, flooring, ceilings, MEP, smart home systems and apartment renovation work, without handing you over to a separate contractor.",
  ],
  [
    "Can you work while I live in the apartment or while it is tenanted?",
    "Often, yes. We phase works room by room, protect lifts and corridors, and keep noisy work within the tower's permitted hours. For full-home projects, a vacant apartment is faster and usually more cost-effective.",
  ],
  [
    "Which interior design style suits a Dubai Marina apartment?",
    "Light, view-led styles work best: contemporary coastal, warm minimalist and modern luxury are the most popular. Your designer presents mood boards in more than one direction so you can choose with confidence.",
  ],
  [
    "Is interior design in Dubai Marina worth it for rental yield?",
    "Well-designed, well-photographed Marina apartments stand out in a crowded rental and short-let market and can command higher rates. We design to your target guest or tenant and to a finish that stays durable under frequent turnover.",
  ],
];

const SectionHeading = ({ eyebrow, children, centered = true }) => (
  <div className={`mb-7 ${centered ? "text-center" : ""}`}>
    {eyebrow && (
      <p className="text-[#caa193] text-[10px] sm:text-xs uppercase tracking-[0.22em] font-play mb-2">
        {eyebrow}
      </p>
    )}
    <h2 className="text-[#caa193] text-xl sm:text-2xl lg:text-[27px] leading-snug font-conthrax">
      {children}
    </h2>
  </div>
);

const Photo = ({ src, alt, className = "", sizes = "100vw" }) => (
  <div className={`relative overflow-hidden rounded-xl bg-[#171717] ${className}`}>
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      className="object-cover transition-transform duration-700 hover:scale-105"
    />
  </div>
);

const DataTable = ({ headers, rows }) => (
  <div className="overflow-x-auto rounded-xl border border-[#39302d]">
    <table className="w-full min-w-[650px] border-collapse text-left font-play text-base">
      <thead>
        <tr className="bg-[#b98877] text-black">
          {headers.map((header, index) => (
            <th key={index} className="px-4 py-3 font-semibold">
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <tr key={index} className="border-t border-[#39302d] even:bg-[#111111]">
            {row.map((cell, cellIndex) => (
              <td key={cellIndex} className="px-4 py-3 text-gray-300 align-top">
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const AboutSection = () => {
  return (
    <section className="bg-black text-white py-12 sm:py-16">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-7 lg:px-12">

        {/* KEY FACTS */}
        <div className="mb-14">
          <div className="bg-[#111111] border border-[#292929] p-5 sm:p-7">
            <div className="grid grid-cols-1 lg:grid-cols-[1.8fr_1fr] gap-6 lg:gap-8 items-stretch">
              <div>
                <h2 className="text-[#b98877] text-xs sm:text-sm font-conthrax tracking-[0.2em] mb-5">
                  Key Facts: Interior Design in Dubai Marina
                </h2>

                <ul>
                  {facts.map(([title, text], index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-300">
                      <span className="text-gray-400 text-sm leading-6">•</span>
                      <p className="text-base sm:text-base font-play leading-relaxed">
                        <span className="text-white font-semibold">{title}:</span>{" "}
                        {text}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* TOWER LIVING */}
        <section className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-7 lg:gap-10 items-center mb-14">
          <div>
            <SectionHeading eyebrow="Designed around your lifestyle" centered={false}>
              Interior Design Built Around Dubai Marina’s Tower Living
            </SectionHeading>

            <div className="space-y-3 text-base leading-7 text-gray-300 font-play">
              <p>
                Dubai Marina covers approximately 3 km of waterfront with around 200 residential towers, so almost every home here is an apartment or a penthouse in the sky. The view is the main feature, the floor plan is often compact, and the building sets rules on what can change and when.
              </p>
              <p>Our interior designers plan for all three:</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5">
              {[
                ["The view leads the layout.", "Seating, dining and beds are placed so the marina, the Gulf or the skyline stays in frame."],
                ["Every metre earns its place.", "Many Marina towers were handed over between the mid-2000s and early 2010s, with efficient but tight plans. Built-in storage, sliding partitions and multi-use rooms make them feel larger."],
                ["Materials made for the waterfront.", "West-facing glass brings strong afternoon glare, and balconies take salt air and wind. We specify UV-resistant fabrics, glare-control blinds and marine-grade fittings so finishes last."],
                ["Designed to the building's rules.", "Lift sizes, delivery windows and approval requirements are checked at the first site visit, not discovered halfway through."],
              ].map(([title, text], index) => (
                <div key={index} className="border-l border-[#b98877] pl-3">
                  <h3 className="text-[#caa193] text-sm font-semibold mb-1">{title}</h3>
                  <p className="text-xs leading-6 text-gray-400">{text}</p>
                </div>
              ))}
            </div>

            <p className="font-play text-base leading-7 text-gray-300 mt-5">
              The result is luxury interior design in Dubai Marina that looks right on day one and still works years later, whether you live in it, let it or plan to sell.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <Photo
              src="/images/dubai-marina-luxury-apartment-living-room-waterfront.webp"
              alt="Contemporary Dubai Marina apartment living room with waterfront skyline view"
              className="col-span-2 h-[220px] sm:h-[290px]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <Photo
              src="/images/dubai-marina-apartment-open-plan-dining.webp"
              alt="Open-plan apartment dining area with bespoke cabinetry and contemporary lighting"
              className="h-[125px] sm:h-[165px]"
              sizes="25vw"
            />
            <Photo
              src="/images/dubai-marina-apartment-bespoke-kitchen-detail.webp"
              alt="Bespoke apartment kitchen with stone island and integrated cabinetry"
              className="h-[125px] sm:h-[165px]"
              sizes="25vw"
            />
          </div>
        </section>

        {/* SERVICES */}
        <section className="mb-14">
          <SectionHeading eyebrow="Our expertise">
            Our Interior Design Services in Dubai Marina
          </SectionHeading>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((service, index) => (
              <Link key={index} href={service.link} className="group">
                <div className="relative h-[210px] sm:h-[235px] rounded-xl overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-4">
                    <h3 className="font-conthrax text-sm leading-relaxed">
                      {service.title}
                    </h3>
                    <span className="inline-block mt-2 text-base text-[#d2a997] font-play">
                      Explore Service →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ADDITIONAL CAPABILITIES */}
        <section className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-6 lg:gap-9 items-center mb-14 rounded-xl border border-white/10 bg-[#101010] p-5 sm:p-7">
          <Photo
            src="/images/dubai-marina-bespoke-interior-design-detail.webp"
            alt="Bespoke interior detail showing custom joinery and premium materials"
            className="h-[230px] sm:h-[290px]"
            sizes="(max-width: 1024px) 100vw, 40vw"
          />
          <div>
            <SectionHeading centered={false}>
              Additional Design & Delivery Capabilities
            </SectionHeading>
            <div className="space-y-3 text-base leading-7 text-gray-300 font-play">
              <p>
                Our projects also include space planning, 3D visualisation, VR walkthroughs and bespoke joinery. With our own joinery factory in Dubai, we design TV walls, kitchen cabinetry, wardrobes, vanities and built-in storage without relying on a third-party joinery supplier.
              </p>
              <p>
                For holiday homes and short let apartments, we design around guest needs, including smart locks, easy-clean finishes, durable lighting and optimized storage.
              </p>
              <p>
                From design to delivery, under one roof. If your home also needs{" "}
                <Link href="/apartment-renovation-dubai" className="text-[#caa193] underline">apartment renovation</Link>, a{" "}
                <Link href="/kitchen-renovation-dubai" className="text-[#caa193] underline">kitchen upgrade</Link>, or a{" "}
                <Link href="/bathroom-renovation-dubai" className="text-[#caa193] underline">bathroom upgrade</Link>, our in-house civil and decoration teams handle it.
              </p>
            </div>
          </div>
        </section>

        {/* STYLES */}
        <section className="mb-14">
          <SectionHeading eyebrow="Find your aesthetic">
            Interior Design Styles That Suit Dubai Marina Homes
          </SectionHeading>

          <p className="text-base leading-7 text-gray-300 font-play mb-5 max-w-4xl">
            The Marina’s light, water, and skyline reward interiors that feel calm by day and dramatic at night. These are the styles our clients choose most for modern interior design in Dubai Marina:
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
            <Photo src="/images/dubai-marina-contemporary-luxury-interior-wide.webp" alt="Wide contemporary luxury apartment interior with open-plan living and dining" className="col-span-2 h-[190px] sm:h-[250px]" />
            <Photo src="/images/dubai-marina-modern-minimalist-interior.webp" alt="Modern minimalist apartment interior with clean lines and natural textures" className="h-[190px] sm:h-[250px]" />
            <Photo src="/images/dubai-marina-contemporary-elegant-interior.webp" alt="Elegant contemporary apartment interior with layered lighting and bespoke furniture" className="h-[190px] sm:h-[250px]" />
          </div>

          <DataTable
            headers={["Style", "Palette & materials", "Best for"]}
            rows={styles}
          />

          <p className="font-play text-base text-gray-300 mt-4">
            Not sure which suits you? Your designer builds a mood board in each direction, so you can compare before you decide.
          </p>
        </section>

        {/* ROOM BY ROOM */}
        <section className="mb-14">
          <SectionHeading eyebrow="Thoughtful details in every room">
            Room-by-Room Interior Design for Dubai Marina Apartments
          </SectionHeading>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {rooms.map((room, index) => (
              <article key={index} className="grid grid-cols-[115px_1fr] sm:grid-cols-[145px_1fr] gap-4 rounded-xl bg-[#111111] border border-white/10 p-3">
                <Photo
                  src={room.image}
                  alt={room.alt}
                  className="h-full min-h-[135px]"
                  sizes="150px"
                />
                <div className="py-1">
                  <h3 className="text-[#caa193] font-conthrax text-sm mb-2">
                    {room.title}
                  </h3>
                  <p className="font-play text-base leading-6 text-gray-300">
                    {room.text}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-[1fr_0.8fr] gap-5 mt-4 items-center">
            <div className="border-l-2 border-[#b98877] pl-4">
              <h3 className="text-[#caa193] font-conthrax text-sm mb-2">Balcony & Terrace</h3>
              <p className="font-play text-base leading-7 text-gray-300">
                Outdoor spaces in the Marina face strong sun, salt air and wind. We use marine-grade furniture, fittings and outdoor fabrics that withstand the weather and keep their finish for years.
              </p>
            </div>
            <Photo
              src="/images/dubai-marina-apartment-balcony-terrace-design.webp"
              alt="Dubai Marina apartment balcony with outdoor seating and waterfront view"
              className="h-[160px] sm:h-[180px]"
            />
          </div>
        </section>

        {/* TOWERS */}
        <section className="mb-14">
          <div className="grid grid-cols-1 lg:grid-cols-[0.75fr_1.25fr] gap-6 lg:gap-9">
            <div>
              <Photo
                src="/images/dubai-marina-residential-tower-apartment-interior.webp"
                alt="High-rise apartment interior with floor-to-ceiling glazing and Marina skyline"
                className="w-full aspect-[3/4]"
              />
              <p className="text-[10px] text-gray-500 mt-2 font-play uppercase tracking-widest">
                Residential interior design
              </p>
            </div>

            <div>
              <SectionHeading centered={false} eyebrow="Local building experience">
                Dubai Marina Towers We Design For
              </SectionHeading>

              <p className="font-play text-base leading-7 text-gray-300 mb-5">
                Every Marina tower has its own floor plans, finishes and building rules. Our designers plan around each one.
              </p>

              <div className="space-y-4">
                {towers.map((tower, index) => (
                  <div key={index} className="border-b border-white/10 pb-3 last:border-0">
                    <h3 className="text-[#caa193] font-conthrax text-xs sm:text-sm mb-1.5">
                      {tower.title}
                    </h3>
                    <p className="font-play text-base sm:text-base leading-6 text-gray-300">
                      {tower.text}
                    </p>
                  </div>
                ))}
              </div>

              <p className="font-play text-base leading-6 text-[#caa193] mt-4">
                Don’t see your building? We design homes across all of Dubai Marina’s towers. Tell us your tower and unit type and we’ll share the approach that suits it.
              </p>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="mb-14">
          <SectionHeading eyebrow="From first visit to handover">
            Our Interior Design Process in Dubai Marina
          </SectionHeading>

          <p className="font-play text-base leading-7 text-gray-300 mb-6 max-w-4xl">
            Seven clear stages take your Dubai Marina home from first visit to handover, with a fixed deliverable at each step.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-6 items-stretch">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {process.map((step, index) => (
                <div key={index} className="flex gap-3 bg-[#111111] border border-white/10 rounded-lg p-4">
                  <span className="shrink-0 flex items-center justify-center rounded-full bg-[#b98877] text-black font-conthrax text-xs w-7 h-7">
                    {index + 1}
                  </span>
                  <p className="font-play text-base leading-6 text-gray-300">
                    <strong className="text-[#caa193]">{step[0]}</strong>{" "}
                    {step[1]}
                  </p>
                </div>
              ))}
            </div>

            <Photo
              src="/images/dubai-interior-design-fitout-process-detail.webp"
              alt="Finished apartment interior showing bespoke joinery and detailed workmanship"
              className="min-h-[230px] lg:h-full"
            />
          </div>
        </section>

        {/* APPROVALS */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center mb-14">
          <div>
            <SectionHeading centered={false} eyebrow="A coordinated process">
              Building Approvals for Interior Works in Dubai Marina
            </SectionHeading>

            <p className="font-play text-base leading-7 text-gray-300 mb-5">
              Most interior works in a Dubai Marina tower need building approval before they start, and our in-house approvals team handles it for you.
            </p>

            <div className="space-y-4">
              {approvals.map((item, index) => (
                <p key={index} className="font-play text-base sm:text-base leading-6 text-gray-300">
                  <strong className="text-[#caa193]">{item[0]}</strong>{" "}
                  {item[1]}
                </p>
              ))}
            </div>

            <p className="font-play text-base leading-7 text-gray-300 mt-5">
              Rules differ from tower to tower, so we confirm your building’s requirements at the first site visit and build approval time into your schedule.
            </p>
          </div>

          <Photo
            src="/images/dubai-interior-fitout-approvals-coordination.webp"
            alt="Interior design planning with drawings and material samples"
            className="h-[230px] sm:h-[320px]"
          />
        </section>

        {/* COST */}
        <section className="mb-14">
          <SectionHeading eyebrow="Project investment">
            How Much Does Interior Design Cost in Dubai Marina?
          </SectionHeading>

          <p className="font-play text-base leading-7 text-gray-300 mb-6">
            Interior design in Dubai Marina typically costs from about AED 15,000 for a design-only studio to AED 1.5 million or more for a fully delivered penthouse, depending on size, view, materials and joinery.
          </p>

          <DataTable
            headers={["Home type", "Design only (AED)", "Design + full delivery (AED)", "Typical timeline"]}
            rows={costs}
          />

          <p className="font-play text-base sm:text-base leading-6 text-gray-300 mt-4">
            Ranges are indicative and include design, joinery, finishes and furniture for the delivery column. Renovation and fit-out works beyond the design scope are quoted separately; see our{" "}
            <Link href="/apartment-renovation-dubai" className="text-[#caa193] underline">
              apartment renovation page
            </Link>.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-6 rounded-xl bg-[#111111] border border-white/10 p-5">
            <div>
              <h3 className="text-[#caa193] font-conthrax text-sm mb-3">What affects your price</h3>
              <ul className="list-disc pl-5 space-y-2 font-play text-base sm:text-base text-gray-300">
                <li>Size and number of rooms</li>
                <li>Marina-facing glazing and the glare and UV specification it needs</li>
                <li>Amount of bespoke joinery and built-in storage</li>
                <li>Material grade: porcelain vs natural stone, laminate vs veneer</li>
                <li>Furniture package: supplied, custom-made or imported</li>
                <li>Smart home, lighting control and AV</li>
              </ul>
              <p className="font-play text-base sm:text-base leading-6 text-gray-300 mt-4">
                You receive a written cost band after the free site visit, before you commit to anything.
              </p>
            </div>
          </div>
        </section>

        {/* WHY CHOOSE WE DO */}
        <section className="mb-14">
          <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-6 items-center mb-6">
          <Photo
  src="/images/wedo-dubai-interior-design-craftsmanship-detail.webp"
  alt="Close view of premium interior craftsmanship and bespoke joinery"
  className="h-[230px] sm:h-[290px]"
  sizes="(max-width: 1024px) 100vw, 40vw"
/>
            <div>
              <SectionHeading centered={false} eyebrow="The WE DO difference">
                Why Choose WE DO as Your Interior Designer in Dubai Marina
              </SectionHeading>
              <p className="font-play text-base leading-7 text-gray-300">
                When choosing an interior design company in Dubai Marina, the most important factor is who actually delivers the work. At WE DO Interior Design & Fit Out, we bring a team of interior designers, civil works teams, decoration specialists and our own joinery factory under one roof. We are triple ISO certified (ISO 9001:2015, ISO 14001:2015 and ISO 45001:2018), with 250+ residential and commercial projects completed across Dubai since 2015. Our award-winning work includes an Emaar apartment interior at Primo Tower, recognised by the Luxury Lifestyle Awards 2026. We also have experience handling building NOCs, Dubai Municipality and DCD approvals, including projects in Emaar and DAMAC buildings. From mood boards and 3D renders to VR walkthroughs, we help you see your space before construction begins. Plus, one dedicated project manager coordinates everything from the first site visit to the final handover.
              </p>
            </div>
          </div>

          <DataTable
            headers={["What you need", "Design-only studio", "Separate designer + contractor", "WE DO"]}
            rows={comparison}
          />
        </section>

        {/* PROJECTS */}
        <section className="mb-14">
         <SectionHeading eyebrow="Our portfolio">
  Our Interior Design Projects in Dubai Marina
</SectionHeading>

<p className="font-play text-base leading-7 text-gray-300 max-w-3xl mx-auto text-center mb-6">
  Explore our completed apartment interior design and fit-out projects in Dubai Marina, Marina Gate and nearby Emaar Beachfront.
</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {dubaiMarinaProjects.map((project, index) => (
              <Link key={index} href={project.link} className="group">
                <div className="relative h-[230px] sm:h-[250px] rounded-xl overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 p-4">
                    <h3 className="font-conthrax text-sm mb-1">{project.title}</h3>
                    <p className="font-play text-base text-gray-300">{project.category}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-6">
            <Link
              href="/gallery"
              className="inline-flex bg-[#b98877] hover:bg-[#a97463] text-black px-7 py-3 rounded-md font-conthrax text-xs transition"
            >
              View All Projects
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-14">
          <div className="grid grid-cols-1 lg:grid-cols-[0.65fr_1.35fr] gap-6 items-start">
            <div className="lg:sticky lg:top-8">
             <Photo
  src="/images/dubai-marina-apartment-interior-faq-support.webp"
  alt="Contemporary apartment interior detail with bespoke joinery and soft daylight"
  className="h-[190px] sm:h-[250px] lg:h-[280px] mb-4"
  sizes="(max-width: 1024px) 100vw, 35vw"
/>
              <SectionHeading centered={false} eyebrow="Helpful information">
                Dubai Marina Interior Design FAQs
              </SectionHeading>
              <p className="font-play text-base sm:text-base leading-6 text-gray-400">
                Find answers to common questions about design costs, timelines, approvals and interior design services in Dubai Marina.
              </p>
            </div>

            <div className="divide-y divide-white/10 border-t border-white/10">
              {faqs.map((faq, index) => (
                <div key={index} className="py-4">
                  <h3 className="text-[#caa193] font-conthrax text-xs sm:text-sm mb-2">
                    {faq[0]}
                  </h3>
                  <p className="font-play text-base sm:text-base leading-6 text-gray-300">
                    {faq[1]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

       {/* NEARBY COMMUNITIES */}
<section className="grid grid-cols-1 lg:grid-cols-[1fr_0.8fr] gap-6 items-center mb-14 rounded-xl bg-[#111111] border border-white/10 p-5 sm:p-6">
  <div>
    <SectionHeading centered={false} eyebrow="Nearby locations">
      Interior Design in Communities Near Dubai Marina
    </SectionHeading>

    <p className="font-play text-base leading-7 text-gray-300 mb-4">
      Our designers also work across neighbouring waterfront and high-rise
      communities, including Palm Jumeirah, Jumeirah Lake Towers (JLT),
      Emirates Hills, Emaar Beachfront, JBR and Bluewaters.
    </p>
  </div>

  <div className="grid grid-cols-2 gap-3">
    <Photo
      src="/images/dubai-marina-nearby-community-residential-interior.webp"
      alt="Premium residential apartment interior near Dubai Marina"
      className="h-[130px] sm:h-[170px]"
    />
    <Photo
      src="/images/dubai-marina-nearby-community-luxury-apartment.webp"
      alt="Bright luxury apartment interior near Dubai Marina"
      className="h-[130px] sm:h-[170px]"
    />
  </div>
</section>

      

      </div>
    </section>
  );
};

export default AboutSection;