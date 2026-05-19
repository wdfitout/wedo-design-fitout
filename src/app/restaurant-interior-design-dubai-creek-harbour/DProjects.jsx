'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

const textImage = {
  src: '/images/restaurant (10).webp',
  link: '/restaurant-interior-design-dubai-creek-harbour',
  title: 'Resturant Interior Design Trends In Creek Harbour'
};

const galleryImages = [
  { src: '/images/meby (6).webp', link: '/business-bay-travel-agency', title: 'MEBY BUSINESS BAY TRAVEL AGENCY' },
  { src: '/images/startech (3).webp', link: '/business-bay-office-fit-out', title: 'STARTECH BUSINESS BAY OFFICE FIT-OUT' },
];

// Testimonials Data (Original + 2 Dummy)
const testimonials = [
  {
    quote: "We have interviewed five companies before choosing WE DO. The reason why WE DO impressed us was their 3D visualization process whereby we were able to walk through the restaurant before entering into the contract. WE DO get everything approved, opened on time, and the joinery work is better than the visualizations. After two years, the bar counter still looks like new.",
    author: "Restaurant Owner",
    project: "Creek Harbour F&B Project"
  },
  {
    quote: "Managing Emaar's strict promenade-facing guidelines and Dubai Municipality approvals was our biggest stress. WE DO handled the entire turnkey fit-out seamlessly. Their 3D walkthrough was incredibly precise, and they delivered the exact premium lighting and seating setup on schedule. Our premium café has become a Creek hotspot.",
    author: "Café Founder",
    project: "Waterfront Promenade, Dubai Creek Harbour"
  },
  {
    quote: "The complex kitchen MEP and bespoke joinery required for our fine dining venue felt impossible to complete in 18 weeks. But WE DO managed the civil works and dual-approval workflow flawlessly. The photorealistic 3D rendering gave us total confidence before signing. Highly professional team!",
    author: "Operations Director",
    project: "Luxury Bistro, Dubai Creek Harbour"
  }
];

const DProjects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? testimonials.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = useCallback(() => {
    const isLastSlide = currentIndex === testimonials.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex]);

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  // Auto-play interval for Testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="px-6 py-5 bg-black-200">
      
      {/* Top Content Block */}
      <div className="lg:max-w-[80%] mx-auto bg-black p-6 sm:p-10 rounded shadow text-center space-y-6 mb-12">
        
        <div className="space-y-4 text-sm sm:text-base font-play text-white text-left">
          

          <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#caa193] text-center">
            Interior Design in Dubai Creek Harbour
          </h2>
          <div className="space-y-4 text-sm sm:text-base font-play text-white text-left">
            <p>
              The new Dubai Creek Harbour development is rapidly becoming the hot destination for F&B operators looking to open their restaurants in Dubai. With the waterfront views overlooking the Creek, the planned Dubai Creek Tower at its core, and the entire master planned community of Emaar Creek Harbour attracting visitors and residents from all over the city. Any new establishment opening its doors here already has a ready customer base.
            </p>
            <p>
              WE DO Interior Design & FitOut provides comprehensive interior design services for <b className="text-[#caa193]"><a href="/restaurant-interior-design-dubai-creek-harbour">restaurants interior design in Dubai Creek Harbour</a></b> including individual concepts on the beach front of the Creek Beach promenade and F&B establishments in the hotels such as The Palace Dubai Creek Harbour, Vida Creek Harbour and Address Grand Creek Harbour.
            </p>
          </div>
        </div>
      </div>

      {/* Split Row – Text + Top Right Image */}
      <div className="lg:max-w-[90%] mx-auto flex flex-col lg:flex-row items-start gap-6 mb-12">
        <div className="w-full lg:w-2/3 space-y-6">
          {/* Services Sub-heading */}
          <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#caa193] pt-4">
            OUR RESTAURANT INTERIOR DESIGN SERVICES IN DUBAI CREEK HARBOUR
          </h2>
