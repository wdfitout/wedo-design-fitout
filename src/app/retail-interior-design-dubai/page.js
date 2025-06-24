import React from "react";
import Navbar from "../Componenets/Navbar";
import Hero from "./Components/Hero";
import WhatsAppButton from "../Componenets/WhatsAppButton";
import CallButton from "../Componenets/CallButton";
import RetailProjects from "./Components/RetailProjects";
import Footer from "../Componenets/Footer";

export default function Home() {
  return (
    <>
      
      <main className="relative flex flex-col min-h-screen bg-[#121212]">
        <Navbar />
        <Hero />
        <WhatsAppButton />
        <CallButton />
        <RetailProjects />
        <Footer />
      </main>
    </>
  );
}
