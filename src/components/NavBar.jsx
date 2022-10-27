import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";
import { Link } from "react-router-dom";

import { HiHome } from "react-icons/hi";

export default function Navbar() {
  return (
    <header className="md:sticky top-0 z-10">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <Link className="title-font font-medium text-white mb-4 md:mb-0">
      <a href="/#about" className="mt-5  hover:text-gold ">
          <HiHome />
          </a>
        </Link>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	text-gold flex flex-wrap items-center text-base justify-center">
        {/* <div className="fadedown-enter-done" style={{transitiondelay: '400ms'}}></div> */}
          <Link className="resume-button mr-5" href="https://docs.google.com/document/d/1XWXb_X35PXfCBUid5Mh1mAgbQyS-XKEu/edit?usp=sharing&ouid=105660496909473529904&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer">resume</Link>
          
          <Link to="#projects" className="mr-5 hover:text-gold">
            portfolio
          </Link>
          <Link href="#skills" className="mr-5  hover:text-gold">
            skills
          </Link>
        </nav>
        <div>
        <Link
          href="#contact"
          className="inline-flex items-center text-gold bg-gold-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
          contact
          {/* <ArrowRightIcon className="w-4 h-4 ml-1" /> */}
          {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
</svg> */}
        </Link>
        </div>
        </div>
        
      {/* </div> */}
    </header>
  );
}
