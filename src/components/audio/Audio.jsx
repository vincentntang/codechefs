import React , {useEffect,useState}from "react";
import Bar from "./Bar";
import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
import playSvg from "../../assets/play.svg";
import pauseSvg from "../../assets/pause.svg";


const Audio = ({
  currentVolume, 
  setCurrentVolume, 
  currentTrack, 
  setCurrentTrack, 
  isPlaying, 
  setIsPlaying, 
  setTrackPlayed, mp3, index}) => {
  // const { curTime, duration, playing, setPlaying, setClickedTime } = useAudioPlayer();
  const [duration, setDuration] = useState();
  const [curTime, setCurTime] = useState();
  const [playing, setPlaying] = useState(false);
  const [clickedTime, setClickedTime] = useState();

  // const setTrackPlayed = (index) => {
  //   if(index === currentTrack && isPlaying) {
  //     setIsPlaying(false);
  //   } else {
  //     setIsPlaying(true);
  //   }
  //   setCurrentTrack(index);
  // }

  // const setTrackPlayed = (index) => {
  //   if(index === currentTrack && isPlaying) {
  //     setIsPlaying(false);
  //   } else {
  //     setIsPlaying(true);
  //   }
  //   setCurrentTrack(index);
  // }

  
  const playAudio =() => {
    
  }

  useEffect(() => {
    const audio = document.getElementById(index);

    // state setters wrappers
    const setAudioData = () => {
      setDuration(audio.duration);
      setCurTime(audio.currentTime);
    }

    const setAudioTime = () => setCurTime(audio.currentTime);

    // DOM listeners: update React state on DOM events
    audio.addEventListener("loadeddata", setAudioData);

    audio.addEventListener("timeupdate", setAudioTime);

    // React state listeners: update DOM on React state changes
    if(index === currentTrack && isPlaying){
      audio.play();
    } else {
      audio.pause();
    }
    playing ? audio.play() : audio.pause();

    if (clickedTime && clickedTime !== curTime) {
      audio.currentTime = clickedTime;
      setClickedTime(null);
    } 

    // effect cleanup
    return () => {
      audio.removeEventListener("loadeddata", setAudioData);
      audio.removeEventListener("timeupdate", setAudioTime);
    }
  });

  console.log(mp3,"MP3");

  return (
    <div className="player">
      <audio id={index}>
        <source src={mp3} />
        Your browser does not support the <code>audio</code> element.
      </audio>
      {/* <Song songName="Instant Crush" songArtist="Daft Punk ft. Julian Casablancas" /> */}
      <div className="controls">
        <div className="cc-play" onClick={() => setPlaying(!playing)}>
          <div className="cc-play_button" >
            <img src={playing ? pauseSvg: playSvg} alt="play button"/>
          </div>
          {formatDuration(curTime)}/
          {formatDuration(duration)}
          {/* <button className="player__button" onClick={() => setPlaying(!playing)}>
            <div style={{ color: "white" }}> {playing ? "PAUSE" : "START"}</div>
          </button> */}
        </div>

        <Bar curTime={curTime} duration={duration} onTimeUpdate={(time) => setClickedTime(time)}/>
        <div className="cc-speed">
          <p>Speed</p>
        </div>
        <div className="cc-volume">
          <p>Volume</p>
        </div>
      </div>
    </div>
  );
}

export default Audio;

function formatDuration(duration) {
  return moment
    .duration(duration, "seconds")
    .format("mm:ss", { trim: false });
}
