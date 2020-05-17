import React, {useState} from "react";
import Helmet from "react-helmet";
import {Row, Col, Container} from 'reactstrap';
import config from "../../data/SiteConfig";
import "../styles/main.scss";

const fakeData= [
  {
    id: "1",
    episodeName: "Intro to Data Science",
    details: "Details",
    episodeLength: "50:00",
    showNotes: "<p>Welcome to the podcast blah blah blah</p>"
  },
  {
    id: "2",
    episodeName: "Intro to IoT Development with X name",
    details: "Details",
    episodeLength: "50:00",
    showNotes: "<p>Welcome to the podcast blah blah blah</p>"
  },
  {
    id: "3",
    episodeName: "Intro to Data Science",
    details: "Details",
    episodeLength: "50:00",
    showNotes: "<p>Welcome to the podcast blah blah blah</p>"
  },
  {
    id: "4",
    episodeName: "Intro to Data Science",
    details: "Details",
    episodeLength: "50:00",
    showNotes: "<p>Welcome to the podcast blah blah blah</p>"
  },
  {
    id: "5",
    episodeName: "Intro to Data Science",
    details: "Details",
    episodeLength: "50:00",
    showNotes: "<p>Welcome to the podcast blah blah blah</p>"
  }
]

const MainLayout = (props) => {
  const [selectedEpisode, setSelectedEpisode] = useState(0); // default selectedState to 0
  const { children } = props;
  return (
    <div className="layout-container">
      <Helmet>
        <meta name="description" content={config.siteDescription} />
        <html lang="en" />
      </Helmet>
      {/* {children} */}
      <Container>
        <Row className="justify-content-space-between">
          <Col>
            👨‍🍳 Code Chefs
          </Col>
          <Col xs="auto">
            Episodes
          </Col>
          <Col xs="auto">
            Episodes
          </Col>
          <Col xs="auto">
            About
          </Col>
        </Row>
        <div className="custom-menu">
          <div className="custom-menu__header">
            Podcast Episodes Menu
          </div>
          <div className="custom-menu__panes">
            <div className="custom-menu__left">
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
            <div className="custom-menu__right">
              {}
            </div>
          </div>
        </div>
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
      </Container>
    </div>
  );
}

export default MainLayout;