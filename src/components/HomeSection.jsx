import React, { useEffect } from "react";
import "../styles/homeSection.css";


const HomeSection = () => {
  useEffect(()=>{
    document.querySelector('.home-links').classList.add('show');
    // document.querySelector('.home-boxes').classList.add('show');
  })
  return (
    <div id="home"  className="home">
      <div className="home-circle">        
      </div>
      <div className="home-section">
        <div className="home-content">
          <div className="left-content">
            {/* <div className="home-boxes">
              <div className="home-box"></div>
              <div className="home-box"></div>
              <div className="home-box"></div>
              <div className="home-box"></div>
            </div> */}
             <span class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white "><span className="text-red-500">ex</span> Media</span>

            <h1>GRAPHICS TRANSFORMING BUSINESS STRATEGY
            </h1>
            <p>Since 2006, EXMEDIA has been a trailblazing advertising agency.</p>
          </div>
          <div className="home-links">
            <div className="alink-box">
            <a href="#about" className="alinks">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-smile"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                <line x1="9" x2="9.01" y1="9" y2="9" />
                <line x1="15" x2="15.01" y1="9" y2="9" />
              </svg>
              <p>about</p>
            </a>
            </div>
           
            <div className="alink-box">
            <a href="#skill" className="alinks">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-user"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              <p>Skill</p>
            </a>
            </div>
            <div className="alink-box">
            <a href="#service" className="alinks">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-briefcase"
              >
                <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
              </svg>
              <p>services</p>
            </a>
            </div>
            <div className="alink-box">
            <a href="#project" className="alinks">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-file"
              >
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                <polyline points="14 2 14 8 20 8" />
              </svg>
              <p>companies</p>
            </a>
            </div>
            <div className="alink-box">
            <a href="#client" className="alinks">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-users-round"
              >
                <path d="M18 21a8 8 0 0 0-16 0" />
                <circle cx="10" cy="8" r="5" />
                <path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3" />
              </svg>
              <p>clients</p>
            </a>
            </div>
            <div className="alink-box">          
            <a href="#contact" className="alinks">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-notebook-tabs"
              >
                <path d="M2 6h4" />
                <path d="M2 10h4" />
                <path d="M2 14h4" />
                <path d="M2 18h4" />
                <rect width="16" height="20" x="4" y="2" rx="2" />
                <path d="M15 2v20" />
                <path d="M15 7h5" />
                <path d="M15 12h5" />
                <path d="M15 17h5" />
              </svg>
              <p>contacts</p>
            </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
