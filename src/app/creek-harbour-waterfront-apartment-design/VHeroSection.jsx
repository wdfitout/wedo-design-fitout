"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const VHeroSection = () => {
  const suggestions = [
  {
    title: "5 Differences Between Villa and Apartment Interiors in Dubai",
    age: "February 2, 2026",
    image: "/images/5_Differences_Between_Villa_and_Apartment_Interiors_in_Dubai.png",
    link: "/dubai-villa-vs-apartment-interior-design", 
  },
  {
    title: "Villa Construction in Dubai - Complete Design & Build",
    age: "January 5, 2026",
    image: "/images/luxury-villa-architectural-planning-and-design-dubai.png",
    link: "/complete-villa-construction-dubai",
  },
  {
    title: "Luxury Bathroom Design Trends in Dubai Creek Harbour",
    age: "April 21, 2026",
    image: "/images/Luxury Bathroom Design Trends in Dubai Creek Harbour Homes.png",
    link: "/bathroom-design-trends-dubai-creek-harbour",
  },
  {
    title: "High-End Living Room interior Design in Business Bay",
    age: "April 18, 2026",
    image: "/images/Luxury interior material focus Dubai living room.png",
    link: "/living-room-interior-business-bay",
  },
];

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 text-white mt-20">
      <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-8">
        {/* Blog Content */}
        <div>
          <div className="text-sm mb-4 text-[#caa193]">
            <p>May 25, 2026 • No Comments</p>
          </div>

          <h1 className="text-[#caa193] text-3xl font-conthrax leading-tight py-10 ">
           Guide to Dubai Creek Harbour Waterfront Apartment Design
          </h1>

          <div className="text-md leading-relaxed font-play space-y-4 text-justify">
            <p>
             Dubai skyline is known for its uniqueness, modern way of living, and beautiful waterfront properties. The Dubai Creek Harbour is considered one of the most distinguished sites because it is thought of as a modern landmark of an urban site. Designing a home within this elite site requires an intelligent design approach. This guide by WE DO Interior Design & Fitout will help you understand everything about <b className="text-[#caa193]"><a href="/apartment-interior-design-dubai">Waterfront Apartment interior Design</a></b> and how to create a stunning living space in one of Dubai’s most desirable communities.
            </p>
            {/* Image 1 */}
            <Image src="/images/Modern waterfront apartment living room in Dubai Creek Harbour.png" width={800} height={600} className="rounded-md w-full object-cover my-6" />
            
          </div>

          <div className="text-md leading-relaxed font-play space-y-4 text-justify">
            <h2 className="text-[#caa193] text-2xl py-5 font-conthrax ">Understanding Waterfront Apartment Design</h2>
            <p>
             Waterfront Apartment Design is not only about the decoration but, more importantly, the combination of an apartment with its surrounding environment. A house close to water should be decorated with due regard for its specific features such as bright lighting, splendid view, and soothing atmosphere. At our company, WE DO Interior Design & Fitout, we adhere to the following idea: waterfront apartments need to be spacious, bright, and harmonious with the environment. It should not interfere with the view but emphasize it using certain colors and materials.
            </p>
            {/* Image 2 */}
            <Image src="/images/Dubai waterfront apartment interior.png" alt="Best luxury living room" width={800} height={600} className="rounded-md w-full object-cover my-6" />
           
           <h2 className="text-[#caa193] text-2xl py-5 font-conthrax ">Attractiveness of Waterfront Apartments at Dubai Creek Harbour</h2>
            <p>
            The <b className="text-[#caa193]"><a href="/apartment-interior-design-dubai-creek-harbour"> Waterfront Apartments in Dubai Creek Harbour</a></b> have fascinated a large number of people owing to the elegance and sophistication that is inherent in the architectural design of the apartments. These apartments have been constructed in such an impressive way so that people residing in them can get the opportunity to enjoy a magnificent view of the Dubai Creek Harbor surroundings. It is not an easy task to come up with interior designs for such locations.
            </p>
            {/* Image 3 */}
            <Image src="/images/Waterfront Apartments at Dubai Creek Harbour.png" alt="Best luxury living room" width={800} height={600} className="rounded-md w-full object-cover my-6" />
           <p>
            As stated in The Complete Guide to Dubai Creek Harbour, this community will ensure that its residents live a luxurious life due to the unique combination of residential, commercial, and recreational amenities available here. You need to ensure that your apartment is not only luxurious but also comfortable to live in. When you choose the services of an experienced <b className="text-[#caa193]"><a href="/interior-design-dubai-creek-harbour"> Interior Design Company in Dubai Creek Harbour</a></b>, WE DO ensure that your apartment matches the lifestyle provided here.
            </p>


            <h2 className="text-[#caa193] text-2xl py-5 font-conthrax ">Key Principles of Waterfront Apartment Design</h2>
           

            <h3 className="text-[#caa193] text-xl font-bold mb-2">Maximizing Natural Light</h3>
            <p>
             Natural light is one of the greatest benefits that come from waterfront real estate. Rooms with huge windows should have light colors throughout because that will make the rooms more bright. Heavy drapes can ruin your efforts to maximize natural light.
          </p>
            <Image src="/images/Bright Dubai apartment interior.png" alt="High-rise luxury apartment living room" width={800} height={600} className="rounded-md w-full object-cover my-6" />
            
          
             <h3 className="text-[#caa193] text-xl font-bold mb-2">Emphasizing the View</h3>
            <p>
              The view is the focal point of every waterfront apartment. The arrangement of the furniture must not obstruct the view. At WE DO Interior Design & Fitout, we design spaces such that all the key areas have access to the best view.
            </p>
            <Image src="/images/waterfront apartment in Dubai with furniture.png" alt="Luxury interior material focus" width={800} height={600} className="rounded-md w-full object-cover my-6" />
            
            <h3 className="text-[#caa193] text-xl font-bold mb-2">Using Natural Materials</h3>
            <p>
              When materials like wood, stone, and glass are used, there is a connection to nature. The use of these materials ensures that the interior is warm and elegant while remaining modern.
              </p>
            <Image src="/images/Modern Dubai apartment interior using natural wood.png" alt="Luxury interior material focus" width={800} height={600} className="rounded-md w-full object-cover my-6" />
 
             <h3 className="text-[#caa193] text-xl font-bold mb-2">Creating Open and Functional Spaces</h3>
            <p>
             The open plan design is well suited for apartments on the waterfront because of the ease of flow and increased space in such spaces. At WE DO, the best interior design company in Dubai Creek Harbour, we specialize in designing homes that are not only aesthetically pleasing but also practical.
            </p>
            <Image src="/images/Open-plan Dubai apartment layout.png" alt="Neutral luxury living room" width={800} height={600} className="rounded-md w-full object-cover my-6" />
            

            <h3 className="text-[#caa193] text-xl font-bold mb-2">Choosing the Right Color Palette</h3>
            <p>
             Colors have an important role to play in Waterfront Apartment Design. Colors like white, beige, and light grey ought to be utilized as they aid in reflection of sunlight and give out a soothing effect. The color of blue and green may be incorporated as they complement the waterfront environment. The interior design experts at UAE advise against using very dark or vibrant colors, as they tend to shrink the room size and distract from the view.
              </p>
            <Image src="/images/Dubai waterfront apartment interior design.png" alt="Luxury Dubai living room with dramatic chandelier centerpiece" width={800} height={600} className="rounded-md w-full object-cover my-6" />
             <h3 className="text-[#caa193] text-xl font-bold mb-2">Furniture and Layout Planning</h3>
            <p>
            <b className="text-[#caa193]"><a href="/custom-furniture-joinery-dubai-creek-harbour">Comfortable and elegant furniture</a></b> is the way to go here since low furniture will ensure no obstruction of sight. Furniture that serves multiple purposes is also recommended since it will help maximize the space available. Being among the top interior design companies in Dubai, WE DO guarantees that all furniture chosen complements the apartment’s overall theme. 
            </p>
             <Image src="/images/waterfront apartment Furniture and Layout Planning.png" alt="Custom bespoke luxury living room Dubai" width={800} height={600} className="rounded-md w-full object-cover my-6" />
           
            <h3 className="text-[#caa193] text-xl font-bold mb-2">Incorporating Luxury Elements</h3>
            <p>
              Being an <b className="text-[#caa193]"><a href="https://wedointerior.ae/"> interior design firm</a></b> that specializes in luxury designs, we know how important it is to add a touch of luxury to waterfront apartments through finishes, designer fittings, and bespoke furniture.Adding too many items to the apartment does not denote luxury but, instead, choosing just a few elements to enhance the interior design.
                </p>
