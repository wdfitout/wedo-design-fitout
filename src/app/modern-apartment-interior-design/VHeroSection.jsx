import Image from "next/image";

const VHeroSection = () => {
  const suggestions = [
    {
      title: "New Hotel Interior Ideas To Make Your Hotel Spaces Luxury",
      age: "4 years ago",
      image: "/images/High-rise_Dubai_Marina_apartment_interior-design-dubai.png", // Replace with actual path
    },
    {
      title: "Best Kids Room Interior Design Ideas | Tips To Decorate Your Kids Room",
      age: "4 years ago",
      image: "/images/Elegant_Dubai_apartment_showcasing_open_living-room-interior-in-dubai.png", // Replace with actual path
    },
    
    {
      title: "7 Inspiring Home Renovation Design Ideas You Need to Know",
      age: "1 year ago",
      image: "/images/Dubai_apartment_balcony-exterior-design-company-in-dubai.png", // Replace with actual path
    },
    {
      title: "7 Inspiring Home Renovation Design Ideas You Need to Know",
      age: "1 year ago",
      image: "/images/Ultra-modern_Dubai_apartment_interior_design.png", // Replace with actual path
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 text-white mt-20">
      {/* Responsive layout: blog on left, sidebar on right for desktop */}
      <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-8">
        {/* Blog Content */}
        <div>
          <div className="text-sm mb-4 text-[#caa193]">
            <p>Sep 11, 2025 • No Comments</p>
          </div>

          <h1 className=" text-[#caa193] text-3xl font-conthrax leading-tight py-10 ">
           Modern Apartment Interior Design in Dubai - 5 Essential Design Tips 
          </h1>
         <div className=" text-md leading-relaxed font-play">
            <p>
              A Dubai apartment that is smartly designed with quality materials and a modern look naturally exudes elegance.
              <b class="text-[#caa193]"><a href="https://wedointerior.ae/apartment-interior-design-dubai"> Apartment Interior Design Dubai</a></b> is vital since it makes the house appear wonderful and be comfortable. Good design
              enables the space to function effectively; it's the appropriate colors and a hint of luxury. 
            </p> <br/>
            
          </div>
          <div className="space-y-6">
            <Image
              src="/images/ultra-modern_dubai_apartment_interior_design.png" 
             
              alt="Modern apartment Room interior Design Dubai"
              width={800}
              height={600}
              className="rounded-md w-full object-cover"
            />
            <div className=" text-md leading-relaxed font-play">
            <p>
             Besides, it also enhances lighting and furniture placement for providing a fashionable appearance. A <b class="text-[#caa193]"><a href="https://wedointerior.ae/">professional
            Interior Design Company in Dubai </a></b>assists by selecting the most suitable designs, furniture, and decorations. 
            They tailor every element to suit the owner's lifestyle. Any apartment can be easily transformed elegantly and 
            luxuriously with professional assistance. These 5 essential design tips will help you create a home that reflects 
            your personality while staying on-trend with Dubai home décor styles.
            </p>
            <h2 class="text-[#caa193] text-2xl font-conthrax leading-tight py-5">Optimizing Space and Natural Light</h2>
            <p>
              The greatest challenge of Dubai apartment interior design today is to optimize space. Begin with space-saving 
              furniture—Dubai apartments are full of wall beds, folding dining tables, and nest coffee tables. The most intuitive
              configurations furniture and the apartment building create flow, circulation, and functionality.Natural light is 
              also a big factor. Make sure no window treatments such as blinds on most windows, utilizing sheer drapery, huge 
              mirrors, and glass wall dividers to bounce as much natural light into the room area.
            </p>
          </div>
            <Image
              src="/images/Compact_Dubai_bedroom_with_space-saving_furniture-with-modern-interior.png"
              alt="Modern Laundry Room Design 2"
              width={800}
              height={600}
              className="rounded-md w-full object-cover"
            />
          </div>
        <div className=" text-md leading-relaxed font-play">
          
            <h2 class="text-[#caa193] text-2xl font-conthrax leading-tight py-5">Luxury Through Materials and Colors</h2>
            <p>
              To properly design <b class="text-[#caa193]"><a href="https://wedointerior.ae/apartment-projects">luxurious apartment interiors</a></b> , be mindful of luxurious materials. Incorporate rich textures 
              and high-quality materials. Consider marble countertops, velvet sofas, and spun metal finishes. Employ the 
              current strains and trends to incorporate a modern color scheme for apartments, including deeper emerald 
              shades, warm taupe, or terracotta to create a sophisticated palette in your apartment.
            </p> <br/>
            <p>
              Utilize laid in materials as natural woods or stones, since they offer contrast between elegance and warmth 
              and welcome Mediterranean charm.  Even on the most simplistic of designs with minimalist design Dubai apartments, 
              luxury finishes added can remarkably change, and upgrade, a whole apartment.
            </p> <br />
             <Image
              src="/images/High-end_Dubai_apartment_interior_design-in-dubai.png"
              alt="Modern Laundry Room Design 2"
              width={800}
              height={600}
              className="rounded-md w-full object-cover"
            />
          </div>
        
             <div className=" text-md leading-relaxed font-play">
          
            <h2 class="text-[#caa193] text-2xl font-conthrax leading-tight py-5">
              Contrasting Contemporary and Traditional Styles
            </h2>
            <p>
              The cultural mix of Dubai permits the possibility of merging contemporary day interior design with a touch of 
              traditional Middle Eastern décor. You can select contemporary furniture while adding Arabic patterns, 
              Mashrabiya screens, and handcrafted local décor to infuse your space with a distinct personality and character.
            </p> <br/>
            <p>
              Such blending would be suitable for a multitude of varying home styles in Dubai, especially in apartments where 
              one wishes to offer a cross-section of international trends supported with local environment.
            </p> <br />
            <Image
              src="/images/Fusion-style_Dubai_apartment_interior_ivory.png"
              alt="Modern Laundry Room Design 2"
              width={800}
              height={600}
              className="rounded-md w-full object-cover"
            />
          </div>
           
             <div className=" text-md leading-relaxed font-play">
          
            <h2 class="text-[#caa193] text-2xl font-conthrax leading-tight py-5">
              Integrating Smart Home Features In Apartment
            </h2>
            <p>
              The quick upsurge of innovation in Dubai finds smart home integration technology in modern apartment architecture. 
              To heighten a modern apartment interior with new aspects of modern living, think of incorporating automated lighting, 
              climatic control mechanisms, voice-controlled assistants, and smart security systems, for convenience and readiness 
              ahead. On the other hand, these improvements can give functionality and enhance your property value, particularly in upscale 
              areas.
            </p> <br/>
            <Image
              src="/images/High-rise_Dubai_Marina_apartment_interior-design-dubai.png"
              alt="Modern Laundry Room Design 2"
              width={800}
              height={600}
              className="rounded-md w-full object-cover"
            />
          </div>
           <div className=" text-md leading-relaxed font-play">
          
            <h2 class="text-[#caa193] text-2xl font-conthrax leading-tight py-5">
              Highlighting Stunning Views and Statement Pieces
            </h2>
            <p>
              There are many Dubai apartments with lovely skyline or marina views. Take advantage of these by using very few 
              pieces of furniture directly next to windows and using floor-to-ceiling curtains that reveal the view without 
              blocking it. Add inset pieces like great wall art, designer light illumination, and sculptural pieces of 
              furniture, so you can demonstrate personality and make it your own. Such finishing pieces are natural fits 
              in ways of modern wall art ideas for apartments and facilitate lively conversations.
            </p> <br/>
            <Image
              src="/images/Dubai_high-rise_bedroom_with_floor-to-ceiling-modern-interior-design-dubai.png"
              alt="Modern Laundry Room Design 2"
              width={800}
              height={600}
              className="rounded-md w-full object-cover"
            />
          </div>
          
          <div className=" text-md leading-relaxed font-play">
          
            <h2 class="text-[#caa193] text-2xl font-conthrax leading-tight py-5">
             Design that Reflects Dubai Living
            </h2>
            <p>
             From apartment interior design ideas on a small scale to high-end smart living, modern apartment interior design 
             in Dubai is all about functionality and sophistication. You can employ these 5 tips to design a home that is both 
             trendy and functional according to your needs while enhancing your comfort.</p> <br/>
            <Image
              src="/images/Elegant_Dubai_apartment_showcasing_open_living-room-interior-in-dubai.png"
              alt="Modern Laundry Room Design 2"
              width={800}
              height={600}
              className="rounded-md w-full object-cover"
            />
            <p>Need expert assistance in your apartment design? Our seasoned interior design company in Dubai will turn your 
              vision into reality by combining beauty, technology, and functionality.</p>
          </div>
          <div className=" text-md leading-relaxed font-play">
          
            <h2 class="text-[#caa193] text-2xl font-conthrax leading-tight py-5">
             Frequently asked questions (FAQs)
            </h2>
            <h3 class="text-[#caa193] text-md font-conthrax leading-tight py-5">
              1- How do I maximize space in a small Dubai apartment?
            </h3>
            <p>
            A small flat can be made more functional with combined use of furniture pieces and space friendly items, open plan, 
            and use glass and mirrors to reflect space. 
            </p>

            <h3 class="text-[#caa193] text-md font-conthrax leading-tight py-5">
             2- What are the trending colours for apartments in Dubai?
            </h3>
            <p>
            The fashion colours for 2025 in apartments include muted earthy colours, emerald green warm neutrals and desaturated 
            pastels - Making it great for the luxe apartment style with a modern twist.
            </p>

            <h3 class="text-[#caa193] text-md font-conthrax leading-tight py-5">
             3- Can I mix traditional and modern styles in a Dubai apartment?
            </h3>
            <p>
             Definitely! Mixing modern and traditional elements will add depth and character. You can use modern style furniture 
             with local textures, accents, and you make it possible! 
            </p>

            <h3 class="text-[#caa193] text-md font-conthrax leading-tight py-5">
             4- What smart home features are ideal for apartments?
            </h3>
            <p>
             Smart lighting, voice assistant, smart thermostat, and smart security systems are good choices for apartment 
             interior realization and very handy. 
            </p>

             <h3 class="text-[#caa193] text-md font-conthrax leading-tight py-5">
             5- How can I furnish my apartment balcony?
            </h3>
            <p>
            Don’t be afraid of using smaller-sized furnishings, hang planters from your door, put in some warm lighting, & don't 
            shy away from using an outdoor rug, and apartments with earth friendly designs can help transform your balcony space 
            into a pocket green, peaceful, oasis like retreat.</p>
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
