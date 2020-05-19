import React from 'react';

function Song(props) {
  const { songName, songArtist } = props;
  
  return (
    <div className="song">
      <h1 className="song__title">{songName}</h1>
      <h2 className="song__artist">{songArtist}</h2>
    </div>
  )
}

export default Song;