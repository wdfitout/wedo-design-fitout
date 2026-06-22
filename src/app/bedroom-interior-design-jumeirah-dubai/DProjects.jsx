'use client';

import React from 'react';
import Image from 'next/image';

const textImage = {
  src: '/images/2wresidence (5).webp',
  link: '/office-interior-design-trends-in-business-bay',
  title: 'Interior Design Trends In Business Bay'
};

const galleryImages = [
  { src: '/images/dbckapt (9).png', link: '/dubai-creek-2-bedroom-apartment', title: ' 2 BEDROOM APARTMENT DUBAI Business Bay' },
  { src: '/images/address-harbour-point-small-sitting-area-design-dubai-creek-harbour.png', link: '/emaar-harbour-point-apartment-dubai', title: 'EMAAR HARBOUR POINT APARTMENT FIT-OUT' },
];

const TestimonialCarousel = () => {
  const testimonials = [
    {
      quote: "Our master bedroom had not changed in over a decade and it showed. WE DO redesigned the wardrobe layout completely and the lighting alone made the room feel like a different place. Honestly the best bedroom interior design Jumeirah could have given us.",
      author: "H. Al Marzooqi, Villa Owner, Jumeirah 1 ⭐⭐⭐⭐⭐",
    },
    {
      quote: "We wanted a walk-in closet but were not sure our room was big enough. WE DO found a layout that worked perfectly and the custom wardrobe design Jumeirah Dubai team delivered is honestly better than anything we saw in showrooms.",
      author: "L. Carvalho, Villa Owner, Umm Suqeim ⭐⭐⭐⭐⭐",
    },
    {
      quote: "My daughter's room needed to work for her now and in a few years' time. The team designed something practical and beautiful that does not feel like a typical kids' room. Genuinely impressed with their approach to children's bedroom interior design Jumeirah.",
      author: "S. Bukhari, Villa Owner, Jumeirah 3 ⭐⭐⭐⭐⭐",
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
          Why Bedrooms Get Overlooked, and Why That's a Mistake
        </h2>
        
        <div className="space-y-4 text-sm sm:text-base font-play text-white text-left">
          <p className="text-justify">
            The fact that bedrooms are private rooms implies there is little incentive for investing in them rather than other rooms in a house that are public. This has to do partly with psychology as the state of one’s bedroom may become invisible in time if it is not ideal.
         
            But a bedroom that has been properly designed changes something. The room feels larger, even when it is not. Getting ready in the morning feels less chaotic. Walking in at night feels like reaching somewhere, rather than just stopping.
          </p>
          <p className="text-justify">
            In Jumeirah specifically, this matters because the villas here often have genuinely generous bedroom proportions, high ceilings, good natural light, sometimes garden views. These are spaces with real potential that frequently go unused because the furniture, lighting, and storage were never planned to match the room's scale. As a specialist in luxury bedroom interior design Dubai, this is the gap we see most often, and the easiest one to fix with the right design approach.
          </p>
        </div>
      </div>

      {/* Split Row – Text + Top Right Image */}
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-3xl font-conthrax text-white py-12 uppercase">
          What Makes a Bedroom Feel Genuinely Luxurious
        </h2>
        
        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          <div className="space-y-6 text-white font-play">
            <p className="text-justify">
              Luxury need not imply extra furnishings, decorations, or expenditure. Often, what makes bedrooms luxurious is the peace and careful planning of them. Here are some features that always work well in creating an impression of luxury.
            </p>
            <p className="text-justify">
             <b className=" text-[#caa193] "> Lighting should not be simply a switch on and off.</b> Using only ceiling lights in bedrooms tends to make them feel too utilitarian for comfort. Layered lighting, bedside reading lamps, soft ambient lighting, and subtle feature lighting behind the headboard will change the room from bright and functional in daytime to cozy and relaxing by night. Nothing else is more conducive to luxury than this.
            </p>
            <p className="text-justify">
             <b className=" text-[#caa193] "> Storage that disappears.</b> The main sources of visual clutter in a bedroom do not come from decorations but rather from items that have no place to be put. Good storage options keep things organized and the room elegantly uncluttered without having to do any "tidying up.”
            </p>
            <p className="text-justify">
              <b className=" text-[#caa193] "> Materials with some warmth to them.</b> Cold, hard surfaces have their place elsewhere in a home. Moreover, the bedroom is going to benefit from the soft aspects including textures, fabrics and woods that will enhance the general mood. For example, even the small choices like the choice of fabric for the headboard and even for flooring will make a difference.
            </p>
            <p className="text-justify">
             <b className=" text-[#caa193] "> Proper furniture sizing.</b> This may seem self-explanatory but it is by far the most frequent issue found. It is not unusual for clients to choose a furniture piece which is too big for their bedroom, thus blocking any free space or making them look disproportionate. The difference between a bedroom which works or merely accommodates some furniture lies here.
            </p>
          </div>

          <div className="rounded-lg overflow-hidden shadow-md">
            <Image
              src="/images/cnpkapt (5).png"
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
          Our Bedroom Interior Design Services in Jumeirah
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          <div className="space-y-6 text-white font-play">
            <p className="text-justify">
              We manage the full project, from how the room is laid out, through to the final cushion on the bed.
            </p>
            <p className="text-justify">
              <b className="text-[#caa193]">Bedroom Layout & Space Planning</b><br />
              We begin each bedroom project with understanding its proportions, its light, its quirks. From there we plan where everything sits, ensuring the room supports your daily routines naturally and comfortably.
            </p>
            <p className="text-justify">
              <b className="text-[#caa193]">Custom Wardrobes & Walk-In Closets</b><br />
              This is where most of our bedroom renovation Jumeirah Dubai projects begin and often end up being the biggest transformation. A custom wardrobe, sized properly for the space and for what actually needs to be stored, solves the clutter problem at its source. Walk-in closets, when the room allows, become almost a small room of their own, with their own lighting and organisation systems.
            </p>
            <p className="text-justify">
              <b className="text-[#caa193]">Bedroom Lighting Design</b><br />
              As mentioned, this is one of the most impactful and most affordable changes we make. Bedside lighting that lets you read without lighting the whole room. Wardrobe lighting that makes getting dressed easier. Ambient lighting that creates atmosphere in the evening. Small additions, large differences.
            </p>
            <p className="text-justify">
              <b className="text-[#caa193]">Headboard & Feature Wall Design</b><br />
              A strategically planned headboard or feature wall adds interest to the bedroom through its natural ability to draw the eye. It is the upholstered headboards, panel walls, and textures that distinguish the well-designed bedroom from the merely furnished one.
            </p>
            <p className="text-justify">
              <b className="text-[#caa193]">Material & Soft Furnishing Selection</b><br />
              Bedding, curtains, rugs, cushions, the layer that makes a room feel welcoming rather than stagnant. We help clients select materials that suit Dubai's climate, are functional to maintain, and feel actually comfortable rather than just photogenic.
            </p>
            <p className="text-justify">
              <b className="text-[#caa193]">Children's & Guest Bedroom Design</b><br />
              Children's rooms need to grow with the child, functional storage, quality materials, and a design that does not require replacing each couple of years. Guest rooms benefit from a slightly more neutral, hotel-like calm that works for any visitor. As a specialist in children's bedroom interior design Jumeirah, we design rooms that are genuinely lived in, not just decorated.
            </p>
            <p className="text-justify">
              <b className="text-[#caa193]">Smart Home Integration</b><br />
              Electric blackout blinds which automatically close with just the push of a button. Different lighting themes for reading, relaxation, and sleep. Climate control to ensure comfort all through the night. Such features are becoming more frequent in bedroom interior design Dubai projects, and it is much simpler to install them initially than retroactively.
            </p>
          </div>

          <div className="rounded-lg overflow-hidden shadow-md">
            <Image
              src="/images/cnpkapt (6).png"
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
        <h3 className="text-xs sm:text-xl font-conthrax uppercase text-[#caa193]">
         Get In Touch With Us
        </h3>
        <p className="text-sm sm:text-base font-play text-black text-center">
          We are located in the world's luxury city, Dubai</p>
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
        <h2 className="text-center text-3xl font-conthrax text-white uppercase">Why Jumeirah Residents Choose WE DO for Bedroom Design</h2>
        <div className="space-y-6 text-white font-play">
          <p className="text-justify">
            Bedrooms are personal space in a way other rooms are not, and we design them that way. The brief is never just "make it look nice", it is often about a specific frustration. Not enough storage. A room that never feels actually dark at night. A layout that has felt slightly wrong for years without anyone quite knowing why.
          
            Each project is managed by one team from beginning to last. The people who craft your bedroom are the same people who curate the wardrobes and install the lighting, so nothing gets lost between the plan and the result. You receive a complete itemised quote before anything starts, with no surprises added along the way.
          </p>
          <p className="text-justify">
            We also know that a bedroom renovation takes place in an occupied home, where you may even be staying in the very room you're renovating until the job is finished. We account for that, plan ahead, set realistic timetables and expectations, and recognize that this is your personal sanctuary, not a showcase.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="rounded-lg overflow-hidden shadow-md">
            <Image
              src="/images/cnpkapt (7).png"
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
      <div className="lg:max-w-[80%] mx-auto flex flex-col gap-12 mb-12">
        {/* Main Left Content Block (Styles & Properties) */}
        <div className="w-full space-y-12">
          
          {/* Beachfront Design Styles We Deliver */}
          <div className="pt-8 border-t border-gray-800 space-y-6">
            <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#caa193] uppercase">
              Bedroom Design Styles We Deliver
            </h2>
            
            <div className="space-y-4 text-sm sm:text-base font-play text-white text-left">
              <p className="text-justify">
                <b className="text-[#caa193]">Contemporary Calm —</b> Warm neutrals, neat lines, and a palette crafted to feel restful rather than striking. The most requested style for master bedrooms, where the goal is genuinely just to switch off.
              </p>
              <p className="text-justify">
                <b className="text-[#caa193]">Warm Minimalist —</b> A pared-back approach that still feels inviting, natural materials, warm lighting, and just enough texture to avoid feeling clinical.
              </p>
              <p className="text-justify">
                <b className="text-[#caa193]">Classic Luxury —</b> Richer colours, upholstered details, and furniture with more presence. Suits larger villa bedrooms where there is space for a bit more drama.
              </p>
              <p className="text-justify">
                <b className="text-[#caa193]">Modern Arabic —</b> Geometric detail and warm tones woven into a contemporary layout, a style many of our villa bedroom interior design Jumeirah clients ask for when they want something that feels rooted but not traditional.
              </p>
            </div>
          </div>

          {/* Types of Beachfront Properties We Design */}
          <div className="pt-8 border-t border-gray-800 space-y-6">
            <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#caa193] uppercase">
              Who We Design Bedrooms For
            </h2>
            
            <div className="space-y-4 text-sm sm:text-base font-play text-white text-left">
              <p className="text-justify">
                <b className="text-[#caa193]">Villa Owners —</b> Remodelling master bedrooms that have remained unchanged since construction.
              </p>
              <p className="text-justify">
                <b className="text-[#caa193]">Apartment Owners —</b> Making smaller spaces feel larger through smart planning and storage.
              </p>
              <p className="text-justify">
                <b className="text-[#caa193]">Families with Children —</b> Creating adaptable bedrooms that evolve with changing needs.
              </p>
              <p className="text-justify">
                <b className="text-[#caa193]">Property Investors —</b> Improving rental appeal through thoughtful bedroom upgrades.
              </p>
            </div>
          </div>

          {/* Bottom Closing Statement */}
         
        </div>

        {/* Map Container Block */}
        <div className="w-full rounded-lg overflow-hidden shadow-lg my-4" style={{ height: "350px" }}>
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
                What is the cost of bedroom interior design in Jumeirah?
              </h3>
              <p className="text-justify text-gray-300">
                This depends heavily on scope, a full room renovation with custom wardrobes costs more than a styling and lighting refresh. We offer a fully itemised quote after seeing the space and understanding what you require, with no charge for the initial visit.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-conthrax text-[#caa193] text-sm sm:text-base">
                How long does a bedroom renovation take?
              </h3>
              <p className="text-justify text-gray-300">
                Many full bedroom projects take 4 to 6 weeks. A project that focuses solely on a wardrobe or just needs a little bit of revamping could potentially be completed much faster, maybe even within a period of 2 to 3 weeks.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-conthrax text-[#caa193] text-sm sm:text-base">
                Do you only design wardrobes without altering the entire room?
              </h3>
              <p className="text-justify text-gray-300">
                Absolutely, in fact, this happens to be one of our more frequent demands, where an exclusive wardrobe can be designed and installed independent of the rest of the room.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-conthrax text-[#caa193] text-sm sm:text-base">
                Do you design children's bedrooms?
              </h3>
              <p className="text-justify text-gray-300">
                Yes, we design a kid’s room with the future in mind, making it versatile enough for growth.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-conthrax text-[#caa193] text-sm sm:text-base">
                Can you work in an occupied villa?
              </h3>
              <p className="text-justify text-gray-300">
                Yes. Most of our bedroom projects happen in homes where people are still living. We sequence the work to minimize disruption and keep you informed throughout.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-conthrax text-[#caa193] text-sm sm:text-base">
                Do you handle smart home integration in bedrooms?
              </h3>
              <p className="text-justify text-gray-300">
                Yes, blackout blinds, lighting scenes, and climate control can all be planned into a bedroom redesign from the begin, which is far simpler than adding them afterwards.
              </p>
              <div className="pt-8 border-t border-gray-800 space-y-6">
      <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#caa193] uppercase">
       Ready to Transform Your Bedroom?
      </h2>
      
      <div className="space-y-4 text-sm sm:text-base font-play text-white text-left">
        <p className="text-justify">
          If your bedroom has stopped feeling like the retreat it should be, too cluttered, too tired, or simply never quite finished, that is exactly where we like to start.
WE DO Interior Design & Fitout has redesigned bedrooms across Jumeirah's villas and apartments, and we know how to turn an overlooked room into the one you actually look forward to walking into.

         Book your complimentary site visit today. We will visit your home, understand how the space is being used, identify what could work better, and provide practical design recommendations along with a fully itemised estimate.        </p>
      </div>
    </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DProjects;