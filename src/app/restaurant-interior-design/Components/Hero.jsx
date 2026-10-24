import Image from 'next/image';
import Link from 'next/link';

/**
 * WE DO - Restaurant Interior Design Dubai
 * Hero only; all remaining service-page sections live in Body.jsx.
 * font-conthrax and font-play are configured globally.
 */
export default function Hero() {
  return (
    <section
      aria-labelledby="restaurant-hero-title"
      className="relative h-[300px] w-full overflow-hidden sm:h-[400px] md:h-[500px] lg:h-[600px]"
    >
      <Image
        src="/images/ht-1.png"
        alt="Restaurant interior design and fit-out in Dubai by WE DO"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      <div className="absolute bottom-6 left-2 z-10 max-w-[90%] rounded-lg bg-black/50 p-4 text-white sm:left-4 sm:max-w-[min(92%,1000px)]">
        <h1
          id="restaurant-hero-title"
          className="mb-2 font-conthrax text-lg leading-tight sm:text-2xl lg:text-4xl"
        >
          Restaurant Interior Design Dubai
        </h1>

        <p className="mb-3 font-play text-base leading-snug sm:text-xl lg:text-3xl">
          Restaurant Fit-Out Services in Dubai
        </p>

        <div className="flex flex-wrap gap-3 sm:gap-4">
          <Link
            href="/contact-us"
            className="inline-flex min-h-10 items-center justify-center rounded bg-[#caa193] px-3 py-2 text-xs font-semibold uppercase text-black transition-colors duration-200 hover:bg-[#f5ede5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Send an Inquiry
          </Link>
          <Link
            href="/restaurant-projects"
            className="inline-flex min-h-10 items-center justify-center rounded border border-[#caa193] px-3 py-2 text-xs font-semibold uppercase text-white transition-colors duration-200 hover:bg-[#caa193] hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Our Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
