import Navbar from "../Componenets/Navbar";
import CallButton from "../Componenets/CallButton";
import WhatsAppButton from "../Componenets/WhatsAppButton";
import VHeroSection from "./VHeroSection"

import Footer from "../Componenets/Footer";

export default function ProjectsPage() {
  return (
    <main className="relative flex flex-col min-h-screen bg-[#121212]">
      {/* Sticky Top Navbar */}
      <Navbar className="absolute top-0 z-10 w-screen" />

      {/* Hero Image Section */}
      <VHeroSection />

      {/* Floating Action Buttons */}
      <CallButton />
      <WhatsAppButton />

     

      {/* Footer Section */}
      <Footer />
    </main>
  );
}
