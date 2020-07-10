import React, { Component } from "react";
import { Link } from "gatsby";
import UserLinks from "./UserLinks";

const Navbar = (props) => {
  // const { config } = props;
  // const url = config.siteRss;
  // const { copyright } = config;
  // if (!copyright) {
  //   return null;
  // }
  return (
    <div className="cc-navbar-background">
      <div className="cc-container">
        <nav className="cc-navbar">
          <div className="cc-navitem">
            <div className="cc-navlink">Home</div>
          </div>
          <div className="cc-navitem">
            <div className="cc-navlink">Episodes</div>
          </div>
          <div className="cc-navitem">
            <div className="cc-navlink">Contact</div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
