import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="text-gray-400  body-font">
      <div className="tp-3 projects container">
      <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-black">
        Projects
      </h1>
      <div className="wrapper tp-3 row">
        {projects.map((project) => (
            <div className="wrap">
              <img src={project.image} alt="screenshot of codenames project on macbook" className="image" />
              <div className="overlay2">
                <div className="desc"><h3>{project.title}</h3><p className="abt">{project.description}</p>
                  <p className="tech">Bootstrap, Express, JavaScript, Node.js, Socket.io</p>
                  <p>
                    <a href="http://codenames-ga.herokuapp.com/" target="_blank" rel="noopener noreferrer">Live Site</a> | <a href="https://github.com/essleeung/codenames" target="_blank" rel="noopener noreferrer">Code</a>
                  </p>
                </div>
              </div>
            </div>
        ))}

          </div>
      </div>
    </section>
  );
}


// <div className="tp-3 projects container">
// {projects.map((project) => (
//   <div className="wrapper tp-3 row">
//     <div className="wrap">
//       <img src={project.image} alt="screenshot of codenames project on macbook" className="image" />
//       <div className="overlay2">
//         <div className="desc"><h3>{project.title}</h3><p className="abt">{project.description}</p>
//           <p className="tech">Bootstrap, Express, JavaScript, Node.js, Socket.io</p></br>
//         <p>
//           <a href="http://codenames-ga.herokuapp.com/" target="_blank" rel="noopener noreferrer">Live Site</a> | <a href="https://github.com/essleeung/codenames" target="_blank" rel="noopener noreferrer">Code</a>
//         </p>
//       </div>
//     </div>
//   </div>





// // <a
// href={project.link}
// key={project.image}
// className="sm:w-1/2 w-50 p-4">
// <div className="flex relative">
//   <img
//     alt="gallery"
//     className="absolute inset-0 w-full h-full object-cover object-center"
//     src={project.image}
//   />
//   <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
//     <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
//       {project.subtitle}
//     </h2>
//     <h1 className="title-font text-lg font-medium text-white mb-3">
//       {project.title}
//     </h1>
//     <p className="leading-relaxed">{project.description}</p>
//   </div>
// </div>
// </a>