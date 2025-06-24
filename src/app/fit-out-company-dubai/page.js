import React from "react";
import Navbar from "../Componenets/Navbar";
import Hero from "./Components/Hero";
import Article from "./Components/Article";
import Footer from "../Componenets/Footer";




export default function home() {
  return (
    <div className="relative flex flex-col min-h-screen bg-[#121212]">
      
      <div>
        <Navbar />
      </div>
      <div>
        <Hero />
      </div>
      <div>
      <Article />
      </div>
      <Footer />
      
    </div>
  );
};


