import React from "react";
import Navbar from "../Componenets/Navbar";
import Hero from "./Components/Hero";
import WhatsAppButton from "../Componenets/WhatsAppButton";
import CallButton from "../Componenets/CallButton";
import BsId from "./Components/BsId";
import Footer from "../Componenets/Footer";

export default function Home() {
  return (
    <>
     
      <div className="relative flex flex-col min-h-screen bg-[#121212]">
        <Navbar />
        <Hero />
        <WhatsAppButton />
        <CallButton />
        <BsId />
        <Footer />
      </div>
    </>
  );
}
