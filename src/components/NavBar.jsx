import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";
import { NavLink } from "react-router-dom";
import { HiHome } from "react-icons/hi";


export default function Navbar() {
  return (
    <header>

      <nav id="nav">
        <div class='left'>

          <NavLink to="/" activeStyle>
            <HiHome />
          </NavLink>
        </div>
        <div class='right'>
          <NavLink to="/projects" >portfolio</NavLink>
          <NavLink to="/skills" >about</NavLink>
          <NavLink to="/contact">contact</NavLink>
          <NavLink to="https://docs.google.com/document/d/1XWXb_X35PXfCBUid5Mh1mAgbQyS-XKEu/edit?usp=sharing&ouid=105660496909473529904&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer" className="resume-btn">resume</NavLink>
        </div>
      </nav>
    </header>
  );
}
