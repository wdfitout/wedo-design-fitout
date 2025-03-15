import React from "react";
import CanonicalTag from "@/app/Componenets/CanonicalTag";
import Navbar from "@/app/Componenets/Navbar";
import Hero from "./Components/Hero";
import WhatsAppButton from "@/app/Componenets/WhatsAppButton";
import CallButton from "@/app/Componenets/CallButton";
import Atlantis from "./Components/Atlantis";
import Footer from "@/app/Componenets/Footer";


export default function home() {
  return (
    <div className="relative flex flex-col min-h-screen bg-[#121212]">
      <CanonicalTag />
      <Navbar />
      <Hero />
      <WhatsAppButton />
      <CallButton />
      <Atlantis />
      <Footer />

    </div>
  );
};