import React from "react";
import CanonicalTag from "@/app/Componenets/CanonicalTag";
import Navbar from "@/app/Componenets/Navbar";
import WhatsAppButton from "@/app/Componenets/WhatsAppButton";
import CallButton from "@/app/Componenets/CallButton";
import Hero from "./Components/Hero";
import SwPenthouse from "./Components/SwPenthouse";
import Footer from "@/app/Componenets/Footer";

export default function home() {
  return (
    <div className="relative flex flex-col min-h-screen bg-[#121212]">
   <CanonicalTag />
     <Navbar />
     <WhatsAppButton />
     <CallButton />
     <Hero />
     <SwPenthouse />
     <Footer />


    </div>
  );
};