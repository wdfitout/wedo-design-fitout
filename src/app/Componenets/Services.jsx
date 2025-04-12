import React from "react";
import Image from "next/image";
import Link from "next/link";

const Services = () => {
  return (
    <section id="services">
      <div className="services px-2">
      <h2 className="text-white mb-2 mt- text-lg lg:text-4xl font-bold text-center">
          SERVICES WE PROVIDE
        </h2><div className="flex flex-wrap justify-center">
          
          <div className="relative w-full sm:w-1/4 px-2 mb-4">
          <Link href={"/design-build-services-in-dubai"}>
              <div className="group">
                {/* Background image */}
                <div className="absolute  mt-6 inset-0 hover:bg-black/50 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500">
                  <Image
                    src="/images/design-build-interior-design-company-dubai.webp"
                    alt="Project 1"
                    title=""
                    width={250}
                    height={250}
                    className="w-full rounded-t-3xl md:rounded-lg lg:rounded-tl-5xl lg:rounded-tr-none lg:rounded-none lg:rounded-l-5xl transition-transform duration-500 transform group-hover:-translate-y-2 brightness-50"
                  />
                </div>
                {/* Content */}
                <div className="flex flex-col items-center justify-center py-16 px-2 relative z-10">
                  <Image src="/images/Icon-4.webp" alt="We Do Fitout" width={70} height={60} className="icon h-17 mt-1 mb-4" />
                  <h2 className="text-white text-md font-bold mb-2">DESIGN & BUILD</h2>
                  <p className="text-white text-sm text-center">
                  Elevating spaces to artistry as a best Design and Build service provider 
                  in Dubai,UAE.Our interior design team
                   turns your vision into an inspiring reality and
                   prove themselves as the top interior design company Dubai.										
                  </p>
                </div>
              </div>
          </Link>
          </div>

          <div className="relative w-full sm:w-1/4 px-2 mb-4">
          <Link href={"/villa-construction-dubai"}>
              <div className="group">
                {/* Background image */}
                <div className="absolute mt-6 inset-0 hover:bg-black/50 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500">
                  <Image
                    src="/images/villa-construction-by-luxury-interior-design-company-dubai.webp"
                    alt="Project 1"
                    title=""
                    width={250}
                    height={250}
                    className="w-full rounded-t-3xl md:rounded-lg lg:rounded-tl-5xl lg:rounded-tr-none lg:rounded-none lg:rounded-l-5xl transition-transform duration-500 transform group-hover:-translate-y-2 brightness-50"
                  />
                </div>
                {/* Content */}
                <div className="flex flex-col items-center justify-center py-16 px-2 relative z-10">
                  <Image src="/images/Icon-2.webp" alt="We Do Fitout" width={100} height={10} className="icon h-17 mt-1 mb-4" />
                  <h2 className="text-white text-md font-bold mb-2">VILLA CONSTRUCTION</h2>
                  <p className="text-white text-sm text-center">
                  We are among the best construction companies in dubai .
                   We Do interiors is Building dreams one brick at a time. 
                  Your trusted partner in crafting elegant and splendour villas. 
                  Our interior Design team works hard to transform spaces.										
                  </p>
                </div>
              </div>
          </Link>
          </div>

          <div className="relative w-full sm:w-1/4 px-2 mb-4">
        <Link href={"/fitout-company-dubai"}>
              <div className="group">
                {/* Background image */}
                <div className="absolute mt-6 inset-0 hover:bg-black/50 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500">
                  <Image
                    src="/images/interior-design-fitout-dubai.webp"
                    alt="Project 1"
                    title=""
                    width={200}
                    height={250}
                    className="w-full rounded-t-3xl md:rounded-lg lg:rounded-tl-5xl lg:rounded-tr-none lg:rounded-none lg:rounded-l-5xl transition-transform duration-500 transform group-hover:-translate-y-2 brightness-50"
                  />
                </div>
                {/* Content */}
                <div className="flex flex-col items-center justify-center py-16 px-2 relative z-10">
                  <Image src="/images/Icon-1.webp" alt="We Do Fitout" width={50} height={10} className="icon h-25 mt-1 mb-4" />
                  <h2 className="text-white text-md font-bold mb-2">FITOUT</h2>
                  <p className="text-white text-sm text-center">
                  We are proud to offer interior fit out contractor services  as 
                   one of the best fit out companies in dubai. A fitout is the design,
                   construction and installation of interior elements. 
                  Our experienced team of designers. We create beautiful & functional spaces.										
                  </p>
                  
                </div>
              </div>
          </Link>
          </div>

          <div className="relative w-full sm:w-1/4 px-2">
          <Link href={"/joinery-company-dubai"}>
              <div className="group">
                {/* Background image */}
                <div className="absolute mt-6 inset-0 hover:bg-black/50 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500">
                  <Image
                    src="/images/joinery-manufacturing-in-interior-design.webp"
                    alt="Project 1"
                    title=""
                    width={250}
                    height={250}
                    className="w-full rounded-t-3xl md:rounded-lg lg:rounded-tl-5xl lg:rounded-tr-none lg:rounded-none lg:rounded-l-5xl transition-transform duration-500 transform group-hover:-translate-y-2 brightness-50"
                  />
                </div>
                {/* Content */}
                <div className="flex flex-col items-center justify-center py-16 px-2 relative z-10">
                  <Image src="/images/Icon-3.webp" alt="We Do Fitout" width={120} height={60} className="icon h-17 mt-1 mb-4" />
                  <h2 className="text-white text-md font-bold mb-2">JOINERY & MANUFACTURING</h2>
                  <p className="text-white text-sm text-center">
                  We Do Interiors provide professional joinery works services in Dubai. 
                  Elevate your spaces with our masterful joinery works, 
                  carpentry and fittings with the help of professional Carpenters.
                   our expert carpenters deliver quality solutions. 										 
                  </p>
                </div>
              </div>
          </Link>
          </div> 
        </div>
      </div>
    </section>
  );
};

export default Services;