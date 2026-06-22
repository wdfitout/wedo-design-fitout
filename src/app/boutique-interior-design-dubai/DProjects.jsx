'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const textImage = {
  src: '/images/boutique (4).jpeg',
  link: '/commercial-interior-fit-out',
  title: 'Ultimate Guide to Commercial Interior Fit-out'
};

const galleryImages = [
  { src: '/images/dhfs (1).webp', link: '/dubai-hills-mall-facial-studio', title: 'DUBAI HILLS MALL FACIAL STUDIO' },
  { src: '/images/beauty-salon-interior.PNG', link: '/jumeirah-1-beauty-salon', title: 'JUMEIRAH 1 BEAUTY SALON' },
];

const TestimonialCarousel = () => {
  const testimonials = [
    {
      quote: "WE DO delivered a Boutique interior design Dubai project that finally made our store feel aligned with our brand. Customers comment on the interior almost daily.",
      author: "Lina A., Fashion Boutique Owner, Jumeirah ⭐⭐⭐⭐⭐",
    },
    {
      quote: "We wanted something more thoughtful than traditional retail delivery. Their Boutique fitout Dubai approach created an experience customers actually remember.",
      author: "Omar H., Concept Retail Founder, City Walk ⭐⭐⭐⭐⭐",
    },
    {
      quote: "Working with a Retail fitout company Dubai that understood boutique retail made a huge difference. Every detail felt intentional.",
      author: "Sarah M., Lifestyle Store Owner, Dubai ⭐⭐⭐⭐⭐",
    },
  ];

  const [idx, setIdx] = useState(0);
  const [slide, setSlide] = useState("in");

  const goTo = (newIdx) => {
    setSlide("out");
    setTimeout(() => {
      setIdx((newIdx + testimonials.length) % testimonials.length);
      setSlide("in");
    }, 500);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      goTo(idx + 1);
    }, 6000);
    return () => clearInterval(timer);
  }, [idx]);

  return (
    <div className="bg-neutral-950 p-6 sm:p-8 rounded-lg border-l-4 border-[#caa193] my-6 font-play text-white shadow-xl w-full">
      <h2 className="text-lg font-conthrax text-[#caa193] uppercase tracking-wider mb-4">
        What Our Clients Say
      </h2>

      <div
        style={{
          transition: "opacity 0.5s ease, transform 0.5s ease",
          opacity: slide === "in" ? 1 : 0,
          transform: slide === "in" ? "translateX(0px)" : "translateX(60px)",
          minHeight: "140px",
        }}
        className="flex flex-col justify-between"
      >
        <p className="italic text-sm sm:text-base text-gray-300 text-justify leading-relaxed">
          "{testimonials[idx].quote}"
        </p>
        <span className="block text-right text-xs font-conthrax text-[#caa193] mt-4">
          — {testimonials[idx].author}
        </span>
      </div>

      <div className="flex items-center justify-between mt-6 pt-4 border-t border-neutral-900">
        <button
          onClick={() => goTo(idx - 1)}
          className="w-8 h-8 rounded-full border border-[#caa193] text-[#caa193] flex items-center justify-center text-lg hover:bg-[#caa193] hover:text-black transition-colors"
        >
          ‹
        </button>
        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === idx ? "bg-[#caa193] w-4" : "bg-gray-600"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
        <button
          onClick={() => goTo(idx + 1)}
          className="w-8 h-8 rounded-full border border-[#caa193] text-[#caa193] flex items-center justify-center text-lg hover:bg-[#caa193] hover:text-black transition-colors"
        >
          ›
        </button>
      </div>
    </div>
  );
};

