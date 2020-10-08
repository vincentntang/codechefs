import React, {useState, useEffect} from "react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";
import "../styles/main.scss";
import dinerLogo from "../assets/diner_logo.svg";
import logo from "../assets/code_chefs_transparent.svg";
import sampleMp3 from "../assets/file_example.mp3";
import Audio from "../components/audio/Audio";
import fakeData from "./fakeData";
import PropTypes from "prop-types";

// Inputform.propTypes = {
//   onSubmit: PropTypes.func.isRequired
// };


const Menu = (props) => {

  const [currentTrack, setCurrentTrack] = useState();
  const [isPlaying, setIsPlaying] = useState(false); //if the user presses the start icon, it turns off setPlaying
  const [currentVolume, setCurrentVolume] = useState();
  // const [lastPlaybackSpeed, setPlaybackSpeed] = useState(false);
  // const [lastAudioLevel, setAudioLevel] = useState();
  const setTrackPlayed = (index) => {
    if(index === currentTrack && isPlaying) {
      setIsPlaying(false);
    } else {
      setIsPlaying(true);
    }
    setCurrentTrack(index);
  }

  useEffect(() => {
  },[])

  return (<section className="cc-container">
    {/* <h1 className="text-center mb-2">Episodes</h1> */}
      {/* <div className="menu-header">
        <hr />
        <hr />
        <hr />
        <hr />
      </div> */}
      <div className="podcast-wrapper">
        {fakeData.map((item, index) => {
          return (
            <div key={index} className="cc-menu cc-padding cc-card mb-7">
              <div key={`podcast-${index}`} className="podcast-episode">
                <div>{item.id} - {item.episodeName}</div>
                <div>{item.episodeLength}</div>
                {/* <Audio 
                  id={index} 
                  index={index} 
                  mp3={item.audioFile} 
                  currentTrack={currentTrack} 
                  // setCurrentTrack={setCurrentTrack}
                  // currentVolume={currentVolume}
                  // setCurrentVolume={setCurrentVolume}
                  isPlaying={isPlaying}
                  setIsPlaying={setIsPlaying}
                  setTrackPlayed={setTrackPlayed}
                /> */}
              </div>
            </div>
          )
        })}
    </div>
  </section>
  )
}

export default Menu;