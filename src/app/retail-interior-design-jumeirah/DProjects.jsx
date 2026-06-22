'use client';

import React from 'react';
import Image from 'next/image';



const TestimonialCarousel = () => {
  const testimonials = [
    {
      quote: "WE DO completely transformed our Retail interior design Jumeirah Dubai project. Customers immediately noticed the difference and engagement increased significantly.",
      author: "Nadia A. — Boutique Owner, Jumeirah ⭐⭐⭐⭐⭐",
    },
    {
      quote: "Their understanding of Retail fitout Jumeirah Dubai helped us build an environment that finally reflects our positioning and customer expectations.",
      author: "Hassan M. — Lifestyle Store Founder ⭐⭐⭐⭐⭐",
    },
    {
      quote: "From planning through delivery, the team created a premium retail experience that customers consistently talk about and revisit.",
      author: "Sara K. — Fashion Retail Operator ⭐⭐⭐⭐⭐",
    },
  ];

  const [idx, setIdx] = React.useState(0);
  const [slide, setSlide] = React.useState("in");

  const goTo = (newIdx) => {
    setSlide("out");
    setTimeout(() => {
      setIdx((newIdx + testimonials.length) % testimonials.length);
      setSlide("in");
    }, 500);
  };

  React.useEffect(() => {
    const timer = setInterval(() => {
      goTo(idx + 1);
    }, 6000);
    return () => clearInterval(timer);
  }, [idx]);

  return (
    <div className="bg-black-300 p-6 rounded-lg border-l-4 border-[#caa193] my-6 font-play text-white">
      <h2 className="text-lg font-conthrax text-[#caa193] uppercase tracking-wider mb-3 text-justify">
        What Our Clients Say
      </h2>

      <div
        style={{
          transition: "opacity 0.5s ease, transform 0.5s ease",
          opacity: slide === "in" ? 1 : 0,
          transform: slide === "in" ? "translateX(0px)" : "translateX(60px)",
          minHeight: "120px",
        }}
      >
        <p className="italic text-sm sm:text-base text-gray-300 text-justify">
          "{testimonials[idx].quote}"
        </p>
        <span className="block text-right text-xs font-conthrax text-[#caa193] mt-2">
          — {testimonials[idx].author}
        </span>
      </div>

      <div className="flex items-center justify-between mt-4">
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
              className={`w-2 h-2 rounded-full transition-colors ${
                i === idx ? "bg-[#caa193]" : "bg-gray-600"
              }`}
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
    <section className="px-6 py-5 bg-black-200">
      
      {/* Top Content Block */}
      <div className="lg:max-w-[80%] mx-auto bg-black p-6 sm:p-10 rounded shadow text-center space-y-6 mb-12">
        <h2 className="text-center text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#caa193] uppercase">
          Why Jumeirah Retail Is a Completely Different Market
        </h2>
        
        <div className="space-y-4 text-sm sm:text-base font-play text-white text-left">
          <p className="text-justify">
            The retailing environment in Jumeirah is very different from conventional commercial environments due to varying perceptions from the consumer’s point of view. People here do not merely come to buy; they come to experience what they are going through.
          
            This changes how stores must perform. Retail destinations throughout Jumeirah encourage slower exploration and more considered purchasing decisions.
          </p>
          <p className="text-justify">
            Unlike standard mall environments where footfall already exists, street-facing and destination retail often depends on atmosphere to attract customers inside. This is why strong retail interior design Jumeirah becomes an essential business investment rather than a finishing stage.
         
            Areas such as City Walk, La Mer, Box Park, and surrounding retail destinations have shaped customer expectations.
            People expect:<br />
           <ul className="list-disc pl-6 space-y-1 text-justify text-white font-play">
  <li>Distinctive storefronts</li>
  <li>Curated interiors</li>
  <li>Elevated product presentation</li>
  <li>Premium finishes</li>
  <li>Comfortable customer journeys</li>
  <li>Shareable experiences</li>
</ul>
          </p>
          <p className="text-justify">
            Jumeirah customers notice details. Even subtle choices in lighting, textures, display design, and circulation influence whether products feel premium.
          
            Retail environments here must communicate trust immediately. Whereas in conventional offices or high-density commercial settings, it is not as vital to incorporate such techniques into the interior design process, those retail establishments which have been most successful engage emotionally prior to purchase decisions.
          </p>
        </div>
      </div>

      {/* Split Row – Text + Top Right Image */}
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-3xl font-conthrax text-white py-12 uppercase">
          What Jumeirah Customers Expect From a Retail Space
        </h2>
        
        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          <div className="space-y-6 text-white font-play">
            <p className="text-justify">
              Today’s customers rarely buy based on product alone. The environment affects perception. The way customers move through a store influences confidence, attention, and purchasing behaviour.
            </p>
            <p className="text-justify">
              <b className="text-[#caa193]">They Come for Experience, Not Just Shopping</b><br />
              Retail customers in Jumeirah expect environments that feel intentional. The store itself becomes part of the brand. Every zone contributes to customer perception, from entry sequence to checkout. Stores designed around experience encourage exploration and create stronger emotional connection.
            </p>
            <p className="text-justify">
              <b className="text-[#caa193]">Store Environments Should Feel Curated</b><br />
              Premium retail does not mean adding more. It means selecting better. Strong retail environments use space carefully. Layouts create breathing room. Displays create hierarchy. Products receive attention. This approach is especially valuable in Luxury retail design Dubai environments.
            </p>
            <p className="text-justify">
              <b className="text-[#caa193]">Interior Quality Influences Product Value</b><br />
              Customers often associate product quality with store quality. High-end finishes, lighting, detailing, and display presentation affect perceived value. That is why effective Commercial interior design Jumeirah supports pricing, positioning, and customer confidence.
            </p>
            <p className="text-justify">
              <b className="text-[#caa193]">Retail Is Increasingly Visual</b><br />
              Customers document shopping experiences. They photograph displays. They share changing room moments. They post store interiors. Retail spaces that create memorable visuals naturally generate additional visibility. Good design creates marketing opportunities.
            </p>
          </div>

          <div className="rounded-lg overflow-hidden shadow-md">
            <Image
              src="/images/retail (7).jpeg"
              alt="Round luxury bed with fairy lights"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>

      {/* Areas and Building Types Section */}
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-3xl font-conthrax text-white py-12 uppercase">
          Our Retail Interior Design Services in Jumeirah
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          <div className="space-y-6 text-white font-play">
            <p className="text-justify">
              <b className="text-[#caa193]">Brand Concept & Identity Translation</b><br />
              Every successful retail environment starts with clarity. We transform brand values into physical experiences. This includes material language, customer interaction, visual hierarchy, and store atmosphere. Retail environments should feel consistent from entrance to checkout.
            </p>
            <p className="text-justify">
              <b className="text-[#caa193]">Shopfront & Facade Design</b><br />
              Storefront design determines whether customers decide to enter. We develop premium frontage concepts that attract attention while staying aligned with brand positioning. Our approach supports both luxury and contemporary Shop interior design Jumeirah concepts.
            </p>
            <p className="text-justify">
              <b className="text-[#caa193]">Display & Merchandising Systems</b><br />
              Products should feel organised and intentional. Our merchandising systems improve visibility while supporting customer movement. Display planning creates stronger interaction and easier discovery.
            </p>
            <p className="text-justify">
              <b className="text-[#caa193]">Retail Lighting Design</b><br />
              Lighting influences mood, perception, and conversion. Retail environments require layered solutions that support atmosphere and product visibility. Our retail lighting strategies create balanced experiences across all store zones.
            </p>
            <p className="text-justify">
              <b className="text-[#caa193]">Flooring, Wall Finishes & Material Specification</b><br />
              Retail spaces experience continuous use. Material choices must support durability without reducing visual impact. Selections are made to align with identity and operational performance.
            </p>
            <p className="text-justify">
              <b className="text-[#caa193]">Fitting Rooms & Customer Journey Design</b><br />
              Customer comfort directly affects purchasing decisions. We create fitting environments that feel spacious, welcoming, and integrated into the overall retail experience.
            </p>
            <p className="text-justify">
              <b className="text-[#caa193]">POS & Technology Integration</b><br />
              Checkout should feel efficient and unobtrusive. We integrate payment and operational systems naturally into the retail environment.
            </p>
            <p className="text-justify">
              <b className="text-[#caa193]">Signage, Graphics & Wayfinding</b><br />
              Strong retail navigation improves movement and supports brand recognition. Graphics become part of the experience rather than added elements.
            </p>
          </div>

          <div className="rounded-lg overflow-hidden shadow-md">
            <Image
              src="/images/retail (3).jpeg"
              alt="Round luxury bed with fairy lights"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>

      {/* Bottom CTA Section */}
      <div className="bg-[#f5ede5] py-10 text-center space-y-4">
        <h3 className="text-xs sm:text-xl font-conthrax uppercase text-black">
           Get In Touch With Us
        </h3>
        <p className="text-sm sm:text-base font-play text-black text-center">
          We are located in the world's luxury city, Dubai        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4 px-4">
          <a
            href="https://wa.me/971588075603"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-green-500 text-white font-play text-sm rounded w-full sm:w-auto text-center"
          >
            ✅ Request availability by WhatsApp
          </a>
          <a
            href="mailto:info@wedointerior.ae"
            className="px-6 py-3 bg-[#caa193] text-white font-play text-sm rounded w-full sm:w-auto text-center"
          >
            ✉️ Request availability by E-mail
          </a>
        </div>
      </div>

      {/* Why Families Choose Us & Testimonial Section */}
      <div className="lg:max-w-[90%] mx-auto bg-black p-6 sm:p-10 rounded shadow space-y-6 mb-12 mt-12">
        <h2 className="text-center text-3xl font-conthrax text-white uppercase">Why Jumeirah Retailers Choose WE DO</h2>
        <div className="space-y-6 text-white font-play">
          <p className="text-justify">
            Retailers go for WE DO because a good retail space needs more than just fancy finishing touches. WE DO understands customer behaviour, visual merchandising, operational flow, and how to position retail environments for stronger customer engagement. WE DO has brought together a combination of design and fit out in a way that makes for environments that are unique but functional.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="rounded-lg overflow-hidden shadow-md">
            <Image
              src="/images/retail.jpeg"
              alt="Elegant blue bedroom interior"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
          <TestimonialCarousel />
        </div>
      </div>

      {/* Serving Areas & FAQs Section */}
      <div className="lg:max-w-[80%] mx-auto flex flex-col lg:flex-row items-start gap-6 mb-12">
        <div className="w-full space-y-4">
          <div className="space-y-8">
            
            {/* Retail Design Styles We Deliver */}
            <div className="pt-8 border-t border-gray-800 space-y-6">
              <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#caa193] uppercase">
                Retail Design Styles We Deliver in Jumeirah
              </h2>
              
              <div className="space-y-4 text-sm sm:text-base font-play text-white text-left">
                <p className="text-justify">
                  <b className="text-[#caa193]">Luxury Boutique —</b> Premium retail spaces designed around elevated presentation and personalised customer experience. Ideal for Boutique interior design Jumeirah Dubai and luxury product categories.
                </p>
                <p className="text-justify">
                  <b className="text-[#caa193]">Lifestyle & Concept Store —</b> Flexible retail environments designed for evolving collections and experiential shopping. Our Concept store design Jumeirah approach creates stronger interaction and customer engagement.
                </p>
                <p className="text-justify">
                  <b className="text-[#caa193]">Beauty & Wellness Retail —</b> Clean, premium environments designed around comfort and trust. These spaces balance product display with customer experience.
                </p>
                <p className="text-justify">
                  <b className="text-[#caa193]">F&B Retail & Specialty Food —</b> Retail environments where atmosphere influences purchasing behaviour and customer retention.
                </p>
              </div>
            </div>

            {/* Types of Retail Projects We Deliver */}
            <div className="pt-8 border-t border-gray-800 space-y-6">
              <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#caa193] uppercase">
                Types of Retail Projects We Deliver in Jumeirah
              </h2>
              
              <div className="space-y-4 text-sm sm:text-base font-play text-white text-left">
                <p className="text-justify">
                  <b className="text-[#caa193]">New Store Openings — Bare Shell to Brand-Ready —</b> Complete retail transformation from empty unit to operational launch. Our team manages the journey from concept to delivery.
                </p>
                <p className="text-justify">
                  <b className="text-[#caa193]">Store Rebrands & Refurbishments —</b> Retail businesses evolve. Our Retail renovation Jumeirah Dubai services modernise environments while protecting brand recognition.
                </p>
                <p className="text-justify">
                  <b className="text-[#caa193]">Pop-Up & Temporary Retail Concepts —</b> Short-term spaces should still create lasting impressions. We design flexible retail environments with strong visual impact.
                </p>
                <p className="text-justify">
                  <b className="text-[#caa193]">Multi-Location Brand Rollouts —</b> Consistency matters across multiple locations. We help retailers maintain identity while adapting to individual spaces.
                </p>
              </div>
            </div>

            {/* How Great Retail Design Increases Sales */}
            <div className="pt-8 border-t border-gray-800 space-y-6">
              <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#caa193] uppercase">
                How Great Retail Design Increases Sales in Jumeirah
              </h2>
              
              <div className="space-y-4 text-sm sm:text-base font-play text-white text-left">
                <p className="text-justify">
                  <b className="text-[#caa193]">Longer Customer Dwell Time —</b> Customers remain longer in comfortable environments. Longer visits create stronger purchasing opportunities.
                </p>
                <p className="text-justify">
                  <b className="text-[#caa193]">Higher Conversion Rates —</b> Better layouts improve product visibility and customer confidence. Customers navigate more naturally and engage more deeply.
                </p>
                <p className="text-justify">
                  <b className="text-[#caa193]">Social Media Visibility —</b> Retail spaces designed with visual moments create organic exposure. Customers become brand advocates.
                </p>
                <p className="text-justify">
                  <b className="text-[#caa193]">Repeat Visits and Brand Loyalty —</b> Memorable experiences increase retention. Customers return to spaces that feel intentional and enjoyable.
                </p>
                <p className="text-justify">
                  <b className="text-[#caa193]">Stronger Brand Positioning —</b> Retail interiors communicate value immediately. Well-designed environments strengthen credibility and long-term growth.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full rounded-lg overflow-hidden my-4" style={{ height: "350px" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28882.11586523091!2d55.22557672152865!3d25.194273577322997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43da3ca3ffb7%3A0x6fb26207f2df47b3!2sJumeirah%20-%20Dubai!5e0!3m2!1sen!2sae!4v1717680000000!5m2!1sen!2sae"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* FAQ Section */}
          <div className="w-full pt-8 border-t border-gray-800">
            <h2 className="text-lg md:text-xl font-conthrax text-[#caa193] uppercase mb-6">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-6 text-sm sm:text-base font-play text-white text-left">
              <div className="space-y-2">
                <h3 className="font-conthrax text-[#caa193] text-sm sm:text-base">
                  How much does retail interior design cost in Jumeirah?
                </h3>
                <p className="text-justify text-gray-300">
                  Project requirements vary based on size, materials, and fitout scope.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-conthrax text-[#caa193] text-sm sm:text-base">
                  How long does a retail fitout take in Jumeirah?
                </h3>
                <p className="text-justify text-gray-300">
                  Timelines depend on approvals, design complexity, and delivery requirements.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-conthrax text-[#caa193] text-sm sm:text-base">
                  Do you handle shopfront design and landlord approvals?
                </h3>
                <p className="text-justify text-gray-300">
                  Yes. We support coordination and approval processes.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-conthrax text-[#caa193] text-sm sm:text-base">
                  Can you work with our existing brand guidelines?
                </h3>
                <p className="text-justify text-gray-300">
                  Absolutely. Existing brand systems can be translated into physical retail environments.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-conthrax text-[#caa193] text-sm sm:text-base">
                  Do you design for pop-up and temporary retail?
                </h3>
                <p className="text-justify text-gray-300">
                  Yes. We create both permanent and temporary retail concepts.
                </p>
              </div>

             <div className="pt-6 border-t border-gray-800">
            <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#caa193] mb-2 text-justify">
             Ready to Open a Store Jumeirah Talks About?
            </h2>
            <p className="text-sm sm:text-base text-white text-justify font-play">
            Your retail space should do more than display products. Create an environment that attracts customers, strengthens brand value, and turns visits into long-term loyalty.
Book your free site visit today and receive an itemised estimate from WE DO Interior Design & Fitout.
            </p>
          </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DProjects;