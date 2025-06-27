'use client';

import React from 'react';
import Image from 'next/image';

const textImage = {
  src: '/images/bba (2).jpg',
  link: '/business-bay-apartment',
  title: 'Business Bay Apartment'
};

const galleryImages = [
  { src: '/images/bba (2).jpg', link: '/acacia-dubai-hills-2-bedroom-apartment', title: 'acacia dubai hills apartment' },
  { src: '/images/bba (3).jpg', link: '/dubai-marina-luxury-apartment', title: 'dubai marina luxury apartment' },
  { src: '/images/bba (4).jpg', link: '/emaar-beach-front-marina-vista-apartment', title: 'emaar beach front marina vista apartment' },
  { src: '/images/bba (5).jpg', link: '/marina-gate-2-luxury-apartment', title: 'Luxury Vanity Room' },
  { src: '/images/bba (4).jpg', link: '/palm-jumeirah-apartment', title: 'palm jumeirah apartment' },
  { src: '/images/bba (1).jpg', link: '/dubai-marina-luxury-apartment', title: 'dubai marina luxury apartment' },
];

const DProjects = () => {
  return (
    <section className="px-6 py-10 bg-black-200">
      
      {/* Top Content Block */}
      <div className="lg:max-w-[60%] mx-auto bg-black p-6 sm:p-10 rounded shadow text-center space-y-6 mb-12">
        <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#caa193]">
          Get your places a contemporary theme with apartment design Dubai
        </h2>
        <div className="space-y-4 text-sm sm:text-base font-play text-white text-left">
          <p>
            Modernly furnished apartments often have a little unique flair or style, because it can give them a look as if they were a hotel room! Rental properties in Dubai can hardly look and feel like home; hence we have inspiration for interior design to decorate even the smallest <strong>apartment design Dubai</strong> to make the most of your space and city life. We have ideas on how to decorate your apartment design with an urban edge, the perfect inspiration for the interior!
          </p>
          <p>
            We have ideas on the Dubai Muse design that you need to learn, from the right furniture to the balance between modern and traditional. We have the best tips on creating the perfect home (although it is a studio flat) from bedroom design to a living room arrangement to office furniture with the help of the significant Dubai furniture stores.
          </p>
        </div>
      </div>

      {/* Split Row – Text + Top Right Image */}
      <div className="lg:max-w-[60%] mx-auto flex flex-col lg:flex-row items-start gap-6 mb-12">
        <div className="w-full lg:w-2/3 space-y-4">
          <h3 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-white">
            Complete Your Apartment Design Dubai With Lofty Ideas
          </h3>
          <p className="text-sm sm:text-base text-white font-play">
            Although you can choose from various styles that complement your apartment, we suggest that you go
            for <strong>apartment design Dubai</strong> decoration in this season that suits Dubai’s living environment,
            with loft vibes for flats.
          </p>
          <p className="text-sm sm:text-base text-white">
            Muse design takes us back to the turn of the century when wooden, rustic, and exposed steel furniture are undeniably elegant and still comfortable—renewing traditional styles with a modern twist, brave and stunning furniture from our stores & more.
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

      {/* Gallery Grid with Hover Effects */}
      <div className="lg:max-w-[60%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto mb-10   ">
        {galleryImages.map(({ src, link, title }, i) => (
          <a href={link} key={i} className="group block relative overflow-hidden rounded shadow">
            <Image
              src={src}
              alt={title}
              width={400}
              height={400}
              className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-sm sm:text-base font-conthrax text-center">
                {title}
              </p>
            </div>
          </a>
        ))}
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
            href="https://wa.me/971XXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-green-500 text-white font-play text-sm rounded w-full sm:w-auto text-center"
          >
            ✅ Request availability by WhatsApp
          </a>
          <a
            href="mailto:info@example.com"
            className="px-6 py-3 bg-[#caa193] text-white font-play text-sm rounded w-full sm:w-auto text-center"
          >
            ✉️ Request availability by E-mail
          </a>
        </div>
      </div>
    </section>
  );
};

export default DProjects;
