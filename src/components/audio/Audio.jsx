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
  setTrackPlayed, mp3, index,
  episodeName,
  episodeHtml,
  children
}) => {
  // const { curTime, duration, playing, setPlaying, setClickedTime } = useAudioPlayer();
  const [duration, setDuration] = useState();
  const [curTime, setCurTime] = useState();
  const [playing, setPlaying] = useState(false);
  const [clickedTime, setClickedTime] = useState();
  const [curSpeed, setCurSpeed] = useState(1);
  const [curVolume, setCurVolume] = useState(1);
  const volumeLevels = [0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1];
  const playBackRates = [0.75,1,1.25,1.5,1.75,2,2.25,2.5];

  

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

  
  const changeAudioSpeed = () => {
    const index = playBackRates.indexOf(curSpeed);
    if(index==-1){
      setCurSpeed(1);
    } else if (index === playBackRates.length - 1){
      setCurSpeed(playBackRates[0]);
    } else {
      setCurSpeed(playBackRates[index+1]);
    }
  }

    
  // const changeVolumeLevel = () => {
  //   const index = volumeLevels.indexOf(curVolume);
  //   // if(index==-1){
  //   //   setCurVolume(0.5);
  //   // } else if (index === volumeLevels.length - 1){
  //   //   setCurVolume(volumeLevels[0]);
  //   // } else {
  //   //   setCurVolume(volumeLevels[index+1]);
  //   // }
  // }

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
    audio.volume=curVolume;
    audio.playbackRate=curSpeed;
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

  const jumpToTimestamp = (timestamp) => {
    console.log(" I RAN !!!")
    // const time = moment.duration(`00:${t}`).asSeconds();
    // audio.currentTime = time;
    console.log("Yo")
  }

  console.log(mp3,"MP3");
  console.log(episodeHtml,"Episode HTML");
  // preprocess episodeHTML
  const regex = /(\d[:])?\d\d[:]\d\d/g;
  // const regex = /\d\d[:]\d\d/g;
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
  // its $& not $1 for whatever reason on capture group
  // let newHtml="yo"
  let newHtml = episodeHtml.replace(regex, '<span class="timestamp" onClick={jumpToTimestamp(\`$&`)}>$&</span>')
  // console.log(episodeHtml, "EPISODE HTML AGAIN!")
  console.log(newHtml, "Episode HTML END")

  return (
    <>
    <div className="player">
      <audio id={index}>
        <source src={mp3} />
        Your browser does not support the <code>audio</code> element.
      </audio>
      {/* <Song songName="Instant Crush" songArtist="Daft Punk ft. Julian Casablancas" /> */}
      <div className="controls">
        <div className="cc-play p-3 noselect" onClick={() => setPlaying(!playing)}>
          <div className="cc-play_button" >
            <img src={playing ? pauseSvg: playSvg} alt="play button"/>
          </div>
          <div className="duration-ratio">
            <span>{formatDuration(curTime)}</span> / {""}
            <span>{formatDuration(duration)}</span>
          </div>
          {/* <button className="player__button" onClick={() => setPlaying(!playing)}>
            <div style={{ color: "white" }}> {playing ? "PAUSE" : "START"}</div>
          </button> */}
        </div>

        <Bar episodeName={episodeName} curTime={curTime} duration={duration} onTimeUpdate={(time) => setClickedTime(time)}/>
        <div className="cc-speed p-3 noselect" onClick={()=>changeAudioSpeed()}>
          <p className="my-0">Speed</p>
          <div className="cc-speed-display">{curSpeed}x</div>
        </div>
   
        <div className="cc-volume p-3 noselect">
          <p className="my-0">Volume</p>
          {/* <div>{curVolume}</div> */}
          <div className="cc-volume-bar-wrapper">
            {volumeLevels.map((volume,index) => {
              return (
                <div className={`volume-bar ${(index/10) < curVolume ? 'volume-bar-active':""}`} key={index} onClick={()=>setCurVolume(volume)}>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
    <div className="danger-html" dangerouslySetInnerHTML={{ __html: newHtml }} />
    {/* {children} */}
    </>
  );
}

export default Audio;

function formatDuration(duration) {
  return moment
    .duration(duration, "seconds")
    .format("mm:ss", { trim: false });
}
