import Head from "next/head";
import CanonicalTag from "./Componenets/CanonicalTag";
import Navbar from "./Componenets/Navbar";
import CallButton from "./Componenets/CallButton";
import WhatsAppButton from "./Componenets/WhatsAppButton";
import EmblaCarousel from "./Componenets/EmblaCarousel";
import AboutSection from "./Componenets/AboutSection";
import Projects from "./Componenets/Projects";
import GetinContact from "./Componenets/GetinContact";
import Features from "./Componenets/Features";
import Areas from "./Componenets/Areas";
import Services from "./Componenets/Services";
import OurAuthorities from "./Componenets/OurAuthorities";
import EmblaCarousel2 from "./Componenets/EmblaCarousel2";
import OurClients from "./Componenets/OurClients";
import EmblaCarousel3 from "./Componenets/EmblaCarousel3";
import ContactUs from "./Componenets/ContactUs";
import Footer from "./Componenets/Footer";

export default function Home() {
  return (
    <>
          <Head>
        <title>Interior Design Services | Luxury Fit-Out Solutions in Dubai</title>
        <meta name="description" content="Explore our interior design and fit-out services in Dubai. From luxury residential interiors to commercial fit-outs, we create stunning spaces tailored to your needs." />
        
        {/* ✅ Open Graph Tags for Social Media */}
        <meta property="og:title" content="Interior Design Services | Luxury Fit-Out Solutions in Dubai" />
        <meta property="og:description" content="Explore our interior design and fit-out services in Dubai. From luxury residential interiors to commercial fit-outs, we create stunning spaces tailored to your needs." />
        <meta property="og:image" content="https://www.wedointerior.ae/images/seo-thumbnail.jpg" />
        <meta property="og:url" content="https://www.wedointerior.ae/" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <CanonicalTag />
      <main className="relative flex flex-col min-h-screen bg-[#121212]">
        <Navbar className="absolute top-0 z-10 w-screen" />
        <EmblaCarousel />
        <CallButton />
        <WhatsAppButton />
        <AboutSection />
        <div className="flex flex-wrap justify-center">
          <Projects />
        </div>
        <div className="flex flex-wrap justify-center">
          <GetinContact />
        </div>
        <div className="flex flex-wrap justify-center">
          <Features />
        </div>
        <div className="flex flex-wrap justify-center">
          <Areas />
        </div>
        <div className="flex flex-wrap justify-center mt-6">
          <Services />
        </div>
        <OurAuthorities />
        <EmblaCarousel2 />
        <OurClients />
        <EmblaCarousel3 />
        <ContactUs />
        <Footer />
      </main>
    </>
  );
}
