"use client";

import React from "react";

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row w-full lg:mt-24 md:mt-24">
      {/* Image Section */}
      <div
        className="bg-cover bg-center h-[250px] sm:h-[300px] md:h-[450px] lg:h-[500px] xl:h-[600px] order-1 w-full md:w-7/12"
        style={{
          backgroundImage:
            "url('/images/dhfs (1).webp')",
        }}
      ></div>

      {/* Text Section */}
      <div
        className="bg-[#121212] text-white px-4 py-8 overflow-y-auto h-[400px] sm:h-[400px] md:h-[500px] lg:h-[550px] xl:h-[650px] order-2 w-full md:w-5/12"
        style={{
          scrollbarWidth: "thin", // Firefox-specific
          scrollbarColor: "silver #1a1a1a", // Firefox-specific
        }}
      >
        <style jsx>{`
          /* Custom Scrollbar Styling */
          div::-webkit-scrollbar {
            width: 10px; /* Set the width of the scrollbar */
          }
          div::-webkit-scrollbar-track {
            background-color: #1a1a1a; /* Dark background for the track */
          }
          div::-webkit-scrollbar-thumb {
            background: linear-gradient(
              to right,
              silver 25%,
              transparent 25%,
              transparent 75%,
              silver 75%
            );
            border-radius: 8px; /* Rounded edges for the thumb */
            border: 2px solid black; /* Thin black border around the thumb */
          }
          div::-webkit-scrollbar-thumb:hover {
            background: linear-gradient(
              to right,
              silver 15%,
              transparent 15%,
              transparent 85%,
              silver 85%
            );
            border-color: gray; /* Change border color on hover */
          }
          div::-webkit-scrollbar-thumb:active {
            background: linear-gradient(
              to right,
              silver 35%,
              transparent 35%,
              transparent 65%,
              silver 65%
            );
          }
        `}</style>
        <div className="text-start">
        <h1 className="text-xl text-[#b89564] font-bold mb-4">
            TOP 1 AMONG BEST INTERIOR DESIGN COMPANIES NEAR DUBAI HILLS
          </h1>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          Dubai Hills Estate is one of the top residential and commercial hubs in Dubai, known for its high-end lifestyle, family-friendly facilities, and strategic location. We are one of the top interior design companies in Dubai, delivering Dubai Hills interior design services where WE DO Interior Design & Fit-Out shines in allowing their unique essence to be experienced in such an exclusive community. Our experience ranges from luxury Dubai Hills Villa to modern Dubai Hills apartments and commercial facilities, ensuring all our projects exemplify sophistication, functionality, and individuality. With a long history of creating the best in interior design projects, we offer Dubai Hills-Interior Design & Fit-Out solutions for every space- turning it into a timeless masterwork, brimming with sophistication and practicality.
          </p>
          <h2 className="text-xl text-start text-[#b89564] font-bold mt-2 mb-2">
            RESIDENTIAL INTERIOR DESIGN IN DUBAI HILLS
          </h2>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          We Do Interior Design and Fit-out offers a comprehensive range of Residential Interior Design Services in Dubai Hills for those who want to enhance their living or working spaces in Dubai Hills.
          </p>
          <h3 className="text-lg text-start font-bold mt-2 mb-2">
            VILLAS IN DUBAI HILLS
          </h3>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          Dubai Hills Estate is synonymous with luxurious living and boasts stunning Dubai Hills villas and exclusive Club Villas in Dubai Hills that demand interior designs tailored specifically to them. WE DO Interior Design & Fit-Out transforms such homes into beautiful spaces that tell the story of individuality and sophistication. Serene retreats or functional-yet-stylish rooms-crafting everything that will elevate your villa into something special.
          </p>
          <h3 className="text-lg text-start font-bold mt-2 mb-2">
            LIVING ROOM INTERIOR DESIGN
          </h3>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          The living room serves as the centerpiece of any home. For Dubai Hills villas, we create designs that seamlessly combine elegance and comfort. Living Room interior Design by our company includes luxurious furnishings, custom lighting, and ergonomic layouts for crafting inviting spaces for family gatherings and guest entertainment.
          </p>
          <h3 className="text-lg text-start font-bold mt-2 mb-2">
            BEDROOM INTERIOR DESIGN
          </h3>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          Serene sanctuaries at Dubai Hills Villa homes through designs as  simple bedroom interior design or luxury bedroom interior design; for Bedroom Design for Apartments or villa master suite, soothing colors, premium fabrics, and smart interior bedroom cupboard designs ensure the balance of relaxation, style, and functionality.
          </p>
          <h3 className="text-lg text-start font-bold mt-2 mb-2">
            KITCHEN INTERIOR DESIGN
          </h3>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          Kitchens in villas in Dubai Hills are fully functional and aesthetically beautiful. We guarantee the creation of a sumptuous yet practical space through our knowledge of modern kitchen design. We emphasize attention to detail, including a cabinet design for the kitchen along with premium finishes and simple kitchen design ideas to make this culinary hub stand out. Our scope includes simple designs and more ornate, modern aesthetics.
          </p>
          <h3 className="text-lg text-start font-bold mt-2 mb-2">
            MAJLIS INTERIOR DESIGN
          </h3>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          Majlis interiors are culturally and socially important, and therefore, they are a must for Dubai Hills villas. Our expertise ranges from Arabic Majlis Interior Design, which pays homage to the traditional heritage with intricate patterns and luxurious finishes, to Modern Majlis Interior Design, which combines contemporary elegance with functionality. These spaces are tailored to reflect the homeowner's style while providing comfort and versatility.
          </p>
          <h3 className="text-lg text-start font-bold mt-2 mb-2">
            SPECIALIZED FOR CLUB VILLAS & GOLF VILLAS  
          </h3>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          For exclusive Club Villas in Dubai Hills and Dubai Hills Golf Villas, we offer bespoke interior designs that enhance the unique architectural features of these luxury homes. From opulent Majlis Interior Design to sophisticated Living Room Interior Design, every detail is thoughtfully curated to elevate your living experience.
          At WE DO Interior Design & Fit-Out, we ensure every corner of your Dubai Hills Villa is a reflection of your lifestyle, combining elegance, comfort, and functionality to create spaces you’ll love to call home.
          </p>
          
          <h2 className="text-xl text-start text-[#b89564] font-bold mt-2 mb-2">
            APARTMENTS IN DUBAI HILLS
          </h2>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          At WE DO Interior Design & Fit-Out, we specialize in specialized interior design for high-end apartments, focusing on Living Room Design for Apartments with modern layouts that maximize space. Our Bedroom Design for Apartments creates personalized sanctuaries, while our home office design offers functional, stylish spaces for remote work. For renters, we provide non-invasive solutions to enhance interiors without major renovations, combining modern elements like modern bedroom interior design and kitchen cabinet design to elevate any space with minimal effort.
          </p>
          
          <h2 className="text-xl text-start text-[#b89564] font-bold mt-2 mb-2">
            COMMERCIAL INTERIOR DESIGN IN DUBAI HILLS
          </h2>
          <h3 className="text-lg text-start font-bold mt-2 mb-2">
            OFFICE INTERIOR DESIGN
          </h3>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          At WE DO Interior Design & Fit-Out, we cater to Office Design in Dubai Hills with innovative solutions for office interiors designed to transform the workplace. In Boardroom Designs, we establish sleek, professional environments for that high-level meeting, while with Open Workspace Design, we open up opportunities to collaborate and bring out productivity using thoughtfully designed layouts. As corporate office design & fit-out experts, we provide customized solutions for corporate offices near me to reflect the culture of your company. From office reception design to complete office transformation, we are one of the top office interior design companies in Dubai, delivering functional, stylish, and efficient workspaces.
          </p>
          <h3 className="text-lg text-start font-bold mt-2 mb-2">
            RETAIL SPACES
          </h3>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          We offer interior design services for retail businesses in Dubai Hills at WE DO Interior Design & Fit-Out, providing unique solutions for all the needs of your retail. Whether it's to highlight your product in the showroom or the luxurious boutique designs, our creations always leave behind great customer memories. As one of the top boutique design agencies, we bring your brand's identity to the fore through retail interior design solutions. Our retail design consultants in Dubai ensure your Retail Spaces in Dubai Hills and beyond are functional, stylish, and perfect for the Dubai retail market.
          </p>
          
          <h3 className="text-lg text-start font-bold mt-2 mb-2">
            GYMS & FITNESS CENTERS
          </h3>
          <h4 className="text-lg text-start font-bold mt-2 mb-2">
            GYM LAYOUT DESIGN
          </h4>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          WE DO Interior Design & Fit-Out specialize in Gym Layout Design, which maximizes space and enhances functionality, creating a seamless experience for members. Our designs combine efficiency with aesthetics to create a modern, inviting gym environment that's perfect for Gyms in Dubai Hills.
          </p>
          <h4 className="text-lg text-start font-bold mt-2 mb-2">
            LOCKER ROOM DESIGN
          </h4>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          We offer stylish, practical Locker Room Design solutions with comfortable and effective spaces for the clients. The designs for our Gyms in Dubai Hills and other centers are done based on client comfort and space maximization to offer a premium experience to all users.
          </p>
          <h3 className="text-lg text-start font-bold mt-2 mb-2">
            CINEMAS & ENTERTAINMENT SPACES
          </h3>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          WE DO Interior Design & Fit-Out specializes in designing tailor-made luxury cinemas and home theaters. Our cinema hall interior design focuses on comfort in seating, ambient lighting, and acoustically optimized layouts to enhance the viewer's experience. Customized cinema interior design for Cinemas in Dubai Hills ensures a sophisticated look blended with cutting-edge technology, providing guests with a premium cinematic experience.
          </p>
          <h3 className="text-lg text-start font-bold mt-2 mb-2">
            HEALTHCARE FACILITIES
          </h3>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          WE DO Interior Design & Fit-Out, provides specialized interior design for hospitals and clinics in Dubai Hills that creates healing environments, balancing comfort and functionality. Patient Room Design offers a place for recovery in calming, comfortable spaces, incorporating soothing color schemes and efficient layouts. Waiting Room Design is an inviting, functional space that offers comfort and convenience to visitors. With expertise in Healthcare Design for Dubai Hills, we deliver tailored solutions for Dubai Hills hospitals, enhancing the aesthetic and functional aspects of medical environments. Our Decor Services for Dubai Hills ensure that every space reflects a serene, professional atmosphere conducive to patient care.
          </p>

          <h2 className="text-xl text-start text-[#b89564] font-bold mt-2 mb-2">
            INTEGRATION WITH DUBAI HILLS MASTER PLAN
          </h2>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          At WE DO Interior Design & Fit-Out, we ideally are well linked and in sync with the Dubai Hills Master Plan; our range of services highlights spaces inspired by Dubai Hills Golf and Dubai Hills Park, integrating the natural essence of the region into these designs through open spaces, natural materials, and expansive views. Whether it's a villa in Dubai Hills, apartments, or commercial spaces, our interior design for Dubai Hills represents a balance between nature and contemporary living. In this approach, every space feels connected to its surroundings and exudes serenity and modernity.
          </p>

          <h2 className="text-xl text-start text-[#b89564] font-bold mt-2 mb-2">
            WHY CHOOSE US FOR YOUR DUBAI HILLS SPACE?
          </h2>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          We do Interior Design & Fit-Out provide high-quality tailored interior design and fit-out in Dubai Hills that specializes in interior design for residential and commercial, from Dubai Hills Villas, Dubai Hills Apartments, to interior design for commercial offices, like Boardroom Design, Open Workspace Design, Retail Spaces in Dubai Hills, showroom design, and boutique design. We also offer specialized designs for gyms, cinemas, and healthcare spaces like Patient Room Design and Waiting Room Design. Our portfolio comprises completed projects such as: Living Room Interior Design, Bedroom Interior Design, Kitchen Interior Design, Majlis Interior Design, all inspired by the beauty of the Dubai Hills Master Plan. Clients and users value our ability to blend functionality with elegance, providing excellent design solutions for both residential homes in Dubai Hills and commercial spaces, all while enhancing the overall aesthetic of Dubai Hills Estate and its surrounding landmarks such as Dubai Hills Golf and Dubai Hills Park.
          </p>

          <h2 className="text-xl text-start text-[#b89564] font-bold mt-2 mb-2">
            CONTACT US TODAY
          </h2>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          To turn your Dubai Hills property into a show-stopping, functional space? At WE DO Interior Design & Fit-Out, we offer personal consultations to bring your vision to life with tailored design solutions. We can provide you with residential interior design, commercial interior design, or even special projects such as gyms, cinemas, and healthcare spaces. Contact us today to discuss how we can elevate your Dubai Hills home, office, or retail space, and create the perfect environment for your needs. Let's make your dream space a reality!
          </p>
    
        </div>
      </div>
    </section>
  );
};

export default Hero;
