import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import config from "../../data/SiteConfig";
// import PostListing from "../components/PostListing";
// import SEO from "../components/SEO";
// import dinerLogo from "../assets/diner_logo.svg";
// import logo from "../assets/code_chefs_transparent.svg";
// import sampleMp3 from "../assets/file_example.mp3";
import vincentntang from "../assets/vincentntang.jpeg";
import germangamboa from "../assets/germangamboa.jpeg";
// import Menu from "../layout/Menu";
// import Footer from "../components/Footer";


const AboutPage = () => {
  return (
    <Layout>
      <section className="about-container cc-container">
        <Helmet title={`About | ${config.siteTitle}`} />
        <div className="cc-header cc-card">
          <div className="cc-padding cc-intro">
            <p className="my-0"><span>🎤 </span>Code chefs is a podcast for developers seeking to learn more about webdevelopment. Whether your a fresh out of bootcamp graduate, or a fullstack veteran,
              we do topics ranging for all levels. As developers who love learning, we hope you enjoy the content here</p>
          </div>
          <div className="cc-portraits">
            <div className="cc-padding cc-portrait">
              <div className="header">
              </div> 
              <div className="img-wrapper">
                <img src={vincentntang} alt="vincent tang"/>
              </div>
              <div className="desc-wrapper">
                <div className="description">👨‍🍳 Vincent Tang is a fullstack developer from Orlando, FL. Formerly a kitchen designer. Loves the outdoors and trying new things</div>
              </div>
            </div>
            <div className="cc-padding cc-portrait">
              <div className="img-wrapper">
                <img src={germangamboa} alt="german gamboa"/>
              </div>
              <div className="desc-wrapper">
                <div className="description">👨‍🍳 German Gamboa is a fullstack developer from Orlando, FL. Formerly a general manager for a restaurant chain. Likes to learn new things</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default AboutPage;
