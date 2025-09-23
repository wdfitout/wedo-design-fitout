import Image from "next/image";

const VHeroSection = () => {
  const suggestions = [
    {
      title: "New Hotel Interior Ideas To Make Your Hotel Spaces Luxury",
      age: "4 years ago",
      image: "/images/high-rise-dubai-marina-apartment-interior-design-dubai.png", // Replace with actual path
    },
    {
      title: "Best Kids Room Interior Design Ideas | Tips To Decorate Your Kids Room",
      age: "4 years ago",
      image: "/images/elegant-dubai-apartment-showcasing-open-living-room-interior-in-dubai.png", // Replace with actual path
    },
    
    {
      title: "7 Inspiring Home Renovation Design Ideas You Need to Know",
      age: "1 year ago",
      image: "/images/dubai-apartment-balcony-exterior-design-company-in-dubai.png", // Replace with actual path
    },
    {
      title: "7 Inspiring Home Renovation Design Ideas You Need to Know",
      age: "1 year ago",
      image: "/images/ultra-modern-dubai-apartment-interior-design.png", // Replace with actual path
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 text-white mt-20">
      {/* Responsive layout: blog on left, sidebar on right for desktop */}
      <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-8">
        {/* Blog Content */}
        <div>
          <div className="text-sm mb-4 text-[#caa193]">
            <p>Sep 23, 2025 • No Comments</p>
          </div>

          <h1 className=" text-[#caa193] text-3xl font-conthrax leading-tight py-10 ">
           Interior Design Styles Dubai 2025: 6 Must-Know Trends
          </h1>
         <div className=" text-md leading-relaxed font-play">
             <p> for paragraph</p>
          </div>
          <div className="space-y-6">
            <Image
              src="/images/ultra-modern-dubai-apartment-interior-design.png" 
             
              alt="Modern apartment Room interior Design Dubai"
              width={800}
              height={600}
              className="rounded-md w-full object-cover"
            />
            <div className=" text-md leading-relaxed font-play">
            <p>
             
            </p>
            <h2 class="text-[#caa193] text-2xl font-conthrax leading-tight py-5">Optimizing Space and Natural Light</h2>
            <p> for paragraph  </p>
          </div>
            <Image
              src="/images/compact-dubai-bedroom-with-pace-saving-furniture-with-modern-interior.png"
              alt="Modern Laundry Room Design 2"
              width={800}
              height={600}
              className="rounded-md w-full object-cover"
            />
          </div>
        <div className=" text-md leading-relaxed font-play">
          
            <h2 class="text-[#caa193] text-2xl font-conthrax leading-tight py-5">Luxury Through Materials and Colors</h2>
            <p> for paragraph  </p>
             <Image
              src="/images/high-end-dubai-apartment-interior-design-in-dubai.png"
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
            <p> for paragraph  </p>
            <Image
              src="/images/fusion-style-dubai-apartment-interior-ivory.png"
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
            <p> for paragraph  </p>
            <Image
              src="/images/high-rise-dubai-marina-apartment-interior-design-dubai.png"
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
            <p> for paragraph  </p>
            <Image
              src="/images/dubai-high-rise-bedroom-with-floor-to-ceiling-modern-interior-design-dubai.png"
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
            <p> for paragraph  </p>
            <Image
              src="/images/elegant-dubai-apartment-showcasing-open-living-room-interior-in-dubai.png"
              alt="Modern Laundry Room Design 2"
              width={800}
              height={600}
              className="rounded-md w-full object-cover"
            />
            <p> for paragraph  </p>
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
