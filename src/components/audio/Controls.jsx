import React from "react";

export const Controls = ({
  setCurSpeed,
  curSpeed,
  setCurVolume,
  curVolume,
}) => {
  const volumeLevels = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1];
  const playBackRates = [0.75, 1, 1.25, 1.5, 1.75, 2, 2.25, 2.5];

  const changeAudioSpeed = () => {
    const index = playBackRates.indexOf(curSpeed);
    if (index === -1) {
      setCurSpeed(1);
    } else if (index === playBackRates.length - 1) {
      setCurSpeed(playBackRates[0]);
    } else {
      setCurSpeed(playBackRates[index + 1]);
    }
  };

  return (
    <>
      <div className="cc-speed p-3 noselect" onClick={() => changeAudioSpeed()}>
        <p className="my-0">Speed</p>
        <div className="cc-speed-display">{curSpeed}x</div>
      </div>
      <div className="cc-volume p-3 noselect">
        <p className="my-0">Volume</p>
        <div className="cc-volume-bar-wrapper">
          {volumeLevels.map((volume, index) => {
            return (
              <div
                className={`volume-bar ${
                  index / 10 < curVolume ? "volume-bar-active" : ""
                }`}
                key={index}
                onClick={() => setCurVolume(volume)}
              ></div>
            );
          })}
        </div>
      </div>
    </>
  );
};
