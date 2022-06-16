import React from "react";
import "./Navbar.scss";
import { Link, animateScroll as scroll } from "react-scroll";

function Navbar() {
  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 50) {
      document.querySelector(".nav").classList.add("sticky");
    } else {
      document.querySelector(".nav").classList.remove("sticky");
    }
  });

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const openNav = () => {
    document.querySelector(".nav").classList.toggle("responsive");
    document.body.classList.toggle("body-fixed");
    document.querySelector(".menu").classList.toggle("visible");
    document.querySelector(".sticky").classList.toggle("sticky-responsive");

  }

  return (
    <div className="nav ">
      <div className="wrapper">
        <div className="row justify-content-between">
          {/* Left side Navbar */}
          <div className="nav_Left">
            <div className="row">
              <div className="logo" onClick={scrollToTop}>
                <span>Aj</span>
                aya
              </div>
            </div>
          </div>

          {/* Right Side Navbr */}
          <div className="nav_Right">
            <div className="icons">
              <ul className="menu">
                <Link
                  activeClass="active"
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={1000}
                >
                  <li className="nav-items ">
                    <a href="">

                   
                      {" "}
                      Home <span></span>
                    </a>
                 
                  </li>
                </Link>
               
                <Link
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={1000}
                >
                  <li className="nav-items">
                  <a href="">
                    
                      About <span></span>
                      </a>
                 
                  </li>
                </Link>
                <Link
                  activeClass="active"
                  to="skills"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={1000}
                >
                  <li className="nav-items">
                  <a href="">
                  
                      Skills <span></span>
                      </a>
               
                  </li>
                </Link>
                <Link
                  activeClass="active"
                  to="education"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={1000}
                >
                  <li className="nav-items">
                  <a href="">
                   
                      Education <span></span>
                      </a>
               
                  </li>
                </Link>
                <Link
                  activeClass="active"
                  to="portfolio"
                  spy={true}
                  smooth={true}
                  duration={1000}
                >
                  <li>
                  <a href="">
                  
                      Portfolio <span></span>
                      </a>
                
                  </li>
                </Link>
                <Link
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={1000}
                >
                  <li>
                  <a href="">
                      Contact <span></span>
                      </a>
               
                  </li>
                </Link>
              </ul>
            </div>
          </div>
          <div className="nav-container nav-container-visible " onClick={openNav}>
            <input className="checkbox" type="checkbox" name="" id="" />

            <div className="hamburger-lines">
              <span className="line line1"></span>
              <span className="line line2"></span>
              <span className="line line3"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
