'use client';

import Image from 'next/image';
import Link from 'next/link';

const ApId = () => {
  return (
    <section className="bg-black text-white px-6 sm:px-10 md:px-16 lg:px-28 xl:px-40 py-10 sm:py-16 font-sans">
      <div className="lg:max-w-[90%] mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Text Column */}
          <div className="w-full flex flex-col justify-start">
            <h2 className="text-lg sm:text-xl md:text-2xl font-conthrax tracking-widest text-[#caa193] pb-4 text-justify">
              Villa Interior Design in Jumeirah, Dubai
            </h2>

            <p className="text-sm sm:text-base leading-7 mb-4 font-play text-justify text-gray-200">
              <b className="text-[#caa193]">
                <a href="https://wedointerior.ae/" className="hover:underline">
                  WE DO Interior Design & Fit-Out
                </a>
              </b>{' '}
              delivers villa interior design in Jumeirah, Dubai, one of the emirate's oldest, most established residential communities. A large share of Jumeirah's villas are 15 to 30-plus years old, which changes the design brief, a majlis whose furniture and finishes haven't changed since handover, materials and lighting chosen decades ago, and room layouts styled for a different way of living than families expect today. That's why design, materials, joinery, and on-site execution all run under one contract with us, handled by our own in-house teams instead of four separate vendors you'd otherwise have to manage yourself.
            </p>

            {/* Key Facts Box */}
            <div className="bg-black border border-[#caa193] text-white rounded-lg p-6 mt-6 w-full font-play shadow-xl">
              <h3 className="font-conthrax text-base md:text-lg uppercase mb-4 text-[#caa193] tracking-wider border-b border-[#caa193]/30 pb-2">
                Key Facts
              </h3>

              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-gray-200">
                <li className="flex items-start gap-2">
                  <span className="text-[#caa193] font-bold">•</span>
                  <span>15+ years and 250+ completed interior design and fit-out projects across residential and commercial categories in Dubai</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#caa193] font-bold">•</span>
                  <span>ISO 45001:2018, ISO 14001:2015, and ISO 9001:2015 certified</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#caa193] font-bold">•</span>
                  <span>Luxury Style Awards 2026 winner</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#caa193] font-bold">•</span>
                  <span>In-house teams for design, civil works, decoration, and joinery — one roof, not four separate vendors</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#caa193] font-bold">•</span>
                  <span>Dedicated approvals team for DCD, Dubai Municipality, and private-developer sign-off (Emaar, Damac, and others)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#caa193] font-bold">•</span>
                  <span>Our own in-house joinery factory</span>
                </li>
                <li className="flex items-start gap-2 md:col-span-2">
                  <span className="text-[#caa193] font-bold">•</span>
                  <span>Serving Jumeirah 1, 2, 3, Umm Suqeim, Al Wasl, La Mer, City Walk, and Al Safa</span>
                </li>
              </ul>

              {/* WhatsApp CTA Bar */}
              <div className="mt-6 pt-4 border-t border-[#caa193]/30 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm">
                <span className="text-gray-300">
                  The consultation is complimentary once you confirm your project with us.
                </span>
                <a
                  href="https://wa.me/971588075603"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#caa193] text-black px-4 py-2 rounded font-semibold hover:bg-white transition-colors duration-200 whitespace-nowrap"
                >
                  WhatsApp +971 58 807 5603
                </a>
              </div>
            </div>

            {/* Who This Is For Box */}
            <div className="bg-black border border-[#caa193] text-white rounded-lg p-6 mt-6 w-full font-play shadow-xl space-y-4">
              <h3 className="font-conthrax text-base md:text-lg uppercase text-[#caa193] tracking-wider border-b border-[#caa193]/30 pb-2">
                Who This Is For
              </h3>

              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-gray-200">
                <li className="flex items-start gap-2">
                  <span className="text-[#caa193] font-bold">•</span>
                  <span>Owners of an established Jumeirah villa untouched for a decade or more</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#caa193] font-bold">•</span>
                  <span>New villa owners or tenants furnishing from a bare or semi-furnished handover</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#caa193] font-bold">•</span>
                  <span>Families needing a full-home redesign, room by room</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#caa193] font-bold">•</span>
                  <span>Overseas or absentee owners who need a process that runs without them on-site every week</span>
                </li>
              </ul>

              <div className="pt-4 border-t border-[#caa193]/30 text-xs sm:text-sm text-gray-300 leading-relaxed">
                Whichever category you're in, it's worth comparing villa interior designers Jumeirah has to offer before choosing who to book a walkthrough with.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApId;