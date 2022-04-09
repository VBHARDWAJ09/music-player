import React from 'react';

function PlayerDetails(props) {
  return (
    <div className='c-player--details'>
        <div className="details-img">
            <img src={props.song && props.song.img_src?props.song.img_src:""} alt="" />
        </div>
        <h3 className="details-title">{props.song && props.song.title? props.song.title:""}</h3>
        <h4 className="details-artist">{props.song && props.song.artist? props.song.artist:""}</h4>
    </div>
  )
}

export default PlayerDetails;