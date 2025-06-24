import React from "react";
import Navbar from "../Componenets/Navbar"; // Fixed "Componenets" typo
import Hero from "./Components/Hero";
import WhatsAppButton from "../Componenets/WhatsAppButton";
import CallButton from "../Componenets/CallButton";
import CliDd from "./Components/CliDd";
import Footer from "../Componenets/Footer";

export default function Home() { // Capitalized "home" → "Home"
  return (
    <>
      
        
     
      <div className="relative flex flex-col min-h-screen bg-[#121212]">
        <Navbar />
        <Hero />
        <WhatsAppButton />
        <CallButton />
        <CliDd />
        <Footer />
      </div>
    </>
  );
}
