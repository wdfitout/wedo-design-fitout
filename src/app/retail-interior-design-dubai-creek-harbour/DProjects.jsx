'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const textImage = {
  src: '/images/dbckapt (5).png',
  link: '/interior-design-dubai-creek-harbour',
  title: 'Retail Interior Design Dubai Creek Harbour'
};

const DProjects = () => {
  // Testimonial Slider State
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      quote: '"WE DO transformed our boutique store concept into reality at Creek Marina. Their flawless management of Emaar\'s strict manuals and DDA permits saved us weeks of delays. The custom joinery work built in Jebel Ali is exceptional."',
      author: 'Luxury Fashion Brand',
      role: 'Store Manager, Dubai Creek Harbour'
    },
    {
      quote: '"The finest turnkey design experience in Dubai. Having design, MEP approvals, and joinery under one single roof made our flagship showroom fit-out stress-free. Highly recommended for premium commercial spaces."',
      author: 'High-End Showroom Owner',
      role: 'Managing Director, Creek Harbour Retail District'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  // Auto Play Logic (Changes slide every 5 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000); // 5000ms = 5 seconds

    return () => clearInterval(timer); // Cleanup timer on unmount
  }, [currentSlide]);

  return (
    <section className="px-6 py-5 bg-black-200">
      
      {/* Top Content Block */}
      <div className="lg:max-w-[80%] mx-auto bg-black p-6 sm:p-10 rounded shadow text-center space-y-6 mb-12">
        <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#caa193] uppercase">
          Why Retail Spaces in Dubai Creek Harbour Need Distinct Design
        </h2>

        <div className="space-y-4 text-sm sm:text-base font-play text-white text-justify leading-relaxed">
          <p>
            The Dubai Creek Harbour is the latest project for Downtown by Emaar featuring high-end residential spaces, hospitality, and high-end podium retail. In this case, the target market consists of the homeowners in the Address Residences, the guests of the Vida Hotels, tourists to the iconic structure of Creek Tower, and visitors coming from Ras Al Khor on weekends. This target group requires retail interior spaces that make sense from afar and are authentic to the area’s modern buildings.
          </p>

          <p>
            Generic retail store interior design doesn't work in this micro-market. A jewellery boutique at The Cove Dubai Creek Harbour needs a different spatial logic than a concept store on the Creek Marina promenade. Our work as retail interior design experts focuses on those distinctions site lines, dwell zones, fixture height, and material palettes calibrated to the property type, the brand, and the buyer walking past.
          </p>
        </div>
      </div>

      {/* Split Row – Text + Top Right Image */}
      <div className="lg:max-w-[90%] mx-auto flex flex-col lg:flex-row items-start gap-6 mb-12">
        <div className="w-full lg:w-2/3 space-y-4">
          <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#caa193] uppercase">
            Our Retail Interior Design Services in Dubai Creek Harbour
          </h2>
          
          <p className="text-sm sm:text-base text-white text-justify font-play leading-relaxed">
            We deliver every stage of a retail fit-out Dubai Creek Harbour brands need from concept to handover. Each service below is led by senior designers and executed by our in-house fit-out and joinery teams.
          </p>

          <div className="space-y-4 text-sm sm:text-base text-white text-justify font-play leading-relaxed">
            <p className="text-justify">
              <b className="text-[#caa193] block text-base font-conthrax text-left">Boutique Interior Design</b>
              Tailored boutique interiors designed specifically for fashion, accessory, and lifestyle products launching into or moving within Dubai Creek Harbour. From storefront interior design to bespoke lighting solutions. Explore our <b className="text-[#caa193]"><a href="/boutique-interior-design-dubai" className="hover:underline">boutique interior design services </a></b> for the full scope.
            </p>

            <p className="text-justify">
              <b className="text-[#caa193] block text-base font-conthrax text-left">Luxury Showroom Design</b>
              Designing of showroom interiors for automobiles, furniture, jewelry and luxury products. The design of our showrooms is an absolute combination of product display and brand messaging through superior joinery and lighting.
            </p>

            <p className="text-justify">
              <b className="text-[#caa193] block text-base font-conthrax text-left">Flagship Store Interiors</b>
              Flagship retail design demands a different scale of thinking multi-zone layouts, immersive brand moments, and architectural feature walls. We've delivered flagship-format retail interior designs in Dubai and bring that depth to Creek Harbour briefs.
            </p>

            <p className="text-justify">
              <b className="text-[#caa193] block text-base font-conthrax text-left">Podium & Mall Shop Fit-Out</b>
              Store Interior Fit-Out for podium-level units inside Address, Vida, and Creek Gate developments. We work within Emaar's tenant fit-out manuals, handle access coordination with mall management, and execute within active-mall hours when required.
            </p>

            <p className="text-justify">
              <b className="text-[#caa193] block text-base font-conthrax text-left">Pop-Up & Kiosk Design</b>
              Short-lead pop-up stores, seasonal activations, and standalone kiosks for the Creek Beach and Creek Marina promenades. Modular, brand-ready, and fast to deploy.
            </p>

            <p className="text-justify">
              <b className="text-[#caa193] block text-base font-conthrax text-left">Visual Merchandising & Space Planning</b>
              Layout strategy that maximises sqft yield entry magnetism, decompression zones, fixture sightlines, and checkout flow. Backed by retail traffic logic, not guesswork.
            </p>

            <p className="text-justify">
              <b className="text-[#caa193] block text-base font-conthrax text-left">Retail Branding Integration</b>
              Brand identity translated into spatial design signage, materials, colour, and texture coordinated with your existing brand guidelines or built from scratch alongside our design team.
            </p>
          </div>
        </div>

        {/* Top Right Image */}
        <div className="w-full lg:w-1/3 group relative overflow-hidden rounded-lg shadow-lg lg:mt-10">
          <a href={textImage.link} className="block">
            <Image
              src={textImage.src}
              alt={textImage.title}
              width={500}
              height={400}
              className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-sm sm:text-base font-conthrax text-center px-4">
                {textImage.title}
              </p>
            </div>
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-2xl md:text-3xl font-conthrax text-white py-12 uppercase tracking-wider">
          Our Retail Design & Fit-Out Process
        </h2>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          <div className="space-y-6 text-white font-play">
            <p className="text-justify leading-relaxed">
              A proven six-step method which ensures all retail fitouts in Dubai remain on schedule, within budget, and in line with the client's branding.
            </p>

            <ul className="list-decimal pl-5 space-y-4 text-[#caa193]">
              <li className="text-justify">
                <h3 className="font-play font-bold text-base text-left"> Brand and Site Discovery (Week 1)</h3>
                <p className="text-white font-play leading-relaxed">
                  Our team visits the site, documents current conditions, and develops the brief by incorporating the brand into our design. This stage entails researching the Emaar tenant fit-out manual for Dubai Creek Harbour sites.
                </p>
              </li>

              <li className="text-justify">
                <h3 className="font-play font-bold text-base text-left"> Concept Design and Mood Boards (Weeks 2 - 3)</h3>
                <p className="text-white font-play leading-relaxed">
                  This includes up to three concepts using samples from materials, lighting, fixtures, and possible store fronts. You choose one direction; we refine.
                </p>
              </li>

              <li className="text-justify">
                <h3 className="font-play font-bold text-base text-left"> 3D Visualization and Space Planning (Weeks 4-5)</h3>
                <p className="text-white font-play leading-relaxed">
                  Photo-realistic 3D rendering for each area before any panels get assembled. You see the space, walk through it, and sign off – no more surprises at all during the fit-out.
                </p>
              </li>

              <li className="text-justify">
                <h3 className="font-play font-bold text-base text-left"> Approvals: Emaar, DDA, Trakheesi & Civil Defence</h3>
                <p className="text-white font-play leading-relaxed">
                  We get all the approvals you need. Tenant fit-out submission with Emaar, design approvals from DDA, permit from Trakheesi and Civil Defence approval – all done in parallel to shorten the process.
                </p>
              </li>

              <li className="text-justify">
                <h3 className="font-play font-bold text-base text-left"> Fit-Out, MEP & In-House Joinery Execution</h3>
                <p className="text-white font-play leading-relaxed">
                  Works start onsite under project management. Our joinery is manufactured in-house in our workshop; we don't subcontract this part. The MEP, flooring, lighting, finishes, and storefit works take place in accordance with the schedule.
                </p>
              </li>

              <li className="text-justify">
                <h3 className="font-play font-bold text-base text-left"> Handover and Aftercare For 12 Months</h3>
                <p className="text-white font-play leading-relaxed">
                  Completion of snagging list, providing certification and aftercare for 12 months for joinery, finishes and fitout items.
                </p>
              </li>
            </ul>
          </div>

          <div className="rounded-lg overflow-hidden shadow-md group relative">
            <Image
              src="/images/dbckapt (6).png"
              alt="Premium Retail Store Fit-Out and Bespoke Joinery Execution"
              width={600}
              height={400}
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>
      </div>

      {/* Bottom CTA Section */}
      <div className="bg-[#f5ede5] py-10 text-center space-y-4">
        <h3 className="text-xs sm:text-xl font-conthrax uppercase">
          Get In Touch With Us
        </h3>
        <p className="text-sm sm:text-base font-play">
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

      {/* Local Considerations paragraph */}
      <div className="lg:max-w-[90%] mx-auto bg-black p-6 sm:p-10 rounded shadow space-y-6 mb-12 mt-12">
        <div className="text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-conthrax text-[#caa193] mb-4 uppercase tracking-wider">
            Local Considerations for Fitout of Retail Space in Dubai Creek Harbour
          </h2>
          <p className="font-play text-sm sm:text-base text-white text-justify py-2 leading-relaxed">
            Working in Dubai Creek Harbour is different from DIFC, Business Bay or City Walk. Emaar's master-developer status means tenant fit-outs follow specific protocols that catch out-of-area retail fit out companies off guard. Our team has worked across Emaar developments and understands the difference between submitting and approved.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="rounded-lg overflow-hidden shadow-md group relative">
            <Image
              src="/images/dbckapt (4).png"
              alt="Retail Interior Design Approvals and Fit-Out in Dubai Creek Harbour"
              width={600}
              height={400}
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          <div className="text-white font-play space-y-4">
            <div>
              <h3 className="text-sm sm:text-base font-conthrax text-[#caa193] mb-1 text-left">
                Emaar tenant fit-out manuals:
              </h3>
              <p className="text-justify text-sm sm:text-base text-gray-300 leading-relaxed">
                Every retail unit comes with a development-specific manual covering storefront design, signage rules, MEP tie-ins, working hours, and material restrictions. Non-compliance means rework and approval delays.
              </p>
            </div>

            <div>
              <h3 className="text-sm sm:text-base font-conthrax text-[#caa193] mb-1 text-left">
                DDA & Trakheesi permits:
              </h3>
              <p className="text-justify text-sm sm:text-base text-gray-300 leading-relaxed">
                Dubai Development Authority oversight applies to retail fit-outs in Creek Harbour. Trakheesi permit submission, design approval, and inspection sequencing are part of our standard scope.
              </p>
            </div>

            <div>
              <h3 className="text-sm sm:text-base font-conthrax text-[#caa193] mb-1 text-left">
                Civil Defence and Dubai Municipality:
              </h3>
              <p className="text-justify text-sm sm:text-base text-gray-300 leading-relaxed">
                Fire safety, accessibility, and material certifications all run through Civil Defence. We coordinate submissions to avoid the typical 4–6 week delays that hit retailers using non-specialist contractors.
              </p>
            </div>

            <div>
              <h3 className="text-sm sm:text-base font-conthrax text-[#caa193] mb-1 text-left">
                Working hours and access:
              </h3>
              <p className="text-justify text-sm sm:text-base text-gray-300 leading-relaxed">
                Active podium retail often requires fit-out work in restricted windows typically evenings or specific weekday slots. We schedule accordingly and coordinate with mall management.
              </p>
            </div>

            <div>
              <h3 className="text-sm sm:text-base font-conthrax text-[#caa193] mb-1 text-left">
                Adjacent tenant coordination:
              </h3>
              <p className="text-justify text-sm sm:text-base text-gray-300 leading-relaxed">
                Noise, dust, and access impact neighbouring tenants. We manage that relationship so your fit-out doesn't damage future neighbour-of-record relationships.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:max-w-[80%] mx-auto flex flex-col lg:flex-row items-start gap-6 mb-12">
        <div className="w-full space-y-4">
          <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#caa193] uppercase">
            Why Retailers Choose WE DO Among the Top Interior Design Companies in Dubai
          </h2>

          <p className="text-sm sm:text-base text-white text-justify font-play leading-relaxed">
           <b className="text-[#caa193]"><a href="https://wedointerior.ae/" className="hover:underline">Retailers choose WE DO</a></b> due to our over 15 years of experience in high-end commercial design services for all of Dubai's exclusive areas such as DIFC, Downtown, Business Bay, Palm Jumeirah, and most recently, Dubai Creek Harbour. Designing a retail space is our forte, where we create a concept around your brand identity and design it in such a way that suits the customer base your retail outlet caters to. We pride ourselves on being turn-key designers for your projects, meaning that designing, MEP, joinery, fit-outs, and even approvals happen under one roof, which removes the finger-pointing between subcontractors and gives you one point of accountability from kickoff to handover. 
            <br /><br />
            Working within Creek Harbour requires extensive local knowledge about Emaar buildings. The reason behind this is that we are already familiar with Emaar's criteria for fit-outs of their tenants, property management, and approval procedures because we have worked through them many times before. Every construction project relies on our in-house joinery facility located in Jebel Ali, which manufactures display units, storefronts, counters, and feature walls ourselves. This results in a shorter lead time, better quality assurance, and a 12-month warranty on all of our joinery pieces. 
            <br /><br />
            Businesses looking for interior design companies in Business Bay Dubai or a trusted office interior design company in Business Bay select WE DO Interior Design & Fitout because of our experiences, dedication, and personalized solutions.
          </p>
          
          <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#caa193] uppercase">
            Retail Sectors We Serve in Dubai Creek Harbour
          </h2>

          <p className="text-sm sm:text-base text-white text-justify font-play leading-relaxed">
            Our commercial interior design companies scope covers the full retail spectrum:
            <br /><br />
            • Fashion & Apparel<br />
            • Jewellery & Watches<br />
            • Beauty & Cosmetics<br />
            • Lifestyle & Concept Stores<br />
            • F&B Retail (cafes, bakeries, dessert bars)<br />
            • Eyewear<br />
            • Electronics & Tech<br />
            • Luxury Accessories
            <br /><br />
            Whether you're opening a single boutique or rolling out a multi-unit retail concept across Creek Harbour, Downtown, and beyond, our team of commercial interior designers scales to the brief.
          </p>

          <div className="space-y-4 mt-12 mb-12">
            <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#caa193] uppercase mb-4">
              Retail Interior Design Cost in Dubai Creek Harbour
            </h2>

            <p className="text-sm sm:text-base text-white text-justify font-play leading-relaxed">
              Fit-out cost of retail spaces in Dubai Creek Harbour is estimated at AED 350 - 1,200 per sqft. There are five elements that affect variations in retail fit-outs:
              <br /><br />
              • <b className="text-[#caa193]" >Brand finish level</b> – expensive boutiques and flagships are more costly compared to concept stores and kiosks because of high material costs.<br />
              • <b className="text-[#caa193]">MEP scope</b> – installation of air conditioning and reworking the light fixtures requires 20-35% additional work compared to utilizing existing infrastructure.<br />
              • <b className="text-[#caa193]">Joinery complexity</b> — custom display walls, integrated storage, and feature ceilings increase joinery hours.<br />
              • <b className="text-[#caa193]">Approval timeline</b> – quick Emaar and DDA approvals sometimes come with additional costs.<br />
              • <b className="text-[#caa193]">Storefront treatment</b> – glazing, signages, and lighting will be done separately.
              <br /><br />
              We provide itemised quotations after the site survey, not square-foot estimates over the phone.
              <br /><br />
              <a 
                href="https://wa.me/971588075603" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-block bg-[#caa193] text-black px-5 py-2.5 text-xs font-semibold uppercase rounded hover:bg-white transition-all duration-200 font-conthrax mt-2 tracking-wider"
              >
                [ Request a Custom Quote ]
              </a>
            </p>
          </div>

          {/* DYNAMIC AUTO-PLAY CAROUSEL TESTIMONIALS SECTION */}
          <div className="space-y-6 mt-16 mb-12 bg-[#0a0a0a] p-8 rounded-lg border border-gray-900 relative">
            <h2 className="text-lg md:text-xl font-conthrax text-[#caa193] uppercase tracking-wider text-left">
              What Our Retail Clients Say
            </h2>
            
            {/* Carousel Box */}
            <div className="relative min-h-[180px] flex flex-col justify-between pt-4">
              <p className="text-sm sm:text-base text-gray-300 text-justify font-play italic leading-relaxed transition-all duration-300">
                {testimonials[currentSlide].quote}
              </p>
              
              <div className="text-left mt-6 flex justify-between items-end">
                <div>
                  <h4 className="text-[#caa193] font-conthrax text-xs tracking-wider uppercase">
                    {testimonials[currentSlide].author}
                  </h4>
                  <p className="text-gray-500 text-xs font-play">
                    {testimonials[currentSlide].role}
                  </p>
                </div>

                {/* Arrow Controls */}
                <div className="flex gap-2">
                  <button 
                    onClick={prevSlide}
                    className="p-2 bg-[#111111] hover:bg-[#caa193] hover:text-black text-white text-xs rounded transition-all duration-200 border border-gray-800"
                    aria-label="Previous Slide"
                  >
                    ❮
                  </button>
                  <button 
                    onClick={nextSlide}
                    className="p-2 bg-[#111111] hover:bg-[#caa193] hover:text-black text-white text-xs rounded transition-all duration-200 border border-gray-800"
                    aria-label="Next Slide"
                  >
                    ❯
                  </button>
                </div>
              </div>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-2 mt-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    currentSlide === index ? 'w-6 bg-[#caa193]' : 'w-2 bg-gray-700'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
{/* GOOGLE MAP EMBED SECTION */}
          <div className="space-y-6 mt-16 pt-8 border-t border-gray-900">
            <h2 className="text-lg md:text-xl font-conthrax text-[#caa193] uppercase tracking-wider text-left">
              Our Location in Dubai
            </h2>
            <div className="w-full h-[350px] sm:h-[450px] rounded-xl overflow-hidden border border-gray-800 shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14441.226521591823!2d55.34960338715822!3d25.192892999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f643e2646b0d9%3A0x6bd79efda773cf70!2sDubai%20Creek%20Harbour!5e0!3m2!1sen!2sae!4v1716300000000!5m2!1sen!2sae"
                width="110%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="text-lg md:text-xl font-conthrax text-[#caa193] uppercase tracking-wider">
              Frequently Asked Questions
            </h2>

            {/* FAQs */}
            <h3 className="text-base md:text-sm font-conthrax text-[#caa193] text-left">
              How much does retail interior design in Dubai Creek Harbour cost?
            </h3>
            <p className="text-sm sm:text-base text-white text-justify font-play leading-relaxed">
              Retail Interior Design Dubai, UAE projects in Creek Harbour typically range from AED 350 to AED 1,200 per sqft. Pricing depends on brand finish level, MEP scope, joinery complexity, and storefront treatment. Itemised quotation will follow an on-site visit.
            </p>

            <h3 className="text-base md:text-sm font-conthrax text-[#caa193] text-left">
              How long would it take to complete a retail fit-out at Dubai Creek Harbour?
            </h3>
            <p className="text-sm sm:text-base text-white text-justify font-play leading-relaxed">
              A retail fit-out for a boutique shop will take around 8-12 weeks from design approval to completion. Flagship-format stores typically run 14–20 weeks. Pop-up and kiosk fit-outs take 3-5 weeks at most.
            </p>

            <h3 className="text-base md:text-sm font-conthrax text-[#caa193] text-left">
              Do you process approvals for Emaar tenant fit-outs and DDA design permits?
            </h3>
            <p className="text-sm sm:text-base text-white text-justify font-play leading-relaxed">
              Yes. Our team is responsible for all the approval stages simultaneously — from submitting an application for Emaar tenant fit-out, design approval by DDA, Trakheesi permit approval, up to Civil Defense approval.
            </p>

            <h3 className="text-base md:text-sm font-conthrax text-[#caa193] text-left">
              Can you work in active retail zones with minimal disruption? Can your team install pop-ups and kiosks in active retail areas?
            </h3>
            <p className="text-sm sm:text-base text-white text-justify font-play leading-relaxed">
              Yes. Our project manager coordinates all efforts to carry out noisy work in limited time, dust-screens the site, and prevents any disruption to neighboring tenants.
            </p>

            <h3 className="text-base md:text-sm font-conthrax text-[#caa193] text-left">
              Do you offer 3D visualization prior to contract signature?
            </h3>
            <p className="text-sm sm:text-base text-white text-justify font-play leading-relaxed">
              Yes. Photoreal 3D renders of every zone are produced during the design phase. This is the design that you will see and approve before the construction process begins.
            </p>

            <h3 className="text-base md:text-sm font-conthrax text-[#caa193] text-left">
              What services does your turnkey retail fit out cover?
            </h3>
            <p className="text-sm sm:text-base text-white text-justify font-play leading-relaxed">
              Conceptual design, 3D modeling, approvals (Emaar, DDA, Civil Defense), MEP, flooring, lighting, fit out, bespoke joinery, fit out, signages coordination, snagging, and 12 months aftercare service.
            </p>

            <h3 className="text-base md:text-sm font-conthrax text-[#caa193] text-left">
              Are you looking for a retail interior designer near me in Dubai Creek Harbour?
            </h3>
            <p className="text-sm sm:text-base text-white text-justify font-play leading-relaxed">
              If you are looking for a retail interior designer near me, our <b className="text-[#caa193]"><a href="https://wedointerior.ae/business-bay-office-fit-out" className="hover:underline">Dubai-based studio provides service to Dubai Creek Harbour</a></b>, Downtown, Business Bay, and Jumeirah from our Jebel Ali base. Our site visits for Dubai Creek Harbour happen within 48 hours of inquiry.
            </p>

            <h3 className="text-base md:text-sm font-conthrax text-[#caa193] text-left">
              Which retail sectors/brands have you worked on?
            </h3>
            <p className="text-sm sm:text-base text-white text-justify font-play leading-relaxed">
              Our experience in commercial interior design covers a wide range of interiors for retail shops including fashion, jewelry, beauty, lifestyle, food and beverage retail, eyewear, and electronics.
            </p>

            <h3 className="text-base md:text-sm font-conthrax text-[#caa193] text-left">
              What does a retail interior designer do?
            </h3>
            <p className="text-sm sm:text-base text-white text-justify font-play leading-relaxed">
              Retail interior designers are responsible for the overall design of the interior of a store in such a way that it is representative of the brand and helps sell more products. In Dubai Creek Harbour, we provide retail interior design experts in addition to Emaar tenant fit-out manual preparation, DDA and Trakheesi approvals, MEP coordination, and fit-out construction.
            </p>
            {/* Consultation Section */}
<h3 className="text-lg md:text-xl font-conthrax text-[#caa193] pt-6 uppercase">
  Ready to Bring Your Retail Brand to Life in Dubai Creek Harbour?

</h3>
<p className="text-sm sm:text-base text-white text-justify font-play mt-2">
 Looking for interior design services whether it's for opening a boutique at Creek Marina, flagship fit-out at The Address Grand, or a kiosk at Creek Beach, then our team is at your service.
</p>

          </div>
        </div>
      </div>
    </section>
  );
};

export default DProjects;