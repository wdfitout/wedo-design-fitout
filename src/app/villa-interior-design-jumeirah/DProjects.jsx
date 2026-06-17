'use client';

import React from 'react';
import Image from 'next/image';

const textImage = {
  src: '/images/pjapt (5).webp',
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
  quote: "WE DO worked on our villa in Jumeirah 2 and the result matched what we discussed at the start. The team kept us updated throughout, which made the whole process easier.",
  author: "Villa Owner, Jumeirah ⭐⭐⭐⭐⭐",
},
{
  quote: "We needed a full renovation on our property near Umm Suqeim and weren't sure where to start. The team handled the design and the construction side together, which saved us a lot of back and forth.",
  author: " Villa Renovation Client ⭐⭐⭐⭐⭐",
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
   What Clients Say
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
  
  <div className="space-y-4 text-sm sm:text-base font-play text-white ">
    
    <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#caa193] uppercase">
  Our Villa Interior Design Services
</h2>

 <ul className="list-decimal pl-5 space-y-4 text-[#caa193]">
        <li>
          <h3 className="font-play font-bold text-base text-justify">Living Room and Majlis</h3>
          <p className="text-white font-play text-sm sm:text-base text-justify">These two areas can be described as social spaces in the home since this is the area where not only the members of the family but also visitors gather. We always start with making sure you are comfortable, and then we pick out the furniture, lights, and colours to match your tastes.To homeowners desiring the traditional majlis, we come up with designs that are not only comfortable but also match their existing interiors.</p>
        </li>
        <li>
          <h3 className="font-play font-bold text-base text-justify">Master Bedroom and Guest Rooms</h3>
          <p className="text-white font-play text-sm sm:text-base text-justify">Bedrooms are to have a peaceful environment. The emphasis is on the flexibility of lighting, high-end fabrics, and organizational systems that maintain the order and cleanliness. The guest bedrooms are given similar consideration for the comfort of the visitors.</p>
        </li>
        <li>
          <h3 className="font-play font-bold text-base text-justify">Kitchen and Dining Interiors</h3>
          <p className="text-white font-play text-sm sm:text-base text-justify">A kitchen requires you to manage daily cooking and still look right when you're entertaining. Open kitchen and dining layouts are common in villas across Jumeirah 1, 2, and 3, and we'll help you decide if that layout suits your home or if a more closed layout works better.</p>
        </li>
        <li>
          <h3 className="font-play font-bold text-base text-justify">Children's Rooms Interior Design</h3>
          <p className="text-white font-play text-sm sm:text-base text-justify">Kids' rooms take a beating. We design spaces that are safe, easy to maintain, and can be adjusted as children get older.</p>
        </li>
        <li>
          <h3 className="font-play font-bold text-base text-justify">Home Offices Interior</h3>
          <p className="text-white font-play text-sm sm:text-base text-justify">A proper home office has become a regular request across most of our projects. We design these to be quiet and functional without feeling out of place in the rest of the house.</p>
        </li>
        <li>
          <h3 className="font-play font-bold text-base text-justify">Outdoor and Terrace Areas</h3>
          <p className="text-white font-play text-sm sm:text-base text-justify">Most of the villas found in Umm Suqeim, Jumeirah 3, and Pearl Jumeirah feature gardens, terraces, and pool decks that can be transformed into functional outdoor living spaces. Our team ensures that such areas are maximally utilized all year long.</p>
        </li>
        <li>
          <h3 className="font-play font-bold text-base text-justify">Full Villa Renovation Dubai</h3>
          <p className="text-white font-play text-sm sm:text-base text-justify">For older villas that require more than a simple refresh, Our villa renovation in Jumeirah service includes layout modifications, structural upgrades, space reconfiguration, and complete interior transformations. It is here that our expertise of luxury villa renovations in Dubai comes in handy, particularly in older houses within Jumeirah 1 and Umm Suqeim.</p>
        </li>
        <li>
          <h3 className="font-play font-bold text-base text-justify">Villa Design and Build</h3>
          <p className="text-white font-play text-sm sm:text-base text-justify">For older villas that require more than a simple refresh, our <b className="text-[#caa193]"><a href="/design-build-services-in-dubai">villa design and build in Dubai</a></b> service covers the project from layout planning through to interiors, so the architecture and the interior design are planned together rather than as separate steps. As an experienced villa design company Dubai, we ensure both architecture and interiors work together seamlessly.</p>
        </li>
      </ul>


  </div>
</div>

      {/* Split Row – Text + Top Right Image */}
      <div className="max-w-7xl mx-auto">
  <h2 className="text-center text-3xl font-conthrax text-white py-12 uppercase">
   
   Current Villa Interior Design Trends in Jumeirah
  </h2>

  {/* Section 1: Text Left, Image Right */}
  <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
    <div className="space-y-6 text-white font-play">
      <p className="text-justify">
  Tastes shift over time, and these are the <b className="text-[#caa193]"><a href="/villa-interior-design-dubai">modern villa interior design in Jumeirah</a></b> ideas we're getting asked about most often right now:
  </p>
           <ul className="list-decimal pl-5 space-y-4 text-[#caa193]">
  <li>
    <h3 className="font-play font-bold text-base text-justify">Warm minimalism</h3>
    <p className="text-white font-play text-sm sm:text-base text-justify">Those that have a neat design with straight lines, while simultaneously integrating nature into the design by way of using natural colors and textures without making the room too cold.</p>
  </li>
  <li>
    <h3 className="font-play font-bold text-base text-justify">Indoor Outdoor Living</h3>
    <p className="text-white font-play text-sm sm:text-base text-justify">This style is particularly popular with villa owners who have gardens and pools privately, especially those in areas like Umm Suqeim and Jumeirah 3.</p>
  </li>
  <li>
    <h3 className="font-play font-bold text-base text-justify">Statement Lighting Control</h3>
    <p className="text-white font-play text-sm sm:text-base text-justify">Modern villas today need to have layered lighting design with statement pendants alongside smart lighting control systems.</p>
  </li>
  <li>
    <h3 className="font-play font-bold text-base text-justify">Natural materials</h3>
    <p className="text-white font-play text-sm sm:text-base text-justify">Wood, stone, rattan, and linen are replacing some of the all-glossy, all-white finishes that were popular a few years back.</p>
  </li>
  <li>
    <h3 className="font-play font-bold text-base text-justify">Smart home features</h3>
    <p className="text-white font-play text-sm sm:text-base text-justify">Automated lighting, climate control, and security systems are now standard requests for luxury home interior design in Dubai, not just extras.</p>
  </li>
  <li>
    <h3 className="font-play font-bold text-base text-justify">Storage built into the design</h3>
    <p className="text-white font-play text-sm sm:text-base text-justify">Walk-in closets, kitchen organisation systems, and built-in storage are getting just as much attention as the visible finishes.</p>
  </li>
  
</ul>
      
    </div>

    <div className="rounded-lg overflow-hidden shadow-md">
      <Image
        src="/images/pjapt (6).webp"
        alt="Round luxury bed with fairy lights"
        width={600}
        height={400}
        className="w-full h-auto object-cover"
      />
    </div>
  </div>
</div>

      {/* Gallery Heading */}
      {/* <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-lg font-conthrax text-white py-12">
          restaurant Projects in Business Bay
        </h2>
      </div> */}

      {/* Gallery Grid with Hover Effects */}
      {/* <div className="lg:max-w-[50%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 max-w-6xl mx-auto mb-10">
        {galleryImages.map(({ src, link, title }, i) => (
          <a href={link} key={i} className="group block relative overflow-hidden rounded shadow">
            <Image
              src={src}
              alt={title}
              width={400}
              height={400}
              className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-sm sm:text-base font-conthrax text-center">
                {title}
              </p>
            </div>
          </a>
        ))}
      </div> */}

      {/* Emaar Fit-Out Approvals Section */}
      <div className="max-w-7xl mx-auto">
  <h2 className="text-center text-3xl font-conthrax text-white py-12 uppercase">
  Choosing the Right Materials for Jumeirah's Climate
  </h2>

  {/* Section 1: Text Left, Image Right */}
  <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
    <div className="space-y-6 text-white font-play">
      <div className="space-y-4 text-sm sm:text-base font-play text-white text-left">
    <p className="text-justify">
      Material choices matter more here than in most places. Dubai's heat, humidity, and coastal conditions can quickly affect materials that are not selected for the local environment. As part of our residential interior design in Jumeirah process, we recommend materials based on how they perform locally, not just how they look in a showroom:
    </p>
    <ul className="list-disc pl-5 space-y-2 text-[#caa193]">
      <li className="text-white font-play text-sm sm:text-base text-justify"><b className="text-[#caa193]">Porcelain or natural stone flooring</b> – stays cooler underfoot and holds up well over time</li>
      <li className="text-white font-play text-sm sm:text-base text-justify"><b className="text-[#caa193]">Quartz and marble surfaces</b> – good for kitchens and bathrooms where heat and moisture are constant</li>
      <li className="text-white font-play text-sm sm:text-base text-justify"><b className="text-[#caa193]">UV-resistant fabrics</b> – important for villas with large windows and direct sunlight, common in Pearl Jumeirah and La Mer properties</li>
      <li className="text-white font-play text-sm sm:text-base text-justify"><b className="text-[#caa193]">Moisture-resistant paints</b> – help prevent damage in kitchens, bathrooms, and laundry areas</li>
      <li className="text-white font-play text-sm sm:text-base text-justify"><b className="text-[#caa193]">Treated wood or engineered timber</b> – gives a warm look without the risk of warping</li>
    </ul>
    <p className="text-justify pt-2">
      We also factor in ventilation and natural light when planning layouts, which can help keep cooling costs down over time.
    </p>
  </div>
      
    
    </div>

    <div className="rounded-lg overflow-hidden shadow-md">
      <Image
        src="/images/pjapt (7).webp"
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
          We are located in the world's luxury city, Dubai
        </p>
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

      {/* Why restaurant Owners Choose Us & Testimonial Section */}
      <div className="lg:max-w-[90%] mx-auto bg-black p-6 sm:p-10 rounded shadow space-y-6 mb-12 mt-12">
        
<div className=" space-y-6">
  <h2 className="text-center text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#caa193] uppercase">
    Why Work With a Professional Design Team
  </h2>
  
  <div className="space-y-4 text-sm sm:text-base font-play text-white text-left">
    <p className="text-justify">
      Some homeowners try to manage interior projects themselves, or hire separate contractors for different rooms. This often costs more in the long run, with mismatched designs, delays, and unexpected expenses.
    </p>
    <p className="text-justify font-bold ">
      Working with one team for your <b className="text-[#caa193]"><a href="/luxury-villa-interior-design-in-dubai">villa interior design in Jumeirah</a></b> project means:
    </p>
    <ul className="list-disc pl-5 space-y-2 text-white">
      <li className="text-sm sm:text-base text-justify">A consistent design across the whole villa, instead of rooms that feel disconnected from each other</li>
      <li className="text-sm sm:text-base text-justify">Fewer delays, since one team manages the schedule instead of multiple contractors working separately</li>
      <li className="text-sm sm:text-base text-justify">Better pricing through established supplier relationships</li>
      <li className="text-sm sm:text-base text-justify">One point of contact for the entire project, from planning to handover</li>
    </ul>
  </div>
</div>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="rounded-lg overflow-hidden shadow-md">
            <Image
              src="/images/pjapt (8).webp"
              alt="Elegant blue bedroom interior"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Testimonial Block */}
        {/* Testimonial Carousel Block */}
