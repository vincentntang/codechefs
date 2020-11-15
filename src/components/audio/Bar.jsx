import React from "react";

export default function Bar(props) {
  const { episodeName,duration, curTime, onTimeUpdate } = props;

  const curPercentage = (curTime / duration) * 100;

  function calcClickedTime(e) {
    const clickPositionInPage = e.pageX;
    const bar = document.querySelector(".bar");
    const barStart = bar.getBoundingClientRect().left + window.scrollX;
    const barWidth = bar.offsetWidth;
    const clickPositionInBar = clickPositionInPage - barStart;
    const timePerPixel = duration / barWidth;
    return timePerPixel * clickPositionInBar;
  }

  function handleTimeDrag(e) {
    // console.log(e,"handle drag");
    onTimeUpdate(calcClickedTime(e));

    const updateTimeOnMove = eMove => {
      onTimeUpdate(calcClickedTime(eMove));
    };

    document.addEventListener("mousemove", updateTimeOnMove);

    document.addEventListener("mouseup", () => {
      document.removeEventListener("mousemove", updateTimeOnMove);
    });
  }

  return (
  
    <div className="bar-wrapper">
      <div className="bar" onMouseDown={e => handleTimeDrag(e)}>
        <div
          className="bar__progress"
          style={{
            width:`${curPercentage}%`
          }}
        >
        </div>
      </div>
      <div className="bar-episode-name">
        {episodeName}
      </div>
    </div>
  );
}
