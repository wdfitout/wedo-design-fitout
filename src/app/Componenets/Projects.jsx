import React from "react";
import Link from "next/link";
import Image from "next/image";

const Projects = () => {
  return (
    <section id="projects">
  <div className="areas w-full mt-10">
    <h2 className="text-white mb-8 text-lg lg:text-4xl font-bold text-center">
      INTERIOR DESIGN DUBAI PROJECTS
    </h2>
        <div className="flex flex-wrap justify-center">

            
        <div className="w-full sm:w-1/2 px-2 mb-4 sm:mb-4 relative">
  <Link href={"/home-interior-design-dubai"}>
    <Image
     src="/images/modern-apartment-interior-design-in-dubai.webp"
     alt="Dubai Interior Design - Luxurious Living Room Design "
     title="Luxurious Living Room Designed by Top Interior Design Dubai Company"
     width={600}
     height={400}
     className="w-full rounded-t-3xl md:rounded-lg lg:rounded-tl-5xl lg:rounded-tr-none lg:rounded-none lg:rounded-l-5xl hover:transform hover:-translate-y-2 transition-transform duration-500"
             style={{ borderTopLeftRadius: '2rem' }}
    />
 <div className="absolute top-18 bottom-24 left-0 w-full flex items-center justify-center">
  <div className="flex-grow mb-20 px-2">
    <h3 className="text-[#121212] text-lg lg:text-lg font-semibold text-center bg-gray-200 bg-opacity-50 py-1.5 hover:text-[#c38d90]">
      RESIDENTIAL INTERIOR DESIGN
    </h3>
  </div>
</div>
  </Link>
  <div className="text-white text-sm mt-2 mb-4 sm:mb-0 relative">
      <p>Elevate your living experience with our premier 
        home Interior Design services in Dubai.
         As a best interior design company we have transformed 
         numerous residences in iconic locations such as
          Emaar Beachfront,Al Manara Center, Penthouse Dubai, 
          Jumeirah Beach Residence, and Atlantis The Royal. 
          We specialize in creating bold bespoke design.</p>
    </div>
</div>

<div className="w-full sm:w-1/2 px-2 mb-4 sm:mb-4 relative">
  <Link href={"/restaurant-interior-design-dubai"}>
    <Image
        src="/images/dubai-interior-design-company-restaurant-counter.webp"
        alt="Dubai Interior Design - Modern Restaurant Counter Design "
        title="Modern Restaurant Design by Top Interior Designers in Dubai"
        width={600}
        height={400}
        className="w-full lg:rounded-tr-3xl md:rounded-tr-3xl hover:transform hover:-translate-y-2 transition-transform duration-500"
    />
  <div className="absolute top-18 bottom-24 left-0 w-full flex items-center justify-center">
  <div className="flex-grow mb-20 px-2">
    <h3 className="text-[#121212] text-lg lg:text-lg font-semibold text-center bg-gray-200 bg-opacity-50 py-1.5 hover:text-[#c38d90]">
      COMMERCIAL INTERIOR DESIGN
    </h3>
  </div>
</div>
  </Link>
  <div className="text-white text-sm mt-2 mb-4 sm:mb-0 relative">
      <p>
        Elevate your workspace into an excellent workflow space
        with our commercial interior design Dubai solutions.
        Corporate offices, coworking spaces, or executive suites, our
        professional architectures deliver innovative designs from
        concept to this real world that enhance true productivity.
        As top commercial interior design Dubai company, WeDo Interior
        crafted luxury corporate in the high-end areas of Dubai.
        </p>
    </div>
</div>

<div className="w-full sm:w-1/2 px-2 mb-4 sm:mb-4 relative">
  <Link href={"/design-build-services-in-dubai"}>
    <Image
        src="/images/beauty-salon-spa-retail-interior-design.webp"
        alt="Retail Beauty Salon -Design by One of the leading Interior Design Companies in Dubai "
        title="Top Beauty Salon and Spa Design by Interior Design company Dubai"
        width={600}
        height={400}
        className="w-full lg:rounded-bl-3xl md:rounded-bl-3xl hover:transform hover:-translate-y-2 transition-transform duration-500"
        
    />
  <div className="absolute top-18 bottom-24 left-0 w-full flex items-center justify-center">
  <div className="flex-grow mb-20 px-2">
    <h3 className="text-[#121212] text-lg lg:text-lg font-semibold text-center bg-gray-200 bg-opacity-50 py-1.5 hover:text-[#c38d90]">
      DESIGN & BUILD
    </h3>
  </div>
</div>
  </Link>
  <div className="text-white text-sm mt-2 mb-4 sm:mb-0 relative">
      <p>We are one of the premier building construction companies providing professional Design and Build Services in Dubai.
         From idea to completion, we provide high quality projects designed specifically to your specifications. 
         Our end-to-end solution guarantees smooth implementation, on-time delivery, and unparalleled craftsmanship in every aspect.

       </p>
    </div>
</div>

<div className="w-full sm:w-1/2 px-2 mb-4 sm:mb-4 relative">
  <Link href={"/fitout-company-dubai"}>
    <Image
      src="/images/x.learning (3).webp"
      alt="Corporate office reception interior design in Dubai"
      title="Luxury Office Interior Design with Premium Aesthetic in Dubai by We Do Design & Fitout"
      width={600}
      height={400}
      className="w-full rounded-b-3xl md:rounded-lg lg:rounded-br-5xl lg:rounded-bl-none lg:rounded-none lg:rounded-l-5xl hover:transform hover:-translate-y-2 transition-transform duration-500"
      style={{ borderBottomRightRadius: '2rem' }}
      />
  <div className="absolute top-18 bottom-24 left-0 w-full flex items-center justify-center">
  <div className="flex-grow mb-20 px-2">
    <h3 className="text-[#121212] text-lg lg:text-lg font-semibold text-center bg-gray-200 bg-opacity-50 py-1.5 hover:text-[#c38d90]">
      FIT-OUT SERVICES
    </h3>
  </div>
</div>
  </Link>
  <div className="text-white text-sm mt-2 mb-4 sm:mb-0 relative">
     <p>
        Being a top building construction company, we offer premium Fit Out Services in Dubai, UAE. 
        Being a reliable Interior Fitout Company in Dubai, our professional Fit Out Contractors 
        offer premium Interior Fit-out & MEP Services as per your imagination—smooth execution from idea to delivery.
</p>
    </div>
</div>

           </div>
            </div>
        </section>
  )
}
export default Projects;





