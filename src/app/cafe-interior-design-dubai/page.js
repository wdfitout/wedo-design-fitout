import React from "react";
import Navbar from "@/app/Componenets/Navbar";
import Hero from "./Components/Hero";
import WhatsAppButton from "@/app/Componenets/WhatsAppButton";
import CallButton from "@/app/Componenets/CallButton";
import CiDd from "./Components/CiDd";
import Footer from "@/app/Componenets/Footer";


export default function home() {
  return (
    <div className="relative flex flex-col min-h-screen bg-[#121212]">
      <Navbar />
      <Hero />
      <WhatsAppButton />
      <CallButton />
      <CiDd />
      <Footer />

    </div>
  );
};