
import React from "react";
import About from "../src/components/About";
import Contact from "../src/components/Contact";
import Navbar from "../src/components/NavBar";
import Projects from "../src/components/Projects";
import Skills from "../src/components/Skills";
// import { Route, Routes } from "react-router-dom";

export default function App() {
  // const URL = "https://faiza--portfolio.herokuapp.com/";



return (
    <main>
      <Navbar />
      <About />
      <Projects />
      <Skills />
      
      <Contact />
    </main>
    
  )
}