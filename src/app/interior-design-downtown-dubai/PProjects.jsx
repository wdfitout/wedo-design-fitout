"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";

const services = [
  {
    title: "Office Interior Design Downtown",
    description:
      "Looking for expert office interior design in Downtown Dubai? WE DO delivers premium office fitout,  executive suites, full floor fitouts & corporate spaces.",
    bgImage: "/images/sns (2).webp",
    link: "/office-interior-design-downtown-dubai",
  },
  {
    title: "Apartment Interior Design Downtown",
    description:
      "Transform your Downtown Dubai apartment with WE DO, apartment interior design, personalized finishes, smart home integration. Contact us!",
    bgImage: "/images/mgapt-2 (5).jpg",
    link: "/apartment-interior-design-downtown-dubai",
  },
  {
    title: "Retail Interior Design Business Bay",
    description:
      "Looking for expert retail interior design in Business Bay Dubai? WE DO deliver premium retail fitout Business Bay, boutiques etc. Contact Today!",
    bgImage: "/images/bespoke-and-boutique-style-office-interiors-in-business-bay.png",
    link: "/retail-interior-design-business-bay",
  },
  {
    title: "Restaurant Interior Design Business Bay",
    description:
      "Looking for restaurant interior design in Business Bay Dubai? WE DO deliver premium restaurants fitout Business Bay. Visit Us Today.",
    bgImage: "/images/sahelnom (4).webp",
    link: "/restaurant-interior-design-business-bay",
  },
];

const businessBayProjects = [
  {
    title: "Downtown Dubai Retaurant",
    category: "Hospitality - Downtown Dubai",
    image: "/images/dtrest (2).webp",
    link: "/downtown-dubai-restaurant",
  },
  {
    title: "Downtown Dubai Cafe Design",
    category: "Hospitality - Downtown Dubai",
    image: "/images/vogue (3).webp",
    link: "/downtown-cafe-design",
  },
  {
    title: "Fine Dining Restaurant",
    category: "Hospitality - Downtown Dubai",
    image: "/images/sahelnom (5).webp",
    link: "/downtown-dubai-restaurant",
  },
  {
    title: "Retail Boutique Store",
    category: "Retail - Downtown Dubai",
    image: "/images/startech (2).webp",
    link: "/downtown-dubai-retail",
  },
];

