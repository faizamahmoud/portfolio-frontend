import React from "react";
import images from '../myimages/two.jpeg'
export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto bg-black flex px-5 py-2 md:flex-row flex-col items-center">
        <div className="lg:flex-grow ">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hey, I'm Faiza
            <br style={{color:'#708090'}} className="hidden lg:inline-block" />I love to build amazing
            apps.
          </h1>
          <p className="mb-8 text-white leading-relaxed">
          I’m a Full stack engineer with a background in Math and Finance. I prioritize creating shared success, personal growth while feeding my continuous curiosity in logic-based fields such as computer science. I’m a life-long learner focused on solving real-world problems.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Work With Me
            </a>
            <a
              href="#portfolio"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-sm lg:w-full md:w-1/2 w-5/6">
          <img style={{maxwidth: '50%', height: 'auto'}}
            className="profile object-cover object-center rounded"
            src={images}
            alt="me"
          />
        </div>
      </div>
    </section>
  );
}
