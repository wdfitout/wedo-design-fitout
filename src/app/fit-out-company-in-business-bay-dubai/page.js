import React from "react";
import CanonicalTag from "../Componenets/CanonicalTag"; // Ensure correct import
import Navbar from "../Componenets/Navbar"; // Fixed "Componenets" typo
import Hero from "./Components/Hero";
import FoBbd from "./Components/FoBbd";
import FobbdM from "./Components/FobbdM";
import Footer from "../Componenets/Footer";

export default function Home() { // Capitalized "home" → "Home"
  return (
    <>
     
        <CanonicalTag />
     
      <div className="relative flex flex-col min-h-screen bg-[#121212]">
        <Navbar />
        <Hero />
        <FoBbd />
        <FobbdM />
        <Footer />
      </div>
    </>
  );
}
