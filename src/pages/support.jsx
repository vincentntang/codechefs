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
          <div className="cc-padding cc-support">
            <h3 className="color-offgray">Thanks for dining with us!</h3>
            <p>If you'd like to support us, follow us on <a className="newsletter-link" href="https://twitter.com/codechefsdev">twitter! </a></p>
            <p>We're looking to air an episode a week</p>
            <p>Subscribe to our <a className="newsletter-link" href="https://tinyletter.com/vincentntang">newsletter</a> for more Javascript related content!</p>
            <hr/>
            <p>P.S. like us on your favorite podcast platform!</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default AboutPage;
