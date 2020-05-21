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
import Audio from "../components/audio/Audio";
import fakeData from "./fakeData";

const Menu = (props) => {

  return (<section className="cc-container mt-30">
    <h1 class="text-center mb-2">Episodes</h1>
    <div className="cc-menu cc-padding cc-card">
      <div className="menu-header">
        <hr />
        <hr />
        <hr />
        <hr />
      </div>
      <div className="podcast-wrapper">
        <Audio id="1" name="1" key="1" mp3={sampleMp3} />
        <Audio id="2" name="2" key="2" mp3='https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' />
        {fakeData.map((item, index) => {
          return (
            <div key={`podcast-${index}`} className="podcast-episode">
              <div>{item.id}</div>
              <div>{item.episodeName}</div>
              <div>{item.episodeLength}</div>
              {/* <Audio key={`podcast-${index}`} mp3={sampleMp3} /> */}
              <audio controls>
                <source src={sampleMp3} type="audio/ogg" />
                <source src={sampleMp3} type="audio/mpeg" />
                <p>Your browser doesn't support HTML5 audio. Here is a <a href="viper.mp3">link to the audio</a> instead.</p>
              </audio>
            </div>
          )
        })}
      </div>
    </div>
  </section>
  )
}

export default Menu;