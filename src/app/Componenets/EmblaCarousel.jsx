"use client";

import React from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react"; // Note the import without curly braces
import Autoplay from "embla-carousel-autoplay";

export function EmblaCarousel() {
  const options = {
    loop: true,
    draggable: true,
    threshold: 5,
  };

  const [emblaRef] = useEmblaCarousel(options, [Autoplay({ delay: 4000 })]);

  return (
    <div className="embla w-full h-120 overflow-hidden" ref={emblaRef}>
    <div className="embla__container flex h-full">
      
    <div className="embla__slide flex items-center justify-center">
        <Image
          src="/images/xaima (13).webp"
          alt="xaima restaurant interior dining table with 4 chairs"
          layout="responsive"
          width={1600}
          height={600}
          className="w-full h-auto"
        />
      </div>

      <div className="embla__slide flex items-center justify-center">
        <Image
          src="/images/luxury-apartment-design-dubai-marina.jpg"
          alt="luxury apartment interior design in Dubai Marina"
          layout="responsive"
          width={1600}
          height={600}
          className="w-full h-auto"
        />
      </div>

      <div className="embla__slide flex items-center justify-center">
        <Image
          src="/images/vogue (7).webp"
          alt="vogue cafe interior design in Dubai"
          layout="responsive"
          width={1600}
          height={600}
          className="w-full h-auto"
        />
      </div>

      <div className="embla__slide flex items-center justify-center">
        <Image
          src="/images/pjapt (1).webp"
          alt="palm jumeirah apartment living room interior design top view"
          layout="responsive"
          width={1600}
          height={600}
          className="w-full h-auto"
        />
      </div>

      <div className="embla__slide flex items-center justify-center">
        <Image
          src="/images/dmapt (31).webp"
          alt="Dubai marina apartment large size living room interior design"
          layout="responsive"
          width={1600}
          height={600}
          className="w-full h-auto"
        />
      </div>

      <div className="embla__slide flex items-center justify-center">
        <Image
          src="/images/carnistore (6).webp"
          alt="carnistore dining area interior design"
          layout="responsive"
          width={1600}
          height={600}
          className="w-full h-auto"
        />
      </div>

      <div className="embla__slide flex items-center justify-center">
        <Image
          src="/images/ATRD (26).webp"
          alt="atlantis the royal living room interior design with open kitchen and dining"
          layout="responsive"
          width={1600}
          height={600}
          className="w-full h-auto"
        />
      </div>

      <div className="embla__slide flex items-center justify-center">
        <Image
          src="/images/nestfinder (12).webp"
          alt="nest finder working area interior design in Al Safa"
          layout="responsive"
          width={1600}
          height={600}
          className="w-full h-auto"
        />
      </div>

      <div className="embla__slide flex items-center justify-center">
        <Image
          src="/images/code8 (19).webp"
          alt="code8 cafe dining interior design in barsha heights"
          layout="responsive"
          width={1600}
          height={600}
          className="w-full h-auto"
        />
      </div>

      <div className="embla__slide flex items-center justify-center">
        <Image
          src="/images/alwasl (8).webp"
          alt="al wasl apartment sofa sitting"
          layout="responsive"
          width={1600}
          height={600}
          className="w-full h-auto"
        />
      </div>

      <div className="embla__slide flex items-center justify-center">
        <Image
          src="/images/jumeirahvilla (9).webp"
          alt="jumeirah villa living room interior design"
          layout="responsive"
          width={1600}
          height={600}
          className="w-full h-auto"
        />
      </div>

      <div className="embla__slide flex items-center justify-center">
        <Image
          src="/images/majanvilla (2).webp"
          alt="Majan Villa Sofa sitting with dining area"
          layout="responsive"
          width={1600}
          height={600}
          className="w-full h-auto"
        />
      </div>

      <div className="embla__slide flex items-center justify-center">
        <Image
          src="/images/manalajaj (12).webp"
          alt="manal ajaj boutique interior design in Umm Suqeim First "
          layout="responsive"
          width={1600}
          height={600}
          className="w-full h-auto"
        />
      </div>
      {/* slides */}
    </div>
  </div>
  
  );
}


export default EmblaCarousel;