<TestimonialCarousel />
        </div>
      </div>

      {/* Serving Areas & FAQs Section */}
      <div className="lg:max-w-[80%] mx-auto flex flex-col lg:flex-row items-start gap-6 mb-12">
        <div className="w-full space-y-4">
          <div className="space-y-8">
  

<div className="pt-6 border-t border-gray-800 space-y-6">
  <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#caa193] uppercase">
    How We Work
  </h2>
  
  <div className="space-y-4 text-sm sm:text-base font-play text-white text-left">
    <ul className="space-y-4 text-[#caa193]">
      <li>
        <h3 className="font-play font-bold text-base text-justify">Initial Consultation</h3>
        <p className="text-white font-play text-sm sm:text-base text-justify">We begin with a consultation to understand your lifestyle, design preferences, budget, and project goals.</p>
      </li>
      <li>
        <h3 className="font-play font-bold text-base text-justify">Site Visit</h3>
        <p className="text-white font-play text-sm sm:text-base text-justify">Visit to the Villa Our specialists will visit your villa and measure the space while assessing the current condition of the property, whether it is an old building at Jumeirah 2 or a new building in Jumeirah Bay Island.</p>
      </li>
      <li>
        <h3 className="font-play font-bold text-base text-justify">Design Concept and 3D Visuals</h3>
        <p className="text-white font-play text-sm sm:text-base text-justify">We put together a design plan with 3D renderings, so you can see what the finished space will look like before any work starts.</p>
      </li>
      <li>
        <h3 className="font-play font-bold text-base text-justify">Material and Furniture Selection</h3>
        <p className="text-white font-play text-sm sm:text-base text-justify">You choose from a range of finishes and furniture options that fit your style and budget, with our guidance.</p>
      </li>
      <li>
        <h3 className="font-play font-bold text-base text-justify">On-Site Fitout</h3>
        <p className="text-white font-play text-sm sm:text-base text-justify">The on-site fitout is done by our crew, while keeping you updated on its progress at all times.</p>
      </li>
      <li>
        <h3 className="font-play font-bold text-base text-justify">Final Styling and Handover</h3>
        <p className="text-white font-play text-sm sm:text-base text-justify">We complete the final styling, install accessories and soft furnishings, and prepare your villa for handover</p>
      </li>
    </ul>
  </div>
