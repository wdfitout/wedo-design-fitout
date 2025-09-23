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
         <div className=" text-sm leading-relaxed font-play">
            <p> 
              Whenever designing a new interior design in Dubai, one common question often comes in our minds is <b className="text-[#caa193]"><a href="https://wedointerior.ae/interior-design-styles-dubai-2025">how many 
              interior design styles are there?</a></b>  The reality is that there are dozens each with its own history, character, and 
              philosophy of design. But to simplify, we have reduced it to the 6 most popular and versatile styles that continue 
              to influence elegant homes and business spaces of Dubai in the era of 2025. 
            </p> <br />
          </div>
          <div className="space-y-6">
            <Image
              src="/images/six-best-interior-design-trends-dubai-2025.png" 
             
              alt="six best interior Design trends in Dubai"
              width={800}
              height={600}
              className="rounded-md w-full object-cover"
            />
            <div className=" text-sm leading-relaxed font-play">
            <p>
             Whichever direction you are inclined toward with clean lines, warm textures, or graphic statements, knowing these basic 
             interior styles can help you in designing your own personal style and making informed decisions in designing.
             Let's discover the 6 interior styles with WEDO interior design and fitout that still define stunning homes and spaces.
            </p>
            <h2 class="text-[#caa193] text-2xl font-conthrax leading-tight py-5">6 Must-Know Interior Design Styles in 2025</h2>
            <p> What is modern design? It's a classic style characterized by simple lines, efficient layouts, and little ornament. 
              <b className="text-[#caa193]"><a href="https://wedointerior.ae/modern-apartment-interior-design"> Modern interior design in Dubai</a></b> is all about straightforwardness, simplicity and the addition of natural elements 
              such as stone, wood, and glass. In 2025, the top modern interior ideas are built-ins, open spaces, and subtle 
              contrasts with black or metallic accents. For the inspiration of modern interior design in Dubai, mixing in mid 
              century modern interior design features such as clean lines, furniture and warm colors gives the space personality 
              without losing the simplicity.
           </p>
          </div>
            <Image
              src="/images/mid-century-modern-interior-design-features.png"
              alt="Mid Centuray modern interior design features in Dubai"
              width={800}
              height={600}
              className="rounded-md w-full object-cover"
            />
          </div>
        <div className=" text-sm leading-relaxed font-play">
          
            <h2 class="text-[#caa193] text-2xl font-conthrax leading-tight py-5"> Traditional Interior Design Style In Dubai</h2>
            <p> What is Traditional Interior Design Style? It is a luxury and traditional style rooted in 18th and 19th-century 
              European interior design with symmetry, opulent details, rich wood tones and a warm, inviting environment for the 
              residents. Traditional classic interior design Dubai comes with luxurious fabrics, stunning furniture, and 
              architectural moldings that give living rooms and bedrooms a luxurious yet comfortable ambience. In Dubai homes 
              today, the new traditional interior design balances this formality with lighter colors, patterns, and a touch of 
              modern simplicity. Suits best for those individuals who are keen on elegance and heritage, interior design for 
              traditional homes embodies an aura of balance, stability and timelessness.
            </p> <br />
             <Image
              src="/images/traditional-classic-interior-design-dubai.png"
              alt="traditional classic interior design in Dubai"
              width={800}
              height={600}
              className="rounded-md w-full object-cover"
            />
          </div>
        
             <div className=" text-sm leading-relaxed font-play">
          
            <h2 class="text-[#caa193] text-2xl font-conthrax leading-tight py-5">
              Minimalistic Interior Design in Dubai
            </h2>
            <p> Minimalist interior design is very trendy in Dubai and its high end areas like palm jumeirah, Dubai Marina and 
              business Bay. This design is focused on an upscale profile, elegance, simple lines, uncluttered rooms and neutral 
              colors that enhance clarity and modernism. Minimal Decor Ideas for Sleek, Simple Interiors like muted textures, 
              floor tiles, and carefully selected monochrome artwork enhances the look and warmth of a space. WE DO Interior 
              Design & Fitout as the <b class="text-[#caa193] "><a href="https://wedointerior.ae/contact-us">best Interior Design company in Dubai</a></b> is skilled in minimalist style interior design, 
              helping our clients simplify interiors  into peaceful Dubai retreats.
            </p>
            <br />
            <Image
              src="/images/modern-interior-design-dubai-dubai-marina.png"
              alt="modern interior design dubai dubai marina"
              width={800}
              height={600}
              className="rounded-md w-full object-cover"
            />
          </div>
           
             <div className=" text-sm leading-relaxed font-play">
          
            <h2 class="text-[#caa193] text-2xl font-conthrax leading-tight py-5">
              Bohemian (Boho) Interior Design in UAE
            </h2>
            <p> Bohemian (Boho) style is an eclectic, colorful, and globally influenced school that depends on texture, pattern, 
              and individuality. In the UAE, Bohemian interior design in the UAE tends to combine sunlight-washed neutrals such 
              as white and beige with deep jewel colors—emerald, ruby, and sapphire—superimposed over kilim rugs, macramé wall 
              decor, and woven blankets.
           </p> <br />
            <Image
              src="/images/bohemian-boho-interior-design-dubai.png"
              alt="bohemian boho interior design dubai"
              width={800}
              height={600}
              className="rounded-md w-full object-cover"
            />
            <br />
            <p>This "rule-freestyle invites combining finishes (wood, rattan, metal), the use of vintage 
              or second-hand pieces, and acquiring souvenirs of worldwide travels. It's about setting up a comfortable, lived-in 
              atmosphere that has a narrative. For those who want Bohemian style interior design, the trick lies in layering—textiles, 
              greenery, art, lighting—to create an alive, personal space that is easygoing yet richly textured.
            </p>
          </div>
           <div className=" text-sm leading-relaxed font-play">
          
            <h2 class="text-[#caa193] text-2xl font-conthrax leading-tight py-5">
              Transitional Interior Design In Dubai
            </h2>
            <p> Transitional Style Interior Design achieves a flawless blend of traditional warmth and modern simplicity, thus 
              becoming an excellent fit for high-end environments such as luxury hotels, resorts, and homes in Dubai. The style 
              is a great mixture of classic aspects—like understated crown moldings or leather armchairs—and contemporary furniture 
              with clean lines, neutral color schemes (taupes, creams, pale grays), and textured layers. </p> <br />
            <Image
              src="/images/6-interior-design-styles-2025-business-bay-dubai.png"
              alt="6 interior design styles 2025 business bay dubai"
              width={800}
              height={600}
              className="rounded-md w-full object-cover"
            />
            <br />
            <p>Transitional design for Luxury Hotels & Resorts Dubai is typically characterized by statement lighting, sleek metals, 
              and a soothing combination of straight and curved lines that convey classic sophistication. For a majestic lobby or a 
              cozy suite, transitional interior design guarantees that spaces are both inviting and stylishly chic.
            </p>
          </div>
          
          <div className=" text-sm leading-relaxed font-play">
          
            <h2 class="text-[#caa193] text-2xl font-conthrax leading-tight py-5">
              Scandinavian Interior Design Style
            </h2>
            <p> Scandinavian interior design in UAE is popular for its airy ambiance, light, and focus on functionality, so it works 
              beautifully for modern living in Dubai. This style includes simple lines, light wood tones, and warm textiles such as 
              linen and wool. A soft Scandinavian interior color palette is usually white, pale gray, beige, and soft pastels which 
              makes rooms open and peaceful. </p>
              <br/>
            <Image
              src="/images/scandinavian-interior-design-uae.png"
              alt="Scandinavian interior design in UAE"
              width={800}
              height={600}
              className="rounded-md w-full object-cover"
            /> <br/>
            <p>Whether it is a snug Scandinavian interior living room or a minimalist kitchen interior design, each item is 
              intentional and free of clutter. This modern Scandinavian interior design style finds equilibrium between warmth 
              and simplicity, bringing classic elegance ideal for modern Dubai homes.
            </p> <br/>
          </div>
          <div className=" text-sm leading-relaxed font-play">
          
            <h2 class="text-[#caa193] text-2xl font-conthrax leading-tight py-5">
             Frequently asked questions (FAQs)
            </h2>
            <h3 class="text-[#caa193] text-sm font-conthrax leading-tight py-5">
              1- What are the different types of interior design?
            </h3>
            <p>
            Interior design includes a wide range of styles, each with unique characteristics. Some of the most 
            recognized types are:
            
            <li> <b class="text-[#caa193]">Modern –</b>  minimal ornamentation, clean lines, and open spaces.</li>
            <li> <b class="text-[#caa193]">Minimalist –</b> simplicity, functionality, and uncluttered spaces.</li>
            <li> <b class="text-[#caa193]">Scandinavian – </b>soft tones, airy, light, and cozy, with functional pieces.</li>
            <li> <b class="text-[#caa193]">Contemporary – </b>contemporary trends with a changing, fluid style.</li>
            <li> <b class="text-[#caa193]">Industrial – </b>raw material such as brick, metal, and concrete with an urban aesthetic.</li>
           </p>

            <h3 class="text-[#caa193] text-sm font-conthrax leading-tight py-5">
             2- What are the 7 basics of interior design in Dubai?
            </h3>
            <p>
             The 7 fundamental principles of interior design help create balanced and harmonious spaces:
             <li><b class="text-[#caa193]">Space -</b>the foundation of any design, involving how areas are used and divided.</li>
             <li><b class="text-[#caa193]">Line -</b>directs the eye and shapes the space through horizontal, vertical, and dynamic lines.</li>
             <li><b class="text-[#caa193]">Form -</b>the shape of furniture, architecture, and décor elements.</li>
             <li><b class="text-[#caa193]">Light -</b>natural and artificial lighting influence mood and functionality.</li>
             <li><b class="text-[#caa193]">Color -</b>sets the tone, defines zones, and adds personality to interiors.</li>
             <li><b class="text-[#caa193]">Texture -</b>adds depth and tactile interest through fabrics, finishes, and materials.</li>
             <li><b class="text-[#caa193]">Pattern -</b>creates visual appeal and rhythm through repeating elements.</li>
             </p>

            <h3 class="text-[#caa193] text-sm font-conthrax leading-tight py-5">
             3- What is the most popular interior style in Dubai?
            </h3>
            <p>
             Modern interior design continues to be the most sought-after style because of its clean lines, efficient arrangements, 
             and eternal beauty. However, Contemporary, Minimalist, and Scandinavian are also very popular in 2025, particularly in 
             urban areas where simplicity, intelligent design, and sophistication are appreciated.
            </p>

            
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
