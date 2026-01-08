import Navbar from "./Componenets/Navbar";
import CallButton from "./Componenets/CallButton";
import WhatsAppButton from "./Componenets/WhatsAppButton";
import HeroSection from "./Componenets/HeroSection";
import AboutSection from "./Componenets/AboutSection";
import Projects from "./Componenets/Projects";
import DesignProjects from "./Componenets/DesignTypes";
import Features from "./Componenets/Features";
import Services from "./Componenets/Services";
import Blogs from "./Componenets/Blogs";
import Testimonials from "./Componenets/Testimonials";
import OurAuthorities from "./Componenets/OurAuthorities";
import OurClients from "./Componenets/OurClients";
import ContactForm from "./Componenets/ContactForm";
import LocationMap from "./Componenets/LocationMap";
import Footer from "./Componenets/Footer";



export default function Home() {
  return (
    <>
    <main className="relative flex flex-col min-h-screen bg-[#121212]">
        <Navbar className="absolute top-0 z-10 w-screen" />
        <CallButton />
        <WhatsAppButton />
        <HeroSection />
        <AboutSection />
        <Projects />
        <DesignProjects />
        <Features />
        <Services />
        <Blogs />
        <Testimonials />
         <div className="bg-[#f5ede5]">
          <OurAuthorities />
          <OurClients />
          <ContactForm />
          <LocationMap />
          <Footer />

         </div>

    </main>

    </>
  );
}