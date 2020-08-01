import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import config from "../../data/SiteConfig";

const AboutPage = () => {
  return (
    <Layout>
      <div className="about-container cc-container">
        <Helmet title={`About | ${config.siteTitle}`} />
        <div className="cc-card">
          <div className="cc-padding cc-intro">
            <p>Follow us on <a className="newsletter-link" href="https://twitter.com/codechefsdev">twitter!</a></p>
            <p>Subscribe to our <a className="newsletter-link" href="https://tinyletter.com/vincentntang">newsletter</a> for future content!</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default AboutPage;
