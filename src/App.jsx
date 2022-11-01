
import React from "react";
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Socials from "./components/Socials";
import Contact from "../src/components/Contact";
import Navbar from "../src/components/NavBar";
import Projects from "../src/components/Projects";
import Skills from "../src/components/Skills";
import Home from "./components/Home";
// import { Route, Routes } from "react-router-dom";

export default function App() {
  // const URL = "https://faiza--portfolio.herokuapp.com/";



return (
  <section>
  <Navbar /> 
  <Socials />
  <Routes>
    
    {/* <main> */}
      
      {/* <About />
      <Projects />
      <Skills />
      <Contact /> */}
    
    
    <Route path='/' element={<Home />} />
    {/* <Route path='/about' element={<About/>} /> */}
    <Route path='/contact' element={<Contact/>} />
    <Route path='/projects' element={<Projects/>} />
    <Route path='/skills' element={<Skills/>} />
    {/* </main> */}
    {/* <Route path='/sign-up' element={<SignUp/>} /> */}
</Routes>
</section>





  )
}