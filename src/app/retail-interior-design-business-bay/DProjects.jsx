'use client';

import React from 'react';
import Image from 'next/image';

const textImage = {
  src: '/images/contemporary-and-modern-office-interior-design.png',
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
  quote: "WE DO Interior Design & Fit-Out transformed our retail in Volante Tower into a luxurious residence that perfectly captures the energy of Business Bay. The team handled every aspect from concept design to final styling with exceptional professionalism.",
  author: "A.K., Volante Tower, Business Bay",
},
{
  quote: "Our retail overlooking Dubai Canal now feels like a five-star private residence. WE DO managed the complete fit-out process seamlessly and delivered exactly what was promised.",
  author: "S.M., Peninsula Business Bay",
},
{
  quote: "The team created a sophisticated retail interior that maximizes our Burj Khalifa views while maintaining comfort and practicality. Communication and project management were outstanding throughout.",
  author: "R.A., Executive Towers, Business Bay",
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
        What Our Clients Say About Our Business Bay Work
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
        <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#caa193]">
          retail Interior Design Services in Business Bay
        </h2>
        <div className="space-y-4 text-sm sm:text-base font-play text-white text-left">
          <p className="text-justify">
            At WE DO Interior Design & Fit-Out, our retail interior design Business Bay services are built around one principle, every decision should serve the space, the view, and the way you live. Here is what we deliver for every Business Bay retail project.
          </p>
          <ul className="space-y-4 text-[#caa193]">
            <li>
              <h3 className="font-play font-bold text-base text-justify">Space Planning and Layout Design:</h3>
              <p className="text-white font-play text-sm sm:text-base text-justify"> Our luxurious retail in Business Bay Harbor will have an area ranging from 3,500 to 7,000 sq ft on two floors. The layout for our restaurants will be professionally designed in such a way that the living spaces will access the water views while the sleeping spaces will have the necessary privacy. The service spaces will also be well concealed.</p>
            </li>
            <li>
              <h3 className="font-play font-bold text-base text-justify">Custom Joinery & Millwork:</h3>
              <p className="text-white font-play text-sm sm:text-base text-justify"> Our <b className="text-[#caa193]"><a href="/custom-furniture-joinery-dubai-creek-harbour">custom joinery</a></b> is done at our own factory, which includes anything from luxury kitchen islands and full height wardrobes to fluted panelled walls and TV unit storage. Among the materials used for our retail interior design are smoked oak wood, walnut veneer, lacquered MDF, and brushed brass fixtures.</p>
            </li>
            <li>
              <h3 className="font-play font-bold text-base text-justify">FF&E Procurement:</h3>
              <p className="text-white font-play text-sm sm:text-base text-justify">We handle procurement of all furnishings and fittings from pendant lighting to customized sofas via our reliable supplier network. One person handles everything. Not 12 separate vendors.</p>
            </li>
            <li>
              <h3 className="font-play font-bold text-base text-justify">3D Visualization & Concept Design:</h3>
              <p className="text-white font-play text-sm sm:text-base text-justify"> Even before ordering a single item or putting a hand to any walls, you get to see your dream retail come alive in photorealistic 3D visualization. Where Business Bay retail interior design services are concerned, this is an absolute must.</p>
            </li>
            <li>
              <h3 className="font-play font-bold text-base text-justify">Turnkey Fit-Out & Project Management:</h3>
              <p className="text-white font-play text-sm sm:text-base text-justify"> From civil works, floorings, ceilings, MEP coordination, to painting, styling, and snagging, everything is handled by a separate project manager right from the very beginning until completion. This is how Modern retail Interior Design Dubai Services should be.</p>
            </li>
          </ul>
        </div>
      </div>

      {/* Split Row – Text + Top Right Image */}
       <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-3xl font-conthrax text-white py-12">
          What Makes Business Bay retail Interiors Unique
        </h2>

        {/* Section 1: Text Left, Image Right */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          <div className="space-y-6 text-white font-play">
            <p className="text-justify">
              All interior designers operating in Dubai do not have experience in designing apartments in Business Bay, and the output differs accordingly. Below are the unique features of restaurants in Business Bay and how they will influence your decision on which designer to choose.
              </p>
            <ul className="list-decimal pl-5 space-y-4 text-[#caa193]">
              <li>
                <h3 className="font-play font-bold text-base text-justify">The Architecture of Business Bay:</h3>
                <p className="text-white font-play text-sm sm:text-base text-justify"> Residential buildings in Business Bay, The Cove, Island Park, Creek Gate, Harbour Views, use a distinctive vocabulary of architectural expression, including high ceiling height ranging from 3.2m to 5m in restaurants, full width terraces, and panoramic double aspect view of the Creek and Downtown. Ignoring this architecture in interior design produces an erroneous result; respecting it will create a masterpiece.</p>
              </li>
              <li>
                <h3 className="font-play font-bold text-base text-justify">The Views Of Business Bay:</h3>
                <p className="text-white font-play text-sm sm:text-base text-justify"> The spacious interiors of Business Bay restaurants owe as much to their surroundings as they do to the interior. In our work on Business Bay retail layouts, the view becomes the focal furniture, the dimensions of which must be carefully calculated to maintain sightlines while using materials that accentuate the amount of natural light available. A Burj Khalifa or Creek Tower view in perfect frame is more valuable than any furniture you can buy.</p>
              </li>
              <li>
                <h3 className="font-play font-bold text-base text-justify">The Scale of Business Bay:</h3>
                <p className="text-white font-play text-sm sm:text-base text-justify">The size of a 5,000 square ft retail in Business Bay cannot be termed as a large-scale building. The design of such a building has to incorporate soundproofing of the living areas and sleeping quarters, different moods for lights depending on the time of the day, and diversity in the building to ensure that people feel comfortable there. We’ve done this before.</p>
              </li>
              <li>
                <h3 className="font-play font-bold text-base text-justify">The Building Rules:</h3>
                <p className="text-white font-play text-sm sm:text-base text-justify"> Emaar's fit-out  regulations for creek harbor towers specify walls that can be opened up, materials that can be used in common hallways upon delivery, and structural changes that need extra NOCs. An uninformed designer wastes several weeks of delay and perhaps expensive corrections. WE DO know the rules for each project based on numbers rather than referring to the manual on your own time.</p>
                              </li>
            </ul>
          </div>

          <div className="rounded-lg overflow-hidden shadow-md">
            <Image
              src="/images/startech (2).webp"
              alt="Round luxury bed with fairy lights"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>

      {/* Gallery Heading */}
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-lg font-conthrax text-white py-12">
          retail Projects in Business Bay
        </h2>
      </div>

      {/* Gallery Grid with Hover Effects */}
      <div className="lg:max-w-[50%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 max-w-6xl mx-auto mb-10">
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
      </div>

      {/* Emaar Fit-Out Approvals Section */}
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-3xl font-conthrax text-white py-12">
          Emaar Fit-Out Approvals for Business Bay restaurants
        </h2>

        {/* Section 1: Text Left, Image Right */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          <div className="space-y-6 text-white font-play">
            <p className="text-justify">
              Approvals – this is the issue that pops up more often than any other when we discuss retail interior designers in Dubai. Approvals involve paperwork, waiting, and fear of making mistakes. But our answer is simple and straightforward, WE DO deal with everything on your behalf. This is how we do approvals for a retail interior design in Business Bay:
            </p>
            <ul className="list-decimal pl-5 space-y-4 text-[#caa193]">
              <li>
                <h3 className="font-play font-bold text-base text-justify">Emaar NOC Application:</h3>
                <p className="text-white font-play text-sm sm:text-base text-justify"> We file all the paperwork regarding Emaar fit-out applications including the method statement, material submittals, floor plans, and contractor credentials. Time frame – 2-4 weeks.</p>
              </li>
              <li>
                <h3 className="font-play font-bold text-base text-justify">Dubai Municipality Approval:</h3>
                <p className="text-white font-play text-sm sm:text-base text-justify"> Structural changes involving the addition or removal of walls and changes in MEP paths must be approved by DM. We ensure that all drawings conform to DM guidelines.</p>
              </li>
              <li>
                <h3 className="font-play font-bold text-base text-justify">Civil Defence NOC:</h3>
                <p className="text-white font-play text-sm sm:text-base text-justify">Any change in the fire safety mechanism, sprinklers, or exit route will have to be approved by the Civil Defence. It will be done in such a manner that there would not be any sequential approval for it.</p>
              </li>
              <li>
                <h3 className="font-play font-bold text-base text-justify">Building Management Coordination:</h3>
                <p className="text-white font-play text-sm sm:text-base text-justify"> Timing of work, elevator protection, insurance certificates, waste management schedule; everything required by the building management office falls within our purview. Your neighbors will not complain. Your handover will not be delayed.</p>
                <p className="text-white font-play text-sm sm:text-base mt-2 text-justify">Once you engage WE DO Interior Design & Fit-Out, approvals become our problem, not yours.</p>
              </li>
            </ul>
          </div>

          <div className="rounded-lg overflow-hidden shadow-md">
            <Image
              src="/images/startech (2).webp"
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

      {/* Why retail Owners Choose Us & Testimonial Section */}
      <div className="lg:max-w-[90%] mx-auto bg-black p-6 sm:p-10 rounded shadow space-y-6 mb-12 mt-12">
        <div className="text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-conthrax text-[#caa193] mb-2">
            Why Dubai's retail Owners Choose WE DO Interior Design & Fit-Out
          </h2>
          <p className="font-play text-sm sm:text-base text-white text-justify py-2 leading-relaxed">
            Being the best retail <b className="text-[#caa193]"><a href="/interior-design-dubai-creek-harbour">interior design company in Business Bay</a></b>. WE DO offers you the assurance not just in words but also backed up by completed projects in Palm Jumeirah, Downtown, DIFC and the latest addition is the Business Bay. All of your requirements related to design, custom joinery manufacture, procurement and project management are carried out under one umbrella in our Jebel Ali premises. WE DO will not subcontract any critical activities and no surprise in terms of quality and time of delivery. Given the extensive experience in designing restaurants in Dubai in the best addresses of the city, our team has expertise that general interior design companies lack in dealing with restaurants. Our designers know what fits best in your retail. Each project in your retail is managed by a single project manager throughout the entire process from start to completion. One contact number is enough for all of your requirements. All the Dubai retail interiors which fall within the size range of 3,500 to 5,500 square feet can be finished in a time frame of 12 - 18 weeks. All the fit outs provided by WE DO come with a one year warranty on all joineries and fittings.<br /><br />
            <strong className="text-[#caa193]">DED Licensed | Emaar Approved Contractor | 15+ Years in Dubai</strong>
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="rounded-lg overflow-hidden shadow-md">
            <Image
              src="/images/meby (7).webp"
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
          <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#caa193]">
            Serving Business Bay & Surrounding Areas
          </h2>
          <p className="text-sm sm:text-base text-white text-justify font-play">
            Our company <b className="text-[#caa193]"><a href="https://wedointerior.ae/office-interior-design-dubai">WE DO Interior Design & Fit-Out</a></b> provides retail interior design in Business Bay and beyond to the entire eastern side of Dubai, which includes Downtown Dubai, Business Bay, DIFC, Dubai Festival City, and Ras Al Khor. Our team can reach your property within 24 hours from the time you call us if your property is situated in or near Business Bay.
          </p>
          {/* Map Embed */}
<div className="w-full rounded-lg overflow-hidden my-4" style={{ height: "350px" }}>
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57752.54585328352!2d55.29!3d25.185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5f4b8b8b8b8b%3A0x0!2sDubai+Creek+Harbour!5e0!3m2!1sen!2sae!4v1680000000000!5m2!1sen!2sae"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
  </div>
          <h2 className="text-lg md:text-xl font-conthrax text-[#caa193] pt-6">
            retail Interior Design Business Bay — Frequently Asked Questions
          </h2>

          <h3 className="text-base md:text-sm font-conthrax text-[#caa193] pt-2 text-justify">
            How much does retail interior design cost in Business Bay?
          </h3>
          <p className="text-sm sm:text-base text-white text-justify font-play">
            retail interior design in Business Bay cost will depend on the size of your retail unit, the type of job required, and the material quality chosen. retail fit-out costs in Business Bay can vary from AED 350,000 for a standard turnkey service up to AED 900,000+ for larger units. We give you a clear itemised quote after the first site visit – never rough estimates.
          </p>

          <h3 className="text-base md:text-sm font-conthrax text-[#caa193] pt-2 text-justify">
            How long does a full retail fit-out take in Business Bay?
          </h3>
          <p className="text-sm sm:text-base text-white text-justify font-play">
            The duration of a typical retail interior design Business Bay service, involving complete interior design, custom joinery manufacture, and furniture procurement, will be between 12-18 weeks, beginning from design approval of. This includes the Emaar approval period. Larger or more complex projects, cinema rooms, rooftop kitchens, structural changes may extend to 20–22 weeks. All timelines are written into the contract.
          </p>

          <h3 className="text-base md:text-sm font-conthrax text-[#caa193] pt-2 text-justify">
            Do you handle Emaar fit-out approvals for Business Bay restaurants?
          </h3>
          <p className="text-sm sm:text-base text-white text-justify font-play">
            WE DO Interior Design & Fit-Out takes care of all of the Emaar NOC process, Dubai Municipality clearances, Civil Defense coordination, and other building management matters for each and every retail in Business Bay that we choose to undertake. This is part of the project management included in our service offering, not an additional extra.
          </p>

          <h3 className="text-base md:text-sm font-conthrax text-[#caa193] pt-2 text-justify">
            What is offered by you as part of your turnkey retail interior design service?
          </h3>
          <p className="text-sm sm:text-base text-white text-justify font-play">
            Our retail Interior Design Business Bay services includes the following scope: concept design, 3D visuals, space planning, joinery manufacture, furnishing procurement, civil and MEP works, floorings, ceilings, paintwork, and styling. We start with a blank retail and finish with a fully completed apartment.
          </p>

          <h3 className="text-base md:text-sm font-conthrax text-[#caa193] pt-2 text-justify">
            Do you offer 3D visualization before we commit to the design?
          </h3>
          <p className="text-sm sm:text-base text-white text-justify font-play">
            Yes. Every retail interior design project at WE DO begins with a full 3D photorealistic render of all key spaces before any work begins or any item is ordered. For Business Bay retail interiors where the relationship between the interior and the view is central to the design, we consider visualization a non-negotiable step.
          </p>

          <h3 className="text-base md:text-sm font-conthrax text-[#caa193] pt-2 text-justify">
            Can you work on a retail that is already occupied or furnished?
          </h3>
          <p className="text-sm sm:text-base text-white text-justify font-play">
            Yes. We have delivered retail renovation projects in occupied units across Dubai, working in phased sequences one zone at a time to allow residents to remain in the property. This requires a more detailed programme and additional site management, which we plan for at the outset.
          </p>

          <h3 className="text-base md:text-sm font-conthrax text-[#caa193] pt-2 text-justify">
            Which retail buildings in Business Bay have you worked in?
          </h3>
          <p className="text-sm sm:text-base text-white text-justify font-play pb-6">
            In our retail Projects in Business Bay, we have carried out fit-out in The Cove, Harbour Views, Creek Gate, and Island Park. We know the rules regarding the particular fit-out in each of the towers. If your building is not listed, contact us. Our team will research the specific requirements before your first meeting.
          </p>

          {/* Final Closing Content */}
          <div className="pt-6 border-t border-gray-800">
            <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#caa193] mb-2 text-justify">
              Start Your Business Bay retail Project
            </h2>
            <p className="text-sm sm:text-base text-white text-justify font-play">
              Your Business Bay retail deserves a design that matches the address. WE DO Interior Design & Fit-Out offers a free site visit and initial concept consultation, no obligation, no generic presentation. Tell us your building, your size, and your vision. We handle the rest.
            </p>
          </div>
        </div>
      </div>

    </section>
  );
};

export default DProjects;