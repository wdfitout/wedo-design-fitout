"use client";

import Link from 'next/link';

const FobbdM = () => {
  return (
    <div className="flex items-center justify-center space-x-4">
      {/* First Button */}
      <Link
        href="/commercial-interior-design-dubai"
        className="bg-[#c38d90] text-white font-semibold py-4 px-6 border-2 border-black rounded-md hover:bg-white hover:text-black transition duration-300"
      >
        All Office Projects
      </Link>

      {/* Second Button */}
      <Link
        href="/restaurant-interior-design-dubai"
        className="bg-[#c38d90] text-white font-semibold py-4 px-6 border-2 border-black rounded-md hover:bg-white hover:text-black transition duration-300"
      >
        All Restaurant Projects
      </Link>
    </div>
  );
};

export default FobbdM;

