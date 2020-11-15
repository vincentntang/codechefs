import React from "react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";
import "../styles/main.scss";
import NavbarHero from "../components/NavbarHero"
import favicon from "../../static/logos/favicon48.png"
import Footer from "../components/Footer";

const MainLayout = (props) => {
  const { children } = props;
  return (
    <div className="layout-container">
      <Helmet>
        <meta name="description" content={config.siteDescription} />
        <html lang="en" />
        <link rel="shortcut icon" type="image/png" href={favicon} />
      </Helmet>
      <NavbarHero props={props}/>
      {children}
      <Footer config={config} />
    </div>
  );
}

export default MainLayout;