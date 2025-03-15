import React from "react";
import CanonicalTag from "@/app/Componenets/CanonicalTag";
import Navbar from "@/app/Componenets/Navbar";
import Hero from "./Components/Hero";
import CallButton from "@/app/Componenets/CallButton";
import WhatsAppButton from "@/app/Componenets/WhatsAppButton";
import BeachFront from "./Components/BeachFront";
import Footer from "@/app/Componenets/Footer";

export default function home() {
  return (
    <div className="relative flex flex-col min-h-screen bg-[#121212]">
   <CanonicalTag />
    <Navbar />
    <Hero />
    <CallButton />
    <WhatsAppButton />
    <BeachFront />
    <Footer />
    </div>
  );
};