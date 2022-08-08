import React from "react";
import About from "./components/about/About";
import Developing from "./components/developing/Developing";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Contact from "./components/contact/Contact";
import Gallery from "./components/gallery/Gallery";

function App() {
  return (
    <div>
     <Navbar/>
     <Hero/>
     <Developing/>
     <About/>
     <Gallery/>
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;
