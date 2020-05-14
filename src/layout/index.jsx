import React from "react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";
import "../styles/main.scss";

const MainLayout = (props) => {
  const { children } = props;
  return (
    <div className="layout-container">
      <Helmet>
        <meta name="description" content={config.siteDescription} />
        <html lang="en" />
      </Helmet>
      {/* {children} */}
      <div className="">
        Hello World
      </div>
    </div>
  );
}

export default MainLayout;