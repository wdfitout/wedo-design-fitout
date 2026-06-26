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
      quote: "We had lived in the apartment for years and just assumed the layout was fixed. WE DO looked at it completely differently and the changes they suggested made more sense than anything we had thought of ourselves. It finally feels like our home rather than just where we live.",
      author: "Homeowner, Jumeirah Beach Road ⭐⭐⭐⭐⭐",
    },
    {
      quote: " The kitchen redesign alone changed how our family uses the apartment. We actually eat together at the table now, which sounds small but it has made a real difference. Honest, practical advice throughout.",
      author: "Family Resident, Jumeirah ⭐⭐⭐⭐⭐",
    },
    {
      quote: "We renovated while still living in the apartment, which we were nervous about, but the team managed it well and kept disruption to a minimum. The bathrooms in particular came out better than we expected.",
      author: "Apartment Owner, Jumeirah ⭐⭐⭐⭐⭐",
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
        What Our Jumeirah Clients Say
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
          What We Do for Apartments in Jumeirah
        </h2>
        
        <div className="space-y-4 text-sm sm:text-base font-play text-white text-left">
          <p className="text-justify">
            Apartments in Jumeirah are different from the high-rise towers found in other parts of Dubai, and that difference matters when it comes to interiors.
          </p>
          
          <ul className="list-decimal pl-5 space-y-4 text-[#caa193]">
            <li>
              <h3 className="font-play font-bold text-base text-justify">Understanding How You Actually Live</h3>
              <p className="text-white font-play text-sm sm:text-base text-justify">Before starting any project, we take time to understand the household: who lives there, how the rooms get used through a normal week. A family with young children has very different requirements from a couple or someone who works from home most days. This conversation shapes everything that follows.</p>
            </li>
            <li>
              <h3 className="font-play font-bold text-base text-justify">Layout Planning and Room Function</h3>
              <p className="text-white font-play text-sm sm:text-base text-justify">Sometimes the best improvement to an apartment has nothing to do with completion, it is simply rethinking how the rooms are used. A dining area that never gets used could become an extension of the living space. We understand the whole apartment and work out where little changes to layout or practicality would make the best functional difference.</p>
            </li>
            <li>
              <h3 className="font-play font-bold text-base text-justify">Kitchen Design for Real Family Life</h3>
              <p className="text-white font-play text-sm sm:text-base text-justify">The kitchen of a family apartment requires many things, including cooking, fast mornings, evening parties, and more. We develop kitchens based on how they will be used and how the family cooks, incorporating storage and planning for a space that is comfortable even when many people are in it.</p>
            </li>
            <li>
              <h3 className="font-play font-bold text-base text-justify">Living and Dining Spaces Designed to Be Comfortable</h3>
              <p className="text-white font-play text-sm sm:text-base text-justify">Typically, these are the rooms in which families spend a great deal of their time together, as well as what is seen by guests when they visit. We create spaces that look lived in and not staged and furniture in which people really want to relax.</p>
            </li>
            <li>
              <h3 className="font-play font-bold text-base text-justify">Bedrooms & Wardrobes Design</h3>
              <p className="text-white font-play text-sm sm:text-base text-justify">We design bedrooms with well-planned wardrobes, practical lighting, and layouts that feel calm, comfortable, and functional. Children's rooms are designed based on how they will change through time.</p>
            </li>
            <li>
              <h3 className="font-play font-bold text-base text-justify">Bathrooms Design & Renovations</h3>
              <p className="text-white font-play text-sm sm:text-base text-justify">Bathrooms are one of the most commonly renovated spaces in older Jumeirah apartments. This is due to the fact that the bathroom design and fixtures become outdated or no longer fit the family members’ needs. WE DO redesign bathrooms to improve functionality while creating a modern, easy-to-maintain space.</p>
            </li>
            <li>
              <h3 className="font-play font-bold text-base text-justify">Storage Solutions Throughout the Apartment</h3>
              <p className="text-white font-play text-sm sm:text-base text-justify">Storage is one of the most underrated parts of <b className="text-[#caa193]"><a href="https://www.google.com/search?sca_esv=878d6b3e4de82b13&hl=en&authuser=0&sxsrf=APpeQnuKjyVOnjgjctu9_9cDFGctyMk4tw:1782218241091&kgmid=/g/11pyc3sd1k&q=Interior+Design+Company+Dubai+-+WeDo+Interior+Design+%26+Fit+out&shem=epsd1,ltac,rimspwouohc&shndl=30&source=sh/x/loc/uni/m1/1&kgs=366763fdac7b9f3b&utm_source=epsd1,ltac,rimspwouohc,sh/x/loc/uni/m1/1">residential interior design in Jumeirah</a></b>, and one of the things that impacts daily life the most. Built-in storage services, in hallways, bedrooms, kitchens, and utility areas, can fully change how an <b className="text-[#caa193]"><a href="https://wedointerior.ae/modern-apartment-interior-design">modern apartment interior</a></b> feels to live in.</p>
            </li>
            <li>
              <h3 className="font-play font-bold text-base text-justify">Material and Finish Selection</h3>
              <p className="text-white font-play text-sm sm:text-base text-justify">As part of our <b className="text-[#caa193]"><a href="https://wedointerior.ae/home-interior-design-dubai"> residential interior design</a></b> in Jumeirah services, material selection plays an important role in creating interiors that remain attractive and durable for years.</p>
            </li>
            <li>
              <h3 className="font-play font-bold text-base text-justify">Project Management Through to Handover</h3>
              <p className="text-white font-play text-sm sm:text-base text-justify">For apartment renovation Dubai projects, we manage the construction process from start to finish, coordinating trades and ensuring quality throughout every stage. Our aim is to make the renovation process as smooth as possible.</p>
            </li>
          </ul>
        </div>
      </div>

      {/* Split Row – Text + Top Right Image */}
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-3xl font-conthrax text-white py-12 uppercase">
          Jumeirah Apartments Have Their Own Character
        </h2>
        
        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          <div className="space-y-6 text-white font-play">
            <p className="text-justify">
              WE DO provides complete apartment renovation Jumeirah, apartment fit out Jumeirah, and interior design services for apartment owners across the area. 
            </p>
            <ul className="list-disc pl-5 space-y-4 text-[#caa193]">
              <li>
                <b className="text-[#caa193]">Layouts tend to be more spacious and family-friendly:</b>
                <span className="text-white block mt-1 text-justify">Many <b className="text-[#caa193]"><a href="https://wedointerior.ae/palm-jumeirah-apartment">apartments in Jumeirah</a></b> were designed for families, which means big bedrooms, comfortable dining areas, and sometimes maids' rooms or functional storage spaces that apartments simply do not have.</span>
              </li>
              <li>
                <b className="text-[#caa193]">Natural light is often underused:</b>
                <span className="text-white block mt-1 text-justify">Most Jumeirah apartments have wide windows, or views toward green spaces. Elegant apartment interior design in Jumeirah usually starts by working out how to let that light do more work, through colour choices, furniture placement, and window treatments.</span>
              </li>
              <li>
                <b className="text-[#caa193]">These are homes, not showpieces:</b>
                <span className="text-white block mt-1 text-justify">Unlike a hotel apartment or a short-term rental, a Jumeirah apartment is lived in every day by people with daily routines. The interior should look good while remaining practical for everyday living.</span>
              </li>
              <li>
                <b className="text-[#caa193]">Long-term value matters more here:</b>
                <span className="text-white block mt-1 text-justify">Because people stay longer in Jumeirah, the choices made during a renovation or fit-out are needed to last. We craft with that timeline in mind, interiors that still feel right years later, not just on the day they are finished.</span>
              </li>
            </ul>
          </div>

          <div className="rounded-lg overflow-hidden shadow-md">
            <Image
              src="/images/2wresidence (6).webp"
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
          Areas and Building Types We Work With in Jumeirah
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          <div className="space-y-6 text-white font-play">
            <p className="text-justify">
              Jumeirah includes complete residential structures, and our services have been used extensively throughout them. The lower-rise apartments on Jumeirah Beach Road, which feature sea-facing balconies and can greatly benefit from layout planning that maximizes the use of natural lighting and view. The family-style residences located further away from the beach where large layouts and high number of bedrooms give the opportunity for smart space design.<br/>
              Whatever the building, our concept begins the same way, understanding the people who live there and what would genuinely improve their day-to-day experience of the home.
            </p>
          </div>

          <div className="rounded-lg overflow-hidden shadow-md">
            <Image
              src="/images/2wresidence (7).webp"
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

      {/* Why Families Choose Us & Testimonial Section */}
      <div className="lg:max-w-[90%] mx-auto bg-black p-6 sm:p-10 rounded shadow space-y-6 mb-12 mt-12">
        <h2 className="text-center text-3xl font-conthrax text-white uppercase">Why Families in Jumeirah Choose WE DO </h2>
        <div className="space-y-6 text-white font-play">
          <p className="text-justify">
            The people that seek our assistance in <b className="text-[#caa193]"><a href="https://wedointerior.ae/apartment-interior-design-dubai">apartment interior design</a></b> in Jumeirah are not looking for anything flashy; they want someone to understand them and design the interior according to their way of living. This is where all our designs begin. It affects every aspect of the process, from the very first draft until the last detail. Another thing that we consider in designing interiors is that the clients have some stress related to their homes because people usually remain in their apartments for years to come. Therefore, instead of choosing the things that will remain fashionable for a short period only, we prefer things that will age beautifully.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="rounded-lg overflow-hidden shadow-md">
            <Image
              src="/images/2wresidence (8).webp"
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
            
            {/* How a Jumeirah Apartment Project Works Section */}
            <div className="pt-8 border-t border-gray-800 space-y-6">
              <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#caa193] uppercase">
                How a Jumeirah Apartment Project Works
              </h2>
              
              <div className="space-y-4 text-sm sm:text-base font-play text-white text-left">
                <ul className="space-y-4 text-[#caa193]">
                  <li>
                    <h3 className="font-play font-bold text-base text-justify">Step 1 – Starting with Consultation</h3>
                    <p className="text-white font-play text-sm sm:text-base text-justify">We perform home evaluation so that we can know about your living habits and flow of space. In an open conversation, we find out what are your goals and budget constraints to establish a common project goal.</p>
                  </li>
                  <li>
                    <h3 className="font-play font-bold text-base text-justify">Step 2 – The Design Process</h3>
                    <p className="text-white font-play text-sm sm:text-base text-justify">After a detailed discussion, we start with designing a custom approach. In other words, creating a layout design, selecting finishes for material, etc.</p>
                  </li>
                  <li>
                    <h3 className="font-play font-bold text-base text-justify">Step 3 – Design Development</h3>
                    <p className="text-white font-play text-sm sm:text-base text-justify">With the vision approved, we develop the designs for the interiors and prepare a comprehensive project schedule.</p>
                  </li>
                  <li>
                    <h3 className="font-play font-bold text-base text-justify">Step 4 – Construction & Fixtures</h3>
                    <p className="text-white font-play text-sm sm:text-base text-justify">For our renovation projects, our experts take care of the entire construction process from start to finish.</p>
                  </li>
                  <li>
                    <h3 className="font-play font-bold text-base text-justify">Step 5 – Styling & Handover</h3>
                    <p className="text-white font-play text-sm sm:text-base text-justify">Complete furnishings, styling, and a detailed walkthrough, which helps ensure that all is correct before moving ahead and considering the renovation complete.</p>
                  </li>
                </ul>
                <p className="text-justify pt-2 text-white">
                  A typical full renovation in a residential unit within the Jumeirah area would normally take anywhere from 6 to 10 weeks, while smaller refreshes could take anything from 3 to 5 weeks.
                </p>
              </div>
            </div>
          </div>

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
            How long does a Jumeirah apartment remodel take?
          </h3>
          <p className="text-sm sm:text-base text-white text-justify font-play">
            The timeline for the transformation of your Jumeirah apartment depends fully on the scope of the job. A full makeover of everything is going to take from 6 to 10 weeks. When all you want to do is renovate one particular area, such as either the kitchen or bathroom, the entire renovation can usually be done in as little as 3 to 5 weeks.
          </p>

          <h3 className="text-base md:text-sm font-conthrax text-[#caa193] pt-2 text-justify">
            Is it possible to undertake a renovation while we still live in the apartment?
          </h3>
          <p className="text-sm sm:text-base text-white text-justify font-play">
            Often it is. The work schedule is designed to make minimal disruption in most cases, and it may even be possible to have sections of the apartment functional at all times.
          </p>

          <h3 className="text-base md:text-sm font-conthrax text-[#caa193] pt-2 text-justify">
            Do you only work on full renovations, or smaller projects too?
          </h3>
          <p className="text-sm sm:text-base text-white text-justify font-play">
            Both. Some clients want a full apartment redesign, while others want us to focus on one or two rooms, most commonly the kitchen, bathrooms, or living areas. We are happy to scope a project to whatever makes sense for your needs and budget.
          </p>

          <h3 className="text-base md:text-sm font-conthrax text-[#caa193] pt-2 text-justify">
            What types of apartments do you work on in Jumeirah?
          </h3>
          <p className="text-sm sm:text-base text-white text-justify font-play pb-6">
            We work across a wide range of residential apartments throughout Jumeirah, including beachside buildings, family-oriented developments, and older buildings being refreshed. 
          </p>
          
          <h3 className="text-base md:text-sm font-conthrax text-[#caa193] pt-2 text-justify">
            Do you help with furniture and styling, or just the design and construction? 
          </h3>
          <p className="text-sm sm:text-base text-white text-justify font-play pb-6">
            We can manage the full process, including furniture selection, sourcing, and final styling, or we can focus purely on layout, design, and construction if you prefer to handle furnishing yourself.
          </p>

          {/* Final Closing Content */}
          <div className="pt-6 border-t border-gray-800">
            <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#caa193] mb-2 text-justify">
              Book Your Free Consultation
            </h2>
            <p className="text-sm sm:text-base text-white text-justify font-play">
              If your Jumeirah apartment needs a refresh, a complete <b className="text-[#caa193]"><a href="https://wedointerior.ae/fit-out-company-dubai">apartment fit out company Dubai</a></b> solution, or a full interior renovation, <b className="text-[#caa193]"><a href="https://wedointerior.ae/contact-us">Schedule a free consultation today</a></b> and discover how your apartment can be transformed into a more functional, comfortable, and personalised living space.<br/>
              WE DO visit your apartment, listen to what is and is not working, and put together honest, practical suggestions along with a clear estimate. No pressure, and no assumption that bigger or more expensive is automatically better, just a straightforward conversation about how to make your home work properly for you.
            </p>
          </div>
        </div>
      </div>

    </section>
  );
};

export default DProjects;