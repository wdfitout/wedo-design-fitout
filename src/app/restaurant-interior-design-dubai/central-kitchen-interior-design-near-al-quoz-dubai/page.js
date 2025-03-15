import React from "react";
import CanonicalTag from "@/app/Componenets/CanonicalTag";
import Navbar from "@/app/Componenets/Navbar";
import CallButton from "@/app/Componenets/CallButton";
import WhatsAppButton from "@/app/Componenets/WhatsAppButton";
import Hero from "./Components/Hero";
import CarniStore from "./Components/CarniStore";
import Footer from "@/app/Componenets/Footer";

export default function home() {
  return (
    <div className="relative flex flex-col min-h-screen bg-[#121212]">
     <CanonicalTag />
      <Navbar />
      <CallButton />
      <WhatsAppButton />
      <Hero />
      <CarniStore />
      <Footer />
    </div>
  );
};