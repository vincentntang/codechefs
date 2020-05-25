import React, {useState} from "react";
import Helmet from "react-helmet";
import {Row, Col, Container} from 'reactstrap';
import config from "../../data/SiteConfig";
import "../styles/main.scss";
import dinerLogo from "../assets/diner_logo.svg";
import logo from "../assets/code_chefs_transparent.svg";
import sampleMp3 from "../assets/file_example.mp3";
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
      <div className="cc-navbar-background">
        <div className="cc-container">
          <nav className="cc-navbar">
            <div className="cc-navitem">
              <div className="cc-navlink">Home</div>
            </div>
            <div className="cc-navitem">
              <div className="cc-navlink">Episodes</div>
            </div>
            <div className="cc-navitem">
              <div className="cc-navlink">Contact</div>
            </div>
          </nav>
        </div>
      </div>
      <section className="cc-container">
        <div className="cc-logo-hero">
          <img src={logo} alt="logo"/>
        </div>
      </section>
        {/* <h1 class="text-center mb-3">Hosts</h1> */}
      <section className="cc-container">
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
              {/* <div className="footer">
              </div> */}
            </div>
            <div className="cc-padding cc-portrait">
              <div className="img-wrapper">
                <img src={germangamboa} alt="german gamboa"/>
              </div>
              <div className="desc-wrapper">
                <div className="description">👨‍🍳 German Gamboa is a fullstack developer from Orlando, FL. Formerly a general manager for a restaurant chain. Likes to learn new things</div>
              </div>
              {/* <div className="footer">
              </div> */}
            </div>
          </div>
        </div>
      </section>
      <section className="cc-container mt-30">
        <h1 class="text-center mb-2">Episodes</h1>
        <div className="cc-menu cc-padding cc-card">
          <div className="menu-header">
            <hr/>
            <hr/>
            <hr/>
            <hr/>
          </div>
          <div className="podcast-wrapper">
            {fakeData.map((item,index) => {
              return (
                  <div key={`podcast-${index}`}className="podcast-episode">
                    <div>{item.id}</div>
                    <div>{item.episodeName}</div>
                    <div>{item.episodeLength}</div>
                    <audio controls>
                      <source src={sampleMp3} type="audio/ogg" />
                      <source src={sampleMp3} type="audio/mpeg"/>
                      <p>Your browser doesn't support HTML5 audio. Here is a <a href="viper.mp3">link to the audio</a> instead.</p>
                    </audio>
                  </div>
                )
              })}
          </div>
        </div>
      </section>
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
    </div>
  );
}

export default MainLayout;