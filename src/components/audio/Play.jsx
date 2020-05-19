import React from "react";
// import { PlayCircleFilled } from "@material-ui/icons";

export default function Play(props) {
  const { handleClick } = props;

  return (
    <button className="player__button" onClick={() => handleClick()}>
      <div style={{color:"white"}}>START</div>
    </button>
  );
}
