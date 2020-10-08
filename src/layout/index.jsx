import React, {useState} from "react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";
import "../styles/main.scss";
import NavbarHero from "../components/NavbarHero"
import favicon from "../../static/logos/favicon.png"
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
      {/* {children} */}
      <NavbarHero props={props}/>
      {children}
        {/* <div className="custom-menu">
          <div className="custom-menu__header">
            <div className="custom-menu__sticker">
              <div className="header">Code Chefs</div>
              <div className="subheader">EPISODES</div>
            </div>
            <div className="custom-menu__lines">
              <hr/>
              <hr/>
              <hr/>
              <hr/>
              <hr/>
              <hr/>
            </div>
          </div>
          <div className="custom-menu__panes">
              {fakeData.map(item => {
                return (
                  <div className="podcast-episode">
                    <div>{item.id}</div>
                    <div>{item.episodeName}</div>
                    <div>{item.episodeLength}</div>
                  </div>
                )
              })}
          </div>
        </div> */}
        {/* <Row className="custom-menu border-red">
          <Col>
            <Row>
              <Col className="menu-title">
                Menu Banner
              </Col>
            </Row>
            <Row>
              <Col xs="5" className="podcast-episode">
                {fakeData.map(item => {
                  return (
                    <div>
                      <p>{item.episodeName}</p>
                      <p>{item.content}</p>
                      <p>{item.podcast}</p>
                    </div>
                  )
                })}
              </Col>
              <Col xs="7" className="podcast-shownotes">
              </Col>
            </Row>
          </Col>
        </Row> */}
      <Footer config={config} />
    </div>
  );
}

export default MainLayout;