import React , {useEffect,useState}from "react";

// import Song from "./Song";
// import Play from "./Play";
// import Pause from "./Pause";
import Bar from "./Bar";
// import sampleMp3 from "../../assets/file_example.mp3"

// import useAudioPlayer from './useAudioPlayer';

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
    // playing ? audio.play() : audio.pause();

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
        {/* {playing ? 
          <Pause handleClick={() => setPlaying(false)} /> :
          <Play handleClick={() => setPlaying(true)} />
        } */}
        <button className="player__button" onClick={() => setTrackPlayed(index)}>
        {/* <button className="player__button" onClick={() => setPlaying(!playing)}> */}
          <div style={{ color: "white" }}> {currentTrack === index && isPlaying ? "PAUSE" : "START"}</div>
        </button>
        <Bar curTime={curTime} duration={duration} onTimeUpdate={(time) => setClickedTime(time)}/>
      </div>
    </div>
  );
}

export default Audio;
