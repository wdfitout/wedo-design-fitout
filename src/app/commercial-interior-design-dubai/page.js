import React from "react";
import Navbar from "../Componenets/Navbar"; // Fixed "Componenets" typo
import WhatsAppButton from "../Componenets/WhatsAppButton";
import CallButton from "../Componenets/CallButton";
import Hero from "./Components/Hero";
import CommercialProjects from "./Components/CommercialProjects";
import Footer from "../Componenets/Footer";

export default function Home() { // Capitalized "home" → "Home"
  return (
    <>
  
      <div className="relative flex flex-col min-h-screen bg-[#121212]">
        <Navbar />
        <CallButton />
        <WhatsAppButton />
        <Hero />

        <div className="flex flex-wrap justify-center">
          <CommercialProjects />
        </div>

          <CommercialProjects />
      
        <Footer />
      </div>
    </>
  );
}
