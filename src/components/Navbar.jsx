import React, { useEffect, useState } from "react";
import "../styles/navbar.css";
import { Link as ScrollLink } from "react-scroll";
import img1 from '../assets/exlogo.png'

const Navbar = () => {

  const [showNavbar, setShowNavbar] = useState(false);
  const [scrollingUp, setScrollingUp] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    setScrollingUp(currentScrollY < window.scrollY);

    setShowNavbar(window.scrollY > window.innerHeight);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div>
      <nav
        className={`${ showNavbar ? "visible" : "" }  ${scrollingUp ? "up" : ""}`}
        
      >
        <a href="#home" className="logo">
          <img className="w-[5rem]" src={img1} alt="" />
        </a>
        <div className="nav-links">
          <ScrollLink to="about"  
          className="nav-link"
          spy={true}
          offset={-20}
          smooth={true}
          ease="easeInOut"
          duration={600}
          >
            <div >
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
            </div>
            <div className="nav-link-title">About</div>
          </ScrollLink>
          <a href="#service" className="nav-link">
            <div>
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
            </div>
            <div className="nav-link-title">Services</div>
          </a>
          <a href="#skill" className="nav-link">
            <div>
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
            </div>
            <div className="nav-link-title">Team</div>

          </a>
          <a href="#project" className="nav-link">
            <div>
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
            </div>
            <div className="nav-link-title">Project</div>
          </a>
          <a href="#client" className="nav-link">
            <div>
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
            </div>
            <div className="nav-link-title">Clients</div>
          </a>
          <a href="#contact" className="nav-link">
            <div>
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
            </div>
            <div className="nav-link-title">Contacts</div>
          </a>
        </div>

        <div  className="nav-links-phone" onClick={toggleMobileMenu}>
          <svg
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="1.5"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="menu-svg"
          >
            <rect x="3" y="3" width="7" height="7"></rect>
            <rect x="14" y="3" width="7" height="7"></rect>
            <rect x="14" y="14" width="7" height="7"></rect>
            <rect x="3" y="14" width="7" height="7"></rect>
          </svg>



      {mobileMenuOpen && (
          <div className="mobile-menu">
            <a href="#about"  
          className="nav-link"
          spy={true}
          offset={-90}
          smooth={true}
          ease="easeInOut"
          duration={600}
          >
            <div >
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
            </div>
            <div className="nav-link-title">About</div>
          </a>
          <a href="#service" className="nav-link">
            <div>
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
            </div>
            <div className="nav-link-title">Services</div>
          </a>
          <a href="#team" className="nav-link">
            <div>
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
            </div>
            <div className="nav-link-title">Team</div>

          </a>
          <a href="#project" className="nav-link">
            <div>
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
            </div>
            <div className="nav-link-title">Project</div>
          </a>
          <a href="#client" className="nav-link">
            <div>
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
            </div>
            <div className="nav-link-title">Clients</div>
          </a>
          <a href="#contact" className="nav-link">
            <div>
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
            </div>
            <div className="nav-link-title">Contacts</div>
          </a>
          </div>
        )}
        </div>


      </nav>

        
    </div>
  );
};

export default Navbar;
