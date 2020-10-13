import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import config from "../../data/SiteConfig";
import vincentImg from "../../static/logos/vincentntang.jpeg";
import germanImg from "../../static/logos/germangamboa.jpeg";
import socialTwitter from "../assets/social-twitter.svg";
import socialGlobe from "../assets/social-globe.svg";
import socialGithub from "../assets/social-github-lightblue.svg";

const AboutPage = () => {
  return (
    <Layout>
      <section className="about-container cc-container">
        <Helmet title={`About | ${config.siteTitle}`} />
        <div className="cc-header cc-card">
          <div className="cc-padding cc-intro">
            <h3 className="color-offgray mt-0">What is Code Chefs?</h3>
            <p className="my-0">It's a podcast for web developers who wants to level up! We do talks for all skill levels on:</p>
            <ul>
              <li>Javascript (React, Vue, Angular)</li>
              <li>Backend + DevOps</li>
              <li>CSS + Webdesign</li>
              <li>Career Development</li>
            </ul>
          </div>
          <div className="cc-portraits">
            <div className="cc-padding cc-portrait">
              <div className="header">
              </div> 
              <div className="img-wrapper">
                <img className="img-portait" src={vincentImg} alt="vincent tang"/>
              </div>
              <div className="desc-wrapper">
              <div className="personal-links">
                  <a href="https://twitter.com/vincentntang">
                    <img src={socialTwitter} alt="social twitter"/>
                  </a>
                  <a href="https://github.com/vincentntang">
                    <img src={socialGithub} alt="social github"/>
                  </a>
                  <a href="https://vincentntang.com">
                    <img src={socialGlobe} alt="social globe"/>
                  </a>
                </div>
                <div className="description">Vincent Tang is a fullstack developer residing in Tampa, FL. Formerly a kitchen designer. Loves the outdoors and trying new things</div>
               
              </div>
            </div>
            <div className="cc-padding cc-portrait">
              <div className="img-wrapper">
                <img className="img-portait" src={germanImg} alt="german gamboa"/>
              </div>
              <div className="desc-wrapper">
                <div className="personal-links">
                  <a href="https://twitter.com/germangamgon">
                    <img src={socialTwitter} alt="social twitter"/>
                  </a>
                  <a href="https://github.com/germangamboa95">
                    <img src={socialGithub} alt="social github"/>
                  </a>
                  <a href="https://www.linkedin.com/in/german-gamboa-gonzalez-a3863197/">
                    <img src={socialGlobe} alt="social globe"/>
                  </a>
                </div>
                <div className="description">German Gamboa is a fullstack developer from Orlando, FL. Formerly a general restaurant manager. Expert waffler at meetup talks</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default AboutPage;
