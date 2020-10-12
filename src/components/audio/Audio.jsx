import React, { useEffect, useMemo, useState } from "react";
import Bar from "./Bar";
import moment from "moment";
import playSvg from "../../assets/play.svg";
import pauseSvg from "../../assets/pause.svg";
import { Controls } from "./Controls";

const Audio = ({ mp3, index, episodeName, episodeHtml }) => {
  // const { curTime, duration, playing, setPlaying, setClickedTime } = useAudioPlayer();
  const [duration, setDuration] = useState();
  const [curTime, setCurTime] = useState();
  const [playing, setPlaying] = useState(false);
  const [clickedTime, setClickedTime] = useState();
  const [curSpeed, setCurSpeed] = useState(1);
  const [curVolume, setCurVolume] = useState(1);
  const playBackRates = [0.75, 1, 1.25, 1.5, 1.75, 2, 2.25, 2.5];

  const changeAudioSpeed = () => {
    const index = playBackRates.indexOf(curSpeed);
    if (index == -1) {
      setCurSpeed(1);
    } else if (index === playBackRates.length - 1) {
      setCurSpeed(playBackRates[0]);
    } else {
      setCurSpeed(playBackRates[index + 1]);
    }
  };

  useEffect(() => {
    // temporary solution from germ
    window.jumpToTimestamp = (t) => {
      const time = moment.duration(`00:${t}`).asSeconds();
      audio.currentTime = time;
      setPlaying(true);
    };
    const audio = document.getElementById(index);

    // state setters wrappers
    const setAudioData = () => {
      setDuration(audio.duration);
      setCurTime(audio.currentTime);
    };

    const setAudioTime = () => setCurTime(audio.currentTime);

    // DOM listeners: update React state on DOM events
    audio.addEventListener("loadeddata", setAudioData);

    audio.addEventListener("timeupdate", setAudioTime);

    audio.volume = curVolume;
    audio.playbackRate = curSpeed;
    playing ? audio.play() : audio.pause();

    if (clickedTime && clickedTime !== curTime) {
      audio.currentTime = clickedTime;
      setClickedTime(null);
    }

    // effect cleanup
    return () => {
      audio.removeEventListener("loadeddata", setAudioData);
      audio.removeEventListener("timeupdate", setAudioTime);
    };
  });

  const regex = /(\d[:])?\d\d[:]\d\d/g;
  // const regex = /\d\d[:]\d\d/g;
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
  // its $& not $1 for whatever reason on capture group
  // let newHtml="yo"
  // let newHtml = episodeHtml.replace(regex, '<span class="timestamp" onClick={jumpToTimestampAudio(\`$&`)}>$&</span>')
  let newHtml = useMemo(
    () =>
      episodeHtml.replace(
        regex,
        '<span class="timestamp" onClick=window.jumpToTimestamp(`$&`)>$&</span>'
      ),
    [episodeHtml]
  );

  console.log("I renrenderd");

  return (
    <>
      <div className="player">
        <audio id={index} preload="true">
          <source src={mp3} />
          Your browser does not support the <code>audio</code> element.
        </audio>

        <div className="controls">
          <div
            className="cc-play p-3 noselect"
            onClick={() => setPlaying(!playing)}
          >
            <div className="cc-play_button">
              <img src={playing ? pauseSvg : playSvg} alt="play button" />
            </div>
            <div className="duration-ratio">
              <span>{formatDuration(curTime)}</span> / {""}
              <span>{formatDuration(duration)}</span>
            </div>
          </div>
          <Bar
            episodeName={episodeName}
            curTime={curTime}
            duration={duration}
            onTimeUpdate={(time) => setClickedTime(time)}
          />
          <Controls
            changeAudioSpeed={changeAudioSpeed}
            curSpeed={curSpeed}
            setCurVolume={setCurVolume}
            curVolume={curVolume}
          />
        </div>
      </div>
      <div
        className="danger-html"
        dangerouslySetInnerHTML={{ __html: newHtml }}
      />
    </>
  );
};

export default Audio;

function formatDuration(duration) {
  return moment.duration(duration, "seconds").format("mm:ss", { trim: false });
}
