import React from "react";
// import { PauseCircleFilled } from "@material-ui/icons";

export default function Play(props) {
  const { handleClick } = props;

  return (
    <button className="player__button" onClick={() => handleClick()}>
      {/* <PauseCircleFilled /> */}
      <div style={{ color: "white" }}> PAUSE BUTTON</div>
    </button>
  );
}
