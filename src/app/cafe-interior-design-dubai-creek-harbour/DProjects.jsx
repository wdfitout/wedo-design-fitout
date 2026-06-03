'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

const textImage = {
  src: '/images/undimanche (2).webp',
  link: '/bluewaters-cafe-interior',
  title: 'Cafe Interior Design in Dubai Creek Harbour'
};



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
  const [isMounted, setIsMounted] = useState(false);

  // Hydration اور پیج کریش کے مسئلے کو روکنے کے لیے لائف سائیکل کنٹرولر
  useEffect(() => {
    setIsMounted(true);
  }, []);

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
    if (!isMounted) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [nextSlide, isMounted]);

  return (
    <section className="px-6 py-5 bg-black-200">
      
      {/* Top Content Block */}
      <div className="lg:max-w-[80%] mx-auto bg-black p-6 sm:p-10 rounded shadow text-center space-y-6 mb-12">
        <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#caa193] ">
          Why Your Cafe Design Defines Success in Creek Harbour
        </h2>
        <div className="space-y-4 text-sm sm:text-base font-play text-white text-justify">
          <p>
            It is not just an area, but a waterfront neighborhood developed by Emaar with a lot of residents, tourists, and high-spending urbanites coming to it throughout the day and night. In this atmosphere, your café's interior is no final touch. It is a core business asset. The F&B scene in <b className="text-[#caa193]"><a href="/interior-design-dubai-creek-harbour">Creek Harbour Interior Design Dubai</a></b> is increasingly competitive. Every corner of this waterfront community is home to curated dining and coffee experiences that compete heavily on ambiance, Instagrammability, and guest experience. A poorly designed cafe  regardless of how good the coffee is  will struggle to build footfall, dwell time, and loyalty in this market.
          </p>

          <p>
            Research consistently shows that customers in premium Dubai locations make instant judgments based on a cafe's look and feel the moment they walk in. The right cafe interior design Dubai Creek Harbour solution ensures that first impression works in your favour  turning curious visitors into regular customers and regular customers into brand advocates. At WE DO Interior, we understand this completely. Our cafe interior design and fit out Dubai services are designed specifically to help cafe owners and investors in Creek Harbour open faster, design smarter, and operate more efficiently from day one.
          </p>
        </div>
      </div>

      {/* Split Row – Text + Top Right Image */}
      <div className="lg:max-w-[90%] mx-auto flex flex-col lg:flex-row items-start gap-6 mb-12">
        <div className="w-full lg:w-2/3 space-y-4">
          <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#caa193]">
            Our Cafe Interior Design Services in Dubai Creek Harbour
          </h2>
          <p className="text-sm sm:text-base text-white text-justify font-play">
            We offer a complete range of cafe interior design Dubai Creek Harbour services in Dubai, covering every element from the first sketch to final handover. Here is what we deliver:
          </p>

          {/* Service 1 */}
          <h3 className="text-sm sm:text-lg font-conthrax text-[#caa193] tracking-wide">
            Space Planning & Layout Design
          </h3>
          <p className="text-sm sm:text-base text-white text-justify font-play">
            Every square metre matters in a waterfront café in Dubai Creek Harbour. Our space planning strategy makes your space work harder by maximizing flow, efficiency of service delivery, and seating capacity. This is done through managing the experience of guests while maximizing back-of-house activities. Whether you operate in a kiosk setup or in a large format, our team will develop layout designs that suit your business needs.
          </p>

          {/* Service 2 */}
          <h3 className="text-sm sm:text-lg font-conthrax text-[#caa193] tracking-wide">
            Concept Development & Theme Design
          </h3>
          <p className="text-sm sm:text-base text-white text-justify font-play">
            For your cafe to succeed, there must be a defined image that connects well with the cosmopolitan crowd at Creek Harbour. Through the expertise of our design team, we deliver bespoke design concepts, mood boards, material boards and even full-scale 3D visualizations. Our aim is to design custom cafe interior design Dubai that is unique and culturally relevant.
          </p>

          {/* Service 3 */}
          <h3 className="text-sm sm:text-lg font-conthrax text-[#caa193] tracking-wide">
            Lighting Design
          </h3>
          <p className="text-sm sm:text-base text-white text-justify font-play">
            Lighting is another area which is highly effective but often overlooked within the context of <b className="text-[#caa193]"><a href="/cafe-interior-design-dubai">cafe interior design Dubai</a></b>. We create multi-level lighting plans capable of transforming the environment, depending on the time of the day – from vibrant and lively during breakfast to cozy in the evenings, ensuring that you have a place for any visitor all day long.
          </p>

          {/* Service 4 */}
          <h3 className="text-sm sm:text-lg font-conthrax text-[#caa193] tracking-wide">
            Furniture Design & Custom Joinery
          </h3>
          <p className="text-sm sm:text-base text-white text-justify font-play">
            We offer our customers furniture designed specifically for hospitality, durable and pleasant to use, aligned with the brand concept. Whether custom made banquette seats or a barista counter, or special display shelves, everything we create in terms of <b className="text-[#caa193]"><a href="/custom-furniture-joinery-dubai-creek-harbour">custom furniture and joinery</a></b> will perfectly match your cafe's identity and last through heavy foot traffic.
          </p>

          {/* Service 5 */}
          <h3 className="text-sm sm:text-lg font-conthrax text-[#caa193] tracking-wide">
            Materials & Finishes Selection
          </h3>
          <p className="text-sm sm:text-base text-white text-justify font-play">
            The materials that you use for your business establishment will determine its aging, appearance, and even the way it feels. Our professionals will be able to provide you with a variety of quality finishes, terrazzo floors, texture walls, stone countertops, and many other options fitting perfectly into such a crazy atmosphere of your café.
          </p>

          {/* Service 6 */}
          <h3 className="text-sm sm:text-lg font-conthrax text-[#caa193] tracking-wide">
            Signage & Branding Integration
          </h3>
          <p className="text-sm sm:text-base text-white text-justify font-play">
            We work closely with your brand guidelines to ensure your interior and your identity speak the same language. Be it signage, menus, or wall branding, our designers create everything to reflect your story inside your cafe interior design Dubai Creek Harbour.
          </p>

          {/* Service 7 */}
          <h3 className="text-sm sm:text-lg font-conthrax text-[#caa193] tracking-wide">
            End-to-End Fit-Out & Execution
          </h3>
          <p className="text-sm sm:text-base text-white text-justify font-play">
            As a leading <b className="text-[#caa193]"><a href="https://www.google.com/search?sca_esv=6afea18307ffceea&hl=en&authuser=0&sxsrf=ANbL-n7PCeFW3jmwssK0gqH1R6Ug_GuIiQ:1780486440628&kgmid=/g/11pyc3sd1k&q=Interior+Design+Company+Dubai+-+WeDo+Interior+Design+%26+Fit out&shem=rimspwouohc&shndl=30&source=sh/x/loc/uni/m1/1&kgs=0f5ea5edb4f6550b&utm_source=rimspwouohc,sh/x/loc/uni/m1/1">cafe fit out company Dubai</a></b>, we manage the full fit-out process  civil works, MEP coordination, joinery installation, furniture placement, and final styling. You get a single point of accountability and a turnkey space delivered on time and within budget.
          </p>
        </div>

        {/* Top Right Image with Hover Effects */}
        <div className="w-full lg:w-1/3 group relative overflow-hidden rounded-lg shadow-lg">
          <a href={textImage.link} className="block">
            <Image
              src={textImage.src}
              alt={textImage.title}
              width={500}
              height={400}
              className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-sm sm:text-base font-conthrax text-center">
                {textImage.title}
              </p>
            </div>
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-3xl font-conthrax text-white py-12">
          How We Design Your Cafe — Step by Step
        </h2>

        {/* Section 1: Text Left, Image Right */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          <div className="space-y-6 text-white font-play text-justify">
            <p>
              Our proven process has delivered standout F&B interior design Dubai Creek Harbour projects across the city. Here is exactly how we work:
            </p>

            <ul className="list-decimal pl-5 space-y-4 text-[#caa193]">
              <li>
                <h3 className="font-play font-bold">Discovery & Brief</h3>
                <p className="text-white font-play text-justify">
                  We conduct an extensive consultation to learn about your brand identity, your customer profile, your business model, and your budget. All our decisions depend on what comes out of this brief.
                </p>
              </li>
              <li>
                <h3 className="font-play font-bold">Concept & Moodboard</h3>
                <p className="text-white font-play text-justify">
                  Our designer creates 2-3 different directions, with moodboards and color schemes included for each one. Then you pick which concept best matches your brand philosophy.
                </p>
              </li>
              <li>
                <h3 className="font-play font-bold">3D Visualization</h3>
                <p className="text-white font-play text-justify">
                  Long before walls are erected, you'll see what your cafe looks like in full 3D. Our photo-realistic renderings allow you to virtually walk around the interior and make any amendments at no additional cost.
                </p>
              </li>
              <li>
                <h3 className="font-play font-bold">Material & Design Signoff</h3>
                <p className="text-white font-play text-justify">
                  Here, we show you our choice of material, finishes, fixtures and furniture for your approval. Nothing gets implemented without your approval.
                </p>
              </li>
              <li>
                <h3 className="font-play font-bold">Fitout Execution</h3>
                <p className="text-white font-play text-justify">
                  Our project managers in UAE will consist of coordination with all the contractors and executing each aspect according to the design approved by you. The implementation process complies with the <b className="text-[#caa193]">Dubai Municipality</b> rules as well as the fit-out rules of F&Bs.
                </p>
              </li>
              <li>
                <h3 className="font-play font-bold">Handover</h3>
                <p className="text-white font-play text-justify">
                  We deliver you a completed cafe that is snag-free and operational.
                </p>
              </li>
            </ul>
          </div>

          <div className="rounded-lg overflow-hidden shadow-md">
            <Image
              src="/images/karakna (9).webp"
              alt="Cafe Interior Design Dubai Creek Harbour"
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

      {/* last paragraph */}
      <div className="lg:max-w-[90%] mx-auto bg-black p-6 sm:p-10 rounded shadow space-y-6 mb-12">
        <div className="text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-conthrax text-[#caa193] mb-2">
            Our Cafe Interior Design Work Across Dubai
          </h2>
          <p className="font-play text-sm sm:text-base text-white text-justify py-2">
            While we are actively delivering <b className="text-[#caa193]"><a href="/cafe-interior-design-dubai"> cafe interior design Dubai Creek Harbour</a></b> projects in this community, our portfolio spans cafe and F&B design projects across Dubai's most prominent neighbourhoods — Downtown Dubai, Dubai Marina, Business Bay, JBR, and beyond. Every project in our portfolio demonstrates the same commitment: bespoke design, rigorous execution, and a finished space that drives real commercial results for the owner.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="rounded-lg overflow-hidden shadow-md">
            <Image
              src="/images/karakna (10).webp"
              alt="Elegant blue bedroom interior"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-conthrax text-[#caa193] mb-2">
              Cafe Interior Design Styles for Creek Harbour
            </h2>
            <p className="font-play text-sm sm:text-base text-white text-justify py-2">
              Creek Harbour Interior Design Dubai requires aesthetics that align with its affluent lifestyle-oriented profile. Our team works on designs based on any style required by your positioning strategy:
            </p>

            {/* Styles List */}
            <div className="space-y-6 text-start py-4">
              {/* Style 1 */}
              <div>
                <h3 className="text-sm sm:text-lg font-conthrax text-[#caa193] tracking-wide mb-1">
                  Minimalistic & Scandinavian Design
                </h3>
                <p className="font-play text-sm sm:text-base text-white text-justify">
                  Minimalistic style can be created with the help of clear lines, neutral color schemes, and clever negative spaces. Best suited for coffee brands that wish to show their product and the scenery seen from their window. There is also another strategy that we have to make use of the trend of minimalist cafe design in Dubai.
                </p>
              </div>

              {/* Style 2 */}
              <div>
                <h3 className="text-sm sm:text-lg font-conthrax text-[#caa193] tracking-wide mb-1">
                  Contemporary Luxury Design
                </h3>
                <p className="font-play text-sm sm:text-base text-white text-justify">
                  Modern luxury is defined by smooth textures, high-quality materials, stunning lighting designs, and handmade furniture. The solution will be focused on designing the luxury ambience which will make the cafe more competitive than other cafes in the restaurants and bars sector in Creek Harbour.
                </p>
              </div>

              {/* Style 3 */}
              <div>
                <h3 className="text-sm sm:text-lg font-conthrax text-[#caa193] tracking-wide mb-1">
                  Nature-Inspired & Biophilic
                </h3>
                <p className="font-play text-sm sm:text-base text-white text-justify">
                  Green walls, wooden touches, rattan furniture, and live greenery. Perfect design concept to apply to the cafe located on the waterfront cafe in Dubai Creek Harbour.
                </p>
              </div>

              {/* Style 4 */}
              <div>
                <h3 className="text-sm sm:text-lg font-conthrax text-[#caa193] tracking-wide mb-1">
                  Industrial Chic
                </h3>
                <p className="font-play text-sm sm:text-base text-white text-justify">
                  Brick walls, industrial metal, wood, and industrial Edison lighting. Best design concept for the dynamic coffee shop interior design in Dubai.
                </p>
              </div>

              {/* Style 5 */}
              <div>
                <h3 className="text-sm sm:text-lg font-conthrax text-[#caa193] tracking-wide mb-1">
                  Arabic Modern Fusion
                </h3>
                <p className="font-play text-sm sm:text-base text-white text-justify">
                  The combination of traditional geometric and calligraphic designs from the Arabic culture with current materials and techniques. A style with huge potential in terms of appeal for both local and foreign visitors at Dubai Creek Harbour.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* WHY CHOOSE US & FAQ FAQS PARENT WRAPPER */}
      <div className="lg:max-w-[80%] mx-auto flex flex-col lg:flex-row items-start gap-6 mb-12">
        <div className="w-full space-y-4">
          <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#caa193]">
            Why Creek Harbour Cafe Owners Choose WE DO Interior
          </h2>

          <p className="text-sm sm:text-base text-white text-justify font-play">
            As a trusted interior decoration company in Dubai with over 15 years of experience in commercial and hospitality design, WE DO Interior brings a level of depth and reliability that most boutique studios cannot match:
          </p>

          <ul className="list-disc pl-5 space-y-3 mt-4 text-justify">
            <li className="text-sm sm:text-base font-play text-white">
              <b className="text-[#caa193]">End-to-end service</b> — design, fit-out, and project management under one roof
            </li>
            <li className="text-sm sm:text-base font-play text-white">
              <b className="text-[#caa193]">F&B specialisation</b> — deep experience in cafe interior design and fit out Dubai for both independent operators and brand chains
            </li>
            <li className="text-sm sm:text-base font-play text-white">
              <b className="text-[#caa193]">Dubai Municipality compliance</b> — full knowledge of local permitting, F&B fit-out codes, and approval processes
            </li>
            <li className="text-sm sm:text-base font-play text-white">
              <b className="text-[#caa193]">On-time delivery</b> — we run tight timelines because we know every delayed day is lost revenue for your business
            </li>
            <li className="text-sm sm:text-base font-play text-white">
              <b className="text-[#caa193]">Transparent pricing</b> — detailed quotations with no hidden costs
            </li>
            <li className="text-sm sm:text-base font-play text-white">
              <b className="text-[#caa193]">Bilingual team</b> — Arabic and English-speaking project managers and designers
            </li>
            <li className="text-sm sm:text-base font-play text-white">
              <b className="text-[#caa193]">Local knowledge</b> — we know Creek Harbour, its property developers, its building management teams, and its operational landscape
            </li>
          </ul>

          {/* TESTIMONIAL CAROUSEL SECTION */}
          {isMounted && (
            <div className="w-full py-4 relative space-y-6">
              <div className="text-center">
                <h2 className="text-2xl md:text-3xl font-conthrax text-[#caa193] uppercase tracking-wider">
                  Client Testimonial
                </h2>
              </div>
              
              <div className="bg-[#111111] border-l-2 border-l-[#caa193] border-y border-r border-[#caa193]/10 p-6 sm:p-10 rounded-r-lg text-left space-y-6 relative min-h-[240px]">
                <p className="text-sm sm:text-base text-gray-300 font-play leading-relaxed pr-4 sm:pr-8">
                  "{testimonials[currentIndex]?.quote}"
                </p>
                
                <div className="text-right pt-2 pb-6">
                  <p className="text-xs sm:text-sm font-conthrax text-[#caa193] tracking-wide inline">
                    — {testimonials[currentIndex]?.author}, {testimonials[currentIndex]?.project}
                  </p>
                </div>

                <div className="absolute bottom-4 right-4 flex items-center space-x-2">
                  <button
                    onClick={prevSlide}
                    className="w-8 h-8 flex items-center justify-center bg-black/60 hover:bg-black text-white border border-gray-800 rounded hover:border-[#caa193]/50 cursor-pointer transition-all duration-300 text-xs"
                  >
                    ❮
                  </button>
                  <button
                    onClick={nextSlide}
                    className="w-8 h-8 flex items-center justify-center bg-black/60 hover:bg-black text-white border border-gray-800 rounded hover:border-[#caa193]/50 cursor-pointer transition-all duration-300 text-xs"
                  >
                    ❯
                  </button>
                </div>
              </div>

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
          )}

          {/* VISIT US / GOOGLE MAPS SECTION */}
          <div className="space-y-6 w-full pt-8 mb-12">
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-conthrax text-[#caa193] uppercase tracking-wider">
                Visit Us
              </h2>
            </div>

            <div className="w-full h-[350px] sm:h-[450px] rounded-lg overflow-hidden border border-[#caa193]/30 shadow-lg relative">
              {isMounted && (
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28879.625769385028!2d55.3708!3d25.2048!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f679fadfb563d%3A0x15e90d8fe66e02f2!2sRas%20Al%20Khor%20-%20Dubai%20Creek%20Harbour%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1779287470131!5m2!1sen!2s" 
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps - Dubai Creek Harbour"
                ></iframe>
              )}
            </div>
          </div>
                  
          <h2 className="text-lg md:text-xl font-conthrax text-[#caa193]">
            FAQs – Cafe Interior Design in Dubai Creek Harbour
          </h2>

          {/* FAQ 1 */}
          <h3 className="text-base md:text-sm font-conthrax text-[#caa193]">
            What are the costs associated with the design & fit out of cafe interiors in Dubai?
          </h3>
          <p className="text-sm sm:text-base text-white text-justify font-play">
            Fit out of cafe interiors in Dubai usually falls within the range of AED 200 – AED 600+ per square foot based on the level of design, type of materials used and MEP works included. Contact us today for an estimate specifically suited to your venue at Creek Harbour.
          </p>

          {/* FAQ 2 */}
          <h3 className="text-base md:text-sm font-conthrax text-[#caa193]">
            How long is the time taken for the fit out of cafes in Dubai Creek Harbour?
          </h3>
          <p className="text-sm sm:text-base text-white text-justify font-play">
            Typically, the time taken for the fit out of a cafe within Dubai Creek Harbour lies between 6-14 weeks from the time the designs are signed off. We ensure you receive a complete project timeline from day one.
          </p>

          {/* FAQ 3 */}
          <h3 className="text-base md:text-sm font-conthrax text-[#caa193]">
            Are you able to assist with Dubai municipality approvals and permits for cafe fit-outs?
          </h3>
          <p className="text-sm sm:text-base text-white text-justify font-play">
            Of course, yes. Being a skilled cafe fit out contractor Dubai, we assist clients in obtaining relevant permits and approvals from the municipality.
          </p>

          {/* FAQ 4 */}
          <h3 className="text-base md:text-sm font-conthrax text-[#caa193]">
            Is it possible to design as per the client's brand guidelines?
          </h3>
          <p className="text-sm sm:text-base text-white text-justify font-play">
            Certainly! Our design approach always begins with immersing ourselves with your brand. We create an environment which complements your existing colors, typography and even voice.
          </p>

          {/* FAQ 5 */}
          <h3 className="text-base md:text-sm font-conthrax text-[#caa193]">
            Do you offer 3D visualisation before starting the fit-out?
          </h3>
          <p className="text-sm sm:text-base text-white text-justify font-play">
            Yes. Every project includes full 3D renders and walkthroughs before any physical work begins. This ensures complete alignment between your vision and our execution before a single dirham is spent on construction.
          </p>

          {/* FAQ 6 */}
          <h3 className="text-base md:text-sm font-conthrax text-[#caa193]">
            Do you work with cafe owners who are new to F&B in Dubai?
          </h3>
          <p className="text-sm sm:text-base text-white text-justify font-play">
            Yes. Many of our clients are first-time cafe investors. We guide you through the entire process — from space selection advice to menu flow planning — ensuring your cafe interior design Dubai Creek Harbour project is set up for success from the ground up.
          </p>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-conthrax text-[#caa193] mb-2">
            Start Your Cafe Interior Design Project in Creek Harbour Today
          </h2>

          <p className="font-play text-sm sm:text-base text-white py-2 text-justify">
            The F&B sector within the Dubai Creek Harbour area is rapidly growing. With the best locations being taken up, those who are quick to move and employ the services of the right design consultant will create the cafe culture in this area. Are you planning a cafe interior design in Dubai Creek Harbour? Then, this is the ideal opportunity to do so. Our team is prepared to accept your design brief and create your ideal space for customers to relish. WE DO Interior Design & Fitout  your trusted interior decoration company in Dubai for world-class cafe interior design Dubai Creek Harbour projects.
          </p>
        </div>
      </div>
        
    </section>
  );
};

export default DProjects;