</div>

{/* ==================== NEWLY ADDED CONTENT SECTIONS ==================== */}

{/* Areas We Cover Section */}
<div className="pt-8 border-t border-gray-800 space-y-6">
  <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#caa193] uppercase">
    Areas We Cover
  </h2>
  <div className="space-y-4 text-sm sm:text-base font-play text-white text-left">
    <p className="text-justify">
      We provide villa interior design and fitout services across all of Jumeirah's communities, including:
    </p>
    <ul className="list-disc pl-5 space-y-2 text-[#caa193]">
      <li className="text-white font-play text-sm sm:text-base">Jumeirah 1, Jumeirah 2, and Jumeirah 3</li>
      <li className="text-white font-play text-sm sm:text-base">Pearl Jumeirah</li>
      <li className="text-white font-play text-sm sm:text-base">Jumeirah Bay Island</li>
      <li className="text-white font-play text-sm sm:text-base">La Mer</li>
      <li className="text-white font-play text-sm sm:text-base">Umm Suqeim</li>
      <li className="text-white font-play text-sm sm:text-base">Jumeirah Islands, Jumeirah Park, and Jumeirah Golf Estates</li>
    </ul>
    <p className="text-justify pt-2">
      Wherever your villa is located, our specialists can visit, assess the space, and put together a plan that fits the property and the area it's in.
    </p>
  </div>