<p className="text-white text-sm sm:text-base font-play">
                Design of Fine Dining Restaurants Water facing fine dining restaurants that utilise the view of the Creek, featuring custom joinery, multi layered lighting and acoustics optimised for a more personal dining experience. Interior Design of Cafés and Coffee Shops  From coffee kiosks on the Creek Beach promenade to fully equipped cafés in ground level retail areas, our <b className="text-[#caa193]"><a href="/cafe-interior-design-dubai">cafe interior design in Dubai Creek Harbour</a></b> combines warmth, efficiency and Instagram ready aesthetics.
                              </p>
          {/* Structured Services List */}
          <ul className="list-decimal pl-5 space-y-4 text-[#caa193] font-play">
            <li>
              <h3 className="font-play font-bold text-base">Lounge and Bar Interior Design</h3>
              <p className="text-white text-sm sm:text-base font-play">
                Lounges and bars that take advantage of the skyline view of the Dubai Creek Tower and Downtown area, featuring resilient finishes and zone lighting systems.
              </p>
            </li>

            <li>
              <h3 className="font-play font-bold text-base">Roof Top Lounge & Bar Design</h3>
              <p className="text-white text-sm sm:text-base font-play">
                Sky facing lounges & bars designed based on skyline views of the Dubai Creek Tower and Downtown skyline, featuring weather resistant materials and zoning of lighting for night time transition.
                              </p>
            </li>

            <li>
              <h3 className="font-play font-bold text-base">Cloud Kitchen & QSR Fit-Out</h3>
              <p className="text-white text-sm sm:text-base font-play">
                Back of house focused designs wherein kitchen layout planning, MEP coordination and efficiency of operation form the basis of every design consideration.
              </p>
            </li>

            <li>
              <h3 className="font-play font-bold text-base">Hotel F&B Interior Design</h3>
              <p className="text-white text-sm sm:text-base font-play">
                Hospitality Interior design Dubai Creek Harbour projects in The Palace, Vida & Address hotels ensuring compliance with brand standards and hotel operations.
              </p>
            </li>

            <li>
              <h3 className="font-play font-bold text-base">Restaurant Renovation & Rebranding</h3>
              <p className="text-white text-sm sm:text-base font-play">
                Restaurant renovation Dubai Creek Harbour for operating restaurants that require concept enhancement, cover generation or market repositioning.
              </p>
            </li>

        
          </ul>

          {/* Closing Statement */}
          <p className="text-sm sm:text-base text-white text-justify font-play pt-2">
            All our projects can be offered as either just design services or as an entire turn-key project, backed by expert restaurant fit outs contractors in Dubai Creek Harbour.
          </p>
        </div>

        {/* Top Right Image with Hover Effects */}
        <div className="w-full lg:w-1/3 group relative overflow-hidden rounded-lg shadow-lg lg:mt-14">
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

      {/* Why Dubai Creek Harbour Restaurants Choose WE DO */}
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-3xl font-conthrax text-white py-12">
          Why Dubai Creek Harbour Restaurants Choose WE DO
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          <div className="space-y-6 text-white font-play">
            <p>
              Choosing the best restaurant interior designers in Dubai Creek Harbour is probably the most important decision that an F&B owner will have to make prior to starting his business. Here's how <b className="text-[#caa193]"><a href="https://wedointerior.ae/">WE DO Interior</a></b> stands out from other ordinary fit-out companies:
            </p>
           
            <ul className="list-decimal pl-5 space-y-4 text-[#caa193]">
              <li>
                <h3 className="font-play text-base font-bold">One Team, One Accountability</h3>
                <p className="text-white font-play text-sm sm:text-base">
                  Design, MEP, joinery, and approval processes are all done in one place. No finger pointing and passing of blame between vendors.
                </p>
              </li>

              <li>
                <h3 className="font-play text-base font-bold">In-House Joinery Workshop</h3>
                <p className="text-white font-play text-sm sm:text-base">
                  Custom made bar counter designs, banquettes, host stands, and bespoke cabinets are manufactured within our very own workshop, allowing us to maintain quality, delivery time, and cost.
                </p>
              </li>

              <li>
                <h3 className="font-play text-base font-bold">Experience in Approval Process</h3>
                <p className="text-white font-play text-sm sm:text-base">
                  Our experts have successfully handled Trakheesi, Dubai Municipality, Civil Defence, Food Control, and Emaar community approvals for more than a dozen F&B projects in the city.
                </p>
              </li>

              <li>
                <h3 className="font-play text-base font-bold">3D Visualization Before Contract</h3>
                <p className="text-white font-play text-sm sm:text-base">
                  A 3D photorealistic walkthrough of the restaurant design, inclusive of bar counter design, seating arrangement, and signage is provided before signing of the contract.
                </p>
              </li>

              <li>
                <h3 className="font-play text-base font-bold">Predictable Project Delivery Timeline</h3>
                <p className="text-white font-play text-sm sm:text-base">
                  Standard restaurants in Dubai Creek Harbour can be delivered in 12 to 18 weeks after the start of the approval process, with a week-by-week timeline provided upfront.
                </p>
              </li>

              <li>
                <h3 className="font-play text-base font-bold">Guarantee on Joinery and Finishes</h3>
                <p className="text-white font-play text-sm sm:text-base">
                  Defects liability in terms of restaurant joinery, MEP, and finishes is provided post-handover for an agreed upon duration with no contractor friendly clauses hidden in fine print here.
                </p>
              </li>
            </ul>

          
          </div>

          <div className="rounded-lg overflow-hidden shadow-md">
            <Image
              src="/images/restaurant (6).webp"
              alt="Why Dubai Creek Harbour Restaurants Choose WE DO"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
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

      {/* Restaurant Fit-Out Process Section */}
      <div className="lg:max-w-[90%] mx-auto bg-black p-6 sm:p-10 rounded shadow space-y-6 mb-12 mt-12">
        <div className="text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-conthrax text-[#caa193] mb-2">
            OUR RESTAURANT FIT-OUT PROCESS
          </h2>
          
          <p className="font-play text-sm sm:text-base text-white text-start py-2">
            Our six step approach is intended to eliminate those unknowns that have the potential to sink most F&B concepts. From our first consultation for restaurant interior design in Dubai Creek Harbour to the soft opening, you will have one project manager and one clear timeline. <br /> <br />

            <b className="text-[#caa193]">1. Discovery & Brand Strategy:</b> First of all, we need to know what the cuisine is, who the targeted diner is, how much the price point is and what the brand strategy is. This is what sets the tone for everything else to follow right from materials to seating arrangements. <br /> <br />

            <b className="text-[#caa193]">2. Concept Design & Mood Boards:</b> The restaurant concept design stage involves the creation of the visual language for the brand through material boards, inspirational imagery, color schemes, and design signatures. You approve of the visual language before we move forward with creating drawings. <br /> <br />

            <b className="text-[#caa193]">3. 3D Visualization & Layout Design:</b> The restaurant layout design process addresses issues such as kitchen/FOH balance, number of seats, circulation routes, service stations, bar counter design, etc. We create a 3D restaurant model that enables you to explore the facility even before tiles are selected. <br /> <br />

            <b className="text-[#caa193]">4. Approvals & Documentation:</b> Trakheesi, Civil Defence, Food Control, and Emaar community approvals will be organized by our in-house liaison team. Drawings are made to authority specifications right from day one, which saves us from going through the expensive rework process that others go through. <br /> <br />

            <b className="text-[#caa193]">5. Fit-Out & MEP Coordination:</b> The site team will take care of everything for the fit out including restaurant flooring (terrazzo, marble, engineered wood), restaurant ceiling work, MEP coordination (electrical, plumbing, HVAC, kitchen extract), restaurant joinery installation, restaurant lighting work, and restaurant furniture delivery. Weekly updates with pictures will give you remote updates on progress. <br /> <br />

            <b className="text-[#caa193]">6. Handover & Soft Opening Assistance:</b> Snagging, deep cleaning, staff walk-through, signage installation, and authority handover. We're on site through your soft opening to resolve any operational tweaks in real time.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="rounded-lg overflow-hidden shadow-md">
            <Image
              src="/images/restaurant (4).webp"
              alt="Elegant blue bedroom interior"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="text-white font-play">
            <h2 className="text-xl font-conthrax text-[#caa193]">
              RESTAURANT DESIGN CONSIDERATIONS UNIQUE TO DUBAI CREEK HARBOUR
            </h2>
            <p>
              The design process for Dubai Creek Harbour is very different from the design process for Downtown and JLT. There are certain parameters that exist in terms of the physical environment, regulations, and operations that must be considered in each fit out. This is where the value of experienced F&B interior design Dubai Creek Harbour experts really comes into play.
            </p>
            
            <h3 className="text-sm font-conthrax text-[#caa193] mt-2 mb-2">Emaar Community Guidelines</h3> 
            <p>As an Emaar Creek Harbour community, there are certain guidelines in terms of signage, façade, outdoor seating size, and promenade signage. We have done projects under these guidelines in the past.</p>
            
            <h3 className="text-sm font-conthrax text-[#caa193] mt-2 mb-2">Waterfront Glazing Issues</h3>
            <p>Venues located on the waterfront face the problem of excessive solar gain and glare at the very moment when their customers start coming in. For this reason, we provide solar control film, multi-layered curtains, and lighting design which takes into account the orientation of windows.</p>
            
            <h3 className="text-sm font-conthrax text-[#caa193] mt-2 mb-2">Ground-Floor Retail Unit Constraints</h3>
            <p>Restaurant spaces in Creek Harbour towers usually have the ceiling height between 3.5 and 4 metres, fixed slab penetrations due to grease trap installation, and predetermined kitchen extraction risers. This is where our restaurant space planning begins.</p>
            
            <h3 className="text-sm font-conthrax text-[#caa193] mt-2 mb-2">Outdoor Terrace Fit Outs</h3>
            <p>Terraces overlooking the creek require wind loading considerations for upper floors, salty atmosphere near promenade level, and shaded areas for daytime operations. Marine-grade fixings, weatherproof furniture, and shading devices are recommended according to Dubai climate conditions.</p>
            
            <h3 className="text-sm font-conthrax text-[#caa193] mt-2 mb-2">F&B Coordination with Hotels</h3>
            <p>Restaurants within The Palace Dubai Creek Harbour, Vida Creek Harbour, and Address Grand Creek Harbour have to integrate with hotel operations, fire systems, BMS system, and brands. We have experience with fit out works of hotel F&B establishments.</p>
          </div>
        </div>
      </div>

      {/* Materials & Trends Section */}
      <div className="lg:max-w-[80%] mx-auto flex flex-col lg:flex-row items-start gap-6 mb-12">
        <div className="w-full space-y-4">
          <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#caa193]">
            MATERIALS & DESIGN TRENDS FOR DUBAI CREEK HARBOUR RESTAURANTS
          </h2>
          <p className="text-sm sm:text-base text-white text-justify font-play">
             <b className="text-[#caa193]">Restaurant branding interior:</b> Design trends for <b className="text-[#caa193]"><a href="/restaurant-interior-design">restaurant interiors in Dubai Creek Harbour</a></b> are becoming more influenced by the waterfront setting and architecture vocabulary of the area. Some of the design trends seen in recent F&B projects in the area include: <br /><br />
            
            <b className="text-[#caa193]">Waterfront color palette:</b> The color palettes inspired by waterfronts include sand, sage, navy, terracotta, and brushed brass colors, which have replaced the gold and black palettes commonly used in early Dubai fit-outs. <br /><br />
            
            <b className="text-[#caa193]">Sustainable materials:</b> Material selections aligned to Emirates GBC guidelines such as FSC certified wood, low VOC paint, and recycled content terrazzo. <br /><br />
            
            <b className="text-[#caa193]">Restaurant lighting design:</b> Multilayered lighting (architecture, decoration, task, accent) on adjustable scenes is an absolute must have. Golden hour lighting that responds to the Creek view at sunset time is our unique design feature which we implement into all waterfront restaurants. <br /><br />
            
            <b className="text-[#caa193]">Soundproofing:</b> Restaurants with hard surfaces such as concrete, glass, and tiles sound awful when full of people. Therefore, we provide acoustic ceiling baffles, upholstered banquettes, and felt wall panels that can be presented as design elements. <br /><br />
            
            <b className="text-[#caa193]">Biophilic and Arabic design integration:</b> Vertical gardens, mashrabiya screen design, and geometric patterns inspired by Islamic architecture interpreted in modern materials are some of the ways we implement regional design into a venue.
          </p>

         
{/* TESTIMONIAL CAROUSEL SECTION */}
<div className="w-full py-4 relative space-y-6">
  
  {/* Added Section Main Heading */}
  <div className="text-center">
    <h2 className="text-2xl md:text-3xl font-conthrax text-[#caa193] uppercase tracking-wider">
      Client Testimonial
    </h2>
  </div>
  
  {/* Main Container with Left Accent Border */}
  <div className="bg-[#111111] border-l-2 border-l-[#caa193] border-y border-r border-[#caa193]/10 p-6 sm:p-10 rounded-r-lg text-left space-y-6 relative min-h-[240px]">
    
    
    {/* Testimonial Quote */}
    <p className="text-sm sm:text-base text-gray-300 font-play leading-relaxed pr-4 sm:pr-8">
      "{testimonials[currentIndex].quote}"
    </p>
    
    {/* Author & Project info - Aligned to Right */}
    <div className="text-right pt-2 pb-6">
      <p className="text-xs sm:text-sm font-conthrax text-[#caa193] tracking-wide inline">
        — {testimonials[currentIndex].author}, {testimonials[currentIndex].project}
      </p>
    </div>

    {/* Custom Bottom-Right Navigation Arrows */}
    <div className="absolute bottom-4 right-4 flex items-center space-x-2">
      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="w-8 h-8 flex items-center justify-center bg-black/60 hover:bg-black text-white border border-gray-800 rounded hover:border-[#caa193]/50 cursor-pointer transition-all duration-300 text-xs"
      >
        &#10094;
      </button>
      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="w-8 h-8 flex items-center justify-center bg-black/60 hover:bg-black text-white border border-gray-800 rounded hover:border-[#caa193]/50 cursor-pointer transition-all duration-300 text-xs"
      >
        &#10095;
      </button>
    </div>
  </div>

  {/* Indicators Dots (Centered below the component) */}
  <div className="flex justify-center pt-2 space-x-2">
    {testimonials.map((_, slideIndex) => (
      <button
        key={slideIndex}
        onClick={() => goToSlide(slideIndex)}
        className={`h-1.5 rounded-full transition-all duration-300 ${
          currentIndex === slideIndex ? 'w-6 bg-[#caa193]' : 'w-1.5 bg-white/30'
        }`}
      />
    ))}
  </div>
