import React from "react";

import CanonicalTag from "../Componenets/CanonicalTag"; // Fixed typo in "Componenets"
import Navbar from "../Componenets/Navbar";
import Hero from "./Components/Hero";
import WhatsAppButton from "../Componenets/WhatsAppButton";
import CallButton from "../Componenets/CallButton";
import ApId from "./Components/ApId";
import Footer from "../Componenets/Footer";

export default function Home() {
  return (
    <>
    
        <CanonicalTag />
   
      <div className="relative flex flex-col min-h-screen bg-[#121212]">
        <Navbar />
        <Hero />
        <WhatsAppButton />
        <CallButton />
        <ApId />
        <Footer />
      </div>
    </>
  );
}