</div>

{/* Why Villa Owners Choose WE DO Section */}
<div className="pt-8 border-t border-gray-800 space-y-6">
  <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#caa193] uppercase">
    Why Villa Owners Choose WE DO
  </h2>
  <div className="space-y-4 text-sm sm:text-base font-play text-white text-left">
    <p className="text-justify">
      There's no shortage of villa fitout companies in Dubai, but here's what sets our villa interior design in Jumeirah services apart. We know the area, all of it. The villas in Jumeirah 1 and Umm Suqeim are typically older with bigger land space and more traditional floor plans. Meanwhile, new areas such as Pearl Jumeirah and Jumeirah Bay Island usually have shells that require further finishing before they become a true home. We have a lot of experience dealing with both types of properties.
    </p>
    <p className="text-justify">
      The villa fitout in Jumeirah and custom villa interiors Dubai that we offer include floorings, ceilings, lighting, joineries, kitchen areas, wardrobe areas, and furniture design. You won't need to coordinate different contractors to deal with different parts of your home. The climate in Dubai will quickly erode any materials that aren't suited to it, especially near the coast, e.g., Pearl Jumeirah and La Mer.
    </p>
  </div>
</div>
</div>
          {/* Map Embed */}

          <div className="space-y-4">
    <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#caa193] uppercase">
      Serving Jumeirah & Surrounding Areas
    </h2>
   
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
         <h2 className="text-lg md:text-xl font-conthrax text-[#caa193] pt-6 uppercase">
  Frequently Asked Questions
