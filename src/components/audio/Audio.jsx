import React, { useEffect, useRef, useState } from "react";
import Bar from "./Bar";
import moment from "moment";
import { Controls } from "./Controls";
import { PlayButton } from "./PlayButton";

const Audio = ({ mp3, index, episodeName }) => {
  const [duration, setDuration] = useState();
  const [curTime, setCurTime] = useState();
  const [playing, setPlaying] = useState(false);
  const [curSpeed, setCurSpeed] = useState(1);
  const [curVolume, setCurVolume] = useState(1);
  const playerRef = useRef(null);


  const setAudioData = () => {
    setDuration(playerRef.current.duration);
    setCurTime(playerRef.current.currentTime);
  };

  const setAudioTime = () => setCurTime(playerRef.current.currentTime);

  useEffect(() => {

    // setPlayerRef(audio)
    window.jumpToTimestamp = (t) => {
      const time = moment.duration(`00:${t}`).asSeconds();
      playerRef.current.currentTime = time;
      playerRef.current.play()
      setPlaying(true);
    };

    // DOM listeners: update React state on DOM events
    playerRef.current.addEventListener("loadeddata", setAudioData);
    playerRef.current.addEventListener("timeupdate", setAudioTime);


    // effect cleanup
    return () => {
      playerRef.current.removeEventListener("loadeddata", setAudioData);
      playerRef.current.removeEventListener("timeupdate", setAudioTime);
    };

  }, [])


  useEffect(() => {
    playerRef.current.volume = curVolume;
    playerRef.current.playbackRate = curSpeed;

  }, [curSpeed, curVolume])




  const toggleAudio = async () => {
    try {
      playing ? await playerRef.current.pause() : await playerRef.current.play()
      setPlaying(s => !s)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <div className="player">
        <audio id={index} preload="true" ref={playerRef}>
          <source src={mp3} type={"audio/mp3"} />
          Your browser does not support the <code>audio</code> element.
        </audio>

        <div className="controls">
          <PlayButton
            playing={playing}
            curTime={curTime}
            duration={duration}
            toggleAudio={toggleAudio}

          />
          <Bar
            episodeName={episodeName}
            curTime={curTime}
            duration={duration}
            onTimeUpdate={(time) => {
              playerRef.current.currentTime = time
            }}
          />
          <Controls
            setCurSpeed={setCurSpeed}
            curSpeed={curSpeed}
            setCurVolume={setCurVolume}
            curVolume={curVolume}
          />
        </div>
      </div>

    </>
  );
};

export default Audio;