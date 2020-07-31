import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import config from "../../data/SiteConfig";

const AboutPage = () => {
  return (
    <Layout>
      <div className="about-container">
        <Helmet title={`About | ${config.siteTitle}`} />
        <div className="cc-card">
          <div className="cc-padding cc-intro">
            <p className="my-0"><span>🎤 </span>Code chefs is a podcast for developers seeking to learn more about webdevelopment. Whether your a fresh out of bootcamp graduate, or a fullstack veteran,
              we do topics ranging for all levels. As developers who love learning, we hope you enjoy the content here</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default AboutPage;
