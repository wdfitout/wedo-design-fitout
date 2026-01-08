import Image from "next/image";

const VHeroSection = () => {
  const suggestions = [
   {
      title: "5 Modern Apartment Interior Design",
      age: "1 years ago",
      image: "/images/high-end-dubai-apartment-interior-design-in-dubai.png",
      href: "/modern-apartment-interior-design", // manual internal route
    },
    {
      title: "6 Interior Design Styles Dubai 2025",
      age: "1 years ago",
      image: "/images/six-best-interior-design-trends-dubai-2025.png",
      href: "/interior-design-styles-dubai-2025", // example external link
    },
    {
      title: "Tips For Luxury Villa Interior Design in Dubai",
      age: "1 year ago",
      image: "/images/district-one-contemporary-villa-interior-luxury-villa-interior-design-in-dubai.png",
      href: "/luxury-villa-interior-design-in-dubai", // manual internal route
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 text-white mt-20">
      {/* Responsive layout: blog on left, sidebar on right for desktop */}
      <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-8">
        {/* Blog Content */}
        <div>
          <div className="text-sm mb-4 text-[#caa193]">
            <p>Nov 20, 2025 • No Comments</p>
          </div>

          <h1 className=" text-[#caa193] text-3xl font-conthrax leading-tight py-5 ">
            5 Differences Between Villa and Apartment Interiors in Dubai
          </h1>
         <div className=" text-sm leading-relaxed font-play">
             <p>Dubai's property market provides two unique ways of living: residences in villas and those in apartments. Each property type requires its own specific interior design approach shaped by factors such as layout, architecture and the way of life of the occupants. </p>
          <br /></div>
          <div className="space-y-6">
            <Image
              src="/images/5_Differences_Between_Villa_and_Apartment_Interiors_in_Dubai.png" 
             
              alt="Modern apartment Room interior Design Dubai"
              width={800}
              height={600}
              className="rounded-md w-full object-cover"
            />
            <div className=" text-sm leading-relaxed font-play">
            <p>
              If you are interested in Villa vs Apartment Interior Design or are considering Villas vs Apartments in Dubai. <b className="text-[#caa193]"><a href="https://wedointerior.ae/">WE DO Interior Design & Fitout</a></b>  offers customized solutions that cater to your preferences. Our skills include designing interiors for villas in Dubai creating luxury apartment designs in Dubai and managing comprehensive residential fit-out projects in Dubai.

            </p>
            <h2 class="text-[#caa193] text-2xl font-conthrax leading-tight py-5">Space & Layout Planning</h2>
            <p> Villas in Dubai, especially in areas like Dubai Hills Estate and Palm Jumeirah, come with wide layouts, high ceilings, generous living rooms, multiple bedrooms, private gardens and dedicated leisure spaces. As a <b className="text-[#caa193]"><a href="https://wedointerior.ae/villa-interior-design-dubai">leading villa interior design company</a></b> and a trusted interior contractor in Dubai, WE DO shapes these homes with smooth, well-planned layouts that make the most of the space and match the way residents live.  </p>
          </div>
            <Image
              src="/images/design of villas and apartments in Dubai.png"
              alt="Modern Laundry Room Design 2"
              width={800}
              height={600}
              className="rounded-md w-full object-cover"
              
            />
          </div><br /> 
           <div className=" text-sm leading-relaxed font-play">
            <p>Apartments in Dubai Marina and Business Bay are more compact which makes smart planning essential. Our <b className="text-[#caa193]"><a href="https://wedointerior.ae/apartment-interior-design-dubai">apartment interior design services</a></b>  focus on efficient layouts, multifunctional furniture and organized storage to keep the space comfortable and elegant. By adapting every design to the property type WE DO delivers practical & stylish solutions for everything from top apartment home interiors to full luxury apartment  renovations.</p>
           </div>
        <div className=" text-sm leading-relaxed font-play">
          
            <h2 class="text-[#caa193] text-2xl font-conthrax leading-tight py-5">Material Selection & Finishes</h2>
            <p> Villas provide the opportunity for the use of top-quality materials and upscale finishes that enhance luxury living. WE DO frequently integrates natural stone, custom carpentry, designer lighting and additional refined features in <b className="text-[#caa193]"><a href="https://wedointerior.ae/villa-projects">interior design projects for Dubai villas</a></b> resulting in a timeless sense of elegance. Developments such as Splendour Villas and Palm Jumeirah villas greatly benefit from this methodology. </p>
           <br/>  <Image
              src="/images/Villa_vs_Apartment_Interior_Design_Dubai.png"
              alt="Modern Laundry Room Design 2"
              width={800}
              height={600}
              className="rounded-md w-full object-cover"
            /> <br />
          </div>
         <div className=" text-sm leading-relaxed font-play">
            <p>
             In contrast, apartments require materials that are both functional and fashionable, appropriate for smaller areas. For <b className="text-[#caa193]"><a href="https://wedointerior.ae/apartment-projects"> luxury apartment interior design projects in Dubai</a></b>, we utilize lightweight surfaces, engineered stone, contemporary laminates and space saving cabinetry. This guarantees longevity, modern design, and efficient use of space in every apartment setup.
            </p>
            </div>
             <div className=" text-sm leading-relaxed font-play">
          
            <h2 class="text-[#caa193] text-2xl font-conthrax leading-tight py-5">
              Design Style & Personalization
            </h2>
            <p> Villa interiors in Dubai provide the opportunity for distinctively tailored environments. From a uniquely styled lounge to an impressive entryway or a connected garden view, each villa can showcase the preferences of its owner. WE DO focuses on <b className="text-[#caa193]"><a href="https://wedointerior.ae/luxury-villa-interior-design-in-dubai">villa interior design in Dubai</a></b> that highlights personalization, ensuring that every villa undertaking is exceptional and opulent. </p> <br />
            <Image
              src="/images/space_and_layout_planning_in_villa_and_apartment.png"
              alt="Modern Laundry Room Design 2"
              width={800}
              height={600}
              className="rounded-md w-full object-cover"
            /> <br />
          </div>
           <div className=" text-sm leading-relaxed font-play">
            <p>In contrast, apartments generally adopt a smooth and modern aesthetic. Our services for apartment interior design in Dubai prioritize harmonious color schemes, simple decoration and layouts that enhance usability. Whether located in Dubai Marina or Business Bay, WE DO guarantees that apartment interiors are chic, functional, and stylish.</p>
           </div>
             <div className=" text-sm leading-relaxed font-play">
          
            <h2 class="text-[#caa193] text-2xl font-conthrax leading-tight py-5">
              Smart Home Integration
            </h2>
            <p> Villas often come with Large scale automation systems, such as for lighting, climate management, security and entertainment solutions, which are commonly incorporated into villas. Our villa fit-out companies in Dubai ensure that smart technology seamlessly integrates into the villa interior to enhance convenience and sophistication. </p>
           <br /> <Image
              src="/images/Smart_Home_Integration_in_Villa_and_Apartment_Interior.png"
              alt="Modern Laundry Room Design 2"
              width={800}
              height={600}
              className="rounded-md w-full object-cover"
            />
          </div>
         <br /> <div className=" text-sm leading-relaxed font-play">
            <p>Compact smart solutions such as wireless lighting, automated blinds and efficient HVAC systems, lend themselves to apartments. WE DO ensures even apartment interior design Dubai projects are given smart features that upgrade lifestyle without cluttering space.</p>
          </div>
           <div className=" text-sm leading-relaxed font-play">
          
            <h2 class="text-[#caa193] text-2xl font-conthrax leading-tight py-5">
              Fit-Out Requirements
            </h2>
            <p> Villas necessitate thorough planning and extended timeframes for completion because of their scale and upscale finishes. These projects typically include several rooms, complex joinery and tailored spaces. WE DO recognized as one of the top interior fit-out companies in Dubai, handles villa fit-outs meticulously, guaranteeing quality, timely delivery and a hassle free process. </p> <br />
            <Image
              src="/images/top_interior_fit_out_companies_in_Dubai.png"
              alt="Modern Laundry Room Design 2"
              width={800}
              height={600}
              className="rounded-md w-full object-cover"
            /> <br />
             <div className=" text-sm leading-relaxed font-play">
            <p>Fit-outs  solutions for apartments require swift and accurate execution complying with construction regulations and access constraints. Our team makes certain that apartment fit-out projects in Dubai Marina & Downtown Dubai or Business Bay are finalized effectively while upholding exceptional design and craftsmanship standards.</p>
         </div> </div>
          
          <div className=" text-sm leading-relaxed font-play">
          
            <h2 class="text-[#caa193] text-2xl font-conthrax leading-tight py-5">
             Summing Up
            </h2>
            <p> The primary distinctions in the design of villas and apartments in Dubai involve their configurations, construction materials, options for customization, integration of technology and the intricacy of furnishings. Regardless of whether you want  high end villa interior design in Dubai or luxurious apartment remodeling in Dubai, WE DO Interior Design & Fitout provides customized solutions that reflect your way of living and the specific characteristics of your property. Reach out to WE DO Interior Design & Fitout now for a customized interior design consultation in Dubai. </p> <br />
           
          </div>
         
          
          
          {/* Sidebar (Mobile View) */}
          <div className="mt-12 md:hidden">
            <Sidebar suggestions={suggestions} />
          </div>
        </div>

        {/* Sidebar (Desktop View) */}
        <div className="hidden md:block">
          <Sidebar suggestions={suggestions} />
        </div>
      </div>
    </div>
  );
};

// Sidebar component
const Sidebar = ({ suggestions }) => (
  <div>
    <h3 className="text-xl font-conthrax mb-4 mt-16 text-[#caa193]">You might also like</h3>
    <ul className="space-y-4">
      {suggestions.map((post, index) => (
        <li key={index} className="flex space-x-4">
          <div className="w-20 h-16 bg-gray-200 rounded-md overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              width={80}
              height={64}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="text-sm font-play">{post.title}</p>
            <p className="text-xs text-[#caa193]">{post.age}</p>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

export default VHeroSection;
