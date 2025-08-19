import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Thank You | WE DO Interior Design Dubai",
  description: "Thanks for getting in touch. We’ll respond shortly.",
};

export default function ThankYouPage() {
  return (
    <main className="bg-[#f5ede5] min-h-[70vh] flex items-center">
      <section className="max-w-3xl mx-auto px-6 py-16 text-center text-black">
        <div className="flex flex-col items-center">
          <Image
            src="/images/sec-dvd.webp"
            alt="Divider"
            width={320}
            height={80}
            className="h-auto w-48 sm:w-64"
          />
          <h1 className="mt-10 text-2xl sm:text-3xl font-semibold tracking-wide">
            Thank You
          </h1>
          <p className="mt-4 text-sm sm:text-base leading-7">
            Your message has been sent to{" "}
            <span className="font-medium">WE DO Interior Design &amp; Fit-Out</span>.
            We’ll get back to you shortly.
          </p>

          <Link
            href="/"
            className="mt-8 inline-block px-6 py-2 border border-[#a16848] text-[#a16848] hover:bg-[#a16848] hover:text-white transition"
          >
            Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
}