<Image src="/images/Subtle luxury apartment interior in Dubai Creek Harbour.png" alt="Custom bespoke luxury living room Dubai" width={800} height={600} className="rounded-md w-full object-cover my-6" />
      
            
           </div>

          <div className="text-md leading-relaxed font-play space-y-4 text-justify">
            <h2 className="text-[#caa193] text-2xl py-5 font-conthrax ">Role of Professional Interior Design Services</h2>
            <p>
             The designing of a waterfront apartment demands experience and skill. The use of professional interior design services guarantees that everything is taken care of in a professional manner. One of the best interior fit out firms in Dubai, WE DO Interior Design & Fitout offers full-fledged services from the conception stage till the completion phase. We ensure that the apartment built is unique and matches your style.
            </p>
            <Image src="/images/Interior designer discussing apartment plans.png" alt="Efficient luxury apartment living room layout Dubai" width={800} height={600} className="rounded-md w-full object-cover my-6" />
            

            <h2 className="text-[#caa193] text-2xl py-5 font-conthrax ">Why Choose WE DO Interior Design & Fitout</h2>
            <p>
             Selecting the appropriate design partner plays a vital role in ensuring that you get your waterfront house built to perfection. WE DO can be your trusted <b className="text-[#caa193]"><a href="https://wedointerior.ae/">  Interior Design Company in Dubai Creek Harbour</a></b>, offering excellent solutions for your projects. We are proud to have an expert team of professionals who know everything about waterfront living. With our technical skill set, we make sure to offer practical yet beautiful solutions to you. As one of the top interior design companies in Dubai Creek Harbour, WE DO provides its best services to its clients.
 </p>
            <Image src="/images/interior design team reviewing Dubai apartment project.png" alt="Technology into Living Room Interiors" width={800} height={600} className="rounded-md w-full object-cover my-6" />
           
            
          </div>

         

         
          {/* FAQs Section */}
          <div className="text-md leading-relaxed font-play space-y-4 text-justify">
            <h2 className="text-[#caa193] text-2xl py-5 font-conthrax uppercase">Frequently Asked Questions (FAQs)</h2>

            <h3 className="text-[#caa193] font-bold mb-2">Q1: What Is Waterfront Apartment Design?</h3>
            <p>Ans: Waterfront Apartment Design aims at creating interior designs that match the environment and maximize the views to ensure a satisfying living experience near the waterfront.</p>

            <h3 className="text-[#caa193] font-bold mb-2">Q2: Why are Waterfront Apartments in Dubai Creek Harbour so Popular?</h3>
            <p>Ans: This is due to the fact that these apartments offer luxury accommodations, great views, and top-notch architectural design.</p>

            <h3 className="text-[#caa193] font-bold mb-2">Q3: How do you find an Ideal Interior Design Firm?</h3>
            <p>Ans: Here are some factors that one needs to put into consideration when looking for the ideal interior design firm including experience, portfolio, past client reviews, and expertise in working on waterfront projects. WE DO Interior Design & Fitout stands out in this regard.</p>

            <h3 className="text-[#caa193] font-bold mb-2">Q4:Which color would be appropriate for my waterfront apartment?</h3>
            <p>Ans: The best choice would be light and neutral shades such as white, beige, and light blue because they reflect light and create a calming effect.</p>

            <h3 className="text-[#caa193] font-bold mb-2">Q5:Do I have to hire an interior designer for my apartment?</h3>
            <p>Ans: Absolutely! Professional designers make sure that the design process is well-planned, maximizes space usage, and is executed with excellence.</p>
          </div>
<Image src="/images/Comfortable modern Dubai apartment corner.png" alt="Technology into Living Room Interiors" width={800} height={600} className="rounded-md w-full object-cover my-6" />
           
<div className="text-md leading-relaxed font-play space-y-4 text-justify">
            
            <h2 className="text-[#caa193] text-2xl py-5 font-conthrax ">Let's Design Together</h2>
            <p>
             Are you anticipating a waterfront apartment unlike any other? Kindly reach out to us today by connecting WE DO Interior Design & Fitout, the best interior design firm in Dubai. The team at WE DO Interior Design & Fitout is committed to providing luxurious, elegant, and functional interior spaces for you. In case of interior designers in Dubai, WE DO Interior Design & Fitout stands among the leading firms. At WE DO Interior Design & Fitout, we would be glad to offer our best Waterfront Apartment Design to suit your specifications.
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
          <a href={post.link} className="flex space-x-4 cursor-pointer">
            <div className="w-20 h-16 rounded-md overflow-hidden flex-shrink-0">
              <Image 
                src={post.image} 
                alt={post.title} 
                width={80} 
                height={64} 
                className="w-full h-full object-cover" 
              />
              </div>
              </a>
         
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