const AboutSection = () => {
  return (
    <section className="bg-[#000000] py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-8 lg:px-16">

        {/* Section 1: Intro Content */}
        <div className="w-full text-center mb-16">
        
 
          <h2 className="text-[#b98877] text-center text-xl font-conthrax mb-4 leading-tight text-left">
             Interior Design Downtown Dubai – Luxury Living & Commercial Excellence
         </h2>
        <p className="text-justify text-white text-base font-play leading-relaxed">

         WE DO is renowned as one of the best interior design companies in Dubai, our professionals blend elegance, innovative expertise, and flawless completion. If you are seeking interior design companies in Downtown, interior designers in Downtown Dubai, or leading interior fit-out companies in Dubai, we offer full well-structured services. Downtown Dubai is a place of iconic developments near Burj Khalifa and high-end residences, creating it one of the most iconic locations for high-end interiors. Our Interior Design Downtown Dubai services in Dubai are specific to meet the needs of this elite ambiance. WEDO craft and offer Luxury apartments and penthouses, Premium office spaces, Retail and restaurant interiors in downtown Dubai. WE DO is specialists across nearby areas like Business Bay, Dubai Creek Harbour, and Dubai Marina, reinforcing our reputation as one of the top 10 interior designers in Dubai.
       </p>
        </div>
 <h2 className="text-[#b98877] text-center text-xl font-conthrax mb-10 leading-tight text-left">
           Our Interior Design Services  We Provide in Downtown Dubai
         </h2>
        {/* Section 2: Image + About Content */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
          <div className="w-full lg:w-1/2">
            <Image
              src="/images/apartment-home-office-interior-design-business-bay.png"
              alt="About WE DO Interior Design"
              width={800}
              height={500}
              className="w-full h-auto rounded-lg shadow-md"
            /> 
          </div>
          
          <div className="w-full lg:w-1/2 text-center text-white lg:text-left ">
          
             <h3 className="text-[#b98877] text-lg font-conthrax mb-3">Residential Interior Design Downtown</h3>
             <p className="text-justify text-white text-base mb-3 font-play leading-relaxed">
            WE DO offers residential services that redefine contemporary living through customized and sophisticated spaces. In Downtown Dubai, we have the best interior designers. Our houses are designed to show off your way of life, and we maintain an ideal balance between elegance and luxury. WE DO offers meticulous skyline to sophisticated penthouses presented near popular spaces such as the Burj Khalifa. Moreover, WE DO also specializes in bedroom interior designs, adding a personal touch of elegance and coziness to every home.
               </p>

       <h3 className="text-[#b98877] text-lg font-conthrax mb-3">Commercial Interior Design Downtown</h3>
      <p className="text-justify mb-3 text-white text-base font-play leading-relaxed">
        We offer unique <a href="/interior-design-downtown-dubai" className="font-bold hover:underline text-[#b98877]">
        commercial interior design services </a>  that elevate both practicality and brand personality. As a leading interior design company in Dubai, WE DO redefines business spaces into high-performing ambiances. Our portfolio covers corporate offices, retail stores, and hospitality venues crafted to maximize client engagement and operational flow. For business owners looking for the best commercial interiors, we offer creative and well-planned services that blend elegance with peak productivity.
      </p>

      <h3 className="text-[#b98877] text-lg font-conthrax mb-3">Office Interior Design Downtown</h3>
      <p className="text-justify mb-3 text-white text-base font-play leading-relaxed">
        Our specialization in <a href="/interior-design-downtown-dubai" className="font-bold hover:underline text-[#b98877]">
        office interior design Dubai</a>  gives attention to designing workspaces that match your company’s concept and operational requirements. Whether it’s a contemporary startup or a large corporate office, we design environments that boost exclusivity and employee productivity. We are renowned as one of the top interior design companies in Dubai, handling everything from idea development and space styling to full completion, making sure a flawless transformation for your workspace.
      </p>
            <div className="flex justify-center lg:justify-start gap-4 mt-6">
              <Link href="/gallery">
                <button className="bg-[#b98877] hover:bg-[#b88f83] text-black font-conthrax px-6 py-3 rounded-md transition duration-300">
                  See Our Projects
                </button>
              </Link>
              <Link href="/contact-us">
                <button className="bg-[#b98877] hover:bg-[#b88f83] text-black font-conthrax px-6 py-3 rounded-md transition duration-300">
                  Free Consultation
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Section 3: Services Grid */}
        <div className="text-center mb-12">
          <h2 className="text-[#b98877] text-2xl font-conthrax mb-4 uppercase">
            Our Interior Design Services in Downtown Dubai
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, idx) => (
            <Link key={idx} href={service.link} className="block group">
              <div className="relative h-[340px] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={service.bgImage}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition" />
                <div className="absolute inset-0 z-10 flex flex-col justify-end p-6 text-white text-left">
                  <h3 className="text-md font-conthrax mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-200 leading-relaxed">{service.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Section 4: Detailed Descriptions */}
        
<div className="flex flex-col lg:flex-row gap-9 items-start text-white font-play">

   <div className="lg:w-2/3 text-justify">

    
    <div className="mb-8">
      <h3 className="text-[#b98877] text-lg font-conthrax mb-3">Restaurant & Hospitality Interior Design Downtown</h3>
      <p>
        WE DO is the top <a href="/interior-design-downtown-dubai" className="font-bold hover:underline text-[#b98877]">
        restaurant interior designer Dubai, </a>  crafting aesthetic dining ambiances that leave a long-lasting impact on guests. Our vision combines elegance with innovation, giving special attention to mood lighting, acoustic comfort, and well-structured layouts. From quality cafés to comfortable luxury restaurants, we craft iconic spaces that reinforce brand identity and elevate the overall client experience through professional design and execution.
      </p>
    </div>

    <div className="mb-8">
      <h3 className="text-[#b98877] text-lg font-conthrax mb-3">Interior Fit-Out Services</h3>
      <p>
        We are reputed as one of the top <a href="/interior-design-downtown-dubai" className="font-bold hover:underline text-[#b98877]"> interior fit-out companies in Dubai, </a>  providing full turnkey services specific to each project's unique needs. Our solutions cover everything from technical space styling to authority approvals, MEP works, and personalized high-end joinery. We are one of the best interior design companies Downtown Dubai, making sure seamless completion of every phase, offering premium results and guaranteed on-time delivery for our valued clients.
      </p>
    </div>

    <div className="mb-8">
      <h3 className="text-[#b98877] text-lg font-conthrax mb-3">Renovation & Remodeling</h3>
      <p>
        WE DO provides luxury renovation and remodeling solutions designed to improve and transform living and work environments into modern masterpieces. If you are modernizing an old apartment or redefining a business ambiance, our professionals make sure a smooth and exclusive process from start to finish. With a deep presence as one of the top interior design companies in Downtown Dubai, we deliver new life to existing spaces with practical design and quality completion.
      </p>
       <div className="flex justify-center lg:justify-start gap-4 mt-6">
              <Link href="/gallery">
                <button className="bg-[#b98877] hover:bg-[#b88f83] text-black font-conthrax px-6 py-3 rounded-md transition duration-300">
                  See Our Projects
                </button>
              </Link>
              <Link href="/contact-us">
                <button className="bg-[#b98877] hover:bg-[#b88f83] text-black font-conthrax px-6 py-3 rounded-md transition duration-300">
                  Free Consultation
                </button>
              </Link>
            </div>
    </div>
    
  </div>
   {/* RIGHT IMAGE */}
  <div className="lg:w-2/3 w-full">
    <img 
      src="/images/apartment-home-office-interior-design-business-bay.png" 
      alt="Interior Design Downtown Dubai"
      className="w-full h-auto rounded-lg shadow-lg object-cover"
    />
  </div>
</div>
   <div className="w-full text-center mb-16">
        
 
          <h2 className="text-[#b98877] text-center text-xl font-conthrax mb-4 leading-tight text-left">
            About WE DO Interior Design & Fitout
         </h2>
        <p className="text-justify text-white text-base font-play leading-relaxed">

        WE DO is a top name among interior design companies in Dubai, providing personalized interiors that handle comfort and practicality. With the best experience in residential and commercial spaces, we are reputed as one the best interior design and fit out companies in Dubai for our  functional concept. From ideation to finishings, our experienced designers make sure each project meets the quality standards, placing us one of the most trusted interior design companies near me for clients looking in Dubai.
       </p>
        </div>
        {/* Section 5: Why Choose / Process Image Section */}
        <div className="relative mb-16 transition-transform duration-500 hover:scale-[1.02]">
          <div className="relative h-[250px] sm:h-[400px]">
            <Image
              src="/images/primo-sitting.jpg"
              alt="Luxury Project"
              fill
              className="object-cover rounded-xl"
            />
            <div className="absolute inset-y-0 right-0 w-full md:w-1/2 bg-black/80 p-6 sm:p-12 flex flex-col justify-center rounded-r-xl">
              <h2 className="text-xl text-[#b98877] font-conthrax mb-4">WHY CHOOSE WE DO INTERIOR DESIGN</h2>
              <p className="text-sm sm:text-base text-gray-200 font-play leading-relaxed">
                WE DO is renowned as one of the top 10 interior designers in Dubai, delivering full turnkey services from ideation to finishings. Our specialization in luxury projects across Downtown Dubai makes sure exclusive quality, high-end materials, and attention to detail. We are placed as one of the interior design companies in Downtown Dubai, we are dedicated to offering projects on time while exceeding client needs.
              </p>
            </div>
          </div>
          <div className="hidden md:block absolute top-0 left-1/2 w-[2px] h-full bg-gradient-to-b from-[#caa193] to-transparent" />
        </div>

        {/* Section 6: Process Description */}
        <div className="bg-[#111] p-8 rounded-2xl mb-16">
          
          <h2 className="text-[#b98877] text-2xl font-conthrax mb-5 text-center uppercase">Our Interior Design Process</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-white font-play text-sm">
            <div className="text-center p-4 border border-[#b98877]/20 rounded-lg">
              <span className="block text-[#b98877] font-conthrax text-xl mb-2">01</span>
              <p><b>Consultation & Requirements Analysis:</b>  We understand your vision and space needs and thus design an exact plan that fits your requirements.</p>
            </div>
            <div className="text-center p-4 border border-[#b98877]/20 rounded-lg">
              <span className="block text-[#b98877] font-conthrax text-xl mb-2">02</span>
              <p><b>Design Concept & Planning:</b> We provide professional designs and concepts according to your style requirements. </p>
            </div>
            <div className="text-center p-4 border border-[#b98877]/20 rounded-lg">
              <span className="block text-[#b98877] font-conthrax text-xl mb-2">03</span>
              <p><b>3D Visualization:</b> We provide you realistic visualization of your 3D design to help you envision the end product before the start of work.
              </p>
            </div>
            <div className="text-center p-4 border border-[#b98877]/20 rounded-lg">
              <span className="block text-[#b98877] font-conthrax text-xl mb-2">04</span>
              <p><b>Execution & Fit-Out:</b> Our experienced designers manage full interior design & fit-out Dubai services with accuracy and premium workmanship.
               </p>
            </div>
            
            <div className="text-center p-4 border border-[#b98877]/20 rounded-lg">
              <span className="block text-[#b98877] font-conthrax text-xl mb-2">05</span>
              <p><b>Final Handover: </b> We offer a fully executed, ready-to-use space that meets your needs and quality trends.
              </p>

            </div>
            
          </div>
         
        </div>

        {/* Section 7: Projects Section */}
        <div className="text-center mb-12">
          <h2 className="text-[#b98877] text-3xl font-conthrax mb-4 uppercase">Our Projects in Downtown Dubai</h2>
          <p className="text-gray-300 max-w-3xl mx-auto font-play">
            Discover our completed interior design and fit-out projects in Downtown Dubai, including commercial offices, luxury apartments, and turnkey solutions.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {businessBayProjects.map((project, index) => (
            <Link key={index} href={project.link} className="block group">
              <div className="relative overflow-hidden rounded-2xl h-[320px]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition" />
                <div className="absolute inset-0 flex flex-col justify-end p-6 z-10 text-white text-left">
                  <h3 className="text-lg font-conthrax mb-1">{project.title}</h3>
                  <p className="text-sm text-gray-300">{project.category}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Section 8: Final Transform CTA */}
        <div className="text-center mb-16 bg-[#080808] py-12 rounded-2xl border border-[#b98877]/10">
          <h2 className="text-[#b98877] text-2xl font-conthrax mb-4">TRANSFORM YOUR SPACE IN DOWNTOWN DUBAI</h2>
          <p className="text-white font-play mb-8 max-w-4xl mx-auto px-4">
           Enhance your home or business with WE DO. If clients are looking for interior design companies in Downtown, interior designers in Downtown Dubai, or professional interior fit-out companies in Dubai, WE DO is here to bring your dream to real life. WE DO is the best interior design company in Downtown Dubai, specializing in providing interior design services for homes as well as offices. WE DO is one of the reputable interior design companies in Dubai, providing fit-out solutions that suit current trends in life as well as business.
          </p>
          <Link href="/contact-us">
            <button className="bg-[#b98877] hover:bg-[#a17566] text-black font-conthrax px-10 py-4 rounded-md transition duration-300">
              BOOK YOUR CONSULTATION TODAY
            </button>
          </Link>
        </div>

        {/* FAQs Section */}
        <div className="text-left bg-[#111] p-10 rounded-2xl">
          <h2 className="text-[#b98877] text-2xl font-conthrax mb-8 text-center md:text-left">FAQs – INTERIOR DESIGN DOWNTOWN DUBAI</h2>
          <div className="space-y-8 text-white font-play max-w-5xl">
            <div>
              <h3 className="text-[#b98877] font-bold mb-2">How much does interior design cost in Downtown Dubai?</h3>
              <p className="text-gray-300 text-sm sm:text-base">Prices depend on the nature of the project, good-quality materials, and design requirements. Luxury designs usually require larger budgets than usual.</p>
            </div>
            <div>
              <h3 className="text-[#b98877] font-bold mb-2">How long does fit-out take?</h3>
              <p className="text-gray-300 text-sm sm:text-base">Most fit-outs take between 4 and 12 weeks.</p>
            </div>
            <div>
              <h3 className="text-[#b98877] font-bold mb-2">Do you provide complete interior design services?</h3>
              <p className="text-gray-300 text-sm sm:text-base">We are one of the best interior designers and fit-out companies in Dubai providing a comprehensive range of services.</p>
            </div>
            <div>
              <h3 className="text-[#b98877] font-bold mb-2">How can I select the best interior designer in Dubai?</h3>
              <p className="text-gray-300 text-sm sm:text-base">Select an experienced interior designer with a good reputation among best interior designers in Dubai.</p>
            </div>
            <div>
              <h3 className="text-[#b98877] font-bold mb-2">Do you design commercial interiors?</h3>
              <p className="text-gray-300 text-sm sm:text-base">We specialize in commercial interior design, including offices, retail and restaurants.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;