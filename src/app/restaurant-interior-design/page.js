import React from "react";
import CanonicalTag from "../Componenets/CanonicalTag";
import Navbar from "../Componenets/Navbar";
import Hero from "./Components/Hero";
import WhatsAppButton from "../Componenets/WhatsAppButton";
import CallButton from "../Componenets/CallButton";
import RiDd from "./Components/RiDd";
import Footer from "../Componenets/Footer";


export default function home() {
  return (
    <div className="relative flex flex-col min-h-screen bg-[#121212]">
       <CanonicalTag />
      <Navbar />
      <Hero />
      <WhatsAppButton />
      <CallButton />
      <RiDd />
      <Footer />

    </div>
  );
};