</div>

         
      {/* VISIT US / GOOGLE MAPS SECTION (Matches Width Perfectly) */}
<div className="space-y-6 w-full pt-8 mb-12">
  {/* Main Heading */}
  <div className="text-center">
    <h2 className="text-2xl md:text-3xl font-conthrax text-[#caa193] uppercase tracking-wider">
      Visit Us
    </h2>
  </div>

  {/* Google Maps Embedded iFrame */}
  <div className="w-full h-[350px] sm:h-[450px] rounded-lg overflow-hidden border border-[#caa193]/30 shadow-lg relative">
    <iframe
       src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.919696803875!2d55.3452161!3d25.2066955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f679fadbb563d%3A0x15e90d8fe66e02f2!2sDubai%20Creek%20Harbour!5e0!3m2!1sen!2sae!4v1716140000000!5m2!1sen!2sae"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Google Maps - Dubai Creek Harbour"
    ></iframe>
  </div>
</div>
           
         {/* FAQs Section */}
<h2 className="text-lg md:text-xl font-conthrax text-[#caa193] pt-6">
  Frequently Asked Questions
</h2>

<h3 className="text-base md:text-sm font-conthrax text-[#caa193] mt-4">
  What is the cost of restaurant interior design in Dubai Creek Harbour?
</h3>
<p className="text-sm sm:text-base text-white text-justify font-play">
  The average cost of restaurant fit-out quotation in Dubai Creek Harbour is AED 800 – AED 2,500 per sq ft based on concept positioning, finish quality, kitchen complexity and joinery works. Café fit-outs tend to be cheaper while fine dining and F&B of hotels will cost more. We will give you a detailed quote on each line item after our first meeting at your site.
