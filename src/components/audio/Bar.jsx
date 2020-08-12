import React from "react";
import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";

export default function Bar(props) {
  const { duration, curTime, onTimeUpdate } = props;

  const curPercentage = (curTime / duration) * 100;

  function formatDuration(duration) {
    return moment
      .duration(duration, "seconds")
      .format("mm:ss", { trim: false });
  }

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
    console.log(e,"Eee");
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
    // <div className="bar" >
    //   {/* <span className="bar__time">{formatDuration(curTime)}</span> */}
    //   <div
    //     className="bar__progress"
    //     onMouseDown={e => handleTimeDrag(e)}
    //     style={{
    //       // background: `linear-gradient(to right, orange ${curPercentage}%, white 0)`
    //       // background: `linear-gradient(30deg, #d2ff52 50%, #03fff3 100%)`
    //       width:'${curPercentage}%'
    //     }}
    //     // onMouseDown={e => handleTimeDrag(e)}
    //   >
    //     <span
    //       className="bar__progress__knob"
    //       style={{ left: `${curPercentage - 2}%` }}
    //     />
    //   </div>
    //   {/* <span className="bar__time">{formatDuration(duration)}</span> */}
    // </div>
    <div className="bar" onMouseDown={e => handleTimeDrag(e)}>
    {/* <span className="bar__time">{formatDuration(curTime)}</span> */}
      <div
        className="bar__progress"
        style={{
          // background: `linear-gradient(to right, orange ${curPercentage}%, white 0)`
          // background: `linear-gradient(30deg, #d2ff52 50%, #03fff3 100%)`
          width:`${curPercentage}%`
        }}
        // onMouseDown={e => handleTimeDrag(e)}
      >
        {/* <span
          className="bar__progress__knob"
          style={{ left: `${curPercentage - 2}%` }}
        /> */}
      </div>
      {/* <span className="bar__time">{formatDuration(duration)}</span> */}
    </div>
  );
}