</h2>
<h3 className="text-base md:text-sm font-conthrax text-[#caa193] pt-2 text-justify">
  How long does a villa interior design project take? 
</h3>
<p className="text-sm sm:text-base text-white text-justify font-play">
  <b className="text-[#caa193]"><a href="/al-manara-luxury-villa"> Full villa projects</a></b> usually take 6 to 12 weeks. Smaller updates, like a single room, can be completed faster.
   </p>
  <h3 className="text-base md:text-sm font-conthrax text-[#caa193] pt-2 text-justify">
   Will I see the design before work begins? 
</h3>
<p className="text-sm sm:text-base text-white text-justify font-play">
 Yes. We provide 3D visuals and mood boards so you know what to expect before construction starts.
  </p>
<h3 className="text-base md:text-sm font-conthrax text-[#caa193] pt-2 text-justify">
  Can you work with furniture I already own? 
</h3>
<p className="text-sm sm:text-base text-white text-justify font-play">
 Yes. We can build the design around pieces you want to keep, or suggest small changes so they fit better with the new look.
  </p>
<h3 className="text-base md:text-sm font-conthrax text-[#caa193] pt-2 text-justify">
  Do you handle permits for renovation work?
</h3>
<p className="text-sm sm:text-base text-white text-justify font-play">
  Yes, our team takes care of the approvals needed for renovation projects across Jumeirah and surrounding communities.
  </p>

<h3 className="text-base md:text-sm font-conthrax text-[#caa193] pt-2 text-justify">
  Do you do both modern and traditional designs?
</h3>
<p className="text-sm sm:text-base text-white text-justify font-play">
  Yes, we can create designs in a modern style, an Arabic style, or even a combination of both styles.
  </p>

<h3 className="text-base md:text-sm font-conthrax text-[#caa193] pt-2 text-justify">
  Which materials are good for Dubai’s weather conditions?
</h3>
<p className="text-sm sm:text-base text-white text-justify font-play">
  Porcelain tiles, quartz stone, treated woods, and fabrics that resist UV rays should fare well in the hot, humid climate of the UAE, particularly around beaches such as those at La Mer and Pearl Jumeirah.
  </p>

<h3 className="text-base md:text-sm font-conthrax text-[#caa193] pt-2 text-justify">
 Do you work on new builds as well as renovations?
</h3>
<p className="text-sm sm:text-base text-white text-justify font-play">
 Yes. Alongside renovations, we also offer villa design and build services in Dubai for homeowners working on new properties, particularly in newer developments like Jumeirah Bay Island.
 </p>

<h3 className="text-base md:text-sm font-conthrax text-[#caa193] pt-2 text-justify">
  Is the consultation free?
</h3>
<p className="text-sm sm:text-base text-white text-justify font-play pb-6">
  Yes, the initial consultation is free with no obligation to proceed.
</p>
          {/* Final Closing Content */}
          <div className="pt-6 border-t border-gray-800">
            <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#caa193] mb-2 text-justify">
             Get Started on Your Villa Project
            </h2>
            <p className="text-sm sm:text-base text-white text-justify font-play">
             Whether you're planning a complete villa renovation or simply updating a few key spaces, our team can help you create a home that reflects your lifestyle and preferences, kindly feel free to contact us at WE DO Interior Design & Fitout to come for an introductory discussion at no charge at all from your side. Be rest assured that regardless of where you reside whether in Jumeirah 1, Pearl Jumeirah, Jumeirah Bay Island, or anywhere else around, we will be in position to assess your needs and offer appropriate solutions.
             </p>
             <p className="text-sm sm:text-base text-white text-justify font-play">
            Ready to transform your villa? Connect with WE DO Interior Design & Fitout today for a free consultation. Our team will assess your property, discuss your requirements, and create a tailored villa interior design solution for your Jumeirah home.
             </p>
          </div>
        </div>
      </div>

    </section>
  );
};

export default DProjects;