</p>

<h3 className="text-base md:text-sm font-conthrax text-[#caa193] mt-4">
  What is the duration of restaurant fit-out in Dubai Creek Harbour?
</h3>
<p className="text-sm sm:text-base text-white text-justify font-play">
  Standard restaurants are finished in 12 - 18 weeks from the time of approval until delivery. Cafés will require 8 – 12 weeks. Large fine-dining and hotel F&Bs with complex MEP and kitchen fit-out will require 20 – 24 weeks. Approvals will take extra 4 – 8 weeks.
</p>

<h3 className="text-base md:text-sm font-conthrax text-[#caa193] mt-4">
  Do you manage Trakheesi and Dubai Municipality approvals for Creek Harbour restaurants?
</h3>
<p className="text-sm sm:text-base text-white text-justify font-play">
  Yes. Our in-house liaison team will prepare and submit all drawings for Trakheesi, Dubai Municipality, Civil Defence and Food Control authorities. We take care of all authority approvals so that the restaurant owner/operator will be able to concentrate on menu preparation, recruitment and marketing.
</p>

<h3 className="text-base md:text-sm font-conthrax text-[#caa193] mt-4">
  Are you able to design the project while abiding by the community guidelines of Emaar's Dubai Creek Harbour?
</h3>
<p className="text-sm sm:text-base text-white text-justify font-play">
  Yes, we have designed many F&B projects for master planned communities of Emaar and are aware of the signage requirements, façade requirements, outdoor seating requirements, and promenade facing branding guidelines for Dubai Creek Harbour.
