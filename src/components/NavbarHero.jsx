import React, { Component } from "react";
import { Link } from "gatsby";
import UserLinks from "./UserLinks";
// import logo from "../assets/code_chefs_transparent.svg";
// import logo2 from "../assets/Artboard2.png";
// import logo2svg from "../assets/Artboard2.svg";
// import logo2svga from "../assets/Artboard2a.svg";
import { ReactComponent as MyLogo} from "../assets/code_chefs_art3.svg";
// import logo3svg from "../assets/code_chefs_art3.svg";
import Logo from "./Logo";
import LogoTest from "./LogoTest";
import { Location } from '@reach/router';

const Navbar = (props) => {
  // const { config } = props;
  // const url = config.siteRss;
  // const { copyright } = config;
  // if (!copyright) {
  //   return null;
  // }
  return (
    <>
    <section className="cc-container">
      <div className="cc-logo-hero">
        {/* <img src={logo} alt="logo"/> */}
        {/* <img src={logo3svg} alt="logo"/> */}
        <Logo/>
      </div>
      {/* <div className="cc-logo-hero">
        <LogoTest/>
      </div> */}
      <div className="social-links">
        
      </div>
      <div className="cc-hero-description text-center">
        <p>Vincent Tang and German Gamboa discuss hot topics in webdevelopment! Sign up for our <a className="newsletter-link" href="https://tinyletter.com/vincentntang">NEWSLETTER</a></p>
      </div>
      <nav className="cc-navbar">
        <div className="cc-navitem">
          <Link to="/" activeClassName="active-link">
            Episodes
          </Link>
        </div>
        <div className="cc-navitem">
          <Link to="/about" activeClassName="active-link">About</Link>
        </div>
        <div className="cc-navitem">
          <Link to="/support" activeClassName="active-link">Support</Link>
        </div>
      </nav>
   
    </section>
    {/* <div className="cc-navbar-background">
      <div className="cc-container"> */}

      {/* </div>
    </div> */}
    </>
  );
}

export default Navbar;
