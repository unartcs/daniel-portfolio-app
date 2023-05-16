import React, { useEffect, useRef } from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

function Home() {
  return (
    <div className="home-wrapper">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact/>
    </div>
  );
}

export default Home;
