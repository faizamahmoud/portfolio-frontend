// import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import images from '../myimages/two.jpeg'

export default function Skills() {
  return (
    <div className='bio'>
    <div id="about">
    <div className="container mx-auto flex px-5 py-2 md:flex-row flex-col items-center">
      <div className="lg:flex-grow ">
        <p className="intro"  style={{transitionDelay: '1ms', font:'16px'}}>
          Hey, My name is 
          <br style={{color:'#708090'}} className="hidden lg:inline-block" />I love to build amazing
          apps.
        </p>
        <p className="mb-8 text-white leading-relaxed">
        I’m a Full stack engineer with a background in Math and Finance. I prioritize creating shared success, personal growth while feeding my continuous curiosity in logic-based fields such as computer science. I’m a life-long learner focused on solving real-world problems.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        
      </div>
      <div>
        <img className="profile-img"
          src={images}
          alt="me"
        />
      </div>
    </div>
  </div>

    <div id="skills" >
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          {/* <ChipIcon className="w-10 inline-block mb-4" /> */}
          <h3 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            My tool box
          </h3>
        </div>
          <div className='row'>
            <div className='col s4'>
              <h5 class="white-text">LANGUAGES</h5>
              <ul className='text-gold'>
                <li>JavaScript</li>
                <li>Python</li>
                <li>HTML5/CSS3</li>
                <li>SQL</li>
                <li>ES6</li>
                </ul>
            </div>
            <div className='col s4'>
              <div class="col s4">
                <h5 class="white-text">LIBRARIES</h5>
                <ul className='text-gold'>
                  <li>jQuery</li>
                  <li>Bcrypt</li>
                  <li>Passport</li>
                  <li>Bootstrap</li>
                  <li>EJS</li>
                  <li>Axios</li>
                  </ul>
                  </div>
            </div>
            <div className='col s4'>
              <div class="col s4">
                <h5 class="white-text">FRAMEWORKS</h5>
                <ul className='text-gold'>
                <li>React</li>
                <li>Django</li>
                <li>Express</li>
                <li>Node</li>
                </ul>
                </div>
            </div>
          
          
            <div class="col s4">
              <h5 class="white-text">DATABASES</h5>
              <ul className='text-gold'>
                <li>PostreSQL</li>
                <li>MongoDB</li>
                <li>Mongoose</li>
              </ul>
            </div>
            <div class="col s4">
              <h5 class="white-text">OTHER</h5>
              <ul className='text-gold'>
                <li>RESTful Routing</li>
                
                <li>JSON</li>
                <li>Encryption</li>
                <li>Sessions</li>
              </ul>
            </div>
          </div>
        </div>
        
      </div>
      {/* <div className="link-text">
          <a
            href="/contact"
            id="text">
            Work With Me
          </a>
          <a
            href="/projects"
            id="text">
            See My Past Work
          </a>
        </div> */}
    </div>
    
    
  );
}
