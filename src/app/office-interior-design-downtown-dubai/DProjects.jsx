'use client';

import React from 'react';
import Image from 'next/image';

const textImage = {
  src: '/images/sns (4).webp',
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
  quote: "WE DO designed and delivered our Boulevard Plaza office fitout in 11 weeks without disrupting a single day of business. The result was an office that our clients comment on consistently, and that our team genuinely loves working in. The best office interior design Downtown Dubai has delivered for our business, without question.",
  author: "K. Al Rashidi, Managing Director, Financial Services Firm, Boulevard Plaza ⭐⭐⭐⭐⭐",
},
{
  quote: "We were relocating our entire team to Downtown and needed an office that reflected where we were going as a business, not where we had been. WE DO completely understand that brief. The executive suite and boardroom in particular are exactly what we needed for client meetings. As a corporate interior design Downtown Dubai specialist, their understanding of professional service environments is exceptional.",
  author: "J. Williams, CEO, Management Consultancy, Emaar Square ⭐⭐⭐⭐⭐",
},
{
  quote: "The approvals process was the thing I was most worried about before we started. WE DO handled everything, municipality submissions, Civil Defence, building management NOC, without me having to get involved once. As a trusted office fitout contractor Downtown Dubai businesses rely on, they knew exactly what was required and just got on with it.",
  author: "R. Mehta, COO, Technology Company, The Offices at One Central ⭐⭐⭐⭐⭐",
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
      What Our Office Clients Say
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
  <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#caa193] uppercase">
    Why Your Office in Downtown Dubai Matters

  </h2>
  <div className="space-y-4 text-sm sm:text-base font-play text-white ">
    <p className="text-justify">
      First impressions will always have an impact on the way a client or visitor looks at a business. It’s probably safe to say that you trusted that particular firm a bit more. That reaction is more common than most people realise. The spaces we walk into influence how we feel about a business.
    </p>
    <p className="text-justify">
      Beyond client impression, there is the talent question. Hiring and retaining good people in Dubai is genuinely competitive. A well-designed office in Downtown, one with proper collaborative spaces, quiet focus zones, a kitchen people actually want to use, and an environment that feels considered rather than corporate and cold, is a real recruitment advantage. As a specialist commercial interior design Downtown Dubai company, WE DO has seen this play out on project after project. The businesses that invest in their workspace attract better people and keep them longer.
    </p>
    <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#caa193] uppercase">
    Our Office Interior Design Services


  </h2>
   <p className="text-justify">
      As a trusted <b className="text-[#caa193]"><a href="/fit-out-company-dubai">office fitout company Downtown Dubai</a></b> businesses rely on, WE DO manages the entire process from concept and approvals to construction and final handover.
    </p>
    <ul className="list-decimal pl-5 space-y-4 text-[#caa193]">
        <li>
          <h3 className="font-play font-bold text-base text-justify">Space Planning & Workplace Strategy</h3>
          <p className="text-white font-play text-sm sm:text-base text-justify"> Every successful office starts with a clear workplace strategy. We analyse your team structure, workflow, future growth plans, and client interaction requirements to create a layout that supports productivity and collaboration. As a workspace design Downtown Dubai specialist, we focus on creating offices that work as well as they look.</p>
        </li>
        <li>
          <h3 className="font-play font-bold text-base text-justify">Executive Offices & Boardrooms</h3>
          <p className="text-white font-play text-sm sm:text-base text-justify"> We design executive offices and boardrooms that feel professional, private, and comfortable while reflecting your company's image. </p>
        </li>
        <li>
          <h3 className="font-play font-bold text-base text-justify">Open Plan Workstations & Collaborative Spaces</h3>
          <p className="text-white font-play text-sm sm:text-base text-justify"> The best open-plan offices encourage teamwork without creating constant distractions. Through correct planning of these elements, we will achieve collaborative environments that maintain productivity.</p>
        </li>
        <li>
          <h3 className="font-play font-bold text-base text-justify">Entrance Spaces Centered Around the Client</h3>
          <p className="text-white font-play text-sm sm:text-base text-justify"> Your reception area will be the place where the first impression is made when clients and visitors step into your company. We create Office Interior Design in Downtown Dubai pathways that introduce your business in a positive light.</p>
        </li>
        <li>
          <h3 className="font-play font-bold text-base text-justify">Integrating Office Technologies </h3>
          <p className="text-white font-play text-sm sm:text-base text-justify"> Technology can play an integral part right from the very start through our ability to create offices with video conferencing capabilities, lighting controls, dynamic networks, and other integrated technologies.</p>
        </li>
      </ul>
  </div>
</div>

      {/* Split Row – Text + Top Right Image */}
      <div className="max-w-7xl mx-auto">
  <h2 className="text-center text-3xl font-conthrax text-white py-12 uppercase">
    Types of Offices We Design
  </h2>

  {/* Section 1: Text Left, Image Right */}
  <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
    <div className="space-y-6 text-white font-play">
      <ul className="list-decimal pl-5 space-y-4 text-[#caa193]">
        <li>
          <h3 className="font-play font-bold text-base text-justify">Executive Suites & Private Offices</h3>
          <p className="text-white font-play text-sm sm:text-base text-justify"> A complete professional experience for professionals and smaller groups needing a top-of-the-line client interaction space in a highly-regarded Downtown location. From the desktop to the acoustic seal on the door, everything conveys the intended message perfectly.</p>
        </li>
        <li>
          <h3 className="font-play font-bold text-base text-justify">Full Floor Fitouts for Corporations</h3>
          <p className="text-white font-play text-sm sm:text-base text-justify"> Comprehensive changes to workplaces for companies that are growing or moving Downtown. We handle all the complexity of multi-zone, multi-department fitouts without disrupting any of your company’s functions.</p>
        </li>
        <li>
          <h3 className="font-play font-bold text-base text-justify">Client-Facing Professional Services</h3>
          <p className="text-white font-play text-sm sm:text-base text-justify"> Law firms, financial advisory practices, management consultancies, and real estate companies whose offices are part of their client proposition. As a specialist premium office fitout Downtown Dubai provider,<b className="text-[#caa193]"><a href="/interior-design-companies-downtown-dubai"> WE DO Interior design & fit-out company in downtown</a></b> understands the specific design requirements of high-trust professional service environments.</p>
        </li>
        <li>
          <h3 className="font-play font-bold text-base text-justify">Creative Agencies & Media Studios</h3>
          <p className="text-white font-play text-sm sm:text-base text-justify"> Creative businesses need offices that inspire, not suppress. Creative teams need spaces that feel inspiring and flexible. We design environments that support new ideas while still being practical for everyday work</p>
        </li>
        <li>
          <h3 className="font-play font-bold text-base text-justify">Coworking & Flexible Workspace</h3>
          <p className="text-white font-play text-sm sm:text-base text-justify"> Fastest-growing sector in the Downtown Dubai commercial property market. WE DO create <b className="text-[#caa193]"><a href="/cafe-interior-design-dubai">flexible workspaces</a></b>, hot-desk environments, office facilities in a co-working environment, and member amenities to attract and keep members in a competitive market environment.</p>
        </li>
        <li>
          <h3 className="font-play font-bold text-base text-justify">Financial Services & Legal Offices</h3>
          <p className="text-white font-play text-sm sm:text-base text-justify"> Our office refurbishment Downtown Dubai services has proven very attractive especially to law firms, financial institutions, and consulting firms that seek to revamp their offices with an air of secrecy, confidentiality, and gravitas. Financial and legal offices have specific design requirements that go beyond aesthetics. WE DO has delivered multiple projects for financial services and legal clients in Downtown Dubai, we understand exactly what these environments need to communicate.</p>
        </li>
      </ul>
    </div>

    <div className="rounded-lg overflow-hidden shadow-md">
      <Image
        src="/images/sns (5).webp"
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
   The Role of Efficiency in Office Design for Business Expansion
  </h2>

  {/* Section 1: Text Left, Image Right */}
  <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
    <div className="space-y-6 text-white font-play">
      <p className="text-justify">
        A well-designed office helps employees work comfortably, strengthens your brand image, and creates a better experience for both staff and clients. Apart from that, clients will also feel comfortable with the designs. It is particularly helpful in a highly competitive environment like Downtown Dubai.
      </p>
      
    
    </div>

    <div className="rounded-lg overflow-hidden shadow-md">
      <Image
        src="/images/sns (9).webp"
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
        <div className="text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-conthrax text-[#caa193] mb-2">
           Why Restaurant Owners in Business Bay Choose WE DO
          </h2>
          <p className="font-play text-sm sm:text-base text-white text-justify py-2 leading-relaxed">
            Design, approvals, and construction managed in-house by one accountable team. No coordination failures between a separate design studio and fitout contractor. As Business Bay F&B Specialists, we know Business Bay's building regulations, developer NOC requirements, and municipality expectations intimately. Every project begins with a fully itemised quote. Our approvals team has navigated DM food establishment licensing, Civil Defence compliance, and DEWA coordination on dozens of Business Bay projects. Once we hand over the keys, our commitment does not end there. The dedicated snagging phase and follow-up commitment ensure that the restaurant delivered remains exactly as promised, and any problems faced are sorted out without question.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="rounded-lg overflow-hidden shadow-md">
            <Image
              src="/images/sns (11).webp"
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
  
 <div >
    <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#caa193] uppercase">
      Why Choose WE DO
    </h2>
    
    <div className="space-y-4 text-sm sm:text-base font-play text-white text-left">
      
      
      <p className="text-justify pt-2 text-white">
        We have worked in Boulevard Plaza, Emaar Square, The Offices at One Central, and Burj Khalifa offices. Our commercial fitout Downtown Dubai team manages design, approvals, construction, and handover under one roof. This knowledge saves time, and time in a commercial fitout is money. As a specialist office renovation Downtown Dubai company, we understand that you cannot simply close your business for eight weeks while we build. You receive a fully itemised quote before work begins. Every line, every dirham, explained. You will never receive a surprise invoice at any stage of your project.
      </p>
    </div>
    </div>
 <div className="pt-6 border-t border-gray-800 space-y-6">
  <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#caa193] uppercase">
    Our Office Fitout Process
  </h2>
  
  <div className="space-y-4 text-sm sm:text-base font-play text-white text-left">
    <ul className="space-y-4 text-[#caa193]">
      <li>
        <h3 className="font-play font-bold text-base text-justify">Week 1 – Free Consultation</h3>
        <p className="text-white font-play text-sm sm:text-base text-justify">On-site visit, site overview, headcount and growth talk, and budget guidelines. No obligation, just an open discussion about what you need.</p>
      </li>
      <li>
        <h3 className="font-play font-bold text-base text-justify">Week 2 to 3 – Concept Design</h3>
        <p className="text-white font-play text-sm sm:text-base text-justify">Space planning, 3D visualisation, material and finish suggestions, technology plan, and comprehensive budget estimate. This is where you get what you have paid for.</p>
      </li>
      <li>
        <h3 className="font-play font-bold text-base text-justify">Weeks 3 to 7 — Approvals</h3>
        <p className="text-white font-play text-sm sm:text-base text-justify">Dubai Municipality technical drawings submitted, Civil Defence fire safety review, DEWA coordination, and building management NOC, all managed entirely by WE DO, running in parallel with detailed design development.</p>
      </li>
      <li>
        <h3 className="font-play font-bold text-base text-justify">Weeks 7 to 14 — Construction & Fitout</h3>
        <p className="text-white font-play text-sm sm:text-base text-justify">Site managed by our dedicated project manager. Weekly progress updates. Zero-tolerance quality standards throughout. Construction sequenced specifically to minimise disruption to your business operations.</p>
      </li>
      <li>
        <h3 className="font-play font-bold text-base text-justify">Weeks 14 to 15 — Technology, Signage & Finishing</h3>
        <p className="text-white font-play text-sm sm:text-base text-justify">AV and technology systems commissioned, environmental graphics installed, furniture and loose fittings placed, final styling completed.</p>
      </li>
      <li>
        <h3 className="font-play font-bold text-base text-justify">Weeks 15 – 16 - Handover</h3>
        <p className="text-white font-play text-sm sm:text-base text-justify">Client walk-through, sign-offs, training on technology usage for your team, and handover support commence immediately.</p>
      </li>
    </ul>
    
    <p className="text-justify pt-2 text-white">
      The fit-out process for most offices in Downtown Dubai takes between 12 and 16 weeks after design approval. Small office spaces and partial fit-outs are done within 6 to 10 weeks.
    </p>
  </div>
</div>
</div>
          {/* Map Embed */}

          <div className="space-y-4">
    <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#caa193] uppercase">
      Serving Downtown & Surrounding Areas
    </h2>
   
  </div>
<div className="w-full rounded-lg overflow-hidden my-4" style={{ height: "350px" }}>
 <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14440.673856272559!2d55.26781254344073!3d25.197514782057277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43348a67e24b%3A0xff45e502e1ceb7e2!2sDowntown%20Dubai%20-%20Dubai!5e0!3m2!1sen!2sae!4v1717680000000!5m2!1sen!2sae"
  width="100%"
  height="100%"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
></iframe>
  </div>
         <h2 className="text-lg md:text-xl font-conthrax text-[#caa193] pt-6 uppercase">
  FAQs
</h2>

<h3 className="text-base md:text-sm font-conthrax text-[#caa193] pt-2 text-justify">
  How much does office interior design cost in Downtown Dubai? 
</h3>
<p className="text-sm sm:text-base text-white text-justify font-play">
  Cat B fitouts, the full branded, furnished office your business occupies, typically range from AED 1,200 to AED 2,500 per sqm in Downtown Dubai. A 200 sqm office fitout generally requires AED 300,000 to AED 600,000 including design, construction, technology, and approvals. Executive and luxury finishes range from AED 2,500 to AED 5,000+ per sqm. WE DO provides a fully itemised estimate after the initial site visit at no charge.
</p>

<h3 className="text-base md:text-sm font-conthrax text-[#caa193] pt-2 text-justify">
  How long does an office fitout take in Downtown Dubai? 
</h3>
<p className="text-sm sm:text-base text-white text-justify font-play">
  Most office fitouts in Downtown Dubai take 12 to 16 weeks from design sign-off to handover. Smaller suites and partial refurbishments deliver in 6 to 10 weeks. We recommend starting conversations at least 4 months before your target occupation date,earlier if your fitout is complex or large scale.
</p>

<h3 className="text-base md:text-sm font-conthrax text-[#caa193] pt-2 text-justify">
  Can you fit out our office without disrupting business operations? 
</h3>
<p className="text-sm sm:text-base text-white text-justify font-play">
  Yes, this is something we plan specifically for every commercial project. We schedule our building works so that your business operations are not disturbed, utilize night time laborers when required, and control access and noise on site. As an expert office fitout contractor Downtown Dubai businesses trust, minimising disruption is a core part of how we deliver.
</p>

<h3 className="text-base md:text-sm font-conthrax text-[#caa193] pt-2 text-justify">
  Do you handle Dubai Municipality approvals?
</h3>
<p className="text-sm sm:text-base text-white text-justify font-play">
  Yes, completely. Technical drawings, Civil Defence submissions, DEWA coordination, and building management NOC, all managed by our dedicated approvals team. Most clients never have to interact with an approval authority directly on a WE DO project.
</p>

<h3 className="text-base md:text-sm font-conthrax text-[#caa193] pt-2 text-justify">
  What is the difference between Cat A and Cat B fitout?
</h3>
<p className="text-sm sm:text-base text-white text-justify font-play">
  Cat A is the landlord-standard base build, mechanical, electrical, basic finishes, raised floors, suspended ceilings. It gets a space to a blank, rentable condition. Cat B is everything on top of that, the partitions, joinery, branding, furniture, technology, and fit-out that turns a blank space into your actual office. Most businesses occupy Cat B, it is where the real workplace design happens.
</p>

<h3 className="text-base md:text-sm font-conthrax text-[#caa193] pt-2 text-justify">
  In which Downtown Dubai buildings have you done any work?
</h3>
<p className="text-sm sm:text-base text-white text-justify font-play">
  We have completed office interior design projects across Boulevard Plaza, Emaar Square, The Offices at One Central, and other prominent Downtown Dubai locations.
</p>

<h3 className="text-base md:text-sm font-conthrax text-[#caa193] pt-2 text-justify">
  Are you able to do office refurbishment in Downtown Dubai?
</h3>
<p className="text-sm sm:text-base text-white text-justify font-play pb-6">
  Absolutely. WE DO has got all the skills necessary to do a proper office refurbishment downtown Dubai including space upgrade, reception design, meeting rooms renovation, furniture change, modernizing technology and commercial fitout.
</p>
          {/* Final Closing Content */}
          <div className="pt-6 border-t border-gray-800">
            <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#caa193] mb-2 text-justify">
             Ready to Upgrade Your Downtown Dubai Office?
            </h2>
            <p className="text-sm sm:text-base text-white text-justify font-play">
             Your office in Downtown Dubai is the main commercial message that your company conveys before saying anything. WE DO Interior Design & Fitout builds offices that send the right signal. Workplaces which awe customers, draw in talent, increase productivity, and demonstrate the aspirations of the company running inside them.
            </p>
             <p className="text-sm sm:text-base text-white text-justify font-play">
             Are you interested in having office fitouts in Downtown Dubai whether for a shell space, moving your people into a new location, or for a renovation of your current office environment? Our team will take care of the whole process for you so that you can concentrate on managing your business.
            </p>
          </div>
        </div>
      </div>

    </section>
  );
};

export default DProjects;