</p>

<h3 className="text-base md:text-sm font-conthrax text-[#caa193] mt-4">
  Are you able to design hotel F&B outlets in The Palace and Vida Creek Harbour hotels?
</h3>
<p className="text-sm sm:text-base text-white text-justify font-play">
  Yes. We are able to design hotel F&B interior design with coordination with hotel operations, fire and BMS integration, brand-standard compliance and dual-approvals workflow (hotel & authority).
</p>

<h3 className="text-base md:text-sm font-conthrax text-[#caa193] mt-4">
  What is included in your turnkey fit-out of restaurants?
</h3>
<p className="text-sm sm:text-base text-white text-justify font-play">
  Concept design of restaurant, 3D visualization of the same, complete drawings, authority approvals, civil works, MEP works, joinery of restaurant, lighting, flooring, ceiling, bespoke restaurant furniture, signage, snagging and handover. The operator gets the ready-to-trade venue.
</p>

<h3 className="text-base md:text-sm font-conthrax text-[#caa193] mt-4">
  Is the 3D visualization provided before signing the construction contract?
</h3>
<p className="text-sm sm:text-base text-white text-justify font-play">
  Yes. For each project, 3D photorealistic visualization of all key areas such as dining floor, bar counter, entrance, restrooms and outdoor terrace area is provided before signing the construction contract. Revision included at this stage.
</p>

<h3 className="text-base md:text-sm font-conthrax text-[#caa193] mt-4">
  Do you provide a warranty on joinery and finishes?
</h3>
<p className="text-sm sm:text-base text-white text-justify font-play">
  Yes. A formal defects liability period covers joinery, MEP and finishes after handover. Specific terms are agreed in the contract and detailed in the handover documentation.
</p>

{/* Consultation Section */}
<h3 className="text-lg md:text-xl font-conthrax text-[#caa193] pt-6 uppercase">
  Get A Free Restaurant Fit-Out Consultation
</h3>
<p className="text-sm sm:text-base text-white text-justify font-play mt-2">
  Get started on your project now! With our highly top restaurant fit-out services in Dubai Creek Harbour, you can avail yourself of an initial consultation at no charge, which includes an inspection of your site and budget discussion.
</p>
        </div>
      </div>
    </section>
  );
};

export default DProjects;