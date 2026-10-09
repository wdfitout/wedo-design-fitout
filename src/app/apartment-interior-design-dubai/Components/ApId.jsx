
'use client';

import Link from 'next/link';

const ApId = () => {
  const facts = [
    ['Service', 'Turnkey apartment design & fit-out'],
    
    ['Apartment types', <>Studios, 1–3 bedroom apartments, <a href="/penthouse-projects" className="text-[#caa193] underline hover:opacity-80">penthouses</a></>],
    ['Experience', 'Since 2015 · 250+ projects'],
    ['In-house delivery', <>Designers, civil works, decoration & <a href="/joinery-company-dubai" className="text-[#caa193] underline hover:opacity-80">own joinery factory</a></>],
    ['Design deliverables', 'Mood boards, 3D visualisation, VR/AR walkthroughs'],
    ['Approvals', 'Building NOCs, developer & authority approvals, as applicable'],
    ['Certifications', 'ISO 9001, ISO 14001 & ISO 45001'],
    ['Award', <a href="/ii-primo-penthouse" className="text-[#caa193] underline hover:opacity-80">Luxury Lifestyle Awards 2026</a>],
    [
      'Featured projects',
      'Royal Atlantis, Marina Gate 2, Acacia Dubai Hills, Marina Vista, Palm Jumeirah & Business Bay',
    ],
    
[
  'Areas served',
  <>
    <a href="/apartment-interior-design-downtown-dubai" className="text-[#caa193] underline hover:opacity-80">Downtown Dubai</a>,{' '}
    <a href="/apartment-interior-design-business-bay" className="text-[#caa193] underline hover:opacity-80">Business Bay</a>,{' '}
    <a href="/best-interior-design-company-in-dubai-marina" className="text-[#caa193] underline hover:opacity-80">Dubai Marina</a>,{' '}
    <a href="/interior-design-companies-palm-jumeirah-dubai" className="text-[#caa193] underline hover:opacity-80">Palm Jumeirah</a> &{' '}
    <a href="/interior-design-companies-near-dubai-hills" className="text-[#caa193] underline hover:opacity-80">Dubai Hills Estate</a>
  </>,
],
  ];

  return (
    <section className="bg-black text-white px-6 sm:px-10 md:px-16 lg:px-28 xl:px-40 py-10 font-sans">
      <div className="mx-auto w-full">
        {/* Existing Text Section */}
        <div className="w-full">
          <h2 className="text-sm sm:text-xl md:text-xl font-conthrax text-[#caa193] py-2">
            Apartment Interior Design Dubai by Experts Who Know Style and Space
          </h2>

          <p className="text-sm sm:text-base leading-7 mb-4 font-play">
            Apartment interior design Dubai is not just about aesthetics — it’s
            about creating smart, functional, and emotionally resonant spaces
            that reflect how people truly live in this city.{' '}
            <strong>At WE DO Interior Design & Fit Out,</strong> our team of
            interior architects, designers, and fit-out specialists brings
            extensive experience transforming Dubai apartments into exceptional,
            livable spaces. We understand the unique structural layouts,
            lighting limitations, and lifestyle expectations of Dubai apartments
            — from compact studios in JVC to{' '}
            <Link
              href="/palm-jumeirah-2-bedroom-penthouse"
              className="text-[#caa193] font-semibold hover:underline"
            >
              luxurious penthouses in Palm Jumeirah
            </Link>
            . Every design reflects our commitment to thoughtful planning,
            quality execution, and timeless value.
          </p>

          <p className="text-sm sm:text-base leading-7 mb-4 font-play">
            Whether you are upgrading for personal comfort or increasing rental
            value, our end-to-end service helps make your apartment a reflection
            of elegance, efficiency, and Dubai’s modern lifestyle.{' '}
            <Link
              href="/apartment-projects"
              className="text-[#caa193] font-semibold hover:underline"
            >
              See our completed apartment projects in Dubai
            </Link>
            .
          </p>

          <div className="bg-[#caa193] text-white text-xs sm:text-sm font-play rounded px-4 py-3 mt-5 w-fit">
            11+ Years of Experience
          </div>
        </div>

        {/* Compact Key Facts Table */}
        <div className="mt-8">
          <h3 className="text-lg sm:text-xl font-conthrax text-[#caa193] mb-4">
            Apartment Interior Design — Key Facts
          </h3>

          <div className="font-play grid grid-cols-1 sm:grid-cols-2 gap-x-8">
            {facts.map(([label, value]) => (
              <div
                key={label}
                className="grid grid-cols-[115px_1fr] sm:grid-cols-[125px_1fr] gap-3 py-2.5 border-b border-white/10"
              >
                <span className="text-xs sm:text-sm font-semibold text-[#caa193]">
                  {label}
                </span>
                <span className="text-xs sm:text-sm text-white/80 leading-5">
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApId;