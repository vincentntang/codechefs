import React from "react";
import playSvg from "../../assets/play.svg";
import pauseSvg from "../../assets/pause.svg";
import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format"; //plugin used on momentJS to give it `format` methods

export const PlayButton = ({
  setPlaying,
  playing,
  curTime,
  duration
}) => {

  return (
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
  );
};

function formatDuration(duration) {
  return moment.duration(duration, "seconds").format("mm:ss", { trim: false });
}
