import React, {useState} from "react";
import Helmet from "react-helmet";
import {Row, Col, Container} from 'reactstrap';
import config from "../../data/SiteConfig";
import "../styles/main.scss";
import dinerLogo from "../assets/diner_logo.svg";
import logo from "../assets/code_chefs_transparent.svg";
import vincentntang from "../assets/vincentntang.png";
import germangamboa from "../assets/germangamboa.jpeg";

const fakeData= [
  {
    id: "1",
    episodeName: "Intro to Data Science w/ Michael Dupont",
    shortDescription: "How do you get started in data science? In this interview with Michael Dupont, a data scientist at Disney, we cover what is it, what are its applications, and more",
    episodeLength: "50:00",
    audioFile: "../assets/file_example.mp3",
    showNotes: "<p>Welcome to the podcast blah blah blah</p>"
  },
  {
    id: "2",
    episodeName: "Intro to Data Science w/ Michael Dupont",
    shortDescription: "How do you get started in data science? In this interview with Michael Dupont, a data scientist at Disney, we cover what is it, what are its applications, and more",
    episodeLength: "50:00",
    audioFile: "../assets/file_example.mp3",
    showNotes: "<p>Welcome to the podcast blah blah blah</p>"
  },
  {
    id: "3",
    episodeName: "Intro to Data Science w/ Michael Dupont",
    shortDescription: "How do you get started in data science? In this interview with Michael Dupont, a data scientist at Disney, we cover what is it, what are its applications, and more",
    episodeLength: "50:00",
    audioFile: "../assets/file_example.mp3",
    showNotes: "<p>Welcome to the podcast blah blah blah</p>"
  },
  {
    id: "4",
    episodeName: "Intro to Data Science w/ Michael Dupont",
    shortDescription: "How do you get started in data science? In this interview with Michael Dupont, a data scientist at Disney, we cover what is it, what are its applications, and more",
    episodeLength: "50:00",
    audioFile: "../assets/file_example.mp3",
    showNotes: "<p>Welcome to the podcast blah blah blah</p>"
  },
  {
    id: "5",
    episodeName: "Intro to Data Science w/ Michael Dupont",
    shortDescription: "How do you get started in data science? In this interview with Michael Dupont, a data scientist at Disney, we cover what is it, what are its applications, and more",
    episodeLength: "50:00",
    audioFile: "../assets/file_example.mp3",
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
        <Row className="topnav justify-content-space-between">
          <Col>
            👨‍🍳 Home
          </Col>
          <Col xs="auto">
            Episodes
          </Col>
          <Col xs="auto">
            About
          </Col>
        </Row>
        <Row className="logo-hero mt-5 justify-content-center">
          <Col xs="auto" style={{width:"500px"}}>
            <img src={logo} alt="logo"/>    
          </Col>
        </Row>
        {/* Brief Introduction to Code Chefs */}
        <Row className="mt-5">
          <Col xs="12">
            
          </Col>
        </Row>
        {/* Episode Introduction */}
        <Row>
       
        </Row>
        {/* <h1 class="text-center mb-3">Hosts</h1> */}
        <div className="cc-header">
          <div className="cc-card cc-intro">
            <p className="mb-0"><span>🎤 </span>Code chefs is a podcast for developers seeking to learn more about webdevelopment. Whether your a fresh out of bootcamp graduate, or a fullstack veteran,
              we do topics ranging for all levels. As developers who love learning, we hope you enjoy the content here</p>
          </div>
          <div className="cc-portraits">
            <div className="cc-card cc-portrait">
              <div className="header">
              </div> 
              <div className="left">
                <img src={vincentntang} alt="vincent tang"/>
              </div>
              <div className="right">
                <div className="description">👨‍🍳 Vincent Tang is a fullstack developer from Orlando, FL. Formerly a kitchen designer. Loves the outdoors and trying new things</div>
              </div>
              {/* <div className="footer">
              </div> */}
            </div>
            <div className="cc-card cc-portrait">
              <div className="left">
                <img src={germangamboa} alt="german gamboa"/>
              </div>
              <div className="right">
                <div className="description">👨‍🍳 German Gamboa is a fullstack developer from Orlando, FL. Formerly a general manager for a restaurant chain. Likes to learn new things</div>
              </div>
              {/* <div className="footer">
              </div> */}
            </div>
          </div>
        </div>
        <h1 class="text-center mb-3">Episodes</h1>
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
      </Container>
    </div>
  );
}

export default MainLayout;