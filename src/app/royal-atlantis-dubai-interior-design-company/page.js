import React from "react";
import Navbar from "../Componenets/Navbar";
import Hero from "./Components/Hero";
import WhatsAppButton from "../Componenets/WhatsAppButton";
import CallButton from "../Componenets/CallButton";
import AtrId from "./Components/AtrId";
import AtrdM from "./Components/AtridM";
import Footer from "../Componenets/Footer";

export default function Home() {
  return (
    <>
   
      <main className="relative flex flex-col min-h-screen bg-[#121212]">
        <Navbar />
        <Hero />
        <WhatsAppButton />
        <CallButton />
        <AtrId />
        <AtrdM />
        <Footer />
      </main>
    </>
  );
}
