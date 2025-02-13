import React from "react";
import Navbar from "@/app/Componenets/Navbar";
import Hero from "./Components/Hero";
import WhatsAppButton from "@/app/Componenets/WhatsAppButton";
import CallButton from "@/app/Componenets/CallButton";
import DhId from "./Components/DhId";
import DhidM from "./Components/DhidM";
import Footer from "@/app/Componenets/Footer";


export default function home() {
  return (
    <div className="relative flex flex-col min-h-screen bg-[#121212]">
      <Navbar />
      <Hero />
      <WhatsAppButton />
      <CallButton />
      <DhId/>
      <DhidM />
      <Footer />

    </div>
  );
};