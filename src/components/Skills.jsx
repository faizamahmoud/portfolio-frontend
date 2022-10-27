// import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";


export default function Skills() {
  return (
    <section id="skills" >
      <div className="container bg-gray px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          {/* <ChipIcon className="w-10 inline-block mb-4" /> */}
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Skills &amp; Technologies
          </h1>
         
        </div>
        <div>

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
        <div class="row center"></div>
      </div>
    </section>
  );
}
