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
// import podcastApple from "../assets/podcastApple.svg";
// import podcastGoogle from "../assets/podcastGoogle.svg";
// import podcastGooglePlayMusic from "../assets/podcastGooglePlayMusic.svg";
// import podcastOvercast from "../assets/podcastOvercast.svg";
// import podcastPocketcasts from "../assets/podcastPocketcasts.svg";
// import podcastSpotify from "../assets/podcastSpotify.svg";
// import podcastRss from "../assets/podcastRss.svg";
// import podcastTwitter from "../assets/podcastTwitter.svg";
import {ReactComponent as PodcastApple} from "../assets/podcastApple.svg";
import {ReactComponent as PodcastGoogle} from "../assets/podcastGoogle.svg";
import {ReactComponent as PodcastGooglePlayMusic} from "../assets/podcastGooglePlayMusic.svg";
import {ReactComponent as PodcastOvercast} from "../assets/podcastOvercast.svg";
import {ReactComponent as PodcastPocketcasts} from "../assets/podcastPocketcasts.svg";
import {ReactComponent as PodcastSpotify} from "../assets/podcastSpotify.svg";
import {ReactComponent as PodcastRss} from "../assets/podcastRss.svg";
import {ReactComponent as PodcastTwitter} from "../assets/podcastTwitter.svg";


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
      <div className="social-links-wrapper">
        <div className="social-links">
          {/* <img src={podcastApple} alt="podcast apple"/>
          <img src={podcastGoogle} alt="podcast apple"/>
          <img src={podcastGooglePlayMusic} alt="podcast apple"/>
          <img src={podcastOvercast} alt="podcast apple"/>
          <img src={podcastPocketcasts} alt="podcast apple"/>
          <img src={podcastSpotify} alt="podcast apple"/>
          <img src={podcastRss} alt="podcast apple"/>
          <img src={podcastTwitter} alt="podcast apple"/> */}
          <a className="podcast-links" href="google.com">
            <PodcastTwitter/>
          </a>
          <a className="podcast-links" href="google.com">
            <PodcastApple/>
          </a>
          <a className="podcast-links" href="google.com">
            <PodcastGoogle/>
          </a>
          <a className="podcast-links" href="https://google.com">
            <PodcastGooglePlayMusic/>
          </a>
          <a className="podcast-links" href="https://google.com">
            <PodcastSpotify/>
          </a>
          <a className="podcast-links" href="https://google.com">
            <PodcastPocketcasts/>
          </a>
          <a className="podcast-links" href="https://google.com">
            <PodcastOvercast/>
          </a>
          <a className="podcast-links" href="https://google.com">
            <PodcastRss/>
          </a>
        </div>
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
