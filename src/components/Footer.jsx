import React, { Component } from "react";
import { Link } from "gatsby";
// import UserLinks from "./UserLinks";

const Footer = (props) => {
  const { config } = props;
  const url = config.siteRss;
  const { copyright } = config;
  if (!copyright) {
    return null;
  }

  return (
    <footer className="footer">
      <p>Made with <span className="mr-1">💛 </span>in Gatsby. <a href="https://github.com/vincentntang/codechefs">Source Code</a></p>
    </footer>
  )
  // return (
    // <footer className="footer">
    //   <section className="cc-container">
    //     <UserLinks config={config} labeled />
    //     <div className="notice-container">
    //       <h4>{copyright}</h4>

    //       <Link to={url}>
    //         <button>Subscribe</button>
    //       </Link>
    //     </div>
    //   </section>
    // </footer>
  // );
}

export default Footer;
