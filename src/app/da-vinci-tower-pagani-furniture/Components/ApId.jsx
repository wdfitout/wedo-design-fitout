'use client';
import Link from 'next/link';

const ApId = () => {
  const trustItems = [
    {
      value: 'TURNKEY',
      label: 'Furniture & Furnishing',
    },
    {
      value: 'CUSTOM',
      label: 'Custom Furniture',
    },
    {
      value: 'IN-HOUSE',
      label: 'Joinery',
    },
    {
      value: 'BUSINESS BAY',
      label: 'Da Vinci Specialists',
    },
  ];
const furnitureCategories = [
{
title: 'Living Room',
image: '/images/living-room-furniture.webp',
description:
'The living room sets the tone for the entire residence. We design seating layouts around circulation, views, and everyday comfort with custom sofas, lounge chairs, coffee tables, side tables, media units, and layered styling that feels complete rather than furnished piece by piece.',

items:
  'Custom Sofas · Lounge Seating · Coffee Tables · Side Tables · Media Units · Rugs · Decorative Styling',

},

{
title: 'Dining',
image: '/images/dining-furniture.webp',
description:
'Dining spaces are planned as places to gather, entertain, and connect. We create balanced compositions with statement dining tables, refined seating, and storage pieces proportioned specifically to the apartment layout.',

items:
  'Dining Tables · Dining Chairs · Sideboards · Storage Units · Decorative Lighting Coordination',

},

{
title: 'Bedrooms',
image: '/images/bedroom-furniture.webp',
description:
'Bedrooms are designed for comfort, calm, and tailored functionality. Each space combines custom beds, upholstered headboards, integrated storage, and furniture selections that create a complete private retreat.',

items:
  'Beds · Headboards · Nightstands · Dressers · Accent Seating · Bespoke Storage',

},

{
title: 'Walk-in Wardrobe & Dressing',
image: '/images/walkin-wardrobe.webp',
description:
'We design wardrobes as architectural spaces rather than simple storage. Bespoke joinery, dressing stations, integrated lighting, and carefully organised interiors maximise both functionality and luxury.',

items:
  'Custom Wardrobes · Dressing Joinery · Vanity Units · Integrated Storage · Display Shelving',

},

{
title: 'Kitchen Additions',
image: '/images/kitchen-joinery.webp',
description:
'Your residence already includes a premium fitted kitchen. Our role is to extend its functionality with complementary joinery, island enhancements, pantry organisation, and tailored seating solutions.',

items:
  'Kitchen Joinery · Islands · Bar Seating · Pantry Storage · Feature Storage Solutions',

},

{
title: 'Home Office & Study',
image: '/images/home-office.webp',
description:
'Workspaces are planned for focus without compromising the residential atmosphere. Custom desks, shelving systems, and integrated storage create a productive environment within the home.',

items:
  'Study Desks · Shelving · Built-ins · Storage Joinery · Workspace Planning',

},

{
title: 'Media & Lounge',
image: '/images/media-lounge.webp',
description:
'Designed for entertainment and relaxation, these spaces combine feature joinery with comfortable seating and integrated media solutions to create a refined lounge experience.',

items:
  'Media Walls · Soft Seating · Feature Joinery · Display Units · Entertainment Storage',

},

{
title: 'Outdoor & Terrace',
image: '/images/outdoor-terrace.webp',
description:
'Terraces become true extensions of the residence. We furnish outdoor areas with climate-conscious materials, relaxed seating layouts, and pieces selected for long-term durability.',

items:
  'Balcony Furniture · Outdoor Sofas · Dining Sets · Accent Tables · Outdoor Styling',

},
];
  const packages = [
    {
      title: '2-Bedroom Package',
      ideal: 'Moving in immediately',
      description:
        'A fully resolved residence — living, dining, both bedrooms and terrace furnished together.',
      included:
        'Living · Dining · Bedrooms · Terrace · Bespoke Joinery',
      timeline: '6–8 weeks',
      cta: "→ Enquire"
    },

    {
      title: '3-Bedroom Package',
      ideal: 'Families & entertaining',
      description:
        'Family living multiple seating zones,and home furniture that holds up to daily life',
      included:
        'Living · Dining · 3 Bedrooms · Storage Joinery · Styling',
      timeline: '7–9 weeks',
       cta: " → Enquire"
    },

    {
      title: '4-Bedroom Package',
      ideal: 'Full residence furnishing',
      description:
        'A larger canvas for custom furniture throughout, bespoke joinery, material specified to you.',
      included:
        'Whole Residence · Custom Joinery · Styling',
      timeline: '8–10 weeks',
      cta: "→ Enquire"
   
    },

    {
      title: 'Penthouse Package',
      ideal: 'Signature residence',
      description:
        'We design around the penthouse spaces with full creativity, nothing off-the-shelf.',
      included:
        'Bespoke Throughout · Full Execution',
      timeline: 'By scope',
  cta: "→ Enquire"
    
    },
  ];

  return (
    <section className="bg-black text-white px-6 sm:px-10 md:px-16 lg:px-28 xl:px-55 font-sans py-10">

      <div className="lg:max-w-[90%] mx-auto">

        {/* HERO */}

        <div>

          <h2 className="text-lg sm:text-2xl font-conthrax tracking-widest text-[#caa193] mb-5 uppercase">
            Furnishing & Furniture for Da Vinci Tower, Dubai
          </h2>

          <p className="text-sm sm:text-base leading-8 mb-4 font-play text-white/85">
            Da Vinci Tower residences are delivered with exceptional architecture
            and premium finishes — but furnishing transforms the apartment into
            a complete living experience.
         

         
          Your residence is handed over beautifully finished but unfurnished. We design, craft, and install the furniture that completes it: bespoke pieces, curated sourcing, and turnkey execution, delivered to one standard and one timeline. WE DO is a furnishing partner, not a furniture shop. For Da Vinci Tower owners we take care of the entire furnishing journey custom pieces made in our own joinery, considered sourcing, refined styling, and white-glove delivery and installation so you walk into a home that is complete, composed, and unmistakably yours from the first evening.

          </p>

        </div>



        {/* TRUST BAR */}

        <div className="rounded-xl border border-[#caa193]/15 bg-[#111] overflow-hidden">

          <div className="grid grid-cols-2 lg:grid-cols-4">

            {trustItems.map((item, index) => (

              <div
                key={index}
                className={`
                  px-4 py-4 text-center

                  ${
                    index !== trustItems.length - 1
                      ? 'lg:border-r border-[#caa193]/10'
                      : ''
                  }

                  ${
                    index < 2
                      ? 'border-b lg:border-b-0 border-[#caa193]/10'
                      : ''
                  }
                `}
              >

                <h3 className="font-conthrax text-[11px] tracking-[2px] text-[#caa193] uppercase">
                  {item.value}
                </h3>

                <p className="mt-1 text-[10px] text-white/60 uppercase font-play">
                  {item.label}
                </p>

              </div>

            ))}

          </div>

        </div>



        {/* SECTION 04 */}

        <section
          id="packages"
          className="mt-20"
        >

          <div className="mb-12">

            <p className="text-[#caa193] text-xs tracking-[3px] uppercase font-conthrax mb-4">
              Floor-plan Packages
            </p>

            <h2 className="text-2xl lg:text-4xl font-conthrax">
              Packages Built Around Your Layout
            </h2>

           
          </div>



          {/* 4 CARDS */}

<div className="w-full max-w-[1400px] mx-auto px-4">

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

    {packages.map((item, index) => (

      <div
        key={index}
        className="
          w-full
          rounded-2xl
          border border-[#caa193]/15
          bg-[#111]
          p-6
          hover:border-[#caa193]/35
          transition
        "
      >

        <div className="mb-5">

          <h3 className="font-conthrax text-[15px] text-[#caa193] mb-2">
            {item.title}
          </h3>

          <span className="text-[11px] text-white/40 uppercase">
            {item.size}
          </span>

        </div>

        <div className="space-y-4">

          <div>
            <p className="text-[10px] uppercase text-white/40 mb-1">
              Ideal For
            </p>
            <p className="font-play text-sm">
              {item.ideal}
            </p>
          </div>

          <p className="font-play text-sm text-white/70 leading-7">
            {item.description}
          </p>

          <div>
            <p className="text-[10px] uppercase text-white/40 mb-1">
              Included
            </p>
            <p className="font-play text-sm text-white/60">
              {item.included}
            </p>
          </div>

          <div className="border-t border-[#caa193]/10 pt-4">

            <p className="text-[10px] uppercase text-white/40">
              Timeline
            </p>
            <p className="font-play text-sm">
              {item.timeline}
            </p>

            <p className="font-play text-sm">
              {item.upgrade}
            </p>

          </div>

         <Link href="/contact-us" className=" inline-block pt-3 text-[#caa193] text-[11px] uppercase tracking-[2px] font-conthrax hover:opacity-80 transition " > {item.cta} </Link>

        </div>

      </div>

    ))}

  </div>
</div>

       

        </section>

      </div>

    </section>
    
  );
};

export default ApId;

