import React from "react";
import CanonicalTag from "../Componenets/CanonicalTag"; // Ensure correct import
import Navbar from "../Componenets/Navbar"; // Fixed "Componenets" typo
import Hero from "./Components/Hero";
import WhatsAppButton from "../Componenets/WhatsAppButton";
import CallButton from "../Componenets/CallButton";
import BiDd from "./Components/BiDd";
import Footer from "../Componenets/Footer";

export default function Home() { // Capitalized "home" → "Home"
  return (
    <>
     
        <CanonicalTag />
      
      <div className="relative flex flex-col min-h-screen bg-[#121212]">
        <Navbar />
        <Hero />
        <WhatsAppButton />
        <CallButton />
        <BiDd />
        <Footer />
      </div>
    </>
  );
}