const DProjects = () => {
  return (
    <section className="px-6 py-10 bg-black-200">
      
      {/* Top Content Block */}
      <div className="max-w-[85%] mx-auto bg-black p-6 sm:p-10 rounded shadow text-center space-y-6 mb-12">
        <h2 className="text-center text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#caa193] uppercase">
          Why Boutique Design Is a Different Discipline From Standard Retail
        </h2>
        
        <div className="space-y-4 text-sm sm:text-base font-play text-white text-left">
          <p className="text-justify">
            Retail design and boutique design are often grouped together. But in reality, they operate differently. Traditional retail spaces usually focus on volume, movement, and broad accessibility. Boutiques operate through emotion, curation, and atmosphere. Customers entering a boutique already expect something more intentional. That means the environment itself becomes part of the product.
          </p>
          <p className="text-justify">
            A boutique cannot rely on scale to create impact. Every square metre matters. A weak corner becomes obvious. Poor lighting changes perception. Crowded displays make the space feel cheaper. This is why strong Boutique interior design Dubai is built around restraint and clarity rather than adding more. Dubai’s boutique market is especially unique.
          </p>
          <p className="text-justify">
            They expect more than functionality. They expect interiors with personality. That expectation has changed how retail environments are designed. Customers now compare boutiques not only against nearby competitors but also against social media content, international brands, and destination shopping experiences. That creates pressure, but also opportunity.
          </p>
          <p className="text-justify">
            A thoughtfully designed boutique can outperform larger stores simply by creating stronger customer connections. Generic retail solutions rarely achieve that. A successful Boutique interior design company Dubai understands that every decision inside a boutique becomes more visible. And more visibility means every detail matters.
          </p>
          
          <div className="pt-4 space-y-4">
            <h3 className="text-sm sm:text-lg font-conthrax text-[#caa193] uppercase tracking-wider">
              Spatial Intimacy That Feels Deliberate
            </h3>
            <p className="text-justify text-gray-300">
              Boutiques should feel intimate without feeling crowded. Good planning creates rhythm between display areas, movement zones, browsing moments, and pause points. The objective is not making the store feel larger. The objective is making it feel better. Great boutique layouts guide people naturally while creating moments of discovery. This approach is especially important in Small store interior design Dubai projects where space efficiency directly affects customer experience.
            </p>
          </div>

          <div className="pt-4 space-y-4">
            <h3 className="text-sm sm:text-lg font-conthrax text-[#caa193] uppercase tracking-wider">
              Materials That Create Emotional Value
            </h3>
            <p className="text-justify text-gray-300">
              Materials speak before products do. Customers instantly notice finishes, textures, and detailing, even if they cannot explain why. Stone can feel premium. Wood can feel warm. Metal can feel editorial. Textured finishes create depth. Our Luxury boutique design Dubai approach focuses on selecting materials that strengthen brand positioning while remaining practical for daily retail use.
            </p>
          </div>

          <div className="pt-4 space-y-4">
            <h3 className="text-sm sm:text-lg font-conthrax text-[#caa193] uppercase tracking-wider">
              Lighting That Shapes Perception
            </h3>
            <p className="text-justify text-gray-300">
              Lighting in a boutique is the least appreciated factor of retail effectiveness. A product can change its look completely depending on how it is lit. Lighting must enhance the product appearance, create a mood, provide for comfort, and stimulate exploration. It must never be intimidating.
            </p>
          </div>

          <div className="pt-4 space-y-4">
            <h3 className="text-sm sm:text-lg font-conthrax text-[#caa193] uppercase tracking-wider">
              Display Systems Designed to Evolve
            </h3>
            <p className="text-justify text-gray-300">
              Boutiques change constantly. Collections rotate. Campaigns launch. Visual priorities shift. Static displays become limiting. That is why our Boutique shop design Dubai process includes flexible merchandising systems that evolve with the business.
            </p>
          </div>

          <div className="pt-4 space-y-4">
            <h3 className="text-sm sm:text-lg font-conthrax text-[#caa193] uppercase tracking-wider">
              Fitting Rooms That Influence Decisions
            </h3>
            <p className="text-justify text-gray-300">
              Many purchase decisions happen inside fitting rooms. Customers remember whether they felt comfortable, confident, and relaxed. Fitting room design influences conversion more than most retailers realise.
            </p>
          </div>
        </div>
      </div>

      {/* Grid Row – Why Dubai Boutique Owners Choose WE DO */}
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10 items-center mb-16 px-4 lg:px-0">
          <div className="md:col-span-2 space-y-6 text-white font-play">
            <h3 className="text-xl sm:text-2xl font-conthrax text-[#caa193] uppercase tracking-wide">
              Why Dubai Boutique Owners Choose WE DO
            </h3>
            <p className="text-justify">
              Owners of boutiques select WE DO for the reason that boutiques require a special kind of attention, which is often not paid by regular retailing procedures. Our approach includes design thinking, retailing knowledge, fabrication capabilities, fit-out skills, and project management in one package.
            </p>
            <p className="text-justify">
              We hold the opinion that the atmosphere of the boutique space should be unique rather than replicated. All the decisions made regarding the layout, materials, light, and display of products are thought out considering the brand and consumer experience.
            </p>
          </div>

          <div className="group relative overflow-hidden rounded-lg shadow-lg aspect-square md:aspect-auto">
            <a href={textImage.link} className="block w-full h-full">
              <Image
                src={textImage.src}
                alt={textImage.title}
                width={500}
                height={400}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                <p className="text-white text-xs sm:text-sm font-conthrax text-center">
                  {textImage.title}
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
      
      {/* Bottom CTA Section */}
      <div className="bg-[#f5ede5] py-12 text-center space-y-4 my-12 rounded">
        <h3 className="text-sm sm:text-xl font-conthrax uppercase text-[#caa193]">
          Get In Touch With Us
        </h3>
        <p className="text-sm sm:text-base font-play text-black text-center">
          We are located in the world's luxury city, Dubai
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4 px-4">
          <a
            href="https://wa.me/971588075603"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-green-500 text-white font-play text-sm rounded w-full sm:w-auto text-center shadow-md hover:bg-green-600 transition-colors"
          >
            ✅ Request availability by WhatsApp
          </a>
          <a
            href="mailto:info@wedointerior.ae"
            className="px-6 py-3 bg-[#caa193] text-white font-play text-sm rounded w-full sm:w-auto text-center shadow-md hover:bg-[#b88f81] transition-colors"
          >
            ✉️ Request availability by E-mail
          </a>
        </div>
      </div>

      {/* Services and Delivery Layout */}
      <div className="max-w-7xl mx-auto px-4 lg:px-0">
        <h2 className="text-center text-xl sm:text-2xl md:text-3xl font-conthrax text-white py-12 uppercase tracking-wide">
          Our Boutique Interior Design Services in Dubai
        </h2>

        {/* Section 1: Text Left, Image Right */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          <div className="space-y-6 text-white font-play">
            <ul className="list-decimal pl-5 space-y-4 text-[#caa193]">
              <li className="text-justify">
                <h3 className="font-play font-bold text-base text-[#caa193]">Brand Concept & Spatial Identity</h3>
                <p className="text-white font-play mt-1">Every boutique begins with a story. Our process translates that identity into a physical environment customers immediately recognise and remember. We build spaces that feel aligned with brand values rather than following temporary trends.</p>
              </li>
              <li className="text-justify">
                <h3 className="font-play font-bold text-base text-[#caa193]">Shopfront & Window Display Design</h3>
                <p className="text-white font-play mt-1">Your storefront creates the first interaction. Strong shopfront design attracts attention without trying too hard. Window displays should invite curiosity while maintaining sophistication.</p>
              </li>
              <li className="text-justify">
                <h3 className="font-play font-bold text-base text-[#caa193]">Custom Display & Merchandising Systems</h3>
                <p className="text-white font-play mt-1">Retail presentation directly affects customer behaviour. We create adaptable merchandising systems that improve visibility while protecting visual balance.</p>
              </li>
              <li className="text-justify">
                <h3 className="font-play font-bold text-base text-[#caa193]">Boutique Lighting Design</h3>
                <p className="text-white font-play mt-1">Lighting strategies support customer movement, mood creation, and product presentation.</p>
              </li>
              <li className="text-justify">
                <h3 className="font-play font-bold text-base text-[#caa193]">Fitting Room & Customer Experience Design</h3>
                <p className="text-white font-play mt-1">We design fitting experiences that feel private, premium, and connected to the overall boutique environment.</p>
              </li>
              <li className="text-justify">
                <h3 className="font-play font-bold text-base text-[#caa193]">Material & Finish Specification</h3>
                <p className="text-white font-play mt-1">Materials are selected around durability, maintenance, customer perception, and brand alignment.</p>
              </li>
              <li className="text-justify">
                <h3 className="font-play font-bold text-base text-[#caa193]">Custom Joinery for Retail Fixtures</h3>
                <p className="text-white font-play mt-1">Our bespoke fabrication capability allows greater control over presentation and detailing.</p>
              </li>
              <li className="text-justify">
                <h3 className="font-play font-bold text-base text-[#caa193]">Signage & Brand Graphics</h3>
                <p className="text-white font-play mt-1">Integrated signage strengthens identity while improving navigation and consistency.</p>
              </li>
            </ul>
          </div>

          <div className="rounded-lg overflow-hidden shadow-md">
            <Image
              src="/images/boutique (3).jpeg"
              alt="Round luxury bed with fairy lights"
              width={600}
              height={400}
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Section 2: Image Left, Text Right */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          <div className="rounded-lg overflow-hidden shadow-md order-2 md:order-1">
            <Image
              src="/images/boutique (2).jpeg"
              alt="Elegant blue bedroom interior"
              width={600}
              height={400}
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="space-y-6 text-white font-play order-1 md:order-2">
            <h2 className="text-xl sm:text-2xl font-conthrax text-[#caa193] uppercase tracking-wide">
              Boutique Design Styles We Deliver
            </h2>
            <ul className="list-decimal pl-5 space-y-4 text-[#caa193]">
              <li className="text-justify">
                <h3 className="font-play font-bold text-base text-[#caa193]">Minimalist Luxury Boutique</h3>
                <p className="text-white font-play mt-1">Minimal environments where products become the focus. Clean detailing, premium materials, and understated confidence define this direction.</p>
              </li>
              <li className="text-justify">
                <h3 className="font-play font-bold text-base text-[#caa193]">Warm Concept Store</h3>
                <p className="text-white font-play mt-1">A softer retail experience built around texture, comfort, and exploration. This style works particularly well for Concept store interior design Dubai projects.</p>
              </li>
              <li className="text-justify">
                <h3 className="font-play font-bold text-base text-[#caa193]">Editorial & Gallery-Inspired Retail</h3>
                <p className="text-white font-play mt-1">Inspired by exhibition environments and contemporary visual storytelling. Ideal for fashion and premium product presentation.</p>
              </li>
              <li className="text-justify">
                <h3 className="font-play font-bold text-base text-[#caa193]">Heritage & Artisanal Boutique</h3>
                <p className="text-white font-play mt-1">Craftsmanship, material honesty, and rich detailing shape these boutique environments.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Structured Content Block with Integrated Card Carousel */}
      <div className="max-w-[85%] mx-auto bg-black p-6 sm:p-10 rounded shadow space-y-6 mb-12 mt-12">
        <h2 className="text-center text-xl sm:text-2xl md:text-3xl font-conthrax text-[#caa193] uppercase tracking-wide">
          Types of Boutiques We Design in Dubai
        </h2>
        
        <div className="space-y-6 text-sm sm:text-base font-play text-white text-justify">
          <p>
            <b className="text-[#caa193] block text-base font-conthrax uppercase mb-1">Fashion & Apparel Boutiques</b>
            Fashion environments require strong flow, display flexibility, and fitting experiences. Our Fashion boutique interior design Dubai projects focus on creating spaces where products feel elevated and customers enjoy spending time.
          </p>
          <p>
            <b className="text-[#caa193] block text-base font-conthrax uppercase mb-1">Jewellery & Accessories Boutiques</b>
            Luxury presentation, customer comfort, and visual refinement become central priorities.
          </p>
          <p>
            <b className="text-[#caa193] block text-base font-conthrax uppercase mb-1">Beauty & Wellness Boutiques</b>
            Beauty retail benefits from calm environments that encourage interaction and exploration.
          </p>
          <p>
            <b className="text-[#caa193] block text-base font-conthrax uppercase mb-1">Lifestyle & Concept Stores</b>
            Our Lifestyle store design Dubai approach combines storytelling with practical retail performance. These stores often blend product categories and require stronger customer flow planning.
          </p>
          <p>
            <b className="text-[#caa193] block text-base font-conthrax uppercase mb-1">Pop-Up & Seasonal Boutiques</b>
            Temporary spaces should still create lasting impressions. We design adaptable boutique environments with a strong visual identity.
          </p>
        </div>

        {/* Integration of Layout Grid with Carousel */}
        <div className="grid md:grid-cols-2 gap-10 items-center pt-8 border-t border-gray-900">
          <div className="rounded-lg overflow-hidden shadow-md">
            <Image
              src="/images/boutique.jpeg"
              alt="Luxury boutique interior display"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
          {/* Synchronized Premium Testimonial Element */}
          <TestimonialCarousel />
        </div>
      </div>

      {/* Supplementary Explanations & FAQ Blocks */}
      <div className="max-w-[85%] mx-auto flex flex-col gap-12 mb-12">
        
        <div className="pt-6 border-t border-gray-800 space-y-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-conthrax text-[#caa193] uppercase">
            How Boutique Design Drives Sales in a Small Footprint
          </h2>
          <p className="font-play text-sm sm:text-base text-white leading-relaxed text-justify">
            The strongest boutiques do not try to display more. They focus on making every product feel more valuable. Good boutique interiors influence behaviour in measurable ways. Customers stay longer. Products receive more attention. Navigation improves. Purchase confidence increases.
          </p>
          <p className="font-play text-sm sm:text-base text-white leading-relaxed text-justify">
            One of the biggest advantages of strong Retail interior design Dubai is improving performance without expanding floor area. Thoughtful layouts increase effective selling space. Display hierarchy guides customer attention. Lighting changes perceived quality. Material selection strengthens pricing confidence. Boutiques also benefit significantly from visual sharing.
          </p>
          <p className="font-play text-sm sm:text-base text-white leading-relaxed text-justify">
            Today’s customers document interiors naturally. A memorable display wall, fitting room, storefront, or feature detail can become free brand exposure. That visibility extends the impact of the physical environment far beyond the store itself. Good boutique design creates both experience and marketing value.
          </p>
        </div>

        {/* Dynamic FAQ Integration Section */}
        <div className="pt-8 border-t border-gray-800 space-y-6 text-left">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-conthrax text-[#caa193] uppercase tracking-wider">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6 font-play text-white">
            <div className="space-y-1">
              <h3 className="text-base font-conthrax text-[#caa193] uppercase">
                How much does boutique interior design cost in Dubai?
              </h3>
              <p className="text-sm sm:text-base text-gray-300 text-justify">
                Investment depends on size, finishes, fitout scope, and custom requirements.
              </p>
            </div>

            <div className="space-y-1">
              <h3 className="text-base font-conthrax text-[#caa193] uppercase">
                How long does a boutique fitout take?
              </h3>
              <p className="text-sm sm:text-base text-gray-300 text-justify">
                Timelines vary depending on approvals, fabrication, and project complexity.
              </p>
            </div>

            <div className="space-y-1">
              <h3 className="text-base font-conthrax text-[#caa193] uppercase">
                Can you design a boutique in a small footprint effectively?
              </h3>
              <p className="text-sm sm:text-base text-gray-300 text-justify">
                Yes. Smaller spaces often create stronger opportunities for memorable retail experiences.
              </p>
            </div>

            <div className="space-y-1">
              <h3 className="text-base font-conthrax text-[#caa193] uppercase">
                Do you handle shopfront and landlord approvals?
              </h3>
              <p className="text-sm sm:text-base text-gray-300 text-justify">
                Yes. Approval coordination is integrated into our delivery process.
              </p>
            </div>

            <div className="space-y-1">
              <h3 className="text-base font-conthrax text-[#caa193] uppercase">
                Can you work with our existing brand guidelines?
              </h3>
              <p className="text-sm sm:text-base text-gray-300 text-justify">
                Absolutely. Existing identity systems can be translated into physical environments.
              </p>
            </div>

            <div className="space-y-1">
              <h3 className="text-base font-conthrax text-[#caa193] uppercase">
                Do you design for mall units as well as standalone stores?
              </h3>
              <p className="text-sm sm:text-base text-gray-300 text-justify">
                Yes. We design boutiques across malls, retail districts, and independent locations.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action Framework */}
        <div className="pt-8 border-t border-gray-800 space-y-4">
          <h3 className="text-xl font-conthrax text-[#caa193] uppercase tracking-wide">
            Ready to Open a Boutique That Stops People Mid-Step?
          </h3>
          <p className="font-play text-sm sm:text-base text-white leading-relaxed text-justify">
            People decide within seconds whether your boutique feels worth entering. The right interior does more than look beautiful, it builds curiosity, increases dwell time, strengthens perceived value, and turns first-time visitors into loyal customers.
          </p>
          <p className="font-play text-sm sm:text-base text-white leading-relaxed text-justify">
            Create a boutique people photograph, talk about, return to, and remember long after they leave. Work with one team that understands retail, design, fitout, and the details that make boutique spaces successful. Book your free consultation today and start building a boutique Dubai cannot walk past without noticing.
          </p>
        </div>

      </div>
    </section>
  );
};

export default DProjects;